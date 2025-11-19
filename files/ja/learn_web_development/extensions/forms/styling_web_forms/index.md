---
title: ウェブフォームへのスタイル設定
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

前回までのいくつかの記事では、HTML でウェブフォームを作成する方法を示しました。これで、[CSS](/ja/docs/Web/CSS) でスタイル設定する方法を示します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> および
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a> に対する基本的な理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        フォームのスタイル設定の問題を理解し、役立つスタイル付けのテクニックを学ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## フォームウィジェットのスタイル設定の挑戦

### 歴史

1995 年に [HTML 2 仕様書](https://datatracker.ietf.org/doc/html/rfc1866)へフォームコントロール（別名「フォームウィジェット」または「フォーム要素」）が導入されました。しかし、CSS は 1996 年後期までリリースされず、その後も数年はブラウザーの対応が充分ではありませんでした。ブラウザーは、フォームコントロールの管理とレンダリングを、オペレーティングシステムに頼っていました。

CSS が利用できるようになっても、ユーザーがそれぞれのブラウザーの外見に慣れていたため、ブラウザーベンダーは最初のうちはフォーム要素をスタイル設定することに消極的でした。しかし状況が変わり、フォームウィジェットはいくつかの例外を除き、これでほとんどがスタイル設定できるようになりました。

### ウィジェットの種類

#### スタイル設定しやすいもの

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} および {{HTMLElement("legend")}}
3. 単一行のテキストの {{HTMLElement("input")}} （例えば text, url, email 型） [`<input type="search">`](/ja/docs/Web/HTML/Reference/Elements/input/search) 以外
4. 複数行の {{HTMLElement("textarea")}}
5. ボタン（{{HTMLElement("input")}} と {{HTMLElement("button")}} の両方）
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### スタイル設定が困難なもの

1. チェックボックスとラジオボタン
2. [`<input type="search">`](/ja/docs/Web/HTML/Reference/Elements/input/search)

これら特殊なケースをどのように扱うかについては、[フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)の記事で見ていきます。

#### 内部が CSS 単独ではスタイル設定できないもの

- [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color)
- [`<input type="datetime-local">`](/ja/docs/Web/HTML/Reference/Elements/input/datetime-local)のような日時関連コントロール
- [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file)
- ドロップダウンウィジェットの作成に含まれる要素、 {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}} を含む。
- {{HTMLElement("progress")}} と {{HTMLElement("meter")}}

例えば、日付ピッカーのカレンダーや、クリックするとオプションリストが表示されるボタンなどは、CSS を使用するだけではスタイル設定することができません。

[フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)および[カスタムウィジェットの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)の記事で、これらのスタイル設定の方法を説明します。

> [!NOTE]
> フォームコントロールの内部コンポーネントにスタイル設定するプロプライエタリな CSS 擬似要素、例えば {{cssxref('::-moz-range-track')}} がありますが、これはブラウザー同士で整合していないので、これに頼るべきではありません。これについては後程でも触れます。

## 単純なフォームウィジェットのスタイル設定

前節の「スタイル設定しやすい」ウィジェットは、[初めてのフォーム](/ja/docs/Learn_web_development/Extensions/Forms/Your_first_form)および [CSS の構成要素](/ja/docs/Learn_web_development/Core/Styling_basics/Building_blocks)の記事で紹介したテクニックを使用してスタイル設定することができます。また、UI の現在の状態に基づいたスタイル設定を可能にする特別なセレクター [UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)もあります。

この記事の終わりで例を説明しますが、最初の段階で、フォームのスタイル設定について知っておくべきいくつかの特別な側面について説明します。

### フォントとテキスト

CSS のフォントやテキストの機能は、任意のウィジェットで容易に使用できます（また、フォームウィジェットで {{cssxref("@font-face")}} も使用できます）。ただし、ブラウザーの動作にしばしば矛盾があります。デフォルトで、一部のブラウザーは親から {{cssxref("font-family")}} や {{cssxref("font-size")}} を継承しません。代わりに多くのブラウザーでは、システムのデフォルトの体裁を使用します。フォームの体裁を他のコンテンツと一致させるには、以下のルールをスタイルシートに追加するとよいでしょう。

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

{{cssxref('inherit')}} のプロパティ値で、プロパティ値は計算された親要素のプロパティ値に一致するようになります。つまり親の値を継承します。

以下のスクリーンショットで違いを示します。左側は Mac OS X の Chrome における `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, `<button>` 要素の既定のレンダリングで、プラットフォームのキテイノフォントスタイルを使用しています。右側は同じ要素ですが、フォントを調和させるスタイルルールを適用したものです。

![既定値および継承されたフォントファミリーを持つフォームコントロール。既定値では、ある型はセリフで、ある型はサンセリフである。継承すると、すべてのフォントが親のフォントファミリ（この場合は段落）に変更されるはずです。奇妙なことに、 submit 型の入力は親の段落から継承されません。](forms_fontfamily.png)

既定はいろいろと変わります。継承により、フォントは親のフォントファミリーに変更されます — ここでは親コンテナーの既定の serif フォントです。ほぼすべてそうですが、例外として Chrome では`<input type="submit">` は親段落を継承しません。むしろ、{{cssxref('font-family#Values', 'font-family: system-ui')}}を使います。これは同等な入力タイプの中で `<button>` 要素を使う理由です。

フォームはシステムの既定のスタイルを使用するか、コンテンツに合うよう設計されたカスタムスタイルを使用するかについては多くの議論があります。これを決めるのは、設計者としてサイトやウェブアプリケーションを作成するあなた次第です。

### ボックスモデル

すべてのテキストフィールドは、CSS のボックスモデルに関する全プロパティ ({{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("padding")}}、{{cssxref("margin")}}、{{cssxref("border")}}) を完全にサポートしています。ただし前述のとおり、ブラウザーがウィジェットを表示する際はシステムのデフォルトスタイルに依存します。コンテンツに対してそれらをどのように混ぜ合わせるかを決めるのは、あなた次第です。ウィジェットでネイティブのルックアンドフィールを維持したいのでしたら、ウィジェットのサイズを調和させたい場合に若干の問題に直面するでしょう。

**これは各ウィジェットが境界、パディング、マージンについて独自のルールを持っているためです。** このためさまざまなウィジェットを同じサイズにしたい場合に、{{cssxref("box-sizing")}} プロパティを使用しなければなりません。

```css
input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

下のスクリーンショットで、左の列は `<input type="radio">`、`<input type="checkbox">`、`<input type="range">`、`<input type="text">`、`<input type="date">`、{{htmlelement('select')}}、{{htmlelement('textarea')}}、`<input type="submit">`、{{htmlelement('button')}} の既定の描画、右の列は同じ要素に上のルールを使用して作成したものです。各種のウィジェットのプラットフォームのデフォルトルールと比較して、すべての要素が同じ領域を占めるようにすることが可能な点に注目してください。

![ボックスモデルのプロパティは、ほとんどの入力型に効果があります。](boxmodel_formcontrols1.png)

スクリーンショットではわからないかもしれませんが、ラジオやチェックボックスの操作はそのままで、 {{cssxref('width')}} プロパティで提供される 150px の水平空間に中央配置されています。他のブラウザーでは、ウィジェットが中央に配置されないことがありますが、割り当てられた空間は守られます。

### legend の配置

{{HTMLElement("legend")}} 要素はスタイル設定では問題ありませんが、その配置を操作するのは少し厄介かもしれません。既定では、常に親である {{HTMLElement("fieldset")}} の上境界の上、左上隅の近くに配置されます。他の場所、例えば fieldset の内部や左下隅の近くに配置するには、位置指定を行う必要があります。

下記の例を見てください。

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

この方法で legend を配置するには、次の CSS を使います（単純化するため、他の宣言は削除しています）。

```css
fieldset {
  position: relative;
}

legend {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

`<fieldset>` も位置指定する必要があり、 `<legend>` がそこから相対的に位置指定されます（そうでなければ `<legend>` は `<body>`に合わせて位置決めされます）。

{{HTMLElement("legend")}} 要素はアクセシビリティにとってとても重要です。フィールドセット内の各フォーム要素のラベルの一部として支援技術によって読み上げられます。しかし、上記のようなテクニックを使用しても問題ありません。 legend の内容はこれまでと同じように読み上げられます。見た目の位置が変更されただけです。

> [!NOTE]
> {{cssxref("transform")}} プロパティを使用して `<legend>` の位置指定に役立てることもできます。しかし、例えば `transform: translateY();` を使って配置すると、移動はするものの `<fieldset>` の枠に醜い隙間ができて、簡単には除去できません。

## 具体的なスタイル設定の例

HTML フォームにスタイルを設定する方法の具体例を見ていきましょう。以下のような「はがき」風の連絡フォームを作成します。[完成バージョンはこちら](https://mdn.github.io/learning-area/html/forms/postcard-example/)。

この例をやってみるのであれば、 [postcard-start.html ファイル](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html)をコピーして、次のやり方に従ってください。

### HTML

HTML は、[ガイドの最初の記事](/ja/docs/Learn_web_development/Extensions/Forms/Your_first_form)で使用したものより少しだけ複雑です。いくつか ID やタイトルを追加しています。

```html
<form>
  <h1>to: Mozilla</h1>

  <div id="from">
    <label for="name">from:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div id="reply">
    <label for="mail">reply:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div id="message">
    <label for="msg">Your message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

上記のコードを HTML の body に追加します。

### 資産を揃える

ここからが面白いところです。コードを書き始める前に、ここでは 3 つの追加要素が必要です。

1. [はがきの背景](background.jpg) — この画像をダウンロードして作業している HTML ファイルと同じディレクトリーに保存してください。
2. タイプライター風フォント: [dafont.com の "Mom's Typewriter" フォント](https://www.dafont.com/moms-typewriter.font?back=theme)、TTF ファイルを上記と同じディレクトリーにダウンロードしてください。
3. 手書き風フォント: [fontsquirrel.com の "Journal"](https://www.dafont.com/journal.font) — TTF ファイルを上記と同じディレクトリーにダウンロードしてください。

始める前にフォントの処理が必要です。

1. fontsquirrel.com の [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) に移動します。
2. フォームを使って、両方のフォントファイルをアップロードして webfont キットを生成します。キットをコンピューターにダウンロードします。
3. zip ファイルを展開します。
4. 展開した中身には 2 つの `.woff` ファイルと 2 つの `.woff2` ファイルがあります。このファイルを、前と同じ fonts というディレクトリーにコピーします。各フォントの 2 つのファイルはブラウザー互換性を最大化するのに使います; より詳しい情報は [Web fonts](/ja/docs/Learn_web_development/Core/Text_styling/Web_fonts) の記事を見てください。

### CSS

ここから例の CSS を見ていきましょう。{{htmlelement("style")}} 要素の中にすべてのコードブロックを一つ一つ追加します。

#### 全体レイアウト

まず、 {{cssxref("@font-face")}} アットルールと、すべての {{HTMLElement("body")}} と {{HTMLElement("form")}} 要素に設定するスタイルを定義して準備します。 fontsquirrel の出力が上記で述べたものと異なる場合、 `stylesheet.css` ファイル内にダウンロード済みの webfont キットの中から正しい `@font-face` ブロックを見つけることができます（下記の `@font-face` ブロックをそれで置換し、パスをフォントファイルのものに更新する必要があります）。

```css
@font-face {
  font-family: "handwriting";
  src:
    url("fonts/journal-webfont.woff2") format("woff2"),
    url("fonts/journal-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "typewriter";
  src:
    url("fonts/momot___-webfont.woff2") format("woff2"),
    url("fonts/momot___-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font: 1.3rem sans-serif;
  padding: 0.5em;
  margin: 0;
  background: #222;
}

form {
  position: relative;
  width: 740px;
  height: 498px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: #fff url(background.jpg);

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

注意として、フォームのレイアウトに [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)と[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout) を使っています。これで、タイトルやフォーム要素といった各要素を配置できます。

```css
h1 {
  font:
    1em "typewriter",
    monospace;
  align-self: end;
}

#message {
  grid-row: 1 / 5;
}

#from,
#reply {
  display: flex;
}
```

#### ラベルとコントロール

そして、フォーム要素自体に対するスタイル設定を始めます。まずは、 {{HTMLElement("label")}} に適切なフォントを割り当てましょう。

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

テキストフィールドには、共通のルールがいくつか必要です。 {{cssxref("border")}} や {{cssxref("background")}} の削除と {{cssxref("padding")}} や {{cssxref("margin")}} の再定義を行います。

```css
input,
textarea {
  font:
    1.4em/1.5em "handwriting",
    cursive,
    sans-serif;
  border: none;
  padding: 0 10px;
  margin: 0;
  width: 80%;
  background: none;
}
```

これらのフィールドのいずれかがフォーカスされると、ライトグレーの透明な背景でハイライトされます（ユーザビリティとキーボードアクセシビリティのために、フォーカススタイルを保有することは常に重要です）。

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

これでテキストフィールドのスタイル設定が完了しましたが、次は単一行および複数行のテキストフィールドの表示が同じになるよう調整しなければなりません。一般に、これらの既定の表示が同じでないためです。

#### テキストエリアの微調整

{{HTMLElement("textarea")}} 要素は既定でブロック要素としてレンダリングされるようにします。ここで重要なことは、 {{cssxref("resize")}} プロパティと {{cssxref("overflow")}} プロパティの 2 つです。ここでは固定サイズでデザインしているため、ユーザーが複数行のテキストフィールドをリサイズできないように `resize` プロパティを使用します。 {{cssxref("overflow")}} プロパティは、ブラウザー間でのフィールドの一貫性を向上させるために使用します。これの既定値が `auto` であるブラウザーと `scroll` であるブラウザーが存在します。この例では、すべてのブラウザーが `auto` になるようにするのがよいでしょう。

```css
textarea {
  display: block;

  padding: 10px;
  margin: 10px 0 0 -10px;
  width: 100%;
  height: 90%;

  border-right: 1px solid;

  /* resize  : none; */
  overflow: auto;
}
```

#### 送信ボタンにスタイル設定する

{{HTMLElement("button")}} 要素は、 CSS によってより便利になります。[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を含めて、行いたいことが何でもできます。

```css
button {
  padding: 5px;
  font: bold 0.6em sans-serif;
  border: 2px solid #333;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transform: rotate(-1.5deg);
}

button:after {
  content: " >>>";
}

button:hover,
button:focus {
  background: #000;
  color: #fff;
}
```

### 最終結果

出来上がりです。これでフォームがこのようになっているはずです。

![上記のようにスタイル設定と微調整を行った後の、フォームの最終的な外観とレイアウト](updated-form-screenshot.jpg)

> [!NOTE]
> 例が期待どおり動かず、私たちのバージョンを確認したい場合は、 GitHub を参照してください。[ライブ版](https://mdn.github.io/learning-area/html/forms/postcard-example/)を見てください（[ソースコード](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)も見てください）。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: スタイル設定の基本](/ja/docs/Learn_web_development/Extensions/Forms)をご覧ください。

## まとめ

ご覧いただいたとおり、テキストフィールドとボタンだけでフォームを作成する限りでは、CSS を使用したスタイル設定は容易です。[次の記事では](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)、「不良」や「劣悪」に分類されているウィジェットの扱い方を見ていきます。

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
- [フォームウィジェット向けのプロパティの互換性一覧表](/ja/docs/Learn_web_development/Extensions/Forms/Property_compatibility_table_for_form_controls)
