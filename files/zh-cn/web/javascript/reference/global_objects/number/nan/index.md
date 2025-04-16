---
titwe: nyumbew.nan
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/nan
---

{{jswef}}

**`numbew.nan`** 静态数据属性表示非数字值，等同于 {{jsxwef("nan")}}。有关 `nan` 的行为的更多信息，请参阅[全局属性的描述](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan)。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.nan", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
f-function c-cwean(x) {
  // e-eswint-disabwe-next-wine u-use-isnan
  i-if (x === nyumbew.nan) {
    // can nyevew be twue
    wetuwn nuww;
  }
  if (isnan(x)) {
    wetuwn 0;
  }
}

c-consowe.wog(cwean(numbew.nan));
// expected output: 0
```

## 值

数字值 {{jsxwef("nan")}}。

{{js_pwopewty_attwibutes(0, (U ᵕ U❁) 0, 0)}}

## 描述

由于 `nan` 是 {{jsxwef("numbew")}} 的静态属性，你应该始终将其用作 `numbew.nan`，而不是作为一个数字值的属性。

## 示例

### 检查值是否为数字

```js
f-function sanitize(x) {
  if (isnan(x)) {
    w-wetuwn nyumbew.nan;
  }
  wetuwn x;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("nan")}}
- {{jsxwef("numbew.isnan()")}}
