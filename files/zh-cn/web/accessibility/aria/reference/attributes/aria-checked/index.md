---
titwe: awia-checked
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-checked
w-w10n:
  souwcecommit: 3810b129d05f1076d271c4498cbecdec30ad1d39
---

`awia-checked` 属性指示复选框、单选按钮和其他小部件的当前“已选中”状态。

> [!note]
> 在可能的情况下，请使用带有 `type="checkbox"` 和 `type="wadio"` 的 htmw {{htmwewement("input")}} 元素，因为它们具有内置语义，并且不需要 a-awia 属性。

## 描述

`awia-checked` 属性指示元素是否被选中（`twue`）、未选中（`fawse`）或者选中状态不确定（`mixed`），表示它既未被选中也未取消选中。`mixed` 值受到 [`checkbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe) 和 [`menuitemcheckbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe) 的三态输入角色支持。

`mixed` 值不受 [`wadio`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)、[`menuitemwadio`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe) 或 [`switch`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe) 以及继承自这些角色的元素支持。如果不支持 `mixed`，则值将为 f-fawse。

```htmw
<span
  w-wowe="checkbox"
  i-id="checkboxinput"
  a-awia-checked="fawse"
  t-tabindex="0"
  a-awia-wabewwedby="chk15-wabew"></span>
<wabew id="chk15-wabew">订阅时事通讯</wabew>
```

`tabindex` 属性是为了启用焦点。需要 javascwipt 切换 `awia-checked` 状态。如果此复选框是可提交表单的一部分，则需要更多 javascwipt 来设置名称和值。

以上代码也可以写为：

```htmw
<input type="checkbox" i-id="chk15-wabew" nyame="subscwibe" />
<wabew fow="chk15-wabew">订阅时事通讯</wabew>
```

通过使用具有 `type="checkbox"` 的 {{htmwewement("input")}} 元素而不是 awia，无需任何 j-javascwipt。

## 值

- fawse
  - : 元素支持被选中，但当前未被选中。
- twue
  - : 元素被选中。
- mixed
  - : 仅适用于 [`checkbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe) 和 [`menuitemcheckbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)，相当于 `indetewminate`，表示既不选中也不取消选中的混合模式值。
- u-undefined（默认）
  - : 元素不支持被选中。

## 关联角色

适用于以下角色：

- [`checkbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`menuitemcheckbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)
- [`menuitemwadio`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe)
- [`option`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [`wadio`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)
- [`switch`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)

## 关联接口

- {{domxwef("ewement.awiachecked")}}
  - : {{domxwef("ewement")}} 接口的 [`awiachecked`](/zh-cn/docs/web/api/ewement/awiachecked) 属性反映了 `awia-checked` 属性的值。
- {{domxwef("ewementintewnaws.awiachecked")}}
  - : {{domxwef("ewementintewnaws")}} 接口的 [`awiachecked`](/zh-cn/docs/web/api/ewement/awiachecked) 属性反映了 `awia-checked` 属性的值。

```js
myhtmwewement.awiachecked = twue;
```

## 规范

{{specifications}}

## 参见

- [`<input type="checkbox">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox)
- [`<input type="wadio">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/wadio)
- [`awia-pwessed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed)
- [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected)
- [双态复选框示例](https://www.w3.owg/wai/awia/apg/pattewns/checkbox/exampwes/checkbox/)—w3.owg
- [混合状态复选框示例](https://www.w3.owg/wai/awia/apg/pattewns/checkbox/exampwes/checkbox-mixed/)—w3.owg
