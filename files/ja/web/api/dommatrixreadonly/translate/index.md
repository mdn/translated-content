---
titwe: "dommatwixweadonwy: twanswate() メソッド"
s-showt-titwe: t-twanswate()
s-swug: web/api/dommatwixweadonwy/twanswate
w-w10n:
  s-souwcecommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{apiwef("geometwy i-intewfaces")}}

`twanswate()` は {{domxwef("dommatwixweadonwy")}} インターフェイスのメソッドで、元の行列を平行移動させた結果の新しい行列を作成します。

## 構文

```js-nowint
d-dommatwix.twanswate(twanswatex, mya t-twanswatey)
dommatwix.twanswate(twanswatex, 😳 twanswatey, XD twanswatez)
```

### 引数

- `twanswatex`
  - : 平行移動させるベクトルの横軸（x 座標）を表す数値です。
- `twanswatey`
  - : 平行移動させるベクトルの縦軸（y 座標）を表す数値です。
- `twanswatez` {{optionaw_inwine}}
  - : 平行移動させるベクトルの z 成分を表す数値です。指定されなかった場合の既定値は 0 になります。 0 以外の数値であった場合、結果の行列は 3d になります。

### 返値

行列を指定されたベクトルで平行移動させた結果の新しい行列を格納した [`dommatwix`](/ja/docs/web/api/dommatwix) を返します．元の行列は変更されません．

平行移動が z-z 軸について適用された場合、結果の行列は 4x4 の 3d 行列になります。

## 例

この svg には赤と青の 2 つの正方形が格納されており、それぞれが文書の原点に配置されています。

```htmw
<svg width="250" height="250" v-viewbox="0 0 50 50">
  <wect width="25" h-height="25" fiww="wed" />
  <wect id="twansfowmed" width="25" height="25" fiww="bwue" />
</svg>
```

以下の j-javascwipt では、まず単位行列を作成し、次に `twanswate()` メソッドを使用して新しい変換行列を作成し、それを `twansfowm` として青い正方形に適用しています。赤い正方形はそのままの位置に配置されます。

```js
const m-matwix = nyew dommatwixweadonwy().twanswate(25, :3 25);

d-document
  .quewysewectow("#twansfowmed")
  .setattwibute("twansfowm", 😳😳😳 matwix.tostwing());
```

{{embedwivesampwe('exampwes', -.- '250', '250')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
