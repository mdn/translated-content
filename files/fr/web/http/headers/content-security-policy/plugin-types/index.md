---
title: "CSP: plugin-types"
slug: Web/HTTP/Headers/Content-Security-Policy/plugin-types
---

{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`plugin-types`** restreint l'ensemble des greffons pouvant être intégrés dans un document en limitant les types de ressources pouvant être chargées.

L'instanciation d'éléments {{HTMLElement("embed")}}, {{HTMLElement("object")}} ou {{HTMLElement("applet")}} échouera si :

- l'élément à charger ne déclarer pas de type MIME valide,
- le type déclaré ne correspond pas à un des types spécifiés dans la directive `plugin-types`,
- les ressources demandées ne correspondent pas au type déclaré.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} par défaut</th>
      <td>Non, ne pas la définir autorise toutes les ressources</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Un ou plusieurs [types MIME](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types) peuvent être autorisées pour cette directive :

```
Content-Security-Policy: plugin-types <type>/<subtype>;
Content-Security-Policy: plugin-types <type>/<subtype> <type>/<subtype>;
```

- \<type>/\<subtype>
  - : Un [type MIME](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types) valide.

## Exemples

### Interdire les greffons

Pour intedire tous les greffons, la directive {{CSP("object-src")}} doit être définie à `'none'`. La directive `plugin-types` n'est utilisée que si vous autorisez au préalable les greffons avec `object-src`.

```html
<meta http-equiv="Content-Security-Policy" content="object-src 'none'" />
```

### Autoriser le contenu Flash

Soit cet en-tête CSP :

```bash
Content-Security-Policy: plugin-types application/x-shockwave-flash
```

Cet objet Flash sera autorisé et se chargera (dans la mesure où le navigateur gère Flash) :

```html
<object
  data="https://example.com/flash"
  type="application/x-shockwave-flash"></object>
```

### Autoriser les applets Java

Pour charger une {{HTMLElement("applet")}}, vous devez spécifier la valeur `application/x-java-applet` :

```bash
Content-Security-Policy: plugin-types application/x-java-applet
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}: {{CSP("object-src")}}
- {{HTMLElement("object")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("applet")}}
- {{HTTPHeader("X-Content-Type-Options")}}
