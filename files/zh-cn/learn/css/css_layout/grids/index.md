---
title: 网格
slug: Learn/CSS/CSS_layout/Grids
tags:
  - CSS
  - CSS 网格
  - 初学者
  - 学习
  - 布局
  - 引导
  - 教程
  - 文章
  - 编码脚本
  - 网格
  - 网格框架
  - 网格设计
translation_of: Learn/CSS/CSS_layout/Grids
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}</div>

<p>CSS 网格是一个用于 web 的二维布局系统。利用网格，你可以把内容按照行与列的格式进行排版。另外，网格还能非常轻松地实现一些复杂的布局。关于使用网格进行页面排版，这篇文章包含了你需要的一切知识。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">预备知识：</th>
   <td>HTML 基础 (学习<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"> HTML 简介</a>)，以及了解 CSS 如何工作的 (学习 <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS">CSS 简介</a> 和 <a href="/zh-CN/docs/Learn/CSS/Styling_boxes">盒子样式</a>。)</td>
  </tr>
  <tr>
   <th scope="row">目标：</th>
   <td>要了解网格布局系统背后的基本概念，以及如何在一个网页上实现一个网格布局。</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>备注：</strong> 本篇中旧版教程主要讲如何自己编写网格布局，最后过渡到浏览器支持的 CSS Grid Layout。而当前（2019-04-29）大多数浏览器已经支持了 CSS Grid Layout，没必要自己编写了，新版教程仅介绍 CSS Grid Layout 的用法</p>
</div>

<h2 id="什么是网格布局？">什么是网格布局？</h2>

<p>网格是由一系列水平及垂直的线构成的一种布局模式。根据网格，我们能够将设计元素进行排列，帮助我们设计一系列具有固定位置以及宽度的元素的页面，使我们的网站页面更加统一。</p>

<p>一个网格通常具有许多的<strong>列（column）</strong>与<strong>行（row）</strong>，以及行与行、列与列之间的间隙，这个间隙一般被称为<strong>沟槽（gutter）</strong>。</p>

<p><img src="grid.png"></p>

<p>[临时图；将很快替换更好的图片。]</p>

<div class="note">
<p><strong>备注：</strong> 任何有设计背景的人似乎都感到惊讶，CSS 没有内置的网格系统，而我们似乎使用各种次优方法来创建网格状的设计。正如你将在本文的最后一部分中发现的那样，这将被改变，但是你可能需要知道在未来一段时间内创建网格的现有方法。</p>
</div>

<h2 id="在CSS中创建自己的网格">在 CSS 中创建自己的网格</h2>

<p>决定好你的设计所需要的网格后，你可以创建一个 CSS 网格版面并放入各类元素。我们先来看看网格的基础功能，然后尝试做一个简单的网格系统。</p>

<p>下面这个视频提供了一个很好的解释：</p>

<p>{{EmbedYouTube("KOvGeFUHAC0")}}</p>

<h3 id="定义一个网格">定义一个网格</h3>

<p>一如既往，你可以下载教程<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/0-starting-point.html">文件</a>（你可以在线看到<a href="https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html">效果</a>）。例子中有一个容器，容器中有一些子项。默认情况下，子项按照正常布局流自顶而下排布。在这篇文章中，我们会从这开始，对这些文件做一些改变，来了解网格是如何工作的。</p>

<p>首先，将容器的{{cssxref("display")}}属性设置为<code>grid</code>来定义一个网络。与弹性盒子一样，将父容器改为网格布局后，他的直接子项会变为网格项。把下面的 css 规则加到你的文件中。</p>

<pre class="notranslate">.container {
    display: grid;
}
</pre>

<p>与弹性盒子不同的是，在定义网格后，网页并不会马上发生变化。因为<code>display: grid</code>的声明只创建了一个只有一列的网格，所以你的子项还是会像正常布局流那样从上而下一个接一个的排布。</p>

<p>为了让我们的容器看起来更像一个网格，我们要给刚定义的网格加一些列。那就让我们加三个宽度为<code>200px</code>的列。当然，这里可以用任何长度单位，包括百分比。</p>

<pre class="notranslate">.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}</pre>

<p>在规则里加入你的第二个声明。刷新页面后，你会看到子项们排进了新定义的网格中。</p>

