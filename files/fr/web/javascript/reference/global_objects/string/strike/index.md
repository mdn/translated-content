---
title: "String : méthode strike()"
short-title: strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`strike()`** des valeurs {{JSxRef("String")}} crée une chaîne de caractères qui encadre cette chaîne de caractères dans un élément HTML {{HTMLElement("strike")}} (`<strike>str</strike>`), ce qui provoque l'affichage de cette chaîne de caractères comme un texte barré.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Dans le cas de `strike()`, l'élément `<strike>` lui-même a été supprimé de la spécification HTML et ne doit plus être utilisé. Les développeur·euse·s web doivent utiliser {{HTMLElement("del")}} pour le contenu supprimé ou {{HTMLElement("s")}} pour le contenu qui n'est plus exact ou plus pertinent à la place.

## Syntaxe

```js-nolint
strike()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<strike>`, puis le texte `str`, et enfin une balise de fin `</strike>`.

## Exemples

### Utiliser la méthode `strike()`

Les méthodes suivantes peuvent être utilisées pour modifier le formatage d'une chaîne de caractères&nbsp;:

```js
const contenuChaineDeCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineDeCaracteres.strike();
```

Cela produit le code HTML suivant&nbsp;:

```html
<strike>Bonjour, le monde</strike>
```

> [!WARNING]
> Cette balise est invalide, car `strike` n'est plus un élément valide.

Au lieu d'utiliser `strike()` et de créer du texte HTML directement, vous devez utiliser les API DOM telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement). Par exemple&nbsp;:

```js
const contenuChaineDeCaracteres = "Bonjour, le monde";
const elem = document.createElement("s");
elem.innerText = contenuChaineDeCaracteres;
document.body.appendChild(elem);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.strike` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.strike` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("strike")}}
