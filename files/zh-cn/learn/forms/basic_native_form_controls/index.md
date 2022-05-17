---
title: 原生表单部件
slug: Learn/Forms/Basic_native_form_controls
translation_of: Learn/Forms/Basic_native_form_controls
original_slug: Learn/HTML/Forms/The_native_form_widgets
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/HTML/Forms/How_to_structure_an_HTML_form", "Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}</div>

<p class="summary">现在，我们将详细研究不同表单部件的功能，查看了哪些选项可用于收集不同类型的数据。这个指南有些详尽，涵盖了所有可用的原生表单小部件。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">预备知识:</th>
   <td>计算机基础知识和对于<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML">HTML的基本理解</a>。</td>
  </tr>
  <tr>
   <th scope="row">目标:</th>
   <td>要了解在浏览器中可以使用什么类型的原生表单小部件来收集数据，以及如何使用HTML实现它们。</td>
  </tr>
 </tbody>
</table>

<p>这里我们将关注浏览器内置的表单部件，但是因为HTML表单仍然相当有限并且实现的特性在不同的浏览器中可能是相当不同的，web开发人员有时会建立自己的表单部件——关于这个的更多想法，参见本模块后面的<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets">如何构建自定义表单部件</a>。</p>

<div class="note">
<p><strong>译者注：</strong>widget在本页面中被统一翻译为部件，但在其他地方可能也被译为组件。</p>
</div>

<div class="note">
<p><strong>注意：</strong>本文中讨论的大多数特性都在浏览器中得到了广泛的支持;我们会注意到例外的情况。如果您想要更准确的细节，您应该参考我们的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms">HTML表单元素参考</a>，特别是我们的广泛的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">&lt;input&gt;</a>类型参考。</p>
</div>

<h2 id="通用属性">通用属性</h2>

<p>大部分用来定义表单小部件的元素都有一些他们自己的属性。然而，在所有表单元素中都有一组通用属性，它们可以对这些小部件进行控制。下面是这些通用属性的列表:</p>

<table>
 <thead>
  <tr>
   <th scope="col">属性名称</th>
   <th scope="col">默认值</th>
   <th scope="col">描述</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>autofocus</code></td>
   <td>(<em>false</em>)</td>
   <td>这个布尔属性允许您指定当页面加载时元素应该自动具有输入焦点，除非用户覆盖它，例如通过键入不同的控件。文档中只有一个与表单相关的元素可以指定这个属性。</td>
  </tr>
  <tr>
   <td><code>disabled</code></td>
   <td>(<em>false</em>)</td>
   <td>
    <p>这个布尔属性表示用户不能与元素交互。如果没有指定这个属性，元素将从包含它的元素继承设置，例如{{HTMLElement("fieldset")}};如果没有包含在设定了<code>disabled</code>属性的元素里，那么这个元素就是可用的。</p>
   </td>
  </tr>
  <tr>
   <td><code>form</code></td>
   <td></td>
   <td>
    <p>小部件与之相关联的表单元素。属性值必需是同个文档中的{{HTMLElement("form")}} 元素的 <code>id</code>属性。理论上，它允许您在{{HTMLElement("form")}}元素之外设置一个表单小部件。然而，在实践中，没有任何支持该特性的浏览器。</p>
   </td>
  </tr>
  <tr>
   <td><code>name</code></td>
   <td></td>
   <td>元素的名称;这是跟表单数据一起提交的。</td>
  </tr>
  <tr>
   <td><code>value</code></td>
   <td></td>
   <td>元素的初始值。</td>
  </tr>
 </tbody>
</table>

<h2 id="文本输入框">文本输入框</h2>

<p>文本输入框 {{htmlelement("input")}} 是最基本的表单小部件。 这是一种非常方便的方式，可以让用户输入任何类型的数据。但是，一些文本字段可以专门用于满足特定的需求。我们已经看到了几个简单的例子。</p>

<div class="note">
<p><strong>注意</strong>: HTML表单文本字段是简单的纯文本输入控件。 这意味着您不能使用它们执行<a href="https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla">富文本编辑</a>(粗体、斜体等)。你遇到的所有富文本编辑器（rich text editors）都是使用HTML、CSS和JavaScript所创建的自定义小部件。</p>
</div>

<p>所有文本框都有一些通用规范：</p>

<ul>
 <li>它们可以被标记为 {{htmlattrxref("readonly","input")}} (用户不能修改输入值)甚至是 {{htmlattrxref("disabled","input")}} (输入值永远不会与表单数据的其余部分一起发送)。</li>
 <li>它们可以有一个 {{htmlattrxref("placeholder","input")}}; 这是文本输入框中出现的文本，用来简略描述输入框的目的。</li>
 <li>它们可以被限制在{{htmlattrxref("size","input")}} (框的物理尺寸) 和 {{htmlattrxref("maxlength","input")}} (可以输入的最大字符数)。</li>
 <li>如果浏览器支持的话，他们可以从<a href="/en-US/docs/HTML/Element/input#attr-spellcheck">拼写检查</a>中获益。</li>
</ul>

<div class="note">
<p><strong>注意：</strong>  {{htmlelement("input")}}元素是如此特别因为它几乎可以是任何东西。通过简单设置 <code>type</code> 属性，它可以彻底的改变，它用于创建大多数类型的表单小部件，包括单行文本字段、没有文本输入的控件、时间和日期控件和按钮。 然而，也有一些例外，比如用来多行输入的 {{htmlelement("textarea")}}。阅读这篇文章时，要注意这些。</p>
</div>

<h3 id="单行文本框">单行文本框</h3>

