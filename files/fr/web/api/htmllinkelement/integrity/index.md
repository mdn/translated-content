---
title: "HTMLLinkElement : propriété integrity"
short-title: integrity
slug: Web/API/HTMLLinkElement/integrity
l10n:
  sourceCommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{APIRef("HTML DOM")}}

La propriété **`integrity`** de l'interface {{domxref("HTMLLinkElement")}} est une chaîne de caractères contenant des métadonnées en ligne qu'un navigateur peut utiliser pour vérifier qu'une ressource récupérée a été livrée sans manipulation inattendue.

Elle reflète l'attribut `integrity` de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // Résultat : "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLScriptElement.integrity")}}
- [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)
