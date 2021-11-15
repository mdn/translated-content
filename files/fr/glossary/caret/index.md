---
title: Curseur "caret"
slug: Glossary/caret
tags:
  - Curseurs
  - Glossaire
  - Insertion
translation_of: Glossary/caret
original_slug: Glossaire/Curseur_caret
---
<p>Un curseur (<em>"caret"</em> parfois appelé "curseur de texte") est un indicateur affiché sur l'écran pour indiquer où la saisie de texte sera insérée. La plupart des interfaces utilisateur représentent le curseur à l'aide d'une fine ligne verticale ou d'une boîte de taille de caractère qui clignote, mais cela peut varier. Ce point dans le texte est appelé le point d'insertion. Le mot anglais "<em>caret</em>" différencie le point d'insertion du texte du curseur (<em>cursor</em>) de la souris.</p>

<p>Sur le web, un curseur "<em>caret</em>" est utilisé pour représenter le point d'insertion dans les éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}}, ainsi que tous les éléments dont l'attribut {{htmlattrxref("contenteditable")}} est défini, permettant ainsi au contenu de l'élément d'être édité par l'utilisateur.</p>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>{{interwiki("wikipedia", "Curseur")}} sur Wikipedia</li>
</ul>

<h3 id="CSS_lié_au_curseur_caret">CSS lié au curseur "<em>caret</em>"</h3>

<p>Vous pouvez définir la couleur du curseur pour le contenu modifiable d'un élément donné en définissant la propriété CSS {{cssxref("caret-color")}} de l'élément et une valeur appropriée de {{cssxref("&lt;color&gt;")}}.</p>

<h3 id="Éléments_HTML_susceptibles_de_présenter_un_signe_d'insertion">Éléments HTML susceptibles de présenter un signe d'insertion</h3>

<p>Ces éléments fournissent des champs ou des zones de saisie de texte et utilisent donc le signe d'insertion.</p>

<ul>
 <li><code><a href="/fr/docs/Web/HTML/Element/input/text">&lt;input type="text"&gt;</a></code></li>
 <li><code><a href="/fr/docs/Web/HTML/Element/input/password">&lt;input type="password"&gt;</a></code></li>
 <li><code><a href="/fr/docs/Web/HTML/Element/input/search">&lt;input type="search"&gt;</a></code></li>
 <li><code><a href="/fr/docs/Web/HTML/Element/input/date">&lt;input type="date"&gt;</a></code>, <code><a href="/fr/docs/Web/HTML/Element/input/time">&lt;input type="time"&gt;</a></code>, <code><a href="/fr/docs/Web/HTML/Element/input/datetime">&lt;input type="datetime"&gt;</a></code> et <code><a href="/fr/docs/Web/HTML/Element/input/datetime-local">&lt;input type="datetime-local"&gt;</a></code></li>
 <li><code><a href="/fr/docs/Web/HTML/Element/input/number">&lt;input type="number"&gt;</a></code><a href="/fr/docs/Web/HTML/Element/input/number">, </a><code><a href="/fr/docs/Web/HTML/Element/input/range">&lt;input type="range"&gt;</a></code></li>
 <li><code><a href="/fr/docs/Web/HTML/Element/input/email">&lt;input type="email"&gt;</a></code>, <code><a href="/fr/docs/Web/HTML/Element/input/%3Cinput_type=_tel_%3E">&lt;input type="tel"&gt;</a></code> et <code><a href="/fr/docs/Web/HTML/Element/input/url">&lt;input type="url"&gt;</a></code></li>
 <li>{{HTMLElement("textarea")}}</li>
 <li>Tout élément avec son attribut défini {{htmlattrxref("contenteditable")}}</li>
</ul>
