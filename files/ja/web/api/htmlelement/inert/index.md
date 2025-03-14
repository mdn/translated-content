---
title: "HTMLElement: inert プロパティ"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} の **`inert`** プロパティは、この要素の [`inert`](/ja/docs/Web/HTML/Global_attributes/inert) 属性の値を反映します。論理値で、存在する場合は、フォーカスイベントや支援技術からのイベントを含む、要素に対するユーザーの入力イベントをブラウザーが「無視」するようにします。ブラウザーは、要素でのページ検索やテキスト選択も無視することができます。これは、モーダルのような UI を構築する際に、モーダルが表示されているときにフォーカスをモーダル内に「閉じ込める」場合に便利です。

> [!NOTE]
> 対話要素や重要なコンテンツを `inert` 属性を持つ要素内に入れ子にしてはいけません。不活性コンテンツとその子孫は、すべてのユーザーにとってフォーカスも知覚もできないからです。

## 値

論理値で、その要素が不活性である場合は `true`、それ以外の場合はこの値は `false` になります。

## 例

### HTML

```html
<div>
  <label for="button1">ボタン 1</label>
  <button id="button1">不活性ではありません</button>
</div>
<div inert>
  <label for="button2">ボタン 2</label>
  <button id="button2">不活性です</button>
</div>
```

### CSS

```css
[inert] > * {
  opacity: 0.5;
}
```

### 結果

{{ EmbedLiveSample('Example', 560, 200) }}

> [!NOTE]
> この属性は、それ自体では、ブラウザーに表示されるコンテンツは視覚的変化を与えません。上の例では、inert 属性を持つ要素の直系の子孫が半透明になるように CSS が適用されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [グローバル属性: `inert`](/ja/docs/Web/HTML/Global_attributes/inert)
- {{HTMLElement("dialog")}}
- [inert のポリフィル](https://github.com/WICG/inert)
- {{domxref("HTMLInputElement.disabled", "disabled")}}
