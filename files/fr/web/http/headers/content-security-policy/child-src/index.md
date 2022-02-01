---
title: 'CSP: child-src'
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
tags:
  - CSP
  - Child
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Sécurité
  - child-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/child-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`child-src`** définit les sources valides de [web workers](/en-US/docs/Web/API/Web_Workers_API) et de contextes de navigations imbriqués chargés au moyen d'éléments tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}. Pour les workers, les requêtes conformes sont traitées comme des erreurs de réseau fatales par l'agent utilisateur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
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

    Content-Security-Policy: child-src <source>;
    Content-Security-Policy: child-src <source> <source>;

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: child-src https://example.com/
```

Cet {{HTMLElement("iframe")}} et ce worker seront bloqués et ne se chargeront pas :

```html
<iframe src="https://not-example.com"></iframe>

<script>
  var blockedWorker = new Worker("data:application/javascript,...");
</script>
```

## Spécifications

| Spécification                                                                    | Statut                       | Commentaire          |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-child-src", "child-src")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-child-src", "child-src")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.child-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
