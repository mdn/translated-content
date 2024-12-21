---
title: 用 C＃来编写 WebSocket 服务器
slug: Web/API/WebSockets_API/Writing_WebSocket_server
---

{{DefaultAPISidebar("WebSockets API")}}

## 介绍

如果你想学习如何使用 WebSocket API，那么有一台服务器将会是非常有用的。在本文中，我将向你展示如何使用 C#来写后端。你可以使用任何可用于后端开发的语言来做这个事，但是，要为了使例子简明易懂，我选择微软的 C#。

此服务器符合 [RFC 6455](https://tools.ietf.org/html/rfc6455) 因此，因此它只处理来自 Chrome16，Firefox 11，IE 10 及更高版本的连接。

## 第一步

WebSockets 通过 [TCP (传输控制协议)](http://en.wikipedia.org/wiki/Transmission_Control_Protocol) 连接进行通信.。幸运的是，C# 中有一个 [TcpListener](http://msdn.microsoft.com/en-us/library/system.net.sockets.tcplistener.aspx) 类。它位于 _System.Net.Sockets_ 的命名空间。

> [!NOTE]
> 最好使用 `using` 关键字来包含命名空间，这样在你写代码的时候就不需要指定详细的命名空间。

### TcpListener

构造函数：

```cpp
TcpListener(System.Net.IPAddress localaddr, int port)
```

`localaddr` 是监听地址， `port` 是监听端口。

> [!NOTE]
> 如果字符串创建 `IPAddress` 对象，请使用 Parse 静态方法。

方法：

- `Start()`
- `System.Net.Sockets.TcpClient AcceptTcpClient()`
  等一个 Tcp 连接，并接受一个返回的 TcpClient 对象。

下面是基于服务端的实现：

```cs
using System.Net.Sockets;
using System.Net;
using System;

class Server {
    public static void Main() {
        TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

        server.Start();
        Console.WriteLine("Server has started on 127.0.0.1:80.{0}Waiting for a connection...", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("A client connected.");
    }
}
```

### TcpClient

方法：

- `System.Net.Sockets.NetworkStream GetStream()`
  获取一个通信通道的流，通道两边都具有读写能力。

属性：

- `int Available`
  这个属性表示已经发送了多少个字节的数据。它的值为零，直到 `NetworkStream.DataAvailable` 为 true。

### NetworkStream

方法：

- `Write(Byte[] buffer, int offset, int size)`
  根据 buffer 数组写入字节流，offset 与 size 参数决定了消息的长度。
- `Read(Byte[] buffer, int offset, int size)`
  将字节流读取到 `buffer` 中。 `offset` 和 `size` 参数决定了消息的长度。

让我们扩充一下我们的示例。

```cpp
TcpClient client = server.AcceptTcpClient();

Console.WriteLine("A client connected.");

NetworkStream stream = client.GetStream();

//enter to an infinite cycle to be able to handle every change in stream
while (true) {
    while (!stream.DataAvailable);

    Byte[] bytes = new Byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}
```

## 握手

当一个客户端连接到服务器时，它会发送一个 GET 请求将现在一个简单的 HTTP 请求升级为一个 WebSocket 请求。这被称为握手。

下面是一段检测从客户端发来的 GET 请求的代码。需要注意的是，下面的程序在没有收到消息开头的 3 个有效字节前将处于阻塞状态。在生产环境下，应该考虑使用可用于替代的解决方案。

```cpp
using System.Text;
using System.Text.RegularExpressions;

while(client.Available < 3)
{
   // wait for enough bytes to be available
}

Byte[] bytes = new Byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

//translate bytes of request to string
String data = Encoding.UTF8.GetString(bytes);

if (Regex.IsMatch(data, "^GET")) {

} else {

}
```

回应的消息很容易构造，但是可能会有一点难以理解。完整的关于服务器握手的解释可以在 [RFC 6455, section 4.2.2](<RFC 6455, section 4.2.2>) 找到。从我们的目的出发，我们将构造一个简单的回应消息。

你必须：

1. 获取请求头中"Sec-WebSocket-Key"字段的值，这个字段值不能有任何的前导和后继空格字符
2. 将它与"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"(一个 RFC 6455 中规定的特殊的 GUID ) 拼接起来
3. 计算新的值的 SHA-1 和 Base64 哈希值
4. 将哈希值写回到一个 HTTP 响应头，作为"Sec-WebSocket-Accept"字段的值

```cpp

if (new System.Text.RegularExpressions.Regex("^GET").IsMatch(data))
{
    const string eol = "\r\n"; // HTTP/1.1 defines the sequence CR LF as the end-of-line marker

    Byte[] response = Encoding.UTF8.GetBytes("HTTP/1.1 101 Switching Protocols" + eol
        + "Connection: Upgrade" + eol
        + "Upgrade: websocket" + eol
        + "Sec-WebSocket-Accept: " + Convert.ToBase64String(
            System.Security.Cryptography.SHA1.Create().ComputeHash(
                Encoding.UTF8.GetBytes(
                    new System.Text.RegularExpressions.Regex("Sec-WebSocket-Key: (.*)").Match(data).Groups[1].Value.Trim() + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
                )
            )
        ) + eol
        + eol);

    stream.Write(response, 0, response.Length);
}
```

## 解密消息

在一次成功的握手之后，客户端将向服务器发送加密后的消息

如果我们发送了 "MDN"，那么我们会得到下面这些字节：

| 129 | 131 | 61  | 84  | 35  | 6   | 112 | 16  | 109 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

让我们看看这些字节意味着什么。

第一个字节，当前值是 129，是按位组成的，分解如下：

| FIN (Bit 0) | RSV1 (Bit 1) | RSV2 (Bit 2) | RSV3 (Bit 3) | Opcode (Bit 4:7) |
| ----------- | ------------ | ------------ | ------------ | ---------------- |
| 1           | 0            | 0            | 0            | 0x1=0001         |

- FIN 位：这个位表明是否整个消息都已经从客户端被发送出去。消息可能以多个帧的形式发送，但现在我们将情景考虑得简单一些。
- RSV1, RSV2, RSV3：除非规定的扩展协议支持将它们赋为非 0 值，否则这些位必须为 0。
- Opcode：这些位描述了接收的消息的类型。Opcode 0x1 意味着这是一条文本消息。[Opcodes 值的完整罗列](https://tools.ietf.org/html/rfc6455#section-5.2)

第二个字节，当前值是 131，是另一个按位组成的部分，分解如下：

| MASK (Bit 0) | Payload Length (Bit 1:7) |
| ------------ | ------------------------ |
| 1            | 0x83=0000011             |

- MASK 位：定义了是否"Payload data"进行了掩码计算。如果值设置为 1，那么在 Masking-Key 字段中会有一个掩码密钥，并且它可以用来进行"Payload data"的去掩码计算。所有从客户端发到服务器的消息中此位都会被置 1。
- Payload Length：如果这个值在 0 与 125 之间，那么这个值就是消息的长度。如果这个值是 126，那么接下来的 2 个字节（16 位无符号整数）是消息长度。如果这个值是 127，那么接下来的 8 个字节（64 位无符号整数）是消息长度。

> [!NOTE]
> 因为在客户端到服务器的消息中第一位总是 1，所以你可以将这个字节减去 128 去除 MASK 位。

需要注意的是 MASK 位在我们的消息中被置为 1。这意味着接下来的 4 个字节 (61, 84, 35, 6) 是用于解码消息的掩码字节。这些字节在每个消息中都不是固定不变的。

剩下的字节是加密后的消息载荷。

### 解密算法

_Di_ = _Ei_ XOR _M_(_i_ mod 4)

D 是解密后的消息数组，_E_ 是被加密的消息数组，_M_ 是掩码字节数组，_i_ 是需要解密的消息字节的序号。

C# 示例：

```cpp
Byte[] decoded = new Byte[3];
Byte[] encoded = new Byte[3] {112, 16, 109};
Byte[] mask = new Byte[4] {61, 84, 35, 6};

for (int i = 0; i < encoded.Length; i++) {
    decoded[i] = (Byte)(encoded[i] ^ mask[i % 4]);
}
```

## 有关文档

- [编写 WebSocket 服务器](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
