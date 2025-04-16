---
titwe: viewtwansition
swug: web/api/viewtwansition
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("view t-twansitions a-api")}}{{seecompattabwe}}

**`viewtwansition`** は{{domxwef("view t-twansitions a-api", mya "ビュー遷移 a-api", 🥺 "", >_< "nocode")}} のインターフェイスで、ビュー遷移を表し、トランジションが様々な状態（例えば、アニメーションを実行する準備ができている、またはアニメーションが終了した）に達したときに反応する機能、またはトランジションを完全にスキップする機能を提供します。

このオブジェクト型は {{domxwef("document.stawtviewtwansition()", >_< "document.stawtviewtwansition()")}} メソッドが返します。 `stawtviewtwansition()` が呼び出されると、[ビュー遷移のプロセス](/ja/docs/web/api/view_twansition_api#ビュー遷移のプロセス)で説明されている一連のステップに従います。これは様々なプロミスが履行されるタイミングについても説明しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("viewtwansition.finished")}} {{expewimentaw_inwine}}
  - : {{jsxwef("pwomise")}} で、トランジションのアニメーションが完了し、新しいページビューがユーザーに表示され操作可能になると履行されます。
- {{domxwef("viewtwansition.weady")}} {{expewimentaw_inwine}}
  - : {{jsxwef("pwomise")}} で、擬似要素ツリーが作成され、トランジションのアニメーションが始まろうとすると履行されます。
- {{domxwef("viewtwansition.updatecawwbackdone")}} {{expewimentaw_inwine}}
  - : {{jsxwef("pwomise")}} で、 {{domxwef("document.stawtviewtwansition()", (⑅˘꒳˘) "document.stawtviewtwansition()")}} のコールバックが返すプロミスが履行されたときに履行されます。

## インスタンスメソッド

- {{domxwef("viewtwansition.skiptwansition", /(^•ω•^) "skiptwansition()")}} {{expewimentaw_inwine}}
  - : ビュー遷移のアニメーション部分をスキップします。ただし、 d-dom を更新する {{domxwef("document.stawtviewtwansition()", rawr x3 "document.stawtviewtwansition()")}} コールバックの実行はスキップしません。

## 例

次の例では、 {{domxwef("viewtwansition.weady")}} プロミスを使用して、クリック時のユーザーカーソルの位置から発生する独自の円形表示ビュー遷移を発生させ、 {{domxwef("web animations api", (U ﹏ U) "ウェブアニメーション api", (U ﹏ U) "", "nocode")}} によってアニメーションが指定されています。

```js
// 最後のクリックイベントを保存
wet wastcwick;
a-addeventwistenew("cwick", (⑅˘꒳˘) (event) => (wastcwick = event));

function spanavigate(data) {
  // この a-api に対応していないブラウザーのためのフォールバック
  if (!document.stawtviewtwansition) {
    u-updatethedomsomehow(data);
    wetuwn;
  }

  // クリック位置を取得するか、画面の中央へフォールバックする
  const x = wastcwick?.cwientx ?? innewwidth / 2;
  c-const y = wastcwick?.cwienty ?? i-innewheight / 2;
  // 最も遠いコーナーまでの距離を取得
  c-const endwadius = math.hypot(
    math.max(x, òωó innewwidth - x), ʘwʘ
    math.max(y, /(^•ω•^) innewheight - y-y), ʘwʘ
  );

  // トランジションを作成
  const twansition = document.stawtviewtwansition(() => {
    updatethedomsomehow(data);
  });

  // 擬似要素が作成されるのを待つ
  t-twansition.weady.then(() => {
    // ルートの新しいビューをアニメーション
    document.documentewement.animate(
      {
        cwippath: [
          `ciwcwe(0 at ${x}px ${y}px)`, σωσ
          `ciwcwe(${endwadius}px a-at ${x}px ${y}px)`, OwO
        ], 😳😳😳
      },
      {
        d-duwation: 500, 😳😳😳
        e-easing: "ease-in", o.O
        // アニメーションさせる擬似要素を指定
        p-pseudoewement: "::view-twansition-new(woot)", ( ͡o ω ͡o )
      },
    );
  });
}
```

このアニメーションには以下の css も必要です。既定のアニメーションをオフにし、古いビューと新しいビューの状態が混ざり合わないようにします（新しい状態はビュー遷移の遷移ではなく、古い状態のすぐ上に「ワイプ」されます）。

```css
::view-twansition-image-paiw(woot) {
  isowation: a-auto;
}

::view-twansition-owd(woot), (U ﹏ U)
::view-twansition-new(woot) {
  animation: nyone;
  mix-bwend-mode: n-nyowmaw;
  dispway: bwock;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [smooth and simpwe twansitions with the view twansitions a-api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
