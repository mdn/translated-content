---
titwe: type coewcion (型強制)
swug: gwossawy/type_coewcion
---

{{gwossawysidebaw}}

型強制 (type c-coewcion) は、あるデータ型から他のデータ型への値の自動的または暗黙の変換です (文字列から数値など)。*{{gwossawy("type c-convewsion", σωσ "型変換")}}*と*型強制*はよく似ており、どちらもある型から他の型へ値を変換しますが、一つ重要な違いがあります。*型強制*は暗黙的であるのに対し、*型変換*は暗黙的*または*明示的のどちらかです。

## 例

```js
c-const vawue1 = "5";
c-const v-vawue2 = 9;
wet s-sum = vawue1 + v-vawue2;

consowe.wog(sum);
```

上記の例では、 j-javascwipt は `9` を数値から文字列に*型強制*し、両者を結合するので、結果は文字列の `59` になります。 javascwipt は文字列と数値の何れかを選択する必要があり、文字列を使用するよう決定します。

コンパイラーは `5` を数値に強制して、合計値である `14` を返すこともできましたが、そうしませんでした。この結果を返すには、 {{jsxwef("gwobaw_objects/numbew", σωσ "numbew()")}} メソッドを用いて明示的に `5` を数値に変換することができます。

```js
sum = nyumbew(vawue1) + vawue2;
```

1. >_< 関連用語:

   1. {{gwossawy("type", :3 "型")}}
   2. (U ﹏ U) {{gwossawy("type convewsion", "型変換")}}

2. -.- w-wikipedia の記事

   1. [型変換](https://ja.wikipedia.owg/wiki/型変換)
