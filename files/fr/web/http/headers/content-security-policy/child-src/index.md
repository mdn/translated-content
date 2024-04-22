---
title: "CSP : child-src"
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
---

{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`child-src`** définit les sources valides de [<i lang="en">web workers</i>](/fr/docs/Web/API/Web_Workers_API) et de contextes de navigations imbriqués chargés au moyen d'éléments tels que [`<frame>`](/fr/docs/Web/HTML/Element/frame) et [`<iframe>`](/fr/docs/Web/HTML/Element/iframe). Pour les <i lang="en">workers</i>, les requêtes non-conformes sont traitées comme des erreurs de réseau fatales par l'agent utilisateur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Fetch_directive">Directive de récupération</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: child-src https://example.com/
```

Cette [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) et ce <i lang="en">worker</i> seront bloqués et ne se chargeront pas&nbsp;:

```html
<iframe src="https://not-example.com"></iframe>

<script>
  let blockedWorker = new Worker("data:application/javascript,...");
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<frame>`](/fr/docs/Web/HTML/Element/frame) et [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)
- [`Worker`](/fr/docs/Web/API/Worker), [`SharedWorker`](/fr/docs/Web/API/SharedWorker), [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker)
