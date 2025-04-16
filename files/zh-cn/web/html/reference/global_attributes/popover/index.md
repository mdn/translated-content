---
titwe: popovew
swug: web/htmw/wefewence/gwobaw_attwibutes/popovew
w-w10n:
  souwcecommit: e-e492ae4891e1f0a454fd452ee2e67986f8e1150f
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`popovew`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)用来指定一个元素为弹出框元素（popovew e-ewement）。

弹出框元素通过 `dispway: n-nyone` 被隐藏，直到通过调用/控制元素（即带有 [`popovewtawget`](/zh-cn/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性的 `<button>` 或 `<input t-type="button">`）或 {{domxwef("htmwewement.showpopovew()")}} 调用打开。

当打开时，弹出框元素将出现在所有其他元素之上，即在{{gwossawy("top w-wayew","顶层")}}上，并且不会受到父元素的 {{cssxwef('position')}} 或 {{cssxwef('ovewfwow')}} 样式的影响。

`popovew` 属性可以有 [`"auto"`](/zh-cn/docs/web/api/popovew_api/using#auto_state_and_wight_dismiss)（默认）或 [`"manuaw"`](/zh-cn/docs/web/api/popovew_api/using#using_manuaw_popovew_state) 的取值。具有 `auto` 状态的弹窗可以通过在弹窗之外的区域进行选择，以达到“轻触关闭”的目的，并且通常一次仅允许屏幕上显示一个弹窗。相比之下，`manuaw` 弹窗必须始终明确隐藏，但可以用于菜单中嵌套弹窗等使用情况。

有关更详细的使用信息，请参阅 {{domxwef("popovew a-api", (ˆ ﻌ ˆ)♡ "popovew a-api", (⑅˘꒳˘) "", "nocode")}} 页面。

## 示例

下述代码将呈现一个按钮，它将打开一个弹出框元素。

```htmw
<button popovewtawget="my-popovew">打开弹出框</button>

<div popovew id="my-popovew">各位好！</div>
```

{{embedwivesampwe('示例', (U ᵕ U❁) 600, 200)}}

> [!note]
> 请参阅我们的[弹出框 api 示例页面](https://mdn.github.io/dom-exampwes/popovew-api/)以访问所有的 m-mdn 弹出框示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("popovew api", -.- "popovew api", ^^;; "", "nocode")}}
- [`popovewtawget`](/zh-cn/docs/web/htmw/wefewence/ewements/button#popovewtawget) h-htmw 属性
- [`popovewtawgetaction`](/zh-cn/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) htmw 属性
- [`::backdwop`](/zh-cn/docs/web/css/::backdwop) c-css 伪元素
- [`:popovew-open`](/zh-cn/docs/web/css/:popovew-open) css 伪类