<p>使用{{htmlattrxref("type","input")}}属性值被设置为<code>text</code> 的{{HTMLElement("input")}}元素创建一个单行文本框（同样的，如果你不提供{{htmlattrxref("type","input")}}属性，<code>text</code> 是默认值）。在你指定的{{htmlattrxref("type","input")}}属性的值在浏览器中是未知的情况下（比如你指定 <code>type="date"</code>，但是浏览器不支持原生日期选择器），属性值<code>text</code>也是备用值。</p>

<div class="note">
<p><strong>注意：</strong> 你可以在Github上的 <a href="https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/single-line-text-fields.html">single-line-text-fields.html</a>找到所有单行文本框类型。(你也可以直接看<a href="https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html">预览版</a>)。</p>
</div>

<p>这是一个基本的单行文本框示例：</p>

<pre class="brush: html notranslate">&lt;input type="text" id="comment" name="comment" value="I'm a text field"&gt;</pre>

<p>单行文本框只有一个真正的约束：如果您输入带有换行符的文本，浏览器会在发送数据之前删除这些换行符。</p>

<p><img alt="Screenshots of single line text fields on several platforms." src="/files/4273/all-single-line-text-field.png" style="height: 235px; width: 655px;"></p>

<p>HTML5通过为{{htmlattrxref("type","input")}}属性增加特殊值增强了基本单行文本框。这些值仍然将{{HTMLElement("input")}}元素转换为单行文本框，但它们为字段添加了一些额外的约束和特性。</p>

<h4 id="E-mail_地址框">E-mail 地址框</h4>

<p>该类型的框将 {{htmlattrxref("type","input")}}属性设置为  <code>email</code> 值：</p>

<pre class="brush: html notranslate">&lt;input type="email" id="email" name="email" multiple&gt;</pre>

<p>当使用 <code>type</code>时， 用户需要在框中输入有效的电子邮件地址；任何其他内容都会导致浏览器在提交表单时显示错误。注意，这是客户端错误验证，由浏览器执行：</p>

<p><img alt="An invalid email input showing the message Please enter an email address." src="https://mdn.mozillademos.org/files/14781/email-invalid.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>通过包括{{htmlattrxref("multiple","input")}}属性，它还可以让用户将多个电子邮件地址输入相同的输入(以逗号分隔)。</p>

<p>在一些设备上(特别是在移动设备上)，可能会出现一个不同的虚拟键盘，更适合输入电子邮件地址。</p>

<div class="note">
<p><strong>注意</strong>: 您可以在<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation">表单数据验证</a>文中找到关于表单验证的更多信息。</p>
</div>

<h4 id="密码框">密码框</h4>

<p>通过设置{{htmlattrxref("type","input")}} 属性值为<code>password</code>来设置该类型框：</p>

<pre class="brush: html notranslate">&lt;input type="password" id="pwd" name="pwd"&gt;</pre>

<p>它不会为输入的文本添加任何特殊的约束，但是它会模糊输入到字段中的值(例如，用点或小行星)，这样它就不能被其他人读取。</p>

