---
title: CSS e JavaScript - melhores práticas de acessibilidade
slug: Learn/Accessibility/CSS_and_JavaScript
tags:
  - Acessibilidade
  - Artigo
  - CSS
  - JavaScript
  - color
  - contraste
translation_of: Learn/Accessibility/CSS_and_JavaScript
original_slug: Learn/Accessibility/CSS_e_JavaScript
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}</div>

<p class="summary">CSS e JavaScript, quando usados de maneira correta, têm também potencial para permitir experiências web acessíveis... ou podem causar danos significativos se usados de forma indevida. Este artigo descreve algumas das melhores práticas em CSS e JavaScript a serem consideradas para garantir que até mesmo conteúdos complexos estejam tão acessíveis quanto possível.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Conhecimento básico de computação, Conhecimento básico de HTML, CSS, e JavaScript, e entendimento sobre <a href="/en-US/docs/Learn/Accessibility/What_is_accessibility">o que é acessibilidade</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Tornar-se familiarizado com o uso de CSS e JavaScript apropriadamente em seus documentos web para maximizar a acessibilidade e não diminuir sua importância.</td>
  </tr>
 </tbody>
</table>

<h2 id="CSS_e_JavaScript_são_acessíveis">CSS e JavaScript são acessíveis?</h2>

<p>CSS e JavaScript não têm a mesma importância imediata que o HTML, mas eles continuam sendo capazes de ajudar ou causar danos à acessibilidade, dependendo de como são usados. Ou seja, é importante que você considere algumas das melhores práticas para assegurar que o seu uso de CSS e JavaScript não danifiquem a acessibilidade de seus documentos.</p>

<h2 id="CSS">CSS</h2>

<p>Vamos começar dando uma olhada no CSS.</p>

<h3 id="Semântica_correta_e_expectativas_do_usuário">Semântica correta e expectativas do usuário</h3>

<p>É possível usar  CSS para fazer qualquer elemento HTML se parecer com qualquer coisa, mas isso não quer dizer que você deve. Como frequentemente mencionado no nosso artigo <a href="/en-US/docs/Learn/Accessibility/HTML">HTML: Uma boa base para acessibilidade</a>, você deve utilizar a semântica apropriada do elemento para determinada tarefa, sempre que possível. Se não o fizer, isso poderá acarretar confusão e problemas de usabilidade para todos, particularmente para usuários portadores de deficiência. Utilizar uma semântica correta tem muito a ver com as expectativas do usuário — elementos se parecem e se comportam de certas maneiras, de acordo com suas funcionalidades, e essas convenções são esperadas pelos usuários.</p>

<p>Por exemplo, um usuário utilizando um leitor de tela não consegue navegar por uma página através de elementos de heading se o desenvolvedor não tiver usado apropriadamente estes elementos para marcação do conteúdo. Da mesma forma, um heading perde o seu propósito visual se você estilizá-lo de maneira que ele não se pareça com um heading.</p>

<p>A regra de ouro é que você pode atualizar o estilo de recurso de página para se adequar ao seu design, mas não o altere tanto ao ponto de não mais se parecer ou se comportar como o esperado. As sessões que se seguem resumem os principais recursos HTML a serem considerados.</p>

<h4 id="Estrututa_standard_de_conteúdo_textual">Estrututa "standard" de conteúdo textual</h4>

<p>Headings, parágrafos, listss — o núcleo do conteúdo textual da sua página:</p>

<pre class="brush: html">&lt;h1&gt;Heading&lt;/h1&gt;

&lt;p&gt;Parágrafo&lt;/p&gt;

&lt;ul&gt;
  &lt;li&gt;Minha lista&lt;/li&gt;
  &lt;li&gt;tem dois itens.&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>Um código CSS típico pode se parecer com isso:</p>

<pre class="brush: css">h1 {
  font-size: 5rem;
}

p, li {
  line-height: 1.5;
  font-size: 1.6rem;
}</pre>

<p>Você tem de:</p>

<ul>
 <li>Selecionar tamanhos de fonte sensíveis, altura de linhas, espaçamento entre letras, etc. para fazer com que o seu texto seja lógico, legível e de leitura confortável.</li>
 <li>Tenha certeza que os seus headings se destaquem do corpo do seu texto, geralmente grande e em negrito conforme o estilo padrão.</li>
 <li>A cor do seu texto deve ter um bom contraste com a cor de fundo.</li>
