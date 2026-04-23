---
title: "課題: コンテンツパネルのサイズ設定と装飾"
short-title: "課題: サイズ設定と装飾"
slug: Learn_web_development/Core/Styling_basics/Size_decorate_content_panel
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

この課題では、テキストと画像を含むコンテンツパネルを表示する、シンプルなスタイルが適用されたページ構造が用意されています。ページの上部には見出しが、下部にはボタンバーが配置されています。指示に従ってサイズ調整や装飾を行い、最終的に魅力的なレイアウトを作成してください。この過程で、CSSの値や単位、サイズ設定、オーバーフロー、背景や境界線に関する知識が試されます。

## 出発点

この課題は、ご自身のローカル開発環境で解決していただきます。できれば、ブラウザーウィンドウを全画面表示にして例を確認し、適切な方向に進んでいるか確認することをお勧めします。

1. 自分のコンピューターに `size-decorate-content-panel` という名前の新しいフォルダーを作成してください。
2. そのフォルダー内で `index.html` ファイルを作成し、以下のコンテンツを貼り付けてください。

   ```html-nolint live-sample___content-pane-start live-sample___content-pane-finish
   <!doctype html>
   <html lang="ja">
     <head>
       <meta charset="utf-8" />
       <title>課題：ボタンバー付きのコンテンツペイン</title>
       <link href="style.css" rel="stylesheet" />
     </head>
     <body>
       <section class="pane">
         <h1>コンテンツパネル</h1>
         <div class="content">
           <h2>いくらか面白いコンテンツ</h2>

           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Proin tortor purus <a href="#">platea sit eu id</a>
             nisi litora libero. Neque vulputate consequat ac amet augue
             blandit maximus aliquet congue. Pharetra vestibulum posuere
             ornare <a href="#">faucibus fusce dictumst</a> orci aenean eu
             facilisis ut volutpat commodo senectus purus himenaeos fames
             primis convallis nisi.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
             alt="大型の野生の猫の目と鼻のクローズアップ" />
           <p>
             Phasellus fermentum malesuada phasellus netus dictum aenean
             placerat egestas amet. <a href="#">Ornare taciti semper dolor
             tristique</a> morbi. Sem leo tincidunt aliquet semper eu lectus
             scelerisque quis. Sagittis vivamus mollis nisi mollis enim
             fermentum laoreet.
           </p>

           <h2>もっと面白コンテンツ</h2>

           <p>
             Curabitur semper venenatis lectus viverra ex dictumst nulla
             maximus. Primis iaculis elementum conubia feugiat venenatis
             dolor augue ac blandit nullam ac <a href="#">phasellus turpis</a>
             feugiat mollis. Duis lectus porta mattis imperdiet vivamus augue
             litora lectus arcu. Justo torquent pharetra volutpat ad blandit
             bibendum <a href="#">accumsan nec elit cras</a> luctus primis
             ipsum gravida class congue.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
             alt="青く、ほとんど雲ひとつない空を、色とりどりの熱気球が 3 つ、浮いていいます" />
           <p>
             Vehicula etiam elementum finibus enim duis feugiat commodo
             adipiscing tortor <a href="#">tempor elit</a>. Et mollis
             consectetur habitant turpis tortor consectetur adipiscing
             vulputate dolor lectus iaculis convallis adipiscing. Nam
             hendrerit <a href="#">dignissim condimentum ullamcorper diam</a>
             morbi eget consectetur odio in sagittis.
           </p>
         </div>
         <div class="controls">
           <button>One</button>
           <button>Two</button>
           <button>Three</button>
           <button>Four</button>
         </div>
       </section>
     </body>
   </html>
   ```

