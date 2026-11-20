---
title: "String : méthode small()"
short-title: small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`small()`** des valeurs {{JSxRef("String")}} crée une chaîne de caractères qui encadre cette chaîne de caractères dans un élément HTML {{HTMLElement("small")}} (`<small>str</small>`), ce qui provoque l'affichage de cette chaîne de caractères dans une petite police.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Utilisez les [API DOM](/fr/docs/Web/API/Document_Object_Model) telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement) à la place.

## Syntaxe

```js-nolint
small()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<small>`, puis le texte `str`, et enfin une balise de fin `</small>`.

## Exemples

### Utiliser la méthode `small()`

Le code ci-dessous crée une chaîne de caractères HTML, puis remplace le corps du document par celle-ci&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.small();
```

Cela crée le HTML suivant&nbsp;:

```html
<small>Bonjour, le monde</small>
```

Au lieu d'utiliser `small()` et de créer directement du texte HTML, vous devez utiliser les API DOM telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement). Par exemple&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";
const elem = document.createElement("small");
elem.innerText = contenuChaineCaracteres;
document.body.appendChild(elem);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.small` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.small` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("small")}}
