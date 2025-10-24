---
title: 使用 WebAssembly JavaScript API
slug: WebAssembly/Guides/Using_the_JavaScript_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

如果你已经[使用 Emscripten 等工具编译了另一种语言的模块](/zh-CN/docs/WebAssembly/Guides/C_to_Wasm)，或者[自行加载并运行代码](/zh-CN/docs/WebAssembly/Guides/Loading_and_running)，那么下一步是了解如何使用 WebAssembly JavaScript API 的其他特性。这篇文章告诉你你需要知道什么。

> [!NOTE]
> 如果你不熟悉本文中提到到基础概念并且需要更多的解释，请先阅读 [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)。

## 简单示例

让我们通过一步一步的例子来了解如何在 WebAssembly 中使用 Javascript API，和如何在网页中加载一个 wasm 模块。

> [!NOTE]
> 你可以在 [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub 仓库找到相同的代码。

### 准备工作

1. 首先需要一个 wasm 模块！下载 [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) 文件到本机的一个新的目录下。
2. 然后，在你的本机的 wasm 文件处于同一目录下，创建一个名为 `index.html` 的简单的 HTML 文件（如果你没有模板，可以使用我们提供的[简单模板](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)）。
3. 现在，为了帮助我们理解发生了什么，让我们来看看这个 wasm 模块的文本表示（我们也在[将 WebAssembly 文本格式转换为 wasm](/zh-CN/docs/WebAssembly/Guides/Text_format_to_Wasm#初识文本格式) 一文中讨论了这一点）：

   ```wasm
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
           call $i))
   ```

4. 在第二行，你将看到导入有一个两级命名空间——内部函数 `$i` 是从 `my_namespace.imported_func` 导入的。编写要导入到 wasm 模块的对象时，我们需要在 JavaScript 中反映这个两级命名空间。在你的 HTML 文件中创建一个 `<script></script>` 节点，并添加下面的代码：

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### 串流 WebAssembly 模块

Firefox 58 新增了直接从底层源编译和实例化 WebAssembly 模块的功能。这是通过 [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) 和 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 方法实现的。这些方法比非串流的方法更简单，因为它们可以将字节码直接转化为“模块”/“实例”，而无需将 {{domxref("Response")}} 单独放入 {{jsxref("ArrayBuffer")}} 中。

本示例（参见 GitHub 上的 [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) 演示，或者[在线查看](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)）展示了如何使用 `instantiateStreaming()` 获取 Wasm 模块、向其中导入 JavaScript 函数、编译和实例化该模块以及访问其导出函数，所有这些都只需一步即可完成。

在脚本的第一个代码块下面添加以下内容：

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

这样做的最终结果是，我们调用了导出的 WebAssembly 函数 `exported_func`，该函数又调用了导入的 JavaScript 函数 `imported_func`，该函数会将 WebAssembly 实例内部提供的值（42）记录到控制台。如果你现在保存你的示例代码，并在支持 WebAssembly 的浏览器中加载它，你就能看到程序这样运行起来！

> [!NOTE]
> 这是一个迂回曲折、啰嗦冗长，但却并没有什么意义的示例，但它确实说明了在 Web 应用程序中使用 WebAssembly 代码和 JavaScript 的可能性。正如我们在其他地方所说的那样，WebAssembly 的目标并不是取代 JavaScript；相反，两者可以相互协作，取长补短。

### 不使用流加载我们的 Wasm 模块

如果你不能或不想使用上述的流方法，你可以使用非串流的方法 [`WebAssembly.compile()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compile_static)/[`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 来代替。

这些方法不能直接访问字节码，因此需要额外的步骤：在编译/实例化 Wasm 模块之前将响应转化为 {{jsxref("ArrayBuffer")}}。

等价的代码如下：

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### 在开发者工具查看 wasm

Firefox 54+ 中的开发者工具调试器面板能够显示网页中任何 Wasm 代码的文本表示。要查看这一面板，你可以进入调试器面板，点击“wasm://”条目。

![突出显示了一个模块的开发工具调试器面板](wasm-debug.png)

除了以文本格式查看 WebAssembly 外，开发人员还可以使用文本格式调试 WebAssembly（设置断点、检查调用堆栈、单步调试等）。

## 内存

在 WebAssembly 的底层内存模型中，内存被表示为一个连续的无类型字节范围，称为[线性内存](https://webassembly.github.io/spec/core/exec/index.html)，由模块内部的[加载和存储指令](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions)读写。在这种内存模型中，任何加载或存储指令都可以访问整个线性内存中的任何字节，这对于忠实表示指针等 C/C++ 概念来说是必要的。

但与本地 C/C++ 程序不同的是，本地 C/C++ 程序的可用内存范围横跨整个进程，而特定 WebAssembly 实例可访问的内存仅限于 WebAssembly 内存对象所包含的一个特定范围（可能非常小）。这样，一个网络应用程序就可以使用多个独立的库，每个库都在内部使用 WebAssembly，并拥有完全相互隔离的独立内存。此外，较新的实现还可以创建[共享内存](/zh-CN/docs/WebAssembly/Guides/Understanding_the_text_format#共享内存)，这些内存可以使用 [`postMessage()`](/zh-CN/docs/Web/API/Window/postMessage) 在 Window 和 Worker 上下文之间传输，并在多个地方使用。

在 JavaScript 中，Memory 实例可被视为一个可调整大小的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)（如果是共享存储器的话，则是 [`SharedArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)），就像使用 `ArrayBuffers` 一样，Web 应用可以创建多个独立的 Memory 对象。你可以使用 [`WebAssembly.Memory()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 构造函数创建一个对象（参数包括初始大小和（可选）最大大小，以及说明是否为共享内存的 `shared` 属性）。

让我们从一个快速示例开始探索。

1. 创建另一个新的简单 HTML 页面（复制我们的[简单模板](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)），并将其命名为 `memory.html`。在页面中添加一个 `<script></script>` 元素。
2. 现在在脚本顶部添加以下一行，以创建内存实例：

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   初始和最大的单位是 WebAssembly 页——这些页的大小固定为 64KB。这意味着上述内存实例的初始大小为 640KB，最大大小为 6.4MB。

   WebAssembly 内存通过简单地提供一个返回 ArrayBuffer 的缓冲区 getter / setter 来显示它的字节。例如，要直接将 42 写入线性内存的第一个单词，你可以这样做：

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   需要注意这里的参数 `true` 强制要求使用小端序进行读写，因为 WebAssembly 的内存总是小端序的。你也可以这样做来获取刚才的值：

   ```js
   data.getUint32(0, true);
   ```

3. 现在尝试这个演示——保存目前为止添加的内容，将其加载到浏览器中，然后尝试在 JavaScript 控制台中输入上述两行。

### 增加内存

内存实例的大小可以通过 [`Memory.prototype.grow()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) 来增加，再次以 WebAssembly 页为单位指定参数：

```js
memory.grow(1);
```

如果在创建内存实例时提供了最大值，则尝试超过此最大值将抛出 {{jsxref("RangeError")}} 异常。引擎利用这个提供的上限来提前预留内存，这样可以使调整大小更有效率。

注意：由于 {{jsxref("ArrayBuffer")}} 的 byteLength 是不可变的，所以在成功执行 [`Memory.prototype.grow()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) 操作之后，缓冲区 getter 将返回一个新的 ArrayBuffer 对象（带有一个新的 byteLength），同时任何先前的 ArrayBuffer 对象都将被“分离开来”，或者说与先前指向的底层内存断开连接。

和函数一样，线性内存可以在模块内部进行定义或者导入。类似地，模块还可以可选地导出其内存。这这意味着 JavaScript 可以通过创建一个新的 `WebAssembly.Memory` 并将其作为导入或通过接收内存导出传递给 WebAssembly 实例的内存来访问（通过使用 [`Instance.prototype.exports`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)）。

### 更复杂的内存示例

让我们通过看一个更复杂的内存示例——一个对整数数组进行求和的 WebAssembly 模块——来明确上面的概念。你可以在 [memory.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm) 中找到示例。

1. 像前面那样在相同的目录下复制一份 `memory.wasm`。

   > [!NOTE]
   > 你可以在 [memory.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat) 找到模块的文本表示形式。

2. 回到你的示例文件 `memory.html`，像前面那样获取、编译和实例化你的 wasm 模块——在你的脚本代码底部加入下面的代码：

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // 在这里添加代码
   });
   ```

3. 因为该模块导出了它的内存，给定该模块的一个实例，我们可以使用一个导出函数 `accumulate()` 在该模块实例的线性内存（`mem`）中创建和填入一个输入数组。在前面指明的地方加入如下代码：

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

注意我们是如何在内存对象的缓冲区（[`Memory.prototype.buffer`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)）中，而不是在内存对象本身上创建 {{jsxref("DataView")}} 视图的。

内存导入与函数导入很像，只是内存对象取代了 JavaScript 函数作为了传入值。内存导入在下面两方面很有用：

- 它们允许 JavaScript 在模块编译之前或者同时获取和创建内存的初始内容。
- 它们允许一个单一的内存对象被多个模块实例导入，对于实现 WebAssembly 动态链接来说，这是一个关键的构建模块。

> [!NOTE]
> 你可以在 [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html)（[或实时运行](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)）中找到我们的完整示例。

## 表

WebAssembly 表是一个可变大小的带类型的[引用](https://zh.wikipedia.org/wiki/參照)数组，其中的引用可以被 JavaScript 和 WebAssembly 代码存取。然而，内存提供的是一个可变大小的带类型的原始字节数组。所以，把引用存储在内存中是不安全。由于安全、可移植性和稳定性等原因，作为引擎信任的引用值是千万不能被直接读写的。

表有一个元素类型，其限制了可以存储在表的引用类型。在当前的 WebAssembly 版本中，只有一种 WebAssembly 代码所需要的引用类型——函数——也就是唯一合法的元素类型。在将来的版本中，更多的元素类型会被加入。

函数引用对于编译诸如 C/C++ 这类拥有函数指针的语言来说是必要的。在 C/C++ 的原生实现中，函数指针是通过函数代码在进程的虚地址空间的原始地址表示的，并且由于前面提到的安全原因，它是不能被直接存储在线性内存中的。取而代之的是，函数引用被存储在表中。它们的整数索引可以存储在线性内存中并进行传递。

当调用一个函数指针的时候，WebAssembly 调用函数提供索引。在进行索引和调用索引到的函数引用之前，可以对该索引进行表的安全边界检查。因而，目前的表是一个相当底层的用来安全地和可移植地编译底层编程语言特性的基本类型。

表可以通过 [`Table.prototype.set()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/set) 和 [`Table.prototype.grow()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) 进行更改，它们会更新表中的一个值和增加可以存储在表的大小。这允许间接可调用函数集合可以随着时间而改变，其对于[动态链接技术](http://webassembly.org/docs/dynamic-linking/)来说是必要的。这些更改对于 JavaScript 和 wasm 模块来说是立即生效的。同时，在 JavaScript 可以通过 [`Table.prototype.get()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/get) 得到最新值。

### 表示例

让我们看一个简单的表示例——一个 WebAssembly 模块，该模块创建并导出了一个带有两个元素的表：元素 0 返回 13，元素 1 返回 42。你可以在 [table.wasm](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm) 中找到该示例。

1. 在一个新的目录中复制一份 table.wasm。

   > [!NOTE]
   > 你可以在 [table.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) 中查看模块的文本表示。

2. 创建一份 [HTML 模板](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)的新副本并将其命名为 `table.html`.
3. 如前所示，获取、编译并且实例化你的 wasm 模块——将下面的代码放入到 HTML body 底部的 {{htmlelement("script")}} 节点里面：

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // 在这里添加代码
   });
   ```

4. 现在，让我们获取表中的数据——将下面的代码放入到指定的位置：

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

这段代码获取获取了存储在表中的每一个函数引用，然后实例化它们从而将它们拥有的值打印到控制台——注意每一个函数引用是如何使用 [`Table.prototype.get()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/get) 函数获取的：在其后面还要加一对小括号才可以真正的调用该函数获取到信息。

