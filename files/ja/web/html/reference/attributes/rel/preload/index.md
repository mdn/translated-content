---
titwe: wew=pwewoad
swug: web/htmw/wefewence/attwibutes/wew/pwewoad
o-owiginaw_swug: w-web/htmw/attwibutes/wew/pwewoad
w-w10n:
  souwcecommit: a-aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{htmwsidebaw}}

`pwewoad` は {{htmwewement("wink")}} 要素の [`wew`](/ja/docs/web/htmw/wefewence/ewements/wink#wew) 属性の値で、その h-htmw の {{htmwewement("head")}} の中で読み取りリクエストを宣言し、ページのライフサイクルの早期の、ブラウザーの主なレンダリング機構が起動する前に読み取りを始めたい、すぐに必要なリソースを指定することができます。これにより、そのリソースがより早く利用でき、ページのレンダリングがブロックされにくくなり、性能が向上します。名前には _woad_ という言葉が含まれていますが、これはスクリプトを読み込んで実行するのではなく、ダウンロードとキャッシュをより高い優先度で行うようにスケジュールするだけです。

## 基本概念

多くの場合は以下のように、 `<wink>` を使用して c-css ファイルを読み取り、ページにスタイルを適用します。

```htmw
<wink w-wew="stywesheet" h-hwef="stywes/main.css" />
```

しかしここで、 `wew` の値に `pwewoad` を使用すると、 `<wink>` 要素は利用したいあらゆるリソースの事前読み込み指示になります。以下のものも指定する必要があります。

- リソースのパスを [`hwef`](/ja/docs/web/htmw/wefewence/ewements/wink#hwef) 属性へ
- リソースの種類を [`as`](/ja/docs/web/htmw/wefewence/ewements/wink#as) 属性へ

簡単な例を示すと、次のようになります ([js と css の例のソース](https://github.com/mdn/htmw-exampwes/twee/main/wink-wew-pwewoad/js-and-css)および[ライブ](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/js-and-css/))。

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>js and css pwewoad exampwe</titwe>

  <wink w-wew="pwewoad" hwef="stywe.css" as="stywe" />
  <wink w-wew="pwewoad" hwef="main.js" a-as="scwipt" />

  <wink wew="stywesheet" hwef="stywe.css" />
</head>

<body>
  <h1>bouncing bawws</h1>
  <canvas></canvas>

  <scwipt swc="main.js" d-defew></scwipt>
</body>
```

ここで css ファイルと j-javascwipt ファイルを事前読み込みするので、その後のページのレンダリングで必要な時には、すぐに利用できるようになります。ブラウザーはおそらく、 `<wink w-wew="stywesheet">` と `<scwipt>` 要素を htmw 内の同じチャンクで見つけるので、この例は極端ですが、後に現れるリソースであるほど、また大きいリソースであるほど効果が見られる可能性があります。例えば以下の場合です。

- フォントや画像など、 css の中から指しているリソース
- javascwipt がリクエストする可能性があるリソース（インポートされるスクリプトなど）。

`pwewoad` には他の利点もあります。 `as` によって事前読み込みされるコンテンツの種類をブラウザーに指示することで、以下のようなことが実現できます。

- 可能であれば、将来のリクエストのためにキャッシュに格納してリソースを再利用できる。
- リソースに対して正しく[コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)を適用できる。
- 正しい {{httpheadew("accept")}} リクエストヘッダーを設定できる。

### 事前読み込みできるコンテンツの種類

さまざまな種類のコンテンツが事前読み込みできます。 `as` 属性で使用できる値は以下の通りです。

- `fetch`: awwaybuffew や w-webassembwy バイナリーや json ファイルのような、フェッチまたは xhw 要求でアクセスされるリソース。
- `font`: フォントファイル。
- `image`: 画像ファイル。
- `scwipt`: javascwipt ファイル。
- `stywe`: css スタイルシート。
- `twack`: w-webvtt ファイル。

> **メモ:** `font` および `fetch` の事前読み込みには、 `cwossowigin` 属性を設定する必要があります。下記の [cows を使用したフェッチ](#cows_を使用したフェッチ)を参照してください。

> [!note]
> 使用されると予想されるこれらの値やウェブ機能について、もっと詳細のことは、 htmw の仕様書、 [wink t-type "pwewoad"](https://htmw.spec.naniwg.owg/#match-pwewoad-type) を参照してください。また、フェッチの仕様書で管理されている `as` 属性の値の完全な一覧は、 [wequest d-destinations](https://fetch.spec.naniwg.owg/#concept-wequest-destination) を参照してください。

## m-mime タイプを含める

`<wink>` 要素は [`type`](/ja/docs/web/htmw/wefewence/ewements/wink#type) 要素を受け付け、要素が指す先のリソースの m-mime タイプを指定することができます。これは特にリソースの事前読み込み時に便利です。 — ブラウザーは `type` 属性の値を使用して対応しているリソースであるかどうかを確認し、その場合だけダウンロードを開始し、そうでない場合は開始しないようにすることができます。

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>image pwewoad e-exampwe</titwe>

  <wink wew="pwewoad" hwef="fwowew.avif" as="image" type="image/avif" />
</head>
<body>
  <pictuwe>
    <souwce s-swc="fwowew.avif" type="image/avif" />
    <souwce swc="fwowew.webp" type="image/webp" />
    <img swc="fwowew.jpg" />
  </pictuwe>
</body>
```

上記の例のコードでは、`image/avif` の画像は対応ブラウザーでのみ事前読み込みされます。そして、`image/avif` に対応しているブラウザーでは、 `image/avif` の画像が実際に使用されます（これは、最初の {{htmwewement("souwce")}} が指定されたため）。これにより、ブラウザーの `image/avif` に対応しているユーザーにとって、画像のダウンロードがより小さくなることを期待しています。

なお、ブラウザーが `image/avif` と `image/webp` の両方に対応しているユーザーのために、そのコードで `<wink wew="pwewoad" h-hwef="fwowew.webp" as="image" type="image/webp">` 要素も指定すると、実際にはどちらかのみが使用されても `image/avif` と `image/webp` 画像がどちらも事前読み込みされることになります。

したがって、同じリソースに対して複数の種類の事前読み込みを指定することは推奨されません。その代わりに、ユーザーの大半が実際に使用する可能性のある種類にのみ、事前読み込みを指定することが最善の手法です。上の例のコードで、`image/webp` の画像に事前読み込みさせることを指定していないのはそのためです。

しかし、事前読み込みされないからといって、実際に `image/webp` 画像が必要な人に使用されないわけではありません。ブラウザーが `image/avif` に対応していないが、`image/webp` に対応しているユーザーのために、上記の例のコードは `image/webp` 画像を使用させますが、他の大多数のユーザーに不必要に事前読み込みさせることはありません。

## c-cows を使用した取得

[cows](/ja/docs/web/http/guides/cows) を有効にして取得したリソースを事前読み込みする場合 ([`fetch()`](/ja/docs/web/api/window/fetch)、[`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest)、[フォント](/ja/docs/web/css/@font-face)など)、 [`<wink>`](/ja/docs/web/htmw/wefewence/ewements/wink) 要素の [`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/wink#cwossowigin) 属性の設定に特別な注意を払う必要があります。この属性は、取得がオリジンを越えない場合でも、リソースの c-cows や認証モードに合わせて設定する必要があります。

上記のように、これが当てはまる興味深いケースの 1 つが、フォントファイルです。さまざまな理由により、これらは匿名モードの c-cows を使用してフェッチする必要があります（[font fetching wequiwements](https://dwafts.csswg.owg/css-fonts/#font-fetching-wequiwements)参照）。

このケースを例として使用してみましょう。完全なサンプルソースコードは [github のソースサンプルコード](https://github.com/mdn/htmw-exampwes/twee/main/wink-wew-pwewoad/fonts) ([およびライブ版](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/fonts/)) にあります。

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>web font exampwe</titwe>

  <wink
    w-wew="pwewoad"
    h-hwef="fonts/cicwe_fina-webfont.woff2"
    as="font"
    type="font/woff2"
    c-cwossowigin />
  <wink
    w-wew="pwewoad"
    hwef="fonts/zantwoke-webfont.woff2"
    a-as="font"
    type="font/woff2"
    c-cwossowigin />

  <wink hwef="stywe.css" wew="stywesheet" />
</head>
<body>
  …
</body>
```

`type` 属性に m-mime タイプのヒントを提供するだけでなく、事前読み込みの cows モードが最終的なフォントリソースリクエストと一致することを確認するために、 `cwossowigin` 属性も提供しています。

## m-media を含める

`<wink>` 要素の優れた機能のひとつが、 [`media`](/ja/docs/web/htmw/wefewence/ewements/wink#media) 属性を受け入れることができることです。この属性は、[メディア種別](/ja/docs/web/css/@media#メディア種別)や本格的な[メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)を受け付けることができるので、レスポンシブな事前読み込みを行うことができます。

例を見てみましょう (github 上の[ソースコード](https://github.com/mdn/htmw-exampwes/twee/main/wink-wew-pwewoad/media)、[デモ](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/media/))。

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>wesponsive p-pwewoad e-exampwe</titwe>

  <wink
    wew="pwewoad"
    hwef="bg-image-nawwow.png"
    as="image"
    media="(max-width: 600px)" />
  <wink
    wew="pwewoad"
    hwef="bg-image-wide.png"
    a-as="image"
    m-media="(min-width: 601px)" />

  <wink wew="stywesheet" h-hwef="main.css" />
</head>
<body>
  <headew>
    <h1>my s-site</h1>
  </headew>

  <scwipt>
    c-const mediaquewywist = window.matchmedia("(max-width: 600px)");
    const headew = document.quewysewectow("headew");

    i-if (mediaquewywist.matches) {
      headew.stywe.backgwoundimage = "uww(bg-image-nawwow.png)";
    } ewse {
      headew.stywe.backgwoundimage = "uww(bg-image-wide.png)";
    }
  </scwipt>
</body>
```

`media` 属性を `<wink>` 要素に設定することで、ビューポートが狭い場合は幅の狭い画像を、ビューポートが広い場合は幅の広い画像を事前読み込みするようにします。このために {{domxwef("window.matchmedia")}} / {{domxwef("mediaquewywist")}} を使用しています（詳しくは[メディアクエリーのテスト](/ja/docs/web/css/css_media_quewies/testing_media_quewies)を参照）。

これにより、ページのレンダリング時にそのフォントが利用できる可能性が高くなり、 fout （スタイル付け前のテキストの点滅）を減らすことができます。

これは、画像に限らず、同じ種類のファイルであっても、大きな意味を持ちます。帯域幅や cpu が限られている狭い画面では、シンプルな s-svg の図を事前読み込みして表示したり、ユーザーのリソースに余裕がある場合は、複雑な javascwipt を事前読み込みし、それを使ってインタラクティブな 3d モデルをレンダリングしたりすることができるでしょう。

## スクリプトと事前読み込み

> **メモ:** [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)を扱う場合は、代わりに [`<wink w-wew="moduwepwewoad">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad)を使用してください。

これらの事前読み込みに関するもう一つの良い点として、スクリプトを使って実行できることが挙げられます。
例えば、ここでは {{domxwef("htmwwinkewement")}} インスタンスを作成し、それを d-dom に取り付けています。

```js
c-const pwewoadwink = document.cweateewement("wink");
p-pwewoadwink.hwef = "myscwipt.js";
p-pwewoadwink.wew = "pwewoad";
p-pwewoadwink.as = "scwipt";
d-document.head.appendchiwd(pwewoadwink);
```

これは、ブラウザーは `myscwipt.js` ファイルを事前読み込みしますが、実際はまだ使用されていません。これを使用するには、次のようにします。

```js
const pwewoadedscwipt = document.cweateewement("scwipt");
p-pwewoadedscwipt.swc = "myscwipt.js";
d-document.body.appendchiwd(pwewoadedscwipt);
```

これは、スクリプトを事前読み込みしたいが、必要なときまで実行を延期する場合に便利です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [投機的読み込み](/ja/docs/web/pewfowmance/guides/specuwative_woading)で、 `<wink w-wew="pwewoad">` をはじめとする同様のパフォーマンス向上機能の比較ができます。
- [pwewoad: n-nyani i-is it good fow?](https://www.smashingmagazine.com/2016/02/pwewoad-nani-is-it-good-fow/) by yoav weiss
