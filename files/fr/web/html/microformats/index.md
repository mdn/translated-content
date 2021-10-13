---
title: Microformats
slug: Web/HTML/microformats
tags:
  - Composing
  - HTML
  - Microformats
  - NeedsContent
  - NeedsMarkupWork
  - Reference
  - SEO
  - Search
translation_of: Web/HTML/microformats
---
<p>Les <a href="https://microformats.org/"><dfn>microformats</dfn></a> (parfois abrégés <strong>μF</strong>) sont des normes utilisées pour intégrer la sémantique et les données structurées dans le HTML, et fournir une API à utiliser par les moteurs de recherche, les agrégateurs et autres outils. Ces modèles minimaux de HTML sont utilisés pour marquer des entités allant d'informations fondamentales à des informations spécifiques à un domaine, telles que des personnes, des organisations, des événements et des lieux. Les microformats utilisent des vocabulaires de soutien pour décrire les objets et des paires nom-valeur pour attribuer des valeurs à leurs propriétés. Les propriétés sont transportées dans des attributs de classe qui peuvent être ajoutés à tout élément HTML, tandis que les valeurs des données réutilisent le contenu des éléments HTML et les attributs sémantiques. Microformats2 est une mise à jour de microformats qui offre un moyen plus simple d'annoter la syntaxe structurée et les vocabulaires HTML que les approches précédentes utilisant RDFa et microdata qui nécessitent l'apprentissage de nouveaux attributs.</p>

<p>Les microformats sont pris en charge par tous les principaux moteurs de recherche. Les moteurs de recherche bénéficient grandement d'un accès direct à ces données structurées, car elles leur permettent de comprendre les informations contenues dans les pages Web et de fournir des résultats plus pertinents aux utilisateurs. En plus d'être lisible par les machines, leur format est conçu pour être facilement lu par les humains.</p>

<ul>
	<li>Pour créer un objet microformats, les noms de classe h-* sont utilisés dans l'attribut class.</li>
	<li>Pour ajouter une propriété à un objet, les noms de classe p-*, u-*, dt-*, e-* sont utilisés sur un des descendants de l'objet.</li>
</ul>


<p>Il existe <a href="http://microformats.org/wiki/microformats2#Parsers">différentes bibliothèques d'analyse pour la plupart des langages de programmation</a> qui permettent d'analyser les données microformats2.</p>

<h2 id="How_Microformats_Work">Comment fonctionnent les microformats</h2>

<p>Un auteur d'une page web peut ajouter des microformats via le contenu HTML. Ainsi, si un auteur veut s'identifier via un élément, il peut utiliser une classe <a href="http://microformats.org/wiki/h-card">h-card</a> :</p>

<h3 id="HTML_Example">Exemple HTML</h3>

<pre class="brush: html">&lt;a class="h-card" href="http://alice.example.com"&gt;Alice Blogger&lt;/a&gt;</pre>

<p>Lorsqu'un parseur de microformat détectera cette donnée, il saura que cette page contient une « carte » qui décrit une personne ou une organisation nommée <code>Alice Blogger</code> et dont l'URL est <code>http://alice.example.com/</code>. Le parseur rend ensuite cette donnée accessible via des API qui pourront être utilisées par des applications.</p>

<p>Comme dans cet exemple, certains modèles de balisage ne nécessitent qu'un seul nom de classe racine de microformat, que les analyseurs syntaxiques utilisent pour trouver quelques propriétés génériques telles que <code>name</code>, <code>url</code> et <code>photo</code>.</p>
</div>

<h2 id="Microformats_Prefixes">Préfixes et microformats</h2>

<p>Tous les microformats se composent d'une racine et d'un ensemble de propriétés. Les propriétés sont optionnelles et peuvent avoir plusieurs valeurs (si une application a besoin d'une seule valeur, elle pourra utiliser la première valeur d'une propriété). Les données hiérarchisées sont représentées avec des microformats imbriqués.</p>

<p>Tous les noms de classe des microformats utilisent des préfixes. La syntaxe des préfixes <strong>est indépendante de celle des vocabulaires</strong> (développées séparément).</p>

