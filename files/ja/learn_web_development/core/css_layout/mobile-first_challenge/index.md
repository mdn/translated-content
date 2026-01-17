---
title: "課題: モバイルファーストレイアウト"
short-title: "課題: モバイルファースト"
slug: Learn_web_development/Core/CSS_layout/Mobile-first_challenge
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
この課題では、既存のモバイルレイアウトを更新し、デスクトップブラウザーでも適切に動作するようにすることで、[CSS レイアウト](/ja/docs/Learn_web_development/Core/CSS_layout)モジュールを締めくくります。その過程で、メディアクエリー、CSS グリッド、フレックスボックス、レスポンシブ画像といったレスポンシブレイアウトの機能についてもテストが行われます。

## 出発点

この課題はローカル開発環境で解決していただきます。理想的には、レイアウト機能が期待通りに動作していることを確認するため、例をフルサイズのブラウザーウィンドウで表示することをお勧めします。

1. コンピューター上に `mobile-first-challenge` という名前の新しいフォルダーを作成してください。
2. フォルダー内に`index.html`ファイルを作成し、次のコンテンツを貼り付けてください。

   ```html
   <!doctype html>
   <html lang="ja">
     <head>
       <meta charset="utf-8" />
       <title>RWD Task</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
       <script defer src="script.js"></script>
     </head>

     <body>
       <header>
         <div class="logo">My exciting website!</div>
         <button aria-label="Open menu">☰</button>
       </header>

       <main class="grid">
         <nav>
           <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">Blog</a></li>
             <li><a href="#">About us</a></li>
             <li><a href="#">Our history</a></li>
             <li><a href="#">Contacts</a></li>
           </ul>
         </nav>
         <article>
           <h1>An Exciting Blog Post</h1>
           <img src="images/square6.jpg" alt="placeholder" class="feature" />
           <p>
             Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
             welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
             garlic.
           </p>

           <p>
             Turnip greens yarrow ricebean rutabaga endive cauliflower sea
             lettuce kohlrabi amaranth water spinach avocado daikon napa
             asparagus winter purslane kale. Celery potato scallion desert
             raisin horseradish spinach carrot soko. Lotus root water spinach
             fennel kombu maize bamboo shoot green bean swiss chard seakale
             pumpkin onion chickpea gram corn pea. Brussels sprout coriander
             water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
             watercress. Corn amaranth salsify bunya nuts nori azuki bean
             chickweed potato bell pepper artichoke.
           </p>

           <p>
             Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
             courgette tatsoi pea sprouts fava bean collard greens dandelion
             okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
             zucchini.
           </p>

           <p>
             Nori grape silver beet broccoli kombu beet greens fava bean potato
             quandong celery. Bunya nuts black-eyed pea prairie turnip leek
             lentil turnip greens parsnip. Sea lettuce lettuce water chestnut
             eggplant winter purslane fennel azuki bean earthnut pea sierra
             leone bologi leek soko chicory celtuce parsley jícama salsify.
           </p>

           <p>
             Celery quandong swiss chard chicory earthnut pea potato. Salsify
             taro garlic gram celery wattle seed collard greens nori. Grape
             wattle seed kombu beetroot horseradish carrot squash brussels
             sprout chard.
           </p>

           <p>
             Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
             welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
             garlic.
           </p>

           <p>
             Turnip greens yarrow ricebean rutabaga endive cauliflower sea
             lettuce kohlrabi amaranth water spinach avocado daikon napa
             asparagus winter purslane kale. Celery potato scallion desert
             raisin horseradish spinach carrot soko. Lotus root water spinach
             fennel kombu maize bamboo shoot green bean swiss chard seakale
             pumpkin onion chickpea gram corn pea. Brussels sprout coriander
             water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
             watercress. Corn amaranth salsify bunya nuts nori azuki bean
             chickweed potato bell pepper artichoke.
           </p>
         </article>

         <aside>
           <h2>Photography</h2>
           <ul class="photos">
             <li><img src="images/square1.jpg" alt="placeholder" /></li>
             <li><img src="images/square2.jpg" alt="placeholder" /></li>
             <li><img src="images/square3.jpg" alt="placeholder" /></li>
             <li><img src="images/square4.jpg" alt="placeholder" /></li>
             <li><img src="images/square5.jpg" alt="placeholder" /></li>
           </ul>
         </aside>
       </main>
     </body>
   </html>
   ```

