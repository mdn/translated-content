---
title: "Content-Security-Policy : directive fenced-frame-src"
short-title: fenced-frame-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`fenced-frame-src`** définit les sources valides pour les contextes de navigation imbriqués chargés dans les éléments {{HTMLElement("fencedframe")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli</th>
      <td>
        Si cette directive est absente, l'agent utilisateur recherchera la
        directive {{CSP("frame-src")}} (qui se replie sur la directive
        {{CSP("child-src")}}).
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: fenced-frame-src <source-expression-list>;
```

- `<source-expression-list>`
  - : Une liste _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - La valeur [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source) `"https:"`
    - La valeur [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source) `"https:"`
    - La chaîne de caractères `"*"`

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: fenced-frame-src https://exemple.com/
```

Les sources suivantes ne se chargeront pas dans un cadre clôturé&nbsp;:

- `https://hors-exemple.com/` (le domaine ne correspond pas)
- `https://exemple.org/` (le TLD ne correspond pas)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fenced Frame](/fr/docs/Web/API/Fenced_frame_API)
- L'élément HTML {{HTMLElement("fencedframe")}}
- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
