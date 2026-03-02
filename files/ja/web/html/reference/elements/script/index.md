---
title: "<script>: スクリプト要素"
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

**`<script>`** は [HTML](/ja/docs/Web/HTML) の要素で、実行できるコードやデータを埋め込むために使用します。ふつうは JavaScript のコードの埋め込みや参照に使用されます。 `<script>` 要素は [WebGL](/ja/docs/Web/API/WebGL_API) の GLSL shader プログラミング言語、 [JSON](/ja/docs/Glossary/JSON) 等の他の言語にも使用することができます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `async`
  - : クラシックスクリプトでは、 `async` 属性があった場合、クラシックスクリプトが利用可能になるとすぐに並行して読み込み、解析と評価を行います。

    [モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)では、 `async` 属性があった場合、そのスクリプトとその依存関係は、構文解析と並行して読み込まれ、利用可能になるとすぐに評価されます。

    > [!WARNING]
    > この属性は、 `src` 属性が存在しない場合（インラインスクリプトなど）には使用しないでください。クラシックスクリプトの場合、この属性は効果がありません。

    この属性により、ブラウザーが解析を一時停止してスクリプトを読み込んで評価しなければならないような**パーサーブロック JavaScript** を排除することができます `defer` はこの場合に同様の効果があります。

    この属性を `defer` 属性とともに指定すると、その要素は `async` 属性のみが指定されている場合と同じ動作をします。

    これは論理属性です。論理属性が要素にあれば真の値を表し、属性がなければ偽の値を表します。

    ブラウザーの対応状況については[ブラウザーの互換性](#ブラウザーの互換性)をご覧ください。 [asm.js 向け非同期スクリプト](/ja/docs/Games/Techniques/Async_scripts)もご覧ください。

- `attributionsrc` {{experimental_inline}}
  - : ブラウザーに、スクリプトリソースのリクエストとともに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信するように指定します。サーバー側では、このヘッダーを使用して、レスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーを送信し、それぞれ JavaScript ベースの[帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources)または[帰属トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers)を登録します。どのレスポンスヘッダーを返すかは、登録をトリガーした `Attribution-Reporting-Eligible` ヘッダーの値によって異なります。

    > [!NOTE]
    > 他にも、JavaScript ベースの帰属ソースまたはトリガーは、 {{domxref("Window/fetch", "fetch()")}} リクエストに `attributionReporting` オプションを指定するか（`fetch()` 呼び出しに直接設定するか、 {{domxref("Request")}} オブジェクトに設定して `fetch()` 呼び出しに渡す）、リクエストオブジェクトで {{domxref("XMLHttpRequest")}} に {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} を呼び出して送信することで登録できます。

    この属性には、設定できるバージョンが 2 つあります。
    - 論理属性、すなわち `attributionsrc` の名前のみ。これは、 {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを `src` 属性が指し示すのと同じサーバーに送信することを指定します。これは、帰属ソースやトリガーの登録を同じサーバーで処理する場合に適しています。帰属トリガーを登録する際、このプロパティはオプションであり、省略した場合は空文字列値が使用されます。
    - 次のように 1 つ以上の URL を格納する値です。

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      これは、リクエストされたリソースが自分で管理するサーバー上にない場合や、別のサーバー上の帰属ソースの登録処理だけを行いたい場合に便利です。
      この場合、`attributionSrc` の値として 1 つ以上の URL を指定することができます。リソースへのリクエストが発生すると、 {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが、リソースのオリジンに加えて `attributionSrc` で指定された URL に送信されます。これらの URL は、登録を完了するために、 {{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーを適切に返すことができます。

      > [!NOTE]
      > 複数の URL を指定するということは、同じ機能に複数の帰属ソースを登録できるということになります。例えば、成功を測定しようとしているキャンペーンが複数ある場合、異なるデータに対して異なるレポートを生成することができます。

    詳しくは[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) を参照してください。

- `blocking`
  - : この属性は、スクリプトが実行されるまで特定の操作をブロックすべきであることを明示的に示します。ブロック対象の操作は、ブロック対象のトークンを空白区切りで列挙したリストでなければなりません。現在、トークンは 1 つしか存在しません。
    - `render`: 画面へのコンテンツのレンダリングのブロックします。

    > [!NOTE]
    > `script` 要素のうち、文書の `<head>` 内に存在するもののみがレンダリングをブロックする可能性があります。スクリプトは既定ではレンダリングをブロックしません。 `script` 要素が `type="module"`、`async`、`defer` を含まないと、構文解析をブロックしますが、レンダリングはブロックしません。このような `script` 要素をスクリプト経由で動的に追加した場合、レンダリングをブロックさせるには `blocking = "render"` を設定する必要があります。

- [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : 通常の `script` 要素は標準の {{Glossary("CORS")}} チェックが通らないスクリプトに対して、 {{domxref('Window.error_event', 'window.onerror')}} に最小限の情報しか渡しません。別のドメインを使用するサイトに静的メディアへのエラーログ出力ができるようにするためには、この属性を使用してください。有効な値について、詳しくは [CORS 設定属性](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)をご覧ください。
- `defer`
  - : この論理属性は、文書の構文解析完了後かつ {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベントが発生する前に、このスクリプトを実行することをブラウザーに示します。

    `defer` 属性の付いたスクリプトは、スクリプトが読み込まれて評価が完了するまで、 `DOMContentLoaded` イベントの発生が抑制されます。

    > [!WARNING]
    > この属性は、 `src` 属性がない場合 (すなわちインラインスクリプト) に使用してはいけません。そのような場合は効果がありません。
    >
    > `defer` 属性は[モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)には効果がありません。既定で延期が行われます。

    `defer` 属性のあるスクリプトは、文書に現れた順に実行されます。

    この属性により、ブラウザーが解析を一時停止してスクリプトを読み込んで評価しなければならないような、**パーサーブロッキング JavaScript** を排除することができるようになります。 `async` はこの場合と似た効果があります。

    この属性を `async` 属性とともに指定した場合、その要素は `async` 属性のみが指定されている場合と同等に動作します。

- `fetchpriority`
  - : 外部スクリプトをフェッチするときに使用する相対的な優先度のヒントを提供されます。
    取りうる値は次の通りです。
    - `high`
      - : 外部スクリプトを、他の外部スクリプトと比較して高い優先度で取得します。
    - `low`
      - : 外部スクリプトを、他の外部スクリプトと比較して低い優先度で取得します。
    - `auto`
      - : 取得の優先度の環境設定を指定しません。
        これが既定値です。
        値がない場合や、無効な値が設定されていた場合に使用されます。

    詳しくは {{domxref("HTMLScriptElement.fetchPriority")}} を参照してください。

- `integrity`
  - : この属性には、取得したリソースが予期せぬ操作なしに配信されたことをユーザーエージェントが確認するために使用できるインラインメタデータが含まれています。 `src` 属性がない場合は、この属性を指定してはいけません。[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)を参照してください。
- `nomodule`
  - : この論理属性は、 [ES モジュール](/ja/docs/Web/JavaScript/Guide/Modules)に対応しているブラウザーでは、スクリプトを実行するべきではないことを示します。要するに、モジュール式の JavaScript コードに対応していない古いブラウザー向けの代替スクリプトを提供するために使用できます。
- `nonce`
  - : [script-src コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)内のスクリプトをホワイトリストに入れるための暗号ノンス (ワンタイム番号) です。サーバーはポリシーを送信するたびに一意のノンス値を生成する必要があります。それ以外の方法でリソースのポリシーのバイパスを推測できないノンスを提供することが重要です。
- `referrerpolicy`
  - : スクリプトを読み込んだり、スクリプトがリソースを読み込んだりする際に、どの[リファラー](/ja/docs/Web/API/Document/referrer)を送信するかを示します。
    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーは送信しません。
    - `no-referrer-when-downgrade` (既定値): {{HTTPHeader("Referer")}} ヘッダーは、{{Glossary("origin", "オリジン")}}に {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) がない場合には送信しません。
    - `origin`: 送信するリファラーを、参照しているページのオリジン（[スキーム](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "ホスト")}}、{{Glossary("port", "ポート番号")}}）のみに制限します。
    - `origin-when-cross-origin`: 異なるオリジンへの移動ではリファラーをスキーム、ホスト、ポート番号に制限します。同一オリジンへの移動では、リファラーのパスも含めます。
    - `same-origin`: リファラーは[同一オリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy)には送信しますが、オリジン間リクエストにはリファラー情報を含めません。
    - `strict-origin`: プロトコルのセキュリティ水準が同等 (例えば HTTPS→HTTPS) である場合は文書のオリジンのみをリファラーとして送信しますが、宛先の安全性がより低い場合 (例えば HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin`: 同一オリジンのリクエストを行う際は URL 全体を送信しますが、プロトコルのセキュリティ水準が同等 (例えば HTTPS→HTTPS) である場合は文書のオリジンのみをリファラーとして送信し、宛先の安全性がより低い場合 (例えば HTTPS→HTTP) にはヘッダーを送信しません。
    - `unsafe-url`: リファラーはオリジンとパスを含みます (ただし、[フラグメント](/ja/docs/Web/API/HTMLAnchorElement/hash)、[パスワード](/ja/docs/Web/API/HTMLAnchorElement/password)、[ユーザー名](/ja/docs/Web/API/HTMLAnchorElement/username)は含みません)。これはオリジンやパスの情報が TLS で保護されたリソースからセキュアでない生成元へ漏えいしますので、**安全ではありません**。

    > [!NOTE]
    > 既定値および `referrerpolicy` に対応していない場合の代替値は空文字列 (`""`) です。 `referrerpolicy` が `<script>` 要素で明示的に指定されていない場合はより高次元、つまり文書全体やドメイン全体のリファラーポリシーに合わせられます。より高次元のポリシーが利用できない場合は、空文字列は `strict-origin-when-cross-origin` と同等のものとして扱われます。

- `src`
  - : この属性は外部スクリプトの URI を指定します。文書に直接スクリプトを埋め込む代わりに使用することができます。
- [`type`](/ja/docs/Web/HTML/Reference/Elements/script/type)
  - : この属性は、表現されるスクリプトの種類を示します。
    この属性の値は、以下のいずれかになります。
    - **属性が未設定（既定値）、空文字列、JavaScript の MIME タイプ**
      - : スクリプトが「クラシックスクリプト」であること、JavaScript コードを保持していることを示します。
        このスクリプトが JavaScript コードを参照している場合、MIME タイプを指定するのではなく、この属性を省略することを推奨します。
        JavaScript の MIME タイプは [IANA media types specification に掲載されています](/ja/docs/Web/HTTP/Guides/MIME_types#textjavascript)。
    - [`importmap`](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : この値は、要素の本体にインポートマップが格納されていることを示します。
        インポートマップ JSON オブジェクトで、開発者が [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules#インポートマップを使用したモジュールのインポート)をインポートする際に、ブラウザーがモジュール指定子を解決する方法を制御するために使用できます。
    - `module`
      - : コードを JavaScript モジュールとして扱います。
        スクリプトコンテンツの処理は延期されます。
        `charset` および `defer` 属性の影響を受けません。
        `module` の利用についての情報は、 [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)をご覧ください。
        クラシックスクリプトとは異なり、モジュールスクリプトはオリジンをまたいで読み取る場合、CORS プロトコルを使用する必要があります。
    - [`speculationrules`](/ja/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : この値は、この要素の本体が投機ルールであることを示します。投機ルールは JSON オブジェクトの形で提供され、ブラウザーがどのリソースを事前取得または事前レンダリングすべきかを決定します。これは、{{domxref("Speculation Rules API", "投機ルール API", "", "nocode")}} の一部です。
    - **その他の値**
      - : このタグで埋め込んだコンテンツを、ブラウザーによって処理されないデータブロックとして扱います。
        開発者はデータブロックを記述するために、 JavaScript の MIME タイプではない有効な MIME タイプを使用しなければなりません。
        他の属性は、`src` 属性も含めてすべて無視されます。

### 非推奨の属性

- `charset` {{Deprecated_inline}}
  - : 存在する場合、値は {{Glossary("ASCII")}} で、 `utf-8` と大文字小文字を区別せずに一致する文字列でなければなりません。 `charset` 属性は、文書が UTF-8 でなければならないこと、および `script` 要素が文書から文字エンコーディングを継承することから、指定する必要はありません。
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : `type` 属性と同じように、この属性は使われているスクリプト言語を指定する際に用いられます。しかし、 `type` 属性とは異なり、この属性に指定可能な値が標準化されませんでした。代わりに `type` 属性を使用してください。

## メモ

[`async`](#async), [`defer`](#defer), `type="module"` のいずれの属性もないスクリプトは、 `type="module"` のないインラインスクリプト同様に、ブラウザーがページの解析を続けるより先に、ただちに読み込みおよび実行されます。

スクリプトは `text/javascript` の MIME タイプで提供するべきですが、ブラウザーは寛大であり、画像型 (`image/*`)、動画型 (`video/*`)、音声型 (`audio/*`)、`text/csv` のタイプで提供されたスクリプトに限りブロックします。スクリプトがブロックされると、 {{domxref("HTMLElement/error_event", "error")}} イベントがその要素に送られ、そうではない場合は {{domxref("HTMLElement/load_event", "load")}} イベントが送られます。

## 例

### 基本的な使い方

この例は `<script>` 要素を使用して (外部の) スクリプトをインポートする方法を紹介します。

```html
<script src="javascript.js"></script>
```

次の例は、`<script>` 要素内に（インライン）スクリプトを配置する方法を示しています。

```html
<script>
  alert("Hello World!");
</script>
```

### async または defer

`async` 属性を使用して読み込むスクリプトは、スクリプトを取得している間、ページをブロックせずにスクリプトをダウンロードします。
しかし、ダウンロードが完了するとスクリプトが実行され、ページのレンダリングがブロックされます。つまり、スクリプトの実行が完了するまで、ウェブページ上の他のコンテンツは処理されず、ユーザーに表示されないということです。
スクリプトが特定の順序で実行されるという保証はありません。
`async` 属性を使用する最適な場面は、ページ上のスクリプトが互いに独立して動作し、ページ上の他のスクリプトに依存しない場合です。

`defer` 属性が設定されたスクリプトは、ページに現れる順番に読み込まれます。
ページのコンテンツがすべて読み込まれるまで実行されないため、スクリプトがその場の DOM に依存している場合（例えば、ページ上の 1 つ以上の要素を変更する場合など）に便利です。

これは、さまざまなスクリプト読み込み方法と、それがページに意味していることを視覚的に表現したものです。

![スクリプトの 3 種類の読み込み方法の動作: 既定では、 JavaScript を取得し実行する間、構文解析がブロックされます。 async では、構文解析は実行のみ一時停止します。 deferでは、構文解析は一時停止しませんが、他のすべての構文解析が完了した後に実行されます。](async-defer.jpg)

_この画像は [HTML 仕様書](https://html.spec.whatwg.org/images/asyncdefer.svg) から取得したもので、 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) ライセンス規定に基づいて縮小のためにコピーし切り抜いたものです。_

例えば、次のような script 要素があったとします。

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

スクリプトが読み込まれる際の順序に依存することはできません。
`jquery.js` は `script2.js` や `script3.js` の前または後に読み込まれる可能性があり、もしそうなった場合、これらのスクリプト内の `jquery` に依存する関数はエラーを発生します。なぜなら、スクリプトを実行する時点では `jquery` が定義されていないからです。

`async` は、多数のバックグラウンドスクリプトを読み込む必要があり、それらをできるだけ早く取得したい場合にのみ使用しましょう。
例えば、ゲームを実際に始める際に必要となるゲームデータファイルを読み込む必要があるものの、スクリプトの読み込みによってブロックされることなく、ゲームのイントロ、タイトル、ロビーを表示させるだけでよい場合などが考えられます。

`defer` 属性（下記参照）を用いて読み込んだスクリプトは、ページに現れる順番に実行され、スクリプトとコンテンツがダウンロードされるとすぐに実行されます。

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

2 つ目の例では、 `jquery.js` が `script2.js` と `script3.js` が読み込まれる前に読み込まれ、 `script3.js` は `script2.js` が読み込まれる前に読み込まれることが確実です。
ページコンテンツがすべて読み込まれるまで、これらのスクリプトは実行されません。これは、スクリプトがその場の DOM に依存している場合（例えば、ページ上の 1 つ以上の要素を変更するなど）に便利です。

まとめると、次のようになります。

- `async` と `defer` はどちらも、ページの残りの部分（DOM など）をダウンロードしている間に、スクリプト（複数可）を別個のスレッドでダウンロードするようブラウザーに指示します。そのため、取得プロセス中にページの読み込みがブロックされることはありません。
- `async` 属性を持つスクリプトは、ダウンロードが完了するとすぐに実行されます。これによりページがブロックされ、特定の実行順序は保証されません。
- `defer` 属性を持つスクリプトは、指定された順番で読み込まれ、すべての読み込みが完了した時点で初めて実行されます。
- スクリプトをすぐに実行する必要があり、依存関係も持っていない場合は、 `async` を使用しましょう。
- スクリプトが構文解析を待つ必要があり、他のスクリプトや DOM が存在することに依存している場合は、 `defer` を使用して読み込み、対応する `<script>` 要素をブラウザーに実行させたい順番に配置しましょう。

### モジュールの代替

`module` の値を持つ [`type`](/ja/docs/Web/HTML/Reference/Elements/script/type) 属性に対応しているブラウザーは、 `nomodule` 属性の付いたスクリプトを無視します。これによって、モジュールスクリプトを提供しつつ、非対応のブラウザーの場合は `nomodule` でマークされた代替スクリプトを提供することもできます。

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### importmap によるモジュールのインポート

スクリプトでモジュールをインポートするとき、[`type=importmap`](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap) 機能を使用しない場合、各モジュールは絶対 URL または相対 URL のどちらかのモジュール指定子を使用してインポートする必要があります。
以下の例では、最初のモジュール指定子は絶対 URL であり、2 番目のモジュール指定子 (`"./shapes/square.js"`) は文書のベース URL を基準に相対的に解決されます。

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

インポートマップを使用すると、一致した場合にモジュール指定子のテキストを置き換えることができる対応表を提供することができます。
下記のインポートマップでは、上に示したモジュール指定子のエイリアスとして使用できるキー `square` と `circle` を定義しています。

```html
<script type="importmap">
  {
    "imports": {
      "circle": "https://example.com/shapes/circle.js",
      "square": "./shapes/square.js"
    }
  }
</script>
```

これにより、（絶対 URL や相対 URL ではなく）モジュール指定子の名前を使用してモジュールをインポートすることができます。

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

インポートマップでできることの例については、JavaScript モジュールガイドの[インポートマップを使用したモジュールのインポート](/ja/docs/Web/JavaScript/Guide/Modules#インポートマップを使用したモジュールのインポート)の項を参照してください。

### HTML へのデータの埋め込み

また、 `<script>` 要素を使用して、 JavaScript 以外の有効な MIME タイプを `type` 属性に指定することで、サーバー側で出力したデータを HTML に埋め込むこともできます。

```html
<!-- サーバーによる生成 -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- 固定 -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information: %o", userInfo);
</script>
```

### スクリプトがフェッチされ、実行されるまでレンダリングをブロック

`blocking` 属性の中に `render` トークンを含めることができます。スクリプトがフェッチされ実行されるまで、ページのレンダリングはブロックされます。下記の例では、非同期スクリプトでレンダリングをブロックしています。スクリプトが解釈をブロックすることなく、レンダリングが始まる前に評価されることが保証されます。

```html
<script blocking="render" async src="async-script.js"></script>
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ">メタデータコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>,
         <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td><code>text/javascript</code> などの動的スクリプト</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ">メタデータコンテンツ</a>を受け入れるすべての要素、または<a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.currentScript")}}
- [Flavio Copes' article on loading JavaScript efficiently and explaining the differences between `async` and `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)ガイド
