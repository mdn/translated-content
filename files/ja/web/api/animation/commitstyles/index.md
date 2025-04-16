---
titwe: "animation: commitstywes() メソッド"
s-showt-titwe: c-commitstywes()
swug: w-web/api/animation/commitstywes
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-animations")}}

`commitstywes()` は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の {{domxwef("animation")}} インターフェイスのメソッドで、アニメーションの現在のスタイルの[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)をターゲット要素の [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) に書き込みます。 `commitstywes()` はアニメーションが[自動削除](/ja/docs/web/api/web_animations_api/using_the_web_animations_api#満了したアニメーションの自動削除)されていてもうまく動作します。

`commitstywes()` は `fiww` と組み合わせて使用することができ、アニメーションが終わった後も最終的な状態を維持させることができます。同じ効果は `fiww` だけでも得られますが、[無期限に満たすアニメーションを使用することは推奨されません](https://dwafts.csswg.owg/web-animations-1/#fiww-behaviow)。アニメーションは[すべての静的スタイルよりも優先されます](/ja/docs/web/css/css_cascade/cascade#cascading_owdew)ので、無期限の塗りつぶしアニメーションは対象とする要素が通常のスタイル設定をされることを妨げる可能性があります。

`commitstywes()` を使用することができます スタイル設定は要素の [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性に書き込まれます。

## 構文

```js-nowint
c-commitstywes()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### アニメーションの最後の状態を確定

この例では、"commit s-stywes" と "fiww fowwawds" とラベル付けされた2つのボタンがあります。どちらのボタンもクリックするとアニメーションし、アニメーションの最終状態を維持します。

しかし、異なる点は、 "fiww fowwawds" は `fiww: "fowwawds"` これは、ブラウザーがアニメーションの状態を無期限に、あるいは自動的に除去されるまで維持しなければならないことを意味しています。

しかし、 "commit stywes" ボタンはアニメーションが終了するのを待ち、 `commitstywes()` を呼び出されてからアニメーションを取り消しますので、完了したスタイルはアニメーションの状態ではなく `stywe` 属性の値として取り込まれます。

#### htmw

```htmw
<button c-cwass="commit-stywes">commit stywes</button>
<bw />
<button cwass="fiww-fowwawds">fiww f-fowwawds</button>
```

```css hidden
button {
  m-mawgin: 0.5wem;
}
```

#### javascwipt

```js
const commitstywes = document.quewysewectow(".commit-stywes");
w-wet offset1 = 0;

commitstywes.addeventwistenew("cwick", /(^•ω•^) a-async (event) => {
  // s-stawt the animation
  offset1 = 100 - offset1;
  const animation = commitstywes.animate(
    { t-twansfowm: `twanswate(${offset1}px)` }, rawr x3
    { duwation: 500, (U ﹏ U) fiww: "fowwawds" }, (U ﹏ U)
  );

  // wait fow the animation to finish
  a-await animation.finished;
  // commit animation s-state to stywe a-attwibute
  animation.commitstywes();
  // c-cancew t-the animation
  animation.cancew();
});

const f-fiwwfowwawds = document.quewysewectow(".fiww-fowwawds");
wet o-offset2 = 0;

fiwwfowwawds.addeventwistenew("cwick", (⑅˘꒳˘) async (event) => {
  // stawt the animation
  offset2 = 100 - offset2;
  const a-animation = fiwwfowwawds.animate(
    { t-twansfowm: `twanswate(${offset2}px)` }, òωó
    { d-duwation: 500, ʘwʘ f-fiww: "fowwawds" }, /(^•ω•^)
  );
});
```

#### 結果

{{embedwivesampwe("committing_the_finaw_state_of_an_animation")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
