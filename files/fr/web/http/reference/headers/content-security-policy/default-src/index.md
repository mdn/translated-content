---
title: "Content-Security-Policy : directive default-src"
short-title: default-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** sert de valeur par défaut pour les autres {{Glossary("fetch directive", "directives de récupération")}} CSP. Pour chacune des directives suivantes, l'agent utilisateur consultera la directive `default-src` et utilisera sa valeur pour la directive demandée si celle-ci est absente&nbsp;:

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

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
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: default-src 'none';
Content-Security-Policy: default-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, toutes les valeurs d'expression de source listées dans [Syntaxe des directives de récupération](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#syntaxe_des_directives_de_récupération) sont applicables.

## Exemples

### Absence d'héritage avec `default-src`

S'il y a d'autres directives définies, `default-src` ne les affecte pas. Soit l'en-tête suivant&nbsp;:

```http
Content-Security-Policy: default-src 'self'; script-src https://exemple.com
```

Est identique à&nbsp;:

```http
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://exemple.com;
                         style-src 'self';
                         worker-src 'self'
```

### Problème de blocage des sprites SVG avec `default-src: none` dans Firefox

> [!NOTE]
> Ce problème a été corrigé dans Firefox 132&nbsp;; voir [bogue 1773976 <sup>(angl.)</sup>](https://bugzil.la/1773976).

Lors de la création d'une CSP, vous pouvez commencer par `default-src 'none'` pour verrouiller le chargement de toutes les ressources, puis ajouter d'autres directives pour ouvrir la politique, vous permettant de charger uniquement les ressources dont vous avez besoin. Par exemple, pour autoriser le chargement d'images uniquement depuis la même origine&nbsp;:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Cependant, il y a un problème ici. Si vous intégrez des sprites SVG définis dans des fichiers externes avec l'élément {{SVGElement("use")}}, par exemple&nbsp;:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

Vos images SVG seront bloquées dans Firefox si vous avez une politique `default-src 'none'` définie. Firefox ne traite pas le SVG comme une image intégrée comme le font les autres navigateurs, donc `img-src 'self'` ne permettra pas de les charger. Vous devez utiliser `default-src 'self'` si vous voulez que vos sprites externes se chargent dans Firefox.

Alternativement, si la politique `default-src 'none'` est une exigence stricte, vous pouvez inclure les sprites SVG en ligne dans la page HTML&nbsp;:

```html
<body>
  <svg style="display: none">
    <symbol id="icon" viewBox="0 0 24 24">
      <path d="…" />
    </symbol>
  </svg>
  …
  <svg>
    <use href="#icon" />
  </svg>
</body>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- Directives CSP (<https://www.w3.org/TR/CSP/#csp-directives>)&nbsp;:
  - {{Glossary("Fetch directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
  - {{CSP("upgrade-insecure-requests")}}
  - {{CSP("block-all-mixed-content")}}
