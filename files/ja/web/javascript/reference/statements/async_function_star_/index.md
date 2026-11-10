---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`async function*`** 宣言は、新しい非同期ジェネレーター関数を指定された名前への{{Glossary("binding", "バインド")}}として作成します。

非同期ジェネレーター関数は、[`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)を使用して定義することもできます。

{{InteractiveExample("JavaScript デモ: async function* 宣言", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str += val;
  }
  console.log(str);
}

generate();
// 予想される結果: "abc"
```

## 構文

```js-nolint
async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> 非同期ジェネレーター関数には、対応するアロー関数はありません。

> [!NOTE]
> `function` と `*` は別個のトークンであるため、[ホワイトスペースまたは改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)で区切ることができます。ただし、`async` と `function` の間に改行文字を挿入することはできません。そうすると、セミコロンが[自動的に挿入される](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)ため、`async` が識別子となり、残りの部分が `function*` の宣言となってしまいます。

### 引数

- `name`
  - : 関数名です。
- `param` {{optional_inline}}
  - : 関数の構文上の引数名です。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#関数の引数)を参照してください。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。

## 解説

`async function*` 宣言は、{{jsxref("AsyncGeneratorFunction")}} オブジェクトを作成します。非同期ジェネレーター関数が呼び出されるたびに、[非同期イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)に準拠した新しい {{jsxref("AsyncGenerator")}} オブジェクトが返されます。`next()` が呼び出されるたびに、イテレーターの結果オブジェクトに解決される{{jsxref("Promise", "プロミス")}}が返されます。

非同期ジェネレーター関数は、[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)と[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)の機能を組み合わせたものです。関数の内部で [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) と [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) のキーワードの両方を使うことができます。これにより、ジェネレーター関数の遅延の性質を利用しながら、`await` で人間工学的に非同期タスクを処理することができるようになります。

非同期ジェネレーターからプロミスが生成されると、イテレーターの結果のプロミスの最終的な状態は、生成されたプロミスの状態と一致します。例えば次のようになります。

```js
async function* foo() {
  yield Promise.reject(new Error("failed"));
}

foo()
  .next()
  .catch((e) => console.error(e));
```

生成されたプロミスが拒否された場合、イテレーターの結果も拒否されるため、`Error: failed` がログ出力されます。非同期ジェネレーターの解決結果の `value` プロパティは、別のプロミスにはなりません。

`async function*` の宣言は、{{jsxref("Statements/function", "関数")}}の宣言と同様に動作します。つまり、スコープの先頭に[巻き上げ](/ja/docs/Glossary/Hoisting)られるため、そのスコープ内のどこからでも呼び出すことができ、特定のコンテキストでのみ再宣言が可能です。

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

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncGeneratorFunction")}}
- [`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("AsyncGenerator")}}
