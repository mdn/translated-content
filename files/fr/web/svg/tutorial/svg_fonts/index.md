---
title: Polices SVG
slug: Web/SVG/Tutorial/SVG_fonts
tags:
  - Police
  - SVG
  - font
translation_of: Web/SVG/Tutorial/SVG_fonts
original_slug: Web/SVG/Tutoriel/polices_SVG
---
{{ PreviousNext("Web/SVG/Tutoriel/filtres","Web/SVG/Tutoriel/SVG_Image_Tag") }}

Lorsque SVG a été spécifié, le support des polices d'écriture pour le web n'était pas répandu dans les navigateurs. Comme l'accès au fichier de la police adéquate est cependant crucial pour afficher correctement le texte, une technologie de description des polices a été ajoutée à SVG pour offrir cette capacité. Elle n'a pas été conçue pour la compatibilité avec d'autres formats tels que le PostScript ou OTF, mais plutôt comme un moyen simple d'intégration des informations des glyphes en SVG lors de l'affichage.

> **Note :** Les Polices d'écritures SVG sont actuellement supportées uniquement sur Safari et le navigateur Android. Internet Explorer [n'a pas envisagé de les implémenter](http://blogs.msdn.com/b/ie/archive/2010/08/04/html5-modernized-fourth-ie9-platform-preview-available-for-developers.aspx), la fonctionnalité a été [supprimée de Chrome 38](https://www.chromestatus.com/feature/5930075908210688) (et Opera 25) et Firefox a [reporté sa mise en œuvre indéfiniment](https://bugzilla.mozilla.org/show_bug.cgi?id=119490) pour se concentrer sur [WOFF](/fr/WOFF "en/About WOFF"). Cependant, d'autres outils comme le plugin [Adobe SVG Viewer](http://www.adobe.com/svg/viewer/install/), Batik et des modèles de document d'Inkscape supportent l'incorporation des Police d'écriture SVG.

La base pour définir une police SVG est l'élément {{ SVGElement("font") }}.

## Définir une police

Quelques ingrédients sont nécessaires pour intégrer une police en SVG. Prenons un exemple de déclaration (celle [de la spécification](http://www.w3.org/TR/SVG/fonts.html#FontElement)), et expliquons-en les détails.

```html
<font id="Font1" horiz-adv-x="1000">
  <font-face font-family="Super Sans" font-weight="bold" font-style="normal"
      units-per-em="1000" cap-height="600" x-height="400"
      ascent="700" descent="300"
      alphabetic="0" mathematical="350" ideographic="400" hanging="500">
    <font-face-src>
      <font-face-name name="Super Sans Bold"/>
    </font-face-src>
  </font-face>
  <missing-glyph><path d="M0,0h200v200h-200z"/></missing-glyph>
  <glyph unicode="!" horiz-adv-x="300"><!-- Outline of exclam. pt. glyph --></glyph>
  <glyph unicode="@"><!-- Outline of @ glyph --></glyph>
  <!-- more glyphs -->
</font>
```

Nous commençons avec l'élement {{ SVGElement("font") }}. Il contient un attribut id, ce qui permet de le référencer via une URI (voir plus bas). L'attribut `horiz-adv-x` définit sa largeur moyenne, comparée aux définitions des autres glyphes individules. La valeur 1000 définit une valeur raisonnable. Plusieurs autres attributs associés précisent l'affichage de la boite qui encapsule le glyphe.

L'élément  {{ SVGElement("font-face") }} est l'équivalent SVG de la déclaration CSS  [`@font-face`](/fr/CSS/@font-face "en/css/@font-face"). Il définit les propriétés de base de la police finale, telles que 'weight', 'style', etc. Dans l'exemple ci-dessus, la première et la plus importante est  `font-family` : Elle pourra alors être référencée via la propriété `font-family` présente dans les CSS et les SVG. Les attributs `font-weight` et `font-style` ont la même fonction que leurs équivalents CSS. Les attributs suivants sont des instructions de rendu, pour le moteur d'affichage des polices ; par exemple : quelle est la taille des jambages supérieurs des glyphes ([ascenders](http://en.wikipedia.org/wiki/Ascender_%28typography%29)).

Its child, the {{ SVGElement("font-face-src") }} element, corresponds to CSS' `src` descriptor in `@font-face` declarations. You can point to external sources for font declarations by means of its children {{ SVGElement("font-face-name") }} and {{ SVGElement("font-face-uri") }}. The above example states that if the renderer has a local font available named "Super Sans Bold", it should use this instead.

Following {{ SVGElement("font-face-src") }} is a {{ SVGElement("missing-glyph") }} element. This defines what should be displayed if a certain glyph is not found in the font and if there are no fallback mechanisms. It also shows how glyphs are created: By simply adding any graphical SVG content inside. You can use literally any other SVG elements in here, even {{ SVGElement("filter") }}, {{ SVGElement("a") }} or {{ SVGElement("script") }}. For simple glyphs, however, you can simply add a `d` attribute — this defines a shape for the glyph exactly like how standard SVG paths work.

The actual glyphs are then defined by {{ SVGElement("glyph") }} elements. The most important attribute is `unicode`. It defines the unicode codepoint represented by this glyph. If you also specify the {{htmlattrxref("lang")}} attribute on a glyph, you can further restrict it to certain languages (represented by `xml:lang` on the target) exclusively. Again, you can use arbitrary SVG to define the glyph, which allows for great effects in supporting user agents.

There are two further elements that can be defined inside `font`: {{ SVGElement("hkern") }} and {{ SVGElement("vkern") }}. Each carries references to at least two characters (attributes `u1` and `u2`) and an attribute `k` that determines how much the distance between those characters should be decreased. The below example instructs user agents to place the "A" and "V" characters closer together the standard distance between characters.

```html
<hkern u1="A" u2="V" k="20" />
```

## Référencer une police

Lorsque vous avez mis en place votre déclaration de police comme décrit ci-dessus, vous pouvez utiliser un simple attribut `font-family` pour réellement appliquer la police à un texte SVG:

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- ... -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

Cependant, vous êtes libre de combiner plusieurs méthodes pour une plus grande liberté de où et comment définir la police.

### Option: Utiliser le CSS @font-face

Vous pouvez utiliser `@font-face` pour les polices externes de référence :

```html
<font id="Super_Sans">
  <!-- ... -->
</font>

<style type="text/css">
@font-face {
  font-family: "Super Sans";
  src: url(#Super_Sans);
}
</style>

<text font-family="Super Sans">My text uses Super Sans</text>
```

### Option: Référencer une police externe

L'élément mentionné `font-face-uri` vous permet de référencer une police externe, permettant donc une plus grande réutilisabilité :

```html
<font>
  <font-face font-family="Super Sans">
    <font-face-src>
      <font-face-uri xlink:href="fonts.svg#Super_Sans" />
    </font-face-src>
  </font-face>
</font>
```

{{ PreviousNext("Web/SVG/Tutoriel/filtres","Web/SVG/Tutoriel/SVG_Image_Tag") }}
