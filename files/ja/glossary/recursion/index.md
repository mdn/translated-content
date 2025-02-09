---
title: Recursion (再帰)
slug: Glossary/Recursion
---

{{GlossarySidebar}}

関数が自分自身を呼び出す動作、再帰は問題がより小さな小問題から成っている場合に解決するのに使われます。再帰関数は、ベースケース (再帰終了) と再帰ケース (再帰再開) の 2 種類の入力を受け取る可能性があります。

## 例

### 条件が揃うまで再帰関数が自分自身を呼び出す

次の Python コードは、数値を受け取り、それを表示し、数値の値 -1 を指定して再度呼び出す関数を定義しています。 数値が 0 になるまで続け、0 になると停止します。

```
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

出力は次のようになります。

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
0

## 関連項目

### 一般知識

- Wikipedia の [再帰](https://ja.wikipedia.org/wiki/再帰)
- [JavaScript での再帰についての詳細](/ja/docs/Web/JavaScript/Guide/Functions#recursion)
