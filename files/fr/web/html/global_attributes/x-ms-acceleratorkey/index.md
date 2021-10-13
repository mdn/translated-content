---
title: x-ms-acceleratorkey
slug: Web/HTML/Global_attributes/x-ms-acceleratorkey
tags:
  - Attribut
  - HTML
  - Non-standard
  - Reference
translation_of: Web/HTML/Global_attributes/x-ms-acceleratorkey
original_slug: Web/HTML/Attributs_universels/x-ms-acceleratorkey
---
<div>{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}</div>

<p>La propriété <code><strong>x-ms-acceleratorkey</strong></code> fournit une méthode pour déclarer si une touche d'accélération a été affectée à un élément.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Pour fournir un raccourci clavier pour un élément qui n'utilise pas JavaScript, on utilisera l'attribut <code><a href="/fr/docs/Web/HTML/Attributs_universels/accesskey">accesskey</a></code>.</p>
</div>

<p>{{Non-standard_Inline}} Cette propriété non-standard est spécifique à Internet Explorer et à Microsoft Edge.</p>

<p>La propriété <code>x-ms-acceleratorkey</code> permet d'indiquer sur l'arbre d'accessibilité (utilisé par les outils d'assistance tels que les lecteurs d'écran) qu'une touche d'accélération existe. Cet attribut ne fournit pas le comportement déclenché par cette touche. Il est nécessaire de fournir les gestionnaires d'évènements associés tels que <code>onkeypress</code>, <code>onkeydown</code> ou <code>onkeyup</code> afin de traiter l'utilisation de la touche dans l'application.</p>



<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: html">&lt;button x-ms-acceleratorkey="string"&gt;...&lt;/button&gt;</pre>

<h2 id="Valeur">Valeur</h2>

<p>Cette propriété peut être une chaîne de caractères avec le nom de la touche accélératrice :</p>

<ul>
 <li><code>"Ctrl+B"</code> pour indiquer la combinaison des touches <kbd>Ctrl</kbd> et <kbd>B</kbd>.</li>
 <li><code>"J"</code> pour indiquer la touche <kbd>J</kbd> uniquement.</li>
 <li><code>"Ctrl+; then K"</code> (cf. <a href="https://help.manuscript.com/7558/fogbugz-keyboard-shortcuts#For_Your_Server_or_non-Ocelot_Keyboard_Shortcuts">FogBugz’s old keyboard mode</a>). Une approche plus compliquée mais qui ne remplace pas les raccourcis clavier fournis par le navigateur ou le système d'exploitation.</li>
</ul>

<h2 id="See_Also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Mozilla/Tech/XUL/Propri%C3%A9t%C3%A9s/accessKey">L'attribut universel <code>accesskey</code></a></li>
 <li><a href="/fr/docs/Web/CSS/-ms-accelerator">La propriété CSS spécifique <code>-ms-accelerator</code></a></li>
 <li><a href="/fr/docs/Web/API/Microsoft_API_extensions">Les extensions spécifiques à Microsoft</a></li>
</ul>
