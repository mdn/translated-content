---
title: 'CSP: manifest-src'
slug: Web/HTTP/Headers/Content-Security-Policy/manifest-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Manifest
  - Reference
  - Security
  - Sécurité
  - manifest-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/manifest-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} **`manifest-src`** spécifie quel [manifeste](/en-US/docs/Web/Manifest) peut être appliqué à la ressource.

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

    Content-Security-Policy: manifest-src <source>;
    Content-Security-Policy: manifest-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Exemples

### Violation cases

Soit cet en-tête CSP :

```bash
Content-Security-Policy: manifest-src https://example.com/
```

Cet élément {{HTMLElement("link")}} sera bloqué et ne se chargera pas :

```html
<link rel="manifest" href="https://not-example.com/manifest">
```

## Spécifications

| Spécification                                                                            | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-manifest-src", "manifest-src")}} | {{Spec2('CSP 3.0')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.manifest-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- [Web app manifest](/en-US/docs/Web/Manifest)
- {{HTMLElement("link")}}
