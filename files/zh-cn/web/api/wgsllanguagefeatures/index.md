---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", 1)}} 的 **`WGSLLanguageFeatures`** 接口是[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)对象，用于报告 WebGPU 实现支持的 [WGSL 语言扩展](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)。

`WGSLLanguageFeatures` 对象可通过 {{domxref("GPU.wgslLanguageFeatures")}} 属性访问。

> [!NOTE]
> 并非所有 WGSL 语言扩展在支持 WebGPU API 的所有浏览器中都可用。我们建议你对选择使用的任何扩展程序进行彻底测试。

{{InheritanceDiagram}}

## 可用特性

可用的 WGSL 语言扩展可能因实现和物理设备的不同而不同，也可能随着时间的推移而变化；因此，我们没有在此列出。有关完整列表，请参阅 WGSL 规范中的 [WGSL 语言扩展](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)。

## 实例属性

以下属性适用于所有只读[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)对象：

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : 返回集合中的值的数量。

## 实例方法

以下方法适用于所有只读[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)对象：

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : 返回用于判断集合中是否存在具有给定值的元素的布尔值。
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : 返回按插入顺序为集合中的每个元素生成**值**的新的迭代器对象。
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : {{jsxref("Set.prototype.values()", "values()")}} 的别名。
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : 返回该对象按插入顺序包含集合中每个元素的 **`[value, value]` 的数组**的新的迭代器对象。
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : 按插入顺序对集合中的每个值调用一次提供的回调函数。

## 示例

```js
if (!navigator.gpu) {
  throw Error("不支持 WebGPU。");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// 返回集合的大小
console.log(wgslFeatures.size);

// 使用 values() 遍历所有集合值
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// ...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebGPU API](/zh-CN/docs/Web/API/WebGPU_API)
