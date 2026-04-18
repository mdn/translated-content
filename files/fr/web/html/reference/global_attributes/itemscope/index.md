---
title: "Attribut HTML universel : `itemscope`"
short-title: itemscope
slug: Web/HTML/Reference/Global_attributes/itemscope
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`itemscope`** est un booléen qui définit la portée des métadonnées associées. La spécification de l'attribut **`itemscope`** pour un élément crée un nouvel élément, ce qui entraîne un certain nombre de paires nom-valeur associées à l'élément.

Un attribut relatif, [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype), est utilisé pour définir l'URL valide d'un vocabulaire (comme [schema.org <sup>(angl.)</sup>](https://schema.org/)) qui décrit l'élément et le contexte de ses propriétés. Dans chacun des exemples suivants, le vocabulaire provient de [schema.org <sup>(angl.)</sup>](https://schema.org/).

Chaque élément HTML peut avoir un attribut `itemscope` défini. Un élément `itemscope` qui n'a pas d'`itemtype` associé doit avoir un `itemref` associé.

> [!NOTE]
> En savoir plus sur les attributs `itemtype` sur <https://schema.org/Thing>

## Notes d'utilisation

### Attributs `id` pour `itemscope`

Lorsque vous définissez l'attribut `itemscope` pour un élément, un nouvel élément est créé. L'élément se compose d'un groupe de paires nom-valeur. Pour les éléments avec un attribut `itemscope` et un attribut `itemtype`, vous pouvez également définir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). Vous pouvez utiliser l'attribut `id` pour définir un identifiant global pour le nouvel élément. Un identifiant global permet à l'élément de se rapporter à d'autres éléments trouvés sur des pages à travers le Web.

## Exemples

### Représenter des données structurées pour un film

L'exemple suivant définit l'attribut `itemtype` comme "http\://schema.org/Movie" et définit quatre attributs `itemprop` associés.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="6">itemscope</td>
      <td>Itemtype</td>
      <td colspan="2">Film</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>(itemprop name)</td>
      <td>(itemprop value)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science-fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>Bande-annonce</td>
      <td>https://youtu.be/0AY1XIkX7bY</td>
    </tr>
  </tbody>
</table>

```html
<div itemscope itemtype="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>
    Réalisateur&nbsp;: <span itemprop="director">James Cameron</span> (né le 16
    août 1954) 1954)
  </span>
  <span itemprop="genre">Science-fiction</span>
  <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Bande-annonce</a>
</div>
```

### Représenter des données structurées pour une recette

Il y a quatre attributs `itemscope` dans l'exemple suivant. Chaque attribut `itemscope` définit la portée de son attribut `itemtype` correspondant. Les `itemtype`, `Recipe`, `AggregateRating` et `NutritionInformation` dans l'exemple suivant font partie des données structurées de [schema.org <sup>(angl.)</sup>](https://www.schema.org/) pour une recette, comme défini par le premier `itemtype`, `http://schema.org/Recipe`.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Recipe</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>La tarte aux pommes de grand-mère pour les fêtes</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2022-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        Voici la recette de la tarte aux pommes de ma grand-mère. J'aime ajouter une pincée de muscade.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>prepTime</td>
      <td>PT30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>cookTime</td>
      <td>PT1H</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>totalTime</td>
      <td>PT1H30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeYield</td>
      <td>1 tarte de 9" (8 portions)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>Pommes finement tranchées&nbsp;: 6 tasses</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>Sucre blanc&nbsp;: 3/4 tasse</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeInstructions</td>
      <td>
        1. Éplucher et couper les pommes 2. Mélanger le sucre et la cannelle. Utiliser du sucre supplémentaire pour les pommes acides.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2">author [Person]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.0</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>35</td>
    </tr>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">nutrition [NutritionInformation]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>servingSize</td>
      <td>1 tranche moyenne</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>calories</td>
      <td>250 cal</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>fatContent</td>
      <td>12 g</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Un outil pratique pour extraire les structures de microdonnées à partir de HTML est l'outil [Rich Results Testing Tool <sup>(angl.)</sup>](https://search.google.com/test/rich-results) de Google. Essayez-le sur le HTML montré ici.

#### HTML

```html
<div itemscope itemtype="https://schema.org/Recipe">
  <h2 itemprop="name">La tarte aux pommes de grand-mère pour les fêtes</h2>
  <img
    itemprop="image"
    src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg"
    width="50"
    height="50" />
  <p>
    Par
    <span itemprop="author" itemscope itemtype="https://schema.org/Person">
      <span itemprop="name">Carol Smith</span>
    </span>
  </p>
  <p>
    Publié le&nbsp;:
    <time datetime="2022-11-05" itemprop="datePublished">
      5 novembre 2022
    </time>
  </p>
  <span itemprop="description">
    Voici la recette de la tarte aux pommes de ma grand-mère. J'aime ajouter une
    pincée de muscade.
  </span>
  <br />
  <span
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.0</span> étoiles sur la base de
    <span itemprop="reviewCount">35</span> avis
  </span>
  <br />
  Temps de préparation&nbsp;:
  <time datetime="PT30M" itemprop="prepTime">30 min</time>
  <br />
  Temps de cuisson&nbsp;:
  <time datetime="PT1H" itemprop="cookTime">1 heure</time>
  <br />
  Temps total&nbsp;:
  <time datetime="PT1H30M" itemprop="totalTime">1 heure 30 min</time>
  <br />
  Résultat&nbsp;: <span itemprop="recipeYield">1 tarte de 9" (8 portions)</span>
  <br />
  <span
    itemprop="nutrition"
    itemscope
    itemtype="https://schema.org/NutritionInformation">
    Taille de portion&nbsp;:
    <span itemprop="servingSize">1 tranche moyenne</span><br />
    Calories par portion&nbsp;: <span itemprop="calories">250 cal</span><br />
    Lipides par portion&nbsp;: <span itemprop="fatContent">12 g</span><br />
  </span>
  <p>
    Ingrédients&nbsp;:<br />
    <span itemprop="recipeIngredient"
      >Pommes finement tranchées&nbsp;: 6 tasses<br
    /></span>
    <span itemprop="recipeIngredient">Sucre blanc&nbsp;: 3/4 tasse<br /></span>
    …
  </p>
  Directions&nbsp;:<br />
  <div itemprop="recipeInstructions">
    1. Éplucher et couper les pommes<br />
    2. Mélanger le sucre et la cannelle. Utiliser du sucre supplémentaire pour
    les pommes acides.<br />
    …
  </div>
</div>
```

#### Résultat

{{EmbedLiveSample("Représenter des données structurées pour une recette", "", 550)}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- Les autres attributs universels relatifs aux microdonnées&nbsp;:
  - [`itemid`](/fr/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/fr/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype)
