---
title: "Content-Security-Policy : directive child-src"
short-title: child-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/child-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`child-src`** définit les sources valides de [<i lang="en">web workers</i>](/fr/docs/Web/API/Web_Workers_API) et de contextes de navigations imbriqués chargés au moyen d'éléments tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}. Pour les <i lang="en">workers</i>, les requêtes non-conformes sont traitées comme des erreurs de réseau fatales par l'agent utilisateur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: child-src 'none';
Content-Security-Policy: child-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: child-src https://example.com/
```

Cette {{HTMLElement("iframe")}} et ce <i lang="en">worker</i> seront bloqués et ne se chargeront pas&nbsp;:

```html
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:text/javascript,…");
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- Les éléments HTML {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}
- Les interfaces API {{DOMxRef("Worker")}}, {{DOMxRef("SharedWorker")}}, {{DOMxRef("ServiceWorker")}}
