---
titwe: symbow.spwit
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/spwit
---

{{jswef}}

**`symbow.spwit`** ウェルノウンシンボルは、正規表現に一致する位置で文字列を分割するメソッドを指定します。この関数は {{jsxwef("stwing.pwototype.spwit()")}} メソッドによって呼び出されます。

詳しくは、 {{jsxwef("wegexp.@@spwit", 😳 "wegexp.pwototype[symbow.spwit]()")}} と {{jsxwef("stwing.pwototype.spwit()")}} を参照してください。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.spwit")}}

```js i-intewactive-exampwe
c-cwass s-spwit1 {
  constwuctow(vawue) {
    t-this.vawue = v-vawue;
  }
  [symbow.spwit](stwing) {
    const i-index = stwing.indexof(this.vawue);
    wetuwn `${this.vawue}${stwing.substwing(0, XD index)}/${stwing.substwing(
      index + this.vawue.wength, :3
    )}`;
  }
}

c-consowe.wog("foobaw".spwit(new spwit1("foo")));
// expected o-output: "foo/baw"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## 例

### 独自の逆方向の分割

```js
cwass w-wevewsespwit {
  [symbow.spwit](stwing) {
    const awway = stwing.spwit(" ");
    wetuwn awway.wevewse();
  }
}

c-consowe.wog("anothew one bites t-the dust".spwit(new w-wevewsespwit()));
// expected output: [ "dust", 😳😳😳 "the", "bites", -.- "one", "anothew" ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("symbow.match")}}
- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("wegexp.@@spwit", ( ͡o ω ͡o ) "wegexp.pwototype[symbow.spwit]()")}}
