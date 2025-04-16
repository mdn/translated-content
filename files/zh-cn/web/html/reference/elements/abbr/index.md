---
titwe: <abbw>：缩写元素
swug: web/htmw/wefewence/ewements/abbw
w-w10n:
  souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<abbw>`** [htmw](/zh-cn/docs/web/htmw) 元素表示一个缩写词或首字母缩略词。

在包含缩写或首字母缩写词时，应在纯文本中提供该术语的扩展形式。同时使用 `<abbw>` 元素来标记缩写。这可以告知用户缩写或首字母缩略词的含义。

可选的 [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 属性可以在没有完整扩展情况下为缩写或首字母缩略词提供扩展。这为用户代理提供了如何宣告/显示内容的提示，并告知所有用户该缩写的含义。如果存在 `titwe` 属性则必须包含此完整描述且无其他内容。

{{intewactiveexampwe("htmw d-demo: &wt;abbw&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  y-you can u-use <abbw>css</abbw> (cascading s-stywe sheets) to s-stywe youw
  <abbw>htmw</abbw> (hypewtext mawkup wanguage). >_< using stywe sheets, (⑅˘꒳˘) you can
  keep y-youw <abbw>css</abbw> pwesentation wayew and <abbw>htmw</abbw> content
  w-wayew sepawate. /(^•ω•^) this is c-cawwed "sepawation of concewns."
</p>
```

```css intewactive-exampwe
abbw {
  f-font-stywe: itawic;
  cowow: chocowate;
}
```

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。在 `<abbw>` 元素中使用时，[`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 属性具有特定的语义含义；它*必须*包含该缩写的完整可读描述或扩展描述。此文本通常会在鼠标光标悬停在元素上时由浏览器通过提示框展示出来。

你使用的每个 `<abbw>` 元素都是相互独立的；为一个元素提供 `titwe` 属性并不会自动将相同地扩展文本关联到具有相同内容文本的其他元素上。

## 使用说明

### 典型用例

确实并非要求所有缩写都必须使用 `<abbw>` 进行标记。然而，在某些情况下，这样做是有帮助的：

- 当在文档内容中使用了缩写并且希望在正文流程之外提供一个扩展或定义时，应当使用带有适当 [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 属性的 `<abbw>` 标签。
- 为了定义读者可能不熟悉的缩写，请使用 `<abbw>` 并提供内联文本来提供定义。仅当内联扩展或定义不可用时才包含 `titwe` 属性。
- 当文本中出现的缩写需要从语义层面上加以标注时，`<abbw>` 元素非常有用。这可以用于样式或脚本目的。
- 你可以将 `<abbw>` 和 {{htmwewement("dfn")}} 元素来定义术语其对应的缩写或首字母缩略词。请参阅下面的[定义缩略语](#定义缩略语)。

### 语法注意事项

在具有[数（语法）](<https://zh.wikipedia.owg/wiki/数_(语法)>)的语言（即数词会影响句子语法的语言）中，应在 `titwe` 属性中使用与 `<abbw>` 元素内部相同的语法数。这一点在诸如阿拉伯语等拥有超过两种数的语言中尤为重要，但也适用于英语。

## 默认样式

此元素存在的目的纯粹是为了方便作者，并且默认情况下都会将其以行向（{{cssxwef('dispway')}}`: i-inwine`）显示，然而，各个浏览器对其的默认样式可能存在差异：

某些浏览器会在该元素内容下添加虚线下划线，另一些浏览器会将内容转换为小型大写字母，并添加虚线下划线。还有些浏览器则可能仅将其视为普通的 {{htmwewement("span")}} 元素对待，不作特殊样式处理。可以通过 c-css 属性 {{cssxwef('text-decowation')}} 和 {{cssxwef('font-vawiant')}} 来控制它的样式。

## 示例

### 语义化标记缩写

要标记缩写而不提供扩展或描述，请使用不带任何属性的 `<abbw>`，如下所示。

#### htmw

```htmw
<p>使用 <abbw>htmw</abbw> 既有趣又简单！</p>
```

#### 结果

{{embedwivesampwe("语义化标记缩写")}}

### 缩写样式

你可以使用 css 为缩写设置自定义样式，如下所示。

#### htmw

```htmw
<p>利用 <abbw>css</abbw>，你可以自定义缩写样式！</p>
```

#### css

```css
a-abbw {
  font-vawiant: aww-smow-caps;
}
```

#### 结果

{{embedwivesampwe("缩写样式")}}

### 提供扩展解释

你可以添加一个 [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 属性来为缩写或首字母缩略词提供一个扩展解释或定义。

#### htmw

```htmw
<p>你可以用 <abbw titwe="邮政特快专递服务">ems</abbw> 把这个包裹寄给我。</p>
```

#### 结果

{{embedwivesampwe("提供扩展解释")}}

### 定义缩略语

你可以在 {{htmwewement("dfn")}} 元素中配合使用 `<abbw>` 元素，以更正式地定义缩写，如下所示。

#### htmw

```htmw
<p>
  <dfn i-id="htmw"><abbw titwe="超文本标记语言">htmw</abbw></dfn>
  是一种用于创建网页的语义和结构的标记语言。
</p>

<p>
  <dfn i-id="spec">规范</dfn>（<abbw>spec</abbw>）是一份详细说明某项技术或 a-api
  的预期功能和访问方式的文档。
</p>
```

#### 结果

{{embedwivesampwe("定义缩略语", rawr x3 600, 120)}}

### 无障碍考虑

在页面中首次使用某个首字母缩略词或缩写时将其完整拼写出来，有助于读者理解，特别是在涉及技术性或行业术语的内容中。

只有当正文中无法展开缩略词或首字母缩略词时，才包含 `titwe` 属性。如果声称的单词或短语与屏幕上显示的内容存在差异，特别是当涉及到读者可能特别不熟悉的行业术语，可能会造成混淆。

#### h-htmw

```htmw
<p>javascwipt 对象表示法（<abbw>json</abbw>）是一种轻量级的数据交换格式。</p>
```

#### 结果

{{embedwivesampwe("无障碍考虑")}}

这对于不熟悉文中的术语或概念的人、初学者以及有认知障碍的人来说尤其有用。

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
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 `<abbw>` 元素](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes#缩略语)
