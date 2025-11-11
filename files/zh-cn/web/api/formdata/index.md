---
title: FormData
slug: Web/API/FormData
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

**`FormData`** 接口提供了一种表示表单数据的键值对 `key/value` 的构造方式，并且可以轻松的将数据通过{{domxref("XMLHttpRequest.send()")}} 方法发送出去，本接口和此方法都相当简单直接。如果送出时的编码类型被设为 `"multipart/form-data"`，它会使用和表单一样的格式。

如果你想构建一个简单的`GET`请求，并且通过{{HTMLElement("form")}}的形式带有查询参数，可以将它直接传递给{{domxref("URLSearchParams")}}。

实现了 `FormData` 接口的对象可以直接在{{jsxref("Statements/for...of", "for...of")}}结构中使用，而不需要调用{{domxref('FormData.entries()', 'entries()')}} : `for (var p of myFormData)` 的作用和 `for (var p of myFormData.entries())` 是相同的。

## 构造函数

- {{domxref("FormData.FormData","FormData()")}}
  - : 创建一个新的 `FormData` 对象。

## 方法

- {{domxref("FormData.append()")}}
  - : 向 `FormData` 中添加新的属性值，`FormData` 对应的属性值存在也不会覆盖原值，而是新增一个值，如果属性不存在则新增一项属性值。
- {{domxref("FormData.delete()")}}
  - : 从 FormData 对象里面删除一个键值对。
- {{domxref("FormData.entries()")}}
  - : 返回一个包含所有键值对的{{jsxref("Iteration_protocols","iterator")}}对象。
- {{domxref("FormData.get()")}}
  - : `返回在 FormData` 对象中与给定键关联的第一个值。
- {{domxref("FormData.getAll()")}}
  - : 返回一个包含 `FormData` 对象中与给定键关联的所有值的数组。
- {{domxref("FormData.has()")}}
  - : `返回一个布尔值表明 FormData` 对象是否包含某些键。
- {{domxref("FormData.keys()")}}
  - : 返回一个包含所有键的{{jsxref("Iteration_protocols","iterator")}}对象。
- {{domxref("FormData.set()")}}
  - : 给 `FormData` 设置属性值，如果`FormData` 对应的属性值存在则覆盖原值，否则新增一项属性值。
- {{domxref("FormData.values()")}}
  - : 返回一个包含所有值的{{jsxref("Iteration_protocols","iterator")}}对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLHTTPRequest")}}
- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
