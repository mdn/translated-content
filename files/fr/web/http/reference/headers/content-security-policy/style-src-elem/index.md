---
title: "Content-Security-Policy : directive style-src-elem"
short-title: style-src-elem
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-elem
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-elem`** définit les sources valides pour les feuilles de styles embarquées avec les éléments HTML {{HTMLElement("style")}} et avec les éléments HTML {{HTMLElement("link")}} portant l'attribut `rel="stylesheet"`.

Cette directive ne définit pas les sources valides pour les attributs de style embarqué&nbsp;; celles-ci sont définies en utilisant {{CSP("style-src-attr")}} (et les sources valides pour tous les styles peuvent être définies avec {{CSP("style-src")}}).

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive {{CSP("style-src")}}, qui a pour valeur par défaut celle de la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: style-src-elem 'none';
Content-Security-Policy: style-src-elem <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les mêmes valeurs d'expression de source sont applicables que pour [`style-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src), à l'exception de [`'unsafe-hashes'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes).

`style-src-elem` peut être utilisé en conjonction avec {{CSP("style-src")}}:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: style-src-elem https://exemple.com/
```

…les feuilles de style suivantes sont bloquées et ne seront pas chargées&nbsp;:

```html
<link href="https://hors-exemple.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import "https://hors-exemple.com/styles/print.css" print;
</style>
```

…ainsi que les styles chargés en utilisant l'en-tête {{HTTPHeader("Link")}}&nbsp;:

```http
Link: <https://hors-exemple.com/styles/stylesheet.css>;rel=stylesheet
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("style-src")}}
- La directive CSP {{CSP("style-src-attr")}}
- L'en-tête {{HTTPHeader("Link")}}
- L'élément HTML {{HTMLElement("style")}}, {{HTMLElement("link")}}
- La règle CSS {{CSSxRef("@import")}}
- La méthode API {{DOMxRef("CSSStyleSheet.insertRule()")}}
- La méthode API {{DOMxRef("CSSGroupingRule.insertRule()")}}
- La propriété API {{DOMxRef("CSSStyleDeclaration.cssText")}}
