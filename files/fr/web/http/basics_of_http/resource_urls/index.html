---
title: URLs de type ressource
slug: Web/HTTP/Basics_of_HTTP/Resource_URLs
tags:
  - Guide
  - HTTP
  - Intermédiaire
  - Ressource
translation_of: Web/HTTP/Basics_of_HTTP/Resource_URLs
original_slug: Web/HTTP/Basics_of_HTTP/URLs_de_type_ressource
---
<div>{{HTTPSidebar}}</div>

<p>Les URLs de type ressource sont les URLs préfixées à l'aide du schéma <code>resource:</code>. Elles sont utilisées par Firefox ainsi que les modules complémentaires pour charger des ressources de manière interne, néanmoins, certaines informations associées sont disponibles pour les sites auxquels le navigateur accède.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Les URLs de type ressource sont composées de deux parties, un préfixe (<code>resource:</code>) et l'URL qui dirige vers la ressource que l'on souhaite charger :</p>

<pre class="syntaxbox">resource://&lt;url&gt;</pre>

<p>Voici un exemple :</p>

<pre>resource://gre/res/svg.css</pre>

<p>Pour plus de détails, vous pouvez consulter <a href="/fr/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web">Identifier des ressources sur le Web</a>.</p>

<p>Dans cet article, nous abordons les URIs ressources qui sont utilisées par Firefox pour pointer vers des ressources internes.</p>

<h2 id="Menaces">Menaces</h2>

<p>Étant donné que les informations partagées par les URLs <code>resource:</code> sont accessibles par les sites web, une page web pourrait être en mesure d'exécuter un script pour inspecter les ressources internes à Firefox telles que les préférences par défaut, ce qui pourrait constituer un problème important de confidentialité et de sécurité.</p>

<p>Par exemple, <a href="https://www.browserleaks.com/firefox">ce script sur Browserleaks</a> détaille les éléments accessibles de Firefox lorsque l'on appelle l'URL ressource. Le code de ce script est accessible à l'adresse <a href="https://browserleaks.com/firefox#more">https://browserleaks.com/firefox#more</a>.</p>

<p>Le fichier <a href="https://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575">firefox.js</a> passe les noms des préférences et leurs valeurs à la fonction <code>pref()</code>.</p>

<p>Les sites web peuvent aisément récupérer les préférences par défaut de Firefox en contournant la fonction <code>pref()</code> et en utilisant le script <code>resource:///defaults/preferences/firefox.js</code>.</p>

<p>De plus, certaines valeurs par défaut diffèrent selon les versions ou les installations, parmi lesquelles le système d'exploitation ou la langue d'utilisation, il est donc possible d'identifier les utilisateurs de manière distincte.</p>

<h2 id="Solution">Solution</h2>

<p>Afin de résoudre ce problème, Mozilla a modifié le comportement du chargement des URLs ressource via {{bug(863246)}}, rendu disponible à partir de Firefox 57 (Quantum).</p>

<p>Auparavant, les sites web étaient capables d'accéder à n'importe quelle URI <code>resource:</code>, celles de Firefox mais aussi celles des modules complémentaires. Ce comportement est désormais interdit par défaut.</p>

<p>Firefox nécessite néanmoins le chargement des ressources au sein d'un contenu web dans certains cas. Ainsi lorsque l'on souhaite accéder au code source d'une page à l'aide de "Code source de la page", un appel à <code>viewsource.css</code> via une URI <code>resource:</code> est nécessaire. Les ressources auxquelles le contenu web a besoin d'accéder ont été déplacées sous <code>resource://content-accessible/</code>, une partie isolée et ne contenant que des ressources n'étant pas confidentielles. De cette manière, il est possible d'exposer des ressources tout en réduisant la plupart des menaces.</p>

<div class="note">
<p><strong>Note :</strong> Il est recommandé de ne plus utiliser les URLs de type ressource lors du développement web ou de celui d'un module. Leur utilisation était peu fiable et la plupart ne fonctionnent plus.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<p><code>resource:</code> n'est pas défini dans une spécification RFC.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>resource: est disponible uniquement dans Firefox.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web">Identifier des ressources sur le Web</a></li>
 <li><a href="/fr/docs/Learn/Common_questions/What_is_a_URL">Qu'est-ce qu'une URL ?</a></li>
 <li><a href="https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml">Liste des schémas URI maintenue par l'IANA</a> (<code>resource:</code> est <a href="https://www.iana.org/assignments/uri-schemes/prov/resource">définie ici</a>)</li>
</ul>
