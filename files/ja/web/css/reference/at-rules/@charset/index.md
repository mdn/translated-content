---
title: CSS `@charset` アットルール
short-title: "@charset"
slug: Web/CSS/Reference/At-rules/@charset
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

**`@charset`** [CSS](/ja/docs/Web/CSS) ルールは、スタイルシートで使う文字エンコーディングを指定します。この構文は、 {{ cssxref("content") }} のように、一部の CSS プロパティで {{Glossary("ASCII")}} 以外の文字を使う場合に便利です。`@charset` の最初の文字は `@` 記号ですが、これは [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules) ではありません。これは、スタイルシートの先頭にのみ置ける特定のバイトシーケンスです。Unicode バイトオーダーマーク以外の文字は、その前に置けません。また、引用符や空白の使い方など、通常の CSS 構文規則にも従いません。

`@charset` が文字セット宣言として認識されない場合は、通常の at-rule として解析されます。 [CSS構文](/ja/docs/Web/CSS/Guides/Syntax) モジュールは、このフォールバック動作を非推奨とし、スタイルシートの文法チェック時に破棄される、認識されないレガシールールとして定義しています。

スタイルシートの文字エンコーディングを定義する方法はいくつかあるため、ブラウザーは以下の方法を、以下の順序で試し、いずれかの方法が見つかり次第処理を止めます。

1. ファイル先頭にある [Unicode バイト順](https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E9%A0%86%E3%83%9E%E3%83%BC%E3%82%AF) 文字 (BOM) の値
2. `Content-Type:` HTTP ヘッダーの `charset` 属性、またはスタイルシートを送るのに使われたプロトコル内の同等のものから得られた値
3. `@charset` CSS 宣言
4. 参照元のドキュメントで定義されている文字エンコーディング、つまり {{ HTMLElement("link") }} 要素の`charset`属性を使う。この方法は非推奨なので、使わないでください
5. 文書が UTF-8 だと仮定する

## 構文

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### パラメータ

- _charset_
  - : 使う文字エンコーディングを意味する {{cssxref("&lt;string&gt;")}} です。[IANA-registry](https://www.iana.org/assignments/character-sets) で定義されているウェブセーフな文字エンコーディングの名前でなければなりません。この名前は必ず 1 文字分の空白文字 (U+0020) の後に続き、二重引用符で囲われ、セミコロン記号で終わる必要があります。もし 1 つのエンコーディングに複数の名前が関連付けられている場合には、使えるのは _preferred_ とマークされているものだけです。

## 形式文法

`@charset` ルールは構文ではなく、以下の形式の特定のバイトシーケンスによって解析されることに気をつけてください。

```plain
@charset "<charset>";
```

## 例

### 有効・無効な文字セットの宣言

```css-nolint example-good
@charset "UTF-8"; /* Unicode UTF-8 にスタイルシートのエンコードを設定 */
```

```css-nolint example-bad
@charset 'iso-8859-15'; /* 無効です。正しくない引用符が使われています */
@charset  "UTF-8"; /* 無効です。空白の数が 2 以上になっています */
 @charset "UTF-8"; /* 無効です。アットルールより前に文字（空白）があります */
@charset UTF-8; /* 無効です。文字セットは CSS の <string> 型であり、二重引用符が必要です。 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 用語集: [文字セット](/ja/docs/Glossary/Character_set)
- 用語集: [Unicode](/ja/docs/Glossary/Unicode)
