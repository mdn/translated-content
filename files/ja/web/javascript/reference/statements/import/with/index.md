---
title: インポート属性
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{jsSidebar("Statements")}}

> [!NOTE]
> この提案の以前のバージョンでは、`assert` キーワードを `with` の代わりに使用していました。アサーション機能は現在では標準ではありません。詳細は[ブラウザー互換性表](#ブラウザーの互換性)を調べてください。

**インポート属性**機能は、モジュールの読み込み方法についてランタイムに、モジュール解決、取得、構文解析、評価などの動作を指示します。[`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言、[`export...from`](/ja/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) 宣言、動的 [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) で対応しています。

## 構文

属性は、既定のインポート、名前空間のインポートなど、あらゆる種類の `import`/`export from` 文に添付することができます。モジュール指定子文字列に続いて指定し、`with` キーワードを接頭辞として記載します。

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
{"name":"John"}
```

モジュールは、配信された [MIME タイプ](/ja/docs/Web/HTTP/MIME_types)のみに基づいて識別および解釈されます。URL のファイル拡張子は、ファイルの種類を識別するために使用できません。この場合、MIME タイプは `application/json` であり、ファイルが JSON であり、JSON として解釈する必要があることをブラウザーに指示します。何らかの理由（サーバーが乗っ取られた、または偽物であるなど）でサーバーの応答の MIME タイプが `text/javascript`（JavaScript ソース用）に設定されている場合、ファイルはコードとして構文解析および実行されます。"JSON" ファイルに実際に悪意のあるコードが含まれている場合、`import` 宣言が意図せずに外部コードを実行し、深刻なセキュリティ上の脅威をもたらすことになります。

インポート属性は、モジュールをどのように検証すべきかを開発者が明示的に指定できるようにすることで、この問題を修正します。例えば、属性を指定していない上記のインポート文は、実際には失敗します。

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

代わりに、このファイルが JSON を含まなければならないことをランタイムに指示する属性を指定する必要があります。モジュールのタイプ（MIME タイプ経由）を検証するには、`type` と呼ばれる属性キーを呼び出します。モジュールが JSON モジュールであることを検証するには、値は `"json"` です。

> [!NOTE]
> 実際の `type` 属性値は、MIMEタイプに直接対応しているわけではありません。[HTML 仕様](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed)では、別個の指定がされています。

したがって、上記のコードは次のように書き直すべきです。

```js
import data from "https://example.com/data.json" with { type: "json" };
```

`type` 属性は、モジュールをフェッチする方法を変更しますが（ブラウザーは `{{HTTPHeader("Accept")}}: application/json` ヘッダーを付けてリクエストを送信します）、モジュールを解析または評価する方法は変更しません。実行時には、レスポンスの MIME タイプが指定された JSON としてモジュールを構文解析することがすでにわかっています。この属性は、`data.json` モジュールが実際には JSON モジュールであることを事後的に確認するためにのみ使用されます。例えば、レスポンスヘッダーが `Content-Type: text/javascript` に変更された場合、プログラムは上記のエラーと同様のエラーで失敗します。

仕様では、明示的に `type: "json"` に対応していると宣言しています。モジュールが `type: "json"` であると主張され、実行時にインポートに失敗しなければ、それは JSON として解釈できるはずです。しかし、それ以外の場合の動作要件はありません。 `type: "json"` 属性のないインポートの場合、実行時にセキュリティが課題となっていなければ、実行時に JSON として解釈できる可能性があります。一方、ブラウザーは暗黙のうちにモジュールが JavaScript であると想定しており、モジュールが JavaScript 以外（例えば、JSON）である場合は失敗します。これにより、モジュール型が常に厳密に検証され、セキュリティリスクを防止します。実際には、Node や Deno のようなブラウザー以外のランタイムは、ブラウザーの意味づけに配置され、 `type` を JSON モジュールに強制します。

`type` 属性は、他にも対応しているモジュール型があります。例えば、HTML 仕様では {{domxref("CSSStyleSheet")}} オブジェクトをインポートする `css` タイプも定義しています。

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

属性の構文は拡張できるように設計されています。言語では「型」のみを指定しますが、ランタイムでは他にも属性を読み取り、処理することができます。属性は、モジュール読み込みプロセスの各段階でランタイムの動作を変更することができます。

- 解決: この属性はモジュール指定子（`from` 句の文字列）の一部です。そのため、同じ文字列パスが指定された場合でも、異なる属性によってまったく異なるモジュールが読み込まれる可能性があります。例えば、[TypeScript は resolution-mode 属性に対応しています](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types)。

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- 取得: 例えば、CSS モジュールは [`destination`](/ja/docs/Web/API/Request/destination) を `"style"`に設定して取得し、JSON モジュールは `destination: "json"` に設定して取得します。これは、同じ出力先 URL が指定された場合でも、サーバーは異なるコンテンツを返す可能性があるということを意味します。
- 構文解析と評価: 実行時に、モジュールの構文解析と評価の方法を決定するために、この属性を使用することがあります。

ただし、未知の属性を使用することはできません。未知の属性が検出されると、これまでエラーとされていたランタイムでエラーが発生します。

## 例

### JSOM モジュールを type 属性でインポート

`data.json`:

```json
{
  "name": "John"
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
