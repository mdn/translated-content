---
title: 将 WebAssembly 文本格式转换为 wasm
slug: WebAssembly/Text_format_to_Wasm
---

{{WebAssemblySidebar}}

WebAssembly 有一个基于 S-表达式的文本表示形式，设计为在文本编辑器，浏览器开发人员工具等中暴露的一个中间形式。本文解释了它是如何工作的一些内容以及如何使用可用的工具把文本格式文件转换为.wasm 汇编格式文件。

> **备注：** 文本格式文件通常被保存为.wat 扩展名；有时.wast 也被使用，它是说文件包含了额外的测试命令（断言等）并且它们不需要转换到.wasm 中。

## 初识文本格式

让我们看一个简单的例子——下面的程序从一个叫做 imports 的模块中导入了一个叫做 imported_func 的函数并且导出了一个叫做 exported_func 的函数：

```wasm
(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

WebAssembly 函数 exported_func 是被导出供我们的环境（比如，使用了 WebAssembly 模块的网络应用）使用。当被调用的时，它进而调用了一个被导入的叫做 imported_func 的函数并且向该函数传递了一个值（42）作为参数。

## 把.wat 文本文件转换为.wasm 二进制文件

让我们尝试一下把前面提到的 wat 文本表示的例子转换为 wasm 汇编格式。

1. 首先，把前面的清单内容复制到一个文本文件中；命名为 simple.wat。
2. 在使用它之前，我们需要把这个文本表示汇编为浏览器能够识别的汇编语言。为了达到这个目的，我们可以使用 wabt 工具，该工具包括了在 WebAssembly 文本表示和 wasm 之间进行相互转化的编译器以及其他一些功能。访问 <https://github.com/webassembly/wabt>——按照该页面的指令来安装好工具。
3. 当你安装好工具之后，将/wabt/out 目录添加到你的系统路径。
4. 下一步，执行 wat2wasm 程序，把输入文件的路径传递给它，紧跟一个-o 参数，然后是输出文件的路径：

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

该命令会把 wasm 输出到一个叫做 simple.wasm 的文件，该文件包含了.wasm 汇编代码。

> **备注：** 你可以使用 wasm2wat 工具把汇编代码转换为文本表示；例如，wasm2wat simple.wasm -o text.wat。

## 查看汇编输出

因为输出文件是基于汇编的，所以，它不能在常规的文本编辑器中查看。尽管如此，你可以使用 wat2wasm 工具的-v 选项来查看。试试这个：

```bash
wat2wasm simple.wat -v
```

这会在终端产生一个如下所示的输出：

![several strings of binary with textual descriptions beside them. For example: 0000008: 01 ; section code ](assembly-output.png)

## 另见

- [理解 WebAssembly 文本格式](/zh-CN/docs/WebAssembly/Understanding_the_text_format)——详细解释文本格式语法。
- [从 C/C++编译为 WebAssembly](/zh-CN/docs/WebAssembly/C_to_wasm)——诸如 Binaryen/Emscripten 的工具不但把你的代码编译为 wasm 而且创建必要的用来在一个 JavaScript 上下文中运行模块的 API 代码。关于如何使用它们，可以探究更多内容。
- 使用 WebAssembly 的 JavaScript API——如果你想探究关于 WebAssembly API 代码是如何工作的更多内容，可以阅读这篇文章。
- [文本格式](https://github.com/WebAssembly/design/blob/master/TextFormat.md)——在 WebAssembly 的 GitHub 仓库上面关于文本格式的更多解释。
