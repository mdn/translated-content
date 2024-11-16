---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
l10n:
  sourceCommit: a631fd40bdc682a82be57be9932c9853a86ac1b5
---

{{APIRef("Geometry Interfaces")}}

**`DOMRectReadOnly`** インターフェイスは（{{domxref("DOMRect")}} でも使用される）標準プロパティを設定し、すべてのプロパティが変更不可の矩形を定義します。

## コンストラクター

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : 新しい `DOMRectReadOnly` オブジェクトを生成するために定義されています。

## インスタンスプロパティ

- {{domxref("DOMRectReadOnly.x")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の原点の X 座標を返します。
- {{domxref("DOMRectReadOnly.y")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の原点の Y 座標を返します。
- {{domxref("DOMRectReadOnly.width")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の幅を返します。
- {{domxref("DOMRectReadOnly.height")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の高さを返します。
- {{domxref("DOMRectReadOnly.top")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の上端の座標値を返します（ふつうは `y` と同じです）。
- {{domxref("DOMRectReadOnly.right")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の右端の座標値を返します（ふつうは `x + width` と同じです）。
- {{domxref("DOMRectReadOnly.bottom")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の下端の座標値を返します（ふつうは `y + height` と同じです）。
- {{domxref("DOMRectReadOnly.left")}} {{ReadOnlyInline}}
  - : この `DOMRectReadOnly` の左端の座標値を返します（ふつうは `x` と同じです）。

## 静的メソッド

- {{domxref("DOMRectReadOnly/fromRect_static", "DOMRectReadOnly.fromRect()")}}
  - : 指定された位置と大きさで、新しい `DOMRectReadOnly` オブジェクトを生成します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPoint")}}
