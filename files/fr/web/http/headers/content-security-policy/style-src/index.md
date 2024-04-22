---
title: "CSP : style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
---

{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`style-src`** spécifie les sources valides pour les feuilles de style.

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
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: style-src https://example.com/
```

Ces feuilles de style seront bloquées et ne se chargeront pas&nbsp;:

```html
<link
  href="https://not-example.com/styles/main.css"
  rel="stylesheet"
  type="text/css" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import url("https://not-example.com/styles/print.css") print;
</style>
```

De même que les styles chargés avec l'en-tête [`Link`](/fr/docs/Web/HTTP/Headers/Link)&nbsp;:

```bash
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Les attributs de style seront aussi bloqués&nbsp;:

```html
<div style="display:none">Toto</div>
```

De même que les styles ajoutés par JavaScript en définissant l'attribut `style` directement, ou en définissant la propriété [`cssText`](/fr/docs/Web/API/CSSStyleDeclaration/cssText)&nbsp;:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Toutefois, les propriétés de styles qui sont définies directement dans l'attribut [`style`](/fr/docs/Web/API/HTMLElement/style) ne seront pas bloquées, permettant aux utilisatrices et utilisateurs de manipuler sainement les styles avec JavaScript&nbsp;:

```js
document.querySelector("div").style.display = "none";
```

Ce genre de manipulations peut être bloqué en désactivant JavaScript au moyen de la directive CSP [`script-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

### Styles embarqués non fiables

> **Note :** Bloquer les styles et scripts embarqués est l'une des stratégies de sécurité principales que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.

Vous pouvez autoriser les styles embarqués en spécifiant la valeur `'unsafe-inline'`, des nonces ou des empreintes correspondant à la feuille de style.

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Cette directive CSP autorisera toutes les feuilles de styles embarquées avec l'élément [`<style>`](/fr/docs/Web/HTML/Element/style) et l'attribut `style` sur tous les éléments&nbsp;:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Toto</div>
```

Vous pouvez aussi utiliser un nonce pour autoriser spécifiquement certains éléments [`<style>`](/fr/docs/Web/HTML/Element/style)&nbsp;:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Vous devrez alors définir ce nonce sur l'élément [`<style>`](/fr/docs/Web/HTML/Element/style)&nbsp;:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Autrement, vous pourrez créer des empreintes à partir de vos feuilles de styles. CSP accepte les algorithmes sha256, sha384 et sha512. La forme **binaire** de l'empreinte doit être encodée en base64. Pour obtenir l'empreinte d'une chaîne de caractères en ligne de commande avec le programme `openssl`, on pourra utiliser ceci&nbsp;:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

On peut utiliser une empreinte pour la source afin d'autoriser uniquement certains blocs pour les styles embarqués&nbsp;:

```http
Content-Security-Policy: style-src 'sha256-a330698cbe9dc4ef1fb12e2ee9fc06d5d14300262fa4dc5878103ab7347e158f'
```

Lors de la génération de l'empreinte, il ne faut pas inclure les balises et il faut tenir compte de la casse et des caractères blancs (espaces, retours à la ligne, etc.).

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Expressions de style non fiables

La valeur `'unsafe-eval'` contrôle différentes méthodes de mise en forme qui créent des déclarations de style à partir de chaines de caractères. Si `'unsafe-eval'` n'est pas spécifiée avec la directive `style-src`, ces méthodes seront bloquées et n'auront aucun effet&nbsp;:

- [`CSSStyleSheet.insertRule()`](/fr/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/fr/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/fr/docs/Web/API/CSSStyleDeclaration/cssText)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`style-src-elem`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem)
- [`style-src-attr`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr)
- [`Link`](/fr/docs/Web/HTTP/Headers/Link) header
- [`<style>`](/fr/docs/Web/HTML/Element/style), [`<link>`](/fr/docs/Web/HTML/Element/link)
- [`@import`](/fr/docs/Web/CSS/@import)
- [`CSSStyleSheet.insertRule()`](/fr/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/fr/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/fr/docs/Web/API/CSSStyleDeclaration/cssText)