<pre class="brush:css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container &gt; div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}          </pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
 &lt;div&gt;One&lt;/div&gt;
 &lt;div&gt;Two&lt;/div&gt;
 &lt;div&gt;Three&lt;/div&gt;
 &lt;div&gt;Four&lt;/div&gt;
 &lt;div&gt;Five&lt;/div&gt;
 &lt;div&gt;Six&lt;/div&gt;
 &lt;div&gt;Seven&lt;/div&gt;
&lt;/div&gt; </pre>

<pre class="brush:css hidden">.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
} </pre>

<p>{{ EmbedLiveSample('定义一个网格', '100%', 400) }}</p>

<h3 id="使用fr单位的灵活网格">使用 fr 单位的灵活网格</h3>

<p>除了长度和百分比，我们也可以用<code>fr</code>这个单位来灵活地定义网格的行与列的大小。这个单位表示了可用空间的一个比例，可能有点抽像，看看下面的例子吧。</p>

<p>使用下面的规则来创建 3 个<code>1fr</code>的列：</p>

<pre class="notranslate">.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}</pre>

<p>将窗口调窄（由于示例中设定了{{cssxref("max-width")}}，可能需要很窄），你应该能看到每一列的宽度可以会随着可用空间变小而变小。<code>fr</code> 单位按比例划分了可用空间，如果没有理解，可以试着改一下数值，看看会发生什么，比如下面的代码：</p>

<pre class="notranslate">.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
}</pre>

<p>这个定义里，第一列被分配了<code>2fr</code>可用空间，余下的两列各被分配了<code>1fr</code>的可用空间，这会使得第一列的宽度是第二第三列的两倍。另外，<code>fr</code>可以与一般的长度单位混合使用，比如<code>grid-template-columns: 300px 2fr 1fr</code>，那么第一列宽度是<code>300px</code>，剩下的两列会根据除去<code>300px</code>后的可用空间按比例分配。</p>

<pre class="brush:css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.container &gt; div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}
                </pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Seven&lt;/div&gt;
&lt;/div&gt;                        </pre>

<p>{{ EmbedLiveSample('使用 fr 单位的灵活网格', '100%', 400) }}</p>

<div class="blockIndicator note">
<p><strong>备注：</strong> <code>fr</code>单位分配的是<em>可用</em>空间而非<em>所有</em>空间，所以如果某一格包含的内容变多了，那么整个可用空间就会减少，可用空间是不包括那些已经确定被占用的空间的。</p>
</div>

<h3 id="网格间隙">网格间隙</h3>

<p>使用 {{cssxref("grid-column-gap")}} 属性来定义列间隙；使用 {{cssxref("grid-row-gap")}} 来定义行间隙；使用 {{cssxref("grid-gap")}} 可以同时设定两者。</p>

<pre class="notranslate">.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 20px;
}</pre>

<p>间隙距离可以用任何长度单位包括百分比来表示，但不能使用<code>fr</code>单位。</p>

<pre class="brush:css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
}

.container &gt; div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}
                </pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Seven&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('网格间隙', '100%', 400) }}</p>

<div class="blockIndicator note">
<p><strong>备注：</strong> <code>*gap</code>属性曾经有一个<code>grid-</code>前缀，不过后来的标准进行了修改，目的是让他们能够在不同的布局方法中都能起作用。尽管现在这个前缀不会影响语义，但为了代码的健壮性，你可以把两个属性都写上。</p>
</div>

<pre class="notranslate">.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
}</pre>

<h3 id="重复构建行列">重复构建行/列</h3>

<p>你可以使用<code>repeat</code>来重复构建具有某些宽度配置的某些列。举个例子，如果要创建多个等宽轨道，可以用下面的方法。</p>

<pre class="notranslate">.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}</pre>

<p>和之前一样，你仍然得到了 3 个<code>1fr</code>的列。第一个传入 repeat 函数的值（<code>3</code>）表明了后续列宽的配置要重复多少次，而第二个值（<code>1fr</code>）表示需要重复的构建配置，这个配置可以具有多个长度设定。例如<code>repeat(2, 2fr 1fr)</code>，如果你仍然不明白，可以实际测试一下效果，这相当于填入了<code>2fr 1fr 2fr 1fr</code>。</p>

