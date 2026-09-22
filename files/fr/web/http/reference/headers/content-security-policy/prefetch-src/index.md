---
title: "Content-Security-Policy : directive prefetch-src"
short-title: prefetch-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/prefetch-src
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`prefetch-src`** définit les ressources pouvant être préchargées ou préaffichées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consulte la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: prefetch-src 'none';
Content-Security-Policy: prefetch-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemple

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Les requêtes émises par ce code génèrent des erreurs de réseau puisque les URL demandées ne correspondent pas à la liste de permissions de la directive `prefetch-src`&nbsp;:

```html
<link rel="prefetch" href="https://exemple.org/" />
<link rel="prerender" href="https://exemple.org/" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
