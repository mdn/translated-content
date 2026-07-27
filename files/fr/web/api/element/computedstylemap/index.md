---
title: "Element : méthode computedStyleMap()"
short-title: computedStyleMap()
slug: Web/API/Element/computedStyleMap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Typed Object Model API")}}

La méthode **`computedStyleMap()`** de l'interface {{DOMxRef("Element")}} retourne une interface {{DOMxRef("StylePropertyMapReadOnly")}} qui fournit une représentation en lecture seule d'un bloc de déclaration CSS, alternative à {{DOMxRef("CSSStyleDeclaration")}}.

## Syntaxe

```js-nolint
computedStyleMap()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("StylePropertyMapReadOnly")}}.

Contrairement à {{DOMxRef("Window.getComputedStyle")}}, la valeur de retour contient des [valeurs calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée), et non des [valeurs résolues](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue). Pour la plupart des propriétés, elles sont identiques, sauf pour quelques propriétés liées à la mise en page, où la valeur résolue est la [valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) au lieu de la valeur calculée. Voir l'exemple de [comparaison avec `getComputedStyle()`](#comparer_avec_getcomputedstyle) pour plus de détails.

## Exemples

### Obtenir les styles par défaut

Nous commençons par un HTML simple&nbsp;: un paragraphe avec un lien, et une liste de définitions à laquelle nous ajoutons toutes les paires Propriété / Valeur CSS.

```html
<p>
  <a href="https://example.com">Lien</a>
</p>
<dl id="regurgitation"></dl>
```

Nous ajoutons un peu de CSS

```css
a {
  --couleur: red;
  color: var(--couleur);
}
```

Nous ajoutons du JavaScript pour récupérer notre lien et renvoyer une liste de définitions de toutes les valeurs des propriétés CSS en utilisant `computedStyleMap()`.

```js
// obtenir l'élément
const monElement = document.querySelector("a");

// obtenir le <dl> que nous allons remplir
const listeStyle = document.querySelector("#regurgitation");

// Récupérer tous les styles calculés avec computedStyleMap()
const tousLesStylesCalcules = monElement.computedStyleMap();

// Parcourir la carte contenant toutes les propriétés et valeurs, en
// ajoutant un élément <dt> et un élément <dd> pour chacune d'entre elles
for (const [prop, val] of tousLesStylesCalcules) {
  // propriété
  const proprieteCss = document.createElement("dt");
  proprieteCss.appendChild(document.createTextNode(prop));
  listeStyle.appendChild(proprieteCss);

  // valeurs
  const valeurCss = document.createElement("dd");
  valeurCss.appendChild(document.createTextNode(val));
  listeStyle.appendChild(valeurCss);
}
```

Dans les [navigateurs qui prennent en charge `computedStyleMap()`](#compatibilité_des_navigateurs), vous pouvez voir une liste de toutes les propriétés et valeurs CSS.
Dans les autres navigateurs, vous ne voyez qu'un lien.

{{EmbedLiveSample("Obtenir les styles par défaut", 300, 300)}}

Avez-vous réalisé combien de propriétés CSS par défaut un lien avait&nbsp;? Mettez à jour le `document.querySelector("a")` en `document.querySelector("p")`, et vous remarquez une différence dans les valeurs calculées par défaut de `margin-top` et `margin-bottom`.

### Comparer avec `getComputedStyle()`

{{DOMxRef("Window.getComputedStyle()")}} retourne [les valeurs résolues](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue), tandis que `computedStyleMap()` retourne [les valeurs calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée). Celles-ci sont généralement les mêmes, mais pour certaines propriétés, la valeur résolue est la [valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) au lieu de la valeur calculée. Par exemple, les valeurs en pourcentage pour les largeurs sont résolues en pixels _après la mise en page_, donc les valeurs utilisées sont en pixels, tandis que les valeurs calculées sont toujours en pourcentage.

Notez que la façon dont nous présentons cela fait paraître les deux API plus similaires qu'elles ne le sont réellement. `computedStyleMap()` contient des objets [CSSOM typés](/fr/docs/Web/API/CSS_Typed_OM_API), tandis que `getComputedStyle()` contient des chaînes de caractères. La première présente les mêmes informations de manière plus structurée et exploitable.

Dans cet exemple, la propriété `width` est définie en pourcentage, donc la valeur calculée est exprimée en pourcentage, mais la valeur finale est exprimée en pixels. La propriété `height` est toujours exprimée en pixels. La propriété `background-color` correspond à une couleur nommée, mais elle est convertie en valeur <abbr title="Rouge Vert Bleu">RVB</abbr> lors du calcul.

```html
<div class="conteneur">
  <div class="element"></div>
</div>
<pre id="resultat"></pre>
```

```css
.conteneur {
  width: 200px;
  height: 200px;
}

.element {
  width: 50%;
  height: 100px;
  background-color: tomato;
}
```

```js
const element = document.querySelector(".element");
const resultat = document.querySelector("#resultat");
const valeursResolues = getComputedStyle(element);
const valeursCalculees = element.computedStyleMap();

resultat.textContent = `valeursResolues.width = ${valeursResolues.width}
valeursCalculees.get("width") = ${valeursCalculees.get("width")}

valeursResolues.height = ${valeursResolues.height}
valeursCalculees.get("height") = ${valeursCalculees.get("height")}

valeursResolues.backgroundColor = ${valeursResolues.backgroundColor}
valeursCalculees.get("background-color") = ${valeursCalculees.get(
  "background-color",
)}`;
```

{{EmbedLiveSample("Comparer avec `getComputedStyle()`", "", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Window.getComputedStyle()")}}
