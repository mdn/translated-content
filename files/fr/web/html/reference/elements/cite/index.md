---
title: "<cite> : l'élément de citation"
slug: Web/HTML/Reference/Elements/cite
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<cite>`** est utilisé pour baliser le titre d'une œuvre créative. La référence peut être sous forme abrégée selon les conventions appropriées au contexte liées aux métadonnées de citation.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;cite&gt;", "tabbed-standard")}}

```html interactive-example
<figure>
  <blockquote>
    <p>
      C'était un matin froid et lumineux d'avril, et les horloges sonnaient
      treize heures.
    </p>
  </blockquote>
  <figcaption>
    Première phrase de
    <cite
      ><a href="http://www.george-orwell.org/1984/0.html"
        >Mille neuf cent quatre-vingt-quatre</a
      ></cite
    >
    de George Orwell (Partie 1, Chapitre 1).
  </figcaption>
</figure>
```

```css interactive-example
cite {
  /* Ajoutez vos styles ici */
}
```

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Voici des exemples d'œuvres auxquelles on pourrait faire référence grâce à un élément `<cite>`&nbsp;:

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

Pour inclure une référence à la source du contenu cité qui se trouve dans un élément {{HTMLElement("blockquote")}} ou {{HTMLElement("q")}}, utilisez l'attribut [`cite`](/fr/docs/Web/HTML/Reference/Elements/blockquote#cite) sur cet élément.

En général, les navigateurs appliquent un style italique au contenu d'un élément `<cite>` par défaut. Pour éviter cela, appliquez la propriété CSS {{CSSxRef("font-style")}} à l'élément `<cite>`.

## Exemples

```html
<p>Plus d'informations sont disponibles dans <cite>[ISO-0000].</cite></p>
```

### Résultat

{{EmbedLiveSample('Exemples', 640, 80)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
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
        {{DOMxRef("HTMLElement")}}. Auparavant et jusqu'à Gecko 1.9.2 (Firefox 4) inclus, Firefox
        implémentait l'interface {{DOMxRef("HTMLSpanElement")}}
        pour cet élément
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("blockquote")}} pour les citations longues.
- L'élément {{HTMLElement("q")}} pour les citations en ligne et l'attribut [`cite`](/fr/docs/Web/HTML/Reference/Elements/q#cite).
