---
title: Round Trip Time (RTT)
slug: Glossary/Round_Trip_Time_(RTT)
translation_of: Glossary/Round_Trip_Time_(RTT)
original_slug: Глоссарий/Round_Trip_Time_(RTT)
---
<p><strong>Время приёма-передачи</strong> (англ. Round Trip Time, RTT) - это время, которое требуется для отправки пакета данных в пункт назначения, плюс время, которое требуется для подтверждения того, что этот пакет был получен обратно. RTT между сетью и сервером может быть определён с помощью команды <code>ping</code>.</p>

<div>
<pre class="brush: shell">$ ping google.com
PING google.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms</pre>

<p>В приведённом выше примере среднее время приёма-передачи, как показано в последней строке, равно 26,8 мс.</p>
</div>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Glossary/time_to_first_byte">Time to First Byte (TTFB)</a></li>
 <li><a href="/en-US/docs/Glossary/Latency">Latency</a></li>
</ul>