</ul>

<p>Veja <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML fundamentos de texto</a> e <a href="/en-US/docs/Learn/CSS/Styling_text">Estilizando texto</a> para maiores informações.</p>

<h4 id="Texto_em_negrito">Texto em negrito</h4>

<p>Elemento de marcação que confere ênfase específica ao texto envolvido por ele:</p>

<pre class="brush: html">&lt;p&gt;A água está &lt;em&gt;muito quente&lt;/em&gt;.&lt;/p&gt;

&lt;p&gt;Gotículas de água em superfícies são chamadas de &lt;strong&gt;condensação&lt;/strong&gt;.&lt;/p&gt;</pre>

<p>Você pode querer adicionar alguma cor no seu texto em negrito:</p>

<pre class="brush: css">strong, em {
  color: #a60000;
}</pre>

<p>De qualquer forma, você raramente irá precisar de estilizar um elemento de ênfase. As convenções para texto em negrito e itálico são bastante reconhecidas e alterar seu estilo pode causar confusão. Para saber mais sobre elemento ênfase (negrito), veja <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Emphasis_and_importance">Emphasis and importance</a>.</p>

<h4 id="Abreviações">Abreviações</h4>

<p>É um elemento que permite abraviação, acrônimo ou inicialização que esteja associada com sua expansão:</p>

<pre class="brush: html">&lt;p&gt;Web content is marked up using &lt;abbr title="Hypertext Markup Language"&gt;HTML&lt;/abbr&gt;.&lt;/p&gt;</pre>

<p>Novamente, você pode querer estilizá-lo de alguma forma:</p>

<pre class="brush: css">abbr {
  color: #a60000;
}</pre>

<p>A convenção de estilo que é reconhecida para abreviações é uma linha pontilhada, e não é recomendado estilizá-la. Para saber mais sobre abreviações, veja <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#Abbreviations">Abbreviations</a>.</p>

<h4 id="Links">Links</h4>

<p>Hyperlinks — the way you get to new places on the web:</p>

<pre class="brush: html">&lt;p&gt;Visit the &lt;a href="https://www.mozilla.org"&gt;Mozilla homepage&lt;/a&gt;.&lt;/p&gt;</pre>

<p>Some very simple link styling is shown below:</p>

<pre class="brush: css">a {
  color: #ff0000;
}

a:hover, a:visited, a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}</pre>

<p>The standard link conventions are underlined and a different color (default: blue) in their standard state, another color variation when the link has previously been visited (default: purple), and yet another color when the link is activated (default: red). In addition, the mouse pointer changes to a pointer icon when links are moused over, and the link receives a highlight when focused (e.g. via tabbing) or activated. The following image shows the highlight in both Firefox (a dotted outline) and Chrome (a blue outline):</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14371/focus-highlight-firefox.png" style="display: block; height: 173px; margin: 0px auto; width: 319px;"></p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14369/focus-highlight-chrome.png" style="display: block; height: 169px; margin: 0px auto; width: 309px;"></p>

<p>You can be creative with link styles, as long as you keep giving users feedback when they interact with the links. Something should definitely happen when states change, and you shouldn't get rid of the pointer cursor or the outline — both are very important accessibility aids for those using keyboard controls.</p>

<h4 id="Form_elements">Form elements</h4>

<p>Elements to allow users to input data into websites:</p>

<pre class="brush: html">&lt;div&gt;
  &lt;label for="name"&gt;Enter your name&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
&lt;/div&gt;</pre>

<p>You can see some good example CSS in our <a href="https://github.com/mdn/learning-area/blob/master/accessibility/css/form-css.html">form-css.html</a> example (<a href="http://mdn.github.io/learning-area/accessibility/css/form-css.html">see it live</a> also).</p>

<p>Most of the CSS you'll write for forms will be for sizing the elements, lining up labels and inputs, and getting them looking neat and tidy.</p>

<p>You shouldn't however deviate too much from the expected visual feedback form elements receive when they are focused, which is basically the same as links (see above). You could style form focus/hover states to make this behaviour more consistent across browsers or fit in better with your page design, but don't get rid of it altogether — again, people rely on these clues to help them know what is going on.</p>

<h4 id="Tables">Tables</h4>

<p>Tables for presenting tabular data.</p>

