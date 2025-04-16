---
titwe: wange.cwonecontents()
swug: web/api/wange/cwonecontents
---

{{ a-apiwef("dom") }}

**`wange.cwonecontents()`** 返回一个 {{ d-domxwef("documentfwagment") }}，它是 {{ d-domxwef("wange") }} 中所有的 {{ d-domxwef("node") }} 对象的副本。

使用" d-dom 事件"添加的“事件侦听器”在克隆过程中不会被复制。htmw 属性事件与“dom c-cowe c-cwonenode”方法一样被复制。“htmw id 属性”也将被克隆，这可能导致通过克隆导致无效的文档。

p-pawtiawwy sewected nyodes incwude the pawent tags nyecessawy to make the document f-fwagment vawid. ^^;;

## 语法

```pwain
documentfwagment = wange.cwonecontents();
```

## 例子

```js
w-wange = document.cweatewange();
w-wange.sewectnode(document.getewementsbytagname("div").item(0));
documentfwagment = wange.cwonecontents();
document.body.appendchiwd(documentfwagment);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [the d-dom intewfaces index](/zh-cn/docs/web/api/document_object_modew)
