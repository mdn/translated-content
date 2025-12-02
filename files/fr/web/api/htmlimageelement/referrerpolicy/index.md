---
title: "HTMLImageElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`referrerPolicy`** de l'interface {{domxref("HTMLImageElement")}} reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/img#referrerpolicy) de l'élément {{HTMLElement("img")}}, qui définit quel référent est envoyé lors de la récupération de la ressource.

## Valeur

Une chaîne de caractères parmi&nbsp;:

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera totalement omis. Aucune information de référent n'est envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : L'URL est envoyée comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple HTTP→HTTP, HTTPS→HTTPS), mais n'est pas envoyée vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `origin`
  - : Seule l'origine du document est envoyée comme référent dans tous les cas. Le document `https://exemple.fr/page.html` enverra le référent `https://exemple.fr/`.
- `origin-when-cross-origin`
  - : Envoie une URL complète lors d'une requête même origine, mais seulement l'origine du document dans les autres cas.
- `same-origin`
  - : Un référent sera envoyé pour les [origines de même site](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les requêtes inter-origines ne contiendront aucune information de référent.
- `strict-origin`
  - : Envoie uniquement l'origine du document comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `strict-origin-when-cross-origin` (par défaut)
  - : Il s'agit du comportement par défaut de l'agent utilisateur si aucune politique n'est spécifiée. Envoie une URL complète lors d'une requête même origine, envoie uniquement l'origine lorsque le niveau de sécurité du protocole reste identique (par exemple HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `unsafe-url`
  - : Envoie une URL complète lors d'une requête même origine ou inter-origines. Cette politique divulguera les origines et chemins des ressources protégées TLS vers des origines non sécurisées. Considérez attentivement l'impact de ce paramètre.

## Exemples

```js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // Récupère l'image en utilisant l'origine comme référent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
