---
title: "HTMLLinkElement : propriété blocking"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

{{APIRef("HTML DOM")}}

La propriété **`blocking`** de l'interface {{domxref("HTMLLinkElement")}} est une chaîne de caractères indiquant que certaines opérations doivent être bloquées lors de la récupération d'une ressource externe.

Elle reflète l'attribut `blocking` de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Une chaîne de caractères. Doit être une liste, séparée par des espaces, de jetons de blocage listés ci-dessous, indiquant les opérations à bloquer&nbsp;:

- `render`
  - : Le rendu du contenu à l'écran est bloqué.

    > [!NOTE]
    > Seuls les éléments `link` présents dans le `<head>` du document peuvent bloquer le rendu. Par défaut, un élément `link` avec `rel="stylesheet"` dans le `<head>` bloque le rendu lorsque le navigateur le découvre lors de l'analyse. Si un tel élément est ajouté dynamiquement via un script, il faut également définir `blocking = "render"` pour qu'il bloque le rendu.

## Exemples

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Affiche : "render"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLScriptElement.blocking")}}
- La propriété {{domxref("HTMLStyleElement.blocking")}}
