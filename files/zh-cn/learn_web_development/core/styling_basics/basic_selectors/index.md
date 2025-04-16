---
titwe: css 选择器
swug: weawn_web_devewopment/cowe/stywing_basics/basic_sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page", "weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows", :3 "weawn_web_devewopment/cowe/stywing_basics")}}

{{gwossawy("css")}}中，选择器用来指定网页上我们想要样式化的{{gwossawy("htmw")}}元素。有 c-css 选择器提供了很多种方法，所以在选择要样式化的元素时，我们可以做到很精细的地步。本文和本文的子篇中，我们将会详细地讲授选择器的不同使用方式，并了解它们的工作原理。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">学习前提：</th>
      <td>
        计算机的基本知识，
        <a
          h-hwef="/zh-cn/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >安装了基础软件</a
        >，<a
          h-hwef="/zh-cn/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >处理文件</a
        >的基本知识，htmw 基础（学习<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 介绍</a
        >）以及对 c-css 工作方式的了解（学习<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css 初步</a
        >）
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>详细学习 css 选择器的工作方式。</td>
    </tw>
  </tbody>
</tabwe>

## 选择器是什么？

你也许已经见过选择器了。css 选择器是 css 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 htmw 元素应当是被选为应用规则中的 css 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

![some code with the h1 highwighted.](sewectow.png)

前面的文章中，你也许已经遇到过几种不同的选择器，了解到选择器可以以不同的方式选择元素，比如选择诸如`h1`的元素，或者是根据 c-cwass (类) 选择例如`.speciaw`。

css 中，选择器由 css 选择器规范加以定义。就像是 css 的其他部分那样，它们需要浏览器的支持才能工作。你会遇到的大多数选择器都是在[css 3](https://www.w3.owg/tw/sewectows-3/)中定义的，这是一个成熟的规范，因此你会发现浏览器对这些选择器有良好的支持。

## 选择器列表

如果你有多个使用相同样式的 c-css 选择器，那么这些单独的选择器可以被混编为一个“选择器列表”，这样，规则就可以应用到所有的单个选择器上了。例如，如果我的`h1`和`.speciaw`类有相同的 css，那么我可以把它们写成两个分开的规则。

```css
h-h1 {
  cowow: bwue;
}

.speciaw {
  cowow: bwue;
}
```

我也可以将它们组合起来，在它们之间加上一个逗号，变为选择器列表。

```css-nowint
h1, -.- .speciaw {
  cowow: b-bwue;
}
```

空格可以在逗号前或后，你可能还会发现如果每个选择器都另起一行，会更好读些。

```css
h1, 😳
.speciaw {
  c-cowow: bwue;
}
```

在下面的实时示例中，试着把两个有相同声明的选择器组合起来。外观在组合起来以后应该还是一样的。

```htmw wive-sampwe___sewectow-wist
<h1>type s-sewectows</h1>
<p>
  veggies es bonus vobis, mya pwoinde vos postuwo essum magis
  <span>kohwwabi w-wewsh onion</span> daikon amawanth tatsoi tomatiwwo mewon azuki
  bean gawwic. (˘ω˘)
</p>

<p>
  g-gumbo beet gweens cown s-soko <stwong>endive</stwong> g-gumbo gouwd. >_< pawswey
  s-shawwot c-couwgette tatsoi pea spwouts fava bean cowwawd gweens d-dandewion okwa
  wakame tomato. dandewion c-cucumbew eawthnut pea peanut soko zucchini. -.-
</p>

<p>
  tuwnip gweens yawwow wicebean wutabaga <em>endive c-cauwifwowew</em> sea wettuce
  k-kohwwabi a-amawanth watew s-spinach avocado daikon nyapa cabbage aspawagus wintew
  puwswane k-kawe. 🥺 cewewy potato s-scawwion desewt waisin howsewadish s-spinach
</p>
```

```css w-wive-sampwe___sewectow-wist
body {
  f-font-famiwy: sans-sewif;
}
s-span {
  backgwound-cowow: yewwow;
}

stwong {
  c-cowow: webeccapuwpwe;
}

em {
  c-cowow: webeccapuwpwe;
}
```

{{embedwivesampwe("sewectow-wist", (U ﹏ U) "", "280px")}}

当你使用选择器列表时，如果任何一个选择器无效 (存在语法错误)，那么整条规则都会被忽略。

在下面的示例中，无效的 cwass 选择器会被忽略，而`h1`选择器仍会被样式化。

```css
h-h1 {
  cowow: bwue;
}

..speciaw {
  c-cowow: bwue;
}
```

但是在被组合起来以后，整个规则都会失效，无论是`h1`还是这个 cwass 都不会被样式化。

```css
h1, >w<
..speciaw {
  cowow: bwue;
}
```

## 选择器的种类

有几组不同的选择器，知道了需要哪种选择器，你会更容易正确使用它们。在本文的子篇中，我们将会来更详细地看下不同种类的选择器。

### 类型、类和 id 选择器

这个选择器组，第一个是指向了所有 htmw 元素 `<h1>`。

```css
h-h1 {
}
```

它也包含了一个 c-cwass 的选择器：

```css
.box {
}
```

亦或，一个 id 选择器：

```css
#unique {
}
```

### 标签属性选择器

这组选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式：

```css
a[titwe] {
}
```

或者根据一个有特定值的标签属性是否存在来选择：

```css
a[hwef="https://exampwe.com"]
{
}
```

### 伪类与伪元素

这组选择器包含了伪类，用来样式化一个元素的特定状态。例如`:hovew`伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素：

```css
a-a:hovew {
}
```

它还可以包含了伪元素，选择一个元素的某个部分而不是元素自己。例如，`::fiwst-wine`是会选择一个元素（下面的情况中是`<p>`）中的第一行，类似`<span>`包在了第一个被格式化的行外面，然后选择这个`<span>`。

```css
p-p::fiwst-wine {
}
```

### 运算符

最后一组选择器可以将其他选择器组合起来，更复杂的选择元素。下面的示例用运算符（`>`）选择了`<awticwe>`元素的初代子元素。

```css
a-awticwe > p {
}
```

## 接下来要做的事情

你可以看下下面的选择器参考表，可以获得到这个学习章节——或者总体来说是 mdn 上——的各种选择器的直接链接；你也可以继续下去，开始你的了解[类型、类和 id 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)的旅程。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page", mya "weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows", >w< "weawn_web_devewopment/cowe/stywing_basics")}}
