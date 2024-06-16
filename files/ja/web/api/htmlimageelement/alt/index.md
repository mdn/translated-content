---
title: "HTMLImageElement: alt プロパティ"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: 75d3108eaade9d64de3ece87258c946b9bf13068
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`alt`** プロパティは、{{HTMLElement("img")}} 要素で指定された画像が読み込まれない場合に表示する予備（代替）テキストを指定します。

画像が読み込まれないのは、エラーが発生した場合、ユーザーが画像の読み込みを無効にしている場合、または画像の読み込みがまだ終了していない場合があります。

おそらく `alt` プロパティを使用する最も重要な理由は、[アクセシビリティ](/ja/docs/Web/Accessibility)に対応することです。なぜなら `alt` テキストはスクリーンリーダーや他の支援技術によって使用され、障碍のある人々がコンテンツを十分に活用できるようサポートするからです。
例えば、目の不自由なユーザーに対応するために、音読されたり、点字出力端末に送られたりします。

> **このように考えてください。** 画像の `alt` 文字列を選ぶときは、ページ上に画像があることに触れずに、電話で誰かにページを読み聞かせるときのことを想像してみてください。

代替テキストは、画像が占めるであろう空間に表示され、*ページの意味を変えることなく*画像の代わりをすることができるはずです。

## 値

画像が読み込まれない場合、または支援装置で使用するために表示する代替テキストを含む文字列です。

`alt` 属性は公式には必須です。常に指定するように意図されています。
画像が予備を必要としない場合（例えば、装飾的な画像や重要性の低いアイコンの場合）、空文字列 (`""`) を指定することができます。
互換性の理由から、ブラウザーは一般的に `alt` 属性なしの画像を受け入れますが、それを使う習慣を身につけるようにしましょう。

## 使用上の注意

`alt` 属性の基本的なガイドラインは、すべての画像の代替テキストは、*ページの意味を変えることなく*画像を置き換えることができるものであるべきであるということです。キャプションやタイトルとして解釈される可能性のあるテキストには、決して `alt` を使用すべきではありません。
そのような目的のために設計された別の属性や要素があります。

## 例

それ以外にも、 `alt` を適切に使用するためのガイドラインがあり、画像が何に使用されるかに応じて異なります。
これらは以下の例で示されています。

### 装飾的な画像

装飾的なイメージや限られた情報価値しかないイメージなど、意味を持たないイメージは `alt` 属性に空の文字列 (`""`) を設定する必要があります。
これは以下の例で示されています。

#### HTML

以下に示すこの例の HTML では、{{HTMLElement("img")}} 要素に `alt` プロパティが含まれており、画像は装飾なので代替テキストを持つことができないようになっています。

```html
<div class="container">
  <div class="left-margin">
    <img src="margin-flourish.svg" alt="" />
  </div>
  <div class="contents">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
      ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
      neque libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar
      ex id sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus
      laoreet cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
      scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
    </p>
  </div>
</div>
```

#### CSS

この例の CSS は、以下の結果に示すように、レイアウトのスタイルを設定する。

```css
body {
  margin: 0;
  padding: 0;
}

p {
  margin-block-start: 0;
  margin-block-end: 1em;
  margin-top: 0;
  margin-bottom: 1em;
}

.container {
  width: 100vh;
  height: 95vh;
  font:
    16px Arial,
    Helvetica,
    sans-serif;
}

.left-margin {
  background-color: rgb(241 240 237);
  width: 9em;
  height: 100%;
  float: left;
  margin-right: 5px;
  padding-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-margin img {
  width: 6em;
}

.contents {
  background-color: rgb(241 240 235);
  height: 100%;
  margin-left: 2em;
  padding-top: 1em;
  padding-left: 2em;
  padding-right: 1em;
}
```

#### 結果

{{EmbedLiveSample("Decorative_images", 600, 500)}}

### ボタンとして使われる画像

画像をボタンとして使う場合（ハイパーリンクを表す {{HTMLElement("a")}} 要素の唯一の可視の子として使う）、ボタンの目的を伝えるために `alt` 属性を使用しなければなりません。
言い換えれば、同じ目的を果たすためにテキストボタンで使用するのと同じテキストでなければなりません。

