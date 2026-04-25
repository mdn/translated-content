---
title: メディアオブジェクト
slug: Web/CSS/How_to/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

メディアオブジェクトは、ウェブ上のいたるところで見られるパターンです。これは、片側に画像、もう片側に説明文が配置された 2 列構成のボックスを指します。例えば、ソーシャルメディアの投稿などが挙げられます。

![左側にプロフィール画像、右側に空間の 80% を占める lorem ipsum テキストが表示されたメディアオブジェクトの例](media-object.png)

## 要件

メディアオブジェクトのパターンには、次の特性の一部または全部が必要です。

- モバイルでは積み重ね、デスクトップでは 2 列です。
- 画像は左右どちらでもかまいません。
- 画像は小さい場合も大きい場合もあります。
- メディアオブジェクトはネストできます。
- メディアオブジェクトは、どちら側が高いかに関係なく、コンテンツをクリアする必要があります。

## レシピ

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___media-objects-example
<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">An optional footer goes here.</div>
</div>

<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/sharp-account_box-24px.svg"
      width="80px"
      alt="Account" />
  </div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer"></div>
</div>
```

```html hidden live-sample___media-objects-example
<div class="media media-flip">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">An optional footer goes here.</div>
</div>

<div class="media">
  <a class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </a>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>

  <div class="footer"></div>

  <div class="media">
    <a class="img">
      <img
        src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
        alt="Balloons" />
    </a>

    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
        vitae ligula sit amet maximus.
      </p>
    </div>

    <div class="footer"></div>
  </div>
</div>
```

```css live-sample___media-objects-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

p {
  margin: 0 0 1em 0;
}

@media (width >= 500px) {
  .media {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "image content"
      "image footer";
    grid-gap: 20px;
    margin-bottom: 4em;
  }

  .media-flip {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
      "content image"
      "footer image";
  }

  .img {
    grid-area: image;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
  }
}
```

{{EmbedLiveSample("media-objects-example", "", "1500px")}}

## 選択したもの

必要に応じて二次元でレイアウトを制御できるようにするため、メディアオブジェクトに[グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)を使用することを選択しました。 つまり、フッターがあり、その上に短いコンテンツがある場合、そのフッターはそのメディアオブジェクトの下部にまで押し下げられます。

グリッドレイアウトを使用するもう 1 つの理由は、画像のトラックのサイズ変更に {{cssxref("fit-content")}} を使用できるようにするためです。 最大サイズが 200 ピクセルの `fit-content` を使用すると、アイコンのような小さい画像がある場合、トラックはその画像のサイズ、つまり `max-content` のサイズと同じサイズになります。 画像が大きい場合、トラックは 200 ピクセルで拡大しなくなり、画像には 100% の {{cssxref("max-width")}} が適用されるため、列の内側に収まるように縮小されます。

レイアウトを実現するために {{cssxref("grid-template-areas")}} を使用することで、CSS でこのパターンを見ることができます。 max-width が 500 ピクセルになった時点でグリッドを定義しているので、小さな端末ではメディアオブジェクトが積み重なります。

パターンのオプションに、反転して反対側に切り替えるというものがあります。 — これはレイアウトを反映させる反転グリッドテンプレートを定義する `media-flip` クラスを追加することによって行われます。

あるメディアオブジェクトを別のメディアオブジェクトの中に入れ子にするときは、通常のレイアウトでは 2 番目のトラックに、反転したときは最初のトラックに配置する必要があります。

## 関連資料

- {{cssxref("fit-content")}} プロパティ
- [グリッドテンプレート領域](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)
