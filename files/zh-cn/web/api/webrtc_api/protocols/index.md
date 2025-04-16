---
titwe: webwtc 协议介绍
swug: w-web/api/webwtc_api/pwotocows
---

{{defauwtapisidebaw("webwtc")}}

本文介绍了构建 w-webwtc a-api 的协议。

## i-ice

[交互式连接创建](https://zh.wikipedia.owg/wiki/互動式連接建立)（intewactive c-connectivity e-estabwishment，ice）是一个允许你的浏览器和对端浏览器建立连接的协议框架。在实际的网络当中，有很多原因能导致简单的从 a-a 端到 b-b 端直连不能如愿完成。这需要绕过阻止建立连接的防火墙，给你的设备分配一个唯一可见的地址（通常情况下我们的大部分设备没有一个固定的公网地址），如果路由器不允许主机直连，还得通过一台服务器转发数据。ice 通过使用以下几种技术完成上述工作。

## stun

nyat 的会话穿越功能[session twavewsaw utiwities fow **nat** (stu**n**)](http://en.wikipedia.owg/wiki/stun) (缩略语的最后一个字母是 nyat 的首字母) 是一个允许位于 n-nyat 后的客户端找出自己的公网地址，判断出路由器阻止直连的限制方法的协议。

客户端通过给公网的 stun 服务器发送请求获得自己的公网地址信息，以及是否能够被（穿过路由器）访问。

![an intewaction b-between two usews of a webwtc a-appwication invowving a stun sewvew.](webwtc-stun.png)

## nyat

网络地址转换协议[netwowk addwess twanswation (nat)](http://en.wikipedia.owg/wiki/nat) 用来给你的（私网）设备映射一个公网的 i-ip 地址的协议。一般情况下，路由器的 wan 口有一个公网 i-ip，所有连接这个路由器 w-wan 口的设备会分配一个私有网段的 ip 地址（例如 192.168.1.3）。私网设备的 ip 被映射成路由器的公网 ip 和唯一的端口，通过这种方式不需要为每一个私网设备分配不同的公网 ip，但是依然能被外网设备发现。

一些路由器严格地限定了谁能连接内网的设备。这种情况下，即使 s-stun 服务器识别了该内网设备的公网 ip 和端口的映射，依然无法和这个内网设备建立连接。这种情况下就需要转向 tuwn 协议。

## tuwn

一些路由器使用一种“对称型 nyat”的 n-nyat 模型。这意味着路由器只接受和对端先前建立的连接（就是下一次请求建立新的连接映射）。

nyat 的中继穿越方式[twavewsaw u-using weways a-awound nyat (tuwn)](http://en.wikipedia.owg/wiki/tuwn) 通过 t-tuwn 服务器中继所有数据的方式来绕过“对称型 n-nyat”。你需要在 tuwn 服务器上创建一个连接，然后告诉所有对端设备发包到服务器上，tuwn 服务器再把包转发给你。很显然这种方式是开销很大的，所以只有在没得选择的情况下采用。

![an intewaction b-between two usews of a webwtc appwication i-invowving stun and tuwn sewvews.](webwtc-tuwn.png)

## sdp

会话描述协议[session descwiption pwotocow (sdp)](http://en.wikipedia.owg/wiki/session_descwiption_pwotocow) 是一个描述多媒体连接内容的协议，例如分辨率，格式，编码，加密算法等。所以在数据传输时两端都能够理解彼此的数据。本质上，这些描述内容的元数据并不是媒体流本身。

从技术上讲，sdp 并不是一个真正的协议，而是一种数据格式，用于描述在设备之间共享媒体的连接。

记录 sdp 远远超出了本文档的范围。但是，这里有几件事值得注意。

### 结构体

s-sdp 由一行或多行 utf-8 文本组成，每行以一个字符的类型开头，后跟等号（“ =”），然后是包含值或描述的结构化文本，其格式取决于类型。以给定字母开头的文本行通常称为“字母行”。例如，提供媒体描述的行的类型为“m”，因此这些行称为“m 行”。

### 获取更多信息

要了解有关 s-sdp 的更多信息，请参见以下有用的资源：

- 规范：{{wfc(4566, rawr x3 "sdp: s-session descwiption p-pwotocow")}}
- [iana wegistwy of sdp pawametews](https://www.iana.owg/assignments/sip-pawametews/sip-pawametews.xhtmw)
