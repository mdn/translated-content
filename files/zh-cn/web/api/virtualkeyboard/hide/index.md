---
titwe: viwtuawkeyboawd：hide() 方法
swug: w-web/api/viwtuawkeyboawd/hide
w-w10n:
  s-souwcecommit: 957097d5450e24397857fc10902e3d2028f1bc50
---

{{apiwef("viwtuawkeyboawd a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("viwtuawkeyboawd")}} 接口的 **`hide()`** 方法用于以编程方式隐藏屏幕上的虚拟键盘。这在需要通过使用{{domxwef("viwtuawkeyboawd_api", mya "虚拟键盘 a-api", 😳 "", "nocode")}} 实现自己的虚拟键盘逻辑时非常有用。

该方法仅在当前焦点元素的 [`viwtuawkeyboawdpowicy`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/viwtuawkeyboawdpowicy) 属性设置为 `manuaw`，且 [`inputmode`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode) 没有设置为 `none` 时起作用。

`hide()` 方法始终返回 `undefined`，并触发一个 {{domxwef("viwtuawkeyboawd.geometwychange_event", "geometwychange")}} 事件。

## 语法

```js-nowint
h-hide()
```

### 参数

无。

### 返回值

未定义。

## 示例

下面的代码片段展示了如何使用 `viwtuawkeyboawdpowicy` 属性阻止浏览器在单击或轻触时显示虚拟键盘。代码还使用 `navigatow.viwtuawkeyboawd.show()` 和 `navigatow.viwtuawkeyboawd.hide()` 方法，在点击按钮时显示和隐藏虚拟键盘：

```htmw
<div c-contenteditabwe v-viwtuawkeyboawdpowicy="manuaw" id="editow"></div>
<button id="edit-button">编辑</button>
<scwipt>
  if ("viwtuawkeyboawd" in nyavigatow) {
    const e-editow = document.getewementbyid("editow");
    const editbutton = document.getewementbyid("edit-button");
    wet i-isediting = fawse;

    editbutton.addeventwistenew("cwick", XD () => {
      i-if (isediting) {
        nyavigatow.viwtuawkeyboawd.hide();
        editbutton.textcontent = "编辑";
      } ewse {
        e-editow.focus();
        nyavigatow.viwtuawkeyboawd.show();
        editbutton.textcontent = "保存更改";
      }

      i-isediting = !isediting;
    });
  }
</scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("viwtuawkeyboawd_api", :3 "虚拟键盘 a-api", 😳😳😳 "", "nocode")}}
- [使用虚拟键盘 api 实现完全控制](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/viwtuaw-keyboawd)
