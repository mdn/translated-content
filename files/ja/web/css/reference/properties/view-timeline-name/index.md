---
title: view-timeline-name
slug: Web/CSS/Reference/Properties/view-timeline-name
original_slug: Web/CSS/view-timeline-name
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{SeeCompatTable}}

**`view-timeline-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール可能な要素（_スクローラー_）内の要素（主体要素として呼ばれる）の可視性の変化に基づいて進行する名前付きビュー進行タイムラインの名前を定義するために使用します。 `view-timeline` は主体要素に設定します。

既定では、主体要素がスクローラーの一方の端に初めて表示されるとタイムラインは 0% になり、反対側の端に達すると 100% になります。
この名前は [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline) 宣言で参照され、タイムラインの進行に合わせてアニメーションする要素を示します。これは主体要素である場合もありますが、そうである必要はありません。主体がスクロール領域を移動する際に異なる要素をアニメーションさせることができます。

> [!NOTE]
> 要素が軸方向の寸法でそのコンテナーをはみ出さない場合、またははみ出した部分が隠されているかクリップされている場合、タイムラインは作成されません。

{{cssxref("view-timeline-axis")}} および `view-timeline-name` プロパティは [`view-timeline`](/ja/docs/Web/CSS/Reference/Properties/scroll-timeline) 一括指定プロパティを使用して設定することもできます。

## 構文

```css
view-timeline-name: none;
view-timeline-name: --custom_name_for_timeline;
```

### 値

`view-timeline-name` に指定できる値は次の通りです。

- `none`
  - : タイムラインには名前がありません。
- `<dashed-ident>`
  - : ビュー進行タイムラインの名前を定義する任意のカスタム識別子で、[`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline) プロパティで参照することができます。

    > [!NOTE]
    > [`<dashed-ident>`](/ja/docs/Web/CSS/Reference/Values/dashed-ident) の値は `--` から始める必要があり、これによって CSS の標準キーワードとの名前の衝突を避けることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きビュー進行タイムラインの作成

`--subjectReveal` という名前のビュー進行タイムラインは、 `view-timeline-name` プロパティを使用して、`class` が `animation` の主体要素に定義します。
これを同じ要素のタイムラインとして設定するには `animation-timeline: --subjectReveal;` を使用します。その結果、主体要素は文書がスクロールされるにつれて上方向に移動するアニメーションが表示されます。

#### HTML

この例の HTML は以下の通りです。

```html
<div class="content">
  <h1>Content</h1>

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

  <div class="subject animation"></div>

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
```

#### CSS

`subject` 要素とそれを含む `content` 要素には最小限のスタイルを設定し、テキストコンテンツには基本的なフォントを設定します。

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

`subject` クラスのついた `<div>` には、`animation` クラスも指定されています。ここで `view-timeline-name` を設定し、名前付きビュー進行タイムラインを定義しています。また、同じ値で `animation-timeline` の名前を指定して、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timeline-name: --subjectReveal;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### 結果

スクロールすると、主体要素がアニメーションします。

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/ja/docs/Web/CSS/Reference/Properties/view-timeline), [`view-timeline-axis`](/ja/docs/Web/CSS/Reference/Properties/view-timeline-axis)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
