---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
tags:
  - Erreurs
  - Error
  - JavaScript
  - Sécurité
translation_of: Web/JavaScript/Reference/Errors/Property_access_denied
original_slug: Web/JavaScript/Reference/Erreurs/Property_access_denied
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Error: Permission denied to access property "x"
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("Error")}}.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p><span class="seoSummary">Il y a eu une tentative d'accès non-autorisée à un objet sur lequel vous n'avez pas de permissions. Généralement, cela se produit lorsqu'un élément {{HTMLElement("iframe")}} est chargée depuis un domaine différent et que <a href="/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript">la condition de même origine</a> n'est pas respectée.</span></p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"&gt;&lt;/iframe&gt;
    &lt;script&gt;
      onload = function() {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("iframe")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript">Condition d'origine (<em>same-origin policy</em>)</a></li>
</ul>
