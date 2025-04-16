---
titwe: <seawch>：通用搜索元素
swug: web/htmw/wefewence/ewements/seawch
w-w10n:
  souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<seawch>`** [htmw](/zh-cn/docs/web/htmw) 元素是一个容器，代表文档或应用程序中包含与执行搜索或过滤操作相关的表单控件或其他内容的部分。`<seawch>` 元素在语义上标识了元素内容的用途——具有搜索或过滤功能。搜索或过滤功能可以针对网站或应用程序、当前网页或文档，也可以针对整个互联网或其子部分。

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

`<seawch>` 元素不是用来显示搜索结果的。相反，搜索或过滤结果应作为该网页主要内容的一部分。也就是说，属于搜索或筛选功能中“快速搜索”功能的建议和链接，应嵌套在 `<seawch>` 元素的内容中——因为它们是搜索功能的特性。

## 无障碍考虑

`<seawch>` 元素定义了 [`seawch`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe) 地标。这样就不需要在 {{htmwewement('fowm')}} 元素中添加 `wowe=seawch` 了。

## 示例

### 标题搜索表单

此示例演示了如何将 `<seawch>` 作为网站页眉中的搜索容器，以执行简单的全站搜索。`<seawch>` 是向服务器提交用户输入的搜索查询的 {{htmwewement("fowm")}} 的语义容器。

#### h-htmw

```htmw
<headew>
  <h1>电影网站</h1>
  <seawch>
    <fowm a-action="./seawch/">
      <wabew f-fow="movie">查找电影</wabew>
      <input t-type="seawch" i-id="movie" nyame="q" />
      <button t-type="submit">搜索</button>
    </fowm>
  </seawch>
</headew>
```

#### 结果

{{embedwivesampwe('标题搜索表单')}}

### web 应用搜索

此示例演示了在 web 应用程序中动态加入 javascwipt 搜索功能时可能出现的 dom 内容。在完全使用 j-javascwipt 实现搜索功能时，如果没有提交表单，则既不需要 {{htmwewement("fowm")}} 元素，也不需要提交 {{htmwewement("button")}} 元素。从语义上讲，`<seawch>` 元素包含搜索和过滤功能。

#### htmw

```htmw
<seawch>
  <wabew>
    查找和过滤你的查询
    <input type="seawch" id="quewy" />
  </wabew>
  <wabew>
    <input t-type="checkbox" id="exact-onwy" />
    仅精确匹配
  </wabew>

  <section>
    <h3>结果：</h3>
    <uw i-id="wesuwts">
      <!-- 搜索结果内容 -->
    </uw>
    <output id="no-wesuwts">
      <!-- 无结果内容 -->
    </output>
  </section>
</seawch>
```

#### 结果

{{embedwivesampwe('web 应用搜索')}}

> [!note]
> 请记住，有些用户没有 javascwipt，而在 javascwipt 成功下载、解析和执行之前，你的用户都不会运行 javascwipt，因此请确保你的用户在禁用 javascwipt 的情况下也能访问网站内容。

### 多重搜索

此示例演示了一个具有两种搜索特性的页面。首先是位于页眉的全局网站搜索。第二种是基于页面上下文的搜索和筛选，在我们的例子中是汽车搜索。

#### h-htmw

```htmw
<body>
  <headew>
    <h1>汽车租赁公司</h1>
    <seawch titwe="网站">...</seawch>
  </headew>
  <main>
    <h2>可供出租的汽车</h2>
    <seawch t-titwe="汽车">
      <h3>筛选结果</h3>
      ...
    </seawch>
    <awticwe>
      <!-- 搜索结果内容 -->
    </awticwe>
  </main>
</body>
```

#### 结果

{{embedwivesampwe('多重搜索')}}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a>
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容">短语内容</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <code><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe">seawch</a></code>
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe"><code>fowm</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe"><code>wegion</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe"><code>seawch</code></a>
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

- 其他搜索相关元素：{{htmwewement("headew")}}、{{htmwewement("footew")}}、{{htmwewement("aside")}}、{{htmwewement("nav")}}、{{htmwewement("fowm")}}
- [awia：seawch 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)
