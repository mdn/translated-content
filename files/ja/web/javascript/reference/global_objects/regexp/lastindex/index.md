---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: 846e3b1aa04ecceab70d379a9cc0717893707880
---

{{JSRef}}

**`lastIndex`** は {{jsxref("RegExp")}} インスタンスのデータプロパティで、次の照合を開始する位置を指定します。

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## 値

非負の整数です。

{{js_property_attributes(1, 0, 0)}}

## 解説

このプロパティは、正規表現インスタンスがグローバル検索を示すために `g` フラグを使用した場合、または粘着的検索を示すために `y` フラグを使用した場合にのみ設定されます。{{jsxref("RegExp.prototype.exec()", "exec()")}} が指定された入力に対して呼び出されたとき、以下の規則が適用されます。

- `lastIndex` が入力の長さよりも大きい場合、 `exec()` は一致するものを見つけられず、 `lastIndex` は 0 に設定されます。
- `lastIndex` が入力の長さ以下であった場合、 `exec()` は `lastIndex` から一致するものを探そうとします。
  - `exec()` が一致するものを見つけた場合 `lastIndex` は入力の中の一致する文字列の末尾の位置に設定されます。
  - `exec()` が一致するものを見つけられなかった場合、 `lastIndex` は 0 に設定されます。

他の正規表現関連のメソッド、{{jsxref("RegExp.prototype.test()")}}、{{jsxref("String.prototype.match()")}}、{{jsxref("String.prototype.replace()")}} などは `exec()` を呼び出しので、`lastIndex` における影響は異なります。詳細はそれぞれのページを参照してください。

## 例

### lastIndex の使用

例えば、以下の一連の処理を考えてみてください。

```js
const re = /(hi)?/g;
```

空文字列に一致します。

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

`["hi", "hi"]` を返し、 `lastIndex` は 2 になります。

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

返値は `["", undefined]` で、 0 番目の要素が一致文字列となる空の配列です。この場合、 `lastIndex` が 2 (現在も 2) であり、`hi` の長さが 2 であるため、空の文字列となります。

### lastIndex を sticky の正規表現で使用

`lastIndex` プロパティは書き込み可能です。これを設定することで、正規表現が指定したインデックスから次の検索を開始するようになります。

`y` フラグはほとんどの場合 `lastIndex` を設定する必要があります。これは常に `lastIndex` ちょうどの位置で照合し、それ以降の位置では照合を試みません。これは通常パーサーを書くときに、現在の位置のトークンのみに一致させたい場合に便利です。

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### lastIndex の巻き戻し

`g` フラグも `lastIndex` を設定することで恩恵を受けることができます。よくある使用例として、グローバル検索の途中で文字列が変更された場合があります。この場合、文字列が短くなると特定の一致を見逃してしまう可能性があります。この場合は `lastIndex` を巻き戻すことで回避できます。

```js
const mdLinkPattern = /\[[^[\]]+\]\((?<link>[^()\s]+)\)/dg;

function resolveMDLink(line) {
  let match;
  let modifiedLine = line;
  while ((match = mdLinkPattern.exec(modifiedLine))) {
    const originalLink = match.groups.link;
    const resolvedLink = originalLink.replaceAll(/^files|\/index\.md$/g, "");
    modifiedLine =
      modifiedLine.slice(0, match.indices.groups.link[0]) +
      resolvedLink +
      modifiedLine.slice(match.indices.groups.link[1]);
    // Rewind the pattern to the end of the resolved link
    mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length;
  }
  return modifiedLine;
}

console.log(
  resolveMDLink(
    "[`lastIndex`](files/ja/web/javascript/reference/global_objects/regexp/lastindex/index.md)",
  ),
); // [`lastIndex`](/ja/web/javascript/reference/global_objects/regexp/lastindex)
console.log(
  resolveMDLink(
    "[`ServiceWorker`](files/ja/web/api/serviceworker/index.md) and [`SharedWorker`](files/ja/web/api/sharedworker/index.md)",
  ),
); // [`ServiceWorker`](/ja/web/api/serviceworker) and [`SharedWorker`](/ja/web/api/sharedworker)
```

`mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` の行を削除して、2 番目の例を実行してみてください。文字列が短縮された後、`lastIndex` が既にリンクのインデックスを過ぎているため、2 番目のリンクが正しく置換されないことがわかります。

> **警告:** この例はデモ専用のためのものです。Markdown を扱うには、正規表現の代わりに構文解析ライブラリーを使用してください。

### 検索の最適化

以前の出現を無視できるポイントに `lastIndex` を設定することで、検索を最適化することができます。例えば、この代わりに、

```js
const stringPattern = /"[^"]*"/g;
const input = `const message = "Hello " + "world";`;

// 文字列の前の部分はすでに処理したことにする
let offset = 26;
const remainingInput = input.slice(offset);
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset += nextString.index + nextString.length;
```

次のように考えてみてください。

```js
stringPattern.lastIndex = offset;
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset = stringPattern.lastIndex;
```

これは、文字列のスライスを避けるようになるので、より性能が高まる可能性があります。

### 副作用の回避

それぞれの `exec()` の実行毎に入力が異なる場合、`exec()` によって発生する副作用が混乱を招きかねません。

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false。lastIndex がゼロではないため
```

これは `lastIndex` を手で変更する場合にはさらに混乱します。副作用を収めるために、各入力が完全に処理された後に `lastIndex` をリセットすることを忘れないでください。

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
re.lastIndex = 0;
console.log(re.test("foo baz")); // true
```

抽象化すれば、`exec()` を呼び出す前に `lastIndex` に具体的な値を設定するように要求することができます。

```js
function createMatcher(pattern) {
  // コピーを作成し、元の正規表現が更新されないようする
  const regex = new RegExp(pattern, "g");
  return (input, offset) => {
    regex.lastIndex = offset;
    return regex.exec(input);
  };
}

const matchFoo = createMatcher(/foo/);
console.log(matchFoo("foo bar", 0)[0]); // "foo"
console.log(matchFoo("foo baz", 0)[0]); // "foo"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
