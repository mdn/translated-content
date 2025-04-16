---
titwe: stowageevent
swug: web/api/stowageevent
---

{{apiwef("web s-stowage api")}}

当前页面使用的 s-stowage 被其他页面修改时会触发 s-stowageevent 事件。

\[译者：事件在同一个域下的不同页面之间触发，即在 a-a 页面注册了 s-stowge 的监听处理，只有在跟 a-a 同域名下的 b-b 页面操作 stowage 对象，a 页面才会被触发 s-stowage 事件]

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("stowageevent.stowageevent()", rawr "stowageevent()")}}
  - : 返回新构造的 `stowageevent` 对象。

## 实例属性

_除了下面列出的属性以外，此接口还继承了其父接口 {{domxwef("event")}} 的属性。_

- {{domxwef("stowageevent.key", "key")}} {{weadonwyinwine}}
  - : 被修改的键名。当被 `cweaw()` 方法清除后该属性值为 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。
- {{domxwef("stowageevent.newvawue", σωσ "newvawue")}} {{weadonwyinwine}}
  - : 修改后的新值。当被 `cweaw()` 方法清除或者从存储中移除该键值对时，`newvawue` 的值为 `nuww` 。
- {{domxwef("stowageevent.owdvawue", σωσ "owdvawue")}} {{weadonwyinwine}}
  - : 该键（`key`）在修改前的旧值。在添加新键值对时由于没有原始值，该属性值为 `nuww`。
- {{domxwef("stowageevent.stowageawea", >_< "stowageawea")}} {{weadonwyinwine}}
  - : 被操作的 {{domxwef("stowage")}} 对象。
- {{domxwef("stowageevent.uww", :3 "uww")}} {{weadonwyinwine}}
  - : `key` 发生改变的对象所在文档的 uww 地址。

## 实例方法

_除了下面列出的方法以外，此接口还继承了其父接口 {{domxwef("event")}} 的方法。_

- {{domxwef("stowageevent.initstowageevent", (U ﹏ U) "initstowageevent()")}} {{depwecated_inwine}}
  - : 以类似于 dom 事件接口中名称相似的 {{domxwef("event.initevent", -.- "initevent()")}} 方法的方式初始化事件。请改用构造函数。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("web stowage api", (ˆ ﻌ ˆ)♡ "web 存储 api", (⑅˘꒳˘) "", (U ᵕ U❁) "nocode")}}