> [!NOTE]
> 你可以在 [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html)（[或实时查看运行](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)）找到我们完整的示例。

## 全局变量

WebAssembly 能够创建全局变量实例，这些实例既可从 JavaScript 访问，也可在一个或多个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 实例中导入/导出。这非常有用，因为它允许动态地链接多个模块。

要在 JavaScript 中创建 WebAssembly 全局实例，你需要使用 [`WebAssembly.Global()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Global) 构造函数，如下所示：

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0)；
```

可以看到，它接受两个参数：

- 一个对象，其中包含描述全局变量的两个属性：
  - `value`：它的数据类型，可以是 WebAssembly 模块接受的任何数据类型——`i32`、`i64`、`f32` 或 `f64`。
  - `mutable`：布尔值，指示值是否可变。

- 包含变量实际值的值。它可以是任何值，只要类型符合指定的数据类型。

那么我们该如何使用呢？在下面的示例中，我们将全局变量定义为可变的 `i32` 类型，其值为 0。

然后改变全局变量的值。首先使用 `Global.value` 属性将其值改为 `42`，然后使用从 `global.wasm` 模块导出的 `incGlobal()` 函数将其值改为 43（无论给定的是什么值，该函数都会加 1，然后返回新值）。

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}\n`
      : `FAIL!\nGot: ${got}\nExpected: ${expected}\n`;
  output.innerText += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> [!NOTE]
> 你可以查看[在 GitHub 上实时运行的实例](https://mdn.github.io/webassembly-examples/js-api-examples/global.html)及其[源代码](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html)。

## 多样性

现在，我们已经展示了 WebAssembly 的主要组成模块的使用，我们应该现在提起多样性这一概念，这能为 WebAssembly 提供了大量的关于架构效率的优势：

- 一个模块可以有 N 个实例，这与一个函数可以产生 N 个闭包值一样。
- 一个模块实例可以使用 0-1 个内存实例，它为这个实例提供了“地址空间”。将来的 WebAssembly 版本可能允许每个模块实例拥有 0-N 个内存实例（参考[多内存实例](https://webassembly.org/features/)）。
- 一个模块实例可以使用 0-1 个表实例——这是该实例的“函数地址空间”，可以用来实现 C 函数指针。将来的 WebAssembly 版本可能允许每个模块实例拥有 0-N 个表实例。
- 一个内存或表实例能够被 0-N 个模块实例使用——这些实例全部共享相同的地址空间，这使得[动态链接](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md)成为可能。

你可以在我们的理解文本格式一文中看到多样性的应用——参见[改变表和动态链接](/zh-CN/docs/WebAssembly/Guides/Understanding_the_text_format#改变表和动态链接)部分。

## 总结

本文带你了解了使用 WebAssembly 的 JavaScript API 的基本知识，包括在 JavaScript 上下文中导入一个 WebAssembly 模块、使用该模块的函数以及在 JavaScript 中使用 WebAssembly 的内存和表。同时，我们也介绍了多样性的概念。

## 参见

- [webassembly.org](http://webassembly.org/)
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- Mozilla Research 上的 [WebAssembly](https://research.mozilla.org/webassembly/)
