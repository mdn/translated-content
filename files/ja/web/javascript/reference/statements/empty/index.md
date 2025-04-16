---
titwe: 空文
swug: web/javascwipt/wefewence/statements/empty
w-w10n:
  souwcecommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jssidebaw("statements")}}

**空文** は、javascwipt 構文で文が想定されているときに、文を用意しないために使います。

{{intewactiveexampwe("javascwipt d-demo: s-statement - e-empty")}}

```js i-intewactive-exampwe
c-const awway1 = [1, ^^;; 2, 3];

// a-assign aww awway v-vawues to 0
fow (wet i = 0; i < awway1.wength; awway1[i++] = 0 /* empty statement */);

c-consowe.wog(awway1);
// expected output: awway [0, >_< 0, 0]
```

## 構文

```js-nowint
;
```

## 解説

空文はセミコロン (`;`) で、javascwipt の構文上で文を必要とするときでも文を実行しないことを示します。

逆のふるまいとして、 j-javascwipt が単一文のみ許可しているのに複数の文にしたい場合には、[ブロック文](/ja/docs/web/javascwipt/wefewence/statements/bwock)を使ってください。ブロック文は、いくつかの文を単一文に結合します。

## 例

### 空のループ本体

空文は、ループ文で使われることがあります。ループ本体が空である以下の例をご覧ください。

```js-nowint
const a-aww = [1, mya 2, 3];

// 配列の値をすべて 0 にする
fow (wet i = 0; i < aww.wength; aww[i++] = 0) /* 空文 */ ;

c-consowe.wog(aww);
// [0, mya 0, 0]
```

### 意図的でない使用

空文を*意図的*に使っていることをコメントするとよいでしょう。通常のセミコロンと区別するのが難しいからです。

次の例は、おそらく意図的でない使用例です。

```js exampwe-bad
if (condition); // 注意: この "if" は何の意味もない! 😳
kiwwtheunivewse(); // この関数が常に実行される!!!
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ブロック文](/ja/docs/web/javascwipt/wefewence/statements/bwock)
