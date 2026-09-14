---
title: "console: assert() 静的メソッド"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.assert()`** 静的メソッドは、アサーション結果が false になった場合に、コンソールへエラーメッセージを出力します。アサーション結果が true になる場合は何も行いません。

## 構文

```js-nolint
console.assert(assertion)

console.assert(assertion, val1)
console.assert(assertion, val1, val2)
console.assert(assertion, val1, val2, /* …, */ valN)

console.assert(assertion, msg)
console.assert(assertion, msg, subst1)
console.assert(assertion, msg, subst1, /* …, */ substN)
```

### 引数

- `assertion`
  - : 任意の論理式です。アサーション結果が false になると、アサーションに失敗したことを示す汎用的なメッセージをコンソールに出力します。
- `val1` … `valN`
  - : 出力する JavaScript 値のリスト。これらのそれぞれの値の表現は、汎用的なアサーション失敗メッセージ（これらの値が存在しない場合に出力されるメッセージとは異なる可能性がある）の後、指定された順序でコンソールに出力されます。メッセージ間およびそれぞれの値の間には何らかの区切りが設けられます。`val1` が文字列である場合は特別な場合があり、後述します。
- `msg`
  - : 置換文字列をゼロ個以上含む JavaScript 文字列。置換文字列は、置換文字列の数まで順に `subst1` から `substN` で置き換えられます。汎用アサーションメッセージにコロン、空白、置換後の文字列が追加され、詳細なアサーションメッセージが形成されます。結果はコンソールに出力されます。置換の仕組みについては、[文字列置換の使用](/ja/docs/Web/API/console#文字列置換の使用)を参照してください。
- `subst1` … `substN`
  - : `msg` 内の置換文字列を置き換える JavaScript 値。置換値が置換文字列の数より多い場合、余分な値は書式文字列が存在しない場合と同様に、詳細なアサーションメッセージの後にコンソールへ直接出力されます。

詳細については、[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力)（{{domxref("console")}} のドキュメント）を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次のコード例は、アサーションに続く JavaScript オブジェクトの使用を示しています。

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#assert)
- [Node.js documentation for `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chrome's documentation for `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
