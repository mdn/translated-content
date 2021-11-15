---
title: Alignment subject
slug: Glossary/Alignment_Subject
translation_of: Glossary/Alignment_Subject
original_slug: Glossaire/Alignment_Subject
---
<p>Dans le <a href="/fr/docs/Web/CSS/CSS_Box_Alignment">CSS Box Alignment (alignement des boîtes en CSS)</a> l'<strong>alignment subject</strong> (le sujet de l'alignement) est la ou les choses alignées par la propriété.</p>

<p>Pour {{cssxref("justify-self")}} et {{cssxref("align-self")}}, l'<strong>alignment subject</strong> est la marge de la boite sur laquelle la propriété est définie, en utilisant le mode d'écriture de cette zone.</p>

<p>Pour {{cssxref("justify-content")}} et {{cssxref("align-content")}}, le mode d'écriture de la boîte est également utilisé. La définition du sujet de l'alignement dépend du mode de mise en page utilisé.</p>

<dl>
 <dt>Conteneurs de bloc (comprenant les cellules de tableau)</dt>
 <dd>L'ensemble du contenu du bloc en une seule unité.</dd>
 <dt>Conteneurs multi-colonne</dt>
 <dd>Les boites de colonne, avec tout espacement inséré entre les boites de colonne ajoutées aux espaces de colonne appropriés.</dd>
 <dt>Conteneurs flex</dt>
 <dd>Pour {{cssxref("justify-content")}}, les éléments flexibles dans chaque ligne de flexible.<br>
 Pour {{cssxref("align-content")}}, les lignes flexibles. Notez que cela n’a d’effet que sur les conteneurs flexibles multilignes.</dd>
 <dt>Conteneurs grid</dt>
 <dd>La grille suit l’axe approprié, avec tout espacement inséré entre les pistes ajoutées aux gouttières correspondantes. Les gouttières fusionnées sont traitées comme une seule opportunité d'insertion d'espace.</dd>
</dl>

<h2 id="Learn_more">Learn more</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Box_Alignment">CSS Box Alignment</a></li>
</ul>
