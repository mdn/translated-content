---
title: Survol des technologies JavaScript
slug: Web/JavaScript/JavaScript_technologies_overview
tags:
  - Beginner
  - DOM
  - JavaScript
translation_of: Web/JavaScript/JavaScript_technologies_overview
---
<div>{{JsSidebar("Introductory")}}</div>

<h2 id="Introduction">Introduction</h2>

<p><a href="/fr/docs/Web/HTML">HTML</a> est utilisé pour définir la structure et le contenu d'une page web, <a href="/fr/docs/Web/CSS">CSS</a> permet de définir la mise en forme, le style graphique avec lequel afficher le contenu. <a href="/fr/docs/Web/JavaScript">JavaScript</a> permet quant à lui d'ajouter des fonctionnalités d'interaction pour créer des applications web riches en contenu.</p>

<p>Cependant, le terme « JavaScript » au sens large regroupe divers éléments très différents : le langage cœur (ECMAScript) d'une part et les <a href="/fr/docs/Web/Reference/API">API Web</a> d'autre part et notamment le DOM (Document Object Model, ou Modèle d'Objet du Document).</p>

<h2 id="JavaScript_le_langage_(ECMAScript)">JavaScript, le langage (ECMAScript)</h2>

<p>Le langage JavaScript (au sens strict) est standardisé par le comité ECMA TC39 sous la forme d'un langage intitulé <a href="/fr/docs/Web/JavaScript/Language_Resources">ECMAScript</a>.</p>

<p>Ce langage est aussi utilisé dans des environnements différents des navigateurs web, comme par exemple dans <a href="https://nodejs.org/">node.js</a>.</p>

<h3 id="Quelles_sont_les_caractéristiques_d'ECMAScript">Quelles sont les caractéristiques d'ECMAScript?</h3>

<p>Entre autres choses, ECMAScript définit :</p>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale">La syntaxe du langage</a> (règles d'interprétation (parsing), mots-clés, flux d'instructions, initialisation littérale d'objets...)</li>
 <li>Le mécanisme de traitement d'erreurs ({{jsxref("Instructions/throw","throw")}}, {{jsxref("Instructions/try...catch","try...catch")}} capacité qu'a l'utilisateur de créer des types d'erreurs personnalisés)</li>
 <li>Les types de variables (booléen, nombre, chaîne de caractères, fonction, objet...)</li>
 <li>L'objet global. Dans l'environnement d'un navigateur, cet objet global est l'objet {{domxref("Window","window")}}. ECMAScript ne définit ici que les API accessibles depuis l'objet global (peu importe l'environnement qui peut être différent d'un navigateur) (par exemple {{jsxref("parseInt","parseInt()")}}, {{jsxref("parseFloat","parseFloat()")}}, {{jsxref("decodeURI","decodeURI()")}}, {{jsxref("encodeURI","encodeURI()")}}...)</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">Le mécanisme d'héritage</a> basé sur le concept de prototype</li>
 <li>Les objets et fonctions natifs ({{jsxref("JSON")}}, {{jsxref("Math")}}, méthodes de<code> </code> {{jsxref("Array.prototype")}}, méthodes d'introspection d'<code>Object</code>...)</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">Le mode strict</a>.</li>
</ul>

<h3 id="Support_des_navigateurs">Support des navigateurs</h3>

<p>En octobre 2016, les versions actuelles des principaux navigateurs web supportent <a href="/fr/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla">ECMAScript 5.1</a> et <a href="/fr/docs/Web/JavaScript/Nouveaut%C3%A9s_et_historique_de_JavaScript/Support_ECMAScript_6_par_Mozilla">ECMAScript 2015 (aussi appelé ES6)</a> mais certaines anciennes versions n'implémentent que ECMAScript 5.</p>

<h3 id="Futur">Futur</h3>

<p>La sixième édition majeure d'ECMAScript a été officiellement approuvée et publiée en tant que standard le 17 juin 2015 par l'assemblée générale ECMA. Depuis cette édition, les éditions ECMAScript sont publiées à un rythme annuel.</p>

<h3 id="API_d'internationalisation">API d'internationalisation</h3>

