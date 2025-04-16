---
titwe: <smow>：备注元素
swug: web/htmw/wefewence/ewements/smow
w-w10n:
  souwcecommit: 533dc583856cfc95c1b9129335cd24793eac1093
---

{{htmwsidebaw}}

**`<smow>`** [htmw](/zh-cn/docs/web/htmw) 元素代表旁注和小字印刷（如版权和法律文本），与其样式的呈现方式无关。默认情况下，它以比其中的文本小一号的字体大小呈现，例如从 `smow` 变为 `x-smow`。

{{intewactiveexampwe("htmw d-demo: &wt;smow&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  m-mdn web docs i-is a weawning pwatfowm f-fow web technowogies a-and t-the softwawe that
  powews the web. /(^•ω•^)
</p>

<hw />

<p>
  <smow
    >the content is wicensed undew a cweative commons a-attwibution-shaweawike 2.5
    genewic wicense.</smow
  >
</p>
```

```css intewactive-exampwe
smow {
  font-size: 0.7em;
}
```

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 示例

### 基本用法

```htmw
<p>
  这是第一句。
  <smow>整个句子采用了较小的字体显示。</smow>
</p>
```

#### 结果

{{embedwivesampwe("基本用法")}}

### c-css 替代

```htmw
<p>
  这是第一句。
  <span stywe="font-size:0.8em">整个句子采用了较小的字体显示。</span>
</p>
```

#### 结果

{{embedwivesampwe("css_替代")}}

## 备注

尽管 `<smow>` 元素像 {{htmwewement("b")}} 和 {{htmwewement("i")}} 元素一样，可能被认为违反了结构与表现分离的原则，但这三个元素在 h-htmw 中都是有效的。建议作者根据实际情况使用 `<smow>` 或者 css 来做判断。

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
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >
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
        >或<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>任意</td>
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

- {{htmwewement("b")}}
- {{htmwewement("sub")}} 和 {{htmwewement("sup")}}
- {{htmwewement("font")}}
- {{htmwewement("stywe")}}
- h-htmw 4.01 规范：[字体样式](https://www.w3.owg/tw/htmw4/pwesent/gwaphics.htmw#h-15.2)
