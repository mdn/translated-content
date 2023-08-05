---
title: キーフレームの形式
slug: Web/API/Web_Animations_API/Keyframe_Formats
l10n:
  sourceCommit: 6fc7b4ea58006c901f22888d54b75942395fc357
---

{{DefaultAPISidebar("Web Animations")}}

{{domxref("Element.animate()")}}、{{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}、{{domxref("KeyframeEffect.setKeyframes()")}} はいずれも、一連のキーフレームを表す形式のオブジェクトを受け入れます。この形式にはいくつかのオプションがあり、以下で説明します。

## 構文

キーフレームの形式には、2 つの異なる方法があります。

1. 反復処理するプロパティと値からなるオブジェクト（キーフレーム）の配列 (`array`) です。これは {{domxref("KeyframeEffect.getKeyframes()", "getKeyframes()")}} メソッドが返す正規の形式です。

   ```js
   element.animate(
     [
       {
         // from
         opacity: 0,
         color: "#fff",
       },
       {
         // to
         opacity: 1,
         color: "#000",
       },
     ],
     2000
   );
   ```

   各キーフレームのオフセットは `offset` 値を提供することで指定します。

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000
   );
   ```

   > **メモ:** `offset` 値は指定された場合、0.0 から 1.0 の間で昇順に並んでいなければなりません。

   すべてのキーフレームにオフセットを指定する必要はありません。オフセットを指定しないキーフレームは、隣接するキーフレーム間で等間隔に配置されます。

   キーフレーム間に適用するイージングは、下記で示すように `easing` 値を提供することで指定します。

   ```js
   element.animate(
     [
       { opacity: 1, easing: "ease-out" },
       { opacity: 0.1, easing: "ease-in" },
       { opacity: 0 },
     ],
     2000
   );
   ```

   この例では、指定したイージングは指定したキーフレームから次のキーフレームまでしか適用されません。しかし、引数 `options` で指定した `easing` 値は、アニメーションの単一の反復、つまり再生時間全体に適用されます。

2. オブジェクト (`object`) で、アニメーションさせるプロパティと、反復する値の配列 (`array`) からなるキーと値のペアを格納します。

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["#fff", "#000"], // [ from, to ]
     },
     2000
   );
   ```

   この形式を使用した場合、配列のそれぞれの要素数は同じである必要はありません。指定された値はそれぞれ独立した空間となります。

   ```js
   element.animate(
     {
       opacity: [0, 1], // offset: 0, 1
       backgroundColor: ["red", "yellow", "green"], // offset: 0, 0.5, 1
     },
     2000
   );
   ```

   特別なキーである `offset`、`easing`、`composite`（下記で記述）をプロパティ値の横に並べて指定することができます。

   ```js
   element.animate(
     {
       opacity: [0, 0.9, 1],
       offset: [0, 0.8], // Shorthand for [ 0, 0.8, 1 ]
       easing: ["ease-in", "ease-out"],
     },
     2000
   );
   ```

   プロパティ値のリストから適切なキーフレームの集合を生成した後、指定されたオフセットがそれぞれ対応するキーフレームに適用されます。値が足りない場合、またはリストに `null` 値が格納されている場合、オフセットを指定していないキーフレームは、記述されている配列形式と同様に等間隔に配置されます。

   もし `easing` や `composite` の値がいくつかある場合、対応するリストは必要に応じて繰り返されます。

### 暗黙の to/from キーフレーム

新しいバージョンのブラウザーでは、アニメーションの始まりや終わりの状態のみ（つまり、単一のキーフレーム）を設定することができます。例えば、[この単純なアニメーション](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html)を考えてみましょう。キーフレームオブジェクトは次のようになります、

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

アニメーションの終わりの状態を指定しただけで、始めの状態は暗黙的に指定されています。

## 属性

キーフレームは、{{cssxref("CSS_animated_properties", "animatable CSS properties")}}のいずれかのプロパティと値のペアを指定します。プロパティ名はキャメルケースを使用して指定しますので、例えば {{cssxref("background-color")}} は `backgroundColor` となり、{{cssxref("background-position-x")}} は `backgroundPositionX` となります。{{cssxref("margin")}} のような一括指定も使用できます。

例外的な CSS プロパティが 2 つあります。

- {{cssxref("float")}} は `cssFloat` と書く必要があります。"float" は JavaScript で予約語であるためです。ここでは参考程度のものです。"float" はアニメーション可能な CSS プロパティではなく、アニメーションには影響しないからです。
- {{cssxref("offset")}} は `cssOffset` と書く必要があります。"offset" は下記の通り、キーフレームのオフセットを表すからです。

以下の特殊な属性を指定することもできます。

- offset
  - : キーフレームのオフセットを `0.0` から `1.0` の間の数値、または `null` で指定します。これは CSS スタイルシートで `@keyframes` を使用して始まりと終わりの状態をパーセントで指定するのと同じです。この値が `null` または存在しない場合、キーフレームは隣接するキーフレーム間で等間隔に配置されます。
- easing
  - : 連なった次のキーフレームまでの間で使用される[タイミング関数](/ja/docs/Web/CSS/easing-function)です。
- composite
  - : このキーフレームで指定した値と基底値を合成するために用いる {{domxref("KeyframeEffect.composite")}} 演算子です。効果に指定した合成処理を使用している場合は `auto` になります。

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
- {{domxref("KeyframeEffect.setKeyframes()")}}
