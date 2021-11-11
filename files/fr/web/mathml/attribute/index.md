---
title: Référence des attributs MathML
slug: Web/MathML/Attribute
tags:
  - MathML
  - 'MathML:Référence'
translation_of: Web/MathML/Attribute
---
<div>{{MathMLRef}}</div>

<div></div>

<p>Cette référence est une liste, dans l'ordre alphabétique, des attributs MathML. De plus amples détails sur chaque attribut sont disponibles sur les pages des <a href="/fr/docs/MathML/Element">éléments</a>.</p>

<div class="note">
<p><strong>Note :</strong></p>

<ul>
 <li>Les éléments MathML {{ MathMLElement("mstyle") }} et {{ MathMLElement("math") }} {{ gecko_minversion_inline("7.0") }} acceptent tous les attributs de tous les éléments de présentations MathML.</li>
 <li>Voir les <a href="/fr/docs/MathML/Attributes/Values">valeurs</a> pour des notes sur les valeurs et les unités utilisées en MathML.</li>
 <li>Les attributs <code>background</code>, <code>color</code>, <code>fontfamily</code>, <code>fontsize</code>, <code>fontstyle</code>, <code>fontweight</code> et <code>xlink:href</code> sont dépréciés.</li>
 <li>Les attributs <a href="/fr/docs/Glossaire/XLink">XLink</a> <code>xlink:actuate</code>, <code>xlink:href</code>, <code>xlink:show</code> et <code>xlink:type</code> sur les éléments MathML sont dépréciés.</li>
</ul>
</div>

