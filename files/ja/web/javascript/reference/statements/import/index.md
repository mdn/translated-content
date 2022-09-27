---
title: import
slug: Web/JavaScript/Reference/Statements/import
---

{{jsSidebar("Statements")}}

**`import`** 文は、他のモジュールによって[エクスポート](/ja/docs/Web/JavaScript/Reference/Statements/export)された読み込み専用のライブバインディングをインポートするために使用します。インポートされたモジュールは、宣言するかどうかにかかわらず、{{JSxRef("Strict_mode","Strict モード")}}になります。`import` 文は、スクリプトに `type="module"` がない限り、埋め込みスクリプトで使用できません。インポートされたバインディングは、バインディングをエクスポートしたモジュールによって更新されるため、ライブバインディングと呼ばれます。

また、`type="module"` のスクリプトを必要としない動的 **`import()`** という関数のようなものもあります。

{{HTMLElement("script")}} タグの `nomodule` 属性を使用すると、下位互換性を確保できます。

## 構文

<pre class="syntaxbox brush:js notranslate">import <em>defaultExport</em> from "<em>module-name</em>";
import * as <em>name</em> from "<em>module-name</em>";
import { <em>export1</em> } from "<em>module-name</em>";
import { <em>export1</em> as <em>alias1</em> } from "<em>module-name</em>";
import { <em>export1</em> , <em>export2</em> } from "<em>module-name</em>";
import { <em>foo</em> , <em>bar</em> } from "<em>module-name/path/to/specific/un-exported/file</em>";
import { <em>export1</em> , <em>export2</em> as <em>alias2</em> , [...] } from "<em>module-name</em>";
import <em>defaultExport</em>, { export1 [ , [...] ] } from "<em>module-name</em>";
import <em>defaultExport</em>, * as <em>name</em> from "<em>module-name</em>";
import "<em>module-name</em>";
var promise = import("<em>module-name</em>");
</pre>

- `defaultExport`
  - : モジュールからのデフォルトのエクスポートを参照する名前。
- `module-name`
  - : インポートするモジュール。モジュールがある `.js` ファイルへの相対または絶対パス名です。バンドラーによっては、拡張子を加えることが許され、あるいは求められることがあります。環境を確認してください。シングルクォートとダブルクォートだけが使えます。
- `name`
  - : インポートを参照するとき名前空間のように用いられるモジュールオブジェクトの名前。
- `exportN`
  - : インポートするエクスポートの名前。
- `aliasN`
  - : 指定されたインポートを参照する名前。

## 説明

`name` パラメータは、エクスポートを参照する名前空間のように用いられる「モジュールオブジェクト」の名前です。`export` パラメータは名前がつけられたエクスポートをそれぞれ指定します。それに対して、`import * as name` 構文はすべてをインポートします。構文の意味を明らかにするため、下記に例を示します。

### モジュールのコンテンツすべてをインポートする

下記のコードは、`myModule` を現在のスコープに加え、`/modules/my-module.js` のファイルのモジュールからのエクスポートすべてを含めます。

```js
import * as myModule from '/modules/my-module.js';
```

エクスポートにアクセスするには、モジュール名（ここでは「myModule」）を名前空間として用いることになります。たとえば、上記でインポートされたモジュールがエクスポートに `doAllTheAmazingThings()` を含む場合は、下記のように呼び出します。

```js
myModule.doAllTheAmazingThings();
```

### モジュールからエクスポートをひとつインポートする

`myExport` という名前のオブジェクトまたは値が、`my-module` から暗黙的 (モジュール全体がエクスポートされた場合) あるいは {{jsxref("Statements/export", "export")}} 文を用いて明示的にエクスポートされると、`myExport` が現在のスコープに加えられます。

```js
import {myExport} from '/modules/my-module.js';
```

### モジュールから複数のエクスポートをインポートする

下記のコードは、`foo` と `bar` を現在のスコープに加えます。

```js
import {foo, bar} from '/modules/my-module.js';
```

### エクスポートを扱いやすいエイリアスにしてインポートする

インポートするときエクスポートの名前を変えることができます。例えば下記のコードは、エクスポートを `shortName` として現在のスコープに加えます。

```js
import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
```

### インポートする際に複数のエクスポートの名前を変える

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

| 仕様書                                                                           |
| -------------------------------------------------------------------------------- |
| {{SpecName("ESDraft", "#sec-imports", "Imports")}}             |
| {{SpecName("ESDraft", "#sec-import-calls", "Import Calls")}} |

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
