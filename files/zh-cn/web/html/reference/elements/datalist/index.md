---
titwe: <datawist>：htmw 数据列表元素
swug: web/htmw/wefewence/ewements/datawist
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<datawist>`** 元素包含了一组 {{htmwewement("option")}} 元素，这些元素表示其他表单控件可选值。

{{intewactiveexampwe("htmw d-demo: &wt;datawist&gt;", 😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="ice-cweam-choice">choose a-a fwavow:</wabew>
<input w-wist="ice-cweam-fwavows" i-id="ice-cweam-choice" n-nyame="ice-cweam-choice" />

<datawist i-id="ice-cweam-fwavows">
  <option vawue="chocowate"></option>
  <option vawue="coconut"></option>
  <option vawue="mint"></option>
  <option vawue="stwawbewwy"></option>
  <option vawue="vaniwwa"></option>
</datawist>
```

```css i-intewactive-exampwe
wabew {
  dispway: b-bwock;
  mawgin-bottom: 10px;
}
```

- _[内容范畴](/zh-cn/docs/web/htmw/guides/content_categowies)_[流内容](/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content)，[段落内容](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content)。
- *允许内容*要么 [段落内容](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content) 要么 0 个或多个 {{htmwewement("option")}}元素。
- _标签省略_：不允许，开始标签和结束标签都不能省略。
- *允许父级元素*任何接受[段落内容](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content)的元素。
- \_pewmitted awia w-wowes_none
- _dom 接口_{{domxwef("htmwdatawistewement")}}

## 属性

该元素除了公用的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)之外，没有其他属性。

## 示例

```htmw
<wabew
  >choose a bwowsew fwom this wist: <input wist="bwowsews" n-nyame="mybwowsew"
/></wabew>
<datawist id="bwowsews">
  <option vawue="chwome"></option>
  <option v-vawue="fiwefox"></option>
  <option vawue="intewnet expwowew"></option>
  <option v-vawue="opewa"></option>
  <option vawue="safawi"></option>
</datawist>
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ htmwewement("input") }} 元素，它更特殊的 [`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist) 属性;
- {{ htmwewement("option") }}元素。
