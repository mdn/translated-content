---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
---

{{HTTPSidebar}}

Заголовок ответа HTTP **`X-XSS-Protection`** это особенность Internet Explorer, Chrome и Safari, которая останавливает загрузку страниц при обнаружении ({{Glossary("XSS")}}) атаки. Хотя эти меры защиты не требуются в большинстве случаев для современных браузеров, когда сайты внедряют сильную политику безопасности контента {{HTTPHeader("Content-Security-Policy")}}, которая отключает использование встроенного JavaScript (`'unsafe-inline'`), они могут обеспечить защиту для пользователей, использующих устаревшие версии браузеров, не поддерживающих {{Glossary("CSP")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        <p>Запрещённое имя заголовка</p>
        <p>{{Glossary("Forbidden header name")}}</p>
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : Отключает фильтрацию XSS.
- 1
  - : Включает фильтрацию XSS (по умолчанию в браузерах). Если будет замечена попытка межсайтового скриптинга(XSS), браузер удалит небезопасное содержимое.
- 1; mode=block
  - : Включает фильтрацию XSS. Вместо того, чтобы очищать содержимое страницы, браузер предотвратит отображение страницы, если заметит атаку.
- 1; report=\<reporting-URI> (Chromium only)
  - : Включает фильтрацию XSS. При обнаружении атаки межсайтового скриптинга, браузер очистит страницу от небезопасного содержимого и сообщит о нарушении. Для отправки отчёта используется функциональные возможности директивы CSP {{CSP("report-uri")}}.

## Пример

Блокировка загрузки страницы, при обнаружении отражённой (непостоянной) XSS:

```bash
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```bash
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

## Спецификации

Не является частью каких-либо специфика или черновиков.

## Поддерживается браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/blog/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](http://blog.innerht.ml/the-misunderstood-x-xss-protection/)