<p>请记住，这只是一个用户界面特性;除非你安全地提交你的表单，否则它会以明文发送，这不利于安全——恶意的一方可能会截获你的数据，窃取你的密码、信用卡信息，或者你提交的其他任何东西。保护用户不受此影响的最佳方式是在安全连接上托管任何涉及表单的页面(例如:https://……地址)，使得数据在发送之前就已加密。</p>

<p>现代浏览器认识到在不安全的连接上发送表单数据所带来的安全影响，并且已经实现了警告，以阻止用户使用不安全的表单。有关Firefox实现的更多信息，请参见<a href="/en-US/docs/Web/Security/Insecure_passwords">不安全的密码</a>。</p>

<h4 id="搜索框">搜索框</h4>

<p>通过设置 {{htmlattrxref("type","input")}}属性值为 <code>search</code> 来设置该类型框：</p>

<pre class="brush: html notranslate">&lt;input type="search" id="search" name="search"&gt;</pre>

<p>文本框和搜索框之间的主要区别是浏览器的样式——通常，搜索框是渲染成圆角的，并且/可能给定一个“x”来清除输入的值。然而，还有另外一个值得注意的特性:它们的值可以被自动保存用来在同一站点上的多个页面上自动补全。</p>

<p><img alt="Screenshots of search fields on several platforms." src="/files/4269/all-search-field.png" style="height: 235px; width: 655px;"></p>

<h4 id="电话号码栏：">电话号码栏：</h4>

<p>通过 {{htmlattrxref("type","input")}}属性的 <code>tel</code> 值设置该类型框：</p>

<pre class="brush: html notranslate">&lt;input type="tel" id="tel" name="tel"&gt;</pre>

<p>由于世界范围内各种各样的电话号码格式，这种类型的字段不会对用户输入的值执行任何限制(包括字母，等等)。这主要是在语义上的区分，尽管在一些设备上(特别是在移动设备上)，可能会出现一个不同的虚拟键盘，更适合输入电话号码。</p>

<h4 id="URL_栏">URL 栏</h4>

<p>通过{{htmlattrxref("type","input")}}属性的<code>url</code> 值设置该类型框：</p>

<pre class="brush: html notranslate">&lt;input type="url" id="url" name="url"&gt;</pre>

<p>它为字段添加了特殊的验证约束，如果输入无效的url，浏览器就会报告错误。</p>

<div class="note"><strong>注意：</strong>URL格式良好并不一定意味着它引用了一个实际存在的位置。</div>

<div class="note">
<p><strong>注意：</strong>有特殊约束并出错了的输入框可以防止表单被发送；此外，还可以将它们设置为使错误更清晰。我们将在<a href="/en-US/docs/HTML/Forms/Data_form_validation">数据表单验证</a>中详细讨论这个问题。</p>
</div>

<h3 id="多行文本框">多行文本框</h3>

<p>多行文本框专指使用 {{HTMLElement("textarea")}}元素，而不是使用{{HTMLElement("input")}} 元素。</p>

<pre class="brush: html notranslate">&lt;textarea cols="30" rows="10"&gt;&lt;/textarea&gt;</pre>

<p>textarea和常规的单行文本字段之间的主要区别是，允许用户输入包含硬换行符(即按回车)的文本。</p>

<p><img alt="Screenshots of multi-lines text fields on several platforms." src="/files/4271/all-multi-lines-text-field.png" style="height: 330px; width: 745px;"></p>

<div class="note">
<p><strong>注意：</strong>你可以在Github上的<a href="https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/multi-line-text-field.html">multi-line-text-field.html</a>看到本例（你也可以看<a href="https://mdn.github.io/learning-area/html/forms/native-form-widgets/multi-line-text-field.html">预览版</a>）。注意到在大多数浏览器中，文本区域在右下角有一个拖放操作，允许用户调整它的大小。这种调整能力可以通过使用<a href="/en-US/docs/Learn/CSS">CSS</a>设置文本区域的{{cssxref("resize")}}性质为 <code>none</code> 来关闭。</p>
</div>

<p>{{htmlelement("textarea")}} 还接受了一些额外的属性，以控制它在几行代码中呈现的效果 (除此以外还有其他几个)：</p>

<p><strong style="font-style: inherit; font-weight: 700;">{{HTMLElement("textarea")}} 元素属性</strong></p>

<table>
 <thead>
  <tr>
   <th scope="col">属性名</th>
   <th scope="col">默认值</th>
   <th scope="col">描述</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{htmlattrxref("cols","textarea")}}</td>
   <td><code>20</code></td>
   <td>文本控件的可见宽度，平均字符宽度。</td>
  </tr>
  <tr>
   <td>{{htmlattrxref("rows","textarea")}}</td>
   <td></td>
   <td>控制的可见文本行数。</td>
  </tr>
  <tr>
   <td>{{htmlattrxref("wrap","textarea")}}</td>
   <td><code>soft</code></td>
   <td>表示控件是如何包装文本的。可能的值：<code>hard</code> 或 <code>soft</code></td>
  </tr>
 </tbody>
</table>

<p>注意，{{HTMLElement("textarea")}}元素与{{HTMLElement("input")}}元素的编写略有不同。{{HTMLElement("input")}}元素是一个空元素，这意味着它不能包含任何子元素。另一方面，{{HTMLElement("textarea")}}元素是一个常规元素，可以包含文本内容的子元素。</p>

<p>这里有两个关键点需要注意：</p>

<ul>
 <li>如果您想为{{HTMLElement("input")}}元素定义一个默认值，那么您必须使用<code>value</code>属性;另一方面，对于{{HTMLElement("textarea")}}元素，只需要将默认的文本放在起始标记和{{HTMLElement("textarea")}}的结束标记之间。</li>
 <li>因为它的本质， {{HTMLElement("textarea")}}元素只接受文本内容；这意味着将任何HTML内容放入{{HTMLElement("textarea")}}中都呈现为纯文本内容。</li>
</ul>

<h2 id="下拉内容">下拉内容</h2>

<p>下拉窗口小部件是一种简单的方法，可以让用户选择众多选项中的一个，而不需要占用用户界面的太多空间。HTML有两种类型的下拉内容:<strong>select box</strong>和<strong>autocomplete box</strong>。在这两种情况下，交互都是相同的——一旦控件被激活，浏览器就会显示用户可以选择的值列表。</p>

<div class="note">
<p><strong>注意：</strong>你可以在Github上的<a href="https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/drop-down-content.html">drop-down-content.html</a>看到本例（你也可以看<a href="https://mdn.github.io/learning-area/html/forms/native-form-widgets/drop-down-content.html">预览版</a>）。</p>
</div>

<h3 id="选择框">选择框</h3>

<p>一个选择框是用{{HTMLElement("select")}}元素创建的，其中有一个或多个{{HTMLElement("option")}}元素作为子元素，每个元素都指定了其中一个可能的值。</p>

<pre class="brush: html notranslate">&lt;select id="simple" name="simple"&gt;
  &lt;option&gt;Banana&lt;/option&gt;
  &lt;option&gt;Cherry&lt;/option&gt;
  &lt;option&gt;Lemon&lt;/option&gt;
&lt;/select&gt;</pre>

<p>如果需要，可以使用{{htmlattrxref("selected","option")}}属性在所需的{{HTMLElement("option")}}元素上设置选择框的默认值---在页面加载时会默认选择该选项。{{HTMLElement("option")}}元素也可以嵌套在{{HTMLElement("optgroup")}}元素中，以创建视觉关联的组值：</p>

<pre class="brush: html notranslate">&lt;select id="groups" name="groups"&gt;
  &lt;optgroup label="fruits"&gt;
    &lt;option&gt;Banana&lt;/option&gt;
    &lt;option selected&gt;Cherry&lt;/option&gt;
    &lt;option&gt;Lemon&lt;/option&gt;
  &lt;/optgroup&gt;
  &lt;optgroup label="vegetables"&gt;
    &lt;option&gt;Carrot&lt;/option&gt;
    &lt;option&gt;Eggplant&lt;/option&gt;
    &lt;option&gt;Potato&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;/select&gt;</pre>

