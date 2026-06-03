---
title: "Content-Security-Policy : directive frame-src"
short-title: frame-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-src`** définit les sources valides pour les contextes de navigation imbriqués chargés avec des éléments HTML tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}.

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
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>
        Si cette directive est absente, l'agent utilisateur consultera la directive {{CSP("child-src")}}, qui a pour valeur par défaut celle de la directive {{CSP("default-src")}}.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: frame-src 'none';
Content-Security-Policy: frame-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: frame-src https://exemple.com/
```

L'élément HTML {{HTMLElement("iframe")}} suivant sera bloqué et ne se chargera pas&nbsp;:

```html
<iframe src="https://hors-exemple.com/"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- Les éléments HTML {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}
- La directive CSP {{CSP("frame-ancestors")}}
