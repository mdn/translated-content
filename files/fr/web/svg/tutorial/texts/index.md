---
title: Textes
slug: Web/SVG/Tutorial/Texts
---

{{PreviousNext("Web/SVG/Tutoriel/Motifs", "Web/SVG/Tutoriel/Transformations_de_base")}}

Lorsqu'on parle de texte en SVG, on doit différencier deux choses pratiquement complètement séparées: 1. l'inclusion et l'affichage de texte dans une image, 2. les polices SVG. Un article séparé sera dédié aux polices SVG, celui-ci se concentrera uniquement sur le fait d'insérer du texte.

## Les bases

Nous avons vu dans l'[exemple de l'introduction](/fr/docs/Web/SVG/Tutoriel/Premiers_pas) que l'élément `text` peut être utilisé pour mettre du texte dans des documents SVG:

```xml
<text x="10" y="10">Hello World!</text>
```

Les attributs `x` et `y` déterminent où le texte apparaîtra dans la fenêtre. L'attribut {{SVGAttr("text-anchor")}} spécifie l'alignement horizontal du texte (si ce point doit être le côté gauche, droit ou le centre du texte) et l'attribut {{SVGAttr("dominant-baseline")}} l'alignement vertical (si ce point est le haut, le bas ou le centre).

De même que les formes basiques, la couleur des éléments texte peut être modifié avec l'attribut `fill` pour le remplissage ou `stroke` pour le contour. Tout deux peuvent également faire référence à un dégradé ou motif, ce qui rend la coloration de texte SVG beaucoup plus puissante que CSS 2.1.

## Définir la police

Une partie essentielle d'un texte est la police dans laquelle il est affiché. SVG offre un ensemble d'attributs pour spécifier la police, dont beaucoup sont similaires à leurs équivalents CSS. Chacune des propriétés suivantes peut être définie en tant qu'attribut ou via une déclaration CSS: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("kerning")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} et {{SVGAttr("text-decoration")}}.

## Autres éléments liés au texte

### tspan

Cet élément est utilisé pour baliser des sous-parties d'un texte. Il doit s'agit d'un enfant d'un élément `text` ou d'un autre élément `tspan`. Un cas typique consiste à écrire un mot d'une phrase en gras:

```xml
<text>
  This is <tspan font-weight="bold" fill="red">bold and red</tspan>
</text>
```

#### Exemple jouable

```html hidden
<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
  <text>
    This is
    <tspan font-weight="bold" fill="red">bold and red</tspan>
  </text>

  <style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('Exemple_jouable', '100%', 100) }}

L'élément tspan peut prendre les attributs personnalisés suivants:

**x**
Définit une nouvelle coordonnées absolue pour le texte qu'il contient. Cela écrase la position par défaut du texte. Cet attribut peut également contenir une liste de nombres, qui sont appliqués un par un à chaque caractère du tspan.

**dx**
Définit un décalage horizontal relatif à la position par défaut du texte. Ici aussi, vous pouvez founir une liste de valeurs qui seront appliquées consécutivement à chaque caractère.

**y** et **dy** sont utilisés de la même manière mais pour le déplacement vertical.

**rotate**
Applique une rotation aux caractères, avec le nombre de degrés donné. Donner une liste de nombres aura pour effet d'appliquer une rotation à chaque caractère respectif, la dernière valeur sera appliquée aux caractères restants.

**textLength**
Un attribut quelque peu obscur qui donne la longueur calculée de la chaîne. Il est destiné au moteur de rendu pour lui permettre d'affiner la position des glyphes, lorsque la longueur de texte mesurée ne correspond pas à celle qui est indiquée.

### tref

L'élément `tref` permet de référencer un texte déjà définit, et recopie le texte à sa place. Vous devez utiliser l'attribut `xlink:href` pour définir l'élément à copier. Vous pouvez ensuite styliser le texte et modifier son apparence indépendamment de la source.

```xml
<text id="example">This is an example text.</text>

<text>
    <tref xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#example" />
</text>
```

### textPath

Cet élément récupère via son attribut `xlink:href` un chemin arbitraire et aligne ses caractères le long de ce chemin:

```xml
<path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" />
<text>
  <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path">
    A curve.
  </textPath>
</text>
```

#### Code jouable 2

```html hidden
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" />
  <text>
    <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path">
      A curve.
    </textPath>
  </text>

  <style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('Code_jouable_2', '100%', 100) }}

{{PreviousNext("Web/SVG/Tutoriel/Motifs", "Web/SVG/Tutoriel/Transformations_de_base")}}
