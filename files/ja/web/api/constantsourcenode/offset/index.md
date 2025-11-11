---
title: "ConstantSourceNode: offset プロパティ"
short-title: offset
slug: Web/API/ConstantSourceNode/offset
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("Web Audio API") }}

`offset` は {{ domxref("ConstantSourceNode") }} インターフェイスの読み取り専用プロパティで、 {{domxref("AudioParam") }} オブジェクトを返し、数値で [a-rate](/ja/docs/Web/API/AudioParam#a-rate) 値を示します。これはソースから次のサンプルを取り出す際に常に返されます。

> [!NOTE]
> `offset` という名前の `AudioParam` は読み取り専用ですが、その中の `value` プロパティは読み取り専用ではありません。そのため、 `offset` の値は `ConstantSourceNode.offset.value` の値を設定することで変更することができます。
>
> ```js
> myConstantSourceNode.offset.value = newValue;
> ```

## 値

このノードがサンプルごとに返す [a-rate](/ja/docs/Web/API/AudioParam#a-rate) 値を示す {{ domxref("AudioParam") }} オブジェクトです。既定値は 1.0 です。

`offset` の現在の値にアクセスするには、上の構文ボックスで示したように、 `value` プロパティにアクセスしてください。

## 例

この例では、 `ConstantSourceNode` を設定して、その `offset` を {{domxref("GainNode") }} のペアの入力として使用する方法を示します。この例は [ConstantSourceNode による複数の引数の制御](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) にある、完全な例を元にして作成されています。

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;

volumeSliderControl.value = gainNode2.gain.value;

constantSource = context.createConstantSource();
constantSource.connect(gainNode2.gain);
constantSource.connect(gainNode3.gain);
```

まず、ゲインノードを作成して設定し、スライダーコントロールの値を 2 つのノードのゲインと一致するように設定します。次に、新しい {{domxref("ConstantSourceNode")}} を作成し、それを 2 つのゲインノードの {{domxref("GainNode.gain")}} 値のソースとします。それらの値はそれぞれ{{domxref("AudioParam")}}でもあります。

例えば、 2 つのゲインノードの値を変更して応答する必要のあるイベントハンドラー（この場合は {{domxref("Element/click_event", "click")}} イベント用）があるとします。上記のリンクがあるところで、この単純なイベントハンドラーを使用して、それを行うことができます。

```js
function handleClickEvent(event) {
  constantSource.offset.value = volumeSliderControl.value;
}
```

この関数がしなければならないことは、ペアノードのゲインを制御するために使用しているスライダーコントロールの現在の値を取得して、その値を `ConstantSourceNode` の `offset` に格納することのみです。これは、その {{domxref("AudioParam.value")}} プロパティの中身を変更することで行われます。 2 つのゲインノードはすばやく新しいボリュームレベルを採用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("ConstantSourceNode")}}
- {{domxref("AudioNode")}}
- {{domxref("AudioParam")}}
