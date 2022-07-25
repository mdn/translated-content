---
title: 客户端框架介绍
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
tags:
  - JavaScript
  - 初学者
  - 学习
  - 客户端
  - 框架
translation_of: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/介绍
---
<div>{{LearnSidebar}}</div>

<div>{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<p>在本章节我们开始大致了解框架，简要回顾 JavaScript 和框架的历史，为什么框架会存在以及它们提供了什么，如何开始考虑选择一个框架并学习，以及对于客户端框架还有什么替代方案。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">先决条件：</th>
   <td>熟悉 <a href="/en-US/docs/Learn/HTML">HTML</a>, <a href="/en-US/docs/Learn/CSS">CSS</a>, 以及 <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> 语言的核心。</td>
  </tr>
  <tr>
   <th scope="row">目标：</th>
   <td>了解客户端 JavaScript 框架是如何存在的，它们能解决什么问题，还有哪些替代方案，以及如何选择一个框架。</td>
  </tr>
 </tbody>
</table>

<h2 id="简史">简史</h2>

<p>当 JavaScript 在 1996 被发布后，它给网络增加了少许的交互性和乐趣，直到那时，网页仍由静态文档组成。网络应该不仅仅是阅读，更是创造的地方。随着 JavaScript 的流行。使用 JavaScript 的开发者们创造工具来解决他们遇到的问题，并且将其打包成称为<strong>库</strong>的可复用组件，这样就能和他人共享解决方案。这种共享库的体系帮助塑造了网络的增长。</p>

<p>现在，JavaScript 是网络的基本部分，<a href="https://w3techs.com/technologies/details/cp-javascript">used on 95% of all websites</a>, 而且网络又是现代生活的基本部分。用户在网络上写文章，管理预算，听音乐，看电影，  以及和相隔万里的人通过文字，音频，视频聊天来瞬时交流。网络让我们能够做到那些过去只能在电脑上安装本地应用程序才能做到的事。这些现代的，复杂的，具有交互性的网站通常被称为 <strong>网络应用程序</strong>.</p>

<p>现代 JavaScript 框架的到来加快了打造高度动态化和交互性强的应用程序的速度.  <strong>框架</strong> 就是提供该如何构建应用程序的意见的库。这些意见能使应用具有可预测性和同质性。可预测性让软件能在扩展到很大规模的同时仍保持可维护性。可预测性和可维护性对于一个软件的长久健康运行是十分重要的。</p>

<p>在现代网络中，JavaScript 框架为众多令人印象深刻的软件提供支持——包括许多你可能每天都使用的网站。你正在阅读的这个 MDN Web 文档页面，就是使用 React / ReactDOM 框架为其前端提供动力。</p>

<h2 id="有哪些框架">有哪些框架？</h2>

<p>有很多框架可供你选择，但以下主要介绍目前公认的“四大框架”。</p>

<h3 id="Ember">Ember</h3>

<p><a href="https://emberjs.com/">Ember</a>于 2011 年 12 月发布，最初作为<a href="https://en.wikipedia.org/wiki/SproutCore">SproutCore</a>项目的延续而开始。比其新式的替代品（例如 React 和 Vue），作为老框架它的用户人数要少得多。但因其稳定性、社区支持以及一些明智的编程原则，它仍然享有很高的知名度。</p>

<h3 id="Angular">Angular</h3>

<p><a href="https://angular.io">Angular </a>是一个开源 Web 应用程序框架，正式发布于 2016 年 9 月 14 日。它由构建<a href="https://angularjs.org/"> AngularJS</a> 的团队完全重写，并由 Google 的 Angular 团队以及个人和公司社区共同领导。</p>

<p>Angular 是一种基于组件的框架，使用声明式的 HTML 模板。在应用构建时，框架的编译器将 HTML 模板转换为优化好的 JavaScript 指令，这一过程对开发者是透明的。Angular 使用 TypeScript，它是 JavaScript 的超集，我们将在下一章中对其进行更多介绍。</p>

<h3 id="Vue">Vue</h3>

<p>在工作和学习了 <a href="https://angularjs.org/">AngularJS</a> 的源码之后，Evan You（尤雨溪）在 2014 年第一次发布 <a href="https://vuejs.org/">Vue</a> 。Vue 是“四大框架”中最年轻的，但在最近，它的人气迅速上升。</p>

<p>Vue，就像 <a href="https://angularjs.org/">AngularJS</a>，用它自己的代码拓展了 HTML。除此之外，它完全依赖于现代的、标准化的 JavaScript。</p>

<h3 id="React">React</h3>

<p>Facebook 在 2013 发布了 React。在当时 React 已经被 Facebook 内部用来解决许多问题。严格来说 React 本身并不是框架，而是一个用来渲染 UI 组件的库。React 被用来组合<em>其它</em>用来构建应用的库 —— React 和 <a href="https://reactnative.dev/">React Native</a> 让开发者能够用 JavaScript 构建移动应用；React 和 <a href="https://reactjs.org/docs/react-dom.html">ReactDOM</a> 使他们能够被用来制作 web 应用程序等。</p>

<p>因为 React 和 ReactDOM 被经常放在一起使用，通俗地讲，React 可以被理解为是一个 JavaScript 框架。当你通读了这个模块时，我们将使用这种口语化的理解进行工作。</p>

<p>React 用类似 HTML 的语法的 <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a> 拓展了 JavaScript。</p>

<h2 id="框架为何会存在">框架为何会存在？</h2>

<p>我们已经讨论了因为什么契机而创造了框架，但我们仍不知道为什么开发者认为有必要创造它。要知道这个问题的答案，我们首先需要检查软件开发中的各种挑战。</p>

<p>设想一个很常见的软件：一个 To-Do 清单创建器，在接下来的章节中我们会使用各种框架来实现它。这个应用应让用户可以完成诸如呈现任务列表、添加和删除任务等操作，且在完成这些操作的同时能可靠地跟踪和更新应用程序的底层数据。在软件开发中，这种底层数据被称为状态。</p>

<p>上述每个目标理论上都很简单。我们可以遍历数据来列出清单，添加一个对象来创建新任务，使用标识符来查找、编辑和删除任务。需要注意的是，用户都是在浏览器中使用应用的这些功能，然而这就引出了一些问题： <strong>每当我们修改应用的数据时，我们都需要更新用户界面以使其匹配。</strong> </p>

<p>我们可以通过 To-Do 应用的一个功能来检验这个问题的难点：呈现任务清单。</p>

<h2 id="冗长的DOM操作">冗长的 DOM 操作</h2>

<p>构建 HTML 元素并适时在浏览器中呈现它们需要大量的 JavaScript 代码。假设我们的状态——底层数据，是一个结构如下的对象数组：</p>

<pre class="brush: js notranslate">const state = [
  {
    id: 'todo-0',
    name: 'Learn some frameworks!'
  }
]</pre>

<p>如何向用户展示其中一个任务？我们想将每个任务表示为一个列表项——无序列表元素（<code><a href="/zh-CN/docs/Web/HTML/Element/ul">&lt;ul&gt;</a></code>）中的一个 HTML <code><a href="/zh-CN/docs/Web/HTML/Element/li">&lt;li&gt;</a></code> 元素。我们该如何实现？可以像下面这样：</p>

<pre class="brush: js notranslate">function buildTodoItemEl(id, name) {
  const item = document.createElement('li');
  const span = document.createElement('span');
  const textContent = document.createTextNode(name);

  span.appendChild(textContent)

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}</pre>

<p>在这里，我们使用 <code><a href="/zh-CN/docs/Web/API/Document/createElement">document.createElement()</a></code> 方法来创建我们的 <code>&lt;li&gt;</code> 元素，以及另外几行代码来创建它需要的属性和子元素。</p>

<p>该代码片段的第十行引用了另一个构建函数：<code>buildDeleteButtonEl()</code>。它遵循与我们用来构建列表项元素时类似的模式：</p>

<pre class="brush: js notranslate">function buildDeleteButtonEl(id) {
  const button = document.createElement('button');
  const textContent = document.createTextNode('Delete');

  button.setAttribute('type', 'button');
  button.appendChild(textContent);

  return button;
}</pre>

<p>这个按钮只有当我们决定实现删除功能时，才会生效。要在页面上渲染我们的列表项，代码看起来可能是这样的：</p>

<pre class="brush: js notranslate">function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach(task =&gt; {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}</pre>

<p>我们现在已经有超过30行<em>仅</em>服务于 UI 的代码——<em>只</em>作用于在 DOM 中渲染某些内容的步骤——并且我们不会再添加类，可以随后设置列表项样式的类！</p>

<p>如本例所示，直接使用 DOM，我们需要了解有关 DOM 工作原理的许多内容：如何创建元素；如何改变它们的属性；如何将元素放在一起；如何让它们出现在页面上。这些代码实际上都没有处理用户交互，或添加/删除任务。如果我们添加这些功能，我们必须记得在正确的时间以正确的方式更新我们的 UI。</p>

<p>JavaScript 框架的出现是为了使这些工作变得更容易——它们的存在是为了提供更好的<em>开发体验</em>。它们没有给 JavaScript 带来新的功能；但它们使你可以更轻松地使用 JavaScript 来构建现代的 web。</p>

<p>如果你想查看本节中的代码示例，可以查看 <a href="https://codepen.io/dengeist/pen/XWbPNmw">CodePen 上该应用的可用版本</a>, 该版本还允许用户添加和删除新任务。</p>

<p>有关本节中使用的 JavaScript 的更多信息：</p>

<ul>
 <li><code><a href="/zh-CN/docs/Web/API/Document/createElement">document.createElement()</a></code></li>
 <li><code><a href="/zh-CN/docs/Web/API/Document/createTextNode">document.createTextNode()</a></code></li>
 <li><code><a href="/zh-CN/docs/Web/API/Document/createDocumentFragment">document.createDocumentFragment()</a></code></li>
 <li><code><a href="/zh-CN/docs/Web/API/EventTarget/addEventListener">eventTarget.addEventListener()</a></code></li>
 <li><code><a href="/zh-CN/docs/Web/API/Node/appendChild">node.appendChild()</a></code></li>
 <li><code><a href="/zh-CN/docs/Web/API/Node/removeChild">node.removeChild()</a></code></li>
</ul>

<h2 id="另一种打造_ui_的方式">另一种打造 UI 的方式</h2>

<p>JavaScript 框架都提供了一种更具<em>声明性</em>地编写用户界面的方法。也就是说，它们允许你编写描述 UI 的代码 ，然后框架将你编写的描述 UI 的代码通过在幕后的 DOM 显现出来。</p>

<p>原生 JavaScript 使用循环来构建新 DOM 元素的方法乍一看很难理解。相比之下，以下代码说明了使用 Vue 来呈现任务清单的方式：</p>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li v-for="task in tasks" v-bind:key="task.id"&gt;
    &lt;span&gt;\{{task.name\}}&lt;/span&gt;
    &lt;button type="button"&gt;Delete&lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<p>你没看错。以上用了 JavaScript 框架的代码用了 6 行就实现了刚刚需要 32 行代码才能实现的功能。如果你对这里的大括号和 <code>v-</code> 属性不熟悉，没关系；你会在后面的模块中学习到 Vue 特有的语法。这里要指出的是，这段 vue 代码看起来很像它所代表的 UI，而原生 JavaScript 代码则不然。</p>

<p>感谢 Vue 让我们不必编写自己的函数来构建 UI；我们仅仅需要向 Vue 描述每个项目应该是什么样子，然后 Vue 会以很好的、高效的方式帮我们处理好。因此熟悉 Vue 的开发者可以轻松的加入我们的项目，快速地搞清楚项目是如何运作的。不仅仅是 Vue：使用其它框架也可以提高团队和个人的效率。</p>

<p>其实在原生 JavaScript 中也可以做<em>与此类似</em>的事情。<a href="/zh-CN/docs/Web/JavaScript/Reference/Template_literals">模板字符串</a>使得编写表示最终元素外观的 HTML 字符串变得容易起来。对于像创建上文示例的 To-Do 清单那样简单的应用来说，这可能是一种有用的方法，但它对于管理数千条数据记录，且可以在用户界面上渲染许多独特元素的大型应用程序来说，是难以维护的。</p>

<h2 id="框架提供给我们的其他功能">框架提供给我们的其他功能</h2>

<p>让我们看看使用框架还有哪些好处。正如我们之前提到的，虽然框架的优秀特性在原生 JavaScript 中也可以类似地实现，但是使用框架可以消除必须自己解决这些问题的认知负担。</p>

<h3 id="工具">工具</h3>

<p>由于此模块中的每个框架都有一个庞大而活跃的社区，因此每个框架的体系都提供了工具来改善开发体验。这些工具让诸如添加测试（确保你的应用表现应有的行为）和 linting（确保你的代码没有错误且排版统一）变得更加容易。</p>

<div class="blockIndicator note">
<p><strong>备注：</strong> 如果你想了解有关 Web 工具概念的更多详细信息，请阅读<a href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview">客户端工具概述</a>。</p>
</div>

<h3 id="组件化">组件化</h3>

<p>大多数框架都鼓励开发人员将其用户界面的不同部分抽象为<em>组件（components）</em>——可维护、可重用且可以相互通信的代码块。与给定组件相关的所有代码都可以存在于一个文件（或几个特定文件）中，因此身为开发人员的你就可以轻松地知道去哪里修改目标组件。在原生 JavaScript 中，你就必须花时间创建自己的一套高效、可扩展的编码约定来实现这一点。如果让许多 JavaScript 开发人员使用他们自己的设备，最终可能会导致与 UI 某个部分相关的所有代码分布在一个文件中——或者完全分布在另一个文件中。</p>

<h3 id="路由">路由</h3>

<p>Web 最重要的特点是它允许用户从一个页面导航到另一个页面——毕竟，它是一个相互链接的文档网络。当你点击网站上的链接时，你的浏览器会与目标服务器通信，获取新内容后将其显示给你。当浏览器这样做时，地址栏中的 URL 会发生变化。你可以记下来这个新 URL 并稍后返回该页面——或者把这个URL分享给其他人，以便他们轻松找到相同的页面。您的浏览器会记住你的导航历史记录，并允许你来回导航（译者注：其实就是浏览器的前进后退功能）。这被称作<strong>服务器端路由</strong>。</p>

<p>现代 Web 应用程序通常不会获取和渲染新的 HTML 文件——它们加载单个 HTML shell，并不断更新其中的 DOM 而无需将用户导航到 Web 上的新地址。(这被称为<strong>单页应用程序（single page app）</strong> 或  <strong>SPA</strong>)。每个新的伪网页通常称为一个<em>视图</em>，且在默认情况下，不会做任何路由。</p>

<p>当 SPA 足够复杂并呈现足够多的独特视图时，将路由功能引入你的应用程序非常重要。人们习惯于能够链接到应用程序中的特定页面，在他们的浏览器中前进和后退等等，当这些标准的 Web 功能被破坏时，他们的体验会受到影响。当客户端应用程序以这种方式处理路由时，它被恰当地称为<strong>客户端路由</strong>。</p>

<p><em>可以使用</em> JavaScript 和浏览器的原生功能来实现路由功能，但是流行的、活跃开发的框架具有配套库，使路由功能在开发过程中更直观。</p>

<h2 id="使用框架的注意事项">使用框架的注意事项</h2>

<p>作为一名高效的 web 开发人员，意味着使用最合适的工具来完成工作。JavaScript 框架使前端应用开发变得容易，但它们并不是解决所有问题的灵丹妙药。本节讨论在使用框架时你应该考虑的一些事项。请记住，你也许根本不需要框架——要注意不要为了使用框架而使用框架。</p>

<h3 id="Familiarity_with_the_tool">熟悉工具</h3>

<p>就像原生 JavaScript 一样，框架需要时间来学习，也有它们自己的特性。在你决定为项目使用框架之前，确保你有足够的时间学习它的特性，使它发挥功效，而不是阻碍你，并确保你的团队成员也对它满意。</p>

<h3 id="Overengineering">过度工程化</h3>

<p>如果你的 web 开发项目是一个只有几个页面的个人作品集，并且这些页面几乎没有交互功能，那么可能根本不需要框架（及其所有的 JavaScript）。也就是说，框架并不是一个整体，其中一些框架比其他框架更适合于小型项目。Sarah Drasner 在 Smashing 杂志的一篇文章中写道：作为一种使网页的一小部分具有交互性的工具 <a href="https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/">Vue 是如何取代 jQuery 的</a> 。</p>

<h3 id="Larger_code_base_and_abstraction">大型代码库与抽象</h3>

<p>通过在幕后处理 DOM 交互，框架允许你编写更多的声明式代码，有时总体上可以编写<em>更少</em>的代码。这种抽象对于你作为开发者的体验非常好，但它也是有代价的。为了将你编写的内容转换为 DOM 的变更，框架必须运行自己的代码，这反过来又会使你最终的软件变得更大，并且花费更高的运行成本。</p>

<p>一些额外的代码是必不可少的，且一个支持 tree-shaking 的框架（在构建过程中删除应用程序实际未使用的代码）将使你保持应用程序的小型化；但这仍然是你在考虑应用程序性能时需要记住的一个因素，尤其是在网络/存储限制更严格的设备上，比如手机。</p>

<p>框架的抽象不仅影响 JavaScript，还影响你与 web 的本质关系。无论你如何构建 web，最终，用户都是与 HTML 交互。用 JavaScript 编写整个应用可能会使你忽略 HTML 及其各种标签的用途，并导致产出一个无语义且难以使用的 HTML 文档。实际上，完全依赖 JavaScript 有可能写出脆弱的应用，且没有 JavaScript 就无法运行。</p>

<p>框架不是问题的根源。错误的优先级可能使得<em>任何</em>应用变得脆弱、臃肿和难以使用。然而，框架确实放大了我们作为开发人员的优先级。如果你的首要任务是制作一个复杂的 web 应用程序，那么很容易做到。然而，如果你的优先级没有放在确保性能和无障碍上，那么框架将放大这种脆弱、臃肿和难以使用。现代开发人员的这种重心被框架放大，已经在许多地方颠倒了 web 的结构。现代 web 通常把 JavaScript 放在首位，用户体验放在最后，而不是一个健壮的、内容优先的文档网络。</p>

<h2 id="框架驱动页面的可访问性">框架驱动页面的可访问性</h2>

<p>Let's build on what we said in the previous section, and talk a bit more about accessibility. Making user interfaces accessible always requires some thought and effort, and frameworks can complicate that process. You often have to employ advanced framework APIs to access native browser features like ARIA <a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">live regions</a> or focus management.</p>

<p>In some cases, framework applications create accessibility barriers that do not exist for traditional websites. The biggest example of this is in client-side routing, as mentioned earlier.</p>

<p>With traditional (server-side) routing, navigating the web has predictable results. The browser knows to set focus to the top of the page and assistive technologies will announce the title of the page. These things happen every time you navigate to a new page.</p>

<p>With client-side routing, your browser is not loading new web pages, so it doesn't know that it should automatically adjust focus or announce a new page title. Framework authors have devoted immense time and labor to writing JavaScript that recreates these features, and even then, no framework has done so perfectly.</p>

<p>The upshot is that you should consider accessibility from the very start of <em>every</em> web project, but bear in mind that abstracted codebases that use frameworks are more likely to suffer from major accessibility issues if you don't.</p>

<h2 id="如何选择一个框架">如何选择一个框架</h2>

<p>Each of the frameworks discussed in this module take different approaches to web application development. Each is regularly improving or changing, and each has its pros and cons. Choosing the right framework is a team- and project-dependent process, and you should do your own research to uncover what suits your needs. That said, we've identified a few questions you can ask in order to research your options more effectively:</p>

<ol>
 <li>What browsers does the framework support?</li>
 <li>What domain-specific languages does the framework utilize?</li>
 <li>Does the framework have a strong community and good docs (and other support) available?</li>
</ol>

<p>The table in this section provides a glanceable summary of the current <em>browser support</em> offered by each framework, as well as the <strong>domain-specific languages</strong> with which it can be used.</p>

<p>Broadly, domain-specific languages (<strong>DSLs</strong>) are programming languages relevant in specific areas of software development. In the context of frameworks, DSLs are variations on JavaScript or HTML that make it easier to develop with that framework. Crucially, none of the frameworks <em>require</em> a developer to use a specific DSL, but they have almost all been designed with a specific DSL in mind. Choosing not to employ a framework’s preferred DSL will mean you miss out on features that would otherwise improve your developer experience.</p>

<p>You should seriously consider the support matrix and DSLs of a framework when making a choice for any new project. Mismatched browser support can be a barrier to your users; mismatched DSL support can be a barrier to you and your teammates.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Framework</th>
   <th scope="col">Browser support</th>
   <th scope="col">Preferred DSL</th>
   <th scope="col">Supported DSLs</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Angular</td>
   <td>IE9+</td>
   <td>TypeScript</td>
   <td>HTML-based; TypeScript</td>
  </tr>
  <tr>
   <td>React</td>
   <td>Modern (IE9+ with Polyfills)</td>
   <td>JSX</td>
   <td>JSX; TypeScript</td>
  </tr>
  <tr>
   <td>Vue</td>
   <td>IE9+</td>
   <td>HTML-based</td>
   <td>HTML-based, JSX, Pug</td>
  </tr>
  <tr>
   <td>Ember</td>
   <td>Modern (IE9+ in Ember version 2.18)</td>
   <td>Handlebars</td>
   <td>Handlebars, TypeScript</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>Note</strong>: DSLs we've described as "HTML-based" do not have official names. They are not really true DSLs, but they are non-standard HTML, so we believe they are worth highlighting.</p>
</div>

<p>Citations for this table:</p>

<ul>
 <li><a href="https://reactjs.org/docs/react-dom.html#browser-support">React browser support: official docs</a></li>
 <li><a href="https://blog.emberjs.com/2018/02/14/ember-3-0-released.html">Ember browser support: Ember 3.0 release announcement</a></li>
 <li><a href="https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/">Ember templating language (official docs)</a></li>
</ul>

<h3 id="Does_the_framework_have_a_strong_community">Does the framework have a strong community?</h3>

<p>This is perhaps the hardest metric to measure, because community size does not correlate directly to easy-to-access numbers. You can check a project's number of GitHub stars or weekly npm downloads to get an idea of its popularity, but sometimes the best thing to do is search a few forums or talk to other developers. It is not just about the community's size, but also how welcoming and inclusive it is, and how good available documentation is.</p>

<h3 id="Opinions_on_the_web">Opinions on the web</h3>

<p>Don't just take our word on this matter — there are discussions all over the web. The Wikimedia Foundation recently chose to use Vue for its front-end, and posted a <a href="https://phabricator.wikimedia.org/T241180">request for comments (RFC) on framework adoption</a>. Eric Gardner, the author of the RFC, took time to outline the needs of the Wikimedia project and why certain frameworks were good choices for the team. This RFC serves as a great example of the kind of research you should do for yourself when planning to use a front-end framework.</p>

<p>The <a href="https://stateofjs.com/">State of JavaScript survey</a> is a helpful collection of feedback from JavaScript developers. It covers many topics related to JavaScript, including data about both the use of frameworks and developer sentiment toward them. Currently, there are several years of data available, allowing you to get a sense of a framework's popularity.</p>

<p>The Vue team has <a href="https://vuejs.org/v2/guide/comparison.html">exhaustively compared Vue to other popular frameworks</a>. There may be some bias in this comparison (which they note), but it's a valuable resource nonetheless.</p>

<h2 id="客户端框架的替代方案">客户端框架的替代方案</h2>

<p>If you’re looking for tools to expedite the web development process, and you know your project isn’t going to require intensive client-side JavaScript, you could reach for one of a handful of other solutions for building the web:</p>

<ul>
 <li>A content management system</li>
 <li>Server-side rendering</li>
 <li>A static site generator</li>
</ul>

<h3 id="Content_management_systems">Content management systems</h3>

<p><strong>Content-management systems</strong> (<strong>CMSes</strong>) are any tools that allow a user to create content for the web without directly writing code themselves. They're a good solution for large projects, especially projects that require input from content writers who have limited coding ability, or for programmers who want to save time. They do, however, require a significant amount of time to set up, and utilizing a CMS means that you surrender at least some measure of control over the final output of your website. For example: if your chosen CMS doesn't author accessible content by default, it's often difficult to improve this.</p>

<p>Popular examples include <a href="https://wordpress.com/">Wordpress</a>, <a href="https://www.joomla.org/">Joomla</a>, and <a href="https://www.drupal.org/">Drupal</a>.</p>

<h3 id="Server-side_rendering">Server-side rendering</h3>

<p><strong>Server-side rendering</strong> (<strong>SSR</strong>) is an application architecture in which it is the <em>server'</em>s job to render a single-page application. This is the opposite of <em>client-side rendering</em>, which is the most common and most straightforward way to build a JavaScript application. Server-side rendering is easier on the client's device, because you're only sending a rendered HTML file to them, but it can be difficult to set up compared to a client-side-rendered application.</p>

<p>All of the frameworks covered in this module support server-side rendering as well as client-side rendering. Check out <a href="https://nextjs.org/">Next.js</a> for React, <a href="https://nuxtjs.org/">Nuxt.js</a> for Vue (yes it is confusing, and no, these projects are not related!), <a href="https://github.com/ember-fastboot/ember-cli-fastboot">FastBoot</a> for Ember, and <a href="https://angular.io/guide/universal">Angular Universal</a> for Angular.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: Some SSR solutions are written and maintained by the community, whereas some are "official" solutions provided by the framework's maintainer.</p>
</div>

<h3 id="Static_site_generators">Static site generators</h3>

<p>Static site generators are programs that dynamically generate all the webpages of a multi-page website — including any relevant CSS or JavaScript — so that they can be published in any number of places. The publishing host could be a GitHub pages branch, a Netlify instance, or any private server of your choosing, for example. There are a number of advantages of this approach, mostly around performance (your user's device isn’t building the page with JavaScript; it's already complete) and security (static pages have fewer attack vectors). These sites can still utilize JavaScript where they need to, but they are not <em>dependent</em> upon it. Static site generators take time to learn, just like any other tool, which can be a barrier to your development process.</p>

<p>Static sites can have as few or as many unique pages as you want. Just as frameworks empower you to quickly write client-side JavaScript applications, static site generators allow you a way to quickly create HTML files you would otherwise have written individually. Like frameworks, static site generators allow developers to write components that define common pieces of your web pages, and to compose those components together to create a final page. In the context of static site generators, these components are called <strong>templates</strong>. Web pages built by static site generators can even be home to framework applications: if you want one specific page of your statically-generated website to boot up a React application when your user visits it for example, you can do that.</p>

<p>Static site generators have been around for quite a long time, but they have seen a bit of a revival in the recent history of the web. A handful of powerful options are now available, such as <a href="https://gohugo.io/">Hugo</a>, <a href="https://jekyllrb.com/">Jekyll</a>, <a href="https://www.11ty.dev/">Eleventy</a>, and <a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>

<p>If you'd like to learn more about static site generators on the whole, check out Tatiana Mac's <a href="https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/">Beginner's guide to Eleventy</a>. In the first article of the series, she explains what a static site generator is, and how it relates to other means of publishing web content.</p>

<h2 id="总结">总结</h2>

<p>And that brings us to the end of our introduction to frameworks — we’ve not taught you any code yet, but hopefully we've given you a useful background on why you'd use frameworks in the first place and how to go about choosing one, and made you excited to learn more and get stuck in!</p>

<p>Our next article goes down to a lower level, looking at the specific kinds of features frameworks tend to offer, and why they work like they do.</p>

<p>{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction">Introduction to client-side frameworks</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features">Framework main features</a></li>
 <li>React
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Getting started with React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning">Beginning our React todo list</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components">Componentizing our React app</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state">React interactivity: Events and state</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering">React interactivity: Editing, filtering, conditional rendering</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility">Accessibility in React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">React resources</a></li>
  </ul>
 </li>
 <li>Ember
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started">Getting started with Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization">Ember app structure and componentization</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state">Ember interactivity: Events, classes and state</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer">Ember Interactivity: Footer functionality, conditional rendering</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing">Routing in Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources">Ember resources and troubleshooting</a></li>
  </ul>
 </li>
 <li>Vue
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started">Getting started with Vue</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component">Creating our first Vue component</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists">Rendering a list of Vue components</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models">Adding a new todo form: Vue events, methods, and models</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling">Styling Vue components with CSS</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties">Using Vue computed properties</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering">Vue conditional rendering: editing existing todos</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management">Focus management with Vue refs</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources">Vue resources</a></li>
  </ul>
 </li>
</ul>
