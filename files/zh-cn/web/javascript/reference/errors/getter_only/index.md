---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
TypeError: setting getter-only property "x" (Firefox)
TypeError: Cannot set property "prop" of #<Object> which has only a getter (Chrome)
```

## 错误类型

仅在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下报 {{jsxref("TypeError")}} 错误。

## 哪里出错了？

该错误提示出现于试图给一个仅仅设置了 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 特性的属性赋新值的时候。在非严格模式下会被静默忽略，而在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下会报 {{jsxref("TypeError")}} 错误。

## 示例

下面的例子展示了如何为一个属性设置 getter 特性。由于没有设置 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 特性，所以在试图将 temperature 属性值设置为 30 的时候会报 TypeError 的错误。相关细节信息可以参考 {{jsxref("Object.defineProperty()")}} 页面。

```js example-bad
"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

至于修复问题的方法，可以将第 16 行的代码移除，因为它试图为 temperature 属性赋值，或者是为它添加一个 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 特性，就像下面这样：

```js example-good
"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## 相关内容

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
