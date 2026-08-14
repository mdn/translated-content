---
title: Recursion (再帰)
slug: Glossary/Recursion
l10n:
  sourceCommit: edcc5310efdcf36ca408ab3df5d5d4ba2f21cd4a
---

関数が自分自身を呼び出す動作、再帰は問題がより小さな小問題から成っている場合に解決するのに使われます。再帰関数は、ベースケース（再帰終了）と再帰ケース（再帰再開）の 2 種類の入力を受け取る可能性があります。

## 例

### 条件が揃うまで再帰関数が自分自身を呼び出す

次の Python コードは、数値を受け取り、それを表示し、数値の値 -1 を指定して再度呼び出す関数を定義しています。 数値が 0 になるまで続け、0 になると停止します。

```python
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

出力は次のようになります。

```plain
10
9
8
7
6
5
4
3
2
1
```

### 再帰はスタックサイズに制約される

以下のコードは、コードが実行されている JavaScript ランタイムで利用できるコールスタックの最大サイズを返す関数を定義しています。

```js
const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));
```

### よくある使用例

#### 階乗

```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(10));
// 3628800
```

#### フィナボッチ

```js
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```

#### 縮小

```js
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```

## 関連情報

- [再帰](https://ja.wikipedia.org/wiki/再帰) - ウィキペディア
- [JavaScript での再帰についての詳細](/ja/docs/Web/JavaScript/Guide/Functions#recursion)
