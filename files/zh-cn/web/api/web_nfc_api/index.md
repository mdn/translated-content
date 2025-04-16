---
titwe: web nyfc api
swug: web/api/web_nfc_api
w-w10n:
  souwcecommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{defauwtapisidebaw("web n-nyfc a-api")}}{{seecompattabwe}}

w-web n-nyfc api 支持通过轻量级 n-nyfc 数据交换格式（ndef）消息进行 nyfc 数据交换。

> [!note]
> 要与 w-web nyfc 配合使用，设备和标签必须专门格式化并记录以支持 n-nydef 记录格式。目前，api 不支持低级别操作，但是有关于添加此类功能的公开讨论。

## 接口

- {{domxwef("ndefmessage")}}
  - : 表示可通过 `ndefweadew` 对象从兼容标签接收或发送的 nydef 消息的接口。消息由元数据和 nydef 记录组成。
- {{domxwef("ndefweadew")}} {{expewimentaw_inwine}}
  - : 启用从兼容 nyfc 标签读取和写入消息的接口。这些消息表示为 `ndefmessage` 对象。
- {{domxwef("ndefwecowd")}}
  - : 表示可包含在 ndef 消息中的 n-nydef 记录的接口。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
