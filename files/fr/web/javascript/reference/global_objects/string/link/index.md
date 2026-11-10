---
title: "String : méthode link()"
short-title: link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`link()`** des valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML {{HTMLElement("a")}} (`<a href="...">str</a>`), pour être utilisée comme lien hypertexte vers une autre URL.

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Utilisez plutôt les [API DOM](/fr/docs/Web/API/Document_Object_Model) telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement).

## Syntaxe

```js-nolint
link(url)
```

### Paramètres

- `url`
  - : Toute chaîne de caractères qui définit l'attribut `href` de l'élément `<a>`&nbsp;; elle doit être une URL valide (relative ou absolue), avec tous les caractères `&` échappés en `&amp;`.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<a href="url">` (les doubles quotes dans `url` sont remplacées par `&quot;`), suivie du texte `str`, puis d'une balise de fin `</a>`.

## Exemples

### Utiliser la méthode `link()`

Le code ci-dessous crée une chaîne de caractères HTML, puis remplace le contenu du corps du document par cette chaîne de caractères&nbsp;:

```js
const contenuChaineCaracteres = "MDN Web Docs";

document.body.innerHTML = contenuChaineCaracteres.link(
  "https://developer.mozilla.org/",
);
```

Cela crée au présent le HTML suivant&nbsp;:

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

Au lieu d'utiliser `link()` et de créer directement du texte HTML, vous devez utiliser les API DOM telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement). Par exemple&nbsp;:

```js
const contenuChaineCaracteres = "MDN Web Docs";
const elem = document.createElement("a");
elem.href = "https://developer.mozilla.org/";
elem.innerText = contenuChaineCaracteres;
document.body.appendChild(elem);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang=en">polyfill<i> en anglais) de `String.prototype.link` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang=en">polyfill<i> en anglais) es-shims de `String.prototype.link` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("a")}}
