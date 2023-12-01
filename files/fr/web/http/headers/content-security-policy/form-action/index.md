---
title: "CSP : form-action"
slug: Web/HTTP/Headers/Content-Security-Policy/form-action
---

{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`form-action`** restreint les URL pouvant être utilisées comme cibles d'envoi de formulaire depuis un contexte donné.

> **Attention :** La question de savoir si `form-action` doit bloquer les redirections après une soumission de formulaire est encore [débattue](https://github.com/w3c/webappsec-csp/issues/8) et les implémentations des navigateurs sur cet aspect sont hétérogènes (par exemple Firefox 57 ne les bloque pas, contrairement à Chrome 63).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Navigation_directive">Directive de navigation</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>Non, ne pas définir cette directive autorise toutes les adresses.</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être utilisées pour cette directive&nbsp;:

```http
Content-Security-Policy: form-action <source>;
Content-Security-Policy: form-action <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Configuration avec la balise `<meta>`

```html
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />
```

### Configuration avec Apache

```xml
<IfModule mod_headers.c>
  Header set Content-Security-Policy "form-action 'none';"
</IfModule>
```

### Configuration avec Nginx

```
add_header Content-Security-Policy "form-action 'none';"
```

### Cas de violation

Utiliser un élément [`<form>`](/fr/docs/Web/HTML/Element/Form) avec un attribut `action` contenant un script JavaScript résultera dans ce cas en une violation de CSP&nbsp;:

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:console.log('toto')" id="form1" method="post">
  <input type="text" name="nomChamp" value="valeurChamp" />
  <input type="submit" id="submit" value="Envoyer" />
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

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<form>`](/fr/docs/Web/HTML/Element/Form)
