---
title: "Content-Security-Policy : directive worker-src"
short-title: worker-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`worker-src`** définit les sources valides pour les scripts de type {{DOMxRef("Worker")}}, {{DOMxRef("SharedWorker")}} ou {{DOMxRef("ServiceWorker")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli</th>
      <td>
        Si cette directive est absente, l'agent utilisateur consultera d'abord la directive {{CSP("child-src")}}, puis la directive {{CSP("script-src")}} et enfin la directive {{CSP("default-src")}}.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: worker-src 'none';
Content-Security-Policy: worker-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expression de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: worker-src https://exemple.com/
```

{{DOMxRef("Worker")}}, {{DOMxRef("SharedWorker")}}, {{DOMxRef("ServiceWorker")}} seront bloqués et ne seront pas chargés&nbsp;:

```html
<script>
  let blockedWorker = new Worker("data:application/javascript,...");
  blockedWorker = new SharedWorker("https://hors-exemple.com/");
  navigator.serviceWorker.register("https://hors-exemple.com/sw.js");
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- [Les CSP pour les Workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers#règles_de_sécurité_du_contenu_content_security_policy_csp)
- Les interfaces API {{DOMxRef("Worker")}}, {{DOMxRef("SharedWorker")}}, {{DOMxRef("ServiceWorker")}}
