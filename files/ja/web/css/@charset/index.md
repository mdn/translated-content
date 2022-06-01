---
title: '@charset'
slug: Web/CSS/@charset
tags:
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
translation_of: Web/CSS/@charset
---
{{CSSRef}}

**`@charset`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule) で、スタイルシートで使う文字エンコーディングを定義します。このルールはスタイルシートの最初の要素でなければならず、これより前には文字を一切記述してはいけません。[入れ子の文](/ja/docs/CSS/Syntax#nested_statements)でないとしても、[条件付きグループルール](/ja/docs/CSS/At-rule#条件付きグループルール)の中で使うことはできません。複数の `@charset` アットルールが定義されると、最初のものだけが使われます。HTML 要素の `style` 属性や、HTML ページの文字セットが関係している {{ HTMLElement("style") }} 要素の中では使えません。

```css
@charset "utf-8";
```

このアットルールは、非 ASCII 文字を一部の CSS プロパティ、例えば {{cssxref("content")}} などの中で使う際に有用です。

スタイルシートの文字エンコーディングを定義する方法は複数あるので、ブラウザーは次の手順を順番に試します (そして 1 つでも結果が得られると止めます)。

1.  ファイル先頭にある [Unicode バイト順](http://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E9%A0%86%E3%83%9E%E3%83%BC%E3%82%AF)文字 (BOM) の値
2.  `Content-Type:` HTTP ヘッダーの `charset` 属性、またはスタイルシートを送るのに使われたプロトコル内の同等のものから得られた値
3.  CSS の `@charset` アットルール
4.  文書参照で定義されている文字エンコーディングを使用。{{HTMLElement("link")}} 要素の `charset` 属性です。この方式は HTML5 で廃止されており、使うべきではありません。
5.  文書が UTF-8 だと仮定する

## 構文

    @charset "UTF-8";
    @charset "iso-8859-15";

ここで、

- _charset_
  - : 使う文字エンコーディングを意味する {{cssxref("&lt;string&gt;")}} です。[IANA-registry](http://www.iana.org/assignments/character-sets) で定義されているウェブセーフな文字エンコーディングの名前でなければなりません。この名前は必ず 1 文字分の空白文字 (U+0020) の後に続き、二重引用符で囲われ、セミコロン記号で終わる必要があります。もし 1 つのエンコーディングに複数の名前が関連付けられている場合には、使用できるのは *preferred* とマークされているものだけです。

## 形式文法

{{csssyntax}}

## 例

### 有効・無効な文字セットの宣言

```css
@charset "UTF-8";       /* スタイルシートのエンコーディングを Unicode UTF-8 にします*/
@charset 'iso-8859-15'; /* 無効です。正しくない引用符が使用されています */
 @charset "UTF-8";      /* 無効です。アットルールより前に文字（空白）があります */
@charset UTF-8;         /* 無効です。' か " がなく、文字セットは CSS の {{cssxref("&lt;string&gt;")}} ではありません */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 用語集: [文字セット](/ja/docs/Glossary/character_set)
- 用語集: [Unicode](/ja/docs/Glossary/Unicode)
