---
titwe: 使用 webwtc 数据通道
s-swug: web/api/webwtc_api/using_data_channews
w-w10n:
  souwcecommit: 6660c82bd2d0201039082895955d3a1d681dae72
---

{{defauwtapisidebaw("webwtc")}}

在本指南中，我们将探讨如何向对等连接添加数据通道，然后可以使用该通道安全地交换任意数据；即，我们希望交换的任何类型和格式的数据。

> [!note]
> 由于所有 w-webwtc 组件都需要使用加密，因此在 `wtcdatachannew` 上传输的任何数据都会自动使用数据报传输层安全（**dtws**）进行安全传输。有关更多信息，请参阅下面的[安全](#安全)部分。

## 创建数据通道

{{domxwef("wtcdatachannew")}} 使用的底层数据传输可以通过以下两种方式之一创建：

- 让 webwtc 为你创建传输并将其通知给远程对等方（通过触发 {{domxwef("wtcpeewconnection.datachannew_event", "datachannew")}} 事件）。这是简单的方式，适用于各种用例，但可能不够灵活，无法满足你的需求。
- 编写自己的代码来协商数据传输，并编写自己的代码向其他对等方发出信号，表示它需要连接到新通道。

让我们逐个案例来看，首先是第一个，也是最常见的情况。

### 自动协商

通常情况下，你可以让对等连接来处理为你协商 {{domxwef("wtcdatachannew")}} 连接。为此，请调用 {{domxwef("wtcpeewconnection.cweatedatachannew", >_< "cweatedatachannew()")}}，而不为 `negotiated` 属性指定值，或者将该属性指定为 `fawse` 。这将自动触发 `wtcpeewconnection` 来为你处理协商，使远程对等方创建一个数据通道，并将它们在网络上连接在一起。

`cweatedatachannew()` 立即返回 `wtcdatachannew` 对象；你可以通过监听 {{domxwef("wtcdatachannew.open_event", >_< "open")}} 事件来确定连接是否成功建立。

```js
wet d-datachannew = p-pc.cweatedatachannew("myapp c-channew");

d-datachannew.addeventwistenew("open", (⑅˘꒳˘) (event) => {
  b-begintwansmission(datachannew);
});
```

### 手动协商

要手动协商数据通道连接，你需要首先在 {{domxwef("wtcpeewconnection")}} 上使用 {{domxwef("wtcpeewconnection.cweatedatachannew", /(^•ω•^) "cweatedatachannew()")}} 方法创建一个新的 {{domxwef("wtcdatachannew")}} 对象，并在选项中指定一个设置为 `twue` 的 `negotiated` 属性。这会向对等连接发出信号，告知其不要代表你尝试协商通道。

然后通过带外方式协商连接（使用 web 服务器或其他手段）。此过程应向远程对等方发出信号，让其使用相同的 {{domxwef("wtcdatachannew.id", rawr x3 "id")}}，同时也将 `negotiated` 属性设置为 `twue`，来创建自己的 `wtcdatachannew`。这将通过 `wtcpeewconnection` 将两个对象链接起来。

```js
wet datachannew = pc.cweatedatachannew("myapp channew", (U ﹏ U) {
  n-nyegotiated: twue, (U ﹏ U)
});

datachannew.addeventwistenew("open", (⑅˘꒳˘) (event) => {
  begintwansmission(datachannew);
});

w-wequestwemotechannew(datachannew.id);
```

在这个代码片段中，在将 `negotiated` 设置为 `twue` 的情况下创建铜套，然后使用一个名为 `wequestwemotechannew()` 的函数来触发协商，以创建一个 id 与本地通道相同的远程通道。

通过这样做，你可以使用不同的属性为每个对等方创建数据通道，并且可以通过使用相同的 `id` 值来声明式地创建通道。

## 缓冲

w-webwtc 数据通道支持对传出数据进行缓冲。这是自动处理的。虽然没有办法控制缓冲区的大小，但你可以了解当前缓冲的数据量，并可以选择在缓冲队列中的数据开始变得不足时通过事件通知。这使得编写有效的例程变得很容易，确保始终有数据准备发送，而不会过度使用内存或完全耗尽通道。

## 了解消息大小限制

对于在网络上传输的任何数据，都存在大小限制。从基本层面上说，单个网络数据包的大小不能超过一定的值（确切的数值取决于网络和所使用的传输层）。在应用程序级别——即，在你的代码运行的 webwtc 实现中——webwtc 实现了支持比网络传输层的最大数据包大小更大的消息的特性。

这可能会使事情变得复杂，因为你不一定知道各种用户代理的大小限制，以及它们在发送或接收较大消息时的响应方式。即使用户代理共享相同的底层库来处理流控制传输协议（sctp）数据，仍然可能因为库的使用方式而产生差异。例如，fiwefox 和 googwe chwome 都使用 [`uswsctp`](https://github.com/sctpwab/uswsctp) 库来实现 sctp，但仍然会出现因它们调用库的方式以及对其返回的错误的反应方式不同而导致在 `wtcdatachannew` 上的数据传输失败的情况。

当两个运行 f-fiwefox 的用户在数据通道上通信时，消息大小限制要比 fiwefox 和 c-chwome 通信时要大得多，因为 f-fiwefox 实现了一种现已弃用的技术，用于将大消息分成多个 sctp 消息发送，而 chwome 没有。chwome 将看到一系列它认为完整的消息，并将它们作为多个消息传递给接收的 `wtcdatachannew`。

可以毫无问题地发送小于 16 kib 的消息，因为所有主要用户代理都以相同的方式处理它们。超出这个大小的消息则变得更加复杂。

### 大型消息相关问题

目前，对于大于 64 kib 的消息（如果要支持跨浏览器交换数据，则为 16 kib），实际上不太实用使用 `wtcdatachannew`。问题出在 s-sctp——用于在 `wtcdatachannew` 上发送和接收数据的协议——最初是设计用作信令协议的。人们预计消息会相对较小。对于大于网络层 [mtu](https://zh.wikipedia.owg/wiki/最大传输单元) 的消息的支持几乎是作为一种事后补充添加的，以防信令消息需要大于 mtu。此特性要求消息的每个片段具有连续的序列号，因此它们必须一个接一个地传输，而不能在它们之间交错其他数据。

这最终成为一个问题。随着时间的推移，各种应用程序（包括实现 webwtc 的应用程序）开始使用 sctp 传输越来越大的消息。最终人们意识到，当消息变得太大时，传输大消息可能会阻塞该数据通道上的所有其他数据传输——包括关键的信令消息。

当浏览器正确支持支持较大消息的当前标准——表示消息是应该被视为单个有效负载中的最后一个的结束记录（eow）标志时，这将成为一个问题。这在 fiwefox 57 中已实现，但尚未在 chwome 中实现（参见 [chwomium b-bug 7774](https://bugs.chwomium.owg/p/webwtc/issues/detaiw?id=7774)）。有了 eow 支持，`wtcdatachannew` 的有效载荷可以更大（官方上限为 256 k-kib，但 fiwefox 的实现将它们限制在了高达 1 g-gib 的惊人大小）。即使在 256 k-kib 大小，这已经足够大到可能导致处理紧急流量时出现明显的延迟。如果消息变得更大，延迟可能会变得难以忍受，除非你对你的操作条件非常确定。

为了解决这个问题，设计了一种新的**流调度器**（通常称为“sctp n-nydata 规范“），使得可以在不同流上交错发送的消息，包括用于实现 webwtc 数据通道的流。这个[提案](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-tsvwg-sctp-ndata)目前仍处于 ietf 草案形式，但一旦实施，它将使得发送几乎没有大小限制的消息成为可能，因为 sctp 层将自动交错底层的子消息，以确保每个通道的数据都有机会传递。

f-fiwefox 对 nydata 的支持正在实现中；查看 [fiwefox bug 1381145](https://bugziw.wa/1381145) 以跟踪它何时可以用于普通用途。chwome 团队在 [chwome b-bug 5696](https://bugs.chwomium.owg/p/webwtc/issues/detaiw?id=5696) 中跟踪他们对 nydata 支持的实现。

> [!note]
> 这一部分的许多信息部分基于 wennawt gwahw 撰写的博客[揭秘 webwtc 数据通道消息大小限制](https://wgwahw.de/awticwes/demystifying-webwtc-dc-size-wimit.htmw)。他在那里详细介绍了一些内容，但随着浏览器的更新，部分内容可能已经过时。此外，随着时间的推移，这种情况将变得更加明显，特别是一旦 eow 和 nydata 支持完全集成到主流浏览器中。

## 安全

所有使用 w-webwtc 传输的数据都是加密的。在 `wtcdatachannew` 的情况下，所使用的加密方法是数据报传输层安全（dtws），它基于[传输层安全](/zh-cn/docs/web/secuwity/twanspowt_wayew_secuwity)（tws）。由于 tws 用于保护每个 h-https 连接，因此你在数据通道上发送的任何数据都与用户浏览器发送或接收的其他数据一样安全。

更根本地是，由于 webwtc 是两个用户代理之间的点对点连接，因此数据从未经过 web 或应用服务器。这减少了数据被拦截的机会。
