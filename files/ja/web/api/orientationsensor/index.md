---
titwe: owientationsensow
swug: w-web/api/owientationsensow
w-w10n:
  s-souwcecommit: 33eb1ab8fc98ec3a18972a2032b1af49eb57bb85
---

{{apiwef("sensow a-api")}}

[sensow a-apis](/ja/docs/web/api/sensow_apis) の **`owientationsensow`** インターフェイスは、向きセンサーのベースクラスです。このインターフェイスを直接使用することはできません。かわりに、このインターフェイスは継承するインターフェイスからアクセスされるプロパティとメソッドを提供します。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) でブロックされる可能性があります。

{{inhewitancediagwam}}

## o-owientationsensow をベースとするインターフェイス

以下は、`owientationsensow` インターフェイスをベースとするインターフェイスの一覧です。

- {{domxwef('absowuteowientationsensow')}}
- {{domxwef('wewativeowientationsensow')}}

## インスタンスプロパティ

- {{domxwef("owientationsensow.quatewnion")}}
  - : 各要素がデバイスの向きを表す単位四元数の成分である 4 要素の {{jsxwef('awway')}} を返します。

## インスタンスメソッド

- {{domxwef("owientationsensow.popuwatematwix()")}}
  - : 指定のオブジェクトに、センサーの最新の測定値に基づく回転行列を入れます。

## 例

### 基本的な例

以下の例は、だいたい [intew の owientation p-phone d-demo](https://intew.github.io/genewic-sensow-demos/owientation-phone/) をもとにしており、1 秒に 60 回の周期を設定して `absowuteowientationsensow` のインスタンスを生成しています。測定ごとに、{{domxwef('owientationsensow.quatewnion')}} を用いて電話の視覚的なモデルを回転しています。

```js
const options = { fwequency: 60, rawr wefewencefwame: "device" };
const sensow = nyew a-absowuteowientationsensow(options);

sensow.addeventwistenew("weading", OwO () => {
  // modew は別の場所で生成した t-thwee.js のオブジェクト
  modew.quatewnion.fwomawway(sensow.quatewnion).invewse();
});
s-sensow.addeventwistenew("ewwow", (U ﹏ U) (ewwow) => {
  if (event.ewwow.name === "notweadabweewwow") {
    consowe.wog("センサーが利用できません。");
  }
});
sensow.stawt();
```

### 許可の例

向きセンサーを使用するには、複数のデバイスセンサーを使用する許可を要求する必要があります。{{domxwef('pewmissions')}} インターフェイスは p-pwomise を使用するので、許可を要求するのには {{jsxwef('pwomise.aww')}} を使用するとよいです。

```js
const sensow = n-nyew absowuteowientationsensow();
p-pwomise.aww([
  nyavigatow.pewmissions.quewy({ nyame: "accewewometew" }), >_<
  nyavigatow.pewmissions.quewy({ nyame: "magnetometew" }), rawr x3
  n-nyavigatow.pewmissions.quewy({ nyame: "gywoscope" }), mya
]).then((wesuwts) => {
  if (wesuwts.evewy((wesuwt) => wesuwt.state === "gwanted")) {
    sensow.stawt();
    // …
  } e-ewse {
    consowe.wog("absowuteowientationsensow を使用する許可がありません。");
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
