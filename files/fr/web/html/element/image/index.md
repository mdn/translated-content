---
title: <image>
slug: Web/HTML/Element/image
tags:
  - Element
  - HTML
  - Non-standard
  - Obsolete
  - Reference
translation_of: Web/HTML/Element/image
---
<div>{{HTMLRef}}{{obsolete_header}}{{non-standard_header}}</div>

<p>L'élément HTML <strong><code>&lt;image&gt;</code></strong> est un élément obsolète, remplacé depuis longtemps par l'élément standard {{HTMLElement("img")}}.</p>

<div class="warning">
<p><strong>Attention :</strong> Si vous souhaitez afficher des images, c'est l'élément {{HTMLElement("img")}} qui doit être utilisé.</p>
</div>

<p>Bien que les navigateurs essaient de convertir cet élément {{HTMLElement("img")}}, cela peut avoir des résultats incertains voire inattendus.</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cet élément ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>La plupart du temps, les navigateurs essaieront de convertir cet élément en un élément <code>&lt;img&gt;</code> si l'attribut {{htmlattrxref("src", "img")}} est utilisé. Créer un élément <code>&lt;image&gt;</code> sans attribut entraînera la création d'un objet <code>HTMLElement</code> avec le nom "image". Si l'élément est créé avec un attribut <code>src</code>, ce sera un objet <code>HTMLImageElement</code> qui sera créé et son nom sera "img".</p>

<p>{{Compat("html.elements.image")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'élément {{HTMLElement("img")}} qui doit être utilisé afin d'afficher une image dans un document.</li>
 <li>L'élément {{HTMLElement("picture")}} qui permet de sélectionner parmi plusieurs images en fonction de requête média afin d'avoir des images <em>responsive</em>.</li>
</ul>
