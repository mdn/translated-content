---
title: overflow-anchor
slug: Web/CSS/Reference/Properties/overflow-anchor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`overflow-anchor`** は [CSS](/ja/docs/Web/CSS) のプロパティで、コンテンツの移動を最小化するためにスクロール位置を調整する、ブラウザーのスクロール固定の動作をオプトアウトする方法を提供します。

スクロール固定の動作は、対応しているすべてのブラウザーで既定で有効になっています。したがって、このプロパティを変更するのは通常、文書または文書の一部でスクロール固定によって操作上の問題が発生し、この動作をオフにする必要がある場合のみです。

{{InteractiveExample("CSS デモ: overflow-anchor")}}

```css interactive-example-choice
overflow-anchor: auto;
```

```css interactive-example-choice
overflow-anchor: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <button id="playback" type="button">抽選を始める</button>
    <p>本日のマジックナンバー:</p>
    <div id="example-element"></div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#example-element {
  height: 100%;
  border: 2px dashed dodgerblue;
  padding: 0.75em;
  text-align: left;
  overflow: scroll;
}

#playback {
  font-size: 1em;
  width: 10em;
  height: 4em;
  font-weight: bold;
  margin: 1em auto;
  background-color: aliceblue;
  border: solid 2px dodgerblue;
  border-radius: 5px;
}

#playback:hover {
  border-color: lightseagreen;
}

#playback:active {
  filter: brightness(0.9);
}
```

```js interactive-example
const example = document.getElementById("example-element");
const button = document.getElementById("playback");
let intervalId;

function setInitialState() {
  example.innerHTML = "";
  Array.from({ length: 10 }, (_, i) => i).forEach(addContent);
  example.scrollTop = example.scrollHeight;
}

function addContent() {
  console.log("adding content");
  const magicNumber = Math.floor(Math.random() * 10000);
  example.insertAdjacentHTML(
    "afterbegin",
    `<div class="new-content-container">新しいマジックナンバー: ${magicNumber}</div>`,
  );
}

button.addEventListener("click", () => {
  if (example.classList.contains("running")) {
    example.classList.remove("running");
    button.textContent = "抽選を始める";
    clearInterval(intervalId);
  } else {
    example.classList.add("running");
    button.textContent = "抽選を止める";
    setInitialState();
    intervalId = setInterval(addContent, 1000);
  }
});
```

## 構文

```css
/* キーワード値 */
overflow-anchor: auto;
overflow-anchor: none;

/* グローバル値 */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### 値

- `auto`
  - : その要素は、スクロール位置を調整するときにアンカー候補になります。
- `none`
  - : その要素はアンカー候補として選択されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スクロール固定を抑止

文書内でスクロール固定を抑止する場合は、 `overflow-anchor` プロパティを使用してください。

```css
* {
  overflow-anchor: none;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [スクロールアンカリングの紹介](/ja/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
- [CSS スクロール固定](/ja/docs/Web/CSS/Guides/Scroll_anchoring)モジュール
