---
title: DOMRect
slug: Web/API/DOMRect
tags:
  - API
  - DOM
  - DOMRect
  - 位置
  - 位置インターフェイス
  - インターフェイス
  - 矩形
  - リファレンス
browser-compat: api.DOMRect
translation_of: Web/API/DOMRect
---
{{APIRef("Geometry Interfaces")}}

**`DOMRect`** は矩形の大きさと位置を記述します。

`DOMRect` が表すボックスの型は、それを返したメソッドやプロパティで指定されます。例えば、 WebVR API の {{domxref("VREyeParameters.renderRect")}} は、ヘッドマウントディスプレイの片目の映像をレンダリングする[キャンバス](/ja/docs/Web/API/HTMLCanvasElement)のビューポートを指定します。

親である {{domxref("DOMRectReadOnly")}} から継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("DOMRect.DOMRect","DOMRect()")}}
  - : 新しい `DOMRect` オブジェクトを作成します。

## プロパティ

_`DOMRect` は親である {{domxref("DOMRectReadOnly")}} からプロパティを継承しています。違いはそれらが読み取り専用でなくなることです。_

- {{domxref("DOMRectReadOnly.x")}}
  - :  この `DOMRect` の原点（ふつうは矩形の左上隅）の X 座標です。
- {{domxref("DOMRectReadOnly.y")}}
  - :  この `DOMRect` の原点（ふつうは矩形の左上隅）の Y 座標です。
- {{domxref("DOMRectReadOnly.width")}}
  - :  この `DOMRect` の幅です。
- {{domxref("DOMRectReadOnly.height")}}
  - :  この `DOMRect` の高さです。
- {{domxref("DOMRectReadOnly.top")}}
  - : この `DOMRect` の上端の座標値を返します（ふつうは `y` と同じ、 `height` が負の数である場合は `y + height` と同じです）。
- {{domxref("DOMRectReadOnly.right")}}
  - : この `DOMRect` の右端の座標値を返します（ふつうは `x + width` と同じ、 `width` が負の数である場合は `x` と同じです）。
- {{domxref("DOMRectReadOnly.bottom")}}
  - : この `DOMRect` の下端の座標値を返します（ふつうは `y + height` と同じ、 `height` が負の数である場合は `y` と同じです）。
- {{domxref("DOMRectReadOnly.left")}}
  - : この `DOMRect` の左端の座標値を返します（ふつうは `x` と同じ、 `width` が負の数である場合は `x + width` と同じです）。

## メソッド

_`DOMRect` は親である {{domxref("DOMRectReadOnly")}} からメソッドを継承しています。_

## 静的メソッド

- {{domxref("DOMRect.fromRect()")}}
  - : 新しい `DOMRect` オブジェクトを指定した位置と寸法で作成します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPoint")}}
