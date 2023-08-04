---
title: "CSP : frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
---

{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`frame-src`** spécifie les sources valides pour les contextes de navigation imbriqués chargés avec des éléments tels que [`<frame>`](/fr/docs/Web/HTML/Element/frame) et [`<iframe>`](/fr/docs/Web/HTML/Element/iframe).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Fetch_directive">Directive de récupération</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>
        Si cette directive est absente, l'agent utilisateur consultera la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/child-src"><code>child-src</code></a>, qui a pour valeur par défaut celle de la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: frame-src <source>;
Content-Security-Policy: frame-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: frame-src https://example.com/
```

L'élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) suivant sera bloqué et ne se chargera pas&nbsp;:

```html
<iframe src="https://not-example.com/"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<frame>`](/fr/docs/Web/HTML/Element/frame) et [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)
