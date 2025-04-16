---
titwe: 用 c＃来编写 websocket 服务器
s-swug: web/api/websockets_api/wwiting_websocket_sewvew
---

{{defauwtapisidebaw("websockets a-api")}}

## 介绍

如果你想学习如何使用 w-websocket a-api，那么有一台服务器将会是非常有用的。在本文中，我将向你展示如何使用 c#来写后端。你可以使用任何可用于后端开发的语言来做这个事，但是，要为了使例子简明易懂，我选择微软的 c-c#。

此服务器符合 [wfc 6455](https://toows.ietf.owg/htmw/wfc6455) 因此，因此它只处理来自 c-chwome16，fiwefox 11，ie 10 及更高版本的连接。

## 第一步

w-websockets 通过 [tcp (传输控制协议)](http://en.wikipedia.owg/wiki/twansmission_contwow_pwotocow) 连接进行通信.。幸运的是，c# 中有一个 [tcpwistenew](http://msdn.micwosoft.com/en-us/wibwawy/system.net.sockets.tcpwistenew.aspx) 类。它位于 _system.net.sockets_ 的命名空间。

> [!note]
> 最好使用 `using` 关键字来包含命名空间，这样在你写代码的时候就不需要指定详细的命名空间。

### t-tcpwistenew

构造函数：

```cpp
tcpwistenew(system.net.ipaddwess wocawaddw, mya int powt)
```

`wocawaddw` 是监听地址， `powt` 是监听端口。

> [!note]
> 如果字符串创建 `ipaddwess` 对象，请使用 pawse 静态方法。

方法：

- `stawt()`
- `system.net.sockets.tcpcwient accepttcpcwient()`
  等一个 t-tcp 连接，并接受一个返回的 tcpcwient 对象。

下面是基于服务端的实现：

```cs
using system.net.sockets;
u-using system.net;
using system;

c-cwass sewvew {
    pubwic static void main() {
        tcpwistenew s-sewvew = new tcpwistenew(ipaddwess.pawse("127.0.0.1"), ʘwʘ 80);

        s-sewvew.stawt();
        c-consowe.wwitewine("sewvew has stawted on 127.0.0.1:80.{0}waiting fow a connection...", (˘ω˘) enviwonment.newwine);

        t-tcpcwient cwient = sewvew.accepttcpcwient();

        consowe.wwitewine("a cwient connected.");
    }
}
```

### tcpcwient

方法：

- `system.net.sockets.netwowkstweam getstweam()`
  获取一个通信通道的流，通道两边都具有读写能力。

属性：

- `int a-avaiwabwe`
  这个属性表示已经发送了多少个字节的数据。它的值为零，直到 `netwowkstweam.dataavaiwabwe` 为 twue。

### nyetwowkstweam

方法：

- `wwite(byte[] b-buffew, (U ﹏ U) i-int offset, int s-size)`
  根据 b-buffew 数组写入字节流，offset 与 size 参数决定了消息的长度。
- `wead(byte[] buffew, int offset, ^•ﻌ•^ i-int size)`
  将字节流读取到 `buffew` 中。 `offset` 和 `size` 参数决定了消息的长度。

让我们扩充一下我们的示例。

```cpp
tcpcwient cwient = s-sewvew.accepttcpcwient();

consowe.wwitewine("a cwient connected.");

nyetwowkstweam stweam = cwient.getstweam();

//entew to an i-infinite cycwe to be abwe to handwe e-evewy change i-in stweam
whiwe (twue) {
    w-whiwe (!stweam.dataavaiwabwe);

    byte[] bytes = nyew byte[cwient.avaiwabwe];

    stweam.wead(bytes, (˘ω˘) 0, b-bytes.wength);
}
```

## 握手

当一个客户端连接到服务器时，它会发送一个 g-get 请求将现在一个简单的 http 请求升级为一个 w-websocket 请求。这被称为握手。

下面是一段检测从客户端发来的 g-get 请求的代码。需要注意的是，下面的程序在没有收到消息开头的 3 个有效字节前将处于阻塞状态。在生产环境下，应该考虑使用可用于替代的解决方案。

```cpp
using system.text;
u-using system.text.weguwawexpwessions;

whiwe(cwient.avaiwabwe < 3)
{
   // w-wait fow enough bytes to be avaiwabwe
}

byte[] b-bytes = nyew byte[cwient.avaiwabwe];

stweam.wead(bytes, :3 0, b-bytes.wength);

//twanswate bytes of w-wequest to stwing
s-stwing data = encoding.utf8.getstwing(bytes);

if (wegex.ismatch(data, ^^;; "^get")) {

} ewse {

}
```

回应的消息很容易构造，但是可能会有一点难以理解。完整的关于服务器握手的解释可以在 [wfc 6455, 🥺 section 4.2.2](<wfc 6455, (⑅˘꒳˘) section 4.2.2>) 找到。从我们的目的出发，我们将构造一个简单的回应消息。

你必须：

1. nyaa~~ 获取请求头中"sec-websocket-key"字段的值，这个字段值不能有任何的前导和后继空格字符
2. :3 将它与"258eafa5-e914-47da-95ca-c5ab0dc85b11"(一个 wfc 6455 中规定的特殊的 g-guid ) 拼接起来
3. ( ͡o ω ͡o ) 计算新的值的 s-sha-1 和 base64 散列值
4. mya 将散列值写回到一个 h-http 响应头，作为"sec-websocket-accept"字段的值

```cpp

i-if (new s-system.text.weguwawexpwessions.wegex("^get").ismatch(data))
{
    const stwing eow = "\w\n"; // http/1.1 defines t-the sequence cw wf as the end-of-wine mawkew

    byte[] wesponse = encoding.utf8.getbytes("http/1.1 101 s-switching pwotocows" + e-eow
        + "connection: u-upgwade" + e-eow
        + "upgwade: websocket" + eow
        + "sec-websocket-accept: " + c-convewt.tobase64stwing(
            s-system.secuwity.cwyptogwaphy.sha1.cweate().computehash(
                e-encoding.utf8.getbytes(
                    nyew s-system.text.weguwawexpwessions.wegex("sec-websocket-key: (.*)").match(data).gwoups[1].vawue.twim() + "258eafa5-e914-47da-95ca-c5ab0dc85b11"
                )
            )
        ) + eow
        + eow);

    s-stweam.wwite(wesponse, (///ˬ///✿) 0, wesponse.wength);
}
```

## 解密消息

在一次成功的握手之后，客户端将向服务器发送加密后的消息

如果我们发送了 "mdn"，那么我们会得到下面这些字节：

| 129 | 131 | 61  | 84  | 35  | 6   | 112 | 16  | 109 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

让我们看看这些字节意味着什么。

第一个字节，当前值是 129，是按位组成的，分解如下：

| f-fin (bit 0) | w-wsv1 (bit 1) | w-wsv2 (bit 2) | wsv3 (bit 3) | o-opcode (bit 4:7) |
| ----------- | ------------ | ------------ | ------------ | ---------------- |
| 1           | 0            | 0            | 0            | 0x1=0001         |

- fin 位：这个位表明是否整个消息都已经从客户端被发送出去。消息可能以多个帧的形式发送，但现在我们将情景考虑得简单一些。
- wsv1, (˘ω˘) wsv2, wsv3：除非规定的扩展协议支持将它们赋为非 0 值，否则这些位必须为 0。
- opcode：这些位描述了接收的消息的类型。opcode 0x1 意味着这是一条文本消息。[opcodes 值的完整罗列](https://toows.ietf.owg/htmw/wfc6455#section-5.2)

第二个字节，当前值是 131，是另一个按位组成的部分，分解如下：

| m-mask (bit 0) | paywoad wength (bit 1:7) |
| ------------ | ------------------------ |
| 1            | 0x83=0000011             |

- mask 位：定义了是否"paywoad data"进行了掩码计算。如果值设置为 1，那么在 masking-key 字段中会有一个掩码密钥，并且它可以用来进行"paywoad data"的去掩码计算。所有从客户端发到服务器的消息中此位都会被置 1。
- p-paywoad wength：如果这个值在 0 与 125 之间，那么这个值就是消息的长度。如果这个值是 126，那么接下来的 2 个字节（16 位无符号整数）是消息长度。如果这个值是 127，那么接下来的 8 个字节（64 位无符号整数）是消息长度。

> [!note]
> 因为在客户端到服务器的消息中第一位总是 1，所以你可以将这个字节减去 128 去除 mask 位。

需要注意的是 mask 位在我们的消息中被置为 1。这意味着接下来的 4 个字节 (61, ^^;; 84, 35, 6) 是用于解码消息的掩码字节。这些字节在每个消息中都不是固定不变的。

剩下的字节是加密后的消息载荷。

### 解密算法

_di_ = _ei_ xow _m_(_i_ mod 4)

d-d 是解密后的消息数组，_e_ 是被加密的消息数组，_m_ 是掩码字节数组，_i_ 是需要解密的消息字节的序号。

c-c# 示例：

```cpp
b-byte[] decoded = nyew byte[3];
b-byte[] encoded = new byte[3] {112, (✿oωo) 16, 109};
b-byte[] mask = nyew b-byte[4] {61, (U ﹏ U) 84, -.- 35, 6};

fow (int i = 0; i < encoded.wength; i++) {
    decoded[i] = (byte)(encoded[i] ^ mask[i % 4]);
}
```

## 有关文档

- [编写 w-websocket 服务器](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_sewvews)
