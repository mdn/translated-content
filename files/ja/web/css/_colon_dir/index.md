---
title: ":dir()"
slug: Web/CSS/:dir
---

{{CSSRef}}

**`:dir()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、中に含まれる文字列の方向に基づいて要素を選択します。

```css
/* 右から左への文字列がある要素すべてを選択 */
:dir(rtl) {
  background-color: red;
}
```

`:dir()` 擬似クラスは書字方向の意味的な値、つまり、文書自体に設定されているもののみを使用します。スタイルによる書字方向、つまり、 {{cssxref("direction")}} のような CSS プロパティで設定された書字方向には対応しません。

> **メモ:** `:dir()` 擬似クラスは `[dir=…]` [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)と等価ではないことに注意してください。後者は HTML の [`dir`](/ja/docs/Web/HTML/Global_attributes#dir) 属性を選択しますが、これがない要素は、書字方向が親から継承されていても無視します。（同様に、 `[dir=rtl]` と `[dir=ltr]` は `auto` の値に一致しません。）それに対して、 `:dir()` は継承された場合も含め、{{glossary("user agent", "ユーザーエージェント")}}が計算した値で選択します。

> **メモ:** HTML では、書字方向は [`dir`](/ja/docs/Web/HTML/Global_attributes#dir) 属性で指定されます。他の文書型では異なる方法があるかもしれません。

## 構文

`:dir()` 擬似クラスは1つの引数を取り、対象としたい書字方向を指定します。

```
:dir( [ ltr | rtl ] )
```

### 引数

- `ltr`
  - : 書字方向が左書きの要素を対象とします。
- `rtl`
  - : 書字方向が右書きの要素を対象とします。

## 例

### HTML

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">
    test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### CSS

```css
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

### 結果

{{ EmbedLiveSample('Examples') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 言語に関連する擬似クラス: {{cssxref(":lang")}}, {{cssxref(":dir")}}
- HTML の [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) 属性
- HTML の [`translate`](/ja/docs/Web/HTML/Global_attributes#translate) 属性
