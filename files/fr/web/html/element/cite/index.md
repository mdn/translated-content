---
title: "<cite> : l'élément de citation"
slug: Web/HTML/Element/cite
---

{{HTMLSidebar}}

L'élément **`<cite>`** contient le titre d'une œuvre telle qu'un livre, une chanson, un film, une sculpture… Cet élément doit inclure le titre de l'œuvre. Cette référence peut-être abrégée en accord avec les conventions d'usages pour l'ajout des métadonnées de citations.

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
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
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >. Auparavant et jusqu'à Gecko 1.9.2 (Firefox 4) inclus, Firefox
        implémentait l'interface
        <a href="/fr/docs/Web/API/HTMLSpanElement"
          ><code>HTMLSpanElement</code></a
        >
        pour cet élément
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément prend uniquement en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

Voici des exemples d'œuvres auxquelles on pourrait faire référence grâce à un élément `<cite>` :

- Un livre
- Un article de recherche
- Un essai
- Un poème
- Une pièce musicale
- Une chanson
- Le script d'une pièce ou d'un film
- Un film
- Une émission télévisée
- Un jeu
- Une sculpture
- Une peinture
- Une pièce de théâtre
- Un opéra
- Une comédie musicale
- Une exposition
- Les minutes d'un procès
- Un programme informatique
- Un site web
- Une page web
- Un billet de blog ou un commentaire
- Un billet ou un commentaire sur un forum
- Une déclaration écrite ou orale
- etc.

Il convient de noter que la spécification du W3C dit qu'une référence à une œuvre créative, telle qu'incluse dans un élément `<cite>`, peut inclure le nom de l'auteur de l'œuvre. Cependant, la spécification WHATWG pour `<cite>` dit le contraire : le nom d'une personne ne doit _jamais_ être inclus, en toutes circonstances.

Pour inclure une référence à la source du matériel cité qui est contenu dans un élément [`<blockquote>`](/fr/docs/Web/HTML/Element/blockquote) ou [`<q>`](/fr/docs/Web/HTML/Element/q), utilisez l'attribut [`cite`](/fr/docs/Web/HTML/Element/blockquote#attr-cite) sur l'élément.

En général, les navigateurs donnent un style au contenu d'un élément `<cite>` en italique par défaut. Pour éviter cela, appliquez la propriété CSS [`font-style`](/fr/docs/Web/CSS/font-style) à l'élément `<cite>`.

## Exemples

```html
<p>Plus d'informations sont disponibles dans <cite>[ISO-0000].</cite></p>
```

### Résultat

{{EmbedLiveSample('', '', 80)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<blockquote>`](/fr/docs/Web/HTML/Element/blockquote), utilisé pour des citations longues.
- L'élément [`<q>`](/fr/docs/Web/HTML/Element/q), utilisé pour des citations en incise.
