# Real-Time News Broadcasting Service (Spring Boot & WebSocket)

A lightweight backend service built with **Java 21** and **Spring Boot 3** demonstrating full-duplex, bi-directional communication using the **WebSocket** protocol and STOMP messaging.

---

## 🚀 Key Features

* **Full-Duplex Communication:** Real-time bi-directional message transmission using WebSockets.
* **STOMP Protocol Integration:** Structured publish-subscribe messaging pattern for instant broadcast to connected clients.
* **Decoupled Architecture:** Clean separation of configuration, controller routing, and data transfer objects (DTOs).

---

## 🛠️ Tech Stack

* **Language:** Java 21
* **Framework:** Spring Boot 3
* **Protocol:** WebSocket / STOMP
* **Build Tool:** Maven
* **Libraries:** Project Lombok

---

## 📂 Project Structure

```text
src/main/java/
├── WebSocketConfig.java       # WebSocket & STOMP broker configuration
├── MyController.java          # Message routing and broadcast controller
├── News.java                  # Inbound payload model
├── NewsResponse.java          # Broadcast response payload model
└── WebsocketApplication.java   # Application entry point
⚙️ How to Run
Clone the repository:

Bash
git clone [https://github.com/linasaglam/spring-boot-websocket-news.git](https://github.com/linasaglam/spring-boot-websocket-news.git)
Build and run with Maven:

Bash
./mvnw spring-boot:run
(On Windows: mvnw.cmd spring-boot:run)
