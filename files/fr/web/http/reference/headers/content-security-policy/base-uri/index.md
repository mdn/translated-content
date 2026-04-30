---
title: "Content-Security-Policy : directive base-uri"
short-title: base-uri
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/base-uri
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`base-uri`** restreint les URL qui peuvent être utilisées comme valeur d'un élément HTML {{HTMLElement("base")}}. Si cette valeur est absente, alors toutes les adresses sont autorisées. Si cette directive est absente, l'agent utilisateur utilisera la valeur de l'élément HTML {{HTMLElement("base")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Document directive", "Directive de document")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>Non. Ne pas définir cette directive autorise toutes les URL.</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: base-uri 'none';
Content-Security-Policy: base-uri <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucun URI de base ne peut être défini à l'aide d'un élément `<base>`. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste d'expressions de source séparées par des espaces. Un élément `<base>` peut définir un URI de base si sa valeur correspond à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemples

### Configuration avec la balise `<meta>`

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Configuration avec Apache

```apacheconf
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Configuration avec Nginx

```nginx
add_header Content-Security-Policy "base-uri 'self';"
```

### Cas de violation

À partir du moment où votre domaine n'est pas `example.com`, un élément {{HTMLElement("base")}} avec son attribut `href` défini à `https://example.com` résultera en une violation de CSP.

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

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'élément HTML {{HTMLElement("base")}}
- La propriété API {{DOMxRef("Node.baseURI")}}
