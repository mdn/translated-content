---
title: console.assert()
slug: Web/API/console/assert
l10n:
  sourceCommit: b40b71d87ab041f2f36a4675bc09af983b22422a
---

{{APIRef("Console API")}}

**`console.assert()`** は、検査結果が false になった場合に、コンソールへエラーメッセージを出力します。検査結果が true になる場合は何も行いません。

{{AvailableInWorkers}}

## 構文

```js
assert(assertion, obj1);
assert(assertion, obj1, obj2);
assert(assertion, obj1, obj2, /* … ,*/ objN);

assert(assertion, msg);
assert(assertion, msg, subst1);
assert(assertion, msg, subst1, /* … ,*/ substN);
```

### 引数

- `assertion`
  - : 任意の論理式です。結果が false になると、コンソールにメッセージを出力します。
- `obj1` … `objN`
  - : 出力する JavaScript オブジェクトのリスト。各オブジェクトを文字列で表現したものを、リストの並び順に追記して出力します。
- `msg`
  - : 0 個以上の置換文字列を含む JavaScript 文字列。
- `subst1` … `substN`
  - : `msg` 内の置換文字列を置き換える JavaScript オブジェクト。この引数で、出力形式を高度に制御できます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次のコード例は、アサーションに続く JavaScript オブジェクトの使用を示しています。

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, { number, errorMsg });
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

詳しくは {{domxref("console")}} のドキュメントで、[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
