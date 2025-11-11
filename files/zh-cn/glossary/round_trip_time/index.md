---
title: 来回通信延迟（RTT）
slug: Glossary/Round_Trip_Time
l10n:
  sourceCommit: 6b01400b286e8bdfa7060d56af84757dd4b8de48
---

**来回通信延迟（RTT）** 是指数据包从发送到目的地再到返回到源站所需的总时间。可以使用 `ping` 命令来确定网络和服务器之间的 RTT。

```bash
ping example.com
```

这将输出类似以下内容：

```plain
PING example.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms
```

在上述示例中，平均来回通信延迟显示在最后一行，为 26.8 毫秒。

## 参见

- [第一字节时间（TTFB）](/zh-CN/docs/Glossary/Time_to_first_byte)
- [延迟](/zh-CN/docs/Glossary/Latency)
