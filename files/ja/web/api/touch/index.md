---
title: Touch
slug: Web/API/Touch
---

{{APIRef("Touch Events")}}

**`Touch`** インターフェイスは、タッチ感応面へのひとつの接触点を表します。接触点とは一般的に指やスタイラスと、タッチ画面やトラックパッドのような機器が触れた位置です。

{{domxref("Touch.radiusX")}}、{{domxref("Touch.radiusY")}}、{{domxref("Touch.rotationAngle")}} で、ユーザーと画面が接触した*タッチ領域 (touch area)* を表します。これは指を使うような、精度が低いポインティングデバイスを扱う場合に役立ちます。これらの値は、接触した領域全体 (ユーザの指先など) に可能な限り合う楕円を表すように設定されます。 {{experimental_inline}}

> **メモ:** プロパティの値の多くは、ハードウェア依存です。例えば、表面を押さえる力を検出する手段を持たない機器では、`force` の値が常に 0 になるでしょう。これは `radiusX` や `radiusY` にもあてはまります。ハードウェアがひとつの点しか通知できない場合は、これらの値が 1 になるでしょう。

## コンストラクター

- {{domxref("Touch.Touch", "Touch()")}} {{experimental_inline}}
  - : Touch オブジェクトを作成します。

## プロパティ

_このインターフェイスには親がなく、ほかのプロパティを継承または実装していません。_

### 基本プロパティ

- {{domxref("Touch.identifier")}} {{readonlyInline}}
  - : `Touch` オブジェクトの一意な識別子を返します。あるタッチ点 (指などによる) は表面を移動している間、同じ識別子を持ち続けます。これにより、同一のタッチを終始追跡することが確実になります。
- {{domxref("Touch.screenX")}} {{readonlyInline}}
  - : 画面の左端に対する、タッチ点の X 座標を返します。
- {{domxref("Touch.screenY")}} {{readonlyInline}}
  - : 画面の上端に対する、タッチ点の Y 座標を返します。
- {{domxref("Touch.clientX")}} {{readonlyInline}}
  - : スクロールによるオフセットを含まず、ブラウザのビューポートの左端に対する、タッチ点の X 座標を返します。
- {{domxref("Touch.clientY")}} {{readonlyInline}}
  - : スクロールによるオフセットを含まず、ブラウザのビューポートの上端に対する、タッチ点の Y 座標を返します。
- {{domxref("Touch.pageX")}} {{readonlyInline}}
  - : ドキュメントの左端に対する、タッチ点の X 座標を返します。水平スクロールによるオフセットがある場合は、それを含むことが `clientX` と異なります。
- {{domxref("Touch.pageY")}} {{readonlyInline}}
  - : ドキュメントの上端に対する、タッチ点の Y 座標を返します。垂直スクロールによるオフセットがある場合は、それを含むことが `clientY` と異なります。
- {{domxref("Touch.target")}} {{readonlyInline}}
  - : タッチ点がタッチ面で最初に触れた位置にある {{domxref("Element")}} を返します。タッチ点が要素の対話エリアの外に移動したり、ドキュメント上に存在しなくなっても同様です。

### タッチ領域

{{SeeCompatTable}}

- {{domxref("Touch.radiusX")}} {{readonlyInline}} {{experimental_inline}}
  - : 画面に触れた領域にもっとも接近して囲むような、楕円の X 方向の半径を返します。この値は、`screenX` と同じ尺度のピクセル数で表します。
- {{domxref("Touch.radiusY")}} {{readonlyInline}} {{experimental_inline}}
  - : 画面に触れた領域にもっとも接近して囲むような、楕円の Y 方向の半径を返します。この値は、`screenY` と同じ尺度のピクセル数で表します。
- {{domxref("Touch.rotationAngle")}} {{readonlyInline}} {{experimental_inline}}
  - : ユーザがタッチ面に触れた領域をもっとも正確に覆うために、radiusX および radiusY で表す楕円を時計回りに回転すべき角度 (単位は度 (degree)) を返します。
- {{domxref("Touch.force")}}{{readonlyInline}} {{experimental_inline}}
  - : ユーザがタッチ面に与えた圧力を、`0.0` (最小圧力) から `1.0` (最大圧力) の間の `float` で返します。

## メソッド

_このインターフェイスにはメソッドがなく、親もないのでメソッドを継承または実装していません。_

## 仕様書

| 仕様書                                                                           | 状態                                 | 備考                                                                                               |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| {{SpecName('Touch Events 2', '#touch-interface', 'Touch')}} | {{Spec2('Touch Events 2')}} | `radiusX`, `radiusY`, `rotationAngle`, `force` の各プロパティと `Touch()` コンストラクターを追加。 |
| {{SpecName('Touch Events', '#touch-interface', 'Touch')}}     | {{Spec2('Touch Events')}}     | 初回定義                                                                                           |

## ブラウザーの互換性

{{Compat("api.Touch")}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{ domxref("Document.createTouch()") }}