例えば、以下の HTML のスニペットでは、アイコン画像をリンクラベルとして使用するツールバーで、アイコンを使用できない場合や意図的に使用しない場合にアイコンの代わりに使用するテキストラベルを与えるために、それぞれ `alt` 属性を提供しています。

```html
<li class="toolbar" aria-role="toolbar">
  <a href="songs.html" aria-role="button">
    <img src="songicon.svg" alt="Songs" />
  </a>
  <a href="albums.html" aria-role="button">
    <img src="albumicon.svg" alt="Albums"
  /></a>
  <a href="artists.html" aria-role="button">
    <img src="artisticon.svg" alt="Artists" />
  </a>
  <a href="playlists.html" aria-role="button">
    <img src="playlisticon.svg" alt="Playlists" />
  </a>
</li>
```

### 図や地図を含む画像

画像が概念図、グラフ、図、マップとして表示される情報を含んでいる場合、`alt` テキストは少なくとも要約した形で同じ情報を提供する必要があります。
これは /me の画像が [PNG](/ja/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) のようなビットマップ形式であっても [JPEG](/ja/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) や [SVG](/ja/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) などのベクター形式で提供されます。

- 地図の場合、 `alt` のテキストは地図で示された場所への道順を、口頭で説明するのと同じように説明することができます。
- グラフの場合、テキストはそのグラフの項目とその値を説明することができます。
- 概念図の場合、テキストはその概念図で示される概念の説明になります。

{{Glossary("SVG")}} 形式で表示される概念図やグラフに含まれるテキストは、スクリーンリーダーで読み取られる可能性があることに留意してください。
このことは、図の `alt` テキストを記述する際の判断に影響を与えるかもしれません。

### アイコンやロゴ

ロゴ（企業やブランドのロゴなど）や情報アイコンには、対応するテキストを `alt` 文字列として使用する必要があります。
つまり、画像が企業ロゴの場合、 `alt` テキストはその企業名であるべきです。
画像が状態やその他の情報を表すアイコンの場合、テキストはその状態の名前であるべきです。

例えば、画像がページのコンテンツが新しく、最近更新されたことを示すためにページに表示されるバッジの場合、対応する `alt` テキストは "`最近更新`" または "`2019 年 8 月 27 日更新`" のようになるかもしれません。

この例では、 "New!" という文字の入った星形の画像を使って、記事が何か新しいもの（そしておそらくは刺激的なもの）についてのものであることを表しています。
画像がない場合に画像の代わりにそのテキストを表示できるように、 `alt`属性に `New Page!` が設定されています。
また、スクリーンリーダーで読み取ることも可能です。

#### HTML

以下の HTML は、説明したアイコンを使用したサイトのコンテンツのスニペットを作成します。
なお、{{HTMLElement("img")}} で `alt` 属性を使用することで、画像が読み込まれなかった場合に使用される良い代替文字列を提供します。

```html
<div class="container">
  <img
    src="https://www.bitstampede.com/mdn-test/new-page.svg"
    alt="New Page!"
    class="pageinfo-badge" />
  <p class="contents">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
    ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac neque
    libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar ex id
    sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus laoreet
    cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
    scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
  </p>
</div>
```

#### CSS

ここでの CSS の最大の特徴は、 {{cssxref("clip-path")}} と {{cssxref("shape-outside")}} を使って、アイコンにテキストを魅力的に巻き込んでいることです。

```css
.container {
  max-width: 500px;
}

.pageinfo-badge {
  width: 9em;
  padding-right: 1em;
  float: left;
  clip-path: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
  shape-outside: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
}

.contents {
  margin-top: 1em;
  font:
    16px Arial,
    Helvetica,
    Verdana,
    sans-serif;
}
```

#### 結果

{{EmbedLiveSample("Icons_or_logos", 640,400)}}

### その他の画像

オブジェクトやシーンを示す画像には、画像に写っているものを説明する `alt` テキストが必要です。
例えば、黄色いティーポットの写真は、文字どおり `alt` 属性に "`黄色いティーポット`" と設定することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
