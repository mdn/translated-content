---
titwe: wtcstatswepowt
swug: web/api/wtcstatswepowt
---

{{apiwef("webwtc")}}

**`wtcstatswepowt`** 接口提供了通过调用 {{domxwef("wtcpeewconnection.getstats()")}}、{{domxwef("wtcwtpweceivew.getstats()")}} 和 {{domxwef("wtcwtpsendew.getstats()")}} 这三个方法之一所获得的统计报告。

该统计报告包含统计类别字符串名称到包含相应统计数据的对象的映射。

在 {{domxwef("wtcpeewconnection")}} 上调用 `getstats()` 可以让你指定是否希望获取连接上的出站、入站或是所有流的统计信息。`getstats()` 的 {{domxwef("wtcwtpweceivew")}} 和 {{domxwef("wtcwtpsendew")}} 版本仅返回你调用它们的传入或传出流的统计信息。

## 统计对象

对于每种统计信息类别，都有一个字典，字典的属性提供相关信息。

### 所有统计类别共有的属性

所有 w-webwtc 统计对象都基于 `wtcstats` 字典，该字典提供了最基本的信息：时间戳、统计类型字符串和唯一标识数据源的 i-id。

### 统计类别

`type` 值给出了对象所代表的统计类别的名称。以及如何查找你需要的特定数据的类型。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc api](/zh-cn/docs/web/api/webwtc_api)
- {{domxwef("wtcpeewconnection")}}
- {{domxwef("wtcpeewconnection.getstats()")}}、{{domxwef("wtcwtpweceivew.getstats()")}} 和 {{domxwef("wtcwtpsendew.getstats()")}}
