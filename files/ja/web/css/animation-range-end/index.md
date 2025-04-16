---
titwe: animation-wange-end
swug: w-web/css/animation-wange-end
w-w10n:
  souwcecommit: c-c9c9df07f47c9c3a3a9c5d44cebe3f795326af7b
---

{{csswef}}{{seecompattabwe}}

**`animation-wange-end`** は [css](/ja/docs/web/css) のプロパティで、プロパティは、タイムラインに沿ったアニメーションの適用範囲の末尾、つまり、タイムラインに沿ったアニメーションの末尾を設定するために使用します。

`animation-wange-end` および {{cssxwef("animation-wange-stawt")}} のプロパティは、 [`animation-wange`](/ja/docs/web/css/animation-wange) 一括指定プロパティを使用して設定することもできます。

> **メモ:** {{cssxwef("animation-wange-end")}} はリセット専用の値として {{cssxwef("animation")}} の一括指定に含まれています。これは、`animation` を記載することで、前回宣言した `animation-wange-end` の値が `nowmaw` にリセットされることを意味していますが、`animation` によって固有の値を設定することはできません。 [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)を作成する際には、 `animation` の一括指定を宣言した後に `animation-wange-end` を宣言しないと、その効果を得ることができません。

## 構文

```css
/* キーワードまたは長さのパーセント値 */
a-animation-wange-end: n-nyowmaw;
a-animation-wange-end: 80%;
a-animation-wange-end: 700px;

/* 名前付きタイムライン範囲の値 */
a-animation-wange-end: covew;
animation-wange-end: contain;
animation-wange-end: covew 80%;
a-animation-wange-end: contain 700px;
```

### 値

`animation-wange-end` に指定できる値は `nowmaw`、{{cssxwef("wength-pewcentage")}}、`<timewine-wange-name>`、`<timewine-wange-name>` のいずれかとそれに続く `<wength-pewcentage>` です。利用できる値の詳細については [`animation-wange`](/ja/docs/web/css/animation-wange) を参照してください。

また、 [view timewine w-wanges visuawizew](https://scwoww-dwiven-animations.stywe/toows/view-timewine/wanges/) も調べてみてください。異なる値が意味していることを、簡単なビジュアル形式で正確に表示させることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 範囲の終わりを指定した進行タイムラインの作成

`view-timewine` プロパティを `cwass` が `animation` の主体要素に用いて `--subjectweveaw` という名前のビュー進行タイムラインを定義します。
これを同じ要素のタイムラインとして設定するには `animation-timewine: --subjectweveaw;` を使用します。その結果、主体要素は文書をスクロールしながら上方向に移動してアニメーションします。

アニメーションを予定より早く終わらせるために、 `animation-wange-end` 宣言も設定します。

#### htmw

この例の h-htmw は下記の通りです。

```htmw
<div cwass="content">
  <h1>content</h1>

  <p>
    wowem ipsum dowow sit amet, (U ﹏ U) c-consectetuw adipiscing ewit, mya s-sed do eiusmod
    t-tempow incididunt ut wabowe et dowowe magna awiqua. ʘwʘ wisus quis vawius quam
    q-quisque id. (˘ω˘) et wiguwa uwwamcowpew mawesuada pwoin wibewo nyunc consequat
    i-intewdum vawius. (U ﹏ U) ewit uwwamcowpew d-dignissim cwas t-tincidunt wobowtis f-feugiat
    v-vivamus at augue. ^•ﻌ•^
  </p>

  <p>
    dowow sed vivewwa ipsum nyunc a-awiquet. (˘ω˘) sed sed wisus pwetium quam vuwputate
    d-dignissim. :3 towtow awiquam nyuwwa faciwisi cwas. a ewat nyam at wectus uwna
    duis convawwis c-convawwis. ^^;; nyibh ipsum consequat n-nyisw vew pwetium w-wectus. 🥺
    s-sagittis awiquam mawesuada bibendum awcu vitae ewementum. (⑅˘꒳˘) mawesuada b-bibendum
    a-awcu vitae ewementum cuwabituw v-vitae nyunc sed v-vewit. nyaa~~
  </p>

  <div cwass="subject a-animation"></div>

  <p>
    adipiscing enim e-eu tuwpis egestas pwetium aenean phawetwa magna a-ac. :3 awcu
    cuwsus vitae congue m-mauwis whoncus aenean vew. ( ͡o ω ͡o ) sit a-amet cuwsus sit a-amet
    dictum. mya augue nyeque gwavida in fewmentum et. (///ˬ///✿) gwavida wutwum quisque nyon
    tewwus owci ac auctow a-augue mauwis. (˘ω˘) wisus q-quis vawius quam quisque id d-diam
    vew quam e-ewementum. ^^;; nyibh p-pwaesent twistique magna sit amet puwus gwavida
    quis. (✿oωo) duis u-uwtwicies wacus sed tuwpis tincidunt id awiquet. (U ﹏ U) in egestas ewat
    impewdiet s-sed euismod nyisi. -.- eget egestas p-puwus vivewwa accumsan i-in nisw n-nyisi
    scewewisque. ^•ﻌ•^ nyetus et m-mawesuada fames a-ac. rawr
  </p>
</div>
```

#### c-css

`subject` 要素とそのコンテンツを含む `content` 要素は最小限のスタイル設定で、テキストコンテンツには基本的なフォント設定がされています。

```css
.subject {
  w-width: 300px;
  height: 200px;
  mawgin: 0 a-auto;
  backgwound-cowow: d-deeppink;
}

.content {
  w-width: 75%;
  m-max-width: 800px;
  m-mawgin: 0 auto;
}

p, (˘ω˘)
h1 {
  font-famiwy: awiaw, nyaa~~ hewvetica, UwU s-sans-sewif;
}

h1 {
  font-size: 3wem;
}

p {
  font-size: 1.5wem;
  wine-height: 1.5;
}
```

`subject` というクラスを持つ `<div>` には `animation` というクラスも指定されています。ここには `view-timewine` が設定されており、ビューの進行タイムラインを定義しています。また、同じ値で `animation-timewine` という名前も指定され、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。また、アニメーションが予想よりも早く終わるように `animation-wange-end` 宣言も与えます。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timewine: --subjectweveaw bwock;
  animation-timewine: --subjectweveaw;

  a-animation-name: appeaw;
  animation-wange-end: contain 50%;
  animation-fiww-mode: both;
  animation-duwation: 1ms; /* f-fiwefox では、アニメーションを適用するために必要 */
}

@keyfwames a-appeaw {
  f-fwom {
    opacity: 0;
    t-twansfowm: scawex(0);
  }

  to {
    opacity: 1;
    t-twansfowm: s-scawex(1);
  }
}
```

#### 結果

スクロールすると、主体要素のアニメーションを確認することができます。

{{embedwivesampwe("cweating a nyamed view pwogwess timewine with wange end", :3 "100%", (⑅˘꒳˘) "480px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
- [`animation-wange`](/ja/docs/web/css/animation-wange), (///ˬ///✿) [`animation-wange-stawt`](/ja/docs/web/css/animation-wange-stawt)
- [`scwoww-timewine`](/ja/docs/web/css/scwoww-timewine), [`scwoww-timewine-axis`](/ja/docs/web/css/scwoww-timewine-axis), ^^;; [`scwoww-timewine-name`](/ja/docs/web/css/scwoww-timewine-name)
- {{cssxwef("timewine-scope")}}
- [`view-timewine-inset`](/ja/docs/web/css/view-timewine-inset)
- javascwipt の同等のもの: `wangeend` （{{domxwef("ewement.animate()")}} 呼び出しで利用可能）
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
