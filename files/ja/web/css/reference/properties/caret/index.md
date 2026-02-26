---
title: caret
slug: Web/CSS/Reference/Properties/caret
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{SeeCompatTable}}

**`caret`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) プロパティで、**挿入キャレット**の外見や動作を単一の宣言で設定します。

{{InteractiveExample("CSS Demo: caret")}}

```css interactive-example-choice
caret: red;
```

```css interactive-example-choice
caret: block manual;
```

```css interactive-example-choice
caret: underscore auto green;
```

```css interactive-example-choice
caret: bar manual orange;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <label for="example-element">テキストフィールドを編集:</label>
    <input id="example-element" type="text" value="サンプルテキスト" />
  </div>
</section>
```

```css interactive-example
div {
  text-align: left;
}

#example-element {
  font-size: 1.2rem;
  padding: 8px;
  width: 300px;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("caret-color")}}
- {{cssxref("caret-animation")}}
- {{cssxref("caret-shape")}}

## 構文

```css
/* 個別の値 */
caret: red; /* caret-color のみ */
caret: block; /* caret-shape のみ */
caret: manual; /* caret-animation のみ */

/* 2 つの値 */
caret: red manual; /* caret-color + caret-animation */
caret: block auto; /* caret-shape + caret-animation */
caret: underscore orange; /* caret-shape + caret-color */

/* 3 つの値 */
caret: bar manual red; /* caret-shape + caret-animation + caret-color */
caret: block auto #00ff00; /* caret-shape + caret-animation + caret-color */

/* グローバル値 */
caret: inherit;
caret: initial;
caret: revert;
caret: revert-layer;
caret: unset;
```

`caret` プロパティは、構成要素のプロパティから 1 つ、2 つ、3 つの値として指定します。値は任意の順序で指定可能で、省略された値は初期値に設定します。

### 値

- {{cssxref("caret-color")}}
  - : キャレットの色を設定します。

- {{cssxref("caret-animation")}}
  - : キャレットが点滅するかどうかを制御します。

- {{cssxref("caret-shape")}}
  - : キャレットの視覚的な形状を設定します。

## 解説

`caret` 一括設定により、挿入位置を示すキャレットのプロパティを単一の宣言で設定することができるため、挿入位置のキャレットの外観と動作を完全に独自のカスタマイズすることができます。

### 値の解決

一括指定で値が除外された場合は、初期値にリセットされます。

- `caret-color`: `auto` （`currentColor` に解決）
- `caret-animation`: `auto` （キャレットが点滅する）
- `caret-shape`: `auto` （ブラウザーが定義した形状）

### 順序の独立

一部の CSS 一括指定とは異なり、`caret` プロパティは値を任意の順序で受け入れます。ブラウザーは値の型に基づいて、どの値がどのプロパティに適用されるかを決定します。

- {{cssxref("&lt;color>")}} の値は `caret-color` に適用されます。
- `auto`/`manual` のキーワードは `caret-animation` に適用されます。
- 形状のキーワード (`bar`, `block`, `underscore`) は `caret-shape` に適用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーションキャレットのあるレトロなターミナル

この例では、`caret` 一括指定を使用して複数のキャレットプロパティを組み合わせ、古いボーダーベースの手法を置き換える方法を示すヴィンテージ風ターミナルインターフェイスを作成します。

`caret` 一括指定の主な利点は、複数のプロパティを 1 つの宣言で組み合わせられることです。ここでは形状を `block` に設定し、デフォルトの点滅を無効化し、色を `green` に設定する、これらすべてを 1 行で実現しています。

#### HTML

```html
<label for="terminal">コマンドを入力</label>
<div class="old-screen">
  <span>></span>
  <textarea id="terminal" class="terminal-input"></textarea>
</div>
```

#### CSS

```css hidden
label {
  background: #092104;
  display: block;
  padding: 10px 20px;
  color: #00ad00;
  font-weight: bold;
  font-family: monospace;
}

.old-screen {
  background: repeating-linear-gradient(
    #092104,
    #092104 2px,
    #123208 2px,
    #123208 4px
  );
  height: 140px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  font-family: monospace;
}

span {
  display: inline-block;
  padding: 2px 5px;
  color: #00ad00;
  font-weight: bold;
  margin-right: 8px;
}

.terminal-input {
  background: transparent;
  height: 100%;
  border: none;
  color: #00ad00;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  resize: none;
}
```

```css
.terminal-input {
  caret: block manual green;
  animation: vintage-caret 2s infinite;
}

@keyframes vintage-caret {
  0%,
  50% {
    caret-color: #00ad00;
  }
  75%,
  100% {
    caret-color: transparent;
  }
}
```

#### 結果

{{EmbedLiveSample('Retro_terminal_with_animated_caret', 550, 215)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("caret-color")}}, {{cssxref("caret-animation")}}, {{cssxref("caret-shape")}}
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュール
