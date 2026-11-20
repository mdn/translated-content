---
title: CSS スクロールトリガーアニメーションの使用
short-title: Scroll-triggered animations
slug: Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

CSS の**スクロールトリガーアニメーション**は、ユーザーが要素（または別の要素）をスクロールポート内の指定位置までスクロールしたときに、その要素の {{domxref("DocumentTimeline")}} ベースの [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)を開始、一時停止、停止、または逆再生する宣言的な仕組みを提供します。

この記事では、CSS スクロールトリガーアニメーションの作成方法を説明します。

## スクロールトリガーアニメーションの概念

よくある UI パターンとして、ユーザーがコンテンツ内の特定の位置までスクロールしたときに、ウェブページ上のアニメーションを起動する方法があります。例えば、追加の UI 要素を表示したり、特定の詳細にユーザーの注意を向けたりできます。

CSS スクロールトリガーアニメーションを使うと、通常の時間ベースの [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)を開始および停止する、スクロールベースのトリガーを定義できます。{{glossary("scroll container", "スクロールコンテナー")}}内にトリガー位置を定義すると、追跡対象の要素がスクロールポート内のその位置に達したときに、その要素またはまったく別の要素に適用されたアニメーションの再生状態を切り替えられます。

> [!NOTE]
> スクロールトリガーアニメーションは、スクロール時にアニメーションを起動するために、フレームワークや[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) などの JavaScript 機能を使う方法に代わるものです。CSS スクロールトリガーアニメーションはパフォーマンスに優れ、実装もより簡単と言えるでしょう。

### スクロールトリガーアニメーションとスクロール駆動アニメーションの比較

スクロールトリガーアニメーションは [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)と似ていますが、次の点が異なります。

- スクロールトリガーアニメーションは、トリガーが有効になると再生される通常の時間ベースのアニメーションです。アニメーションの開始ごとに {{cssxref("animation-delay")}} が適用され、ユーザーのスクロール速度にかかわらず、各反復は {{cssxref("animation-duration")}} で定義された時間で必ず完了します。
- スクロール駆動アニメーションでは、通常の時間ベースのアニメーションタイムラインがスクロールベースのタイムラインに置き換わります。そのため、コンテンツの先頭や末尾に向けてスクロールするとアニメーションがそれぞれ順方向または逆方向に進み、速くスクロールするほどアニメーションも速くなります。スクロール駆動アニメーションは `animation-duration` と `animation-delay` プロパティを無視します。

## スクロールトリガーアニメーションの基本

スクロールトリガーアニメーションの動作を示す基本的な例を見てみましょう。画像が表示領域に入ったり、そこから出たりすると、その画像のキャプションがフェードインまたはフェードアウトします。この例では次のようにします。

- {{htmlelement("figcaption")}} 要素に {{cssxref("@keyframes")}} アニメーション、つまりフェードイン効果を設定します。このアニメーションがトリガーされるアニメーションです。
- アニメーションアクションとして、トリガーが有効化されたときにアニメーションを順方向に再生してキャプションをフェードインし、トリガーが無効化されたときに逆方向に再生してキャプションをフェードアウトするよう指定します。
- アニメーショントリガーは `<img>` 要素に定義します。`<img>` がスクロールポートに入り始めると有効化され、スクロールポートから完全に出ると無効化されます。つまり、スクロールポート全体がタイムライン範囲、`<img>` が追跡対象の要素、`<figcaption>` がアニメーション対象の要素です。
- [`view()`](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名ビュー進行タイムライン_view_関数) 関数で作成した[無名ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名ビュー進行タイムライン_view_関数)を、{{htmlelement("img")}} 要素のトリガーソースに設定します。

コンテンツを上下にスクロールすると、`<img>` がスクロールポート内に現れ始めた時点でキャプションのアニメーションが始まり、`<img>` がスクロールポートから出るとアニメーションが逆再生されます。この基本的な例では望みどおりの効果にはなりませんが、ほかの機能を学びながら改善していくためのよい出発点です。

HTML には複数の段落があり、その途中に {{htmlelement("figure")}} 要素があり、その中に `<img>` と `<figcaption>` を含みます。簡潔にするため、ソース全体は示していません。

```html-nolint
...

<p>...</p>

<figure>
  <img
    src="jungle-coast.jpg"
    alt="木々の向こうに岩場の海岸を望む景色" />
  <figcaption>ジャングルの海岸の景色</figcaption>
</figure>

<p>...</p>

...
```

