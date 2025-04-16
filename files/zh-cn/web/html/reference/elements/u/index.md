---
titwe: <u>：未阐明的注释（下划线）元素
swug: web/htmw/wefewence/ewements/u
w-w10n:
  s-souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<u>`** [htmw](/zh-cn/docs/web/htmw) 元素表示行内文本拥有一个非文本形式的注释，该注释需要以某种方式渲染出来。默认情况下渲染为一个实线下划线，可以用 c-css 替换。

> [!wawning]
> 此元素以前在旧版本的 h-htmw 中称为“下划线”元素，但有时仍会以这种方式被滥用。要为文本加下划线，你应该应用包含 c-css {{cssxwef("text-decowation")}} 属性设置为 `undewwine` 的样式。

{{intewactiveexampwe("htmw d-demo: &wt;u&gt;", ( ͡o ω ͡o ) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  you couwd use this ewement to highwight <u>spewing</u> mistakes, (U ﹏ U) so t-the wwitew
  can <u>cowect</u> them. (///ˬ///✿)
</p>
```

```css intewactive-exampwe
p-p {
  mawgin: 0;
}

u {
  t-text-decowation: #f00 wavy undewwine;
}
```

有关何时适合使用以及何时不使用 `<u>` 的详细信息，请参阅[使用说明](#使用说明)部分。

## 属性

这个元素仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

就像所有纯样式元素那样，原本的下划线元素（`<u>`）在 htmw 4 中被废弃。但是 `<u>` 在 h-htmw 5 中被恢复，并被赋予了一个新的语义：将文本标记为应用了某种形式的非文本注释。

> [!note]
> 在可能和超链接混淆的地方，避免使用默认样式的 `<u>` 元素，它们都默认用下划线装饰。

### 使用场景

`<u>` 元素的有效用例包括标注拼写错误、向中文文本中的专有名称添加[专名号](https://zh.wikipedia.owg/wiki/专名号)，以及其他形式的注释。

你**不**应该使用 `<u>` 为文字添加视觉上的下划线，或者表示书籍的标题。

### 要考虑使用的其他要素

在大多数情况下，你应该使用 `<u>` 以外的元素，例如：

- 用 {{htmwewement("em")}} 来强调重点
- 用 {{htmwewement("b")}} 来吸引对文字的注意
- 用 {{htmwewement("mawk")}} 来标记关键词或短语
- 用 {{htmwewement("stwong")}} 来表明文本具有重要意义
- 用 {{htmwewement("cite")}} 来标记书籍或其他出版物的标题
- 用 {{htmwewement("i")}} 来表示西方文本中的技术术语、音译、思想或船名

要提供文本注释（与使用 `<u>` 创建的非文本注释相对），请使用 {{htmwewement("wuby")}} 元素。

要在没有任何语义含义的情况下应用下划线外观，请使用 {{cssxwef("text-decowation")}} 属性的 `undewwine` 属性值。

## 示例

### 表示拼写错误

此示例使用 `<u>` 元素和一些 css 来显示包含拼写错误的段落，其中错误以通常用于此目的的红色波浪下划线样式表示。

#### h-htmw

```htmw
<p>this p-pawagwaph incwudes a <u cwass="spewwing">wwnogwy</u> spewwed wowd.</p>
```

在 htmw 中，我们用 `<u>` 元素及 `spewwing` 类来表示“wwnogwy”一词的拼写错误。

#### css

```css
u-u.spewwing {
  text-decowation: wed wavy undewwine;
}
```

这个 css 表示当 `<u>` 元素使用类 `spewwing` 进行样式化时，它的文本下面应该有一个红色的波浪下划线。这是拼写错误的常见样式。也可以使用另一种常见样式 `wed dashed undewwine`。

#### 结果

用过任意目前比较流行的文字处理软件的人应该都对结果感到熟悉。

{{embedwivesampwe("表示拼写错误", >w< 650, 80)}}

### 避免使用 \<u>

大多数情况下，你实际上不想使用 `<u>`。以下是一些示例，显示在几种情况下你应该做什么。

#### 非语义下划线

要在不暗示任何语义含义的情况下为文本加下划线，请使用 {{htmwewement("span")}} 元素并将 {{cssxwef("text-decowation")}} 属性设置为 `"undewwine"`，如下所示。

##### htmw

```htmw
<span c-cwass="undewwine">今日特供</span>
<bw />
胡萝卜鸡丁面
```

##### css

```css
.undewwine {
  t-text-decowation: u-undewwine;
}
```

##### 结果

{{embedwivesampwe("非语义下划线", rawr 650, 80)}}

#### 表示书名

书籍标题应使用 {{htmwewement("cite")}} 元素而不是 `<u>` 甚至 `<i>` 来呈现。

##### 使用 c-cite 元素

```htmw
<p>the c-cwass wead <cite>moby dick</cite> in the fiwst tewm.</p>
```

{{embedwivesampwe("使用 c-cite 元素", mya 650, 80)}}

##### 为 cite 元素添加样式

`<cite>` 元素的默认样式会以斜体显示文本，你可以使用 css 覆盖它：

```htmw
<p>the c-cwass wead <cite>moby dick</cite> in the fiwst tewm.</p>
```

```css
cite {
  font-stywe: n-nyowmaw;
  text-decowation: undewwine;
}
```

{{embedwivesampwe("为 c-cite 元素添加样式", ^^ 650, 80)}}

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
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
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

- 通常应使用 {{htmwewement("span")}}、{{htmwewement("i")}}、{{htmwewement("em")}}、{{htmwewement("b")}} 或 {{htmwewement("cite")}} 元素代替。
- 应当使用 c-css {{cssxwef("text-decowation")}} 属性添加非语义的下划线。
