---
title: "<link>: 外部リソースへのリンク要素"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{HTMLSidebar}}

**`<link>`** は [HTML](/ja/docs/Web/HTML) の要素で、現在の文書と外部のリソースとの関係を指定します。
この要素は{{Glossary("CSS", "スタイルシート")}}へのリンクに最もよく使用されますが、サイトのアイコン（"favicon" スタイルのアイコンと、モバイル端末のホーム画面やアプリのアイコンの両方）の確立や、その他のことにも使用されます。

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

外部スタイルシートへリンクするには、 {{HTMLElement("head")}} の中に次のような `<link>` 要素を入れてください。

```html
<link href="main.css" rel="stylesheet" />
```

この単純な例では、`href` 属性内にスタイルシートへのパスを提供し、[`rel`](/ja/docs/Web/HTML/Attributes/rel) 属性の値を `stylesheet` にしています。`rel` は "relationship" を意味し、おそらく `<link>` 要素の重要な機能の一つです。 — 値はこれを含んでいる文書にどのように関係するかを示します。

他にも見かけるであろう他の一般的な種別はたくさんあります。例えば、サイトのファビコンへのリンクがあります。

```html
<link rel="icon" href="favicon.ico" />
```

他にもアイコンの `rel` 値はいくつもあり、以下のように主に様々なモバイルプラットフォーム上で特殊なアイコンの種別を示すために使用されます。

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

`sizes` 属性はアイコンの寸法を表し、 `type` はリンクされようとしているリソースの MIME タイプが入ります。これらはブラウザーが利用できる最も適切なアイコンを選択するための有益なヒントを提供します。

`media` 属性でメディア種別やクエリーを指定することもできます。このリソースはメディアの条件が真になった場合のみ読み込まれます。

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

`<link>` 要素には、興味深いパフォーマンスやセキュリティの機能もいくつか追加されています。以下の例を見てみましょう。

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

`rel` が `preload` の値であることは、ブラウザーがこのリソースを先読みすることを指示しており (詳しくは [`rel="preload"`](/ja/docs/Web/HTML/Attributes/rel/preload)を参照)、 `as` 属性がコンテンツが読み込まれるされる特定のクラスを示します。
`crossorigin` 属性はリソースが {{Glossary("CORS")}} リクエストによって読み込まれるかどうかを示します。

その他の使い方のメモです。

