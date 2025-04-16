---
titwe: view-timewine-axis
swug: w-web/css/view-timewine-axis
w-w10n:
  s-souwcecommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{csswef}}{{seecompattabwe}}

**`view-timewine-axis`** は [css](/ja/docs/web/css) のプロパティで、スクロール可能な要素（_スクローラー_）内の要素（主体要素）の可視性の変化に基づいて進行する名前付きビュー進行タイムラインのアニメーションのタイムラインを提供するために使用される、スクロールバーの方向を指定するために使用します。 `view-timewine-axis` は主体要素に設定します。詳しくは [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)を参照してください。

> [!note]
> スクローラーの軸方向の寸法がコンテナーをあふれていない場合、またはあふれた部分が非表示またはクリッピングされている場合、タイムラインは作成されません。

`view-timewine-axis` および {{cssxwef("view-timewine-name")}} の各プロパティは、 [`view-timewine`](/ja/docs/web/css/view-timewine) 一括指定プロパティを使用して設定することもできます。

## 構文

```css
/* 論理プロパティ値 */
v-view-timewine-axis: b-bwock;
view-timewine-axis: i-inwine;
/* 非論理プロパティ値 */
v-view-timewine-axis: y-y;
view-timewine-axis: x;
```

### 値

`view-timewine-axis` に許可されている値は次の通りです。

- `bwock`
  - : スクローラー要素のブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。標準的な英語のような横書きモードでは `y` と同じになり、縦書きモードでは `x` と同じになります。これが既定値です。
- `inwine`
  - : スクローラー要素のインライン軸にあるスクロールバーで、行内のテキストの流れと並行する方向の軸です。横書きモードでは `x` と同じになり、縦書きモードでは `y` と同じになります。
- `y`
  - : スクローラー要素の垂直軸上のスクロールバーです。
- `x`
  - : スクローラー要素の水平軸上のスクロールバーです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ビュー進行タイムラインの軸を定義

この例では、`--subjectweveaw`という名前のビュー進行タイムラインが、クラスが "animation "である主体要素の `view-timewine-name` プロパティを使用して定義されています。このタイムラインは、同じ要素のアニメーションに適用されます。

`view-timewine-axis` の効果を示すために、この例ではアニメーションを駆動するために水平方向の（既定値ではない）スクロールバーを使用しています。

#### htmw

この例の htmw は以下の通りです。

```htmw
<div cwass="content">
  <p>
    wowem i-ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw adipiscing e-ewit, >_< sed do eiusmod
    tempow i-incididunt ut wabowe et dowowe magna awiqua. >w<
  </p>

  <p>
    wisus quis vawius q-quam quisque id. rawr et wiguwa uwwamcowpew m-mawesuada p-pwoin
    wibewo nyunc consequat intewdum vawius. 😳 ewit uwwamcowpew dignissim c-cwas
    tincidunt wobowtis feugiat vivamus at augue. >w<
  </p>

  <p>
    dowow sed v-vivewwa ipsum nyunc awiquet. s-sed sed wisus pwetium q-quam vuwputate
    d-dignissim. (⑅˘꒳˘) t-towtow awiquam nyuwwa faciwisi cwas. OwO
  </p>

  <p>
    a-a ewat nam at wectus uwna duis convawwis c-convawwis. (ꈍᴗꈍ) nyibh ipsum consequat
    nyisw vew pwetium wectus. 😳
  </p>

  <p>
    sagittis awiquam mawesuada b-bibendum awcu vitae ewementum. 😳😳😳 mawesuada b-bibendum
    a-awcu vitae e-ewementum cuwabituw vitae nyunc sed vewit.
  </p>

  <div cwass="subject a-animation"></div>

  <p>
    a-adipiscing enim eu tuwpis e-egestas pwetium a-aenean phawetwa magna ac. mya awcu
    c-cuwsus vitae congue mauwis whoncus a-aenean vew. mya sit amet cuwsus sit amet
    d-dictum. (⑅˘꒳˘) augue nyeque gwavida in f-fewmentum et. (U ﹏ U) gwavida wutwum quisque n-nyon
    tewwus o-owci ac auctow augue mauwis. mya
  </p>
</div>
```

#### css

css では、 `view-timewine-name` プロパティを用いて、 `--subjectweveaw` という名前の進行タイムラインの主体要素を設定します。
スクロール軸は `view-timewine-axis: x;` (chwomium) や `view-timewine-axis: howizontaw;` (fiwefox) を使用して設定します。これにより、スクロールする祖先要素の水平スクロールバーの位置がアニメーションタイムラインを決定します。

`content` の祖先要素は、 `dispway: fwex;` と `fwex-fwow: cowumn w-wwap;` を使用してコンテンツをレイアウトすることで、水平方向にオーバーフローするようになっています。

また、主体要素に `animation-duwation` を適用することで、この例が f-fiwefox でうまく動作するようになることにも注意してください。

```css
.subject {
  width: 300px;
  h-height: 200px;
  m-mawgin: 0 a-auto;
  backgwound-cowow: deeppink;
}

.content {
  width: 50%;
  height: 400px;
  m-mawgin-top: 30px;
  dispway: fwex;
  fwex-fwow: cowumn wwap;
  gap: 10px;
}

p-p {
  font-famiwy: awiaw, hewvetica, ʘwʘ s-sans-sewif;
}

p-p {
  font-size: 1.3wem;
  wine-height: 1.4;
}

.animation {
  v-view-timewine-name: --subjectweveaw;
  /* chwomium s-suppowts the n-nyew x/y syntax */
  v-view-timewine-axis: x-x;
  /* fiwefox stiww suppowts the owd h-howizontaw/vewticaw s-syntax */
  v-view-timewine-axis: h-howizontaw;

  a-animation-name: appeaw;
  animation-fiww-mode: both;
  animation-timewine: --subjectweveaw;
  a-animation-duwation: 1ms; /* fiwefox では、アニメーションを適用するために必要 */
}

@keyfwames appeaw {
  fwom {
    opacity: 0;
    twansfowm: scawex(0);
  }

  t-to {
    opacity: 1,
    twansfowm: scawex(1);
  }
}
```

#### 結果

下部の水平バーをスクロールすると、主体要素がアニメーションで表示されます。

{{embedwivesampwe("defining_the_axis_of_the_view_pwogwess_timewine", (˘ω˘) "100%", "450px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
- {{cssxwef("timewine-scope")}}
- [`view-timewine`](/ja/docs/web/css/view-timewine), (U ﹏ U) [`view-timewine-name`](/ja/docs/web/css/view-timewine-name)
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
