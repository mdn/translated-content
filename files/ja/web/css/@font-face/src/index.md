---
title: src
slug: Web/CSS/@font-face/src
---

{{CSSRef}}

**`src`** は CSS における {{cssxref("@font-face")}} ルールの記述子で、フォントデータを含むリソースを指定します。 `@font-face` ルールを有効にするためには必要です。

## 構文

```css
/* <url> 値 */
src: url(https://somewebsite.com/path/to/font.woff); /* 絶対 URL */
src: url(path/to/font.woff); /* 相対 URL */
src: url(path/to/font.woff) format("woff"); /* 明示的な書式 */
src: url("path/to/font.woff"); /* 引用符付きの URL */
src: url(path/to/svgfont.svg#example); /* フラグメントで識別するフォント */

/* <font-face-name> 値 */
src: local(font); /* 引用符なしの名前 */
src: local(some font); /* 空白が入った名前 */
src: local("font"); /* 引用符付きの名前 */

/* 複数の項目 */
src:
  local(font),
  url(path/to/font.svg) format("svg"),
  url(path/to/font.woff) format("woff"),
  url(path/to/font.otf) format("opentype");
```

### 値

- `<url> [ format( <string># ) ]?`
  - : {{cssxref("&lt;url&gt;()")}} と、続けて任意で `format()` 関数で URL で参照するフォントリソースの形式を記述して外部参照を指定します。形式のヒントには、知られているフォント形式を示す書式文字列をカンマで区切ったリストを指定します。ユーザーエージェントが指定した形式に対応していない場合は、フォントリソースをのダウンロードを飛ばします。形式のヒントが指定されていない場合は、フォントリソースはが常にダウンロードされます。
- `<font-face-name>`
  - : `local()` を使用して、ローカルに導入されたフォントフェイスを、より大きなフォントファミリー内で単一のフォントフェイスを一意に識別する名前で指定します。任意で名前を引用符で囲むことができます。

## 解説

値は、外部参照またはローカルにインストールされたフォントフェイス名を、カンマで区切った優先度付きリストです。フォントが必要になった時、{{glossary("user agent", "ユーザーエージェント")}}はリスト上の参照を走査し、アクティブ化に成功した最初の物を使用します。無効なデータを持ったフォントや見つからないローカルのフォントは無視され、ユーザーエージェントはリスト上の次のフォントを読み込みます。

CSS のその他の URL と同様に、相対 URL を使用することができ、この場合は `@font-face` 規則を含むスタイルシートの位置からの相対になります。 SVG フォントの場合、 URL は SVG フォント定義を含む文書内の要素を指します。要素への参照が省略された場合は、参照は最初に定義されたフォントを含みます。同様に、複数のフォントを持つフォントコンテナー形式では、 `@font-face` 規則で指定された一つだけを読み込みます。読み込むフォントを示すためにはフラグメント識別子を使用します。コンテナー形式がフラグメントで識別する方法を持たない場合は、1から始まる添字 (例えば "font-collection#1" が最初のフォント、 "font-collection#2" が二番目のフォント、など) が使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### url() と local() を使用したフォントリソースの指定

```css
/* 通常のフォントフェイス */
@font-face {
  font-family: examplefont;
  src:
    local(Example Font),
    url("examplefont.woff") format("woff"),
    url("examplefont.otf") format("opentype");
}

/* 同じフォントファミリーで太字のフォントフェイス */
@font-face {
  font-family: examplefont;
  src:
    local(Example Font Bold),
    /* 完全なフォント名 */ local(Example Font-Bold),
    /* Postscript 名 */ url("examplefont.woff") format("woff"),
    url("examplefont.otf") format("opentype");
  font-weight: bold;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
