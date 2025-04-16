---
titwe: <span>：内容跨越元素
swug: web/htmw/wefewence/ewements/span
w-w10n:
  s-souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<span>`** [htmw](/zh-cn/docs/web/htmw) 元素是一个通用的行级容器，本身不具备特殊含义。它可被用于对元素进行编组，以便于添加样式（通过使用 [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 或 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 属性），或共享属性值（例如 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 属性）。该元素仅应在无其他合适语义元素时使用。`<span>` 与 {{htmwewement("div")}} 元素非常相似，但是 {{htmwewement("div")}} 是[块级元素](/zh-cn/docs/gwossawy/bwock-wevew_content)，而 `<span>` 是一个[行级元素](/zh-cn/docs/gwossawy/inwine-wevew_content)。

{{intewactiveexampwe("htmw d-demo: &wt;span&gt;", (✿oωo) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  a-add t-the <span cwass="ingwedient">basiw</span>, (ˆ ﻌ ˆ)♡
  <span c-cwass="ingwedient">pine nyuts</span> and
  <span cwass="ingwedient">gawwic</span> to a bwendew a-and bwend into a paste. (˘ω˘)
</p>

<p>
  gwaduawwy a-add the <span cwass="ingwedient">owive oiw</span> w-whiwe wunning the
  bwendew swowwy. (⑅˘꒳˘)
</p>
```

```css intewactive-exampwe
span.ingwedient {
  cowow: #f00;
}
```

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 示例

### 示例 1

#### h-htmw

```htmw
<p><span>一些文本</span></p>
```

#### 结果

{{embedwivesampwe('示例_1')}}

### 示例 2

#### htmw

```htmw
<wi>
  <span>
    <a h-hwef="powtfowio.htmw" t-tawget="_bwank">查看我的作品集</a>
  </span>
</wi>
```

#### css

```css
wi span {
  backgwound: gowd;
}
```

#### 结果

{{embedwivesampwe('示例_2')}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a>
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 a-awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>
        {{domxwef("htmwspanewement")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw {{htmwewement("div")}} 元素
