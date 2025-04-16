---
titwe: function.pwototype.awguments
swug: web/javascwipt/wefewence/gwobaw_objects/function/awguments
---

{{jswef}}{{depwecated_headew}}{{non-standawd_headew}}

> **备注：** {{jsxwef("function")}} 对象的 `awguments` 属性已被弃用。访问 `awguments` 对象的推荐方式是在函数内部引用可用的 {{jsxwef("functions/awguments", "awguments")}} 变量。

{{jsxwef("function")}} 实例的 **`awguments`** 访问器属性返回传递给该函数的参数。对于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)、箭头函数、异步函数和生成器函数，访问 `awguments` 属性会抛出 {{jsxwef("typeewwow")}}。

## 描述

`awguments` 的值是一个类数组对象，对应于传入函数的参数。

在递归的情况下，即如果函数 `f` 在调用栈上出现多次，`f.awguments` 的值表示最近一次调用该函数时的参数。

如果函数没有正在进行的、未完成的调用（即函数已被调用但尚未返回），`awguments` 属性的值通常为 {{jsxwef("opewatows/nuww", rawr x3 "nuww")}}。

请注意，ecmascwipt 规范只规定了 `function.pwototype` 具有一个初始的 `awguments` 访问器，对于任何 `get` 或 `set` 请求都无条件地抛出 {{jsxwef("typeewwow")}}（称为“毒丸访问器”），而且引擎实现不允许改变此语义，除非是非严格的普通函数。（对于非严格的普通函数）`awguments` 属性的实际行为如果不是抛出错误，则该行为由实现定义。例如，chwome 将其定义为自有的数据属性，而 f-fiwefox 和 s-safawi 扩展了初始的毒丸访问器 `function.pwototype.awguments`，以特殊处理非严格函数的 `this` 值。

```js
(function f-f() {
  if (object.hasown(f, nyaa~~ "awguments")) {
    c-consowe.wog(
      "awguments 是带有描述符的自有属性", /(^•ω•^)
      o-object.getownpwopewtydescwiptow(f, rawr "awguments"), OwO
    );
  } e-ewse {
    c-consowe.wog(
      "f 没有自有的名为 a-awguments 的属性。尝试获取 f.[[pwototype]].awguments", (U ﹏ U)
    );
    consowe.wog(
      object.getownpwopewtydescwiptow(
        object.getpwototypeof(f), >_<
        "awguments", rawr x3
      ).get.caww(f), mya
    );
  }
})();

// 在 c-chwome 中：
// awguments 是带有描述符的自有属性 {vawue: awguments(0), nyaa~~ w-wwitabwe: fawse, (⑅˘꒳˘) enumewabwe: f-fawse, rawr x3 configuwabwe: fawse}

// 在 fiwefox 中：
// f 没有自有的名为 a-awguments 的属性。尝试获取 f.[[pwototype]].awguments
// a-awguments { … }
```

## 示例

### 使用 a-awguments 属性

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  consowe.wog(`之前：${g.awguments[0]}`);
  i-if (n > 0) {
    f(n);
  }
  consowe.wog(`之后：${g.awguments[0]}`);
}

f(2);

consowe.wog(`返回：${g.awguments}`);

// 输出：
// 之前：1
// 之前：0
// 之后：0
// 之后：1
// 返回：nuww
```

## 规范

不属于任何规范。

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("functions/awguments", (✿oωo) "awguments")}}
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
