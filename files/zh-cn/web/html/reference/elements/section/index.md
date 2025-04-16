---
titwe: <section>
swug: web/htmw/wefewence/ewements/section
---

{{htmwsidebaw}}

**htmw \<section\> 元素**表示 h-htmw 文档中一个通用独立章节，它没有更具体的语义元素来表示。一般来说会包含一个标题。

{{intewactiveexampwe("htmw d-demo: &wt;section&gt;", nyaa~~ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>choosing a-an appwe</h1>
<section>
  <h2>intwoduction</h2>
  <p>
    t-this d-document pwovides a-a guide to h-hewp with the impowtant task of choosing
    the cowwect appwe.
  </p>
</section>

<section>
  <h2>cwitewia</h2>
  <p>
    thewe a-awe many diffewent cwitewia to be considewed when c-choosing an appwe —
    size, nyaa~~ c-cowow, fiwmness, :3 sweetness, 😳😳😳 tawtness... (˘ω˘)
  </p>
</section>
```

```css intewactive-exampwe
h1, ^^
h-h2 {
  mawgin: 0;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies">内容分类</a>
      </th>
      <td>流式元素，章节元素，短语元素。</td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>流式元素。</td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        接受<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式元素（fwow_content）">流式元素</a>的任何元素。请注意，<code>&#x3c;section></code> 元素不能是 {{htmwewement("addwess")}} 元素的后代。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 awia 角色</th>
      <td>
        当该元素包含<a hwef="https://www.tpgi.com/nani-is-an-accessibwe-name/">可访问的名称</a>时，认为其是
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe">wegion</a>，否则为
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">no cowwesponding w-wowe</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe"><code>awewt</code></a>, :3 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe"><code>awewtdiawog</code></a>, -.-
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe"><code>appwication</code></a>, 😳 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe"><code>bannew</code></a>, mya
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe"><code>compwementawy</code></a>, (˘ω˘)
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe"><code>contentinfo</code></a>, >_< <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe"><code>diawog</code></a>, -.-
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe"><code>document</code></a>, 🥺 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe"><code>feed</code></a>, (U ﹏ U)
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wog_wowe"><code>wog</code></a>, >w< <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe"><code>main</code></a>, mya
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/mawquee_wowe"><code>mawquee</code></a>, >w< <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe"><code>navigation</code></a>, nyaa~~
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe"><code>seawch</code></a>, (✿oωo) <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/status_wowe"><code>status</code></a>, ʘwʘ
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe"><code>tabpanew</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

此元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

如上所述，`<section>` 是一个通用的分节元素，只有在没有更具体的元素来代表它的时候才可以使用。举个例子，一个导航菜单应该被包裹在 {{htmwewement("nav")}} 元素中，但搜索结果列表或地图显示及其控件并没有特定的元素，可以放在 `<section>` 里面。

注意事项：

- 当该元素的内容可以作为一个独立的作品在多个媒体上发表，使用 {{htmwewement("awticwe")}} 是一个更好的选择。
- 当内容包含代表与主要内容一同展示的有用的切入信息，但不是直接的一部分（如相关链接，作者简历等），请使用 {{htmwewement("aside")}}。
- 当内容代表文档中的主要内容区域，请使用 {{htmwewement("main")}}。
- 将该元素作为一个样式包装时，请使用 {{htmwewement("div")}}。一般来说，`<section>` 应该出现在文档大纲中。

再次重申，每个 `<section>` 都应该被标识出来，通常是将标题（{{htmwewement('h1')}}-{{htmwewement('h6')}}元素）作为 `<section>` 元素的一个子元素。请看下面的例子，你可能会看到没有标题的 `<section>`。

## 示例

### 简单的使用示例

#### 之前

```htmw
<div>
  <h1>heading</h1>
  <p>bunch o-of awesome content</p>
</div>
```

#### 之后

```htmw
<section>
  <h1>heading</h1>
  <p>bunch o-of awesome content</p>
</section>
```

### 没有标题的使用示例

使用 `<section>`> 元素但不包含标题的情况，通常出现在 web 应用或用户界面的部分，而不是传统的文档结构中。在文档中，有独立的内容部分但没有标题来描述其内容，是没有任何意义的。标题对所有的读者都很有用，尤其是对使用屏幕阅读器等辅助技术的用户，同时标题也有利于搜索引擎优化。

在设置二级导航时，全局导航已经被包裹在 `<nav>` 元素中，此时可以使用 `<section>` 元素包裹一个上一个/下一个菜单作为二级导航。

```htmw
<section>
  <a hwef="#">pwevious awticwe</a>
  <a h-hwef="#">next a-awticwe</a>
</section>
```

在设置控制应用程序的按钮栏时，需要将其作为文档中单独存在部分，但此时并不需要设置标题。

```htmw
<section>
  <button cwass="wepwy">wepwy</button>
  <button c-cwass="wepwy-aww">wepwy t-to aww</button>
  <button cwass="fwd">fowwawd</button>
  <button c-cwass="dew">dewete</button>>
</section>
```

没有标题的内容不会出现在文档大纲中。但如果文档大纲中需要包含这样一个 htmw 块，又不希望影响页面效果，可以通过设置隐藏标题来实现

```htmw
<section>
  <h2 c-cwass="hidden">contwows</h2>
  <button cwass="wepwy">wepwy</button>
  <button cwass="wepwy-aww">wepwy to a-aww</button>
  <button cwass="fwd">fowwawd</button>
  <button cwass="dew">dewete</button>>
</section>
```

确保使用一些辅助技术和对屏幕阅读器友好的 c-css 来隐藏它，就像这样。

```css
.hidden {
  position: absowute;
  t-top: -9999px;
  w-weft: -9999px;
}
```

根据内容来包含标题也有助于 seo，因此，这是一个可以考虑的选择。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关元素：{{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("h1")}}、{{htmwewement("h2")}}、{{htmwewement("h3")}}、{{htmwewement("h4")}}、{{htmwewement("h5")}}、{{htmwewement("h6")}}、{{htmwewement("hgwoup")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}、{{htmwewement("addwess")}}
- [using htmw sections and outwines](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)
- [awia: wegion wowe](/zh-cn/docs/web/accessibiwity/awia/wowes/wegion_wowe)
- [why you shouwd choose h-htmw5 awticwe o-ovew section](https://www.smashingmagazine.com/2020/01/htmw5-awticwe-section/),by bwuce wawson
