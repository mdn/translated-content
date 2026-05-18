---
title: "HTMLAnchorElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

La propriété **`referrerPolicy`** de l'interface {{DOMxRef("HTMLAnchorElement")}} reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/a#referrerpolicy) de l'élément HTML {{HTMLElement("a")}}, qui définit quel référent est envoyé lors de la récupération de la ressource.

## Valeur

Une chaîne de caractères parmi&nbsp;:

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} est totalement omis. Aucune information de référent n'est envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : L'URL est envoyée comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple HTTP→HTTP, HTTPS→HTTPS), mais n'est pas envoyée vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `origin`
  - : Seule l'origine du document est envoyée comme référent dans tous les cas. Le document `https://exemple.fr/page.html` envoie le référent `https://exemple.fr/`.
- `origin-when-cross-origin`
  - : Envoie l'URL complète lors d'une requête same-origin, mais seulement l'origine du document pour les autres cas.
- `same-origin`
  - : Un référent est envoyé pour les [origines same-site](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les requêtes cross-origin ne contiennent aucune information de référent.
- `strict-origin`
  - : Envoie uniquement l'origine du document comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default)
  - : Il s'agit du comportement par défaut de l'agent utilisateur si aucune politique n'est définie. Envoie l'URL complète lors d'une requête same-origin, uniquement l'origine lorsque le niveau de sécurité du protocole reste identique (par exemple HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (par exemple HTTPS→HTTP).
- `unsafe-url`
  - : Envoie l'URL complète lors d'une requête same-origin ou cross-origin. Cette politique divulgue les origines et chemins des ressources protégées par TLS vers des origines non sécurisées. À utiliser avec précaution.

## Exemples

```js
const elt = document.createElement("a");
const linkText = document.createTextNode("Mon lien");
elt.appendChild(linkText);
elt.href = "https://developer.mozilla.org/fr/";
elt.referrerPolicy = "no-referrer";

const div = document.getElementById("divAround");
div.appendChild(elt); // Au clic, le lien n'envoie pas d'en-tête référent.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.referrerPolicy")}}
- La propriété {{DOMxRef("HTMLAreaElement.referrerPolicy")}}
- La propriété {{DOMxRef("HTMLIFrameElement.referrerPolicy")}}
