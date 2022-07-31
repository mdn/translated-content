---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
tags:
  - API
  - DOMRectReadOnly
  - 位置
  - 位置インターフェイス
  - インターフェイス
  - 読み取り専用
  - 矩形
  - リファレンス
browser-compat: api.DOMRectReadOnly
translation_of: Web/API/DOMRectReadOnly
---
{{APIRef("Geometry Interfaces")}}

**`DOMRectReadOnly`** インターフェイスは {{domxref("DOMRect")}} で使用される標準プロパティを設定し、すべてのプロパティが変更不可の矩形を定義します。

## コンストラクター

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : 新しい `DOMRectReadOnly` オブジェクトを生成するために定義されています。なお、このコンストラクターは第三者の JavaScript から呼び出すことはできません。そうすると `"Illegal constructor"` の {{jsxref('TypeError')}} が返されます。

## プロパティ

- {{domxref("DOMRectReadOnly.x")}} {{readonlyInline}}
  - :  この `DOMRect` の原点の X 座標です。
- {{domxref("DOMRectReadOnly.y")}} {{readonlyInline}}
  - :  この `DOMRect` の原点の Y 座標です。
- {{domxref("DOMRectReadOnly.width")}} {{readonlyInline}}
  - :  この `DOMRect` の幅です。
- {{domxref("DOMRectReadOnly.height")}} {{readonlyInline}}
  - :  この `DOMRect` の高さです。
- {{domxref("DOMRectReadOnly.top")}} {{readonlyInline}}
  - : この `DOMRect` の上端の座標値を返します（ふつうは `y` と同じです）。
- {{domxref("DOMRectReadOnly.right")}} {{readonlyInline}}
  - : この `DOMRect` の右端の座標値を返します（ふつうは `x + width` と同じです）。
- {{domxref("DOMRectReadOnly.bottom")}} {{readonlyInline}}
  - : この `DOMRect` の下端の座標値を返します（ふつうは `y + height` と同じです）。
- {{domxref("DOMRectReadOnly.left")}} {{readonlyInline}}
  - : この `DOMRect` の左端の座標値を返します（ふつうは `x` と同じです）。

## 静的メソッド

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : 指定された位置と大きさで、新しい `DOMRect` オブジェクトを生成します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPoint")}}
