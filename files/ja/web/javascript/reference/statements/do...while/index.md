---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`do...while`** 文は、指定された文を、テスト条件が偽に評価されるまで実行するループを作成します。条件は文を実行した後に評価されます。結果として、指定された文は少なくとも 1 回は実行されます。

{{InteractiveExample("JavaScript デモ: do...while 文")}}

```js interactive-example
let result = "";
let i = 0;

do {
  i += 1;
  result += i;
} while (i < 5);

console.log(result);
// 予想される結果: "12345"
```

## 構文

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : 少なくとも 1 回は実行され、条件が真と評価されるたびに再実行される文。[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)を使用して複数の文を実行することができます。
- `condition`
  - : ループを通過した後に毎回評価される式。もしこの条件が[真に評価された](/ja/docs/Glossary/Truthy)場合は、`statement` は再度実行されます。条件がが[偽に評価された](/ja/docs/Glossary/Falsy)場合は、制御が `do...while` に続く文へ渡ります。

## 解説

他のループ文と同様に、`statement` の中で[フロー制御文](/ja/docs/Web/JavaScript/Reference/Statements#control_flow)を使用することができます。

- {{jsxref("Statements/break", "break")}} により、`statement` の実行を停止し、ループの後の最初の文へ移動します。
- {{jsxref("Statements/continue", "continue")}} により、`statement` の実行を停止し、`condition` を再評価します。

`do...while` 文の構文では末尾にセミコロンが要求されますが、セミコロンがないことで構文が不正な状態になる場合、[自動セミコロン挿入](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)処理によって自動的に挿入されることがあります。

## 例

### do...while の使用

次の例では、 `do...while` ループを少なくとも 1 回は実行し、 `i` が 5 より小さいという条件を満たさなくなるまで反復します。

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// i === 0 であっても、このループは検査なしで始まるため、ループが実行される

console.log(result);
```

### do...while の条件として false を使用

この文は常に一度だけ実行されるため、`do...while (false)` は文自体を実行するのと同じです。これは C 系言語でよく使われる手法であり、`break` を使用して分岐ロジックを早期に抜け出すことができるようになります。

```js
do {
  if (!user.loggedIn) {
    console.log("ログインしていません");
    break;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("友達が見つかりません");
    break;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
} while (false);
// The rest of code
```

JavaScript では、`break` をつけて[ラベル付きブロック文](/ja/docs/Web/JavaScript/Reference/Statements/label)を使用するなど、いくつかの代替手段があります。

```js
handleFriends: {
  if (!user.loggedIn) {
    console.log("ログインしていません");
    break handleFriends;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("友達が見つかりません");
    break handleFriends;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

または関数を使用する方法もあります。

```js
function handleFriends() {
  if (!user.loggedIn) {
    console.log("ログインしていません");
    return;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("友達が見つかりません");
    return;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

### 条件として代入文を使用

場合によっては、次のように、代入を条件として使用することが理にかなうことがあります。

```js
do {
  // …
} while ((match = regexp.exec(str)));
```

場合によっては、条件として代入を使用することは意味があります。しかし、その場合、正しい方法と間違った方法があります。[`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) のドキュメントでは、[代入を条件として使用](/ja/docs/Web/JavaScript/Reference/Statements/while#代入を条件として使用)の節で、知っておくべき、そして従うべき一般的な良い実践例を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
