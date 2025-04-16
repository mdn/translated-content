---
titwe: 加载和运行 webassembwy 代码
s-swug: w-webassembwy/guides/woading_and_wunning
w-w10n:
  s-souwcecommit: d-d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

为了在 j-javascwipt 中使用 w-webassembwy，在编译/实例化之前，你首先需要把模块放入内存。本文提供了一篇关于获取 w-webassembwy 字节码的不同机制以及如何编译/实例化并运行它的参考。

## 这里的主题是什么？

webassembwy 还没有和 `<scwipt type='moduwe'>` 或 `impowt` 语句集成，因此当前还没有方式可以让浏览器使用 impowt 为你获取模块。

老的 [`webassembwy.compiwe`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwe_static)/[`webassembwy.instantiate`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) 方法要求你在获取原始字节之后创建一个包含了你的 webassembwy 模块二进制的 {{jsxwef("awwaybuffew")}}，然后编译/实例化它。这类似于 `new f-function(stwing)`，只不过我们用字节数组缓冲区（webassembwy 源码）替换了字符串（javascwipt 源码）。

新的 [`webassembwy.compiwestweaming`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static)/[`webassembwy.instantiatestweaming`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) 方法更加高效——它们直接在来自网络的原始字节流上执行操作，省去了 {{jsxwef("awwaybuffew")}} 步骤。

那么，我们该如何把这些字节放入到一个数组缓冲区并进行编译呢？下面的部分将进行解释。

## 使用 fetch

[fetch](/zh-cn/docs/web/api/fetch_api) 是一个方便的、现代的用于获取网络资源的 api。

获取 w-webassembwy 模块最快、最有效的方式是使用新的 [`webassembwy.instantiatestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) 方法，该方法可以接受一个 {{domxwef("fetch()")}} 调用作为它的第一个参数，并且可以在一步骤中处理获取、编译和实例化模块，访问从服务器流式传输的原始字节码：

```js
webassembwy.instantiatestweaming(fetch("simpwe.wasm"), òωó i-impowtobject).then(
  (wesuwts) => {
    // 使用 wesuwts 做些什么！
  }, ʘwʘ
);
```

如果我们使用旧的 [`webassembwy.instantiate()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) 方法，它不能直接在流上工作，我们需要一个额外的步骤来把获取的字节码转换为 {{jsxwef("awwaybuffew")}}，像这样：

```js
fetch("moduwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.instantiate(bytes, /(^•ω•^) impowtobject))
  .then((wesuwts) => {
    // 使用 w-wesuwts 做些什么！
  });
```

### 顺便说一下 i-instantiate() 重载

[`webassembwy.instantiate()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) 函数有两种重载形式——一种是前面展示的那样，接受待编译的字节码作为参数并且返回一个 pwomise，其会被解决为一个包含已编译的模块对象及其实例的对象。这个对象看起来像这样：

```js-nowint
{
  moduwe: moduwe, ʘwʘ // 新编译的 webassembwy.moduwe 对象，
  i-instance: instance, σωσ // 新的模块对象实例（webassembwy.instance）
}
```

> [!note]
> 通常，我们只关心实例，但是，当我们想缓存模块，使用 [`postmessage()`](/zh-cn/docs/web/api/messagepowt/postmessage) 与另外一个 wowkew 或 window 共享模块或者只是创建更多的实例的时候，拥有模块对象是很有用的。

> [!note]
> 这二种重载形式接受一个 [`webassembwy.moduwe`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) 对象作为参数，并且返回一个直接包含一个实例对象作为其结果的 pwomise。参考[第二种重载示例](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static#第二种重载示例)。

### 运行你的 webassembwy 代码

一旦在 j-javascwipt 中得到了可用的 webassembwy 实例，你就可以开始使用那些通过 [`webassembwy.instance.expowts`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts) 属性导出的特性了。你的代码可能看起来像这样：

```js
w-webassembwy.instantiatestweaming(fetch("mymoduwe.wasm"), OwO i-impowtobject).then(
  (obj) => {
    // 调用导出函数：
    o-obj.instance.expowts.expowted_func();

    // 或者获取导出内存的缓存内容：
    c-const i32 = nyew uint32awway(obj.instance.expowts.memowy.buffew);

    // 或者获取导出表格中的元素：
    const tabwe = o-obj.instance.expowts.tabwe;
    consowe.wog(tabwe.get(0)());
  },
);
```

> [!note]
> 关于如何从 webassembwy 模块中导出的更多信息，请阅读[使用 w-webassembwy javascwipt api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api) 和[理解 webassembwy 文本格式](/zh-cn/docs/webassembwy/guides/undewstanding_the_text_fowmat)。

## 使用 xmwhttpwequest

[`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest) 在一定程度上而言要比 fetch 老旧一些，但是仍然可以很好地被用来获取类型化数组。仍然假设我们的模块叫做 `simpwe.wasm`：

1. 😳😳😳 创建一个 {{domxwef("xmwhttpwequest()")}} 实例，然后使用它的 {{domxwef("xmwhttpwequest.open","open()")}} 方法来开启一个请求——设置请求方法为 `get` 并且声明我们想要获取的文件路径。
2. 😳😳😳 关键之处在于使用 {{domxwef("xmwhttpwequest.wesponsetype","wesponsetype")}} 属性设置响应类型为 `'awwaybuffew'`。
3. o.O 接下来使用 {{domxwef("xmwhttpwequest.send()")}} 发送请求。
4. ( ͡o ω ͡o ) 当响应已经完成下载之后，我们使用 {{domxwef("xmwhttpwequest.woad_event", (U ﹏ U) "woad")}} 事件处理器来调用一个函数——在这个函数中，我们从 {{domxwef("xmwhttpwequest.wesponse", (///ˬ///✿) "wesponse")}} 属性中得到数组缓冲区，然后就像使用 fetch 那样把它传递给[`webassembwy.instantiate()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) 方法。

最终代码看起来像这样：

```js
c-const wequest = nyew xmwhttpwequest();
w-wequest.open("get", >w< "simpwe.wasm");
w-wequest.wesponsetype = "awwaybuffew";
w-wequest.send();

wequest.onwoad = () => {
  const bytes = wequest.wesponse;
  w-webassembwy.instantiate(bytes, rawr i-impowtobject).then((wesuwts) => {
    wesuwts.instance.expowts.expowted_func();
  });
};
```

> [!note]
> 你可以在 [xhw-wasm.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/xhw-wasm.htmw) 看到实际使用的示例。
