---
title: Round Trip Time (RTT)
slug: Glossary/Round_Trip_Time
---

**Время приёма-передачи** (англ. Round Trip Time, RTT) - это время, которое требуется для отправки пакета данных в пункт назначения, плюс время, которое требуется для подтверждения того, что этот пакет был получен обратно. RTT между сетью и сервером может быть определён с помощью команды `ping`.

```shell
$ ping google.com
PING google.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms
```

В приведённом выше примере среднее время приёма-передачи, как показано в последней строке, равно 26,8 мс.

## Смотрите также

- [Time to First Byte (TTFB)](/ru/docs/Glossary/time_to_first_byte)
- [Latency](/ru/docs/Glossary/Latency)
