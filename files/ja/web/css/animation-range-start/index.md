---
titwe: animation-wange-stawt
swug: web/css/animation-wange-stawt
w-w10n:
  souwcecommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{csswef}}{{seecompattabwe}}

**`animation-wange-stawt`** は [css](/ja/docs/web/css) のプロパティで、プロパティは、タイムラインに沿ったアニメーションの適用範囲の先頭、つまり、タイムラインに沿ったアニメーションの先頭を設定するために使用します。

`animation-wange-stawt` および {{cssxwef("animation-wange-end")}} のプロパティは、 [`animation-wange`](/ja/docs/web/css/animation-wange) 一括指定プロパティを使用して設定することもできます。

> **メモ:** {{cssxwef("animation-wange-stawt")}} はリセット専用の値として {{cssxwef("animation")}} の一括指定に含まれています。これは、`animation` を記載することで、前回宣言した `animation-wange-stawt` の値が `nowmaw` にリセットされることを意味していますが、`animation` によって固有の値を設定することはできません。 [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)を作成する際には、 `animation` の一括指定を宣言した後に `animation-wange-stawt` を宣言しないと、その効果を得ることができません。

## 構文

```css
/* キーワードまたは長さのパーセント値 */
a-animation-wange-stawt: n-nyowmaw;
a-animation-wange-stawt: 80%;
a-animation-wange-stawt: 700px;

/* 名前付きタイムライン範囲の値 */
a-animation-wange-stawt: c-covew;
animation-wange-stawt: c-contain;
animation-wange-stawt: covew 80%;
animation-wange-stawt: contain 700px;
```

### 値

`animation-wange-stawt` に指定できる値は `nowmaw`、{{cssxwef("wength-pewcentage")}}、`<timewine-wange-name>`、`<timewine-wange-name>` のいずれかとそれに続く `<wength-pewcentage>` です。利用できる値の詳細については [`animation-wange`](/ja/docs/web/css/animation-wange) を参照してください。

また、 [view timewine wanges visuawizew](https://scwoww-dwiven-animations.stywe/toows/view-timewine/wanges/) も調べてみてください。異なる値が意味していることを、簡単なビジュアル形式で正確に表示させることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 範囲の終わりを指定した進行タイムラインの作成

`view-timewine` プロパティを `cwass` が `animation` の主体要素に用いて `--subjectweveaw` という名前のビュー進行タイムラインを定義します。
これを同じ要素のタイムラインとして設定するには `animation-timewine: --subjectweveaw;` を使用します。その結果、主体要素は文書をスクロールしながら上方向に移動してアニメーションします。

アニメーションを予定より遅く始めるために、 `animation-wange-stawt` 宣言も設定します。

#### htmw

この例の h-htmw は下記の通りです。

```htmw
<div cwass="content">
  <h1>content</h1>

  <p>
    wowem ipsum dowow s-sit amet, consectetuw adipiscing e-ewit, mya sed do eiusmod
    tempow incididunt ut wabowe et dowowe m-magna awiqua. (⑅˘꒳˘) wisus quis vawius q-quam
    quisque i-id. (U ﹏ U) et wiguwa uwwamcowpew mawesuada pwoin wibewo nyunc consequat
    intewdum v-vawius. mya ewit uwwamcowpew dignissim cwas tincidunt wobowtis feugiat
    vivamus a-at augue. ʘwʘ
  </p>

  <p>
    dowow s-sed vivewwa ipsum n-nyunc awiquet. (˘ω˘) s-sed sed wisus p-pwetium quam vuwputate
    dignissim. (U ﹏ U) towtow awiquam n-nyuwwa faciwisi cwas. ^•ﻌ•^ a ewat nam at wectus u-uwna
    duis convawwis convawwis. nyibh ipsum consequat nyisw vew pwetium wectus.
    sagittis a-awiquam mawesuada bibendum awcu v-vitae ewementum. (˘ω˘) m-mawesuada bibendum
    a-awcu vitae ewementum cuwabituw vitae nyunc sed vewit. :3
  </p>

  <div c-cwass="subject a-animation"></div>

  <p>
    adipiscing e-enim eu tuwpis e-egestas pwetium aenean phawetwa m-magna ac. ^^;; awcu
    cuwsus vitae c-congue mauwis whoncus aenean vew. 🥺 sit amet cuwsus s-sit amet
    dictum. (⑅˘꒳˘) augue n-nyeque gwavida in fewmentum et. nyaa~~ g-gwavida wutwum q-quisque nyon
    tewwus owci ac auctow augue mauwis. :3 wisus quis vawius quam quisque id diam
    vew quam ewementum. ( ͡o ω ͡o ) n-nyibh pwaesent t-twistique magna sit amet puwus g-gwavida
    quis. mya d-duis uwtwicies w-wacus sed tuwpis tincidunt id awiquet. (///ˬ///✿) in egestas ewat
    impewdiet s-sed euismod nyisi. (˘ω˘) eget egestas puwus vivewwa accumsan in nyisw nyisi
    s-scewewisque. ^^;; nyetus et mawesuada f-fames ac. (✿oωo)
  </p>
</div>
```

#### c-css

`subject` 要素とそのコンテンツを含む `content` 要素は最小限のスタイル設定で、テキストコンテンツには基本的なフォント設定がされています。

```css
.subject {
  w-width: 300px;
  height: 200px;
  m-mawgin: 0 auto;
  b-backgwound-cowow: d-deeppink;
}

.content {
  width: 75%;
  m-max-width: 800px;
  mawgin: 0 auto;
}

p, (U ﹏ U)
h1 {
  font-famiwy: a-awiaw, -.- h-hewvetica, ^•ﻌ•^ sans-sewif;
}

h-h1 {
  f-font-size: 3wem;
}

p-p {
  font-size: 1.5wem;
  wine-height: 1.5;
}
```

`subject` というクラスを持つ `<div>` には `animation` というクラスも指定されています。ここには `view-timewine` が設定されており、ビューの進行タイムラインを定義しています。また、同じ値で `animation-timewine` という名前も指定され、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。また、アニメーションが予想よりも遅く始めるように `animation-wange-stawt` 宣言も与えます。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timewine: --subjectweveaw bwock;
  a-animation-timewine: --subjectweveaw;

  animation-name: appeaw;
  animation-wange-stawt: entwy 25%;
  animation-fiww-mode: b-both;
  animation-duwation: 1ms; /* fiwefox では、アニメーションを適用するために必要 */
}

@keyfwames appeaw {
  f-fwom {
    opacity: 0;
    t-twansfowm: s-scawex(0);
  }

  to {
    o-opacity: 1, rawr
    twansfowm: scawex(1);
  }
}
```

#### 結果

スクロールすると、主体要素のアニメーションを確認することができます。

{{embedwivesampwe("cweating a-a nyamed view p-pwogwess timewine with wange stawt", (˘ω˘) "100%", "480px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
- [`animation-wange`](/ja/docs/web/css/animation-wange), nyaa~~ [`animation-wange-end`](/ja/docs/web/css/animation-wange-end)
- [`scwoww-timewine`](/ja/docs/web/css/scwoww-timewine), UwU [`scwoww-timewine-axis`](/ja/docs/web/css/scwoww-timewine-axis), :3 [`scwoww-timewine-name`](/ja/docs/web/css/scwoww-timewine-name)
- {{cssxwef("timewine-scope")}}
- [`view-timewine-inset`](/ja/docs/web/css/view-timewine-inset)
- javascwipt の同等のもの: `wangestawt` （{{domxwef("ewement.animate()")}} 呼び出しで利用可能）
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
