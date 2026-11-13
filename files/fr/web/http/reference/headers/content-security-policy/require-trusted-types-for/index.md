---
title: "Content-Security-Policy : directive require-trusted-types-for"
short-title: require-trusted-types-for
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: ecd02ce48a6a6076e244396747a1d31eb4d9747a
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** informe l'agent utilisateur de contrôler les données passées au puits de fonctions XSS du DOM, tel que le mutateur {{DOMxRef("Element.innerHTML")}}.

Lorsqu'elles sont utilisées, ces fonctions n'acceptent que des valeurs typées qui ne peuvent pas être falsifiées, créées par les politiques [de type de confiance](/fr/docs/Web/API/Trusted_Types_API), et rejettent les chaînes de caractères.
En combinaison avec la directive **[`trusted-types`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)**, qui protège la création de politiques de type de confiance, cela permet aux auteur·ice·s de définir des règles pour l'écriture de valeurs dans le DOM, réduisant ainsi la surface d'attaque XSS du DOM à de petites parties isolées du code de l'application web, facilitant leur surveillance et leur révision.

## Syntaxe

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Interdit l'usage de chaîne de caractères avec les fonctions du puits d'injection XSS du DOM, et requiert que les types correspondant soient créés par des règles de type de confiance.

## Exemples

```js
// Content-Security-Policy: require-trusted-types-for 'script'; trusted-types foo;

const entreeDeAttaquant = '<svg onload="alert(/cross-site-scripting/)" />';
const el = document.createElement("div");

if (typeof trustedTypes !== "undefined") {
  // Crée une politique qui peut créer des valeurs TrustedHTML
  // après avoir assaini les chaînes d'entrée avec la bibliothèque DOMPurify.
  const assainisseur = trustedTypes.createPolicy("foo", {
    createHTML: (input) => DOMPurify.sanitize(input),
  });

  el.innerHTML = assainisseur.createHTML(entreeDeAttaquant); // Met la valeur assainie dans le DOM.
  el.innerHTML = entreeDeAttaquant; // Rejette une valeur de type chaîne ; lance une TypeError.
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
  - [la directive `trusted-types`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)
  - [le mot clé `trusted-types-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
- [L'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API)
  - [L'interface des puits d'injection](/fr/docs/Web/API/Trusted_Types_API#interfaces_des_puits_dinjection)
- L'entrée de glossaire [Cross-Site Scripting (XSS)](/fr/docs/Glossary/Cross-site_scripting)
