---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar}}

`preload` は {{htmlelement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性の値で、その HTML の {{htmlelement("head")}} の中で読み取りリクエストを宣言し、ページのライフサイクルの早期の、ブラウザーの主なレンダリング機構が起動する前に読み取りを始めたい、すぐに必要なリソースを指定することができます。これにより、そのリソースがより早く利用でき、ページのレンダリングがブロックされにくくなり、性能が向上します。名前には _load_ という言葉が含まれていますが、これはスクリプトを読み込んで実行するのではなく、ダウンロードとキャッシュをより高い優先度で行うようにスケジュールするだけです。

## 基本概念

多くの場合は以下のように、 `<link>` を使用して CSS ファイルを読み取り、ページにスタイルを適用します。

```html
<link rel="stylesheet" href="styles/main.css" />
```

しかしここで、 `rel` の値に `preload` を使用すると、 `<link>` 要素は利用したいあらゆるリソースの先読み指示になります。以下のものも指定する必要があります。

- リソースのパスを [`href`](/ja/docs/Web/HTML/Element/link#href) 属性へ
- リソースの種類を [`as`](/ja/docs/Web/HTML/Element/link#as) 属性へ

簡単な例を示すと、次のようになります ([JS と CSS の例のソース](https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css)および[ライブ](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/))。

```html
<head>
  <meta charset="utf-8" />
  <title>JS and CSS preload example</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
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

- リソースの読み取りの優先付けがより正確にできる。
- 可能であれば、将来のリクエストのためにキャッシュに格納してリソースを再利用できる。
- リソースに対して正しく[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)を適用できる。
- 正しい {{HTTPHeader("Accept")}} リクエストヘッダーを設定できる。

### 先読みできるコンテンツの種類

さまざまな種類のコンテンツが先読みできます。 `as` 属性で使用できる値は以下の通りです。

- `audio`: 通常は {{htmlelement("audio")}} で使用される音声ファイル。
- `document`: {{htmlelement("frame")}} や {{htmlelement("iframe")}} に埋め込まれる HTML 文書。
- `embed`: {{htmlelement("embed")}} 要素の中に埋め込まれるリソース。
- `fetch`: ArrayBuffer や WebAssembly/WASM バイナリーや JSON ファイルのような、フェッチまたは XHR 要求でアクセスされるリソース。
- `font`: フォントファイル。
- `image`: 画像ファイル。
- `object`: {{htmlelement("object")}} 要素の中に埋め込まれるリソース。
- `script`: JavaScript ファイル。
- `style`: CSS スタイルシート。
- `track`: WebVTT ファイル。
- `worker`: JavaScript ウェブワーカーまたは共有ワーカー。
- `video`: 通常は {{htmlelement("video")}} で使用される動画ファイル。

> **メモ:** `font` および `fetch` の先読みには、 `crossorigin` 属性を設定する必要があります。下記の [CORS を使用したフェッチ](#cors_を使用したフェッチ)を参照してください。

> **メモ:** 使用されると予想されるこれらの値やウェブ機能について、もっと詳細は Preload の仕様書にあります。 — [link element extensions](https://w3c.github.io/preload/#link-element-extensions) を参照してください。また、フェッチの仕様書で管理されている `as` 属性の値の完全な一覧は、 [request destinations](https://fetch.spec.whatwg.org/#concept-request-destination) を参照してください。

## MIME タイプを含める

`<link>` 要素は [`type`](/ja/docs/Web/HTML/Element/link#type) 要素を受け付け、要素が指す先のリソースの MIME タイプを指定することができます。これは特にリソースの先読み時に便利です。 — ブラウザーは `type` 属性の値を使用して対応しているリソースであるかどうかを確認し、その場合だけダウンロードを開始し、そうでない場合は開始しないようにすることができます。

この例を動画のデモで見ることができます（[ソースコード全体](https://github.com/mdn/html-examples/tree/master/link-rel-preload/video)と[デモ版](https://mdn.github.io/html-examples/link-rel-preload/video/)もご覧ください。）。コードスニペットは下記の通りです。

```html
<head>
  <meta charset="utf-8" />
  <title>Video preload example</title>

  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
</head>
<body>
  <video controls>
    <source src="sintel-short.mp4" type="video/mp4" />
    <source src="sintel-short.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="sintel-short.mp4">link to the video</a> instead.
    </p>
  </video>
</body>
```

上記の例のコードでは、`video/mp4` の動画は対応ブラウザーでのみ先読みされま す。そして、`video/mp4` をサポートしているブラウザーでは、`video/mp4` の動画が実際に使用されます（これは、最初の {{htmlelement("source")}} が指定されたため）。これにより、ブラウザーの `video/mp4` に対応しているユーザーにとって、動画プレーヤーがよりスムーズでレスポンスのよいものになることを期待しています。

なお、ブラウザーが `video/mp4` と `video/webm` の両方に対応しているユーザーのために、そのコードで `<link rel="preload" href="sintel-short.webm" as="video" type="video/webm">` 要素も指定すると、実際にはどちらかのみが使用されても `video/mp4` と `video/webm` 動画がどちらも先読みされることになります。

したがって、同じリソースに対して複数の種類の先読みを指定することは推奨されません。その代わりに、ユーザーの大半が実際に使用する可能性のある種類にのみ、先読みを指定することが最善の手法です。上の例のコードで、`video/webm` の動画に先読みさせることを指定していないのはそのためです。

しかし、先読みさせないからといって、`video/webm` の動画が必要な人に実際に使用されないわけではありません。`video/mp4` に対応していないけれども `video/webm` には対応しているユーザーのために、上記の例のコードは `video/webm` 動画を使用するようにしても、他の多くのユーザーに不必要な先読みをしてもらうようなことはしないようにしているのです。

## CORS を使用したフェッチ

[CORS](/ja/docs/Web/HTTP/CORS) を有効にして取得したリソースを先読みする場合 ([`fetch()`](/ja/docs/Web/API/fetch)、[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest)、[フォント](/ja/docs/Web/CSS/@font-face)など)、 [`<link>`](/ja/docs/Web/HTML/Element/link) 要素の [`crossorigin`](/ja/docs/Web/HTML/Element/link#crossorigin) 属性の設定に特別な注意を払う必要があります。この属性は、取得がオリジンを越えない場合でも、リソースの CORS や認証モードに合わせて設定する必要があります。

上記のように、これが当てはまる興味深いケースの 1 つが、フォントファイルです。さまざまな理由により、これらは匿名モードの CORS を使用してフェッチする必要があります（[Font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)参照）。

このケースを例として使用してみましょう。完全なサンプルソースコードは [GitHub のソースコード例](https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts) ([およびライブ版](https://mdn.github.io/html-examples/link-rel-preload/fonts/)) にあります。

```html
<head>
  <meta charset="utf-8" />
  <title>Web font example</title>

  <link
    rel="preload"
    href="fonts/cicle_fina-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />
  <link
    rel="preload"
    href="fonts/zantroke-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link href="style.css" rel="stylesheet" />
</head>
<body>
  …
</body>
```

`type` 属性に MIME タイプのヒントを提供するだけでなく、先読みの CORS モードが最終的なフォントリソースリクエストと一致することを確認するために、 `crossorigin` 属性も提供しています。

## media を含める

`<link>` 要素の優れた機能のひとつが、 [`media`](/ja/docs/Web/HTML/Element/link#media) 属性を受け入れることができることです。この属性は、[メディア種別](/ja/docs/Web/CSS/@media#メディア種別)や本格的な[メディアクエリー](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)を受け付けることができるので、レスポンシブな先読みを行うことができます。

例を見てみましょう (GitHub 上の[ソースコード](https://github.com/mdn/html-examples/tree/master/link-rel-preload/media)、[デモ](https://mdn.github.io/html-examples/link-rel-preload/media/))。

```html
<head>
  <meta charset="utf-8" />
  <title>Responsive preload example</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(max-width: 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>My site</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(max-width: 600px)");
    const header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = "url(bg-image-narrow.png)";
    } else {
      header.style.backgroundImage = "url(bg-image-wide.png)";
    }
  </script>
</body>
```

`media` 属性を `<link>` 要素に設定することで、ビューポートが狭い場合は幅の狭い画像を、ビューポートが広い場合は幅の広い画像を先読みするようにします。このために {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}} を使用しています（詳しくは[メディアクエリーのテスト](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)を参照）。

これにより、ページのレンダリング時にそのフォントが利用できる可能性が高くなり、 FOUT （スタイル付け前のテキストの点滅）を減らすことができます。

これは、画像に限らず、同じ種類のファイルであっても、大きな意味を持ちます。帯域幅や CPU が限られている狭い画面では、シンプルな SVG の図を先読みして表示したり、ユーザーのリソースに余裕がある場合は、複雑な JavaScript を先読みし、それを使ってインタラクティブな 3D モデルをレンダリングしたりすることができるでしょう。

## スクリプトと先読み

これらの先読みに関するもう一つの良い点として、スクリプトを使って実行できることが挙げられます。例えば、ここでは {{domxref("HTMLLinkElement")}} インスタンスを作成し、それを DOM に取り付けています。

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

これは、ブラウザーは `myscript.js` ファイルを先読みしますが、実際はまだ使用されていません。これを使用するには、次のようにします。

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

これは、スクリプトを先読みしたいが、必要なときまで実行を延期する場合に便利です。

## その他のリソース先読み機構

先読み機能は他にもありますが、 `<link rel="preload">` ほど目的に合ったものはありません。

- `<link rel="prefetch">` は長い間ブラウザーが対応してきましたが、これは **_次の_** 操作やページ読み取り（次のページに移動するときなど）で使用されるリソースを先読みするためのものでした。これはこれで良いのですが、現在のページには役に立ちません。さらに、ブラウザーは `prefetch` のリソースを `preload` リソースよりも低い優先度で表示します。現在のページは次のページよりも重要なのです。詳しくは[リンク先読みの FAQ](/ja/docs/Web/HTTP/Link_prefetching_FAQ) を参照してください。
- `<link rel="prerender">` は、指定されたウェブページをバックグラウンドでレンダリングし、ユーザーがそのページに移動した場合の読み込みを高速化します。ユーザーの帯域幅を浪費する可能性があるため、 Chrome は `prerender` を代わりに [NoState 先読み](https://developer.chrome.com/blog/nostate-prefetch/)として扱います。
- `<link rel="subresource">` {{non-standard_inline}} は、しばらく前に Chrome が、 `preload` と同じ問題に取り組むために対応していましたが、問題がありました。項目の優先順位を計算する方法がなかったため（当時は `as` が存在しなかったため）、すべての項目がかなり低い優先順位で取得されてしまっていました。
- スクリプトベースのリソースローダーは数多く存在しますが、ブラウザーの取得優先度キューを制御することはできず、同様のパフォーマンスの問題があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) by Yoav Weiss
