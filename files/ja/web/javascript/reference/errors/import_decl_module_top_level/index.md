---
title: "SyntaxError: import declarations may only appear at top level of a module"
slug: Web/JavaScript/Reference/Errors/import_decl_module_top_level
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 例外 "import declarations may only appear at top level of a module" は、import 宣言がモジュールの最上位レベルにない場合に発生します。これは、import 宣言が他の構文（関数やブロックなど）を含むか、多くの場合で言えば、現在のファイルがモジュールとして扱われていないことが原因である可能性があります。

## エラーメッセージ

```plain
SyntaxError: Cannot use import statement outside a module (V8-based)
SyntaxError: import declarations may only appear at top level of a module (Firefox)
SyntaxError: Unexpected identifier 'x'. import call expects one or two arguments. (Safari)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

関数やブロックなど、`import` 宣言が別の構造の中に含まれている場合が考えられます。`import` 宣言は、モジュールの最上位に記述する必要があります。モジュールを条件付きでインポートしたり、必要に応じて遅延インポートしたりしたい場合は、代わりに [動的インポート](/ja/docs/Web/JavaScript/Reference/Operators/import) を使用してください。

もし `import` がすでにコードの最上位にある場合は、そのファイルがモジュールとして解釈されていない可能性があります。ランタイムは、ファイルがモジュールであるかどうかを判断するために外部からのヒントを要求します。そのようなヒントを提供する方法はいくつかあります。

- ファイルを HTML から直接読み込む場合は、[`<script>`](/ja/docs/Web/HTML/Reference/Elements/script) タグに `type="module"` 属性が設定されていることを確認してください。
- ノードでファイルを実行する場合は、ファイルの拡張子が `.mjs` であるか、あるいは最も近い `package.json` ファイルに `"type": "module"` フィールドが含まれていることを確認してください。
- ファイルを [ワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)として実行する場合は、`Worker()` コンストラクターを `type: "module"` オプションをつけて呼び出すようにしてください。
- このファイルを別のモジュールからインポートしてください。

それ以外にも、原因として考えられるのは、コンパイラー（TypeScript など）をつけて `import` を記述している際に、誤ってソースファイルを実行してしまった場合です。`import` 宣言は通常、プログラムの先頭に現れるため、パーサーがまずこれを検知し、エラーを報告してしまうのです。必ずソースファイルをコンパイルし、コンパイルされたファイルを実行するようにしてください。

## 例

### 条件付きインポート

Python と同様に、他の構文の内部で `import` を使用することはできません。

```js example-bad
if (writeOutput) {
  import fs from "fs"; // SyntaxError
}
```

`import` を最上位に移動するか、動的インポートを使用するかしてください。

```js example-good
if (writeOutput) {
  import("fs").then((fs) => {
    // use fs
  });
}
```

### モジュールではないスクリプトでのインポート

HTML からスクリプトを読み込む場合は、必ず `<script>` タグに `type="module"` 属性を追加してください。

```html
<script type="module" src="main.js"></script>
```

何らかの理由でスクリプトをモジュールに移行できない場合は、動的インポートを使用することができます。

```js example-good
async function main() {
  const myModule = await import("./my-module.js");
  // use myModule
}

main();
```

## 関連情報

- [モジュールの使用](/ja/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import", "import()")}}
