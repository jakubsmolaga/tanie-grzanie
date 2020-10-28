import { writable } from 'svelte/store';

const messageStore = writable(['', '']);

const socket = new WebSocket('wss://dupa.kubasmolaga.pl:8080');

// Connection opened
socket.addEventListener('open', () => console.log("It's open"));

// Listen for messages
socket.addEventListener('message', function (e) {
    messageStore.set([e.data[0], e.data.slice(1)]);
});

export const sendMessage = (type, message) => {
    if (socket.readyState > 1) return console.log('Cant send message while connecting');
    socket.send(`${type}${message}`);
}

export const subscribe = messageStore.subscribe