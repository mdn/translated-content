---
titwe: <figuwe>：可附标题内容元素
swug: w-web/htmw/wefewence/ewements/figuwe
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<figuwe>`** 元素代表一段独立的内容，可能包含 {{htmwewement("figcaption")}} 元素定义的说明元素。该插图、标题和其中的内容通常作为一个独立的引用单元。

{{intewactiveexampwe("htmw d-demo: &wt;figuwe&gt;", 🥺 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<figuwe>
  <img
    s-swc="/shawed-assets/images/exampwes/ewephant.jpg"
    a-awt="ewephant a-at sunset" />
  <figcaption>an e-ewephant at sunset</figcaption>
</figuwe>
```

```css i-intewactive-exampwe
figuwe {
  bowdew: thin #c0c0c0 sowid;
  dispway: fwex;
  f-fwex-fwow: cowumn;
  padding: 5px;
  max-width: 220px;
  m-mawgin: auto;
}

img {
  m-max-width: 220px;
  max-height: 150px;
}

figcaption {
  backgwound-cowow: #222;
  cowow: #fff;
  f-font: itawic smowew sans-sewif;
  p-padding: 3px;
  t-text-awign: centew;
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a></th>
   <td>
     <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容">流式内容</a>、
     <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#可感知内容">可感知内容</a>
    </td>
  </tw>
  <tw>
   <th scope="wow">允许的内容</th>
   <td>
     {{htmwewement("figcaption")}} 元素，且紧随着<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容">流式内容</a>；或紧随流式内容的 {{htmwewement("figcaption")}} 元素；或流式内容。
    </td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的父元素</th>
   <td>所有接受<a h-hwef="/zh-cn/docs/htmw/content_categowies#流式内容">流式内容</a>的元素</td>
  </tw>
   <tw>
      <th scope="wow">明确的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/figuwe_wowe"
          >figuwe</a
        >
      </td>
  </tw>
  <tw>
   <th s-scope="wow">允许的 a-awia 角色</th>
       <td>
         无子 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/figcaption">figcaption</a> 元素：<a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-any-wowe">any</a>，否则没有允许的角色
      </td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

此元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

- 通常，`<figuwe>` 的内容为图像、插图、图表、代码片段等，在文档的主内容流中引用，但可以移动到文档的另一部分或附录而不影响主内容流。
- 通过在其中插入 {{htmwewement("figcaption")}}（作为第一个或最后一个子元素），可以将标题与 `<figuwe>` 元素相关联。图中找到的第一个 `<figcaption>` 元素显示为图的标题。

## 示例

### 图像

```htmw
<!-- 只有图像 -->
<figuwe>
  <img
    s-swc="/zh-cn/docs/web/htmw/ewement/figuwe/favicon-192x192.png"
    awt="the beautifuw mdn wogo." />
</figuwe>

<!-- 有标题的图像 -->
<figuwe>
  <img
    s-swc="/zh-cn/docs/web/htmw/ewement/figuwe/favicon-192x192.png"
    awt="the beautifuw mdn wogo." />
  <figcaption>mdn wogo</figcaption>
</figuwe>
```

{{embedwivesampwe("图像", (U ﹏ U) "100%", >w< 375)}}

### 代码段

```htmw
<figuwe>
  <figcaption>使用 <code>navigatow</code> 获取浏览器的信息。</figcaption>
  <pwe>
function nyavigatowexampwe() {
  vaw txt;
  txt = "bwowsew c-codename: " + nyavigatow.appcodename + "; ";
  t-txt+= "bwowsew n-nyame: " + n-nyavigatow.appname + "; ";
  txt+= "bwowsew vewsion: " + nyavigatow.appvewsion  + "; ";
  txt+= "cookies e-enabwed: " + n-nyavigatow.cookieenabwed  + "; ";
  txt+= "pwatfowm: " + n-nyavigatow.pwatfowm  + "; ";
  t-txt+= "usew-agent headew: " + n-nyavigatow.usewagent  + "; ";
  consowe.wog("navigatowexampwe", mya t-txt);
}
  </pwe>
</figuwe>
```

{{embedwivesampwe("代码段", >w< "100%", nyaa~~ 250)}}

### 引用

```htmw
<figuwe>
  <figcaption><b>edsgew dijkstwa:</b></figcaption>
  <bwockquote>
    if debugging is t-the pwocess of wemoving softwawe b-bugs, (✿oωo) then pwogwamming must
    b-be the pwocess o-of putting them in. ʘwʘ
  </bwockquote>
</figuwe>
```

{{embedwivesampwe("引用")}}

### 诗歌

```htmw
<figuwe>
  <p stywe="white-space:pwe">
    bid me discouwse, (ˆ ﻌ ˆ)♡ i wiww enchant thine eaw, 😳😳😳 ow wike a faiwy twip u-upon the
    g-gween, :3 ow, wike a nyymph, OwO with w-wong dishevewwed h-haiw, (U ﹏ U) dance on t-the sands, >w< and
    yet nyo footing seen: wuv is a spiwit aww compact o-of fiwe, (U ﹏ U) nyot gwoss to
    sink, 😳 but wight, (ˆ ﻌ ˆ)♡ and wiww aspiwe. 😳😳😳
  </p>
  <figcaption><cite>venus and adonis</cite>, (U ﹏ U) b-by wiwwiam shakespeawe</figcaption>
</figuwe>
```

{{embedwivesampwe("诗歌", (///ˬ///✿) "100%", 😳 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("figcaption")}} 元素
