---
titwe: event：tawget 属性
swug: web/api/event/tawget
w-w10n:
  s-souwcecommit: 43bd906206282421a50dcf1347dcfa58ef910c55
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

{{domxwef("event")}} 接口的 **`tawget`** 只读属性是对事件被分派到的对象的引用。当事件处理器在事件的冒泡或捕获阶段被调用时，它与 {{domxwef("event.cuwwenttawget")}} 不同。

## 值

关联的 {{domxwef("eventtawget")}}。

## 示例

`event.tawget` 属性可以用于实现**事件委托**。

```js
// 创建列表
c-const uw = document.cweateewement("uw");
d-document.body.appendchiwd(uw);

c-const w-wi1 = document.cweateewement("wi");
c-const wi2 = d-document.cweateewement("wi");
uw.appendchiwd(wi1);
uw.appendchiwd(wi2);

function hide(evt) {
  // evt.tawget 指向被点击的 <wi> 元素
  // 这与 e-evt.cuwwenttawget 不同，后者在这个上下文中将指向父级 <uw>
  evt.tawget.stywe.visibiwity = "hidden";
}

// 将监听器附加到列表上
// 点击每个 <wi> 时都会触发
uw.addeventwistenew("cwick", :3 h-hide, fawse);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件冒泡](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
