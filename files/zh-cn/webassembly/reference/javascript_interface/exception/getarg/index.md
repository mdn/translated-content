---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/Reference/JavaScript_interface/Exception/getArg
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

[`Exception`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception) 对象的 **`getArg()`** 原型方法可以用于获取异常的数据参数中指定项的值。

该方法传递一个 [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)，如果抛出的 `Exception` 创建用的标签是同一个的话，才会成功，否则会抛出 `TypeError`。这确保该异常仅能在调用代码有标签的访问权限时被读取。即不是导入到 WebAssembly 代码也不是从 WebAssembly 代码导出的标签是内部的，与之关联的 [`WebAssembly.Exception`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception) 不能使用该方法进行查询！

> [!NOTE]
> 数据类型顺序相同的标签是不够的——必须和异常创建时用的标签具有相同的*身份*（同一个标签）。

## 语法

```js-nolint
getArg(exceptionTag, index)
```

### 参数

- `exceptionTag`
  - : 必须与这个异常关联的标签相匹配的 [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)。
- `index`
  - : 数据参数中要返回的值的索引，从 0 开始索引。

### 返回值

位于 `index` 处的参数的值。

### 异常

- {{jsxref("TypeError")}}
  - : 标签不匹配；异常不是用传给方法的标签创建的。
- {{jsxref("RangeError")}}
  - : `index` 参数的值大于等于数据中字段的数量。

## 示例

为了获得异常的值，调用代码必须“知道”标签；它可能是被导入到调用代码也可能是从调用代码导出。

### 从导入的标签获取异常值

考虑下面的 WebAssembly 代码，假设其被编译为“example.wasm”。导入一个标签，内部引用为 `$tagname`，并导出一个可由外部代码调用的方法 `run`，该方法使用导入的标签抛出异常。

```wat
(module
  ;; 导入的标签在这引用为 $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)))

  ;; $throwException 函数将 i32 参数作为 $tagname 异常抛出
  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  ;; 导出调用 $throwException 的函数“run”
  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

下面的代码调用 [`WebAssembly.instantiateStreaming`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 导入“example.wasm”文件，传入的“导入对象”（`importObject`）中包含一个新的、名为 `tagToImport` 的 [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)。导入的对象用匹配 WebAssembly 代码中的 `import` 语句的属性定义一个对象。

一旦实例化文件，代码就调用导出的 WebAssembly `run` 方法，该方法会立即抛出异常。

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32"] });

// 注意：导入对象属性要匹配 WebAssembly 代码中的 import 语句！
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject)
  .then((obj) => {
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    console.log(`getArg 0 : ${e.getArg(tagToImport, 0)}`);
  });

/* 日志输出
example.js:40 WebAssembly.Exception: wasm exception
example.js:41 getArg 0 : 1
*/
```

代码捕获异常并用 `getArg()` 打印位于第一个索引的值。在这个例子中，就是“1”。

### 从导出的标签获取异常值

使用导出的标签的过程与上一节中展示的非常相似。这里是同样的 WebAssembly 模块，用 export 简单替换了 import。

```wat
(module
  ;; 给导出的标签一个外部名字：“exptag”
  (tag $tagname (export "exptag") (param i32))

  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  (func (export "run")
    i32.const 1
    call $throwException
  )
)
```

JavaScript 也是相似的。在这个例子中，我们没有导入，相反是有导出的标签并用它获取参数。为了更“安全”一些，这里我们也使用 [`is()` 方法](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)测试是否有正确的标签。

```js
let tagExportedFromWasm;

WebAssembly.instantiateStreaming(fetch("example.wasm"))
  .then((obj) => {
    // 使用 WebAssembly 模块中的名字导入标签
    tagExportedFromWasm = obj.instance.exports.exptag;
    console.log(obj.instance.exports.run());
  })
  .catch((e) => {
    console.error(e);
    // 如果标签是正确的，则获取值
    if (e.is(tagExportedFromWasm)) {
      console.log(`getArg 0 : ${e.getArg(tagExportedFromWasm, 0)}`);
    }
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
