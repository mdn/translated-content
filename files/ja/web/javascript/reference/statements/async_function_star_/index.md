---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{jsSidebar("Statements")}}

**`async function*`** 宣言は非同期ジェネレーター関数を定義し、これは {{jsxref("Global_Objects/AsyncGenerator","AsyncGenerator")}} オブジェクトを返します。

非同期ジェネレーター関数は、{{jsxref("AsyncGeneratorFunction")}} コンストラクターや [`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)の構文を使用して定義することもできます。

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## 構文

```js-nolint
async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

> [!NOTE]
> 非同期ジェネレーター関数には、対応するアロー関数はありません。

### 引数

- `name`
  - : 関数名です。
- `param` {{optional_inline}}
  - : 関数の構文上の引数名です。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

非同期ジェネレーター関数は、[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)と[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)の機能を組み合わせたものです。関数の内部で [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) と [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) のキーワードの両方を使うことができます。これにより、ジェネレーター関数の遅延の性質を利用しながら、`await` で人間工学的に非同期タスクを処理することができるようになります。

`function*` で宣言された通常のジェネレーター関数とは異なり、非同期ジェネレーター関数は {{jsxref("Global_Objects/AsyncGenerator","AsyncGenerator")}} オブジェクトを返します。[非同期反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)に準拠しています。`next()` を呼び出すたびに、イテレーターの結果オブジェクトに解決する {{jsxref("Promise")}} を返します。

非同期ジェネレーターからプロミスが生成されると、イテレーターの結果のプロミスの最終的な状態は、生成されたプロミスの状態と一致します。例えば次のようになります。

```js
async function* foo() {
  yield Promise.reject(1);
}

foo()
  .next()
  .catch((e) => console.error(e));
```

生成されたプロミスが拒否された場合、イテレーターの結果も拒否されるため、`1` がログ出力されます。非同期ジェネレーターの解決結果の `value` プロパティは、別のプロミスにはなりません。

`async function*` 宣言は、そのスコープの先頭に[巻き上げ](/ja/docs/Glossary/Hoisting)され、そのスコープ内のどこでも呼び出すことができます。

## 例

### 非同期ジェネレーター関数の宣言

非同期ジェネレーター関数は、常に結果のプロミスを生成します。それぞれの `yield` 手順が同期的であってもです。

```js
async function* myGenerator(step) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield 0;
  yield step;
  yield step * 2;
}

const gen = myGenerator(2);
gen
  .next()
  .then((res) => {
    console.log(res); // { value: 0, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 2, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 4, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: undefined, done: true }
    return gen.next();
  });
```

### 非同期ジェネレーター関数を用いて一連のファイルを読み込む

この例では、Node の [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) モジュールを使用して、一連のファイルを読み、リクエストされたときだけそのコンテンツにアクセスするようにしています。

```js
async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const stats = await fs.stat(file);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(file, "utf8"),
      };
    }
  }
}

const files = readFiles(".");
console.log((await files.next()).value);
// Possible output: { name: 'file1.txt', content: '...' }
console.log((await files.next()).value);
// Possible output: { name: 'file2.txt', content: '...' }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Operators/async_function*", "async function*")}} 式
- {{jsxref("AsyncGeneratorFunction")}} オブジェクト
- [イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("GeneratorFunction")}} オブジェクト
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} オブジェクト
- {{jsxref("Functions", "関数", "", 1)}}
