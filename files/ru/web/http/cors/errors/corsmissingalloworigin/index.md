---
title: "Причина: отсутствует заголовок CORS «Access-Control-Allow-Origin»"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

## Причина

```plain
Причина: отсутствует заголовок CORS «Access-Control-Allow-Origin»
```

## Почему это произошло?

В ответе на {{Glossary("CORS")}}-запрос отсутствует обязательный заголовок {{HTTPHeader("Access-Control-Allow-Origin")}}, используемый для проверки, может ли ресурс быть доступен для контента с текущего домена.

При наличии доступа к серверу, можно внести домен запрашивающего сайта в список разрешённых, добавив его в значение заголовка `Access-Control-Allow-Origin`.

Например, для предоставления сайту `https://example.com` доступа к ресурсам с использованием CORS, заголовок должен выглядеть так:

```http
Access-Control-Allow-Origin: https://example.com
```

Также можно разрешить доступ к сайту для любого другого сайта, используя подстановку `*`. Этот способ подходит только для публичных API. В закрытых API `*` не должна использоваться, вместо этого должен быть установлен конкретный домен или домены. При этом подстановка работает только для запросов с атрибутом [`crossorigin`](/ru/docs/Web/HTML/Attributes/crossorigin) со значением `anonymous`, это предотвращает отправку в запросах учётных данных, таких как файлы cookie.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Использование подстановки `*` для разрешения всем сайтам доступа к закрытым API — плохая идея по очевидным причинам.

Чтобы разрешить любому сайту делать CORS-запросы _без_ использования подстановки `*` (например, для включения авторизационных данных), сервер должен считывать значение заголовка `Origin` из запроса и использовать это значение, чтобы задать `Access-Control-Allow-Origin`, а также уставить заголовок `Vary: Origin`, чтобы обозначить динамическую установку заголовка в зависимости от источника.

## Примеры для распространенных веб-серверов

Конкретная директива для установки заголовков зависит от используемого сервера.

В **Apache** ([документация](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)) нужно добавить следующую строку в конфигурацию сервера (в соответствующих разделах `<Directory>`, `<Location>`, `<Files>` или `<VirtualHost>`). Конфигурация обычно находится в файле с расширением `.conf` (стандартные названия: `httpd.conf`, `apache.conf`), либо в файле `.htaccess`:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

В **Nginx** ([документация](https://nginx.org/ru/docs/http/ngx_http_headers_module.html#add_header)) для установки этого заголовка используется команда:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Смотрите также

- [Ошибки CORS](/ru/docs/Web/HTTP/CORS/Errors)
- Глоссарий: {{Glossary("CORS")}}
- [Введение в CORS](/ru/docs/Web/HTTP/CORS)
