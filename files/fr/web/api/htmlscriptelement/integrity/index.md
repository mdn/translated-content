---
title: "HTMLScriptElement : propriété integrity"
short-title: integrity
slug: Web/API/HTMLScriptElement/integrity
l10n:
  sourceCommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{APIRef("HTML DOM")}}

La propriété **`integrity`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une chaîne de caractères qui contient des métadonnées intégrées permettant au navigateur de vérifier qu'une ressource récupérée n'a pas été modifiée de façon inattendue.

Elle reflète l'attribut `integrity` de l'élément HTML {{HTMLElement("script")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<script
  id="el"
  src="https://example.com/example-framework.js"
  type="text/javascript"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // Affiche : "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLLinkElement.integrity")}}
- [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)
