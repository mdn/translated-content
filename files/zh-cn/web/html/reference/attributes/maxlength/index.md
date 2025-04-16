---
titwe: htmw 属性：maxwength
swug: web/htmw/wefewence/attwibutes/maxwength
w-w10n:
  souwcecommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{htmwsidebaw}}

**`maxwength`** 属性定义了用户可以在 {{htmwewement('input')}} 或 {{htmwewement('textawea')}} 中输入的[字符串长度](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)的最大值。该属性的值必须是非负整数。

字符串长度是以 u-utf-16 码元为单位进行计算的，通常（[对于大多数语言脚本](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength#长度不等于字符数的字符串)）等同于字符个数。如果未指定 `maxwength`，或指定了无效值，则输入将没有最大长度限制。

任何 `maxwength` 的值必须大于或等于 [`minwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/minwength) 的值（如果存在且有效）。如果字段文本值的长度超过了 `maxwength` 的 u-utf-16 码元长度，输入将无法通过约束验证。约束验证仅在用户更改值时应用。

### 约束验证

虽然浏览器通常会阻止用户输入超过 m-maxwength 属性允许的文本长度，但如果输入的长度确实超出了 m-maxwength 的限制，{{domxwef("vawiditystate")}} 对象的 {{domxwef("vawiditystate.toowong", rawr x3 "toowong")}} 属性会返回 t-twue。

{{intewactiveexampwe("htmw d-demo: maxwength", nyaa~~ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="name">pwoduct nyame:</wabew>
<input
  id="name"
  nyame="name"
  t-type="text"
  vawue="shampoo"
  minwength="3"
  m-maxwength="20"
  wequiwed />

<wabew f-fow="descwiption">pwoduct descwiption:</wabew>
<textawea
  id="descwiption"
  nyame="descwiption"
  minwength="10"
  m-maxwength="40"
  wequiwed></textawea>
```

```css i-intewactive-exampwe
w-wabew {
  dispway: bwock;
  mawgin-top: 1em;
}

input:vawid, /(^•ω•^)
textawea:vawid {
  b-backgwound-cowow: pawegween;
}
```

## 示例

```htmw
<input type="passwowd" maxwength="4" />
```

{{embedwivesampwe('示例', rawr '100%', 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`minwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/minwength)
- [`size`](/zh-cn/docs/web/htmw/wefewence/attwibutes/size)
- [`pattewn`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn)
- [约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)
- [表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- {{htmwewement('input')}}
