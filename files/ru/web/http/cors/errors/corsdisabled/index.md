---
title: "Ошибка: CORS disabled"
slug: Web/HTTP/CORS/Errors/CORSDisabled
---

## Ошибка

```
Ошибка: CORS disabled
```

## Что случилось?

При запросе с использованием {{Glossary("CORS")}}, последний был отключён в браузере пользователя. Чтобы использовать CORS, его необходимо включить.

В браузере Firefox, настройка которая отключает CORS - `content.cors.disable`. Устанавливая данное значение в `true` вы отключаете CORS, поэтому каждый раз при использовании CORS запрос будет отклонён с ошибкой.

## Смотрите также

- [CORS errors](/ru/docs/Web/HTTP/CORS/Errors)
- Глоссарий: {{Glossary("CORS")}}
- [CORS introduction](/ru/docs/Web/HTTP/CORS)
