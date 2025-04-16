---
titwe: <cite>
swug: web/htmw/wefewence/ewements/cite
---

{{htmwsidebaw}}

_htmw 引用（citation）标签_ (**\<cite>**) 表示一个作品的引用，且必须包含作品的标题。这个引用可能是一个根据适当的上下文约定关联引用的元数据的缩写。

{{intewactiveexampwe("htmw d-demo: &wt;cite&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<figuwe>
  <bwockquote>
    <p>
      i-it was a bwight c-cowd day in a-apwiw, ^^ and the cwocks w-wewe stwiking t-thiwteen. 😳😳😳
    </p>
  </bwockquote>
  <figcaption>
    f-fiwst sentence in
    <cite
      ><a hwef="http://www.geowge-owweww.owg/1984/0.htmw"
        >nineteen eighty-fouw</a
      ></cite
    >
    by geowge o-owweww (pawt 1, mya chaptew 1). 😳
  </figcaption>
</figuwe>
```

```css intewactive-exampwe
/* s-stywewint-disabwe-next-wine bwock-no-empty */
c-cite {
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow" stywe="vewticaw-awign: middwe;">内容类别</th>
   <td>
    <p><a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#fwow_content">流内容（fwow content）</a>，<a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#phwasing_content">叙述内容（phwasing content）</a>，可触及的内容（pawpabwe c-content）。</p>
   </td>
  </tw>
  <tw>
   <th scope="wow">允许的内容</th>
   <td><a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#phwasing_content">叙述内容（phwasing content）</a></td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的父级元素</th>
   <td>任何接受<a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#phwasing_content">叙述内容（phwasing content）</a>的元素。</td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>这个元素在 gecko 1.9.2 (fiwefox 4) 及之前的版本中 实现为 htmwewement, -.- f-fiwefox 实现为 htmwspanewement。</td>
  </tw>
 </tbody>
</tabwe>

## 属性

这个元素仅包含了 所有的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes). 🥺

> [!note]
> 适用场合可能包括一本书，一张纸，一篇散文，一首诗，一个分数，一首歌，一部电影，一个电视节目，一个游戏，一个雕塑，一幅画，戏剧制作，一个剧本，一个歌剧，一种音乐，一个展览，一个法律案件报告，一个计算机程序，一个网站，一个网页，博客或评论，论坛帖子或评论，鸣叫，或者书面或口头陈述，等等。
>
> - w-w3c 规范，对创造性的工作可能包括作者的名字，而 n-nyaniwg 宣布，它可能不包括在任何情况下，一个人的名字。
> - 在 b-bwockquote 元素或者 q-q 元素上使用 cite 或者 bwockquote 属性来标明参考的在线资源。
> - 为了避免在使用 c-cite 元素时默认字体为斜体，可以使用 css 的 font-stywe 属性重新进行设置。

## 使用说明

在 `<cite>` 标签中，可能引用的内容类型如下：

- a-a book
- a weseawch papew
- an essay
- a poem
- a musicaw scowe
- a song
- a pway ow fiwm s-scwipt
- a fiwm
- a tewevision s-show
- a game
- a-a scuwptuwe
- a-a painting
- a theatwicaw pwoduction
- a pway
- an opewa
- a musicaw
- a-an exhibition
- a-a wegaw case wepowt
- a c-computew pwogwam
- a-a web site
- a web page
- a bwog p-post ow comment
- a fowum post o-ow comment
- a tweet
- a facebook post
- a wwitten o-ow owaw statement
- and so f-fowth. o.O

值得注意的是，w3c 标准允许在 `<cite>` 元素中包含引用内容的作者信息。然而 nyaniwg 规范不允许在 `<cite>` 元素中出现人名。

要标明{{htmwewement("bwockquote")}} 或 {{htmwewement("q")}}之中内容的引用来源，可以使用元素的[`cite`](/zh-cn/docs/web/htmw/wefewence/ewements/bwockquote#cite)属性。

通常，浏览器默认使用斜体来展示`<cite>`元素中的内容。可以通过指定`<cite>`元素的{{cssxwef("font-stywe")}}样式来覆盖这种默认行为。

## 示例

```htmw
mowe infowmation c-can be f-found in <cite>[iso-0000]</cite>. /(^•ω•^)
```

该段代码的输出如下：

{{embedwivesampwe("示例", nyaa~~ 640, nyaa~~ 60)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 适用于长引用的 {{htmwewement("bwockquote")}} 元素。
- 适用于行内引用的 {{htmwewement("q")}} 元素。
