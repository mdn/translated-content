---
title: Using Feature Policy
slug: Web/HTTP/Feature_Policy/Using_Feature_Policy
tags:
  - Acesso
  - Delegação
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Permissões
  - Privilegios
  - Referencia
  - Segurança
  - cabeçalho
translation_of: Web/HTTP/Feature_Policy/Using_Feature_Policy
---
<div>{{HTTPSidebar}}</div>

<p><a href="/en-US/docs/Web/HTTP/Feature_Policy">Feature Policy</a> allows you to control which origins can use which features, both in the top-level page and in embedded frames. Essentially, you write a policy, which is an allowed list of origins for each feature. For every feature controlled by Feature Policy, the feature is only enabled in the current document or frame if its origin matches the allowed list of origins.</p>

<p>For each policy-controlled feature, the browser maintains a list of origins for which the feature is enabled, known as an allowlist. If you do not specify a policy for a feature, then a default allowlist will be used. The default allowlist is specific to each feature.</p>

<div class="note">
<p>The <code>Feature-Policy</code> header has now been renamed to <code>Permissions-Policy</code> in the spec, and this article will eventually be updated to reflect that change.</p>
</div>

<h2 id="Escrevendo_a_política">Escrevendo a política</h2>

<p>A política é descrita usando um conjunto de diretivas de políticas individuais. A diretiva de política é uma combinação de uma funcionalidade com nome definido, e uma lista de origens que possuem permissão para usar esta política. Funcionalidades dentro de uma política são separadas por ponto e vírgula.</p>

<h3 id="allowlist">allowlist</h3>

<p>Uma lista de permissão é a lista de origens que pega um ou mais dos seguintes valores, separados por espaços:</p>

