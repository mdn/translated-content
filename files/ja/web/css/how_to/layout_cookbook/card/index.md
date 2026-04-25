---
title: カード
slug: Web/CSS/How_to/Layout_cookbook/Card
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

このパターンは、オプションでフッターを付加できる「カード」要素のリストです。カードには、タイトル、画像、説明文や他のコンテンツ、および出典情報やフッターが含まれます。カードは通常、グループや集合の中で表示されます。

![1 行に 3 つのカード部品](cards.png)

## 要件

カード部品には、見出し、画像、コンテンツ、フッターなど、さまざまなコンテンツを含めることができます。

カードグループ内のそれぞれのカードは、同じ高さにします。オプションのカードフッターは、カードの下部に配置しあｍす。

カードのコレクションに追加すると、カードを二次元に並べる必要があります。

## レシピ

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___card-example
<div class="cards">
  <article class="card">
    <header>
      <h2>短い見出し</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="熱気球" />
    <div class="content">
      <p>
        気球を使って北極点に到達するというアイディアは、何年も前から検討されていたようです。
      </p>
    </div>
  </article>

  <article class="card">
    <header>
      <h2>短い見出し</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="熱気球" />
    <div class="content">
      <p>短いコンテンツ</p>
    </div>
    <footer>フッターがあります</footer>
  </article>

  <article class="card">
    <header>
      <h2>このカードの長めの見出し</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="熱気球" />
    <div class="content">
      <p>
        1863 年にパリのデラヴィル・デドルー社から出版された興味深い著作物の中に、気球を用いて北極点に到達するという提案が記載されています。
      </p>
    </div>
    <footer>フッターがあります</footer>
  </article>
  <article class="card">
    <header>
      <h2>短い見出し</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="熱気球" />
    <div class="content">
      <p>
        気球を使って北極点に到達するというアイディアは、何年も前から検討されていたようです。
      </p>
    </div>
  </article>
</div>
```

```css live-sample___card-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

.cards {
  max-width: 700px;
  margin: 1em auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
}

.card {
  border: 1px solid #999999;
  border-radius: 3px;

  display: grid;
  grid-template-rows: max-content 200px 1fr;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card h2 {
  margin: 0;
  padding: 0.5rem;
}

.card .content {
  padding: 0.5rem;
}

.card footer {
  background-color: #333333;
  color: white;
  padding: 0.5rem;
}
```

{{EmbedLiveSample("card-example", "", "950px")}}

## 選択したもの

このカードは、一次元レイアウトであるにもかかわらず [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)を使用してレイアウトされています。 これは、グリッドトラックに対してコンテンツのサイズ変更の使用が可能になるためです。 単一列グリッドを設定するときは、次のようにします。

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} は、要素をグリッドコンテナーに変換します。{{cssxref("grid-template-rows")}} プロパティの 3 つの値は、グリッドを最小 3 行に分割し、カードの最初の子要素 3 つの高さを順に定義します。

それぞれの `card` には、{{HTMLElement("header")}}、{{HTMLElement("img")}}、{{HTMLElement("div")}} がこの順序で含まれており、一部には {{HTMLElement("footer")}} も含まれています。

見出しトラックは {{cssxref("max-content")}} に設定されているため、伸縮は行われません。 画像は 200 ピクセルの高さのトラック内に収めることにしました。 それから、その次のトラック（コンテンツが存在する場所）を `1fr` に設定します。 これは、残りの空間を占有することを意味します。

サイズが明示的に定義されている 3 つを超える子要素は、追加されたコンテンツに合わせてサイズが調整される暗黙のグリッド内に生成されます。これらはデフォルトで自動サイズ調整されます。カードにフッターが含まれている場合、そのサイズも自動調整されます。フッターが存在する場合、グリッドの下部に固定されます。フッターはコンテンツに合わせて自動サイズ調整され、その中のコンテンツ `<div>` は、残りの空間を埋めるように拡張されます。

以下のルールセットにより、カードのグリッドが作成されます。

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

{{cssxref("grid-template-columns")}} プロパティは、グリッドの列の幅を定義します。この場合、グリッドを自動配置に設定し、列は最小で `230px` ですが、利用できる空間を埋めるまで伸長することができるようにしています。{{cssxref("gap")}} プロパティで、隣接する行と列の間に `20px` の間隔を設定します。

> [!NOTE]
> 個別のカード内の各要素は、それぞれのカードが独立したグリッドであるため、互いに揃いません。各カード内の要素を、隣接するカード内の同じ要素と揃えるには、[サブグリッド](/ja/docs/Web/CSS/Guides/Grid_layout/Subgrid)を使用してください。

## その他の方法

[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使ってカードをレイアウトすることもできます。それぞれのカードの行のサイズは、カードコンテナーではなく、それぞれの行の {{cssxref("flex")}} プロパティで設定します。

フレックスボックスでは、フレックスアイテムの寸法は親要素ではなく子要素で定義されます。グリッドとフレックスボックスのどちらを使用するかは、コンテナー側からトラックを制御したいか、それともアイテム側にルールを追加したいかといった、好みの問題です。

カードにはグリッドを採用しました。一般的に、カードは縦方向にも横方向にも整列させる必要があるためです。さらに、それぞれのカード内の要素を隣接するカードの要素に合わせて整列させるには、サブグリッドを使用できます。フレックスでは、サブグリッドに相当するハックを必要としない機能はありません。

## アクセシビリティの考慮

カードの内容によっては、アクセシビリティを高めるためにできること、あるいはすべきことがあるかもしれません。 これらの問題のとても詳細な説明については、 Heydon Pickering による[包括的な部品: カード](https://inclusive-components.design/cards/)<sup>（英語）</sup>を参照してください。

## 関連情報

- {{Cssxref("grid-template-columns")}}, {{Cssxref("grid-template-rows")}}, {{Cssxref("gap")}}
- [包括的な部品: カード](https://inclusive-components.design/cards/)<sup>（英語）</sup>
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
