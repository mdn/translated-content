---
title: "HTMLScriptElement : propriété blocking"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

{{APIRef("HTML DOM")}}

La propriété **`blocking`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une chaîne de caractères indiquant que certaines opérations doivent être bloquées lors de la récupération du script.

Elle reflète l'attribut `blocking` de l'élément HTML {{HTMLElement("script")}}.

## Valeur

Une chaîne de caractères. Doit être une liste d'éléments de blocage séparés par des espaces, indiqués ci-dessous, désignant les opérations à bloquer&nbsp;:

- `render`
  - : Le rendu du contenu à l'écran est bloqué.

    > [!NOTE]
    > Seuls les éléments `script` dans le `<head>` du document peuvent éventuellement bloquer le rendu. Les scripts ne bloquent pas le rendu par défaut&nbsp;; si un élément `script` n'inclut pas `type="module"`, `async` ou `defer`, alors il bloque l'analyse, pas le rendu. Si un tel élément `script` est ajouté dynamiquement par script, il faut définir `blocking = "render"` pour qu'il bloque le rendu.

## Exemples

```html
<script id="el" type="text/javascript" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Affiche : "render"
```

## Specifications

{{Specifications}}

## Compatibilite des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLLinkElement.blocking")}}
- La propriété {{DOMxRef("HTMLStyleElement.blocking")}}
