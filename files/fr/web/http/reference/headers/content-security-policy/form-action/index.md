---
title: "Content-Security-Policy : directive form-action"
short-title: form-action
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/form-action
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`form-action`** restreint les URL pouvant être utilisées comme cibles d'envoi de formulaire depuis un contexte donné.

> [!WARNING]
> La question de savoir si `form-action` doit bloquer les redirections après une soumission de formulaire est encore [débattue <sup>(angl.)</sup>](https://github.com/w3c/webappsec-csp/issues/8) et les implémentations des navigateurs sur cet aspect sont hétérogènes (par exemple Firefox 57 ne les bloque pas, contrairement à Chrome 63).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Navigation directive", "Directive de navigation")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>Non, ne pas définir cette directive autorise toutes les adresses.</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: form-action 'none';
Content-Security-Policy: form-action <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune soumission de formulaire ne peut être effectuée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les soumissions de formulaire peuvent être effectuées vers des URL qui correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemples

### Configuration avec la balise `<meta>`

```html
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />
```

### Configuration avec Apache

```apacheconf
<IfModule mod_headers.c>
  Header set Content-Security-Policy "form-action 'none';"
</IfModule>
```

### Configuration avec Nginx

```nginx
add_header Content-Security-Policy "form-action 'none';"
```

### Cas de violation

Utiliser un élément HTML {{HTMLElement("form")}} avec un attribut `action` contenant un script JavaScript résultera dans ce cas en une violation de CSP&nbsp;:

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue" />
  <input type="submit" id="submit" value="submit" />
</form>

<!--
Error: Refused to send form data because it violates the following
Content Security Policy directive: "form-action 'none'".
-->
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'élément HTML {{HTMLElement("form")}}
