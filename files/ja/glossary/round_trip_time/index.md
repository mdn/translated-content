---
title: Round Trip Time (ラウンドトリップタイム)
slug: Glossary/Round_Trip_Time
---

**ラウンドトリップタイム (RTT)** とは、データパケットが宛先に送信されるのにかかる時間と、そのパケットの確認応答が発信元で受信されるのにかかる時間の長さです。ネットワークとサーバー間の RTT は、`ping` コマンドを使用して計測できます。

```bash
$ ping example.com
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

上記の例は、最終行に平均ラウンドトリップタイムが 26.8ms と表示されています。

## 関連情報

- [Time to First Byte (TTFB)](/ja/docs/Glossary/time_to_first_byte)
- [レイテンシー](/ja/docs/Glossary/Latency)
