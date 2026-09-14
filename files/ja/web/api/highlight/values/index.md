---
title: "Highlight: values() メソッド"
short-title: values()
slug: Web/API/Highlight/values
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

**`values()`** は {{domxref("Highlight")}} インターフェイスのメソッドで、`Highlight` オブジェクト内のすべての `Range` オブジェクトの値を挿入順に含む新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)オブジェクトを返します。

> [!NOTE]
> **`keys()`** メソッドはこのメソッドの別名です。 `Highlight` 要素の **values** とまったく同じ動作をし、同じものを返します。

`Highlight` は {{jsxref("Set")}} 風オブジェクトですので、これは {{jsxref("Set.values()")}} を使うのと似ています。

## 構文

```js-nolint
values()
```

### 返値

指定された `Highlight` 内の各 `Range` オブジェクトを挿入順に反復処理する、新しいイテレーターオブジェクト。

## 例

次のコードスニペットは、3 つの `Range` オブジェクトを使用して新しい `Highlight` オブジェクトを作成し、 `values()` メソッドによって返されるイテレーターを使用して 3 つの範囲をログに記録する方法を示しています。

```js
const myHighlight = new Highlight();
myHighlight.add(new Range());
myHighlight.add(new Range());
myHighlight.add(new Range());

const iter = myHighlight.values();

for (value of iter) {
  console.log(value); // Range
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
