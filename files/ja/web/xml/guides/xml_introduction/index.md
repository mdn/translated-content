---
title: XML 入門
slug: Web/XML/Guides/XML_introduction
original_slug: Web/XML/XML_introduction
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{QuickLinksWithSubpages("/ja/docs/Web/XML")}}

XML (Extensible Markup Language) は {{Glossary("HTML")}} に似たマークアップ言語ですが、使用するタグがあらかじめ定義されていません。代わりに、ニーズに応じて自分自身でタグを定義します。これは、格納、検索、共有が可能な形式でデータを格納するための強力な方法です。最も重要なことは、XML の基本形式が標準化されているため、ローカルまたはインターネットを介して、システムやプラットフォーム間で XML を共有または送信する場合でも、標準化された XML 構文により、受信者はデータを解釈できるということです。

XML に基づいた言語はたくさんあります。[XHTML](/ja/docs/Glossary/XHTML)、[MathML](/ja/docs/Web/MathML)、[SVG](/ja/docs/Web/SVG)、[RSS](/ja/docs/Glossary/RSS)、[RDF](/ja/docs/Glossary/RDF) などがあります。独自のものを定義することもできます。

## XML 文書構造

XML および XML ベースの言語の全体の構造は{{Glossary("tag", "タグ")}}に基づいて構築されています。

### XML 宣言

XML 宣言はタグではありません。文書のメタデータを伝えるために使用します。

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### 属性

- `version`
  - : この文書で使用されている XML のバージョン
- `encoding`
  - : この文書で使用されているエンコーディング。

### コメント

```html
<!-- コメント -->
```

## 「正しい」XML (妥当であり、整形式であること)

### 正しいデザインルール

XML 文書を正しくするには、次の条件を満たす必要があります。

- 文書は整形式でなければなりません。
- 文書はすべての XML 構文ルールに準拠している必要があります。
- 文書は、通常 XML スキーマまたは DTD ([文書型定義](/ja/docs/Glossary/Doctype)) で設定されている意味付けルールに準拠する必要があります。

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

ほとんどのブラウザーは、形式が不適切な XML 文書を識別できるデバッガーを提供しています。

## 文字参照

HTMLと同様に、XML はいくつかの特別な予約文字（タグに使用する大なり記号など）を参照するための{{glossary("character reference", "文字参照")}}を提供しています。知っておくべき文字は 5 つあります。

| エンティティ | 文字 | 説明                                    |
| ------------ | ---- | --------------------------------------- |
| &amp;lt;     | <    | 小なり記号                              |
| &amp;gt;     | >    | 大なり記号                              |
| &amp;amp;    | &    | アンパサンド                            |
| &amp;quot;   | "    | 1 つの二重引用符                        |
| &amp;apos;   | '    | 1 つのアポストロフィ (または単一引用符) |

宣言されたエンティティは 5 つしかありませんが、文書の[文書型宣言](/ja/docs/Glossary/Doctype) を使用して追加することができます。たとえば、新しい `&warning;` エンティティを作成するには、次のようにします。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

数字の文字参照を使用して特殊文字を指定することもできます。 たとえば、\&#xA9; は "©" 記号です。

## XML の表示

XML はふつう、記述のために用いられますが、XML データを表示するための方法があります。その方法を定義しなければ、生の XML コードがブラウザーに表示されます。

XML ページに見た目を持たせる方法の一つは、`xml-stylesheet` 宣言で [CSS](/ja/docs/Web/CSS) を用いることです。

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

XML を表示するもう 1 つのより強力な方法もあります。XSL を HTML などの他の言語に変換するために使用できる Extensible Stylesheet Language Transformation ([XSLT](/ja/docs/Web/XSLT)) です。 これにより、XML は非常に用途が広くなります。

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## 推奨事項

この記事は、XMLとは何かについて、取り掛かるためのいくつかの例とリファレンスを、とても簡単に紹介したに過ぎないことは明らかです。XMLの詳細については、ウェブでより詳細な記事を見ていってください。

ハイパーテキストマークアップ言語 ([HTML](/ja/docs/Web/HTML)) を学ぶと、XML をよりよく理解するのに役立ちます。

## 関連情報

- [XML.com](https://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)
