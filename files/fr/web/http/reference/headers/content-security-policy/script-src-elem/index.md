---
title: "Content-Security-Policy : directive script-src-elem"
short-title: script-src-elem
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`** indique les sources valides pour des éléments HTML {{HTMLElement("script")}}.

Cette directive ne définit que les sources valides pour les éléments `<script>` (à la fois les requêtes de script et les blocs).
Elle ne s'applique pas aux autres sources JavaScript pouvant déclencher l'exécution de scripts, telles que les gestionnaires d'évènements JavaScript embarqués (`onclick`), les méthodes d'exécution de scripts [soumis à la vérification `"unsafe-eval"`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#expression_unsafe-eval), et les [feuilles de style XSLT](/fr/docs/Web/XML/XSLT).
(Les sources valides peuvent être définies pour toutes les sources de scripts JavaScript en utilisant {{CSP("script-src")}}, ou uniquement pour les gestionnaires de scripts embarqués en utilisant {{CSP("script-src-attr")}}.)

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
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: script-src-elem 'none';
Content-Security-Policy: script-src-elem <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, toutes les valeurs d'expression de source énumérées dans [la syntaxe des directives de récupération](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#syntaxe_des_directives_de_récupération) sont applicables, à l'exception de [`'unsafe-hashes'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` peut être utilisé en conjonction avec {{CSP("script-src")}}:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## Exemples

### Cas de violation

Étant donné cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: script-src-elem https://exemple.com/
```

…le script suivant est bloqué et ne sera ni chargé ni exécuté&nbsp;:

```html
<script src="https://hors-exemple.com/js/library.js"></script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'élément HTML {{HTMLElement("script")}}
- La directive CSP {{CSP("script-src")}}
- La directive CSP {{CSP("script-src-attr")}}
