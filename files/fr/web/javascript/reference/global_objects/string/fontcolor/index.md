---
title: "String : méthode fontcolor()"
short-title: fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`fontcolor()`** des valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML {{HTMLElement("font")}} (`<font color="...">str</font>`), ce qui fait que cette chaîne de caractères est affichée dans la couleur de police définie.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Dans le cas de `fontcolor()`, l'élément `<font>` lui-même a été supprimé de la spécification HTML et ne doit plus être utilisé. Les développeur·euse·s web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS) à la place.

## Syntaxe

```js-nolint
fontcolor(color)
```

### Paramètres

- `color`
  - : Une chaîne de caractères exprimant la couleur sous forme d'un triplet RVB hexadécimal ou comme un littéral. Les littéraux pour les noms de couleurs sont listés dans la [référence des couleurs CSS](/fr/docs/Web/CSS/Reference/Values/color_value).

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<font color="color">` (les guillemets doubles dans `color` sont remplacés par `&quot;`), suivie du texte `str`, et se terminant par une balise de fin `</font>`.

## Description

La méthode `fontcolor()` elle-même se contente de concaténer les parties de la chaîne de caractères sans aucune validation ni normalisation. Cependant, pour créer des éléments {{HTMLElement("font")}} valides, si vous exprimez la couleur sous forme de triplet RVB hexadécimal, vous devez utiliser le format `rrggbb`. Par exemple, les valeurs RVB hexadécimales pour le saumon sont rouge=FA, vert=80, et bleu=72, donc le triplet RVB pour le saumon est `"FA8072"`.

## Exemples

### Utiliser la méthode `fontcolor()`

Le code ci-dessous crée une chaîne de caractères HTML puis remplace le contenu du corps du document par cette chaîne de caractères&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.fontcolor("red");
```

Cela crée le HTML suivant&nbsp;:

```html
<font color="red">Bonjour, le monde</font>
```

> [!WARNING]
> Cette balise est invalide, car `font` n'est plus un élément valide.

Au lieu d'utiliser `fontcolor()` et de créer directement du texte HTML, vous devez utiliser le CSS pour manipuler les polices. Par exemple, vous pouvez manipuler {{CSSxRef("color")}} avec l'attribut {{DOMxRef("HTMLElement/style", "element.style")}}&nbsp;:

```js
document.getElementById("IDdeVotreElement").style.color = "red";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.fontcolor` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.fontcolor` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("font")}}
