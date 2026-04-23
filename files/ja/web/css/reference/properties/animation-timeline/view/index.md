---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

**`view()`** は [CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、{{cssxref("animation-timeline")}} プロパティと組み合わせて使用され、要素が最も近い{{glossary("scroll container", "スクロールコンテナー")}}内で表示範囲に入るタイミングに基づいて、[無名ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名ビュー進行タイムライン)を生成します。追跡する軸とオプションのインセットを調整することで、要素が「表示範囲内」と見なされるタイミングを制御できます。

## 構文

```css
/* 引数を設定しない関数 */
animation-timeline: view();

/* 軸を選択する値 */
animation-timeline: view(block);
animation-timeline: view(x);

/* インセットの値 */
animation-timeline: view(auto);
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* 軸とインセットを指定する例 */
animation-timeline: view(block auto);
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### 引数

- `<axis>`
  - : スクロールポートの方向（軸）を説明する {{ cssxref("axis") }} キーワード値。デフォルト値は `block` です。
- `<view-timeline-inset>`
  - : 要素が「表示範囲内」とみなされる領域を定義するインセット領域を指定します。値はキーワード`auto`、または最大 2 つの {{cssxref("length-percentage")}} パーセント値を指定できます。

## 解説

ビュー進行タイムラインは、主体要素が属する最も近いスクロールコンテナー内での可視性の変化に基づいて進行します。`view()` 関数は、{{cssxref("animation-timeline")}} プロパティと組み合わせて使用され、このようなビュー進行タイムラインを生成します。

この関数の引数では、タイムラインの進行状況を追跡するスクロールバーの軸と、対象が可視状態とみなされるボックスの位置を調整するインセットを指定します。

- **軸** (axis): デフォルトでは、`view()` はブロック軸を使用します。明示的な `<axis>` 値を指定することでこれを変更できます。選択した軸にスクロールバーが含まれていない場合、アニメーションタイムラインは無効化されます（進行状況ゼロ）。
- **インセット** (inset): デフォルトでは、対象がスクロール領域の一方の端に最初に表示された時点でタイムラインは `0%`（{{cssxref("@keyframes")}} アニメーションの `from` キーフレーム）に位置し、対象の外枠がスクロール領域の反対側の端に達した時点で `100%`（`to` キーフレーム）に位置します。これらの位置は `<view-timeline-inset>` 引数を使って制御できます。
  アニメーションは、要素がインセット調整済みビュー内にある間だけ持続します。インセットは要素がビュー内にあるかどうかを判断するために使用されており、これがアニメーションのタイムラインの長さを決定します。インセットは最大2つの値で構成され、それぞれの値は `auto` と {{cssxref("length-percentage")}} のどちらかになります。
  - 最初の値は始点を定義し、スクロールポートの先頭から内側へのオフセットを定義します。
  - 2つ目（存在する場合）は終点を指定し、スクロールポートの末尾からの内側へのオフセットを表します。値が `0` より大きい場合、インセット（正の値）を指定します。負の値は、[スクロールポート](/ja/docs/Glossary/Scroll_container#スクロールポート)に対するアウトセット調整を定義します。

軸とインセットの要素は任意の順序で指定します。インセット成分の中では、最初の値が始点のインセットを定義し、2 つ目の値が終点のインセットを定義します。

### 形式文法

{{CSSSyntax}}

## 例

### 無名ビュー進行タイムラインの設定

この例では、`subject` および `animation` クラスを持つ要素に対して、`animation-timeline: view()` を使用して無名ビュー進行タイムラインを生成します。その結果、文書をスクロールすると、この要素が文書内を上に移動するにつれてアニメーションが再生されます。

#### HTML

例の HTML は下記の通りです。

```html
<div class="content">
  <h1>コンテンツ</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject-container">
    <div class="subject animation"></div>
  </div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
<div class="overlay top">インセット先頭 50%</div>
<div class="overlay bottom">インセット末尾 10%</div>
```

#### CSS

`subject` 要素と `content` 要素は最小限のスタイル設定にし、テキストコンテンツには基本的なフォント設定をしました。

```css
.subject {
  width: 300px;
  height: 200px;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
}
```

結果の理解を助けるために、いくつか追加クラスを定義しました。`subject-container`クラスはアニメーションの境界を表示させます。また半透明の`top`と`bottom`オーバーレイは、インセット調整されたスクロールポートをマークします。

```css
.subject-container {
  border: 2px dashed black;
  width: 300px;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  width: 100%;
  background-color: #f5deb3aa;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  justify-content: flex-end;
}

.top {
  top: 0;
  height: 50%;
  align-items: end;
}

.bottom {
  bottom: 0;
  height: 10%;
}
```

以下のコードでは、 `subject` クラスを持つ `<div>` に `animation` クラスが指定されています。アニメーション `grow` は `subject` 要素を大きくしたり小さくしたりします。 `animation-timeline: view(block 55% 10%)` を設定することで、スクロールする祖先（この場合は文書内のルート要素）が指定された進行タイムラインに沿ってアニメーションすることを宣言します。

下にスクロールしている間、`50% 10%` のインセット値によってアニメーションが下から 10% で始まり、上から 50% で完了することに注意してください。アニメーションがタイムラインに沿って移動するにつれて、 `subject` は成長していきます。逆に、上にスクロールされるとアニメーションは逆方向へ進み、上から 50% で始まり、アニメーションを逆方向へ移動し、下から 10% で終わります。つまり、アニメーションが逆方向に進むにつれて、 `subject` は縮小していきます。

覚えておくべき重要な点は、アニメーションは `subject` 要素が `50% 10%` インセット値を使用してオフセットされるように設定されたビューにある限り続くということです。

```css
.animation {
  animation-timeline: view(block 50% 10%);
  animation-name: grow;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
  animation-timing-function: linear;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: view()) {
    body::before {
      content: "このブラウザーは CSS の `view()` 関数に対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### 結果

主体要素のアニメーションはスクロールしてご覧ください。

{{EmbedLiveSample("Examples", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- [スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- {{domxref("ViewTimeline")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