<h3 id="显式网格与隐式网格">显式网格与隐式网格</h3>

<p>到目前为止，我们定义过了列，但还没有管过行。但在这之前，我们要来理解一下显式网格和隐式网格。显式网格是我们用<code>grid-template-columns</code> 或 <code>grid-template-rows</code> 属性创建的。而隐式网格则是当有内容被放到网格外时才会生成的。显式网格与隐式网格的关系与弹性盒子的 main 和 cross 轴的关系有些类似。</p>

<p>隐式网格中生成的行/列大小是参数默认是<code>auto</code>，大小会根据放入的内容自动调整。当然，你也可以使用{{cssxref("grid-auto-rows")}}和{{cssxref("grid-auto-columns")}}属性手动设定隐式网格的大小。下面的例子将<code>grid-auto-rows</code>设为了<code>100px</code>，然后你可以看到那些隐式网格中的行（因为这个例子里没有设定{{cssxref("grid-template-rows")}}，因此，所有行都位于隐式网格内）现在都是 100 像素高了。</p>

<p>译者注：简单来说，隐式网格就是为了放显式网格放不下的元素，浏览器根据已经定义的显式网格自动生成的网格部分。</p>

<pre class="brush:css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container &gt; div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}                  </pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Seven&lt;/div&gt;
&lt;/div&gt;
                        </pre>

<pre class="brush:css">.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px;
}</pre>

<p>{{ EmbedLiveSample('显式网格与隐式网格', '100%', 400) }}</p>

<h3 id="方便的minmax_函数">方便的 minmax() 函数</h3>

<p>100像素高的行/列有时可能会不够用，因为时常会有比100像素高的内容加进去。所以，我们希望可以将其设定为至少100像素，而且可以跟随内容来自动拓展尺寸保证能容纳所有内容。显而易见，你很难知道网页上某个元素的尺寸在不同情况下会变成多少，一些额外的内容或者更大的字号就会导致许多能做到像素级精准的设计出现问题。所以，我们有了{{cssxref("minmax")}}函数。</p>

<p>{{cssxref("minmax")}} 函数为一个行/列的尺寸设置了取值范围。比如设定为 <code>minmax(100px, auto)</code>，那么尺寸就至少为 100 像素，并且如果内容尺寸大于 100 像素则会根据内容自动调整。在这里试一下把 <code>grid-auto-rows</code> 属性设置为<code>minmax</code>函数。</p>

<pre class="notranslate">.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 20px;
}</pre>

<p>如果所有网格内的内容均小于 100 像素，那么看起来不会有变化，但如果在某一项中放入很长的内容或者图片，你可以看到这个格子所在的哪一行的高度变成能刚好容纳内容的高度了。注意我们修改的是<code>grid-auto-rows</code> ，因此只会作用于隐式网格。当然，这一项属性也可以应用于显示网格，更多内容可以参考{{cssxref("minmax")}}页面。</p>

<h3 id="自动使用多列填充">自动使用多列填充</h3>

<p>现在来试试把学到的关于网格的一切，包括 repeat 与 minmax 函数，组合起来，来实现一个非常有用的功能。某些情况下，我们需要让网格自动创建很多列来填满整个容器。通过设置<code>grid-template-columns</code>属性，我们可以实现这个效果，不过这一次我们会用到{{cssxref("repeat")}}函数中的一个关键字<code>auto-fill</code>来替代确定的重复次数。而函数的第二个参数，我们使用{{cssxref("minmax")}}函数来设定一个行/列的最小值，以及最大值<code>1fr</code>。</p>

<p>在你的文件中试试看，你也许可以用到以下的代码。</p>

<pre class="brush:css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container &gt; div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}
                </pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
  &lt;div&gt;Six&lt;/div&gt;
  &lt;div&gt;Seven&lt;/div&gt;
&lt;/div&gt;                      </pre>

<pre class="brush:css notranslate">.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}</pre>

<p>{{ EmbedLiveSample('自动使用多列填充', '100%', 400) }}</p>

