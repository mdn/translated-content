---
title: 构建文档
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

{{glossary("HTML")}} 不仅能够定义网页的单独部分（例如“段落”或“图片”），还可以使用块级元素（例如“标题栏”、“导航菜单”、“主内容列”）来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本 HTML 语法</a
        >，了解文本级语义，如<a
          href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >标题和段落</a
        >和<a
          href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Lists"
          >列表</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>常用的 HTML 语义结构元素，如 <code>&lt;main&gt;</code>、<code>&lt;section&gt;</code>、<code>&lt;article&gt;</code>、<code>&lt;header&gt;</code>、<code>&lt;nav&gt;</code> 和 <code>&lt;footer&gt;</code>，了解如何正确使用它们。</li>
          <li>需要在适当的地方使用语义元素，而不是只在需要块级容器的地方使用 <code>&lt;div&gt;</code> 元素，以及这样做的好处（如提高无障碍性）。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 文档的基本组成部分

网页的外观多种多样，但是除了全屏视频或游戏，或艺术作品页面，或只是结构不当的页面以外，都倾向于使用类似的标准组件：

- 页眉
  - : 通常是一个横跨顶部的大条带，上面有一个大标题、徽标，或许还有一个标语。这通常在网站的各个页面上保持不变。
- 导航栏
  - : 指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网页之间保持一致，否则会让用户感到疑惑，甚至无所适从。许多 web 设计人员认为导航栏是页眉的一部分，而不是独立的组件，但这并不是一个必要条件；还有人认为，两者独立可以提供更好的[无障碍性](/zh-CN/docs/Learn_web_development/Core/Accessibility)，因为屏幕阅读器可以更清晰地分辨二者。
- 主内容
  - : 中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。这些内容是网站的一部分，且会因页面而异。
- 侧边栏
  - : 一些外围信息、链接、引用、广告等。通常与主内容相关（例如一个新闻页面上，侧边栏可能包含作者信息或相关文章链接），还可能存在其他的重复元素，如辅助导航系统。
- 页脚
  - : 横跨页面底部的条带，通常包含细小文字、版权声明或联系信息。它是放置常用信息（如页眉）的地方，但通常这些信息对网站本身并不重要。页脚有时也用于 {{Glossary("SEO")}}，提供快速访问热门内容的链接。

一个“典型的网站”可能会这样布局：

![一个简单的网站结构示例，包括主标题、导航菜单、主要内容、侧栏和页脚。](sample-website.png)

> [!NOTE]
> 上图展示了文档的主要部分，可以用 HTML 来定义这些部分。不过，这里显示的页面外观（包括布局、颜色和字体）是通过在 HTML 中应用 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 来实现的。

## 用于构建内容的 HTML

以上简单示例不是很精美，但是足够说明网站的典型布局方式了。一些站点拥有更多列，其中一些远比这复杂，但一切在你掌握之中。通过使用正确的 CSS，你可以使用几乎任何元素来环绕不同的部分，并获得你想要的外观，但正如之前所讨论的，我们需要尊重语义，**使用正确的元素来完成正确的工作**。

这是因为视觉效果并不是一切。我们可以修改最重要内容（例如导航菜单和相关链接）的颜色、字体大小来吸引用户的注意，但是这对视障人士是无效的，“粉红色”和“大字体”对他们并不奏效。

