---
title: "課題: 基礎的なレイアウトの理解"
short-title: "課題: 基礎的なレイアウト"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}

この課題では、モジュールでこれまで学んだレイアウト機能、すなわちフレックスボックス、浮動ボックス、グリッド、位置指定に関する知識が試されます。最終的には、これらの基本的なツールをすべて使用したウェブページのレイアウトを開発することになります。

## 出発点

この課題はローカル開発環境で解決していただきます。理想的には、レイアウト機能が期待通りに動作していることを確認するため、例をフルサイズのブラウザーウィンドウで表示することをお勧めします。

1. コンピューター上に `layout-challenge` という名前の新しいフォルダーを作成してください。
2. フォルダー内で`index.html`ファイルを作成し、次のコンテンツを貼り付けてください。

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Layout Task</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
     </head>

     <body>
       <div class="logo">My exciting website!</div>

       <nav>
         <ul>
           <li><a href="">Home</a></li>
           <li><a href="">Blog</a></li>
           <li><a href="">About us</a></li>
           <li><a href="">Our history</a></li>
           <li><a href="">Contacts</a></li>
         </ul>
       </nav>

       <main class="grid">
         <article>
           <h1>An Exciting Blog Post</h1>
           <img src="images/square6.jpg" alt="placeholder" class="feature" />
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
             justo at erat egestas porttitor vel nec tortor. Mauris in molestie
             ipsum. Vivamus diam elit, ornare ornare nisi vitae, ullamcorper
             pharetra ligula. In vel lacus quis nulla sollicitudin pellentesque.
           </p>

           <p>
             Nunc vitae eleifend odio, eget tincidunt sem. Cras et varius justo.
             Nulla sollicitudin quis urna vitae efficitur. Pellentesque
             hendrerit molestie arcu sit amet lacinia. Vivamus vulputate sed
             purus at eleifend. Phasellus malesuada sem vel libero hendrerit,
             sed finibus massa porta. Vestibulum luctus scelerisque libero, sit
             amet sagittis eros sollicitudin ac. Class aptent taciti sociosqu ad
             litora torquent per conubia nostra, per inceptos himenaeos.
           </p>

           <p>
             Phasellus tincidunt eros iaculis, feugiat mi at, eleifend mauris.
             Quisque porttitor lacus eu massa condimentum, eu tincidunt nisl
             consequat. Nunc egestas lacus dolor, id scelerisque ante tincidunt
             ac. In risus massa, sodales ac enim eu, iaculis eleifend lorem.
           </p>

           <p>
             Maecenas euismod condimentum enim, non rhoncus neque tempor ut.
             Vestibulum eget nisi ornare, vehicula felis id, aliquet nibh. Donec
             in mauris in diam aliquam commodo nec ac nunc. Aliquam nisl risus,
             eleifend a iaculis id, tempor vel tortor. Nam ullamcorper dictum
             tellus id rhoncus. Sed quis nulla in mi aliquam euismod nec eu
             metus.
           </p>

           <p>
             Nam orci nulla, convallis aliquet ante ut, lobortis hendrerit
             risus. Nulla malesuada porta turpis in consequat. Duis suscipit
             nulla a mauris pellentesque vehicula. Fusce euismod, mi malesuada
             venenatis vestibulum, metus erat faucibus dui, vel rutrum turpis
             nibh ut diam.
           </p>

           <p>
             Nam ornare et mauris eget tincidunt. Nam ornare et mauris eget
             tincidunt. Donec et ipsum a orci elementum commodo et ut ex.
             Vivamus porttitor sem in purus maximus, eu imperdiet felis
             lobortis.
           </p>

           <p>
             Pellentesque ullamcorper dolor ut ullamcorper convallis. Duis a
             orci aliquet, pretium neque ut, auctor purus. Proin viverra
             tincidunt nisi id fringilla. Maecenas interdum risus in ultricies
             finibus. Vestibulum volutpat tincidunt libero, a feugiat leo
             suscipit in. Sed eget lacus rutrum, semper ligula a, vestibulum
             ipsum. Mauris in odio fringilla, accumsan eros blandit, mattis
             odio. Ut viverra mollis augue, vitae ullamcorper velit hendrerit
             eu. Curabitur mi lacus, condimentum in auctor sed, ornare sed leo.
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