<p>你应该能看到形成了一个包含了许多至少 200 像素宽的列的网格，将容器填满。随着容器宽度的改变，网格会自动根据容器宽度进行调整，每一列的宽度总是大于 200 像素，并且容器总会被列填满。（This works because grid is creating as many 200 pixel columns as will fit into the container, then sharing whatever space is leftover between all of the columns — the maximum is 1fr which, as we already know, distributes space evenly between tracks.）</p>

<h2 id="基于线的元素放置">基于线的元素放置</h2>

<p>在定义完了网格之后，我们要把元素放入网格中。我们的网格有许多分隔线，第一条线的起始点与文档书写模式相关。在英文中，第一条列分隔线（即网格边缘线）在网格的最左边而第一条行分隔线在网格的最上面。而对于阿拉伯语，第一条列分隔线在网格的最右边，因为阿拉伯文是从右往左书写的。</p>

<p>我们根据这些分隔线来放置元素，通过以下属性来指定从那条线开始到哪条线结束。</p>

<ul>
 <li>{{cssxref("grid-column-start")}}</li>
 <li>{{cssxref("grid-column-end")}}</li>
 <li>{{cssxref("grid-row-start")}}</li>
 <li>{{cssxref("grid-row-end")}}</li>
</ul>

<p>这些属性的值均为分隔线序号，你也可以用以下缩写形式来同时指定开始与结束的线。</p>

<ul>
 <li>{{cssxref("grid-column")}}</li>
 <li>{{cssxref("grid-row")}}</li>
</ul>

<p>注意开始与结束的线的序号要使用<code>/</code>符号分开。</p>

<p>下载<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/8-placement-starting-point.html">这个文件</a>（或者查看<a href="https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html">在线预览</a>）。文件中已经定义了一个网格以及一篇简单的文章位于网格之外。你可以看到元素已经被自动放置到了我们创建的网格中。</p>

<p>接下来，尝试用定义网格线的方法将所有元素放置到网格中。将以下规则加入到你的 css 的末尾：</p>

<pre class="notranslate">header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}</pre>

<pre class="brush:css hidden">body {
                    width: 90%;
                    max-width: 900px;
                    margin: 2em auto;
                    font: .9em/1.2 Arial, Helvetica, sans-serif;
                }

                .container {
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                    grid-gap: 20px;
                }
header {
    grid-column: 1 / 3;
    grid-row: 1;
}

article {
    grid-column: 2;
    grid-row: 2;
}

aside {
    grid-column: 1;
    grid-row: 2;
}

