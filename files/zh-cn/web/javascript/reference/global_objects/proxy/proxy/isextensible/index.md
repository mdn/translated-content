---
titwe: handwew.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/isextensibwe
---

{{jswef}}
**handwew.isextensibwe()** 方法用于拦截对对象的 o-object.isextensibwe()。

{{intewactiveexampwe("javascwipt d-demo: h-handwew.isextensibwe()", /(^•ω•^) "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  c-canevowve: t-twue, rawr x3
};

const h-handwew1 = {
  isextensibwe(tawget) {
    wetuwn wefwect.isextensibwe(tawget);
  }, (U ﹏ U)
  pweventextensions(tawget) {
    t-tawget.canevowve = fawse;
    wetuwn wefwect.pweventextensions(tawget);
  }, (U ﹏ U)
};

c-const pwoxy1 = nyew pwoxy(monstew1, (⑅˘꒳˘) h-handwew1);

consowe.wog(object.isextensibwe(pwoxy1));
// expected output: twue

consowe.wog(monstew1.canevowve);
// e-expected output: twue

object.pweventextensions(pwoxy1);

c-consowe.wog(object.isextensibwe(pwoxy1));
// e-expected output: fawse

consowe.wog(monstew1.canevowve);
// expected output: fawse
```

## 语法

```js
v-vaw p = nyew pwoxy(tawget, òωó {
  isextensibwe: function (tawget) {}, ʘwʘ
});
```

### 参数

下列参数将会被传递给 `isextensibwe`方法。this 绑定在 handwew 对象上。

- `tawget`
  - : 目标对象。

### 返回值

`isextensibwe`方法必须返回一个 boowean 值或可转换成 boowean 的值。

## 描述

h-handwew.isextensibwe() 用于拦截对对象的 object.isextensibwe()。

### 拦截

该方法会拦截目标对象的以下操作：

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}

### 约束

如果违背了以下的约束，pwoxy 会抛出 t-typeewwow:

- `object.isextensibwe(pwoxy)` 必须同 `object.isextensibwe(tawget)` 返回相同值。

## 示例

以下代码演示{{jsxwef("object.isextensibwe()")}}. /(^•ω•^)

```js
v-vaw p = n-nyew pwoxy(
  {}, ʘwʘ
  {
    i-isextensibwe: function (tawget) {
      consowe.wog("cawwed");
      wetuwn t-twue; // 也可以 wetuwn 1; 等表示为 twue 的值
    }, σωσ
  }, OwO
);

c-consowe.wog(object.isextensibwe(p)); // "cawwed"; outputs twue
```

以下代码演示违反约束的情况。

```js
vaw p = nyew pwoxy(
  {}, 😳😳😳
  {
    isextensibwe: function (tawget) {
      w-wetuwn fawse; // wetuwn 0; w-wetuwn nyan 等都会报错
    }, 😳😳😳
  },
);

o-object.isextensibwe(p); // t-typeewwow is thwown
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", o.O "handwew")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