<p><img alt="Screenshots of single line select box on several platforms." src="/files/4517/all-select.png" style="height: 636px; width: 887px;"></p>

<p>如果一个{{HTMLElement("option")}}元素设置了<code>value</code>属性，那么当提交表单时该属性的值就会被发送。如果忽略了<code>value</code>属性，则使用{{HTMLElement("option")}}元素的内容作为选择框的值。</p>

<p>在{{HTMLElement("optgroup")}}元素中，<code>label</code>属性显示在值之前，但即使它看起来有点像一个选项，它也不是可选的。</p>

<h3 id="多选选择框">多选选择框</h3>

<p>默认情况下，选择框只允许用户选择一个值。通过将{{htmlattrxref("multiple","select")}}属性添加到{{HTMLElement("select")}}元素，您可以允许用户通过操作系统提供的默认机制来选择几个值。 (如， 同时按下 <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> 并点击多个值).</p>

<p>注意：在多个选项选择框的情况下，选择框不再显示值为下拉内容——相反，它们都显示在一个列表中。</p>

<pre class="brush: html notranslate">&lt;select multiple id="multi" name="multi"&gt;
  &lt;option&gt;Banana&lt;/option&gt;
  &lt;option&gt;Cherry&lt;/option&gt;
  &lt;option&gt;Lemon&lt;/option&gt;
&lt;/select&gt;</pre>

<p><img alt="Screenshots of multi-lines select box on several platforms." src="/files/4559/all-multi-lines-select.png" style="height: 531px; width: 734px;"></p>

<div class="note"><strong>注意：</strong>所有支持 {{HTMLElement("select")}} 元素的浏览器也支持 {{htmlattrxref("multiple","select")}} 。</div>

<h3 id="自动补全输入框">自动补全输入框</h3>

<p>您可以使用{{HTMLElement("datalist")}}元素来为表单小部件提供建议的、自动完成的值，并使用一些{{HTMLElement("option")}}子元素来指定要显示的值。</p>

<p>然后使用{{htmlattrxref("list","input")}}属性将数据列表绑定到一个文本框(通常是一个 <code>&lt;input&gt;</code> 元素)。</p>

<p>一旦数据列表与表单小部件相关联，它的选项用于自动完成用户输入的文本;通常，这是作为一个下拉框提供给用户的，匹配在输入框中输入了的内容。</p>

<pre class="brush: html notranslate">&lt;label for="myFruit"&gt;What's your favorite fruit?&lt;/label&gt;
&lt;input type="text" name="myFruit" id="myFruit" list="mySuggestion"&gt;
&lt;datalist id="mySuggestion"&gt;
  &lt;option&gt;Apple&lt;/option&gt;
  &lt;option&gt;Banana&lt;/option&gt;
  &lt;option&gt;Blackberry&lt;/option&gt;
  &lt;option&gt;Blueberry&lt;/option&gt;
  &lt;option&gt;Lemon&lt;/option&gt;
  &lt;option&gt;Lychee&lt;/option&gt;
  &lt;option&gt;Peach&lt;/option&gt;
  &lt;option&gt;Pear&lt;/option&gt;
&lt;/datalist&gt;</pre>

<div class="note"><strong>注意：</strong> 根据<a href="http://www.w3.org/TR/html5/common-input-element-attributes.html#attr-input-list">HTML规范</a>，{{htmlattrxref("list","input")}} 属性和{{HTMLElement("datalist")}}元素元素可以用于任何需要用户输入的小部件。但是，除了文本控件外(例如颜色或日期)，还不清楚它会如何工作，不同的浏览器在不同的情况下会有不同的表现。正因为如此，除了文本字段以外，要小心使用这个特性。</div>

<div><img alt="Screenshots of datalist on several platforms." src="/files/4593/all-datalist.png" style="height: 329px; width: 437px;"></div>



<h4 id="数据列表支持和后备">数据列表支持和后备</h4>

<p>{{HTMLElement("datalist")}}元素是HTML表单的最新补充，因此浏览器的支持比我们之前看到的要少一些。最值得注意的是，它在版本小于10的IE中不受支持，同时在版本小于12的Safari中不受支持。</p>

<p>为了处理这个问题，这里有一个小技巧，可以为这些浏览器提供一个不错的备用：</p>

<pre class="brush:html; notranslate">&lt;label for="myFruit"&gt;What is your favorite fruit? (With fallback)&lt;/label&gt;
&lt;input type="text" id="myFruit" name="fruit" list="fruitList"&gt;

&lt;datalist id="fruitList"&gt;
  &lt;label for="suggestion"&gt;or pick a fruit&lt;/label&gt;
  &lt;select id="suggestion" name="altFruit"&gt;
    &lt;option&gt;Apple&lt;/option&gt;
    &lt;option&gt;Banana&lt;/option&gt;
    &lt;option&gt;Blackberry&lt;/option&gt;
    &lt;option&gt;Blueberry&lt;/option&gt;
    &lt;option&gt;Lemon&lt;/option&gt;
    &lt;option&gt;Lychee&lt;/option&gt;
    &lt;option&gt;Peach&lt;/option&gt;
    &lt;option&gt;Pear&lt;/option&gt;
  &lt;/select&gt;
&lt;/datalist&gt;
</pre>

