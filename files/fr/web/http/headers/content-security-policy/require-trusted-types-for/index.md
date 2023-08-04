---
title: "CSP: require-trusted-types-for"
slug: Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
---

{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** {{experimental_inline}} directive informe l'agent utilisateur de contrôler les données passées au puits de fonctions XSS du DOM, tel que le mutateur [Element.innerHTML](/fr/docs/Web/API/Element/innerHTML).

Lors de leur usage, ces fonctions n'acceptent que des valeurs typées et non falsifiables créées par des règles de Trusted Type et rejettent les chaines de caractère. Conjointement à la directive **[`trusted-types`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)**, qui empêche la création de règles de Trusted Type, cette directive permet aux auteurs de définir des règles empêchant d'écrire des données dans le DOM et donc de réduire la fenêtre de tir pour les attaques XSS sur le DOM à quelques pans isolés de la base de code d'une application, facilitant donc son contrôle et sa relecture.

## Syntaxe

```
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Interdit l'usage de chaine de caractères avec les fonctions du puits d'injection XSS du DOM, et requiert que les types correspondant soient créés par des règles de Trusted Type.

## Exemples

```js
// Content-Security-Policy: require-trusted-types-for 'script'; trusted-types foo;

const attackerInput = '<svg onload="alert(/cross-site-scripting/)" />';
const el = document.createElement("div");

if (typeof trustedTypes !== "undefined") {
  // Create a policy that can create TrustedHTML values
  // after sanitizing the input strings with DOMPurify library.
  const sanitizer = trustedTypes.createPolicy("foo", {
    createHTML: (input) => DOMPurify.sanitize(input),
  });

  el.innerHTML = sanitizer.createHTML(attackerInput); // Puts the sanitized value into the DOM.
  el.innerHTML = attackerInput; // Rejects a string value; throws a TypeError.
}
```

## Prothèse d'émulaiton

Une [prothèse d'émulation pour les Trusted Types](https://github.com/w3c/webappsec-trusted-types#polyfill) est disponible sur Github.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/fr/docs/Glossary/Cross-site_scripting)
- [DOM XSS injection sinks covered by Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/#injection-sinks)
- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types)
- Trusted Types with [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS sanitizer
