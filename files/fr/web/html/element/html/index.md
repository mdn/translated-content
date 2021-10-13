---
title: '<html> : l''élément de racine du document HTML'
slug: Web/HTML/Element/html
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/html
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;html&gt;</code></strong> représente la racine d'un document HTML ou XHTML. Tout autre élément du document doit être un descendant de cet élément.</p>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément prend en charge <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("manifest")}}{{obsolete_inline}}</dt>
 <dd>Définit l'URI d'un manifeste de ressources signifiant que les ressources devraient être mises en cache localement. Voir <a href="/fr/docs/Utiliser_Application_Cache" title="en/Offline_resources_in_Firefox">Ressources hors-ligne dans Firefox</a> pour plus de détails.</dd>
 <dt>{{htmlattrdef("version")}}{{obsolete_inline}}</dt>
 <dd>Définit la version du document HTML <em>Document Type Definition</em> qui s'applique pour le document courant. Cet attribut n'est pas nécessaire car il est redondant avec l'information de version se trouvant dans la déclaration de type du document (<em>doctype</em>).</dd>
 <dt>{{htmlattrdef("xmlns")}}</dt>
 <dd>Définit l'espace de noms XML du document. La valeur par défaut est "http://www.w3.org/1999/xhtml". Cet attribut est obligatoire dans un document XML et optionnel dans un document de type text/html.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Le DOCTYPE utilisé dans l'exemple suivant indique que le document est un document HTML5.</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
  &lt;head&gt;...&lt;/head&gt;
  &lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>Puisque l'élément <code>&lt;html&gt;</code> est le premier élément dans un document, autre que les commentaires, il est désigné comme l'élément racine du document. Bien que cette balise soit implicite, ou non requise dans un document <a href="/fr/docs/Web/HTML">HTML</a>, il est requis dans un document <a href="/fr/docs/XHTML">XHTML</a> (à la fois pour la balise ouvrante et pour la balise fermante).</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>L'utilisation d'un attribut {{htmlattrxref("lang")}} <a href="https://www.ietf.org/rfc/bcp/bcp47.txt">valide (au sens de l'IETF)</a> pour l'élément HTML permettra aux lecteurs d'écran de déterminer la langue à utiliser pour l'énonciation. La balise de langage utilisée doit correspondre à celle utilisée pour la majorité du contenu de la page. Sans cet attribut, les lecteurs d'écran utiliseront la lange paramétrée par le système d'exploitation, ce qui pourra entraîner des défauts de prononciations.</p>

<p>Ajouter un attribut <code>lang</code> valide au sein de l'élément HTML permet également de s'assurer que les métadonnées importantes contenue dans l'élément {{HTMLElement("head")}}, telle que le titre de la page (cf. {{HTMLElement("title")}}) sont énoncées correctement.</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.1_%E2%80%94_Readable_Make_text_content_readable_and_understandable">Comprendre les règles WCAG 3.1</a></li>
 <li><em><a href="https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/meaning-doc-lang-id.html">Understanding Success Criterion 3.1.1 - W3C Understanding WCAG 2.0</a></em></li>
</ul>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td>Aucune</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td>Un élément {{HTMLElement("head")}} suivi par un élément {{HTMLElement("body")}}.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>La balise de début peut être absente si le premier objet appartenant à l'élément <code>&lt;html&gt;</code> n'est pas un commentaire.<br>
    La balise de fin peut être absente si l'élément <code>&lt;html&gt;</code> n'est pas directement suivi par un commentaire et qu'il contient un élément {{HTMLElement("body")}} qui n'est ni vide ou dont la balise de début est présente.</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Aucun élément, c'est la racine du document.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Aucun.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLHtmlElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-html-element', '&lt;html&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'semantics.html#the-html-element', '&lt;html&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Ajout de l'attribut <code>manifest</code>. L'attribut <code>version</code> est désormais obsolète.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/global.html#h-7.3', '&lt;html&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>L'attribut <code>version</code> est désormais déprécié.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.html")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'élément MathML de plus haut niveau : {{MathMLElement("math")}}</li>
 <li>L'élément SVG de plus haut niveau : {{SVGElement("svg")}}</li>
</ul>
