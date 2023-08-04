---
title: console.trace
slug: Web/API/console/trace
---

{{APIRef("Console API")}}

{{domxref("console")}} 的 **`trace()` 方法**向 [Web 控制台](/zh-CN/Tools/Web_Console) 输出一个堆栈跟踪。

{{AvailableInWorkers}}

在页面{{ domxref("console") }}文档中查看[堆栈跟踪](/zh-CN/docs/Web/API/console#堆栈跟踪)的详细介绍和示例。

## 语法

```plain
console.trace( [...any, ...data ]);
```

### 参数

- `...any, ...data` {{optional_inline}}
  - : Zero or more objects to be output to console along with the trace. These are assembled and formatted the same way they would be if passed to the {{domxref("console.log()")}} method.

## Example

```plain
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

In the console, the following trace will be displayed:

```plain
bar
foo
<anonymous>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
