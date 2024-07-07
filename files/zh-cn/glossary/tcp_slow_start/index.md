---
title: TCP 慢开始
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{glossary('TCP')}} 慢开始帮助建立传输速度，使其达到网络的能力。它在不知道这些能力的情况下进行，而且不会造成拥塞。{{glossary('TCP')}} 慢开始是一种用于检测数据包传输可用带宽的算法，它平衡了网络连接的速度。它可以防止出现网络拥塞，而这些拥塞的能力最初是未知的，它会逐渐增加传输的信息量，直到找到网络的最大容量。

要实现 TCP 慢开始，拥塞窗口（_cwnd_）设置了在接收到确认（ACK）之前源可以在网络上传输的数据量的上限。慢开始阈值（_ssthresh_）确定了慢开始的（停止）启动。当建立新连接时，cwnd 被初始化为一个 TCP 数据或确认数据包，并等待确认，或 ACK。当收到该 ACK 时，拥塞窗口会递增，直到 _cwnd_ 小于 _ssthresh_。慢开始还会在遇到拥塞时终止。

## 拥塞控制

拥塞本身是发生在网络层的一种状态，当消息流量太忙，它减慢了网络响应时间。服务器以 TCP 包发送数据，用户的客户端然后通过返回 acknowledgements 或 ack 来确认传输。根据硬件和网络条件，连接的容量是有限的。如果服务器发送太多的数据包太快，它们将被丢弃。意味着，不会有任何确认。服务器将其注册为丢失 ACKs。拥塞控制算法使用发送的数据包和 ack 流来确定发送速率。

## 参见

- [填充页面：浏览器如何工作](/zh-CN/docs/Web/Performance/How_browsers_work)
- [HTTP 概览](/zh-CN/docs/Web/HTTP/Overview)
