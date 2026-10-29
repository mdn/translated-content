---
title: "String : méthode blink()"
short-title: blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`blink()`** de valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML `<blink>` (`<blink>str</blink>`), ce qui faisait clignoter la chaîne de caractères dans les anciens navigateurs.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Dans le cas de `blink()`, l'élément `<blink>` lui-même est retiré des navigateurs modernes, et le texte clignotant est fortement déconseillé par plusieurs standards d'accessibilité. Évitez d'utiliser cet élément de quelque manière que ce soit.

## Syntaxe

```js-nolint
blink()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<blink>`, suivie du texte `str`, et se terminant par une balise de fin `</blink>`.

## Exemples

### Utiliser la méthode `blink()`

Le code ci-dessous crée une chaîne de caractères HTML, puis remplace le contenu du corps du document par celle-ci&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.blink();
```

Cela crée le HTML suivant&nbsp;:

```html
<blink>Bonjour, le monde</blink>
```

> [!WARNING]
> Cette balise est invalide, car `blink` n'est plus un élément valide.

Vous devez éviter d'utiliser des éléments clignotants dans tous les cas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.blink` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.blink` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
