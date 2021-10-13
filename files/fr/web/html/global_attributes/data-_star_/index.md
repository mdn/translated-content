---
title: data-*
slug: Web/HTML/Global_attributes/data-*
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/data-*
original_slug: Web/HTML/Attributs_universels/data-*
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p>Les <a href="/fr/docs/Web/HTML/Attributs_universels">attributs universels</a> <code><strong>data-*</strong></code> forment une classe d'attributs, appelés attributs de données (<em>data attributes</em>). Ils permettent d'échanger des données propriétaire entre le <a href="/fr/docs/Web/HTML">HTML</a> et la représentation du <a href="/fr/docs/Web/API/Référence_du_DOM_Gecko">DOM</a>, qu'on peut manipuler avec des scripts.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}</div>

<p>De tels attributs sont disponibles via l'interface {{domxref("HTMLElement")}} de l'élément pour lequel l'attribut est utilisé. La propriété {{domxref("HTMLElement.dataset")}} permet d'accéder à l'attribut.<br>
 Ici, l'astérisque (<code>*</code>) peut être remplacée par n'importe quel nom valide selon <a class="external" href="https://www.w3.org/TR/REC-xml/#NT-Name">les règles appliquées aux noms XML</a> et en respectant les contraintes suivantes :</p>

<ul>
 <li>Le nom ne peut pas commencer par <code>xml</code>, quelle que soit la casse utilisée pour les différentes lettres</li>
 <li>Le nom ne doit pas contenir de point-virgule (<code>U+003A</code>)</li>
 <li>Le nom ne doit pas contenir de lettres majuscules de l'alphabet latin (<code>A</code> à <code>Z</code>).</li>
</ul>

<p>La propriété {{domxref("HTMLElement.dataset")}} est un objet {{domxref("StringMap")}} et la valeur d'un attribut de donnée nommé <code>data-test-valeur</code> sera accessible via <code>HTMLElement.dataset.testValeur</code> car les tirets (<code>U+002D</code>) sont remplacés par la majuscule de la lettre suivante (<a href="https://fr.wikipedia.org/wiki/CamelCase">CamelCase</a>).</p>

<h3 id="Utilisation">Utilisation</h3>

<p>Lorsqu'on ajoute des attributs de données <code>data-*</code>, on peut utiliser les éléments HTML classiques afin d'en faire des objets complexes et puissants. Ainsi, un <em>sprite</em> d'un vaisseau spatial dans un jeu peut être modélisé via un élément {{HTMLElement("img")}} auquel on associe un attribut <code>class</code> et plusieurs attributs de données sous la forme <code>data-*</code>.</p>

<pre class="brush: html">&lt;img class="spaceship cruiserX3" src="shipX3.png"
     data-ship-id="324" data-weapons="laserI laserII"
     data-x="414354" data-y="85160" data-z="31940"
     onclick="spaceships[this.dataset.shipId].blasted()"&gt;
&lt;/img&gt;
</pre>

<p>Pour un tutoriel plus avancé à propos des attributs de données HTML, lire l'article <a href="/fr/Apprendre/HTML/Comment/Utiliser_attributs_donnes">Manipuler les attributs de données</a>.</p>

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
   <td>{{SpecName('HTML WHATWG', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de modification depuis la dernière dérivation, {{SpecName('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}, pas de changement depuis {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Dérivée de {{SpecName('HTML WHATWG')}}, définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.global_attributes.data_attributes")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTML/Attributs_universels">Les différents attributs universels</a></li>
 <li>La propriété {{domxref("HTMLElement.dataset")}} qui permet d'accéder à ces valeurs et de les modifier.</li>
</ul>
