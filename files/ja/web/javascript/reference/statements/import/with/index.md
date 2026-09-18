---
title: インポート属性
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

> [!NOTE]
> この提案の以前のバージョンでは、`assert` キーワードを `with` の代わりに使用していました。アサーション機能は現在では標準ではありません。詳細は[ブラウザー互換性表](#ブラウザーの互換性)を調べてください。

**インポート属性**機能は、モジュールの読み込み方法についてランタイムに、モジュール解決、取得、構文解析、評価などの動作を指示します。[`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言、[`export...from`](/ja/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) 宣言、動的 [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) で対応しています。

属性は、デフォルトのインポート、名前空間のインポートなど、あらゆる種類の `import`/`export from` 文に添付することができます。モジュール指定子文字列に続いて指定し、`with` キーワードを接頭辞として記載します。`import()` と組み合わせて使用する場合、属性は `options` 引数内の `with` プロパティとして指定されます。

## 構文

```js-nolint
import { names } from "module-name" with {};
import { names } from "module-name" with { key: "data" };
import { names } from "module-name" with { key: "data", key2: "data2" };
import { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };

export { names } from "module-name" with {};
export { names } from "module-name" with { key: "data" };
export { names } from "module-name" with { key: "data", key2: "data2" };
export { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };
```

### 引数

- `keyN`
  - : 属性のキーです。識別子または文字列リテラルです。すべてのキーは一意でなければならず、ランタイムで認識されている必要があります。
- `"dataN"`
  - : 属性値。文字列リテラルでなければなりません。

### 例外

- {{jsxref("SyntaxError")}}
  - : 静的インポートで、未対応の `key` が指定されました。

- {{jsxref("TypeError")}}
  - : 動的インポートで、未対応の `key` が指定されました。

なお、対応しているキーに対して未対応の値を指定した場合でも、キーによっては例外が発生することがあります。

## 解説

インポート属性は、ランタイムに具体的なモジュールをどのように読み込むべきかを指示します。

主な用途は、JSON モジュールや CSS モジュールなどの JS 以外のモジュールを読み込むことです。以下の文を考えてみましょう。

```js
import data from "https://example.com/data.json";
```

ウェブ上では、import 文はそれぞれ HTTP リクエストを発生させます。レスポンスは JavaScript 値として準備され、ランタイムによってプログラムで利用できるようになります。例えば、レスポンスは次のように見えます。

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

モジュールは、配信された[メディア種別 (MIME タイプ)](/ja/docs/Web/HTTP/Guides/MIME_types) のみに基づいて識別および解釈されます。URL のファイル拡張子は、ファイルの種類を識別するために使用できません。この場合、MIME タイプは `application/json` であり、ファイルが JSON であり、JSON として解釈する必要があることをブラウザーに指示します。何らかの理由（サーバーが乗っ取られた、または偽物であるなど）でサーバーの応答のメディア種別が `text/javascript`（JavaScript ソース用）に設定されている場合、ファイルはコードとして構文解析および実行されます。"JSON" ファイルに実際に悪意のあるコードが含まれている場合、`import` 宣言が意図せずに外部コードを実行し、深刻なセキュリティ上の脅威をもたらすことになります。

インポート属性は、モジュールをどのように検証すべきかを開発者が明示的に指定できるようにすることで、この問題を修正します。
特に、`type` 属性を使用すると、ファイルが特定のメディア種別で配信されているかどうかを検証でき、異なるメディア種別が使用されていた場合はインポートが失敗します。

例えば、上記のコードを次のように記述することで、期待される種別が `"json"` であることを指定することができ、`text/javascript`（または `application/json` 以外のメディア種別）で配信された場合、インポートは失敗することになります：

```js
import data from "https://example.com/data.json" with { type: "json" };
```

`type` 属性を使用すると、モジュールを JSON、CSS、プレーンテキスト（および暗黙的に JavaScript）として配信するように指定します。

その他の属性も対応している可能性があり、[読み込みプロセスの各段階の挙動に影響を与える可能性があります](#import_属性の意図された意味づけ)。
未知の属性が使用された場合、構文エラーが発生します。

### 標準属性

利用できる属性は、言語や実行環境によって異なります。
ECMAScript 標準では、[`type` 属性が `"json"` および `"text"` という値を持つものとして定義されています](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule)。

HTML 仕様書では、[`type` 属性の値として `"json"`、`"text"`、`"css"` が定義されています](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — これらはブラウザー環境で対応している属性です。

#### JSON モジュール (`{ type: "json" }`)

`json` 型は、インポートするファイルに JSON が含まれている必要があることを示します。
次のコードを使用すると、ファイルから JSON を `data` オブジェクトに読み込むことができます：

```js
import data from "https://example.com/data.json" with { type: "json" };
```

ファイルが `"application/json"` 以外のメディア種別をつけて配信された場合、インポートは失敗します。

`type` 属性は、モジュールを取得する方法を変更しますが（ブラウザーは `{{HTTPHeader("Accept")}}: application/json` ヘッダーを付けてリクエストを送信します）、モジュールを解析または評価する方法は変更しません。実行時には、レスポンスの MIME タイプが指定された JSON としてモジュールを構文解析することがすでにわかっています。この属性は、`data.json` モジュールが実際には JSON モジュールであることを事後的に確認するためにのみ使用されます。例えば、レスポンスヘッダーが `Content-Type: text/javascript` に変更された場合、プログラムは上記のエラーと同様のエラーで失敗します。

仕様では、明示的に `type: "json"` に対応していると宣言しています。モジュールが `type: "json"` であると主張され、実行時にインポートに失敗しなければ、それは JSON として解釈できるはずです。

しかし、それ以外の場合の動作要件はありません。 `type: "json"` 属性のないインポートの場合、実行時にセキュリティが課題となっていなければ、実行時に JSON として解釈できる可能性があります。

一方、ブラウザーは暗黙のうちにモジュールが JavaScript であると想定しており、モジュールが JavaScript 以外（例えば、JSON）である場合は失敗します。これにより、モジュール型が常に厳密に検証され、セキュリティリスクを防止します。
Node や Deno のようなブラウザー以外のランタイムは、ブラウザーの意味づけに配置され、`type` を JSON モジュールに強制します。

言い換えれば、`type` を省略してファイルを `"application/json"` としてインポートしようとすると、通常、同様に次のようなエラーが発生します。

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS モジュール (`{ type: "css" }`)

HTML 仕様書では、`css` 型が定義されており、これによりスタイルシートがスクリプト内に {{domxref("CSSStyleSheet")}} オブジェクトとしてインポートされます。

下記コードは、スタイルをインポートして文書に追加する方法を示しています。
`example_styles.css` が `"text/css"` 以外のメディア種別で配信された場合、インポート時に例外が発生します。

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

通常は、CSS モジュールをワーカーにインポートすることには対応していません。これは、CSSOM 仕様ではウィンドウコンテキストでのみ `CSSStyleSheet` が公開されているためです。

#### テキストモジュール (`{ type: "text" }`)

`text` 型を使用すると、モジュールのソースを文字列値としてインポートすることができます。
以下のコードを使用すると、ファイルからテキストを読み込んで `text` 文字列に格納することができます。

```js
import text from "https://example.com/file.txt" with { type: "text" };
```

ファイルは `{{HTTPHeader("Accept")}}: text/plain` というヘッダーでリクエストされますが、レスポンスの `{{HTTPHeader("Content-Type")}}` ヘッダーの値は無視され、すべてのファイルは UTF-8 として解釈されます。ファイルには、JavaScript コード（プレーンテキストとして扱われます）を含め、あらゆるテキストデータを含めることができます。

可能であれば、後でインスタンス化するためのコンパイル済みモジュールを取得するには [`import source`](/ja/docs/Web/JavaScript/Reference/Statements/import/source) を、モジュールの同期評価を遅延させるには [`import defer`](/ja/docs/Web/JavaScript/Reference/Statements/import/defer) を使用することを推奨します。`with { type: "text" }` を使用するということです。そのモジュールが他の場所でインポートされていた場合でも、キャッシュを再利用できなくなります。また、文字列ソースのユーザーランドでの評価では、厳格な [CSP](/ja/docs/Web/HTTP/Guides/CSP) 設定と互換性がないことがあります。

### import 属性の意図された意味づけ

属性は、モジュール読み込みプロセスの各段階でランタイムの動作を変更することができます。

- 解決: この属性はモジュール指定子（`from` 句の文字列）の一部です。そのため、同じ文字列パスが指定された場合でも、異なる属性によってまったく異なるモジュールが読み込まれる可能性があります。例えば、[TypeScript は resolution-mode 属性に対応しています](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types)。

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- 取得: 例えば、CSS モジュールは [`destination`](/ja/docs/Web/API/Request/destination) を `"style"`に設定して取得し、JSON モジュールは `destination: "json"` に設定して取得します。これは、同じ出力先 URL が指定された場合でも、サーバーは異なるコンテンツを返す可能性があるということを意味します。
- 構文解析と評価: 実行時に、モジュールの構文解析と評価の方法を決定するために、この属性を使用することがあります。

## 例

### JSON モジュールを type 属性でインポート

`data.json`:

```json
{
  "name": "Shilpa"
}
```

`index.html`:

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <script type="module">
      import data from "./data.json" with { type: "json" };

      const p = document.createElement("p");
      p.textContent = `名前: ${data.name}`;
      document.body.appendChild(p);
    </script>
  </head>
  <body></body>
</html>
```

ローカルの HTTP サーバーを始めるには（[トラブルシューティング](/ja/docs/Web/JavaScript/Guide/Modules#トラブルシューティング)を参照）、`index.html` ページに移動します。ページに `John` と表示されているはずです。

> [!NOTE]
> JSON モジュールは、1 つしかデフォルトエクスポートできません。名前付きインポート（`import { name } from "data.json"` など）はできません。

### 動的インポートでインポート属性を使用

`import()` 構文の 2 つ目となる引数としても、インポート属性を受け入れることができます。

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

なお、静的インポートと同様に、動的インポートも環境（ページやワーカーなど）の存続期間中キャッシュされます。このデータが変更される可能性がある場合（最新のニュースやユーザーのクレジットなど）、代わりに[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import)
- [Import attributes proposal](https://github.com/tc39/proposal-import-attributes)
- [JSON modules proposal](https://github.com/tc39/proposal-json-modules)
- [Import Text proposal](https://github.com/tc39/proposal-import-text)
