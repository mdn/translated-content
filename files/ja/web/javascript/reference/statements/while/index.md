---
title: while
slug: Web/JavaScript/Reference/Statements/while
---

{{jsSidebar("Statements")}}

**while 文**は、テスト条件が true と評価されている間、指定された文を実行するループを作成します。条件はその文を実行する前に評価されます。

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## 構文

```
while (condition)
  statement
```

- `condition`
  - : ループを通過するごとに、その前に評価される式。この条件が true と評価された場合は、 `statement` が実行されます。条件が false と評価された場合は、実行は `while` ループの後の文に続きます。
- `statement`

  - : 条件が true と評価されている間に実行される文。ループ内で複数の文を実行する場合は、 [ブロック](/ja/docs/JavaScript/Reference/Statements/block)文 (`{ ... }`) を使用してそれらの文をグループ化してください。

    メモ: `break` 文を使用すると、条件が true と評価される前にループを停止することができます。

## 例

### while の使用

次の `while` ループは、 `n` が 3 より小さい間反復します。

```js
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

それぞれの反復で、ループは `n` を増加させ、それを `x` に加えます。したがって、 `x` および `n` は次の値をとります。

- 最初の通過の後: `n` = 1 および `x` = 1
- 2 回目の通過の後: `n` = 2 および `x` = 3
- 3 回目の通過の後: `n` = 3 および `x` = 6

3 回目の通過が完了した後、条件 `n` < 3 はもはや true ではなく、ループは終了します。

## 仕様書

| 仕様書                                                                                   |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-while-statement', 'while statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.while")}}

## 関連情報

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
