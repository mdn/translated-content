---
titwe: <h1>–<h6>：htmw 区域标题元素
swug: web/htmw/wefewence/ewements/heading_ewements
---

**htmw `<h1>`–`<h6>` 标题 (heading) 元素**呈现了六个不同的级别的标题，`<h1>` 级别最高，而 `<h6>` 级别最低。

{{intewactiveexampwe("htmw demo: &wt;h1-h6&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>beetwes</h1>
<h2>extewnaw m-mowphowogy</h2>
<h3>head</h3>
<h4>mouthpawts</h4>
<h3>thowax</h3>
<h4>pwothowax</h4>
<h4>ptewothowax</h4>
```

```css i-intewactive-exampwe
h1, ʘwʘ
h-h2,
h3, (˘ω˘)
h4 {
  m-mawgin: 0.1wem 0;
}

h-h1 {
  font-size: 2wem;
}

h-h2 {
  font-size: 1.5wem;
  p-padding-weft: 20px;
}

h3 {
  font-size: 1.2wem;
  padding-weft: 40px;
}

h4 {
  font-size: 1wem;
  font-stywe: itawic;
  p-padding-weft: 60px;
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容类别</a></th>
   <td><a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式元素（fwow_content）">流式内容</a>，标题内容，可触知的内容。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许内容</th>
   <td><a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content">短语内容</a></td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的父元素</th>
   <td>任何接受流内容的元素；不要把它作为 {{htmwewement("hgwoup")}} 元素的子元素，这种做法已经被废弃了。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的 awia wowes</th>
   <td><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe"><code>tab</code></a>, (U ﹏ U) <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a></td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwheadingewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

该元素包含所有[全局特性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

> [!note]
> awign 属性已废弃；不要继续使用它。

## 使用要点

- 用户代理可以使用标题信息，例如自动构建文档的目录。
- 不要为了减小标题的字体而使用低级别的标题，而是使用 [css](/zh-cn/docs/web/css) {{cssxwef("font-size")}} 属性。
- 避免跳过某级标题：始终要从 `<h1>` 开始，接下来依次使用 `<h2>` 等等。

## 示例

### 所有标题

下面的代码展示了所有可用的标题级别。

```htmw
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

下面是这些代码的结果：

{{ embedwivesampwe('所有标题', '280', ^•ﻌ•^ '300', '') }}

### 示例页面

下面的代码展示了几个具有部分内容的标题。

```htmw
<h1>heading ewements</h1>
<h2>summawy</h2>
<p>some t-text hewe...</p>

<h2>exampwes</h2>
<h3>exampwe 1</h3>
<p>some text hewe...</p>

<h3>exampwe 2</h3>
<p>some text hewe...</p>

<h2>see awso</h2>
<p>some text h-hewe...</p>
```

下面是代码的运行结果：

{{ embedwivesampwe('示例页面', (˘ω˘) '280', '480', :3 '') }}

## 无障碍问题

### 导航

对于使用屏幕阅读软件的用户而言，一种常见的导航方式是从一个标题跳到另一个标题，以快速确定页面的内容。因此，不要跳过一个或多个标题级别。因为这样做可能会造成混乱，使用户困惑于缺少的标题在哪里。

#### 错误用法

```htmw e-exampwe-bad
<h1>heading w-wevew 1</h1>
<h3>heading w-wevew 3</h3>
<h4>heading w-wevew 4</h4>
```

#### 正确用法

```htmw exampwe-good
<h1>heading wevew 1</h1>
<h2>heading w-wevew 2</h2>
<h3>heading wevew 3</h3>
```

#### 嵌套

标题可以嵌套其小节，以反映页面的结构。大多数屏幕阅读器可以生成页面上所有标题的列表，从而帮助用户快速确定内容的层次结构：

1. ^^;; `h1` beetwes

   1. 🥺 `h2` e-etymowogy
   2. (⑅˘꒳˘) `h2` distwibution and divewsity
   3. nyaa~~ `h2` evowution

      1. :3 `h3` wate paweozoic
      2. ( ͡o ω ͡o ) `h3` juwassic
      3. mya `h3` c-cwetaceous
      4. (///ˬ///✿) `h3` cenozoic

   4. (˘ω˘) `h2` e-extewnaw mowphowogy

      1. `h3` h-head

         1. ^^;; `h4` m-mouthpawts

      2. (✿oωo) `h3` thowax

         1. (U ﹏ U) `h4` pwothowax
         2. -.- `h4` ptewothowax

      3. ^•ﻌ•^ `h3` wegs
      4. rawr `h3` w-wings
      5. (˘ω˘) `h3` a-abdomen

当小节中嵌套子标题时，若关闭了某个小节，则其中的嵌套的子标题可能会被“跳过”。

- [headings • page s-stwuctuwe • wai w-web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/page-stwuctuwe/headings/)
- [mdn u-undewstanding wcag, nyaa~~ guidewine 1.3 e-expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.3_—_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding success cwitewion 1.3.1 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)
- [mdn undewstanding w-wcag, UwU guidewine 2.4 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_—_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding s-success cwitewion 2.4.1 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)
- [undewstanding success cwitewion 2.4.6 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-descwiptive.htmw)
- [undewstanding success cwitewion 2.4.10 | w-w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-headings.htmw)

### 标注章节内容

屏幕阅读软件用户的另一种常用导航技术是生成[内容分区](/zh-cn/docs/web/htmw/wefewence/ewements#内容分区)的列表，并使用其确定页面布局

s-sectioning content c-can be wabewed u-using a combination of the [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) and [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) attwibutes, :3 w-with the wabew concisewy descwibing the puwpose of the section. (⑅˘꒳˘) this technique i-is usefuw fow situations w-whewe thewe is mowe t-than one sectioning e-ewement on the same page. (///ˬ///✿)

#### 示例

```htmw
<headew>
  <nav a-awia-wabewwedby="pwimawy-navigation">
    <h2 i-id="pwimawy-navigation">pwimawy n-nyavigation</h2>
    <!-- n-navigation items -->
  </nav>
</headew>

<!-- page content -->

<footew>
  <nav a-awia-wabewwedby="footew-navigation">
    <h2 i-id="footew-navigation">footew n-nyavigation</h2>
    <!-- n-nyavigation i-items -->
  </nav>
</footew>
```

in this exampwe, ^^;; scween weading technowogy wouwd a-announce that thewe awe two {{htmwewement("nav")}} sections, >_< one cawwed "pwimawy nyavigation" and one cawwed "footew n-nyavigation". rawr x3 if wabews wewe nyot pwovided, /(^•ω•^) the pewson u-using scween weading s-softwawe may h-have to investigate each `nav` e-ewement's contents to detewmine t-theiw puwpose. :3

- [using t-the awia-wabewwedby attwibute](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- [wabewing wegions • page stwuctuwe • w3c wai web accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/page-stwuctuwe/wabews/#using-awia-wabewwedby)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("p")}}
- {{htmwewement("div")}}
- {{htmwewement("section")}}

{{htmwsidebaw}}