3. フォルダー内で `style.css` ファイルを作成し、次の CSS コンテンツを貼り付けてください。

   ```css
   /* 全般的なスタイル */

   * {
     box-sizing: border-box;
   }

   body {
     background-color: white;
     color: #333333;
     margin: 0;
     font: 1.2em / 1.6 sans-serif;
     padding: 0 20px 20px 20px;
   }

   img {
     display: block;
     border: 1px solid black;
   }

   /* モバイルレイアウト */

   header {
     padding: 50px 0;
     display: flex;
     gap: 20px;
     justify-content: space-between;
     align-items: center;
   }

   .logo {
     font-size: 200%;
   }

   button {
     font-size: 250%;
     border: 0;
     background: none;
     cursor: pointer;
   }

   button:hover,
   button:focus {
     text-shadow: 0 0 2px black;
   }

   nav {
     position: fixed;
     inset: 10%;
     background-color: white;
     display: none;
   }

   nav ul {
     margin: 0;
     padding: 0;
     list-style: none;
     text-align: center;
     height: 100%;
     display: flex;
     gap: 10px;
     flex-direction: column;
   }

   nav li {
     flex: 1;
   }

   nav a {
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 150%;
     width: 100%;
     height: 100%;
     background-color: black;
     color: white;
     text-decoration: none;
   }

   nav a:hover,
   nav a:focus {
     font-weight: bold;
   }

   .photos {
     list-style: none;
     margin: 0;
     padding: 0;
     display: grid;
     gap: 5px;
     grid-template-columns: 1fr 1fr;
   }

   .feature {
     width: 200px;
     float: left;
     margin: 8px 30px 20px 0;
   }
   ```

4. フォルダー内に `script.js` ファイルを作成し、次のコンテンツを貼り付けてください。

   ```js
   const btn = document.querySelector("button");
   const nav = document.querySelector("nav");

   function showNav() {
     nav.style.display = "block";
   }

   function hideNav() {
     nav.style.display = "none";
   }

   function hideNavEsc(e) {
     if (e.key === "Escape") {
       nav.style.display = "none";
     }
   }

   function handleEventListeners() {
     if (matchMedia("(width > 800px)").matches) {
       btn.removeEventListener("click", showNav);
       nav.removeEventListener("click", hideNav);
       document.body.removeEventListener("keydown", hideNavEsc);
       if (nav.style.display === "none") {
         nav.style.display = "block";
       }
     } else {
       btn.addEventListener("click", showNav);
       nav.addEventListener("click", hideNav);
       document.body.addEventListener("keydown", hideNavEsc);
       if (nav.style.display === "block") {
         nav.style.display = "none";
       }
     }
   }

   handleEventListeners();

   window.addEventListener("resize", handleEventListeners);
   ```

5. フォルダー内に `images` というサブフォルダーを作成し、以下の画像ファイルをその中に保存してください。
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
6. ファイルを保存し、ブラウザーで `index.html` を読み込んで検査の準備を整えてください。狭いビューポートで表示した際のページの出発点は、以下のような見た目になるはずです。

   ![モバイルファースト対応の出発点。単一の列のレイアウトで、上部にロゴとハンバーガーメニューアイコンを配置。その下に最上位見出しを配置し、続いてテキストコンテンツとフローティング画像を表示。](rwd-task-start.png)

## プロジェクト概要

この例で指定されたコンテンツは、前回の課題である[レイアウトの基礎理解](/ja/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension)と同じですが、構造に若干の違いがあります。また、最初からほぼ完成したレイアウトを備えていますが、実際に確認するとお気づきかもしれませんが、広い画面のビューポートでは見た目がひどい状態です！

これは、最初からモバイルレイアウトを指定しているためです。ナビゲーションメニューは「ハンバーガーメニュー」アイコンを押すことでアクセスでき、メニュー項目をクリックするか <kbd>Esc</kbd> キーを押すことで閉じられます。この機能は JavaScript で実装されており、ビューポートの幅が `800px` 未満の場合にのみ動作します。これにより、実装予定のワイドスクリーンレイアウトとの干渉を防いでいます。

