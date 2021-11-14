---
title: Contenu
slug: Learn/CSS/Howto/Generated_content
tags:
  - CSS
  - CSS:Premiers_pas
translation_of: Learn/CSS/Howto/Generated_content
original_slug: Apprendre/CSS/Comment/Generated_content
---
<p>{{LearnSidebar}}</p>

<p>Cet article décrit différentes façons d'utiliser CSS afin d'ajouter du contenu à un document affiché. Vous pouvez modifier votre feuille de style afin d'ajouter du contenu textuel ou des images.</p>

<p>L'un des avantages majeurs de CSS est qu'il permet de séparer la forme du contenu. Toutefois, il existe des situations où il est pertinent d'indiquer du contenu dans la feuille de style et pas dans le document. Il est possible d'indiquer du contenu textuel ou des images dans une feuille de style lorsque ce contenu est fortement couplé à la structure du document.</p>

<div class="note">
<p><strong>Note :</strong> Le contenu spécifié dans la feuille de style ne fait pas partie du DOM.</p>
</div>

<p>Ajouter du contenu dans une feuille de style peut engendrer des complications. Ainsi, si vous avez un document disponible en plusieurs langues et que ces versions partagent une même feuille de style, lorsque vous indiquez du contenu dans la feuille de style qui doit être traduit, vous devrez organiser ces parties de la feuille de style dans différents fichiers et faire le nécessaire pour qu'elles soient rattachées aux différentes versions du document.</p>

<p>Ce problème ne se pose pas si le contenu indiqué est composé de symboles ou d'images qui peuvent s'appliquer dans toutes les langues et pour toutes les cultures.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Contenu_textuel">Contenu textuel</h3>

<p>CSS peut insérer du contenu textuel avant ou après un élément. Pour cela, on créera une règle en ajoutant {{ cssxref("::before") }} ou {{ cssxref("::after") }} au sélecteur. Dans la déclaration, on utilisera la propriété {{ cssxref("content") }} avec comme valeur le texte à utiliser.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">Un texte où j'en ai besoin de &lt;span class="ref"&gt; quelque chose&lt;/span&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.ref::before {
  font-weight: bold;
  color: navy;
  content: "Réference ";
}</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{ EmbedLiveSample('Contenu_textuel', 600, 30) }}</p>

<p>L'encodage d'une feuille de styles est UTF-8 par défaut mais cela peut être défini dans le lien, dans la feuille de style même ou d'autres façons. Pour plus de détails, voir <a href="https://www.w3.org/TR/CSS21/syndata.html#q23">4.4 Représentation de la feuille de style CSS</a> dans la spécification CSS.</p>

<p>Des caractères individuels peuvent également être spécifiés avec un échappement avec la barre oblique inversée. Ainsi, "\265B" pourra être utilisé pour générer le symbole de la reine noire aux échecs : ♛. Pour plus de détails, voir <a href="https://www.w3.org/TR/CSS21/syndata.html#q24">Référencer des caractères non représentés par l'encodage</a> et <a href="https://www.w3.org/TR/CSS21/syndata.html#q6">Caractères et casse</a> dans la spécification CSS.</p>

<h3 id="Contenu_avec_une_image">Contenu_avec_une_image</h3>

<p>Afin d'ajouter une image avant ou après un élément, vous pouvez indiquer l'URL d'un fichier image dans la valeur de la propriété {{ cssxref("content") }}.</p>

<p>Cette règle ajoute un espace et une icône après chaque lien qui possède la classe <code>glossary</code> :</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;a href="developer.mozilla.org" class="glossary"&gt;developer.mozilla.org&lt;/a&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">a.glossary::after {
   content: " " url("glossary-icon.gif");
}</pre>

<p>{{ EmbedLiveSample('Contenu_avec_une_image', 600, 40) }}</p>
