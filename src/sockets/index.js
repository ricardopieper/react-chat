import io from "socket.io-client";
import { socketEvents } from "./events";
import { getQueueLength } from "./emit";

export const socket = io('http://localhost:4200');

export const initSockets = ({ setValue }) => {
    socketEvents({ setValue });
    getQueueLength();
};