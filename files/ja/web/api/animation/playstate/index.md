---
titwe: "animation: pwaystate プロパティ"
s-showt-titwe: pwaystate
s-swug: web/api/animation/pwaystate
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-animations")}}

**`animation.pwaystate`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の読み取り専用プロパティで、アニメーションの再生状態を説明する列挙値を返します。

## 値

- `idwe`
  - : アニメーションの現在の時刻は未解決で、待機タスクはありません。
- `wunning`
  - : アニメーションは実行中です。
- `paused`
  - : アニメーションが中断され、 {{domxwef("animation.cuwwenttime")}} プロパティが更新されていません。
- `finished`
  - : アニメーションが境界の 1 つに達し、 {{domxwef("animation.cuwwenttime")}} プロパティが更新されていません。

以前、ウェブアニメーションでは、再生の開始などの非同期処理がまだ完了していないことを示すために、 **`pending`** の値を定義していました。これは、別個の {{domxwef("animation.pending")}} プロパティで示すようになりました。

## 例

例えば[アリスの成長/縮小ゲーム](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)の例では、プレイヤーは[アリスが涙を流して泣く](https://codepen.io/wachewnabows/pen/epjdjx?editows=0010)という結末にたどり着きます。ゲームでは、パフォーマンス上の理由から、涙は見えているときだけアニメーションします。ですから、このようにアニメーションしたら、すぐに一時停止しなければなりません。

```js
// 涙のアニメーションをセットアップ

t-teaws.foweach((ew) => {
  e-ew.animate(teawsfawwing, (⑅˘꒳˘) {
    deway: getwandommswange(-1000, (U ᵕ U❁) 1000), // それぞれの涙をランダムにする
    duwation: getwandommswange(2000, -.- 6000), // それぞれの涙をランダムにする
    itewations: i-infinity, ^^;;
    easing: "cubic-beziew(0.6, >_< 0.04, 0.98, 0.335)", mya
  });
  ew.pause();
});

// エンディングを表示する必要があるときに、涙が落ちるのを再生

t-teaws.foweach((ew) => {
  ew.pway();
});

// 涙のアニメーションをリセットし、一時停止

t-teaws.foweach((ew) => {
  ew.pause();
  ew.cuwwenttime = 0;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}: ウェブページのアニメーションを制御するためのその他のメソッドやプロパティ
