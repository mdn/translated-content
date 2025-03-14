---
title: 왕복 시간 (Round Trip Time, RTT)
slug: Glossary/Round_Trip_Time
l10n:
  sourceCommit: 6b01400b286e8bdfa7060d56af84757dd4b8de48
---

{{GlossarySidebar}}

**왕복 시간 (Round Trip Time, RTT)** 은 데이터 패킷이 대상으로 전송되는 데 걸리는 시간과 해당 패킷에 대한 승인이 원본에서 다시 수신되는 데 걸리는 시간을 더한 것입니다. 네트워크와 서버 간의 RTT는 `ping` 명령을 사용하여 확인할 수 있습니다.

```bash
ping example.com
```

그러면 아래와 같이 출력됩니다.

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

위의 예제에서, 평균 왕복 시간은 마지막 줄에 26.8ms로 표시됩니다.

## 같이 보기

- [첫 번째 바이트까지의 시간 (Time to First Byte, TTFB)](/ko/docs/Glossary/Time_to_first_byte)
- [지연 시간(Latency)](/ko/docs/Glossary/Latency)
