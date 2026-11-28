---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**`import()`** 構文は、一般に「動的インポート」と呼ばれ、ECMAScript モジュールを非同期かつ動的に[読み込み](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#グラフの読み込み)、モジュールではない環境でも使用できる関数風の式です。

[静的なインポート宣言](/ja/docs/Web/JavaScript/Reference/Statements/import)とは異なり、動的インポートでは必要なときにのみモジュールが評価され、構文もより柔軟です。

## 構文

```js-nolint
import(moduleName)
import(moduleName, options)
```

`import()` 呼び出しは関数呼び出しによく似た構文ですが、 `import` 自体はキーワードであり、関数ではありません。`const myImport = import` のようなエイリアスを作成することはできず、 {{jsxref("SyntaxError")}} が発生します。

[末尾カンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)は、実行環境が `options` にも対応している場合にのみ許可されます。[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

### 引数

- `moduleName`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。その値は、インポートするモジュールを指定する[文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列への強制変換)に強制変換されます。指定子の解決方法はホストによって定められますが、常に静的な[インポート宣言](/ja/docs/Web/JavaScript/Reference/Statements/import)と同じアルゴリズムに従います。
- `options` {{optional_inline}}
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。評価結果は `undefined` またはインポートオプションを格納するオブジェクトです。以下のキーが認識されます。
    - `with`
      - : [インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)。

### 返値

以下のプロミスを返します。

- 参照されるモジュールが正常に読み込まれ、[評価](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#モジュールの評価)された場合、[モジュール名前空間オブジェクト](#モジュール名前空間オブジェクト)（すなわち `moduleName` からのすべてのエクスポートを格納したオブジェクト）で履行されます。
- `moduleName` の[文字列への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列への強制変換)で例外が発生した場合、その例外で拒否されます。
- モジュールの[取得](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#グラフの読み込み)に失敗した場合、ホストが定めるエラーで拒否されます（Node では通常 `Error`、ブラウザーでは `TypeError` が使用されます）。一般的な原因には以下があります。
  - ファイルシステムベースのモジュールシステム（Node.js など）では、ファイルシステムへのアクセスに失敗した場合（アクセス権がない、ファイルが見つからない、など）。
  - ウェブベースのモジュールシステム（ブラウザーなど）では、ネットワーク要求が失敗した場合（インターネットに接続されていない、CORS の問題、など）または HTTP エラーが発生した場合（404、500 など）。
- 構文解析または[リンク](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#モジュールのリンク)に失敗した場合、該当するエラー（通常は {{jsxref("SyntaxError")}}）で拒否されます。
- 参照されるモジュールまたはその依存関係の評価で例外が発生した場合、その例外で拒否されます。

> [!NOTE]
> `import()` が同期的にエラーを発生させることはありません。

## 解説

import 宣言の構文 (`import something from "somewhere"`) は静的で、インポートされたモジュールはインポート元モジュールの依存関係として先に評価されます。動的インポートを使用すると、import 宣言の構文上の制約を回避し、条件付きまたはオンデマンドでモジュールを読み込むことができます。動的インポートを使用する理由として、次のようなものがあります。

- 静的インポートによってコードの読み込みが著しく遅くなったり、プログラムのメモリー使用量が増えたりする一方、インポートするコードが必要になる可能性が低い、または後になってから必要になる場合。
- 読み込み時点ではインポート対象のモジュールが存在しない場合。
- インポート指定子の文字列を動的に構築する必要がある場合（静的インポートでは静的指定のみ対応しています）。
- インポートされるモジュールに副作用があり、ある条件を満たさない限りその副作用を望まない場合（モジュールに副作用を持たせないことが推奨されますが、依存モジュールの副作用を制御できないこともあります）。
- モジュール以外の環境（例: `eval` やスクリプトファイル）にいるとき。

動的インポートは必要なときだけ使用してください。静的な形式は初期の依存関係の読み込みに適しており、静的解析ツールや[ツリーシェイキング](/ja/docs/Glossary/Tree_shaking)の恩恵を受けやすくなります。読み込んだコードの実行を、使用するまで遅らせることだけが目的なら、[`import defer`](/ja/docs/Web/JavaScript/Reference/Statements/import/defer) の使用を検討してください。

ファイルがモジュールとして実行されていない場合（HTML ファイルから参照する場合は、script 要素に `type="module"` が必要です）、静的な import 宣言は使用できません。一方、非同期の動的インポート構文はスクリプトとモジュールの両方で利用できるため、以下の実行コンテキストの制限に従えば、モジュールではない環境にもモジュールをインポートできます。

`options` 引数を使用すると、さまざまなインポートオプションを指定できます。例えば、[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)などです。

```js
import("./data.json", { with: { type: "json" } });
```

動的モジュールインポートは、すべての実行コンテキストで許可されているわけではありません。
例えば、`import()` はメインスレッド、共有ワーカー、専用ワーカーで使用できますが、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)や[ワークレット](/ja/docs/Web/API/Worklet)内で呼び出すと、プロミスが拒否されます。

import 文のフェーズ修飾子は、動的インポートでも使用できます。

- [`import.defer()`](/ja/docs/Web/JavaScript/Reference/Operators/import/defer)
- [`import.source()`](/ja/docs/Web/JavaScript/Reference/Operators/import/source)

これらの構文は、それぞれ別種の式として扱われます。

### モジュール名前空間オブジェクト

_モジュール名前空間オブジェクト_ は、モジュールから曖昧さなく解決できるすべてのエクスポートを表すオブジェクトです。エクスポート名は固定されていますが、その値はライブバインディングを反映します。必要になったときに作成され、モジュールの評価前、リンク中に作成されることもあります。モジュール名前空間オブジェクトにアクセスする方法は 2 つあります。[名前空間インポート](/ja/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) を通じる方法と、動的インポートの履行値を通じる方法です。

モジュール名前空間オブジェクトは[封印された](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)、[プロトタイプが `null`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) のオブジェクトです。これは、オブジェクトのすべての文字列キーがモジュールのエクスポートに対応し、余分なキーがないことを意味します。すべてのキーは辞書順に[列挙可能](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)で（つまり、[`Array.prototype.sort()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description) のデフォルトの動作で）、デフォルトエクスポートは `default` というキーで利用できます。さらに、モジュール名前空間オブジェクトには [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティがあり、その値は `"Module"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

文字列プロパティは構成不可ですが、{{jsxref("Object.getOwnPropertyDescriptors()")}} で記述子を取得すると、書き込み可能として示されます。ただし、モジュール名前空間オブジェクトのプロパティに新しい値を代入することはできないため、実質的に読み取り専用です。この動作は、静的インポートが[ライブバインディング](/ja/docs/Web/JavaScript/Reference/Statements/import#インポートした値はエクスポートしたモジュールだけが変更できる)を作成することを反映しています。値をエクスポートするモジュールはその値を再代入できますが、インポートするモジュールはできません。記述子でプロパティが書き込み可能と示されるのは、値が変化する可能性を反映しているためです。構成不可かつ書き込み不可のプロパティは一定でなければならないからです。例えば、エクスポートされた変数に新しい値を代入すると、モジュール名前空間オブジェクトを通じて新しい値を確認できます。

それぞれの（正規化された）モジュール指定子は固有のモジュール名前空間オブジェクトに対応するため、一般的には以下のようになります。

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

ただし、1 つだけ例外的なケースがあります。プロミスは決して [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) で履行されないため、`my-module.js` モジュールが `then()` という関数をエクスポートすると、その関数は[プロミス解決](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function)プロセスの一部として、動的インポートのプロミスが履行されると自動的に呼び出されます。

```js
// -- my-module.js --
export function then(resolve) {
  console.log("then() called");
  resolve(1);
}
```

```js
// -- main.js --
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  // "then() called" をログに出力
  console.log(mod === mod2); // false
});
```

> [!WARNING]
> モジュールから `then()` という名前の関数をエクスポートしないでください。これにより、モジュールは動的にインポートされたときと静的にインポートされたときで異なる動作をします。

この積極的なキャッシュにより、JavaScript コードは複数回インポートされても一度だけしか実行されません。その後のインポートでは（同じ環境で前回のインポートが成功している場合）、HTTP リクエストやディスクアクセスも発生しません。JavaScript 環境全体を再起動せずにモジュールを再インポートして再評価する必要がある場合、モジュール指定子に一意のクエリー引数を使用する方法があります。これは URL 指定子に対応するブラウザー以外の実行環境でも動作します。

```js
import(`/my-module.js?t=${Date.now()}`);
```

これにより、長時間実行されるアプリケーションでメモリーリークが発生する可能性があることに注意してください。エンジンはモジュール名前空間オブジェクトを安全にガベージコレクションできないためです。現在、モジュール名前空間オブジェクトのキャッシュを手動でクリアする方法はありません。

また、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用してモジュールのソースコードをテキストとして取得し、モジュールの型に応じて手動で評価することもできます。

- JavaScript モジュールについては、ブラウザーではソースコードを [`blob:` URL](/ja/docs/Web/API/URL/createObjectURL_static) として動的にインポートしたり、Node.js では [`vm.Module`](https://nodejs.org/docs/latest/api/vm.html#class-vmmodule)<sup>(英語)</sup> を使用して評価したりすることができます。
- JSON モジュールについては、{{jsxref("JSON.parse()")}} を使用してソースコードを構文解析できます。
- CSS モジュールについては、新しい {{domxref("CSSStyleSheet")}} オブジェクトを作成し、その [`replace()`](/ja/docs/Web/API/CSSStyleSheet/replace) メソッドを使用して、ソースコードを格納することができます。

ただし、これは意味的には動的インポートとは異なります。[フェッチの出力先](/ja/docs/Web/API/Request/destination)、[CSP](/ja/docs/Web/HTTP/Guides/CSP)、[モジュールの解決](/ja/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)といったユーザーエージェントの設定が、正しく適用されない可能性があるからです。

モジュールは 3 段階でインポートされます。読み込み（モジュールとその依存関係の取得と構文解析）、リンク（インポートの解決とバインディングの準備）、評価（構文解析済みコードの実行）です。評価の失敗はキャッシュされるため、同じモジュールを後からインポートすると、エラーが伝播し、再実行されません。リンクは再試行できますが、同じ JavaScript モジュールレコードのグラフでは同じリンクエラーが発生します。

読み込みの失敗がキャッシュされるかどうかは、ホストと失敗の種類によって異なります。ブラウザーでは、モジュールマップは HTTP キャッシュとは別です。[HTML 仕様書](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script)<sup>(英語)</sup>では、HTTP エラーレスポンスを含む取得の失敗をモジュールマップから削除し、後からのインポートで再試行できるようにすることが求められています。ただし、HTTP キャッシュからキャッシュ済みのエラーレスポンスが返ることはあります。一方、構文解析エラーはモジュールマップに保持されるため、同じモジュールを再試行しても修正済みのソースは取得されません。

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

インポートされたモジュール名前空間オブジェクトを分割代入する場合、`default` は予約語であるため、`default` キーの名前を変更する必要があります。

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

### 動的インポートでのインポート属性の使用

[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)は、`import()` 構文の第二引数として指定できます。

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`import` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/import)
