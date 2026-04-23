---
title: "Touch: Touch() コンストラクター"
short-title: Touch()
slug: Web/API/Touch/Touch
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Touch Events")}}

**`Touch()`** コンストラクターは、新しい {{domxref("Touch")}} オブジェクトを作成します。

## 構文

```js-nolint
new Touch(options)
```

### 引数

- `touchInit`
  - : 以下のフィールドを持つオブジェクトです。
    - `identifier`
      - : `long` 値で、タッチ点の識別番号です。
    - `target`
      - : {{domxref("EventTarget")}} オブジェクトで、タッチ点が最初に表面に置かれたときに開始したアイテムです。
    - `clientX` {{optional_inline}}
      - : 既定値は `0`、型は `double` で、スクロールオフセットを除いた、ユーザー画面のクライアントウィンドウ上のタッチの水平位置です。
    - `clientY` {{optional_inline}}
      - : 既定値は `0`、型は `double` で、スクロールオフセットを除いた、ユーザー画面のクライアントウィンドウ上のタッチの垂直位置です。
    - `screenX` {{optional_inline}}
      - : 既定値は `0`、型は `double` で、ユーザーの画面上のタッチの水平位置です。
    - `screenY` {{optional_inline}}
      - : 既定値は `0`、型は `double` で、ユーザーの画面上のタッチの垂直位置です。
    - `pageX` {{optional_inline}}
      - : 既定値は `0`、型は `double` で、スクロールオフセットを含む、ユーザー画面のクライアントウィンドウ上のタッチの水平位置です。
    - `pageY` {{optional_inline}}
      - : 既定値は `0`、型は `double` で、スクロールオフセットを含む、ユーザー画面のクライアントウィンドウ上でのタッチの垂直位置です。
    - `radiusX` {{optional_inline}}
      - : 既定値は `0`、型は `float` で、 rotationAngle で示される軸に沿ったタッチ領域（指やスタイラスなど）を最も近く囲む楕円の半径を、screenX と同じ倍率の CSS ピクセル単位で指定します。値が不明な場合は `0` です。値は負であってはいけません。
    - `radiusY` {{optional_inline}}
      - : 既定値は `0` で、タイプは `float` です。rotationAngle で示される軸に垂直な軸に沿って、タッチエリア（指やスタイラスなど）を最も近く囲む楕円の半径を、screenY と同じ倍率の CSS ピクセル単位で指定します。値が不明な場合は `0` です。値は負であってはいけません。
    - `rotationAngle` {{optional_inline}}
      - : 既定値は `0` 、型は `float` で、 radiusX と radiusY で記述する楕円を、その中心を軸に時計回りに回転させた角度（度単位）です。値は `0` 以上、`90` 以下でなければなりません。radiusX と radiusY で記述される楕円が円の場合、 rotationAngle は影響しません。ユーザーエージェントはこの用途の値として `0` を使用してもよいですし、許容範囲内の他の値を使用してもかまいません。（例えば、ユーザーエージェントは突然の変化を避けるために、前回のタッチイベントの rotationAngle 値を使用することができます。）
    - `force` {{optional_inline}}
      - : 既定値は `0`、型は `float` で、加えられる圧力の相対値です。範囲は `0` から `1` で、 `0` は圧力なし、 `1` はそのタッチ機器が感知できる最高レベルの圧力です。値が不明の場合は `0` です。力が既知である環境では、力属性によって表される絶対圧と、圧力のレベルの感度が異なる場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TouchEvent")}}: これを構築するオブジェクトのインターフェイス
