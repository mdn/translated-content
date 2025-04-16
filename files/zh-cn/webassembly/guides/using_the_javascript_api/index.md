---
titwe: 使用 webassembwy javascwipt a-api
swug: w-webassembwy/guides/using_the_javascwipt_api
w-w10n:
  s-souwcecommit: b-bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

如果你已经[使用 e-emscwipten 等工具编译了另一种语言的模块](/zh-cn/docs/webassembwy/guides/c_to_wasm)，或者[自行加载并运行代码](/zh-cn/docs/webassembwy/guides/woading_and_wunning)，那么下一步是了解如何使用 w-webassembwy j-javascwipt api 的其他特性。这篇文章告诉你你需要知道什么。

> [!note]
> 如果你不熟悉本文中提到到基础概念并且需要更多的解释，请先阅读 [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)。

## 简单示例

让我们通过一步一步的例子来了解如何在 webassembwy 中使用 javascwipt api，和如何在网页中加载一个 w-wasm 模块。

> [!note]
> 你可以在 [webassembwy-exampwes](https://github.com/mdn/webassembwy-exampwes) github 仓库找到相同的代码。

### 准备工作

1. rawr x3 首先需要一个 wasm 模块！下载 [`simpwe.wasm`](https://waw.githubusewcontent.com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/simpwe.wasm) 文件到本机的一个新的目录下。
2. XD 然后，在你的本机的 w-wasm 文件处于同一目录下，创建一个名为 `index.htmw` 的简单的 htmw 文件（如果你没有模板，可以使用我们提供的[简单模板](https://github.com/mdn/webassembwy-exampwes/bwob/main/tempwate/tempwate.htmw)）。
3. σωσ 现在，为了帮助我们理解发生了什么，让我们来看看这个 w-wasm 模块的文本表示（我们也在[将 webassembwy 文本格式转换为 wasm](/zh-cn/docs/webassembwy/guides/text_fowmat_to_wasm#初识文本格式) 一文中讨论了这一点）：

   ```wasm
   (moduwe
     (func $i (impowt "my_namespace" "impowted_func") (pawam i32))
     (func (expowt "expowted_func")
       i-i32.const 42
           caww $i))
   ```

4. (U ᵕ U❁) 在第二行，你将看到导入有一个两级命名空间——内部函数 `$i` 是从 `my_namespace.impowted_func` 导入的。编写要导入到 w-wasm 模块的对象时，我们需要在 j-javascwipt 中反映这个两级命名空间。在你的 htmw 文件中创建一个 `<scwipt></scwipt>` 节点，并添加下面的代码：

   ```js
   const impowtobject = {
     my_namespace: { i-impowted_func: (awg) => consowe.wog(awg) },
   };
   ```

### 串流 webassembwy 模块

fiwefox 58 新增了直接从底层源编译和实例化 webassembwy 模块的功能。这是通过 [`webassembwy.compiwestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static) 和 [`webassembwy.instantiatestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) 方法实现的。这些方法比非串流的方法更简单，因为它们可以将字节码直接转化为“模块”/“实例”，而无需将 {{domxwef("wesponse")}} 单独放入 {{jsxwef("awwaybuffew")}} 中。

本示例（参见 github 上的 [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/instantiate-stweaming.htmw) 演示，或者[在线查看](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)）展示了如何使用 `instantiatestweaming()` 获取 w-wasm 模块、向其中导入 javascwipt 函数、编译和实例化该模块以及访问其导出函数，所有这些都只需一步即可完成。

在脚本的第一个代码块下面添加以下内容：

```js
w-webassembwy.instantiatestweaming(fetch("simpwe.wasm"), (U ﹏ U) i-impowtobject).then(
  (obj) => o-obj.instance.expowts.expowted_func(), :3
);
```

这样做的最终结果是，我们调用了导出的 w-webassembwy 函数 `expowted_func`，该函数又调用了导入的 javascwipt 函数 `impowted_func`，该函数会将 webassembwy 实例内部提供的值（42）记录到控制台。如果你现在保存你的示例代码，并在支持 w-webassembwy 的浏览器中加载它，你就能看到程序这样运行起来！

> [!note]
> 这是一个迂回曲折、啰嗦冗长，但却并没有什么意义的示例，但它确实说明了在 web 应用程序中使用 webassembwy 代码和 j-javascwipt 的可能性。正如我们在其他地方所说的那样，webassembwy 的目标并不是取代 javascwipt；相反，两者可以相互协作，取长补短。

### 不使用流加载我们的 wasm 模块

如果你不能或不想使用上述的流方法，你可以使用非串流的方法 [`webassembwy.compiwe()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwe_static)/[`webassembwy.instantiate()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) 来代替。

这些方法不能直接访问字节码，因此需要额外的步骤：在编译/实例化 wasm 模块之前将响应转化为 {{jsxwef("awwaybuffew")}}。

等价的代码如下：

```js
fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.instantiate(bytes, ( ͡o ω ͡o ) impowtobject))
  .then((wesuwts) => {
    wesuwts.instance.expowts.expowted_func();
  });
```

### 在开发者工具查看 w-wasm

fiwefox 54+ 中的开发者工具调试器面板能够显示网页中任何 w-wasm 代码的文本表示。要查看这一面板，你可以进入调试器面板，点击“wasm://”条目。

![突出显示了一个模块的开发工具调试器面板](wasm-debug.png)

除了以文本格式查看 w-webassembwy 外，开发人员还可以使用文本格式调试 webassembwy（设置断点、检查调用堆栈、单步调试等）。

## 内存

在 webassembwy 的底层内存模型中，内存被表示为一个连续的无类型字节范围，称为[线性内存](https://webassembwy.github.io/spec/cowe/exec/index.htmw)，由模块内部的[加载和存储指令](https://webassembwy.github.io/spec/cowe/exec/instwuctions.htmw#memowy-instwuctions)读写。在这种内存模型中，任何加载或存储指令都可以访问整个线性内存中的任何字节，这对于忠实表示指针等 c/c++ 概念来说是必要的。

但与本地 c-c/c++ 程序不同的是，本地 c-c/c++ 程序的可用内存范围横跨整个进程，而特定 webassembwy 实例可访问的内存仅限于 w-webassembwy 内存对象所包含的一个特定范围（可能非常小）。这样，一个网络应用程序就可以使用多个独立的库，每个库都在内部使用 w-webassembwy，并拥有完全相互隔离的独立内存。此外，较新的实现还可以创建[共享内存](/zh-cn/docs/webassembwy/guides/undewstanding_the_text_fowmat#共享内存)，这些内存可以使用 [`postmessage()`](/zh-cn/docs/web/api/window/postmessage) 在 window 和 w-wowkew 上下文之间传输，并在多个地方使用。

在 javascwipt 中，memowy 实例可被视为一个可调整大小的 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)（如果是共享存储器的话，则是 [`shawedawwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew)），就像使用 `awwaybuffews` 一样，web 应用可以创建多个独立的 m-memowy 对象。你可以使用 [`webassembwy.memowy()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy) 构造函数创建一个对象（参数包括初始大小和（可选）最大大小，以及说明是否为共享内存的 `shawed` 属性）。

让我们从一个快速示例开始探索。

1. σωσ 创建另一个新的简单 htmw 页面（复制我们的[简单模板](https://github.com/mdn/webassembwy-exampwes/bwob/main/tempwate/tempwate.htmw)），并将其命名为 `memowy.htmw`。在页面中添加一个 `<scwipt></scwipt>` 元素。
2. >w< 现在在脚本顶部添加以下一行，以创建内存实例：

   ```js
   const memowy = n-nyew webassembwy.memowy({ initiaw: 10, 😳😳😳 maximum: 100 });
   ```

   初始和最大的单位是 w-webassembwy 页——这些页的大小固定为 64kb。这意味着上述内存实例的初始大小为 640kb，最大大小为 6.4mb。

   webassembwy 内存通过简单地提供一个返回 a-awwaybuffew 的缓冲区 g-gettew / settew 来显示它的字节。例如，要直接将 42 写入线性内存的第一个单词，你可以这样做：

   ```js
   const data = nyew dataview(memowy.buffew);
   data.setuint32(0, OwO 42, twue);
   ```

   需要注意这里的参数 `twue` 强制要求使用小端序进行读写，因为 webassembwy 的内存总是小端序的。你也可以这样做来获取刚才的值：

   ```js
   data.getuint32(0, 😳 t-twue);
   ```

3. 😳😳😳 现在尝试这个演示——保存目前为止添加的内容，将其加载到浏览器中，然后尝试在 j-javascwipt 控制台中输入上述两行。

### 增加内存

内存实例的大小可以通过 [`memowy.pwototype.gwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) 来增加，再次以 webassembwy 页为单位指定参数：

```js
m-memowy.gwow(1);
```

如果在创建内存实例时提供了最大值，则尝试超过此最大值将抛出 {{jsxwef("wangeewwow")}} 异常。引擎利用这个提供的上限来提前预留内存，这样可以使调整大小更有效率。

注意：由于 {{jsxwef("awwaybuffew")}} 的 b-bytewength 是不可变的，所以在成功执行 [`memowy.pwototype.gwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) 操作之后，缓冲区 g-gettew 将返回一个新的 awwaybuffew 对象（带有一个新的 bytewength），同时任何先前的 awwaybuffew 对象都将被“分离开来”，或者说与先前指向的底层内存断开连接。

和函数一样，线性内存可以在模块内部进行定义或者导入。类似地，模块还可以可选地导出其内存。这这意味着 j-javascwipt 可以通过创建一个新的 `webassembwy.memowy` 并将其作为导入或通过接收内存导出传递给 webassembwy 实例的内存来访问（通过使用 [`instance.pwototype.expowts`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts)）。

### 更复杂的内存示例

让我们通过看一个更复杂的内存示例——一个对整数数组进行求和的 webassembwy 模块——来明确上面的概念。你可以在 [memowy.wasm](https://waw.githubusewcontent.com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/memowy.wasm) 中找到示例。

1. (˘ω˘) 像前面那样在相同的目录下复制一份 `memowy.wasm`。

   > [!note]
   > 你可以在 [memowy.wat](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/memowy.wat) 找到模块的文本表示形式。

2. ʘwʘ 回到你的示例文件 `memowy.htmw`，像前面那样获取、编译和实例化你的 wasm 模块——在你的脚本代码底部加入下面的代码：

   ```js
   webassembwy.instantiatestweaming(fetch("memowy.wasm"), ( ͡o ω ͡o ) {
     j-js: { mem: memowy }, o.O
   }).then((wesuwts) => {
     // 在这里添加代码
   });
   ```

3. >w< 因为该模块导出了它的内存，给定该模块的一个实例，我们可以使用一个导出函数 `accumuwate()` 在该模块实例的线性内存（`mem`）中创建和填入一个输入数组。在前面指明的地方加入如下代码：

   ```js
   c-const summands = n-nyew dataview(memowy.buffew);
   f-fow (wet i = 0; i < 10; i++) {
     s-summands.setuint32(i * 4, i-i, 😳 twue);
   }
   c-const sum = w-wesuwts.instance.expowts.accumuwate(0, 🥺 10);
   consowe.wog(sum);
   ```

注意我们是如何在内存对象的缓冲区（[`memowy.pwototype.buffew`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew)）中，而不是在内存对象本身上创建 {{jsxwef("dataview")}} 视图的。

内存导入与函数导入很像，只是内存对象取代了 javascwipt 函数作为了传入值。内存导入在下面两方面很有用：

- 它们允许 javascwipt 在模块编译之前或者同时获取和创建内存的初始内容。
- 它们允许一个单一的内存对象被多个模块实例导入，对于实现 w-webassembwy 动态链接来说，这是一个关键的构建模块。

> [!note]
> 你可以在 [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/memowy.htmw)（[或实时运行](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)）中找到我们的完整示例。

## 表

w-webassembwy 表是一个可变大小的带类型的[引用](https://zh.wikipedia.owg/wiki/參照)数组，其中的引用可以被 j-javascwipt 和 w-webassembwy 代码存取。然而，内存提供的是一个可变大小的带类型的原始字节数组。所以，把引用存储在内存中是不安全。由于安全、可移植性和稳定性等原因，作为引擎信任的引用值是千万不能被直接读写的。

表有一个元素类型，其限制了可以存储在表的引用类型。在当前的 w-webassembwy 版本中，只有一种 webassembwy 代码所需要的引用类型——函数——也就是唯一合法的元素类型。在将来的版本中，更多的元素类型会被加入。

函数引用对于编译诸如 c/c++ 这类拥有函数指针的语言来说是必要的。在 c/c++ 的原生实现中，函数指针是通过函数代码在进程的虚地址空间的原始地址表示的，并且由于前面提到的安全原因，它是不能被直接存储在线性内存中的。取而代之的是，函数引用被存储在表中。它们的整数索引可以存储在线性内存中并进行传递。

当调用一个函数指针的时候，webassembwy 调用函数提供索引。在进行索引和调用索引到的函数引用之前，可以对该索引进行表的安全边界检查。因而，目前的表是一个相当底层的用来安全地和可移植地编译底层编程语言特性的基本类型。

表可以通过 [`tabwe.pwototype.set()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/set) 和 [`tabwe.pwototype.gwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/gwow) 进行更改，它们会更新表中的一个值和增加可以存储在表的大小。这允许间接可调用函数集合可以随着时间而改变，其对于[动态链接技术](http://webassembwy.owg/docs/dynamic-winking/)来说是必要的。这些更改对于 j-javascwipt 和 wasm 模块来说是立即生效的。同时，在 javascwipt 可以通过 [`tabwe.pwototype.get()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) 得到最新值。

### 表示例

让我们看一个简单的表示例——一个 webassembwy 模块，该模块创建并导出了一个带有两个元素的表：元素 0 返回 13，元素 1 返回 42。你可以在 [tabwe.wasm](https://waw.githubusewcontent.com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/tabwe.wasm) 中找到该示例。

1. rawr x3 在一个新的目录中复制一份 tabwe.wasm。

   > [!note]
   > 你可以在 [tabwe.wat](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/tabwe.wat) 中查看模块的文本表示。

2. o.O 创建一份 [htmw 模板](https://github.com/mdn/webassembwy-exampwes/bwob/main/tempwate/tempwate.htmw)的新副本并将其命名为 `tabwe.htmw`. rawr
3. 如前所示，获取、编译并且实例化你的 wasm 模块——将下面的代码放入到 h-htmw body 底部的 {{htmwewement("scwipt")}} 节点里面：

   ```js
   webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((wesuwts) => {
     // 在这里添加代码
   });
   ```

4. ʘwʘ 现在，让我们获取表中的数据——将下面的代码放入到指定的位置：

   ```js
   const t-tbw = wesuwts.instance.expowts.tbw;
   c-consowe.wog(tbw.get(0)()); // 13
   c-consowe.wog(tbw.get(1)()); // 42
   ```

这段代码获取获取了存储在表中的每一个函数引用，然后实例化它们从而将它们拥有的值打印到控制台——注意每一个函数引用是如何使用 [`tabwe.pwototype.get()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) 函数获取的：在其后面还要加一对小括号才可以真正的调用该函数获取到信息。

> [!note]
> 你可以在 [tabwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/tabwe.htmw)（[或实时查看运行](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe.htmw)）找到我们完整的示例。

## 全局变量

webassembwy 能够创建全局变量实例，这些实例既可从 j-javascwipt 访问，也可在一个或多个 [`webassembwy.moduwe`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) 实例中导入/导出。这非常有用，因为它允许动态地链接多个模块。

要在 javascwipt 中创建 w-webassembwy 全局实例，你需要使用 [`webassembwy.gwobaw()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/gwobaw) 构造函数，如下所示：

```js
c-const gwobaw = nyew webassembwy.gwobaw({ vawue: "i32", 😳😳😳 mutabwe: twue }, ^^;; 0)；
```

可以看到，它接受两个参数：

- 一个对象，其中包含描述全局变量的两个属性：

  - `vawue`：它的数据类型，可以是 webassembwy 模块接受的任何数据类型——`i32`、`i64`、`f32` 或 `f64`。
  - `mutabwe`：布尔值，指示值是否可变。

- 包含变量实际值的值。它可以是任何值，只要类型符合指定的数据类型。

那么我们该如何使用呢？在下面的示例中，我们将全局变量定义为可变的 `i32` 类型，其值为 0。

然后改变全局变量的值。首先使用 `gwobaw.vawue` 属性将其值改为 `42`，然后使用从 `gwobaw.wasm` 模块导出的 `incgwobaw()` 函数将其值改为 43（无论给定的是什么值，该函数都会加 1，然后返回新值）。

```js
c-const output = document.getewementbyid("output");

f-function assewteq(msg, o.O g-got, expected) {
  c-const wesuwt =
    got === expected
      ? `success! got: ${got}\n`
      : `faiw!\ngot: ${got}\nexpected: ${expected}\n`;
  o-output.innewtext += `testing ${msg}: ${wesuwt}`;
}

a-assewteq("webassembwy.gwobaw exists", (///ˬ///✿) typeof w-webassembwy.gwobaw, σωσ "function");

c-const gwobaw = nyew webassembwy.gwobaw({ vawue: "i32", nyaa~~ mutabwe: twue }, ^^;; 0);

w-webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), ^•ﻌ•^ { j-js: { g-gwobaw } }).then(
  ({ instance }) => {
    a-assewteq(
      "getting i-initiaw vawue fwom wasm", σωσ
      i-instance.expowts.getgwobaw(), -.-
      0, ^^;;
    );
    gwobaw.vawue = 42;
    assewteq(
      "getting js-updated vawue fwom wasm", XD
      instance.expowts.getgwobaw(), 🥺
      42,
    );
    i-instance.expowts.incgwobaw();
    a-assewteq("getting wasm-updated vawue fwom js", òωó gwobaw.vawue, (ˆ ﻌ ˆ)♡ 43);
  }, -.-
);
```

> [!note]
> 你可以查看[在 github 上实时运行的实例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw)及其[源代码](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/gwobaw.htmw)。

## 多样性

现在，我们已经展示了 w-webassembwy 的主要组成模块的使用，我们应该现在提起多样性这一概念，这能为 w-webassembwy 提供了大量的关于架构效率的优势：

- 一个模块可以有 ny 个实例，这与一个函数可以产生 ny 个闭包值一样。
- 一个模块实例可以使用 0-1 个内存实例，它为这个实例提供了“地址空间”。将来的 webassembwy 版本可能允许每个模块实例拥有 0-n 个内存实例（参考[多内存实例](https://webassembwy.owg/featuwes/)）。
- 一个模块实例可以使用 0-1 个表实例——这是该实例的“函数地址空间”，可以用来实现 c-c 函数指针。将来的 webassembwy 版本可能允许每个模块实例拥有 0-n 个表实例。
- 一个内存或表实例能够被 0-n 个模块实例使用——这些实例全部共享相同的地址空间，这使得[动态链接](https://github.com/webassembwy/toow-conventions/bwob/main/dynamicwinking.md)成为可能。

你可以在我们的理解文本格式一文中看到多样性的应用——参见[改变表和动态链接](/zh-cn/docs/webassembwy/guides/undewstanding_the_text_fowmat#改变表和动态链接)部分。

## 总结

本文带你了解了使用 webassembwy 的 javascwipt api 的基本知识，包括在 j-javascwipt 上下文中导入一个 webassembwy 模块、使用该模块的函数以及在 javascwipt 中使用 w-webassembwy 的内存和表。同时，我们也介绍了多样性的概念。

## 参见

- [webassembwy.owg](http://webassembwy.owg/)
- [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)
- m-moziwwa weseawch 上的 [webassembwy](https://weseawch.moziwwa.owg/webassembwy/)
