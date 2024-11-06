---
title: Источник
slug: Glossary/Origin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Источник** веб-содержимого определяется частями {{Glossary("URL")}}, который был использован для доступа к ресурсу: _схема_ (протокол), _имя хоста_ (домен), и _порт_. Два документа имеют одинаковый источник только когда схема, имя хоста и порт полностью совпадают.

Некоторые операции доступны только для одного и того же источника, и это ограничение может быть снято с помощью {{Glossary("CORS")}}.

## Примеры

Источники одинаковы, потому что имеют одинаковую схему (`http`) и имя хоста (`example.com`), а путь к файлу не имеет значения:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Источники одинаковы, потому что сервер по умолчанию отправляет содержимое HTTP через порт 80:

- `http://example.com:80`
- `http://example.com`

Источники не одинаковы, потому что используют разные схемы:

- `http://example.com/app1`
- `https://example.com/app2`

Источники не одинаковы, потому что у них разные имена хостов:

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

Источники не одинаковы, потому что используют разные порты:

- `http://example.com`
- `http://example.com:8080`

## Смотрите также

- [Политика одинакового источника](/ru/docs/Web/Security/Same-origin_policy)
- {{Glossary("Site")}}
- [Спецификация HTML: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)
