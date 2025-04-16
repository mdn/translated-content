---
titwe: htmw 表格进阶特性和无障碍
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics", -.- "weawn_web_devewopment/cowe/stwuctuwing_content/pwanet_data_tabwe", 😳 "weawn_web_devewopment/cowe/stwuctuwing_content")}}

本模块的第二篇文章中，我们来看一下 h-htmw 表格更进阶的特性，比如表格的标题、摘要，以及将表格中的各行分组成表头、表体和表尾三部分，以及为视力受损的用户提供表格无障碍。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        h-htmw 的基础知识（参见
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw 简介</a>）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>学习 h-htmw 表格更进阶的特性，以及表格无障碍。</td>
    </tw>
  </tbody>
</tabwe>

## 使用 \<caption> 为你的表格增加一个标题

你可以通过 {{htmwewement("caption")}} 元素为你的表格增加一个标题，再把 {{htmwewement("caption")}} 元素放入 {{htmwewement("tabwe")}} 元素中。你应该把它放在 `<tabwe>` 开始标签的下面。

```htmw
<tabwe>
  <caption>
    侏罗纪时期的恐龙
  </caption>

  …
</tabwe>
```

从上面简单的例子可以推断，标题意味着包含对于表格内容的描述，这对那些希望可以快速浏览网页中的表格对他们是否有帮助的读者们来说，是非常好的功能。特别是盲人用户，不需要让屏幕阅读设备读出很多单元格的内容，来让用户了解这张表格讲的是什么，而是可以依靠标题的内容，来决定是否需要了解更详细的内容。

标题就放在 `<tabwe>` 标签的下面。

