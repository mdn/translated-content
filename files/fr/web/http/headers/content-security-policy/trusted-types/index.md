---
title: 'CSP: trusted-types'
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Security
  - Sécurité
  - source
  - trusted-types
translation_of: Web/HTTP/Headers/Content-Security-Policy/trusted-types
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** {{experimental_inline}} informe l'agent utilisateur qu'il faut restreindre la création de règles Trusted Types (fonctions qui créent des valeurs typées non falsifiables, dans le but de les passer au puits XSS du DOM au lieu de chaines de caractères).

Conjointement à la directive [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for), cette directive permet aux auteurs de définir des règles empêchant d'injecter des données dans le DOM et donc de réduire la fenêtre de tir pour les attaques XSS sur le DOM à quelques pans isolés de la base de code d'une application, facilitant donc son contrôle et sa relecture. Cette directive déclare une liste de permissions de noms de règles de Trusted Types créée avec `TrustedTypes.createPolicy` à partir de l'API Trusted Types.

## Syntaxe

    Content-Security-Policy: trusted-types;
    Content-Security-Policy: trusted-types 'none';
    Content-Security-Policy: trusted-types <policyName>;
    Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';

- \<nomRègle>
  - : Un nom de règle est composé de caractères alphanumériques ou d'un ou plusieurs "`-#=_/@.%`".  Une astérisque (`*`) comme nom de règle informe l'agent utilisateur d'autoriser tout nom de règle unique (quoique la valeur `'allow-duplicates'` pourrait permettre d'être plus laxiste à l'avenir).
- `'none'`
  - : Interdit la création de toute règle de Trusted Type (identique au fait de ne renseigner aucun nom de règle).
- `'allow-duplicates'`
  - : Autorise la création de règles dont le nom a déjà été utilisé.

## Exemples

Soit l'en-tête CSP :

    Content-Security-Policy: trusted-types foo bar 'allow-duplicates';

Ce code génèrera une erreur car une des règles créées a un nom non autorisé :

```js
if (typeof trustedTypes !== 'undefined') {
  const policyFoo = trustedTypes.createPolicy('foo', {});
  const policyFoo2 = trustedTypes.createPolicy('foo', {});
  const policyBaz = trustedTypes.createPolicy('baz', {}); // Throws and dispatches a SecurityPolicyViolationEvent.
}
```

## Prothèse d'émulation

Un [prothèse d'émulation pour les Trusted Types](https://github.com/w3c/webappsec-trusted-types#polyfill) est disponible sur Github.

## Spécifications

| Spécification                                                             | Statut | Commentaire          |
| ------------------------------------------------------------------------- | ------ | -------------------- |
| [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) | Draft  | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.trusted-types")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/en-US/docs/Glossary/Cross-site_scripting)
- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types)
- Trusted Types with [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS sanitizer
