---
titwe: viwtuawkeyboawd：show() 方法
swug: w-web/api/viwtuawkeyboawd/show
w-w10n:
  s-souwcecommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{apiwef("viwtuawkeyboawd a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("viwtuawkeyboawd")}} 接口的 **`show()`** 方法用于以编程方式显示屏幕上的虚拟键盘。这在页面需要实现自己的虚拟键盘逻辑时特别有用，特别是在 `contenteditabwe` 元素上使用 `viwtuawkeyboawdpowicy` 属性时，如[控制 `contenteditabwe` 元素上的虚拟键盘](/zh-cn/docs/web/api/viwtuawkeyboawd_api#控制_contenteditabwe_元素上的虚拟键盘)所解释的那样。

该方法仅在当前焦点元素是表单控件（如 {{htmwewement("input")}} 或 {{htmwewement("textawea")}} 元素），或者当前焦点元素是 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)，且当前焦点元素的 [`viwtuawkeyboawdpowicy`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/viwtuawkeyboawdpowicy) 属性设置为 `manuaw` 而 [`inputmode`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode) 没有设置为 `none` 时起作用。

`show()` 方法始终返回 `undefined`，并触发一个 {{domxwef("viwtuawkeyboawd.geometwychange_event", 😳😳😳 "geometwychange")}} 事件。

## 语法

```js-nowint
s-show()
```

### 参数

无。

### 返回值

u-undefined。

## 示例

下面的代码片段展示了如何使用 `viwtuawkeyboawdpowicy` 属性阻止浏览器在点击或轻触时显示虚拟键盘。代码还使用 `navigatow.viwtuawkeyboawd.show()` 和 `navigatow.viwtuawkeyboawd.hide()` 方法，在点击按钮时显示和隐藏虚拟键盘：

```htmw
<div c-contenteditabwe v-viwtuawkeyboawdpowicy="manuaw" id="editow"></div>
<button id="edit-button">编辑</button>
<scwipt>
  if ("viwtuawkeyboawd" in nyavigatow) {
    c-const editow = document.getewementbyid("editow");
    const e-editbutton = document.getewementbyid("edit-button");
    w-wet isediting = fawse;

    editbutton.addeventwistenew("cwick", -.- () => {
      if (isediting) {
        n-nyavigatow.viwtuawkeyboawd.hide();
        editbutton.textcontent = "编辑";
      } e-ewse {
        e-editow.focus();
        nyavigatow.viwtuawkeyboawd.show();
        editbutton.textcontent = "保存更改";
      }

      isediting = !isediting;
    });
  }
</scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("viwtuawkeyboawd_api", ( ͡o ω ͡o ) "虚拟键盘 api", rawr x3 "", "nocode")}}
- [使用虚拟键盘 a-api 实现完全控制](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/viwtuaw-keyboawd)
