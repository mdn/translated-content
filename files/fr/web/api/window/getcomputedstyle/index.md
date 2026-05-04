---
title: "Window : méthode getComputedStyle()"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSSOM")}}

La méthode **`getComputedStyle()`** de l'interface {{DOMxRef("Window")}} retourne un objet {{DOMxRef("CSSStyleProperties")}} en lecture seule et dynamique, contenant les [valeurs résolues](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue) de toutes les propriétés CSS d'un élément, après application des feuilles de style actives et résolution de toute computation que ces valeurs peuvent contenir.

## Syntaxe

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Paramètres

- `element`
  - : L'objet {{DOMxRef("Element")}} pour lequel vous voulez obtenir le style calculé.
- `pseudoElt` {{Optional_Inline}}
  - : Une chaîne de caractères définissant le pseudo-élément à cibler.
    Omit (ou `null`) pour les éléments réels.

### Valeur de retour

Un objet {{DOMxRef("CSSStyleProperties")}} _dynamique_, qui se met à jour automatiquement lorsque les styles de l'élément changent.

> [!NOTE]
> Les versions antérieures de la spécification retournaient un {{DOMxRef("CSSStyleDeclaration")}} (dont {{DOMxRef("CSSStyleProperties")}} est dérivé).
> Voir le tableau de [compatibilité des navigateurs](#comptatibilité_des_navigateurs) pour les informations sur le support des navigateurs.

> [!WARNING]
> Les valeurs retournées sont parfois délibérément inexactes.
> Pour éviter le problème de sécurité «&nbsp;Fuite de l'historique CSS&nbsp;», les navigateurs peuvent mentir sur les styles calculés pour un lien visité, en renvoyant des valeurs comme si l'utilisateur·ice n'avait jamais visité l'URL liée.
> Voir [les modules de correction de la fuite de l'historique CSS <sup>(angl.)</sup>](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) et [les changements liés à la vie privée concernant CSS `:visited` <sup>(angl.)</sup>](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) pour des exemples de mise en œuvre.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Si l'objet passé n'est pas un {{DOMxRef("Element")}} ou si le `pseudoElt` n'est pas un sélecteur de pseudo-élément valide ou est {{CSSxRef("::part()")}} ou {{CSSxRef("::slotted()")}}.

    > [!NOTE]
    > Un sélecteur de pseudo-élément valide fait référence à la validité syntaxique, par exemple, `::unsupported` est considéré comme valide, même si le pseudo-élément lui-même n'est pas pris en charge.

## Description

La méthode retourne un objet {{DOMxRef("CSSStyleProperties")}} dynamique et en lecture seule contenant les [valeurs résolues](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue) de toutes les propriétés CSS d'un élément, après application des feuilles de style actives et résolution de toute computation que ces valeurs peuvent contenir.

L'objet retourné peut être utilisé pour inspecter les styles de l'élément — y compris ceux définis en ligne, à l'aide d'un élément `<style>`, ou via une feuille de style externe.
Comme l'objet est en lecture seule, vous ne pouvez pas l'utiliser pour définir les styles d'un élément.
Cependant, comme il est «&nbsp;dynamique&nbsp;», si vous mettez à jour les styles de l'élément à l'aide d'une autre API (comme {{DOMxRef("HTMLElement.style")}}), l'objet retourné sera mis à jour avec la valeur résolue correspondante.

La distinction selon laquelle l'objet contient des [valeurs résolues](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue) est importante.
Pour la plupart des propriétés, en particulier celles qui dépendent de la mise en page comme `display`, `font-size` ou `line-height`, la valeur résolue est la valeur calculée.
Pour les propriétés qui dépendent de la mise en page, la valeur utilisée peut différer légèrement de la valeur calculée, et c'est cette valeur qui est retournée comme valeur résolue.
Pour une propriété animée, il s'agira de la valeur calculée au point courant de l'animation.

L'objet retourné possède des propriétés nommées avec des tirets et les propriétés correspondantes en {{Glossary("camel_case", "camel-case")}} pour **toutes** les [propriétés CSS](/fr/docs/Web/CSS/Reference/Properties) prises en charge par le navigateur, y compris les propriétés [raccourcies](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) et les propriétés longues.

Les propriétés CSS raccourcies de l'élément sont développées en leurs propriétés longues correspondantes.
Par exemple, un élément avec le style `"border-top: 1px solid black"` serait représenté dans l'objet retourné par les propriétés nommées {{CSSxRef("border-top")}} et `borderTop`, ainsi que les propriétés longues correspondantes {{CSSxRef("border-top-color")}} et `borderTopColor`, {{CSSxRef("border-top-style")}} et `borderTopStyle`, et {{CSSxRef("border-top-width")}} et `borderTopWidth`.

Notez que l'objet retourné est du même type que celui retourné par la propriété {{DOMxRef("HTMLElement/style", "style")}} de l'élément.
Cependant, l'objet `element.style` peut aussi être utilisé pour **définir** des styles sur cet élément, et ne retourne que les styles en ligne ou ceux définis via JavaScript.

### Valeurs de couleur

Pour des raisons de compatibilité, les valeurs de couleur sérialisées définies avec l'espace colorimétrique sRGB traditionnel sont exprimées sous forme de couleurs {{CSSxRef("color_value/rgb", "rgb()")}} si la valeur du canal alpha est exactement `1`, et sous forme de `rgba()` sinon.
La syntaxe héritée avec des virgules est utilisée, avec des virgules comme séparateurs (par exemple `rgb(255, 0, 0)`).

Pour les autres {{Glossary("color space", "espaces colorimétriques")}}, les valeurs sont sérialisées en utilisant les expressions fonctionnelles correspondantes&nbsp;: {{CSSxRef("color_value/lab", "lab()")}}, {{CSSxRef("color_value/lch", "lch()")}}, {{CSSxRef("color_value/oklab", "oklab()")}}, {{CSSxRef("color_value/oklch", "oklch()")}}, {{CSSxRef("color_value/color", "color()")}}.

## Exemples

### Récupérer les styles résolus

Dans cet exemple, nous appliquons un style à un élément HTML {{HTMLElement("p")}}, puis nous récupérons ces styles à l'aide de `getComputedStyle()`, et nous les affichons dans le contenu textuel du `<p>`.

#### HTML

```html
<p>Bonjour</p>
```

#### CSS

```css
p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  font: 2rem/2 sans-serif;
  text-align: center;
  background: purple;
  color: white;
}
```

#### JavaScript

```js
const para = document.querySelector("p");
const compStyles = window.getComputedStyle(para);
para.textContent =
  `Ma taille de police calculée est ${compStyles.getPropertyValue("font-size")},\n` +
  `et ma hauteur de ligne calculée est ${compStyles.getPropertyValue(
    "line-height",
  )}.`;
```

#### Résultat

{{EmbedLiveSample("Récupérer les styles résolus", "100%", 240)}}

### Utiliser avec les pseudo-éléments

`getComputedStyle()` peut récupérer les informations de style depuis des [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), tels que `::after`, `::before`, `::marker` ou `::line-marker`.

```html
<h3>Contenu généré</h3>
```

```css
h3::after {
  content: " licorne !";
}
```

```js
const h3 = document.querySelector("h3");
const result = getComputedStyle(h3, "::after").content;

console.log("le contenu généré est : ", result); // returns ' licorne !'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("window.getDefaultComputedStyle()")}}
- La méthode {{DOMxRef("CSSStyleDeclaration.getPropertyValue", "getPropertyValue()")}}
- La méthode {{DOMxRef("Element.computedStyleMap()")}}
- [Valeur résolue](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue)