<p>支持{{HTMLElement("datalist")}}元素的浏览器将忽略所有不是{{HTMLElement("option")}}元素的元素，并按照预期工作。另一方面，不支持{{HTMLElement("datalist")}}元素的浏览器将显示标签和选择框。当然，还有其他方法可以处理对{{HTMLElement("datalist")}}元素支持的不足，但这是最简单的(其他方法往往需要JavaScript)。</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Safari 6</th>
   <td><img alt="Screenshot of the datalist element fallback with Safari on Mac OS" src="/files/4583/datalist-safari.png" style="height: 32px; width: 495px;"></td>
  </tr>
  <tr>
   <th scope="row">Firefox 18</th>
   <td><img alt="Screenshot of the datalist element with Firefox on Mac OS" src="/files/4581/datalist-firefox-macos.png" style="height: 102px; width: 353px;"></td>
  </tr>
 </tbody>
</table>

<h2 id="可选中项">可选中项</h2>

<p>可选中项是可以通过单击它们来更改状态的小部件。有两种可选中项：复选框和单选按钮。两者都使用{{htmlattrxref("checked","input")}}属性，以指示该部件的默认状态: "选中"或"未选中"。</p>

<p>值得注意的是，这些小部件与其他表单小部件不一样。对于大多数表单部件，一旦表单提交，所有具有{{htmlattrxref("name","input")}}属性的小部件都会被发送，即使没有任何值被填。对于可选中项，只有在勾选时才发送它们的值。如果他们没有被勾选，就不会发送任何东西，甚至连他们的名字也没有。</p>

<div class="note">
<p><strong>注意</strong>: 你可以在Github上看到 <a href="https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/checkable-items.html">checkable-items.html</a> (你也可以看<a href="https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html">预览版</a>)。</p>
</div>

<p>为了获得最大的可用性和可访问性，建议您在{{htmlelement("fieldset")}}中包围每个相关项目的列表，并使用{{htmlelement("legend")}}提供对列表的全面描述。每个单独的{{htmlelement("label")}}/{{htmlelement("input")}}元素都应该包含在它自己的列表项中(或者类似的)。正如在示例中显示的。</p>

<p>您还需要为这些类型的输入提供<code>value</code>属性，如果您想让它们具有意义——如果没有提供任何值，则复选框和单选按钮被赋予一个 <code>on</code>值。</p>

<h3 id="复选框">复选框</h3>

<p>使用{{htmlattrxref("type","input")}}属性值为<code>checkbox</code>的 {{HTMLElement("input")}}元素来创建一个复选框。</p>

<pre class="brush: html notranslate">&lt;input type="checkbox" checked id="carrots" name="carrots" value="carrots"&gt;
</pre>

<p>包含<code>checked</code>属性使复选框在页面加载时自动被选中。</p>

<p><img alt="Screenshots of check boxes on several platforms." src="/files/4595/all-checkbox.png" style="height: 198px; width: 352px;"></p>

<h3 id="单选按钮">单选按钮</h3>

<p>使用{{htmlattrxref("type","input")}}属性值为<code>radio</code>的 {{HTMLElement("input")}}元素来创建一个单选按钮。</p>

<pre class="brush: html notranslate">&lt;input type="radio" checked id="soup" name="meal"&gt;</pre>

<p>几个单选按钮可以连接在一起。如果它们的{{htmlattrxref("name","input")}}属性共享相同的值，那么它们将被认为属于同一组的按钮。同一组中只有一个按钮可以同时被选；这意味着当其中一个被选中时，所有其他的都将自动未选中。如果没有选中任何一个，那么整个单选按钮池就被认为处于未知状态，并且没有以表单的形式发送任何值。</p>

<pre class="brush: html notranslate">&lt;fieldset&gt;
  &lt;legend&gt;What is your favorite meal?&lt;/legend&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;label for="soup"&gt;Soup&lt;/label&gt;
      &lt;input type="radio" checked id="soup" name="meal" value="soup"&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label for="curry"&gt;Curry&lt;/label&gt;
      &lt;input type="radio" id="curry" name="meal" value="curry"&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label for="pizza"&gt;Pizza&lt;/label&gt;
      &lt;input type="radio" id="pizza" name="meal" value="pizza"&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/fieldset&gt;</pre>

<p><img alt="Screenshots of radio buttons on several platforms." src="/files/4597/all-radio.png" style="height: 198px; width: 352px;"></p>

<h2 id="按钮">按钮</h2>

<p>在HTML表单中，有三种按钮：</p>

<dl>
 <dt>Submit</dt>
 <dd>将表单数据发送到服务器。对于{{HTMLElement("button")}} 元素, 省略 <code>type</code> 属性 (或是一个无效的 <code>type</code> 值) 的结果就是一个提交按钮.</dd>
 <dt>Reset</dt>
 <dd>将所有表单小部件重新设置为它们的默认值。</dd>
 <dt>Anonymous</dt>
 <dd>没有自动生效的按钮，但是可以使用JavaScript代码进行定制。</dd>
</dl>

<div class="note">
<p><strong>注意</strong>: 你可以在Github上看到<a href="https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/button-examples.html">button-examples.html</a> (你也可以看<a href="https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html">预览版</a>)。</p>
</div>

<p>使用 {{HTMLElement("button")}}元素或者{{HTMLElement("input")}}元素来创建一个按钮。{{htmlattrxref("type","input")}}属性的值指定显示什么类型的按钮。</p>

<h3 id="submit">submit</h3>

<pre class="brush: html notranslate">&lt;button type="submit"&gt;
    This a &lt;br&gt;&lt;strong&gt;submit button&lt;/strong&gt;
&lt;/button&gt;

&lt;input type="submit" value="This is a submit button"&gt;</pre>

