---
title: Element.scrollBy()
slug: Web/API/Element/scrollBy
---

{{APIRef}}

**`scrollBy()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された量だけ要素をスクロールします。

## 構文

```
element.scrollBy(x-coord, y-coord);
element.scrollBy(options)
```

### 引数

- `x-coord` は、スクロールしたい水平ピクセル数です。
- `y-coord` は、スクロールしたい垂直ピクセル数です。

\- または -

- `options` は {{domxref("ScrollToOptions")}} 辞書です。

## 例

```js
// 要素をスクロール
element.scrollBy(300, 300);
```

`options` を使用する場合:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{ SpecName('CSSOM View', '#dom-element-scrollby-options-options', 'element.scrollBy()') }} | {{ Spec2('CSSOM View') }} | 初回定義 |

## ブラウザーの互換性

{{Compat}}
