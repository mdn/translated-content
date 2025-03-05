---
title: "Element: currentCSSZoom プロパティ"
short-title: currentCSSZoom
slug: Web/API/Element/currentCSSZoom
l10n:
  sourceCommit: e29bc9fed720cb4f8e58c1edf4365cdd61160b16
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`currentCSSZoom`** は {{domxref("Element")}} インターフェイスの読み取り専用プロパティで、要素とそのすべての親要素に適用されている変倍率を考慮した、要素の「実効的な」[CSS `zoom`](/ja/docs/Web/CSS/zoom) を提供します。

値は、要素とそのすべての親の `zoom` の値を掛け合わせることによって計算されます。
例えば、zoom の値が 2、1.5、3 の 3 つの要素が入れ子関係にある場合、最も深く入れ子になっている要素の `currentCSSZoom` の値は 9 になります。
例えば `display: none` が設定されているなど、要素が CSS ボックスを持っていない場合、`currentCSSZoom` は 1 に設定されます。

なお、{{domxref("Element.getBoundingClientRect()")}} のような一部のメソッドは、ビューポートに相対する寸法と位置を返すので、CSS の `zoom` の影響を受けます。
他のプロパティやメソッドは要素自身からの相対値を返しますので、zoom の影響を受けません。
これには、例えば `client*` プロパティ（{{domxref("Element.clientHeight")}} など）、 `scroll*()` メソッド（{{domxref("Element.scroll()")}} など）、`offset*` プロパティ（{{domxref("HTMLElement.offsetHeight")}} など）が含まれます。
`currentCSSZoom` プロパティを使用してこれらの値を変倍することで、zoom の効果を調整することができます。

## 値

要素の実効的な CSS の変倍を示す数値です。要素が描画されない場合は 1 です。

## 例

この例は、 `currentCSSZoom` がどのように計算されるかを示しています。

最初に `<div>` 要素の入れ子構造を定義します。"parent" は変倍されておらず、その内側にある要素 "child1" は `zoom: 2` が適用されており、さらに内側にある要素 "child2" には `zoom: 3` が適用されています。
"child2" 要素は中に 2 つの要素を持ち、そのうちの 1 つは描画されず、どちらにも zoom プロパティがありません。

```html
<div id="parent">
  parent
  <div style="zoom: 2" id="child1">
    child1 (zoom: 2)
    <div style="zoom: 3" id="child2">
      child2 (zoom: 3)
      <div id="child3_rendered">child3_rendered</div>
      <div style="display: none" id="child3_notrendered">
        child3_notrendered
      </div>
    </div>
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 95px;
  overflow: scroll;
  margin: 10px;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

JavaScript コードでは、各レベルで適用された変倍率を `currentCSSZoom` 値とともにログ出力します。

```js
if ("currentCSSZoom" in Element.prototype) {
  const parent = document.querySelector("#parent");
  log(`parent (unzoomed). currentCSSZoom: ${parent.currentCSSZoom}`);
  const child1 = document.querySelector("#child1");
  log(`child1 (zoom: 2). currentCSSZoom: ${child1.currentCSSZoom}`);
  const child2 = document.querySelector("#child2");
  log(`child2 (zoom: 2). currentCSSZoom: ${child2.currentCSSZoom}`);
  const top_child3_rendered = document.querySelector("#child3_rendered");
  log(
    `child3_rendered (unzoomed). currentCSSZoom: ${child3_rendered.currentCSSZoom}`,
  );
  const top_child3_notrendered = document.querySelector("#child3_notrendered");
  log(
    `child3_notrendered (not rendered): ${child3_notrendered.currentCSSZoom}`,
  );
} else {
  log("このブラウザーは Element.currentCSSZoom に対応していません。");
}
```

描画された `<div>` 構造とログ出力は下記の通りです。
最初に、parent、child1、child2 はそれぞれ拡大率 1、2、3 となっており、親テキストのそれぞれ 1、2、6 倍で描画されます。
これはログ出力される `currentCSSZoom` 値に反映されます。

ID `child3_rendered` の `<div>` には `zoom` は設定されていませんが、ログ出力した `currentCSSZoom` の値 6 を継承しています。
最後の `<div>` は描画されていないため、`currentCSSZoom` の値は 1 です。

{{EmbedLiveSample('Examples', '100%', "400px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS `zoom`](/ja/docs/Web/CSS/zoom)