<table class="standard-table">
 <thead>
  <tr>
   <th>Nom</th>
   <th>Éléments pouvant utiliser cet attribut</th>
   <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>accent</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mover") }}, {{ MathMLElement("munderover") }}</td>
   <td>Un booléen définissant si oui ou non l'opérateur doit être traité comme un accent.</td>
  </tr>
  <tr>
   <td><code>accentunder</code></td>
   <td>{{ MathMLElement("munder") }}, {{ MathMLElement("munderover") }}</td>
   <td>Un booléen définissant si oui ou non l'opérateur doit être traité comme un accent.</td>
  </tr>
  <tr>
   <td><code>actiontype</code></td>
   <td>{{ MathMLElement("maction") }}</td>
   <td>Une chaîne de caractère définissant l'action se produisant pour cet élément.</td>
  </tr>
  <tr>
   <td><code>align</code> {{deprecated_inline}}</td>
   <td>{{ MathMLElement("mtable") }}<br>
    {{ MathMLElement("munder") }}, {{ MathMLElement("mover") }}, {{ MathMLElement("munderover") }}<br>
    {{ MathMLElement("mstack") }}</td>
   <td>Définit les différents alignements de plusieurs éléments (consulter les pages des éléments pour plus de détails).</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>alignmentscope</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Un booléen définissant si oui ou non les colonnes d'un tableau doivent définir la portée de l'alignement.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }}<br>
    <code>altimg</code><br>
    <code>altimg-width</code><br>
    <code>altimg-height</code><br>
    <code>altimg-valign</code><br>
    <code>alttext</code></td>
   <td>{{ MathMLElement("math") }}</td>
   <td>Alternatives visuelles et textuelles.</td>
  </tr>
  <tr>
   <td><code>bevelled</code> {{deprecated_inline}}</td>
   <td>{{ MathMLElement("mfrac") }}</td>
   <td>Définit la manière dont la fraction est affichée.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>charalign</code></td>
   <td>{{ MathMLElement("mstack") }}</td>
   <td>Définit l'alignement horizontal des chiffres.</td>
  </tr>
  <tr>
   <td><code>close</code></td>
   <td>{{ MathMLElement("mfenced") }}</td>
   <td>Une chaîne de caractère pour le symbole fermant.</td>
  </tr>
  <tr>
   <td><code>columnalign</code></td>
   <td>{{ MathMLElement("mtable") }}, {{ MathMLElement("mtd") }}, {{ MathMLElement("mtr") }}, {{ MathMLElement("mlabeledtr") }}</td>
   <td>Définit l'alignement horizontal des cellules d'un tableau.</td>
  </tr>
  <tr>
   <td><code>columnlines</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit les bordures des colonnes d'un tableau.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>columnspacing</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit l'espace entre les colonnes d'un tableau.</td>
  </tr>
  <tr>
   <td><code>columnspan</code></td>
   <td>{{ MathMLElement("mtd") }}</td>
   <td>Un entier positif qui indique sur combien de colonnes s'étend une cellule d'un tableau.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>columnwidth</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit la largeur des colonnes d'un tableau.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>crossout</code></td>
   <td>{{ MathMLElement("mscarry") }}</td>
   <td>Définit le type de ligne à afficher pour rayer les retenues.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>decimalpoint</code></td>
   <td>{{ MathMLElement("mstyle") }}</td>
   <td>Si la valeur <code>decimalpoint</code> est utilisée pour définir l'<a href="/fr/docs/Web/MathML/Attribute#align">alignement</a>, cet attribut définit la caractère sur lequel aligner les colonnes des éléments {{ MathMLElement("mstack") }} et {{ MathMLElement("mtable") }}.</td>
  </tr>
  <tr>
   <td><code>denomalign</code> {{deprecated_inline}}</td>
   <td>{{ MathMLElement("mfrac") }}</td>
   <td>L'alignement du dénominateur sous la fraction.</td>
  </tr>
  <tr>
   <td><code>depth</code></td>
   <td>{{ MathMLElement("mpadded") }}</td>
   <td>Définit ou incrément la profondeur. Voir <a href="/fr/docs/MathML/Attributes/Values">longueur</a>.</td>
  </tr>
  <tr>
   <td><code>dir</code></td>
   <td>{{ MathMLElement("math") }}, {{ MathMLElement("mi") }}, {{ MathMLElement("mo") }}, {{ MathMLElement("mrow") }}, {{ MathMLElement("ms") }}, {{ MathMLElement("mtext") }}</td>
   <td>La direction du texte. Les valeurs possibles sont : ltr (<em>left to right</em> pour gauche à droite) ou rtl (<em>right to left</em> pour droite à gauche).</td>
  </tr>
  <tr>
   <td><code>display</code></td>
   <td>{{ MathMLElement("math") }}</td>
   <td>Définit le mode d'affichage. Les valeurs <code>block</code> et <code>inline</code> sont autorisées.</td>
  </tr>
  <tr>
   <td><code>displaystyle</code></td>
   <td>{{ MathMLElement("mstyle") }}, {{ MathMLElement("mtable") }}</td>
   <td>Un booléen indiquant si oui ou non plus d'espace vertical sera utilisé pour afficher les équations. S'il vaut <code>false</code>, l'affichage sera organisé de manière plus compacte.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>edge</code></td>
   <td>{{ MathMLElement("malignmark") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>equalcolumns</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Un booléen indiquant si oui ou non les colonnes doivent avoir la même hauteur totale.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>equalrows</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Un booléen indiquant si oui ou non les lignes doivent avoir la même hauteur totale.</td>
  </tr>
  <tr>
   <td><code>fence</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Un booléen indiquant si oui ou non l'opérateur clôture l'expression (comme les parenthèses). Il n'y a pas d'effet visuel associé à cet attribut.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>form</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Définit le rôle de l'opérateur dans une expression groupée.</td>
  </tr>
  <tr>
   <td><code>frame</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit toutes les bordures d'un élément {{ MathMLElement("mtable") }}. Les valeurs possibles sont : <code>none</code> (la valeur par défaut), <code>solid</code> et <code>dashed</code>.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>framespacing</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit l'espace à ajouter entre le tableau et la <code>frame</code>.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>groupalign</code></td>
   <td>{{ MathMLElement("maligngroup") }}, {{ MathMLElement("mtable") }}, {{ MathMLElement("mtd") }}, {{ MathMLElement("mtr") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code>height</code></td>
   <td>{{ MathMLElement("mglyph") }}, {{ MathMLElement("mpadded") }}, {{ MathMLElement("mspace") }}</td>
   <td>Définit la hauteur souhaitée. Voir les <a href="/fr/docs/MathML/Attributes/Values">longueurs</a> pour les différentes valeurs possibles.</td>
  </tr>
  <tr>
   <td><code>href</code></td>
   <td><em>Tous</em></td>
   <td>Utiliser pour créer un hyperlien vers un URI donné.</td>
  </tr>
  <tr>
   <td><code>id</code></td>
   <td><em>Tous</em></td>
   <td>Définit un identifiant unique associé à l'élément.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>indentalign</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>indentalignfirst</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>indentalignlast</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>indentshift</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>indentshiftfirst</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>indentshiftlast</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>indenttarget</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>infixlinebreakstyle</code></td>
   <td>{{ MathMLElement("mstyle") }}</td>
   <td>Définit le <code>linebreakstyle</code> par défaut à utiliser avec les opérateurs affixes.</td>
  </tr>
  <tr>
   <td><code>largeop</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Définit si oui ou non l'opérateur doit être affiché avec une taille plus grande que la normale</td>
  </tr>
  <tr>
   <td><code>length</code></td>
   <td>{{ MathMLElement("msline") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>linebreak</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>linebreakmultchar</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>linebreakstyle</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>lineleading</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mspace") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code>linethickness</code></td>
   <td>{{ MathMLElement("mfrac") }}</td>
   <td>L'épaisseur de la ligne de fraction horizontale.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>location</code></td>
   <td>{{ MathMLElement("mscarries") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>longdivstyle</code></td>
   <td>{{ MathMLElement("mlongdiv") }}</td>
   <td>Contrôle la mise en forme d'une division longue.</td>
  </tr>
  <tr>
   <td><code>lspace</code></td>
   <td>{{ MathMLElement("mo") }}, {{ MathMLElement("mpadded") }}</td>
   <td>Le nombre d'espaces avant l'opérateur (voir les <a href="/fr/docs/MathML/Attributes/Values">longueurs</a> pour les différentes valeurs possibles).</td>
  </tr>
  <tr>
   <td><code>lquote</code></td>
   <td>{{ MathMLElement("ms") }}</td>
   <td>Le caractère de début de citation (selon <code>dir</code>) encadrant le contenu. La valeur par défaut est "<code>&amp;quot;</code>".</td>
  </tr>
  <tr>
   <td><code>mathbackground</code></td>
   <td><em>Tous</em></td>
   <td>La couleur de fond. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</td>
  </tr>
  <tr>
   <td><code>mathcolor</code></td>
   <td><em>Tous</em></td>
   <td>La couleur du texte. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</td>
  </tr>
  <tr>
   <td><code>mathsize</code></td>
   <td>{{ MathMLElement("mi") }}, {{ MathMLElement("mn") }}, {{ MathMLElement("mo") }}, {{ MathMLElement("ms") }}, {{ MathMLElement("mtext") }}</td>
   <td>La taille du contenu. À partir de Gecko 20.0 {{geckoRelease("20")}} des valeurs sans unité sont autorisées et interprétées comme multiples de la taille par défaut.</td>
  </tr>
  <tr>
   <td><code>mathvariant</code></td>
   <td>{{ MathMLElement("mi") }}, {{ MathMLElement("mn") }}, {{ MathMLElement("mo") }}, {{ MathMLElement("ms") }}, {{ MathMLElement("mtext") }}</td>
   <td>La classe logique de l'identifiant, varie selon la typographie.</td>
  </tr>
  <tr>
   <td><code>maxsize</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>La taille maximum de l'opérateur.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>minlabelspacing</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Une valeur de longueur définissant l'espace minimum entre un{{ MathMLElement("mlabeledtr") }} et la cellule adjacente du tableau.</td>
  </tr>
  <tr>
   <td><code>minsize</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>La taille minimum de l'opérateur.</td>
  </tr>
  <tr>
   <td><code>movablelimits</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Définit si oui ou non les indices au-dessus et en-dessous peuvent apparaître respectivement comme exposants et indices.</td>
  </tr>
  <tr>
   <td><code>notation</code></td>
   <td>{{ MathMLElement("menclose") }}</td>
   <td>Une liste de notations, séparées par des blancs, à appliquer aux éléments fils.</td>
  </tr>
  <tr>
   <td><code>numalign</code> {{deprecated_inline}}</td>
   <td>{{ MathMLElement("mfrac") }}</td>
   <td>L'alignement du numérateur au dessus de la barre de fraction.</td>
  </tr>
  <tr>
   <td><code>open</code></td>
   <td>{{ MathMLElement("mfenced") }}</td>
   <td>Une chaîne de caractère pour un délimiteur ouvrant.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>overflow</code></td>
   <td>{{ MathMLElement("math") }}</td>
   <td>Si l'expression est trop grande pour être insérée dans l'espace alloué, cet attribut définit la façon dont est géré l'affichage.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>position</code></td>
   <td>{{ MathMLElement("msgroup") }}, {{ MathMLElement("msrow") }}, {{ MathMLElement("mscarries") }}, {{ MathMLElement("msline") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code>rowalign</code></td>
   <td>{{ MathMLElement("mtable") }}, {{ MathMLElement("mtd") }}, {{ MathMLElement("mtr") }}</td>
   <td>Définit l'alignement vertical des cellules d'un tableau.</td>
  </tr>
  <tr>
   <td><code>rowlines</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit les bordures des lignes d'un tableau.</td>
  </tr>
  <tr>
   <td><code>rowspacing</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit l'espace entre les lignes d'un tableau.</td>
  </tr>
  <tr>
   <td><code>rowspan</code></td>
   <td>{{ MathMLElement("mtd") }}</td>
   <td>Un entier positif ou nul dont la valeur indique sur combien de lignes la celulle doit s'étendre.</td>
  </tr>
  <tr>
   <td><code>rspace</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Le nombre d'espaces après l'opérateur.</td>
  </tr>
  <tr>
   <td><code>rquote</code></td>
   <td>{{ MathMLElement("ms") }}</td>
   <td>Le symbole de fin de citation (dépendant de <code>dir</code>) pour encadrer le contenu. La valeur par défaut est "<code>&amp;quot;</code>".</td>
  </tr>
  <tr>
   <td><code>scriptlevel</code></td>
   <td>{{ MathMLElement("mstyle") }}</td>
   <td>Contrôle principalement la taille de la police. Plus le <code>scriptlevel</code> est grand, plus la taille de police est petite.</td>
  </tr>
  <tr>
   <td><code>scriptminsize</code></td>
   <td>{{ MathMLElement("mstyle") }}</td>
   <td>Définit la taille de police minimale à utiliser avec les changements de <code>scriptlevel</code>.<br>
    À partir de Gecko 20.0 {{geckoRelease("20")}} les valeurs sans unités et en pourcents sont autorisées et interprétées comme des multiples de la valeur « 8pt ».</td>
  </tr>
  <tr>
   <td><code>scriptsizemultiplier</code></td>
   <td>{{ MathMLElement("mstyle") }}</td>
   <td>Définit le multiplicateur à utiliser pour ajuster la taille de police après les changements de <code>scriptlevel</code>.</td>
  </tr>
  <tr>
   <td><code>selection</code></td>
   <td>{{ MathMLElement("maction") }}</td>
   <td>L'élément fils auquel s'applique l'action.</td>
  </tr>
  <tr>
   <td><code>separator</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Il n'y a pas d'effet visuel associé à cet attribut. Il définit si l'opérator doit être interprété comme un séparateur.</td>
  </tr>
  <tr>
   <td><code>separators</code></td>
   <td>{{ MathMLElement("mfenced") }}</td>
   <td>Une suite de plusieurs caractères (zéro ou plus) devant être utilisés en tant que séparateurs.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>shift</code></td>
   <td>{{ MathMLElement("msgroup") }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>side</code></td>
   <td>{{ MathMLElement("mtable") }}</td>
   <td>Définit la position à laquelle les éléments {{ MathMLElement("mlabeledtr") }} devraient être placés.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>src</code></td>
   <td>{{ MathMLElement("mglyph") }}</td>
   <td>L'emplacement de l'image ressource.</td>
  </tr>
  <tr>
   <td>{{ unimplemented_inline() }} <code>stackalign</code></td>
   <td>{{ MathMLElement("mstack") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code>stretchy</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Définit si oui ou non l'opérateur doit s'étirer afin d'être de la taille de l'élément adjacent.</td>
  </tr>
  <tr>
   <td><code>subscriptshift</code> {{deprecated_inline}}</td>
   <td>{{ MathMLElement("mmultiscripts") }}, {{ MathMLElement("msub") }}, {{ MathMLElement("msubsup") }}</td>
   <td>L'espace minimum qui doit être laissé entre l'indice et la ligne de base de l'expression.</td>
  </tr>
  <tr>
   <td><code>supscriptshift</code> {{deprecated_inline}}</td>
   <td>{{ MathMLElement("mmultiscripts") }}, {{ MathMLElement("msup") }}, {{ MathMLElement("msubsup") }}</td>
   <td>L'espace minimum qui doit être laissé entre l'exposant et la ligne de base de l'expression.</td>
  </tr>
  <tr>
   <td><code>symmetric</code></td>
   <td>{{ MathMLElement("mo") }}</td>
   <td>Si l'attribut <code>stretchy</code> vaut <code>true</code>, cet attribut définit si oui ou non l'opérateur doit être symétrique verticalement par rapport à l'axe mathématique imaginaire (la ligne de fraction centrée).</td>
  </tr>
  <tr>
   <td><code>voffset</code></td>
   <td>{{ MathMLElement("mpadded") }}</td>
   <td>Définit la position verticale d'un contenu fils.</td>
  </tr>
  <tr>
   <td><code>width</code></td>
   <td>{{ MathMLElement("mglyph") }}, {{ MathMLElement("mpadded") }}, {{ MathMLElement("mspace") }}, {{ MathMLElement("mtable") }}</td>
   <td>Définit la largeur souhaitée. Voir les <a href="/fr/docs/Web/MathML/Attribute/Values">longueurs</a> pour les valeurs possibles.</td>
  </tr>
  <tr>
   <td><code>xlink:href</code> {{deprecated_inline}}</td>
   <td><em>Tous</em></td>
   <td>Peut être utilisé pour former un hyperlien avec un URI donné. Cependant, il est conseillé d'utiliser l'attribut <code>href</code> à la place.</td>
  </tr>
  <tr>
   <td><code>xmlns</code></td>
   <td>{{ MathMLElement("math") }}</td>
   <td>Définit l'URI de l'espace de nom MathML (<code><a href="http://www.w3.org/1998/Math/MathML" rel="freelink">http://www.w3.org/1998/Math/MathML</a></code>)</td>
  </tr>
 </tbody>
</table>
