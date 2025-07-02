---
title: WebSocket API (WebSocket)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: bba3b20fda0f5b9893df4f2226eb95433ac3152f
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

**WebSocket API** 讓使用者瀏覽器與伺服器之間可以開啟雙向互動的通訊會話。使用此 API，你可以傳送訊息到伺服器並接收回應，而無需輪詢伺服器以取得回覆。

WebSocket API 提供了兩種建立和使用 Web Socket 連線的替代機制：{{domxref("WebSocket")}} 介面和 {{domxref("WebSocketStream")}} 介面。

- `WebSocket` 介面穩定，並有良好的瀏覽器和伺服器支援。然而，它不支援[背壓](/zh-TW/docs/Web/API/Streams_API/Concepts#背壓)。因此，當訊息到達的速度快於應用程式處理的速度時，它會透過緩衝這些訊息來填滿裝置的記憶體、因 100% 的 CPU 使用率而變得無回應，或兩者兼而有之。
- `WebSocketStream` 介面是基於 {{jsxref("Promise")}} 的 `WebSocket` 替代方案。它使用 [Streams API](/zh-TW/docs/Web/API/Streams_API) 來處理接收和傳送訊息，這意味著通訊端連線可以自動利用串流背壓，調節讀取或寫入的速度，以避免應用程式中的瓶頸。然而，`WebSocketStream` 是非標準的，目前只有一個繪製引擎支援。

此外，[WebTransport API](/zh-TW/docs/Web/API/WebTransport_API) 預計將在許多應用程式中取代 WebSocket API。WebTransport 是一個多功能、低階的 API，它提供了背壓和許多 `WebSocket` 或 `WebSocketStream` 都不支援的功能，例如單向串流、亂序傳遞，以及透過資料包進行的不可靠資料傳輸。WebTransport 的使用比 WebSockets 更複雜，其跨瀏覽器支援也不那麼廣泛，但它能夠實現複雜的解決方案。如果標準的 WebSocket 連線很適合你的使用案例，並且你需要廣泛的瀏覽器相容性，你應該使用 WebSockets API 來快速上手。然而，如果你的應用程式需要非標準的自訂解決方案，那麼你應該使用 WebTransport API。

> [!NOTE]
> 雖然 WebSocket 連線在功能上與標準的 Unix 風格通訊端有些相似，但它們之間沒有關聯。

## 介面

- [`WebSocket`](/zh-TW/docs/Web/API/WebSocket)
  - : 用於連線到 WebSocket 伺服器，然後在連線上傳送和接收資料的主要介面。
- [`WebSocketStream`](/zh-TW/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : 基於 Promise 的介面，用於連線到 WebSocket 伺服器；使用[串流](/zh-TW/docs/Web/API/Streams_API)在連線上傳送和接收資料。
- [`CloseEvent`](/zh-TW/docs/Web/API/CloseEvent)
  - : 當連線關閉時，由 WebSocket 物件傳送的事件。
- [`MessageEvent`](/zh-TW/docs/Web/API/MessageEvent)
  - : 當從伺服器接收到訊息時，由 WebSocket 物件傳送的事件。

## 相關的 HTTP 標頭

HTTP 標頭用於 [WebSocket 交握](/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_交握)中：

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : 一個 HTTP 請求標頭，包含來自用戶端的 nonce。這在 [WebSocket 開啟交握](/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_交握) 中用來驗證用戶端明確打算開啟一個 WebSocket。它由瀏覽器自動新增。
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : 一個 HTTP {{glossary("response header", "回應標頭")}}，用於 _WebSocket 開啟交握_ 中，表示伺服器願意升級到 WebSocket 連線。指令中的值是根據對應請求中 `Sec-WebSocket-Key` 的值計算出來的。
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : 一個 HTTP 標頭，在請求中表示用戶端所理解的 WebSocket 協定版本。在回應中，只有當伺服器不支援所請求的協定版本時才會傳送此標頭，並列出伺服器支援的版本。
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : 一個 HTTP 標頭，在請求中按偏好順序表示用戶端支援的子協定。在回應中，它表示伺服器從用戶端的偏好中選擇的子協定。
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : 一個 HTTP 標頭，在請求中按偏好順序表示用戶端支援的 WebSocket 擴充功能。在回應中，它表示伺服器從用戶端的偏好中選擇的擴充功能。

## 指南

- [撰寫 WebSocket 用戶端應用程式](/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [撰寫 WebSocket 伺服器](/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [用 C# 撰寫 WebSocket 伺服器](/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [用 Java 撰寫 WebSocket 伺服器](/zh-TW/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [用 JavaScript (Deno) 撰寫 WebSocket 伺服器](/zh-TW/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [使用 WebSocketStream 撰寫用戶端](/zh-TW/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## 工具

- [AsyncAPI](https://www.asyncapi.com/)：一個用於描述基於 WebSocket 等協定的事件驅動架構的規範。你可以用它來描述基於 WebSocket 的 API，就像用 OpenAPI 規範描述 REST API 一樣。了解[為什麼你應該考慮將 AsyncAPI 與 WebSocket 一起使用](https://www.asyncapi.com/blog/websocket-part1)以及[如何做到這一點](https://www.asyncapi.com/blog/websocket-part2)。
- [µWebSockets](https://github.com/uNetworking/uWebSockets)：適用於 [C++11](https://isocpp.org/) 和 [Node.js](https://nodejs.org/) 的高可擴展性 WebSocket 伺服器和用戶端實作。
- [Socket.IO](https://socket.io/)：一個基於長輪詢／WebSocket 的第三方傳輸協定，適用於 [Node.js](https://nodejs.org/)。
- [SocketCluster](https://socketcluster.io/)：一個專注於可擴展性的 pub/sub WebSocket 框架，適用於 [Node.js](https://nodejs.org/)。
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)：一個適用於 [Node.js](https://nodejs.org/) 的 WebSocket 伺服器 API 實作。
- [Total.js](https://www.totaljs.com/)：適用於 [Node.js](https://nodejs.org/en) 的 Web 應用程式框架（範例：[WebSocket 聊天室](https://github.com/totaljs/examples/tree/master/websocket)）
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr)：當 WebSocket 可用時，SignalR 會在底層使用它，當不可用時，它會優雅地降級到其他技術，而你的應用程式碼保持不變。
- [Caddy](https://caddyserver.com/)：一個能夠將任意命令（stdin/stdout）代理為 WebSocket 的 Web 伺服器。
- [ws](https://github.com/websockets/ws)：一個流行的 WebSocket 用戶端和伺服器函式庫，適用於 [Node.js](https://nodejs.org/en)。
- [cowboy](https://github.com/ninenines/cowboy)：Cowboy 是一個小巧、快速且現代的 HTTP 伺服器，適用於 Erlang/OTP，並支援 WebSocket。
- [ZeroMQ](https://zeromq.org/)：ZeroMQ 是一個可嵌入的網路函式庫，可在行程內、IPC、TCP、UDP、TIPC、多播和 WebSocket 之間傳遞訊息。
- [WebSocket King](https://websocketking.com/)：一個用戶端工具，可協助開發、測試和使用 WebSocket 伺服器。
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer)：一個用 PHP 撰寫的伺服器，可透過 websockets `wss://` 或 `ws://` 以及 `ssl://`、`tcp://` 上的普通通訊端來處理連線。
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html)：一個 Django 函式庫，增加了對 WebSockets（以及其他需要長時間非同步連線的協定）的支援。
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html)：在 Elixir Phoenix 框架中使用 WebSocket 實現可擴展的即時通訊。
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view)：在 Elixir Phoenix 框架中透過 WebSocket 實現即時互動的 Web 體驗。
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/)：讓 Flask 應用程式能夠在用戶端和伺服器之間進行低延遲的雙向通訊。
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket)：Gorilla WebSocket 是 WebSocket 協定的 [Go](https://go.dev/) 實作。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [RFC 6455——WebSocket 協定](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API 規範](https://websockets.spec.whatwg.org/)
- [伺服器傳送事件](/zh-TW/docs/Web/API/Server-sent_events)
