---
title: 'CSP: prefetch-src'
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - prefetch-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`prefetch-src`** spécifie les ressources pouvant être préchargées ou préaffichées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} par défaut</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la
        directive <code>default-src</code>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: prefetch-src <source>;
    Content-Security-Policy: prefetch-src <source> <source>;

### Sources

{{page("/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src", "common_sources")}}

## Exemple

### Cas de violation

Soit cet en-tête CSP :

    Content-Security-Policy: prefetch-src https://example.com/

Les requêtes émises par ce code généreront des erreurs de réseau puisque les URL demandées ne correspondant pas à la liste de permissions de la directive `prefetch-src` :

    <link rel="prefetch" src="https://example.org/"></link>
    <link rel="prerender" src="https://example.org/"></link>

## Spécification

| Spécification                                                                | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#prefetch-src", "prefetch-src")}} | {{Spec2("CSP 3.0")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.prefetch-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
