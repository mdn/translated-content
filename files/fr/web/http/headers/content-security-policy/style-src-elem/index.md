---
title: "CSP : style-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
---

{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`style-src-elem`** indique les sources valides pour les feuilles de styles embarquées avec les éléments [`<style>`](/fr/docs/Web/HTML/Element/style) et avec les éléments [`<link>`](/fr/docs/Web/HTML/Element/link) portant l'attribut `rel="stylesheet"`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Fetch_directive">Directive de récupération</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/style-src"><code>style-src</code></a>, qui a pour valeur par défaut celle de la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: style-src-elem <source>;
Content-Security-Policy: style-src-elem <source> <source>;
```

`style-src-elem` peut être utilisée avec [`style-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/style-src)&nbsp;:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`style-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/style-src)
- [`style-src-attr`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr)
- L'en-tête [`Link`](/fr/docs/Web/HTTP/Headers/Link)
- [`<style>`](/fr/docs/Web/HTML/Element/style), [`<link>`](/fr/docs/Web/HTML/Element/link)
- [`@import`](/fr/docs/Web/CSS/@import)
- [`CSSStyleSheet.insertRule()`](/fr/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/fr/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/fr/docs/Web/API/CSSStyleDeclaration/cssText)
