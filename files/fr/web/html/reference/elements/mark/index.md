---
title: "<mark> : l'élément de marquage du texte"
slug: Web/HTML/Reference/Elements/mark
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<mark>`** représente du texte qui est **marqué** ou **surligné** à des fins de référence ou de notation, en raison de la pertinence du passage marqué dans le contexte qui l'entoure.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;mark&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Résultats de recherche pour «&nbsp;salamandre&nbsp;»&nbsp;:</p>

<hr />

<p>
  Plusieurs espèces de <mark>salamandre</mark> habitent la forêt pluviale
  tempérée du Nord-Ouest Pacifique.
</p>

<p>
  La plupart des <mark>salamandre</mark>s sont nocturnes et chassent des
  insectes, des vers et d'autres petits animaux.
</p>
```

```css interactive-example
mark {
  /* Ajoutez vos styles ici */
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Cas d'utilisation typiques de `<mark>`&nbsp;:

- Au sein d'une citation ({{HTMLElement("q")}}) ou dans un autre bloc ({{HTMLElement("blockquote")}}), le texte surligné marque généralement du texte référencé en dehors de la citation ou qui est indiqué pour demander une attention particulière bien que l'auteur ne considère pas ce texte comme important.
- Au sein du texte principal, le texte surligné marque du texte d'une pertinence partiulière pour l'utilisateur·ice (par exemple lorsqu'il recherche un terme en particulier).
- `<mark>` ne doit pas être utilisé pour de la coloration syntaxique, c'est l'élément {{HTMLElement("span")}} qui devra être utilisé.
- `<mark>` ne doit pas être confondu avec {{HTMLElement("strong")}}. L'élément {{HTMLElement("strong")}} est utilisé afin d'indiquer des fragments de texte _importants_ alors que `<mark>` est utilisé afin d'indiquer des fragments de texte _pertinents_.

> [!NOTE]
> Ne confondez pas `<mark>` avec l'élément {{HTMLElement("strong")}}&nbsp;; `<mark>` sert à indiquer un contenu ayant un certain degré de _pertinence_, tandis que `<strong>` indique des portions de texte _importantes_.

## Accessibilité

Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément `mark`. On peut le rendre annonçable via la propriété CSS {{CSSxRef("content")}} et grâce aux pseudo-éléments {{CSSxRef("::before")}} et {{CSSxRef("::after")}}.

```css
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [Début du marquage]";
}

mark::after {
  content: " [Fin du marquage] ";
}
```

Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été marqué.

- [Brève note sur l'accessibilité du marquage | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Ajuster les styles de texte de niveau | Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Exemples

### Marquer un texte d'intérêt

Dans ce premier exemple, un élément `<mark>` est utilisé pour marquer un texte dans une citation qui présente un intérêt particulier pour l'utilisateur·ice.

```html
<blockquote>
  C'est une période de guerre civile. Des vaisseaux rebelles, frappant depuis
  une base secrète, ont remporté leur première victoire contre le maléfique
  Empire Galactique. Au cours de la bataille,
  <mark>des espions rebelles ont réussi à voler des plans secrets</mark> de
  l'arme ultime de l'Empire, l'ÉTOILE DE LA MORT, une station spatiale blindée
  dotée d'une puissance suffisante pour détruire une planète entière.
</blockquote>
```

#### Résultat

{{EmbedLiveSample("Marquer un texte d'intérêt", 650, 130)}}

### Identifier des passages

Cet exemple montre comment utiliser `<mark>` pour marquer les résultats d'une recherche dans un passage.

```html
<p>
  C'est une période sombre pour la Rébellion. Bien que l'Étoile de la Mort ait
  été détruite, les troupes <mark class="match">impériales</mark> ont chassé les
  forces rebelles de leur base secrète et les ont poursuivies à travers la
  galaxie.
</p>

<p>
  Évitant la redoutable flotte stellaire
  <mark class="match">impériale</mark>, un groupe de combattants de la liberté
  menés par Luke Skywalker a établi une nouvelle base secrète sur le monde glacé
  et isolé de Hoth.
</p>
```

Pour distinguer l'utilisation de `<mark>` pour les résultats de recherche d'autres usages possibles, cet exemple applique la classe personnalisée `"match"` à chaque correspondance.

#### Résultat

{{EmbedLiveSample("Identifier des passages", 650, 130)}}

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
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >du contenu phrasé</a
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
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
