---
title: 可序列化对象
slug: Glossary/Serializable_object
---

{{GlossarySidebar}}

**可序列化对象**（Serializable object）是可以在任何 JavaScript 环境（领域，realm）中序列化、反序列化的对象。例如，这允许将此类对象存储在磁盘上并在以后进行恢复，或使用 {{DOMxRef("Window.structuredClone", "structuredClone()")}} 对它们进行拷贝，又或者使用 {{domxref("DedicatedWorkerGlobalScope.postMessage()")}} 在 Worker 之间共享它们。

序列化可能不包括原始对象的所有属性和其他方面的内容。例如，对 {{domxref("DOMException")}} 的序列化必须包含 `name` 和 `message` 属性，但是否包含其他属性则取决于具体实现。因此，反序列化的对象并不一定是与原始对象相同的拷贝。但是，反序列化得到的新的对象将会是一个{{glossary("deep copy", "深拷贝")}}，因此任何从原始对象序列化并反序列化到新的对象的属性都不会和原始对象共享任何引用。

在某些情况下，当序列化和反序列化一个对象时，可能会转移一些资源而非拷贝它们。可以转移的对象被称为[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)。

## 支持的对象

所有的基本类型都是可以被序列化的。但并非所有的对象都是可序列化对象。可以被序列化的对象在[结构化克隆算法 > 支持的类型](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#支持的类型)中列出。

> [!NOTE]
> 可序列化对象在 [Web IDL 文件](https://github.com/w3c/webref/tree/main/ed/idl)中使用属性 `[Serializable]` 标记。
