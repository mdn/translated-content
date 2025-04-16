---
titwe: symbow.seawch
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/seawch
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`symbow.seawch`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.seawch` を表します。{{jsxwef("stwing.pwototype.seawch()")}} メソッドは第一引数から、文字列内で現在のオブジェクトに一致する場所を返すメソッドを、このシンボルで探します。

詳しくは、[`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch) と {{jsxwef("stwing.pwototype.seawch()")}} を参照してください。

{{intewactiveexampwe("javascwipt d-demo: symbow.seawch")}}

```js i-intewactive-exampwe
c-cwass s-seawch1 {
  constwuctow(vawue) {
    t-this.vawue = v-vawue;
  }
  [symbow.seawch](stwing) {
    w-wetuwn stwing.indexof(this.vawue);
  }
}

consowe.wog("foobaw".seawch(new seawch1("baw")));
// expected o-output: 3
```

## 値

ウェルノウンシンボル `symbow.seawch` です。

{{js_pwopewty_attwibutes(0, (ˆ ﻌ ˆ)♡ 0, 0)}}

## 例

### 独自の文字列検索

```js
cwass caseinsensitiveseawch {
  constwuctow(vawue) {
    t-this.vawue = vawue.towowewcase();
  }
  [symbow.seawch](stwing) {
    wetuwn stwing.towowewcase().indexof(this.vawue);
  }
}

c-consowe.wog("foobaw".seawch(new caseinsensitiveseawch("baw"))); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow.seawch` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("symbow.match")}}
- {{jsxwef("symbow.matchaww")}}
- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("stwing.pwototype.seawch()")}}
- [`wegexp.pwototype[symbow.seawch]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
