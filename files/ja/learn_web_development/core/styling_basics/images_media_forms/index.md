---
title: 画像、メディア、フォーム要素
short-title: 画像、メディア、フォーム
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: 001a6992ec60f0dccd073a3db223c320835188ad
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}

このレッスンでは、特定の要素が CSS でどのように扱われるかを見ていきます。画像・メディア・フォーム要素では、CSS でスタイルを設定するにあたって通常のボックスとは少し異なる動作をします。何が可能で何が不可能かを理解することで、フラストレーションを軽減することができます。このレッスンでは、知っておくべきことのをいくつかを取り上げます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の<a href="/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >画像</a
        >、<a href="/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >動画</a
        >、<a href="/ja/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
          >フォーム</a
        >。 CSS の<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units">値と単位</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Sizing">サイズ設定</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>置換要素のサイズとレイアウトを理解すること。</li>
          <li>テキスト入力のような、スタイル設定が容易なフォーム要素の基本的なスタイル設定。</li>
          <li>CSS リセットをベースとして使用し、フォームのような扱いにくい要素のスタイル設定を行います。</li>
          <li>フォーム要素すべてがスタイル設定しやすいわけではないことを理解し、その理由も理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 置換要素

画像と動画は、**{{ glossary("replaced elements", "置換要素")}}** と呼ばれています。これは、 CSS がこれらの要素の内部レイアウトに影響を与えることはできず、他の要素の中でのページ上の位置のみに影響を与えることを意味します。ただし、これから見ていくように、CSS で画像に対してできることはいろいろあります。

画像や動画などの特定の置換要素は、 **{{glossary("aspect ratio","アスペクト比")}}** を持つものとしても記述されています。これは、水平方向 (x) と垂直方向 (y) の両方の寸法を持ち、既定ではファイルの内在サイズを使って表示されることを意味します。

## 画像サイズ

これらのレッスンを受けてすでにお分かりのように、CSS ではすべてのものがボックスを生成します。画像ファイルの固有の寸法よりも小さいか大きいサイズの画像をボックス内に配置すると、ボックスよりも小さく表示されるか、ボックスをオーバーフローさせてしまいます。オーバーフローで何が起こるかについて決定を下す必要があります。

以下の例では、2 つのボックスがあり、どちらもサイズは 200 ピクセルです。

- 1 つは 200 ピクセル未満の画像を含んでいます。これはボックスよりも小さく、それを埋めるために引き伸ばしません。
- もう 1 つは 200 ピクセルより大きく、ボックスをオーバーフローします。

```html live-sample___size
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="balloons"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
</div>
```

```css live-sample___size
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  width: 200px;
}

img {
}
```

{{EmbedLiveSample("size", "", "250px")}}

オーバーフローの問題について何ができるでしょうか？

[CSS におけるアイテムへのサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing)で学んだように、一般的な手法は、画像の {{cssxref("max-width")}} を 100% に設定することです。これにより、画像のサイズはボックスよりも小さくなりますが、大きくはなりません。この手法は、[`<video>`](/ja/docs/Web/HTML/Reference/Elements/video)や [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) などの他の置換要素でも機能します。

上記の例 `max-width: 100%` の `<img>` 要素に追加してみてください。小さい画像は変更されないままですが、大きい画像はボックスに収まるように小さくなります。

### `object-fit` による画像のオーバーフローの制御

コンテナー内の画像について他の選択を行うことができます。例えば、ボックスを完全に覆うように画像のサイズを変更したい場合があります。

ここでは、 {{cssxref("object-fit")}} プロパティが役立ちます。置換要素に `object-fit` を使用する場合、さまざまな方法でボックスに合うようにサイズを変更できます。

次の例では、値 `cover` を使用して画像を縮小し、アスペクト比を維持してボックスをきれいに埋めます。アスペクト比が維持されているため、画像の一部がボックスで切り取られます。例えば、値として `contain` を使用すると、画像はボックス内に収まるように縮小されます。この場合、ボックスと同じアスペクト比にはならないため、「レターボックス」のような効果になります。

