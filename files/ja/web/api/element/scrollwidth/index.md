---
title: "Element: scrollWidth プロパティ"
short-title: scrollWidth
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

**`scrollWidth`** は {{domxref("Element")}} インターフェイスの読み取り専用プロパティで、オーバーフローしたために画面に表示されない部分を含めた、要素のコンテンツの幅の寸法です。

`scrollWidth` の値は、水平スクロールバーを使用せずにすべてのコンテンツをビューポート内に合わせるために要素が必要とする最小幅に等しくなります。幅は {{domxref("Element.clientWidth", "clientWidth")}} と同じ方法で測定されます。要素のパディングは含みますが、境界線、マージン、垂直スクロールバー（ある場合）は含みません。これには {{cssxref("::before")}} または {{cssxref("::after")}} のような擬似要素の幅を含むことがあります。要素の内容が水平スクロールバーが必要なく合うのであれば、 `scrollWidth` は {{domxref("Element.clientWidth", "clientWidth")}} と等しくなります。

## 値

整数です。

## 例

### コンテンツのオーバーフローの検出

この例では、 `scrollWidth` プロパティを使用して、要素のコンテンツが境界からオーバーフローしているかどうかを確認しています。 2 つの `div` 要素があり、最初の要素の幅は `100px`、 2 つ目の要素には固定幅は設定されていません。 2 つの要素のコンテンツはまったく同じで、それぞれコンテナーからオーバーフローしているかどうかに関するメッセージが表示されます。

#### HTML

```html
<div id="div1">FooBar-FooBar-FooBar-FooBar</div>
<button id="button1">オーバーフローをチェック</button>
<pre id="log1"></pre>
<div id="div2">FooBar-FooBar-FooBar-FooBar</div>
<button id="button2">オーバーフローをチェック</button>
<pre id="log2"></pre>
```

#### CSS

```css
div {
  padding: 0.15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  margin: 0.15em 0 0.5em 0;
}

pre {
  margin: 0.5em 0;
}

#div1 {
  width: 100px;
}

#log1 {
  margin-bottom: 2em;
}
```

#### JavaScript

```js
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const log1 = document.getElementById("log1");
const log2 = document.getElementById("log2");

// scrollWidth が clientWidth より大きいかどうかを調べる
function isOverflowing(element) {
  return element.scrollWidth > element.clientWidth;
}

function checkOverflow(element, log) {
  if (isOverflowing(element)) {
    log.innerText = `コンテンツはオーバーフローしています。 scrollWidth は ${element.scrollWidth}px です`;
  } else {
    log.innerText = `オーバーフローはありません。 scrollWidth は ${element.scrollWidth}px です`;
  }
}

button1.addEventListener("click", () => {
  checkOverflow(div1, log1);
});

button2.addEventListener("click", () => {
  checkOverflow(div2, log2);
});
```

#### 結果

ボタンをクリックして、コンテンツがコンテナーからオーバーフローしていないかどうかを調べます。

{{EmbedLiveSample("detecting_overflowing_content", "100%", "190")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.scrollTop")}}
- {{domxref("Element.getBoundingClientRect()")}}
- {{domxref("Element.scrollTo()")}}
