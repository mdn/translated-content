---
title: "CSP : base-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
---

{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`base-uri`** restreint les URL qui peuvent être utilisées comme valeur d'un élément [`<base>`](/fr/docs/Web/HTML/Element/base). Si cette valeur est absente, alors toutes les adresses sont autorisées. Si cette directive est absente, l'agent utilisateur utilisera la valeur de l'élément [`<base>`](/fr/docs/Web/HTML/Element/base).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Document_directive">Directive de document</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>Non, ne pas définir cette directive autorise toutes les URL</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs _sources_ peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### Sources

Cette directive utilise en grande partie les mêmes valeurs de source comme arguments que les autres directives CSP&nbsp;: [valeurs sources pour CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera toutefois que certaines de ces valeurs n'ont pas de sens pour `base-uri`, à l'instar des mots-clés `'unsafe-inline'` et `'strict-dynamic'`.

## Exemples

### Configuration avec la balise `<meta>`

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Configuration avec Apache

```xml
<IfModule mod_headers.c>
  Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Configuration avec Nginx

```
add_header Content-Security-Policy "base-uri 'self';"
```

### Cas de violation

À partir du moment où votre domaine n'est pas `example.com`, un élément [`<base>`](/fr/docs/Web/HTML/Element/base) avec son attribut `href` défini à `https://example.com` résultera en une violation de CSP.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
<base href="https://example.com/" />

<!--
Error: Refused to set the document's base URI to 'https://example.com/'
because it violates the following Content Security Policy
directive: "base-uri 'self'"
-->
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<base>`](/fr/docs/Web/HTML/Element/base)
- [`Node.baseURI`](/fr/docs/Web/API/Node/baseURI)
