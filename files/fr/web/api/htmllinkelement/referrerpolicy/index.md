---
title: "HTMLLinkElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`referrerPolicy`** de l'interface {{domxref("HTMLLinkElement")}} reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/link#referrerpolicy) de l'élément HTML {{HTMLElement("link")}} qui définit le référent envoyé lors de la récupération de la ressource.

Voir l'en-tête HTTP {{HTTPHeader("Referrer-Policy")}} pour plus de détails.

## Valeur

Une chaîne de caractères&nbsp;; l'une des suivantes&nbsp;:

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera totalement omis. Aucune information de référent n'est envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : L'URL est envoyée
    comme référent lorsque le niveau de sécurité du protocole reste le même (par exemple HTTP→HTTP, HTTPS→HTTPS), mais n'est pas envoyée vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `origin`
  - : Envoie uniquement l'origine du document comme référent dans tous les cas.
    Le document `https://exemple.fr/page.html` enverra le référent `https://exemple.fr/`.
- `origin-when-cross-origin`
  - : Envoie une URL complète lors d'une requête same-origin, mais envoie uniquement l'origine du document dans les autres cas.
- `same-origin`
  - : Un référent sera envoyé pour les [origines same-site](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les requêtes cross-origin ne contiendront aucune information de référent.
- `strict-origin`
  - : Envoie uniquement l'origine du document comme référent lorsque le niveau de sécurité du protocole reste le même (par exemple, HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `strict-origin-when-cross-origin` (valeur par défaut)
  - : Il s'agit du comportement par défaut de l'agent utilisateur si aucune politique n'est spécifiée.
    Envoie une URL complète lors d'une requête same-origin, envoie uniquement l'origine lorsque le niveau de sécurité du protocole reste le même (par exemple, HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `unsafe-url`
  - : Envoie une URL complète lors d'une requête same-origin ou cross-origin.
    Cette politique divulguera les origines et chemins des ressources protégées par TLS vers des origines non sécurisées.
    Considérez attentivement l'impact de ce paramètre.

## Exemples

```js
const links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Referrer-Policy")}}
- La propriété {{domxref("HTMLAnchorElement.referrerPolicy")}}
- La propriété {{domxref("HTMLAreaElement.referrerPolicy")}}
- La propriété {{domxref("HTMLIFrameElement.referrerPolicy")}}
- La propriété {{domxref("HTMLImageElement.referrerPolicy")}}
