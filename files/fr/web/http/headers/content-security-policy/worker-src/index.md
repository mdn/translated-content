---
title: 'CSP: worker-src'
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Sécurité
translation_of: Web/HTTP/Headers/Content-Security-Policy/worker-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`worker-src`** spécifie les sources valides pour les scripts {{domxref("Worker")}}, {{domxref("SharedWorker")}} et {{domxref("ServiceWorker")}}.

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
      <th scope="row">Valeur par défaut</th>
      <td>
        <p>
          Si cette directive est absente, l'agent utilisateur consultera d'abord
          la directive {{CSP("child-src")}}, puis la directive
          {{CSP("script-src")}} et enfin la directive
          {{CSP("default-src")}}, concernant la gestion l'exécution des
          workers.
        </p>
        <p>
          Chrome 59 et plus ne consultent pas la directive
          {{CSP("child-src")}}.
        </p>
        <p>
          Edge 17 ne consulte pas la directive {{CSP("script-src")}} (<a
            href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/17415478/"
            >bug</a
          >).
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: worker-src <source>;
    Content-Security-Policy: worker-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: worker-src https://example.com/
```

{{domxref("Worker")}}, {{domxref("SharedWorker")}} et {{domxref("ServiceWorker")}} seront bloqués et ne se chargeront pas :

```html
<script>
  var blockedWorker = new Worker("data:application/javascript,...");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register('https://not-example.com/sw.js');
</script>
```

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-worker-src", "worker-src")}} | {{Spec2('CSP 3.0')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.worker-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- [CSP for Web Workers](/docs/Web/API/Web_Workers_API/Using_web_workers#Content_security_policy)
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