```html hidden live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___play-once
<h1>ケアンズの情報</h1>

<p>
  オーストラリア東部に位置するケアンズの周辺地域は、多様な景観、豊かな緑、独特の自然の見どころに恵まれた、息をのむほど美しい地域です。
</p>

<p>
  グレートディバイディング山脈ときらめく珊瑚海に挟まれたこの地域には、熱帯雨林、手つかずのビーチ、雄大な山脈が織りなす素晴らしい景色が広がっています。
</p>

<p>
  街を離れると、湿潤熱帯地域世界遺産地域の緑豊かな熱帯雨林が広がります。そびえ立つ古木、色鮮やかなシダ、流れ落ちる滝が、穏やかで幻想的な雰囲気を作り出します。
</p>
<p>
  豊かな下草の中を探索すると、色鮮やかな鳥、樹上に暮らす哺乳類、珍しい爬虫類など、固有の野生生物に出会えることがあります。
  鳥のさえずりと水の流れる音が自然の交響曲に加わり、この魅力的な原生地域に深く浸る体験をもたらします。
</p>

<p>
  さらに進むと、肥沃な農地、なだらかな丘陵、美しい湖で知られる高原、アサートン高原にたどり着きます。
  この農業の中心地には、さまざまな新鮮な農産物を作る小さな町や農場が点在しています。
</p>
<p>
  サトウキビ畑、バナナ農園、酪農場が見渡す限り広がり、遠くの山々を背景に鮮やかな緑のパッチワークを作り出しています。この地域は滝でも有名です。
  例えば、ミラミラ滝では、透き通った水が緑豊かな崖を流れ落ち、涼やかな憩いの場となっています。
</p>

<figure>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
    alt="葉の上にとまり、赤、白、金色の模様がある羽を持つ蝶" />
  <figcaption>ケアンズ近くのジャングルで見られる美しい蝶</figcaption>
</figure>

<p>
  ケアンズ周辺を訪れたら、珊瑚海沿いの美しいビーチをぜひ探索してください。パームコーブからミッションビーチまで、海岸線には黄金色の砂浜、揺れるヤシの木、青く澄んだ海が続きます。こ
  うした理想的なビーチは、くつろいだり、泳いだり、ウォータースポーツを楽しんだりするのに最適です。
</p>
<p>
  シュノーケリング愛好家は、海岸のすぐ沖に広がるユネスコ世界遺産、グレートバリアリーフの魅力も発見できます。
  この活気あふれる海中生態系には、色鮮やかなサンゴ礁、熱帯魚、ウミガメなど、驚くほど多様な海洋生物が生息しています。
</p>

<p>
  最後に、周辺地域には数多くの国立公園や山々があります。例えば、バロン渓谷国立公園には、険しい地形、深い渓谷、轟音を立てて流れ落ちる滝があります。
</p>
<p>
  息をのむような展望地へ続くハイキングコースを歩けば、熱帯雨林に覆われた周囲の山々や谷を一望できます。
  さらに西には、グレートディバイディング山脈の高峰がそびえ、ゴードンベール近くの象徴的なウォルシュズ・ピラミッドなど、冒険的なハイキングや景勝地の探索を楽しめます。
</p>
```

まず、`<figcaption>` に適用する `fade-in` アニメーションの {{cssxref("@keyframes")}} を定義します。

```css live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

```css hidden live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once
body {
  width: 80%;
  margin: 0 auto;
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
}

figure {
  display: block;
  margin: 0 auto;
  max-width: 60%;
  position: relative;
}

img {
  max-width: 100%;
  border: 3px solid black;
}

h1 {
  font-size: 3rem;
}

p {
  line-height: 1.5;
}

figcaption {
  font-size: 1rem;
  padding: 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  border: 3px solid black;
  background: white;
}
```

最初の宣言ブロックでは、アニメーション、アニメーショントリガー、およびアニメーションアクションを {{htmlelement("figcaption")}} 要素に適用します。

1. {{cssxref("animation")}} 一括指定を使って、`fade-in` アニメーションを `<figcaption>` に適用します。トリガーがなければ、ページの読み込み直後に `<figcaption>` がフェードインします。
2. {{cssxref("animation-trigger")}} プロパティを使い、どの要素がトリガーを提供するか、およびトリガーのアクションを指定して、{{htmlelement("img")}} 要素が表示領域にスクロールされるまでアニメーションの開始を遅らせます。`animation-trigger` の値は次の成分で構成されます。
   - {{cssxref("dashed-ident")}} 値 `--t`。トリガー要素の {{cssxref("timeline-trigger-name")}} プロパティの値として設定する識別子です。
   - {{cssxref("&lt;animation-action>")}} 値 2 つ。トリガーの有効化時と無効化時にアニメーションがどう動作するか（[アニメーションアクション](#アニメーションのアクションの調整)）を指定します。トリガーが有効化されたときは `<figcaption>` のアニメーションを順方向に再生し、無効化されたときは逆方向に再生します。

```css live-sample___basic-scroll-triggered live-sample___adjust-range live-sample___set-active-range
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
}
```

2 つ目の宣言ブロックで、アニメーショントリガーを作成します。

1. `timeline-trigger-name` プロパティを使い、`<img>` 要素に作成するトリガーの識別名を指定します。これは、`<figcaption>` 要素の `animation-trigger` 値で参照するトリガー名と同じ二重ダッシュ付き識別子です。
2. {{cssxref("timeline-trigger-source")}} プロパティを使って、アニメーショントリガーの種類を作成します。[`view()`](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名ビュー進行タイムライン_view_関数) 関数を指定すると、トリガーの種類は[無名ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名ビュー進行タイムライン_view_関数)になります。そのデフォルトの[有効化範囲](#トリガーの有効化範囲の調整)は `cover` の[タイムライン範囲](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)と同じです。

```css live-sample___basic-scroll-triggered
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

