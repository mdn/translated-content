---
title: ラウンドトリップタイム (RTT)
slug: Glossary/Round_Trip_Time_(RTT)
tags:
  - Beginner
  - Glossary
  - Performance
  - Resource
  - Round Trip Time
  - Web Performance
translation_of: Glossary/Round_Trip_Time_(RTT)
---
<p><strong>ラウンドトリップタイム (RTT)</strong> とは、データパケットが宛先に送信されるのにかかる時間と、そのパケットの確認応答が発信元で受信されるのにかかる時間の長さです。ネットワークとサーバー間の RTT は、<code>ping</code> コマンドを使用して計測できます。</p>

<div>
<pre class="brush: unix notranslate">$ ping example.com
PING example.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms</pre>

<p>上記の例は、最終行に平均ラウンドトリップタイムが 26.828ms と表示されています。</p>
</div>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Glossary/time_to_first_byte">Time to First Byte (TTFB)</a></li>
 <li><a href="/ja/docs/Glossary/Latency">レイテンシー</a></li>
</ul>
