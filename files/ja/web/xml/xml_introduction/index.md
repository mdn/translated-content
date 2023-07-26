---
title: XML のイントロダクション
slug: Web/XML/XML_introduction
---

概要: この記事は、'eXtensible Markup Language' (XML、拡張可能マークアップ言語) を紹介し、その使い道について XML は HTML に似たマークアップ言語です。 これは Extensible Markup Language の略で、汎用マークアップ言語として [W3C が推奨する](https://www.w3.org/TR/xml/)仕様です。つまり、他のマークアップ言語とは異なり、XML は事前定義されていないため、独自のタグを定義する必要があります。この言語の主な目的は、インターネットなどのさまざまなシステム間でデータを共有することです。

XML に基づいた言語はたくさんあります。[XHTML](/ja/docs/XHTML)、[MathML](/ja/docs/Web/MathML)、[SVG](/ja/docs/Web/SVG)、[XUL](/ja/docs/Mozilla/Tech/XUL)、[XBL](/ja/docs/XBL)、[RSS](/ja/docs/Archive/RSS)、[RDF](/ja/docs/RDF) などがあります。 あなた自身のものを作ることもできます。

## XML 文書構造

> **警告:** このサブ記事は執筆中です...

XML および XML ベースの言語の全体の構造は {{Glossary("tag")}} に基づいています。

### XML 宣言

XML 宣言はタグではありません。文書の送信メタデータに使用しました。

```
<?xml version="1.0" encoding="UTF-8"?>
```

#### 属性

- version :
  - : この文書で使用されている XML のバージョン
- encoding :
  - : この文書で使用されているエンコーディング。

### コメント

```
<!-- Comment -->
```

## "正しい" XML (妥当であり、整形式であること)

### 正しいデザインルール

XML 文書を正しくするには、次の条件を満たす必要があります。

- 文書は整形式でなければなりません。
- 文書はすべての XML 構文規則に準拠している必要があります。
- 文書は、通常 XML スキーマまたは DTD ([文書型定義](/ja/docs/Glossary/DTD)) で設定されているセマンティックルールに準拠する必要があります。

### 例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!--missing </warning> -->
</message>
```

整形式に適合した正しい例は以下です。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

未定義のタグを含む文書は無効です。たとえば、`<warning>` タグを定義しなかった場合、上記の文書は無効になります。

> **メモ:** ほとんどのブラウザは、形式が不適切な XML 文書を識別できるデバッガを提供しています。

## エンティティ

HTML と同様に、XML には特別な予約文字 (タグに使用される大なり記号など) を参照するための (エンティティと呼ばれる) メソッドがあります。知っておくべきこれらの文字は 5 つあります。

| エンティティ | 文字 | 説明                                    |
| ------------ | ---- | --------------------------------------- |
| \&lt;        | <    | 小なり記号                              |
| \&gt;        | >    | 大なり記号                              |
| \&amp;       | &    | アンパサンド                            |
| \&quot;      | "    | 二重引用符                              |
| \&apos;      | '    | 1 つのアポストロフィ (または単一引用符) |

宣言されたエンティティは 5 つしかありませんが、ドキュメントの [Document Type Definition](/ja/docs/Glossary/DTD) を使用して追加することができます。たとえば、新しい `&warning;` エンティティを作成する場合。このようにして行うことができます：

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

数字参照を使用して特殊文字を指定することもできます。 たとえば、\&#xA9; は "©" 記号です。

## XML の表示

XML は説明のためにたいてい用いられますが、XML データを表示するための方法があります。その方法を定義しなければ、生の XML コードがブラウザに表示されます。

XML ページに見た目を持たせる方法の一つは、`xml-stylesheet` 宣言で [CSS](/ja/docs/Web/CSS) を用いることです。

```
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

XML を表示するもう 1 つのより強力な方法もあります。XSL を HTML などの他の言語に変換するために使用できる Extensible Stylesheet Language Transformation ([XSLT](/ja/docs/Web/XSLT)) です。 これにより、XML は非常に用途が広くなります。

```
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## 推奨

この記事は、XML の概要についてごく簡単に紹介したもので、始めるためのいくつかの小さな例と参照が含まれています。XML の詳細については、Web でもっと詳細な記事を調べてください。

ハイパーテキストマークアップ言語 ([HTML](/ja/docs/Web/HTML)) を学ぶと、XML をよりよく理解するのに役立ちます。

## あわせて参照

- [XML.com](http://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [XML Example: A List Apart](http://www.alistapart.com/d/usingxml/xml_uses_a.html)
- [Using XML: A List Apart](http://www.alistapart.com/articles/usingxml/)

上記の [Using XML](http://www.alistapart.com/articles/usingxml/) の記事は、あなた自身の言語を変換したり作成したりするための情報に関する素晴らしいリソースです。
