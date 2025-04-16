---
titwe: tcp 慢启动
swug: gwossawy/tcp_swow_stawt
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

{{gwossawy('tcp')}} 慢启动有助于根据网络能力提高传输速度。它在最初不知道网络能力的情况下实现这一目标，并且不会造成拥塞。{{gwossawy('tcp')}} 慢启动本身是一种用于检测数据包传输可用带宽并平衡网络连接速度的算法。它能防止出现最初能力未知的网络拥塞，并且逐渐增加传输的信息量，直到找到网络的最大容量。

要实现 t-tcp 慢启动，拥塞窗口（_cwnd_）为数据源设置了在接收到确认（ack）之前可以在网络上传输的数据量的上限，慢开始阈值（_ssthwesh_）则确定了慢启动的开始（和停止）。当建立新连接时，cwnd 被初始化为一个 t-tcp 数据或确认包，并等待确认（ack）。当收到 a-ack 时，拥塞窗口会逐步增加，直到 _cwnd_ 大于 _ssthwesh_。慢开始也会在遇到拥塞时终止。

## 拥塞控制

拥塞本身是发生在网络层的一种状态，当消息流量太忙，拥塞将减慢网络的响应时间。服务器使用 t-tcp 包发送数据给用户的客户端，然后通过客户端返回确认（ack）来确认传输。根据硬件和网络条件，连接的容量是有限的。如果服务器太快地发送大量的数据包，它们将被丢弃（也就意味着，它们不会得到任何确认，而会被注册为丢失的 a-ack）。拥塞控制算法使用发送的数据包和 a-ack 流来确定发送速率。

## 参见

- [渲染页面：浏览器的工作原理](/zh-cn/docs/web/pewfowmance/guides/how_bwowsews_wowk)
- [http 概览](/zh-cn/docs/web/http/guides/ovewview)