<p>You can see a good, simple example of table HTML and CSS in our <a href="https://github.com/mdn/learning-area/blob/master/accessibility/css/table-css.html">table-css.html</a> example (<a href="http://mdn.github.io/learning-area/accessibility/css/table-css.html">see it live also</a>).</p>

<p>Table CSS generally serves to make the table fit better into your design and look less ugly. It is a good idea to make sure the table headers stand out (normally using bold), and use zebra striping to make different rows easier to parse.</p>

<h3 id="Color_and_color_contrast">Color and color contrast</h3>

<p>When choosing a color scheme for your website, make sure that the text (foreground) color contrasts well with the background color. Your design might look cool, but it is no good if people with visual impairments like color blindness can't read your content.</p>

<p>There is an easy way to check whether your contrast is large enough to not cause problems. There are a number of contrast checking tools online that you can enter your foreground and background colors into, to check them. For example WebAIM's <a href="http://webaim.org/resources/contrastchecker/">Color Contrast Checker</a> is simple to use, and provides an explanation of what you need to conform to the WCAG criteria around color contrast.</p>

<div class="note">
<p><strong>Note</strong>: A high contrast ratio will also allow anyone using a smartphone or tablet with a glossy screen to better read pages when in a bright environment, such as sunlight.</p>
</div>

<p>Another tip is to not rely on color alone for signposts/information, as this will be no good for those who can't see the color. Instead of marking required form fields in red, for example, mark them with an asterisk and in red.</p>

<h3 id="Hiding_things">Hiding things</h3>

<p>There are many instances where a visual design will require that not all content is shown at once. For example, in our <a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html">Tabbed info box example</a> (see <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">source code</a>) we have three panels of information, but we are <a href="/en-US/docs/Learn/CSS/CSS_layout/Positioning">positioning</a> them on top of one another and providing tabs that can be clicked to show each one (it is also keyboard accessible — you can alternatively use Tab and Enter/Return to select them).</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13368/tabbed-info-box.png" style="display: block; height: 400px; margin: 0px auto; width: 450px;"></p>

<p>Screen reader users don't care about any of this — they are happy with the content as long as the source order makes sense, and they can get to it all. Absolute positioning (as used in this example) is generally seen as one of the best mechanisms of hiding content for visual effect, because it doesn't stop screen readers from getting to it.</p>

<p>On the other hand, you shouldn't use {{cssxref("visibility")}}<code>:hidden</code> or {{cssxref("display")}}<code>:none</code>, because they do hide content from screen readers. Unless of course, there is a good reason why you want this content to be hidden from screen readers.</p>

<div class="note">
<p><strong>Note</strong>: <span class="subtitle"><a href="http://webaim.org/techniques/css/invisiblecontent/">Invisible Content Just for Screen Reader Users</a> has a lot more useful detail surrounding this topic.</span></p>
</div>

<h3 id="Accept_that_users_can_override_styles">Accept that users can override styles</h3>

<h4 id="Accept_that_users_can_override_your_styles">Accept that users can override your styles</h4>

<p>It is possible for users to override your styles with their own custom styles, for example:</p>

<ul>
 <li>See Sarah Maddox's <a class="external external-icon" href="https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/" rel="noopener">How to use a custom style sheet (CSS) with Firefox</a> for a useful guide covering how to do this manually in Firefox, and <a href="https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-internet-explorer/">How to use a custom style sheet (CSS) with Internet Explorer</a> by Adrian Gordon for the equivalent <abbr>IE</abbr> instructions.</li>
 <li>It is probably easier to do it using an extension, for example the Stylish extension is available for <a href="https://addons.mozilla.org/en-US/firefox/addon/stylish/">Firefox</a>, <a href="https://safari-extensions.apple.com/details/?id=com.sobolev.stylish-5555L95H45">Safari</a>, <a href="https://addons.opera.com/en/extensions/details/stylish/">Opera</a>, and <a href="https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe">Chrome</a>.</li>
</ul>

<p>Users might do this for a variety of reasons. A visually impaired user might want to make the text bigger on all websites they visit, or a user with severe color deficiency might want to put all websites in high contrast colors that are easy for them to see. Whatever the need, you should be comfortable with this, and make your designs flexible enough so that such changes will work in your design. As an example, you might want to make sure your main content area can handle bigger text (maybe it will start to scroll to allow it all to be seen), and won't just hide it, or break completely.</p>

