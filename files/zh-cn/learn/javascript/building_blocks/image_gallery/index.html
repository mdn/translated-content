---
title: 照片库
slug: Learn/JavaScript/Building_blocks/Image_gallery
tags:
  - 事件
  - 事件句柄
  - 初学者
  - 学习
  - 循环
  - 评估
translation_of: Learn/JavaScript/Building_blocks/Image_gallery
original_slug: learn/JavaScript/Building_blocks/相片走廊
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</div>

<p class="summary">我们已经学习了 JavaScript 基础的块结构，下面我们通过编写一个常见的基于 JavaScript 的照片库来测验一下你对于循环、函数、条件和事件的掌握情况。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">预备知识:</th>
   <td>请读完本章其它所有小节的内容后再开始这个测验。</td>
  </tr>
  <tr>
   <th scope="row">目标:</th>
   <td>测试你对 JavaScript 的循环、函数、条件语句和事件处理的掌握程度。</td>
  </tr>
 </tbody>
</table>

<h2 id="起点">起点</h2>

<p><a href="https://raw.githubusercontent.com/roy-tian/learning-area/master/javascript/building-blocks/gallery/gallery-start.zip">下载压缩包</a> 并在本地解压。</p>

<div class="note">
<p><strong>注</strong>：你还可以使用类似 <a class="external external-icon" href="http://jsbin.com/">JSBin</a> 或 <a class="external external-icon" href="https://glitch.com/">Glitch</a> 这些在线编辑器来完成测验。你可以把 HTML、CSS 和 JavaScript 代码复制过去。如果你选的工具没有独立的 JavaScript/CSS 板面，可以随时在 HTML 页面中添加 <code>&lt;script&gt;</code>/<code>&lt;style&gt;</code> 元素。</p>
</div>

<h2 id="项目简介">项目简介</h2>

<p>我们提供了一些 HTML、CSS、相片和几行 JavaScript 代码。需要你来编写必要的 JavaScript 代码让这个项目运行起来。HTML 的 body 部分如下：</p>

<pre class="brush: html notranslate">&lt;h1&gt;照片库&lt;/h1&gt;

&lt;div class="full-img"&gt;
  &lt;img class="displayed-img" src="images/pic1.jpg"&gt;
  &lt;div class="overlay"&gt;&lt;/div&gt;
  &lt;button class="dark"&gt;变暗&lt;/button&gt;
&lt;/div&gt;

&lt;div class="thumb-bar"&gt;

&lt;/div&gt;</pre>

<p>你可以尝试操作一下这个示例，也可 <a href="https://roy-tian.github.io/mdn-examples/javascript/gallery/">在线打开</a>。（不要偷看源代码哦！）</p>

