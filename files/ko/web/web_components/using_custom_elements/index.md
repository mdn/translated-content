---
title: 커스텀 엘리먼트 사용하기
slug: Web/Web_Components/Using_custom_elements
tags:
  - Classes
  - Guide
  - HTML
  - Web Components
translation_of: Web/Web_Components/Using_custom_elements
---
<div>{{DefaultAPISidebar("Web Components")}}</div>

<p class="summary">웹 컴포넌트 표준의 주요 기능 중 하나는 HTML 페이지에 커스텀 페이지 기능을 함께 제공하는 엘리먼트의 길고 중첩된 묶음을 만드는 것보다 사용자의 기능이 캡슐화된 커스텀 엘리먼트를 생성하는 기능입니다. 이 문서는 HTML 커스텀 엘리먼트의 사용을 소개합니다.</p>

<div class="note">
<p><strong>노트</strong>: 커스텀 엘리먼트는 크롬과 오페라에서 기본으로 제공됩니다. 최근에는 사용자가 두 브라우저에서  <code>dom.webcomponents.shadowdom.enabled</code> 과 <code>dom.webcomponents.customelements.enabled</code> 를 <code>true</code> 로 설정하면 사용가능합니다. 파이어폭스는 버전 60/61에서 기본으로 사용할 수 있도록 계획되었습니다. 사파리는 지금까지 <a href="https://w3c.github.io/webcomponents/spec/custom/#autonomous-custom-element">Autonomous custom elements</a>만을 제공하고 엣지 또한 잘 구현되어 있습니다.</p>
</div>

<h2 id="중요내용_보기">중요내용 보기</h2>

<p>웹 document의 커스텀 엘리먼트의 컨트롤러는 {{domxref("CustomElementRegistry")}} 오브젝트입니다. 이 오브젝트는 사용자가 페이지에서 커스텀 엘리먼트를 등록하도록 하며 등록된 커스텀 컴포넌트의 정보 등을 리턴합니다.</p>

<p>페이지에 커스텀 엘리먼트를 등록하려면 {{domxref("CustomElementRegistry.define()")}} 메소드를 사용하십시오. 이 메소드는 다음과 같은 인자들을 사용합니다. </p>

<ul>
 <li>{{domxref("DOMString")}} 은 사용자가 엘리먼트에게 전달하려는 이름을 나타냅니다. 커스텀 엘리먼트 이름들은 <a href="https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name">dash('-')가 포함된 이름을 사용하도록</a> 주의하십시오. 이 이름들은 한 단어가 될 수 없습니다. (예 : custom-my-element)  </li>
 <li>엘리먼트의 행위가 정의된 <a href="/en-US/docs/Web/JavaScript/Reference/Classes">class</a> 오브젝트.</li>
 <li>선택적으로, 커스텀 엘리먼트는 특정 내장 엘리먼트를 상속받도록 지정할 수 있는 옵션 객체   <code>extends</code> 속성을 포함합니다.</li>
</ul>

<p>예를 들면, 우리는 커스텀 <a href="https://mdn.github.io/web-components-examples/word-count-web-component/">word-count element</a> 를 아래와 같이 정의할 수 있습니다 :</p>

<pre class="brush: js notranslate">customElements.define('word-count', WordCount, { extends: 'p' });</pre>

<p>이 엘리먼트는 <code>word-count</code> 로 불리며 클래스 오브젝트는 <code>WordCount</code> 입니다. 또한 {{htmlelement("p")}} 엘리먼트를 상속받습니다.</p>

<p>커스텀 엘리먼트의 클래스 오브젝트는 표준 ES 2015 클래스 문법으로 작성됩니다. 예를 들면, <code>WordCount</code> 는 다음과 같은 구조입니다 :</p>

<pre class="brush: js notranslate">class WordCount extends HTMLParagraphElement {
  constructor() {
    // 항상 생성자에서 super는 처음으로 호출됩니다
    super();

    // 엘리먼트의 기능들은 여기에 작성합니다.

    ...
  }
}</pre>

<p>위의 예제는 매우 간단하지만, 더 많은 것들을 할 수 있습니다. 특정 지점에서 실행되는 생성자 내부에서 특정 지점에서 실행하는 생명주기 콜백을 정의할 수 있습니다. 예를 들면, <code>connectedCallback</code> 은 커스텀 엘리먼트가 document의 DOM에 연결될 때마다 호출되는 반면, <code>attributeChangedCallback</code>은 커스텀 엘리먼트의 애트리뷰트가 추가, 제거 또는 변경될때 호출됩니다.</p>

