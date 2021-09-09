---
title: Time to first byte
slug: Glossary/time_to_first_byte
translation_of: Glossary/time_to_first_byte
original_slug: Глоссарий/time_to_first_byte
---
**Время до первого байта** (англ. Time to First Byte, TTFB) - одна из метрик производительности веб-страниц, которая описывает время, которое прошло с момента отправления браузером запроса страницы до момента, когда он получил первый байт информации с сервера. Это время включает в себя поиск [DNS](/en-US/docs/Glossary/DNS)-сервера и установление соединения с использованием [TCP](/en-US/docs/Glossary/TCP)-рукопожатия и [SSL](/en-US/docs/Glossary/SSL_Glossary)-рукопожатия, если запрос выполняется через [https](/en-US/docs/Glossary/https).

TTFB - время между началом запроса и началом ответа в миллисекундах:

    TTFB = responseStart - requestStart

## Смотрите также

- [A typical HTTP session](/en-US/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/en-US/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/en-US/docs/Web/API/PerformanceTiming)