```html live-sample___object-fit
<div class="wrapper">
  <div class="box">
    <img
      alt="balloons"
      class="cover"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
  <div class="box">
    <img
      alt="balloons"
      class="contain"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
</div>
```

```css live-sample___object-fit
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  width: 200px;
  height: 200px;
}

img {
  height: 100%;
  width: 100%;
}

.cover {
  object-fit: cover;
}

.contain {
  object-fit: contain;
}
```

{{EmbedLiveSample("object-fit", "", "250px")}}

`fill` を試すこともできます 。これは、ボックスを埋めますが、アスペクト比を維持しません。

## レイアウト内の置換要素

置換要素にさまざまな CSS レイアウト手法を使用すると、他の要素とは動作が少し異なる場合があります。 たとえば、フレックスまたはグリッドレイアウトでは、要素は既定で領域全体に拡大されます。 画像は伸縮せず、代わりにグリッド領域またはフレックスコンテナーの始点に揃えられます。

下記の例では、 2 列 2 行のグリッドコンテナーがあり、その中に 4 つのアイテムがあります。すべての `<div>` 要素には背景色があり、行と列いっぱいに伸縮します。しかし、画像は伸縮しません。

```html live-sample___layout
<div class="wrapper">
  <img
    alt="star"
    src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css live-sample___layout
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px;
}

.wrapper > div {
  background-color: rebeccapurple;
  border-radius: 0.5em;
}
```

{{EmbedLiveSample("layout", "", "220px")}}

これらのレッスンを順番に実行している場合は、まだレイアウトを確認していない可能性があります。置換要素は、グリッドまたはフレックスレイアウトの一部になると、基本的にレイアウトによって不自然に引き伸ばされないようにするために、既定の動作が異なることに注意してください。

## フォーム要素

CSS でのスタイル設定に関しては、フォーム要素はトリッキーな問題であり、[HTML フォームモジュール](/ja/docs/Learn_web_development/Extensions/Forms)には、フォーム要素のスタイル設定に関する詳細なガイドが含まれていますが、ここでは完全には再現しません。記事のこの節では、強調すべきいくつかの重要な点があります。

