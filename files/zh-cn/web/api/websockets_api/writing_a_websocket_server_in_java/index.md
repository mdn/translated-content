---
title: Writing a WebSocket server in Java
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
---

## 引言

你可以通过这个例子知道如何用甲骨文的 Java 语言来创建一个 WebSocket 服务。

虽然其他的服务端语言也能创建 WebSocket 服务，但是通过这个例子你可以看到使用 Java 来做这件事会更简单。

这个服务符合协议[RFC 6455](http://tools.ietf.org/html/rfc6455)，所以它只处理 Chrome 版本 16，Firefox 11，IE 10 及更高版本的连接。

## 第一步

WebSocket 通过[TCP（传输控制协议）](http://en.wikipedia.org/wiki/Transmission_Control_Protocol)通信。Java 的[ServerSocket](http://docs.oracle.com/javase/8/docs/api/java/net/ServerSocket.html) 类位于 java.net 包中。

### ServerSocket

构造器：

`ServerSocket(int port)`

实例化 ServerSocket 类时，它将绑定到 port 参数指定的端口号。

实现代码片段一：

```java
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class WebSocket {
  public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
    ServerSocket server = new ServerSocket(80);
    try {
      System.out.println("Server has started on 127.0.0.1:80.\r\nWaiting for a connection...");
      Socket client = server.accept();
      System.out.println("A client connected.");
```

### Socket

方法：

- `java.net.`[Socket](http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html)`getInputStream()`
  返回这个 Socket 的输入流 InputStream
- `java.net.`[Socket](http://docs.oracle.com/javase/8/docs/api/java/net/Socket.html)`getOutputStream()`
  返回这个 Socket 的输出流 OutputStream

### OutputStream

方法：

`write(byte[] b, int off, int len)`

将从数组`b`中的下标*`off`*开始的*`len`*个字节写入此输出流。

### InputStream

方法：

`int read(byte[] b, int off, int len)`

将输入流中最多 `len` 个字节写入`byte[] b`，写入起始下标为`off`。尝试读取多达 `len` 字节，但可能读取较少数量。以整数形式返回实际读取的字节数。

代码片段二：

```java
InputStream in = client.getInputStream();
      OutputStream out = client.getOutputStream();
      Scanner s = new Scanner(in, "UTF-8");
```

## 握手

当客户端连接到服务器时，它会发送 GET 请求以从简单的 HTTP 请求升级到 WebSocket 的连接。这被称为握手。

```java
try {
  String data = s.useDelimiter("\\r\\n\\r\\n").next();
  Matcher get = Pattern.compile("^GET").matcher(data);
```

创建响应比理解为什么必须以这种方式来创建响应更容易。

你必须：

1. 获取 Sec-WebSocket-Key 请求标头的值，去除头部和尾部的所有空格
2. 追加字符串"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
3. 使用 SHA-1 计算拿到结果值并进行 Base64 编码
4. 将其作为 HTTP 响应的一部分写回 Sec-WebSocket-Accept 响应头的值

```java
if (get.find()) {
          Matcher match = Pattern.compile("Sec-WebSocket-Key: (.*)").matcher(data);
          match.find();
          byte[] response = ("HTTP/1.1 101 Switching Protocols\r\n"
            + "Connection: Upgrade\r\n"
            + "Upgrade: websocket\r\n"
            + "Sec-WebSocket-Accept: "
            + Base64.getEncoder().encodeToString(MessageDigest.getInstance("SHA-1").digest((match.group(1) + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").getBytes("UTF-8")))
            + "\r\n\r\n").getBytes("UTF-8");
          out.write(response, 0, response.length);
```

## 解码消息

握手成功后，客户端可以向服务器发送消息，但现在这些已经过编码的消息需要解码。

如果客户端发送 "abcdef"，我们会拿到这些字节数据：

| 129 | 134 | 167 | 225 | 225 | 210 | 198 | 131 | 130 | 182 | 194 | 135 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

\- 129:

| FIN (消息是完整的吗？) | RSV1 | RSV2 | RSV3 | Opcode   |
| ---------------------- | ---- | ---- | ---- | -------- |
| 1                      | 0    | 0    | 0    | 0x1=0001 |

FIN: 你可以分多次发送一个完整的消息。但现在为了简单，操作码 0x1 表示这是一个完整的消息。 [Full list of Opcodes](http://tools.ietf.org/html/rfc6455#section-5.2)

\- 134:

如果第二个字节减去 128 在 0 到 125 之间，则这是消息的长度。如果是 126，则后面的 2 个字节（16 位无符号整数），如果是 127，则后面的 8 个字节（64 位无符号整数，最高有效位必须为 0）是长度。

> **备注：** 我可以拿 128，因为第一位总是 1。

\- 167, 225, 225 和 210 是要解码的密钥`key`的字节。它每次都在变化。

\- 剩余的编码字节是消息数据部分。

### 解码算法

`decoded[i] = (byte) (encoded[i] ^ key[i & 0x3]);`

Java 例子：

```java
byte[] decoded = new byte[6];
          byte[] encoded = new byte[] { (byte) 198, (byte) 131, (byte) 130, (byte) 182, (byte) 194, (byte) 135 };
          byte[] key = new byte[] { (byte) 167, (byte) 225, (byte) 225, (byte) 210 };
          for (int i = 0; i < encoded.length; i++) {
            decoded[i] = (byte) (encoded[i] ^ key[i & 0x3]);
          }
        }
      } finally {
        s.close();
      }
    } finally {
      server.close();
    }
  }
}
```

## 相关链接

- [Writing WebSocket servers](/zh-CN/docs/WebSockets/Writing_WebSocket_servers)
