---
title: ウェブでのモジュールの使用
slug: Web/JavaScript/Guide/Modules/Modules_on_the_web
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

このページでは、JavaScript モジュールがウェブプラットフォームにどのように統合されているかを説明します。ここで扱う機能はコア言語ではなく HTML 仕様などのウェブ仕様で定義されており、通常はウェブページにのみ関係します。他の環境向けにモジュールを記述する場合は、代わりに [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)と[プラットフォームをまたぐモジュール](/ja/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)のガイドを参照してください。

## サーバーの設定

ウェブページをモジュールに移行するとき、まず直面する違いは、`file://` プロトコルを使って HTML を表示できなくなることです。HTML とモジュールを含むディレクトリーを[ローカル HTTP サーバー](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)経由で配信し、`http://localhost:8000/` のようなサーバーの URL でページを開いてください。

これは、モジュールのリクエストでは [CORS](/ja/docs/Web/HTTP/Guides/CORS) が使われ、`file://` URL は常にオリジンが異なるためです。別のオリジンからインポートする場合、そのサーバーは {{HTTPHeader("Access-Control-Allow-Origin")}} などの CORS レスポンスヘッダーで、ページのオリジンからのアクセスを許可する必要があります。デフォルトでは、オリジンをまたぐモジュールのリクエストにクッキーなどの資格情報は含まれません。サーバーの CORS ヘッダーで許可されていれば、[`crossorigin="use-credentials"`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を `<script>` 要素に設定することで、資格情報が送信されます（この設定は、そのスクリプトを通じて取得されるモジュールグラフ全体に適用されます）。

サーバーは JavaScript モジュールを、JavaScript の [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)（`Content-Type: text/javascript` など）で送信する必要があります。`.js` と `.mjs` の両方で確認してください。MIME タイプエラーでインポートに失敗した場合は、ブラウザーのネットワークツールでレスポンスを調べてください。モジュールの代わりに、ファイルが見つからないことを示すページや HTML の代替ページが返されている可能性があります。

## HTML へのモジュールの適用

スクリプトがモジュールであることを [`<script>`](/ja/docs/Web/HTML/Reference/Elements/script) 要素で宣言するには、`type="module"` を指定します。例えば、`main.js` スクリプトをインポートするには、次のようにします。

```html
<script type="module" src="main.js"></script>
```

エントリーポイントにだけ `<script type="module">` 要素が必要です。そこからインポートされるモジュールは自動的にモジュールとして読み込まれるため、モジュールであることを宣言するだけのために `<script>` 要素を追加する必要はありません。

JavaScript コードを `<script>` 要素の本体に配置し、モジュールのスクリプトを HTML ファイルに直接埋め込むこともできます。

```html
<script type="module">
  /* JavaScript モジュールコード */
</script>
```

通常、すべてのモジュールは個別のファイルで定義します。HTML 内にインラインで宣言されたモジュールは他のモジュールをインポートできますが、URL がないため、エクスポートしたものを他のモジュールから利用することはできません。

`import` 文と `export` 文はモジュール内でのみ使用でき、通常のスクリプトでは使用できません。`<script>` 要素に `type="module"` 属性がない状態で他のモジュールをインポートしようとすると、エラーが発生します。例えば次のとおりです。

```html example-bad
<script>
  import mod from "./mod.js"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

モジュールスクリプトでも[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)を、 [`integrity`](/ja/docs/Web/HTML/Reference/Attributes/integrity) 属性によって利用できますが、この属性が対象とするのはエントリーモジュールだけです。依存モジュールの完全性メタデータは、インポートマップの `integrity` キーで指定できます。

> [!NOTE]
> モジュールとその依存関係は、[`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 要素に [`rel="modulepreload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/modulepreload) を指定することで事前読み込みできます。
> これにより、モジュールを使う時点での読み込み時間を大幅に短縮できます。

従来の `<script>` 要素に慣れている場合は、次のような動作の違いにも注意してください。

- 同じ環境では、モジュールを複数回インポートしたり、複数の `<script>` タグから参照したりしても、実行されるのは 1 回だけです。
- モジュールスクリプトの読み込みに `defer` 属性は必要ありません（[`<script>` の属性](/ja/docs/Web/HTML/Reference/Elements/script)を参照）。`async` が指定されていないモジュールスクリプトは、文書内で自動的に遅延実行されます。
- `async` 属性を追加すると、HTML の構文解析完了を待たずに、モジュールグラフの読み込みが終わり次第その評価が始まります。他のスクリプトとの実行順序は保証されません。クラシックスクリプトと異なり、インラインのモジュールスクリプトでも `async` は動作します。

## ワーカー内のモジュール

モジュールが実行されるのは文書内だけではありません。[ワーカー](/ja/docs/Web/API/Web_Workers_API)もモジュールとして実行できます。`type: "module"` を {{domxref("Worker/Worker", "Worker()")}} または {{domxref("SharedWorker/SharedWorker", "SharedWorker()")}} コンストラクター、あるいは {{domxref("ServiceWorkerContainer/register", "navigator.serviceWorker.register()")}} に渡して、モジュールを有効にします。

```js
const worker = new Worker("./worker.js", { type: "module" });
```

ワーカーのファイルは、そのワーカー独自の[モジュールグラフ](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph)のエントリーポイントになります。

モジュールワーカー内で他のモジュールをインポートするには、`import` 宣言または `import()` だけを使用できます。{{domxref("WorkerGlobalScope/importScripts", "importScripts()")}} を呼び出すと `TypeError` が発生します。サービスワーカーでは動的な `import()` を利用できないため、モジュールサービスワーカーのコードはすべて静的インポートからたどれる必要があります。[ワークレット](/ja/docs/Web/API/Worklet)は `addModule()` でコードを読み込みますが、これは常にモジュールです。

## ウェブ上のモジュール指定子

モジュール指定子は `from` キーワードの後に続く文字列です。

```js
import { name } from "./module.js";
```

すでに[モジュール](/ja/docs/Web/JavaScript/Guide/Modules#名前付きインポート)のガイドで説明したとおり、モジュール指定子の形式はランタイムに依存します。ここでは、ブラウザーでの動作を見ていきます。

まず、ウェブ上のものはすべて URL を基盤としています。各モジュールには URL があるため、絶対 URL を直接使ってモジュールをインポートできます。

```js
import { name } from "https://example.com/js/modules/module.js";
```

ブラウザーは指定された URL に HTTP リクエストを送信します。サーバーが `Content-Type: text/javascript` を含む成功レスポンスを返すと、モジュールの読み込みが続行されます。

> [!NOTE]
> 「ESM のモジュール指定子にはファイル拡張子が必要」という通説には、当たっている部分とそうでない部分があります。JavaScript ランタイムが拡張子を自動的に追加することはありません。`import { name } from "https://example.com/modules/module";` と書くと、ブラウザーは `.js` 拡張子のない URL にリクエストを送信します。そのリクエストが JavaScript の内容を含む成功レスポンスを返せば、モジュールは通常どおり読み込まれます。問題は、サーバーが拡張子のないリクエストを通常 HTML ファイルへのリクエストとして扱うことです。そのため、JavaScript ファイルを配信するには、ほとんどの場合追加設定が必要です。

リソースの場所として使える URL スキームはほかにもあり、例えば [`data:`](/ja/docs/Web/URI/Reference/Schemes/data) にも対応しています。詳しくは[`import` のリファレンス](/ja/docs/Web/JavaScript/Reference/Statements/import)を参照してください。

常に絶対 URL でインポートする方法には、リンク先に絶対 URL を使う場合と同じ問題があります。URL が長く、サイトを別のドメインに移すと機能せず、JavaScript 資産全体のパスを移動した場合も機能しません。モジュール指定子には、{{HTMLElement("a")}} 要素の [`href`](/ja/docs/Web/HTML/Reference/Elements/a) 属性と同様に相対 URL も指定できます。違いは、相対 URL は `/`、`./`、`../` のいずれかで始まる必要があることです。つまり、`modules/module.js` のような「素の」相対 URL は使えず、`./modules/module.js` と記述する必要があります。この制限によって、素の指定子に特別な意味を割り当てられます。Node.js によって広まったエコシステムの慣例では、`"jquery"` のような素の名前はパッケージを指します。ウェブ上では現在、その特別な意味を[インポートマップ](#インポートマップを使用したモジュールのインポート)で割り当てます。インポートマップで再マッピングされていない素の指定子を使うと、`TypeError` が発生します。

モジュール指定子の URL は HTML 文書の URL ではなく、現在のモジュールの URL を基準に解決されます。例えば、`https://example.com/js/main.js` にあるモジュールから `https://example.com/js/modules/module.js` をインポートするには、次のように記述します。

```js
import { name } from "./modules/module.js";
```

## インポートマップを使用したモジュールのインポート

相対 URL や絶対 URL に加えて、[インポートマップ](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap)を使うと、モジュールをインポートする際にモジュール指定子へ任意のテキストを指定できます。インポートマップは、モジュール URL の解決時にそのテキストを置き換える値を対応付けます。インポートマップは [JSON オブジェクト](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap#json_のインポートマップ表現)を使って、`<script>` 要素に `type` 属性を [`importmap`](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap) に設定して定義します。

> [!NOTE]
> インポートマップは文書にのみ適用されます。仕様では、ワーカーやワークレットのコンテキストに適用する方法は定義されていません。<!-- https://github.com/WICG/import-maps/issues/2 -->

例えば、次のインポートマップの `imports` キーは「モジュール指定子マップ」を定義する JSON オブジェクトです。プロパティ名をモジュール指定子として使用でき、ブラウザーがモジュール URL を解決する際に対応する値に置き換えられます。

```html
<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "../shapes/square": "./shapes/square.js"
    }
  }
</script>
```

> [!NOTE]
> 以降では、外側の `<script type="importmap">` 要素を省略し、インポートマップを JSON コードとして示します。JSON は HTML にインラインで記述する必要があり、`src` で参照する外部ファイルにはできないことに注意してください。

このマップを使うと、デフォルトでは拒否される `shapes` や `shapes/square` のような素の指定子を使用できます。

```js
// 素のモジュール名をモジュール指定子として使用
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// URL を別の URL に再マッピング
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

インポートマップには、次のような用途があります。

- Node.js と同様に素のモジュール名でインポートできます。npm パッケージをインポートするモジュールも、パッケージが何らかの URL から利用できれば、ソースコードを変更せずウェブに直接配置できます。[文字列照合](#文字列照合)と[接頭辞照合](#接頭辞照合)を参照してください。
- 完全な URL でインポートするモジュールも、ソースコードを変更せず必要に応じて別の URL に差し替えられます。[URL の一般的な再マッピング](#url_の一般的な再マッピング)を参照してください。
- モジュールをインポートするスクリプトのパスに基づいて、ライブラリーの特定のバージョンをインポートできます。[`scopes` オブジェクト](#scopes_オブジェクト)を参照してください。

これにより、ブラウザーとサーバーの両方で同じ JavaScript ライブラリーを使うための手間を減らせます。

さらに、インポートマップではモジュールの依存関係にハッシュ値による完全性も指定できます（`<script>` の [`integrity`](/ja/docs/Web/HTML/Reference/Attributes/integrity) 属性が対象とするのはエントリーポイントのモジュールだけです）。これはモジュール指定子の解決とは関係しないため、ここでは説明しません。詳しくは[完全性メタデータマップ](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap)を参照してください。

### 機能の検出

インポートマップへの対応は、広く対応されている静的メソッド [`HTMLScriptElement.supports()`](/ja/docs/Web/API/HTMLScriptElement/supports_static) を使って確認できます。

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### `imports` オブジェクト

`imports` プロパティには、各プロパティの値が文字列であるオブジェクトを指定します。値に他のデータ型を指定すると `null` になります。以降で説明するほかの条件でも値が `null` になることがあります。解決処理が値 `null` の項目に到達すると、その指定子の解決は直ちに失敗します。

キーには、次の 2 種類があります。

- `/` で終わらないキーは、指定子とそのまま照合されます。
- `/` で終わるキーは、指定子の接頭辞として照合されます。この場合、値も `/` で終わる必要があり、そうでなければ `null` になります。接頭辞照合については後述します。

値は URL でなければならず、インポートマップを含む文書の[ベース URL](/ja/docs/Web/HTML/Reference/Elements/base)を基準に解決されます。URL の構文解析に失敗すると、値は `null` になります（相対 URL は「素の」形式でもかまいません。素の形式が許可されていないのはモジュール指定子だけです）。

`imports` オブジェクトのプロパティの順序は関係ありません。内部では常にキーの辞書順の降順に並べ替えられ、解決時にはその順序で照合されます。

#### 文字列照合

`https://example.com/welcome` のページに次の `<script>` 要素が含まれているとします。

```json
{
  "imports": {
    "square": "./shapes/square.js"
  }
}
```

ここでは値に相対 URL を使用しています。これは文書のベース URL を基準に解決されるため、`https://example.com/welcome/shapes/square.js` と記述した場合と同じです。この `<script>` 要素が `https://example.com/welcome/` のページに含まれている場合は、値は代わりに `https://example.com/welcome/shapes/square.js` と同じになります。

指定子の解決処理が次のような指定子に遭遇すると、

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

`imports` の項目を 1 つずつ（ここでは 1 つだけ）調べ、`"square"` キーが要求された指定子と一致することを確認し、その値を使用します。これにより、`https://example.com/shapes/square.js` にあるモジュールがリクエストされます。

#### 接頭辞照合

キーが末尾に `/` を持つ場合（この場合、値も末尾に `/` が必要です）、文字列として照合するほか、接頭辞としても照合できます。

例えば、次のインポートマップを考えてみましょう。

```json
{
  "imports": {
    "shapes/": "./shapes/"
  }
}
```

ここでも、相対 URL の値はインポートマップの構文解析時に文書の URL を基準に解決されるため、`https://example.com/shapes/` と記述した場合と同じです。

指定子の解決処理が次のような指定子に遭遇すると、

```js
import { name as squareNameFour } from "shapes/square.js";
```

`imports` の項目を 1 つずつ（ここでは 1 つだけ）調べ、`"shapes/"` キーが要求された指定子の接頭辞であることを確認し、対応する値を使います。キーの接頭辞は指定子から取り除かれ、`square.js` が残ります。この残りの部分は、対応する値（`https://example.com/shapes/`）をベース URL として解決されます。これにより、`https://example.com/shapes/square.js` にあるモジュールがリクエストされます。

指定子の残りの部分が、マッピング先の値の範囲から「抜け出す」ことは許可されません。例えば次のように記述した場合、

```js
import { name as squareNameFour } from "shapes/../square.js";
```

残りの部分は `../square.js` です。これを `https://example.com/shapes/` を基準に解決すると `https://example.com/square.js` になります。マッピング先の値が最終 URL の接頭辞ではなくなるため、この場合、解決処理はエラーを発生させます。

`/` で終わるキーも文字列として照合できます。例えば次のとおりです。

```js
import { name as squareNameFour } from "shapes/";
```

解決処理はこれを `https://example.com/shapes/` に解決し、その URL をリクエストします。

繰り返しになりますが、`imports` オブジェクトの項目は常に、キー A がキー B の接頭辞であれば B が A より前になるように並べ替えられます。そのため、次のインポートマップでは、

```json
{
  "imports": {
    "shapes/": "./shapes/",
    "shapes/square/": "./squares/"
  }
}
```

モジュール指定子 `shapes/square/index.js` は、`shapes/` よりも具体的な `shapes/square/` に優先して一致します。

#### 文字列照合と接頭辞照合の併用

Node.js では、[`main`](https://docs.npmjs.com/cli/configuring-npm/package-json#main)<sup>(英語)</sup> ファイルを読み込むパッケージ自体をインポートするか、（`package.json` に [`exports`](https://docs.npmjs.com/cli/configuring-npm/package-json#exports)<sup>(英語)</sup> フィールドがない場合は）パッケージ内のファイルをインポートできます。

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

この場合、`lodash` と `lodash/` 接頭辞に対して別々の項目を指定する必要があります。

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

#### URL の一般的な再マッピング

キーは素の名前である必要はなく、絶対 URL や相対 URL も指定できます。次のインポートマップを考えてみましょう。

```json
{
  "imports": {
    "https://www.unpkg.com/lodash/": "/node_modules/lodash-es/"
  }
}
```

指定子の解決処理が次のような指定子に遭遇すると、

```js
import { name as squareNameFour } from "https://www.unpkg.com/lodash/fp.js";
```

対応する接頭辞の項目を使い、これを `https://example.com/node_modules/lodash-es/fp.js` に解決します。別バージョンのモジュールでモックできるため、テストに特に役立ちます。

URL の再マッピングは、モジュール名からハッシュを取り除く場合にも役立ちます。ウェブサイトで使うスクリプトファイルは、キャッシュしやすくするため、ハッシュ付きのファイル名にすることがよくあります。この方法の欠点は、モジュールが変更されると、ハッシュ付きファイル名でそれをインポートしているモジュールもすべて更新または再生成する必要があることです。その結果、更新が連鎖し、ネットワークリソースを浪費する可能性があります。

インポートマップは、この問題を簡単に解決できます。アプリケーションやスクリプトは、特定のハッシュ付きファイル名ではなく、ハッシュのないモジュール名に依存します。次のようなインポートマップで、実際のスクリプトファイルに対応付けます。

```json
{
  "imports": {
    "/node/srcs/application.js": "/node/srcs/application-fg7744e1b.js",
    "/node/srcs/dependency.js": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

`dependency.js` が変更されると、ファイル名に含まれるハッシュも変わります。この場合は、変更されたモジュール名を反映するためにインポートマップを更新するだけで済みます。JavaScript のソースコードは引き続き `"/node/srcs/dependency.js"` からインポートします。

残念ながら、インポートマップは「接尾辞一致」に対応していません。そのため「前のパスにかかわらず、`application.js` を `application-fg7744e1b.js` に置き換える」といった指定はできません。以降は `./application.js` や `https://example.com/node/srcs/application.js` などではなく、常に `/node/srcs/application.js` からインポートする必要があります。最終的には、バンドラーでコードをコンパイルしてインポートを書き換える方が便利な場合もあります。

### `scopes` オブジェクト

`imports` オブジェクトはグローバルです。アプリケーション内のどこにあるモジュールでも再マッピングが適用されるため、同じ `lodash` 指定子は常に同じモジュールに解決されます。

実際には、異なるモジュールから `lodash` パッケージの別々のバージョンをインポートしたい場合があります。例えば、パッケージ A は `lodash` の v3 に、パッケージ B は v4 に依存しているとします。Node.js では、各パッケージに独自の `node_modules` を持たせてこれを実現します。

```plain
https://example.com
└── node_modules
    ├── lodash          <-- v4; アプリケーションとパッケージ B が使用
    ├── package-a
    │   └── node_modules
    │       └── lodash  <-- v3; パッケージ A が使用
    └── package-b
```

ソースコードを書き換えずにこの `node_modules` をウェブサイトへ直接配置するには、`package-a` 内のモジュールからの `lodash` 指定子が、`package-b` からの指定子とは別の場所に解決されるようインポートマップを記述する必要があります。これは、次のように `scopes` オブジェクトを使って実現します。

```json
{
  "imports": {
    "lodash": "/node_modules/lodash/lodash.js"
  },
  "scopes": {
    "/node_modules/package-a/": {
      "lodash": "/node_modules/package-a/lodash/lodash.js"
    }
  }
}
```

`scopes` オブジェクトでは、各キーがスコープを表し、各値には `imports` と同様にモジュール指定子マップを指定します。`imports` のキーと同じく、次の規則があります。

- スコープが `/` で終わらない場合は、インポート元の URL と文字列として照合されます。`/` で終わる場合は、インポート元の URL の接頭辞としても照合されます。
- スコープのキーは URL 解決後に辞書順の降順で並べ替えられます。そのため、より具体的な接頭辞が優先されます。

異なる点は、スコープは有効な URL でなければならず、文書のベース URL を基準に解決されることです。

スコープは順番に試されます。要求された指定子に対応するインポートマッピングがスコープにない場合、解決処理は次に一致するスコープがあればそちらへ進みます。インポート元に一致するスコープキーがない場合や、一致するすべてのスコープにインポートマッピングがない場合は、グローバルな `imports` マップが使われます。ただし、この処理中に項目が見つかり、その値が `null`（例えば、有効な URL でない場合）なら、代替のマッピングには移らず、解決は直ちに失敗します。

例えば、上の例のスコープキー `/node_modules/package-a/` は `https://example/node_modules/package-a/` に解決されます。`https://example.com/node_modules/package-a/index.js` にあるモジュールに次のコードが含まれている場合、

```js
import _ from "lodash";
```

解決処理は優先順位に従って `scopes` を調べ、インポート元の URL がスコープキーの接頭辞に一致することを確認し、その指定子マップを使います。このマップでは `lodash` は v3 の `https://example.com/node_modules/package-a/lodash/lodash.js` に対応付けられています。

一方、`https://example.com/node_modules/package-b/index.js` にあるモジュールに同じ行が含まれている場合、解決処理は `scopes` を調べても一致するキーを見つけられず、グローバルな `imports` マップに戻ります。その結果、v4 の `https://example.com/node_modules/lodash/lodash.js` がインポートされます。

スコープキーはインポート元の URL との照合にのみ使われ、他の URL の解決や検証の基準 URL にはなりません。最終的なマッピング先 URL がスコープのパスと一致する必要はなく、相対マッピング先 URL は引き続きインポートマップを含むスクリプトのベース URL を基準に解決されます。

## JavaScript 以外のリソースの読み込み

[モジュール](/ja/docs/Web/JavaScript/Guide/Modules#json_モジュールのインポート)のガイドでは、JavaScript 以外のリソースをインポートできる[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)構文を紹介しました。コア言語で指定されているリソース型は `type: "json"` と `type: "text"` です。

```js
import colors from "./colors.json" with { type: "json" };
```

ウェブ上ではこれに加えて `type: "css"` があり、CSS ファイルを {{domxref("CSSStyleSheet")}} オブジェクトとしてインポートできます。

```js
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets = [styles];
```

コア言語の仕様は、一般に `type` 属性について多くを定めていません（`type: "json"` なら JSON モジュール、`type: "text"` ならテキストモジュールにしなければならない、という要件を除きます）。一方、HTML 仕様はセキュリティ上の理由から、ブラウザーに厳密なモジュール型チェックを要求しています。`type: "json"` または `type: "css"` を指定した場合、対応する `Content-Type`（`application/json` や `text/css` など）でリソースを配信する必要があります。型を指定しない場合も、JavaScript または WebAssembly（`text/javascript` または `application/wasm`）として配信する必要があります。

上の `type: "css"` の例で、ファイルが実際には JavaScript（`Content-Type` が `text/javascript`）として配信されていた場合、インポートは失敗します。これにより、意図しないコードを誤って実行することを防げます。詳しくは[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)のリファレンスを参照してください。

Node.js や Deno などの他の環境もウェブの動作を模倣することが多く、厳密な型の一致を要求します。

ウェブ上では、`type` 属性によってリクエストの[宛先](/ja/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest)も変わります。そのため、同じ文字列の指定子でも、異なるモジュールコンテンツが返されることがあります。

```js
import code from "./module";
// Sec-Fetch-Dest: script を含むリクエストを送信
// サーバーは JavaScript を返す場合がある: `export default 1;`

import data from "./module" with { type: "json" };
// Sec-Fetch-Dest: json を含むリクエストを送信
// サーバーは JSON を返す場合がある: `{ "value": 1 }`

import styles from "./module" with { type: "css" };
// Sec-Fetch-Dest: style を含むリクエストを送信
// サーバーは CSS を返す場合がある: `.value { color: green; }`

import text from "./module" with { type: "text" };
// Sec-Fetch-Dest: text を含むリクエストを送信
// サーバーはテキストを返す場合がある: `Hello world!`
```

## モジュールのキャッシュ

[モジュールのキャッシュ](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph)により、インポート時に同じモジュールとその状態を再利用できます。ウェブ上でどのリクエストがモジュールを共有するかは、HTML 仕様で定義されています。

ブラウザーでは、[モジュールマップ](https://html.spec.whatwg.org/multipage/webappapis.html#module-map)<sup>(英語)</sup>のキーに、解決済みのリクエスト URL とモジュール型が使われます。そのため、異なる指定子文字列が同じモジュールを指す場合があります。例えば、次の 2 つのリクエストは異なる指定子文字列を使っていますが、同じモジュールを指します（解決先を変更するインポートマップがない場合）。

```js
// -- https://example.com/main.js --
import * as config1 from "./config.js";
import * as config2 from "https://example.com/config.js";

console.log(config1 === config2); // true
```

キーには[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)で選択されたモジュール型も含まれます。そのため、`{ type: "json" }` を指定した URL のリクエストは、型を指定しない場合（暗黙的に JavaScript）とキャッシュ項目を共有しません。文書とワーカーはそれぞれ別のモジュールマップを持つため、ページとそのワーカーで同じモジュールをインポートしても、モジュールの変数は共有されません。

モジュールのキャッシュは [HTTP キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)とは別のものです。HTTP キャッシュはレスポンスのバイト列を再利用できますが、モジュールのキャッシュはモジュールの識別性と状態を再利用します。新しい文書では、ソースが HTTP キャッシュから取得された場合でも、モジュールが再評価されることがあります。反対に、`Cache-Control: no-store` を指定しても、すでに評価されたモジュールがインポートごとに再実行されるわけではありません。

ブラウザーは、同じソースコードを取得する場合でも、クエリー文字列やフラグメントが異なる URL を別々のモジュールとして扱います。

```js
import * as config1 from "./config.js?version=1";
import * as config2 from "./config.js?version=2";

console.log(config1 === config2); // false
```

これにより、同じソースコードから 2 つのモジュールインスタンスが作成されます。それ以降の依存関係は引き続き共有されます。例えば、両方のインスタンスが `"./logger.js"` をインポートすると、その指定子はどちらからも同じ URL に解決されるため、`logger.js` は共有されます。

[読み込み時のエラー](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#読み込みで発生するエラー)について、[HTML 仕様](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script)<sup>(英語)</sup>では、HTTP エラーレスポンスを含む取得失敗をモジュールマップから削除し、後のインポートで再試行できるようにすることが求められています。ただし、HTTP キャッシュからエラーレスポンスが再び返される可能性はあります。一方、構文解析エラーはモジュールマップに保持されるため、同じモジュールを再試行しても修正済みのソースは取得されません。

## `import.meta` オブジェクト

[モジュール](/ja/docs/Web/JavaScript/Guide/Modules#モジュールのメタデータ)のガイドでは [`import.meta`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta) オブジェクトも紹介し、そのプロパティは_すべて_ホスト環境で定義されると説明しました。

モジュールを基準とする場所にリソースがある場合は、{{domxref("URL/URL", "URL()")}} コンストラクターと [`import.meta.url`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta) を使います。

```js
// -- modules/set-user.js --
const apiURL = new URL("../api/set-user", import.meta.url);

export async function setUser(name) {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error(`Unable to set user: ${response.status}`);
  }
}
```

ウィンドウ内では、`fetch("../api/set-user")` のように `fetch()` に直接渡した相対 URL は、文書のベース URL を基準に解決されます。呼び出しを含む JavaScript モジュールを基準に解決されるわけではありません。URL を明示的に構築すれば、そのモジュールをインポートするページに関係なくリソースの場所を指定できます。

ホストのモジュール解決規則に従ってモジュール指定子を解決するには、[`import.meta.resolve()`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) を使います。例えば、`"shapes"` を定義するインポートマップがあるブラウザーでは、`import.meta.resolve("shapes")` は解決された URL を返します。`import()` と異なり、このメソッドはモジュールを読み込んだり評価したりせずに指定子を解決します。

## 関連情報

- [HTML の `<script>` 要素](/ja/docs/Web/HTML/Reference/Elements/script)
- [`<script type="importmap">`](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap)
- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)
