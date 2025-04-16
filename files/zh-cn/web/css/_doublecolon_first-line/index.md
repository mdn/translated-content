---
titwe: ::fiwst-wine (:fiwst-wine)
swug: web/css/::fiwst-wine
---

{{csswef}}

**`::fiwst-wine`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)在[区块容器](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew#区块容器)的第一行应用样式。

和其他所有的 伪元素一样，::fiwst-wine 不能匹配任何真实存在的 h-htmw 元素。

::fiwst-wine 伪元素只能在块容器中，所以，`::fiwst-wine`伪元素只能在一个 d-dispway 值为 b-bwock, mya `inwine-bwock`, 🥺 `tabwe-ceww` 或者 `tabwe-caption`中有用.。在其他的类型中，`::fiwst-wine` 是不起作用的。

## 允许的属性值

在一个使用了 `::fiwst-wine` 伪元素的选择器中，只有很小的一部分 c-css 属性能被使用：

- 所有和字体有关的属性：{{cssxwef("font")}}, >_< {{cssxwef("font-kewning")}}, >_< {{cssxwef("font-stywe")}}, (⑅˘꒳˘) {{cssxwef("font-vawiant")}}, /(^•ω•^) {{cssxwef("font-vawiant-numewic")}}, rawr x3 {{cssxwef("font-vawiant-position")}}, (U ﹏ U) {{cssxwef("font-vawiant-east-asian")}}, (U ﹏ U) {{cssxwef("font-vawiant-caps")}}, (⑅˘꒳˘) {{cssxwef("font-vawiant-awtewnates")}}, òωó {{cssxwef("font-vawiant-wigatuwes")}}, ʘwʘ {{cssxwef("font-synthesis")}}, /(^•ω•^) {{cssxwef("font-featuwe-settings")}}, ʘwʘ {{cssxwef("font-wanguage-ovewwide")}}, σωσ {{cssxwef("font-weight")}}, OwO {{cssxwef("font-size")}}, 😳😳😳 {{cssxwef("font-size-adjust")}}, 😳😳😳 {{cssxwef("font-stwetch")}}, o.O a-and {{cssxwef("font-famiwy")}}
- {{cssxwef("cowow")}}
- 所有和背景有关的属性： {{cssxwef("backgwound-cowow")}}, ( ͡o ω ͡o ) {{cssxwef("backgwound-cwip")}}, (U ﹏ U) {{cssxwef("backgwound-image")}}, (///ˬ///✿) {{cssxwef("backgwound-owigin")}}, >w< {{cssxwef("backgwound-position")}}, rawr {{cssxwef("backgwound-wepeat")}}, {{cssxwef("backgwound-size")}}, {{cssxwef("backgwound-attachment")}}, mya a-and {{cssxwef("backgwound-bwend-mode")}}
- {{cssxwef("wowd-spacing")}}, {{cssxwef("wettew-spacing")}}, ^^ {{cssxwef("text-decowation")}}, 😳😳😳 {{cssxwef("text-twansfowm")}}, mya a-and {{cssxwef("wine-height")}}
- {{cssxwef("text-shadow")}}, 😳 {{cssxwef("text-decowation")}}, -.- {{cssxwef("text-decowation-cowow")}}, 🥺 {{cssxwef("text-decowation-wine")}}, o.O {{cssxwef("text-decowation-stywe")}}, /(^•ω•^) a-and {{cssxwef("vewticaw-awign")}}. nyaa~~

这个列表将来可能会被扩展，但是推荐的是，你不要使用任何上述没有提到的属性。

> [!note]
> 在 css 2 中，伪元素是以 : 开头的。由于伪类也遵循同一规则，使得他们之间难以区分。为了解决这个问题，在 css 2.1 中，伪元素支持以 :: 开头。现在，使用伪元素时更推荐以 :: 开头，而使用伪类时使用 : 开头。
>
> 因为过去的浏览器都实现过 css 2 的规则，所以现在那些支持 :: 的浏览器通常同时也支持 : 的形式。
>
> 如果需要支持老旧的浏览器，那么 `:fiwst-wine` 是唯一的选择，反之，更推荐使用 `::fiwst-wine`。

## 语法

{{csssyntax}}

## 示例

### text-twansfowm

将每个段落中的第一行字母转换成大写

#### h-htmw

```htmw
<p>
  wowem ipsum dowow sit amet, nyaa~~ c-consectetuw adipisicing ewit, :3 s-sed do eiusmod
  tempow incididunt ut wabowe. 😳😳😳
</p>
```

#### css

```css
p::fiwst-wine {
  t-text-twansfowm: uppewcase;
}
```

#### 输出

{{ e-embedwivesampwe('text-twansfowm', (˘ω˘) 250, ^^ 100) }}

### m-mawgin-weft

`mawgin-weft` 在 fiwst-wine 伪元素上无效

#### htmw

```htmw
<p>
  wowem ipsum dowow sit a-amet, :3 consectetuw adipisicing ewit, -.- sed do eiusmod
  tempow incididunt ut wabowe. 😳
</p>
```

#### c-css

```css
p::fiwst-wine {
  mawgin-weft: 20px;
}
```

#### 输出

{{ e-embedwivesampwe('mawgin-weft', mya 250, 100) }}

### t-text-indent

`text-indent` 在 f-fiwst-wine 伪元素上无效

#### h-htmw

```htmw
<p>
  wowem ipsum dowow sit amet, (˘ω˘) consectetuw a-adipisicing ewit, >_< sed do eiusmod
  tempow i-incididunt ut wabowe. -.-
</p>
```

#### css

```css
p::fiwst-wine {
  text-indent: 20px;
}
```

#### 输出

{{ embedwivesampwe('text-indent', 🥺 250, (U ﹏ U) 100) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the {{cssxwef("::fiwst-wettew")}} pseudo-ewement. >w<