<ul>
 <li><code>*</code>: A funcionalidade será permitida neste documento, e todos os contextos de navegação aninhados (<em>iframes</em>) independente de sua origem.</li>
 <li><code>'self'</code>: A funcionalidade será permitida no contexto, e em todos os contextos de navegação aninhados (<em>iframes</em>) de mesma origem.</li>
 <li><code>'src'</code>: (Em um <em>iframe</em> com atributo <em>allow</em> somente) A funcionalidade será permitida neste enquadramento, enquanto o documento carregado nele venha da mesma origem da URL no atributo {{HTMLElement('iframe','src','#Attributes')}} do enquadramento .</li>
 <li><code>'none'</code>: A funcionalidade é desabilitada em alto nível e nos contextos de navegação aninhados.</li>
 <li>&lt;origin(s)&gt;: A funcionalidade é permitida em origens especificas (por exemplo, https://example.com). Origens devem ser separadas por um espaço.</li>
</ul>

<p>Os valores <code>*</code> (permitido para todas as origens) ou <code>'none'</code> (desabilitado para todas as origens) podem ser usados sozinhos, enquanto <code>'self'</code> e <code>'src'</code> podem ser usados com uma ou mais origens.</p>

<p>Funcionalidade são definidas para cada uma ter uma lista de permissão padrão, que é uma das:</p>

<ul>
 <li><code>*</code>: A funcionalidade é permitida por padrão em alto nível em contextos de navegação e todos os contextos de navegação aninhados (<em>iframes</em>).</li>
 <li><code>'self'</code>: A funcionalidade é permitida por padrão em contextos de navegação de alto nível e em contextos de navegação aninhados (<em>iframes</em>) na mesma origem. A funcionalidade não é permitida em documentos entre origens em contextos de navegação aninhados.</li>
 <li><code>'none'</code>: A funcionalidade é desabilitada em alto nível e em contextos de navegação aninhados.</li>
</ul>

<h2 id="Especificando_sua_política">Especificando sua política</h2>

<p>Feature Policy provides two ways to specify policies to control features:</p>

<ul>
 <li>The {{httpheader('Feature-Policy')}} HTTP header.</li>
 <li>The {{htmlattrxref("allow", "iframe")}} attribute on {{htmlelement("iframe")}}s.</li>
</ul>

<p>The primary difference between the HTTP header and the <code>allow</code> attribute is that the allow attribute only controls features within an iframe. The header controls features in the response and any embedded content within the page.</p>

<h3 id="The_Feature-Policy_HTTP_header">The Feature-Policy HTTP header</h3>

<p>You can send the <code>Feature-Policy</code> HTTP header with the response of a page. The value of this header is a policy to be enforced by the browser for the given page. It has the following structure.</p>

<pre class="brush: bash notranslate">Feature-Policy: &lt;feature name&gt; &lt;allowlist of origin(s)&gt;</pre>

<p>For example, to block all content from using the Geolocation API across your site:</p>

<pre class="brush: bash notranslate">Feature-Policy: geolocation 'none'</pre>

<p>Several features can be controlled at the same time by sending the HTTP header with a semicolon-separated list of policy directives, or by sending a separate header for each policy.</p>

<p>For example, the following are equivalent:</p>

<pre class="brush: bash notranslate">Feature-Policy: unsized-media 'none'; geolocation 'self' https://example.com; camera *;

Feature-Policy: unsized-media 'none'
Feature-Policy: geolocation 'self' https://example.com
Feature-Policy: camera *;
</pre>

<h3 id="The_iframe_allow_attribute">The iframe allow attribute</h3>

<p>The second way to use Feature Policy is for controlling content within an iframe. Use the <code>allow</code> attribute to specify a policy list for embedded content.</p>

<p>For example, allow all browsing contexts within this iframe to use fullscreen:</p>

<pre class="brush: html notranslate">&lt;iframe src="https://example.com..." allow="fullscreen"&gt;&lt;/iframe&gt;</pre>

<p>This is equivalent to:</p>

<pre class="brush: html notranslate">&lt;iframe src="https://example.com..." allow="fullscreen 'src'"&gt;&lt;/iframe&gt;</pre>

<p>This example allows <code>&lt;iframe&gt;</code> content on a particular origin to access the user's location:</p>

<pre class="brush: html notranslate">&lt;iframe src="https://google-developers.appspot.com/demos/..."
        allow="geolocation https://google-developers.appspot.com"&gt;&lt;/iframe&gt;
</pre>

<p>Similar to the HTTP header, several features can be controlled at the same time by specifying a semicolon-separated list of policy directives.</p>

<p>For example, this blocks the <code>&lt;iframe&gt;</code> from using the camera and microphone:</p>

<pre class="brush: html notranslate">&lt;iframe allow="camera 'none'; microphone 'none'"&gt;
</pre>

<h2 id="Inheritance_of_policy_for_embedded_content">Inheritance of policy for embedded content</h2>

<p>Scripts inherit the policy of their browsing context, regardless of their origin. That means that top-level scripts inherit the policy from the main document.</p>

<p>All iframes inherit the policy of their parent page. If the iframe has an <code>allow</code> attribute, the policies of the parent page and the <code>allow</code> attribute are combined, using the most restrictive subset. For an iframe to have a feature enabled, the origin must be in the allowlist for both the parent page and the allow attribute.</p>

<p>Disabling a feature in a policy is a one-way toggle. If a feature has been disabled for a child frame by its parent frame, the child cannot re-enable it, and neither can any of the child's descendants.</p>

<h2 id="Enforcing_best_practices_for_good_user_experiences">Enforcing best practices for good user experiences</h2>

<p>It's difficult to build a website that uses all the latest best practices and provides great performance and user experiences. As the website evolves, it can become even harder to maintain the user experience over time. You can use feature policies to specify the desired best practices, and rely on the browser to enforce the policies to prevent regressions.</p>

<p>There are several policy-controlled features designed to represent functionality that can negatively impact the user experience. These features include:</p>

<ul>
 <li>Layout-inducing Animations</li>
 <li>Unoptimized (poorly compressed) images</li>
 <li>Oversized images</li>
 <li>Synchronous scripts</li>
 <li>Synchronous XMLHttpRequest</li>
 <li>Unsized media</li>
</ul>

<p>To avoid breaking existing web content, the default for such policy-controlled features is to allow the functionality to be used by all origins. That is, the default allowlist is <code>'*'</code> for each feature. Preventing the use of the sub-optimal functionality requires explicitly specifying a policy that disables the features.</p>

<p>For new content, you can start developing with a policy that disables all the features. This approach ensures that none of the functionality is introduced. When applying a policy to existing content, testing is likely required to verify it continues to work as expected. This is especially important for embedded or third-party content that you do not control.</p>

<p>To turn on the enforcement of all the best practices, specify the policy as below.</p>

<p>Send the following the HTTP header:</p>

<pre class="brush: bash notranslate">Feature-Policy: layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none';</pre>

<p>Using the <code>&lt;iframe&gt;</code> <code>allow</code> attribute:</p>

<pre class="brush: html notranslate">&lt;iframe src="https://example.com..." allow="layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none';"&gt;&lt;/iframe&gt;</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Feature_Policy">Feature Policy</a></li>
 <li>{{HTTPHeader("Feature-Policy")}} header</li>
 <li>{{HTMLElement('iframe','allow','#Attributes')}} attribute on iframes</li>
 <li>{{HTTPHeader("Content-Security-Policy")}} header</li>
 <li>{{HTTPHeader("Referrer-Policy")}} header</li>
 <li><a href="/en-US/docs/Web/Privacy">Privacy, permissions, and information security</a></li>
</ul>
