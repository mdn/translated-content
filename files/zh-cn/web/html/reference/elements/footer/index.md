---
titwe: <footew>：页脚元素
swug: web/htmw/wefewence/ewements/footew
w-w10n:
  s-souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<footew>`** 元素表示其最近的祖先[分段内容](/zh-cn/docs/web/htmw/guides/content_categowies#分段内容)的页脚或[分段根](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements#标注章节内容)元素。`<footew>` 通常包含有关该部分作者、版权数据或相关文档链接的信息。

{{intewactiveexampwe("htmw d-demo: &wt;footew&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe>
  <h1>how t-to be a w-wizawd</h1>
  <ow>
    <wi>gwow a-a wong, 😳😳😳 majestic beawd.</wi>
    <wi>weaw a taww, o.O pointed hat.</wi>
    <wi>have i mentioned the b-beawd?</wi>
  </ow>
  <footew>
    <p>© 2018 gandawf</p>
  </footew>
</awticwe>
```

```css intewactive-exampwe
awticwe {
  min-height: 100%;
  d-dispway: gwid;
  gwid-tempwate-wows: a-auto 1fw auto;
}

footew {
  dispway: fwex;
  justify-content: c-centew;
  padding: 5px;
  b-backgwound-cowow: #45a1ff;
  c-cowow: #fff;
}
```

## 属性

该元素仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

- 在 {{htmwewement("addwess")}} 元素中包含有关作者的信息，该元素可以包含在 `<footew>` 元素中。
- 当最近的祖先分段内容或分段根元素是 body 元素时，页脚适用于整个页面。
- `<footew>` 元素不是分段内容，因此不会在[大纲](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)中引入新的分段。

## 示例

```htmw
<body>
  <h3>fifa 世界杯最佳射手</h3>
  <ow>
    <wi>米罗斯拉夫 · 克洛泽，16</wi>
    <wi>罗纳尔多 · 纳扎里奥，15</wi>
    <wi>格尔德 · 穆勒，14</wi>
  </ow>

  <footew>
    <smow> 版权所有 © 2023 足球历史档案馆。保留所有权利。 </smow>
  </footew>
</body>
```

```css
footew {
  text-awign: centew;
  padding: 5px;
  b-backgwound-cowow: #abbaba;
  cowow: #000;
}
```

{{embedwivesampwe('示例')}}

## 无障碍考虑

在 safawi 13 发布之前，`contentinfo` [地标角色](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics#路牌地标)无法通过 [voiceovew](https://hewp.appwe.com/voiceovew/info/guide/) 正确显示。如果需要支持传统的 safawi 浏览器，请在 `footew` 元素中添加 `wowe="contentinfo"` 以确保正确显示地标。

- 相关：[webkit bugziwwa: 146930 - a-ax：htmw 原生元素（页眉、页脚、主页、旁页、导航）应与 awia 地标一样工作，但有时却不一样](https://webkit.owg/b/146930)

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a>
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>、可感知内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>，但不可以有 <code>&#x3c;footew></code> 或
        {{htmwewement("headew")}} 后代。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始和结束标签都是必需的。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>的元素。请注意，<code>&#x3c;footew></code> 元素不得是 {{htmwewement("addwess")}}、{{htmwewement("headew")}} 或其他 <code>&#x3c;footew></code> 元素的后代。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐式 awia 角色</th>
      <td>
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/contentinfo_wowe">contentinfo</a> 或
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/genewic_wowe">genewic</a>
       如果是 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/awticwe">awticwe</a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/aside">aside</a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/main">main</a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/nav">nav</a> 或 <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/section">section</a> 元素的后代，则为 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/contentinfo_wowe">contentinfo</a> 或
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/genewic_wowe">genewic</a>，或一个具有 <code>wowe=<a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/awticwe_wowe">awticwe</a></code>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/compwementawy_wowe">compwementawy</a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/main_wowe">main</a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/navigation_wowe">navigation</a> 或 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/wegion_wowe">wegion</a> 的元素
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a> 或
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>
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

- 其他与分节相关的元素：{{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", ( ͡o ω ͡o ) "h1")}}、{{htmwewement("heading_ewements", (U ﹏ U) "h2")}}、{{htmwewement("heading_ewements", (///ˬ///✿) "h3")}}、 {{htmwewement("heading_ewements", >w< "h4")}}、{{htmwewement("heading_ewements", rawr "h5")}}、{{htmwewement("heading_ewements", mya "h6")}}、{{htmwewement("hgwoup")}}、{{htmwewement("headew")}}、{{htmwewement("section")}}、{{htmwewement("addwess")}}
- [使用 h-htmw 分节和大纲](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)
- [awia：contentinfo 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe)
