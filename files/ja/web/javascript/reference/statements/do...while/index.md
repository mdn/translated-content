---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

**`do...while` 文**は指定された文を、テスト条件が false に評価されるまで実行するループを作成します。条件は文を実行した後に評価されます。結果として、指定された文は少なくとも 1 回は実行されます。

{{EmbedInteractiveExample("pages/js/statement-dowhile.html")}}

## 構文

```
do
   statement
while (condition);
```

- `statement`
  - : 少なくとも 1 回は実行され、条件が真に評価されるたびに再度実行される文。ループ内で複数の文を実行するには、それらの文をグループ化するために{{jsxref("Statements/block", "ブロック", "", 1)}}文 (`{ ... }`) を使ってください。

<!---->

- `condition`
  - : ループを通過した後ごとに評価される式。もし `condition` が true に評価されるなら、`statement` は再度実行されます。`condition` が false に評価されるときは、制御が `do...while` に続く文へ渡ります。

## 例

### `do...while` の使用

次の例では、 `do...while` ループを少なくとも 1 回は実行し、 `i` が 5 より小さいという条件を満たさなくなるまで反復します。

```js
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
}
while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test

console.log(result);
```

## 仕様書

| Specification                                                                                    |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-do-while-statement', 'do-while statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.do_while")}}

## 関連情報

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
