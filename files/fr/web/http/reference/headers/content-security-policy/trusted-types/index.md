---
title: "Content-Security-Policy : directive trusted-types"
short-title: trusted-types
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: ecd02ce48a6a6076e244396747a1d31eb4d9747a
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** est utilisée pour définir une liste blanche de [noms de règles de types de confiance](/fr/docs/Web/API/Trusted_Types_API) qu'un site web peut créer en utilisant {{DOMxRef("TrustedTypePolicyFactory/createPolicy", "trustedTypes.createPolicy()")}}.

Cela empêche le code du site web de créer des règles inattendues, ce qui facilite l'audit du code de types de confiance (`createPolicy()` générera une exception si un nom qui n'est pas répertorié dans `trusted-types` est passé).

> [!NOTE]
> La directive {{CSP("require-trusted-types-for")}} doit être définie pour activer l'application des types de confiance, et le mot-clé [`trusted-types-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) est utilisé pour assouplir les restrictions sur {{JSxRef("eval()")}} et {{JSxRef("Function()")}} lorsque les types de confiance sont activés.
>
> Voir [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) pour plus d'informations.

## Syntaxe

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Un nom de règle valide ne contient que des caractères alphanumériques, ou l'un des caractères `-#=_/@.%`. Une astérisque (`*`) comme nom de règle informe l'agent utilisateur d'autoriser tout nom de règle unique (`allow-duplicates` pourrait assouplir cela davantage).
- `'none'`
  - : Interdit la création de toute règle de Trusted Type (identique au fait de ne renseigner aucun _\<policyName>_).
- `'allow-duplicates'`
  - : Autorise la création de règles dont le nom a déjà été utilisé.

## Exemples

```js
// Content-Security-Policy: trusted-types toto tata 'allow-duplicates';

if (typeof trustedTypes !== "undefined") {
  const politiqueToto = trustedTypes.createPolicy("toto", {});
  const politiqueToto2 = trustedTypes.createPolicy("toto", {});
  const politiqueTata = trustedTypes.createPolicy("tata", {}); // Lève et déclenche un évènement SecurityPolicyViolationEvent.
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
  - [la directive `require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)
  - [le mot-clé `trusted-types-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
- [L'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API)
  - [L'interface des puits d'injection](/fr/docs/Web/API/Trusted_Types_API#interfaces_des_puits_dinjection)
- L'entrée de glossaire [Cross-Site Scripting (XSS)](/fr/docs/Glossary/Cross-site_scripting)
