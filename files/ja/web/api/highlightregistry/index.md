---
title: HighlightRegistry
slug: Web/API/HighlightRegistry
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`HighlightRegistry`** は [CSS カスタムハイライト API](/ja/docs/Web/API/CSS_Custom_Highlight_API) のインターフェイスで、 API を用いて {{domxref("Highlight")}} オブジェクトをスタイル設定するために使用します。
これは {{domxref("CSS.highlights_static", "CSS.highlights")}} からアクセスできます。

`HighlightRegistry` インスタンスは、 [`Map` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#map_風のブラウザー_api)です。各キーはカスタムハイライトの名前文字列であり、対応する値は関連付けられた {{domxref("Highlight")}} オブジェクトです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`HighlightRegistry` インターフェイスには継承したプロパティはありません。_

- {{domxref("HighlightRegistry.size")}} {{ReadOnlyInline}}
  - : 現在登録されている `Highlight` オブジェクトの数を返します。

## インスタンスメソッド

_`HighlightRegistry` インターフェイスには継承したメソッドはありません。_

- {{domxref("HighlightRegistry.clear()")}}
  - : レジストリーからすべての `Highlight` オブジェクトを除去します。
- {{domxref("HighlightRegistry.delete()")}}
  - : レジストリーから名前付き `Highlight` オブジェクトを除去します。
- {{domxref("HighlightRegistry.entries()")}}
  - : レジストリー内のすべての `Highlight` オブジェクトを挿入順に反復処理する新しいイテレーターオブジェクトを返します。
- {{domxref("HighlightRegistry.forEach()")}}
  - : レジストリー内のすべての `Highlight` オブジェクトに対して、指定されたコールバックを挿入順に 1 回ずつ呼び出します。
- {{domxref("HighlightRegistry.get()")}}
  - : レジストリーから名前付き `Highlight` オブジェクトを取得します。
- {{domxref("HighlightRegistry.has()")}}
  - : `Highlight` オブジェクトがレジストリーに存在するか否かを論理値で返します。
- {{domxref("HighlightRegistry.keys()")}}
  - : {{domxref("HighlightRegistry.values()")}} の別名です。
- {{domxref("HighlightRegistry.set()")}}
  - : 指定された `Highlight` オブジェクトを、指定された名前でレジストリーに追加します。レジストリーにすでに同じ名前のオブジェクトが存在する場合、そのオブジェクトを更新します。
- {{domxref("HighlightRegistry.values()")}}
  - : レジストリー内の `Highlight` オブジェクトを挿入順に返す、新しいイテレーターオブジェクトを返します。

## 例

### ハイライトの登録

次の例は、範囲を作成し、その範囲に対して新しい `Highlight` オブジェクトを実体化し、 `HighlightRegistry` を使用してハイライトを登録し、ページ上でスタイルを設定する方法を示しています。

#### HTML

```html
<p id="foo">CSS Custom Highlight API</p>
```

#### CSS

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

#### JavaScript

```js
const text = document.getElementById("foo").firstChild;

if (!CSS.highlights) {
  text.textContent =
    "The CSS Custom Highlight API is not supported in this browser!";
}

// 2 つの範囲を作成する。
const range1 = new Range();
range1.setStart(text, 0);
range1.setEnd(text, 3);

const range2 = new Range();
range2.setStart(text, 21);
range2.setEnd(text, 24);

// これらの範囲に独自のハイライトを作成する。
const highlight = new Highlight(range1, range2);

// 範囲を HighlightRegistry に登録する。
CSS.highlights.set("my-custom-highlight", highlight);
```

#### 結果

{{ EmbedLiveSample("Registering a highlight") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
