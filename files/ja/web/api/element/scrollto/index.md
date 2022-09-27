---
title: Element.scrollTo()
slug: Web/API/Element/scrollTo
---

{{APIRef}}

**`scrollTo()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素内を指定された座標までスクロールします。

## 構文

```
element.scrollTo(x-coord, y-coord)
element.scrollTo(options)
```

### 引数

- `x-coord` は、要素の水平軸上で左上に表示したいピクセルです。
- `y-coord` は、要素の垂直軸状で左上に表示したいピクセルです。

\- または -

- `options` は {{domxref("ScrollToOptions")}} 辞書です。

## 例

```js
element.scrollTo(0, 1000);
```

`options` を使用する場合:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{ SpecName('CSSOM View', '#dom-element-scrollto-options-options', 'element.scrollTo()') }} | {{ Spec2('CSSOM View') }} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
