---
title: '<pre> : l''élément de texte préformaté'
slug: Web/HTML/Element/pre
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/pre
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML<strong> <code>&lt;pre&gt;</code></strong> représente du texte préformaté, généralement écrit avec une police à chasse fixe. Le texte est affiché tel quel, les espaces utilisés dans le document HTML seront retranscrits.</p>

<div class="note">
<p><strong>Note :</strong> Il est nécessaire d'échapper les caractères '<code>&lt;</code>' en '<code>&amp;lt;</code>' afin de s'assurer que le code écrit entre les éléments ne soit pas interprété de façon involontaire.</p>
</div>

<div>{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("cols")}} {{non-standard_inline}}{{deprecated_inline}}</dt>
 <dd>Cet attribut contient le nombre <em>préféré</em> de caractères qu'une ligne devrait avoir. Cet attribut était un synonyme non-standard de {{htmlattrxref("width", "pre")}}. Afin d'obtenir cet effet, il est plutôt conseillé d'utiliser la propriété {{cssxref("width")}}.</dd>
 <dt>{{htmlattrdef("width")}} {{deprecated_inline}}</dt>
 <dd>Cet attribut contient le nombre <em>préféré</em> de caractères qu'une ligne devrait avoir. Bien qu'implémenté, cet attribut n'a aucun effet visuel. Pour obtenir cet effet, il est plutôt conseillé d'utiliser {{cssxref("width")}}.</dd>
 <dt>{{htmlattrdef("wrap")}} {{non-standard_inline}}</dt>
 <dd>Cet attribut est une indication sur la façon de gérer le dépassement d'une ligne. Les navigateurs modernes ignorent cette indication et cet attribut n'engendre aucun effet visuel. Pour obtenir cet effet, il faut utiliser la propriété CSS {{cssxref("white-space")}}.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;pre&gt;
body {
  color:red;
}
&lt;/pre&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","200","120")}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Il est important de fournir une description alternative pour toute image ou diagramme créé avec du texte préformaté. Cette description alternative devrait décrire clairement, et de façon concise, le contenu du diagramme.</p>

<p>Les personnes souffrant de troubles de la vision et/ou naviguant à l'aide d'outils d'assistance comme des lecteurs d'écran peuvent ne pas comprendre le diagramme si celui-ci est construit avec des lettres et symboles.</p>

<p>Pour légender un tel diagramme, on pourra utiliser une combinaison d'éléments {{HTMLElement("figure")}} et {{HTMLElement("figcaption")}} relié via un attribut {{htmlattrxref("id")}} et les attributs <a href="/fr/docs/Accessibilité/ARIA">ARIA</a> <code>role</code> et <code>aria-labelledby</code> afin que le texte soit annoncé comme une image et que l'élément <code>figcaption</code> fournisse la description alternative.</p>

<h3 id="Exemple">Exemple</h3>

<pre>&lt;figure role="img" aria-labelledby="legende-vache"&gt;
  &lt;pre&gt;
  _____________
&lt; Oh la vache !&gt;
  -------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  &lt;/pre&gt;
  &lt;figcaption id="legende-vache"&gt;
    Une vache qui dit « Oh la vache ! ». La vache est illustrée avec du texte à chasse fixe.
  &lt;/figcaption&gt;
&lt;/figure&gt;
</pre>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content">Comprendre les règles WCAG 1.1</a></li>
 <li><em><a href="https://www.w3.org/TR/WCAG20-TECHS/H86.html">H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0</a></em><a href="https://www.w3.org/TR/WCAG20-TECHS/H86.html"> (en anglais)</a></li>
</ul>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9">Contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Tous les rôles sont autorisés.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLPreElement")}}</td>
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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-pre-element', '&lt;pre&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification majure depuis {{SpecName("HTML5 W3C")}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'grouping-content.html#the-pre-element', '&lt;pre&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Aucune modification majeure depuis {{SpecName("HTML4.01")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/text.html#h-9.3.4', '&lt;pre&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>Dépréciation de l'attribut  <code>cols</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.pre")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés CSS {{cssxref('white-space')}} et {{cssxref('word-break')}}</li>
</ul>
