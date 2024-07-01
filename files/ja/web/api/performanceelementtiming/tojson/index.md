---
title: "PerformanceElementTiming: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/PerformanceElementTiming/toJSON
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`toJSON()`** は {{domxref("PerformanceElementTiming")}} インターフェイスのメソッドで、{{Glossary("Serialization","シリアライザー")}}です。 {{domxref("PerformanceElementTiming")}} オブジェクトの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{jsxref("JSON")}} オブジェクトです。これは、 {{domxref("PerformanceElementTiming")}} オブジェクトをシリアライズしたものです。

JSON には {{domxref("PerformanceElementTiming.element", "element")}} プロパティが格納されませんが、これが {{domxref("Element")}} 型の一種であり、`toJSON()` 操作を提供していないからです。しかし、要素の {{domxref("PerformanceElementTiming.id", "id")}} は提供されます。

## 例

### toJSON メソッドの使用

この例では、`entry.toJSON()` を呼び出すと、画像要素の情報を含む `PerformanceElementTiming` オブジェクトの JSON 表現が返されます。

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.toJSON());
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

This would log a JSON object like so:

```json
{
  "name": "image-paint",
  "entryType": "element",
  "startTime": 670894.1000000238,
  "duration": 0,
  "renderTime": 0,
  "loadTime": 670894.1000000238,
  "intersectionRect": {
    "x": 299,
    "y": 76,
    "width": 135,
    "height": 155,
    "top": 76,
    "right": 434,
    "bottom": 231,
    "left": 299
  },
  "identifier": "big-image",
  "naturalWidth": 135,
  "naturalHeight": 155,
  "id": "myImage",
  "url": "https://en.wikipedia.org/static/images/project-logos/enwiki.png"
}
```

JSON 文字列を取得するには、 [`JSON.stringify(entry)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を直接使用することができます。これが `toJSON()` を自動的に呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
