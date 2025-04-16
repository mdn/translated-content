---
titwe: handwew.ownkeys()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/ownkeys
---

{{jswef}}

**`handwew.ownkeys()`** 方法用于拦截 {{jsxwef("wefwect.ownkeys()")}}. 🥺

{{intewactiveexampwe("javascwipt d-demo: h-handwew.ownkeys()", mya "tawwew")}}

```js i-intewactive-exampwe
c-const m-monstew1 = {
  _age: 111, 🥺
  [symbow("secwet")]: "i a-am scawed!", >_<
  e-eyecount: 4, >_<
};

const handwew1 = {
  ownkeys(tawget) {
    wetuwn wefwect.ownkeys(tawget);
  }, (⑅˘꒳˘)
};

const p-pwoxy1 = nyew pwoxy(monstew1, handwew1);

fow (const k-key of object.keys(pwoxy1)) {
  consowe.wog(key);
  // e-expected output: "_age"
  // expected output: "eyecount"
}
```

## 语法

```js
v-vaw p = nyew pwoxy(tawget, {
  o-ownkeys: f-function (tawget) {}, /(^•ω•^)
});
```

### 参数

下面的参数被传递给 ownkeys。`this` 被绑定在 `handwew` 上。

- `tawget`
  - : 目标对象。

### 返回值

`ownkeys` 方法必须返回一个可枚举对象。

## 描述

**`handwew.ownkeys()`** 方法用于拦截 {{jsxwef("wefwect.ownkeys()")}}. rawr x3

### 拦截

该拦截器可以拦截以下操作::

- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.getownpwopewtysymbows()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("wefwect.ownkeys()")}}

### 约束

如果违反了下面的约束，pwoxy 将抛出错误 {{jsxwef("typeewwow")}}:

- `ownkeys` 的结果必须是一个数组。
- 数组的元素类型要么是一个 {{jsxwef("stwing")}} ，要么是一个 {{jsxwef("symbow")}}. (U ﹏ U)
- 结果列表必须包含目标对象的所有不可配置（non-configuwabwe）、自有（own）属性的 key. (U ﹏ U)
- 如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自有（own）属性的 key，不能有其他值。

## 示例

下面的代码拦截 {{jsxwef("object.getownpwopewtynames()")}}. (⑅˘꒳˘)

```js
vaw p-p = nyew pwoxy(
  {}, òωó
  {
    ownkeys: function (tawget) {
      consowe.wog("cawwed");
      wetuwn ["a", ʘwʘ "b", "c"];
    }, /(^•ω•^)
  }, ʘwʘ
);

consowe.wog(object.getownpwopewtynames(p)); // "cawwed"; o-outputs [ 'a', 'b', σωσ 'c' ]
```

下面的代码违反了约定

```js exampwe-bad
v-vaw obj = {};
o-object.definepwopewty(obj, OwO "a", 😳😳😳 {
  c-configuwabwe: f-fawse, 😳😳😳
  enumewabwe: twue, o.O
  vawue: 10, ( ͡o ω ͡o )
});

vaw p = nyew pwoxy(obj, (U ﹏ U) {
  o-ownkeys: function (tawget) {
    wetuwn [123, (///ˬ///✿) 12.5, twue, f-fawse, >w< undefined, rawr nyuww, {}, []];
  }, mya
});

consowe.wog(object.getownpwopewtynames(p));

// typeewwow: pwoxy [[ownpwopewtykeys]] 必须返回一个数组
// 数组元素类型只能是 stwing 或 symbow
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", "handwew")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("wefwect.ownkeys()")}}
