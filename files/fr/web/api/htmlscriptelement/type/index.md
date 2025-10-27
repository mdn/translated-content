---
title: "HTMLScriptElement : propriété type"
short-title: type
slug: Web/API/HTMLScriptElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`type`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une chaîne de caractères qui reflète le type du script.

Elle reflète l'attribut `type` de l'élément HTML {{HTMLElement("script")}}.

## Valeur

Une chaîne de caractères. La valeur de cette propriété peut être l'une des suivantes&nbsp;:

- **Attribut non défini (valeur par défaut), chaîne de caractères vide ou type MIME JavaScript**
  - : Indique que le script est un «&nbsp;script classique&nbsp;», contenant du code JavaScript.
- `module`
  - : Cette valeur fait traiter le code comme un module JavaScript.
- `importmap`
  - : Cette valeur indique que le contenu de l'élément est une import map.
- `speculationrules` {{Experimental_Inline}}
  - : Cette valeur indique que le contenu de l'élément contient des règles de spéculation.
- **Toute autre valeur**
  - : Le contenu embarqué est traité comme un bloc de données et ne sera pas interprété par le navigateur.

Pour plus d'informations, veuillez consulter l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/script/type) de l'élément {{HTMLElement("script")}}.

## Exemples

```html
<script id="el" type="text/javascript"></script>
```

```js
const el = document.getElementById("el");
console.log(el.type); // Affiche : "text/javascript"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
