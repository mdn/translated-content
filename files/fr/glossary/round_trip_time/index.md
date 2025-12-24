---
title: Round Trip Time (RTT)
slug: Glossary/Round_Trip_Time
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Le **temps de trajet aller-retour** (**<abbr>RTT</abbr>** pour <i lang="en">Round Trip Time</i> en anglais) correspond au temps nécessaire pour qu'un paquet de données soit envoyé à une destination, plus le temps nécessaire pour qu'un accusé de réception de ce paquet soit reçu à l'origine. Le RTT entre un réseau et un serveur peut être déterminé à l'aide de la commande `ping`.

```bash
ping exemple.com
```

Ceci affichera quelque chose comme&nbsp;:

```plain
PING exemple.com (15.197.225.128): 32 data bytes
64 bytes from 15.197.225.128: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 15.197.225.128: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 15.197.225.128: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 15.197.225.128: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 15.197.225.128: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms
```

Dans l'exemple ci-dessus, le temps de trajet aller-retour moyen est indiqué sur la dernière ligne comme étant de 26,8 ms.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Time to First Byte", "Temps jusqu'au premier octet")}} (TTFB)
  - {{Glossary("Latency", "Latence")}}
