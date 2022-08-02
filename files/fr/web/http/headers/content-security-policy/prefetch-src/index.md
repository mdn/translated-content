---
title: 'CSP : prefetch-src'
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
translation_of: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
browser-compat: http.headers.csp.Content-Security-Policy.prefetch-src
---
{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`prefetch-src`** spécifie les ressources pouvant être préchargées ou préaffichées.

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemple

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Les requêtes émises par ce code généreront des erreurs de réseau puisque les URL demandées ne correspondent pas à la liste de permissions de la directive `prefetch-src`&nbsp;:

```html
<link rel="prefetch" src="https://example.org/"></link>
<link rel="prerender" src="https://example.org/"></link>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
