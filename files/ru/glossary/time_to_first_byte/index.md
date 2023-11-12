---
title: Time to first byte
slug: Glossary/Time_to_first_byte
---

**Время до первого байта** (англ. Time to First Byte, TTFB) - одна из метрик производительности веб-страниц, которая описывает время, которое прошло с момента отправления браузером запроса страницы до момента, когда он получил первый байт информации с сервера. Это время включает в себя поиск [DNS](/ru/docs/Glossary/DNS)-сервера и установление соединения с использованием [TCP](/ru/docs/Glossary/TCP)-рукопожатия и [SSL](/ru/docs/Glossary/SSL_Glossary)-рукопожатия, если запрос выполняется через [https](/ru/docs/Glossary/https).

TTFB - время между началом запроса и началом ответа в миллисекундах:

```
TTFB = responseStart - requestStart
```

## Смотрите также

- [A typical HTTP session](/ru/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/ru/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/ru/docs/Web/API/PerformanceTiming)
