---
title: CSSStyleDeclaration.setProperty()
slug: Web/API/CSSStyleDeclaration/setProperty
---

{{ APIRef("CSSOM") }}

**`CSSStyleDeclaration.setProperty()`** メソッドインターフェイスは、 CSS スタイル宣言オブジェクトのプロパティに新しい値を設定します。

## 構文

```js
style.setProperty(propertyName, value, priority);
```

### 引数

- _`propertyName`_ は {{domxref('DOMString')}} で、変更する CSS プロパティ名 (ハイフン区切り) です。
- _`value`_ {{optional_inline}} は
  {{domxref('DOMString')}} で、新しいプロパティ値が入ります。指定されなかった場合は、空文字列として扱われます。

  - 注: _`value`_ は `"!important"` を含んではいけません。 --
    これは _`priority`_ 引数を使用して設定してください。

- _`priority`_ {{optional_inline}} は
  {{domxref('DOMString')}} で、 CSS の優先度 "important" を設定することができます。指定されなかった場合は、空文字列として扱われます。以下の値を受け付けます。

  - 文字列値 `"important"`
  - キーワード `undefined`
  - 空文字列値 `""`

### 返値

- {{jsxref('undefined')}}

### 例外

- {{domxref('DOMException')}} (NoModificationAllowedError): このプロパティまたは宣言ブロックが読み取り専用であった場合。

_`priority`_ が省略できる場合、 JavaScript にはスタイル宣言オブジェクトの CSS プロパティの設定に特別な簡単な構文があります。

```js
style.cssPropertyName = 'value';
```

## 例

この例では、 3 つのボタンが用意されており、これらのボタンを押すことで、ボックス段落の境界、背景色、テキスト色をランダムな値に動的に変更することができます (この節の最後にあるライブサンプルを参照)。

変更したい規則は、このページに適用されている 2 つ目のスタイルシートに含まれていることが分かっているので、 [`document.styleSheets[1]`](/ja/docs/Web/API/Document/styleSheetSets) を使ってその参照を取得します。次に、 [`stylesheet.cssRules`](/ja/docs/Web/API/CSSStyleSheet/cssRules) の配列に含まれている、スタイルシート内のさまざまな規則を反復処理します。それぞれの規則について、 [`CSSStyleRule.selectorText`](/ja/docs/Web/API/CSSStyleRule/selectorText) プロパティがセレクター `.box p` と等しいかどうかを確認します。

等しい場合、この `CSSStyleRule` オブジェクトへの参照を変数に格納します。次に、 3 つの関数を使って問題のプロパティにランダムな値を生成し、これらの値で規則を更新します。それぞれの場合において、これは `setProperty()` メソッドで行います (`boxParaRule.style.setProperty('border', newBorder);` のように)。

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
const borderBtn = document.querySelector('.border');
const bgColorBtn = document.querySelector('.bgcolor');
const colorBtn = document.querySelector('.color');
const box = document.querySelector('.box');

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function randomColor() {
  return 'rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
}

const stylesheet = document.styleSheets[1];
let boxParaRule;

for(let i = 0; i < stylesheet.cssRules.length; i++) {
  if(stylesheet.cssRules[i].selectorText === '.box p') {
    boxParaRule = stylesheet.cssRules[i];
  }
}

function setRandomBorder() {
  const newBorder = random(1, 50) + 'px solid ' + randomColor();
  boxParaRule.style.setProperty('border', newBorder);
}

function setRandomBgColor() {
  const newBgColor = randomColor();
  boxParaRule.style.setProperty('background-color', newBgColor);
}

function setRandomColor() {
  const newColor = randomColor();
  boxParaRule.style.setProperty('color', newColor);
}

borderBtn.addEventListener('click', setRandomBorder);
bgColorBtn.addEventListener('click', setRandomBgColor);
colorBtn.addEventListener('click', setRandomColor);
```

### 結果

{{EmbedLiveSample('Examples', '100%', 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