<h3 id="reset">reset</h3>

<pre class="brush: html notranslate">&lt;button type="reset"&gt;
    This a &lt;br&gt;&lt;strong&gt;reset button&lt;/strong&gt;
&lt;/button&gt;

&lt;input type="reset" value="This is a reset button"&gt;</pre>

<h3 id="button">button</h3>

<pre class="brush: html notranslate">&lt;button type="button"&gt;
    This an &lt;br&gt;&lt;strong&gt;anonymous button&lt;/strong&gt;
&lt;/button&gt;

&lt;input type="button" value="This is an anonymous button"&gt;</pre>

<p>不管您使用的是{{HTMLElement("button")}}元素还是{{HTMLElement("input")}}元素，按钮的行为都是一样的。然而，有一些显著的不同之处：</p>

<ul>
 <li>从示例中可以看到，{{HTMLElement("button")}}元素允许您在它们的标签中使用HTML内容，这些内容被插入到打开和关闭<code>&lt;button&gt;</code> 标签中。另一方面，{{HTMLElement("input")}}元素是空元素;它们的标签插入在<code>value</code>属性中，因此只接受纯文本内容。</li>
 <li>使用{{HTMLElement("button")}}元素，可以有一个不同于按钮标签的值(通过设置<code>value</code>中的属性值)。这在IE 8之前的版本中是不可靠的。</li>
</ul>

<p><img alt="Screenshots of buttons on several platforms." src="/files/4599/all-buttons.png" style="height: 235px; width: 464px;"></p>

<p>从技术上讲，使用{{HTMLElement("button")}}元素或{{HTMLElement("input")}}元素定义的按钮几乎没有区别。唯一值得注意的区别是按钮本身的标签。在{{HTMLElement("input")}}元素中，标签只能是字符数据，而在{{HTMLElement("button")}}元素中，标签可以是HTML，因此可以相应地进行样式化。</p>

<h2 id="高级表单部件">高级表单部件</h2>

<p>在本节中，我们将介绍那些让用户输入复杂或不寻常数据的小部件。这包括精确的或近似的数字，日期和时间，或颜色。</p>

<div class="note">
<p><strong>注意</strong>: 你可以在Github上看到<a href="https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/advanced-examples.html">advanced-examples.html</a> (你也可以看<a href="https://mdn.github.io/learning-area/html/forms/native-form-widgets/advanced-examples.html">预览版</a>)。</p>
</div>

<h3 id="数字">数字</h3>

<p>用于数字的小部件是用{{htmlattrxref("type","input")}}属性设置为<code>number</code>{{HTMLElement("input")}}的元素创建的。这个控件看起来像一个文本框，但是只允许浮点数，并且通常提供一些按钮来增加或减少小部件的值。</p>

<p>也可以：</p>

<ul>
 <li>通过设置{{htmlattrxref("min","input")}}和{{htmlattrxref("max","input")}}属性来约束该值。</li>
 <li>通过设置{{htmlattrxref("step","input")}}属性来指定增加和减少按钮更改小部件的步进值大小。</li>
</ul>

<h4 id="例子">例子</h4>

<pre class="brush: html notranslate">&lt;input type="number" name="age" id="age" min="1" max="10" step="2"&gt;</pre>

<p>这将创建一个数字小部件，其值被限制为1到10之间的任何值，而其增加和减少按钮的步进值将更改为2。</p>

<p>在10以下的Internet Explorer版本中不支持<code>number</code> 输入。</p>

<h3 id="滑块">滑块</h3>

<p>另一种选择数字的方法是使用滑块。从视觉上讲，滑块没有文本字段准确，因此它们被用来选择一个确切值并不重要的数字。</p>

<p>滑块是通过把{{HTMLElement("input")}}元素的{{htmlattrxref("type","input")}}属性值设置为<code>range</code>来创建的。正确配置滑块是很重要的；为了达到这个目的，我们强烈建议您设置{{htmlattrxref("min","input")}}、{{htmlattrxref("max","input")}}和{{htmlattrxref("step","input")}}属性。</p>

<h4 id="例子_2">例子</h4>

<pre class="brush: html notranslate">&lt;input type="range" name="beans" id="beans" min="0" max="500" step="10"&gt;</pre>

<p>这个例子创建了一个滑块，它可能的值在0到500之间，而它的递增/递减按钮以+10和-10来改变值。</p>

<p>滑块的一个问题是，它们不提供任何形式的视觉反馈，以了解当前的值是什么。您需要使用JavaScript来添加这一点，但这相对来说比较容易。在本例中，我们添加了一个空的{{htmlelement("span")}}元素，其中我们将写入滑块的当前值，并随着更改实时更新它。</p>

<pre class="brush: html notranslate">&lt;label for="beans"&gt;How many beans can you eat?&lt;/label&gt;
&lt;input type="range" name="beans" id="beans" min="0" max="500" step="10"&gt;
&lt;span class="beancount"&gt;&lt;/span&gt;</pre>

<p>可以使用一些简单的JavaScript实现</p>

<pre class="brush: js notranslate">var beans = document.querySelector('#beans');
var count = document.querySelector('.beancount');

count.textContent = beans.value;

beans.oninput = function() {
  count.textContent = beans.value;
}</pre>

<p>这里我们将对范围输入值和span的引用存储在两个变量里，然后我们立即将span的<code><a href="/en-US/docs/Web/API/Node/textContent">textContent</a></code>设置为输入的当前<code>value</code>。最后，我们设置了一个<code>oninput</code>事件处理程序，以便每次移动范围滑块时，都会将span <code>textContent</code>更新为新的输入值。</p>