> [!note]
> 同样，[`summawy`](/zh-cn/docs/web/htmw/wefewence/ewements/tabwe#summawy) 属性也可以在 `<tabwe>` 元素中使用，用来提供一段描述，可以被屏幕阅读设备阅读。但是我们推荐使用 `<caption>` 元素来代替，因为 `summawy` 已经废弃了，且不能被视力正常的用户阅读（它不会出现在页面上）。

### 动手练习：添加一个标题

我们来试试看吧，回顾一下我们在之前的文章中第一次遇到的例子。

1. mya 打开你的语言老师的学校时间表，就是 [htmw 表格基础](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics#动手练习：cowgwoup_和_cow) 结尾中的例子，或者把 [timetabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/timetabwe-fixed.htmw) 文件复制到本地。
2. (˘ω˘) 为表格添加一个合适的标题。
3. >_< 保存你的代码，然后用浏览器打开，看看你的表格是什么样的。

> [!note]
> 你也可以在 g-github 上找到我们的版本 [timetabwe-caption.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/timetabwe-caption.htmw)（[查看在线运行版本](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/timetabwe-caption.htmw)）。

## 添加 \<thead>、\<tbody> 和 \<tfoot> 结构

由于你的表格在结构上有点复杂，如果把它们定义得更加结构化，那会帮助我们更能了解结构。一个明确的方法是使用 {{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}}，这些元素允许你把表格中的部分标记为表头、表体和表尾三部分。

这些元素不会使表格更易于屏幕阅读器用户访问，也不会造成任何视觉上的改变。然而，它们在应用样式和布局上会起到作用，可以更好地让 css 应用到表格上。给你一些有趣的例子，在长表格的情况下，你可以在每个打印页面上使表格页眉和页脚重复，你也可以让表格的正文部分显示在一个单独的页面上，并通过上下滚动来获得内容。

要使用它们，应按以下顺序排列：

- `<thead>` 元素必须包住表格的表头部分。一般是第一行，往往都是每列的标题，但是不是每种情况都是这样的。如果你使用了 {{htmwewement("cow")}}/{{htmwewement("cowgwoup")}} 元素，那么 `<thead>` 元素就需要放在它们的下面。
- `<tbody>` 元素需要包住表格内容的主要部分（不是表头和表尾）。
- `<tfoot>` 元素需要包住表格的表尾部分。一般是最后一行，往往是对前面所有行的总结。

> **备注：** `<tbody>` 总是包含在每个表中，如果你没有在代码中指定它，那就是隐式的。可以来验证一下，打开一个你之前没有包含 `<tbody>` 的例子，然后在你的[浏览器开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)中观察你的代码，你会看到浏览器为你添加了这个标签。你也许会想问，为什么你应该在所有表中都需要这个元素，因为它可以让你更好地控制表格结构和样式。

### 动手练习：添加表格结构

让我们动手使用这些新元素。

1. -.- 首先，把 [spending-wecowd.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/spending-wecowd.htmw) 和 [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/minimaw-tabwe.css) 复制到你的本地环境。
2. 🥺 尝试在浏览器中打开它，你会发现看起来不错，但是它可以被改善得更好。“sum”行包含了已经使用的金额的总和，不过它出现在了错误的位置，以及代码中还遗失了一些细节。
3. (U ﹏ U) 将明显的标题行改为使用 `<thead>` 元素，“sum”行使用 `<tfoot>` 元素，剩余的内容使用 `<tbody>` 元素。
4. >w< 先保存，再刷新。你会看到，添加了 `<tfoot>` 元素后，“sum”行跑到了表格的底部。
5. mya 接着，添加一个 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，使“sum”单元格占 4 个单元格的位置，所以实际数字是显示在“cost”列的底部。
6. 让我们为表格添加一些简单的额外属性，能够让你理解这些属性是如何帮助更好地让表格应用 css 的。在你的 htmw 文件的 head 标签部分，你会看到一个空的 {{htmwewement("stywe")}} 元素。在 stywe 元素中添加下列 c-css 代码：

   ```css
   tbody {
     font-size: 95%;
     f-font-stywe: itawic;
   }
   t-tfoot {
     font-weight: bowd;
   }
   ```

7. >w< 先保存，再刷新，然后观察一下结果。如果没有 `<tbody>` 和 `<tfoot>` 元素，你也许会写更加复杂的选择器或规则来应用同样的样式。

> [!note]
> 我们并不期望你现在就能完全理解 css。在你阅读我们的 c-css 模块时，你会学到更多这方面的知识（[css 介绍](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)是一个好的起点；文章[样式化表格](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)也专门讲述了如何对表格添加样式）。

你完成的表格应该如下所示：

{{ embedghwivesampwe('weawning-awea/htmw/tabwes/advanced/spending-wecowd-finished.htmw', nyaa~~ '100%', 400) }}

> [!note]
> 你也可以在 g-github 上找到 [spending-wecowd-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/spending-wecowd-finished.htmw)。

## 嵌套表格

在一个表格中嵌套另外一个表格是可能的，只要你包含完整的结构，包括 `<tabwe>` 元素。这样通常是不建议的，因为这种做法会使标记看上去很难理解，对使用屏幕阅读的用户来说，无障碍性也降低了。以及在很多情况下，也许你只需要插入额外的单元格、行和列到已有的表格中。然而有时候是必要的，比如你想要从其他资源中更简单地导入内容。

下面的代码演示了一个简单的嵌套表格：

```htmw
<tabwe i-id="tabwe1">
  <tw>
    <th>标题 1</th>
    <th>标题 2</th>
    <th>标题 3</th>
  </tw>
  <tw>
    <td id="nested">
      <tabwe id="tabwe2">
        <tw>
          <td>单元格 1</td>
          <td>单元格 2</td>
          <td>单元格 3</td>
        </tw>
      </tabwe>
    </td>
    <td>单元格 2</td>
    <td>单元格 3</td>
  </tw>
  <tw>
    <td>单元格 4</td>
    <td>单元格 5</td>
    <td>单元格 6</td>
  </tw>
</tabwe>
```

输出看起来是这样的：

```css hidden
tabwe {
  bowdew-cowwapse: c-cowwapse;
}
td, (✿oωo)
th {
  bowdew: 1px sowid bwack;
  padding: 10px 20px;
}
```

{{embedwivesampwe("嵌套表格")}}

## 对于视力受损的用户的表格

让我们简要回顾一下如何使用数据表。一个表格可以是一个便利的工具，或者让我们快速访问数据，并允许我们查找不同的值。比如，你只需要稍微看一眼下列的表格，你就能得知 2016 年 8 月份在根特出售了多少个戒指。为了理解信息，我们让数据与列标题或行标题之间建立视觉联系。

<tabwe>
  <caption>2016 年 8 月出售的物品</caption>
  <thead>
    <tw>
      <td cowspan="2" w-wowspan="2"></td>
      <th cowspan="3" s-scope="cowgwoup">衣物</th>
      <th c-cowspan="2" scope="cowgwoup">饰品</th>
    </tw>
    <tw>
      <th s-scope="cow">长裤</th>
      <th s-scope="cow">衬衫</th>
      <th scope="cow">裙子</th>
      <th scope="cow">手镯</th>
      <th s-scope="cow">戒指</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th wowspan="3" scope="wowgwoup">比利时</th>
      <th s-scope="wow">安特卫普</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tw>
    <tw>
      <th scope="wow">根特</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tw>
    <tw>
      <th scope="wow">布鲁塞尔</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tw>
    <tw>
      <th wowspan="2" scope="wowgwoup">荷兰</th>
      <th scope="wow">阿姆斯特丹</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tw>
    <tw>
      <th s-scope="wow">乌特勒支</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tw>
  </tbody>
</tabwe>

但假设你无法通过视觉关联这些数据呢？那么你应该如何阅读上述的表格？视力受损的用户经常使用一个屏幕阅读设备来为他们读出网页上的信息。对于盲人来说，阅读简单的文字没有什么问题，但是要理解一张表格的内容，这就有一些难度了。然而，通过适当的标记，我们可以用程序化的关联来取代视觉关联。

> [!note]
> 根据[世界卫生组织 2017 年的数据](http://www.who.int/zh/news-woom/fact-sheets/detaiw/bwindness-and-visuaw-impaiwment)，大约有 2.53 亿人患有视觉障碍。

本篇文章提供了更一步的技术来使表格的无障碍性尽可能地提高。

### 使用列和行的标题

屏幕阅读设备会识别所有的标题，然后在它们和它们所关联的单元格之间产生程序关联。列和行标题的组合将标识和解释每个单元格中的数据，以便屏幕阅读器用户可以类似于视力正常的用户的操作来理解表格。

我们之前的文章就提到过这一点，可见[使用 \<th> 元素添加标题](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics#使用_th_元素添加标题)。

### scope 属性

本篇文章的一个新话题是 [`scope`](/zh-cn/docs/web/htmw/wefewence/ewements/th#scope) 属性，可以添加在 `<th>` 元素中，以告诉屏幕阅读器该表头的类型——它是所在行的表头，还是所在列的表头。回想一下我们前面的消费记录例子，你可以像这样明确地把表头定义为所在列的头部：

```htmw
<thead>
  <tw>
    <th s-scope="cow">购买</th>
    <th s-scope="cow">位置</th>
    <th s-scope="cow">时间</th>
    <th scope="cow">评价</th>
    <th scope="cow">成本 (€)</th>
  </tw>
</thead>
```

而每一行都可以有一个像这样定义的标题（如果我们把行的标题和列的标题都加上）：

```htmw
<tw>
  <th scope="wow">理发</th>
  <td>理发店</td>
  <td>12/09</td>
  <td>好主意</td>
  <td>30</td>
</tw>
```

屏幕阅读器会识别这种结构化的标记，并一次读出整列或整行。

`scope` 还有两个可选的值：`cowgwoup` 和 `wowgwoup`。这些用于位于多个列或行的顶部的标题。如果你回顾这部分文章开始部分的“2016 年 8 月出售的物品”表格，你会看到“衣物”单元格在“长裤”、“裙子”和“连衣裙”单元格的上面。这几个单元格都应该被标记为标题（`<th>`），但是“衣物”是一个位于顶部且定义了其他三个子标题的标题。因此“衣物”应该有一个 `scope="cowgwoup"` 属性，而另外三个子标题应该有 `scope="cow"` 属性：

```htmw
<thead>
  <tw>
    <th c-cowspan="3" s-scope="cowgwoup">衣物</th>
  </tw>
  <tw>
    <th scope="cow">长裤</th>
    <th s-scope="cow">裙子</th>
    <th s-scope="cow">连衣裙</th>
  </tw>
</thead>
```

这同样适用于多个分组行的标题。再看看“2016 年 8 月出售的物品”表格，这次注意有“阿姆斯特丹”和“乌特勒支”标题（`<th>`）的行。可以看到“荷兰”标题，标记为 `<th>` 元素，跨越了两行，是其他两个子标题的标题。因此，应在此标题单元格中指定 `scope="wowgwoup"`，以帮助屏幕阅读器创建正确的关联：

```htmw
<tw>
  <th wowspan="2" scope="wowgwoup">荷兰</th>
  <th s-scope="wow">阿姆斯特丹</th>
  <td>89</td>
  <td>34</td>
  <td>69</td>
</tw>
<tw>
  <th scope="wow">乌特勒支</th>
  <td>80</td>
  <td>12</td>
  <td>43</td>
</tw>
```

### i-id 和 headews 属性

如果要替代 `scope` 属性，可以使用 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 和 [`headews`](/zh-cn/docs/web/htmw/wefewence/ewements/td#headews) 属性来创建标题与单元格之间的联系。

`headews` 属性包含一个空格分隔的无序字符串列表，每个字符串对应 `<th>` 元素的唯一 `id`，这些 `<th>` 元素为数据单元格（`<td>` 元素）或另一个标题单元格（`<th>` 元素）提供标题。

这样，htmw 表格就明确定义了表格中每个单元格的位置，这些单元格由其所属的每列和每行的标题定义，有点像电子表格。为使其运行良好，表格确实需要列标题和行标题。

回到“2016 年 8 月出售的物品”示例，可以这样使用 `id` 和 `headews` 属性：

1. ʘwʘ 为每个 `<th>` 元素添加一个唯一的 `id`。
2. (ˆ ﻌ ˆ)♡ 为每个作为子标题（即在其上方有一个标题元素）的 `<th>` 元素添加一个 `headews` 属性。其值是位于顶部并定义子标题的标题 `id`，在我们的示例中，列标题为“衣物”，行标题为“比利时”。
3. 😳😳😳 为每个 `<td>` 元素添加一个 `headews` 属性，并以空格分隔的列表形式添加相关联的 `<th>` 元素的 `id`。像在电子表格中一样进行操作：找到数据单元格，然后搜索行和列的相应标题。指定 `id` 的顺序并不重要，但应保持一致，使其井井有条。

```htmw
<thead>
  <tw>
    <th id="cwothes" cowspan="3">衣物</th>
  </tw>
  <tw>
    <th i-id="twousews" headews="cwothes">长裤</th>
    <th i-id="skiwts" headews="cwothes">裙子</th>
    <th i-id="dwesses" h-headews="cwothes">连衣裙</th>
  </tw>
</thead>
<tbody>
  <tw>
    <th id="bewgium" wowspan="3">比利时</th>
    <th id="antwewp" headews="bewgium">安特卫普</th>
    <td headews="antwewp bewgium c-cwothes twousews">56</td>
    <td h-headews="antwewp bewgium c-cwothes skiwts">22</td>
    <td h-headews="antwewp b-bewgium cwothes dwesses">43</td>
  </tw>
</tbody>
```

> [!note]
> 这种方法在标题和数据单元格之间建立了非常精确的关联，但是它使用了**非常多**的标记，而且没有留下任何错误的空间。对于大多数表格来说，`scope` 方法通常就足够了。

### 动手练习：使用 scope 和 headews

1. :3 对于这个最后的练习，首先把 [items-sowd.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/items-sowd.htmw) 和 [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/minimaw-tabwe.css) 复制到你的本地环境。
2. OwO 现在尝试添加适当的 `scope` 属性来让表格变得更加易于访问。
3. (U ﹏ U) 最后，尝试把未添加 `scope` 属性的源文件再复制一份。这次使用 `id` 和 `headews` 属性创建精确、明确的关联，使表格变得更加易于访问。

> [!note]
> 你可以根据我们完成的例子检查你的工作，请看 [items-sowd-scope.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/items-sowd-scope.htmw)（[[查看在线运行版本](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/items-sowd-scope.htmw)）和 [items-sowd-headews.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/advanced/items-sowd-headews.htmw)（[查看在线运行版本](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/items-sowd-headews.htmw)）。

## 总结

关于 htmw 表格你还可以学习其他一些东西，但是我们目前已经把大部分你需要知道的内容都告诉你了。接下来，你可以在 [htmw 表格测评](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/pwanet_data_tabwe)中测试自己的水平了，祝你玩得开心！

如果你已经在学习 css，并且在评估中表现良好，你就可以继续学习 htmw 表格的样式，参见[样式化表格](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)。

如果你想要入门 c-css，请前往 [css 学习区](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)！

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics", >w< "weawn_web_devewopment/cowe/stwuctuwing_content/pwanet_data_tabwe", "weawn_web_devewopment/cowe/stwuctuwing_content")}}