デフォルトでは、`view()` 関数で作成される {{domxref("ViewTimeline")}} は、最も近い親スクローラーのブロック軸に沿って `<img>` 要素の位置を追跡します。この例で追跡される `<img>` 要素を**主体**または**追跡対象の要素**と呼びます。

デフォルトでは、ブロック方向に追跡対象の要素がタイムライン範囲の先頭までスクロールされるとトリガーが有効化され、末尾までスクロールされると無効化されます。これにより、`<figcaption>` のアニメーションは順方向および逆方向に再生されます。追跡対象の要素が[**有効化範囲**](/ja/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#解説)に入ると有効化され、[**作動範囲**](/ja/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#解説)から出ると無効化されます。`timeline-trigger-source` を `view()` に設定した場合、デフォルトの有効化範囲と作動範囲は `cover` になります。これは、追跡対象の要素の先頭側の境界線がスクロールポートに入り始めてから、末尾側の境界線が完全にスクロールポートから出るまでの範囲です。

この例は次のように描画されます。

{{embedlivesample("basic-scroll-triggered", "100%", 500)}}

画像を下側または上側からスクロールしてくると、画像の一部がスクロールポート内に見えた時点で、すぐにキャプションがフェードインします。画像全体がスクロールポートから出るまではフェードアウトしないため、フェードアウト効果は確認できません。画像を再び表示領域内にスクロールすると、キャプションはもう一度フェードインします。

## 同じ要素でのトリガーの作成

前の例では、トリガーは `<img>` 要素に定義し、`<figcaption>` をアニメーションさせました。アニメーション対象の要素自体にトリガーを定義することもできます。前の例を変更して、アニメーション対象の {{htmlelement("figcaption")}} 要素にトリガーを作成してみましょう。

HTML は前の例と同じです。CSS は `timeline-trigger-*` プロパティを設定する場所だけが異なります。

今回は、{{cssxref("animation")}}、{{cssxref("animation-trigger")}}、{{cssxref("timeline-trigger-name")}}、{{cssxref("timeline-trigger-source")}} の各プロパティをすべて `<figcaption>` 要素に設定します。これにより、`<figcaption>` がスクロールポートに現れたときにアニメーションします。前の例では `<figcaption>` がアニメーション対象、`<img>` が追跡対象でしたが、今度はキャプションが両方の役割を担います。

```css live-sample___same-element-trigger
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

更新後の描画は次のようになります。

{{embedlivesample("same-element-trigger", "100%", 500)}}

この場合、画像ではなく `<figcaption>` 自体が初めてスクロールポートに入ったときにフェードインします。

## トリガーの有効化範囲の調整

前の例では、追跡対象の要素のブロック辺がスクロールポートの一方の端から入り始めるとトリガーが有効化され（`fade-in` が始まり）、反対側の端から完全に出ると無効化されます（`fade-in` が逆再生され、フェードアウトが始まります）。その結果、フェードアウトは表示されません。これは、`view()` を `timeline-trigger-source` に指定したとき、デフォルトの有効化範囲と作動範囲（{{cssxref("timeline-range-name")}} を参照）がどちらも `cover` になるためです。

フェードアウトアニメーションを表示するには、{{cssxref("timeline-trigger-activation-range-start")}} プロパティと {{cssxref("timeline-trigger-activation-range-end")}} プロパティで有効化範囲の先頭と末尾をそれぞれずらすか、{{cssxref("timeline-trigger-activation-range")}} 一括指定で両方の値を 1 つの宣言に設定します。これらのプロパティには次の値を指定できます。

- デフォルト値の `normal`。
- デフォルト範囲内の位置を指定する {{cssxref("length-percentage")}} 値。
- 名前付き範囲を指定する {{cssxref("timeline-range-name")}} キーワード。
- 名前付き範囲内の位置を指定する `timeline-range-name` と `<length-percentage>`。

パーセント値は `<timeline-range-name>` の長さを基準とします。この例の[ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#ビュー進行タイムライン)では `cover` に解決されます。{{cssxref("timeline-trigger-source")}} に [`scroll()`](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#スクロール進行タイムライン)を設定した場合、デフォルトの `<timeline-range-name>` は `scroll` に解決されます。`<timeline-range-name>` の値については[タイムライン範囲名](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)を参照してください。

次の例では、`entry` 範囲の途中、つまり追跡対象の要素の `50%` がスクロールポートのブロック辺の一方から入った時点でトリガーが有効化されます。また、`exit` 範囲の `0%` の位置、つまり追跡対象の要素の `50%` が反対側のブロック辺からスクロールポートの外に出た時点で無効化されます。

```css
timeline-trigger-activation-range: entry 50% exit 0%;
```

効果を確認できるよう、最初の例にこの指定を適用してみましょう。`img` の宣言ブロックを次のように更新します。

```css live-sample___adjust-range
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 0%;
}
```

更新後の描画は次のようになります。

{{embedlivesample("adjust-range", "100%", 500)}}

`<figcaption>` のアニメーションが少し実用的になりました。`<img>` の大部分が末尾側の端からスクロールポートに入ったときにのみフェードインが始まり、`<img>` が先頭側の端からスクロールポートの外へ出始めたときにフェードアウトが始まります。コンテンツを再び下方向へスクロールすると、トリガーが再有効化され、スクロールポートの先頭側の端で再びフェードインし、末尾側の端で再び無効化されます。

## 独自の作動範囲の設定

**作動範囲**は、トリガーが有効化された後、有効な状態を維持する範囲です。デフォルトでは作動範囲は有効化範囲と同じです。そのため、これまでの例では有効化と無効化の範囲は同じでした。

{{cssxref("timeline-trigger-active-range-start")}} プロパティと {{cssxref("timeline-trigger-active-range-end")}} プロパティを使うと、有効化範囲とは異なる作動範囲を設定できます。{{cssxref("timeline-trigger-active-range")}} 一括指定を使えば、両方の値を 1 つの宣言で設定できます。

例えば、アニメーショントリガーは狭い有効化範囲内でのみ有効化しつつ、より広い作動範囲にわたって有効な状態を保ちたい場合など、アニメーションが完了するまでの時間を延ばすために使えます。追跡対象の要素が作動範囲の外に出たときにのみトリガーは無効になります。その後、主体を有効化範囲内に戻すと、再び有効化できます。

作動範囲の効果を示すため、これまでの例を発展させてみましょう。HTML は同じですが、クラス `.one` と `.two` を持つ同一の `<figure>` 要素を 2 つ用意し、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)を使って横に並べています。そのため、両方が同時に表示領域に出入りします。どちらの場合も、`<img>` が兄弟のアニメーション対象 `<figcaption>` の追跡対象になります。

```html
<div class="figure-wrapper">
  <figure class="one">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="葉の上にとまり、赤、白、金色の模様がある羽を持つ蝶" />
    <figcaption>ケアンズ近くのジャングルで見られる美しい蝶</figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="葉の上にとまり、赤、白、金色の模様がある羽を持つ蝶" />
    <figcaption>ケアンズ近くのジャングルで見られる美しい蝶</figcaption>
  </figure>