<p>La <a href="http://ecma-international.org/ecma-402/1.0/">spécification ECMAScript pour l'API d'internationalisation</a> est un ajout à la spécification du langage ECMAScript, également standardisée par ECMA TC39. L'API d'internationalisation ajoute la collation (c'est-à-dire la comparaison entre chaînes de caractères), le formatage de nombres, dates et heures dans les applications JavaScript en prenant en compte la locale de l'utilisateur pour fournir le meilleur format. Le standard initial a été aprouvé en décembre 2012 ; le statut de son implémentation dans les différents navigateurs est disponible sur la page de l'objet {{jsxref("Intl")}}. La spécification d'internationalisation est également ratifiée annuellement et les navigateurs améliorent leur implémentation au fur et à mesure.</p>

<h2 id="Les_API_du_DOM_(Document_Object_Model)">Les API du DOM (<em>Document Object Model</em>)</h2>

<h3 id="WebIDL">WebIDL</h3>

<p>La <a href="http://www.w3.org/TR/WebIDL/">spécification WebIDL</a> fournit le lien entre les technologies DOM et ECMAScript.</p>

<h3 id="Le_cœur_du_DOM">Le cœur du DOM</h3>

<p>Le Modèle d'Objet du Document (<em>Document Object Model</em> ou DOM en anglais) est une convention multi-plateforme, indépendante du langage utilisée pour représenter et interagir avec les objets dans les documents HTML, XHTML et XML. Les objets de <strong>l'arbre du DOM</strong> peuvent être accédés et manipulés en utilisant des méthodes sur les objets. Les fonctionnalités principales du DOM sont standardisées par le {{Glossary("W3C")}}. Il définit les interfaces offertes par les documents HTML et XML sans cibler un langage de manipulation précis. Parmi les éléments définis par le DOM, on peut trouver:</p>

<ul>
 <li>La structure du document, un modèle d'arbre et l'architecture d'événements DOM dans le <a href="http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html">noyau DOM</a> : {{domxref("Node")}}, {{domxref("Element")}}, {{domxref("DocumentFragment")}}, {{domxref("Document")}}, {{domxref("DOMImplementation")}}, {{domxref("Event")}}, {{domxref("EventTarget")}}, …</li>
 <li>Une définition moins rigoureuse de l'architecture d'événements DOM, ainsi que des événements spécifiques avec <a href="http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html">les événements DOM</a>.</li>
 <li>D'autres éléments tels que le <a href="http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html">DOM Traversal</a> et le <a href="http://html5.org/specs/dom-range.html">DOM Range</a>.</li>
</ul>

<p>Du point de vue d'ECMAScript, les objets définis dans la spécification DOM sont appelés des « objets hôtes ».</p>

<h3 id="Le_DOM_HTML">Le DOM HTML</h3>

<p><a href="/fr/docs/Web/HTML">HTML</a>, le langage de balisage du Web, est spécifié en termes de DOM. Comme une couche au-dessus des concepts abstraits définis dans DOM Core, HTML définit également la <em>signification </em>des éléments. Le DOM HTML inclut des choses telles que la propriété <code>className</code> sur des éléments HTML, or des API telles que {{domxref("document.body")}}.<br>
 <br>
 La spécification HTML définit aussi les restrictions sur les documents ; par exemple, elle requiert que tous les enfants d'un élément {{HTMLRef("ul")}} (une liste non-ordonnée) soient des éléments {{HTMLRef("li")}}, puisqu'ils représentent les éléments d'une liste. En général, cela interdit aussi l'utilisation d'éléments et d'attributs qui ne sont pas définis dans un certain standard.<br>
 <br>
 Si vous cherchez la documentation sur l'objet {{domxref("Document")}}, l'objet {{domxref("Window")}} ou sur les autres éléments du DOM, vous pouvez lire <a href="/fr/docs/Web/API/Référence_du_DOM_Gecko">la documentation relative au DOM</a>.</p>

<h2 id="D'autres_API_fréquemment_utilisées">D'autres API fréquemment utilisées</h2>

<ul>
 <li>Les fonctions {{domxref("WindowTimers.setTimeout", "setTimeout")}} et {{domxref("WindowTimers.setInterval", "setInterval")}} ont d'abord été spécifiées dans l'interface {{domxref("Window")}} du standard HTML.</li>
 <li><a href="https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html" title="http://dev.w3.org/2006/webapi/XMLHttpRequest-2/">XMLHttpRequest</a> : une API qui permet d'envoyer des requêtes HTTP asynchrones (voir aussi : <a href="/fr/docs/Web/API/XMLHttpRequest">la page MDN sur XMLHttpRequest</a>)</li>
 <li><a href="http://dev.w3.org/csswg/cssom/">CSS Object Model</a> : le CSSOM est utilisé pour abstraire les règles CSS sous forme d'objets. (voir aussi : <a href="/fr/docs/Web/API/CSS_Object_Model">la page MDN sur CSSOM</a>)</li>
 <li><a href="https://html.spec.whatwg.org/multipage/workers.html">WebWorkers</a> : une API qui permet d'effectuer des calculs parallèles (voir aussi : <a href="/fr/docs/Web/API/Web_Workers_API">la page MDN sur cette API</a>)</li>
 <li><a href="https://html.spec.whatwg.org/multipage//#network">WebSockets</a> : une API qui permet d'effectuer des communications bi-directionnelles de bas-niveau (voir aussi : <a href="/fr/docs/WebSockets">la page MDN sur cette API</a>)</li>
 <li><code><a href="https://html.spec.whatwg.org/multipage/scripting.html#2dcontext">Canvas2DContext</a></code> : Une API de dessin pour l'élément {{htmlelement("canvas")}}.</li>
</ul>
