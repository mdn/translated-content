---
title: "Content-Security-Policy : directive script-src-attr"
short-title: script-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`** définit les sources valides pour les gestionnaires d'évènements JavaScript embarqués.

Cette directive ne définit que les sources valides pour les gestionnaires d'évènements JavaScript embarqués comme `onclick`.
Elle ne s'applique pas aux autres sources JavaScript pouvant déclencher l'exécution de scripts, telles que les URL chargées directement dans des éléments HTML {{HTMLElement("script")}} et les [feuilles de style XSLT](/fr/docs/Web/XML/XSLT).
(Les sources valides peuvent être spécifiées pour toutes les sources de scripts JavaScript en utilisant {{CSP("script-src")}}, ou uniquement pour les éléments `<script>` en utilisant {{CSP("script-src-elem")}}.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive {{CSP("script-src")}}, qui a pour valeur par défaut celle de la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: script-src-attr 'none';
Content-Security-Policy: script-src-attr <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`'unsafe-hashes'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`script-src-attr` peut être utilisé en conjonction avec {{CSP("script-src")}}, et remplacera cette directive pour les vérifications sur les gestionnaires d'évènements embarqués&nbsp;:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

## Exemples

### Cas de violation

Étant donné cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: script-src-attr 'none'
```

…le gestionnaire d'évènements embarqué suivant est bloqué et ne sera ni chargé ni exécuté&nbsp;:

```html
<button id="btn" onclick="faireQuelquechose()">Cliquez sur moi</button>
```

Notez que, généralement, vous devriez remplacer les gestionnaires d'évènements embarqués par des appels à {{DOMxRef("EventTarget.addEventListener", "addEventListener")}}&nbsp;:

```js
document.getElementById("btn").addEventListener("click", faireQuelquechose);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'élément HTML {{HTMLElement("script")}}
- La directive CSP {{CSP("script-src")}}
- La directive CSP {{CSP("script-src-elem")}}
