---
title: '<base> : l''élément pour l''URL de base du document'
slug: Web/HTML/Element/base
tags:
  - Element
  - HTML
  - HTML document metadata
  - HTML:Metadata content
  - Reference
translation_of: Web/HTML/Element/base
browser-compat: html.elements.base
---
{{HTMLRef}}

L'élément **`<base>`** définit l'URL de base à utiliser pour recomposer toutes les URL relatives contenues dans un document. Il ne peut y avoir qu'un seul élément `<base>` au sein d'un document.

Il est possible d'accéder à l'URL de base d'un document via un script en utilisant [`Node.baseURI`](/fr/docs/Web/API/Node/baseURI). Si le document ne possède pas d'élément `<base>`; la base par défaut pour la composition des URL sera l'URL courante.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Contenu de méta-données.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Aucun, c'est un
        <a href="/fr/docs/Glossary/Empty_element">élément vide</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Il ne doit pas y avoir de balise fermante.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        N'importe quel élément
        <a href="/fr/docs/Web/HTML/Element/head"><code>&#x3C;head></code></a>
        qui ne contient pas un autre élément
        <a href="/fr/docs/Web/HTML/Element/base"><code>&#x3C;base></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLBaseElement"
          ><code>HTMLBaseElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Les [attributs universels](/fr/docs/Web/HTML/Global_attributes) peuvent être utilisés sur cet élément.

> **Attention :** Si l'un des attributs suivants est spécifié, cet élément **doit** venir avant d'autres éléments dont les valeurs d'attribut sont des URL, comme l'attribut `href` de [`<link>`](/fr/docs/Web/HTML/Element/link).

- **`href`**
  - : L'URL de base à utiliser afin de recomposer les URL relatives contenues dans le document. Si cet attribut est défini, cet élément doit être présent avant les éléments dont les attributs sont des URL.
    Les URI absolues et relatives sont autorisées (voir la note ci-après).
- **`target`**

  - : Un **mot-clé** ou un **nom défini par l'auteur** du [contexte de navigation](/fr/docs/Glossary/Browsing_context) par défaut pour afficher les résultats de la navigation à partir des éléments [`<a>`](/fr/docs/Web/HTML/Element/a), [`<area>`](/fr/docs/Web/HTML/Element/area) ou [`<form>`](/fr/docs/Web/HTML/Element/Form) sans attributs `target` explicites.

    Les mots-clés suivants ont des significations particulières :

    - `_self` : Charge le résultat dans le contexte de navigation courant. C'est la valeur par défaut de l'attribut s'il n'est pas utilisé.
    - `_blank` : Charge le résultat dans un nouveau contexte de navigation.
    - `_parent` : Charge le résultat dans le contexte de navigation parent du contexte courant. S'il n'y a pas de parent, cette option aura le même effet que `_self`.
    - `_top` : Charge le résultat dans le contexte de navigation de plus haut niveau (c'est-à-dire le contexte de navigation qui est un ancêtre du contexte courant et qui n'a pas de parent). S'il n'y a pas de parent, cette option aura le même effet que `_self`.

## Notes d'utilisation

### Éléments \<base> multiples

Si plusieurs éléments `<base>` sont utilisés, seules les premières valeurs pour **`href`** et **`target`** sont utilisées, les autres valeurs sont ignorées.

### Ancres dans la page

Les ancres d'une page ([`<a>`](/fr/docs/Web/HTML/Element/a)), par exemple `<a href="#ancre">ancre</a>`, sont résolues avec l'URL de base fournie via `<base>` et déclenche une requête HTTP vers l'URL de base.

1.  Soit `<base href="https://example.com">`
2.  … et ce lien : `<a href="#ancre">Anker</a>`
3.  … le lien enverra vers `https://example.com/#ancre`.

### Open Graph

Les balises [Open Graph](https://ogp.me/) ne tiennent pas de compte de l'élément `<base>`, et doivent toujours avoir des URL absolues complètes. Par exemple :

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg">
```

## Exemples

```html
<base href="https://www.example.com/">
<base target="_blank">
<base target="_top" href="https://example.com/">
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
