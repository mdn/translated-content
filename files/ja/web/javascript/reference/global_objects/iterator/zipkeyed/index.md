---
title: Iterator.zipKeyed()
short-title: zipKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{JSRef}}{{SeeCompatTable}}

**`Iterator.zipKeyed()`** は静的メソッドで、複数の反復可能オブジェクトから要素を集約した新しい {{jsxref("Iterator")}} オブジェクトを生成します。これは本質的に入力反復可能オブジェクトを「まとめ」、それらを同時に反復処理できるようにします。

{{jsxref("Iterator.zip()")}} メソッドも同様ですが、オブジェクトではなく配列を生成します。

## 構文

```js-nolint
Iterator.zipKeyed(iterables)
Iterator.zipKeyed(iterables, options)
```

### 引数

- `iterables`
  - : オブジェクト。それぞれのプロパティのキーは、結果オブジェクトのキーとして使用されます。プロパティの値は、[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)プロトコルを実装しているか、それが不可能な場合は[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)プロトコルを実装している必要があります。これらの反復可能オブジェクトは無限でも構いません。文字列は拒否されます。文字列をまとめるには、 {{jsxref("Iterator.from()")}} を使用して明示的に反復可能オブジェクトに変換してください。
- `options` {{optional_inline}}
  - : 入力したものの長さが一致しない場合の挙動を指定するオブジェクト。以下のプロパティを持つことができます。
    - `mode` {{optional_inline}}
      - : 以下のいずれかです。
        - `"shortest"` （デフォルト）: 結果として生成されるイテレーターは、いずれか一方の入力反復可能オブジェクトが枯渇した時点で停止します。
        - `"longest"`: 生成されたイテレーターは、すべての入力反復可能オブジェクトが枯渇した時点で停止します。短い反復可能オブジェクトからの欠落値は、`padding` オプションに従って埋められます。
        - `"strict"`: すべての反復可能オブジェクトが同時に終了しなければ {{jsxref("TypeError")}} が発生します。
    - `padding` {{optional_inline}}
      - : オブジェクト。`mode` が `"longest"` の場合にのみ取得・検証されます。`undefined` または存在しない場合、短い反復可能オブジェクトからの欠落値は `undefined` で埋められます（これは空のオブジェクトを渡すことと等価です）。オブジェクトが指定された場合、`iterables` 引数のそれぞれのキーは `Iterator.zipKeyed()` が呼び出された時点で取得されます。`padding[key]` は `iterables[key]` の欠落値に使用されます。`padding` オブジェクトに一部のキーが欠けている場合、それらのキーは `undefined` で埋められます。

### 返値

新しい {{jsxref("Iterator")}} オブジェクト。それぞれの要素は、`iterables` 引数と同じキーを持つオブジェクトであり、対応する位置に各入力反復可能オブジェクトからの要素が含まれています。

## 解説

`Iterator.zipKeyed()` 関数は {{jsxref("Iterator.zip()")}} のように動作します。唯一の違いは、結果のオブジェクトで使用されるキーを指定できる点です。一方、`Iterator.zip()` は常に数値インデックス（配列を生成することで）を使用します。

反復可能オブジェクトを配列として表すと、入力は次のようになることがあります。

```js
({
  a: [a1, a2, a3, a4],
  b: [b1, b2, b3],
  c: [c1, c2, c3, c4, c5],
});
```

結果として生成されるイテレーターは、オプションにかかわらず、最初に次の配列を生成します。

```js
({ a: a1, b: b1, c: c1 });
({ a: a2, b: b2, c: c2 });
({ a: a3, b: b3, c: c3 });
```

最初の 3 つのオブジェクトが反復処理された後、入力反復可能オブジェクト `b` は 4 回目の `next()` 呼び出しで終了します。つまり `{ done: true }` を返します。その後何が起こるかは `mode` オプションによって異なります。`mode`が `"shortest"` （デフォルト）の場合、結果のイテレーターはここで停止します。他の 2 つの入力イテレーターは[閉じられた状態](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration)になります。`mode` が `"strict"` の場合、2 番目のイテレータが結果 `{ done: true }` を生成した時点で他の 2 つの反復可能オブジェクトが完了していないため、エラーが発生します。`mode` が `"longest"` の場合、結果のイテレーターはオブジェクトの生成を続け、不足している値を埋めます。例えば、`padding` が指定されていない場合、デフォルトは `undefined` になります。

```js
({ a: a4, b: undefined, c: c4 });
({ a: undefined, b: undefined, c: c5 });
```

`padding` がオブジェクトとして指定された場合、`{ a: p1, b: p2, c: p3 }` のような形式になります。この場合、入力反復可能オブジェクト `b` の欠落値には `p2` が、入力反復可能オブジェクト `a` の欠落値には `p1` が使用されます。

```js
({ a: a4, b: p2, c: c4 });
({ a: p1, b: p2, c: c5 });
```

## 例

### 表形式のデータの転置

表形式データを表す一般的な方法は 2 つあります。それぞれのプロパティが列となるオブジェクトとして、またはそれぞれのオブジェクトが行となるオブジェクトの配列としてです。この例では、`Iterator.zipKeyed()` を使用して列ベースの表現を行単位で反復処理する方法を示します。

```js
const table = {
  name: ["Caroline", "Danielle", "Evelyn"],
  age: [30, 25, 35],
  city: ["New York", "London", "Hong Kong"],
};

for (const { name, age, city } of Iterator.zipKeyed(table)) {
  console.log(`${name}, aged ${age}, lives in ${city}.`);
}

// 出力:
// Caroline, aged 30, lives in New York.
// Danielle, aged 25, lives in London.
// Evelyn, aged 35, lives in Hong Kong.
```

`Iterator.zipKeyed()` の用途の大半は、{{jsxref("Iterator.zip()")}} の用途と同一です。どちらを使用するかは、既に反復可能オブジェクトのオブジェクトを保有しているか（`zipKeyed()` を使用）、反復可能な配列を保有しているか（`zip()` を使用）によって決まります。可能な限り `zipKeyed()` を使用することを推奨します。明示的なキーを指定することで、反復可能オブジェクトの順序を誤って混在させるリスクを低減できるためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.zipKeyed` のポリフィル (`core-js`)](https://core-js.io/docs/features/proposals/joint-iteration)
- [es-shims による `Iterator.zipKeyed` のポリフィル](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zip()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
