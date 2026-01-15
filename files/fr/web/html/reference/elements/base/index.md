---
title: "<base> : l'élément pour l'URL de base du document"
slug: Web/HTML/Reference/Elements/base
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<base>`** définit l'URL de base à utiliser pour toutes les URL _relatives_ d'un document. Il ne peut y avoir qu'un seul élément `<base>` dans un document.

L'URL de base utilisée par un document peut être obtenue par les scripts avec {{DOMxRef('Node.baseURI')}}. Si le document ne contient aucun élément `<base>`, alors `baseURI` prend la valeur de {{DOMxRef("location.href")}}.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Un élément `<base>` doit avoir un attribut `href`, un attribut `target` ou les deux.
> Si au moins un de ces attributs est spécifié, l'élément `<base>` **doit** précéder les autres éléments dont les valeurs d'attribut sont des URL, comme l'attribut `href` d'un élément {{HTMLElement("link")}}.

- `href`
  - : L'URL de base à utiliser dans tout le document pour les URL relatives.
    Les URL absolues et relatives sont autorisées.
    Les URL [`data:`](/fr/docs/Web/URI/Reference/Schemes/data) et [`javascript:`](/fr/docs/Web/URI/Reference/Schemes/javascript) ne sont pas autorisées.
- `target`
  - : Un **mot-clé** ou un **nom défini par l'auteur** du {{Glossary("browsing context", "contexte de navigation")}} par défaut pour afficher les résultats de la navigation à partir des éléments {{HTMLElement("a")}}, {{HTMLElement("area")}} ou {{HTMLElement("form")}} sans attribut `target` explicite. Les mots-clés suivants ont des significations particulières&nbsp;:
    - `_self` (par défaut)&nbsp;: Affiche le résultat dans le contexte de navigation courant.
    - `_blank`&nbsp;: Affiche le résultat dans un nouveau contexte de navigation sans nom.
    - `_parent`&nbsp;: Affiche le résultat dans le contexte de navigation parent du contexte courant, si la page courante est dans un cadre. S'il n'y a pas de parent, agit comme `_self`.
    - `_top`&nbsp;: Affiche le résultat dans le contexte de navigation le plus haut (le contexte de navigation qui est un ancêtre du contexte courant et qui n'a pas de parent). S'il n'y a pas de parent, agit comme `_self`.

## Notes d'utilisation

### Éléments \<base> multiples

Si plusieurs éléments `<base>` sont utilisés, seules les premières valeurs pour **`href`** et **`target`** sont utilisées, les autres valeurs sont ignorées.

### Ancres dans la page

Les liens pointant vers un fragment dans le document — par exemple, `<a href="#un-id">` — sont résolus avec le `<base>`, ce qui déclenche une requête HTTP vers l'URL de base avec le fragment ajouté.

Par exemple, avec `<base href="https://exemple.fr/">` et ce lien&nbsp;: `<a href="#ancre">Vers l'ancre</a>`. Le lien pointe vers `https://exemple.fr/#ancre`.

### `target` ne doit pas contenir de saut de ligne ASCII, de tabulation ou de <

Si l'attribut [`target`](#target) contient un saut de ligne ASCII, une tabulation ou le caractère `<`, la valeur est réinitialisée à `_blank`.
Ceci vise à empêcher les attaques d'injection de balisage flottant, une attaque sans script dans laquelle un attribut `target` non fermé est injecté dans la page, de sorte que tout texte qui suit est capturé jusqu'à ce que le navigateur atteigne un caractère qui ferme l'attribut.

### Open Graph

Les balises [Open Graph](https://ogp.me/) ne tiennent pas de compte de l'élément `<base>`, et doivent toujours avoir des URL absolues complètes. Par exemple&nbsp;:

```html
<meta property="og:image" content="https://exemple.fr/thumbnail.jpg" />
```

## Exemples

```html
<base href="https://www.exemple.fr/" />
<base target="_blank" />
<base target="_top" href="https://exemple.fr/" />
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Contenu de méta-données.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Aucun&nbsp;; c'est un
        {{Glossary("void element", "élément vide")}}.
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
        {{HTMLElement("head")}}
        qui ne contient pas un autre élément
        <code>&#x3C;base></code>.
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
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