</div>
```

```html hidden live-sample___set-active-range
<h1>ケアンズの情報</h1>

<p>
  オーストラリア東部に位置するケアンズの周辺地域は、多様な景観、豊かな緑、独特の自然の見どころに恵まれた、息をのむほど美しい地域です。
</p>

<p>
  グレートディバイディング山脈ときらめく珊瑚海に挟まれたこの地域には、熱帯雨林、手つかずのビーチ、雄大な山脈が織りなす素晴らしい景色が広がっています。
</p>

<p>
  街を離れると、湿潤熱帯地域世界遺産地域の緑豊かな熱帯雨林が広がります。そびえ立つ古木、色鮮やかなシダ、流れ落ちる滝が、穏やかで幻想的な雰囲気を作り出
  します。
</p>
<p>
  豊かな下草の中を探索すると、色鮮やかな鳥、樹上に暮らす哺乳類、珍しい爬虫類など、固有の野生生物に出会えることがあります。鳥のさえずりと水の流れる音が
  自然の交響曲に加わり、この魅力的な原生地域に深く浸る体験をもたらします。
</p>

<p>
  さらに進むと、肥沃な農地、なだらかな丘陵、美しい湖で知られる高原、アサートン高原にたどり着きます。この農業の中心地には、さまざまな新鮮な農産物を作る
  小さな町や農場が点在しています。
</p>
<p>
  サトウキビ畑、バナナ農園、酪農場が見渡す限り広がり、遠くの山々を背景に鮮やかな緑のパッチワークを作り出しています。この地域は滝でも有名です。例えば、
  ミラミラ滝では、透き通った水が緑豊かな崖を流れ落ち、涼やかな憩いの場となっています。
</p>

<div class="figure-wrapper">
  <figure class="one">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="葉の上にとまり、赤、白、金色の模様がある羽を持つ蝶" />
    <figcaption>ケアンズ近くのジャングルで見られる美しい蝶</figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="葉の上にとまり、赤、白、金色の模様がある羽を持つ蝶" />
    <figcaption>ケアンズ近くのジャングルで見られる美しい蝶</figcaption>
  </figure>
</div>

<p>
  ケアンズ周辺を訪れたら、珊瑚海沿いの美しいビーチをぜひ探索してください。パームコーブからミッションビーチまで、海岸線には黄金色の砂浜、揺れるヤシの木
  、青く澄んだ海が続きます。こうした理想的なビーチは、くつろいだり、泳いだり、ウォータースポーツを楽しんだりするのに最適です。
