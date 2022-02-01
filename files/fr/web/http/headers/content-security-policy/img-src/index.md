---
title: 'CSP: img-src'
slug: Web/HTTP/Headers/Content-Security-Policy/img-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Image
  - Reference
  - Security
  - Sécurité
  - img-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/img-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} **`img-src`** sépcifie les sources valides d'images et de favicons.

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

    Content-Security-Policy: img-src <source>;
    Content-Security-Policy: img-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: img-src https://example.com/
```

Cet élément {{HTMLElement("img")}} est bloqué et ne se chargera pas :

```html
<img src="https://not-example.com/foo.jpg" alt="example picture">
```

## Spécifications

| Spécification                                                                | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-img-src", "img-src")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-img-src", "img-src")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.img-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("img")}}
