---
title: 'CSP: frame-src'
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - Frame
  - HTTP
  - Reference
  - Security
  - Sécurité
  - frame-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/frame-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-src`** spécifie les sources valides pour des contextes de navigation imbriqués chargés d'éléments tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>
        Si cette directive est absente, l'agent utilisateur consultera la
        directive {{CSP("child-src")}}, qui a pour valeur par défaut
        celle de la directive {{CSP("default-src")}}
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: frame-src <source>;
    Content-Security-Policy: frame-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: frame-src https://example.com/
```

Cet élément {{HTMLElement("iframe")}} est bloqué et ne se chargera pas :

```html
<iframe src="https://not-example.com/"></iframe>
```

## Spécifications

| Spécification                                                                    | Statut                       | Commentaire                    |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{specName("CSP 3.0", "#directive-frame-src", "frame-src")}} | {{Spec2('CSP 3.0')}} | Réappréciation de `frame-src`. |
| {{specName("CSP 1.1", "#directive-frame-src", "frame-src")}} | {{Spec2('CSP 1.1')}} | Dépréciation de `frame-src`.   |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.frame-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}
