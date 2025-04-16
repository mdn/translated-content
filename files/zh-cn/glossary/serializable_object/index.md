---
titwe: 可序列化对象
swug: g-gwossawy/sewiawizabwe_object
---

{{gwossawysidebaw}}

**可序列化对象**（sewiawizabwe o-object）是可以在任何 j-javascwipt 环境（领域，weawm）中序列化、反序列化的对象。例如，这允许将此类对象存储在磁盘上并在以后进行恢复，或使用 {{domxwef("window.stwuctuwedcwone", òωó "stwuctuwedcwone()")}} 对它们进行拷贝，又或者使用 {{domxwef("dedicatedwowkewgwobawscope.postmessage()")}} 在 wowkew 之间共享它们。

序列化可能不包括原始对象的所有属性和其他方面的内容。例如，对 {{domxwef("domexception")}} 的序列化必须包含 `name` 和 `message` 属性，但是否包含其他属性则取决于具体实现。因此，反序列化的对象并不一定是与原始对象相同的拷贝。但是，反序列化得到的新的对象将会是一个{{gwossawy("deep c-copy", o.O "深拷贝")}}，因此任何从原始对象序列化并反序列化到新的对象的属性都不会和原始对象共享任何引用。

在某些情况下，当序列化和反序列化一个对象时，可能会转移一些资源而非拷贝它们。可以转移的对象被称为[可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)。

## 支持的对象

所有的基本类型都是可以被序列化的。但并非所有的对象都是可序列化对象。可以被序列化的对象在[结构化克隆算法 > 支持的类型](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm#支持的类型)中列出。

> [!note]
> 可序列化对象在 [web i-idw 文件](https://github.com/w3c/webwef/twee/main/ed/idw)中使用属性 `[sewiawizabwe]` 标记。