<p>在10以下的Internet Explorer版本中不支持<code>range</code> 。</p>

<h3 id="日期时间选择器">日期时间选择器</h3>

<p>对于web开发人员来说，收集日期和时间值一直是一场噩梦。HTML5通过提供一种特殊的控制来处理这种特殊的数据，从而带来了一些增强。</p>

<p>使用{{HTMLElement("input")}}元素和一个适当的值的{{htmlattrxref("type","input")}}属性来创建日期和时间控制，这取决于您是否希望收集日期、时间或两者都。</p>

<h4 id="本地时间"><code>本地时间</code></h4>

<p>这将创建一个小部件来显示和选择一个日期，但是没有任何特定的时区信息。</p>

<pre class="brush: html notranslate">&lt;input type="datetime-local" name="datetime" id="datetime"&gt;</pre>

<h4 id="月"><code>月</code></h4>

<p>这就创建了一个小部件来显示和挑选一个月。</p>

<pre class="brush: html notranslate">&lt;input type="month" name="month" id="month"&gt;</pre>

<h4 id="时间"><font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: #eeeeee;">时间</span></font></h4>

<p>这将创建一个小部件来显示并选择一个时间值。</p>

<pre class="brush: html notranslate">&lt;input type="time" name="time" id="time"&gt;</pre>

<h4 id="星期"><code>星期</code></h4>

<p>这将创建一个小部件来显示并挑选一个星期号和它的年份。</p>

<pre class="brush: html notranslate">&lt;input type="week" name="week" id="week"&gt;</pre>

<p>所有日期和时间控制都可以使用{{htmlattrxref("min","input")}}和{{htmlattrxref("max","input")}}属性来约束。</p>

<pre class="brush: html notranslate">&lt;label for="myDate"&gt;When are you available this summer?&lt;/label&gt;
&lt;input type="date" name="myDate" min="2013-06-01" max="2013-08-31" id="myDate"&gt;</pre>

<p>警告——日期和时间窗口小部件仍然很不受支持。目前，Chrome、Edge和Opera都支持它们，但IE浏览器没有支持，Firefox和Safari对这些都没有太大的支持。</p>

<h3 id="拾色器">拾色器</h3>

<p>颜色总是有点难处理。有很多方式来表达它们:RGB值(十进制或十六进制)、HSL值、关键字等等。颜色小部件允许用户在文本和可视的方式中选择颜色。</p>

<p>一个颜色小部件是使用{{htmlattrxref("type","input")}}属性设置为值<code>color</code>{{HTMLElement("input")}}的元素创建的。</p>

<pre class="brush: html notranslate">&lt;input type="color" name="color" id="color"&gt;</pre>

<p>警告——并不是所有浏览器都支持拾色器。IE中没有支持，Safari目前也不支持它。其他主要的浏览器都支持它。</p>

<h2 id="其他小部件">其他小部件</h2>

<p>还有一些其他的小部件由于它们非常特殊的行为而不能很容易地分类，但是它们仍然非常有用。</p>

<div class="note">
<p><strong>注意</strong>: 你可以在Github上看到<a href="https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/other-examples.html">other-examples.html</a>(你也可以看<a href="https://mdn.github.io/learning-area/html/forms/native-form-widgets/other-examples.html">预览版</a>)。</p>
</div>

<h3 id="文件选择器">文件选择器</h3>

<p>HTML表单能够将文件发送到服务器；在<a href="/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data">发送和检索表单数据</a>的文章中详细描述了这个特定的操作。文件选择器小部件是用户如何选择一个或多个文件来发送的。</p>

<p>要创建一个文件选择器小部件，您可以使用{{HTMLElement("input")}}元素，将它的{{htmlattrxref("type","input")}}属性设置为<code>file</code>。被接受的文件类型可以使用{{htmlattrxref("accept","input")}}属性来约束。此外，如果您想让用户选择多个文件，那么可以通过添加{{htmlattrxref("multiple","input")}}属性来实现。</p>

<h4 id="例子_3">例子</h4>

<p>在本例中，创建一个文件选择器，请求图形图像文件。在本例中，允许用户选择多个文件。</p>

<pre class="brush: html notranslate">&lt;input type="file" name="file" id="file" accept="image/*" multiple&gt;</pre>

<h3 id="隐藏内容">隐藏内容</h3>

<p>有时候，由于为了方便技术原因，有些数据是用表单发送的，但不显示给用户。要做到这一点，您可以在表单中添加一个不可见的元素。要做到这一点，需要使用{{HTMLElement("input")}}将它的{{htmlattrxref("type","input")}}属性设置为<code>hidden</code>值。</p>

<p>如果您创建了这样一个元素，就需要设置它的<code>name</code>和<code>value</code>属性：</p>

<pre class="brush: html notranslate">&lt;input type="hidden" id="timestamp" name="timestamp" value="1286705410"&gt;</pre>

<h3 id="图像按钮">图像按钮</h3>

<p>图像按钮控件是一个与{{HTMLElement("img")}}元素完全相同的元素，除了当用户点击它时，它的行为就像一个提交按钮(见上面)。</p>

<p>图像按钮是使用{{htmlattrxref("type","input")}}属性值设置为<code>image</code>{{HTMLElement("input")}}的元素创建的。这个元素支持与{{HTMLElement("img")}}元素相同的属性，和其他表单按钮支持的所有属性。</p>

<pre class="brush: html notranslate">&lt;input type="image" alt="Click me!" src="my-img.png" width="80" height="30" /&gt;</pre>

