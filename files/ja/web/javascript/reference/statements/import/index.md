---
title: import
slug: Web/JavaScript/Reference/Statements/import
page-type: javascript-statement
browser-compat: javascript.statements.import
l10n:
  sourceCommit: 096dd3505a1ebd8407380caf75984028d9fbee57
---

{{jsSidebar("Statements")}}

静的な **`import`** 宣言は、他のモジュールによって[エクスポート](/ja/docs/Web/JavaScript/Reference/Statements/export)された読み込み専用のライブバインディングをインポートするために使用します。インポートしたバインディングは、バインディングをエクスポートしたモジュールによって更新される一方、インポートしているモジュールによって再代入することができないために、「*ライブバインディング*」と呼ばれています。

ソースファイルの中で`import`宣言を使用するためには、ランタイムがそのファイルを[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)と見なす必要があります。HTMLでは、{{HTMLElement("script")}}タグに `type="module"` を加えることがこれに相当します。モジュールは、宣言するかどうかにかかわらず、{{JSxRef("Strict_mode","Strict モード")}}になります。

また、`type="module"` のスクリプトを必要としない動的な [**`import()`**](/ja/docs/Web/JavaScript/Reference/Operators/import) という関数のようなものもあります。

## 構文

```js-nolint
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : モジュールからのデフォルトのエクスポートを参照する名前。JavaScriptの識別子として有効な文字列でなければなりません。
- `module-name`
  - : インポートするモジュール。この指定子はホストが示した方法で評価されます。こちらはしばしばモジュールを含む `.js` ファイルへの相対または絶対 URL となっています。Node では、拡張子なしのインポートは `node_modules` におけるパッケージへの参照であることが多いです。バンドラーによっては、拡張子を省略してもよいことにしています。環境を確認してください。シングルクォートやダブルクォートで囲った文字列だけが使えます。
- `name`
  - : インポートを参照するとき名前空間のように用いられるモジュールオブジェクトの名前。JavaScriptの識別子として有効な文字列でなければなりません。
- `exportN`
  - : インポートするエクスポートの名前。`module-name`のモジュールがエクスポートしている内容によって、識別子にも文字列リテラルにもどちらにもなりえます。文字列リテラルの場合、有効な識別子を用いて別名を割り当てなければなりません。
- `aliasN`
  - : 指定されたインポートを参照する名前。JavaScriptの識別子として有効な文字列でなければなりません。

## 説明

`import` 宣言はモジュールのトップレベル（要するにブロックや関数などの中以外）にのみ書くことができます。パーサーが `import` 宣言をモジュール以外の文脈（例えば `type="module"` のない `<script>` タグ、`eval`、`new Function` など、「スクリプト」や「関数の本体」をパース時の目標として持つもの） で検出すると、`SyntaxError`を発生させます。モジュール以外の文脈でモジュールをロードするには、[ダイナミックインポート](/ja/docs/Web/JavaScript/Reference/Operators/import)という構文を代わりに使用してください。

`import`宣言は構文的に硬直したものとなっています。例えば、文字列リテラルしか指定子に使えなかったり、トップレベルでしか使用できなかったり、すべてのバインディングが識別子でなければならない、といった制限があります。この制限により、モジュールは評価する前に静的に解析してリンクさせることができます。これはモジュールを非同期にロードする上で鍵となる性質で、[トップレベル await](/ja/docs/Web/JavaScript/Guide/Modules#top_level_await) といった機能を実現させてくれています。

`import`宣言には4つの形式があります:

- [名前付き import](#名前付き_import): `import { export1, export2 } from "module-name";`
- [デフォルトの import](#デフォルトの_import): `import defaultExport from "module-name";`
- [名前空間の import](#名前空間の_import): `import * as name from "module-name";`
- [副作用の import](#副作用のためだけにモジュールをインポートする): `import "module-name";`

構文の意味を明らかにするため、下記に例を示します。

### 名前付き import

例えば `my-module` から `myExport` という名前の値が（`export * from "another.js"` などで暗黙的にせよ、 {{jsxref("Statements/export", "export")}} 文で明示的にせよ）エクスポートされている場合、次の例では `myExport` を現在のスコープに追加します。

```js
import { myExport } from "/modules/my-module.js";
```

一つのモジュールから複数の名前をインポートすることもできます。

```js
import { foo, bar } from "/modules/my-module.js";
```

インポートする際、エクスポートされている名前を変更することもできます。例えば次のように書くと、`shortName` を現在のスコープに追加します。

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

モジュールからエクスポートされている名前が、識別子としては無効な文字列リテラルになっていることがあります。その場合対象の名前を現在のスコープで使用するには、別名を付けなければなりません。

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **注意:** `import { x, y } from "mod"` は、 `import defaultExport from "mod"` して `defaultExport` から `x` と `y` を分割代入することと等価ではありません。名前付きのインポートとデフォルトのインポートは JavaScript のモジュールにおける別種の構文です。

### Default import

下記のコードは、複数のエクスポートを扱いやすいエイリアスにしてモジュールからインポートします。

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';
```

