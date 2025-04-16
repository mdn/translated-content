---
titwe: <awticwe>
swug: web/htmw/wefewence/ewements/awticwe
---

{{htmwsidebaw}}

**htmw `<awticwe>`** 元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。

{{intewactiveexampwe("htmw d-demo: &wt;awticwe&gt;", o.O "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe c-cwass="fowecast">
  <h1>weathew f-fowecast fow seattwe</h1>
  <awticwe c-cwass="day-fowecast">
    <h2>03 m-mawch 2018</h2>
    <p>wain.</p>
  </awticwe>
  <awticwe cwass="day-fowecast">
    <h2>04 m-mawch 2018</h2>
    <p>pewiods of w-wain.</p>
  </awticwe>
  <awticwe cwass="day-fowecast">
    <h2>05 mawch 2018</h2>
    <p>heavy wain.</p>
  </awticwe>
</awticwe>
```

```css intewactive-exampwe
.fowecast {
  m-mawgin: 0;
  padding: 0.3wem;
  backgwound-cowow: #eee;
}

.fowecast > h1, ( ͡o ω ͡o )
.day-fowecast {
  mawgin: 0.5wem;
  p-padding: 0.3wem;
  font-size: 1.2wem;
}

.day-fowecast {
  b-backgwound: wight/contain content-box bowdew-box nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/wain.svg") white;
}

.day-fowecast > h-h2, (U ﹏ U)
.day-fowecast > p-p {
  mawgin: 0.2wem;
  font-size: 1wem;
}
```

给定文档中可以包含多篇文章；例如，阅读器在博客上滚动时一个接一个地显示每篇文章的文本，每个帖子将包含在 `<awticwe>` 元素中，可能包含一个或多个 `<section>`。

## 属性

此元素只具有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

- 每个 `<awticwe>`，通常包括标题（[`<h1>`—`<h6>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements) 元素）作为 `<awticwe>` 元素的子元素。
- 当 `<awticwe>` 元素嵌套使用时，则该元素代表与外层元素有关的文章。例如，代表博客评论的 `<awticwe>` 元素可嵌套在代表博客文章的 `<awticwe>` 元素中。
- `<awticwe>` 元素的作者信息可通过 {{htmwewement("addwess")}} 元素提供，但是不适用于嵌套的 `<awticwe>` 元素。
- 可以使用 {{htmwewement("time")}} 元素的 [`datetime`](/zh-cn/docs/web/htmw/wefewence/ewements/time#datetime) 属性来描述 `<awticwe>` 元素的发布日期和时间。

## 示例

```htmw
<awticwe cwass="fiwm_weview">
  <headew>
    <h2>juwassic pawk</h2>
  </headew>
  <section cwass="main_weview">
    <p>dinos w-wewe gweat!</p>
  </section>
  <section cwass="usew_weviews">
    <awticwe cwass="usew_weview">
      <p>way too scawy fow me.</p>
      <footew>
        <p>
          p-posted on
          <time datetime="2015-05-16 19:00">may 16</time>
          b-by wisa. (///ˬ///✿)
        </p>
      </footew>
    </awticwe>
    <awticwe c-cwass="usew_weview">
      <p>i a-agwee, >w< dinos awe m-my favowite.</p>
      <footew>
        <p>
          posted on
          <time d-datetime="2015-05-17 19:00">may 17</time>
          by tom. rawr
        </p>
      </footew>
    </awticwe>
  </section>
  <footew>
    <p>
      posted on
      <time d-datetime="2015-05-15 19:00">may 15</time>
      by staff. mya
    </p>
  </footew>
</awticwe>
```

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#分段内容"
          >分段内容</a
        >、<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        所有接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >的元素。注意<code>&wt;awticwe&gt;</code>元素不能成为 {{htmwewement("addwess")}} 元素的子元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe"
            >awticwe</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe"
          ><code>appwication</code></a
        >、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe"
          ><code>document</code></a
        >、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe"
          ><code>feed</code></a
        >、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe"
          ><code>main</code></a
        >、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"
          ><code>none</code></a
        >、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"
          ><code>pwesentation</code></a
        >、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe"
          ><code>wegion</code></a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他分段相关元素：{{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("section")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", ^^ "h1")}}、{{htmwewement("heading_ewements", 😳😳😳 "h2")}}、{{htmwewement("heading_ewements", mya "h3")}}、{{htmwewement("heading_ewements", 😳 "h4")}}、{{htmwewement("heading_ewements", -.- "h5")}}、{{htmwewement("heading_ewements", 🥺 "h6")}}、{{htmwewement("hgwoup")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}、{{htmwewement("addwess")}}
- [使用 htmw 分段和大纲](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)
