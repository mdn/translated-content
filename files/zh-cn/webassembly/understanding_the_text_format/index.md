---
title: 理解 WebAssembly 文本格式
slug: WebAssembly/Understanding_the_text_format
---

{{WebAssemblySidebar}}

为了能够让人类阅读和编辑 WebAssembly，wasm 二进制格式提供了相应的文本表示。这是一种用来在文本编辑器、浏览器开发者工具等工具中显示的中间形式。本文用基本语法的方式解释了这种文本表示是如何工作的，以及它是如何与它表示的底层字节码，及在 JavaScript 中表示 wasm 的封装对象关联起来的。
本质上，这种文本形式更类似于处理器的汇编指令。

> [!NOTE]
> 如果你是一个 Web 开发者并且只是想在页面中加载 wasm 模块然后在你的代码中使用它（参考[使用 WebAssembly 的 JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)），那么，本文可能有点儿强人所难了。但是，如果你想编写 wasm 模块从而优化你的 JavaScript 的性能或者构建你自己的 WebAssembly 编译器，那么，本文是很有用的。

## S-表达式

不论是二进制还是文本格式，WebAssembly 代码中的基本单元是一个模块。在文本格式中，一个模块被表示为一个大的 S-表达式。

S-表达式是一个非常古老和非常简单的用来表示树的文本格式。因此，我们可以把一个模块想象为一棵由描述了模块结构和代码的节点组成的树。不过，与一门编程语言的抽象语法树不同的是，WebAssembly 的树是相当平的，也就是大部分包含了指令列表。

首先，让我们看下 S-表达式长什么样。树上的每个一个节点都有一对括号——( ... )——包围。括号内的第一个标签告诉你该节点的类型，其后跟随的是由空格分隔的属性或孩子节点列表。

S-表达式如下：

```wasm
(module (memory 1) (func))
```

这条表达式，表示一棵根节点为“模块（module）”的树，该树有两个孩子节点，分别是 属性为 1 的“内存（memory）”节点 和 一个“函数（func）”节点。我们一会儿就会看到这些节点的含义。

### 最简单的模块

让我们从最简单最短的可能的 wasm 模块开始。

```wasm
(module)
```

这个模块完全是空的，但是仍然是一个合法的模块。