3. そのフォルダー内に `style.css` ファイルを作成し、以下のコンテンツを貼り付けてください。

   ```css live-sample___content-pane-start
   /* 型とテキスト */

   * {
     box-sizing: border-box;
   }

   html {
     height: 100%;
   }

   body {
     height: inherit;
     font: 1.2em / 1.5 system-ui;
     margin: 0 auto;
   }

   h1 {
     font-size: 2em;
   }

   h2 {
     font-size: 1.5em;
   }

   a {
     color: red;
   }

   a:hover,
   a:focus {
     text-decoration: none;
   }

   /* パネルをスタイル設定 */

   .pane {
     height: 100%;
   }

   h1,
   .controls {
     margin: 0;
     display: flex;
     justify-content: center;
     align-items: center;
   }

   .content {
   }

   .controls {
     justify-content: space-around;
     gap: 20px;
     padding: 20px;
   }

   button {
     flex: 1;
   }
   ```

4. ファイルを保存し、ブラウザーで `index.html` を読み込んで、検査の準備を整えてください。

## プロジェクト概要

下記の手順に従ってプロジェクトを完了させ、コンテンツペインのサイズを適切に調整し、要求される装飾を追加してください。

### 見出し

1. 生成コンテンツを使用して、最上位の見出しの先頭に本の絵文字（📖）を挿入します。絵文字と見出しのテキストの間には、`20px`の余白を追加してください。
2. 現在、見出しのサイズは `em` 単位で設定されています。ビューポートの幅に応じてサイズが変化するレスポンシブな仕様に変更しつつ、ズーム機能も維持できるようにしてください。これを実現するために、それぞれの見出しレベルのサイズを、ビューポートの幅の適切なパーセント値に、さらに小さな `em` 値を足した値に設定してください。

### コンテナーのサイズ設定

1. クラス名 `pane` を持つ `<section>` ラッパー要素の幅を `60%` に設定しますが、最大幅を `1000px`、最小幅を `480px` に設定してください。これを単一の宣言で設定できる CSS 関数が見つかるかどうか、探してみてください。
2. `pane` の `<section>` を、`auto` マージンを使用してページ上で水平方向に中央揃えにしてください。
3. `<h1>` と `controls` クラスの `<div>` の両方を、高さを `100px` に設定してください。クラス `content` を指定した `<div>` の高さを、`<body>` の高さの `100%` から、`<h1>` および `<div class="controls">` の高さを差し引いた値に設定してください。これにより、柔軟なコンテンツコンテナーと、高さが固定された見出しおよびボタンバーを備え、常にビューポートの高さに合わせて伸縮する UI が実現されるはずです。
4. ボタンが少し細く見えて、文字が読みづらいようです。ボタンの高さをコンテナーの `100%` に設定し、フォントサイズを `1.2em` にしてみてください。
5. `pane` の `<section>` と `content` の `<div>` の上下のパディングを両側とも `0` に、左右のパディングを両側とも `20px` に設定してください。

### 画像の配置

1. 現在、画像がコンテンツコンテナーからはみ出しています。これを防ぐには、画像の最大幅を `90%` に設定してください。
2. `auto` マージンを使用して、画像を水平方向に中央揃えにします。

### 装飾

1. `pane` の `<section>` に、上部が `#9fb4c7`、下部が `#7f7caf` へと滑らかに変化する線形グラデーションを適用してください。
2. 画像に `1px solid` の境界線を、コンテンツの `<div>` に `2px solid` の境界線を設定してください。境界線の色を `#28587b` に設定してください。
3. `コンテンツ` `<div>` の背景色を `#eeeeff` に設定し、背景画像として `https://mdn.github.io/shared-assets/images/examples/big-star.png` を指定してください。背景画像は繰り返し表示せず、サイズは `40px` × `40px` とし、コンテナーの上端から `5px`、右端から `15px` の場所に配置してください。
4. ボタンの文字色を `white`、背景色を `rgb(40 88 123 / 0.8)` に設定してください。マウスオーバー時またはフォーカス時、ボタンは同じ背景色の不透明度 100% のバージョンに変化するようにしてください。
5. コンテンツ `<div>` およびボタンに、`10px` の角丸を設定してください。

### オーバーフロー

この時点で、UI にまだ問題があることに気づくはずです。`content` の `<div>` に含まれるコンテンツがコンテナーからはみ出し、ページ全体がスクロールして、コンテンツのすべてにアクセスすることができるようにしています。ここでは、`content` の `<div>` 自体をスクロールさせたいのです。これを実現するにはどうすればよいでしょうか？

