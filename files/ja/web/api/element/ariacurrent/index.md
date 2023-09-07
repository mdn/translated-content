---
title: "Element: ariaCurrent プロパティ"
short-title: ariaCurrent
slug: Web/API/Element/ariaCurrent
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaCurrent`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-current`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-current) 属性の値を反映し、コンテナーや関連する要素の集合の中で現在の項目を表します。

## 値

以下のいずれかの値を持つ文字列です。

- `"page"`
  - : 設定するには、一連のページ内での現在のページを表します。
- `"step"`
  - : プロセス内の現在のステップを表します。
- `"location"`
  - : 現在の位置、例えばパンくず階層内の現在のページを表します。
- `"date"`
  - : 日付の集合の中における現在の日付を表します。
- `"time"`
  - : 時刻の集合内の現在時刻を表します。
- `"true"`
  - : 集合内の現在の項目を表します。
- `"false"`
  - : 集合内の現在の項目を表しません。

## 例

この例では、リンクの集合がサイトナビゲーションに使用されています。`aria-current` 属性は現在のページを示します。値 `page` はスクリーンリーダーのアナウンスに組み込まれています。`ariaCurrent` を用いて、その値を更新することができます。

```html
<nav>
  <ul>
    <li><a id="link-home" href="/" aria-current="page">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
</nav>
```

```js
let el = document.getElementById("link-home");
console.log(el.ariaCurrent); // "page"
el.ariaCurrent = "tab";
console.log(el.ariaCurrent); // "tab"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using the aria-current attribute](https://tink.uk/using-the-aria-current-attribute/)
