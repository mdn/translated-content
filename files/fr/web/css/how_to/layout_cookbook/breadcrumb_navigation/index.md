---
title: Fil d'Ariane (breadcrumb)
slug: Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

La navigation avec un fil d'Ariane (<i lang="en">breadcrumb</i>) permet à un·e utilisateur·ice de comprendre l'emplacement auquel il se trouve au sein du site web en fournissant un fil d'Ariane permettant de revenir à la page de départ.

![Liens affichés en ligne avec séparateurs](breadcrumb-navigation.png)

## Exigences

Afficher la hiérarchie du site en affichant des liens en ligne, avec un séparateur entre les éléments, indiquant la hiérarchie entre les pages, la page courante apparaissant en dernier.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci‑dessous pour éditer l'exemple dans le MDN Playground&nbsp;:

```html live-sample___breadcrumb-example
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Catégorie</a></li>
    <li><a href="#">Sous-catégorie</a></li>
    <li><a href="#">Type</a></li>
    <li><span aria-current="page">Produit</span></li>
  </ol>
</nav>
```

```css live-sample___breadcrumb-example
body {
  font: 1.2em sans-serif;
}

.breadcrumb {
  padding: 0 0.5rem;
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: end;
}

.breadcrumb li:not(:last-child)::after {
  display: inline-block;
  margin: 0 0.25rem;
  content: "→";
}
```

{{EmbedLiveSample("breadcrumb-example", "", "100px")}}

> [!NOTE]
> L'exemple ci‑dessus utilise un sélecteur complexe pour insérer du contenu avant chaque `li` sauf le dernier. Cela peut également être réalisé en ciblant tous les éléments `li` sauf le premier&nbsp;:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Choisissez la solution que vous préférez.

## Choix effectués

Pour afficher les éléments de la liste en ligne, nous utilisons la [mise en page flexbox](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox), montrant ainsi comment une ligne de CSS peut fournir notre navigation. Les séparateurs sont ajoutés via le [contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content). Vous pouvez les remplacer par n'importe quel séparateur de votre choix.

## Problèmes d'accessibilité

Nous utilisons les attributs [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) et [`aria-current`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) pour aider les technologies d'assistance à comprendre cette navigation et la position de la page courante dans la structure. Consultez les liens associés pour plus d'informations.

Notez que les flèches séparatrices `→` ajoutées via la propriété CSS {{CSSxRef("content")}} dans l'exemple ci‑dessus sont exposées aux technologies d'assistance (TA), y compris les lecteurs d'écran et les afficheurs braille. Pour une solution moins intrusive, utilisez une {{HTMLElement("img")}} décorative dans votre HTML avec un attribut `alt` vide. Un [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) ARIA défini sur [`none`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) ou [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) évitera également que l'image soit exposée aux TA.

Alternativement, rendez muet le [contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content) en incluant une chaîne vide comme texte alternatif, précédée d'un slash (`/`)&nbsp;; par exemple&nbsp;: `content: url("arrow.png") / "";`.

Si vous incluez des séparateurs générés qui seront exposés aux TA, optez pour la création du contenu généré en utilisant le sélecteur pseudo-élément {{CSSxRef("::after")}} au lieu de {{CSSxRef("::before")}}, afin que le contenu du séparateur soit annoncé après le contenu HTML plutôt qu'avant.

## Voir aussi

- [Les boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- [Fournir un fil d'Ariane <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Utiliser l'attribut `aria-current` <sup>(angl.)</sup>](https://tink.uk/using-the-aria-current-attribute/)