多くのフォームコントロールは [`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) 要素によってページに追加されます。これは、テキスト入力などの単純なフォームフィールドから、色や日付の選択などのより複雑なフィールドまでを定義します。 [`<textarea>`](/ja/docs/Web/HTML/Reference/Elements/textarea) などの追加要素や、 [`<fieldset>`](/ja/docs/Web/HTML/Reference/Elements/fieldset) や [`<legend>`](/ja/docs/Web/HTML/Reference/Elements/legend) などのフォームの一部を格納したりラベルを貼ったりするために使われる要素もあります。

HTML には、ウェブ開発者が必須フィールド、さらには入力する必要があるコンテンツの種類を指定できるようにする属性も含まれています。ユーザーが予期しない何かを入力したり、必須フィールドを空白のままにしたりすると、ブラウザーにエラーメッセージが表示されることがあります。 ブラウザーによって、このようなアイテムのスタイル設定やカスタマイズがどの程度可能なのかについては一貫性がありません。

### テキスト入力欄のスタイル

`<input type="text">`、`<input type="email">`、`<textarea>` 要素などのテキスト入力を可能にする要素は、スタイルを整えるのが非常に簡単で、ページ上の他のボックスと同じように振る舞う傾向があります。しかし、これらの要素の既定のスタイルは、ユーザーがサイトを訪問する際に使用するオペレーティングシステムやブラウザーによって異なります。

以下の例では、 CSS を使用していくつかのテキスト入力にスタイルを設定しています。境界線、マージン、パディングなどがすべて期待どおりに適用されていることがわかります。属性セレクターを使用して、さまざまな入力型をターゲットにしています。

境界線を調整し、フィールドに背景色を追加し、フォントとパディングを変更して、このフォームの外観を変更してみてください。

```html-nolint live-sample___form
<form>
  <div><label for="name">名前</label> <input id="name" type="text" /></div>
  <div><label for="email">メールアドレス</label> <input id="email" type="email" /></div>

  <div class="buttons"><input type="submit" value="送信" /></div>
</form>
```

```css hidden live-sample___form
body {
  font-family: sans-serif;
}
form > div {
  display: flex;
}

label {
  width: 10em;
}

.buttons {
  justify-content: center;
}
```

```css live-sample___form
input[type="text"],
input[type="email"] {
  border: 2px solid black;
  margin-bottom: 1em;
  padding: 10px;
  width: 80%;
}

input[type="submit"] {
  border: 3px solid #333333;
  background-color: #999999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: white;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  background-color: #333333;
}
```

{{EmbedLiveSample("form")}}

> [!WARNING]
> フォーム要素のスタイルを変更するときは、ユーザーがフォーム要素であることをユーザーに明確に伝えるように注意する必要があります。周囲のコンテンツとほとんど見分けがつかない境界線や背景のないフォーム入力を作成することもできますが、これにより認識や入力が非常に難しくなります。

より複雑な入力型の多くはオペレーティングシステムによってレンダリングされ、スタイル設定にアクセスできません。そのため、フォームは訪問者によってかなり違って見えることを常に想定し、複雑なフォームをいくつかのブラウザーでテストする必要があります。

## フォームの動作の正規化

フォーム要素は、さまざまなブラウザーやオペレーティングシステムでの動作が異なります。この節では、最も一般的な課題のいくつかを取り上げ、それらに対処するための戦略を指定します。

### 継承とフォーム要素

一部のブラウザーでは、フォーム要素は既定ではフォントのスタイルを継承しません。そのため、フォームのフィールドが body や親要素で定義されたフォントを使用するようにしたい場合は、CSS にこのルールを追加する必要があります。

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### フォーム要素と box-sizing

ブラウザー間で、フォーム要素は、さまざまなウィジェットに対してさまざまなボックスサイズ設定ルールを使用します。[ボックスモデルのレッスンで](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model) `box-sizing` プロパティについて学習しました。フォームのスタイル設定時にこの知識を使用して、フォーム要素に幅と高さを設定するときに一貫したエクスペリエンスを確保できます。

一貫性を保つために、すべての要素でマージンとパディングに `0` を設定し、特定のコントロールをスタイル設定するときにこれらを追加することをお勧めします

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### その他の便利な設定

上記のルールに加えて、スクロールバーが不要な場合に IE がスクロールバーを表示しないよう `overflow: auto` に `<textarea>`s を設定する必要があります。

```css
textarea {
  overflow: auto;
}
```

### リセット処理としてまとめる

最後のステップとして、上記で説明したさまざまなプロパティを次の「フォームリセット」にラップして、作業の一貫性のあるベースを提供できます。これには、最後の 3 つのセクションで言及したすべてのアイテムが含まれます。

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> [!NOTE]
> 正規化スタイルシートは、すべてのプロジェクトで使用する一連のベースラインスタイルを作成するために、多くの開発者によって使用されています。通常、これらは上記で説明したものと同様のことを行います。 CSS で独自の作業を行う前に、ブラウザー間で異なるものがすべて一貫した既定に設定されていることを確認してください。ブラウザーは通常、以前より一貫性があるため、以前ほど重要ではありません。ただし、1 つの例を見てみたい場合は、 [Normalize.css](https://necolas.github.io/normalize.css/) をチェックしてください。これは、多くのプロジェクトでベースとして使用されている非常に人気のあるスタイルシートです。

## まとめ

このレッスンでは、 CSS で画像やメディア、他の特殊な要素を扱う際に遭遇する可能性のあるいくつかの違いについて取り上げました。

次の記事では、CSS における画像やフォーム要素の処理について提供した情報を、どれだけ理解し記憶できているかを確認するためのテストをいくつかご紹介します。

## 関連情報

- [ウェブフォームのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [フォームの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}