特に、2 つのレイアウトの実装を加えてください。1 つ目は幅が `800px` を超える場合に、2 つ目は `1300px` 以上の場合にそれぞれ開始されます。また、既存コードのいくつかの課題を修正し、追加機能の実装もお願いいたします。

### いくつかの表示の問題を修正

まず最初に、初期テンプレートに残しておいたいくつかの問題を解決する必要があります。

1. 現在、モバイルブラウザーではレイアウトが正しく表示されません。この問題を修正するには、`<html>` 文書の `<head>` 内にタグを追加してください。
2. ブラウザーウィンドウの幅を狭く設定すると、ページ下部に写真ギャラリーが正しく表示されていないことがわかります。これは写真がコンテナーからはみ出しているためです。この問題を修正するには、CSS ファイルに宣言を追加してください。

### 中間レイアウトの作成

ビューポート幅が `800px` 以上の場合、ページには中間レイアウトを適用する必要があります。レイアウトを完了するには以下の手順に従ってください：

1. メニューの `<button>` を非表示にし、`<nav>` を表示させます。非表示/表示メニューはモバイルレイアウトでのみ使用します。
2. `<nav>` の位置指定を変更し、コンテンツの大部分の上に重なるのではなく、サイトの最上部、「面白いウェブサイト」ロゴの直下に配置してください。また、コンテンツがスクロールされてその位置まで到達した後は、ビューポートの上部に固定されるようにします。
3. ナビゲーションリストのアイテムは現在、縦列で表示されています。このレイアウトでは、代わりに画面全体にわたる行として表示させたいと考えています。
4. リストアイテム内の `<a>` 要素を調整し、上下に `10px` のパディングを設定し、フォントサイズを小さくします（例えば `100%`）。
5. `<nav>`、`<article>`、`<aside>` 要素はすべて `<main>` 要素の子要素です。これらをグリッドとして配置し、名前付きグリッドテンプレート領域を使用し、次の構造でレイアウトしてください。

   ```plain
   ┌----------------------------------------┐
   |                  <nav>                 |
   ├------------------------------┬---------┤
   |           <article>          | <aside> |
   |                              |         |
   ```

   `<article>` 要素の幅は `<aside>` 要素の 3 倍とし、両要素は同一行に配置してください。`<nav>` 要素は他の 2 種類より上の別個の行に配置し、利用できる全幅にまたがるようにしてください。また、異なるグリッドアイテム間には `20px` の隙間を記載してください。

### 広い画面のレイアウトの作成

ビューポート幅が `1300px` 以上の場合、ページには広い画面のレイアウトを適用する必要があります。レイアウトを完了するには以下の手順に従ってください。

1. 中間レイアウトに実装したグリッドレイアウトを、別のものに変更してください。今回も名前付きグリッドテンプレート領域を使用します。今回は、構造をこのようにしてください。

   ```plain
   ┌--------┬------------------------------┬---------┐
   | <nav>  |           <article>          | <aside> |
   |        |                              |         |
   ```

   今回は、3 つの要素すべてが同じ行に配置されています。`<nav>` 要素と `<aside>` 要素は同じ幅にする必要があり、`<article>` 要素は他の 2 種類の要素の幅の 3 倍にする必要があります。

2. 中間レイアウトの結果、ナビゲーションリストアイテムは横一行に表示されています。広い画面のレイアウトが動作するようにするには、リストのスタイル設定を調整し、モバイルレイアウト時と同様にリストアイテムが再び縦一列に表示されるようにする必要があります。
3. リストアイテムは現在 `flex` 値が `1` に設定されており、列の高さ全体に広がるように表示されます。ナビゲーションアイテムがコンテンツと設定された `padding` の高さのみになるよう、このプロパティ値を調整してください。

### レスポンシブ字組みの実装

`<h1>` および `<h2>` 要素のスタイル設定を調整し、以下の条件を満たすようにしてください。

1. 上マージンと下マージンを除去し、上下のコンテンツによりぴったりと収まるようにしてください。
2. ビューポートの幅が拡大または縮小される際に、見出しのサイズをレスポンシブに変化させつつ、ズーム機能は維持してください。見出しが利用できる空間をきれいに埋め、複数行に分割されないよう、適切な単位を選択してください。

