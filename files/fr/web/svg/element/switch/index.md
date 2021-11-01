---
title: <switch>
slug: Web/SVG/Element/switch
tags:
  - Element
  - SVG
  - SVG Conteneur
translation_of: Web/SVG/Element/switch
---
<div>{{SVGRef}}</div>

<p>L'élément <code>switch</code> évalue les attributs {{ SVGAttr("requiredFeatures") }}, {{ SVGAttr("requiredExtensions") }} et {{ SVGAttr("systemLanguage") }} de ses éléments enfants directs, dans l'ordre, puis affiche le premier élément pour lequel les attributs renvoient <code>true</code>. Tous les autres seront ignorés et donc non affichés. Si l'élément enfant est un élément conteneur tel que {{ SVGElement("g") }}, alors l'intégralité du contenu de cet enfant est soit traité/rendu soit ignoré/non rendu.</p>

<p>Notez que la valeur des propriétés <code>display</code> et <code>visibility</code> n'ont aucun effet sur le traitement du <code>switch</code>. En particulier, appliquer une propriété <code>display</code> à <code>none</code> sur l'élément enfant d'un <code>switch</code> n'a aucun effet sur le résultat du test <code>true/false</code> associé au traitement des éléments par le <code>switch</code>.</p>

<h2 id="Contexte_d'utilisation">Contexte d'utilisation</h2>

<p>{{svginfo}}</p>

<h2 id="Attributs">Attributs</h2>

<h3 id="Attributs_globaux">Attributs globaux</h3>

<ul>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_traitement_conditionnel" title="en/SVG/Attribute#ConditionalProccessing">Attributs de traitement conditionnel</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_base" title="en/SVG/Attribute#Core">Attributs de base</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Événement_graphiques" title="en/SVG/Attribute#GraphicalEvent">Attributs d'événements graphiques</a></li>
 <li><a href="/fr/docs/Web/SVG/Attribute#Attributs_de_présentation" title="en/SVG/Attribute#Presentation">Attributs de présentation</a></li>
 <li>{{ SVGAttr("class") }}</li>
 <li>{{ SVGAttr("style") }}</li>
 <li>{{ SVGAttr("externalResourcesRequired") }}</li>
 <li>{{ SVGAttr("transform") }}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Cet élément implémente l'interface <code><a href="/fr/docs/DOM/SVGSwitchElement" title="en/DOM/SVGSwitchElement">SVGSwitchElement</a></code>.</p>

<h2 id="Exemple">Exemple</h2>

<p>Cet exemple montre comment afficher un texte différent selon les paramètres de langue du navigateur. L'élément <code>switch</code> affichera le premier élément enfant dont l'attribut <code>systemLanguage</code> correspond au language de l'utilisateur, ou l'élément sans attribut <code>systemLanguage</code> si aucun ne correspond.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;svg width="100%" viewBox="0 -20 100 50"&gt;
   &lt;switch&gt;
      &lt;text systemLanguage="ar"&gt;مرحبا&lt;/text&gt;
      &lt;text systemLanguage="de,nl"&gt;Hallo!&lt;/text&gt;
      &lt;text systemLanguage="en"&gt;Hello!&lt;/text&gt;
      &lt;text systemLanguage="en-us"&gt;Howdy!&lt;/text&gt;
      &lt;text systemLanguage="en-gb"&gt;Wotcha!&lt;/text&gt;
      &lt;text systemLanguage="en-au"&gt;G'day!&lt;/text&gt;
      &lt;text systemLanguage="es"&gt;Hola!&lt;/text&gt;
      &lt;text systemLanguage="fr"&gt;Bonjour!&lt;/text&gt;
      &lt;text systemLanguage="ja"&gt;こんにちは&lt;/text&gt;
      &lt;text systemLanguage="ru"&gt;Привет!&lt;/text&gt;
      &lt;text&gt;☺&lt;/text&gt;
   &lt;/switch&gt;
&lt;/svg&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{ EmbedLiveSample('Exemple') }}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('SVG2', 'struct.html#SwitchElement', '&lt;switch&gt;')}}</td>
   <td>{{Spec2('SVG2')}}</td>
   <td>Clarifie l'évaluation de l'attribut {{SVGAttr("systemLanguage")}}</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'struct.html#SwitchElement', '&lt;switch&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("svg.elements.switch")}}</p>
