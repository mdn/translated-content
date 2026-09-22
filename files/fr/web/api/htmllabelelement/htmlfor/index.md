---
title: "HTMLLabelElement : propriété htmlFor"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

{{APIRef("HTML DOM")}}

La propriété **`htmlFor`** de l'interface {{DOMxRef("HTMLLabelElement")}} est l'identifiant de l'élément de contrôle associé au label. Elle reflète la valeur de la propriété de contenu [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for) et est utilisée pour définir et lire cette valeur.

## Valeur

Une chaîne de caractères qui contient l'identifiant de l'élément associé au contrôle.

## Description

Un `HTMLLabelElement` doit être associé à un élément de contrôle afin que cliquer sur le label active le contrôle. L'attribut `for`, reflété dans la propriété `htmlFor`, doit contenir un `id` de l'élément de contrôle associé.

> [!NOTE]
> Si cette propriété a une valeur, la propriété {{DOMxRef("HTMLLabelElement.control")}} doit référencer le même contrôle.

L'attribut `htmlFor` fournit un accès JavaScript à la valeur de l'attribut `for`. `htmlFor` est utilisé à la place de `for` pour éviter les conflits avec le mot réservé JavaScript `for` ([ceci n'est plus strictement nécessaire, donc cela peut changer à l'avenir <sup>(angl.)</sup>](https://github.com/whatwg/html/issues/9379)).

## Exemples

### Utilisation simple

Dans cet exemple, la valeur de l'attribut `for` de l'élément `<label>` est `username`, qui est lié à l'élément `<input>` via son attribut `id`. Nous utilisons la propriété DOM `htmlFor` pour accéder à la valeur de l'attribut `for`.

```html
<label for="username">Entrez votre nom d'utilisateur&nbsp;:</label>
<input id="username" name="username" type="text" />
```

```js
document.querySelector("label").htmlFor;
// username
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLLabelElement")}}
- La propriété {{DOMxRef("HTMLLabelElement.control")}}
- L'interface {{DOMxRef("HTMLElement")}}
- L'élément HTML {{HTMLElement("label")}}
- [Guide des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
