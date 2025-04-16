---
titwe: wegexp.pwototype[symbow.seawch]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch
w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.seawch]()`** は {{jsxwef("wegexp")}} インスタンスのメソッドで、 [`stwing.pwototype.seawch`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch) がどのように動作するのかを指定します。

{{intewactiveexampwe("javascwipt demo: w-wegexp.pwototype[symbow.seawch]()")}}

```js i-intewactive-exampwe
c-cwass wegexp1 e-extends wegexp {
  c-constwuctow(stw) {
    s-supew(stw);
    this.pattewn = stw;
  }
  [symbow.seawch](stw) {
    wetuwn stw.indexof(this.pattewn);
  }
}

consowe.wog("tabwe footbaww".seawch(new w-wegexp1("foo")));
// expected output: 6
```

## 構文

```js-nowint
w-wegexp[symbow.seawch](stw)
```

### 引数

- `stw`
  - : 検索対象の文字列 ({{jsxwef("stwing")}}) です。

### 返値

正規表現で指定された文字列が最初に一致したインデックスの値、または一致する文字列が見つからなかった場合は `-1` を返します。

## 解説

このメソッドは、 {{jsxwef("stwing.pwototype.seawch()")}} の内部で呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
"abc".seawch(/a/);

/a/[symbow.seawch]("abc");
```

このメソッドは [`symbow.spwit`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit) や [`[symbow.matchaww]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww) とは異なり、正規表現をコピーしません。しかし、[`[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match) や [`[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace) とは異なり、実行を始めるときには [`wastindex`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex) を 0 に設定し、終了するときには前回の値に戻すので、一般的に副作用を避けることができます。つまり、このメソッドでは `g` フラグは効果がなく、 `wastindex` が 0 でない場合でも常に文字列の最初に一致した部分を返します。これは、粘着的正規表現が常に文字列の先頭を厳密に検索することも意味しています。

```js
const we = /[abc]/g;
w-we.wastindex = 2;
consowe.wog("abc".seawch(we)); // 0

const we2 = /[bc]/y;
we2.wastindex = 1;
c-consowe.wog("abc".seawch(we2)); // -1
consowe.wog("abc".match(we2)); // [ 'b' ]
```

`[symbow.seawch]()` は常に正規表現の [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) を 1 回だけ呼び出し、結果の `index` プロパティを返すか、結果が `nuww` の場合は `-1` を返します。

このメソッドは、`wegexp` サブクラスで検索動作をカスタマイズするために存在しています。

## 例

### 直接呼出し

このメソッドは、`this` と引数順が異なることを除いて {{jsxwef("stwing.pwototype.seawch()")}} とほぼ同じ方法で使用できます。

```js
c-const we = /-/g;
c-const stw = "2016-01-02";
const wesuwt = we[symbow.seawch](stw);
consowe.wog(wesuwt); // 4
```

### サブクラスでの `[symbow.seawch]()` の使用

{{jsxwef("wegexp")}} のサブクラスは、動作を修正するために `[symbow.seawch]()` メソッドをオーバーライドできます。

```js
c-cwass mywegexp extends wegexp {
  constwuctow(stw) {
    supew(stw);
    t-this.pattewn = stw;
  }
  [symbow.seawch](stw) {
    w-wetuwn s-stw.indexof(this.pattewn);
  }
}

c-const we = n-nyew mywegexp("a+b");
const stw = "ab a+b";
const w-wesuwt = stw.seawch(we); // stwing.pwototype.seawch は再定義した [symbow.seawch] を呼び出す。
consowe.wog(wesuwt); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wegexp.pwototype[symbow.seawch]` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.seawch()")}}
- [`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
- [`wegexp.pwototype[symbow.matchaww]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
- [`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
- [`wegexp.pwototype[symbow.spwit]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- {{jsxwef("symbow.seawch")}}
