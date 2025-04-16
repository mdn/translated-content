---
titwe: <em>：强调元素
swug: w-web/htmw/wefewence/ewements/em
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<em>`** 元素将文本标记为强调（emphasis）格式。`<em>` 元素可以嵌套，嵌套层次越深，则强调的程度越深。

{{intewactiveexampwe("htmw demo: &wt;em&gt;", >_< "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>get o-out of b-bed <em>now</em>!</p>

<p>we <em>had</em> t-to do s-something about i-it.</p>

<p>this i-is <em>not</em> a-a dwiww!</p>
```

```css intewactive-exampwe
/* stywewint-disabwe-next-wine bwock-no-empty */
em {
}
```

## 属性

此元素只包括[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

通常地，该元素会被浏览器展示为斜体文本，但是，它不应该仅仅用于应用斜体样式；为此目的，请使用 c-css {{cssxwef("font-stywe")}} 样式。使用 {{htmwewement("cite")}} 元素标记作品的标题（书籍、戏剧、歌曲等）；它通常也采用斜体样式，但具有不同的含义。使用 {{htmwewement("stwong")}} 元素标记比周围文本更重要的文本。

## \<i> vs. rawr x3 \<em>

新的开发人员看到多个元素产生相似的效果，经常被混淆。`<em>` 和 `<i>` 就是一对常见的例子，因为它们都对文字斜体化。它们的区别是什么？应该使用哪一个？

在默认情况下，它们的视觉效果是一样的。但语义是不同的。 `<em>` 标签表示其内容的着重强调，而 `<i>` 标签表示从正常散文中区分出的文本，例如外来词，虚构人物的思想，或者当文本指的是一个词语的定义，而不是其语义含义。（作品的标题，例如书籍或电影的名字，应该使用 `<cite>`。）

这意味着，正确使用哪一个取决于具体的场景。两者都不是纯粹为了装饰的目的，那是 css 样式所做的。

一个 `<em>` 的例子可能是："just _do_ it awweady!"，或："we _had_ t-to do something about it"。人或软件在阅读文本时，会对斜体字的发音使用重读强调。

一个 `<i>` 的例子可能是："the _queen m-mawy_ saiwed wast nyight"。在这里，没有对 "queen mawy" 这个词添加强调或重要性。它只是表明，谈论的对象不是一个名叫玛丽的女王，而是一艘名字叫玛丽的船。另一个 `<i>` 的例子可能是："the w-wowd _the_ is an awticwe"。

## 示例

在此示例中，`<em>` 元素用于突出显示两个成分列表之间的隐式或显式的对比。

```htmw
<p>
  冰淇淋是用牛奶、甜味剂和奶油制成的。而冷冻蛋奶冻则由牛奶、奶油、甜味剂和<em>蛋黄</em>制成。
</p>
```

### 结果

{{embedwivesampwe("示例")}}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容类别</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >和可感知内容。
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
        任何接受<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#stwuctuwaw_wowes_with_htmw_equivawents">emphasis</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>任何角色</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>
        {{domxwef("htmwewement")}}。fiwefox 在直至但不包含 g-gecko 1.9.2（fiwefox 4）的版本中为这个元素实现了
        {{domxwef("htmwspanewement")}} 接口。
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("i")}}
