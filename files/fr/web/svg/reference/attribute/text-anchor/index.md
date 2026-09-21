---
title: text-anchor
slug: Web/SVG/Reference/Attribute/text-anchor
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`text-anchor`** sert à aligner (au début, au milieu ou à la fin) une chaîne de texte préformaté, ou un texte à retour à la ligne automatique dont la zone de retour est déterminée par la propriété {{cssxref("inline-size")}}, par rapport à un point donné.

Cet attribut ne s'applique pas aux autres types de texte à retour à la ligne automatique. Dans ces cas-là, il faut utiliser {{cssxref("text-align")}}. Pour un texte sur plusieurs lignes, l'alignement s'applique à chaque ligne.

L'attribut `text-anchor` s'applique à chaque fragment de texte d'un élément {{SVGElement("text")}} donné. Chaque fragment de texte possède une position de texte courante initiale, qui représente le point du système de coordonnées utilisateur résultant, selon le contexte, de l'application des attributs {{SVGAttr("x")}} et {{SVGAttr("y")}} sur l'élément `<text>`, de toute valeur d'attribut `x` ou `y` portée par un élément {{SVGElement("tspan")}} et affectée explicitement au premier caractère affiché du fragment, ou de la détermination de la position de texte courante initiale pour un élément {{SVGElement("textPath")}}.

> [!NOTE]
> En tant qu'attribut de présentation, `text-anchor` possède une propriété CSS équivalente&nbsp;: {{cssxref("text-anchor")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Matérialisation des ancres -->
  <path
    d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110"
    stroke="grey" />

  <!-- Les ancres en action -->
  <text text-anchor="start" x="60" y="40">A</text>
  <text text-anchor="middle" x="60" y="75">A</text>
  <text text-anchor="end" x="60" y="110">A</text>

  <!-- Matérialisation des ancres -->
  <circle cx="60" cy="40" r="3" fill="red" />
  <circle cx="60" cy="75" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
      text {
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
      ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Exemple", "120", "120")}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>start</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>start</code> | <code>middle</code> | <code>end</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>discrète</td>
    </tr>
  </tbody>
</table>

- `start`
  - : Les caractères affichés sont alignés de telle sorte que le début de la chaîne de texte se trouve à la position de texte courante initiale. Pour un élément dont la propriété {{cssxref("direction")}} vaut `ltr` (comme pour la plupart des langues européennes), le côté gauche du texte est affiché à la position de texte initiale. Pour un élément dont la propriété `direction` vaut `rtl` (comme pour l'arabe et l'hébreu), c'est le côté droit du texte. Pour un élément dont la direction principale du texte est verticale (fréquent pour les textes asiatiques), c'est le haut du texte.
- `middle`
  - : Les caractères affichés sont alignés de telle sorte que le milieu de la chaîne de texte se trouve à la position de texte courante. (Pour un texte sur un chemin, la chaîne de texte est d'abord disposée en ligne droite, conceptuellement. Le point médian entre le début et la fin de la chaîne est déterminé. La chaîne est ensuite projetée sur le chemin, ce point médian étant placé à la position de texte courante.)
- `end`
  - : Les caractères affichés sont décalés de telle sorte que la fin du texte affiché obtenu (la position de texte courante finale, avant application de la propriété `text-anchor`) se trouve à la position de texte courante initiale. Pour un élément dont la propriété `direction` vaut `ltr` (comme pour la plupart des langues européennes), le côté droit du texte est affiché à la position de texte initiale. Pour un élément dont la propriété `direction` vaut `rtl` (comme pour l'arabe et l'hébreu), c'est le côté gauche du texte. Pour un élément dont la direction principale du texte est verticale (fréquent pour les textes asiatiques), c'est le bas du texte.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément SVG {{SVGElement("text")}}
- La propriété CSS {{cssxref('text-anchor')}}
