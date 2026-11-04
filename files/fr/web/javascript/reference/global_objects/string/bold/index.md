---
title: "String : méthode bold()"
short-title: bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`bold()`** de valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML {{HTMLElement("b")}} (`<b>str</b>`), ce qui fait afficher cette chaîne de caractères en gras.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Utilisez plutôt les [API DOM](/fr/docs/Web/API/Document_Object_Model) telles que {{DOMxRef("document.createElement()")}}.

## Syntaxe

```js-nolint
bold()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<b>`, suivie du texte `str`, et se terminant par une balise de fin `</b>`.

## Exemples

### Utiliser la méthode `bold()`

Le code ci-dessous crée une chaîne de caractères HTML, puis remplace le contenu du corps du document par celle-ci&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.bold();
```

Cela crée le HTML suivant&nbsp;:

```html
<b>Bonjour, le monde</b>
```

Au lieu d'utiliser `bold()` et de créer directement du texte HTML, vous devez utiliser les API DOM telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement). Par exemple&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";
const elem = document.createElement("b");
elem.innerText = contenuChaineCaracteres;
document.body.appendChild(elem);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.bold` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.bold` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("b")}}