<p>아래의 {{anch("Using the lifecycle callbacks")}} 부분에서 이러한 부분을 더 배울 수 있습니다.</p>

<p>커스텀 엘리먼트에는 두 종류가 있습니다:</p>

<ul>
 <li><strong>Autonomous custom elements</strong> are standalone — they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example <code>&lt;popup-info&gt;</code>, or <code>document.createElement("popup-info")</code>.</li>
 <li><strong>Customized built-in elements</strong> inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom element in the {{htmlattrxref("is")}} attribute (or property). For example <code>&lt;p is="word-count"&gt;</code>, or <code>document.createElement("p", { is: "word-count" })</code>.</li>
</ul>

<h2 id="Working_through_some_simple_examples">Working through some simple examples</h2>

<p>At this point, let's go through some more simple examples to show you how custom elements are created in more detail.</p>

<h3 id="Autonomous_custom_elements">Autonomous custom elements</h3>

<p>Let's have a look at an example of an autonomous custom element — <code><a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">&lt;popup-info-box&gt;</a></code> (see a <a href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/">live example</a>). This takes an image icon and a text string, and embeds the icon into the page. When the icon is focused, it displays the text in a pop up information box to provide further in-context information.</p>

<p>To begin with, the JavaScript file defines a class called <code>PopUpInfo</code>, which extends {{domxref("HTMLElement")}}. Autonomous custom elements nearly always extend <code>HTMLElement</code>.</p>

<pre class="brush: js notranslate">class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}</pre>

<p>The preceding code snippet contains the {{jsxref("Classes.constructor","constructor")}} definition for the class, which always starts by calling <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/super">super()</a></code> so that the correct prototype chain is established.</p>

<p>Inside the constructor, we define all the functionality the element will have when an instance of it is instantiated. In this case we attach a shadow root to the custom element, use some DOM manipulation to create the element's internal shadow DOM structure — which is then attached to the shadow root — and finally attach some CSS to the shadow root to style it.</p>

<pre class="brush: js notranslate">// Create a shadow root
var shadow = this.attachShadow({mode: 'open'});

// Create spans
var wrapper = document.createElement('span');
wrapper.setAttribute('class','wrapper');
var icon = document.createElement('span');
icon.setAttribute('class','icon');
icon.setAttribute('tabindex', 0);
var info = document.createElement('span');
info.setAttribute('class','info');

// Take attribute content and put it inside the info span
var text = this.getAttribute('text');
info.textContent = text;

// Insert icon
var imgUrl;
if(this.hasAttribute('img')) {
  imgUrl = this.getAttribute('img');
} else {
  imgUrl = 'img/default.png';
}
var img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);

// Create some CSS to apply to the shadow dom
var style = document.createElement('style');

style.textContent = '.wrapper {' +
// CSS truncated for brevity

// attach the created elements to the shadow dom

shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);</pre>

<p>Finally, we register our custom element on the <code>CustomElementRegistry</code> using the <code>define()</code> method we mentioned earlier — in the parameters we specify the element name, and then the class name that defines its functionality:</p>

<pre class="brush: js notranslate">customElements.define('popup-info', PopUpInfo);</pre>

<p>It is now available to use on our page. Over in our HTML, we use it like so:</p>

<pre class="brush: html notranslate">&lt;popup-info img="img/alt.png" text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."&gt;</pre>

<div class="note">
<p><strong>Note</strong>: You can see the <a href="https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js">full JavaScript source</a> code here.</p>
</div>

<h3 id="Customized_built-in_elements">Customized built-in elements</h3>

<p>Now let's have a look at another customized built in element example — <a href="https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component">expanding-list</a> (<a href="https://mdn.github.io/web-components-examples/expanding-list-web-component/">see it live also</a>). This turns any unordered list into an expanding/collapsing menu.</p>

<p>First of all, we define our element's class, in the same manner as before:</p>

<pre class="brush: js notranslate">class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}</pre>

<p>We will not explain the element functionality in any detail here, but you can discover how it works by checking out the source code. The only real difference here is that our element is extending the {{domxref("HTMLUListElement")}} interface, and not {{domxref("HTMLElement")}}. So it has all the characteristics of a {{htmlelement("ul")}} element with the functionality we define built on top, rather than being a standalone element. This is what makes it a customized built-in, rather than an autonomous element.</p>

