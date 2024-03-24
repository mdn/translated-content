---
title: "Причина: CORS заголовок 'Access-Control-Allow-Origin' не соответствует 'xyz'"
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
---

{{HTTPSidebar}}

## Reason

```
Причина: CORS заголовок 'Access-Control-Allow-Origin' не соответствует 'xyz'
```

## Что пошло не так?

Проще говоря, источник делает запрос который не совпадает ни с одним из источников разрешённых заголовком - {{HTTPHeader("Access-Control-Allow-Origin")}}.

Эта ошибка также может произойти, если ответ содержит более одного заголовка `Access-Control-Allow-Origin`.

Если сервис, к которому ваш код обращается с помощью CORS запроса находится под вашим контролем, убедитесь что он настроен для включения в себя вашего источника в заголовке `Access-Control-Allow-Origin` и что в ответах от сервера присутствует только один такой заголовок. Заголовок принимает список источников, поэтому указать новый источник совсем не сложно.

К примеру, в Apache, вы можете добавить следующую строку в конфигурацию веб-сервера (в пределах одной из секций - `<Directory>`, `<Location>`, `<Files>` или `<VirtualHost>`). Обычно конфигурация находиться в файле `.conf` (наиболее частые имена для него - `httpd.conf` и `apache.conf`) или в файле `.htaccess`.

```
Header set Access-Control-Allow-Origin 'origin-list'
```

В Nginx, для установки такого заголовка можно воспользоваться следующей командой:

```
add_header 'Access-Control-Allow-Origin' 'origin-list'
```

## See also

- [CORS errors](/ru/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/ru/docs/Web/HTTP/CORS)
- [Enable CORS: I want to add CORS support to my server](https://enable-cors.org/server.html)
