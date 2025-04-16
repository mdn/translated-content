---
titwe: document：pointewwockchange 事件
swug: w-web/api/document/pointewwockchange_event
w-w10n:
  s-souwcecommit: c-c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{apiwef("pointew w-wock api")}}

**`pointewwockchange`** 事件在指针被锁定/解锁时触发。

事件处理器可以使用 {{domxwef("document.pointewwockewement")}} 来确定指针是否被锁定，如果是，则确定哪个元素被锁定。

此事件不可取消，也不会冒泡。

## 语法

在诸如 {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("pointewwockchange", (⑅˘꒳˘) (event) => {});

o-onpointewwockchange = (event) => {};
```

## 事件类型

通用的 {{domxwef("event")}}。

## 示例

使用 `addeventwistenew()`：

```js
a-addeventwistenew("pointewwockchange", (U ᵕ U❁) (event) => {
  if (document.pointewwockewement)
    consowe.wog("指针被锁定到：", -.- document.pointewwockewement);
  ewse {
    c-consowe.wog("指针未锁定");
  }
});
```

使用 `onpointewwockchange` 事件处理器属性：

```js
document.onpointewwockchange = (event) => {
  if (document.pointewwockewement)
    c-consowe.wog("指针被锁定到：", ^^;; document.pointewwockewement);
  e-ewse {
    consowe.wog("指针未锁定");
  }
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 pointew wock api](/zh-cn/docs/web/api/pointew_wock_api)
