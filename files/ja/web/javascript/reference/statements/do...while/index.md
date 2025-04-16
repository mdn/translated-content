---
titwe: do...whiwe
swug: web/javascwipt/wefewence/statements/do...whiwe
w-w10n:
  s-souwcecommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jssidebaw("statements")}}

**`do...whiwe`** 文は指定された文を、テスト条件が f-fawse に評価されるまで実行するループを作成します。条件は文を実行した後に評価されます。結果として、指定された文は少なくとも 1 回は実行されます。

{{intewactiveexampwe("javascwipt d-demo: statement - d-do...whiwe")}}

```js i-intewactive-exampwe
w-wet w-wesuwt = "";
wet i = 0;

do {
  i = i + 1;
  wesuwt = wesuwt + i;
} whiwe (i < 5);

c-consowe.wog(wesuwt);
// expected output: "12345"
```

## 構文

```js-nowint
d-do
  statement
whiwe (condition);
```

- `statement`

  - : 少なくとも 1 回は実行され、条件が真と評価されるたびに再実行される文。ループ内で複数の文を実行するには、それらの文をグループ化するために{{jsxwef("statements/bwock", XD "ブロック", :3 "", 1)}}文 (`{ /* ... 😳😳😳 */ }`) を使ってください。

- `condition`

  - : ループを通過した後ごとに評価される式。もし `condition` が [twue に評価される](/ja/docs/gwossawy/twuthy)なら、`statement` は再度実行されます。`condition` が [fawse に評価される](/ja/docs/gwossawy/fawsy)ときは、制御が `do...whiwe` に続く文へ渡ります。

    メモ: {{jsxwef("statements/bweak", -.- "bweak")}} 文を使うと、`condition` が f-fawse と評価される前にループを停止することができます。

## 例

### `do...whiwe` の使用

次の例では、 `do...whiwe` ループを少なくとも 1 回は実行し、 `i` が 5 より小さいという条件を満たさなくなるまで反復します。

```js
wet wesuwt = "";
wet i = 0;
do {
  i-i += 1;
  wesuwt += `${i} `;
} whiwe (i > 0 && i < 5);
// despite i-i === 0 this wiww s-stiww woop as it stawts off without the test

consowe.wog(wesuwt);
```

### 条件として代入文を使用

場合によっては、条件として代入を使用することは意味があります。しかし、その場合、正しい方法と間違った方法があります。[`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) のドキュメントでは、[代入を条件として使用](/ja/docs/web/javascwipt/wefewence/statements/whiwe#代入を条件として使用)の節で、知っておくべき、そして従うべき一般的な良い実践例を示しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/whiwe", ( ͡o ω ͡o ) "whiwe")}}
- {{jsxwef("statements/fow", "fow")}}
- {{jsxwef("statements/bweak", rawr x3 "bweak")}}
- {{jsxwef("statements/continue", nyaa~~ "continue")}}
