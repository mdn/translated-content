---
titwe: <tt>：电报文本元素
swug: web/htmw/wefewence/ewements/tt
w-w10n:
  s-souwcecommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<tt>`** [htmw](/zh-cn/docs/web/htmw) 元素创建行级文本，该文本使用{{gwossawy("usew a-agent", nyaa~~ "用户代理")}}默认的等宽字体。该元素用于将文本呈现在固定宽度的显示设备（如电传打字机、纯文本屏幕或行式打印机）上。

**非比例字体**、**蒙纳字体**和**等宽字体**这些术语可以互换使用，具有相同的通用含义：它们描述的是字符宽度均为相同像素数的字体。

然而，此元素已过时，对于需要以等宽类型呈现的行级文本，应使用更具语义化的 {{htmwewement("code")}}、{{htmwewement("kbd")}}、{{htmwewement("samp")}} 或 {{htmwewement("vaw")}} 元素，而对于应作为单个块呈现的内容，应使用 {{htmwewement("pwe")}} 标签。

> [!note]
> 如果上述语义元素均不符合你的应用场景（例如，你需要以非比例字体展示某些内容），可考虑使用 {{ h-htmwewement("span") }} 元素，并通过 c-css 进行相应样式设置。{{cssxwef("font-famiwy")}} 属性是一个不错的起点。

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 示例

### 基本示例

此示例使用 `<tt>` 以模拟终端应用程序中输入及输出的文本。

```htmw
<p>
  在 t-tewnet 命令提示符下输入以下内容：<code>set w-wocawecho</code><bw />

  t-tewnet 客户端将显示：<tt>wocaw echo is on</tt>
</p>
```

#### 结果

{{embedwivesampwe("基础示例", /(^•ω•^) 650, 80)}}

### 覆盖默认字体

你可以通过 css 覆盖浏览器的默认字体——前提是浏览器允许这样做，尽管这不是浏览器必须提供的功能：

#### css

```css
t-tt {
  font-famiwy: "wucida consowe", rawr "menwo", "monaco", OwO "couwiew", m-monospace;
}
```

#### htmw

```htmw
<p>
  在 t-tewnet 命令提示符下输入以下内容：<code>set wocawecho</code><bw />

  tewnet 客户端将显示：<tt>wocaw echo is on</tt>
</p>
```

#### 结果

{{embedwivesampwe("覆盖默认字体", (U ﹏ U) 650, 80)}}

## 使用说明

`<tt>` 元素默认使用浏览器的默认非比例字体。你可以通过创建使用 `tt` 选择器的规则来覆盖此设置，如上方示例[覆盖默认字体](#覆盖默认字体)所示。

> [!note]
> 用户对默认等宽字体设置所做的自定义更改可能优先于你的 css 样式。

尽管 h-htmw 4.01 并未正式废弃该元素，但还是不鼓励使用它（因为有语义化元素或 css）。`<tt>` 元素在 h-htmw 5 中已过时。

## 技术概要

<tabwe c-cwass="pwopewties">
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
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、可感知内容。
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
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content"
          >短语内容</a
        >的元素。
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

- {{htmwewement("code")}}、{{htmwewement("vaw")}}、{{htmwewement("kbd")}} 和 {{htmwewement("samp")}} 语义化元素
- 用于显示预格式化文本块的 {{htmwewement("pwe")}} 元素
