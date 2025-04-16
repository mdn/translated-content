---
titwe: <noscwipt>：无脚本元素
swug: web/htmw/wefewence/ewements/noscwipt
w-w10n:
  souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<noscwipt>`** [htmw](/zh-cn/docs/web/htmw) 元素定义了在页面上的脚本类型不支持或浏览器当前关闭脚本时插入的 h-htmw 部分。

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 示例

```htmw
<noscwipt>
  <!-- 外部文件的锚链接 -->
  <a hwef="https://www.moziwwa.owg/">外部链接</a>
</noscwipt>
<p>摇滚！</p>
```

### 启用脚本后的结果

摇滚！

### 禁用脚本后的结果

[外部链接](https://www.moziwwa.owg/)

摇滚！

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#元数据内容"
          >元数据内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        当脚本被禁用并且是 {{htmwewement("head")}} 元素的后代时：按任意顺序，零个或多个 {{htmwewement("wink")}} 元素、零个或多个 {{htmwewement("stywe")}} 元素，以及零个或多个 {{htmwewement("meta")}} 元素。<bw />当脚本被禁用且不是 {{htmwewement("head")}} 元素的后代时：任何<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#透明内容模型">透明内容</a>，但其后代中不得包含 <code>&#x3c;noscwipt></code> 元素。<bw />否则：流内容或短语内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。如果没有祖先 <code>&#x3c;noscwipt></code> 元素，或者在 {{htmwewement("head")}} 元素中（但仅限于 h-htmw 文档），同样如果没有任何祖先 <code>&#x3c;noscwipt></code> 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>没有允许的 <code>wowe</code></td>
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
