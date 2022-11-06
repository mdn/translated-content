---
title: 'TypeError: can''t access dead object'
slug: Web/JavaScript/Reference/Errors/Dead_object
---

{{JSSidebar("Errors")}}

## 错误提示

```plain
TypeError: can't access dead object
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

为了提高内存使用效率以及防止内存泄露，Firefox 浏览器不允许插件在 DOM 所在的父页面被销毁后对 DOM 对象保持强引用。死对象指的是在 DOM 被销毁后依然持有对 DOM 元素的强引用 (处于活跃状态)。为了避免这样的问题，对处于外部文档中的 DOM 节点的引用应该被存储于一个专属于那个文档的对象当中，并且在文档卸载的时候将其清理，或者使用[弱引用](/zh-CN/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference)方式进行存储。

## Checking if an object is dead

[Components.utils](/zh-CN/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils) offers a `isDeadWrapper()` method, which privileged code might use.

```js
if (Components.utils.isDeadWrapper(window)) {
  // dead
}
```

Unprivileged code has no access to Component.utils and might just be able catch the exception.

```js
try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}
```

## 相关内容

- [What does “can’t access dead object” mean?](https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/)
- [Common causes of memory leaks in extensions](/zh-CN/docs/Extensions/Common_causes_of_memory_leaks_in_extensions)
- [Components.utils](/zh-CN/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils)
- [Zombie Compartments](/zh-CN/docs/Mozilla/Zombie_compartments)
