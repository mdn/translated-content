---
title: "Touch: force プロパティ"
short-title: force
slug: Web/API/Touch/force
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`Touch.force`** は読み取り専用のプロパティで、タッチ点 ({{ domxref("Touch") }}) に対してユーザーがタッチ面に与えている圧力の大きさを返します。

## 値

`float` で、ユーザーがタッチ面に加える圧力の大きさを表します。これは `0.0` （圧力なし）と `1.0` （ハードウェアが認識できる最大の圧力）の間の値です。値が不明な場合（例えばタッチ機器がこのプロパティに対応していない場合）には `0.0` の値を返します。力が既知の環境では、 force 属性で表す絶対圧と、圧力のレベルでの感度は異なる場合があります。

## 例

この例では、 {{domxref("Touch")}} インターフェイスの {{domxref("Touch.force")}} プロパティを使用して示します。このプロパティは加えられる圧力の相対値で、範囲は `0.0` から `1.0` で、`0.0` は圧力なし、 `1.0` はタッチ機器が感知できる最高レベルの圧力です。

以下のコードスニペットでは、 {{domxref("Element/touchstart_event", "touchstart")}} イベントハンドラーは `targetTouches` リストを反復処理し、各タッチ点の `force` 値をログ出力していますが、このコードは値によって異なる処理を呼び出すことができます。

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // タッチ点のリストを反復処理し、各タッチ点の力をログ出力する
    for (let i = 0; i < e.targetTouches.length; i++) {
      // 力の値に応じて「切り替える」コードを追加します。例えば、
      // 最小圧力と最大圧力で、ユーザー入力を異なる処理にすることが
      // できます。
      console.log(`targetTouches[${i}].force = ${e.targetTouches[i].force}`);
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