<p>如果使用图像按钮来提交表单，这个小部件不会提交它的值；相反，提交的是在图像上单击处的X和Y坐标(坐标是相对于图像的，这意味着图像的左上角表示坐标0，0)，坐标被发送为两个键/值对：</p>

<ul>
 <li>X值键是{{htmlattrxref("name","input")}}属性的值，后面是字符串“.x”。</li>
 <li>Y值键是{{htmlattrxref("name","input")}}属性的值，后面是字符串“.y”。</li>
</ul>

<p>例如，当您点击这个小部件的图像时，您将被发送到一个URL，如下所显示的</p>

<pre class="notranslate">http://foo.com?pos.x=123&amp;pos.y=456</pre>

<p>这是构建“热图”的一种非常方便的方式。如何发送和检索这些值在<a href="/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data">发送和检索表单数据</a>文章中详细说明。</p>

<h3 id="仪表和进度条">仪表和进度条</h3>

<p>仪表和进度条是数值的可视化表示。</p>

<h4 id="进度条">进度条</h4>

<p>一个进度条表示一个值，它会随着时间的变化而变化到最大的值，这个值由{{htmlattrxref("max","progress")}}属性指定。这样的一个bar是使用{{ HTMLElement("progress")}}元素创建的。</p>

<pre class="brush: html notranslate">&lt;progress max="100" value="75"&gt;75/100&lt;/progress&gt;</pre>

<p>这是为了实现任何需要进度报告的内容，例如下载的总文件的百分比，或者问卷中填写的问题的数量。</p>

<p>{{HTMLElement("progress")}}元素中的内容用于不支持该元素的浏览器的回退，以及辅助技术对其朗读。</p>

<h4 id="仪表">仪表</h4>

<p>一个仪表表示一个固定值，这个值由一个{{htmlattrxref("min","meter")}}和一个{{htmlattrxref("max","meter")}}值所界定。这个值是作为一个条形显示的，并且为了知道这个工具条是什么样子的，我们将这个值与其他一些设置值进行比较</p>

<ul>
 <li> {{htmlattrxref("low","meter")}} 和 {{htmlattrxref("high","meter")}} 值范围划分为三个部分：
  <ul>
   <li>该范围的较低部分是在{{htmlattrxref("min","meter")}}和{{htmlattrxref("low","meter")}}值(包括那些值)之间。</li>
   <li>该范围的中间部分是在{{htmlattrxref("low","meter")}}和{{htmlattrxref("high","meter")}}值之间(不包括那些值)。</li>
   <li>该范围的较高部分是在{{htmlattrxref("high","meter")}}和{{htmlattrxref("max","meter")}}值(包括那些值)之间。</li>
  </ul>
 </li>
 <li>{{htmlattrxref("optimum","meter")}}值定义了{{HTMLElement("meter")}}元素的最优值。在与htmlattrxref(“low”、“meter”)和{{htmlattrxref("high","meter")}}值的联合中，它定义了该范围的哪个部分是优先的：
  <ul>
   <li>如果{{htmlattrxref("optimum","meter")}}值在较低的范围内，则较低的范围被认为是首选项，中等范围被认为是一般的，而较高的范围被认为是最坏的部分。</li>
   <li>如果{{htmlattrxref("optimum","meter")}}值在该范围的中等部分，则较低的范围被认为是一个一般的，中等范围被认为是优先的部分，而较高的范围也被认为是平均值。</li>
   <li>如果{{htmlattrxref("optimum","meter")}}值在较高的范围内，则较低的范围被认为是最坏的部分，中等范围被认为是一般的部分，较高的范围被认为是优先的部分。</li>
  </ul>
 </li>
</ul>

<p>所有实现{{HTMLElement("meter")}}元素的浏览器都使用这些值来改变米尺的颜色。</p>

<ul>
 <li>如果当前值位于该范围的优先部分，则该条是绿色的。</li>
 <li>如果当前值位于该范围的平均部分，则该条是黄色的。</li>
 <li>如果当前值处于最糟糕的范围，则该条是红色的。</li>
</ul>

<p>这样的一个工具栏是使用{{HTMLElement("meter")}}元素创建的。这是用于实现任何类型的仪表，例如一个显示磁盘上使用的总空间的条，当它开始满时，它会变成红色。</p>

<pre class="brush: html notranslate">&lt;meter min="0" max="100" value="75" low="33" high="66" optimum="50"&gt;75&lt;/meter&gt;</pre>

<p>{{HTMLElement("meter")}}元素中的内容是不支持该元素的浏览器的回退，以及辅助技术对其发出的声音。</p>

<p>对进度条和仪表的支持是相当不错的，在Internet Explorer中没有支持，但是其他浏览器都可以很好的支持它。</p>

<h2 id="总结">总结</h2>

<p>正如您在上面看到的，有许多不同类型的可用表单元素——您不需要一次性记住所有细节，可以随时返回本文查看详细信息。</p>

<h2 id="另见">另见</h2>

<p>要深入了解不同的表单小部件，您需要了解一些有用的外部资源:</p>

<ul>
 <li><a href="http://wufoo.com/html5/" rel="external">The Current State of HTML5 Forms</a> by Wufoo</li>
 <li><a href="http://www.quirksmode.org/html5/inputs.html" rel="external">HTML5 Tests - inputs</a> on Quirksmode (also <a href="http://www.quirksmode.org/html5/inputs_mobile.html" rel="external">available for mobile</a> browsers)</li>
</ul>

<p>{{PreviousMenuNext("Learn/HTML/Forms/How_to_structure_an_HTML_form", "Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}</p>