- `<link>` 要素は[リンク種別](https://html.spec.whatwg.org/multipage/links.html#body-ok)が **body-ok** であるかどうかによって、 {{HTMLElement("head")}} 要素または {{HTMLElement("body")}} 要素のどちらかに置くことができます。例えば `stylesheet` リンク種別は body-ok であり、`<link rel="stylesheet">` を body 要素内に置くことができます。しかし、これは従うべき良い方法ではありません。 `<link>` 要素は `<head>` に入れて本文から離した方が分かりやすくなります。
- サイトにファビコンを設定するために `<link>` を使用する場合で、サイトがセキュリティの強化のためにコンテンツセキュリティポリシー (CSP) を使用している場合、ファビコンにポリシーが適用されます。ファビコンが読み込まれないという問題が発生したら、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーの [`img-src` ディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)がアクセスを禁止していないかどうか確認してください。
- HTML および XHTML の仕様では `<link>` 要素向けのイベントハンドラーを定義していますが、それらがどのように使用されるかは不明確です。
- XHTML 1.0 では `<link>` のような{{glossary("void element", "空要素")}}では、 `<link />` のように末尾のスラッシュが必要です。
- WebTV は `rel` に `next` の値を使用して、一連の文書の次のページを先読みすることに対応しています。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `as`

  - : この属性は、 [`rel="preload"`](/ja/docs/Web/HTML/Attributes/rel/preload) を `<link>` 要素に設定した場合に必要となり、また [`rel="modulepreload"`](/ja/docs/Web/HTML/Attributes/rel/modulepreload) を設定した場合はオプションですが、それ以外は使用すべきではありません。
    これは `<link>` によって読み込まれるコンテンツのタイプを指定する属性であり、リクエストの照合、正しい[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)の適用、正しい {{HTTPHeader("Accept")}} リクエストヘッダーの設定のために必要です。

    さらに、 `rel="preload"` はこれをリクエストの優先度付の信号として使用します。下記の表はこの属性に有効な値と、適用先の要素またはリソースの一覧です。

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">値</th>
          <th scope="col">適用先</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>audio</td>
          <td><code>&#x3C;audio></code> 要素</td>
        </tr>
        <tr>
          <td>document</td>
          <td><code>&#x3C;iframe></code> および <code>&#x3C;frame></code> 要素</td>
        </tr>
        <tr>
          <td>embed</td>
          <td><code>&#x3C;embed></code> 要素</td>
        </tr>
        <tr>
          <td>fetch</td>
          <td>
            <p>fetch, XHR</p>
            <div class="notecard note">
              <p>
                <strong>Note:</strong> この値では <code>&#x3C;link></code> に crossorigin 属性をつける必要があります。<a href="/ja/docs/Web/HTML/Attributes/rel/preload#cors_を使用した取得">CORS を使用した取得</a>を 参照してください。
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>font</td>
          <td>
            <p>CSS @font-face</p>
            <div class="notecard note">
              <p>
                <strong>Note:</strong> この値では <code>&#x3C;link></code> に crossorigin 属性をつける必要があります。<a href="/ja/docs/Web/HTML/Attributes/rel/preload#cors_を使用した取得">CORS を使用した取得</a>を 参照してください。
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> および <code>&#x3C;picture></code> 要素で srcset または imageset 属性が付いているもの、 SVG の <code>&#x3C;image></code> 属性、 CSS の <code>*-image</code> ルール
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td><code>&#x3C;object></code> 属性</td>
        </tr>
        <tr>
          <td>script</td>
          <td>
            <code>&#x3C;script></code> 要素、ワーカーの <code>importScripts</code>
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            <code>&#x3C;link rel=stylesheet></code> 要素、 CSS の
            <code>@import</code>
          </td>
        </tr>
        <tr>
          <td>track</td>
          <td><code>&#x3C;track></code> 要素</td>
        </tr>
        <tr>
          <td>video</td>
          <td><code>&#x3C;video></code> 要素</td>
        </tr>
        <tr>
          <td>worker</td>
          <td>ワーカー、共有ワーカー</td>
        </tr>
      </tbody>
    </table>

- `blocking` {{Experimental_Inline}}

  - : この属性は、外部リソースの取得時に特定の処理をブロックすることを明示的に示します。これは `rel` 属性に `expect` または `stylesheet` キーワードが格納されている場合にのみ使用しなければなりません。ブロックする演算子は、下記のブロックトークンをスペース区切りで列挙したものでなければなりません。
    - `render`: 画面へのコンテンツの描画がブロックされます。

- `crossorigin`

  - : [列挙型](/ja/docs/Glossary/Enumerated)の属性で、関連リソースを取得する際に {{Glossary("CORS")}} を使用しなければならないかを示します。
    [CORS が有効な画像](/ja/docs/Web/HTML/CORS_enabled_image)は、<em>汚染</em>されることなく {{HTMLElement("canvas")}} 要素で再利用できます。次の値が使用できます。

    - `anonymous`
      - : オリジン間リクエスト (つまり、 HTTP の {{HTTPHeader("Origin")}} ヘッダーを持つリクエスト) が実行されます。ただし、信用情報は送信されません (Cookie、X.509 証明書、 HTTP ベーシック認証は利用されません)。
        サーバーが元のサイトに信用情報を付与しない (HTTP の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーの設定がない) 場合、リソースが汚染され、その使用も制限されます。
    - `use-credentials`
      - : オリジン間リクエスト (つまり、 HTTP の `Origin` ヘッダーを持つリクエスト) が実行され、信用情報が送信されます (Cookie、証明書、HTTP ベーシック認証が利用されます)。
        サーバーが元のサイトに信用情報を付与しない場合 (HTTP の {{HTTPHeader("Access-Control-Allow-Credentials")}} ヘッダーに関わらず)、画像が<em>汚染</em>され、その使用も制限されます。

    この属性が存在しない場合、リソースは {{Glossary("CORS")}} リクエストなしで (`Origin` HTTP ヘッダーを送信せずに) 取得され、汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワード **anonymous** が指定されたものとして扱われます。
    それ以上の情報は [CORS 設定属性](/ja/docs/Web/HTML/Attributes/crossorigin) を参照してください。

- `disabled`

  - : `rel="stylesheet"` の場合のみ、 `disabled` は論理属性であり、指定されたスタイルシートを読み込んで文書に適用するかどうかを示します。 `disabled` が HTML に読み込み時点で指定されていた場合、そのスタイルシートはページ読み込み処理の間に読み込まれません。代わりに、そのスタイルシートは `disabled` 属性が `false` に変更されたか削除された場合にオンデマンドで読み込まれます。

    DOM から `disabled` プロパティの値を変更すると、そのスタイルシートを文書の {{domxref("Document.styleSheets")}} の一覧から削除します。

- `fetchpriority`

  - : 先読みされたリソースを取得する際に使用する相対的な優先度のヒントを 提供します。使用できる値は次の通りです。

    - `high`
      - : 同じ型を持つ他のリソースと比較して、優先度の高い取り込みを示します。
    - `low`
      - : 同じ型の他のリソースと比較して、優先順位が低い取り込みを示します。
    - `auto`
      - : 既定値。同じ型の他のリソースに対するフェッチ優先順位を自動的に決定することを示します。

- `href`
  - : この属性は、リンクしたリソースの {{glossary("URL")}} を指定します。 URL は絶対・相対のどちらでもかまいません。
- `hreflang`
  - : この属性は、リンク先のリソースの言語を示します。
    これは単なる助言です。
    許容される値は {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} で定めています。
    この属性は、[`href`](/ja/docs/Web/HTML/Element/a#href) 属性が提供されている場合にのみ使用します。
- `imagesizes`
  - : `rel="preload"` および `as="image"` において、 `imagesizes` 属性は、`img` 要素によって使用される適切なリソースを、その `srcset` および `sizes` 属性に対応する値で先読みすることを示す [sizes 属性](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute)です。
- `imagesrcset`
  - : `rel="preload"` および `as="image"` において、 `imagesrcset` 属性は `img` 要素によって使用される適切なリソースを、その `srcset` および `sizes` 属性に対応する値で先読みすることを示す [sourceset 属性](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute)です。
- `integrity`
  - : インラインメタデータを格納します。ブラウザーに取得するよう指示するリソース (ファイル) の、base64 エンコードされた暗号化ハッシュです。
    ブラウザーはこれを使用して、取得したリソースが予期せぬ操作なしに配信されたことを確認することができます。
    この属性は、`rel` 属性が `stylesheet`、`preload`、`modulepreload` を指定した場合にのみ指定する必要があります。
    [サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)を参照してください。
- `media`

  - : この属性は、リンク先のリソースが適用されるメディアを指定します。この値は[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)でなければなりません。
    この属性は主に外部のスタイルシートから、実行中のデバイスに最適なものをユーザーエージェントが選択できるようにリンクするときに役立ちます。

- `referrerpolicy`

  - : リソースを読み込む際にどのリファラーを使用するかを示す文字列です。

    - `no-referrer` は、{{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。
    - `no-referrer-when-downgrade` は、TLS (HTTPS) を使用せずにオリジンへナビゲートする場合は {{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。これは他にポリシーが定められていない場合の、ユーザーエージェントの既定の動作です。
    - `origin` は、ページのオリジン (大まかにいえばスキーム、ホスト、ポート) をリファラーとすることを表します。
    - `origin-when-cross-origin` は、異なるオリジンへの移動ではリファラーをスキーム、ホスト、ポートに制限します。同一オリジンへの移動では、リファラーのパスも含めます。
    - `unsafe-url` は、リファラーにオリジンとパスを含めることを表します (ただし、フラグメント、パスワード、ユーザー名は含めません)。これはオリジンやパスの情報が TLS で保護されたリソースからセキュアでないオリジンへ漏えいしますので、安全ではありません。

- `rel`
  - : この属性は現在の文書に対する、リンクされた文書の関係を示します。属性値は、空白で区切られた[リンク種別の値](/ja/docs/Web/HTML/Attributes/rel)のリストでなければなりません。
- `sizes`

  - : この属性は、リソースに含まれる映像メディア向けのアイコンのサイズを定義します。これは、 [`rel`](#rel) の値が `icon` または Apple の `apple-touch-icon` のような標準外の種別が含まれている場合にのみ指定することができます。以下の値を指定できます。

    - `any`: `image/svg+xml` のようなベクター画像であるため、どのようなサイズにも調整可能であることを示します。
    - ホワイトスペースで区切られたサイズのリスト。サイズはそれぞれ `<幅のピクセル数>x<高さのピクセル数>` または `<幅のピクセル数>X<高さのピクセル数>` という形式です。それぞれのサイズがリソースに含まれていることが必要です。

    > [!NOTE]
    > ほとんどのアイコン形式は 1 個のアイコンのみ保存可能です。よってほとんどの場合、 [`sizes`](#sizes) 属性はエントリーが 1 個だけになります。
    > アップルの ICN はもちろん、マイクロソフトの ICO 形式も使用できます。 ICO の方が一般的であり、複数ブラウザーの対応 (特に IE の古いバージョン) が重要である場合はこの形式を使用してください。

- `title`
  - : `title` 属性は、`<link>` 要素では特別な意味があります。`<link rel="stylesheet">` で使用すると、[優先スタイルシートか代替スタイルシートか](/ja/docs/Web/CSS/Alternative_style_sheets) を定義します。
- `type`
  - : この属性は、リンク先コンテンツの種類を定義します。この属性の値は **text/html** や **text/css** などの MIME タイプにします。
    この属性の一般的な使用法は、参照されるスタイルシートのタイプ（**text/css** など）の定義ですが、 CSS はウェブ上の唯一のスタイルシート言語であるため、`type` 属性を省略できるばかりでなく、それが実際に推奨される習慣になっています。
    また `rel="preload"` リンク種別で、ブラウザーが対応するファイルタイプのみダウンロードさせるためにも使用します。

### 標準外の属性

- `methods` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : この属性の値は、オブジェクト上で動作する関数についての情報を提供します。
    この値は基本的に HTTP プロトコルが利用されたときに与えられますが、(**title** 属性と同じような理由で) リンク先の情報を前もって含めるときに役立ちます。
    例えば定義されたメソッドの機能によって、異なるリンクの描画をブラウザーが選択します。
    検索可能なリンクで異なるアイコンを取得したり、外部リンクには現在のサイトから去ることを示す描画にしたりできます。
    この属性は、定義された Internet Explorer 4 ですら、あまり理解されておらず対応もされていません。
- `target` {{Deprecated_Inline}}
  - : 定義されたリンク関係を持つ、またはリンクしたリソースを表示するフレームまたはウィンドウの名前を定義します。

### 廃止された属性

- `charset` {{deprecated_inline}}

  - : この属性は、リンク先のリソースの文字エンコーディングを定義します。この値は {{rfc(2045)}} で定義されている文字セットの、スペースまたはカンマで区切られたリストです。
    既定値は `iso-8859-1` です。

    > [!NOTE]
    > この廃止された属性と同じ効果を生み出すためには、リンク先のリソースで HTTP の {{HTTPHeader("Content-Type")}} ヘッダーを使用してください。

- `rev` {{deprecated_inline}}

  - : この属性の値は、[`href`](#href) 属性で定義したリンク先文書に対する、現在の文書の関係を示します。
    従って、この属性は `rel` 属性の値と比べたときに逆向きの関係を定義します。
    この属性向けの[リンク種別の値](/ja/docs/Web/HTML/Attributes/rel)は、[`rel`](#rel) 向けの値と似ています。

    > [!NOTE]
    > 代わりに、逆の意味の[リンク種別の値](/ja/docs/Web/HTML/Attributes/rel)を与えた [`rel`](#rel) 属性を使用してください。例えば `made` は `author` に置き換えます。また、この属性は「リビジョン」 (revision) を表すものではないので、バージョン番号を指定してはいけませんが、残念ながらいくつものサイトでそのように使用されています。

## 例

### スタイルシートの読み込み

ページにスタイルシートを読み込むには、以下の構文を使用します。

```html
<link href="style.css" rel="stylesheet" />
```

### 代替スタイルシートの提供

[代替スタイルシート](/ja/docs/Web/CSS/Alternative_style_sheets)も提示できます。

ユーザーはメニューの **表示 > スタイルシート** で、使用するスタイルシートを選択できます。
これは、ユーザーがページをさまざまなバージョンで閲覧する手段を提供します。

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### 異なる利用場面のアイコンの提供

同じページにいくつかの異なるアイコンへのリンクを含めて、ブラウザーが `rel` や `sizes` の値をヒントとして使用し、特定の場面で最適に動作する一つを選択するようにすることができます。

```html
<!-- 高解像度ディスプレイの第 3 世代 iPad -->
<link rel="apple-touch-icon" sizes="144x144" href="favicon144.png" />
<!-- 高解像度ディスプレイの iPhone -->
<link rel="apple-touch-icon" sizes="114x114" href="favicon114.png" />
<!-- 第 1、第 2 世代の iPad: -->
<link rel="apple-touch-icon" sizes="72x72" href="favicon72.png" />
<!-- 高解像度でない iPhone, iPod Touch, Android 2.1 以降の端末 -->
<link rel="apple-touch-icon" href="favicon57.png" />
<!-- 基本的なファビコン -->
<link rel="icon" href="favicon32.png" />
```

### メディアクエリーのついた条件付きのリソース読み込み

以下のように、メディア種別やクエリーを `media` 属性で指定することができます。このリソースはメディア条件が真の場合にのみ読み込まれます。

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link
  href="desktop.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (min-resolution: 300dpi)" />
```

### スタイルシートの load イベント

`load` イベントの発生を確認することで、スタイルシートが読み込まれた時を判断できます。同様に `error` イベントを確認することで、スタイルシートを処理する際のエラー発生を検出できます。

```html
<link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet" />

<script>
  const stylesheet = document.getElementById("my-stylesheet");

  stylesheet.onload = () => {
    // Do something interesting; the sheet has been loaded
  };

  stylesheet.onerror = () => {
    console.log("An error occurred loading the stylesheet!");
  };
</script>
```

> **メモ:** `load` イベントはスタイルシートとスタイルシートがインポートするすべてのコンテンツの読み込みと解析が行われた後、スタイルシートがコンテンツに適用される直前に発生します。

### 先読みの例

`<link rel="preload">` の例は、 [`rel="preload"` によるコンテンツの先読み](/ja/docs/Web/HTML/Attributes/rel/preload)にいくつかあります。

### リソースが読み込まれるまで描画をブロック

`render` トークンを `blocking` 属性に設定することができます。
指定すると、リソースが取り込まれるまでページのレンダリングがブロックされます。

```html
<link blocking="render" rel="stylesheet" href="example.css" crossorigin />
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        メタデータコンテンツ。
        <code><a href="/ja/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code> が存在する場合は、<a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>および<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>。
      </td>
    </tr>
    <tr>
      <th>許可されている内容</th>
      <td>なし。これは{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th>タグの省略</th>
      <td>開始タグは必須であり、終了タグを置いてはいけません。</td>
    </tr>
    <tr>
      <th>許可されている親要素</th>
      <td>
        メタデータ要素を受け入れるすべての要素。
        <a href="/ja/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> 属性がある場合は<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><code>href</code> 属性つきの <a href="/ja/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th>DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLLinkElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP の {{HTTPHeader("Link")}} ヘッダー
- [The `integrity` attribute](https://150daysofhtml.com/book/day010/) (150daysofhtml.com, 2021)
