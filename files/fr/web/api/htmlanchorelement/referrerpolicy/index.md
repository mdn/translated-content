---
title: "HTMLAnchorElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

La propriété **`referrerPolicy`** de l'interface {{domxref("HTMLAnchorElement")}} reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/a#referrerpolicy) de l'élément HTML {{HTMLElement("a")}}, qui définit quel référent est envoyé lors de la récupération de la ressource.

## Valeur

Une chaîne de caractères parmi&nbsp;:

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera totalement omis. Aucune information de référent n'est envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : L'URL est envoyée comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple HTTP→HTTP, HTTPS→HTTPS), mais n'est pas envoyée vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `origin`
  - : Seule l'origine du document est envoyée comme référent dans tous les cas. Le document `https://exemple.fr/page.html` enverra le référent `https://exemple.fr/`.
- `origin-when-cross-origin`
  - : Envoie l'URL complète lors d'une requête same-origin, mais seulement l'origine du document pour les autres cas.
- `same-origin`
  - : Un référent sera envoyé pour les [origines same-site](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les requêtes cross-origin ne contiendront aucune information de référent.
- `strict-origin`
  - : Envoie uniquement l'origine du document comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default)
  - : Il s'agit du comportement par défaut de l'agent utilisateur si aucune politique n'est spécifiée. Envoie l'URL complète lors d'une requête same-origin, uniquement l'origine lorsque le niveau de sécurité du protocole reste identique (par exemple HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `unsafe-url`
  - : Envoie l'URL complète lors d'une requête same-origin ou cross-origin. Cette politique divulguera les origines et chemins des ressources protégées par TLS vers des origines non sécurisées. À utiliser avec précaution.

## Exemples

```js
const elt = document.createElement("a");
const linkText = document.createTextNode("Mon lien");
elt.appendChild(linkText);
elt.href = "https://developer.mozilla.org/fr/";
elt.referrerPolicy = "no-referrer";

const div = document.getElementById("divAround");
div.appendChild(elt); // Au clic, le lien n'enverra pas d'en-tête référent.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLImageElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
