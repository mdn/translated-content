---
title: 'リンク種別: preload'
slug: Web/HTML/Link_types/preload
---

{{HTMLSidebar}}

`preload` の値を {{htmlelement("link")}} 要素の {{htmlattrxref("rel", "link")}} 属性に設定すると、 HTML の {{htmlelement("head")}} の中で読み込みリクエストを宣言し、ページのライフサイクルの早期の、ブラウザーの主なレンダリング機構が起動する前に読み込みを始めたい、すぐに必要なリソースを指定することができます。これにより、そのリソースがより早く利用でき、ページのレンダリングがブロックされにくくなり、性能が向上します。

## 基本概念

多くの場合は以下のように、 `<link>` を使用して CSS ファイルを読み込み、ページにスタイルを適用します。

```html
<link rel="stylesheet" href="styles/main.css">
```

しかしここで、 `rel` の値に `preload` を使用すると、 `<link>` 要素は利用したいあらゆるリソースの先読み指示になります。以下のものも指定する必要があります。

- リソースのパスを {{htmlattrxref("href", "link")}} 属性へ
- リソースの種類を {{htmlattrxref("as", "link")}} 属性へ

簡単な例を示すと、次のようになります ([JS と CSS の例のソース](https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css)および[ライブ](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/))。

```html
<head>
  <meta charset="utf-8">
  <title>JS and CSS preload example</title>

  <link rel="preload" href="style.css" as="style">
  <link rel="preload" href="main.js" as="script">

  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>bouncing balls</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

ここで CSS ファイルと JavaScript ファイルを先読みするので、その後のページのレンダリングで必要な時には、すぐに利用できるようになります。ブラウザーはおそらく、 `<link rel="stylesheet">` と `<script>` 要素を HTML 内の同じチャンクで見つけるので、この例は極端ですが、後に現れるリソースであるほど、また大きいリソースであるほど効果が見られる可能性があります。例えば以下の場合です。

- フォントや画像など、 CSS の中から指しているリソース
- JSON やインポートされたスクリプト、ウェブワーカーなどの JavaScript がリクエストする可能性があるリソース
- より大きな画像や動画ファイル。

`preload` には他の利点もあります。 `as` によって先読みされるコンテンツの種類をブラウザーに指示することで、以下のようなことが実現できます。

- リソースの読み込みの優先付けがより正確にできます。
- 可能であれば、将来のリクエストのためにキャッシュに格納してリソースを再利用します。
- リソースに対して正しく[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)を適用できます。
- 正しい {{HTTPHeader("Accept")}} リクエストヘッダーを設定できます。

### 先読みできるコンテンツの種類

さまざまな種類のコンテンツが先読みできます。 `as` 属性で使用できる値は以下の通りです。

- `audio`: 通常は {{htmlelement("audio")}} で使用される音声ファイル。
- `document`: {{htmlelement("frame")}} や {{htmlelement("iframe")}} に埋め込まれる HTML 文書。
- `embed`: {{htmlelement("embed")}} 要素の中に埋め込まれるリソース。
- `fetch`: ArrayBuffer や JSON ファイルのような、フェッチまたは XHR 要求でアクセスされるリソース。
- `font`: フォントファイル。
- `image`: 画像ファイル。
- `object`: {{htmlelement("object")}} 要素の中に埋め込まれるリソース。
- `script`: JavaScript ファイル。
- `style`: CSS スタイルシート。
- `track`: WebVTT ファイル。
- `worker`: JavaScript ウェブワーカーまたは共有ワーカー。
- `video`: 通常は {{htmlelement("video")}} で使用される動画ファイル。

> **メモ:** `video` preloading is included in the Preload spec, but is not currently implemented by browsers.

> **メモ:** 使用されると予想されるこれらの値やウェブ機能について、もっと詳細は Preload の仕様書にあります。 — [link element extensions](https://w3c.github.io/preload/#link-element-extensions) を参照してください。また、フェッチの仕様書で管理されている `as` 属性の値の完全な一覧は、 [request destinations](https://fetch.spec.whatwg.org/#concept-request-destination) を参照してください。

## MIME タイプを含める

`<link>` 要素は {{htmlattrxref("type", "link")}} 要素を受け付け、要素が指す先のリソースの MIME タイプを指定することができます。これは特にリソースの先読み時に便利です。 — ブラウザーは `type` 属性の値を使用して対応しているリソースであるかどうかを確認し、その場合だけダウンロードを開始し、そうでない場合は開始しないようにすることができます。

この例を動画のデモで見ることができます ([ソースコード全体](https://github.com/mdn/html-examples/tree/master/link-rel-preload/video)と[デモ版](https://mdn.github.io/html-examples/link-rel-preload/video/)もご覧ください。)。

```html
<head>
  <meta charset="utf-8">
  <title>Video preload example</title>

  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4">
  <link rel="preload" href="sintel-short.webm" as="video" type="video/webm">
</head>
<body>
  <video controls>
    <source src="sintel-short.mp4" type="video/mp4">
    <source src="sintel-short.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. Here is a <a href="sintel-short.mp4">link to the video</a> instead.</p>
  </video>
</body>
```

この場合、MP4 に対応しているブラウザーは MP4 を先読みして使用し、ユーザーにとって動画プレイヤーをよりスムーズまたはレスポンシブにできるでしょう。ブラウザーが MP4 に対応していない場合は WebM バージョンを読み込みますが、先読みの利点は得られません。これは、どのように先読みコンテンツがプログレッシブエンハンスメントの哲学と結ばれているかを示しています。

## CORS を使用したフェッチ

[CORS](/ja/docs/Web/HTTP/CORS) を有効にして取得したリソースを先読みする場合 ([`fetch()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch)、[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest)、[フォント](/ja/docs/Web/CSS/@font-face)など)、 [`<link>`](/ja/docs/Web/HTML/Element/link) 要素の {{htmlattrxref("crossorigin","link")}} 属性の設定に特別な注意を払う必要があります。この属性は、取得がクロスオリジンでない場合でも、リソースの CORS や認証モードに合わせて設定する必要があります。

上記のように、これが当てはまる興味深いケースの 1 つは、フォントファイルです。さまざまな理由により、これらは匿名モードの CORS を使用してフェッチする必要があります ([Font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)参照)。

このケースを例として使用してみましょう。完全なサンプルソースコードは [GitHub のソースコード例](https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts) ([およびライブ盤](https://mdn.github.io/html-examples/link-rel-preload/fonts/)) にあります。

```html
<head>
  <meta charset="utf-8">
  <title>Web font example</title>

  <link rel="preload" href="fonts/cicle_fina-webfont.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/zantroke-webfont.woff2" as="font" type="font/woff2" crossorigin>

  <link href="style.css" rel="stylesheet">
</head>
<body>
  …
</body>
```

`type`属性に MIME タイプのヒントを提供するだけでなく、先読みの CORS モードが最終的なフォントリソースリクエストと一致することを確認するために、 `crossorigin` 属性も提供しています。

## media を含める

`<link>` 要素の優れた機能のひとつが、 {{htmlattrxref("media", "link")}} 属性を受け入れることができることです。この属性は、[メディア種別](/docs/Web/CSS/@media#メディア種別)や本格的な[メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)を受け付けることができるので、レスポンシブな先読みを行うことができます。

例を見てみましょう (GitHub 上の[ソースコード](https://github.com/mdn/html-examples/tree/master/link-rel-preload/media)、[デモ](https://mdn.github.io/html-examples/link-rel-preload/media/))。

```html
<head>
  <meta charset="utf-8">
  <title>Responsive preload example</title>

  <link rel="preload" href="bg-image-narrow.png" as="image" media="(max-width: 600px)">
  <link rel="preload" href="bg-image-wide.png" as="image" media="(min-width: 601px)">

  <link rel="stylesheet" href="main.css">
</head>
<body>
  <header>
    <h1>My site</h1>
  </header>

  <script>
    var mediaQueryList = window.matchMedia("(max-width: 600px)");
    var header = document.querySelector('header');

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url(bg-image-narrow.png)';
    } else {
      header.style.backgroundImage = 'url(bg-image-wide.png)';
    }
  </script>
</body>
```

`media` 属性を `<link>` 要素に設定することで、ビューポートが狭い場合は幅の狭い画像を、ビューポートが広い場合は幅の広い画像を先読みするようにします。このために {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}} を使用しています (詳しくは[メディアクエリーのテスト](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)を参照)。

これにより、ページのレンダリング時にそのフォントが利用できる可能性が高くなり、 FOUT (スタイル付け前のテキストの点滅) を減らすことができます。

これは、画像に限らず、同じ種類のファイルであっても、大きな意味を持ちます。帯域幅や CPU が限られている狭い画面では、シンプルな SVG の図を先読みして表示したり、ユーザーのリソースに余裕がある場合は、複雑な JavaScript を先読みし、それを使ってインタラクティブな 3D モデルをレンダリングしたりすることができるでしょう。

## スクリプトと先読み

これらの先読みに関するもう一つの良い点として、スクリプトを使って実行できることが挙げられます。例えば、ここでは {{domxref("HTMLLinkElement")}} インスタンスを作成し、それを DOM に適用させています。

```js
var preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

これは、ブラウザーは `myscript.js` ファイルを先読みしますが、実際はまだ使用されていません。これを使用するには、以下のようにします。

```js
var preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

これは、スクリプトを先読みしたいが、必要なときまで実行を延期する場合に便利です。

## その他のリソース先読み機構

先読み機能は他にもありますが、 `<link rel="preload">` ほど目的に合ったものはありません。

- `<link rel="prefetch">` は長い間ブラウザーで対応されてきましたが、これは**_次の_**操作やページ読み込み (次のページに移動するときなど) で使用されるリソースを先読みするためのものです。これはこれで良いのですが、現在のページには役に立ちません。さらに、ブラウザーは `prefetch` のリソースを `preload` リソースよりも低い優先度で表示します。現在のページは次のページよりも重要なのです。詳しくは[リンク先読みの FAQ](/ja/docs/Web/HTTP/Link_prefetching_FAQ) を参照してください。
- `<link rel="prerender">` は、指定されたウェブページをバックグラウンドでレンダリングし、ユーザーがそのページに移動した場合のロードを高速化します。ユーザーの帯域幅を浪費する可能性があるため、 Chrome は prerender を代わりに [NoState 先読み](https://developers.google.com/web/updates/2018/07/nostate-prefetch)として扱います。
- `<link rel="subresource">` {{non-standard_inline}} は、しばらく前に Chrome が対応しており、 `preload` と同じ問題に取り組むことを目的としていましたが、問題がありました。項目の優先順位を計算する方法がなかったため (当時は `as` が存在しなかったため)、すべての項目がかなり低い優先順位で取得されてしまいました。
- スクリプトベースのリソースローダーは数多く存在しますが、ブラウザーの取得優先度キューを制御することはできず、同様のパフォーマンスの問題があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) by Yoav Weiss
