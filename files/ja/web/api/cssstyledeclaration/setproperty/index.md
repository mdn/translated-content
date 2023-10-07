---
title: CSSStyleDeclaration.setProperty()
slug: Web/API/CSSStyleDeclaration/setProperty
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

**`CSSStyleDeclaration.setProperty()`** メソッドインターフェイスは、 CSS スタイル宣言オブジェクトのプロパティに新しい値を設定します。

## 構文

```js-nolint
setProperty(propertyName, value)
setProperty(propertyName, value, priority)
```

### 引数

- `propertyName`
  - : 文字列で、変更する CSS プロパティ名（ハイフン区切り）です。
- `value` {{optional_inline}}
  - : 文字列で、新しいプロパティ値が入ります。指定されなかった場合は、空文字列として扱われます。
    > **メモ:** `value` が `"!important"` を含むことはできません。これは `priority` 引数を使用して設定してください。
- `priority` {{optional_inline}}

  - : 文字列で、 CSS の優先度 "important" を設定することができます。指定されなかった場合は、空文字列として扱われます。以下の値を受け付けます。

    - 文字列値 `"important"`
    - キーワード `undefined`
    - 空文字列値 `""`

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NoModificationAllowedError` {{domxref('DOMException')}}
  - : このプロパティまたは宣言ブロックが読み取り専用であった場合。

## 代替手段

`priority` が省略できる場合、JavaScript にはスタイル宣言オブジェクトの CSS プロパティを設定する特別な簡単な構文があります。

```js
style.cssPropertyName = "value";
```

## 例

この例では、 3 つのボタンが用意されており、これらのボタンを押すことで、ボックス段落の境界、背景色、テキスト色をランダムな値に動的に変更することができます (この節の最後にあるライブサンプルを参照)。

変更したいルールは、このページに適用されている 2 つ目のスタイルシートに含まれていることが分かっているので、 [`document.styleSheets[1]`](/ja/docs/Web/API/Document/styleSheets) を使ってその参照を取得します。次に、 [`stylesheet.cssRules`](/ja/docs/Web/API/CSSStyleSheet/cssRules) の配列に含まれている、スタイルシート内のさまざまなルールを反復処理します。それぞれのルールについて、 [`CSSStyleRule.selectorText`](/ja/docs/Web/API/CSSStyleRule/selectorText) プロパティがセレクター `.box p` と等しいかどうかを確認します。

等しい場合、この `CSSStyleRule` オブジェクトへの参照を変数に格納します。次に、 3 つの関数を使って問題のプロパティにランダムな値を生成し、これらの値でルールを更新します。それぞれの場合において、これは `setProperty()` メソッドで行います（`boxParaRule.style.setProperty('border', newBorder);` のように）。

### HTML

```html
<div class="controls">
  <button class="border">Border</button>
  <button class="bgcolor">Background</button>
  <button class="color">Text</button>
</div>
<div class="box">
  <p>Box</p>
</div>
```

### CSS

```css
html {
  background: orange;
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 80%;
  min-width: 500px;
  max-width: 1000px;
  margin: 0 auto;
}

.controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

div button {
  flex: 1;
  margin: 20px;
  height: 30px;
  line-height: 30px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 70px);
}

.box p {
  width: 50%;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  height: 150px;
  line-height: 150px;
  background: red;
  border: 5px solid purple;
  color: white;
  transition: all 1s;
}
```

### JavaScript

```js
const borderBtn = document.querySelector(".border");
const bgColorBtn = document.querySelector(".bgcolor");
const colorBtn = document.querySelector(".color");
const box = document.querySelector(".box");

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

const stylesheet = document.styleSheets[1];
const boxParaRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === ".box p",
);

function setRandomBorder() {
  const newBorder = `${random(1, 50)}px solid ${randomColor()}`;
  boxParaRule.style.setProperty("border", newBorder);
}

function setRandomBgColor() {
  const newBgColor = randomColor();
  boxParaRule.style.setProperty("background-color", newBgColor);
}

function setRandomColor() {
  const newColor = randomColor();
  boxParaRule.style.setProperty("color", newColor);
}

borderBtn.addEventListener("click", setRandomBorder);
bgColorBtn.addEventListener("click", setRandomBgColor);
colorBtn.addEventListener("click", setRandomColor);
```

### 結果

{{EmbedLiveSample('Examples', '100%', 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
