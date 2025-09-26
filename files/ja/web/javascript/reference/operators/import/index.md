---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`import()`** 構文は、よくダイナミックインポートと呼ばれますが、非同期かつ動的に、 ECMAScript モジュールを、潜在的にモジュールではない環境に読み込めるようにする関数風の式です。

[宣言スタイルのもの](/ja/docs/Web/JavaScript/Reference/Statements/import)とは異なり、動的インポートは必要なときだけ評価され、より柔軟な構文が可能になります。

## 構文

```js-nolint
import(moduleName)
import(moduleName, options)
```

`import()` 呼び出しは関数呼び出しによく似た構文ですが、 `import` 自体はキーワードであり、関数ではありません。`const myImport = import` のようなエイリアスを作成することはできず、 {{jsxref("SyntaxError")}} が発生します。

[末尾カンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)は、ランタイムが `options` にも対応している場合にのみ許可されます。[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

### 引数

- `moduleName`
  - : インポート元モジュール。指定子の評価はホスト次第ですが、常に静的な[インポート宣言](/ja/docs/Web/JavaScript/Reference/Statements/import)と同じアルゴリズムに従います。
- `options`
  - : インポートオプションを格納するオブジェクト。以下のキーが認識されます。
    - `with`
      - : [インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)。

### 返値

以下のプロミスを返します。

- 参照されるモジュールが正常に読み込まれ評価された場合、[モジュール名前空間オブジェクト](#モジュール名前空間オブジェクト)（すなわち `moduleName` からのすべてのエクスポートを格納したオブジェクト）で履行されます。
- `moduleName` の[文字列への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)で例外が発生した場合、その例外で拒否されます。
- モジュールの取得と読み込みが何らかの理由で失敗した場合、実装定義のエラーで拒否されます（Node は汎用の `Error` を使用し、すべてのブラウザーでは `TypeError` を使用します）。一般的な原因には以下があります。
  - ファイルシステムベースのモジュールシステム（Node.js など）では、ファイルシステムへのアクセスが失敗した場合（許可拒否、ファイルが見つからない、など）。
  - ウェブベースのモジュールシステム（ブラウザーなど）では、ネットワーク要求が失敗した場合（インターネットに接続されていない、CORS の問題、など）または HTTP エラーが発生した場合（404、500 など）。
- 参照されるモジュールの評価で例外が発生した場合、その例外で拒否されます。

> [!NOTE]
> `import()` が同期的にエラーを発生させることはありません。

## 解説

import 宣言の構文 (`import something from "somewhere"`) は静的で、常にモジュールが 読み込まれた時点で評価される結果となります。ダイナミックインポートを使用すると、import宣言の構文の硬直性を回避し、条件付きまたはオンデマンドでモジュールを読み込むことができます。以下のような理由で、動的インポートが使用することがあります。

- 静的にインポートするとコードの読み込みが著しく遅くなる場合で、インポートしているコードが必要になる可能性が低い、または後日必要になる可能性がある場合。
- 読み込むモジュールが読み込む時点で存在しない場合。
- インポート指定子文字列を動的に構築する必要がある場合。（静的インポートでは静的指定のみ対応しています。）
- インポートされるモジュールに副作用があり、ある条件を満たさない限りその副作用を望まない場合。 （モジュールに副作用を持たないことを推奨しますが、モジュールの依存関係でこれを制御できないこともあります）。
- モジュール以外の環境（例: `eval` やスクリプトファイル）にいるとき。

動的インポートは必要なときだけ使用してください。静的な形は、初期の依存関係を読み込むのに適しており、静的解析ツールや[ツリーシェイキング](/ja/docs/Glossary/Tree_shaking)の恩恵を受けやすくなります。

ファイルがモジュールとして実行されていない場合（HTML ファイルで参照される場合、script タグに `type="module"` が必要）、静的な import 宣言は使用できませんが、非同期の動的 import 構文は常に利用できるので、モジュール以外の環境にもモジュールをインポートすることができます。

`options` 引数を使用すると、さまざまなインポートオプションを指定できます。例えば、[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)などです。

```js
import("./data.json", { with: { type: "json" } });
```

動的モジュールインポートは、すべての実行コンテキストで許可されているわけではありません。例えば、`import()` はメインスレッド、共有ワーカー、専用ワーカーで使用できますが、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)や[ワークレット](/ja/docs/Web/API/Worklet)内で呼び出すと例外が発生します。

### モジュール名前空間オブジェクト

_モジュール名前空間オブジェクト_ は、モジュールからのすべてのエクスポートを記述しているオブジェクトです。これは静的なオブジェクトで、モジュールが評価されるときに作成されます。モジュールの名前空間オブジェクトにアクセスする方法は 2 つあります。[名前空間インポート](/ja/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`)、または動的インポートの履行値を通じてです。

モジュール名前空間オブジェクトは[封印された](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)、[プロトタイプが `null`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)のオブジェクトです。これは、オブジェクトのすべての文字列キーが、モジュールのエクスポートに対応し、余分なキーがないことを意味しています。すべてのキーは辞書順に[列挙可能](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)で（すなわち[`Array.prototype.sort()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description) の既定の動作）、デフォルトエクスポートは `default` というキーで利用できます。さらに、モジュール名前空間オブジェクトには [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティがあり、値は `"Module"` で、 {{jsxref("Object.prototype.toString()")}} で使用されるものです。

文字列プロパティは構成不可能で、{{jsxref("Object.getOwnPropertyDescriptors()")}} を使用してその記述子を取得すると書き込みが可能になります。しかし、プロパティを新しい値に再割り当てることはできないため、実質的に読み取り専用となります。この動作は、静的インポートが「[ライブ結合](/ja/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)」- 値をエクスポートするモジュールは再割り当てることができるが、インポートするモジュールはできない - を作成するという事実を反映したものです。プロパティの書き込み可否は、値が変化する可能性を反映します。構成不可能で書き込み不可のプロパティは一定でなければならないためです。例えば、変数のエクスポートされた値を再代入することができ、新しい値はモジュール名前空間オブジェクトで監視することができます。

それぞれの（正規化された）モジュール指定子は固有のモジュール名前空間オブジェクトに対応するため、一般的には以下のようになります。

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

ただし、1つだけ奇妙な場合があります。プロミスは決して [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) に履行されることはないので、もし `my-module.js` モジュールが `then()` という関数をエクスポートすると、その関数は[プロミス解決](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function)プロセスの一部として、ダイナミックインポートのプロミスが履行されると自動的に呼ばれることになります。

```js
// my-module.js
export function then(resolve) {
  console.log("then() called");
  resolve(1);
}
```

```js
// main.js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  // Logs "then() called"
  console.log(mod === mod2); // false
});
```

> [!WARNING]
> モジュールから `then()` という名前の関数をエクスポートしないでください。これにより、モジュールは動的にインポートされたときと静的にインポートされたときで異なる動作をします。

この積極的なキャッシュにより、JavaScript コードは複数回インポートされても一度だけしか実行されないことが保証されます。将来のインポートは HTTP リクエストやディスクアクセスにすら発展しません。JavaScript 環境全体を再起動せずにモジュールを再インポートして再評価する必要がある場合、一つの可能なトリックは、モジュール指定子で一意のクエリーパラメーターを使用することです。これは URL 指定子をサポートするブラウザー以外のランタイムでも動作します。

```js
import(`/my-module.js?t=${Date.now()}`);
```

これにより、長時間実行されるアプリケーションでメモリーリークが発生する可能性があることに注意してください。エンジンはモジュール名前空間オブジェクトを安全にガベージコレクションできないためです。現在、モジュール名前空間オブジェクトのキャッシュを手動でクリアする方法はありません。

モジュール名前空間オブジェクトのキャッシュは、*正常に*読み込まれ、リンクされたモジュールにのみ適用されます。モジュールは 3 つのステップでインポートされます：読み込み（モジュールの取得）、リンク（主にモジュールの解析）、評価（解析されたコードの実行）。評価の失敗のみがキャッシュされます。モジュールの読み込みやリンクに失敗した場合、次のインポートで再度読み込みとリンクを試行する場合があります。ブラウザーは取得操作の結果をキャッシュする場合としない場合がありますが、一般的な HTTP セマンティクスに従うべきなので、そのようなネットワーク障害の処理は {{domxref("Window/fetch", "fetch()")}} の失敗を処理することと異なるべきではありません。

## 例

### 副作用のあるモジュールだけをインポート

```js
(async () => {
  if (somethingIsTrue) {
    // 副作用のあるモジュールをインポート
    await import("/modules/my-module.js");
  }
})();
```

自分のプロジェクトで ESM をエクスポートするパッケージを使用する場合、副作用がある場合のみインポートすることもできます。この場合、パッケージのエントリーポイントファイル（およびこのファイルがインポートするすべてのファイル）内のコードのみが実行されます。

### デフォルトをインポート

インポートされたモジュール名前空間オブジェクトを構造分解する場合、`default` は予約語であるため、`default` キーの名前を変更する必要があります。

```js
(async () => {
  if (somethingIsTrue) {
    const {
      default: myDefault,
      foo,
      bar,
    } = await import("/modules/my-module.js");
  }
})();
```

### ユーザー操作に応じたオンデマンドのインポート

この例では、ユーザーの操作（この場合はボタンのクリック）に基づいてページに機能を読み込ませ、そのモジュール内の関数を呼び出す方法を示しています。この機能を実装するための唯一の方法というわけではありません。`import()` 関数は `await` にも対応しています。

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    import("/modules/my-module.js")
      .then((module) => {
        module.loadPageInto(main);
      })
      .catch((err) => {
        main.textContent = err.message;
      });
  });
}
```

### 環境に応じて様々な形のモジュールをインポート

サーバーサイドレンダリングなどの処理では、サーバーとブラウザーで異なるグローバルやモジュールと対話するため、異なるロジックを読み込む必要がある場合があります（例えば、ブラウザーのコードは `document` や `navigator` などのウェブ API に、サーバーコードはサーバーファイルシステムにアクセスすることができます）。条件付きの動的インポートによって、このようなことが可能になります。

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### リテラルでない指定子を持つモジュールのインポート

動的インポートでは、モジュール指定子として、文字列リテラルに限らず、任意の式で指定することができます。

ここでは、 `/modules/module-0.js`、`/modules/module-1.js` など、10 個のモジュールを並列に読み込んで、それぞれがエクスポートする `load` 関数を呼び出しています。

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`import` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/import)
