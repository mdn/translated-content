---
title: タイムラインインセットを理解する
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

デフォルトで、[ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) は、[アニメーション添付範囲](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range) 全体にわたって要素を追跡します。`0%` の進行点は範囲の先頭にあり、`100%` の進行点は範囲の末尾にあります。アニメーションの添付範囲は、[タイムライン範囲名](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)を設定することで変更可能で、範囲内の `0%` および `100%` の進行点の位置は、長さまたはパーセント値に基づくインセット値を設定することで調整できます。

このガイドでは、長さまたはパーセント値のインセット値を使用して、アニメーションタイムラインの範囲のうち特定の部分にアニメーションタイムラインを制限する方法について説明します。

## アニメーションタイムライン: 入門編

[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)は、アニメーションの挙動を指定する名前付き {{cssxref("@keyframes")}} アニメーションを定義し、そのアニメーション名を使用してキーフレームアニメーションを要素に添付することで作成されます。

{{cssxref("animation-timeline")}} プロパティによって定義される要素のアニメーションタイムラインは、要素がそれらのキーフレームをどのように、いつ進行するかを決定します。デフォルトで、タイムラインは時間ベースであり、文書のデフォルトである時間ベースの {{domxref("DocumentTimeline")}} を使用します。

[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュールでは、スクロール進行タイムラインおよびビュー進行タイムラインが定義されています。これらは、デフォルトの時間ベースの文書タイムラインではなく、スクロールに基づくタイムラインに沿ってプロパティ値をアニメーションさせる方法です。[スクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#スクロール進行タイムライン)はタイムラインインセットとは関係がないため、この記事では、ビュー進行タイムラインについてのみ解説します。

### ビュー進行タイムライン

[ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#ビュー進行タイムライン)では、アニメーションのタイムライン（進行状況）は時間の経過ではなく要素の可視性によって制御され、キーフレームの進行はスクロールコンテナー内での主体要素の位置および可視性に連動します。要素がスクロールポート内を前進または後退するにつれて、アニメーションも前進または後退します。アニメーションは、要素の少なくとも一部がそのスクロールポート内で表示されている場合にのみ発生し、スクロールが停止すると一時停止します。

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

{{cssxref("animation-name")}} を設定すると、選択した要素にそのアニメーションが適用されます。

> [!NOTE]
> `animation-timeline` プロパティは、常に `animation` の一括指定プロパティの後に記述する必要があります。この一括指定プロパティを使用して `animation-timeline` プロパティを設定することはできませんが、タイムラインをデフォルトの時間ベースの文書タイムラインにリセットします。

> [!NOTE]
> すべての例において、{{glossary("scroll container", "スクロールコンテナー")}}の高さは `250px` であり、{{cssxref("animation-iteration-count")}} (`1`)、{{cssxref("animation-delay")}} (`0s`)、および {{cssxref("animation-direction")}} (`normal`) のデフォルト値を使用しています。{{cssxref("animation-timing-function")}} を `step-end` に、{{cssxref("animation-fill-mode")}} を `forward` に設定することで、アニメーションの反復処理がまだ開始されていないとき、実行中であるとき、完了したときがより明確になるようにしています。詳細について、[CSS アニメーションの使用ガイド](/ja/docs/Web/CSS/Guides/Animations/Using)を参照してください。

上にスクロールすると、アニメーションが進行します。下にスクロールすると、アニメーションが逆再生されます。

{{EmbedLiveSample("initial", "100%", "400")}}

この例では、主体要素の任意の部分がスクロールポート内に表示されると、アニメーションが実行されます。デフォルトで、主体要素のサイズにかかわらず、主体要素の上端がスクロールコンテナーの下端と揃った時点でビューの進行状況アニメーションが開始され、主体要素の端がコンテナーの始端と揃った時点で進行状況が `100%` に到達し、アニメーションが終了します。デフォルトで、主体要素の任意の部分がスクロールポート内に表示されているときに、アニメーションが適用されます。

### アニメーション駆動範囲

[ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)において、アニメーション範囲のプロパティが定義されていない場合、`<timeline-range-name>` は `normal` となり、デフォルトでは `cover` になります。アニメーションは、主体要素の任意の部分が表示されている限り適用されます。つまり、デフォルトの**アニメーション添付範囲**は、スクロールコンテナーの高さと主体要素の高さの合計となり、その余分な高さはスクロールの端に位置することになります。この例では、スクロールコンテナーの高さが `250px` で、主体要素の高さが `50px`、`250px`、`500px` のいずれかであるため、垂直方向のアニメーション添付範囲は、それぞれ `300px`、`500px`、`750px` のいずれかとなります。

`0%` の進行は、主体要素の先頭の端がスクロールポートの末尾の端と交差した時点で発生し、主体要素の末尾の端がスクロールポートの先頭の端から外れた時点で `100%` の進行に達します。これらは、垂直スクロール時には主体要素とスクロールポートの上端および下端、水平スクロール時には書字方向に応じて左端および右端、あるいは右端および左端を指します。

次の図は、3 つの主体のサイズについて、進行状況が `0%` および `100%` の時点における主体の位置を示しています。

```html hidden live-sample___svg_view
<div>
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
    <title>デフォルトのビュー進行タイムライン</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="520" x="360">100%</text>
    <line x1="0" x2="350" y1="500" y2="500" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_view", "100%", "720")}}

黄色の主体要素は、`from` キーフレームが適用された時点での要素の位置を表しており、これはアニメーション範囲の進行度 `0%` に相当します。赤色は、`to` キーフレームが適用された時点での、スクロールポートに対するアニメーションする要素の位置を表しており、これはアニメーションの終了時点、つまり進行度 `100%` に相当します。灰色はスクロールポートを表しています。

デフォルトで、要素が「ビュー内」にある間、アニメーションが再生されますが、この「ビュー内」というデフォルトの定義は、ニーズに合わない場合があります。幸いなことに、アニメーションの範囲の境界を定義する辺を制御し、アニメーション範囲のプロパティを使用してその範囲の開始点と終了点をオフセットすることができます。

### アニメーション範囲のプロパティ

{{cssxref("animation-range")}} プロパティを使用すると、`contain` や `exit-crossing` といった名前付きタイムライン範囲を指定でき、これによりデフォルトの `cover` 範囲から使用される範囲を変更できます。また、{{cssxref("length-percentage")}} の値を記載することで、範囲の先頭から添付範囲を内側にずらすこともできます。パーセント値は、名前付きまたはデフォルトのタイムライン範囲と関連しています。

名前付きタイムライン範囲は、{{domxref("ViewTimeline")}} 内の、アニメーションの範囲を定義する部分を指し、アニメーションの添付範囲の開始点と終了点を指定します。

`animation-range` プロパティは、{{cssxref("animation-range-start")}} および {{cssxref("animation-range-end")}} プロパティを定義する一括指定プロパティです。`animation-range-start` は、アニメーションが開始される時点での主体要素の位置を定義します。`animation-range-end` は、アニメーションが終了する時点での主体要素の位置を定義します。

さまざまな名前付きタイムライン範囲についての詳細は、[タイムライン範囲名のガイド](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)をご覧ください。このガイドでは、{{cssxref("length-percentage")}} のインセット値の仕組みに焦点を当てています。

## 長さを指定してインセットを設定

`animation-range-start` および `animation-range-end` プロパティは、それぞれ、名前付きアニメーション範囲、{{cssxref("length-percentage")}} オフセット値、あるいはその両方を受け入れます。長さまたはパーセント値によるオフセットは、すべてアニメーション添付範囲の先頭点から測定されます。

{{cssxref("length")}} が設定されている場合、オフセットは比較的直感的に理解できます。
ここでは、`animation-range-start` および `animation-range-end` プロパティを使用して、アニメーションのタイムラインを内側に設定しています。これにより、要素のアニメーション添付範囲全体の一部がアクティブな区間として定義され、`<length>` 値によって、デフォルトの `normal` アニメーション添付範囲の開始点からの距離が指定されます。

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

アニメーション範囲の先頭と末尾は、それぞれアニメーション添付範囲の先頭から `1em` および `125px` の位置にあります。タイムライン範囲のデフォルトは `normal` であり、これは `cover` として解釈されるため、アニメーション添付範囲の先頭はコンテナーのブロック末尾になります。

```css hidden live-sample___inset_length
:root {
  --start: 1em;
  --end: 125px;
}

article {
  background-image: linear-gradient(
    to top,
    transparent calc(var(--start) - 1px),
    #ccc calc(var(--start) - 1px) calc(var(--start) + 1px),
    transparent calc(var(--start) + 1px) calc(var(--end) - 1px),
    #ccc calc(var(--end) - 1px) calc(var(--end) + 1px),
    transparent calc(var(--end) + 1px)
  );
}
```

{{EmbedLiveSample("inset_length", "100%", "400")}}

スクロールコンテナーのブロックの末尾から、`1em` と `125px` の線を追加しました。アニメーションは、主体要素のブロックの先頭の辺が `1em` の線に到達したときに始まり、`125px` の線に到達したときに終了します。

この場合、アニメーションの添付範囲が開始および終了のインセット値の両方について `cover` となるため、インセットの位置は比較的単純です。

### 名前付き範囲が長さのオフセットに及ぼす効果

オフセット距離は、常に関連付けられたアニメーション範囲の先頭からの距離となります。この例では、`animation-range-start` をデフォルトの `normal` 範囲の先頭から `50px` の位置に設定し、`animation-range-end` を明示的に設定された `entry` 範囲の先頭から `100px` の位置をに設定しています。

```css live-sample___different_length
.animated_element {
  animation-range-start: 50px;
  animation-range-end: entry 100px;
}
```

```html hidden live-sample___different_length live-sample___exit_length live-sample___exit_percent live-sample___center
<main>
  <article>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>スクロールして下へ ⇩</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <section class="triple">
      <div>
        <i id="A" class="animated_element">50px</i>
        <i id="B" class="animated_element">250px</i>
        <i id="C" class="animated_element">500px</i>
      </div>
    </section>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>スクロールして上へ ⇧</p>
  </article>
</main>
```

{{EmbedLiveSample("different_length", "100%", "310")}}

`normal` および `entry` の両方の範囲の開始の端はコンテナの終了の端であるため、アニメーションは、対象の開始の端がスクロールポートの下端から `50px` の位置にあるときに始めるが、対象のサイズに関係なく、対象の開始の端がスクロールポートの下端から `100px` の位置にあるときに進行度が `100%` に達して終了します。3 つの異なる対象サイズでは `entry` 範囲のサイズは異なりますが、この場合、基盤となる範囲のサイズは関係ありませんでした。

### 範囲が異なる長さのオフセット

`exit` や `exit-crossing` の場合のように、範囲が要素の端から始まらない場合や、オフセットがパーセント値である場合、範囲のサイズが重要になります。この点に加え、アニメーション範囲名を自由に混在させることができるため、オフセットが適用されたビュー進行タイムラインのオフセットは、オフセットが適用されていない [タイムライン範囲名](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) よりも理解するのが少し複雑になります。

例えば、タイムラインの範囲名として `exit` を設定する場合、範囲の終了の端の位置が決まるため、対象のサイズが重要になります。

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 60px;
  animation-range-end: exit 75px;
}
```

`entry` と `exit` の両方において、範囲は主体要素のサイズであり、そのサイズはスクロールポートのサイズに合わせてクリップされます。つまり、`50px` および `250px` の例では、`entry` および `exit` の範囲の高さはボックスの高さと同じですが、`500px` の例では、範囲の高さはスクロールポートの高さ (`250px`) に制限されます。

{{EmbedLiveSample("exit_length", "100%", "310")}}

以下の説明をわかりやすくするために、いくつか線を追加しました。下側の青い線はスクロールポートの下端から `60px` の位置にあり、上側の赤い線は同じ下端から `75px` の位置にあります。これらはそれぞれ、アニメーションの範囲の先頭と末尾です。

この例では、いくつかの重要な機能を紹介しています。これらについては、以下を含み、さらに詳しく説明します。

- オフセットは、[それぞれの名前付き範囲の開始の端から測定されます](#開始側の端からの範囲の測定)。
- オフセットが[スクロールポートの端を越えて](#スクロールポートの端を越える)発生することが可能です。
- [Ranges may be clamped](#effects_of_clamping) if the subject is larger than the scrollport

#### 開始側の端からの範囲の測定

オフセット位置は常に宣言のアニメーション範囲の開始位置を基準としているため、3 つの要素すべてのアニメーションは、要素の先頭側の端が `entry` 範囲の開始位置から `60px` 離れた地点を通過した時点で開始されます。

`animation-range-end` の値は、アニメーションが終了する位置を定義します。`exit 75px` という値は、基本的に「主体要素がスクロールポートの開始端から `75px` 分出たとき」ということを意味します。これはそれぞれの対象で異なります。`50px` の対象の場合、これはスクロールポートから出てから `25px` 経過した時点、つまり要素が表示されなくなった時点で発生します。`250px` および `500px` の対象の両方において、アニメーション範囲の終了は、それらの下端が上部の青い線と交差する時点、つまりスクロールポートの端から 75 ピクセル離れた位置で発生します。なぜ終了オフセットが同じなのでしょうか？それは[クランプ](#クランプ効果)によるものです。名前付きアニメーション範囲の最大サイズは、スクロールポートのサイズに合わせてクランプされます。両方の主体要素の `exit` 範囲は同じであるため、範囲の終了オフセットも同一となります。

#### スクロールポートの端を越える

高さ `50px` の主体の場合、`exit` 範囲は高さ 50px で、スクロールポートの先頭側の端に隣接しています。高さが `75px` 未満の要素に対して `animation-range-end: exit 75px` を設定すると、`exit` 範囲の始点から `75px` 離れた地点はスクロールポートの先頭側の端を越えてしまうため、範囲の終了点がスクロールポートの外側になってしまいます。この例では、高さ `50px` の主体要素のアニメーション範囲の終わりは、その要素の先頭端がスクロールポートの先頭端から `75px` 離れた位置に達したときに発生します。アニメーションは、要素が `25px` 分スクロールされて表示範囲外になった場合（かつその条件を満たす場合のみ）、`to` キーフレームに到達し、{{domxref("Element/animationend_event", "animationend")}} イベントが発生して終了します。

アニメーション範囲の終了位置がスクロールポートの外側にあっても、その位置までスクロールできる余地がある限り、アニメーションは終了します。もし `animation-range-end: exit 250px` と設定していた場合、中型の主体要素と背の高い主体要素の端が、コンテナーの開始端でスクロールポートから外れた時点で、アニメーションは終了していたでしょう。

終了点を `exit 250px` に設定すると、主体要素の後には、ユーザーがスクロールして到達できる `450px` 分のコンテンツがないことがあるため、この小さな主体要素のアニメーションが終了しない場合があります。

#### クランプ効果

高さ `250px` のコンテナーの場合、主体要素の高さが `250px` または `500px` であるとき、`exit` の範囲はコンテナーのサイズとなり、その開始点はスクロールコンテナーの端になります。オフセットが `75px` の場合、アニメーションの終了は、対象物の端がスクロールコンテナーの端から `75px` 離れた位置（上の赤い線で示されている）に達したときに発生します。

オフセット位置は常に、名前付きアニメーション範囲またはデフォルトのアニメーション範囲の開始位置を基準とするため、この例では、クリッピングは大きな主体要素の `animation-range-end` に影響を与えます。範囲の終了位置を `exit 75px` に設定しており、これは `exit` 範囲の先頭の端から `75px` 離れた位置です。主体要素がスクロールポートと同じサイズ（この例では `250px` の主体要素）またはそれより大きい場合（この例では `500px` の主体要素）、アニメーション範囲の終わりはスクロールポートの末尾の端から `75px` 離れた位置となり、これはスクロールポートによってクリップされた `exit` 範囲の開始位置から `75px` 離れた位置になります。

```css hidden live-sample___exit_length
article {
  background-image: linear-gradient(
    to top,
    transparent 59.5px,
    blue 59.5px 60.5px,
    transparent 60.5px 74.5px,
    red 74.5px 75.5px,
    transparent 75.5px /* 174.5px,
    green 174.5px 154.5px,
    transparent 175.5px*/
  );
}
.animated_element {
  align-self: flex-end;
}
```

```css hidden live-sample___different_length live-sample___exit_length live-sample___exit_percent live-sample___center
@layer setup {
  #A {
    height: 50px;
  }
  #B {
    height: 250px;
  }
  #C {
    height: 500px;
  }
  div {
    display: flex;
    gap: 1em;
  }
  main {
    padding: 20px 0 0 20px;
    margin-bottom: 2em;
  }
  article {
    outline: 3px dashed;
    width: 475px;
    margin: auto;
    overflow: scroll;
    position: relative;
    height: 250px;
    box-sizing: content-box;
    background-image: linear-gradient(
      to top,
      transparent 49.5px,
      #666 49.5px 50.5px,
      transparent 50.5px 99.5px,
      #666 99.5px 100.5px,
      transparent 100.5px
    );
    background-origin: content-box;
  }

  p {
    padding: 10px;
    margin: 10px;
  }

  .animated_element {
    --clr: yellow;
    background-color: hsl(from var(--clr) h s calc(l * 1.4));
    display: block;
    animation: showAnim step-end 1 forwards;
    animation-timeline: view();
    flex: 1 0 auto;
  }

  i {
    font-family: sans-serif;
    font-size: 1.5rem;
  }

  @keyframes showAnim {
    from {
      --clr: green;
    }
    to {
      --clr: red;
    }
  }
  @layer no-support {
    @supports not (animation-timeline: view()) {
      body::before {
        content: "Your browser doesn't support view progress scrolling.";
        background-color: wheat;
        display: block;
        text-align: center;
      }
    }
  }
}
```

### 負の長さ

ここまでは、すべてのオフセットがゼロより大きい値でした。負の長さも有効であることに注意してください。`animation-range-start` に負のオフセットを指定すると範囲が長くなり、`animation-range-end` に負のオフセットを指定すると範囲が短くなります。

負のオフセットと `0` の値を比較してみましょう。

```css live-sample___exit_length_negative
#A {
  animation-range-start: contain -25px;
  animation-range-end: exit -25px;
}
#B {
  animation-range-start: contain 0;
  animation-range-end: exit 0;
}
```

{{EmbedLiveSample("exit_length_negative", "100%", "380")}}

最初のアニメーション範囲は、コンテナーの端から `25px` だけ内側にオフセットされています。

```css hidden live-sample___exit_length_negative
fieldset.double {
  display: none;
}
#A::after {
  content: " (-25px)";
}
#B::after {
  content: " (0)";
}
```

## パーセント値を使用したインセットの設定

長さの値と同様に、パーセント値も、アニメーション添付範囲の先頭からのオフセットを定義します。パーセント値によるオフセットは、スクロールポートに対するものではなく、タイムライン範囲のサイズに対する相対的なものです。このため、多くの人にとって、パーセント値は長さの値ほど直感的ではありません（とはいえ、長さの値もそれほど直感的ではなかったことは承知しています）。

ここでは、`animation-range-start` と `animation-range-end` を使用して、アニメーションのタイムラインを調整しています。同じプロパティを使用していますが、`<length>` 値の代わりに `<percentage>` 値を設定しています。

```css live-sample___inset_percent
.animated_element {
  animation-range-start: 20%;
  animation-range-end: 60%;
}
```

```css hidden live-sample___inset_percent live-sample___inset_cover
i {
  background-image: linear-gradient(
    to bottom,
    transparent calc(20% - 1px),
    #3333 calc(20% - 1px) calc(20% + 1px),
    transparent calc(20% + 1px) calc(60% - 1px),
    #3333 calc(60% - 1px) calc(60% + 1px),
    transparent calc(60% + 1px)
  );
}
article {
  --total: calc(var(--animElHeight) + 250px);
  background-image:
    linear-gradient(
      to top,
      transparent 0 calc(var(--total) * 0.2 - 1px),
      green calc(var(--total) * 0.2 - 1px) calc((var(--total) * 0.2) + 1px),
      transparent calc(var(--total) * 0.2 + 1px)
    ),
    linear-gradient(
      to top,
      transparent 0 calc(var(--total) * 0.6 - 1px),
      red calc(var(--total) * 0.6 - 1px) calc((var(--total) * 0.6) + 1px),
      transparent calc(var(--total) * 0.6 + 1px)
    ),
    linear-gradient(
      to top,
      transparent 0 calc(var(--containerHeight) * 0.2 - 0.5px),
      #3333 calc(var(--containerHeight) * 0.2 - 0.5px)
        calc(var(--containerHeight) * 0.2 + 0.5px),
      transparent calc(var(--containerHeight) * 0.2 + 0.5px)
        calc(var(--containerHeight) * 0.6 - 0.5px),
      #3333 calc(var(--containerHeight) * 0.6 - 0.5px)
        calc(var(--containerHeight) * 0.6 + 0.5px),
      transparent 0 calc(var(--containerHeight) * 0.6 + 0.5px)
    );
  background-position: local, local, fixed;
}
```

この手順で、デフォルトの添付範囲の `20%` から開始し、同じ範囲の `60%` まで続くアクティブな間隔が定義されます。デフォルトの `normal` アニメーションの範囲は、[`cover`](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover) と同様に動作し、スクロールコンテナーの高さに主体要素の高さを加えた値となります。つまり、どのラジオボタンが選択されているかによって、範囲は異なります。

{{EmbedLiveSample("inset_percent", "100%", "400")}}

説明のために、アニメーションの全範囲の `20%` および `60%` の位置で、コンテナーを横切る 2 本の濃い線が表示されています。アニメーションは、ブロックの先頭端が `20%` の位置（下側の緑色の線）に到達した時点で開始されます。アニメーションは、ブロックの先頭端が通常範囲の 60% の位置（上側の赤色の線）に達した時点で終了します。

要素の高さが `50px` の場合のみ、アニメーションの終了時に主体要素の上部がスクロールポート内に残ります。`250px` や `500px` を選択した場合は、アニメーションの範囲の終わりがスクロールポートの外側にあるため、上部の赤い線は表示されません。

主体要素の高さに基づいて、`20%`の位置は、スクロールポートの端（常にスクロールポート内にある緑色の線で示されている）から`60px`、 `100px`、`150px` のいずれかの位置にあり（緑色の線で示されており、この線は常にスクロールポート内にあります）、`60%`の位置は同じ点から`180px`、`300px`、`450px` のいずれかの位置にあります（赤色の線で示されていますが、`50px` の主体要素の場合にのみ表示されます）。

説明のために、スクロールポートの `20%` と `60%` の位置を横切る 2 本の薄い灰色の線が描かれています。これらは、スクロールポートの下端からそれぞれ `50px` と `150px` の位置にあります。`animation-range-*` のパーセント値はスクロールポートではなくタイムラインの範囲を基準としているため、これらの線は、パーセント値が**配置されない**様子を示すに過ぎません。同時に、各オブジェクトの `20%` および `60%` の位置に、それぞれ横方向の薄い灰色の線を 2 本含みます。これらの線は、それぞれのオブジェクトのアニメーションが始まるおよび終了する際に、スクロールポートの薄い灰色の線と一致します。

次の画像は、アニメーションが始まる時（`0%` キーフレーム）と終了時（`100%` キーフレーム）における主体要素の位置を示しています。
この画像には、前回のデモのアニメーションタイムラインのインセット部分と、比較のためにインセットを削除したタイムラインが含まれています。

```html hidden live-sample___svg_insets2
<div>
  <svg viewBox="-1 -1 482 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline with insets</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="571" />
    <rect class="medium end" width="100" height="250" x="120" y="450" />
    <rect class="large end" width="100" height="500" x="230" y="300" />
    <rect class="small start" width="100" height="50" x="10" y="689" />
    <rect class="medium start" width="100" height="250" x="120" y="649" />
    <rect class="large start" width="100" height="500" x="230" y="600" />
    <rect width="96" height="48" x="122" y="602" fill="url(#g)" />
    <rect width="96" height="198" x="232" y="527" fill="url(#g)" />
    <text y="610" x="385">60%</text>
    <line x1="0" x2="385" y1="600" y2="600" />
    <line x1="0" x2="385" y1="700" y2="700" />
    <text y="710" x="385">20%</text>
  </svg>
  <svg viewBox="-1 -1 482 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="520" x="385">100%</text>
    <line x1="0" x2="385" y1="500" y2="500" />
    <line x1="0" x2="385" y1="750" y2="750" />
    <text y="760" x="390">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_insets2", "100%", "710")}}

これまでと同様に、黄色は`from`キーフレームが適用された時点での要素の位置、赤色は`to`キーフレームが適用された時点での位置、灰色はスクロールポートを表しています。縞模様の部分は、赤色と黄色の要素の表示が重なっている箇所です。説明を分かりやすくするため、スクロールポートの下端から`20%`と`60%`の位置に、黒い破線の水平線を追加しています。

アニメーションは、要素がアニメーションの適用範囲内の `20%` の位置に達した時点で始めることができます。この位置は、要素のサイズに応じて、スクロールポートの下端から `60px`、`100px`、または `150px` の位置になります。この時点での主体要素の位置（`from` または `0%` キーフレームが適用されたときの要素の位置を表しています）は、黄色で表示されています。

赤色は、`to` または `100%` のキーフレーム（アニメーションの終了時点）が適用された際の、スクロールポートに対するアニメーションする要素の位置を相対的に表しています。この位置は、対象のサイズに応じて、スクロールポートの下端から `180px`、`300px`、または `450px` のいずれかになります。アニメーションは、要素が `to` と `from` の位置の間にあるときに発生します。

点線の水平線について、興味深い点があります。アニメーションが始まった時点では、ビューポートの端から `20%` の位置にある行は、主体要素の上端から `20%` の位置にあり、アニメーションが終了した時点では、ビューポートの端から `60%` の位置にある行は、主体要素の上端から `60%` の位置にあります。これが、この例のライブデモでとても薄い灰色の線で示されていたものです。

### 主体要素のサイズが重要

[長さを指定してインセットを設定する](#長さを指定してインセットを設定)際に確認したように、主体要素のサイズによって結果が異なる場合があります。アニメーション範囲を設定する際、パーセント値はスクロールポートのサイズではなく、アニメーションの添付範囲のサイズを基準としています。ほとんどの名前付き範囲において、添付範囲のサイズは対象のサイズに部分的に依存します。パーセント値は範囲のサイズに基づいて計算されるため、名前付き範囲はインセットの最終的なサイズに影響を与えます。名前によっては開始位置も変化する場合があり、範囲の位置、ひいては進行ポイントの位置にも影響を及ぼします。

この例では、主体要素のサイズの `40%` に相当するアクティブ範囲を定義します。

```css live-sample___exit_percent
.animated_element {
  animation-range-start: exit-crossing -20%;
  animation-range-end: exit-crossing 20%;
}
```

```css hidden live-sample___exit_percent
article {
  background-image: none;
}
body .animated_element {
  align-self: start;
}
```

{{EmbedLiveSample("exit_percent", "100%", "400")}}

アニメーションは、アニメーション添付範囲の `40%` の間続きます。スクロールしながら、主体要素が大きくなるほど範囲が長くなることに注目してください。exit-crossing の場合、アニメーション範囲はトリミングされません。主体要素がビューポートよりも大きい場合でも、そのサイズが範囲となり、範囲はスクロールポートの開始端に接し、主体要素がスクロールポートよりも大きい場合は末尾の端から外側に伸びます。

`-20%` および `20%` のインセットでは、`50px` の主体要素のアニメーション範囲は `20px` になります。アニメーションは、主体要素の端が範囲の開始点から `-10px` の位置、つまり画面の内側へ出る境界から `60px` の位置にあるときに始まるし、主体要素の端が画面の内側へ出る境界から `40px` の位置にあるときに終了します。中央のオブジェクトは `100px` の範囲でアニメーションします。アニメーションは、オブジェクトの端が範囲の開始点から `-50px`（スクロールポートの端から `50px` 離れた位置）になった時点で始まることになり、オブジェクトの端がスクロールポート内に `50px` 入った時点で終了します。大きな主体要素は `200px` の範囲でアニメーションします。アニメーションは、下端がコンテナーの開始エッジから `600px` 離れた位置（表示範囲内は `150px` のみ）で開始し、下端がその開始エッジから `400px` 離れた位置（開始エッジから `100px` がスクロールして画面外に出た時点）で終了します。

### スクロールポートと同じパーセント値

パーセント値によるオフセットを設定する場合、最もシンプルな名前付きタイムライン範囲は `contain` です。`contain` を使用すると、アニメーションの範囲はスクロールポートのサイズとなり、つまり開始および終了のパーセント値はスクロールポートを基準とします。このため、オフセットを使用する際は、範囲をデフォルトのままにして `cover` として処理されるのを避けるため、`contain` を使用することをお勧めします。

`contain` 範囲は、アニメーションをスクロールポート内に完全に 包含します。これは、主ボックスが、スクロールポート内のビュー進行状況の可視範囲に完全に収まっているか、あるいはその範囲を完全に覆っている期間を表します。`contain` の場合、対象がスクロールポートと同じサイズかそれより小さいときは、完全に表示されます。ただし、要素がコンテナーと同じサイズである場合、アニメーションは `0px` の範囲で発生します。これは、アニメーションは実行されるものの、ユーザーには表示されないということを意味します。

言い換えれば、コンテナーや対象のサイズを知らなくても、アニメーションをスクロールポートの中央に制限することができます。ただし、対象のサイズがスクロールポートと同じ場合は、アニメーションが `0px` の範囲で現れることになります。

```css live-sample___center
.animated_element {
  animation-range-start: contain 25%;
  animation-range-end: contain 75%;
}
```

```css hidden live-sample___center
article {
  background-image: linear-gradient(
    transparent 25%,
    #ededed 25% 75%,
    transparent 75%
  );
}
body .animated_element {
  align-self: center;
}

.animated_element {
  background-image:
    linear-gradient(black, black), linear-gradient(black, black);
  background-size: 1px 1px;
  background-position:
    center 25%,
    center 75%;
  background-repeat: repeat-x;
```

{{EmbedLiveSample("center", "100%", "310")}}

水平行は、スクロールポートの中央半分と、それぞれの主体要素の中央半分を示しています。

```html hidden live-sample___svg_contain live-sample___svg_insets2 live-sample___svg_view
<svg class="gradient">
  <title>Striped repeating gradient</title>
  <defs>
    <linearGradient
      id="g"
      x1="0"
      y1="0"
      x2="20"
      y2="20"
      spreadMethod="repeat"
      gradientUnits="userSpaceOnUse">
      <stop offset="50%" stop-color="red" />
      <stop offset="50%" stop-color="yellow" />
    </linearGradient>
  </defs>
</svg>
```

```css hidden live-sample___svg_contain live-sample___svg_insets2 live-sample___svg_view
body::before {
  display: block;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5rem;
}
div {
  display: flex;
  gap: 20px;
}
svg {
  width: 260px;
}
rect {
  stroke: black;
  stroke-width: 3;
}
.start {
  fill: yellow;
}
.end {
  fill: red;
}
.container {
  fill: #dedede;
}
text {
  font: 40px monospace;
  fill: black;
}
line {
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 7;
}
.gradient {
  height: 1px;
  width: 1px;
  position: absolute;
  top: -100px;
}
```

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing
<main>
  <article>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>スクロールして下へ ⇩</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <section class="one animated_element">
      <div>
        <i>アニメーションする要素</i>
        <span></span>
      </div>
    </section>
    <section class="double">
      <div>
        <i id="A" class="animated_element">A</i>
        <i id="B" class="animated_element">B</i>
      </div>
    </section>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>スクロールして上へ ⇧</p>
  </article>
</main>
```

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing live-sample___exit_length_negative
<fieldset>
  <legend>アニメーションする要素の高さを選択</legend>

  <label><input name="height" value="50" type="radio" checked /> 50px</label>
  <label><input name="height" value="250" type="radio" /> 250px</label>
  <label><input name="height" value="500" type="radio" /> 500px</label>
</fieldset>
<fieldset class="double">
  <legend>アニメーション範囲を選択</legend>

  <label><input name="range" value="20" type="radio" checked />20% / 60%</label>
  <label><input name="range" value="0" type="radio" /> 0% / 100%</label>
</fieldset>
```

```css hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing
@layer {
  :root {
    --animElHeight: 50px;
    --animElHeightWord: "50px";
    --barColor: black;
    padding-top: 20px;
    --containerHeight: 250px;
  }
  body:has(input[value="250"]:checked) {
    --animElHeight: 250px;
    --animElHeightWord: "250px";
  }
  body:has(input[value="500"]:checked) {
    --animElHeight: 500px;
    --animElHeightWord: "500px";
  }
  main {
    padding: 20px 0 0 20px;
    margin-bottom: 2em;
  }
  article {
    outline: 3px dashed;
    width: 475px;
    margin: auto;
    overflow: scroll;
    position: relative;
    height: var(--containerHeight);
    box-sizing: content-box;
  }

  p {
    padding: 10px;
    margin: 10px;
  }

  section {
    --clr: yellow;
    --words: "アニメーション開始前";
    position: relative;
    margin: 20px;
    text-align: center;
  }
  .one,
  .double i {
    animation: showAnim step-end 1 forwards;
    animation-timeline: view();
  }
  i,
  .animated_element {
    background-color: hsl(from var(--clr) h s calc(l * 1.4));
    display: block;
    height: var(--animElHeight);
    line-height: var(--animElHeight);
  }
  span {
    background-color: hsl(from var(--clr) h s 90%);
    border: 5px solid hsl(from var(--clr) h s 20%);
    min-width: 250px;
    height: 30px;
    line-height: 30px;
  }
  span,
  i {
    font-family: sans-serif;
    font-size: 1.5rem;
  }
  span::before {
    content: var(--words);
  }
  span {
    position: fixed;
    top: 10px;
    left: 10px;
    padding: 10px;
  }
  i::after {
    content: " ( " var(--animElHeightWord) " )";
  }
  label {
    padding-right: 2em;
  }
  legend {
    margin-top: 2em;
  }

  @keyframes showAnim {
    from {
      --clr: green;
      --words: "アニメーション中";
    }
    to {
      --clr: red;
      --words: "アニメーション完了";
    }
  }
  body::before {
    display: block;
    text-align: center;
    font-family: sans-serif;
    font-size: 1.5rem;
  }

  @layer no-support {
    @supports not (animation-timeline: view()) {
      body::before {
        content: "このブラウザーはビュー進行スクロールに対応していません";
        background-color: wheat;
        display: block;
        text-align: center;
      }
    }
  }
}
```

```css hidden live-sample___initial live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain
.double {
  display: none;
}
```

```css hidden live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing live-sample___entry_exit
.one {
  display: none;
}
.double div {
  display: flex;
  gap: 10px;
}
```

## 関連情報

- {{cssxref("timeline-range-name")}} データ型
- [キーフレームセレクター](/ja/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