</p>
<p>
  シュノーケリング愛好家は、海岸のすぐ沖に広がるユネスコ世界遺産、グレートバリアリーフの魅力も発見できます。この活気あふれる海中生態系には、色鮮やかな
  サンゴ礁、熱帯魚、ウミガメなど、驚くほど多様な海洋生物が生息しています。
</p>

<p>
  最後に、周辺地域には数多くの国立公園や山々があります。例えば、バロン渓谷国立公園には、険しい地形、深い渓谷、轟音を立てて流れ落ちる滝があります。
</p>
<p>
  息をのむような展望地へ続くハイキングコースを歩けば、熱帯雨林に覆われた周囲の山々や谷を一望できます。さらに西には、グレートディバイディング山脈の高峰
  がそびえ、ゴードンベール近くの象徴的なウォルシュズ・ピラミッドなど、冒険的なハイキングや景勝地の探索を楽しめます。
</p>
```

前の例と同じ `animation` を両方の `<figcaption>` 要素に適用しますが、それぞれの `animation-trigger` プロパティ値では異なる `timeline-trigger-name` 値を参照します。

```css live-sample___set-active-range
figcaption {
  animation: fade-in 0.4s ease-in both;
}

.one figcaption {
  animation-trigger: --t1 play-forwards play-backwards;
}

.two figcaption {
  animation-trigger: --t2 play-forwards play-backwards;
}
```

両方の `<img>` 要素に同じ `timeline-trigger-source` と `timeline-trigger-activation-range` を設定します。それぞれの `<img>` 要素の `timeline-trigger-name` は、前のコードブロックで指定した 2 つの異なる二重ダッシュ付き識別子を参照します。つまり、各 `<img>` に作成されたトリガーが、それぞれの兄弟 `<figcaption>` のアニメーションを起動します。

`timeline-trigger-activation-range: contain 40% contain 60%` 宣言は、追跡対象の要素が狭い範囲、つまりスクロールポートの中央 `20%` に達したときにトリガーが有効化され、アニメーションが再生されることを意味します。主体がこの狭い範囲から出ると、トリガーは無効化されます。

デフォルトでは、有効化範囲と作動範囲は同じです。ただし、2 つ目の `<img>` には `timeline-trigger-active-range` に `entry 50% exit 100%` の範囲も設定しています。これにより、2 つ目の `<figcaption>` は一度フェードインすると、2 つ目の `<img>` が `exit 100%` までスクロールされたとき、つまりスクロールポートから完全に出たときにのみ、再びフェードアウトします。

```css live-sample___set-active-range
img {
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 40% contain 60%;
}

.one img {
  timeline-trigger-name: --t1;
}

.two img {
  timeline-trigger-name: --t2;
  timeline-trigger-active-range: entry 50% exit 100%;
}
```

> [!NOTE]
> 効果を得るには、`timeline-trigger-active-range` を `timeline-trigger-activation-range` より広い範囲に設定する必要があります。

```css hidden live-sample___set-active-range
.figure-wrapper {
  display: flex;
  gap: 20px;
}

