---
title: "Window : méthode getDefaultComputedStyle()"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

La méthode **`getDefaultComputedStyle()`** de l'interface {{DOMxRef("Window")}} retourne les [valeurs calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) par défaut de toutes les propriétés CSS d'un élément, en ignorant la mise en forme de l'auteur·ice. Seuls les styles de l'agent utilisateur et de l'utilisateur·ice sont pris en compte.

## Syntaxe

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### Paramètres

- `element`
  - : Un objet {{DOMxRef("Element")}} pour lequel obtenir la mise en forme calculée.
- `pseudoElt` {{Optional_Inline}}
  - : Une chaîne de caractères définissant le pseudo-élément à correspondre. Doit être `null` (ou non spécifié) pour les éléments ordinaires.

### Valeur de retour

L'objet `style` retourné est un objet {{DOMxRef("CSSStyleDeclaration")}}. L'objet est du même type que celui retourné par {{DOMxRef("Window.getComputedStyle()")}}, mais ne prend en compte que les règles de l'agent utilisateur et de l'utilisateur·ice.

## Exemples

### Exemple simple

```js
const elem = document.getElementById("elemId");
const style = getDefaultComputedStyle(elem);
```

### Exemple plus long

```html
<div id="elem-container">sac-de-paille</div>
<div id="output"></div>
```

```css
#elem-container {
  position: absolute;
  left: 100px;
  top: 200px;
  height: 100px;
}
```

```js
const elem = document.getElementById("elem-container");
const theCSSprop = getDefaultComputedStyle(elem).position;
document.getElementById("output").textContent = theCSSprop; // outputs "static"
```

### Utiliser avec les pseudo-éléments

La méthode `getDefaultComputedStyle()` peut récupérer des informations de style depuis des pseudo-éléments (par exemple, {{CSSxRef("::before")}} ou {{CSSxRef("::after")}}).

```html
<h3>contenu généré</h3>
```

```css
h3::after {
  content: " licorne !";
}
```

```js
const h3 = document.querySelector("h3");
const result = getDefaultComputedStyle(h3, "::after").content;

console.log("le contenu généré est : ", result); // returns 'none'
```

## Notes

La valeur retournée est, dans certains cas connus, expressément incorrecte par intention délibérée. En particulier, pour éviter le problème de sécurité appelé fuite de l'historique CSS, les navigateurs peuvent expressément «&nbsp;mentir&nbsp;» sur la valeur utilisée pour un lien et toujours retourner des valeurs comme si un·e utilisateur·ice n'avait jamais visité le site lié, et/ou limiter les styles qui peuvent être appliqués via l'utilisation du pseudo-sélecteur `:visited`. Voir [https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/ <sup>(angl.)</sup>](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) et [https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/ <sup>(angl.)</sup>](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) pour des exemples de la manière dont cela est mis en œuvre.

## Spécifications

Proposé au groupe de travail CSS.

## Compatibilité des navigateurs

{{Compat}}
