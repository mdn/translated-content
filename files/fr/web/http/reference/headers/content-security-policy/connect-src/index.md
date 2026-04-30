---
title: "Content-Security-Policy : directive connect-src"
short-title: connect-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`connect-src`** restreint les URL qui peuvent être chargées en utilisant des interfaces de programmation. Les API suivantes sont contrôlées par cette directive&nbsp;:

- L'attribut [`ping`](/fr/docs/Web/HTML/Reference/Elements/a#ping) dans l'élément HTML {{HTMLElement("a")}}
- {{DOMxRef("Window/fetch", "fetch()")}}
- {{DOMxRef("Window/fetchLater", "fetchLater()")}} {{Experimental_Inline}}
- {{DOMxRef("XMLHttpRequest")}}
- {{DOMxRef("WebSocket")}}
- {{DOMxRef("EventSource")}}
- {{DOMxRef("Navigator.sendBeacon()")}}

> [!NOTE]
> `connect-src 'self'` ne s'applique pas aux schémas de websocket pour tous les navigateurs. Pour plus d'informations, consulter [ce ticket <sup>(angl.)</sup>](https://github.com/w3c/webappsec-csp/issues/7).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: connect-src 'none';
Content-Security-Policy: connect-src <source-expression-list>;
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
Content-Security-Policy: connect-src https://exemple.com/
```

Les connexions suivantes seront bloquées et ne se chargeront pas&nbsp;:

```html
<a ping="https://hors-exemple.com" href="/">Lien</a>
<script>
  const reponse = fetch("https://hors-exemple.com/");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://hors-exemple.com/");
  xhr.send();

  const ws = new WebSocket("wss://hors-exemple.com/");

  const es = new EventSource("https://hors-exemple.com/");

  navigateur.sendBeacon("https://hors-exemple.com/", {
    /* … */
  });
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'élément HTML {{HTMLElement("a")}} et son attribut [`ping`](/fr/docs/Web/HTML/Reference/Elements/a#ping)
- La méthode API {{DOMxRef("Window/fetch", "fetch()")}}
- L'interface API {{DOMxRef("XMLHttpRequest")}}
- L'interface API {{DOMxRef("WebSocket")}}
- L'interface API {{DOMxRef("EventSource")}}