figcaption {
  left: 5px;
  right: -1px;
}
```

この例は次のように描画されます。

{{embedlivesample("set-active-range", "100%", 500)}}

画像を表示領域に入れた後、注意しながら上下にスクロールしてみてください。埋め込みページの下からおよそ 3 分の 1 の位置で、両方のキャプションが同時にフェードインします。1 つ目のキャプションは少し上にスクロールするとフェードアウトしますが、2 つ目は完全にスクロールポートの外に出るまでフェードアウトしません。これは、両方の `<img>` トリガーの有効化範囲は同じ一方、2 つ目には有効化範囲よりかなり広い作動範囲を適用しているためです。

## timeline-trigger 一括指定

これまでは、各プロパティとその値を詳しく説明するため、スクロールトリガーアニメーションの CSS を一括指定と個別指定を組み合わせて記述してきました。しかし、この方法は煩雑で冗長です。概念を理解できたので、{{cssxref("timeline-trigger")}} 一括指定を使って、同じ内容を最短で記述できます。今後のプロジェクトでは、この一括指定を選ぶことになるでしょう。

次の宣言を例にします。

```css
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 25% contain 75%;
  timeline-trigger-active-range: entry 0% exit 100%;
}
```

これらは `timeline-trigger` 一括指定を使って、1 行の CSS に書き換えられます。

```css
img {
  timeline-trigger: --t view() contain 25% contain 75% / entry 0% exit 100%;
}
```

## アニメーションのアクションの調整

このガイドのこれまでの例では、`fade-in` アニメーションをトリガーし、キャプションをフェードインおよびフェードアウトさせてきました。順方向または逆方向への再生は、アニメーション対象の要素に設定した `animation-trigger` 宣言で制御します。

```css
animation-trigger: --t play-forwards play-backwards;
```

{{cssxref("animation-action")}} 値 `play-forwards` と `play-backwards` は、トリガーが有効化されたときはアニメーションを順方向に、無効化されたときは逆方向に再生することを指定します。最初の値はアニメーションの有効化アクション、2 つ目の値は無効化アクションです。

同じ要素に次の `animation` 宣言を設定すると、

```css
animation: fade-in 1s ease-in both;
```

トリガーが有効化されたときにアニメーションが 1 回だけ再生され、無効化されたときに逆方向に 1 回再生されます。`animation` 一括指定で {{cssxref("animation-iteration-count")}} を指定していないため、デフォルト値の `1` が使われます。

ほかの `animation-action` 値を設定すると、異なる効果を得ることができます。例えば、

- `play-once` はアニメーションを 1 回だけ再生します。再生が終わると、その後に有効化または無効化されても再生されません。
- `play` は、直前に再生していた方向でアニメーションを再生します。一方、`play-forwards` と `play-backwards` は、アニメーションの {{domxref("Animation.playbackRate", "playbackRate")}} と連動し、それぞれ絶対値の正の値、またはその値に `-1` を掛けた値を設定します。その結果、アニメーションは順方向または逆方向に再生されます。{{cssxref("animation-direction")}} の値には影響しません。
- `pause` はアニメーションを一時停止します。例えば、アニメーションの反復回数を `infinite` にし、対応する `animation-trigger` に `--t play pause` を設定できます。これにより、トリガーが有効化されたときにアニメーションが再生され、無効化されたときに一時停止します。
- `reset` は `pause` と同じ効果に加えて、アニメーションの進行状況を `0` に戻します。

これらの値の中には、組み合わせて使うよう設計されたものもあります。例えば `play-forwards play-backwards` は、アニメーションの最終的な視覚効果で再生方向を交互にし、UI 要素が画面に現れるときに「アニメーションで表示」し、画面外に出るときに再び「アニメーションで非表示」にしたい場合に使います。一方、`play pause` は、要素が現れるときにアニメーションさせ、画面外に出始めたときに一時停止する用途でよく使われます。

簡単な例を見てみましょう。最初の例を変更し、`<figure>` がスクロールポートに完全に入ったときに 1 回だけフェードインし、ページが再読み込みされるまではフェードアウトも再アニメーションもしないようにします。

`animation-trigger` プロパティの `animation-action` に `play-once` を設定すると、`<figure>` が初めて有効化範囲に入ったときにのみアニメーションが再生されます。また、`timeline-trigger-activation-range` を `contain` に設定し、`<figure>` が画面内に完全に入ったときだけアニメーションするようにします。再生は 1 回だけなので、見逃さないようにします。

```css live-sample___play-once
figure {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-once;

  timeline-trigger: --t view() contain;
}
```

この例は次のように描画されます。

{{embedlivesample("play-once", "100%", 500)}}

最初に `<figure>` を画面内にスクロールすると、フェードインします。その後は、スクロールポート内で何度上下にスクロールしても、不透明度 `100%` のままです。再びフェードインさせるには、ページを更新するか、埋め込み例の `<iframe>` を再読み込みする必要があります。

## トリガーのスコープ

複数のトリガーが同じ `timeline-trigger-name` を使う場合、デフォルトでは[ブラウザーがトリガーを決定する方法](/ja/docs/Web/CSS/Reference/Properties/trigger-scope#解説)により、その値を持つ HTML ソース順で最後の要素にトリガーが関連付けられます。これは望ましい動作ではないでしょう。

例えば、スクロールトリガーアニメーションを含む同じコンポーネントが文書内に複数あり、それぞれのアニメーション対象と追跡対象が異なる要素だとします。コンポーネントごとに異なる `timeline-trigger-name` を使うか、サブツリーで名前のスコープを限定しない限り、すべてのアニメーション対象要素のアニメーションが、最後のコンポーネントのトリガーによって制御されます。

{{cssxref("trigger-scope")}} プロパティは、`timeline-trigger-name` 値の可視性、つまり「スコープ」を特定のサブツリーに限定します。その結果、各アニメーション対象要素は、同じスコープのサブツリー内に作成されたトリガーによってのみアニメーションを起動できます。詳しくは `trigger-scope` リファレンスページと、[`trigger-scope` の例](/ja/docs/Web/CSS/Reference/Properties/trigger-scope#例)を参照してください。

## 複数のスクロールトリガーアニメーション

これまでの例では、1 つの要素に単一のスクロールトリガーアニメーションを設定しました。しかし、このガイドで説明した `animation-*` および `timeline-trigger-*` プロパティはすべて、複数のトリガーから複数のアニメーションを起動できるよう、カンマ区切りの値リストを受け取ります。この節では、同じ要素に複数のスクロールトリガーアニメーションを設定する、少し複雑な例を作ります。

{{cssxref("animation-trigger")}} プロパティは、[複数の値の設定](/ja/docs/Web/CSS/Guides/Animations/Using#複数の_animation_プロパティ値の設定)に関して、{{cssxref("animation")}} 一括指定やほかの animation 個別指定プロパティとまったく同じように動作します。複数の `animation-name` 値が設定されているのに `animation-trigger` 値が 1 つだけの場合、その値がすべてのアニメーションに適用されます。`animation-trigger` 値が 2 つ設定されている場合は、すべてのアニメーションに値が設定されるまで、アニメーション間で順に繰り返し適用されます。

この例では、ページをスクロールして新しいトリガーが有効化されるたびに、追加のアニメーションを適用して要素を段階的にアニメーションさせます。ユーザーがスクロールすると、要素はまず画面の右側からスライドインし、次に内容を表示し、その後画面を下方向にスライドして背景色を変えます。

HTML はこれまでの例と似ていますが、強調表示するコンテンツを含む {{htmlelement("section")}} 要素を先頭に追加し、メインコンテンツの途中に空の {{htmlelement("div")}} 要素をいくつか挿入しています。これらの要素にトリガーを定義してアニメーションを起動します。

```html
<section>
  <h2>このコンテンツはアニメーションします！</h2>

  <p>
    オーストラリア東部に位置するケアンズの周辺地域は、多様な景観、豊かな緑、独特の自然の驚異に恵まれた、息をのむほど美しい地域です。
  </p>
