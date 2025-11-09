---
title: "カスタムプロパティ (--*): CSS 変数"
slug: Web/CSS/Reference/Properties/--*
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

接頭辞 `--` が付いたプロパティ名、例えば `--example-name` は、*カスタムプロパティ*を表し、 {{cssxref("var", "var()")}} 関数を用いて他の宣言の中で使用することができる値を持ちます。

カスタムプロパティは宣言された要素のスコープになり、カスケードに関連します。そのようなカスタムプロパティの値は、カスケードのアルゴリズムによって決められた宣言から取られます。

{{CSSInfo}}

## 構文

```css
--some-keyword: left;
--some-color: #123456;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : この並びに許可されていないトークンが含まれていない限り、この値は 1 つ以上のトークンの並びに一致します。つまり、有効な宣言がその値として保持できるものすべてを意味します。

> [!NOTE]
> カスタムプロパティ名は大文字・小文字の区別があります。 `--my-color` は `--My-color` とは別なカスタムプロパティとして扱われます。

## 例

### HTML

```html-nolint
<p id="firstParagraph">
  この段落は青色の背景で黄色のテキストとなります。
</p>
<p id="secondParagraph">
  この段落は黄色の背景で青色のテキストとなります。
</p>
<div id="container">
  <p id="thirdParagraph">
    この段落は緑色の背景で黄色のテキストとなります。
  </p>
</div>
```

### CSS

```css
:root {
  --first-color: #1166ff;
  --second-color: #ffff77;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #229900;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### 結果

{{EmbedLiveSample('Example', 500, 130)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("var", "var()")}} 関数
- {{cssxref("@property")}} アットルール
- [CSS カスタムプロパティ（変数）の使用](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)ガイド
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール
