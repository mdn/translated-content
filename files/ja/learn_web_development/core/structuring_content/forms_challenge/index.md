---
title: "課題: フィードバックフォームの構造化"
short-title: "課題: フィードバックフォーム"
slug: Learn_web_development/Core/Structuring_content/Forms_challenge
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

この課題では、フォームの作成と構造化、およびその他の HTML 機能を追加するあなたの能力を試験します。

## 出発点

この課題を解くには、コンピューターのハードドライブ上のフォルダー内、または [CodePen](https://codepen.io/) や [JSFiddle](https://jsfiddle.net/) などのオンラインエディターを使用して、シンプルな自分のウェブサイトプロジェクトを作成してください。必要なコードの大部分は、このページですでに提供されています。

1. コンピューターの適当な場所に、`forms-challenge` という名前の新しいフォルダーを作成してください（またはオンラインエディターを開き、新しいプロジェクトを作成するための必要な手順を実行してください）。
2. 次の HTML リストを、フォルダー内の `index.html` というファイルに保存してください（またはオンラインエディターの HTML ペインに貼り付けてください）。

   ```html-nolint
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Forms challenge</title>
       <link href="style.css" rel="stylesheet" />
       <script defer src="index.js"></script>
     </head>
     <body>
       We want your feedback!

       We're very excited that you visited the little house in the woods,
       and we want to hear what you thought of it! Please fill in the below
       sections. You don't need to provide your name or contact details, but
       if you do, we'll enter you into a prize draw where you'll have a chance
       to win prizes.

       --

       Facilities

       Was the porridge
       Too hot?
       Too cold?
       Just right?

       Were the beds
       Too hard?
       Too soft?
       Just right?

       Describe the chairs (select all you agree with)
       Comfy
       Luxurious
       Hi tec
       Pretty
       Majestic

       --

       About your hosts

       Who's your favorite bear?
       Papa bear
       Mama bear
       Junior
       Dozer

       Which greeting did you prefer?
       Wave
       Friendly greeting
       Growl
       Claw marks in the door

       --

       Any other feedback?

       Give us your comments

       --

       Your details

       Name
       Email
       Phone

       --

       Submit

       --
     </body>
   </html>
   ```

3. 以下の CSS リストを、フォルダー内の `style.css` というファイルに保存してください（またはオンラインエディターの CSS ペインに貼り付けてください）。

   ```css
   /* Basic font styles */

   body {
     background-color: white;
     color: #333333;
     font: 1em / 1.4 system-ui;
     padding: 1em;
     width: 800px;
     margin: 0 auto;
   }

   h1 {
     font-size: 2rem;
   }

   h2 {
     font-size: 1.6rem;
   }

   h1,
   h2 {
     margin: 0 0 20px;
     color: purple;
   }

   * {
     box-sizing: border-box;
   }

   p {
     color: gray;
     margin: 0.5em 0;
   }

   /* Form structure */

   fieldset {
     border: 0;
     padding: 0;
   }

   legend {
     padding-bottom: 10px;
     font-weight: bold;
   }

   fieldset,
   .separator {
     margin-bottom: 20px;
   }

   .form-section {
     margin-bottom: 20px;
     padding: 20px;
   }

   img {
     max-width: 100%;
     height: 50px;
     margin: 20px 0;
   }

   /* Individual form items */

   fieldset input {
     margin: 0 10px 0 0;
   }

   label {
     margin-right: 40px;
   }

   textarea {
     margin-top: 10px;
     padding: 5px;
     width: 100%;
     height: 200px;
   }

   .separator {
     display: flex;
   }

   .separator label {
     flex: 2;
   }

   .separator input,
   .separator select {
     flex: 3;
     padding: 5px;
   }

   button {
     padding: 10px 20px;
     border-radius: 10px;
     border: 1px solid grey;
     background-color: #dddddd;
     width: 50%;
     margin: 0 auto;
     display: block;
   }

   button:hover,
   button:focus {
     background-color: #eeeeee;
     cursor: pointer;
   }
   ```

## プロジェクト概要

森の中の小さな家というホテルに宿泊したばかりだと想像してください（少なくともホテルだと思っていたとします）。このホテル向けの架空のフィードバックフォームの作成に協力してほしいのです。必要な機能のマークアップやフォームの構造化に加え、実装してほしい追加の HTML 機能もいくつかあります。

### フォームコントロールの実装

1. "Facilities" セクションにおいて、最初の 2 組の行をラジオボタン群に変換し、各ボタンには説明ラベルを、グループ全体には凡例を追加してください。各グループで最初のラジオボタンがデフォルトで選択されるよう、属性も追加してください。
2. "Facilities" セクションにおいて、3 つ目の一行のセットをチェックボックスのセットに変更し、それぞれの項目を説明するラベルと、グループ全体を説明する凡例をつけてください。
3. "About your hosts" セクションでは、両方の行をオプションのドロップダウンメニューに変え、それぞれの項目を説明するラベルをつけてください。
4. "Any other feedback?" セクションに、複数行テキスト入力ボックスを追加し、既存の行をその説明ラベルに変換してください。
5. "Your details" セクションに、掲載されている 3 つの値をそれぞれ収集するための適切なテキスト入力フィールドを追加してください。既存の行をそれらのラベルに変換してください。
6. "Submit" をフォームの送信ボタンに変換してください。

### フォームの構造化

1. フォーム全体をフォームとして特定するために、適切なラッパー要素でフォームを囲みます。
2. フォーム内に反復構造要素を追加し、各フォームセクションを囲みます。各フォームセクション要素に `class` 属性として `form-section` を付与します。作業を容易にするため、各フォームセクションは二重ハイフン (`--`) で囲まれています。構造要素を追加したら、二重ハイフンを除去できます。
3. 一部のコントロールとラベルのペアを別個の行に配置するために、追加の構造要素を記載する必要があります。これらを追加し、それぞれに `class` 属性として `separator` を指定してください。
4. 複数行テキスト入力ボックスとそのラベルの間に改行要素を追加し、両者を別個の行に配置します。

### 追加の HTML 機能

1. 本文には、適切な要素をつけてマークアップする必要がある見出しがいくつかあります。
   1. 最上位の見出し： "We want your feedback!"
   2. 第 2 レベルの見出し： "Facilities", "About your hosts", "Any other feedback?", "Your details"
2. 最上位の見出しの下にある冒頭の段落には、適切なマークアップが必要です。
3. 同時に、冒頭の段落において "little house in the woods" と "prize draw" のテキストをリンクに変換してください。現時点ではリンク先ページが指定されていないため、仮置きとしてターゲット URL を `#` に設定してください。
4. 冒頭の段落の下に、装飾として幅広で平らな画像を配置してください。画像のパスは `https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg` です。装飾目的のみであるため、代替テキストは空の値に設定してください。
5. 前の項目に続いて、さらなる目標として、ページに装飾画像を記載するより良い方法を調査し、実際に試してみてください（これには HTML とは異なる技術が必要であり、このモジュールではまだ扱っていません）。

## ヒントとコツ

- [W3C HTML validator](https://validator.w3.org/) を使用すると、HTML の意図しないミスを捕捉し、修正することができます。
- 行き詰まって、どの要素をどこに配置すべきか見当がつけられない場合は、ページレイアウトの単純なブロック図を描き、それぞれのブロックを囲むべき要素を書き込んでみてください。これは大変役立ちます。

## 例

次のスクリーンショットは、マークアップ後のフォームの外観の例を表示しています。実装方法に詰まった場合は、ライブサンプルの下記にある解決策を参照してください。

![課題の完成例：2 組のラジオボタン、1 組のチェックボックス、および 2 つのドロップダウン選択メニューを表示させるフィードバックフォーム](example-page.png)

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML は、次のようになるはずです。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Forms challenge</title>
    <link href="style.css" rel="stylesheet" />
    <script defer src="index.js"></script>
  </head>
  <body>
    <h1>We want your feedback!</h1>

    <p>
      We're very excited that you visited the
      <a href="#">little house in the woods</a>, and we want to hear what you
      thought of it! Please fill in the below sections. You don't need to
      provide your name or contact details, but if you do, we'll enter you into
      a <a href="#">prize draw</a> where you'll have a chance to win prizes.
    </p>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg"
      alt="" />

    <form>
      <div class="form-section">
        <h2>Facilities</h2>

        <fieldset>
          <legend>Was the porridge</legend>
          <input
            type="radio"
            id="porridge-1"
            name="porridge"
            value="hot"
            checked /><label for="porridge-1">Too hot?</label>
          <input
            type="radio"
            id="porridge-2"
            name="porridge"
            value="cold" /><label for="porridge-2">Too cold?</label>
          <input
            type="radio"
            id="porridge-3"
            name="porridge"
            value="right" /><label for="porridge-3">Just right?</label>
        </fieldset>

        <fieldset>
          <legend>Were the beds</legend>
          <input
            type="radio"
            id="beds-1"
            name="beds"
            value="hard"
            checked /><label for="beds-1">Too hard?</label>
          <input type="radio" id="beds-2" name="beds" value="soft" /><label
            for="beds-2"
            >Too soft?</label
          >
          <input type="radio" id="beds-3" name="beds" value="right" /><label
            for="beds-3"
            >Just right?</label
          >
        </fieldset>

        <fieldset>
          <legend>Describe the chairs (select all you agree with)</legend>
          <input type="checkbox" id="comfy" name="comfy" /><label for="comfy"
            >Comfy</label
          >
          <input type="checkbox" id="luxurious" name="luxurious" /><label
            for="luxurious"
            >Luxurious</label
          >
          <input type="checkbox" id="hi-tech" name="hi-tech" /><label
            for="hi-tech"
            >Hi-tech</label
          >
          <input type="checkbox" id="pretty" name="pretty" /><label for="pretty"
            >Pretty</label
          >
          <input type="checkbox" id="majestic" name="majestic" /><label
            for="majestic"
            >Majestic</label
          >
        </fieldset>
      </div>

      <div class="form-section">
        <h2>About your hosts</h2>

        <div class="separator">
          <label for="favorite">Who's your favorite bear?</label>
          <select name="favorite" id="favorite">
            <option value="papa">Papa bear</option>
            <option value="mama">Mama bear</option>
            <option value="junior">Junior</option>
            <option value="randy">Cousin Randy</option>
          </select>
        </div>

        <div class="separator">
          <label for="greeting">Which greeting did you prefer?</label>
          <select name="greeting" id="greeting">
            <option value="papa">Wave</option>
            <option value="mama">Friendly greeting</option>
            <option value="junior">Growl</option>
            <option value="randy">Claw marks in the door</option>
          </select>
        </div>
      </div>

      <div class="form-section">
        <h2>Any other feedback?</h2>

        <label for="comments">Give us your comments</label>
        <br />
        <textarea id="comments" name="comments"></textarea>
      </div>

      <div class="form-section">
        <h2>Your details</h2>

        <div class="separator">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div class="separator">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div class="separator">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>

      <div class="form-section">
        <button>Submit</button>
      </div>
    </form>
  </body>
</html>
```

追加目標として、ウェブページに装飾用画像を追加するより良い方法は、[CSS 背景画像](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders#background_images)を使用することです。`<img>` 要素を削除し、代わりに CSS を使用して画像をページに配置してください。背景画像を配置するのに適した要素は `<form>` 要素です。また、画像が反復されないようブラウザーに指示する必要があります。さらに、背景画像がテキストと重ならないよう、{{cssxref("margin")}} および {{cssxref("padding")}} を指定して間隔を空ける必要があります。

```css
form {
  background: url("https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg")
    no-repeat;
  margin-top: 20px;
  padding-top: 50px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
