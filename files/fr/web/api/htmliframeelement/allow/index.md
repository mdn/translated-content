---
title: "HTMLIFrameElement : propriété allow"
short-title: allow
slug: Web/API/HTMLIFrameElement/allow
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

La propriété **`allow`** de l'interface {{DOMxRef("HTMLIFrameElement")}} indique la [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) définie pour cet élément HTML `<iframe>`. Cette politique définit les fonctionnalités disponibles pour l'élément `<iframe>` (par exemple, l'accès à `microphone`, `camera`, `battery`, `web-share`, etc.) selon l'origine de la requête.

La politique d'autorisations définie par l'attribut `allow` ajoute une restriction supplémentaire à celle définie dans l'en-tête {{HTTPHeader("Permissions-Policy")}}. Elle ne la remplace pas.

Voir la [syntaxe de la politique d'autorisations de `<iframe>`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) pour plus de détails.

Cette propriété reflète l'attribut `allow` de l'élément {{HTMLElement("iframe")}}.

## Valeur

Une chaîne de caractères indique la [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) définie pour cet élément {{HTMLElement("iframe")}}&nbsp;; chaque politique doit être séparée par un espace.

## Exemples

```html
<iframe
  id="el"
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allow); // Affiche : "geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"
```

Voir [Politique d'autorisations dans l'élément `<iframe>`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) pour plus d'exemples disponibles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
