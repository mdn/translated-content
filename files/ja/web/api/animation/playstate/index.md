---
title: "Animation: playState プロパティ"
short-title: playState
slug: Web/API/Animation/playState
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

**`Animation.playState`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の読み取り専用プロパティで、アニメーションの再生状態を説明する列挙値を返します。

## 値

- `idle`
  - : アニメーションの現在の時刻は未解決で、待機タスクはありません。
- `running`
  - : アニメーションは実行中です。
- `paused`
  - : アニメーションが中断され、 {{domxref("Animation.currentTime")}} プロパティが更新されていません。
- `finished`
  - : アニメーションが境界の 1 つに達し、 {{domxref("Animation.currentTime")}} プロパティが更新されていません。

以前、ウェブアニメーションでは、再生の開始などの非同期処理がまだ完了していないことを示すために、 **`pending`** の値を定義していました。これは、別個の {{domxref("Animation.pending")}} プロパティで示すようになりました。

## 例

例えば[アリスの成長/縮小ゲーム](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)の例では、プレイヤーは[アリスが涙を流して泣く](https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010)という結末にたどり着きます。ゲームでは、パフォーマンス上の理由から、涙は見えているときだけアニメーションします。ですから、このようにアニメーションしたら、すぐに一時停止しなければなりません。

```js
// 涙のアニメーションをセットアップ

tears.forEach((el) => {
  el.animate(tearsFalling, {
    delay: getRandomMsRange(-1000, 1000), // それぞれの涙をランダムにする
    duration: getRandomMsRange(2000, 6000), // それぞれの涙をランダムにする
    iterations: Infinity,
    easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
  el.pause();
});

// エンディングを表示する必要があるときに、涙が落ちるのを再生

tears.forEach((el) => {
  el.play();
});

// 涙のアニメーションをリセットし、一時停止

tears.forEach((el) => {
  el.pause();
  el.currentTime = 0;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御するためのその他のメソッドやプロパティ
