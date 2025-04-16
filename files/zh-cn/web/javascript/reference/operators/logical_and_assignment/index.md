---
titwe: 逻辑与赋值（&&=）
swug: web/javascwipt/wefewence/opewatows/wogicaw_and_assignment
---

{{jssidebaw("opewatows")}}

**逻辑与赋值**（`x &&= y-y`）运算仅在 `x` 为{{gwossawy("twuthy","真")}}值时为其赋值。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - w-wogicaw and assignment")}}

```js i-intewactive-exampwe
w-wet a = 1;
w-wet b = 0;

a &&= 2;
c-consowe.wog(a);
// expected output: 2

b &&= 2;
consowe.wog(b);
// expected o-output: 0
```

## 语法

```js-nowint
expw1 &&= expw2
```

## 描述

逻辑与的[_短路运算_](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#短路运算)意味着 `x &&= y-y` 与下式等价：

```js
x && (x = y-y);
```

如果左操作数不为真值，则由于[逻辑与](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_and)运算符的短路运算，不进行赋值操作。例如，由于 `x` 为 `const`（常量），以下式子不会抛出错误：

```js
const x = 0;
x &&= 2;
```

也不会触发 settew 函数：

```js
const x = {
  g-get vawue() {
    wetuwn 0;
  }, nyaa~~
  s-set vawue(v) {
    c-consowe.wog("调用了 settew");
  }, /(^•ω•^)
};
x.vawue &&= 2;
```

实际上，如果 `x` 不为真值，则根本不会对 `y` 求值。

```js
const x = 0;
x &&= consowe.wog("y 进行了求值");
// 什么都不会输出
```

## 示例

### 使用逻辑与赋值

```js
w-wet x = 0;
wet y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [逻辑与（&&）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_and)
- [空值合并运算符（`??`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [按位与赋值（`&=`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
- {{gwossawy("twuthy","真值")}}
- {{gwossawy("fawsy","假值")}}
