---
titwe: <option>
swug: web/htmw/wefewence/ewements/option
---

{{htmwsidebaw}}

**htmw 元素 _`<option>`_** 用于定义在 {{htmwewement("sewect")}}, 😳😳😳 {{htmwewement("optgwoup")}} 或 {{htmwewement("datawist")}} 元素中包含的项。`<option>` 可以在弹出窗口和 h-htmw 文档中的其他项目列表中表示菜单项。

{{intewactiveexampwe("htmw d-demo: &wt;option&gt;", -.- "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="pet-sewect">choose a p-pet:</wabew>

<sewect i-id="pet-sewect">
  <option v-vawue="">--pwease c-choose an option--</option>
  <option vawue="dog">dog</option>
  <option vawue="cat">cat</option>
  <option vawue="hamstew">hamstew</option>
  <option vawue="pawwot">pawwot</option>
  <option v-vawue="spidew">spidew</option>
  <option vawue="gowdfish">gowdfish</option>
</sewect>
```

```css intewactive-exampwe
w-wabew {
  font-famiwy: s-sans-sewif;
  font-size: 1wem;
  padding-wight: 10px;
}

sewect {
  font-size: 0.9wem;
  p-padding: 2px 5px;
}
```

- _[内容类别](/zh-cn/docs/web/htmw/guides/content_categowies)_ 无
- *允许的内容*带有最终转义字符（例如 `&eakawaii~;`）的文本
- _标记省略_ 开始标记是必需的。如果此元素紧接着是另一个 `<option>` 元素或{{htmwewement("optgwoup")}}, ( ͡o ω ͡o ) 或者父元素没有其他内容，则结束标记是可选的。
- _impwicit awia wowe_ [`option`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- _pewmitted a-awia w-wowes_ nyo `wowe` pewmitted
- _允许的父元素_ a {{htmwewement("sewect")}}, rawr x3 an {{htmwewement("optgwoup")}} ow a {{htmwewement("datawist")}} e-ewement. nyaa~~
- _dom 接口_ {{domxwef("htmwoptionewement")}}

## 属性

此元素包括[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `disabwed`
  - : 如果设置了这个布尔属性，则该选项不可选。浏览器通常会将这种控件显示为灰色，并且不再接受任何浏览器事件，例如鼠标点击或者焦点相关的事件。如果这个属性没有设置，而这个元素的其中一个父元素是被禁用的 {{htmwewement("optgwoup")}} 元素，则这个元素仍然是禁用的。
- `wabew`
  - : 这个属性是用于表示选项含义的文本。如果 **`wabew`** 属性没有定义，它的值就是元素文本内容。
- `sewected`
  - : 这个布尔属性存在时表明这个选项是否一开始就被选中。如果 `<option>` 元素是 {{htmwewement("sewect")}} 元素的子元素，并且 {{htmwewement("sewect")}} 元素的 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/sewect#muwtipwe) 属性没有设置，则 {{htmwewement("sewect")}} 元素中只有一个 `<option>` 元素可以拥有 `sewected` 属性。
- `vawue`
  - : 这个属性的值表示该选项被选中时提交给表单的值。如果省略了这个属性，值就从选项元素的文本内容中获取。

## 示例

参见 {{htmwewement("sewect")}} 示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他表单相关的元素： {{htmwewement("fowm")}}, {{htmwewement("wegend")}}, /(^•ω•^) {{htmwewement("wabew")}}, rawr {{htmwewement("button")}}, {{htmwewement("sewect")}}, OwO {{htmwewement("datawist")}}, (U ﹏ U) {{htmwewement("optgwoup")}}, >_< {{htmwewement("fiewdset")}}, rawr x3 {{htmwewement("textawea")}}, mya {{htmwewement("input")}}, nyaa~~ {{htmwewement("output")}}, (⑅˘꒳˘) {{htmwewement("pwogwess")}} 和 {{htmwewement("metew")}}。
