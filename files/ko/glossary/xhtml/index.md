---
title: XHTML
slug: Glossary/XHTML
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GlossarySidebar}}

**XHTML**은 역사적으로 {{Glossary("XML")}} 구문 규칙을 준수하도록 작성된
[HTML](/ko/docs/Web/HTML)문서를 설명하는 데 사용된 용어입니다.

아래의 예는 HTML 문서와 해당 "XHTML" 문서, 그리고 함께 제공되어야 하는 {{Glossary("HTTP")}} {{HTTPHeader("Content-Type")}} 헤더를 보여줍니다.

### HTML document

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>저는 HTML 문서입니다</p>
  </body>
</html>
```

### XHTML document

```xml
<!-- Content-Type: application/xhtml+xml -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>저는 XHTML 문서입니다</p>
  </body>
</html>
```

실제로, `Content-Type: application/xhtml+xml` 헤더를 사용하여 웹을 통해 제공되는 "XHTML" 문서는 거의 없습니다. 대신, 문서가 XML 구문 규칙을 따르도록 작성되었더라도 `Content-Type: text/html` 헤더와 함께 제공됩니다. 따라서 브라우저는 XML 파서가 아닌 HTML 파서를 사용하여 해당 문서를 구문 분석합니다.

## 같이 보기

- [HTML](/ko/docs/Glossary/HTML)
- [HTML5](/ko/docs/Glossary/HTML5)
- [SVG](/ko/docs/Glossary/SVG)
- [MathML](/ko/docs/Glossary/MathML)
- [XML](/ko/docs/Glossary/XML)
