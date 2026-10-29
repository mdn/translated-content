---
title: "String : méthode anchor()"
short-title: anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`anchor()`** de valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML {{HTMLElement("a")}} avec un attribut name (`<a name="...">str</a>`).

> [!NOTE]
> Toutes les [méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Utilisez plutôt les [API DOM](/fr/docs/Web/API/Document_Object_Model) telles que {{DOMxRef("document.createElement()")}}.
>
> La spécification HTML n'autorise plus l'élément HTML {{HTMLElement("a")}} à avoir un attribut `name`, donc cette méthode ne crée même pas un balisage valide.

## Syntaxe

```js-nolint
anchor(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant une valeur `name` à mettre dans la balise de début générée `<a name="...">`.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<a name="name">` (les guillemets doubles dans `name` sont remplacés par `&quot;`), suivie du texte `str`, puis d'une balise de fin `</a>`.

## Exemples

### Utiliser la méthode `anchor()`

Le code ci-dessous crée une chaîne de caractères HTML puis remplace le corps du document avec celle-ci&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.anchor("bonjour");
```

Cela produit le code HTML suivant&nbsp;:

```html
<a name="bonjour">Bonjour, le monde</a>
```

> [!WARNING]
> Ce balisage est invalide, car `name` n'est plus un attribut valide de l'élément HTML {{HTMLElement("a")}}.

Au lieu d'utiliser `anchor()` et de créer directement du texte HTML, vous devez utiliser les API DOM telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement). Par exemple&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";
const elem = document.createElement("a");
elem.innerText = contenuChaineCaracteres;
document.body.appendChild(elem);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.anchor` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.anchor` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("a")}}
