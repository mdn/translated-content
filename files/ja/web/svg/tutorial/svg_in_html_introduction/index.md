---
title: SVG In HTML Introduction
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
---

## 概要

この記事と関連する例では、インラインの [SVG](/ja/docs/SVG) をフォームの背景画像として使用する方法を示します。どのように [JavaScript](/ja/docs/JavaScript) と [CSS](/ja/docs/CSS) を利用すれば、通常の HTML を記述するのと同じ方法で画像を扱えるかを紹介しています。

## ソース

こちらに[この例](/presentations/xtech2005/svg-canvas/SVGDemo.xml)のソースがあります。

```html
<html>
  <head>
    <title>XTech SVG Demo</title>
    <style>
      stop.begin {
        stop-color: yellow;
      }
      stop.end {
        stop-color: green;
      }
      body.invalid stop.end {
        stop-color: red;
      }
      #err {
        display: none;
      }
      body.invalid #err {
        display: inline;
      }
    </style>
    <script>
      function signalError() {
        document.getElementById("body").setAttribute("class", "invalid");
      }
    </script>
  </head>
  <body
    id="body"
    style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;">
    <form>
      <fieldset>
        <legend>HTML Form</legend>
        <p>
          <label>Enter something:</label>
          <input type="text" />
          <span id="err">Incorrect value!</span>
        </p>
        <p>
          <input type="button" value="Activate!" onclick="signalError();" />
        </p>
      </fieldset>
    </form>

    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
      <linearGradient id="gradient">
        <stop class="begin" offset="0%" />
        <stop class="end" offset="100%" />
      </linearGradient>
      <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
      <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
    </svg>
  </body>
</html>
```

## 議論

ページは主に通常の HTML, CSS, JavaScript を使用しています。唯一興味深いのは、その中に含まれている \<svg> 要素です。この要素とその子は SVG 名前空間にあると宣言されています。この要素にはグラデーションと、グラデーションで塗りつぶされた 2 つの図形が含まれています。グラデーションの色停止点の色は CSS で設定されています。ユーザーがフォームに何か間違ったものを入力すると、スクリプトは \<body> に `invalid` 属性を設定し、スタイル規則はグラデーションの `end-stop` の色を赤に変更します (別のスタイル規則によりエラーメッセージが表示されます)。

この方法は、以下のいくつかの点で有利です。

- 既存のサイトに含まれる通常の HTML フォームに対して、魅力のある対話式の背景を設定できます。
- SVG に対応していないブラウザーに対しても後方互換性があります。単純に背景が表示されないだけです。
- 単純ながら、非常に効率的です。
- 画像のサイズは動的に気の効いた方法で必要なサイズに変更されます。
- HTML と SVG の双方に適用するスタイルを宣言できます。
- 同一のスクリプトで HTML と SVG の双方を操作できます。
- 文書は、完全に標準準拠です。

> **メモ:** DOM メソッドでリンクした画像を組み込まれた SVG 要素に追加するには、`href` の設定に `setAttributeNS` を使用してください。次の例のようにします:
>
> ```js
> var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
> img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "move.png");
> ```

## 詳細

`viewBox` 属性は、SVG 画像の座標と相対的な論理座標系を構築します。この場合、画像は 100 対 100 で貼り付けられます。

`preserveAspectRatio` 属性は、画像のアスペクト比を保ったまま、中心にそのままのサイズの画像を配置し、縦横ではみ出した部分を除きます。

`style` 属性はフォームの背景になる SVG 要素を指します。

## 関連リンク

- 他の SVG in HTML の例: [A swarm of motes](/ja/docs/SVG/Namespaces_Crash_Course/Example)
- [Working example](http://jwatt.org/svg/demos/xhtml-with-inline-svg.xhtml) は、Mozilla と Adobe の SVG Viewer がインストールされた Internet Explorer の両方で動作します。(インライン SVG を Firefox と Internet Explorer の両方で動作させるには、ブラウザごとに異なる Content-Type のドキュメントを提供する必要があります。このため、ページをキャッシュするプロクシサーバに接続している場合は、サンプルを二回目に読み込んだブラウザでは間違った Content-Type を受け取るため、動作しないことがあります。)
