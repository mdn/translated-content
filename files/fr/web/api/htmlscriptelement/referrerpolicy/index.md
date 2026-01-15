---
title: "HTMLScriptElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`referrerPolicy`** de l'interface {{DOMxRef("HTMLScriptElement")}} reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/script#referrerpolicy) de l'élément HTML {{HTMLElement("script")}}, qui définit comment le référent est défini lors de la récupération du script et de tous les scripts qu'il importe.

## Valeur

Une chaîne de caractères&nbsp;; l'une des suivantes&nbsp;:

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera totalement omis. Aucune information de référent n'est envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : L'URL est envoyée comme référent lorsque le niveau de sécurité du protocole reste le même (par exemple HTTP→HTTP, HTTPS→HTTPS), mais n'est pas envoyée vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `origin`
  - : Seule l'origine du document est envoyée comme référent dans tous les cas. Le document `https://exemple.com/page.html` enverra le référent `https://exemple.com/`.
- `origin-when-cross-origin`
  - : Envoie une URL complète lors d'une requête de même origine, mais envoie uniquement l'origine du document dans les autres cas.
- `same-origin`
  - : Un référent sera envoyé pour les [origines de même site](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les requêtes inter-origines ne contiendront aucune information de référent.
- `strict-origin`
  - : Envoie uniquement l'origine du document comme référent lorsque le niveau de sécurité du protocole reste le même (par exemple, HTTPS→HTTPS), mais ne l'envoie pas vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `strict-origin-when-cross-origin` (par défaut)
  - : Il s'agit du comportement par défaut de l'agent utilisateur si aucune politique n'est spécifiée. Envoie une URL complète lors d'une requête de même origine, envoie uniquement l'origine lorsque le niveau de sécurité du protocole reste le même (par exemple, HTTPS→HTTPS), et n'envoie aucun en-tête vers une destination moins sécurisée (par exemple, HTTPS→HTTP).
- `unsafe-url`
  - : Envoie une URL complète lors d'une requête de même origine ou inter-origines. Cette politique divulguera les origines et les chemins des ressources protégées par TLS vers des origines non sécurisées. Considérez attentivement l'impact de ce paramètre.

> [!NOTE]
> Une valeur de chaîne vide (`""`) est à la fois la valeur par défaut et la valeur de repli si `referrerpolicy` n'est pas pris en charge. Si
> `referrerpolicy` n'est pas explicitement défini sur l'élément
> `<script>`, il adoptera une politique de référent de niveau supérieur,
> c'est-à-dire celle définie sur l'ensemble du document ou du domaine. Si une politique de niveau supérieur n'est pas
> disponible, la chaîne vide est traitée comme équivalente à
> `no-referrer-when-downgrade`.

## Exemples

```js
const scriptElem = document.createElement("script");
scriptElem.src = "/";
scriptElem.referrerPolicy = "unsafe-url";
document.body.appendChild(scriptElem);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLIFrameElement.referrerPolicy")}}
