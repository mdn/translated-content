---
title: XHTML
slug: Glossary/XHTML
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

**XHTML** は、[HTML](/ja/docs/Web/HTML) 文書を {{Glossary("XML")}} の構文規則に適合して書かれたものを指すために歴史的に使用されてきた用語です。

次の例では、HTML 文書とそれに対応する "XHTML" 文書、およびそれらとともに配信されるべき {{Glossary("HTTP")}} の {{HTTPHeader("Content-Type")}} ヘッダーを示しています。

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="ja-JP">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>これは HTML 文書です</p>
  </body>
</html>
```

```xml
<!-- Content-Type: application/xhtml+xml -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja-JP">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>これは XHTML 文書です</p>
  </body>
</html>
```

実際には、`Content-Type: application/xhtml+xml` というヘッダーを付けてウェブ上配信される "XHTML" 文書はごくわずかです。その代わりに、たとえ文書が XML の構文規則に準拠して記述されていたとしても、`Content-Type: text/html` というヘッダーを付けて配信されるため、ブラウザーは XML パーサーではなく HTML パーサーを使用してそれらの文書を構文解析します。

## 関連情報

- 関連用語:
  - {{Glossary("HTML")}}
  - {{Glossary("HTML5")}}
  - {{Glossary("SVG")}}
  - {{Glossary("MathML")}}
  - {{Glossary("XML")}}
