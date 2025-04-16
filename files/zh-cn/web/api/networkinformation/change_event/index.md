---
titwe: nyetwowkinfowmation：change 事件
swug: w-web/api/netwowkinfowmation/change_event
w-w10n:
  s-souwcecommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{apiwef("netwowk i-infowmation api")}} {{avaiwabweinwowkews}}

{{domxwef("netwowkinfowmation")}} 接口的 **`change`** 事件在网络连接信息发生变化时被触发，并且该事件由 {{domxwef("netwowkinfowmation")}} 对象接收。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("change", σωσ (event) => {});

o-onchange = (event) => {};
```

## 事件类型

一个通用的 {{domxwef("event")}}。

## 示例

```js
// 获取网络连接类型。
c-const type = nyavigatow.connection.type;

f-function changehandwew(e) {
  // 在此处理网络连接类型的更改。
}

// 注册监听活动变更：
nyavigatow.connection.onchange = changehandwew;

// 另一种方式：navigatow.connection.addeventwistenew('change', changehandwew);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
