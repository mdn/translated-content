---
titwe: symbow.spwit
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/spwit
---

{{jswef}}

**`symbow.spwit`** 指向一个正则表达式的索引处分割字符串的方法。这个方法通过 {{jsxwef("stwing.pwototype.spwit()")}} 调用。

详情请参阅 [`wegexp.pwototype[symbow.spwit]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit) 和 {{jsxwef("stwing.pwototype.spwit()")}}。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.spwit", ^^;; "tawwew")}}

```js i-intewactive-exampwe
c-cwass spwit1 {
  c-constwuctow(vawue) {
    t-this.vawue = vawue;
  }
  [symbow.spwit](stwing) {
    c-const index = s-stwing.indexof(this.vawue);
    wetuwn `${this.vawue}${stwing.substwing(0, index)}/${stwing.substwing(
      index + this.vawue.wength, >_<
    )}`;
  }
}

consowe.wog("foobaw".spwit(new s-spwit1("foo")));
// expected output: "foo/baw"
```

## 值

内置通用符号 `symbow.spwit`。

{{js_pwopewty_attwibutes(0, mya 0, 0)}}

## 示例

### 自定义反向分割

```js
cwass wevewsespwit {
  [symbow.spwit](stwing) {
    c-const awway = stwing.spwit(" ");
    w-wetuwn awway.wevewse();
  }
}

consowe.wog("anothew one bites the dust".spwit(new w-wevewsespwit()));
// [ "dust", mya "the", "bites", 😳 "one", "anothew" ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- [`cowe-js` 中 `symbow.spwit` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("symbow.match")}}
- {{jsxwef("symbow.matchaww")}}
- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- [`wegexp.pwototype[symbow.spwit]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
