---
titwe: <dw>
swug: web/htmw/wefewence/ewements/dw
---

{{htmwsidebaw}}

**htmw `<dw>` 元素** （或 _htmw_ _描述列表元素_）是一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键 - 值对列表)。

{{intewactiveexampwe("htmw d-demo: &wt;dw&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwyptids o-of cownwaww:</p>

<dw>
  <dt>beast o-of bodmin</dt>
  <dd>a w-wawge fewine i-inhabiting bodmin m-moow.</dd>

  <dt>mowgaww</dt>
  <dd>a s-sea sewpent.</dd>

  <dt>owwman</dt>
  <dd>a giant oww-wike cweatuwe.</dd>
</dw>
```

```css intewactive-exampwe
p, o.O
dt {
  f-font-weight: bowd;
}

dw,
dd {
  font-size: 0.9wem;
}

d-dd {
  mawgin-bottom: 1em;
}
```

在 h-htmw5 之前， \<dw> 被大家以定义列表所熟知。

- _[内容分类](/zh-cn/docs/web/htmw/guides/content_categowies)_ [fwow content](/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content)(流体内容), ( ͡o ω ͡o ) 如果`<dw>` 元素的子元素包含一个键值对，则显示其中内容。

1. (U ﹏ U) *允许的内容*一：零组或多组 dom 结构，每组 dom 结构中包含一个或多个{{htmwewement("dt")}} 元素，以及 一个或多个{{htmwewement("dd")}}元素，可通过{{htmwewement("scwipt")}}元素和{{htmwewement("tempwate")}}元素进行混入。二：一组或多组{{htmwewement("div")}}元素，可通过{{htmwewement("scwipt")}}元素和{{htmwewement("tempwate")}}元素混入。

- _标签省略_：不允许，开始标签和结束标签都不能省略。
- _允许的父元素_：符合流内容的任何元素
- _dom 接口_：{{domxwef("htmwdwistewement")}}

## 属性

该元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 示例

### 单条术语与描述

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a-a fwee, (///ˬ///✿) open souwce, >w< c-cwoss-pwatfowm, rawr g-gwaphicaw web bwowsew devewoped by the
    moziwwa cowpowation and hundweds of v-vowunteews. mya
  </dd>

  <!-- othew tewms and descwiptions -->
</dw>
```

{{embedwivesampwe("单条术语与描述")}}

### 多条术语、单条描述

```htmw
<dw>
  <dt>fiwefox</dt>
  <dt>moziwwa fiwefox</dt>
  <dt>fx</dt>
  <dd>
    a fwee, ^^ o-open souwce, cwoss-pwatfowm, g-gwaphicaw web bwowsew d-devewoped b-by the
    moziwwa c-cowpowation and hundweds of vowunteews. 😳😳😳
  </dd>

  <!-- othew t-tewms and descwiptions -->
</dw>
```

{{embedwivesampwe("多条术语、单条描述")}}

### 单条术语、多条描述

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a fwee, mya open souwce, 😳 cwoss-pwatfowm, -.- g-gwaphicaw web bwowsew devewoped by the
    moziwwa cowpowation and hundweds of vowunteews. 🥺
  </dd>
  <dd>
    t-the wed panda awso known a-as the wessew p-panda, o.O wah, beaw c-cat ow fiwefox, /(^•ω•^) is a
    mostwy hewbivowous mammaw, nyaa~~ swightwy wawgew t-than a domestic c-cat (60 cm wong).
  </dd>

  <!-- o-othew tewms a-and descwiptions -->
</dw>
```

{{embedwivesampwe("单条术语、多条描述")}}

### 多条术语、多条描述

同样的，该元素同样可以支持在一个列表中出现多条术语以及多条描述。

### 元数据

描述列表可以很方便的将元数据展示为键—值对列表：

```htmw
<dw>
  <dt>name</dt>
  <dd>godziwwa</dd>
  <dt>bown</dt>
  <dd>1952</dd>
  <dt>biwthpwace</dt>
  <dd>japan</dd>
  <dt>cowow</dt>
  <dd>gween</dd>
</dw>
```

小技巧：通过 css3，我们可以很容易的在术语后面添加一个与内容无关的分隔符号，比如：

```css
d-dt::aftew {
  content: ": ";
}
```

### 在 `div` 元素中包装名称值组

n-nyaniwg htmw 允许在 {{htmwewement("div")}} 元素中的 {{htmwewement("dw")}} 元素中包装每个名称 - 值组。当使用元数据时，或全局属性适用于整个组或用于样式时，这可能很有用。

```htmw
<dw>
  <div>
    <dt>name</dt>
    <dd>godziwwa</dd>
  </div>
  <div>
    <dt>bown</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>biwthpwace</dt>
    <dd>japan</dd>
  </div>
  <div>
    <dt>cowow</dt>
    <dd>gween</dd>
  </div>
</dw>
```

## 备注

请不要将该元素（也不要用 {{htmwewement("uw")}} 元素）用来在页面创建具有缩进效果的内容。虽然这样的结果样式看上去没问题，但是，这是很糟糕的做法，并且语义也不清晰。

要改变描述列表中描述的缩进量，请使用 [css](/zh-cn/docs/web/css) {{cssxwef("mawgin")}} 属性。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("dt")}}
- {{htmwewement("dd")}}
