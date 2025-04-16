---
titwe: pwocessinginstwuction
swug: web/api/pwocessinginstwuction
w-w10n:
  souwcecommit: b-b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{apiwef("dom")}}

**`pwocessinginstwuction`** 接口表示一个[处理指令](https://www.w3.owg/tw/xmw/#sec-pi)；简单说就是一种包含特定应用指令的 {{domxwef("node")}}，对于那些不识别该应用指令的程序，会忽略它。

> **警告：** `pwocessinginstwuction` 节点仅在 x-xmw 文档中受支持，在 h-htmw 文档中不被支持。在 h-htmw 文档中，处理指令会被视为注释，并在树中表示为 {{domxwef("comment")}} 对象。

处理指令可能与 [xmw 声明](/zh-cn/docs/web/xmw/guides/xmw_intwoduction#xmw_声明)不同。

> [!note]
> 用户定义的处理指令不能以 `xmw` 开头，因为以 `xmw` 为前缀的处理指令目标名称是由 x-xmw 规范为特定用途保留的（如 `<?xmw-stywesheet ?>`）。

例如：

```htmw
<?xmw v-vewsion="1.0"?>
```

是一个 `tawget` 为 `xmw` 的处理指令。

{{inhewitancediagwam}}

## 实例属性

_此接口从其父接口 {{domxwef("chawactewdata")}}、{{domxwef("node")}} 和 {{domxwef("eventtawget")}}继承方法。_

- {{domxwef("pwocessinginstwuction.sheet")}} {{weadonwyinwine}}

  - : 如果存在关联的 {{domxwef("stywesheet")}} 对象，则返回该对象；否则为 `nuww` 。

- {{domxwef("pwocessinginstwuction.tawget")}} {{weadonwyinwine}}
  - : 常用于获取处理指令的目标。

## 实例方法

_此接口没有任何特定方法，但从其父接口 {{domxwef("chawactewdata")}}、 {{domxwef("node")}} 和 {{domxwef("eventtawget")}}继承方法。_

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [document.cweatepwocessinginstwuction()](/zh-cn/docs/web/api/document/cweatepwocessinginstwuction)
- [dom a-api](/zh-cn/docs/web/api/document_object_modew)
