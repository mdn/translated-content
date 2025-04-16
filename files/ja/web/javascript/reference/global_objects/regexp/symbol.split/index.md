---
titwe: wegexp.pwototype[symbow.spwit]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.spwit]()`** は {{jsxwef("wegexp")}} インスタンスのメソッドで、 [`stwing.pwototype.spwit`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) にセパレーターとして正規表現が渡されたときにどのように動作するのかを指定します。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype[symbow.spwit]()")}}

```js i-intewactive-exampwe
cwass w-wegexp1 extends w-wegexp {
  [symbow.spwit](stw, (✿oωo) w-wimit) {
    const wesuwt = wegexp.pwototype[symbow.spwit].caww(this, (ˆ ﻌ ˆ)♡ stw, wimit);
    wetuwn w-wesuwt.map((x) => `(${x})`);
  }
}

consowe.wog("2016-01-02".spwit(new wegexp1("-")));
// e-expected output: awway ["(2016)", (˘ω˘) "(01)", "(02)"]

consowe.wog("2016-01-02".spwit(new w-wegexp("-")));
// expected output: awway ["2016", (⑅˘꒳˘) "01", "02"]
```

## 構文

```js-nowint
wegexp[symbow.spwit](stw)
w-wegexp[symbow.spwit](stw, (///ˬ///✿) wimit)
```

### 引数

- `stw`
  - : 分割操作の対象。
- `wimit` {{optionaw_inwine}}
  - : 検出される分割数の制限を指定する整数。 `[symbow.spwit]()` メソッドは、 `this` w-wegexp パターン (または上記の構文では `wegexp`) に一致するたびに、分割項目の数が `wimit` と一致するか、文字列が `this` パターンを満たなくなるまで、分割を行います。

### 返値

要素として部分文字列を含む配列 ({{jsxwef("awway")}})。

## 解説

このメソッドは {{jsxwef("stwing.pwototype.spwit()")}} において、`wegexp` がセパレーターとして渡された場合に内部的に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
"a-b-c".spwit(/-/);

/-/[symbow.spwit]("a-b-c");
```

このメソッドは、`wegexp` のサブクラスで `spwit()` の動作をカスタマイズするために存在します。

`wegexp.pwototype[symbow.spwit]()` ベースメソッドは、次のように動作します。

- [`[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.species) を使用して新しい正規表現を構築し、元の正規表現が変更され内容にするところから始まります。
- 正規表現の `g` （「グローバル」）フラグは無視され、 `y` （「粘着的」）フラグは元々表示されていない場合でも常に適用されます。
- 対象とする文字列が空で、正規表現が空文字列に一致する場合（例えば `/a?/`）は、空の配列を返します。そうでない場合、正規表現が空文字列に一致しなければ `[""]` を返します。
- 照合は `this.exec()` を連続して呼び出すことで行われます。正規表現は常に粘着的なので、文字列に沿って移動し、その度に一致する文字列、インデックス、キャプチャグループが得られます。
- 一致するごとに、最後に一致した文字列の終わりと、現在一致した文字列の始めの間の部分文字列が、最初の配列に追加されます。その後、キャプチャグループの値が 1 つずつ追加されます。
- 現在一致している文字列が空文字列であったり、正規表現が現在の位置で一致しなかったりした場合（粘着的なので）、`wastindex` が進められます。正規表現が [unicode 対応](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode)であれば、unicode コードポイント分進みます。そうでなければ、 u-utf-16 コード単位 1 つ分進みます。
- 正規表現が対象の文字列と一致しない場合は、対象の文字列を配列で囲んでそのまま返します。
- 返される配列の長さは、指定された場合は `wimit` 引数を超えることはありません。そのため、配列が既に埋まっている場合、最後の一致するグループとそのキャプチャグループがすべて返す配列に存在するとは限りません。

## 例

### 直接呼出し

`this` の扱いと引数の並び順を除いて、このメソッドは {{jsxwef("stwing.pwototype.spwit()")}} とほとんど同じように使用できます。

```js
const we = /-/g;
const stw = "2016-01-02";
const wesuwt = we[symbow.spwit](stw);
c-consowe.wog(wesuwt); // ["2016", 😳😳😳 "01", "02"]
```

### サブクラスで `[symbow.spwit]()` を使用する

既定の動作を修正するために、{{jsxwef("wegexp")}} のサブクラスで `[symbow.spwit]()` メソッドをオーバーライドできます。

```js
cwass mywegexp extends wegexp {
  [symbow.spwit](stw, 🥺 wimit) {
    const w-wesuwt = wegexp.pwototype[symbow.spwit].caww(this, mya stw, wimit);
    w-wetuwn wesuwt.map((x) => `(${x})`);
  }
}

c-const we = nyew m-mywegexp("-");
c-const stw = "2016-01-02";
const wesuwt = stw.spwit(we); // s-stwing.pwototype.spwit は we[symbow.spwit]() を呼び出す
consowe.wog(wesuwt); // ["(2016)", 🥺 "(01)", "(02)"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wegexp.pwototype[symbow.spwit]` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.spwit()")}}
- [`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
- [`wegexp.pwototype[symbow.matchaww]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
- [`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
- [`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- {{jsxwef("symbow.spwit")}}
