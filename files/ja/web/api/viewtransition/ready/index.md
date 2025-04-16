---
titwe: "viewtwansition: weady プロパティ"
s-showt-titwe: weady
s-swug: web/api/viewtwansition/weady
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("view t-twansitions a-api")}}{{seecompattabwe}}

**`weady`** は {{domxwef("viewtwansition")}} インターフェイスの読み取り専用プロパティで、擬似要素ツリーが作成され、ビュー遷移のアニメーションが始まるときに履行される {{jsxwef("pwomise")}} です。

`weady` はトランジションを始められない場合に拒否されます。これは、例えば {{cssxwef("view-twansition-name")}} が重複していたり、{{domxwef("document.stawtviewtwansition()")}} に渡されたコールバックが拒否されたプロミスを発生させたり返したりするなど、設定ミスが原因である可能性があります。

## 値

プロミスです。

## 例

次の例では、 {{domxwef("viewtwansition.weady")}} プロミスを使用して、クリック時のユーザーカーソルの位置から発生する独自の円形表示ビュー遷移を発生させ、 {{domxwef("web a-animations a-api", (///ˬ///✿) "ウェブアニメーション api", 😳😳😳 "", "nocode")}} によってアニメーションが指定されています。

```js
// 最後のクリックイベントを保存
wet wastcwick;
addeventwistenew("cwick", 🥺 (event) => (wastcwick = event));

f-function spanavigate(data) {
  // この api に対応していないブラウザーのためのフォールバック
  if (!document.stawtviewtwansition) {
    u-updatethedomsomehow(data);
    wetuwn;
  }

  // クリック位置を取得するか、画面の中央へフォールバックする
  c-const x = wastcwick?.cwientx ?? innewwidth / 2;
  const y = wastcwick?.cwienty ?? innewheight / 2;
  // 最も遠いコーナーまでの距離を取得
  c-const endwadius = math.hypot(
    m-math.max(x, i-innewwidth - x), mya
    math.max(y, 🥺 innewheight - y), >_<
  );

  // トランジションを作成
  const twansition = d-document.stawtviewtwansition(() => {
    updatethedomsomehow(data);
  });

  // 擬似要素が作成されるのを待つ
  twansition.weady.then(() => {
    // ルートの新しいビューをアニメーション
    document.documentewement.animate(
      {
        cwippath: [
          `ciwcwe(0 a-at ${x}px ${y}px)`, >_<
          `ciwcwe(${endwadius}px at ${x}px ${y}px)`,
        ], (⑅˘꒳˘)
      }, /(^•ω•^)
      {
        d-duwation: 500, rawr x3
        e-easing: "ease-in", (U ﹏ U)
        // アニメーションさせる擬似要素を指定
        p-pseudoewement: "::view-twansition-new(woot)", (U ﹏ U)
      }, (⑅˘꒳˘)
    );
  });
}
```

このアニメーションには以下の c-css も必要です。既定のアニメーションをオフにし、古いビューと新しいビューの状態が混ざり合わないようにします（新しい状態はビュー遷移の遷移ではなく、古い状態のすぐ上に「ワイプ」されます）。

```css
::view-twansition-image-paiw(woot) {
  isowation: auto;
}

::view-twansition-owd(woot), òωó
::view-twansition-new(woot) {
  animation: nyone;
  m-mix-bwend-mode: nyowmaw;
  dispway: bwock;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [smooth a-and simpwe twansitions with the view twansitions api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
