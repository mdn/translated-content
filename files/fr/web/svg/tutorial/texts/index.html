---
title: Textes
slug: Web/SVG/Tutorial/Texts
tags:
  - SVG
  - SVG:Tutoriel
translation_of: Web/SVG/Tutorial/Texts
original_slug: Web/SVG/Tutoriel/Texts
---
<div>
<div>{{PreviousNext("Web/SVG/Tutoriel/Motifs", "Web/SVG/Tutoriel/Transformations_de_base")}}</div>

<div> </div>

<p>Lorsqu'on parle de texte en SVG, on doit différencier deux choses pratiquement complètement séparées: 1. l'inclusion et l'affichage de texte dans une image, 2. les polices SVG. Un article séparé sera dédié aux polices SVG, celui-ci se concentrera uniquement sur le fait d'insérer du texte.</p>

<h2 id="Les_bases">Les bases</h2>

<p>Nous avons vu dans l'<a href="/fr/docs/Web/SVG/Tutoriel/Premiers_pas">exemple de l'introduction</a> que l'élément <code>text</code> peut être utilisé pour mettre du texte dans des documents SVG:</p>

<pre class="brush:xml">&lt;text x="10" y="10"&gt;Hello World!&lt;/text&gt;
</pre>

<p>Les attributs <code>x</code> et <code>y</code> déterminent où le texte apparaîtra dans la fenêtre. L'attribut {{SVGAttr("text-anchor")}} spécifie l'alignement horizontal du texte (si ce point doit être le côté gauche, droit ou le centre du texte) et l'attribut {{SVGAttr("dominant-baseline")}} l'alignement vertical (si ce point est le haut, le bas ou le centre).</p>

<p>De même que les formes basiques, la couleur des éléments texte peut être modifié avec l'attribut <code>fill</code> pour le remplissage ou <code>stroke</code> pour le contour. Tout deux peuvent également faire référence à un dégradé ou motif, ce qui rend la coloration de texte SVG beaucoup plus puissante que CSS 2.1.</p>

<h2 id="Définir_la_police">Définir la police</h2>

<p>Une partie essentielle d'un texte est la police dans laquelle il est affiché. SVG offre un ensemble d'attributs pour spécifier la police, dont beaucoup sont similaires à leurs équivalents CSS. Chacune des propriétés suivantes peut être définie en tant qu'attribut ou via une déclaration CSS: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("kerning")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} et {{SVGAttr("text-decoration")}}.</p>

<h2 id="Autres_éléments_liés_au_texte">Autres éléments liés au texte</h2>

<h3 id="tspan">tspan</h3>

<p>Cet élément est utilisé pour baliser des sous-parties d'un texte. Il doit s'agit d'un enfant d'un élément <code>text</code> ou d'un autre élément <code>tspan</code>. Un cas typique consiste à écrire un mot d'une phrase en gras:</p>
</div>

<pre class="brush:xml">&lt;text&gt;
  This is &lt;tspan font-weight="bold" fill="red"&gt;bold and red&lt;/tspan&gt;
&lt;/text&gt;
</pre>

<h4 id="exemple_jouable">Exemple jouable</h6>

<pre class="brush:html hidden">&lt;svg width="350" height="60" xmlns="http://www.w3.org/2000/svg"&gt;
&lt;text&gt;
  This is &lt;tspan font-weight="bold" fill="red"&gt;bold and red&lt;/tspan&gt;
&lt;/text&gt;

&lt;style&gt;&lt;![CDATA[
  text{
    dominant-baseline: hanging;
    font: 28px Verdana, Helvetica, Arial, sans-serif;
  }
]]&gt;&lt;/style&gt;
&lt;/svg&gt;
</pre>

<p>{{ EmbedLiveSample('exemple_jouable', '100%', 100) }}</p>

<p>L'élément tspan peut prendre les attributs personnalisés suivants:</p>

<p><strong>x</strong><br>
 Définit une nouvelle coordonnées absolue pour le texte qu'il contient. Cela écrase la position par défaut du texte. Cet attribut peut également contenir une liste de nombres, qui sont appliqués un par un à chaque caractère du tspan.</p>

<p><strong>dx</strong><br>
 Définit un décalage horizontal relatif à la position par défaut du texte. Ici aussi, vous pouvez founir une liste de valeurs qui seront appliquées consécutivement à chaque caractère.</p>

<p><strong>y</strong> et <strong>dy</strong> sont utilisés de la même manière mais pour le déplacement vertical.</p>

<p><strong>rotate</strong><br>
 Applique une rotation aux caractères, avec le nombre de degrés donné. Donner une liste de nombres aura pour effet d'appliquer une rotation à chaque caractère respectif, la dernière valeur sera appliquée aux caractères restants.</p>

<p><strong>textLength</strong><br>
 Un attribut quelque peu obscur qui donne la longueur calculée de la chaîne. Il est destiné au moteur de rendu pour lui permettre d'affiner la position des glyphes, lorsque la longueur de texte mesurée ne correspond pas à celle qui est indiquée.</p>

<h3 id="tref">tref</h3>

<p>L'élément <code>tref</code> permet de référencer un texte déjà définit, et recopie le texte à sa place. Vous devez utiliser l'attribut <code>xlink:href</code> pour définir l'élément à copier. Vous pouvez ensuite styliser le texte et modifier son apparence indépendamment de la source.</p>

<pre class="brush:xml">&lt;text id="example"&gt;This is an example text.&lt;/text&gt;

&lt;text&gt;
    &lt;tref xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#example" /&gt;
&lt;/text&gt;
</pre>

<h3 id="textPath">textPath</h3>

<p>Cet élément récupère via son attribut <code>xlink:href</code> un chemin arbitraire et aligne ses caractères le long de ce chemin:</p>

<pre class="brush:xml">&lt;path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" /&gt;
&lt;text&gt;
  &lt;textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path"&gt;
    A curve.
  &lt;/textPath&gt;
&lt;/text&gt;</pre>

<h4 id="code_jouable_2">Code jouable 2</h4>

<pre class="brush:html hidden">&lt;svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"&gt;
&lt;path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" /&gt;
&lt;text&gt;
  &lt;textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path"&gt;
    A curve.
  &lt;/textPath&gt;
&lt;/text&gt;

&lt;style&gt;&lt;![CDATA[
  text{
    dominant-baseline: hanging;
    font: 28px Verdana, Helvetica, Arial, sans-serif;
  }
]]&gt;&lt;/style&gt;
&lt;/svg&gt;
</pre>

<p>{{ EmbedLiveSample('code_jouable_2', '100%', 100) }}</p>

<div>{{PreviousNext("Web/SVG/Tutoriel/Motifs", "Web/SVG/Tutoriel/Transformations_de_base")}}</div>
