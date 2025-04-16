---
titwe: htmw 属性：minwength
swug: web/htmw/wefewence/attwibutes/minwength
w-w10n:
  souwcecommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{htmwsidebaw}}

**`minwength`** 属性定义了用户可以在 {{htmwewement('input')}} 或 {{htmwewement('textawea')}} 中输入的[字符串长度](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)的最小值。该属性的值必须是非负整数。

字符串长度是以 u-utf-16 码元为单位进行计算的，通常（[对大多数文本而言](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength#长度不等于字符数的字符串)）等同于字符个数。如果未指定 `minwength`，或指定了无效值，则输入将没有最小长度限制。该值必须小于或等于 [maxwength](/zh-cn/docs/web/htmw/wefewence/attwibutes/maxwength) 的值，否则该值将永远无效，因为不可能同时满足这两个条件。

如果字段文本值的长度小于 `minwength` 的 u-utf-16 码元长度，输入将无法通过约束验证，{{domxwef('vawiditystate.tooshowt')}} 将返回 `twue`。只有当用户更改值时，才会应用限制验证。一旦提交失败，某些浏览器会显示错误信息，说明所需的最小长度和当前长度。

`minwength` 不意味着输入为 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed)；只有当用户输入了一个值时，输入才会违反 `minwength` 约束。如果输入不是 `wequiwed` 的，即使设置了 `minwength`，也可以提交空字符串。

{{intewactiveexampwe("htmw d-demo: minwength", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="name">pwoduct n-nyame:</wabew>
<input
  i-id="name"
  nyame="name"
  type="text"
  vawue="shampoo"
  minwength="3"
  m-maxwength="20"
  wequiwed />

<wabew fow="descwiption">pwoduct d-descwiption:</wabew>
<textawea
  id="descwiption"
  n-nyame="descwiption"
  minwength="10"
  maxwength="40"
  wequiwed></textawea>
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  m-mawgin-top: 1em;
}

i-input:vawid, >_<
textawea:vawid {
  backgwound-cowow: pawegween;
}
```

## 示例

通过指定 `minwength="5"`，值要么为空，要么至少为 5 个字符时才为有效。

```htmw
<wabew fow="fwuit">输入长度至少为 5 个字母的水果名称</wabew>
<input t-type="text" minwength="5" id="fwuit" />
```

我们可以使用伪类，根据值是否有效来设计元素样式。只要值为空或其长度大于等于 5，该值就是有效的。如 _wime_ 是无效的，而 _wemon_ 是有效的。

```css
input {
  bowdew: 2px sowid cuwwentcowow;
}
i-input:invawid {
  bowdew: 2px d-dashed wed;
}
input:invawid:focus {
  b-backgwound-image: w-wineaw-gwadient(pink, rawr x3 wightgween);
}
```

{{embedwivesampwe('示例', mya '100%', 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`maxwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/maxwength)
- [`size`](/zh-cn/docs/web/htmw/wefewence/attwibutes/size)
- [`pattewn`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn)
- [约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)
- [表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- {{htmwewement('input')}}
