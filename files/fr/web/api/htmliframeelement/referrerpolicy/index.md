---
title: "HTMLIFrameElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

La propriété **`HTMLIFrameElement.referrerPolicy`** reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) de l'élément HTML {{HTMLElement("iframe")}}, définissant le référent envoyé lors de la récupération de la ressource.

## Valeur

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera totalement omis. Aucune information de référent n'est envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : L'URL est envoyée comme référent lorsque le niveau de sécurité du protocole reste identique (HTTP→HTTP, HTTPS→HTTPS), mais n'est pas envoyée vers une destination moins sécurisée (HTTPS→HTTP).
- `origin`
  - : Seule l'origine du document est envoyée comme référent dans tous les cas. Le document `https://example.com/page.html` enverra le référent `https://example.com/`.
- `origin-when-cross-origin`
  - : Envoie une URL complète lors d'une requête de même origine, mais envoie uniquement l'origine du document dans les autres cas.
- `same-origin`
  - : Un référent sera envoyé pour les [origines de même site](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les requêtes inter-origines ne contiendront aucune information de référent.
- `strict-origin`
  - : Envoie uniquement l'origine du document comme référent lorsque le niveau de sécurité du protocole reste identique (HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (par défaut)
  - : Il s'agit du comportement par défaut de l'agent utilisateur si aucune politique n'est définie. Envoie une URL complète lors d'une requête de même origine, envoie uniquement l'origine lorsque le niveau de sécurité du protocole reste identique (HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (HTTPS→HTTP).
- `unsafe-url`
  - : Envoie une URL complète lors d'une requête de même origine ou inter-origines.

    > [!NOTE]
    > Cette politique divulguera les origines et les chemins des ressources protégées par TLS vers des origines non sécurisées. Veuillez bien considérer l'impact de ce paramètre.

## Exemples

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
iframe.referrerPolicy = "unsafe-url";
const body = document.querySelector("body");
body.appendChild(iframe); // Récupère l'image en utilisant l'URL complète comme référent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{DOMxRef("HTMLAnchorElement.referrerPolicy")}},
  {{DOMxRef("HTMLAreaElement.referrerPolicy")}} et
  {{DOMxRef("HTMLAreaElement.referrerPolicy")}}.
