---
title: MIME-тип
slug: Glossary/MIME_type
---

{{GlossarySidebar}}

**MIME-тип** (называемый "media type", а иногда "content type") - это строка, отправляемая вместе с файлом, которая указывает тип файла. (например, передаваемый аудиофайл может быть помечен как `audio/ogg` тип, а изображение - `image/png`). MIME-тип играет точно такую же роль, как и расширение файла в системе Windows. Когда HTTP-сообщение содержит `Content-type` заголовок, тело запроса будет парситься в соответствии с MIME-типом, указанным в заголовке.

## Узнать больше

### Основная информация

- [Список MIME-типов](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2)

### Технические справки

- [List of MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Properly Configuring Server MIME Types](/ru/docs/Learn/Server-side/Configuring_server_MIME_types)
- Детальная информация об использовании [MIME Types](/ru/docs/Web/HTTP/Guides/MIME_types) в контексте Веб.
