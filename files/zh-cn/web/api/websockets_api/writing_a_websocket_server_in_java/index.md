---
title: 用 Java 编写 WebSocket 服务器
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{DefaultAPISidebar("WebSockets API")}}

这个示例展示了如何用甲骨文的 Java 语言来创建 WebSocket API 服务器。

虽然其他的服务端语言也能创建 WebSocket 服务，但是通过这个示例代码你可以看到使用 Java 来做这件事会更简单。

该服务器符合 [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455)，所以它只处理来自 Chrome 16 版本、Firefox 11、IE 10 及更高版本的连接。

## 第一步

WebSocket 通过 [TCP（传输控制协议）](https://zh.wikipedia.org/wiki/传输控制协议)通信。Java 的 [ServerSocket](https://docs.oracle.com/javase/8/docs/api/java/net/ServerSocket.html) 类位于 `java.net` 包中。

### ServerSocket

`ServerSocket` 构造函数接受一个名为 `port` 的 `int` 参数。

当你实例化 ServerSocket 类时，它将绑定到由 _port_ 参数指定的端口号。

以下是分段实现：

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
      System.out.println("服务器已在 127.0.0.1:80 启动。\r\n等待连接...");
      Socket client = server.accept();
      System.out.println("客户端已连接。");
```

### Socket 方法

- `java.net.Socket.getInputStream()`
  - : 返回该 Socket 的输入流。
- `java.net.Socket.getOutputStream()`
  - : 返回该 Socket 的输出流。

### OutputStream 方法

```java
write(byte[] b, int off, int len)
```

将指定字节数组从偏移量 `off` 开始的 `len` 字节写入此输出流。

### InputStream 方法

```java
read(byte[] b, int off, int len)
```

从输入流中读取最多 _len_ 字节的数据到一个字节数组中。

让我们扩展一下示例。

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

创建响应比理解为什么必须以这种方式做要容易得多。

你必须：

1. 获取 _Sec-WebSocket-Key_ 请求标头的值，去除头部和尾部的所有空格
2. 追加字符串“258EAFA5-E914-47DA-95CA-C5AB0DC85B11”
3. 计算 SHA-1 值及其 Base64 编码
4. 将其作为 HTTP 响应的一部分写回 _Sec-WebSocket-Accept_ 响应标头的值

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

如果客户端发送“abcdef”，我们会拿到这些字节数据：

```plain
129 134 167 225 225 210 198 131 130 182 194 135
```

- 129：

  | FIN（消息是完整的吗？） | RSV1 | RSV2 | RSV3 | 操作码   |
  | ----------------------- | ---- | ---- | ---- | -------- |
  | 1                       | 0    | 0    | 0    | 0x1=0001 |

  FIN：你可以分多次发送一个完整的消息。但现在为了简单，操作码 _0x1_ 表示这是文本消息。[完整的操作码列表](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)。

- 134：如果第二个字节减去 128 在 0 到 125 之间，则这是消息的长度。如果是 126，则为后面的 2 个字节（16 位无符号整数）；如果是 127，则为后面的 8 个字节（64 位无符号整数，最高有效位必须为 0）是长度。

  > [!NOTE]
  > 由于第一位始终为 1，因此可以取 128。

- 解码密钥的字节是 167、225、225 和 210。每次都会改变。

- 剩余的编码字节是消息数据部分。

### 解码算法

解码字节 = 编码字节 XOR 密钥的第（编码字节位置 AND 0x3）个字节

在 Java 示例中：

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

## 参见

- [编写 WebSocket 服务器](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