<h2 id="JavaScript">JavaScript</h2>

<p>JavaScript can also break accessibility, depending on how it is used.</p>

<p>Modern JavaScript is a powerful language, and we can do so much with it these days, from simple content and UI updates to fully-fledged 2D and 3D games. There is no rule that says all content has to be 100% accessible to all people — you just need to do what you can, and make your apps as accessible as possible.</p>

<p>Simple content and functionality is arguably easy to make accessible — for example text, images, tables, forms and push button that activate functions. As we looked at in our <a href="/en-US/docs/Learn/Accessibility/HTML">HTML: A good basis for accessibility</a> article, the key considerations are:</p>

<ul>
 <li>Good semantics: Using the right element for the right job. For example, making sure you use headings and paragraphs, and {{htmlelement("button")}} and {{htmlelement("a")}} elements</li>
 <li>Making sure content is available as text, either directly as text content, good text labels for form elements, or <a href="/en-US/docs/Learn/Accessibility/HTML#Text_alternatives">text alternatives</a>, e.g. alt text for images.</li>
</ul>

<p>We also looked at an example of how to use JavaScript to build in functionality where it is missing — see <a href="/en-US/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in">Building keyboard accessibility back in</a>. This is not ideal — really you should just use the right element for the right job — but it shows that it is possible in situations where for some reason you can't control the markup that is used. Another way to improve accessibility for non-semantic JavaScript-powered widgets is to use WAI-ARIA to provide extra semantics for screen reader users. The next article will also cover this in detail.</p>

<p>Complex functionality like 3D games are not so easy to make accessible — a complex 3D game created using <a href="/en-US/docs/Web/API/WebGL_API">WebGL</a> will be rendered on a {{htmlelement("canvas")}} element, which has no facility at this time to provide text alternatives or other information for severely visually impaired users to make use of. It is arguable that such a game doesn't really have this group of people as a part of its main target audience, and it would be unreasonable to expect you to make it 100% accessible to blind people, however you could implement <a href="/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard">keyboard controls</a> so it is usable by non-mouse users, and make the color scheme contrasting enough to be usable by those with color deficiencies.</p>

<h3 id="The_problem_with_too_much_JavaScript">The problem with too much JavaScript</h3>

<p>The problem often comes when people rely on JavaScript too much. Sometimes you'll see a website where everything has been done with JavaScript — the HTML has been generated by JavaScript, the CSS has been generated by JavaScript, etc. This has all kinds of accessibility and other issues associated with it, so it is not advised.</p>

<p>As well as using the right element for the right job, you should also make sure you are using the right technology for the right job! Think carefully about whether you need that shiny JavaScript-powered 3D information box, or whether plain old text would do. Think carefully about whether you need a complex non-standard form widget, or whether a text input would do. And don't generate all your HTML content using JavaScript if at all possible.</p>

<h3 id="Keeping_it_unobtrusive">Keeping it unobtrusive</h3>

<p>You should keep <strong>unobtrusive JavaScript</strong> in mind when creating your content. The idea of unobtrusive JavaScript is that it should be used wherever possible to enhance functionality, not build it in entirely — basic functions should ideally work without JavaScript, although it is appreciated that this is not always an option. But again, a large part of it is using built-in browser functionality where possible.</p>

<p>Good example uses of unobtrusive JavaScript include:</p>