</section>

<h1>ケアンズの情報</h1>

...
```

```html-nolint hidden live-sample___multiple-triggers
<section>
  <h2>このコンテンツはアニメーションします！</h2>

  <p>
    オーストラリア東部に位置するケアンズの周辺地域は、多様な景観、豊かな緑、独特の自然の見どころに恵まれた、息をのむほど美しい地域です。
  </p>
</section>

<h1>ケアンズの情報</h1>

<p>
  グレートディバイディング山脈ときらめく珊瑚海に挟まれたこの地域には、熱帯雨林、手つかずのビーチ、雄大な山脈が織りなす素晴らしい景色が広がっています。
</p>

<p>
  街を離れると、湿潤熱帯地域世界遺産地域の緑豊かな熱帯雨林が広がります。そびえ立つ古木、色鮮やかなシダ、流れ落ちる滝が、穏やかで幻想的な雰囲気を作り出します。
</p>
<p>
  豊かな下草の中を探索すると、色鮮やかな鳥、樹上に暮らす哺乳類、珍しい爬虫類など、固有の野生生物に出会えることがあります。鳥のさえずりと水の流れる音が自然の交響曲に加わり、この魅力的な原生地域に深く浸る体験をもたらします。
</p>

<p>
  さらに進むと、肥沃な農地、なだらかな丘陵、美しい湖で知られる高原、アサートン高原にたどり着きます。
  この農業の中心地には、さまざまな新鮮な農産物を作る小さな町や農場が点在しています。
</p>

<div id="one"></div>

<p>
  サトウキビ畑、バナナ農園、酪農場が見渡す限り広がり、遠くの山々を背景に鮮やかな緑のパッチワークを作り出しています。この地域は滝でも有名です。
  例えば、ミラミラ滝では、透き通った水が緑豊かな崖を流れ落ち、涼やかな憩いの場となっています。
</p>

<p>
  ケアンズ周辺を訪れたら、珊瑚海沿いの美しいビーチをぜひ探索してください。パームコーブからミッションビーチまで、海岸線には黄金色の砂浜、揺れるヤシの木、青く澄んだ海が続きます。
  こうした理想的なビーチは、くつろいだり、泳いだり、ウォータースポーツを楽しんだりするのに最適です。
</p>

<p>
  シュノーケリング愛好家は、海岸のすぐ沖に広がるユネスコ世界遺産、グレートバリアリーフの魅力も発見できます。
  この活気あふれる海中生態系には、色鮮やかなサンゴ礁、熱帯魚、ウミガメなど、驚くほど多様な海洋生物が生息しています。
</p>

<div id="two"></div>

<p>
  最後に、周辺地域には数多くの国立公園や山々があります。
  例えば、バロン渓谷国立公園には、険しい地形、深い渓谷、轟音を立てて流れ落ちる滝があります。
</p>

<p>
  息をのむような展望地へ続くハイキングコースを歩けば、熱帯雨林に覆われた周囲の山々や谷を一望できます。
  さらに西には、グレートディバイディング山脈の高峰がそびえ、ゴードンベール近くの象徴的なウォルシュズ・ピラミッドなど、冒険的なハイキングや景勝地の探索を楽しめます。
</p>

<p>
  最後に、周辺地域には数多くの国立公園や山々があります。例えば、バロン渓谷国立公園には、険しい地形、深い渓谷、轟音を立てて流れ落ちる滝があります。
</p>

