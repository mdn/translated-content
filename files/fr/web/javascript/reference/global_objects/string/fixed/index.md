---
title: "String : méthode fixed()"
short-title: fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`fixed()`** des valeurs {{JSxRef("String")}} crée une chaîne de caractères qui encadre cette chaîne de caractères dans un élément HTML {{HTMLElement("tt")}} (`<tt>str</tt>`), ce qui provoque l'affichage de cette chaîne de caractères dans une police à largeur fixe.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Dans le cas de `fixed()`, l'élément `<tt>` lui-même a été supprimé de la spécification HTML et ne doit plus être utilisé. Les développeur·euse·s web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS) à la place.

## Syntaxe

```js-nolint
fixed()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<tt>`, suivie du texte `str`, et se terminant par une balise de fin `</tt>`.

## Exemples

### Utiliser la méthode `fixed()`

Le code ci-dessous crée une chaîne de caractères HTML, puis remplace le contenu du corps du document par celle-ci&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.fixed();
```

Cela crée le HTML suivant&nbsp;:

```html
<tt>Bonjour, le monde</tt>
```

> [!WARNING]
> Cette balise est invalide, car `tt` n'est plus un élément valide.

Au lieu d'utiliser `fixed()` et de créer directement du texte HTML, vous devez utiliser le CSS pour manipuler les polices. Par exemple, vous pouvez manipuler {{CSSxRef("font-family")}} avec l'attribut {{DOMxRef("HTMLElement/style", "element.style")}}&nbsp;:

```js
document.getElementById("yourElemId").style.fontFamily = "monospace";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.fixed` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.fixed` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("tt")}}
