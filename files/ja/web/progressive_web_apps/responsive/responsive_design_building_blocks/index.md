---
title: レスポンシブデザインの構成要素
slug: Web/Progressive_web_apps/Responsive/responsive_design_building_blocks
tags:
  - Apps
  - CSS
  - HTML5
  - Mobile
  - Responsive Design
---
この記事では、レスポンシブデザインの主な基本要素について説明し、必要に応じてさらなる情報へのリンクを紹介します。

ウェブ開発者にとって、サイトにアクセスするブラウザーや端末に応じてユーザーインターフェイスを変化させ、使い勝手を最適にするウェブサイトやアプリを作成することは、かなり一般的になっています。そのためには、プラットフォームやブラウザーごとに異なるバージョンのサイトやアプリを作成し、どのブラウザーやプラットフォームからサイトが見られているかを検知した上で、適切なサービスを提供するという方法があります。しかし、これはどんどん非効率的になりあｍす。ブラウザーを検知させることは、本質的にエラーが発生しやすく、コードの複数のコピーを維持することは悪夢のような作業になりかねません。

通常は、サイトにアクセスするブラウザーやプラットフォームを気にせず、機能テストを用いてブラウザーがサポートするコード機能や特定のブラウザー機能の値を調べ、適切にコードを調整する単一バージョンのコードを作成する方がはるかに優れています。これを「レスポンシブデザイン」または「アダプティブデザイン」と呼んでいます。これらは関連していますが異なるアプローチです。この 2 つのアプローチの違いについては、[レスポンシブデザインとアダプティブデザイン](/ja/docs/Web/Apps/app_layout/Responsive_design_versus_adaptive_design)を参照してください。

こちらの方が、より信頼性が高く、保守性も高く、将来性もあります。新しいブラウザーやプラットフォームの登場に合わせてサイトのバージョンを上げたり、既存のブラウザーの機能サポートの変更に合わせてコードを調整しなければならないという状況に陥ることもありません。

この方法にはデメリットもあります。コンテンツやレイアウト、機能を端末ごとに大きく変える必要がある場合は、あまり良い方法ではないかもしれません。また、既存のサイトにレスポンシブデザインを追加してモバイル/タブレットに対応させると、個別にモバイルサイトやアプリを作成するよりもはるかに手間がかかる場合もあります。詳しくは[レスポンシブデザインのメリット・デメリット](/ja/docs/Web/Progressive_web_apps)を参照してください。

> **Note:** もっと背景の情報と基本について知りたいのであれば、[レスポンシブデザイン](/ja/docs/Web/Progressive_web_apps)の基本についての解説を参照してください。

## 流動グリッド

まずは、アプリケーションのレイアウトを流動的にすることから始めましょう。基本的には、ピクセルなどの固定幅ではなく、パーセント値や em/rem を組み合わせてコンテナーやテキストの寸法を決めることです。これには、さまざまなビューポートの大きさに合わせてレイアウトを変更できるという、多くの利点があります。例を見てみましょう。

このアプリケーションは、ウェブカメラからビデオストリームを取得し（{{domxref("navigator.getUserMedia", "getUserMedia()")}} を使用）、そのビデオストリームから静止画をキャプチャして（HTML5 {{HTMLElement("canvas")}} を使用）、ギャラリーに保存します。その後、以前に撮影した画像を表示したり、削除したりすることができます。機能については他の記事で詳しく説明しますが、ここではレイアウトに注目します。

