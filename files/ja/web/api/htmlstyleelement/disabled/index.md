---
title: "HTMLStyleElement: disabled プロパティ"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLStyleElement.disabled`** プロパティは、このスタイルシートが無効 (`true`) かそうでないか (`false`) を取得または設定するために使用することができます。

なお、対応する `disabled` 属性は [HTML の `<style>` 要素](/ja/docs/Web/HTML/Element/style)にはありません。

## 値

このスタイルシートが無効、または関連付けられたスタイルシートがない場合は `true` を返します。それ以外の場合は `false` を返します。
この値は既定では `false` です（関連付けられたスタイルシートがある場合）。

このプロパティを使用して、関連付けられたスタイルシートを有効または無効にすることができます。
関連付けられたスタイルシートがない場合、このプロパティを `true` に設定しても効果はありません。

## 例

### インラインスタイルを無効化

この例は、[HTML の `<style>` 要素](/ja/docs/Web/HTML/Element/style) を使用して HTML で定義したスタイルに、プログラムから disabled プロパティを設定しています。
また、[`Document.styleSheets`](/ja/docs/Web/API/Document/styleSheets) を使用して、文書内のすべてのスタイルシートにアクセスすることもできます。

#### HTML

この HTML には、段落要素を青くする HTML の [`<style>`](/ja/docs/Web/HTML/Element/style) 要素、段落要素、スタイルを有効/無効にするために使用するボタンが含まれています。

```html
<button>有効化</button>
<style id="InlineStyle">
  p {
    color: blue;
  }
</style>
<p>スタイルが無効の場合、テキストは黒く表示され、有効の場合は青く表示されます。</p>
<p></p>
```

#### JavaScript

下記のコードは `style` 要素の id を使用して取得し、無効として設定しています。
SVG を定義しているスタイルがすでに存在しているので、これは成功するはずです。

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

次に、ボタンのイベントハンドラーを追加して、`disabled` の値とボタンのテキストを切り替えます。

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "有効化" : "無効化";
  button.innerText = buttonText;
});
```

#### 結果

結果は下記のように表示されます。
ボタンを押すと、段落テキストに使用するスタイルの `disabled` プロパティ値が切り替わります。

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### プログラムで定義したスタイルの無効化

この例は上の例ととても似ていますが、スタイルをプログラムで定義している点が異なります。

#### HTML

HTML は前回の場合と似ていますが、定義には既定のスタイルが含まれていません。

```html
<button>有効化</button>
<p>スタイルが無効の場合、テキストは黒く表示され、有効の場合は青く表示されます。</p>
<p></p>
```

#### JavaScript

最初に HTML に新しいスタイル要素を作成します。
これは、最初に [`Document.createElement()`](/ja/docs/Web/API/Document/createElement) を使用してスタイル要素を作成し、スタイル定義のテキストノードを作成して追加し、スタイル要素を文書本体に追加することによって行われます。

```js
// `style` 要素を生成
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

次に、下記のようにスタイル設定を無効にします。
なお、これがプロパティを `true` に設定するのに成功する最も早いタイミングです。
この点より前は文書にスタイルがないので、既定値の `false` になります。

```js
//スタイルの無効化
style.disabled = true;
```

最後に、無効状態とボタンテキストを切り替えるボタン用のイベントハンドラーを追加します（これは前回の例と同じです）。

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "有効化" : "無効化";
  button.innerText = buttonText;
});
```

#### 結果

結果は下記のように表示させます。
ボタンを押すと、テキストに使用するスタイルの `disabled` の状態が切り替わります。

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGStyleElement.disabled")}}
