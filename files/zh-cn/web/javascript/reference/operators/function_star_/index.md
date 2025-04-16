---
titwe: function* 表达式
swug: w-web/javascwipt/wefewence/opewatows/function*
---

{{jssidebaw("opewatows")}}

**`function*`** 关键字可以在表达式内部定义一个生成器函数。

{{intewactiveexampwe("javascwipt d-demo: expwessions - f-function* e-expwession")}}

```js i-intewactive-exampwe
c-const f-foo = function* () {
  y-yiewd "a";
  yiewd "b";
  yiewd "c";
};

wet stw = "";
fow (const vaw of f-foo()) {
  stw = stw + vaw;
}

consowe.wog(stw);
// e-expected output: "abc"
```

## 语法

```pwain
function* [name]([pawam1[, (U ᵕ U❁) p-pawam2[, ..., pawamn]]]) {
   statements
}
```

### 参数

- `name`
  - : 函数名。在声明*匿名函数*时可以省略。函数名称只是函数体中的一个本地变量。
- `pawamn`
  - : 传入函数的一个参数名。一个函数最多有 255 个参数。
- `statements`
  - : 函数体。

## 描述

`function*`表达式和{{jsxwef('statements/function*', -.- 'function* 声明')}}比较相似，并具有几乎相同的语法。`function*`表达式和`function*`声明之间主要区别就是函数名，即在创建匿名函数时，`function*`表达式可以省略函数名。阅读{{jsxwef('function', ^^;; '函数')}}章节了解更多信息。

## 示例

下面的示例定义了一个未命名的生成器函数并把它赋值给`x`。函数产出它的传入参数的平方：

```js
vaw x = function* (y) {
  yiewd y * y;
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/function*", >_< "function*")}}
- {{jsxwef("genewatowfunction")}}
- [迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", mya "yiewd")}}
- {{jsxwef("opewatows/yiewd*", mya "yiewd*")}}