> **Note:** [Snapshot app on Github](https://github.com/chrisdavidmills/snapshot) では、 [Snapshot app] が公開されています。コードをチェックして、改善に役立ててください。また、 [Snapshot のライブ実行](https://chrisdavidmills.github.io/snapshot/)もご覧いただけます。なお、 `getUserMedia()` は実験的な技術であり、現在は Google Chrome と Firefox デスクトップでしか動作しません。将来的には、より多くの機能を追加したり、 Snapshot のスタイルを整理したりする予定です。

Snapshot のデスクトップレイアウトは 3 列で、それぞれカメラビューアー、画像キャプチャビュー、ギャラリーが配置されています。

![](desktop-layout.png)

マークアップは次の通りです。

```html
<x-deck selected-index="0">
  <x-card>
    …
  </x-card>
  <x-card>
    …
  </x-card>
  <x-card>
    …
  </x-card>
</x-deck>
```

> **Note:** この x- で始まる要素は見慣れないかもしれませんが、 Mozilla のモバイルウェブアプリ用 UI 要素ライブラリである [Brick](https://mozbrick.github.io/) の一部です。私たちは Brick を使って Snapshot のモバイルレイアウトを作成しましたが、その詳細については後述します。

並んで配置するために、以下のルールを採用しました。

```css
x-card {
  width: 100%;
}

x-card:nth-child(1), x-card:nth-child(2) {
  width: 30%;
  float: left;
  padding: 2rem;
}

x-card:nth-child(3) {
  width: 40%;
  float: left;
  height: 100%;
  overflow: auto;
  padding: 2rem;
}
```

そこで、最初の 2 列の {{cssxref("width")}} を `30%` とし、3 列目の `width` を `40%` にして、すべての列を左に浮動させています。このようにすると横に並んだ状態になり、ブラウザーのウィンドウの大きさが変わっても、その比率は変わりません。これは簡単なグリッドの例ですが、必要に応じてこの原理をより複雑なグリッドレイアウトに応用することができます。

### 寸法を border-box とする

すべての要素の {{cssxref("box-sizing")}} を `border-box` に設定しているため、パディングを設定してもコンテナーの幅や高さに影響しません。

```css
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

これは基本的に、 {{cssxref("width")}} および {{cssxref("height")}} がコンテンツだけでなく、境界を含む要素全体の寸法を設定することを意味します。ですから、 `width: 40%` と設定すると、ボックスの幅は常に親の `40%` となり、 {{cssxref("padding")}} と {{cssxref("border")}} の幅がコンテンツの幅に追加されるのではなく、差し引かれることになります。とても便利ですね。詳しくは、 [\* { Box-sizing: Border-box } FTW](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) (Paul Irish) を参照してください。

## 柔軟な置換要素

現在はかなりうまくいっていますが、まだいくつかの問題が残っています。まず最初に、 {{HTMLElement("video")}} と {{HTMLElement("img")}} 要素を、裸でスタイルのない最初の 2 つの列の中に入れるとどうなるかを見てみましょう。

![](broken-images.png)

置換要素の大きさは、その要素に挿入されたメディアの大きさによって決まり、メディアの大きさは固定されているため、置換要素は包含要素からはみ出し、レイアウトを乱してしまいます。これは非常に恐ろしいことですが、一般的にこの種の問題は簡単な CSS で簡単に解決できます。

```css
img, video {
  max-width: 100%;
}
```

これにより、置換要素は、何があってもコンテナーの幅に収まるようになります。ただし、コンテナーの幅に満たない場合は、コンテナーを埋めるために伸長されることはありません。スナップショットの例では、若干異なるコードになりました。

```css
x-card:nth-child(1) video, x-card:nth-child(2) img {
  width: 100%;
    …
}
```

これは {{cssxref("max-width")}} とは微妙に異なりますが、重要な違いです。つまり、常に同じ大きさになるようにしたいのです。動画は常に動的にリサイズされますが、そこから撮影された画面キャプチャはリサイズされません。そのため、 `max-width: 100%` を使用すると画面のリサイズ時に、次のように異なる大きさの要素を含む厄介なレイアウトになってしまう可能性がありました。

![](broken-max-width-layout.png)

## メディアクエリー

流動グリッドは素晴らしいスタートですが、特定のポイント（ブレイクポイントと呼ばれる）でレイアウトが崩れ始めることに気づくでしょう。これらのポイントでは、レイアウトの問題を修正するためにレイアウトを変更したいと思うでしょうが、これはメディアクエリーを使って行うことができます。

> **Note:** メディアクエリーとは、 CSS3 の機能の一つで、メディア特性の検査結果に応じて CSS を選択的に適用することができるものです。基本的なことについては、[メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)を参照してください。

### 典型的なデスクトップレイアウト

今回の例では、すでに見たようにデスクトップレイアウトを採用しています。これは、スタイルシートの先頭に含まれる CSS ルールを使って作成されており、メディアクエリーが発生する前に作成されています。

![](desktop-layout.png)

### 中間の幅のレイアウト

タブレットや狭いノートパソコンの画面でも動作するように、中間の幅のレイアウトも用意します。これは、最初のメディアクエリー内のすべての CSS によって作成されています。

```css
@media all and (max-width: 1024px) {
  x-card:nth-child(1), x-card:nth-child(2) {
    width: 50%;
  }

  x-card:nth-child(3) {
    width: 100%;
    clear: left;
  }

  x-card:nth-child(3) img {
    width: 20%;
  }
}
```

ここでは、列の幅を変更し、 3 列目の浮動を削除しています（浮動のおかしな動きを防ぐためにクリアを追加しています）。また、3 つ目のコンテナー（もはやカラムではなく、これはギャラリーです）内の画像の幅を変更し、1 行に 5 枚の画像を表示するようにしました（以前は 1 行に 3 枚でした）。

![](middle-layout.png)

### 狭い画面／モバイルのレイアウト

続いて、モバイルアプリやオープンウェブアプリに適した狭い画面のレイアウトです。これは複数のパーツで構成されています。まず、予想通り、メインの CSS にメディアクエリーがあります。これはかなり重いので、部分的に見ていきましょう。

```css
@media all and (max-width: 480px) {
  x-card:nth-child(1), x-card:nth-child(2), x-card:nth-child(3) {
    width: 100%;
    float: none;
    padding: 0;
  }

  button {
    margin-top: 0;
    border-radius: 0;
  }

  x-card:nth-child(1) video, x-card:nth-child(2) img {
    border-radius: 0px;
    border: none;
    padding: 0;
    background-color: 0;
  }
```

この最初のブロックでは、モバイルアプリでは必要のなかった広い画面のレイアウトのさまざまな項目がリセットされています。

```css
  x-card:nth-child(1) video, x-card:nth-child(2) img, x-card:nth-child(3) {
    margin-top: 17.5vw;
  }

  x-card:nth-child(1) button, x-card:nth-child(2) button {
    position: absolute;
    bottom: 0;
  }

  x-card:nth-child(2) button:nth-of-type(2) {
    bottom: 5.9rem;
  }

  x-card:nth-child(1) button {
    font-size: 7vw;
  }

  x-card:nth-child(2) button {
    font-size: 7vw;
  }
```

次のルールでは、最初の 2 枚のカード内のボタンの大きさを調整し、すべてのカードのコンテンツに上の余白を与えて、ナビゲーションボタンの下にコンテンツが隠れてしまわないようにしています（以下参照）。これは、 Mozilla Brick （下記参照)）がコンポーネントを画面の幅と高さの 100% にすることを強制するために必要でした。これらに `vw` (viewport width) の単位を使用しました。 `1vw` はビューポート幅の 1% に相当します。これにより、ビューポート幅に合わせて寸法がうまく拡大縮小されます。このセクションの最後に、すべてのボタンをカードの下部に配置することで、さまざまなビューポートの大きさでもレイアウトが問題なく表示されるようにしました。さらに、カードの第 2 ボタンを、ボタンの幅分だけ上に配置するルールを追加しました。ギャラリーで画像をクリックすると、カードの削除やキャンセルのオプションが表示されますが、 2 つのボタンを重ねて配置したくありません。

```css
x-card:nth-child(3) img {
  width: 50%;
}
```

このルールにより、ギャラリー画像の幅が変更され、 1 行に 2 枚の画像が表示されるようになりました。

```css
  nav {
    width: 100%;
    position: absolute;
    z-index: 1000;

    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
  }

  nav button {
    font-size: 6.8vw;

    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;

    border-left: 1px solid rgba(100,100,100,0.4);
  }

  nav button:first-child {
    border-left: 0;
  }
}
```

この最後のルールでは、 {{HTMLElement("nav")}} の表示値を `flex` に変更して表示させます（他のビューでは必要ないため、スタイルシートの先頭にある既定の CSS では `none` に設定されていました）。次に、絶対配置指定と {{cssxref("z-index")}} を使用して、文書フローの中で空間を取らないようにして、 x カードの上に配置します（x カードに上端マージンを与えたのはこのためです）。

次に、ボタンの `font-size` を `6.8vw` に設定しています。なぜでしょう？それは、先ほど x カードのトップマージンを `17vw` に設定したからです。アプリ内のすべてのボタンは、スタイルシートの一番上にある既定の CSS で、 `line-height` が 2.5 に設定されています（信じられない方は確認してみてください）。そして、 6.8 x 2.5 = 17 です。

最後に`flex: 1;`を使って、ボタンが常に同じ割合でライン上に配置されるようにしています。それでは、下の画像のようなモバイルレイアウトを見てみましょう。

![モバイルアプリ表示用の 1 列レイアウトで、カード間を移動するための 3 つのボタン、画像ビューアー、ボタンには「Save Picture」ボタンを配置しています。](mobile-layout.png)しかし、このモバイルアプリのレイアウトには、まだまだ仕掛けがあります。前述したように、モバイルアプリのレイアウトには、すぐに使えるモバイル UI コンポーネントの集合体である [Mozilla Brick](https://mozilla.github.io/brick/) を使用しました。特に、 [deck](https://mozilla.github.io/brick/docs.html#deck) コンポーネントは、ボタンが押されたときにカードの間に素敵なトランジション効果を与えるために使用しました。 Brick の使い方については、 [Mozilla Brick: ready made UI components](/ja/docs/Web/Apps/app_layout/Mozilla_Brick_ready_made_UI_components) をご覧ください。

今回の記事に関連するのは、モバイルアプリのビューを見るとき以外は、 Brick CSS と JavaScript ファイルをマークアップに適用しないようにしたことです。これを実現するために、ブリック CSS を `media` 属性を持つ別の {{HTMLElement("link")}} 要素を使ってページに適用しました。

```html
<link href="dist/brick.css" type="text/css" rel="stylesheet" media="all and (max-width: 480px)">
```

これは、ビューポート幅が 480px 以下でないと、スタイルシート全体が HTML にリンクされないというものです。 JavaScript の話に移りますが、 {{HTMLElement("script")}} 要素は `media` 属性を受け付けないので、別の方法で行う必要がありました。幸いなことに、{{domxref("window.matchMedia()")}}という JavaScript の構造があり、メディアクエリーが `true` を返すかどうかに応じて、条件付きで JavaScript の構造を実行することができます。そこで、 `brick.js` ファイルを開き、全体を以下のようにまとめました。

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // The whole of brick.js goes here!
}
```

これにより、ビューポートの幅が 480px 以下でないと、 `brick.js` ファイル内の何も実行されません。問題は解決しました。

### 本当に広い画面

ひとつ気になるのは、ビューポートが（シネマディスプレイのように）非常に広くなると、レイアウトの幅が広がらなくなり、利用可能な空間の中央に配置されるということです。これを実現するのはとても簡単です。 `min-width` のメディアクエリーを使って、 {{HTMLElement("body")}} の幅をある一定の位置で固定することができます。

```css
@media all and (min-width: 1400px) {
  body {
    width: 1400px;
    margin: 0 auto;
  }
}
```

しかし、実際には、代わりに次のルールを設定して、メディアクエリーを完全に削除する方が簡単です。

```css
body {
  max-width: 1400px;
  margin: 0 auto;
}
```

### 向きの不具合

モバイルアプリのレイアウトは縦向きに設計されているため、横向きの端末で見るとひどいことになっていました。この問題を解決するために、メディアクエリーを追加しました。このメディアクエリーは、デバイスが横向きに表示されているときにのみ、その内容をマークアップに適用します。

```css
@media all and (max-width: 480px) and (orientation: landscape) {
  nav {
    width: auto;

    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  nav button {
    font-size: 6.8vh;
  }

  nav button {
    border-left: 0;
  }

  x-card:nth-child(1) video, x-card:nth-child(2) img, x-card:nth-child(3) {
    margin-top: 0;
  }

  x-card:nth-child(1) button, x-card:nth-child(2) button {
    font-size: 2rem;
  }
}
```

これは以下のことを行います。

- ナビボタンを調整し、フレックスボックスのレイアウト方向を変更し、フォントサイズと境界を変更して、水平方向ではなく垂直方向に配置します。
- x-card のコンテンツから上部のマージンを削除し、横向きモードで画面の上部に見苦しい隙間ができないようにします。
- 制御ボタン（_Take Picture_、_Delete Photo_ など）のサイズを変更し、大きすぎないようにして、画面に適切に収まるようにしました。

その結果、以下のようなレイアウトになりました。

![](viewport-fail-fixed.png)

> **Note:** 向きに関する別の解決策は、アプリの向きを縦か横に固定することです。インストールされたアプリで作業している場合は、[マニフェストの orientation フィールド](/ja/docs/Web/Apps/Build/Manifest#orientation)を使って簡単に行うことができます。一般的なウェブアプリで動作する解決策を求めるのであれば、 [Screen orientation API](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation#locking_the_screen_orientation) を使用したり、間違った方向を使用している場合にユーザーに画面の回転を求めるメッセージを表示したりすることができます（例えば、 `window.innerWidth` が `window.innerHeight` よりも大きい場合、ゲームが横向きモードであると仮定して、「回転してください」というメッセージを表示します）。

## ビューポート

このアプリの例で最後に挙げられる問題は、モバイルブラウザーとメディアクエリーに関するものです。このアプリの例をモバイルブラウザーで表示した場合、せっかくのモバイルレイアウトが表示されません。代わりに以下のような画像が表示されます。

![](viewport-fail.png)これは本当に私たちが望んでいたものではないということに同意していただけると思いますが、なぜこのようなことが起こるのでしょうか？要するに、モバイルブラウザーは嘘をつきます。モバイルブラウザーは、ウェブページを本来のビューポートの幅で表示しません。代わりに、想定される高いビューポート幅（ノートパソコンの画面に近いもの）でページをレンダリングし、その結果をモバイル画面内に収まるように縮小して表示します。これは賢明な防御メカニズムです。メディアクエリーを使用していない旧来のサイトのほとんどは、例えば 320px や 480px の幅でレンダリングされるとひどい状態になります。しかし、これでは私たち責任あるウェブ開発者は、メディアクエリーを使って CSS に小さな画面のレイアウトを記述し、それをモバイル端末に表示させたいと思っても、どうにもなりません。

このモバイルレンダリングの動作を上書きする方法として、 {{HTMLElement("meta")}} タグの形で HTML ページに挿入される viewport があります。この例では、 HTML の {{HTMLElement("head")}} に以下を追加してみましょう。

    <meta name="viewport" content="width=480">

これにより、ブラウザーはモバイルアプリのレイアウトを適切にレンダリングします。 `width=480` はブラウザーに「このマークアップを 480 ピクセル幅でレンダリングしてください」と伝え、その結果、メディアクエリーが適切に機能するようになります。 viewport meta タグには、他にも多くのオプションがあり、[viewport meta タグを使ってモバイルブラウザーでのレイアウトを制御する](/ja/docs/Mozilla/Mobile/Viewport_meta_tag)で紹介されています。

> **Note:** [device adaptation](https://dev.w3.org/csswg/css-device-adapt/) という仕様があり、同じ機能を CSS で、 `@viewport` アットルールを使用して定義しています。これはおそらく、そのような情報を置くのにより合理的な場所ですが、この仕様は viewport meta タグほど対応されていないので、今のところはそちらを使うべきでしょう。

## レスポンシブな画像や動画

また、最近増えているのが、画像や動画のウェイト（KB 単位のサイズ）と、画面上の画像の寸法をレスポンシブにすることです。デスクトップでもモバイルでも、画像はアプリの UI 内に収めたいものですが、モバイルアプリはデスクトップアプリに比べて利用可能なビューポートの寸法がはるかに小さいことも考慮する必要がありますので、モバイルデバイスにはより小さな画像をダウンロードさせるようにしなければなりません。また、一般的にモバイル端末は、デスクトップ端末に比べて帯域幅が狭く、使用できるメモリーも少ないため、キロバイト単位で増えることは影響が大きくなります。

もうひとつの課題は、高解像度の画面への対応です。低解像度用にデザインされたラスターグラフィックは、高解像度の画面に表示されると小さく見えてしまう危険性があります。端末はこの問題を回避するために、レンダリングされたページに既定のズーム係数を適用します。この場合、問題となるのは、ラスター画像が拡大され、その結果、ピクセル化されたように表示されてしまうことです。

### CSS 背景画像

CSS の背景画像については、これはかなり簡単に解決できる問題です。[モバイルファースト](/ja/docs/Web/Progressive_web_apps/Responsive/Mobile_first)の手法を用いた場合、メディアクエリーが適用される前に、既定で CSS 内でモバイルレイアウトが作成されます。メディアクエリーは、ビューポートが一定の幅以上の場合にのみマークアップに適用される CSS を提供します。簡単な例を見てみましょう。

```css
header {
  height: 300px;
  width: 100%;
  background: url(images/small-header.jpg) center;
}

@media all and (min-width: 480px) {
  header {
    background: url(images/large-header.jpg) center;
  }
}
```

これは、モバイルブラウザーがダウンロードするのはモバイル用の背景画像資産だけで、デスクトップ用のモバイル資産はダウンロードしないということです。また、次のように、解像度メディアクエリーを使用して、高解像度の端末により大きなグラフィックを提供することもできます。

```css
button {
  background: url(images/low-res-header.jpg) 1rem center ;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2),
       only screen and ( min-resolution: 192dpi),
       only screen and ( min-resolution: 2dppx) {
  button {
    background: url(images/high-res-header.jpg) 1rem center ;
  }
}
```

これはかなり複雑に見えますが、実際にはそうではありません。現時点では、ブラウザーごとに異なる解像度のメディアクエリーの種類や単位に対応しているため、いくつかのメディアクエリーオプションを提供しています。 Brett Jankord 氏が [Cross Browser Retina/High Resolution Media Queries](https://www.brettjankord.com/2012/11/28/cross-browser-retina-high-resolution-media-queries/) で良い説明をしています。

### \<video>

HTML5 の動画は、レスポンシブ対応の面でもかなり充実しています。必要であれば、 {{HTMLElement("source")}} 属性で複数の動画ファイルを指定し、それぞれにソースと MIME タイプを指定することもできます。

```html
<video controls>
  <source src="videos/720/crystal720.mp4" type="video/mp4">
  <source src="videos/720/crystal720.webm" type="video/webm">
</video>
```

しかし、もう一歩踏み込むことができます。 `<source>` 要素の `media` 属性にメディアクエリーを指定することができます。ブラウザーで読み込まれる動画は、ブラウザーが対応しているフォーマットと、メディア検査の結果の両方に依存します。例を挙げます。

```html
<video controls>
  <source src="videos/320/crystal320.mp4" type="video/mp4" media="all and (max-width: 480px)">
  <source src="videos/320/crystal320.webm" type="video/webm" media="all and (max-width: 480px)">
  <source src="videos/720/crystal720.mp4" type="video/mp4" media="all and (min-width: 481px)">
  <source src="videos/720/crystal720.webm" type="video/webm" media="all and (min-width: 481px)">
</video>
```

これにより、サイトは利用可能な空間に基づいて様々な動画ファイルを提供し、ユーザーの体験を最適化することができます。

### \<img>

HTML の画像はさらに難しい問題です。 HTML 画像には、ビューポートの大きさに応じて異なる画像ファイルを提供する仕組みがありません。また、ブラウザの動作には厄介な点がいくつもあるため、解決策を模索するのは想像以上に困難です。 W3C の [Responsive Images Community Group](https://www.w3.org/community/respimg/) はこの問題を何年も議論し、 [\<picture>](https://www.w3.org/TR/html-picture-element/) という要素にたどり着きました。この要素は {{HTMLElement("video")}} と同様のマークアップ構造を提供し、 {{HTMLElement("source")}} はメディアクエリーの結果で選択可能です。もう一つの提案、 [srcset](https://www.w3.org/html/wg/drafts/srcset/w3c-srcset/) は、アップル社によって提唱されたもので、若干異なるアプローチをとっています。その代わりに、 {{HTMLElement("img")}} のための新しい `srcset` 属性を提供し、その中に画像の参照を、ブラウザーがビューポートの大きさや解像度などを考慮して、どの画像を表示するのが最適かを判断するために使用できる「ヒント」とともに配置します。これらは相互に排他的であることを意図していません。

これは良いことだと思います。どちらも標準化の初期段階にあり、ブラウザー間での対応もありません。現在のところ、様々なポリフィルやその他のソリューションに頼らざるを得ませんが、どれもすべての状況に対応できる完璧なものではありませんので、自分の特定の状況にどれが適しているかを判断する必要があります。利用可能なソリューションには以下のようなものがあります。

- [HiSRC](https://github.com/teleject/hisrc)
  - : [jQuery](https://jquery.com) のプラグインで、画像の小・中・大バージョンを作成し、ブラウザーの解像度や利用可能なネットワーク速度に応じて、適切なものを提供することができます。
- [Mobify.js capturing](http://www.mobify.com/mobifyjs/v2/docs/capturing/)
  - : Mozilla の非常に巧妙なテクニックで、ページが解析される前に、そのソースをキャプチャすることができます。これにより、ブラウザーの機能に応じて画像の `src` 値を JavaScript で置き換えることができ、ブラウザーの先読みの問題を回避することができます。これは有望ですが、古いブラウザーではあまりうまく機能しません。
- [Picturefill](https://github.com/scottjehl/picturefill)
  - : JavaScript ベースの `<picture>` のポリフィルで、うまく機能していますが、多くのカスタムマークアップが必要になります。
- [Adaptive images](http://adaptive-images.com/)
  - : サーバーサイドのソリューションで、ビューポートの大きさをクッキーに記録し、 PHP と `.htaccess` の組み合わせで画像を適切な大きさに変更します。これはマークアップやスクリプトを必要としませんが、いくつかの制限があります。

### SVG およびその他のベクターグラフィック

一部の画像要件（写真ではなく、アイコンやユーザーインターフェイス要素が適しています）では、ベクターグラフィックスを使用することが良い解決策となります。ベクター画像は、画像の各ピクセルに個別のデータが含まれているのではなく、数学的なアルゴリズムに基づいて計算されているため、ファイルサイズが小さくなる傾向があります。また、高解像度の端末でズームしたり表示したりした場合に、無限に拡張することができます（少なくとも理論上は）。また、モバイルアプリのパフォーマンスのもう一つの重要な要素である HTTP リクエストの数を抑えるためにも、いくつかの考えがあります。

- [CSS3](/ja/docs/Web/CSS/CSS3) の機能を使って、画像ファイルに頼らず、可能な限りプログラムでグラフィック効果を生成するようにしましょう。これらの機能には、角丸、グラデーション、ドロップシャドウなどがあります。これらの機能は、解像度の変更やブラウザーのズームに合わせて拡張されます。 Internet Explorer 6-8 などの古いブラウザーではあまり対応されていませんが、最新の端末向けのインターフェイスを作成している場合はあまり気になりませんし、グレイスフルデグラデーションをする傾向があります。
- [SVG](/ja/docs/Web/SVG) を使ってインターフェイス要素を作成することもできます。 SVG はベクターグラフィックスで、最近のブラウザーでは十分に対応されて、古いブラウザーの対応にはポリフィルが用意されています。
- アイコンの表示に[ウェブフォント](/ja/docs/Web/CSS/@font-face)を使用すると、ファイルサイズと HTTP リクエストを抑えるための効果的であり、現在のブラウザーと古いブラウザーの両方で対応しています。

## 関連情報

- [ウェブ開発](/ja/docs/Web/Guide)
- [モバイルウェブ開発](/ja/docs/Web/Guide/Mobile)
