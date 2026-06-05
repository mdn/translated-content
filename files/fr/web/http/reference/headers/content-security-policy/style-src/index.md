---
title: "Content-Security-Policy : directive style-src"
short-title: style-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** définit les sources valides pour les feuilles de style.

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
Content-Security-Policy: style-src 'none';
Content-Security-Policy: style-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

    Notez que la spécification inclut également [`'unsafe-eval'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) comme valeur d'expression de source valide, afin de permettre les méthodes CSSOM qui analysent et insèrent des chaînes de caractères CSS, y compris les méthodes `insertRule()` et les accesseurs `cssText` sur diverses interfaces, telles que {{DOMxRef("CSSStyleSheet.insertRule()")}} et {{DOMxRef("CSSStyleDeclaration.cssText")}}. Cependant, aucun navigateur ne bloque actuellement ces méthodes, il n'est donc pas nécessaire d'appliquer `unsafe-eval`.

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: style-src https://exemple.com/
```

Ces feuilles de style seront bloquées et ne se chargeront pas&nbsp;:

```html
<link href="https://hors-exemple.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import "https://hors-exemple.com/styles/print.css" print;
</style>
```

De même que les styles chargés avec l'en-tête {{HTTPHeader("Link")}}&nbsp;:

```http
Link: <https://hors-exemple.com/styles/stylesheet.css>;rel=stylesheet
```

Les attributs de style seront aussi bloqués&nbsp;:

```html
<div style="display:none">Toto</div>
```

De même que les styles ajoutés par JavaScript en définissant l'attribut `style` directement, ou en définissant la propriété {{DOMxRef("CSSStyleDeclaration.cssText", "cssText")}}&nbsp;:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Toutefois, les propriétés de styles qui sont définies directement dans la propriété {{DOMxRef("HTMLElement/style", "style")}} de l'élément ne seront pas bloquées, permettant aux utilisateur·ice·s de manipuler sainement les styles avec JavaScript&nbsp;:

```js
document.querySelector("div").style.display = "none";
```

Ce genre de manipulations peut être bloqué en désactivant JavaScript au moyen de la directive CSP {{CSP("script-src")}}.

### Styles embarqués non fiables

> [!NOTE]
> Bloquer les styles et scripts embarqués est l'une des stratégies de sécurité principales que CSP propose. Toutefois, si vous en avez absolument besoin, il existe des mécanismes qui vous permettront de les autoriser.

Vous pouvez autoriser les styles embarqués en spécifiant la valeur `'unsafe-inline'`, des nonces ou des empreintes correspondant à la feuille de style.

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

L'élément HTML {{HTMLElement("style")}} suivant et l'attribut `style` seront autorisés par la politique&nbsp;:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Toto</div>
```

Vous pouvez utiliser une source de nonce pour n'autoriser que certains blocs de styles embarqués.
Vous devez générer une valeur {{Glossary("Nonce", "unique")}} aléatoire (en utilisant un générateur de jetons aléatoires cryptographiquement sécurisé) et l'inclure dans la politique.
Il est important de noter que cette valeur unique doit être générée dynamiquement car elle doit être unique pour chaque requête HTTP&nbsp;:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Vous devrez alors définir ce nonce sur l'élément HTML {{HTMLElement("style")}}&nbsp;:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Vous pouvez aussi créer des hachages à partir de vos styles embarqués. CSP prend en charge sha256, sha384 et sha512. La forme **binaire** de l'empreinte doit être encodée en base64. Vous pouvez obtenir l'empreinte d'une chaîne de caractères en ligne de commande avec le programme `openssl`&nbsp;:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

On peut utiliser un hachage pour la source afin d'autoriser uniquement certains blocs pour les styles embarqués&nbsp;:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Lorsque vous générez le hachage, ne pas inclure les balises {{HTMLElement("style")}} et notez que la casse et les espaces comptent, y compris les espaces en début ou en fin de ligne.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("style-src-elem")}}
- La directive CSP {{CSP("style-src-attr")}}
- L'en-tête {{HTTPHeader("Link")}}
- L'élément HTML {{HTMLElement("style")}}, {{HTMLElement("link")}}
- La règle CSS {{CSSxRef("@import")}}
- La méthode API {{DOMxRef("CSSStyleSheet.insertRule()")}}
- La méthode API {{DOMxRef("CSSGroupingRule.insertRule()")}}
- La propriété API {{DOMxRef("CSSStyleDeclaration.cssText")}}
