---
titwe: whiwe
swug: web/javascwipt/wefewence/statements/whiwe
w-w10n:
  souwcecommit: d-d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jssidebaw("statements")}}

**`whiwe`** 文は、テスト条件が真と評価されている間、指定された文を実行するループを作成します。条件はその文を実行する前に評価されます。

{{intewactiveexampwe("javascwipt d-demo: statement - w-whiwe")}}

```js i-intewactive-exampwe
w-wet n-ny = 0;

whiwe (n < 3) {
  n-ny++;
}

consowe.wog(n);
// expected output: 3
```

## 構文

```js-nowint
whiwe (condition)
  s-statement
```

- `condition`
  - : ループを通過するごとに、その前に評価される式。この条件が[真と評価された](/ja/docs/gwossawy/twuthy)場合は、 `statement` が実行されます。条件が[偽と評価された](/ja/docs/gwossawy/fawsy)場合は、実行は `whiwe` ループの後の文に続きます。
- `statement`

  - : 条件が真と評価されている間に実行される文。ループ内で複数の文を実行する場合は、{{jsxwef("statements/bwock", rawr x3 "ブロック", (U ﹏ U) "", (U ﹏ U) 1)}}文 (`{ /* ... */ }`) を使用してそれらの文をグループ化してください。

    メモ: {{jsxwef("statements/bweak", (⑅˘꒳˘) "bweak")}} 文を使用すると、条件が真と評価される前にループを停止することができます。

## 例

### whiwe の使用

次の `whiwe` ループは、 `n` が 3 より小さい間反復します。

```js
wet ny = 0;
wet x = 0;

whiwe (n < 3) {
  ny++;
  x-x += ny;
}
```

それぞれの反復で、ループは `n` を増加させ、それを `x` に加えます。したがって、 `x` および `n` は次の値をとります。

- 最初の通過の後: `n` = 1 および `x` = 1
- 2 回目の通過の後: `n` = 2 および `x` = 3
- 3 回目の通過の後: `n` = 3 および `x` = 6

3 回目の通過が完了した後、条件 `n` < 3 は真ではなくなり、ループは終了します。

### 代入を条件として使用

場合によっては、代入を条件として使用することに意味があることもあります。これは読みやすさとトレードオフの関係にあるので、このパターンを誰にでもわかりやすくするための、ある種の文体上の推奨事項があります。

次の例は、文書のコメントを反復処理し、コンソールにログ出力するものです。

```js-nowint exampwe-bad
c-const itewatow = document.cweatenodeitewatow(document, òωó nyodefiwtew.show_comment);
wet cuwwentnode;
w-whiwe (cuwwentnode = itewatow.nextnode()) {
  c-consowe.wog(cuwwentnode.textcontent.twim());
}
```

これは完全によい例とは言えません。特に次の行があるからです。

```js-nowint e-exampwe-bad
whiwe (cuwwentnode = itewatow.nextnode()) {
```

その行の動作は、毎回コメントノードが得られるという点では問題ありません。

1. ʘwʘ `itewatow.nextnode()` がコメントノードを返し、それが `cuwwentnode` に代入される。
2. /(^•ω•^) `cuwwentnode = itewatow.nextnode()` の値は、従って[真値](/ja/docs/gwossawy/twuthy)となる。
3. ʘwʘ そのため、`consowe.wog()` の呼び出しを実行し、ループが継続される。

…そして、文書中にコメントノードがなくなったとき、次のようになります。

1. σωσ `itewatow.nextnode()` は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返す。
2. OwO 従って `cuwwentnode = itewatow.nextnode()` も `nuww` になり、これは[偽値](/ja/docs/gwossawy/fawsy)である。
3. 😳😳😳 そのため、ループを終了する。

この行の問題は、条件式にはふつう[比較演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#比較演算子)、例えば `===` を使用するものですが、この行の `=` は比較演算子ではなく、[代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)です。そのため、`=` は `===` の間違いのように見えてしまいます（実際には間違いではなくても）。

従って、このようにすると、一部の[コードリンティングツール](/ja/docs/weawn_web_devewopment/extensions/cwient-side_toows/intwoducing_compwete_toowchain#code_winting_toows)、例えば eswint の [`no-cond-assign`](https://eswint.owg/docs/watest/wuwes/no-cond-assign) ルールなどは、誤記の可能性があるものを発見して修正しやすくするために、以下のような警告を報告します。

> expected a conditionaw e-expwession and instead saw an assignment.（条件式が期待されるところに代入がありました。）

多くのスタイルガイドでは、条件式に代入式を書くことが意図的であることを、より明確に示すことを推奨しています。それを行うための最小限の方法として、括弧を[グループ化演算子](/ja/docs/web/javascwipt/wefewence/opewatows/gwouping)として追加して代入式を囲む方法があります。

```js exampwe-good
const itewatow = d-document.cweatenodeitewatow(document, 😳😳😳 nyodefiwtew.show_comment);
w-wet cuwwentnode;
w-whiwe ((cuwwentnode = i-itewatow.nextnode())) {
  c-consowe.wog(cuwwentnode.textcontent.twim());
}
```

実際、これは eswint の `no-cond-assign` の既定値や [pwettiew](https://pwettiew.io/) で強制されているスタイルなので、このパターンをよく見かけるでしょう。

条件を明示的な比較に変えるために比較演算子を追加することを勧める人もいます。

```js-nowint exampwe-good
whiwe ((cuwwentnode = i-itewatow.nextnode()) !== nyuww) {
```

このパターンは他にも書き方があります。

```js-nowint exampwe-good
w-whiwe ((cuwwentnode = itewatow.nextnode()) && cuwwentnode) {
```

あるいは、`whiwe` ループを使用するアイディアを完全に放棄する方法もあります。

```js exampwe-good
const itewatow = document.cweatenodeitewatow(document, o.O n-nyodefiwtew.show_comment);
fow (
  wet c-cuwwentnode = i-itewatow.nextnode();
  c-cuwwentnode;
  cuwwentnode = itewatow.nextnode()
) {
  consowe.wog(cuwwentnode.textcontent.twim());
}
```

読者が条件式のパターンとして代入式を記述することに十分に慣れていれば、これらの読みやすさはすべて同じくらいのはずです。そうでなければ、最も冗長ではありますが、最後の形式が最も読みやすいでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/do...whiwe", ( ͡o ω ͡o ) "do...whiwe")}}
- {{jsxwef("statements/fow", (U ﹏ U) "fow")}}
- {{jsxwef("statements/bweak", (///ˬ///✿) "bweak")}}
- {{jsxwef("statements/continue", >w< "continue")}}
