---
title: "HTMLIFrameElement : propriété allowFullscreen"
short-title: allowFullscreen
slug: Web/API/HTMLIFrameElement/allowFullscreen
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

La propriété **`allowFullscreen`** de l'interface {{DOMxRef("HTMLIFrameElement")}} est un booléen qui reflète l'attribut `allowfullscreen` de l'élément HTML {{HTMLElement("iframe")}}, indiquant s'il faut autoriser le contenu du cadre intégré (<i lang="en">iframe</i> en anglais) à utiliser {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}}.

> [!NOTE]
> Cette propriété est considérée comme une propriété héritée. Utilisez plutôt `allow="fullscreen"` et {{DOMxRef("HTMLIFrameElement.allow")}}.

## Valeur

Une valeur booléenne.

## Exemples

```html
<iframe id="el" allowfullscreen></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allowFullscreen); // Affiche : true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- La méthode {{DOMxRef("Element.requestFullscreen()")}}
- [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- La directive de la politique d'autorisations {{HTTPHeader("Permissions-Policy/fullscreen", "fullscreen")}}