<div class="hidden">
<h6 id="Image_gallery">Image gallery</h6>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;style&gt;
      h1 {
        font-family: helvetica, arial, sans-serif;
        text-align: center;
      }

      body {
        width: 640px;
        margin: 0 auto;
      }

      .full-img {
        position: relative;
        display: block;
        width: 640px;
        height: 480px;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 640px;
        height: 480px;
        background-color: rgba(0,0,0,0);
      }

      button {
        background: rgba(150,150,150,0.6);
        text-shadow: 1px 1px 1px white;
        border: 1px solid #999;
        position: absolute;
        cursor: pointer;
        top: 2px;
        left: 2px;
      }

      .thumb-bar img {
        display: block;
        width: 20%;
        float: left;
        cursor: pointer;
      }
    &lt;/style&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;h1&gt;照片库&lt;/h1&gt;

    &lt;div class="full-img"&gt;
      &lt;img class="displayed-img" src="https://roy-tian.github.io/mdn-examples/gallery/images/pic1.jpg"&gt;
      &lt;div class="overlay"&gt;&lt;/div&gt;
      &lt;button class="dark"&gt;变暗&lt;/button&gt;
    &lt;/div&gt;

    &lt;div class="thumb-bar"&gt; &lt;/div&gt;
    &lt;script&gt;
      var displayedImage = document.querySelector('.displayed-img');
      var thumbBar = document.querySelector('.thumb-bar');

      btn = document.querySelector('button');
      var overlay = document.querySelector('.overlay');

      for(var i = 1; i &lt;= 5; i++) {
        var newImage = document.createElement('img');
        newImage.setAttribute('src', 'https://roy-tian.github.io/mdn-examples/gallery/images/pic' + i + '.jpg');
        thumbBar.appendChild(newImage);
        newImage.onclick = function(e) {
          var imgSrc = e.target.getAttribute('src');
          displayImage(imgSrc);
        }
      }

      function displayImage(imgSrc) {
        displayedImage.setAttribute('src', imgSrc);
      }

      btn.onclick = function() {
        var btnClass = btn.getAttribute('class');
        if(btnClass === 'dark') {
          btn.setAttribute('class','light');
          btn.textContent = '变亮';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
          btn.setAttribute('class','dark');
          btn.textContent = '变暗';
          overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
      }
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
</div>

<ul>
</ul>

<p>{{ EmbedLiveSample('Image_gallery', '100%', 680, "", "", "hide-codepen-jsfiddle") }}</p>

<p>以下是本例中 CSS 文件最值得关注的部分：</p>

<ul>
 <li><code>full-img &lt;div&gt;</code> 中有三个绝对定位的元素：一个显示全尺寸图片的 <code>&lt;img&gt;</code>，一个空 <code>&lt;div&gt;</code>（覆盖在 <code>&lt;img&gt;</code> 之上，且与之大小相同，用来设置半透明背景色来使图片变暗），和一个用来控制变暗效果的 <code>&lt;button&gt;</code>。</li>
 <li>将 <code>thumb-bar &lt;div&gt;</code> 中图片（即“缩略图”）的宽度设置为20%，并且将它们浮动至左端，使得它们在同一行上依次排列。</li>
</ul>

<p>你的 JavaScript 需要：</p>

<ul>
 <li>遍历所有相片，为每张相片生成一个 <code>&lt;img&gt;</code> 元素并把它们插入 <code>thumb-bar &lt;div&gt;</code> 中，这样图片就会嵌入页面。</li>
 <li>为 <code>thumb-bar &lt;div&gt;</code> 里的每个 <code>&lt;img&gt;</code> 元素添加一个 <code>onclick</code> 处理器，在图片被点击时相应的图片被显示到 <code>displayed-img &lt;img&gt;</code> 元素上。</li>
 <li>给 <code>&lt;button&gt;</code> 元素添加一个 <code>onclick</code> 处理器，当按钮被点击时，将全尺寸图片变暗，再次点击时取消。</li>
</ul>

<p>可以看一下 <a class="external external-icon" href="https://roy-tian.github.io/learning-area/javascript/building-blocks/gallery/">完成的示例</a> 体会一下。（别偷看代码哦）</p>

<h2 id="步骤">步骤</h2>

<p>以下是你的工作。</p>

<h3 id="遍历照片">遍历照片</h3>

<p>我们提供的代码中用一个名为 <code>thumBar</code> 的变量用来存储 <code>thumb-bar &lt;div&gt;</code> 的引用，创建了一个新的 <code>&lt;img&gt;</code> 元素，将它的 <code>src</code> 属性值设置成 <code>xxx</code> 占位符，并且将这个新的 <code>&lt;img&gt;</code> 元素添加到 <code>thumbBar</code> 里。</p>

<p>你应该:</p>

<ol>
 <li>在"遍历图片"注释下方添加一个循环来遍历 5 张图片，只需要遍历 5 个数字，每个数字代表一张图片。</li>
 <li>每次迭代中，用图片路径的字符串替换掉占位符 <code>xxx</code>。即在每次迭代中把 <code>src</code> 属性设置为图片的路径。记住，图片都在 images 目录下，文件名是 <code>pic1.jpg</code><font face="Open Sans, arial, x-locale-body, sans-serif">、</font><code>pic2.jpg</code>，等等。</li>
</ol>

<h3 id="给每一个缩略图添加点击处理器">给每一个缩略图添加点击处理器</h3>

<p>每次迭代中，你需要给当前的 <code>newImage</code> 加上一个 <code>onclick</code> 事件处理函数——它应该：</p>

<ol>
 <li>找到当前图片的 <code>src</code> 属性值。这个可以通过对当前的 <code>&lt;img&gt;</code> 用 <code>"src"</code> 作为参数调用 <code><a href="/zh-CN/docs/Web/API/Element/getAttribute">getAttribute()</a></code> 函数来完成，但是如何在代码里获取图片？用 <code>newImage</code> 是不行的，因为在事件处理函数应用之前循环已经结束，这样每次迭代 <code>src</code> 的值都会是最后一张图片。因此，对于每个事件处理器，<code>&lt;img&gt;</code> 都是函数的目标。是否可以从事件对象获得相关信息呢。</li>
 <li>调用一个函数，取上一步返回的 <code>src</code> 值作为参数。可以给这个函数起一个喜欢的名字。</li>
 <li>事件处理器函数应该把 <code>displayed-img &lt;img&gt;</code> 的 <code>src</code> 属性值设为作为参数传入的 <code>src</code> 值。我们已经提供了一个 <code>displayedImg</code> 变量存储相关的 <code>&lt;img&gt;</code>。注意我们需要的是一个定义好的、有名字的函数。</li>
</ol>

<h3 id="为变亮变暗按钮编写处理器">为变亮/变暗按钮编写处理器</h3>

<p>还剩最后的变亮/变暗 <code>&lt;button&gt;</code>。我们已经提供了一个名为 <code>btn</code> 的变量来存储 <code>&lt;button&gt;</code> 的引用。需要添加一个 <code>onclick</code> 事件处理函数：</p>

<ol>
 <li>检查当前 <code>&lt;button&gt;</code> 按钮的类名称，仍可用 <code>getAttribute()</code> 函数取得。</li>
 <li>如果类名的值是 <code>"dark"</code>, 将 <code>&lt;button&gt;</code> 的类名变为 <code>"light"</code>（使用 <code><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute">setAttribute()</a></code>）, 文本内容变为 "变亮"，蒙板 <code>&lt;div&gt;</code> 的{{cssxref("background-color")}} 设为 <code>"rgba(0,0,0,0.5)"</code>。</li>
 <li>如果类名的值不是 <code>"dark"</code>, 将 <code>&lt;button&gt;</code> 的类名变为 <code>"dark"</code>，文本内容变为 "变暗"，蒙板 <code>&lt;div&gt;</code> 的{{cssxref("background-color")}} 设为 <code>"rgba(0,0,0,0)"</code>。</li>
</ol>

<p>以下是实现上述 2、3 点所提功能的基本代码：</p>

<pre class="brush: js notranslate">btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;</pre>

<h2 id="提示">提示</h2>

<ul>
 <li>完全不需要修改 HTML 和 CSS 文件。</li>
</ul>

<h2 id="测验">测验</h2>

<p>如果你是在课堂上进行这个测验，你可以把作品交给导或教授去打分了。如果你是在自学，可以很容易地在 <a href="https://discourse.mozilla.org/t/image-gallery-assessment/24687">本节测验的讨论页</a> 或 <a href="https://wiki.mozilla.org/IRC" rel="noopener">Mozilla 聊天室</a>的 <a href="irc://irc.mozilla.org/mdn">#mdn</a> 频道回复得到批改指南。请先自己试着做，作弊学不到任何东西！</p>

<p>{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</p>

<h2 id="本章目录">本章目录</h2>

<ul>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals">条件语句：在代码中作出决策</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Looping_code">循环代码</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions">函数：可复用的代码块</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Build_your_own_function">创建自己的函数</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Return_values">函数的返回值</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events">初识“事件”</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Image_gallery">照片库</a></li>
</ul>
