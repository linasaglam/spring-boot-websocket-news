const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/mywebsocket'
});

stompClient.onConnect = (frame) => {

    console.log("WEBSOCKET CONNECTED");
    console.log(frame);

    stompClient.subscribe('/topic/newsfeed', (message) => {

        console.log("MESSAGE RECEIVED:", message.body);

        $("#greetings").append(
            "<tr><td>" +
            JSON.parse(message.body).content +
            "</td></tr>"
        );
    });
};

stompClient.onWebSocketError = (error) => {
    console.error("WEBSOCKET ERROR:", error);
};

stompClient.onStompError = (frame) => {
    console.error("STOMP ERROR:", frame);
};

function connect() {
    console.log("CONNECT BUTTON CLICKED");
    stompClient.activate();
}

function disconnect() {
    console.log("DISCONNECT BUTTON CLICKED");
    stompClient.deactivate();
}

function sendNews() {

    console.log("SEND BUTTON CLICKED");

    stompClient.publish({
        destination: "/app/news",
        body: JSON.stringify({
            text: $("#news").val()
        })
    });
}

$(function () {

    console.log("APP.JS LOADED");

    $("#connect").click(() => connect());

    $("#disconnect").click(() => disconnect());

    $("#send").click(() => sendNews());
});