<p>Next, we register the element using the <code>define()</code> method as before, except that this time it also includes an options object that details what element our custom element inherits from:</p>

<pre class="brush: js notranslate">customElements.define('expanding-list', ExpandingList, { extends: "ul" });</pre>

<p>Using the built-in element in a web document also looks somewhat different:</p>

<pre class="brush: html notranslate">&lt;ul is="expanding-list"&gt;

  ...

&lt;/ul&gt;</pre>

<p>You use a <code>&lt;ul&gt;</code> element as normal, but specify the name of the custom element inside the <code>is</code> attribute.</p>

<div class="note">
<p><strong>Note</strong>: Again, you can see the full <a href="https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js">JavaScript source code</a> here.</p>
</div>

<h2 id="Using_the_lifecycle_callbacks">Using the lifecycle callbacks</h2>

<p>You can define several different callbacks inside a custom element's constructor, which fire at different points in the element's lifecycle:</p>

<ul>
 <li><code>connectedCallback</code>: Invoked when the custom element is first connected to the document's DOM.</li>
 <li><code>disconnectedCallback</code>: Invoked when the custom element is disconnected from the document's DOM.</li>
 <li><code>adoptedCallback</code>: Invoked when the custom element is moved to a new document.</li>
 <li><code>attributeChangedCallback</code>: Invoked when one of the custom element's attributes is added, removed, or changed.</li>
</ul>

<p>Let's look at an example of these in use. The code below is taken from the <a href="https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks">life-cycle-callbacks</a> example (<a href="https://mdn.github.io/web-components-examples/life-cycle-callbacks/">see it running live</a>). This is a trivial example that simply generates a colored square of a fixed size on the page. The custom element looks like this:</p>

<pre class="brush: html notranslate">&lt;custom-square l="100" c="red"&gt;&lt;/custom-square&gt;</pre>

<p>The class constructor is really simple — here we attach a shadow DOM to the element, then attach empty {{htmlelement("div")}} and {{htmlelement("style")}} elements to the shadow root:</p>

<pre class="brush: js notranslate">var shadow = this.attachShadow({mode: 'open'});

var div = document.createElement('div');
var style = document.createElement('style');
shadow.appendChild(style);
shadow.appendChild(div);</pre>

<p>The key function in this example is <code>updateStyle()</code> — this takes an element, gets its shadow root, finds its <code>&lt;style&gt;</code> element, and adds {{cssxref("width")}}, {{cssxref("height")}}, and {{cssxref("background-color")}} to the style.</p>

<pre class="brush: js notranslate">function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i &lt; childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent = 'div {' +
                          ' width: ' + elem.getAttribute('l') + 'px;' +
                          ' height: ' + elem.getAttribute('l') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c');
    }
  }
}</pre>

<p>The actual updates are all handled by the life cycle callbacks, which are placed inside the constructor. The <code>connectedCallback()</code> runs when the element is added to the DOM — here we run the <code>updateStyle()</code> function to make sure the square is styled as defined in its attributes:</p>

<pre class="brush: js notranslate">connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}</pre>

<p>the <code>disconnectedCallback()</code> and <code>adoptedCallback()</code> callbacks log simple messages to the console to inform us when the element is either removed from the DOM, or moved to a different page:</p>

<pre class="brush: js notranslate">disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}</pre>

<p>The <code>attributeChangedCallback()</code> callback is run whenever one of the element's attributes is changed in some way. As you can see from its properties, it is possible to act on attributes individually, looking at their name, and old and new attribute values. In this case however, we are just running the <code>updateStyle()</code> function again to make sure that the square's style is updated as per the new values:</p>

<pre class="brush: js notranslate">attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}</pre>

<p>Note that to get the <code>attributeChangedCallback()</code> callback to fire when an attribute changes, you have to observe the attributes. This is done by calling the <code>observedAttributes()</code> getter inside the constructor, including inside it a <code>return</code> statement that returns an array containing the names of the attributes you want to observe:</p>

<pre class="brush: js notranslate">static get observedAttributes() {return ['w', 'l']; }</pre>

<p>This is placed right at the top of the constructor, in our example.</p>

<div class="note">
<p><strong>Note</strong>: Find the <a href="https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js">full JavaScript source</a> here.</p>
</div>