<ul>
 <li>Providing client-side form validation, which alerts users to problems with their form entries quickly, without having to wait for the server to check the data. If it isn't available, the form will still work, but validation might be slower.</li>
 <li>Providing custom controls for HTML5 <code>&lt;video&gt;</code>s that are accessible to keyboard-only users, along with a direct link to the video that can be used to access it if JavaScript is not available (the default <code>&lt;video&gt;</code> browser controls aren't keyboard accessible in most browsers).</li>
</ul>

<p id="Client-side_form_validation">As an example, we've written a quick and dirty client-side form validation example — see <a href="https://github.com/mdn/learning-area/blob/master/accessibility/css/form-validation.html">form-validation.html</a> (also <a href="http://mdn.github.io/learning-area/accessibility/css/form-validation.html">see the demo live</a>). Here you'll see a simple form; when you try to submit the form with one or both fields left empty, the submit fails, and an error message box appears to tell you what is wrong.</p>

<p>This kind of form validation is unobtrusive — you can still use the form absolutely fine without the JavaScript being available, and any sensible form implementation will have server-side validation active as well, because it is too easy for malicious users to bypass client-side validation (for example, by turning JavaScript off in the browser). The client-side validation is still really useful for reporting errors — users can know about mistakes they make instantly, rather than having to wait for a round trip to the server and a page reload. This is a definite usability advantage.</p>

<div class="note">
<p><strong>Note</strong>: Server-side validation has not been implemented in this simple demo.</p>
</div>

<p>We've made this form validation pretty accessible too. We've used {{htmlelement("label")}} elements to make sure the form labels are unambiguously linked to their inputs, so screen readers can read them out alongside:</p>

<pre class="brush: html">&lt;label for="name"&gt;Enter your name:&lt;/label&gt;
&lt;input type="text" name="name" id="name"&gt;</pre>

<p>We only do the validation when the form is submitted — this is so that we don't update the UI too often and potentially confuse screen reader (and possibly other) users:</p>

<pre class="brush: js">form.onsubmit = validate;

function validate(e) {
  errorList.innerHTML = '';
  for(var i = 0; i &lt; formItems.length; i++) {
    var testItem = formItems[i];
    if(testItem.input.value === '') {
      errorField.style.left = '360px';
      createLink(testItem);
    }
  }

  if(errorList.innerHTML !== '') {
    e.preventDefault();
  }
}</pre>

<div class="note">
<p><strong>Note</strong>: In this example, we are hiding and showing the error message box using absolute positioning rather than another method such as visibility or display, because it doesn't interfere with the screen reader being able to read content from it.</p>
</div>

<p>Real form validation would be much more complex than this — you'd want to check that the entered name actually looks like a name, the entered age is actually a number and is realistic (e.g. not a minus number, or four digits). Here we've just implemented a simple check that a value has been filled in to each input field (<code>if(testItem.input.value === '')</code>).</p>

<p>When the validation has been performed, if the tests pass then the form is submitted. If there are errors (<code>if(errorList.innerHTML !== '')</code>) then we stop the form submitting (using <code><a href="/en-US/docs/Web/API/Event/preventDefault">preventDefault()</a></code>), and display any error messages that have been created (see below). This mechanism means that the errors will only be shown if there are errors, which is better for usability.</p>

<p>For each input that doesn't have a value filled in when the form is submitted, we create a list item with a link and insert it in the <code>errorList</code>.</p>

<pre class="brush: js">function createLink(testItem) {
  var listItem = document.createElement('li');
  var anchor = document.createElement('a');
  anchor.textContent = testItem.input.name + ' field is empty: fill in your ' + testItem.input.name + '.';
  anchor.href = '#' + testItem.input.name;
  anchor.onclick = function() {
    testItem.input.focus();
  };
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}</pre>

<p>Each link serves a dual purpose — it tells you what the error is, plus you can click on it/activate it to jump straight to the input element in question and correct your entry.</p>

<div class="note">
<p><strong>Note</strong>: The <code>focus()</code> part of this example is a bit tricky. Chrome and Edge (and newer versions of IE) will focus the element when the link is clicked, without needing the <code>onclick</code>/<code>focus()</code> block. Safari will only highlight the form element with the link on its own, so needs the <code>onclick</code>/<code>focus()</code> block to actually focus it. Firefox doesn't focus the inputs properly at all in this context, so Firefox users can't take advantage of this at present (although everything else works fine). The Firefox issue should be fixed soon — work is being done to give Firefox behaviour parity with other browsers (see {{bug(277178)}}).</p>
</div>

<p>In addition, the <code>errorField</code> is placed at the top of the source order (although it is positioned differently in the UI using CSS), meaning that users can find out exactly what's wrong with their form submissions and get to the input elements in question by going back up to the start of the page.</p>

<p>As a final note, we have used some WAI-ARIA attributes in our demo to help solve accessibility problems caused by areas of content constantly updating without a page reload (screen readers won't pick this up or alert users to it by default):</p>

<pre>&lt;div class="errors" role="alert" aria-relevant="all"&gt;
  &lt;ul&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<p>We will explain these attributes in our next article, which covers <a href="/en-US/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA</a> in much more detail.</p>

<div class="note">
<p><strong>Note</strong>: Some of you will probably be thinking about that fact that HTML5 forms have built-in validation mechanisms like the <code>required</code>, <code>min</code>/<code>minlength</code>, and <code>max</code>/<code>maxlength</code> attributes (see the {{htmlelement("input")}} element reference for more information). We didn't end up using these in the demo because cross-browser support for them is patchy (for example IE10 and above only).</p>
</div>

<div class="note">
<p><strong>Note</strong>: WebAIM's <a href="http://webaim.org/techniques/formvalidation/">Usable and Accessible Form Validation and Error Recovery</a> provides some further useful information about accessible form validation.</p>
</div>

<h3 id="Other_JavaScript_accessibility_concerns">Other JavaScript accessibility concerns</h3>

<p>There are other things to be aware of when implementing JavaScript and thinking about accessibility. We will add more as we find them.</p>

<h4 id="mouse-specific_events">mouse-specific events</h4>

<p>As you will be aware, most user interactions are implemented in client-side JavaScript using event handlers, which allow us to run functions in response to certain events happening. Some events can have accessibility issues. The main example you'll come across is mouse-specific events like <a href="/en-US/docs/Web/Events/mouseover">mouseover</a>, <a href="/en-US/docs/Web/Events/mouseout">mouseout</a>, <a href="/en-US/docs/Web/Events/dblclick">dblclick</a>, etc. Functionality that runs in response to these events will not be accessible using other mechanisms, like keyboard controls.</p>

<p>To mitigate such problems, you should double up these events with similar events that can be activated by other means (so-called device-independent event handlers) — <a href="/en-US/docs/Web/Events/focus">focus</a> and <a href="/en-US/docs/Web/Events/blur">blur</a> would provide accessibility for keyboard users.</p>

<p>Let's look at an example that highlights when this could be useful. Maybe we want to provide a thumbnail image that shows a larger version of the image when it is moused over or focused (like you'd see on an e-commerce product catalog.)</p>

<p>We've made a very simple example, which you can find at <a href="http://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html">mouse-and-keyboard-events.html</a> (see also the <a href="https://github.com/mdn/learning-area/blob/master/accessibility/css/mouse-and-keyboard-events.html">source code</a>). The code features two functions that show and hide the zoomed-in image; these are run by the following lines that set them as event handlers:</p>

<pre class="brush: js">imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;</pre>

<p>The first two lines run the functions when the mouse pointer hovers over and stops hovering over the thumbnail, respectively. This won't allow us to access the zoomed view by keyboard though — to allow that, we've included the last two lines, which run the functions when the image is focused and blurred (when focus stops). This can be done by tabbing over the image, because we've included <code>tabindex="0"</code> on it.</p>

<p>The <a href="/en-US/docs/Web/Events/click">click</a> event is interesting — it sounds mouse-dependent, but most browsers will activate <a href="/en-US/docs/Web/API/GlobalEventHandlers/onclick">onclick</a> event handlers after Enter/Return is pressed on a link or form element that has focus, or when such an element is tapped on a touchscreen device. This doesn't work by default however when you allow a non-default-focusable event to have focus using tabindex — in such cases you need to detect specifically when that exact key is pressed (see <a href="/en-US/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in">Building keyboard accessibility back in</a>).</p>

<h2 id="Summary">Summary</h2>

<p>We hope this article has given you a good amount of detail and understanding about the accessibility issues surrounding CSS and JavaScript use on web pages.</p>

<p>Next up, WAI-ARIA!</p>

<div>{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}</div>

<div>
<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Accessibility/What_is_accessibility">What is accessibility?</a></li>
 <li><a href="/en-US/docs/Learn/Accessibility/HTML">HTML: A good basis for accessibility</a></li>
 <li><a href="/en-US/docs/Learn/Accessibility/CSS_and_JavaScript">CSS and JavaScript accessibility best practices</a></li>
 <li><a href="/en-US/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA basics</a></li>
 <li><a href="/en-US/docs/Learn/Accessibility/Multimedia">Accessible multimedia</a></li>
 <li><a href="/en-US/docs/Learn/Accessibility/Mobile">Mobile accessibility</a></li>
 <li><a href="/en-US/docs/Learn/Accessibility/Accessibility_troubleshooting">Accessibility troubleshooting</a></li>
</ul>
</div>
