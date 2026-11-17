---
title: "HTMLElement: inert プロパティ"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: 3ff38e7687b65e43fe821a904ff52778312b8d36
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} の **`inert`** プロパティは、この要素の [`inert`](/ja/docs/Web/HTML/Reference/Global_attributes/inert) 属性の値を反映します。これは論理値です。属性が存在する場合、ブラウザーはフォーカスイベントや支援技術からのイベントなど、この要素に対するユーザーの入力イベントを「無視」します。ブラウザーは、この要素でのページ検索やテキスト選択も無視することがあります。これは、モーダルのような UI を構築する際、モーダルの表示中にフォーカスをモーダル内に「閉じ込める」場合に便利です。

なお、`inert` 属性が指定されていない場合でも、要素自体は親要素から不活性状態を継承することがあります。ただし、この継承された不活性状態は、このプロパティの値には反映されません。プロパティを明示的に `false` に設定しても、親要素から継承した不活性状態を解除することはできません。

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

{{ EmbedLiveSample('Examples', 560, 200) }}

> [!NOTE]
> この属性だけでは、ブラウザーに表示されるコンテンツに視覚的な変化は起こりません。上の例では、`inert` 属性を持つ要素の直系の子孫が半透明で表示されるように CSS が適用されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [グローバル属性: `inert`](/ja/docs/Web/HTML/Reference/Global_attributes/inert)
- {{domxref("HTMLInputElement.disabled", "disabled")}}
- {{HTMLElement("dialog")}}
- CSS の {{cssxref("interactivity")}} プロパティ