## ヒントとコツ

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) を使用することで、 CSS の意図しない間違い（他の方法では見逃してしまうかもしれない間違い）を発見し、修正することができます。
- HTML を変更する必要は一切ありません。

## 例

プロジェクトの初期状態は、このように表示されます。

{{EmbedLiveSample("content-pane-start", "100%", 500)}}

完了したプロジェクトは、同様に次のような見た目になるはずです（幅を `60%` ではなく `90%` でレンダリングしているため、幅の狭い出力ペインでも見栄えが良くなっています）。

{{EmbedLiveSample("content-pane-finish", "100%", 500)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な CSS は次のようになります。

```css live-sample___content-pane-finish
/* 型とテキスト */

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: inherit;
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
}

h1 {
  /* 模範解答: レスポンシブな見出しのサイズ設定は、vw 値と em 値の合計 */
  font-size: calc(2vw + 1em);
}

/* 模範解答: 生成コンテンツとして本の絵文字を追加し、見出しのコンテンツとの間に 20px の空間を置く */
h1::before {
  content: "📖";
  margin-right: 20px;
}

h2 {
  /* 模範解答: レスポンシブな見出しのサイズ設定は、vw 値と em 値の合計に等しい */
  font-size: calc(1.5vw + 0.75em);
}

a {
  color: red;
}

a:hover,
a:focus {
  text-decoration: none;
}

.pane {
  height: 100%;
  /* 模範解答: clamp() 関数を使用して、1 つの宣言で
  コンテナーの幅のパーセント値と最小・最大幅を設定する */
  width: clamp(480px, 60%, 1000px);
  /* 模範解答: 自動マージン機能を使用してコンテナーを中央に配置する */
  margin: 0 auto;
  /* 模範解答: コンテナーの上下パディングを両側とも 0 に設定し、
  左右のパディングを両側とも 20px に設定 */
  padding: 0 20px;
  /* 模範解答: 上から下へ線形グラデーションを適用 */
  background: linear-gradient(to bottom, #9fb4c7, #7f7caf);
}

h1,
.controls {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 模範解答: h1 要素と controls の div の高さを、それぞれ 100px に設定 */
  height: 100px;
}

.content {
  /* 模範解答: コンテンツの div に背景色と画像を設定し、画像のサイズを調整 */
  background: url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
    no-repeat top 5px right 15px / 40px #eeeeff;
  /* 模範解答: コンテンツの上下パディングを両側とも 0 に、左右パディングを
  両側とも 20px に設定 */
  padding: 0 20px;
  /* 模範解答: コンテンツの div の高さを、100% に設定し、h1 と
  controls の div を合わせた高さ (200px) を差し引いた値にします */
  height: calc(100% - 200px);
  /* 模範解答: コンテンツの div に境界線を設定 */
  border: 2px solid #28587b;
  /* 模範解答: コンテンツがコンテナーからはみ出さないようにし、代わりに
  スクロールするようにする */
  overflow: auto;
}

img {
  /* 模範解答: 画像の最大幅を 90% に設定 */
  max-width: 90%;
  /* 模範解答: auto マージンを使用して中央揃えにする */
  margin: 0 auto;
  display: block;
  /* 模範解答: 画像に境界線を設定する */
  border: 1px solid #28587b;
}

.controls {
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

button {
  flex: 1;
  /* 模範解答: ボタンの高さを 100% に、フォントサイズを 1.2em に設定 */
  height: 100%;
  font-size: 1.2em;
  /* 模範解答: ボタンの文字色を白に設定 */
  color: white;
  /* 模範解答: ボタンの色を設定する */
  background-color: rgb(40 88 123 / 0.8);
}

/* 模範解答: ボタンにホバー時およびフォーカス時に完全に不透明な色を設定する */
button:hover,
button:focus {
  background-color: rgb(40 88 123 / 1);
}

/* 模範解答: コンテンツの div とボタンに角丸を設定する */
.content,
button {
  border-radius: 10px;
}
```

```css hidden live-sample___content-pane-finish
.pane {
  width: clamp(480px, 90%, 1000px);
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
