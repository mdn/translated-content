---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Operators")}}

**`import()`** 構文は、よくダイナミックインポートと呼ばれますが、非同期かつ動的に、 ECMAScript モジュールを、潜在的にモジュールではない環境に読み込めるようにする関数風の式です。

[宣言スタイルのもの](/ja/docs/Web/JavaScript/Reference/Statements/import)とは異なり、動的インポートは必要なときだけ評価され、より柔軟な構文が可能になります。

## 構文

```js-nolint
import(moduleName)
```

`import()` 呼び出しは関数呼び出しによく似た構文ですが、 `import` 自体はキーワードであり、関数ではありません。`const myImport = import` のようなエイリアスを作成することはできず、 {{jsxref("SyntaxError")}} が発生します。

### 引数

- `moduleName`
  - : インポート元モジュール。指定子の評価はホスト次第ですが、常に静的な[インポート宣言](/ja/docs/Web/JavaScript/Reference/Statements/import)と同じアルゴリズムに従います。

### 返値

[モジュール名前空間オブジェクト](#モジュール名前空間オブジェクト)、すなわち `moduleName` からのすべてのエクスポートを格納したオブジェクトで履行されるプロミスを返します。

`import()` の評価で同期的にエラーが発生することはありません。`moduleName` は[文字列に強制される](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、強制が発生した場合、そのエラーとともにプロミスが拒否されます。

## 解説

import宣言の構文（`import something from "somewhere"`）は静的で、常にモジュールが 読み込まれた時点で評価される結果となります。ダイナミックインポートを使用すると、import宣言の構文の硬直性を回避し、条件付きまたはオンデマンドでモジュールを読み込むことができます。以下のような理由で、動的インポートが使用することがあります。

- 静的にインポートするとコードの読み込みが著しく遅くなる場合で、インポートしているコードが必要になる可能性が低い、または後日必要になる可能性がある場合。
- 静的にインポートすると、プログラムのメモリー使用量が大幅に増える場合で、インポートするコードが必要になる可能性が低い場合。
- 読み込むモジュールが読み込む時点で存在しない場合。
- インポート指定子文字列を動的に構築する必要がある場合。（静的インポートでは静的指定のみ対応しています。）
- インポートされるモジュールに副作用があり、ある条件を満たさない限りその副作用を望まない場合。 （モジュールに副作用を持たないことを推奨しますが、モジュールの依存関係でこれを制御できないこともあります）。
- モジュール以外の環境（例: `eval` やスクリプトファイル）にいるとき。

動的インポートは必要なときだけ使用してください。静的な形は、初期の依存関係を読み込むのに適しており、静的解析ツールや[ツリーシェイキング](/ja/docs/Glossary/Tree_shaking)の恩恵を受けやすくなります。

ファイルがモジュールとして実行されていない場合（HTML ファイルで参照される場合、script タグに `type="module"` が必要）、静的な import 宣言は使用できませんが、非同期の動的 import 構文は常に利用できるので、モジュール以外の環境にもモジュールをインポートすることができます。

### モジュール名前空間オブジェクト

_モジュール名前空間オブジェクト_ は、モジュールからのすべてのエクスポートを記述しているオブジェクトです。これは静的なオブジェクトで、モジュールが評価されるときに作成されます。モジュールの名前空間オブジェクトにアクセスする方法は 2 つあります。[名前空間インポート](/ja/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`)、または動的インポートの履行値を通じてです。

モジュール名前空間オブジェクトは[封印された](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)、[プロトタイプが `null`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)のオブジェクトです。これは、オブジェクトのすべての文字列キーが、モジュールのエクスポートに対応し、余分なキーがないことを意味しています。すべてのキーは辞書順に[列挙可能](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)で（すなわち[`Array.prototype.sort()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description) の既定の動作）、デフォルトエクスポートは `default` というキーで利用できます。さらに、モジュール名前空間オブジェクトには [`@@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティがあり、値は `"Module"` で、 {{jsxref("Object.prototype.toString()")}} で使用されるものです。

文字列プロパティは構成不可能で、{{jsxref("Object.getOwnPropertyDescriptors()")}} を使用してその記述子を取得すると書き込みが可能になります。しかし、プロパティを新しい値に割り当てることはできないため、実質的に読み取り専用となります。この動作は、静的インポートが「[ライブ結合](/ja/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)」- 値をエクスポートするモジュールは再割り当てることができるが、インポートするモジュールはできない - を作成するという事実を反映したものです。構成不可、書き込み不可のプロパティは一定でなければならないため、プロパティの書き込み可否は、値が変化する可能性を反映します。例えば、変数のエクスポートされた値を再代入することができ、新しい値はモジュール名前空間オブジェクトで監視することができます。

それぞれのモジュール指定子は固有のモジュール名前空間オブジェクトに対応するため、一般的には以下のようになります。

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

ただし、1つだけ奇妙な場合があります。プロミスは決して [thenable] (/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) に履行されることはないので、もし `my-module.js` モジュールが `then()` という関数をエクスポートすると、その関数はダイナミックインポートのプロミスが履行されると自動的に呼ばれることになります。

```js
// my-module.js
export function then() {
  console.log("then() called");
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

返されたオブジェクトから "default" のキーを再構築し、名前を変更する必要があります。

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
  Array.from({ length: 10 }).map((_, index) =>
    import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`import` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/import)
