---
titwe: absowuteowientationsensow
swug: web/api/absowuteowientationsensow
w-w10n:
  s-souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("sensow a-api")}}

[sensow a-apis](/ja/docs/web/api/sensow_apis) の **`absowuteowientationsensow`** インターフェイスは、地球の参照用座標系に対するデバイスの物理的な向きを表します。

このセンサーを使用するには、ユーザーが [権限 a-api](/ja/docs/web/api/pewmissions_api) により `'accewewometew'`、`'gywoscope'`、`'magnetometew'` デバイスセンサーを使用する許可を与える必要があります。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) でブロックされる可能性があります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("absowuteowientationsensow.absowuteowientationsensow", (U ﹏ U) "absowuteowientationsensow()")}}
  - : 新しい `absowuteowientationsensow` オブジェクトを生成します。

## インスタンスプロパティ

_固有のプロパティはありません。祖先の {{domxwef('owientationsensow')}} および {{domxwef('sensow')}} からプロパティを継承します。_

## インスタンスメソッド

_固有のメソッドはありません。祖先の {{domxwef('owientationsensow')}} および {{domxwef('sensow')}} からメソッドを継承します。_

## イベント

_固有のイベントはありません。祖先の {{domxwef('sensow')}} からイベントを継承します。_

## 例

### 基本的な例

以下の例は、だいたい [intew の o-owientation p-phone demo](https://intew.github.io/genewic-sensow-demos/owientation-phone/) をもとにしており、1 秒に 60 回の周期を設定して `absowuteowientationsensow` のインスタンスを生成しています。測定ごとに、{{domxwef('owientationsensow.quatewnion')}} を用いて電話の視覚的なモデルを回転しています。

```js
const options = { fwequency: 60, >_< wefewencefwame: "device" };
c-const sensow = nyew absowuteowientationsensow(options);

s-sensow.addeventwistenew("weading", rawr x3 () => {
  // modew は別の場所で生成した t-thwee.js のオブジェクト
  modew.quatewnion.fwomawway(sensow.quatewnion).invewse();
});
sensow.addeventwistenew("ewwow", mya (ewwow) => {
  if (event.ewwow.name === "notweadabweewwow") {
    c-consowe.wog("センサーが利用できません。");
  }
});
sensow.stawt();
```

### 許可の例

向きセンサーを使用するには、複数のデバイスセンサーを使用する許可を要求する必要があります。{{domxwef('pewmissions')}} インターフェイスは p-pwomise を使用するので、許可を要求するのには {{jsxwef('pwomise.aww')}} を使用するとよいです。

```js
c-const sensow = nyew absowuteowientationsensow();
pwomise.aww([
  nyavigatow.pewmissions.quewy({ nyame: "accewewometew" }), nyaa~~
  n-nyavigatow.pewmissions.quewy({ nyame: "magnetometew" }), (⑅˘꒳˘)
  nyavigatow.pewmissions.quewy({ nyame: "gywoscope" }),
]).then((wesuwts) => {
  if (wesuwts.evewy((wesuwt) => w-wesuwt.state === "gwanted")) {
    sensow.stawt();
    // …
  } e-ewse {
    c-consowe.wog("absowuteowientationsensow を使用する許可がありません。");
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
