---
title: 'CSP : object-src'
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
translation_of: Web/HTTP/Headers/Content-Security-Policy/object-src
browser-compat: http.headers.csp.Content-Security-Policy.object-src
---
{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`object-src`** spécifie les sources valides pour les éléments [`<object>`](/fr/docs/Web/HTML/Element/object), [`<embed>`](/fr/docs/Web/HTML/Element/embed) et [`<applet>`](/fr/docs/Web/HTML/Element/applet).

Pour définir des types autorisés pour les éléments [`<object>`](/fr/docs/Web/HTML/Element/object), [`<embed>`](/fr/docs/Web/HTML/Element/embed) et [`<applet>`](/fr/docs/Web/HTML/Element/applet), voir la directive [`plugin-types`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/plugin-types).

> **Note :** Les éléments contrôlés par `object-src` sont considérés comme des éléments HTML historiques et qui ne recevront pas de nouvelles fonctionnalités standardisées (comme les attributs de sécurité `sandbox` et `allow` pour `<iframe>`). Ainsi, il est [recommandé](https://csp.withgoogle.com/docs/strict-csp.html) de restreindre cette directive en définissant `object-src 'none'`.

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la
        directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: object-src <source>;
Content-Security-Policy: object-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: object-src https://example.com/
```

Ces éléments [`<object>`](/fr/docs/Web/HTML/Element/object), [`<embed>`](/fr/docs/Web/HTML/Element/embed) et [`<applet>`](/fr/docs/Web/HTML/Element/applet) seront bloqués et ne se chargeront pas&nbsp;:

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
<applet archive="https://not-example.com/java"></applet>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<object>`](/fr/docs/Web/HTML/Element/object), [`<embed>`](/fr/docs/Web/HTML/Element/embed) et [`<applet>`](/fr/docs/Web/HTML/Element/applet)
- [`plugin-types`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/plugin-types)
