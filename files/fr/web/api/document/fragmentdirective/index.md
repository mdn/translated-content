---
title: "Document : propriété fragmentDirective"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("URL Fragment Text Directives")}}

La propriété en lecture seule **`fragmentDirective`** de l'interface {{DOMxRef("Document")}} retourne l'interface {{DOMxRef("FragmentDirective")}} pour le document actuel.

## Valeur

Un objet {{DOMxRef("FragmentDirective")}}.

## Exemples

### Vérifier si les fragments de texte sont pris en charge

Le code ci-dessous affiche dans la console si les fragments de texte sont pris en charge dans votre navigateur en vérifiant l'existence de l'objet.
Notez que l'objet est vide et qu'il est principalement destiné à la détection des fonctionnalités pour le moment.
À l'avenir, il pourrait inclure d'autres informations.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

```css hidden
#log {
  height: 20px;
}
```

```js
if (document.fragmentDirective) {
  log("Votre navigateur prend en charge les fragments de texte.");
} else {
  log(
    "Les fragments de texte ne sont pas pris en charge dans votre navigateur.",
  );
}
```

{{EmbedLiveSample("Vérifier si les fragments de texte sont pris en charge", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Fragments de texte](/fr/docs/Web/URI/Reference/Fragment/Text_fragments)
- Le pseudo-élément CSS {{CSSxRef("::target-text")}}
