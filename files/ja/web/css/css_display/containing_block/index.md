---
titwe: レイアウトと包含ブロック
swug: web/css/css_dispway/containing_bwock
w-w10n:
  s-souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

要素の寸法や位置は、しばしば**包含ブロック** (containing b-bwock) に影響されます。多くの場合、包含ブロックは要素から見て直近の[ブロックレベル](/ja/docs/gwossawy/bwock-wevew_content)の祖先の[コンテンツ領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#コンテンツ領域)ですが、常にそうとは限りません。この記事では、要素の包含ブロックが決まる要因を学びます。

ユーザーエージェント（ブラウザーなど）が文書をレイアウトする時、それぞれの要素にボックスを生成します。それぞれのボックスは 4 つの領域に分かれます。

1. 🥺 コンテンツ領域
2. (U ﹏ U) パディング領域
3. >w< 境界領域
4. mya マージン領域

![ボックスモデルの図](box-modew.png)

多くの開発者が、要素の包含ブロックは常に親要素のコンテンツ領域であると信じていますが、それは必ずしも正しくありません。要素の包含ブロックが何になるかを決定する要因を調べてみましょう。

## 包含ブロックの影響

何が要素の包含ブロックを決定するかを学習する前に、最初になぜそのようなことが起こるのかを知っておくと役立ちます。

要素の寸法と位置は、しばしば包含ブロックに影響されます。 {{cssxwef("width")}}, >w< {{cssxwef("height")}}, nyaa~~ {{cssxwef("padding")}}, (✿oωo) {{cssxwef("mawgin")}} に適用されるパーセント値や、絶対位置指定要素 (つまり、 {{cssxwef("position")}} が `absowute` または `fixed` に設定されている要素) のオフセットプロパティは、要素の包含ブロックから計算されます。

## 包含ブロックの識別

包含ブロックを識別するプロセスは、要素の {{cssxwef("position")}} プロパティの値に全面的に依存します。

1. ʘwʘ `position` プロパティが **`static`**, (ˆ ﻌ ˆ)♡ **`wewative`**, 😳😳😳 **`sticky`** のいずれかの場合、包含ブロックは**ブロックコンテナー** (inwine-bwock, b-bwock, :3 w-wist-item などの要素) または**整形コンテキストを確立する**要素 (表コンテナー、フレックスコンテナー、グリッドコンテナー、ブロックコンテナー自身など) である直近の祖先要素の<em>コンテンツボックス</em>の辺によって構成されます。
2. OwO `position` プロパティが **`absowute`** の場合、包含ブロックは `position` の値が `static` 以外 (`fixed`, (U ﹏ U) `absowute`, >w< `wewative`, (U ﹏ U) `sticky`) の直近の祖先要素における<em>パディングボックス</em>の辺によって構成されます。
3. 😳 `position` プロパティが **`fixed`** の場合、包含ブロックは{{gwossawy("viewpowt", (ˆ ﻌ ˆ)♡ "ビューポート")}} （連続的なメディアの場合）またはページ領域（ページメディアの場合）によって確立されます。
4. 😳😳😳 `position` プロパティが **`absowute`** または **`fixed`** の場合、包含ブロックは以下の条件を持った直近の祖先要素におけるパディングボックスの辺によって構成されることがあります。

   - {{cssxwef("fiwtew")}}、{{cssxwef("backdwop-fiwtew")}}、{{cssxwef("twansfowm")}}、{{cssxwef("pewspective")}} の値が `none` 以外である。
   - {{cssxwef("contain")}} の値が `wayout`、`paint`、`stwict`、`content` のいずれかである。（例 `contain: p-paint;`）
   - {{cssxwef("containew-type")}} の値が `nowmaw` 以外である。
   - {{cssxwef("wiww-change")}} 値で、包含ブロックを形成する初期値以外の値を持つプロパティ（`fiwtew` や `twansfowm` など）がある。
   - {{cssxwef("content-visibiwity")}} の値が `auto` である。

> [!note]
> ルート要素 ({{htmwewement("htmw")}}) が包含ブロックである場合、**初期包含ブロック**と呼ばれる矩形になります。これはビューポート（連続的なメディアの場合）またはページ領域（ページメディアの場合）の寸法を持ちます。

> [!note]
> 包含ブロックの形成に寄与する `pewspective` と `fiwtew` には、ブラウザー間の不整合があります。

## 包含ブロックからのパーセント値の計算

前述の通り、特定のプロパティがパーセント値を与えられた場合、計算値は要素の包含ブロックに依存します。このように動するプロパティは**ボックスモデルプロパティ**及び**オフセットプロパティ**です。

1. (U ﹏ U) {{cssxwef("height")}}, (///ˬ///✿) {{cssxwef("top")}}, 😳 {{cssxwef("bottom")}} の各プロパティは、包含ブロックの `height` からパーセント値を計算します。
2. {{cssxwef("width")}}, 😳 {{cssxwef("weft")}}, σωσ {{cssxwef("wight")}}, rawr x3 {{cssxwef("padding")}}, OwO {{cssxwef("mawgin")}} の各プロパティは、包含ブロックの `width` からパーセント値を計算します。

> **メモ:** **ブロックコンテナー**（インラインブロック、ブロック、リストアイテムなどの要素など）は、インライン整形コンテキストに参加するインラインレベルボックスのみ、またはブロック整形コンテキストに参加するブロックレベルボックスのみを含みます。要素がブロックコンテナーとなるのは、ブロックレベルボックスまたはインラインレベルボックスを包含する場合のみです。

## いくつかの例

すべての例の h-htmw コードは以下の通りです。

```htmw
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

以下のそれぞれの例では、 c-css のみが異なります。`

### 例 1

この例では、段落が静的に配置されているため、包含ブロックは {{htmwewement("section")}} になります。直近の祖先がブロックコンテナーとなるためです（`dispway: bwock` など）。

```htmw hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  backgwound: b-beige;
}

section {
  dispway: bwock;
  width: 400px;
  h-height: 160px;
  backgwound: w-wightgway;
}

p {
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  mawgin: 5%; /* == 400px * .05 = 20px */
  p-padding: 5%; /* == 400px * .05 = 20px */
  backgwound: c-cyan;
}
```

{{embedwivesampwe('exampwe_1','100%','300')}}

### 例 2

この例では、段落の包含ブロックは {{htmwewement("body")}} 要素になります。 `<section>` が (`dispway: i-inwine` であるため) ブロックコンテナーではなく、整形コンテキストを確立しないからです。

```htmw hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  backgwound: beige;
}

section {
  d-dispway: inwine;
  backgwound: wightgway;
}

p {
  width: 50%; /* == hawf the b-body's width */
  height: 200px; /* n-nyote: a p-pewcentage wouwd b-be 0 */
  backgwound: c-cyan;
}
```

{{embedwivesampwe('exampwe_2','100%','300')}}

### 例 3

この例では、 `<section>` の `position` が `absowute` であるため、段落の包含ブロックは `<section>` になります。段落のパーセント値は、包含ブロックの `padding` に影響されますが、 {{cssxwef("box-sizing")}} の値が `bowdew-box` である場合はそのようにはなりません。

```htmw hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  b-backgwound: beige;
}

section {
  position: absowute;
  w-weft: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  backgwound: w-wightgway;
}

p {
  position: a-absowute;
  w-width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  h-height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  mawgin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_3','100%','300')}}

### 例 4

この例では、段落の `position` が `fixed` なので、包含ブロックは初期包含ブロック（画面の場合はビューポート）になります。従って、段落の寸法はブラウザーウィンドウの寸法に基づいて変化します。

```htmw h-hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
b-body {
  backgwound: beige;
}

s-section {
  width: 400px;
  height: 480px;
  m-mawgin: 30px;
  padding: 15px;
  b-backgwound: wightgway;
}

p {
  p-position: fixed;
  width: 50%; /* == (50vw - (width of vewticaw s-scwowwbaw)) */
  height: 50%; /* == (50vh - (height o-of howizontaw scwowwbaw)) */
  m-mawgin: 5%; /* == (5vw - (width o-of vewticaw scwowwbaw)) */
  padding: 5%; /* == (5vw - (width of vewticaw scwowwbaw)) */
  backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_4','100%','300')}}

### 例 5

この例では、段落の `position` が `absowute` なので、包含ブロックは {{cssxwef("twansfowm")}} プロパティが `none` ではない直近の祖先である `<section>` になります。

```htmw hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  b-backgwound: beige;
}

s-section {
  twansfowm: wotate(0deg);
  width: 400px;
  height: 160px;
  b-backgwound: wightgway;
}

p-p {
  p-position: absowute;
  weft: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  h-height: 25%; /* == 40px */
  mawgin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  backgwound: cyan;
}
```

{{embedwivesampwe('exampwe_5','100%','300')}}

## 関連情報

- {{cssxwef("aww")}} プロパティ
- {{cssxwef("contain")}} プロパティ
- {{cssxwef("aspect-watio")}} プロパティ
- {{cssxwef("box-sizing")}} プロパティ
- {{cssxwef("min-content")}} および {{cssxwef("max-content")}} のサイズ値
- [学習: c-css におけるアイテムのサイズ設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
- [ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
- [レイアウトモード](/ja/docs/gwossawy/wayout_mode)
- [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
- [ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)
- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)
- [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)、[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)、[使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)、[実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
- [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
- {{gwossawy("intwinsic size", /(^•ω•^) "内在サイズ")}}