> [!NOTE]
> [大约 8% 的男性和 0.5% 的女性](https://www.color-blindness.com/)是色盲；或者换一种说法，大约每 12 名男性中就有 1 人，每 200 名女性中就有 1 人。盲人和视力受损者约占世界人口的 4-5%（2015 年，[9.4 亿人有某种程度的视力损失](https://zh.wikipedia.org/wiki/視覺障礙)，而总人口为[约 75 亿](https://zh.wikipedia.org/wiki/世界人口#/media/File:World-Population-1800-2100.svg)）。

HTML 代码中可根据*功能*来为区段添加标记。可使用元素来无歧义地表示上文所讲的内容区段，屏幕阅读器等辅助技术可以识别这些元素，并帮助执行“找到主导航”或“找到主内容”等任务。参见前文所讲的[页面中元素结构和语义不佳所带来的后果](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#为什么我们需要结构化？)。

为了实现语义化标记，HTML 提供了明确这些区段的专用标签，例如：

- **页眉**：{{htmlelement("header")}}。
- **导航栏**：{{htmlelement("nav")}}。
- **主内容**：{{htmlelement("main")}}。主内容中还可以有各种子内容区段，可用 {{HTMLElement("article")}}、{{htmlelement("section")}} 和 {{htmlelement("div")}} 等元素表示。
- **侧边栏**：{{htmlelement("aside")}}。经常放置在 {{htmlelement("main")}} 中。
- **页脚**：{{htmlelement("footer")}}。

### 探索我们示例的代码

上图的示例可用下面的代码表示（你也可以[在 GitHub 仓库上找到我们的示例](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)）。请看下面的列表，了解视觉输出的每个部分由哪些部分组成。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的页面标题</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- 本站所有网页的统一主标题 -->
    <header>
      <h1>页眉</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">主页</a></li>
        <li><a href="#">我们的团队</a></li>
        <li><a href="#">项目</a></li>
        <li><a href="#">联系方式</a></li>
      </ul>

      <!-- 搜索栏是站点内导航的一个非线性的方式。 -->

      <form>
        <input type="search" name="q" placeholder="要搜索的内容" />
        <input type="submit" value="搜索" />
      </form>
    </nav>

    <!-- 网页主体内容 -->
    <main>
      <!-- 一篇文章 -->
      <article>
        <h2>文章标题</h2>

        <p>
          但我得向你解释，所有这些谴责快乐和颂扬痛苦的错误观念是如何产生的。为此，我会向你一五一十地说明这一体系，并阐述伟大的真理探索者、人类幸福的杰出建设者的真实教义。
        </p>

        <section>
          <h3>子章节</h3>

          <p>
            没有人因为快乐是快乐而拒绝、厌恶或回避快乐本身，而是因为不知道如何理性地追求快乐的人会遭遇极其痛苦的后果。也没有人因痛苦是痛苦而喜欢或追求或渴望获得痛苦本身，但也偶有辛劳和痛苦能带来极大的快乐的情景。
          </p>

          <p>
            举个微不足道的例子，若不是从中获得好处，我们当中有谁会进行艰苦的体育锻炼？但是，倘若没有恼人的后果，谁有权利指责选择享受快乐的人呢？或者倘若得不到相应快乐，谁能谴责选择避免痛苦的人呢？
          </p>
        </section>

        <section>
          <h3>另外一个子章节</h3>

          <p>
            另一方面，我们以正义的愤慨谴责并厌恶那些被及时行乐迷惑得萎靡不振，被欲望蒙蔽得看不见大难临头的人；因意志软弱而不能履行职责的人，也应受到同样的谴责，这无异于在辛劳和痛苦前退缩。这些情况非常简单且容易区分。闲暇时，当我们的选择权不受限制，当没有什么可以阻止我们做自己最喜欢的事情时，任何快乐都应该受到欢迎，任何痛苦都应该避免。但是在某些情况下，由于责任或商业义务的要求，不时会有不得不拒绝享乐而接受烦恼的情况。
          </p>

          <p>
            因此，智者在这些事情上总是坚持选择的原则：拒绝快乐以获得更大的快乐，或者忍受痛苦以避免更重的痛苦。
          </p>
        </section>
      </article>

      <!-- 辅助内容也可以嵌套在主要内容中 -->
      <aside>
        <h2>相关内容</h2>

        <ul>
          <li><a href="#">哦，我喜欢海边</a></li>
          <li><a href="#">哦，我也喜欢海边</a></li>
          <li><a href="#">尽管在英格兰北部</a></li>
          <li><a href="#">也永远不会停止下雨</a></li>
          <li><a href="#">哦，好吧……</a></li>
        </ul>
      </aside>
    </main>

    <!-- 本站所有网页的统一页脚 -->

    <footer>
      <p>© 2050 某某保留所有权利</p>
    </footer>
  </body>
</html>
```

花点时间仔细阅读并理解代码，代码中的注释也有助于你理解代码。在本文中，我们不会要求你做太多其他事情，因为理解文档布局的关键在于编写合理的 HTML 结构，然后用 CSS 进行布局。这一点我们将等到你开始学习 CSS 布局（CSS 主题的一部分）时再讨论。

## HTML 布局元素细节

理解所有 HTML 区段元素具体含义是很有益处的，这一点将随着个人 web 开发经验的逐渐丰富日趋显现。更多细节请查阅 [HTML 元素参考](/zh-CN/docs/Web/HTML/Reference/Elements)。现在，你只需要理解以下主要元素的意义：

- {{HTMLElement('main')}} 存放*本页面独有*的内容。每个页面上只能用*一次* `<main>`，且直接位于 {{HTMLElement('body')}} 中。最好不要把它嵌套进其他元素。
- {{HTMLElement('article')}} 包围的内容即一篇文章，与页面其他部分无关（比如一篇博文）。
- {{HTMLElement('section')}} 与 `<article>` 类似，但 `<section>` 更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以[标题](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)作为开头；也可以把一篇 `<article>` 分成若干部分并分别置于不同的 `<section>` 中，也可以把一个区段 `<section>` 分成若干部分并分别置于不同的 `<article>` 中，取决于上下文。
- {{HTMLElement('aside')}} 包含的内容与主要内容没有直接关系，但可以提供与主要内容间接相关的附加信息（术语条目、作者简介、相关链接，等等）。
- {{HTMLElement('header')}} 是简介形式的内容。如果它是 {{HTMLElement('body')}} 的子元素，那么就是网站的全局页眉。如果它是 {{HTMLElement('article')}} 或{{HTMLElement('section')}} 的子元素，那么它是这些部分特有的页眉（此 `<header>` 非彼[标题](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#添加标题)）。
- {{HTMLElement('nav')}} 包含页面主导航功能。其中不应包含二级链接等内容。
- {{HTMLElement('footer')}} 包含了页面的页脚部分。

通过点击上述每个元素，可在“HTML 元素参考”部分阅读相应的文章，了解每个元素的更多细节。

### 无语义包装器

有时你会发现，对于一些要组织的项目或要包装的内容，现有的语义元素均不能很好对应。有时候你可能只想将一组元素组合在一起，用 {{glossary("CSS")}} 或 {{glossary("JavaScript")}} 将它们作为一个整体加以影响。为了应对这种情况，HTML 提供了 {{HTMLElement("div")}} 和 {{HTMLElement("span")}} 元素。应配合使用 [`class`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#class) 属性提供一些标签，使这些元素能易于定位。

{{HTMLElement("span")}} 是一个行级无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。例如：

```html
<p>
  国王喝得酩酊大醉，在凌晨 1 点时才回到自己的房间，踉跄地走过门口。<span
    class="editor-note"
    >[编辑批注：此刻舞台灯光应变暗]</span
  >。
</p>
```

这里，“编辑批注”仅仅是对舞台剧导演提供额外指引；没有具体语义。对于视力正常的用户，CSS 应将批注内容与主内容稍微隔开一些。

{{HTMLElement("div")}} 是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。例如，一个电子商务网站页面上有一个一直显示的购物车组件。

```html
<div class="shopping-cart">
  <h2>购物车</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>银耳环</strong></a
        >：$99.95
      </p>
      <img src="../products/3333-0985/" alt="银耳环" />
    </li>
    <li>……</li>
  </ul>
  <p>总消费：$237.89</p>
</div>
```

这里不应使用 `<aside>`，因为它和主内容并没有必要的联系（你想在任何地方都能看到它）。甚至不能用 `<section>`，因为它也不是页面上主内容的一部分。所以在这种情况下就应使用 `<div>`，为满足无障碍使用特征，还应为购物车的标题设置一个可读标签。

> [!WARNING]
> div 元素非常便利但容易被滥用。由于它们不携带语义值，会使 HTML 代码变得混乱。要小心使用，只有在没有更好的语义方案时才选择它，而且要尽可能少用，否则文档的升级和维护工作会非常困难。

> [!NOTE]
> Scrimba 的[语义 HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN 学习伙伴_](/zh-CN/docs/MDN/Writing_guidelines/Learning_content#伙伴链接和嵌入)</sup>交互式教程对语义标记进行了有用的回顾，并说明了为什么要使用语义标记，此外还提供了一个挑战，测试使用语义元素改进 HTML 代码库的能力。

### 换行与水平分割线

有时会用到 {{htmlelement("br")}} 和 {{htmlelement("hr")}} 两个元素，需要介绍一下。

#### \<br>：换行元素

`<br>` 可在段落中进行换行；`<br>` 是唯一能够生成多个短行结构（例如邮寄地址或诗歌）的元素。比如：

```html
<p>
  从前有个人叫小高<br />
  他说写 HTML 感觉最好<br />
  但他写的代码结构语义一团糟<br />
  他写的标签谁也懂不了。
</p>
```

没有 `<br>` 元素，这段会直接显示在长长的一行中（如前文所讲，[HTML 会忽略大部分空格](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_中的空白)）；使用 `<br>` 元素会使得标记渲染如下：

{{EmbedLiveSample('br：换行元素', '100%', 150)}}

#### \<hr>：主题性中断元素

`<hr>` 元素在文档中生成一条水平分割线，表示文本中主题的变化（例如话题或场景的改变）。一般就是一条水平的直线。例如：

```html
<p>
  原来这唐僧是个慈悯的圣僧。他见行者哀告，却也回心转意道：“既如此说，且饶你这一次。再休无礼。如若仍前作恶，这咒语颠倒就念二十遍！”行者道：“三十遍也由你，只是我不打人了。”却才伏侍唐僧上马，又将摘来桃子奉上。唐僧在马上也吃了几个，权且充饥。
</p>
<hr />
<p>
  却说那妖精，脱命升空。原来行者那一棒不曾打杀妖精，妖精出神去了。他在那云端里，咬牙切齿，暗恨行者道：“几年只闻得讲他手段，今日果然话不虚传。那唐僧已此不认得我，将要吃饭。若低头闻一闻儿，我就一把捞住，却不是我的人了。不期被他走来，弄破我这勾当，又几乎被他打了一棒。若饶了这个和尚，诚然是劳而无功也。我还下去戏他一戏。”
</p>
```

将渲染成：

{{EmbedLiveSample('hr：主题性中断元素', '100%', '185px')}}

## 规划一个简单的网站

在规划好单个网页的结构后，下一阶段就是规划整个多页面网站的结构，包括如何排列和相互链接，以获得最佳的用户体验。这些工作称为{{glossary("Information architecture", "信息架构")}}。

在大型、复杂的网站中，大多数规划工作都可以归结于此，而对于一个只有几个页面的简单网站，规划设计过程可以更简单，更有趣！

过程大概是这样的：

1. 时刻记住，大多数（不是全部）页面会使用一些相同的元素，例如导航菜单以及页脚内容。若网站为商业站点，不妨在所有页面的页脚都加上联系方式。请记录这些对所有页面都通用的内容，例如：
   - 页眉
     - 标题和徽标
     - 站点语言选择器
   - 导航栏
   - 页脚
     - 版权声明
     - 至条款、联系方式和无障碍政策的链接

2. 接下来，可为页面结构绘制草图（这里与前文那个站点页面的截图类似）。记录每一块的作用：![简单的页面布局示意图，有页眉、主内容、两个可选侧边栏和页脚。](site-structure.png)
3. 下面，对于期望添加进站点的所有其他（通用内容以外的）内容展开头脑风暴，直接罗列出来。例如：
   - 航班
   - 住宿
   - 交通
   - 要做的事情
   - 特别优惠
   - 热门度假套餐，如冬季阳光、滑雪
   - 查询结果
   - 评论
   - 签证/入境要求
   - 货币
   - 语言和文化
   - 购买假期

4. 下一步，试着对这些内容进行分组，这样可以让你了解哪些内容可以放在同一个页面。这种做法和{{glossary("Card sorting", "卡片分类法")}}非常相似。
   - 查询
     - 航班
     - 住宿
     - 交通
     - 要做的事情
   - 特别优惠
     - 热门假日
     - 冬季阳光
     - 滑雪
   - 查询结果
     - 评论
     - 地区相关信息
       - 签证/入境要求
       - 货币
       - 语言和文化
   - 购买假期

5. 可以尝试绘制一个粗略的网站地图——为网站上的每个页面划一个框，并画线表示页面之间的典型工作流程。主页可能位于顶部或中心位置，并链接到大多数页面（如果不是所有页面的话）。小型网站中的大多数页面都应该可以从主导航中找到，但也有例外。你可能还需要说明如何展示网站内容。![显示主页、地区页面、搜索结果、特价页面以及结账和购买流程的网站地图](site-map.png)

试着为自己创建的网站进行上述练习。你想做一个关于什么的网站？作为一个扩展目标，利用迄今为止所学到的 HTML 知识创建网站上的几个页面。你可以使用我们的[基本 HTML 模板](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)作为起点。

## 小结

至此，你应该对如何构建网页/站点有了更好的了解。在本模块的下一篇文章中，我们将学习一些进阶文本技术。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
