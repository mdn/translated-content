---
title: "HTMLImageElement : propriété attributionSrc"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Attribution Reporting API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

La propriété **`attributionSrc`** de l'interface {{DOMxRef("HTMLImageElement")}} permet d'indiquer que vous souhaitez que le navigateur envoie un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} avec la requête d'image. Elle reflète l'attribut de contenu [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/img#attributionsrc) de l'élément HTML `<img>`.

Voir [l'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

## Valeur

Une chaîne de caractères vide ou une liste d'URL séparées par des espaces. Pour l'interprétation de cet attribut, voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#attributionsrc).

## Exemples

### Définir un `attributionSrc` vide

```html
<img src="advertising-image.png" />
```

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

### Définir un `attributionSrc` contenant des URL

```html
<img src="advertising-image.png" />
```

```js
// Encoder les URL au cas où elles contiendraient des caractères spéciaux
// comme '=' qui seraient mal interprétés.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const imgElem = document.querySelector("img");
imgElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API).
