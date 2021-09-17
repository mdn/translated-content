---
title: 'CSP: connect-src'
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Sécurité
  - connect-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/connect-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`connect-src`** restreint les URL qui peuvent être chargées en utilisant des interfaces de programmation. Les API qui sont affectées sont :

- {{HTMLElement("a")}} {{htmlattrxref("ping", "a")}},
- {{domxref("Fetch")}},
- {{domxref("XMLHttpRequest")}},
- {{domxref("WebSocket")}},
- {{domxref("EventSource")}}, and
- {{domxref("Navigator.sendBeacon()")}}.

> **Note :** `connect-src 'self'` ne s'applique pas aux schémas de websocket pour tous les navigateurs. Pour plus d'informations, consulter : <https://github.com/w3c/webappsec-csp/issues/7>.

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

    Content-Security-Policy: connect-src <source>;
    Content-Security-Policy: connect-src <source> <source>;

### Sources

{{page("/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src", "common_sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: connect-src https://example.com/
```

Les connexions suivantes seront bloquées et ne se chargeront pas :

```html
<a ping="https://not-example.com">

<script>
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://not-example.com/');
  xhr.send();

  var ws = new WebSocket("https://not-example.com/");

  var es = new EventSource("https://not-example.com/");

  navigator.sendBeacon("https://not-example.com/", { ... });
</script>
```

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-connect-src", "connect-src")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-connect-src", "connect-src")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.connect-src")}}

## Notes de compatibilité

- Avant Firefox 23, `xhr-src` était utilisé en lieu et place de la directive `connect-src` et ne s'appliquait qu'à l'API {{domxref("XMLHttpRequest")}}.

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} {{htmlattrxref("ping", "a")}}
- {{domxref("Fetch")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
