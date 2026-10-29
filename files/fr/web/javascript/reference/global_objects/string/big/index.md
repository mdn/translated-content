---
title: "String : méthode big()"
short-title: big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`big()`** de valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML {{HTMLElement("big")}} (`<big>str</big>`), ce qui provoque l'affichage de cette chaîne de caractères avec une police de grande taille.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Dans le cas de `big()`, l'élément `<big>` lui-même a été retiré de la spécification HTML et ne doit plus être utilisé. Les développeur·euse·s web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS) à la place.

## Syntaxe

```js-nolint
big()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<big>`, suivie du texte `str`, et se terminant par une balise de fin `</big>`.

## Description

## Exemples

### Utiliser la méthode `big()`

Le code ci-dessous crée une chaîne de caractères HTML, puis remplace le contenu du corps du document par celle-ci&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.big();
```

Cela crée le HTML suivant&nbsp;:

```html
<big>Bonjour, le monde</big>
```

> [!WARNING]
> Cette balise n'est plus valide, car `big` n'est plus un élément HTML valide.

Au lieu d'utiliser `big()` et de créer directement du texte HTML, vous devez utiliser le CSS pour manipuler les polices. Par exemple, vous pouvez manipuler {{CSSxRef("font-size")}} avec l'attribut {{DOMxRef("HTMLElement/style", "element.style")}}&nbsp;:

```js
document.getElementById("votreIdElement").style.fontSize = "2em";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.big` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.big` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("big")}}
