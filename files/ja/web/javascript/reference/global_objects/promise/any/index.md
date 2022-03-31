---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
tags:
  - JavaScript
  - メソッド
  - プロミス
  - リファレンス
  - ポリフィル
browser-compat: javascript.builtins.Promise.any
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/any
---
{{JSRef}}

`Promise.any()` は {{JSxRef("Promise")}} オブジェクトの集合の反復可能オブジェクトを取ります。そして、反復可能オブジェクトの中にあるいずれかのプロミスが履行されるとすぐに、履行されたプロミスの値で解決される単一のプロミスを返します。反復可能オブジェクトの中に履行されたプロミスがない場合 (与えられたプロミスがすべて拒否された場合)、返されたプロミスは {{JSxRef("AggregateError")}} という、個々のエラーをグループ化した {{JSxRef("Error")}} の新しいサブクラスで拒否されます。

{{EmbedInteractiveExample("pages/js/promise-any.html")}}

## 構文

    Promise.any(iterable);

### 引数

- `iterable`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能_iterable_プロトコル)オブジェクト、例えば {{JSxRef("Array")}} です。

### 返値

- 渡された*反復可能*オブジェクトが空の場合は、**拒否済みの** {{JSxRef("Promise")}} です。
- 渡された*反復可能*オブジェクトにプロミスがなかった場合は、**非同期に解決**される {{JSxRef("Promise")}} です。
- それ以外の場合は**待ち状態**の {{JSxRef("Promise")}} です。ここで返されたプロミスは、与えられた反復可能オブジェクト内のいずれかのプロミスが解決されたとき、またはすべてのプロミスが拒否されたとき、**非同期的に** (スタックが空になるとすぐに) 解決または拒否されます。

## 解説

このメソッドは、最初に履行されたプロミスを返すのに便利です。 1 つのプロミスが履行した後に短絡するので、 1 つのプロミスが見つかったら他のプロミスが履行されるのを待つことはありません。 {{JSxRef("Promise.all()")}} が履行値の*配列*を返すのとは異なり、 (少なくとも 1 つのプロミスが履行したと仮定すると) 履行値は 1 つしか得られません。これは、 1 つのプロミスが履行される必要があるが、どのプロミスが履行されるかは関係ないときに有益な場合があります。なお、もう一つの違いとして、このメソッドは*空の反復可能*オブジェクトを受け取ったときには拒否されます。

また、 {{JSxRef("Promise.race()")}} が最初に*決定*された値 (履行されたか拒否されたか) を返すのとは異なり、このメソッドは最初に*履行*された値を返します。このメソッドは、最初にプロミスが履行されるまで、すべての拒否されたプロミスを無視します。

### 履行の場合

返却されたプロミスは、引数として渡された*反復可能*オブジェクトの中で**最初に**解決された値 (またはプロミスではない値) で解決します。

- 空でない*反復可能*オブジェクトが渡され、**いずれか**のプロミスが履行されたか、プロミスではなかった場合、このメソッドから返却されるプロミスは非同期に履行されます。

### 拒否の場合

渡されたすべてのプロミスが拒否された場合、 `Promise.any` は {{JSxRef("AggregateError")}} オブジェクトで非同期に拒否されます。これはを継承しており、拒否された値の配列を持つ errors` プロパティを含みます。

- 空の*反復可能*オブジェクトが渡された場合、このメソッドから返却されたプロミスは同期的に拒否されます。拒否の理由は `AggregateError` オブジェクトであり、その `errors` プロパティは空の配列になります。

## 例

### 最初に履行されるもの

`Promise.any()` は、先に拒否されたプロミスがあったとしても、最初に履行されたプロミスで解決されます。これは {{jsxref("Promise.race()")}} が、最初に決定されたプロミスで解決または拒否されるのとは対照的です。

```js
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfils first
})
// 期待される出力: "Done quick"
```

### AggregateError での拒否

`Promise.any()` は履行されたプロミスがないと {{jsxref("AggregateError")}} で拒否されます。

```js
const pErr = new Promise((resolve, reject) => {
  reject('Always fails');
});

Promise.any([pErr]).catch((err) => {
  console.log(err);
})
// 期待される出力: "AggregateError: No Promise in Promise.any was resolved"
```

### 最初に読み込まれた画像の表示

この例では、画像を読み込んで blob を返す関数があります。 `Promise.any()` を使用して二つの画像を読み込み、先に利用可能になった方 (つまり、プロミスが解決された方) を表示します。

```js
function fetchAndDecode(url) {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
}

let coffee = fetchAndDecode('coffee.jpg');
let tea = fetchAndDecode('tea.jpg');

Promise.any([coffee, tea]).then(value => {
  let objectURL = URL.createObjectURL(value);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log(e.message);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Promise.any` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise) で利用できます
- {{JSxRef("Promise")}}
- {{JSxRef("Promise.allSettled()")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.race()")}}
