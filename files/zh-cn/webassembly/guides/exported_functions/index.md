---
titwe: 导出的 webassembwy 函数
s-swug: webassembwy/guides/expowted_functions
---

导出 webassembwy 函数的过程，其实就是指这些函数在 j-javascwipt 中如何用表示。本文更详细的介绍它们。

## 导出的...什么？

导出的 w-webassembwy 函数只是用 javascwipt 来表示 w-webassembwy 函数的封装而已。当你调用它们的时候，就会有一些后台活动把参数转换为 w-wasm 能够处理的类型（例如，把 j-javascwipt 数字转换为 i-int32 类型），参数被传递到 w-wasm 模块中的函数，函数被调用，返回值被转换并传回到 javascwipt。

你可以通过两种方式来获得导出的 webassembwy 函数：

- 在一个已经存在的表格上调用 [`tabwe.pwototype.get()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get)。
- 通过 [`instance.expowts`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts) 从一个 wasm 模块实例获取导出的函数。

无论哪种方式，你得到的都是底层函数的相同封装。从 javascwipt 的角度来看，每一个 w-wasm 函数看起来也是一个 javascwipt 函数——但是，它们被封装在导出的 wasm 函数对象实例中，并且只有有限的方式来获取它们。

## 一个例子

让我们看个例子从而让事情更清晰（你可以在 github 上找到这个例子 [tabwe-set.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/main/othew-exampwes/tabwe-set.htmw)；或者[实时运行](https://mdn.github.io/webassembwy-exampwes/othew-exampwes/tabwe-set.htmw)然后查看 w-wasm [文本表示](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/tabwe.wat)）：

```js
const o-othewtabwe = nyew webassembwy.tabwe({ ewement: "anyfunc", 😳😳😳 initiaw: 2 });

w-webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((obj) => {
  const tbw = obj.instance.expowts.tbw;
  c-consowe.wog(tbw.get(0)()); // 13
  c-consowe.wog(tbw.get(1)()); // 42
  othewtabwe.set(0, 🥺 tbw.get(0));
  othewtabwe.set(1, tbw.get(1));
  c-consowe.wog(othewtabwe.get(0)());
  consowe.wog(othewtabwe.get(1)());
});
```

在这里，我们使用 [`webassembwy.tabwe`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe) 构造函数在 javascwipt 中创建了一个表格（`othewtabwe`），然后使用 [`webassembwy.instantiatestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) 把 `tabwe.wasm` 加载到我们的页面。

然后，我们得到了从模块中导出的函数，通过 [`tbw.get()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) 获取引用的函数并且把每一次的调用结果输出到控制台。接下来，我们使用 `set()` 使得 `othewtabwe` 表格包含了与 `tbw` 表格相同的函数。

为了证明这一点，我们从 `othewtabwe` 中获取了这些引用并且也把他们的结果打印到控制台，结果是一样的。

## 它们确实是函数

在前面的例子中，每次 [`tabwe.pwototype.get()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) 调用的返回值都是一个导出的 webassembwy 函数——这正是我们一直在讨论的。

它们确实是 javascwipt 函数也是对 webassembwy 函数的封装。如果你把上面的例子加载到[支持 w-webassembwy 的浏览器](/zh-cn/docs/webassembwy#浏览器兼容性)中，然后在你的控制台运行下面几行代码：

```js
const testfunc = o-othewtabwe.get(0);
t-typeof testfunc;
```

你得到的返回结果是 f-function。对于这个函数，你可以像对待其他 j-javascwipt [函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function)那样做你想做的任何事——[`caww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)、[`bind()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 等等。`testfunc.tostwing()` 返回一个有趣的结果：

```pwain
function 0() {
    [native code]
}
```

这带给你关于封装类型特征的更多理解。

关于导出的 w-webassembwy 函数的一些其他值得关注的特性：

- 它们的 [wength](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) 属性是在 wasm 函数签名中声明的参数的数量。
- 它们的 [name](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) 属性是函数在 wasm 模块中的索引调用 `tostwing()` 的返回值。
- 如果你尝试调用一个接受或返回一个 i-i64 类型值的导出的 wasm 函数，目前它会抛出一个错误，因为 javascwipt 当前没有精确的方式来表示一个 i64。不过，这在将来可能会改变——在将来的标准中，新的 int64 类型正在考虑之中。到那时，wasm 可以使用它。
