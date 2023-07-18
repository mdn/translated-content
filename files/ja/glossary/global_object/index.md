---
title: Global object (グローバルオブジェクト)
slug: Glossary/Global_object
---

グローバルオブジェクトは、{{glossary("global scope", "グローバルスコープ")}}上に常時存在する{{glossary("object", "オブジェクト")}}です。

JavaScript では、グローバルオブジェクトが常に定義されています。ウェブブラウザー上でスクリプトがグローバル変数を生成する時、グローバルオブジェクトのメンバーとして作成されます。 ({{Glossary("Node.js")}} ではこの限りではありません。) グローバルオブジェクトが実装する{{Glossary("interface", "インターフェイス")}}は、どのようなコンテキストでスクリプトが実行されているかによって変化します。例えば、

- ウェブブラウザーでは、明示的にバックグランドタスクとして起動されるコードを除き、 {{domxref("Window")}} がグローバルオブジェクトになります。ウェブにおける JavaScript コードのほとんどはこのケースに該当します。
- {{domxref("Worker")}} 内で実行されるコードでは {{domxref("WorkerGlobalScope")}} オブジェクトがグローバルオブジェクトになります。
- {{Glossary("Node.js")}} で実行されるスクリプトの場合、 [`global`](https://nodejs.org/api/globals.html#globals_global) と呼ばれるオブジェクトがグローバルオブジェクトになります。

## ブラウザー内の `window` オブジェクト

ブラウザー内では `window` オブジェクトがグローバルオブジェクトです。グローバル変数や関数はすべて、 `window` オブジェクトのプロパティとしてアクセスすることができます。

### グローバル変数へのアクセス

```js
var foo = "foobar";
foo === window.foo; // true を返す
```

グローバル変数 `foo` を定義した後、その値を `window` オブジェクトから、変数名である `foo` を使用し、グローバルオブジェクト `window.foo` のプロパティ名として直接アクセスすることができます。

#### 解説

グローバル変数 `foo` は `window` オブジェクト内に、次のように格納されます。

```js
foo: "foobar";
```

### グローバル関数へのアクセス

```js
function greeting() {
  console.log("Hi!");
}

window.greeting(); // ふつうに greeting(); を呼び出すのと同じ
```

上記の例では、グローバル関数が `window` オブジェクトの中に*プロパティ*としてどのように格納されるかを説明しています。 `greeting` というグローバル関数を作成し、 `window` オブジェクトを使用して呼び出します。

#### 解説

グローバル関数 `greeting` は `window` オブジェクトに次のように格納されています。

```js
greeting: function greeting() {
  console.log("Hi!");
}
```

- [MDN 用語集](/ja/docs/Glossary)

  - {{glossary("global scope", "グローバルスコープ")}}
  - {{glossary("object", "オブジェクト")}}

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