footer {
    grid-column: 1 / 3;
    grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

aside {
  border-right: 1px solid #999;
}
</pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
  &lt;header&gt;This is my lovely blog&lt;/header&gt;
  &lt;article&gt;
    &lt;h1&gt;My article&lt;/h1&gt;
    &lt;p&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

    &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
  &lt;/article&gt;
  &lt;aside&gt;
    &lt;h2&gt;Other things&lt;/h2&gt;
    &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est.&lt;/p&gt;
  &lt;/aside&gt;
  &lt;footer&gt;Contact me@mysite.com&lt;/footer&gt;
&lt;/div&gt;               </pre>

<p>{{ EmbedLiveSample('基于线的元素放置', '100%', 400) }}</p>

<div class="blockIndicator note">
<p><strong>备注：</strong> 你也可以用<code>-1</code>来定位到最后一条列分隔线或是行分隔线，并且可以用负数来指定倒数的某一条分隔线。但是这只能用于显式网格，对于<a href="/zh-CN/docs/Glossary/Grid">隐式网格</a><code>-1</code>不一定能定位到最后一条分隔线。</p>
</div>

<h2 id="使用grid-template-areas属性放置元素">使用 grid-template-areas 属性放置元素</h2>

<p>另一种往网格放元素的方式是用{{cssxref("grid-template-areas")}}属性，并且你要命名一些元素并在属性中使用这些名字作为一个区域。</p>

<p>将之前基于线的元素放置代码删除（或者重新下载一份新的文件），然后加入以下 CSS 规则：</p>

<pre class="notranslate">.container {
  display: grid;
  grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}</pre>

<p>刷新页面，然后你应该能看到的元素会被放到与之前相同的地方，整个过程不需要我们指定任何分隔线序号。</p>

<pre class="brush:css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

aside {
  border-right: 1px solid #999;
}

.container {
  display: grid;
  grid-template-areas:
  "header header"
  "sidebar content"
  "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
                </pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
  &lt;header&gt;This is my lovely blog&lt;/header&gt;
  &lt;article&gt;
    &lt;h1&gt;My article&lt;/h1&gt;
    &lt;p&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

    &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
  &lt;/article&gt;
  &lt;aside&gt;&lt;h2&gt;Other things&lt;/h2&gt;
    &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est.&lt;/p&gt;
  &lt;/aside&gt;
  &lt;footer&gt;Contact me@mysite.com&lt;/footer&gt;
&lt;/div&gt;                     </pre>

<p>{{ EmbedLiveSample('使用 grid-template-areas 属性放置元素', '100%', 400) }}</p>

<p><code>grid-template-areas</code>属性的使用规则如下：</p>

<ul>
 <li>你需要填满网格的每个格子</li>
 <li>对于某个横跨多个格子的元素，重复写上那个元素<code>grid-area</code>属性定义的区域名字</li>
 <li>所有名字只能出现在一个连续的区域，不能在不同的位置出现</li>
 <li>一个连续的区域必须是一个矩形</li>
 <li>使用<code>.</code>符号，让一个格子留空</li>
</ul>

<p>你可以在文件中尽情发挥你的想象来测试各种网格排版，比如把页脚放在内容之下，或者把侧边栏一直延伸到最底。这种直观的元素放置方式很棒，你在 CSS 中看到的就是实际会出现的排版效果。</p>

<h2 id="一个用CSS网格实现的网格排版框架">一个用 CSS 网格实现的网格排版框架</h2>

<p>网格排版框架一般由 12 到 16 列的网格构成，你可以用 CSS 网格系统直接实现而不需要任何第三方的工具，毕竟这是标准定义好了的。</p>

<p>下载这个<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/11-grid-system-starting-point.html">初始文件</a>，文件中包含了一个定义了 12 列网格的容器。文件中的一些内容我们曾在前两个示例中使用过，我们暂时可以先用基于线的元素放置模式来将我们的内容放到这个 12 列的网格中。</p>

<pre class="notranslate">header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}</pre>

<pre class="brush:css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0,1fr));
  grid-gap: 20px;
}

header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

aside {
  border-right: 1px solid #999;
}
                </pre>

<pre class="brush:html hidden">&lt;div class="container"&gt;
  &lt;header&gt;This is my lovely blog&lt;/header&gt;
  &lt;article&gt;
    &lt;h1&gt;My article&lt;/h1&gt;
    &lt;p&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

    &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
  &lt;/article&gt;
  &lt;aside&gt;&lt;h2&gt;Other things&lt;/h2&gt;
    &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est.&lt;/p&gt;
  &lt;/aside&gt;
  &lt;footer&gt;Contact me@mysite.com&lt;/footer&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('一个用 CSS 网格实现的网格排版框架', '100%', 400) }}</p>

<p>你可以使用<a href="/zh-CN/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Firefox Grid Inspector</a>去查看页面中的网格线，你应该能看到这 12 列的网格是如何工作的。</p>

<p><img alt="A 12 column grid overlaid on our design." src="learn-grids-inspector.png"></p>

<h2 id="纸上得来终觉浅！">纸上得来终觉浅！</h2>

<p>你已经读完了这篇教程，那你记住那些最重要的内容了么？在继续之前，您可以通过一些其他测试来验证您是否真正学习到了这些知识，参见<a href="/zh-CN/docs/Learn/CSS/CSS_layout/Grid_skills">技能测试：网格</a>.</p>

<h2 id="小结">小结</h2>

<p>我们在这篇文章中接触了 CSS 网格版面的主要特性，你现在应该可以在你自己的设计中使用了。想深入了解这些内容，你可以读一读下面关于网格版面的文章，可以下面的推荐阅读里看到。</p>

<h2 id="推荐阅读">推荐阅读</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/CSS/CSS_Grid_Layout#Guides">CSS 网格指南</a></li>
 <li><a href="/zh-CN/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">CSS 网格检查器：检查的你的网格版面</a></li>
</ul>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}</p>
