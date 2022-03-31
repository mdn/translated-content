---
title: 'CSP : worker-src'
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
translation_of: Web/HTTP/Headers/Content-Security-Policy/worker-src
browser-compat: http.headers.csp.Content-Security-Policy.worker-src
---
{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`worker-src`** spécifie les sources valides pour les scripts de type [`Worker`](/fr/docs/Web/API/Worker), [`SharedWorker`](/fr/docs/Web/API/SharedWorker) et [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker).

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
      <th scope="row">Valeur par défaut</th>
      <td>
        Si cette directive est absente, l'agent utilisateur consultera d'abord la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/child-src"><code>child-src</code></a>, puis la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src"><code>script-src</code></a> et enfin la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```bash
Content-Security-Policy: worker-src https://example.com/
```

[`Worker`](/fr/docs/Web/API/Worker), [`SharedWorker`](/fr/docs/Web/API/SharedWorker) et [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker) seront bloqués et ne seront pas chargés&nbsp;:

```html
<script>
  let blockedWorker = new Worker("data:application/javascript,...");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register('https://not-example.com/sw.js');
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [Utiliser CSP pour les <i lang="en">Web Workers</i>](/fr/docs/Web/API/Web_Workers_API/Using_web_workers#règles_de_sécurité_du_contenu_content_security_policy_csp)
- [`Worker`](/fr/docs/Web/API/Worker), [`SharedWorker`](/fr/docs/Web/API/SharedWorker), [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker)
