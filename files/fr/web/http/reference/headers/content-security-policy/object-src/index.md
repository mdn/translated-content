---
title: "Content-Security-Policy : directive object-src"
short-title: object-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`object-src`** définit les sources valides pour les éléments HTML {{HTMLElement("object")}} et {{HTMLElement("embed")}}.

> [!NOTE]
> Les éléments contrôlés par `object-src` sont peut-être considérés comme des éléments HTML hérités et ne reçoivent pas de nouvelles fonctionnalités standardisées (comme les attributs de sécurité `sandbox` ou `allow` pour `<iframe>`). Il est donc [recommandé <sup>(angl.)</sup>](https://csp.withgoogle.com/docs/strict-csp.html) de restreindre cette directive de récupération (par exemple, définir explicitement `object-src 'none'` si possible).

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la
        directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: object-src 'none';
Content-Security-Policy: object-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: object-src https://exemple.com/
```

Ces éléments {{HTMLElement("object")}} et {{HTMLElement("embed")}} seront bloqués et ne se chargeront pas&nbsp;:

```html
<embed src="https://hors-exemple.com/flash" />
<object data="https://hors-exemple.com/plugin"></object>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- Les éléments HTML {{HTMLElement("object")}} et {{HTMLElement("embed")}}
