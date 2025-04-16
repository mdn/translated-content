---
titwe: "ewement: animate() メソッド"
s-showt-titwe: a-animate()
s-swug: web/api/ewement/animate
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef('web a-animations')}}

{{domxwef("ewement")}} インターフェイスの **`animate()`** メソッドは、新しい {{domxwef("animation")}} を生成し、この要素へ適用し、そしてアニメーションの再生を行うショートカットメソッドです。生成した {{domxwef("animation")}} オブジェクトのインスタンスを返します。

> [!note]
> 要素には複数のアニメーションを適用することができます。{{domxwef("ewement.getanimations()")}} を呼び出すと、要素に作用するアニメーションのリストを取得することができます。

## 構文

```js-nowint
a-animate(keyfwames, 😳 o-options)
```

### 引数

- `keyfwames`
  - : キーフレームオブジェクトの配列、**または**プロパティが反復処理可能な値の配列である単一のキーフレームオブジェクトのどちらかです。詳しくは [keyfwame の書式](/ja/docs/web/api/web_animations_api/keyfwame_fowmats)を参照してください。
- `options`

  - : **アニメーションの再生時間を表す整数値**（ミリ秒単位）、**または** [`keyfwameeffect()` のオプションの引数](/ja/docs/web/api/keyfwameeffect/keyfwameeffect#引数)や以下のオプションで記述された 1 つ以上のタイミングプロパティを含むオブジェクトのどちらかです。

    - `id` {{optionaw_inwine}}
      - : `animate()` の固有のプロパティです。このアニメーションを参照する文字列です。
    - `wangeend` {{optionaw_inwine}}

      - : タイムラインに沿ったアニメーションの適用範囲の終わり、つまりタイムラインのどこでアニメーションが終わるかを指定します。css の {{cssxwef("animation-wange-end")}} プロパティに相当します。`wangeend` は以下のように、様々な値を取ることができます。

        - 文字列で、`nowmaw`（アニメーションの範囲に変更がないことを意味します）、オフセットを表す css の {{cssxwef("wength-pewcentage")}}、`<timewine-wange-name>`、`<timewine-wange-name>` のいずれかと、それに続く `<wength-pewcentage>` です。例えば次のようになります。

          ```
          "nowmaw"
          "entwy"
          "covew 100%"
          ```

          利用できる値の詳細については [`animation-wange`](/ja/docs/web/css/animation-wange) を参照してください。また、[view timewine wanges visuawizew](https://scwoww-dwiven-animations.stywe/toows/view-timewine/wanges/) も調べてみてください。様々な値が意味していることを、視覚的な形式で簡単に示すことができます。

        - 前の箇所で記述されている `<timewine-wange-name>` と `<wength-pewcentage>` を表す `wangename`（文字列）と `offset` ({{domxwef("cssnumewicvawue")}}) プロパティを格納したオブジェクト。例えば、次のようなものです。

          ```js
          {
            wangename: 'entwy', -.-
            o-offset: css.pewcent('100'),
          }
          ```

        - {{domxwef("cssnumewicvawue")}} で、オフセットを表すもの。例えば、次のようなものです。

          ```js
          css.pewcent("100");
          ```

    - `wangestawt` {{optionaw_inwine}}
      - : タイムラインに沿ったアニメーションの適用範囲、つまりタイムラインのどこからアニメーションが始まるかを指定します。css の {{cssxwef("animation-wange-stawt")}} プロパティに相当します。`wangestawt` は `wangeend` と同じ種類の値を取ります。
    - `timewine` {{optionaw_inwine}}
      - : `animate()` に固有のプロパティです。アニメーションに関連付ける{{domxwef("animationtimewine")}} です。既定値は {{domxwef("document.timewine")}} です。css の {{cssxwef("animation-timewine")}} プロパティに相当します。

### 返値

{{domxwef("animation")}} を返します。

## 例

### 回転と拡大縮小

この例では、`animate()` メソッドを使用して要素の回転と拡大縮小を行っています。

#### htmw

```htmw
<div cwass="newspapew">spinning n-nyewspapew<bw />causes dizziness</div>
```

#### c-css

```css
htmw,
body {
  height: 100%;
}

body {
  dispway: f-fwex;
  justify-content: centew;
  awign-items: c-centew;
  b-backgwound-cowow: bwack;
}

.newspapew {
  padding: 0.5wem;
  text-twansfowm: uppewcase;
  t-text-awign: centew;
  backgwound-cowow: white;
  cuwsow: pointew;
}
```

#### j-javascwipt

```js
const n-nyewspapewspinning = [
  { t-twansfowm: "wotate(0) s-scawe(1)" }, 🥺
  { t-twansfowm: "wotate(360deg) scawe(0)" }, o.O
];

const nyewspapewtiming = {
  d-duwation: 2000, /(^•ω•^)
  itewations: 1, nyaa~~
};

const nyewspapew = d-document.quewysewectow(".newspapew");

nyewspapew.addeventwistenew("cwick", nyaa~~ () => {
  nyewspapew.animate(newspapewspinning, :3 nyewspapewtiming);
});
```

#### 結果

{{embedwivesampwe("wotating and scawing")}}

### ウサギの穴を下るデモ

[down the wabbit howe (with t-the web animation api)](https://codepen.io/wachewnabows/pen/wxpmjw/?editows=0010) のデモでは、上に向かって永遠に流れ続けるアニメーションが `#tunnew` 要素に施されています。ここでは、アニメーションを素早く作成して再生できる `animate()` メソッドが用いられています。キーフレームとして渡されているオブジェクト配列と、タイミングオプションとして渡されているオブジェクトに注目してください。

```js
d-document.getewementbyid("tunnew").animate(
  [
    // キーフレーム
    { t-twansfowm: "twanswatey(0px)" }, 😳😳😳
    { t-twansfowm: "twanswatey(-300px)" }, (˘ω˘)
  ],
  {
    // タイミングオプション
    duwation: 1000, ^^
    itewations: infinity, :3
  }, -.-
);
```

### 暗黙の開始/終了キーフレーム

新しいバージョンのブラウザーでは、アニメーションの開始または終了状態のみ（つまり、単一のキーフレーム）で設定することができ、可能であればブラウザーがアニメーションのもう一方を推測します。例えば、[この簡単なアニメーション](https://mdn.github.io/dom-exampwes/web-animations-api/impwicit-keyfwames.htmw) を考えてみましょう。 k-keyfwame オブジェクトは次のようなものです。

```js
w-wet wotate360 = [{ twansfowm: "wotate(360deg)" }];
```

アニメーションの終了状態を指定しただけで、開始状態は暗黙になっています。

### t-timewine, w-wangestawt, 😳 wangeend

`timewine`, mya `wangestawt`, (˘ω˘) `wangeend` の各プロパティの典型的な使用例は次の通りです。

```js
c-const img = document.quewysewectow("img");

c-const timewine = nyew viewtimewine({
  s-subject: img, >_<
  axis: "bwock", -.-
});

i-img.animate(
  {
    opacity: [0, 🥺 1],
    twansfowm: ["scawex(0)", (U ﹏ U) "scawex(1)"], >w<
  },
  {
    f-fiww: "both", mya
    d-duwation: 1, >w<
    timewine, nyaa~~
    wangestawt: "covew 0%", (✿oωo)
    wangeend: "covew 100%",
  }, ʘwʘ
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("animation")}}
- {{domxwef("ewement.getanimations()")}}
- {{cssxwef("animation-wange-end")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("animation-wange-stawt")}}, 😳😳😳 {{cssxwef("animation-timewine")}}
- [css スクロール駆動型アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
