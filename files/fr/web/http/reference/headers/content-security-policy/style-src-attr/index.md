---
title: "Content-Security-Policy : directive style-src-attr"
short-title: style-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr
l10n:
  sourceCommit: 119e866ff18a4cd9446e3bfa52154f67cfe117b4
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-attr`** définit les sources valides pour des feuilles de styles appliquées à des éléments individuels du DOM par l'attribut `style`.

Cette directive ne définit pas les sources valides pour les éléments HTML {{HTMLElement("style")}} et les éléments {{HTMLElement("link")}} avec `rel="stylesheet"`.
Ces sources sont définies en utilisant {{CSP("style-src-elem")}} (et les sources valides pour tous les styles peuvent être définies avec {{CSP("style-src")}}).

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
Content-Security-Policy: style-src-attr 'none';
Content-Security-Policy: style-src-attr <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`'unsafe-hashes'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`style-src-attr` peut être utilisé en conjonction avec {{CSP("style-src")}}:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: style-src-attr 'none'
```

…le style embarqué appliqué à l'élément ci-dessous ne sera pas appliqué&nbsp;:

```html
<div style="display: inline">Foo</div>
```

La politique bloquera également tous les styles appliqués en JavaScript en définissant directement l'attribut `style`, ou en définissant {{DOMxRef("CSSStyleDeclaration.cssText", "cssText")}}&nbsp;:

```js
document.querySelector("div").setAttribute("style", "display: inline");
document.querySelector("div").style.cssText = "display: inline";
```

Les propriétés de style définies directement sur la propriété {{DOMxRef("HTMLElement/style", "style")}} de l'élément ne seront pas bloquées, permettant aux utilisateur·ice·s de manipuler sainement les styles avec JavaScript&nbsp;:

```js
document.querySelector("div").style.display = "inline";
```

Notez que l'utilisation de JavaScript peut être bloquée indépendamment en utilisant la directive CSP {{CSP("script-src")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("style-src")}}
- La directive CSP {{CSP("style-src-elem")}}
- L'en-tête {{HTTPHeader("Link")}}
- L'élément HTML {{HTMLElement("style")}}, {{HTMLElement("link")}}
- La règle CSS {{CSSxRef("@import")}}
- La méthode API {{DOMxRef("CSSStyleSheet.insertRule()")}}
- La méthode API {{DOMxRef("CSSGroupingRule.insertRule()")}}
- La propriété API {{DOMxRef("CSSStyleDeclaration.cssText")}}