如果我们现在把该模块转换为二进制（参考[把 WebAssembly 文本格式转换为 wasm](/zh-CN/docs/WebAssembly/Text_format_to_wasm)），我们将会看到在[二进制格式](http://webassembly.org/docs/binary-encoding/#high-level-structure)中描述的 8 字节的模块头：

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0d00 0000              ; WASM_BINARY_VERSION
```

### 向你的模块中增加功能

好了，那并不是很有趣，让我们向模块中增加一些可执行代码。

WebAssembly 模块中的所有代码都是划分到函数里面。函数具有下列的伪代码结构：

```wasm
( func <signature> <locals> <body> )
```

- **签名** 声明函数需要的参数以及函数的返回值。
- **局部变量** 像 JavaScript 中的变量，但是显式的声明了类型。
- **函数体** 是一个低级指令的线性列表。

## 签名和参数

签名是由一系列参数类型声明，及其后面的返回值类型声明列表组成。值得注意的是：

- 没有 (result) 意味着函数不返回任何东西。
- 在当前版本中，最多拥有一个返回类型，但是[以后会放开这个限制](https://webassembly.org/docs/future-features#multiple-return)到任意数量。

每一个参数都有一个显式声明的类型，wasm 当前有四个可用类型：

- i32:32 位整数
- i64:64 位整数
- f32:32 位浮点数
- f64:64 位浮点数

参数格式为 **`(param <类型>)`**，返回值格式为 **`(result <类型>)`**。

因此，接受两个 32 位整数，返回一个 64 位浮点数的函数应该这样写：

```wasm
(func (param i32) (param i32) (result f64) ... )
```

在签名的后面是带有类型的局部变量，格式为 **`(local <类型>)`**。函数调用可以通过参数实参值对局部变量进行初始化。

## 获取和设置局部变量和参数

局部变量和参数能够被函数体使用 `local.get` 和 `local.set` 指令进行读写。

`local.get`/`local.set` 指令使用数字索引来指向将被存取的条目：按照它们的声明顺序，参数在前，局部变量在后。因此，给定下面的函数：

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

- `local.get 0` 会得到 i32 类型的参数
- `local.get 1` 会得到 f32 类型的参数
- `local.get 2` 会得到 f64 类型的局部变量

由于使用数字索引来指向某个条目容易让人混淆，因此，也可以通过别名的方式来访问它们，方法就是在类型声明的前面添加一个使用美元符号（$）作为前缀的名字。例如：

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc i32) …)
```

这里，使用 `local.get $p1` 就可以代替 `local.get 0`，访问参数 i32 变量时，就可以通过 $p1 进行访问。

> [!NOTE]
> 当文本转换为二进制后，二进制中只包含整数。

## 栈式机器

虽然浏览器把 wasm 编译为某种更高效的东西，但是，wasm 的执行是以栈式机器定义的。也就是说，其基本理念是每种类型的指令都是在栈上执行数值的入栈出栈操作。

例如，`local.get` 被定义为把它读到的局部变量值压入到栈上，然后 `i32.add` 从栈上取出两个 `i32` 类型值（它的含义是把前面压入栈上的两个值取出来）计算它们的和（以 2^32 求模），最后把结果压入栈上。

当函数被调用的时候，它是从一个空栈开始的。随着函数体指令的执行，栈会逐步填满和清空。例如，在执行了下面的函数之后：

```wasm
(func (param $p i32)
  local.get $p
  local.get $p
  i32.add)
```

栈上只包含一个 i32 类型值——表达式 ($p + $p) 的结果，该结果是由 i32.add 得到的。函数的返回值就是栈上留下的那个最终值。

WebAssembly 验证规则确保栈准确匹配：如果你声明了 (result f32)，那么，最终栈上必须包含一个 f32 类型值。如果没有 result 类型，那么栈必须是空的。

## 我们的第一个函数体

正如前面提到的，函数体就是函数被调用后执行的指令列表。把已经学到的放在一起，我们能够定义一个包含我们的简单函数的模块：

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

这个函数获取两个参数，然后相加，最后返回其结果。

有很多东西都可以放在函数体里面，但是，现在我们从简单的开始，然后随着逐步前进，你会看到更多的例子。访问 [webassembly.org 语义手册](http://webassembly.org/docs/semantics/)获取可用操作码的完整列表。

### 调用函数

我们的函数自己不会做什么——现在，我们需要调用它。我们该如何做呢？正如在一个 ES2015 模块里面一样，wasm 函数必须通过模块里面的 export 语句显式地导出。

像局部变量一样，函数默认也是通过索引来区分的，但是为了方便，可以给它们起个名字。让我们由此开始——首先，在关键字 func 的后面增加一个美元符号开头的名字：

```wasm
(func $add … )
```

现在，我们需要增加一个导出声明——看起来像下面这样：

```wasm
(export "add" (func $add))
```

这里的 add 是 JavaScript 中用来区别这个函数的名字，而$add 则是指出模块中的哪个 WebAssembly 函数将会被导出：

所以，我们最终的模块（当前）看起来像下面这样：

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

如果你想继续研究这个例子，那么把我们上面的模块保存到一个名叫 add.wat 的文件中，然后使用 wabt（参考[把 WebAssembly 文本格式转换为 wasm](/zh-CN/docs/WebAssembly/Text_format_to_wasm)）将其转换为名叫 add.wasm 的二进制文件。

接下来，我们把二进制文件加载到叫做 addCode 的带类型数组（[获取 WebAssembly 字节码](/zh-CN/docs/WebAssembly/Fetching_WebAssembly_bytecode)），编译并实例化它，然后在 JavaScript 中执行我们的 add 函数（现在，我们可以在实例的 [exports](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports) 属性中找到 add()）。

```js
fetchAndInstantiate("add.wasm").then(function (instance) {
  console.log(instance.exports.add(1, 2)); // "3"
});

// fetchAndInstantiate() found in wasm-utils.js
function fetchAndInstantiate(url, importObject) {
  return fetch(url)
    .then((response) => response.arrayBuffer())
    .then((bytes) => WebAssembly.instantiate(bytes, importObject))
    .then((results) => results.instance);
}
```

> [!NOTE]
> 你可以在 GitHub 上找到这个例子 [add.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/add.html)（[实时运行](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)）。另外，参考 [WebAssembly.instantiate()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate) 来获取关于实例化函数的更多细节以及 [wasm-utils.js](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js) 来获取 fetchAndInstantiate() 的源代码。

## 探索基本原则

现在，我们已经讨论了基本概念，让我们继续看看更高级的特性。

### 在同一模块里的函数调用其他函数成员

为函数给定一个索引或名字，`call`指令可以调用它。例如，下面的模块包含两个函数——一个返回值 42，另一个返回，第一个函数结果加 1。

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> [!NOTE]
> i32.const 只是定义一个 32 位整数并把它压入栈。你可以把 i32 替换为任何其他可用的类型，并把 const 值修改为你想要的任何值（这里，我们把这个值设置为 42）。

在这个例子中，你注意到一个 (export "getAnswerPlus1") 代码段，并且它声明在第二个函数的 func 语句之后——这声明我们想导出这个函数，以及定义导出的名字的简便方法。

从功能上来说，这与我们前面做过的那样，在函数外面，即模块的其他地方，包括一个独立的函数语句是等价的。例如：

```wasm
(export "getAnswerPlus1" (func $functionName))
```

调用我们前面模块的 JavaScript 看起来像这样：

```js
fetchAndInstantiate("call.wasm").then(function (instance) {
  console.log(instance.exports.getAnswerPlus1()); // "43"
});
```

> [!NOTE]
> 你可以在 GitHub 上找到这个例子 [call.wasm](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/call.html)（或[实时运行](https://mdn.github.io/webassembly-examples/understanding-text-format/call.html)）。再提一次，查看 [wasm-utils.js](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js) 来了解 fetchAndInstantiate() 的源代码。

### 从 JavaScript 导入函数

我们已经见过 JavaScript 调用 WebAssembly 函数，但是 WebAssembly 如何调用 JavaScript 函数呢？事实上，WebAssembly 对 JavaScript 没有任何了解，但是，它有一个可以导入 JavaScript 或 wasm 函数的通用方法。让我们看一个例子：

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly 使用了两级命名空间，所以，这里的导入语句是说我们要求从 console 模块导入 log 函数。另外，你可以看到在 logIt 函数中，通过 call 指令调用了 JavaScrpit 导入的函数 log。

导入的函数就像普通函数一样：它们拥有一个 WebAssembly 验证机制，会静态检查的签名，可以被设置一个索引，能够被命名和被调用。

JavaScript 函数没有签名的概念，因此，无论导入的声明签名是什么，任何 JavaScript 函数都可以被传递过来。一旦一个模块声明了一个导入， [WebAssembly.instantiate()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate)的调用者必须传递一个拥有相应属性的导入对象。

就上面而言，我们需要一个（让我们称之为 importObject 的）对象，并且 importObject.console.log 是一个 JavaScript 函数。

这看起来像下面这样：

```js
var importObject = {
  console: {
    log: function (arg) {
      console.log(arg);
    },
  },
};

fetchAndInstantiate("logger.wasm", importObject).then(function (instance) {
  instance.exports.logIt();
});
```

> [!NOTE]
> 你可以在 GitHub 上找到这个例子 [logger.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger.html)（[实时运行](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)）。

### WebAssembly 内存

上面的例子是一个相当简单的日志函数：它只是打印一个整数！要是我们想输出一个文本字符串呢？为了处理字符串及其他复杂数据类型，WebAssembly 提供了内存。

按照 WebAssembly 的定义，内存就是一个随着时间增长的字节数组。WebAssembly 包含诸如 i32.load 和 i32.store 指令来实现对[线性内存](http://webassembly.org/docs/semantics/#linear-memory)的读写。

从 JavaScript 的角度来看，内存就是一个 ArrayBuffer，并且它是可变大小的。从字面上来说，这也是 asm.js 所做的（除了它不能改变大小；参考 asm.js [编程模型](http://asmjs.org/spec/latest/#programming-model)）。

因此，一个字符串就是位于这个线性内存某处的字节序列。

让我们假设我们已经把一个合适的字符串字节写入到了内存中；那么，我们该如何把那个字符串传递给 JavaScript 呢？

关键在于 JavaScript 能够通过 {{jsxref("WebAssembly.Memory()")}} 接口创建 WebAssembly 线性内存实例，并且能够通过相关的实例方法获取已经存在的内存实例（当前每一个模块实例只能有一个内存实例）。内存实例拥有一个 [buffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) 获取器，它返回一个指向整个线性内存的 ArrayBuffer。

内存实例也能够增长。举例来说，在 JavaScript 中可以调用 [Memory.grow()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow) 方法。由于 ArrayBuffer 不能改变大小，所以，当增长产生的时候，当前的 ArrayBuffer 会被移除，并且一个新的 ArrayBuffer 会被创建并指向新的、更大的内存。这意味着为了向 JavaScript 传递一个字符串，我们所需要做的就是把字符串在线性内存中的偏移量，以及表示其长度的方法传递出去。

虽然有许多不同的方法在字符串自身当中保存字符串的长度（例如，C 字符串）；但是，这里为了简单起见，我们仅仅把偏移量和长度都作为参数：

```wasm
(import "console" "log" (func $log (param i32) (param i32)))
```

在 JavaScript 端，我们可以使用[文本解码器 API](/zh-CN/docs/Web/API/TextDecoder)，轻松地把我们的字节解码转化为一个 JavaScript 字符串。（这里，我们使用 utf8，不过，许多其他编码也是支持的。）

```js
consoleLogString(offset, length) {
  var bytes = new Uint8Array(memory.buffer, offset, length);
  var string = new TextDecoder('utf8').decode(bytes);
  console.log(string);
}
```

这个谜题的最后一部分就是 consoleLogString 从哪里获得？WebAssembly 的内存（memory）实例。这里，WebAssembly 给我们很大灵活性：我们既可以使用 JavaScript 创建一个[内存](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory)对象，让 WebAssembly 模块导入这个内存，或者我们让 WebAssembly 模块创建这个内存并把它导出给 JavaScript。

为了简单起见，让我们用 JavaScript 创建它，然后把它导入到 WebAssembly。我们的导入语句编写如下：

```wasm
(import "js" "mem" (memory 1))
```

1 表示导入的内存必须至少有 1 页内存。（WebAssembly 定义一页为 64KB。）

因此，让我们看一个完整的打印字符串“Hi”的模块。在一个常规的已编译的 C 程序，你会调用一个函数来为字符串分配一段内存。但是，因为我们正在编写自己的汇编，并且我们拥有整个线性内存，所以，我们可以使用数据（data）段把字符串内容写入到一个全局内存中。数据段允许字符串字节在实例化时被写在一个指定的偏移量。而且，它与原生的可执行格式中的数据（.data）段是类似的。

我们最终的 wasm 模块看起来像这样：

```wasm
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; pass offset 0 to log
    i32.const 2  ;; pass length 2 to log
    call $log))
```

> [!NOTE]
> 注意上面的双分号语法，它允许在 WebAssembly 文件中添加注释。

现在，我们可以从 JavaScript 中创建一个 1 页的内存（Memory）然后把它传递进去。这会在控制台输出"Hi"。

```js
var memory = new WebAssembly.Memory({ initial: 1 });

var importObj = { console: { log: consoleLogString }, js: { mem: memory } };

fetchAndInstantiate("logger2.wasm", importObject).then(function (instance) {
  instance.exports.writeHi();
});
```

> [!NOTE]
> 你可以在 GitHub 上找到完整源代码 [logger2.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger2.html)（[或者实时运行](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)）。

### WebAssembly 表格

为了结束 WebAssembly 文本格式之旅，让我们看看最难理解的、常常令人迷惑的 WebAssembly 部分：表格。

总的来说，表格是从 WebAssembly 代码中通过索引获取的可变大小的引用数组。

为了了解为什么表格是必须的，我们首先需要观察前面看到的 call 指令，它接受一个静态函数索引，并且只调用了一个函数——但是，如果被调用者是一个运行时值呢？

- 在 JavaScript 中，我们总是看到：函数是一等值。
- 在 C/C++ 中，我们看到了函数指针。
- 在 C++ 中，我们看到了虚函数。

WebAssembly 需要一种做到这一点的调用指令，因此，我们有了接受一个动态函数操作数的 call_indirect 指令。问题是，在 WebAssembly 中，当前操作数的仅有的类型是 i32/i64/f32/f64。

WebAssembly 可以增加一个 anyfunc 类型（"any"的含义是该类型能够持有任何签名的函数），但是，不幸的是，由于安全原因，这个 anyfunc 类型不能存储在线性内存中。**_`线性内存会把存储的原始内容作为字节暴露出去，并且这会使得 wasm 内容能够任意的查看和修改原始函数地址`_**，而这在网络上是不被允许的。

解决方案是在一个表格中存储函数引用，然后作为 代替，传递表格索引——它们只是 i32 类型值。因此，call_indirect 的操作数可以是一个 i32 类型索引值。

#### 在 wasm 中定义一个表格

那么，我们该如何在表格中放置 wasm 函数呢？就像数据段能够用来通过字节初始化线性内存区域一样，元素（elem）段能够用来通过函数初始化表格区域：

```wasm
(module
  (table 2 anyfunc)
  (elem (i32.const 0) $f1 $f2)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  ...
)
```

- 在 (table 2 anyfunc) 中，数字 2 表示的是表格的初始大小（也就是它将存储两个引用）并且 anyfunc 声明的是这些引用的元素类型是“一个具有任何签名的函数”。在当前的 WebAssembly 版本中，这是唯一被允许的元素类型，但是在将来，更多的元素类型会加入进来。
- 函数 (func) 部分跟任何其他声明的 wasm 函数没有什么两样。她们是我们将会在表格中引用的函数（作为例子，每一个只是返回一个静态值）。值得注意的是，函数部分声明的顺序并不重要——你可以在任何地方声明你的函数然后在你的元素段（elem section）中引用它们。
- 元素段（elem section）能够将一个模块中的任意函数子集以任意顺序列入其中，并允许出现重复。列入其中的函数将会被表格引用并，且引用顺序是其出现的顺序。
- 元素段（elem section）中的 (i32.const 0) 值是一个偏移量——它需要在元素段开始的位置声明，其作用是表明函数引用是在表格中的什么索引位置开始存储的。这里我们指定的偏移量是 0，表格大小是 2（参考上面），因此，我们可以在索引 0 和 1 的位置填入两个引用。如果想在偏移量 1 的位置开始写入引用，那么，我们必须使用 (i32.const 1) 并且表格大小必须是 3.

> [!NOTE]
> 未初始化的元素会被设定一个默认的调用即抛出（throw-on-call）值。

在 JavaScript 中，可以创建这样一个表格实例的等价的函数调用看起来如下所示：

```js
function() {
  // table section
  var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});

  // function sections:
  var f1 = function() { … }
  var f2 = function() { … }

  // elem section
  tbl.set(0, f1);
  tbl.set(1, f2);
};
```

#### 使用表格

接着继续。现在，表格已经定义好了，我们需要用某种方法使用它。让我们使用下面的代码段来做到这一点：

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect $return_i32)
```

- (type $return_i32 (func (result i32))) 代码块使用一个引用名字定义了一个类型。该类型被用来在后续的表格函数引用调用时进行类型检查。这里，我们声明的是该引用是一个返回值为 i32 类型的函数。
- 接下来，我们定义了一个导出名字为 callByIndex 的函数。它有一个接受 i32 类型的参数$i。
- 在函数里面，我们在栈顶压入一个值——该值就是传递给参数$i 的值。
- 最后，我们使用 call_indirect 指令调用表格中的函数——这隐含的意思是$的值从栈顶出栈。最终的结果就是 callByIndex 函数会调用表格中的第$i 个函数。

你也可以在命令调用的时候显式地声明 call_indirect 的参数，就像下面这样：

```wasm
(call_indirect $return_i32 (local.get $i))
```

在更高层面，像 JavaScript 这样更具表达力的语言，你可以设想使用一个数组（或者更有可能的是对象）来完成相同的事情。伪代码看起来像这样：tbl\[i]\()。

回到类型检查。因为 WebAssembly 是带有类型检查的，并且 anyfunc 的含义是任何函数签名，所以，我们必须在调用点提供假定的被调用函数签名。这里，我们包含了一个$return_i32 类型来告诉程序期望的是一个返回值为 i32 类型的函数。如果被调用函数没有一个匹配的签名（比如说返回值是 f32 类型的），那么，程序会抛出 [WebAssembly.RuntimeError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError) 异常。

那么，是什么把 call_indirect 指令和我们要是用的表格联系起来的呢？答案是，现在每一个模块实例只允许唯一一个表格存在，这也就是 call_indirect 指令隐式地使用的表格。在将来，当多表格被允许了，我们需要在代码行中指明一个某种形式的表格标识符：

```wasm
call_indirect $my_spicy_table $i32_to_void
```

完整的模块看起来如下所示并且能够在我们的 [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.wat) 示例文件中找到：

```wasm
(module
  (table 2 anyfunc)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  (elem (i32.const 0) $f1 $f2)
  (type $return_i32 (func (result i32)))
  (func (export "callByIndex") (param $i i32) (result i32)
    local.get $i
    call_indirect $return_i32)
)
```

我们使用下面的 JavaScript 把它加载到一个网页中：

```js
fetchAndInstantiate("wasm-table.wasm").then(function (instance) {
  console.log(instance.exports.callByIndex(0)); // 返回 42
  console.log(instance.exports.callByIndex(1)); // 返回 13
  console.log(instance.exports.callByIndex(2));
  // 返回一个错误，因为在表格中没有索引值 2
});
```

> [!NOTE]
> 你可以在 GitHub 上找到这个例子 [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.html) ([实时查看](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html))。

> [!NOTE]
> 就像内存一样，表格也能够从 JavaScript 中创建 (参考 [WebAssembly.Table()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table)) 并且能够导入和导出到其他 wasm 模块。

### 改变表格和动态链接

因为 JavaScript 对于函数引用有完全的存取权限，所以，从 JavaScript 中通过 [grow()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow)、[get()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) 和 [set()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set) 方法能够改变表格对象。

因为表格是可变的，所以，它们能够用来实现复杂的加载时和运行时[动态链接](http://webassembly.org/docs/dynamic-linking)。当程序被动态地链接，多个实例共享相同的内存和表格。这与原生应用程序的多个.dll 共享一个进程地址空间是等价的。

为了看看实际情况，我们会创建一个包含一个内存对象和一个表格对象的导入对象，并且把这个导入对象传递到多个 [instantiate()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate) 调用中去。

我们的.wat 看起来像这样：

`shared0.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 anyfunc))
  (elem (i32.const 0) $shared0func)
  (func $shared0func (result i32)
    i32.const 0
    i32.load)
)
```

`shared1.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 anyfunc))
  (type $void_to_i32 (func (result i32)))
  (func (export “doIt”) (result i32)
    i32.const 0
    i32.const 42
    i32.store  ;; store 42 at address 0
    i32.const 0
    call_indirect $void_to_i32)
)
```

运行逻辑如下：

1. 函数 shared0func 在 shared0.wat 中定义并存储在我们的导出表格对象 (table) 中。
2. 该函数先创建一个常量值为 0，然后执行 i32.load 指令。用给定的内存索引，去加载存储到内存对象中的值，给定的索引值为 0。——这样，会隐式地将之前的值出栈。所以，shared0func 加载并返回了存储在内存对象索引 0 处的值。
3. 在 shared1.wat 中，我们导出了一个名为 doIt 的函数——这个函数创建了两个常量值，分别为 0 和 42，然后使用 i32.store 指令把给定的值存储在指定索引位置的内存对象中。同样的，该指令会把这些值出栈，所以，结果就是把 42 存储在内存索引 0 处。
4. 在这个函数的最后一部分，我们创建了常量值 0，然后调用表格中索引 0 处的函数，该函数正是我们之前在 shared0.wat 中的使用元素代码段（elem block）存储的 shared0func。
5. shared0func 在被调用之后会加载我们在 shared1.wat 中使用 i32.store 指令存储在内存中的 42。

> [!NOTE]
> 上面的表达式会隐式地把这些值出栈，但是，你可以在使用指令的时候进行显式地声明。例如：
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect $void_to_i32 (i32.const 0))
> ```

在转换为汇编之后，我们可以在 JavaScript 中通过下面的代码使用 shared0.wasm 和 shared1.wasm：

```js
var importObj = {
  js: {
    memory: new WebAssembly.Memory({ initial: 1 }),
    table: new WebAssembly.Table({ initial: 1, element: "anyfunc" }),
  },
};

Promise.all([
  fetchAndInstantiate("shared0.wasm", importObj),
  fetchAndInstantiate("shared1.wasm", importObj),
]).then(function (results) {
  console.log(results[1].exports.doIt()); // prints 42
});
```

每一个将被编译的模块都可以导入相同的内存和表格对象，这也就是共享相同的线性内存和表格的“地址空间”。

> [!NOTE]
> 你可以在 GitHub 上找到这个例子 [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/shared-address-space.html)（[或者实时运行](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)）。

## 总结

以上我们概括浏览了，关于 WebAssembly 文本格式的主要部分，以及它们是如何映射到 WebAssembly JS API 中的。

## 参见

- 没有介绍的一个主要的部分是在函数体中会出现的所有指令的清单。参考 [WebAssembly 语义](http://webassembly.org/docs/semantics)来了解每条指令的含义。
- 参考被规范解释器实现的[文本格式语法](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax)。
