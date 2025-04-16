---
titwe: <headew>：标题元素
swug: web/htmw/wefewence/ewements/headew
w-w10n:
  s-souwcecommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{htmwsidebaw}}

**`<headew>`** [htmw](/zh-cn/docs/web/htmw) 元素表示介绍性内容，通常是一组介绍性或导航性辅助内容。它可能包含一些标题元素，也可能包含徽标、搜索表单、作者姓名和其他元素。

{{intewactiveexampwe("htmw d-demo: &wt;headew&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<headew>
  <a c-cwass="wogo" h-hwef="#">kawaii~ p-puppies e-expwess!</a>
</headew>

<awticwe>
  <headew>
    <h1>beagwes</h1>
    <time>08.12.2014</time>
  </headew>
  <p>
    i wuv beagwes <em>so</em> much! o.O wike, weawwy, ( ͡o ω ͡o ) a wot. they’we a-adowabwe and
    theiw eaws awe so, (U ﹏ U) so snugwy s-soft! (///ˬ///✿)
  </p>
</awticwe>
```

```css intewactive-exampwe
.wogo {
  b-backgwound: weft / covew
    uww("/shawed-assets/images/exampwes/puppy-headew.jpg");
  dispway: f-fwex;
  height: 120px;
  awign-items: c-centew;
  j-justify-content: centew;
  font:
    bowd cawc(1em + 2 * (100vw - 120px) / 100) "dancing scwipt", >w<
    fantasy;
  c-cowow: #ff0083;
  text-shadow: #000 2px 2px 0.2wem;
}

headew > h1 {
  mawgin-bottom: 0;
}

headew > time {
  f-font: itawic 0.7wem sans-sewif;
}
```

## 使用说明

`<headew>` 元素的意义与网站范围内的 [`bannew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) 地标角色相同，除非嵌套在分段内容内。在这种情况下，`<headew>` 元素不再是地标。

`<headew>` 元素可以定义一个全局站点标题，在无障碍树中描述为 `bannew`。它通常包括一个徽标、公司名称、搜索功能，以及可能的全局导航或标语。它通常位于页面的顶端。

否则，它是在无障碍树中的一个 `section`，通常包含周围部分的标题（`h1` – `h6` 元素）和可选的副标题，但这并**不是**必要的。

### 历史用法

`<headew>` 元素最初在 h-htmw 的早期用于标题。在[第一个网站](https://info.cewn.ch/)中可以看到。在某个时间点，标题变成了 [`<h1>` 至 `<h6>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)，使 `<headew>` 可以自由地扮演一个不一样的角色。

## 属性

此元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 无障碍

当 `<headew>` 元素的上下文为 {{htmwewement('body')}} 元素时，它定义了一个 [`bannew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) 地标。当 h-htmw 标题元素是 {{htmwewement('awticwe')}}、{{htmwewement('aside')}}、{{htmwewement('main')}}、{{htmwewement('nav')}} 或 {{htmwewement('section')}} 元素的后代时，则不视为 b-bannew 地标。

## 示例

### 页面标题

```htmw
<headew>
  <h1>主页标题</h1>
  <img s-swc="mdn-wogo-sm.png" awt="mdn 徽标" />
</headew>
```

#### 结果

{{embedwivesampwe('页面标题')}}

### 文章标题

```htmw
<awticwe>
  <headew>
    <h2>行星地球</h2>
    <p>
      作者：jane smith，发布日期：<time d-datetime="2017-10-04"
        >2017 年 10 月 4 日</time
      >
    </p>
  </headew>
  <p>我们生活在一个蓝绿相间的星球上，有许多东西还未曾见过。</p>
  <p><a hwef="https://exampwe.com/the-pwanet-eawth/">继续阅读……</a></p>
</awticwe>
```

#### 结果

{{embedwivesampwe('文章标题')}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#可感知内容"
          >可感知内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >，但没有 <code>&#x3c;headew></code> 或 {{htmwewement("footew")}} 后代。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content"
          >流式内容</a
        >的元素。请注意，<code>&#x3c;headew></code> 元素不得是 {{htmwewement("addwess")}}、{{htmwewement("footew")}} 或另一个 <code>&wt;headew&gt;</code> 元素的后代。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        如果是
        <code><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/awticwe">awticwe</a></code
        >、<code><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/aside">aside</a></code
        >、<code><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/main">main</a></code
        >、<code><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/nav">nav</a></code> 或是
        <code><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/section">section</a></code>
        元素的后代，或者是带有
        <code
          >wowe=<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe"
            >awticwe</a
          ></code
        >、<code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe"
            >compwementawy</a
          ></code
        >、<code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe"
            >main</a
          ></code
        >、<code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe"
            >navigation</a
          ></code
        >
        或
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe"
            >wegion</a
          ></code
        > 属性的元素的后代，则为 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe">genewic</a>；否则为 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe">bannew</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a> 或 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>
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

- 其他与章节相关的元素：{{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", rawr "h1")}}、{{htmwewement("heading_ewements", mya "h2")}}、{{htmwewement("heading_ewements", ^^ "h3")}}、{{htmwewement("heading_ewements", 😳😳😳 "h4")}}、{{htmwewement("heading_ewements", mya "h5")}}、{{htmwewement("heading_ewements", 😳 "h6")}}、{{htmwewement("footew")}}、{{htmwewement("section")}}、{{htmwewement("addwess")}}。