### 副作用のためだけにモジュールをインポートする

副作用だけのためにモジュール全体をインポートしたときは、何もインポートされません。モジュールのグローバルコードが実行されるだけで、実際の値はインポートされないのです。

```js
import '/modules/my-module.js';
```

これは[動的インポート](#dynamic_imports)にも対応しています。

```js
(async () => {
  if (somethingIsTrue) {
    // 副作用のためのインポートモジュール
    await import('/modules/my-module.js');
  }
})();
```

プロジェクトで ESM をエクスポートするパッケージを使用している場合は、副作用のためだけにインポートすることもできます。これにより、パッケージエントリーポイントファイル（およびインポートするすべてのファイル）のコードのみが実行されます。

### デフォルトをインポートする

デフォルトの {{jsxref("Statements/export", "export")}}（オブジェクト、関数、クラスなど）にも対応できます。`import` 文を用いて、そのようなデフォルトをインポートします。

もっとも単純なやり方は、デフォルトを直接インポートすることです。

```js
import myDefault from '/modules/my-module.js';
```

また、デフォルトの構文とともに上記のエイリアス（名前空間または名前つきのインポート）を用いることもできます。その場合は下記のように、デフォルトのインポートを先に宣言しなければなりません。

```js
import myDefault, * as myModule from '/modules/my-module.js';
// myModule は名前空間として使う
```

あるいは、次のような書き方もできます。

```js
import myDefault, {foo, bar} from '/modules/my-module.js';
// 特定の名前つきのインポート
```

[動的インポート](#dynamic_imports)を使用してデフォルトのエクスポートをインポートする場合、動作が少し異なります。返されたオブジェクトから "default" キーを破棄して名前を変更する必要があります。

```js
(async () => {
  if (somethingIsTrue) {
    const { default: myDefault, foo, bar } = await import('/modules/my-module.js');
  }
})();
```

### 動的インポート

標準のインポート構文は静的で、インポートされたモジュールのすべてのコードは、ロード時に常に評価されます。条件付きまたはオンデマンドでモジュールをロードしたい状況では、代わりに動的インポートを使用できます。以下に、動的インポートの使用を検討する必要がある理由をいくつか述べます。

- 静的にインポートすると、コードの読み込みが大幅に遅くなり、インポートするコードが必要になる可能性が低くなるか、後で必要になる可能性が低くなります。
- 静的にインポートすると、プログラムのメモリー使用量が大幅に増加し、インポートするコードが必要になる可能性が低くなります。
- ロード時にインポートするモジュールが存在しない場合。
- インポート指定子の文字列を動的に作成する必要がある場合。（静的インポートは静的指定子のみをサポートします。）
- インポートするモジュールに副作用があり、何らかの条件が真でない限り、それらの副作用を望まない場合。（モジュールに副作用がないことを推奨しますが、モジュールの依存関係でこれを制御できない場合があります。）

動的インポートは必要な場合にのみ使用してください。初期の依存関係をロードするには静的な形式が適していて、静的解析ツールや[ツリーシェイク](/ja/docs/Glossary/Tree_shaking)の恩恵をよりよく受けることができます。

モジュールを動的にインポートするために、`import` キーワードを関数として呼び出すことができます。この方法で使用すると、promise が返されます。

```js
import('/modules/my-module.js')
  .then((module) => {
    // module を使った何らかの処理
  });
```

この方法は `await` キーワードを使えます。

```js
let module = await import('/modules/my-module.js');
```

## 例

### 標準的なインポート

以下のコードは AJAX JSON リクエストの処理を支援する補助モジュールからインポートする方法を示しています。

#### モジュール: file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}
```

#### メインプログラム: main.js

```js
import { getUsefulContents } from '/modules/file.js';

getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); });
```

### 動的インポート

この例は、ユーザーのアクション（この場合はボタンクリック）に基づいて機能をページにロードし、そのモジュール内で関数を呼び出す方法を示しています。この機能を実装する方法はこれだけではありません。`import()` 関数は `await` もサポートしています。

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", e => {
    e.preventDefault();

    import('/modules/my-module.js')
      .then(module => {
        module.loadPageInto(main);
      })
      .catch(err => {
        main.textContent = err.message;
      });
  });
}
```

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("javascript.statements.import")}}

## 関連情報

- {{JSxRef("Statements/export", "export")}}
- [`import.meta`](/ja/docs/Web/JavaScript/Reference/Statements/import.meta)
- Limin Zhu, Brian Terlson and Microsoft Edge Team: [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- Hacks blog post by Jason Orendorff: [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
- Hacks blog post by Lin Clark: [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- Axel Rauschmayer's book: ["Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
- The Modern JavaScript Tutorial(javascript.info): [Export and Import](https://javascript.info/import-export)