3. フォルダー内で `style.css` ファイルを作成し、次のコンテンツを貼り付けてください。

   ```css
   * {
     box-sizing: border-box;
   }

   body {
     background-color: white;
     color: #333333;
     margin: 0;
     font: 1.2em / 1.6 sans-serif;
   }

   img {
     max-width: 100%;
     display: block;
     border: 1px solid black;
   }

   .logo {
     font-size: 200%;
     padding: 50px 20px;
     margin: 0 auto;
     max-width: 980px;
   }

   .grid {
     margin: 0 auto;
     max-width: 980px;
   }

   nav {
     background-color: black;
     padding: 0.5em;
   }

   nav ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   nav a {
     color: white;
     text-decoration: none;
     padding: 0.5em 1em;
   }

   .photos {
     list-style: none;
     margin: 0;
     padding: 0;
   }

   .feature {
     width: 200px;
   }
   ```

4. フォルダー内に `images` というサブフォルダーを作成し、次の画像ファイルをその中に保存してください。
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
5. ファイルを保存し、ブラウザーで `index.html` を読み込んで課題の準備を整えてください。ページの始点では基本的なスタイル設定は適用されていますがレイアウトはなく、以下のような表示になるはずです。

![レイアウト課題の出発点。要素はきれいにレイアウトされていません。左側に5つのリンクがある黒いナビバーの上にウェブサイトのタイトルがあり、以下ブログ記事のタイトルと記事コンテンツが続きます。ブログタイトルとブログコンテンツの間には、左側に配置された写真があります。](layout-task-start.png)

### プロジェクト概要

未加工の HTML、基本的な CSS と画像が指定されたので、これでデザインのレイアウトを作成する必要があります。

達成する必要がある課題は次のとおりです。

1. ナビゲーションアイテムを一行に表示させ、アイテム同士の間隔を均等に保ち、行の両端の間隔を小さくします。
2. ナビゲーションバーを、コンテンツと共に通常通りスクロールするようにスタイル設定し、ビューポートの上端に到達した時点で固定されるようにしましょう。
3. 記事内の「注目」画像に対して、右側と下側にテキストを回り込ませ、画像とテキストの間に適切な空間をつけましょう。
4. {{htmlelement("article")}} 要素と {{htmlelement("aside")}} 要素は、2 列のレイアウトとして表示してください。列のサイズは柔軟に設定し、ブラウザーウィンドウが狭くなると列も狭くなるようにしてください。2 つの列の間には 20 ピクセルを含む隙間を設けてください。
5. 写真は 2 列のグリッドをつけて表示させ、各列のサイズは均等にし、画像間の間隔は 5 ピクセルとしてください。

## ヒントとコツ

- この課題を完了するために HTML を編集する必要はありません。
- これらの課題を達成する方法はいくつかあり、物事には単一の正しい方法や間違った方法があるわけではありません。いくつか異なる手法を試してみて、どれが一番うまくいくかを見てください。試行錯誤しながらメモを取りましょう。

## 例

次のスクリーンショットは、デザインの完了レイアウトがどのように見えるべきかの例を示しています。

![ウェブサイトのレイアウト課題完了。要素がきれいにレイアウトされています。 5 つのリンクが等間隔に格納された黒いナビバーの上に、ウェブサイトのタイトルがあります。ナビバーの下記には 2 つの節があります。左側にはブログ記事があります。ブログ記事のタイトルの下に、記事のコンテンツが続きます。ブログのコンテンツは、左配置されたの写真を囲むように配置されています。正しい辺には「写真」のタイトルがあり、 2 枚幅のグリッドに並べられた画像群について書かれています。](layout-task-complete.png)

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な CSS は次のようになります。

```css-nolint
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  margin: 0;
  font: 1.2em / 1.6 sans-serif;
}

img {
  max-width: 100%;
  display: block;
  border: 1px solid black;
}

.logo {
  font-size: 200%;
  padding: 50px 20px;
  margin: 0 auto;
  max-width: 980px;
}

.grid {
  margin: 0 auto;
  max-width: 980px;
  /* 模範解答: <article> と <aside> を 2 つの柔軟な列とし、<article> の幅は <aside> の 3 倍とし、20px のすき間を空けます。 */
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

nav {
  background-color: black;
  padding: 0.5em;
  /* 模範解答: ナビゲーションバーはコンテンツと共に通常通りスクロールさせ、その後ビューポートの上部に固定する */
  top: 0;
  position: sticky;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  /* 模範解答: ナビゲーションアイテムを一行で等間隔に表示させ、両端の空間を狭くする */
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
}

.photos {
  list-style: none;
  margin: 0;
  padding: 0;
  /* 模範解答: 写真を 2 列のグリッドで表示させ、各列を均等な幅にし、5px の間隔を空ける */
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}

.feature {
  width: 200px;
  /* 模範解答: 「注目」画像の右側と下側にテキストを回り込ませ、画像とテキストの間に適切な空間をつける */
  float: left;
  margin: 8px 30px 20px 0;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}