<ul>
 <li><strong>"h-*" pour les racines</strong> (ex. "h-card", "h-entry", "h-feed"…). Ces racines indiquent un type ciblant un vocabulaire de propriétés donné. Ainsi :

  <ul>
   <li><a href="http://microformats.org/wiki/h-card">h-card</a> décrit une personne ou une organisation</li>
   <li><a href="http://microformats.org/wiki/h-entry">h-entry</a> décrit un contenu en ligne épisodique ou daté (tel qu'un billet de blog)</li>
   <li><a href="http://microformats.org/wiki/h-feed">h-feed</a> décrit un flux (médias, billets, etc)</li>
   <li>D'autres exemples sont décrits <a href="http://microformats.org/wiki/microformats2#v2_vocabularies">sur le wiki microformats2.</a></li>
  </ul>
 </li>
 <li><strong>"p-*" pour les propriétés textuelles</strong> (ex. "p-name", "p-summary")
  <ul>
   <li>Un contenu texte. Pour certains éléments HTML, certains attributs spécifiques seront utilisés (ex. <a href="/fr/docs/Web/HTML/Element/Img#attr-alt"><code>alt</code></a> pour <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/abbr#attr-title"><code>title</code></a> pour <a href="/fr/docs/Web/HTML/Element/abbr"><code>&lt;abbr&gt;</code></a>).</li>
  </ul>
 </li>
 <li><strong>"u-*" pour les propriétés qui sont des URL</strong> (ex. "u-url", "u-photo", "u-logo")
  <ul>
   <li>Analyse spéciale : attributs d'éléments <a href="/fr/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code></a>/<a href="/fr/docs/Web/HTML/Element/a#attr-href"><code>href</code></a>, <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a>/<a href="/fr/docs/Web/HTML/Element/Img#attr-src"><code>src</code></a>, <a href="/fr/docs/Web/HTML/Element/object"><code>&lt;object&gt;</code></a>/<a href="/fr/docs/Web/HTML/Element/object#attr-data"><code>data</code></a> etc. attributs sur le contenu des éléments.</li>
  </ul>
 </li>
 <li><strong>"dt-*" pour les propriétés temporelles (date/heure)</strong> (ex. "dt-start", "dt-end", "dt-bday")
  <ul>
   <li>Analyse syntaxique spéciale : attribut <a href="/fr/docs/Web/HTML/Element/time#attr-datetime"><code>datetime</code></a> de l'élément <a href="/fr/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a>, <a href="https://microformats.org/wiki/value-class-pattern" title="value-class-pattern">value-class-pattern</a> et analyse séparée de la valeur date-heure pour plus de lisibilité.</li>
  </ul>
 </li>
 <li><strong>"e-*" pour les arborescences</strong> où l'intégralité de la hiérarchie de l'élément est la valeur à récupérer (ex. "e-content"). Le préfixe "e-" peut être retenu en anglais comme "<em><strong>e</strong>lement tree</em>", "<em><strong>e</strong>mbedded markup</em>" ou "<em><strong>e</strong>ncapsulated markup</em>".</li>
</ul>

<h2 id="Some_microformats_examples">Exemples de microformats</h2>

<h3 id="h-card">h-card</h3>

<p>Le microformat <a href="http://microformats.org/wiki/h-card">h-card</a> représente une personne ou une organisation.</p>

<p>La valeur de chaque propriété est définie en HTML via l'attribut <code>class</code>.</p>

<h4 id="Example_h-card">Exemple de h-card</h4>

<pre class="brush: html">&lt;p class="h-card"&gt;
  &lt;img class="u-photo" src="http://example.org/photo.png" alt="" /&gt;
  &lt;a class="p-name u-url" href="http://example.org"&gt;Joe Bloggs&lt;/a&gt;
  &lt;a class="u-email" href="mailto:joebloggs@example.com"&gt;joebloggs@example.com&lt;/a&gt;,
  &lt;span class="p-street-address"&gt;17 Austerstræti&lt;/span&gt;
  &lt;span class="p-locality"&gt;Reykjavík&lt;/span&gt;
  &lt;span class="p-country-name"&gt;Iceland&lt;/span&gt;
&lt;/p&gt;</pre>

<table class="standard-table">
  <tbody>
    <tr>
      <th>Propriété</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><strong><code>p-name</code></strong></td>
      <td>Le nom complet et formaté de la personne ou de l'organisation.</td>
    </tr>
    <tr>
      <td><strong><code>u-email</code></strong></td>
      <td>L'adresse électronique.</td>
    </tr>
    <tr>
      <td><strong><code>u-photo</code></strong></td>
      <td>Une photo pour la personne ou l'organisation.</td>
    </tr>
    <tr>
      <td><strong><code>u-url</code></strong></td>
      <td>La page d'accueil ou une URL représentant la personne ou l'organisation.</td>
    </tr>
    <tr>
      <td><strong><code>u-uid</code></strong></td>
      <td>Un identifiant universel unique (de préférence une URL canonique).</td>
    </tr>
    <tr>
      <td><strong><code>p-street-address</code></strong></td>
      <td>L'adresse composée du numéro et du nom de la rue.</td>
    </tr>
    <tr>
      <td><strong><code>p-locality</code></strong></td>
      <td>La ville ou le village de résidence.</td>
    </tr>
    <tr>
      <td><strong><code>p-country-name</code></strong></td>
      <td>Le nom du pays de résidence.</td>
    </tr>
  </tbody>
</table>

<h4 id="Nested_h-card_example">Exemple de h-card imbriqué</h4>

<pre class="brush: html">&lt;div class="h-card"&gt;
  &lt;a class="p-name u-url"
   href="http://blog.lizardwrangler.com/"
  &gt;Mitchell Baker&lt;/a&gt;
  (&lt;a class="p-org h-card"
    href="http://mozilla.org/"
   &gt;Mozilla Foundation&lt;/a&gt;)
&lt;/div&gt;</pre>

<p>Cela fournira le JSON suivant :</p>

<pre class="brush: json">{
  "items": [{
  "type": ["h-card"],
  "properties": {
    "name": ["Mitchell Baker"],
    "url": ["http://blog.lizardwrangler.com/"],
    "org": [{
    "value": "Mozilla Foundation",
    "type": ["h-card"],
    "properties": {
      "name": ["Mozilla Foundation"],
      "url": ["http://mozilla.org/"]
    }
    }]
  }
  }]
}</pre>

<div class="note">
  <p><strong>Note :</strong> Le h-card imbriqué récupère des valeurs implicites pour <code>name</code> et <code>url</code>.</p>
</div>

<h3 id="h-entry">h-entry</h3>

<p>Le microformat <a href="http://microformats.org/wiki/h-entry">h-entry</a> représente un contenu épisodique ou daté présent sur le Web. Il est généralement utilisé pour du contenu qui est présenté dans un flux (ex. les billets de blog).</p>

<pre class="brush: html">&lt;article class="h-entry"&gt;
  &lt;h1 class="p-name"&gt;Microformats are amazing&lt;/h1&gt;
  &lt;p&gt;Published by &lt;a class="p-author h-card" href="http://example.com"&gt;W. Developer&lt;/a&gt;
   on &lt;time class="dt-published" datetime="2013-06-13 12:00:00"&gt;13&lt;sup&gt;th&lt;/sup&gt; June 2013&lt;/time&gt;&lt;/p&gt;

  &lt;p class="p-summary"&gt;In which I extoll the virtues of using microformats.&lt;/p&gt;

  &lt;div class="e-content"&gt;
  &lt;p&gt;Blah blah blah&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre>

<h4 id="Properties">Propriétés</h4>

<table class="standard-table">
  <tbody>
    <tr>
      <th>Propriété</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><strong><code>p-name</code></strong></td>
      <td>Nom ou titre pour l'entrée.</td>
    </tr>
    <tr>
      <td><strong><code>p-author</code></strong></td>
      <td>L'auteur de l'entrée (éventuellement imbriquée avec une h-card).</td>
    </tr>
    <tr>
      <td><strong><code>dt-published</code></strong></td>
      <td>La date de publication de l'entrée.</td>
    </tr>
    <tr>
      <td><strong><code>p-summary</code></strong></td>
      <td>Un résumé de l'entrée.</td>
    </tr>
    <tr>
      <td><strong><code>e-content</code></strong></td>
      <td>Le contenu complet de l'entrée.</td>
    </tr>
  </tbody>
</table>

<h4 id="Parsed_reply_h-entry_example">Exemple de microformat h-entry analysé</h4>

<pre class="brush: html">&lt;div class="h-entry"&gt;
  &lt;p&gt;&lt;span class="p-author h-card"&gt;
    &lt;a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" &gt;&lt;img class="u-photo" src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"/&gt;&lt;/a&gt;
    &lt;a class="p-name u-url" href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"&gt;Greg McVerry&lt;/a&gt;&lt;/span&gt;
     Replied to &lt;a class="u-in-reply-to" href="https://developer.mozilla.org/en-US/docs/Web/HTML/microformats"&gt;a post on
   &lt;strong&gt;developer.mozilla.org&lt;/strong&gt; &lt;/a&gt;:
  &lt;/p&gt;
   &lt;p class="p-name e-content"&gt;Hey thanks for making this microformats resource&lt;/p&gt;
   &lt;p&gt; &lt;a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"&gt;Greg McVerry&lt;/a&gt;
  published this &lt;a class="u-url url" href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"&gt;&lt;time class="dt-published"
   datetime="2019-05-31T14:19:09+0000"&gt;31 May 2019&lt;/time&gt;&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;</pre>

<pre class="brush: json">{
  "items": [
    {
      "type": [ "h-entry" ],
      "properties": {
        "in-reply-to": [ "https://developer.mozilla.org/en-US/docs/Web/HTML/microformats" ],
        "name": [ "Hey thanks for making this microformats resource" ],
        "url": [ "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource" ],
        "published": [ "2019-05-31T14:19:09+0000" ],
        "content": [
          {
            "html": "Hey thanks for making this microformats resource",
            "value": "Hey thanks for making this microformats resource",
            "lang": "en"
          }
        ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Greg McVerry" ],
              "photo": [ "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" ],
              "url": [ "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" ]
            },
            "lang": "en",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "en"
    }
  ]
}</pre>

<h3 id="h-feed">h-feed</h3>

<p>Le microformat <a href="http://microformats.org/wiki/h-feed">h-feed</a> est un flux de billets <a href="http://microformats.org/wiki/h-entry" title="h-entry">h-entry</a>.</p>

<h4 id="Example_h-feed">Example h-feed</h4>

<pre class="brush: html">&lt;div class="h-feed"&gt;
  &lt;h1 class="p-name"&gt;Microformats Blogs&lt;/h1&gt;
  &lt;article class="h-entry"&gt;
  &lt;h2 class="p-name"&gt;Microformats are amazing&lt;/h2&gt;
  &lt;p&gt;Published by &lt;a class="p-author h-card" href="http://example.com"&gt;W. Developer&lt;/a&gt;
     on &lt;time class="dt-published" datetime="2013-06-13 12:00:00"&gt;13&lt;sup&gt;th&lt;/sup&gt; June 2013&lt;/time&gt;
  &lt;/p&gt;
  &lt;p class="p-summary"&gt;In which I extoll the virtues of using microformats.&lt;/p&gt;
  &lt;div class="e-content"&gt; &lt;p&gt;Blah blah blah&lt;/p&gt; &lt;/div&gt;
  &lt;/article&gt;
&lt;/div&gt;</pre>

<h4 id="Properties_2">Propriétés</h4>

<table class="standard-table">
  <tbody>
    <tr>
      <th>Propriété</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><strong><code>p-name</code></strong></td>
      <td>Nom du flux.</td>
    </tr>
    <tr>
      <td><strong><code>p-author</code></strong></td>
      <td>Auteur du flux, éventuellement intégré via une h-card.</td>
    </tr>
  </tbody>
</table>

<h4 id="Children">Enfants</h4>

<table class="standard-table">
 <tbody>
  <tr>
   <td><strong>h-entry</strong></td>
  </tr>
  <tr>
   <td>Des objets représentants des éléments du flux.</td>
  </tr>
 </tbody>
</table>

<h3 id="h-event">h-event</h3>

<p>Le microformat <code>h-event</code> permet de représenter des évènements.</p>

<pre class="brush: html">&lt;div class="h-event"&gt;
  &lt;h1 class="p-name"&gt;Microformats Meetup&lt;/h1&gt;
  &lt;p&gt;From
  &lt;time class="dt-start" datetime="2013-06-30 12:00"&gt;30&lt;sup&gt;th&lt;/sup&gt; June 2013, 12:00&lt;/time&gt;
  to &lt;time class="dt-end" datetime="2013-06-30 18:00"&gt;18:00&lt;/time&gt;
  at &lt;span class="p-location"&gt;Some bar in SF&lt;/span&gt;&lt;/p&gt;
  &lt;p class="p-summary"&gt;Get together and discuss all things microformats-related.&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="Properties_3">Propriétés</h4>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propriété</th>
   <th>Description</th>
  </tr>
  <tr>
   <td><strong><code>p-name</code></strong></td>
   <td>Nom ou titre pour l'évènement.</td>
  </tr>
  <tr>
   <td><strong><code>p-summary</code></strong></td>
   <td>Résumé de l'évènement.</td>
  </tr>
  <tr>
   <td><strong><code>dt-start</code></strong></td>
   <td>Date/heure de début de l'évènement</td>
  </tr>
  <tr>
   <td><strong><code>dt-end</code></strong></td>
   <td>Date/heure de fin de l'évènement</td>
  </tr>
  <tr>
   <td><strong><code>p-location</code></strong></td>
   <td>Emplacement / lieu de l'évènement, éventuellement indiqué par une h-card.</td>
  </tr>
 </tbody>
</table>

<h4 id="Parsed_h-event_Example">Exemple d'analyse</h4>

<pre class="brush: html">&lt;div class="h-event"&gt;
  &lt;h2 class="p-name"&gt;IndieWeb Summit&lt;/h2&gt;
  &lt;time class="dt-start" datetime="2019-06-29T09:00:00-07:00"&gt;June 29, 2019 at 9:00am  (-0700)&lt;/time&gt;&lt;br&gt;through &lt;time class="dt-end" datetime="2019-06-30T18:00:00-07:00"&gt;June 30, 2019 at 6:00pm (-0700)&lt;/time&gt;&lt;br&gt;
  &lt;div class="p-location h-card"&gt;
    &lt;div&gt;
    &lt;span class="p-name"&gt;Mozilla&lt;/span&gt;
     &lt;/div&gt;
     &lt;div&gt;
      &lt;span class="p-street-address"&gt;1120 NW Couch St&lt;/span&gt;,
      &lt;span class="p-locality"&gt;Portland&lt;/span&gt;,
      &lt;span class="p-region"&gt;Oregon&lt;/span&gt;,
      &lt;span class="p-country"&gt;US&lt;/span&gt;
     &lt;/div&gt;
       &lt;data class="p-latitude" value="45.52345"&gt;&lt;/data&gt;
      &lt;data class="p-longitude" value="-122.682677"&gt;&lt;/data&gt;
  &lt;/div&gt;
    &lt;div class="e-content"&gt;Come join us
     &lt;/div&gt;
    &lt;div&gt;
     &lt;span class="p-author h-card"&gt;&lt;a class="u-url p-name" href="https://aaronparecki.com"&gt;Aaron Parecki&lt;/a&gt;&lt;/span&gt; Published this &lt;a href="https://aaronparecki.com/2019/06/29/1/" class="u-url"&gt;event &lt;/a&gt;on &lt;time class="dt published" datetime="2019-05-25T18:00:00-07:00"&gt;May 5th, 2019&lt;/time&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

<pre class="brush: json">{
  "items": [
    {
      "type": [ "h-event" ],
      "properties": {
        "name": [ "IndieWeb Summit" ],
        "url": [ "https://aaronparecki.com/2019/06/29/1/" ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Aaron Parecki" ],
              "url": [ "https://aaronparecki.com"]
            },
            "lang": "en",
            "value": "Aaron Parecki"
          }
        ],
        "start": [ "2019-06-29T09:00:00-07:00" ],
        "end": [ "2019-06-30T18:00:00-07:00" ],
        "published": [ "2019-05-25T18:00:00-07:00" ],
        "content": [
          {
            "html": "Come join us",
            "value": "Come join us",
            "lang": "en"
          }
        ],
        "location": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Mozilla" ],
              p-street-address: [ "1120 NW Couch St" ]
              "locality": [ "Portland" ],
              "region": [ "Oregon" ],
              "country": [ "US" ],
              "latitude": [ "45.52345" ],
              "longitude": [ "-122.682677" ]
            },
            "lang": "en",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "en"
    }
  ]
}</pre>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>Pris en charge dans tous les navigateurs prenant en charge l'attribut class et son API DOM.</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
	<li><a href="/fr/docs/Web/HTML/Global_attributes/class">attribut <code>class</code></a></li>
  <li><a href="https://fr.wikipedia.org/wiki/Microformat">Microformat</a> sur Wikipedia</li>
  <li><a href="http://microformats.org/">Le site officiel des microformats</a></li>
  <li><a href="http://microformats.org/wiki/search_engines">Prise en charge des différents moteurs de recherche</a> sur le site microformats</li>
  <li><a href="https://indiewebcamp.com/microformats">Les microformats sur IndieWebCamp</a></li>
</ul>
