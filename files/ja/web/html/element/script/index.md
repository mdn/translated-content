---
title: '<script>: スクリプト要素'
slug: Web/HTML/Element/script
tags:
  - 要素
  - HTML
  - HTML スクリプト
  - HTML:フローコンテンツ
  - HTML:メタデータコンテンツ
  - HTML:スクリプト対応要素
  - HTML:記述コンテンツ
  - リファレンス
  - Script
  - ウェブ
  - タグ
browser-compat: html.elements.script
translation_of: Web/HTML/Element/script
---

{{HTMLRef}}

**`<script>`** は [HTML](/ja/docs/Web/HTML) の要素で、実行できるコードやデータを埋め込むために使用します。ふつうは JavaScript のコードの埋め込みや参照に使用されます。 `<script>` 要素は [WebGL](/ja/docs/Web/API/WebGL_API) の GLSL shader プログラミング言語、 [JSON](/ja/docs/Glossary/JSON) 等の他の言語にも使用することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#metadata_content">メタデータコンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td><code>text/javascript</code> などの動的スクリプト</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#metadata_content">メタデータコンテンツ</a>を受け入れるすべての要素、または<a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
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

## 属性

この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。

- {{htmlattrdef("async")}}

  - : クラシックスクリプトでは、 `async` 属性があった場合、クラシックスクリプトが利用可能になるとすぐに並行して読み込み、解析と評価を行います。  

    [モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)では、 `async` 属性があった場合、そのスクリプトとその依存関係はすべて遅延キューで実行されるので、解析と並行して読み込まれ、利用可能になるとすぐに評価されます。  

    この属性により、ブラウザーが解析を一時停止してスクリプトを読み込んで評価しなければならないような**パーサーブロック JavaScript** を排除することができます `defer` はこの場合に同様の効果があります。  

    これは論理属性です。論理属性が要素にあれば真の値を表し、属性がなければ偽の値を表します。  

    ブラウザーの対応状況については{{anch("ブラウザーの互換性")}}をご覧ください。 [asm.js 向け非同期スクリプト](/ja/docs/Games/Techniques/Async_scripts)もご覧ください。

- {{htmlattrdef("crossorigin")}}
  - : 通常の `script` 要素は標準の {{Glossary("CORS")}} チェックに通らないスクリプトに対して、 {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} に最小限の情報しか渡しません。別のドメインを使用するサイトに静的メディアへのエラーログ出力ができるようにするためには、この属性を使用してください。有効な値について、詳しくは [CORS 設定属性](/ja/docs/Web/HTML/Attributes/crossorigin)をご覧ください。
- {{htmlattrdef("defer")}}

  - : この論理属性は、スクリプトを文書の解析完了後かつ {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} が発生する前に実行することをブラウザーに示します。

    `defer` 属性の付いたスクリプトは、スクリプトが読み込まれて評価が完了するまで、 `DOMContentLoaded` イベントの発生が抑制されます。

    > **Warning:** この属性は、 `src` 属性がない場合 (すなわちインラインスクリプト) に使用してはいけません。そのような場合は効果がありません。
    >
    > `defer` 属性は[モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)には効果がありません。既定で延期が行われます。

    `defer` 属性のあるスクリプトは、文書に現れた順に実行されます。

    この属性により、ブラウザーが解析を一時停止してスクリプトを読み込んで評価しなければならないような、**パーサーブロッキング JavaScript** を排除することができるようになります。 `async` はこの場合と似た効果があります。

- {{htmlattrdef("integrity")}}
  - : この属性は、取得したリソースが予期せぬ改ざんを受けずに提供されたかを、ユーザーエージェントが検証するために使用できるメタデータを含みます。[サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)を参照してください。
- {{htmlattrdef("nomodule")}}
  - : この論理属性は、 [ES2015 モジュール](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)に対応しているブラウザーでは、スクリプトを実行するべきではないことを示します。要するに、モジュール式の JavaScript コードに対応していない古いブラウザー向けの代替スクリプトを提供するために使用できます。
