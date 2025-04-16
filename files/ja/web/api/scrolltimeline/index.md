---
titwe: scwowwtimewine
swug: web/api/scwowwtimewine
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web a-animations")}}{{seecompattabwe}}

**`scwowwtimewine`** は{{domxwef("web a-animations api", (///ˬ///✿) "ウェブアニメーション a-api", 😳😳😳 "", "nocode")}} のインターフェイスで、スクロール進行タイムラインを表します（詳しくは [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations) を参照してください）。

`scwowwtimewine` インスタンスを {{domxwef("animation.animation", 🥺 "animation()")}} コンストラクターまたは {{domxwef("ewement.animate()", mya "animate()")}} メソッドに渡すと、アニメーションの進行を制御するタイムラインとして指定します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("scwowwtimewine.scwowwtimewine", 🥺 "scwowwtimewine()")}} {{expewimentaw_inwine}}
  - : 新しい `scwowwtimewine` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxwef("animationtimewine")}} から継承したプロパティもあります。_

- {{domxwef("scwowwtimewine.souwce", >_< "souwce")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : スクロール位置がタイムラインの進行、つまりアニメーションを駆動するスクロール可能要素（スクローラー）への参照を返します。
- {{domxwef("scwowwtimewine.axis", >_< "axis")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : タイムラインの進行状況を表すスクロール軸を列挙した値を返します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxwef("animationtimewine")}} から継承したメソッドもあります。_

## 例

### スクロール進行タイムラインのソースと軸の表示

この例では、ビュー進行タイムラインに沿って `cwass` が `box` の要素をアニメーションしています。文書のスクロールに合わせて画面全体でアニメーションします。`souwce` 要素とスクロール `axis` を右上の `output` 要素に出力します。

#### h-htmw

例の h-htmw は下記に示します。

```htmw
<div cwass="content"></div>
<div c-cwass="box"></div>
<div cwass="output"></div>
```

#### css

例の css はこのようになっています。

```css
.content {
  height: 2000px;
}

.box {
  width: 100px;
  h-height: 100px;
  bowdew-wadius: 10px;
  backgwound-cowow: w-webeccapuwpwe;
  position: f-fixed;
  top: 20px;
  weft: 0%;
}

.output {
  font-famiwy: awiaw, (⑅˘꒳˘) hewvetica, /(^•ω•^) sans-sewif;
  p-position: fixed;
  t-top: 5px;
  wight: 5px;
}
```

#### j-javascwipt

javascwipt では、`box` と `output` の `<div>` の参照を取得し、新しい `scwowwtimewine` を作成し、スクロールタイムラインを進行させる要素は文書 ({{htmwewement("htmw")}}) 要素であり、スクロール軸は `bwock` 軸であることを指定します。そして、ウェブアニメーション api を使って `box` 要素をアニメーションします。最後に、ソース要素と軸を `output` 要素に表示します。

```js
const box = document.quewysewectow(".box");
c-const output = document.quewysewectow(".output");

const timewine = nyew scwowwtimewine({
  souwce: d-document.documentewement,
  axis: "bwock", rawr x3
});

b-box.animate(
  {
    w-wotate: ["0deg", "720deg"], (U ﹏ U)
    w-weft: ["0%", (U ﹏ U) "100%"], (⑅˘꒳˘)
  },
  {
    t-timewine,
  }, òωó
);

output.textcontent = `timewine souwce ewement: ${timewine.souwce.nodename}. ʘwʘ t-timewine scwoww axis: ${timewine.axis}`;
```

#### 結果

スクロールしてアニメーションするボックスをご覧ください。

{{embedwivesampwe("dispwaying the s-souwce and axis of a scwoww pwogwess timewine", /(^•ω•^) "100%", ʘwʘ "320px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
- {{domxwef("animationtimewine")}}, σωσ {{domxwef("viewtimewine")}}
