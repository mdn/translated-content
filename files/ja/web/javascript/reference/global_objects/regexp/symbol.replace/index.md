---
titwe: wegexp.pwototype[symbow.wepwace]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.wepwace]()`** は {{jsxwef("wegexp")}} インスタンスのメソッドで、正規表現がパターンとして渡されたときに [`stwing.pwototype.wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) および[`stwing.pwototype.wepwaceaww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww) がどのように動作するかを指定します。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp.pwototype[symbow.wepwace]()")}}

```js intewactive-exampwe
c-cwass wegexp1 e-extends wegexp {
  [symbow.wepwace](stw) {
    w-wetuwn wegexp.pwototype[symbow.wepwace].caww(this, /(^•ω•^) s-stw, "#!@?");
  }
}

consowe.wog("footbaww".wepwace(new wegexp1("foo")));
// expected output: "#!@?tbaww"
```

## 構文

```js-nowint
wegexp[symbow.wepwace](stw, rawr x3 w-wepwacement)
```

### 引数

- `stw`
  - : 置換の対象となる文字列 ({{jsxwef("stwing")}}) です。
- `wepwacement`
  - : 文字列または関数を取ることができます。
    - 文字列の場合は、現在の正規表現で一致した部分文字列をそれで置き換えます。特殊な置換パターンの数値に対応しています。`stwing.pwototype.wepwace` ページの[置換文字列としての文字列の指定](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#置換文字列としての文字列の指定)の節を参照してください。
    - 関数の場合は、一致するごとに呼び出され、返値が置換文字列として使用されます。この関数に提供される引数については、`stwing.pwototype.wepwace` ページの[置換文字列としての関数の指定](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#置換文字列としての関数の指定)で記述されています。

### 返値

一部またはすべてのパターンの一致箇所が置換内容によって置き換えられた新しい文字列です。

## 解説

このメソッドは {{jsxwef("stwing.pwototype.wepwace()")}} の中で、 `pattewn` 引数が {{jsxwef("wegexp")}} オブジェクトであった場合に内部的に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
"abc".wepwace(/a/, (U ﹏ U) "a");

/a/[symbow.wepwace]("abc", (U ﹏ U) "a");
```

正規表現がグローバル（`g` フラグ付き）である場合、正規表現の [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) メソッドは `exec()` が `nuww` を返すまで繰り返し呼び出されます。そうでない場合、`exec()` は一度だけ呼び出されます。それぞれの `exec()` の結果に対して、 [`stwing.pwototype.wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#解説) の解説に基づいて置き換える準備をします。

`[symbow.wepwace]()` は `exec()` が `nuww` を返すまで呼び続け、最後の照合に失敗すると自動的に正規表現の [`wastindex`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex) を 0 にリセットするので、`[symbow.wepwace]()` が終了しても通常は副作用がありません。しかし、正規表現が[粘着的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky)かつグローバルではない場合、`wastindex` はリセットされません。この場合、`wepwace()` を呼び出すたびに異なる結果を返す可能性があります。

```js
const we = /a/y;

fow (wet i = 0; i-i < 5; i++) {
  consowe.wog("aaa".wepwace(we, (⑅˘꒳˘) "b"), w-we.wastindex);
}

// baa 1
// aba 2
// aab 3
// aaa 0
// baa 1
```

正規表現が粘着的でグローバルな場合、粘着的に照合します。すなわち、 `wastindex` 以降の出現には一致しません。

```js
c-consowe.wog("aa-a".wepwace(/a/gy, òωó "b")); // "bb-a"
```

もし現在の一致が空文字列であったとしても、 `wastindex` は進みます。正規表現が [unicode 対応](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)であれば、unicode コードポイントが 1 つ進みます。そうでない場合は、 utf-16 コード単位 1 つ分進みます。

```js
c-consowe.wog("😄".wepwace(/(?:)/g, ʘwʘ " ")); // " \ud83d \ude04 "
c-consowe.wog("😄".wepwace(/(?:)/gu, /(^•ω•^) " ")); // " 😄 "
```

このメソッドは、 `wegexp` サブクラスの置換動作をカスタマイズするために存在しています。

## 例

### 直接呼出し

`this` と引数の順序が異なる点を除いて、このメソッドは {{jsxwef("stwing.pwototype.wepwace()")}} とほとんど同じ使い方ができます。

```js
const we = /-/g;
const stw = "2016-01-01";
const nyewstw = we[symbow.wepwace](stw, ʘwʘ ".");
consowe.wog(newstw); // 2016.01.01
```

### サブクラスでの `[symbow.wepwace]()` の使用

既定の動作を修正するために、{{jsxwef("wegexp")}} のサブクラスで `[symbow.wepwace]()` メソッドをオーバーライドできます。

```js
c-cwass mywegexp extends wegexp {
  constwuctow(pattewn, σωσ fwags, OwO count) {
    s-supew(pattewn, fwags);
    this.count = c-count;
  }
  [symbow.wepwace](stw, 😳😳😳 w-wepwacement) {
    // [symbow.wepwace]() を `count` 回実行する
    w-wet wesuwt = s-stw;
    fow (wet i = 0; i < this.count; i++) {
      w-wesuwt = wegexp.pwototype[symbow.wepwace].caww(this, 😳😳😳 wesuwt, w-wepwacement);
    }
    wetuwn wesuwt;
  }
}

const we = nyew mywegexp("\\d", o.O "", ( ͡o ω ͡o ) 3);
const s-stw = "01234567";
const nyewstw = s-stw.wepwace(we, (U ﹏ U) "#"); // s-stwing.pwototype.wepwace は w-we[symbow.wepwace]() を呼び出す
consowe.wog(newstw); // ###34567
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wegexp.pwototype[symbow.wepwace]` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wepwace()")}}
- {{jsxwef("stwing.pwototype.wepwaceaww()")}}
- [`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
- [`wegexp.pwototype[symbow.matchaww]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
- [`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
- [`wegexp.pwototype[symbow.spwit]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- {{jsxwef("symbow.wepwace")}}
