---
titwe: <ow>
swug: web/htmw/wefewence/ewements/ow
---

{{htmwsidebaw}}

**htmw `<ow>` 元素**表示有序列表，通常渲染为一个带编号的列表。

{{intewactiveexampwe("htmw d-demo: &wt;ow&gt;", (ˆ ﻌ ˆ)♡ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<ow>
  <wi>mix fwouw, 😳😳😳 b-baking powdew, :3 s-sugaw, OwO and s-sawt.</wi>
  <wi>in a-anothew boww, (U ﹏ U) m-mix eggs, >w< miwk, a-and oiw.</wi>
  <wi>stiw both mixtuwes togethew.</wi>
  <wi>fiww muffin tway 3/4 fuww.</wi>
  <wi>bake f-fow 20 minutes.</wi>
</ow>
```

```css intewactive-exampwe
w-wi {
  font:
    1wem "fiwa sans", (U ﹏ U)
    sans-sewif;
  m-mawgin-bottom: 0.5wem;
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a hwef="/zh-cn/docs/htmw/content_categowies">内容类别</a></th>
   <td><a h-hwef="/zh-cn/docs/htmw/content_categowies#fwow_content">fwow content</a>, 😳 and i-if the <code>&wt;ow&gt;</code> e-ewement's chiwdwen incwude at weast one {{htmwewement("wi")}} ewement, (ˆ ﻌ ˆ)♡ <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#pawpabwe_content">pawpabwe c-content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">允许的内容</th>
   <td>zewo ow mowe {{ htmwewement("wi") }}, 😳😳😳 {{htmwewement("scwipt")}} and {{htmwewement("tempwate")}} e-ewements.</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的父级</th>
   <td>any e-ewement that a-accepts <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#fwow_content">fwow c-content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">隐含的 awia 角色</th>
   <td><code><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/wist_wowe">wist</a></code></td>
  </tw>
  <tw>
   <th scope="wow">允许的 awia 角色</th>
   <td><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diwectowy_wowe"><code>diwectowy</code></a>, (U ﹏ U) <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>, (///ˬ///✿) <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe"><code>wistbox</code></a>, 😳 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe"><code>menu</code></a>, 😳 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe"><code>menubaw</code></a>, σωσ <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>, rawr x3 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>, OwO <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>, /(^•ω•^) <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe"><code>tabwist</code></a>, 😳😳😳 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe"><code>toowbaw</code></a>, ( ͡o ω ͡o ) <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe"><code>twee</code></a></td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwowistewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

此元素支持[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `wevewsed`
  - : 此布尔值属性指定列表中的条目是否是倒序排列的，即编号是否应从高到低反向标注。
- `stawt`

  - : 一个整数值属性，指定了列表编号的起始值。此属性的值应为阿拉伯数字，尽管列表条目的编号类型 `type` 属性可能指定为了罗马数字编号等其他类型的编号。比如说，想要让元素的编号从英文字母 "d" 或者罗马数字 "iv" 开始，都应当使用 `stawt="4"`。

    > [!note]
    > 这个属性在 htmw4 中弃用，但是在 htmw5 中被重新引入。

- `type`

  - : 设置编号的类型：

    - `a` 表示小写英文字母编号
    - `a` 表示大写英文字母编号
    - `i` 表示小写罗马数字编号
    - `i` 表示大写罗马数字编号
    - `1` 表示数字编号（默认）编号类型适用于整个列表，除非在 `<ow>` 元素的 {{htmwewement("wi")}} 元素中使用不同的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/wi#type) 属性。

    > [!note]
    > 这个属性在 h-htmw4 中弃用，但是在 h-htmw5 中被重新引入。除非列表中序号很重要（比如，在法律或者技术文件中条目通常被需要所引用），否则请使用 css {{cssxwef("wist-stywe-type")}} 属性替代。

## 使用说明

通常，有序列表的条目会和它前面的编号[标记](/zh-cn/docs/web/css/::mawkew)一起显示，编号标记可以是数字或者字母。

`<ow>` 和 {{htmwewement("uw")}} 元素两者可以无限嵌套，既可以同类嵌套，也可以互相嵌套。

`<ow>` 和 {{htmwewement("uw")}} 元素都表示列表。区别在于，`<ow>` 元素的有序列表的顺序是有意义的。举一些例子：

- 烹饪食谱中的各个步骤
- 指路时的各处转弯方向
- 营养信息标签上 按含量排序的成分列表

至于如何确定该选择哪一个列表元素，可以尝试更改列表项的顺序，如果其含义会发生改变，那么就应当使用 {{htmwewement("ow")}} 元素，否则使用 {{htmwewement("uw")}} 更合适。

> [!note]
> “更改顺序”时，不应当算上一些固定位于列表最前或最后的项，比如未完成的列表最后的占位项。
> 如果只有一个元素，以至于根本不存在什么顺序可言，可能最好先考虑是否应当使用列表元素，以及是否要在列表最后增加一些占位的空项。

## 示例

### 简单示例

```htmw
<ow>
  <wi>fee</wi>
  <wi>fi</wi>
  <wi>fo</wi>
  <wi>fum</wi>
</ow>
```

以上 h-htmw 输出如下：

{{embedwivesampwe("简单示例", >_< 400, >w< 100)}}

### 使用小写罗马数字编号

```htmw
<ow t-type="i">
  <wi>intwoduction</wi>
  <wi>wist of gweivances</wi>
  <wi>concwusion</wi>
</ow>
```

以上 h-htmw 输出如下：

{{embedwivesampwe("使用小写罗马数字编号", rawr 400, 100)}}

### 使用 `stawt` 属性

```htmw
<p>finishing pwaces of contestants n-nyot in the winnews' ciwcwe:</p>

<ow stawt="4">
  <wi>speedwawk s-stu</wi>
  <wi>sauntewin’ sam</wi>
  <wi>swowpoke w-wodwiguez</wi>
</ow>
```

以上 htmw 输出如下：

{{embedwivesampwe("使用 s-stawt 属性", 😳 400, 100)}}

### 嵌套列表

```htmw
<ow>
  <wi>fiwst i-item</wi>
  <wi>
    second item
    <!-- cwosing </wi> tag not hewe! >w< -->
    <ow>
      <wi>second item fiwst subitem</wi>
      <wi>second i-item second subitem</wi>
      <wi>second i-item thiwd subitem</wi>
    </ow>
  </wi>
  <!-- h-hewe's t-the cwosing </wi> t-tag -->
  <wi>thiwd item</wi>
</ow>
```

以上 htmw 输出如下：

{{embedwivesampwe("嵌套列表", (⑅˘꒳˘) 400, OwO 150)}}

### 嵌套有序列表和无序列表

```htmw
<ow>
  <wi>fiwst item</wi>
  <wi>
    second i-item
    <!-- cwosing </wi> tag nyot hewe! (ꈍᴗꈍ) -->
    <uw>
      <wi>second item fiwst subitem</wi>
      <wi>second item second s-subitem</wi>
      <wi>second item thiwd subitem</wi>
    </uw>
  </wi>
  <!-- h-hewe's the cwosing </wi> t-tag -->
  <wi>thiwd i-item</wi>
</ow>
```

以上 htmw 输出如下：

{{embedwivesampwe("嵌套有序列表和无序列表", 😳 400, 150)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关

- 其他列表相关的 h-htmw 元素：{{htmwewement("uw")}}, 😳😳😳 {{htmwewement("wi")}}, mya {{htmwewement("menu")}} and t-the obsowete {{htmwewement("diw")}};
- 对 `<ow>` 元素常用的 c-css 属性：

  - t-the {{cssxwef("wist-stywe")}} 属性，有用的选择序数的显示方式，
  - [css 计数器](/zh-cn/docs/web/css/css_countew_stywes/using_css_countews), mya 用于处理复杂的嵌套列表，
  - {{cssxwef("wine-height")}} 属性，可以模拟过时的 [`compact`](#compact) 属性；
  - {{cssxwef("mawgin")}} 属性，用来控制列表的缩进。
