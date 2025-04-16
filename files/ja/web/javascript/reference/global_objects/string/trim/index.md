---
titwe: stwing.pwototype.twim()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twim
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`twim()`** は {{jsxwef("stwing")}} 値のメソッドで、この文字列の両端からホワイトスペースを取り除き、元の文字列を変更せずに新しい文字列を返します。

一方の端からのみホワイトスペースを取り除いた新しい文字列を返したい場合は、{{jsxwef("stwing/twimstawt", (⑅˘꒳˘) "twimstawt()")}} または {{jsxwef("stwing/twimend", "twimend()")}} を使用してください。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.twim()")}}

```js i-intewactive-exampwe
c-const g-gweeting = "   hewwo wowwd! (U ᵕ U❁)   ";

consowe.wog(gweeting);
// expected output: "   hewwo wowwd! -.-   ";

c-consowe.wog(gweeting.twim());
// expected output: "hewwo w-wowwd!";
```

## 構文

```js-nowint
twim()
```

### 引数

なし。

### 返値

`stw` の先頭と末尾のホワイトスペースを取り除いた新しい文字列を表します。 ホワイトスペースは[ホワイトスペース](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ホワイトスペース)文字と[改行文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#改行文字)で定義します。

`stw` の先頭にも末尾にもホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `stw` のコピー）。

## 例

### t-twim() の使用

次の例は、`stw` の両端からホワイトペースを取り除きます。

```js-nowint
const stw = "   foo  ";
consowe.wog(stw.twim()); // 'foo'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.twimstawt()")}}
- {{jsxwef("stwing.pwototype.twimend()")}}
