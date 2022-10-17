---
title: XHTML
slug: Web/Guide/HTML/XHTML
---

**XHTML** は、 [HTML](/ja/docs/Web/HTML) 文書のうち {{Glossary("XML")}} の構文規則に適合して書かれたものを指すために歴史的に使用されてきた用語です。

以下の例では HTML 文書とそれに対応する "XHTML" 文書、それにともに提供される適切な {{Glossary("HTTP")}} の {{HTTPHeader("Content-Type")}} ヘッダーを示しています。

### HTML 文書

```html
Content-Type: text/html

<!DOCTYPE html>
<html lang=ja>
  <head>
    <meta charset=utf-8>
    <title>HTML</title>
  </head>
  <body>
    <p>これは HTML 文書です</p>
  </body>
</html>
```

### XHTML 文書

```xml
Content-Type: application/xhtml+xml

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>これは XHTML 文書です</p>
  </body>
</html>
```

慣習として、 "XHTML" 文書が `Content-Type: application/xhtml+xml` ヘッダーを伴ってウェブに提供される例はわずかしかありませんでした。代わりに、 XML 構文規則に合うように書かれた文書であっても、 `Content-Type: text/html` ヘッダーを付けて提供されていました。 — 従って、ブラウザーは XML パーサーではなく HTML パーサーを用いて文書を解析しており、様々な時に驚くような問題を発生させていました。以下の記事に問題の詳細が記述されています。

- [Beware of XHTML](http://www.webdevout.net/articles/beware-of-xhtml) by David Hammond
- [Sending XHTML as text/html Considered Harmful](http://www.hixie.ch/advocacy/xhtml) by Ian Hickson
- [XHTML's Dirty Little Secret](http://www.xml.com/pub/a/2003/03/19/dive-into-xml.html) by Mark Pilgrim
- [XHTML - What's the Point?](http://hsivonen.iki.fi/xhtml-the-point/) by Henri Sivonen
- [XHTML is not for Beginners](http://lachy.id.au/log/2005/12/xhtml-beginners) by Lachlan Hunt
