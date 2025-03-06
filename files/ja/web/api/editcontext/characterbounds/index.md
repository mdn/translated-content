---
title: "EditContext: characterBounds() メソッド"
slug: Web/API/EditContext/characterBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの **`characterBounds()`** メソッドは、この `EditContext` オブジェクト内の各文字を囲む長方形のリストが格納された {{jsxref("Array")}} を返します。

`EditContext` オブジェクト内の各文字の位置とサイズは、必要に応じて、オペレーティングシステムが{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) などのプラットフォーム固有の編集関係の UI を正しく配置するために用いられます。これは、テキストを `<canvas>` 要素に描画するときなど、オペレーティングシステムが自動的に各文字の位置と大きさを求めることができない状況で特に重要です。

ウェブ開発者は、{{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} イベントと {{domxref("EditContext.updateCharacterBounds()")}} メソッドを組み合わせて用い、オペレーティングシステムが各文字の位置と大きさの情報を要求した時に各文字の領域を更新することに関心を持つ可能性が高いでしょう。

`characterBounds()` メソッドは、`updateCharacterBounds()` により最後に更新された各文字の領域のリストを返します。このリストには `EditContext` オブジェクト内のすべての文字に対応する要素が格納されているのではなく、`updateCharacterBounds()` で更新された文字に対応する要素のみが格納されています。これらの各文字が `EditContext` オブジェクト内のどこに位置するかを知るには、{{domxref("EditContext.characterBoundsRangeStart")}} プロパティを使用してください。

## 構文

```js-nolint
characterBounds()
```

### 返値

{{domxref("DOMRect")}} オブジェクトが格納された {{jsxref("Array")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス
