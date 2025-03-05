---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{HTMLSidebar}}

`preload` は {{htmlelement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性の値で、その HTML の {{htmlelement("head")}} の中で読み取りリクエストを宣言し、ページのライフサイクルの早期の、ブラウザーの主なレンダリング機構が起動する前に読み取りを始めたい、すぐに必要なリソースを指定することができます。これにより、そのリソースがより早く利用でき、ページのレンダリングがブロックされにくくなり、性能が向上します。名前には _load_ という言葉が含まれていますが、これはスクリプトを読み込んで実行するのではなく、ダウンロードとキャッシュをより高い優先度で行うようにスケジュールするだけです。

## 基本概念

多くの場合は以下のように、 `<link>` を使用して CSS ファイルを読み取り、ページにスタイルを適用します。

```html
<link rel="stylesheet" href="styles/main.css" />
```

しかしここで、 `rel` の値に `preload` を使用すると、 `<link>` 要素は利用したいあらゆるリソースの事前読み込み指示になります。以下のものも指定する必要があります。

- リソースのパスを [`href`](/ja/docs/Web/HTML/Element/link#href) 属性へ
- リソースの種類を [`as`](/ja/docs/Web/HTML/Element/link#as) 属性へ

簡単な例を示すと、次のようになります ([JS と CSS の例のソース](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css)および[ライブ](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/))。

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

ここで CSS ファイルと JavaScript ファイルを事前読み込みするので、その後のページのレンダリングで必要な時には、すぐに利用できるようになります。ブラウザーはおそらく、 `<link rel="stylesheet">` と `<script>` 要素を HTML 内の同じチャンクで見つけるので、この例は極端ですが、後に現れるリソースであるほど、また大きいリソースであるほど効果が見られる可能性があります。例えば以下の場合です。

- フォントや画像など、 CSS の中から指しているリソース
- JavaScript がリクエストする可能性があるリソース（インポートされるスクリプトなど）。

`preload` には他の利点もあります。 `as` によって事前読み込みされるコンテンツの種類をブラウザーに指示することで、以下のようなことが実現できます。

- 可能であれば、将来のリクエストのためにキャッシュに格納してリソースを再利用できる。
- リソースに対して正しく[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)を適用できる。
- 正しい {{HTTPHeader("Accept")}} リクエストヘッダーを設定できる。

### 事前読み込みできるコンテンツの種類

さまざまな種類のコンテンツが事前読み込みできます。 `as` 属性で使用できる値は以下の通りです。

- `fetch`: ArrayBuffer や WebAssembly バイナリーや JSON ファイルのような、フェッチまたは XHR 要求でアクセスされるリソース。
- `font`: フォントファイル。
- `image`: 画像ファイル。
- `script`: JavaScript ファイル。
- `style`: CSS スタイルシート。
- `track`: WebVTT ファイル。

> **メモ:** `font` および `fetch` の事前読み込みには、 `crossorigin` 属性を設定する必要があります。下記の [CORS を使用したフェッチ](#cors_を使用したフェッチ)を参照してください。

> [!NOTE]
> 使用されると予想されるこれらの値やウェブ機能について、もっと詳細のことは、 HTML の仕様書、 [Link type "preload"](https://html.spec.whatwg.org/#match-preload-type) を参照してください。また、フェッチの仕様書で管理されている `as` 属性の値の完全な一覧は、 [request destinations](https://fetch.spec.whatwg.org/#concept-request-destination) を参照してください。

## MIME タイプを含める

`<link>` 要素は [`type`](/ja/docs/Web/HTML/Element/link#type) 要素を受け付け、要素が指す先のリソースの MIME タイプを指定することができます。これは特にリソースの事前読み込み時に便利です。 — ブラウザーは `type` 属性の値を使用して対応しているリソースであるかどうかを確認し、その場合だけダウンロードを開始し、そうでない場合は開始しないようにすることができます。

```html
<head>
  <meta charset="utf-8" />
  <title>Image preload example</title>

  <link rel="preload" href="flower.avif" as="image" type="image/avif" />
</head>
<body>
  <picture>
    <source src="flower.avif" type="image/avif" />
    <source src="flower.webp" type="image/webp" />
    <img src="flower.jpg" />
  </picture>
</body>
```

上記の例のコードでは、`image/avif` の画像は対応ブラウザーでのみ事前読み込みされます。そして、`image/avif` に対応しているブラウザーでは、 `image/avif` の画像が実際に使用されます（これは、最初の {{htmlelement("source")}} が指定されたため）。これにより、ブラウザーの `image/avif` に対応しているユーザーにとって、画像のダウンロードがより小さくなることを期待しています。

なお、ブラウザーが `image/avif` と `image/webp` の両方に対応しているユーザーのために、そのコードで `<link rel="preload" href="flower.webp" as="image" type="image/webp">` 要素も指定すると、実際にはどちらかのみが使用されても `image/avif` と `image/webp` 画像がどちらも事前読み込みされることになります。

したがって、同じリソースに対して複数の種類の事前読み込みを指定することは推奨されません。その代わりに、ユーザーの大半が実際に使用する可能性のある種類にのみ、事前読み込みを指定することが最善の手法です。上の例のコードで、`image/webp` の画像に事前読み込みさせることを指定していないのはそのためです。

しかし、事前読み込みされないからといって、実際に `image/webp` 画像が必要な人に使用されないわけではありません。ブラウザーが `image/avif` に対応していないが、`image/webp` に対応しているユーザーのために、上記の例のコードは `image/webp` 画像を使用させますが、他の大多数のユーザーに不必要に事前読み込みさせることはありません。

## CORS を使用した取得

[CORS](/ja/docs/Web/HTTP/CORS) を有効にして取得したリソースを事前読み込みする場合 ([`fetch()`](/ja/docs/Web/API/Window/fetch)、[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest)、[フォント](/ja/docs/Web/CSS/@font-face)など)、 [`<link>`](/ja/docs/Web/HTML/Element/link) 要素の [`crossorigin`](/ja/docs/Web/HTML/Element/link#crossorigin) 属性の設定に特別な注意を払う必要があります。この属性は、取得がオリジンを越えない場合でも、リソースの CORS や認証モードに合わせて設定する必要があります。

上記のように、これが当てはまる興味深いケースの 1 つが、フォントファイルです。さまざまな理由により、これらは匿名モードの CORS を使用してフェッチする必要があります（[Font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)参照）。

このケースを例として使用してみましょう。完全なサンプルソースコードは [GitHub のソースサンプルコード](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([およびライブ版](https://mdn.github.io/html-examples/link-rel-preload/fonts/)) にあります。

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

`type` 属性に MIME タイプのヒントを提供するだけでなく、事前読み込みの CORS モードが最終的なフォントリソースリクエストと一致することを確認するために、 `crossorigin` 属性も提供しています。

## media を含める

`<link>` 要素の優れた機能のひとつが、 [`media`](/ja/docs/Web/HTML/Element/link#media) 属性を受け入れることができることです。この属性は、[メディア種別](/ja/docs/Web/CSS/@media#メディア種別)や本格的な[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)を受け付けることができるので、レスポンシブな事前読み込みを行うことができます。

例を見てみましょう (GitHub 上の[ソースコード](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media)、[デモ](https://mdn.github.io/html-examples/link-rel-preload/media/))。

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

`media` 属性を `<link>` 要素に設定することで、ビューポートが狭い場合は幅の狭い画像を、ビューポートが広い場合は幅の広い画像を事前読み込みするようにします。このために {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}} を使用しています（詳しくは[メディアクエリーのテスト](/ja/docs/Web/CSS/CSS_media_queries/Testing_media_queries)を参照）。

これにより、ページのレンダリング時にそのフォントが利用できる可能性が高くなり、 FOUT （スタイル付け前のテキストの点滅）を減らすことができます。

これは、画像に限らず、同じ種類のファイルであっても、大きな意味を持ちます。帯域幅や CPU が限られている狭い画面では、シンプルな SVG の図を事前読み込みして表示したり、ユーザーのリソースに余裕がある場合は、複雑な JavaScript を事前読み込みし、それを使ってインタラクティブな 3D モデルをレンダリングしたりすることができるでしょう。

## スクリプトと事前読み込み

> **メモ:** [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)を扱う場合は、代わりに [`<link rel="modulepreload">`](/ja/docs/Web/HTML/Attributes/rel/modulepreload)を使用してください。

これらの事前読み込みに関するもう一つの良い点として、スクリプトを使って実行できることが挙げられます。
例えば、ここでは {{domxref("HTMLLinkElement")}} インスタンスを作成し、それを DOM に取り付けています。

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

これは、ブラウザーは `myscript.js` ファイルを事前読み込みしますが、実際はまだ使用されていません。これを使用するには、次のようにします。

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

これは、スクリプトを事前読み込みしたいが、必要なときまで実行を延期する場合に便利です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Speculative_loading)で、 `<link rel="preload">` をはじめとする同様のパフォーマンス向上機能の比較ができます。
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) by Yoav Weiss
