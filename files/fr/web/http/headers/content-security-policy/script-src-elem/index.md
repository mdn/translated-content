---
title: 'CSP : script-src-elem'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
browser-compat: http.headers.csp.Content-Security-Policy.script-src-elem
---
{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`script-src-elem`** indique les sources valides pour des éléments [`<script>`](/fr/docs/Web/HTML/Element/script). Elle ne porte pas sur les scripts embarqués via les attributs HTML pour la gestion d'évènements comme `onclick` (voir [`script-src-attr`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr) à ce propos).

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src"><code>script-src</code></a>, qui a pour valeur par défaut celle de la directive <code>default-src</code>.
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: script-src-elem <source>;
Content-Security-Policy: script-src-elem <source> <source>;
```

`script-src-elem` peut être utilisée avec [`script-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)&nbsp;:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Valeur par défaut avec `script-src`

Si la directive `script-src-elem` est absente, l'agent utilisateur se rabat sur la valeur de la directive [`script-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src), qui elle-même a pour valeur par défaut celle de la directive [`default-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<script>`](/fr/docs/Web/HTML/Element/script)
- [`script-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)
- [`script-src-attr`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr)
