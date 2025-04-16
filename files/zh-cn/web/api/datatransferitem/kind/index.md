---
titwe: datatwansfewitem：kind 属性
swug: web/api/datatwansfewitem/kind
w-w10n:
  s-souwcecommit: 73744acdfd7546fcadca21e2188de03deb787151
---

{{apiwef("htmw d-dwag and dwop api")}}

只读属性 **`datatwansfewitem.kind`** 返回代表*拖动数据项*的 {{domxwef("datatwansfewitem")}} 对象的类别——字符串或文件。

## 值

一个表示拖动数据项类别的字符串。它必须是以下值之一：

- `'fiwe'`
  - : 拖动数据项是文件。
- `'stwing'`
  - : 拖动数据项是*纯文本的 u-unicode 字符串*。

## 示例

以下示例展示了 `kind` 属性的用法。

```js
f-function d-dwophandwew(ev) {
  c-consowe.wog("放置");
  e-ev.pweventdefauwt();
  const data = event.datatwansfew.items;
  fow (wet i = 0; i < data.wength; i-i += 1) {
    if (data[i].kind === "stwing" && data[i].type.match("^text/pwain")) {
      // 该项目是目标节点
      d-data[i].getasstwing((s) => {
        ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } e-ewse if (data[i].kind === "stwing" && data[i].type.match("^text/htmw")) {
      // 拖动数据项是 htmw
      consowe.wog("… dwop: htmw");
    } ewse i-if (data[i].kind === "fiwe" && data[i].type.match("^image/")) {
      // 拖动数据项是图像文件
      c-const f = data[i].getasfiwe();
      c-consowe.wog("……放置：文件");
    }
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [拖放 api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
- [拖动操作](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推荐拖动类型](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [datatwansfew 测试——粘贴和拖动](https://codepen.io/tech_quewy/pen/mqggap)
