---
title: "<picture>: 画像要素"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

**`<picture>`** は [HTML](/ja/docs/Web/HTML) の要素で、0 個以上の {{HTMLElement("source")}} 要素と 1 つの {{HTMLElement("img")}} 要素を含み、様々な画面や端末の条件に応じた画像を提供します。

ブラウザーは複数の `<source>` 子要素を検討し、その中から最も適切なものを選択します。適切なものがない場合や、ブラウザーが `<picture>` 要素に対応してない場合、 `<img>` 要素の [`src`](/ja/docs/Web/HTML/Reference/Elements/img#src) 属性で指定された URL が選択されます。選択された画像は `<img>` 要素が占有する領域に表示されます。

{{InteractiveExample("HTML デモ: &lt;picture&gt;", "tabbed-standard")}}

```html interactive-example
<!--ブラウザーウィンドウの幅を変更すると、画像が変化します。-->

<picture>
  <source
    srcset="/shared-assets/images/examples/surfer.jpg"
    media="(orientation: portrait)" />
  <img src="/shared-assets/images/examples/painted-hand.jpg" alt="" />
</picture>
```

どの URL を読み込むかを選択するには、{{Glossary("user agent","ユーザーエージェント")}}はそれぞれの `<source>` 要素の [`srcset`](/ja/docs/Web/HTML/Reference/Elements/source#srcset), [`media`](/ja/docs/Web/HTML/Reference/Elements/source#media), [`type`](/ja/docs/Web/HTML/Reference/Elements/source#type) 属性を調べて、現在のページのレイアウトや表示装置の能力に最も合う画像を検討します。

`<img>` 要素は 2 つの役割を担います。

1. 画像の寸法やその他の属性と、表示方法を記述します。
2. `<source>` 要素で利用可能な画像を提供できなかった場合の代替策を提供します。

`<picture>` をよく使う場面は以下の通りです。

- **アートディレクション**。様々な `media` の条件に合わせて画像を切り抜いたり変更したりする (例えば、小さな画面では、詳細すぎない、より簡単な版の画像を読み込むなど)。
- 特定の形式に対応していないブラウザーに対して、**代替画像形式を提供する**。

  > [!NOTE]
  > 例えば、[AVIF](/ja/docs/Web/Media/Guides/Formats/Image_types#avif_画像) や [WEBP](/ja/docs/Web/Media/Guides/Formats/Image_types#webp_画像) と言った新しい形式には多くの利点がありますが、ブラウザーが対応していない可能性があります。対応している画像形式のリストは、[画像ファイルの種類と形式ガイド](/ja/docs/Web/Media/Guides/Formats/Image_types)にあります。

- 見る人の画面に最も適合する画像を読み込むことで、**通信帯域を節約しページの読み込みをより速くする**。

DPI の高い（高解像度の）ディスプレイのために高解像度版の画像を提供する場合は、代わりに [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) 属性を `<img>` に使用してください。これによってブラウザーはデータ節約モードでは低解像度版を選択することができ、 `media` 条件を明示的に書かなくてもよくなります。

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみを持ちます。

## 使用上のメモ

{{cssxref("object-position")}} プロパティを使用して、要素の枠内で画像の位置を調整したり、 {{cssxref("object-fit")}} プロパティを使用して、枠内に合わせるための画像の寸法を変更する方法を制御したりすることができます。

> [!NOTE]
> これらのプロパティは `<picture>` 要素**ではなく**、子の `<img>` 要素に用いてください。

## 例

これらの例は、 {{HTMLElement("source")}} 要素の様々な属性がどのように `<picture>` 内の画像の選択を変更するかを示しています。

### media 属性

`media` 属性はユーザーエージェントがそれぞれの {{HTMLElement("source")}} 要素を評価するメディア条件を（メディアクエリーと同様に）指定します。

{{HTMLElement("source")}} のメディア条件が `false` と評価された場合、その要素はスキップされ、`<picture>` 内の次の要素が評価されます。

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

{{cssxref("@media/prefers-color-scheme")}} メディア機能を使用して、明るいテーマと暗いテーマで画像資産を差し替えることができます：

```html
<picture>
  <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="logo-light.png" media="(prefers-color-scheme: light)" />
  <img src="logo-light.png" alt="Product logo" />
</picture>
```

### srcset 属性

[srcset](/ja/docs/Web/HTML/Reference/Elements/source#srcset) 属性は、サイズや表示装置のピクセル密度に基づいて、利用可能な画像のリストを提供するために使用されます。

これは画像記述子のカンマ区切りのリストで構成されます。それぞれの画像記述子は画像の URL と、次のいずれかで構成されます。

- _幅記述子_ に続いて `w` を書きます（`300w` など）
  _または_
- _ピクセル密度記述子_ に続いて `x` を書き (`2x` など)、高 DPI 画面の高解像度画像を提供します。

次の点に注意してください。

- 幅とピクセル密度の記述子は併用すべきではありません
- ピクセル密度記述子がない場合は 1x を意味します
- 重複する記述子の値は許可されません（2x と 2x、100w と 100w）

次の例は、高密度解像度と標準解像度の画像を指定するために、`srcset` 属性と `<source>` 要素を組み合わせた使用法を示しています。

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs ロゴ" height="320" width="320" />
</picture>
```

`srcset` 属性は `<picture>` 要素を必要とせずに `<img>` 要素でも使用することができます。次の例は、`srcset` 属性を使用して標準解像度画像と高密度画像をそれぞれ指定する方法を示しています。

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs ロゴ" />
```

### sizes 属性

`<source>` 要素の [`sizes`](/ja/docs/Web/HTML/Reference/Elements/source#sizes) 属性は、メディア条件と長さのペアのセットを指定し、それぞれの条件における画像の表示サイズを示すことができます。これにより、ブラウザーは画像の[内在](/ja/docs/Glossary/Intrinsic_Size)の幅が含まれている `srcset` 属性から最適な画像を選択できるようになります。

ブラウザーは画像をダウンロードする前に、sizes 属性内のメディア条件を評価します。情報は [`<img>`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) 要素および [`<source>`](/ja/docs/Web/HTML/Reference/Elements/source#sizes) 要素の sizes 属性をご覧ください。

例を示します。

```html
<picture>
  <source
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 400px, 800px"
    type="image/jpeg" />
  <img src="fallback.jpg" alt="画像の例" />
</picture>
```

この例の中では、

- ビューポートの幅が 600px 以下の場合、スロットのサイズは 400px です。それ以外の場合は 800px です。
- ブラウザーはスロットサイズに端末ピクセル比率を乗算して理想的な画像幅を決定し、`srcset` から最も近い利用できる画像を選択します。

sizes が指定されていない場合、ブラウザーは画像のピクセル単位のサイズで指定されたデフォルトサイズを使用します。これは、特に様々な画面サイズや様々なコンテキストで画像が表示される場合、すべての端末に最適な表示とは限りません。

サイズ指定は、srcset でピクセル比率値の代わりに幅の記述子（例えば 2x ではなく 200w）が指定されている場合にのみ効果を発揮することに注意してください。
`srcset` を使用する方法の詳細については、[レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)のドキュメントを参照してください。

### type 属性

`type` 属性は、 {{HTMLElement("source")}} 要素の `srcset` 属性で与えられるリソース URL の [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)を指定します。ユーザーエージェントが指定されたタイプに対応していない場合、その {{HTMLElement("source")}} 要素はスキップされます。

```html
<picture>
  <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="photo" />
</picture>
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >, 記述コンテンツ, 埋め込みコンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        0 個以上の {{HTMLElement("source")}} 要素、その後に 1 個の {{HTMLElement("img")}} 要素、任意でスクリプト対応要素と混在。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>埋め込みコンテンツを含むことができるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLPictureElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("img")}} 要素
- {{HTMLElement("source")}} 要素
- フレーム内の画像の位置や寸法の設定: {{cssxref("object-position")}} および {{cssxref("object-fit")}}
- [画像ファイルの種類と形式ガイド](/ja/docs/Web/Media/Guides/Formats/Image_types)
- {{cssxref("@media/prefers-color-scheme")}} メディア特性
