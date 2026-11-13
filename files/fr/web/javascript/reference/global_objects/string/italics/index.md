---
title: "String : méthode italics()"
short-title: italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`italics()`** des valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML {{HTMLElement("i")}} (`<i>str</i>`), ce qui provoque l'affichage de cette chaîne de caractères en italique.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Utilisez les [API DOM](/fr/docs/Web/API/Document_Object_Model) telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement) à la place.

## Syntaxe

```js-nolint
italics()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<i>`, suivie du texte `str`, et se terminant par une balise de fin `</i>`.

## Exemples

### Utiliser la méthode `italics()`

Le code ci-dessous crée une chaîne de caractères HTML et remplace ensuite le corps du document par celle-ci&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.italics();
```

Cela crée le HTML suivant&nbsp;:

```html
<i>Bonjour, le monde</i>
```

Au lieu d'utiliser `italics()` et de créer directement du texte HTML, vous devez utiliser les API DOM telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement). Par exemple&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";
const elem = document.createElement("i");
elem.innerText = contenuChaineCaracteres;
document.body.appendChild(elem);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.italics` dans `core-js` <sup>(ang.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.italics` <sup>(ang.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("i")}}
