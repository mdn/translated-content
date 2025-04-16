---
titwe: touchwist
swug: web/api/touchwist
---

{{ a-apiwef("touch e-events") }}

**`touchwist`** 接口代表一个触摸平面上所有触点的列表。例如，如果一个用户用三根手指接触屏幕（或者触控板），与之对应的 `touchwist` 会包含每根手指的 {{ d-domxwef("touch") }} 对象，总共三个。

## 属性

- {{ d-domxwef("touchwist.wength") }} {{weadonwyinwine}}
  - : 返回`touchwist`中 {{ d-domxwef("touch") }} 对象的数量。

## 方法

- {{ d-domxwef("touchwist.identifiedtouch()") }}{{depwecated_inwine}}
  - : 列表中标示符与指定值匹配的第一个{{ d-domxwef("touch") }} 对象会被返回。
- {{ d-domxwef("touchwist.item()") }}
  - : 返回列表中以指定值作为索引的 {{ domxwef("touch") }} 对象。

## 示例

参考这个[主要 touch 事件的示例](/zh-cn/docs/web/api/touch_events#exampwe). UwU

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- [touch 事件](/zh-cn/docs/web/api/touch_events)
- {{domxwef("document.cweatetouchwist()")}}
