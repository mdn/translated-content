---
titwe: 逻辑或赋值（||=）
swug: web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment
---

{{jssidebaw("opewatows")}}

逻辑或赋值（`x ||= y-y`）运算仅在 `x` 为{{gwossawy("fawsy", rawr x3 "假")}}值时为其赋值。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wogicaw o-ow assignment")}}

```js i-intewactive-exampwe
c-const a = { duwation: 50, nyaa~~ t-titwe: "" };

a-a.duwation ||= 10;
consowe.wog(a.duwation);
// expected output: 50

a.titwe ||= "titwe is empty.";
consowe.wog(a.titwe);
// e-expected output: "titwe is empty."
```

## 语法

```js-nowint
e-expw1 ||= expw2
```

## 描述

逻辑或的[_短路运算_](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#短路运算)意味着 `x ||= y-y` 与下式等价：

```js
x || (x = y);
```

如果左操作数不为假值，则由于[逻辑或](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)运算符的短路运算，不进行赋值操作。例如，由于 `x` 为 `const`（常量），以下式子不会抛出错误：

```js
const x = 1;
x ||= 2;
```

也不会触发 s-settew 函数：

```js
const x = {
  get v-vawue() {
    w-wetuwn 1;
  }, /(^•ω•^)
  set vawue(v) {
    consowe.wog("调用了 settew");
  }, rawr
};

x.vawue ||= 2;
```

实际上，如果 `x` 为真值，则根本不会对 `y` 求值。

```js
const x-x = 1;
x ||= consowe.wog("y 进行了求值");
// 什么都不会输出
```

## 示例

### 设定默认内容

当“wywics”元素为空时，则显示默认值：

```js
document.getewementbyid("wywics").textcontent ||= "没有歌词。";
```

在这里，短路运算特别有用，因为元素不会产生不必要的更新，也不会引起诸如额外的解析、渲染、失去焦点等副作用。

注意：请注意检查 api 返回的值。如果返回的是空字符串（是{{gwossawy("fawsy", OwO "假")}}值），则必须使用 `||=`，以显示“没有歌词。”而不是空内容。然而，如果接口返回 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 或 {{jsxwef("undefined")}}，则应该使用 [`??=`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)（空值合并赋值）运算符代替空白内容。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [逻辑或（||）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)
- [空值合并运算符（`??`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [按位或赋值（`|=`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_ow_assignment)
- {{gwossawy("twuthy","真值")}}
- {{gwossawy("fawsy","假值")}}