<p>
  息をのむような展望地へ続くハイキングコースを歩けば、熱帯雨林に覆われた周囲の山々や谷を一望できます。
  さらに西には、グレートディバイディング山脈の高峰がそびえ、ゴードンベール近くの象徴的なウォルシュズ・ピラミッドなど、冒険的なハイキングや景勝地の探索を楽しめます。
</p>

<div id="three"></div>

<p>
  ウォルシュズ・ピラミッドは、オーストラリア、クイーンズランド州ケアンズ南方のウーローノーラン国立公園内にあります。
  毎年 8 月の第 3 土曜日には、山頂までのロードレースが開催されます。経験豊富なハイカーでも、登り下りに 4 ～ 6 時間かかることがあります。山には植物がかなり密生し、岩が露出しているため、雨の後は地面が非常に滑りやすくなります。
</p>
```

最初、強調表示するコンテンツを含む `<section>` は画面外に隠れています。まず CSS で `<section>` 要素をスタイルし、{{cssxref("position")}} を `fixed` にして、スクロールポートの左上付近に配置します。また、アニメーションの開始時と戻り先となる初期スタイルを定義します。続いて {{cssxref("animation")}} 値を 3 つ設定し、`<section>` 要素を `slide-from-right` でスライドインさせ、次に内容を `reveal` し、最後に画面を `slide-down` させて背景色を変えます。それぞれのアニメーションに `animation-trigger` を設定し、異なるトリガーの有効化によって起動するようにします。

各アニメーションが完了した後も、その最終状態を維持したいので、アニメーションには適切な {{cssxref("animation-fill-mode")}} 値を、`animation-trigger` 値には適切な `<animation-action>` 値を設定することが重要です。最後のアニメーションには `from` キーフレームがないため、`animation-fill-mode` を `both` ではなく `forwards` にする必要がありました。

```css hidden live-sample___multiple-triggers
body {
  overflow-x: hidden;
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}

section {
  background: red;
  color: #ffffff00;
  padding: 10px;
  width: 400px;
  height: 50px;
}

section p {
  font-size: 1.2rem;
}
```

```css live-sample___multiple-triggers
section {
  position: fixed;
  left: 1em;
  top: 1em;
  height: 240px;
  background: red;
  width: 400px;
  transform-origin: top;

  animation:
    slide-from-right 1s both,
    reveal 1s both,
    slide-down 1s forwards;

  animation-trigger:
    --t1 play-forwards pause,
    --t2 play-forwards pause,
    --t3 play-forwards pause;
}
```

次に、`<div>` 要素にトリガーを作成し、それぞれの {{cssxref("timeline-trigger-name")}} を `<section>` 要素の `animation-trigger` プロパティ値で指定した識別子と一致させます。これにより、ユーザーがスクロールして追跡対象の `<div>` がスクロールポートに入るたびに、異なるアニメーションが有効化されます。この例では、追跡対象の要素は不可視です。有用なコンテンツを含まず、トリガーを作成するためだけに置かれています。

```css live-sample___multiple-triggers
#one {
  timeline-trigger: --t1 view();
}

#two {
  timeline-trigger: --t2 view();
}

#three {
  timeline-trigger: --t3 view();
}
```

最後に、先ほど `<section>` 要素の `animation` プロパティで参照したアニメーションの {{cssxref("@keyframes")}} を定義します。

```css live-sample___multiple-triggers
@keyframes slide-from-right {
  from {
    translate: 400%;
  }
  to {
    translate: 0;
  }
}

@keyframes reveal {
  from {
    color: #ffffff00;
    transform: scaleY(0.2);
  }
  to {
    color: white;
    transform: scaleY(1);
  }
}

@keyframes slide-down {
  to {
    translate: 0 100%;
    background: blue;
  }
}
```

```css hidden live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once live-sample___trigger-scope live-sample___multiple-triggers
@supports not (timeline-trigger-name: --t) {
  body::before {
    content: "お使いのブラウザーはスクロールトリガーアニメーションに対応していません。";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

この例は次のように描画されます。

{{embedlivesample("multiple-triggers", "100%", 500)}}

例を注意しながらスクロールしてみてください。それぞれの `<div>` までスクロールしたときに、各アニメーションがどのように `<section>` に適用されるか確認してください。

### 同じアニメーションに対する複数のトリガー

アニメーション対象の要素に対し、同じアニメーションを起動するトリガーを複数の異なる要素に定義したい場合は、アニメーション対象の要素に同じ名前のアニメーションを複数回指定し、それぞれのアニメーションに異なるトリガーを与える必要があります。詳しくは[同じアニメーションに対する複数のトリガー](/ja/docs/Web/CSS/Reference/Properties/animation-trigger#同じアニメーションに対する複数のトリガー)を参照してください。

## 関連情報

- [CSS アニメーショントリガー](/ja/docs/Web/CSS/Guides/Animation_triggers)モジュール
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- [ウェブアニメーション API の使用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [CSS のスクロールトリガーアニメーションが登場！](https://developer.chrome.com/blog/scroll-triggered-animations)<sup>(英語)</sup> - developer.chrome.com (2025)
