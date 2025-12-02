---
title: "HTMLAreaElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La propriété **`referrerPolicy`** reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/area#referrerpolicy) de l'élément {{HTMLElement("area")}}, qui définit quel référent est envoyé lors de la récupération de la ressource.

## Valeur

Une chaîne de caractères&nbsp;; l'une des suivantes&nbsp;:

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera totalement omis. Aucune information de référent n'est envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : L'URL est envoyée comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple HTTP→HTTP, HTTPS→HTTPS), mais n'est pas envoyée vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `origin`
  - : Envoie uniquement l'origine du document comme référent dans tous les cas. Le document `https://exemple.fr/page.html` enverra le référent `https://exemple.fr/`.
- `origin-when-cross-origin`
  - : Envoie l'URL complète lors d'une requête de même origine, mais envoie uniquement l'origine du document dans les autres cas.
- `same-origin`
  - : Un référent sera envoyé pour les [origines de même site](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les requêtes d'origine croisée ne contiendront aucune information de référent.
- `strict-origin`
  - : Envoie uniquement l'origine du document comme référent lorsque le niveau de sécurité du protocole reste identique (par exemple, HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default)
  - : Il s'agit du comportement par défaut de l'agent utilisateur si aucune politique n'est définie. La chaîne de caractères complète de l'URL est envoyée lors d'une requête de même origine, seule l'origine est envoyée lorsque le niveau de sécurité du protocole reste identique (par exemple, HTTPS→HTTPS), et aucun en-tête n'est envoyé vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `unsafe-url`
  - : Envoie la chaîne de caractères complète de l'URL lors d'une requête de même origine ou d'origine croisée. Cette politique divulguera les origines et chemins des ressources protégées par TLS vers des origines non sécurisées.
    Réfléchissez bien à l'impact de ce paramètre.

## Exemples

```html
<img usemap="#my-map" width="100" height="100" src="/img/logo@2x.png" />
<map id="my-map" name="my-map"></map>
```

```js
const elt = document.createElement("area");
elt.href = "/img2.png";
elt.shape = "rect";
elt.referrerPolicy = "no-referrer";
elt.coords = "0,0,100,100";
const map = document.getElementById("my-map");

map.appendChild(elt);
// Lors du clic, le lien de la zone n'enverra pas d'en-tête référent.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.referrerPolicy")}},
- La propriété {{DOMxRef("HTMLAnchorElement.referrerPolicy")}}
- La propriété {{DOMxRef("HTMLIFrameElement.referrerPolicy")}}