- {{htmlattrdef("nonce")}}
  - : [script-src コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)内のスクリプトをホワイトリストに入れるための暗号ノンス (ワンタイム番号) です。サーバーはポリシーを送信するたびに一意のノンス値を生成する必要があります。それ以外の方法でリソースのポリシーのバイパスを推測できないノンスを提供することが重要です。
- {{htmlattrdef("referrerpolicy")}}

  - : スクリプトを読み込んだり、スクリプトがリソースを読み込んだりする際に、どの[リファラー](/ja/docs/Web/API/Document/referrer)を送信するかを示します。

    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーは送信しません。
    - `no-referrer-when-downgrade` (既定値): {{HTTPHeader("Referer")}} ヘッダーは、{{Glossary("origin", "オリジン")}}に {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) がない場合には送信しません。
    - `origin`: 送信するリファラーを、参照しているページのオリジン ({{Glossary("protocol", "スキーム")}}、{{Glossary("host", "ホスト")}}、{{Glossary("port", "ポート番号")}}) のみに制限します。
    - `origin-when-cross-origin`: 異なるオリジンへの移動ではリファラーをスキーム、ホスト、ポート番号に制限します。同一オリジンへの移動では、リファラーのパスも含めます。
    - `same-origin`: リファラーは[同一オリジン](/ja/docs/Web/Security/Same-origin_policy)には送信しますが、オリジン間リクエストにはリファラー情報を含めません。
    - `strict-origin`: プロトコルのセキュリティ水準が同等 (例えば HTTPS→HTTPS) である場合は文書のオリジンのみをリファラーとして送信しますが、宛先の安全性がより低い場合 (例えば HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin`: 同一オリジンのリクエストを行う際は URL 全体を送信しますが、プロトコルのセキュリティ水準が同等 (例えば HTTPS→HTTPS) である場合は文書のオリジンのみをリファラーとして送信し、宛先の安全性がより低い場合 (例えば HTTPS→HTTP) にはヘッダーを送信しません。
    - `unsafe-url`: リファラーはオリジンとパスを含みます (ただし、[フラグメント](/ja/docs/Web/API/HTMLAnchorElement/hash)、[パスワード](/ja/docs/Web/API/HTMLAnchorElement/password)、[ユーザー名](/ja/docs/Web/API/HTMLAnchorElement/username)は含みません)。これはオリジンやパスの情報が TLS で保護されたリソースからセキュアでない生成元へ漏えいしますので、**安全ではありません**。

    > **Note:** 既定値および `referrerpolicy` に対応していない場合の代替値は空文字列 (`""`) です。 `referrerpolicy` が `<script>` 要素で明示的に指定されていない場合はより高次元、つまり文書全体やドメイン全体のリファラーポリシーに合わせられます。より高次元のポリシーが利用できない場合は、空文字列は `strict-origin-when-cross-origin` と同等のものとして扱われます。

- {{htmlattrdef("src")}}
  - : この属性は外部スクリプトの URI を指定します。文書に直接スクリプトを埋め込む代わりに使用することができます。
- {{htmlattrdef("type")}}

  - : スクリプトを表すタイプを指定します。この属性の値は、以下の種類のいずれかにします。

    - **省略または JavaScript の MIME タイプ:** これはスクリプトが JavaScript であることを示します。 HTML5 仕様書では、冗長な MIME タイプを指定せずに属性を省略するよう主張しています。過去のブラウザーでは埋め込まれている、あるいは (`src` 属性で) インポートされたコードのスクリプト言語を指定していました。JavaScript の MIME タイプは[仕様書に掲載されています](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#javascript_types)。
    - **`module`:** コードを JavaScript モジュールとして扱います。スクリプトの処理は、`charset` および `defer` 属性の影響を受けません。 `module` の利用についての情報は、 [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)をご覧ください。クラシックスクリプトとは異なり、モジュールスクリプトはオリジンをまたいで読み取る場合、CORS プロトコルを使用する必要があります。
    - **その他の値:** このタグで埋め込んだコンテンツを、ブラウザーによって処理されないデータブロックとして扱います。開発者はデータブロックを記述するために、 JavaScript の MIME タイプではない有効な MIME タイプを使用しなければなりません。 `src` 属性は無視されます。

### 非推奨の属性

- {{htmlattrdef("charset")}} {{Deprecated_inline}}
  - : 存在する場合、値は ASCII で大文字小文字を区別せずに "`utf-8`" と一致する文字列でなければなりません。 `charset` 属性は、文書が UTF-8 でなければならないこと、および `script` 要素が文書から文字エンコーディングを継承することから、指定する必要はありません。
- {{htmlattrdef("language")}} {{Deprecated_inline}}
  - : `type` 属性と同じように、この属性は使われているスクリプト言語を指定する際に用いられます。しかし、 `type` 属性とは異なり、この属性に指定可能な値が標準化されませんでした。代わりに `type` 属性を使用してください。

## 注

{{HTMLAttrxRef("async", "script")}}, {{HTMLAttrxRef("defer", "script")}}, `type="module"` のいずれの属性もないスクリプトは、インラインスクリプト同様に、ブラウザーがページの解析を続けるより先に、ただちに読み込みおよび実行されます。

スクリプトは `text/javascript` の MIME タイプで提供するべきですが、ブラウザーは寛大であり、画像 (`image/*`)・動画 (`video/*`)・音声 (`audio/*`)・`text/csv` のタイプで提供されたスクリプトに限りブロックします。スクリプトがブロックされると、 {{domxref("Element/error_event", "error")}} イベントがその要素に送られ、そうではない場合は {{domxref("Element/load_event", "load")}} イベントが送られます。

## 例

### 基本的な使い方

これらの例は `<script>` 要素を使用して (外部の) スクリプトをインポートする方法を紹介します。

```html
<script src="javascript.js"></script>
```

また、以下の例は `<script>` 要素内に (インライン) スクリプトを置く方法を示します。

```html
<script>
  alert("Hello World!");
</script>
```

### モジュールの代替

 `module` の値を持つ {{htmlattrxref("type", "script")}} 属性に対応しているブラウザーは、 `nomodule` 属性の付いたスクリプトを無視します。これによって、モジュールスクリプトを提供しつつ、非対応のブラウザーの場合は `nomodule` でマークされた代替スクリプトを提供することもできます。

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### HTML へのデータの埋め込み

また、 `<script>` 要素を使用して、 JavaScript 以外の有効な MIME タイプを `type` 属性に指定することで、サーバー側で出力したデータを HTML に埋め込むこともできます。

```html
<!-- サーバーによる生成 -->
<script id="data" type="application/json">{"userId":1234,"userName":"John Doe","memberSince":"2000-01-01T00:00:00.000Z"}</script>

<!-- 固定 -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information: %o", userInfo);
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 互換性のメモ

`async` 属性に対応していない古いブラウザーでは、パーサーが挿入したスクリプトがパーサーをブロックします。スクリプトによって挿入されたスクリプトは、 IE および WebKit では非同期的に実行されますが、 Opera およびバージョン 4 より前の Firefox では同期的に実行されます。 Firefox 4 では、スクリプトが生成したスクリプトの `async` DOM プロパティの既定値が `true` であるため、既定の動作が IE や WebKit の動作に一致します。

`document.createElement("script").async` が `true` と評価されるブラウザー (Firefox 4 など) で、スクリプトによって挿入された外部スクリプトを挿入順に実行することを要求するには、順序を制御したいスクリプトに対して `async="false"` を設定してください。

> **Warning:** 非同期スクリプトから `document.write()` を呼び出さないでください。 Firefox 3.6 では `document.write()` を呼び出すと予期せぬ影響をもたらします。Firefox 4 では `async` スクリプトから `document.write()` を呼び出しても効果がありません（エラーコンソールに警告を出力するだけです）。

## 関連情報

- {{domxref("document.currentScript")}}
- [Ryan Grove's `<script>` and `<link>` node event compatibility chart](https://pie.gd/test/script-link-events/)
- [Flavio Copes' article on loading JavaScript efficiently and explaining the differences between `async` and `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)ガイド
