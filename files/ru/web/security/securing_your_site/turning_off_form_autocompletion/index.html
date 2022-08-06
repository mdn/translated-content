---
title: How to turn off form autocompletion
slug: Web/Security/Securing_your_site/Turning_off_form_autocompletion
translation_of: Web/Security/Securing_your_site/Turning_off_form_autocompletion
---
<p><span class="seoSummary">В этой статье объясняется как можно отключить автозаполнение полей на сайте.</span></p>

<p>По умолчанию браузеры запоминают информацию, которую пользователи отправляют через {{HTMLElement("input")}} поля на сайтах. Это позволяет браузеру предлагать варианты для автодополнения (то есть предлагать возможные дополнения для полей, в которые пользователь начал вводить данные) или автозаполнение (то есть предварительно заполнять определённые поля при загрузке).</p>

<p>Эти функции обычно включены по умолчанию, но они могут вызвать проблемы конфиденциальности пользователей, поэтому браузеры могут позволить отключать их. Однако некоторые данные, представленные в формах, либо не будут полезны в будущем (например, одноразовый пин-код), либо содержат конфиденциальную информацию (например, уникальный правительственный идентификатор или код безопасности кредитной карты). Как автор сайта, вы можете предпочесть, чтобы браузер не запоминал значения для таких полей, даже если в браузере включена функция автозаполнения.</p>

<p>It is important to know that if you turn off autocomplete, you are <strong>breaking</strong> the rule <a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html">1.3.5: Identify Input Purpose in WCAG 2.1</a>. If you are making a website that should follow WCAG, you should use autocomplete with autofill.</p>

<h2 id="Disabling_autocompletion">Disabling autocompletion</h2>

<p>To disable autocompletion in forms, you can set the <code><a href="/en-US/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code> attribute to "off":</p>

<pre class="brush: html">autocomplete="off"</pre>

<p>You can do this either for an entire form, or for specific input elements in a form:</p>

<pre class="brush: html">&lt;form method="post" action="/form" autocomplete="off"&gt;
[…]
&lt;/form&gt;</pre>

<pre class="brush: html">&lt;form method="post" action="/form"&gt;
  […]
  &lt;div&gt;
    &lt;label for="cc"&gt;Credit card:&lt;/label&gt;
    &lt;input type="text" id="cc" name="cc" autocomplete="off"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>Setting <code>autocomplete="off"</code> on fields has two effects:</p>

<ul>
 <li>It tells the browser not to save data inputted by the user for later autocompletion on similar forms, though heuristics for complying vary by browser.</li>
 <li>It stops the browser from caching form data in the session history. When form data is cached in session history, the information filled in by the user is shown in the case where the user has submitted the form and clicked the Back button to go back to the original form page.</li>
</ul>

<p>If a browser keeps on making suggestions even after setting autocomplete to off, then you have to change the name attribute of the input element.</p>

<h2 id="The_autocomplete_attribute_and_login_fields">The autocomplete attribute and login fields</h2>

<p>Modern browsers implement integrated password management: when the user enters a username and password for a site, the browser offers to remember it for the user. When the user visits the site again, the browser autofills the login fields with the stored values.</p>

<p>Additionally, the browser enables the user to choose a master password that the browser will use to encrypt stored login details.</p>

<p>Even without a master password, in-browser password management is generally seen as a net gain for security. Since users do not have to remember passwords that the browser stores for them, they are able to choose stronger passwords than they would otherwise.</p>

<p>For this reason, many modern browsers do not support <code>autocomplete="off"</code> for login fields:</p>

<ul>
 <li>If a site sets <code>autocomplete="off"</code> for a {{HTMLElement("form")}}, and the form includes username and password input fields, then the browser still offers to remember this login, and if the user agrees, the browser will autofill those fields the next time the user visits the page.</li>
 <li>If a site sets <code>autocomplete="off"</code> for username and password {{HTMLElement("input")}} fields, then the browser still offers to remember this login, and if the user agrees, the browser will autofill those fields the next time the user visits the page.</li>
</ul>

<p>This is the behavior in Firefox (since version 38), Google Chrome (since 34), and Internet Explorer (since version 11).</p>

<h3 id="Preventing_autofilling_with_autocompletenew-password">Preventing autofilling with autocomplete="new-password"</h3>

<p>If you are defining a user management page where a user can specify a new password for another person, and therefore you want to prevent autofilling of password fields, you can use <code>autocomplete="new-password"</code>.</p>

<p>This is a hint, which browsers are not required to comply with. However modern browsers have stopped autofilling <code>&lt;input&gt;</code> elements with <code>autocomplete="new-password"</code> for this very reason. For example, Firefox version 67 (see {{bug(1119063)}}) stopped autofilling in this case; however, Firefox 70 (see {{bug(1565407)}}) can suggest securely-generated passwords, but does not autofill a saved password. See the <a href="/en-US/docs/Web/HTML/Attributes/autocomplete#Browser_compatibility"><code>autocomplete</code> compat table</a> for more details.</p>

<h2 id="Tools_for_disabling_autocompletion">Tools for disabling autocompletion</h2>

<p>The <a href="https://terrylinooo.github.io/jquery.disableAutoFill/">jquery.disableAutoFill</a> plugin randomizes an input's <code>name</code> attribute by default. When the form is submitted, the plugin restores the original name. This prevents auto-completion for all browsers (includes third-party auto-completion extensions) but doesn't necessarily help with login fields.</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}</p>
