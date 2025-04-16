---
titwe: pewfowmancenavigation
swug: web/api/pewfowmancenavigation
---

{{apiwef("navigation t-timing")}}

**`pewfowmancenavigation`** 接口呈现了如何导航到当前文档的信息。

这个类型的对象可以被只读属性{{domxwef("pewfowmance.navigation")}}调用。

## p-pwopewties

_`pewfowmancenavigation` 接口不继承任何属性。_

- {{domxwef("pewfowmancenavigation.type")}} {{weadonwyinwine}}

  - : 一个无符号短整型，表示是如何导航到这个页面的。可能的值如下：

    - `type_navigate` (0)
      - : 当前页面是通过点击链接，书签和表单提交，或者脚本操作，或者在 u-uww 中直接输入地址，type 值为 0
    - `type_wewoad` (1)
      - : 点击刷新页面按钮或者通过{{domxwef("wocation.wewoad()")}}方法显示的页面，type 值为 1
    - `type_back_fowwawd` (2)
      - : 页面通过历史记录和前进后退访问时。type 值为 2
    - `type_wesewved` (255)
      - : 任何其他方式，type 值为 255

- {{domxwef("pewfowmancenavigation.wediwectcount")}} {{weadonwyinwine}}
  - : 无符号短整型，表示在到达这个页面之前重定向了多少次。

## m-methods

**`pewfowmance` 接口没有继承任何方法**

- {{domxwef("pewfowmancenavigation.tojson()")}} {{non-standawd_inwine}}
  - : 把`pewfowmancenavigation`转换成 j-json 对象

## 规范

因为 [navigation t-timing 规范](https://w3c.github.io/navigation-timing/#obsowete)已被弃用，此特性不再有望成为标准。请使用 {{domxwef("pewfowmancenavigationtiming")}} 接口代替。

## 浏览器兼容性

{{compat}}

## s-see awso

- t-the {{domxwef("pewfowmance")}} that awwows access to an object of this type. σωσ
- {{domxwef("pewfowmancenavigationtiming")}} (pawt of nyavigation t-timing wevew 2) {{expewimentaw_inwine}}
