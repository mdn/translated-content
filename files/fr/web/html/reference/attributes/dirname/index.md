---
title: "Attribut HTML : dirname"
short-title: dirname
slug: Web/HTML/Reference/Attributes/dirname
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`dirname`** peut être utilisé sur l'élément HTML {{HTMLElement("textarea")}} et sur plusieurs types d'éléments HTML {{HTMLElement("input")}}. Il permet d'indiquer la direction du texte saisi dans l'élément lors de la soumission du formulaire.
Le navigateur utilise la valeur de cet attribut pour déterminer si le texte saisi par l'utilisateur·rice est orienté de gauche à droite ou de droite à gauche.
Lorsque cet attribut est utilisé, la direction du texte de l'élément est incluse dans les données envoyées lors de la soumission du formulaire, avec la valeur de l'attribut `dirname` comme nom de champ.

## Notes d'utilisation

L'attribut `dirname` peut être utilisé sur tout élément HTML {{HTMLElement("textarea")}}, ou sur tout élément HTML {{HTMLElement("input")}} de type {{HTMLElement("input/hidden", "hidden")}}, {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/password", "password")}}, {{HTMLElement("input/submit", "submit")}}, {{HTMLElement("input/reset", "reset")}} ou {{HTMLElement("input/button", "button")}}.

Le format des données soumises est `{valeur_dirname}={direction}` où `{valeur_dirname}` est la valeur de l'attribut `dirname` et `{direction}` est la direction du texte.
Par exemple, si l'utilisateur·rice saisit «&nbsp;Hello&nbsp;» dans un élément avec les attributs `name="comment"` et `dirname="comment-direction"`, les données soumises encodées dans l'URL pour une requête `GET` seront `comment=Hello&comment-direction=ltr`.
La direction du texte peut être&nbsp;:

- `rtl`
  - : Le texte saisi par l'utilisateur·rice est en écriture de droite à gauche.
- `ltr`
  - : Le texte saisi par l'utilisateur·rice est en écriture de gauche à droite.

Si aucune direction n'est spécifiée, l'agent utilisateur utilisera la direction du parent contenant le formulaire, et si elle n'est pas définie, la direction par défaut de l'agent utilisateur.

## Exemples

### Direction du texte dans un élément textarea

Dans cet exemple, l'attribut `dir="auto"` sur l'élément textarea permet de déterminer automatiquement la direction du texte en fonction de ce que l'utilisateur·rice saisit&nbsp;:

```html
<form method="get" action="https://www.exemple.fr/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">Envoyer mes salutations</button>
</form>
```

Lorsque l'utilisateur·rice soumet le formulaire, l'agent utilisateur inclut deux champs, un appelé `comment` avec la valeur «&nbsp;سيب&nbsp;», et un appelé `comment-direction` avec la valeur «&nbsp;rtl&nbsp;».
Le corps de la soumission encodé dans l'URL ressemble à&nbsp;:

```url
https://www.exemple.fr/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### Direction du texte dans un élément input

Dans cet exemple, l'attribut `dir="auto"` sur l'élément input permet de déterminer automatiquement la direction du texte en fonction de ce que l'utilisateur·rice saisit&nbsp;:

```html
<form method="get" action="https://www.exemple.fr/submit">
  <input
    type="text"
    name="comment-input"
    dir="auto"
    dirname="comment-direction"
    value="Hello" />
  <button type="submit">Envoyer mes salutations</button>
</form>
```

Lorsque l'utilisateur·rice soumet le formulaire, l'agent utilisateur inclut deux champs, un appelé `comment-input` avec la valeur «&nbsp;Hello&nbsp;», et un appelé `comment-direction` avec la valeur «&nbsp;ltr&nbsp; »&nbsp;:

```url
https://www.exemple.fr/submit?comment-input=Hello&comment-direction=ltr
```

### Héritage de la direction du texte

Les éléments `<input>` et `<textarea>` suivants n'ont pas d'attribut `dir`, ils héritent donc de la direction explicite de leur élément parent, qui est `rtl`&nbsp;:

```html
<div dir="rtl">
  <form method="get" action="https://www.exemple.fr/submit">
    <input
      type="text"
      name="user"
      dirname="user-direction"
      value="LTR Username" />
    <textarea name="comment" dirname="comment-direction">LTR Comment</textarea>
    <button type="submit">Publier le commentaire</button>
  </form>
</div>
```

Le corps de la soumission encodé dans l'URL ressemble à&nbsp;:

```url
https://www.exemple.fr/submit?user=LTR+Username&user-direction=rtl&comment=LTR+Comment&comment-direction=rtl
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut global HTML [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir)
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("textarea")}}
