---
title: "CSP : connect-src"
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
---

{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`connect-src`** restreint les URL qui peuvent être chargées en utilisant des interfaces de programmation. Les API concernées sont&nbsp;:

- [`<a>`](/fr/docs/Web/HTML/Element/a) et l'attribut [`ping`](/fr/docs/Web/HTML/Element/a#ping),
- [`fetch()`](/fr/docs/Web/API/fetch),
- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest),
- [`WebSocket`](/fr/docs/Web/API/WebSocket),
- [`EventSource`](/fr/docs/Web/API/EventSource),
- [`Navigator.sendBeacon()`](/fr/docs/Web/API/Navigator/sendBeacon).

> **Note :** `connect-src 'self'` ne s'applique pas aux schémas de websocket pour tous les navigateurs. Pour plus d'informations, consulter [ce ticket (en anglais)](https://github.com/w3c/webappsec-csp/issues/7).

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: connect-src https://example.com/
```

Les connexions suivantes seront bloquées et ne se chargeront pas&nbsp;:

```html
<a ping="https://not-example.com"></a>

<script>
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://not-example.com/');
  xhr.send();

  let ws = new WebSocket("https://not-example.com/");

  let es = new EventSource("https://not-example.com/");

  navigator.sendBeacon("https://not-example.com/", { ... });
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes de compatibilité

- Avant Firefox 23, `xhr-src` était utilisé en lieu et place de la directive `connect-src` et ne s'appliquait qu'à l'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest).

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<a>`](/fr/docs/Web/HTML/Element/a) et l'attribut [`ping`](/fr/docs/Web/HTML/Element/a#ping)
- [`fetch()`](/fr/docs/Web/API/fetch)
- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)
- [`WebSocket`](/fr/docs/Web/API/WebSocket)
- [`EventSource`](/fr/docs/Web/API/EventSource)
