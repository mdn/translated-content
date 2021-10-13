---
title: <main>
slug: Web/HTML/Element/main
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/main
---
<div>{{HTMLRef}}</div>

<p>L’élément HTML <strong><code>&lt;main&gt;</code></strong> représente le contenu majoritaire du {{HTMLElement("body")}} du document. Le contenu principal de la zone est constitué de contenu directement en relation, ou qui étend le sujet principal du document ou de la fonctionnalité principale d'une application.</p>

<p>Un document ne peut pas avoir plus d'un seul élément <code>&lt;main&gt;</code> sans attribut {{htmlattrxref("hidden")}}.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément prend uniquement en charge <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Notes">Notes</h2>

<ul>
 <li>Ce contenu doit être unique dans le document, excluant tout contenu qui est répété sur plusieurs documents comme des barres latérales, liens de navigation, informations relative au droit d'auteur, logo du site, et champs de recherche (sauf, bien entendu, si la fonctionnalité principale du document est un champ de recherche).</li>
 <li><code>&lt;main&gt;</code> ne contribue pas au plan du document. Autrement dit, à la différence d'éléments tels que {{HTMLElement("body")}}, les niveaux de titre comme {{HTMLElement("h2")}}, etc. <code>&lt;main&gt;</code> n'affecte pas la structure même de la page, c'est un élément purement informatif.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;!-- autre contenu --&gt;

&lt;main&gt;
  &lt;h1&gt;Pommes&lt;/h1&gt;
  &lt;p&gt;La pomme est le fruit à pépin du pommier.&lt;/p&gt;

  &lt;article&gt;
    &lt;h2&gt;Pomme rouge&lt;/h2&gt;
    &lt;p&gt;Ce sont des pommes rouges vives très communes dans les supermarchés.&lt;p&gt;
    &lt;p&gt;... &lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
  &lt;/article&gt;

  &lt;article&gt;
    &lt;h2&gt;La Granny Smith&lt;/h2&gt;
    &lt;p&gt;Ces pommes juteuses, vertes, font une très belle garniture pour les tartes aux pommes.&lt;p&gt;
    &lt;p&gt;... &lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
  &lt;/article&gt;

&lt;/main&gt;

&lt;!-- Autre contenu --&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","300","200")}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<h3 id="Balisage_du_document">Balisage du document</h3>

<p>L'élément <code>&lt;main&gt;</code> a le rôle d'une <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Main_role">balise <code>main</code></a>. Dans le contexte de l'accessibilité, les <a href="/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA">balises</a> peuvent être utilisées par les outils d'assistance afin d'identifier et de naviguer rapidement entre les grandes sections d'un document. On privilégiera l'élément <code>&lt;main&gt;</code> à l'ajout du <code>role="main"</code>, à moins qu'il faille <a href="/fr/docs/Web/HTML/Element/main#Compatibilité_des_navigateurs">prendre en charge d'anciens navigateurs</a>.</p>

<h3 id="Navigation_rapide">Navigation rapide</h3>

<p>La navigation rapide (aussi appelée <em>skip navigation</em> ou <em>skipnav</em> en anglais) est une technique permettant aux outils d'assistance de passer certaines sections de contenu répétés (menu de navigation, bannières, etc.). Cela permet à l'utilisateur d'accéder plus rapidement au contenu principal de la page.</p>

<p>Ajouter un attribut {{htmlattrxref("id")}} à l'élément <code>&lt;main&gt;</code> lui permet d'être une cible pour la navigation rapide.</p>

<pre>&lt;body&gt;
  &lt;a href="#main-content"&gt;Aller au contenu principal&lt;/a&gt;

  &lt;!-- Contenu relatif à la navigation et en-tête du document --&gt;

  &lt;main id="main-content"&gt;
    &lt;!-- Contenu principal de la page --&gt;
  &lt;/main&gt;
&lt;/body&gt;
</pre>

<ul>
 <li><a href="https://webaim.org/techniques/skipnav/">WebAIM : Liens et navigation rapide (en anglais)</a></li>
</ul>

<h3 id="Mode_lecture">Mode lecture</h3>

<p>Les fonctionnalités « mode lecture » d'un navigateur vérifient la présence d'un élément <code>&lt;main&gt;</code> ainsi que la présence de <a href="/fr/docs/Web/HTML/Element/Heading_Elements">titres</a> et de <a href="/fr/docs/Web/HTML/Element#Sectionnement_du_contenu">sections</a> lors de la convertion du document pour le mode lecture.</p>

<ul>
 <li><a href="https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9">Construire des sites web pour le mode lecture de Safari et pour les autres applications de lecture (en anglais)</a></li>
</ul>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Categories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Omission de balise</dfn></th>
   <td>Aucune, les balises d'ouverture et de fermeture sont toutes les deux obligatoires.</td>
  </tr>
  <tr>
   <th scope="row">Éléments parents autorisés</th>
   <td>Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>, uniquement si c'est <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element">un élément hiérarchiquement correct pour un élément <code>&lt;main&gt;</code></a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Le rôle <code>main</code> est appliqué à <code>&lt;main&gt;</code> par défaut, et le rôle <code><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role">presentation</a></code> est également autorisé.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLElement")}}</td>
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
   <td>{{SpecName('HTML5.1', 'grouping-content.html#the-main-element', '&lt;main&gt;')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Pas de changement de {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#semantics.html#the-main-element', '&lt;main&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Retrait de la restriction sur l'interdiction de l'utilisation de l'élément <code>&lt;main&gt;</code> comme descendant d'un élément {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}. Retrait de la restriction interdisant d'utiliser plusieurs fois <code>&lt;main&gt;</code> dans un document.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'grouping-content.html#the-main-element', '&lt;main&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition intiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.main")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<div>
<ul>
 <li>Les éléments qui permettent de structurer un document HTML
  <ul>
   <li>{{HTMLElement("html")}}</li>
   <li>{{HTMLElement("head")}}</li>
   <li>{{HTMLElement("body")}}</li>
  </ul>
 </li>
 <li>Les éléments liés au plan d'un document HTML :
  <ul>
   <li>{{HTMLElement("article")}}</li>
   <li>{{HTMLElement("aside")}}</li>
   <li>{{HTMLElement("footer")}}</li>
   <li>{{HTMLElement("header")}}</li>
   <li>{{HTMLElement("nav")}}</li>
  </ul>
 </li>
</ul>
</div>
