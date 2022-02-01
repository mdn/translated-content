---
title: 'CSP: object-src'
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Object
  - Reference
  - Security
  - Sécurité
  - object-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/object-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} **`object-src`** spécifie les sources valides pour les éléments {{HTMLElement("object")}}, {{HTMLElement("embed")}} et {{HTMLElement("applet")}}.

Pour définir des types autorisés pour les éléments {{HTMLElement("object")}}, {{HTMLElement("embed")}} et {{HTMLElement("applet")}}, voir la directive {{CSP("plugin-types")}}.

> **Note :** Les éléments contrôlés par `object-src` sont considérés peut-être par coïcidence comme des éléments HTML du passé et ne recevront de nouvelles fonctionnalités normalisées (comme les attributs de sécurité `sandbox` et `allow` pour `<iframe>`). De ce fait, il est [recommandé](https://csp.withgoogle.com/docs/strict-csp.html) de restreindre cette directive, c'est-à-dire la définir explicitement à `object-src 'none'` dans la mesure du possible.

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

    Content-Security-Policy: object-src <source>;
    Content-Security-Policy: object-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: object-src https://example.com/
```

Ces éléments {{HTMLElement("object")}}, {{HTMLElement("embed")}} et {{HTMLElement("applet")}} seront bloqués et ne se chargeront pas :

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
<applet archive="https://not-example.com/java"></applet>
```

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-object-src", "object-src")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-object-src", "object-src")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.object-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}}, {{HTMLElement("embed")}}, and {{HTMLElement("applet")}}
- {{CSP("plugin-types")}}