### 印刷用レイアウトの調整

ページを表示する際に、レイアウトから `<button>` および `<nav>` 要素が除去されるようにするスタイルブロックを追加してください。

## ヒントとコツ

1. この課題を完了させるために JavaScript を編集する必要はありません。
2. プロジェクト概要に記載されている課題のいくつかを達成する方法は複数あり、物事の進め方に絶対的な正解や間違いは多くの場合存在しません。いくつかの異なる手法を試してみて、最も効果的な方法を探りましょう。実験しながらメモを取っておくことをお勧めします。
3. 前回の設定で設定されたプロパティ値が、後続のレイアウトで問題を発生させることがあります。レスポンシブデザインの技術の一部は、以前に設定されたプロパティ値を解除または上書きすべきタイミングを見極めることにあります。

## 例

次のスクリーンショットは、出来上がった中間レイアウトがどのようになるべきかを示しています。

![RWD タスクのウェブサイト中間レイアウトの完成例。上部にはロゴ、その下に水平ナビゲーションメニュー、続いて 2 列レイアウト（左側にテキストコンテンツ、右側に写真ギャラリー）を配置。](rwd-task-middle.png)

次のスクリーンショットは、完成した広い画面のレイアウトがどのようになるべきかを示しています。

![RWD 課題のウェブサイトの広い画面のレイアウトの完成例。上部にはロゴ、続いて 3 段組み：左側に縦型ナビゲーションメニュー、中央にテキストコンテンツ、右側に写真ギャラリーを配置。](rwd-task-widescreen.png)

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

モバイルブラウザーでレイアウトを正しく表示させるには、HTML 文書の `<head>` 内にビューポート `<meta>` タグを追加する必要があります。

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

完了した CSS は、おおよそ以下のようになります。

```css-nolint
/* 全般的なスタイル */

* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  margin: 0;
  font: 1.2em / 1.6 sans-serif;
  padding: 0 20px 20px 20px;
}

img {
  display: block;
  border: 1px solid black;
  /* 模範解答: 写真がコンテナーから飛び出さないようにする */
  max-width: 100%;
}

/* Mobile layout */

header {
  padding: 50px 0;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 200%;
}

button {
  font-size: 250%;
  border: 0;
  background: none;
  cursor: pointer;
}

button:hover,
button:focus {
  text-shadow: 0 0 2px black;
}

nav {
  position: fixed;
  inset: 10%;
  background-color: white;
  display: none;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

nav li {
  flex: 1;
}

nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  text-decoration: none;
}

nav a:hover,
nav a:focus {
  font-weight: bold;
}

.photos {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}

.feature {
  width: 200px;
  float: left;
  margin: 8px 30px 20px 0;
}

/* 模範解答: 中間レイアウトの作成（ブレークポイント: 800px） */

@media (width > 800px) {
  /* 中間ブレークポイントにおけるナビゲーションのスタイル設定を調整 */
  button {
    display: none;
  }

  nav {
    display: block;
    inset: unset;
    position: sticky;
    top: 0;
  }

  nav ul {
    flex-direction: row;
  }

  nav a {
    font-size: 100%;
    padding: 10px 0;
  }

  /* 中間ブレークポイント用のグリッドレイアウトを生成 */

  nav {
    grid-area: nav;
  }

  article {
    grid-area: main;
  }

  aside {
    grid-area: photos;
  }

  .grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "nav nav"
      "main photos";
    gap: 20px;
  }
}

/* 模範解答: 広い画面のレイアウトを作成（ブレークポイント: 1300px） */

@media (width > 1300px) {
  .grid {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: "nav main photos";
  }

  nav ul {
    flex-direction: column;
  }

  nav li {
    flex: unset;
  }
}

/* 4. 模範解答: レスポンシブ字組みを実装 */

h1 {
  font-size: calc(1.3rem + 3vw);
  margin: 0;
}

h2 {
  font-size: calc(1rem + 2vw);
  margin: 0;
}

/* 5. 模範解答: 印刷向けのレイアウトの調整 */

@media print {
  nav,
  button {
    display: none;
  }
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
