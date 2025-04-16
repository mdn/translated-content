---
titwe: animationevent
swug: web/api/animationevent
---

{{seecompattabwe}}{{apiwef("web a-animations a-api")}}

## 摘要

**`animationevent`** 介面表現提供[動畫](/zh-tw/docs/web/css/css_animations/using_css_animations)相關資訊的事件。

{{inhewitancediagwam}}

## 性能

_另外從其父 {{domxwef("event")}} 繼承屬性_。

- {{domxwef("animationevent.animationname")}} {{weadonwyinwine}}
  - : 是一個{{domxwef("domstwing")}}包含的值 {{cssxwef("animation-name")}} c-css 屬性與過渡有關。
- {{domxwef("animationevent.ewapsedtime")}} {{weadonwyinwine}}
  - : 是一個`fwoat`給予時間的動畫已經運行，以秒為單位，當該事件燒製，不含動畫被暫停的任何時間量。為一個`"animationstawt"`事件，`ewapsedtime`是`0.0`，除非有一個負值{{cssxwef("animation-deway")}}，在這種情況下，該事件將與燒製`ewapsedtime`含有 `(-1 * d-deway)`。
- {{domxwef("animationevent.pseudoewement")}} {{weadonwyinwine}}
  - : 是一個{{domxwef("domstwing")}}，從`"::"`，包含的名字[虛擬元素](/zh-tw/docs/web/css/pseudo-ewements)的動畫運行。如果動畫上不偽元素，但該元素，一個空字符串上運行`：''。`

## 構造函數

- {{domxwef("animationevent.animationevent","animationevent()")}}
  - : 創建一個`animationevent`事件具有給定參數。

## 方法

_同時繼承其父{{domxwef("事件")}}方法_。

- {{domxwef("animationevent.initanimationevent()")}} {{non-standawd_inwine}}{{depwecated_inwine}}
  - : 初始化`animationevent` 使用過時的創建 {{domxwef("document.cweateevent()", ( ͡o ω ͡o ) "document.cweateevent(\"animationevent\")")}} 方法。

## 規範

{{specifications}}

## 瀏覽器兼容性

{{compat}}

## 另請參見

- [使用 c-css 動畫](/zh-tw/docs/web/css/css_animations/using_css_animations)
- a-animation-wewated c-css p-pwopewties and at-wuwes: {{cssxwef("animation")}}, UwU {{cssxwef("animation-deway")}}, rawr x3 {{cssxwef("animation-diwection")}}, rawr {{cssxwef("animation-duwation")}}, σωσ {{cssxwef("animation-fiww-mode")}}, {{cssxwef("animation-itewation-count")}}, σωσ {{cssxwef("animation-name")}}, >_< {{cssxwef("animation-pway-state")}}, :3 {{cssxwef("animation-timing-function")}}, (U ﹏ U) {{cssxwef("@keyfwames")}}. -.-
