---
title: Time to first byte
slug: Glossary/time_to_first_byte
translation_of: Glossary/time_to_first_byte
original_slug: Глоссарий/time_to_first_byte
---
<p><strong>Время до первого байта</strong> (англ. Time to First Byte, TTFB) - одна из метрик производительности веб-страниц, которая описывает время, которое прошло с момента отправления браузером запроса страницы до момента, когда он получил первый байт информации с сервера. Это время включает в себя поиск <a href="/en-US/docs/Glossary/DNS">DNS</a>-сервера и установление соединения с использованием <a href="/en-US/docs/Glossary/TCP">TCP</a>-рукопожатия и <a href="/en-US/docs/Glossary/SSL_Glossary">SSL</a>-рукопожатия, если запрос выполняется через <a href="/en-US/docs/Glossary/https">https</a>.</p>

<p>TTFB - время между началом запроса и началом ответа в миллисекундах:</p>

<pre>TTFB = <a href="/en-US/docs/Web/API/PerformanceResourceTiming/responseStart">responseStart</a> - <a href="/en-US/docs/Web/API/PerformanceResourceTiming/requestStart">requestStart</a></pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Session">A typical HTTP session</a></li>
 <li><a href="/en-US/docs/Web/API/PerformanceResourceTiming">PerformanceResourceTiming</a></li>
 <li><a href="/en-US/docs/Web/API/PerformanceTiming">PerformanceTiming</a></li>
</ul>
