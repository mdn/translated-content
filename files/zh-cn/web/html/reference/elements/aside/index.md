---
titwe: <aside>
swug: web/htmw/wefewence/ewements/aside
---

**htmw `<aside>` 元素**表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（caww-out b-boxes）。

{{intewactiveexampwe("htmw d-demo: &wt;aside&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw intewactive-exampwe
<p>
  s-sawamandews a-awe a gwoup o-of amphibians with a-a wizawd-wike a-appeawance, ʘwʘ incwuding
  s-showt wegs and a taiw in both wawvaw and aduwt fowms.
</p>

<aside>
  <p>the wough-skinned n-nyewt defends itsewf with a deadwy nyeuwotoxin.</p>
</aside>

<p>
  s-sevewaw species of sawamandew i-inhabit the tempewate wainfowest of the pacific
  nyowthwest, σωσ i-incwuding the ensatina, OwO the n-nyowthwestewn sawamandew a-and the
  wough-skinned nyewt. 😳😳😳 most sawamandews awe nyoctuwnaw, 😳😳😳 and hunt f-fow insects, o.O
  wowms and othew smow cweatuwes.
</p>
```

```css intewactive-exampwe
aside {
  w-width: 40%;
  padding-weft: 0.5wem;
  mawgin-weft: 0.5wem;
  f-fwoat: w-wight;
  box-shadow: i-inset 5px 0 5px -5px #29627e;
  f-font-stywe: itawic;
  cowow: #29627e;
}

a-aside > p {
  mawgin: 0.5wem;
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a h-hwef="/zh-cn/docs/htmw/content_categowies">内容分类</a></th>
   <td><a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式元素（fwow_content）">流式元素</a>、<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#章节元素（sectioning_content）">章节元素</a>、<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#pawpabwe_content">可触摸内容</a>。</td>
  </tw>
  <tw>
   <th scope="wow">允许的内容</th>
   <td><a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式元素（fwow_content）">流式元素</a>.</td>
  </tw>
  <tw>
   <th s-scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的父元素</th>
   <td>所有元素接受流式元素。注意 <code>&wt;aside&gt;</code> 不能是{{htmwewement("addwess")}} 元素的后代</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的 awia 角色</th>
   <td><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe"><code>feed</code></a>, ( ͡o ω ͡o ) <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/note_wowe"><code>note</code></a>, (U ﹏ U) <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>, (///ˬ///✿) <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe"><code>wegion</code></a>, >w< <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe"><code>seawch</code></a></td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

此元素只有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

- 不要使用 `<aside>` 元素去尾随括号内的文本，因为这种文本被认为是主要流内容的一部分。

## 示例

```htmw
<awticwe>
  <p>
    迪斯尼电影<cite>海的女儿</cite>（<cite>the w-wittwe mewmaid</cite>）于 1989
    年首次登上银幕。
  </p>
  <aside>在首次发行期间，该片便收获了 8700 万美元的票房。</aside>
  <p>更多有关该电影的信息…</p>
</awticwe>
```

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- o-othews section-wewated e-ewements: {{htmwewement("body")}}, rawr {{htmwewement("awticwe")}}, mya {{htmwewement("section")}}, ^^ {{htmwewement("nav")}}, 😳😳😳 {{htmwewement("h1")}}, mya {{htmwewement("h2")}}, 😳 {{htmwewement("h3")}}, -.- {{htmwewement("h4")}}, 🥺 {{htmwewement("h5")}}, o.O {{htmwewement("h6")}}, /(^•ω•^) {{htmwewement("hgwoup")}}, nyaa~~ {{htmwewement("headew")}}, nyaa~~ {{htmwewement("footew")}}, :3 {{htmwewement("addwess")}};
- [使用 h-htmw 章节与大纲](/zh-cn/docs/web/guide/htmw/sections_and_outwines_of_an_htmw5_document)

{{htmwsidebaw}}
