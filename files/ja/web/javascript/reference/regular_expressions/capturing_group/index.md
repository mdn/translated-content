---
title: "キャプチャグループ: (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
l10n:
  sourceCommit: 254d7f1a39f19543e27611948b0f94c202a140e8
---

{{JsSidebar}}

**キャプチャグループ**は、サブパターンをグループ化し、グループ全体に[数量詞](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)を適用したり、グループ内で[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)を使用したりすることができます。サブパターンの一致に関する情報を記憶しているので、[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)で参照したり、[照合結果](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#返値)からその情報にアクセスしたりすることができます。

サブパターンの照合結果が必要ない場合は、代わりに[非キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)を使用することで、パフォーマンスが向上し、リファクタリングの危険を避けることができます。

## 構文

```regex
(pattern)
```

### 引数

- `pattern`
  - : 正規表現リテラルで使用する何かのもの、例えば[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)などから構成されるパターンです。

## 解説

キャプチャグループは JavaScript の式における[グループ化演算子](/ja/docs/Web/JavaScript/Reference/Operators/Grouping)のような役割を果たし、サブパターンを単一の[アトム](/ja/docs/Web/JavaScript/Reference/Regular_expressions#アトム)として使用できるようにします。

キャプチャグループには、開始括弧の順番で番号が振られます。最初のキャプチャグループは `1`、2 つ目は `2`、といった具合に番号が振られます。[名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)もキャプチャグループであり、他の（名前のない）キャプチャグループと一緒に番号が付けられます。キャプチャグループの一致に関する情報には、以下のようにしてアクセスできます。

- {{jsxref("RegExp.prototype.exec()")}}、{{jsxref("String.prototype.match()")}}、{{jsxref("String.prototype.matchAll()")}} の返値（配列）
- {{jsxref("String.prototype.replace()")}} および {{jsxref("String.prototype.replaceAll()")}} メソッドの `replacement` コールバック関数の `pN` 引数
- 同じパターン内の[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)

> **メモ:** `exec()` の結果の配列でも、キャプチャグループは `1`、`2` などの番号でアクセスされますが、これは要素 `0`` が一致するもの全体であるためです。`\0` は後方参照ではなく、NUL 文字の[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)です。

正規表現コード内のキャプチャグループは、その結果と一対一に対応します。キャプチャグループが一致しない場合（例えば、それが[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)の一致しない選択肢に属する場合）、対応する結果は未定義です。

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

キャプチャグループは[数量化](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)できます。この場合、このグループに対応する一致情報は、そのグループで最後に一致したものとなります。

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; because "b" comes after "a", this result overwrites the previous one
```

キャプチャグループは、[先読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)および[後読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)アサーションで使用できます。後読みアサーションはアトムを逆方向に一致させるので、 このグループに対応する最終的な一致は文字列の左端に現れるものになります。ただし、一致するグループのインデックスは、正規表現ソース内の相対位置に対応します。

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; because "a" is seen by the lookbehind after the lookbehind has seen "b"
```

キャプチャグループは入れ子にすることができ、その場合、開き括弧によって順序付けされるため、外側のグループが最初に番号付けされ、次に内側のグループが番号付けされます。入れ子になったグループが数量詞によって繰り返される場合、そのグループが一致するたびにサブグループの結果はすべて上書きされ、場合によっては `undefined` になります。

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

上の例では、外側のグループは 3 回一致します。

1. `"aac"` に一致。サブグループは `"aa"`、`undefined`、`"c"`。
2. `"bbbc"` に一致。サブグループは `undefined`、`"bbb"`、`"c"`。
3. `"ac"` に一致。サブグループは `"a"`、`undefined`、`"c"`。

2 回目の一致で得られた `"bbb"` の結果は保存されません。3 つ目の一致で `undefined` で上書きされるからです。

[`d`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) フラグを用いることで、入力文字列中の各キャプチャグループの開始と終わりのインデックスを取得することができます。これは、`exec()` が返す配列に `indices` プロパティを作成します。

オプションでキャプチャグループに名前を指定することができ、グループの位置やインデックス関連の落とし穴を避けるのに役立ちます。詳細は、[名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)を参照してください。

括弧は、異なる正規表現構文において他の目的もあります。例えば、先読みアサーションや後読みアサーションも括弧で囲みます。これらの構文はすべて `?` で始まり、`?` は `(` の直後には置くことができない[数量詞](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)なので、曖昧さにはつながりません。

## 例

### 日付の照合

次の例は `YYYY-MM-DD` という形式の日付に一致します。

```js
function parseDate(input) {
  const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
  if (!parts) {
    return null;
  }
  return parts.slice(1).map((p) => parseInt(p, 10));
}

parseDate("2019-01-01"); // [2019, 1, 1]
parseDate("2019-06-19"); // [2019, 6, 19]
```

### 引用符のペアリング

以下の関数は文字列中の `title='xxx'` と `title="xxx"` のパターンを照合します。引用符が確実に一致するように、後方参照を使用して最初の引用符を参照します。2 つ目のキャプチャグループ (`[2]`) にアクセスすると、一致する引用符の間の文字列を返します。

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [非キャプチャグループ: `(?:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [後方参照: `\1`, `\2`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
