---
title: Carte
slug: Web/CSS/How_to/Layout_cookbook/Card
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Ce modèle est une liste de composants «&nbsp;carte&nbsp;» (<i lang="en">card</i> en anglais) avec des pieds de page optionnels. Une carte contient un titre, une image, une description ou autre contenu, ainsi qu'une attribution ou un pied de page. Les cartes sont généralement affichées au sein d'un groupe ou d'une collection.

![Trois composants de type carte alignés](cards.png)

## Exigences

Créer un groupe de cartes, chaque composant de carte devant contenir un titre, une image, du contenu et, éventuellement, un pied de page.

Chaque carte du groupe doit avoir la même hauteur. Le pied de page optionnel doit rester collé au bas de la carte.

Les cartes du groupe doivent s'aligner en deux dimensions&nbsp;: verticalement et horizontalement.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci‑dessous pour éditer l'exemple dans le MDN Playground&nbsp;:

```html live-sample___card-example
<div class="cards">
  <article class="card">
    <header>
      <h2>Un titre court</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="Montgolfières" />
    <div class="content">
      <p>
        L'idée d'atteindre le pôle Nord au moyen de ballons semble avoir été
        envisagée il y a de nombreuses années.
      </p>
    </div>
  </article>

  <article class="card">
    <header>
      <h2>Un titre court</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="Montgolfières" />
    <div class="content">
      <p>Contenu court.</p>
    </div>
    <footer>J'ai un pied de page&nbsp;!</footer>
  </article>

  <article class="card">
    <header>
      <h2>Un titre plus long dans cette carte</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="Montgolfières" />
    <div class="content">
      <p>
        Dans une œuvre curieuse, publiée à Paris en 1863 par Delaville Dedreux,
        il est suggéré d'atteindre le pôle Nord par un aérostat.
      </p>
    </div>
    <footer>J'ai un pied de page&nbsp;!</footer>
  </article>
  <article class="card">
    <header>
      <h2>Un titre court</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="Montgolfières" />
    <div class="content">
      <p>
        L'idée d'atteindre le pôle Nord au moyen de ballons semble avoir été
        envisagée il y a de nombreuses années.
      </p>
    </div>
  </article>
</div>
```

```css live-sample___card-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

.cards {
  max-width: 700px;
  margin: 1em auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
}

.card {
  border: 1px solid #999999;
  border-radius: 3px;

  display: grid;
  grid-template-rows: max-content 200px 1fr;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card h2 {
  margin: 0;
  padding: 0.5rem;
}

.card .content {
  padding: 0.5rem;
}

.card footer {
  background-color: #333333;
  color: white;
  padding: 0.5rem;
}
```

{{EmbedLiveSample("card-example", "", "950px")}}

## Choix effectués

Chaque carte est agencée en utilisant la [mise en page CSS Grid](/fr/docs/Web/CSS/Guides/Grid_layout) malgré le fait que la disposition soit unidimensionnelle. Cela permet d'utiliser le dimensionnement du contenu pour les pistes (<i lang="en">tracks</i>) de la grille. Pour configurer une grille à une seule colonne, vous pouvez utiliser&nbsp;:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{CSSxRef("display", "display: grid")}} transforme l'élément en conteneur de grille. Les trois valeurs de la propriété {{CSSxRef("grid-template-rows")}} divisent la grille en au moins trois lignes, définissant la hauteur des trois premiers enfants de la carte, dans l'ordre.

Chaque `card` contient un HTML {{HTMLElement("header")}}, une {{HTMLElement("img")}} et un {{HTMLElement("div")}}, dans cet ordre, certaines contenant également un {{HTMLElement("footer")}}.

La piste du titre est réglée sur {{CSSxRef("max-content")}}, ce qui l'empêche de s'étendre. La piste de l'image est fixée à 200 pixels de hauteur. La troisième piste, où se trouve le contenu, est réglée sur `1fr`. Cela signifie qu'elle occupera tout l'espace supplémentaire.

Tout enfant au‑delà des trois ayant des tailles explicitement définies crée des lignes dans la grille implicite, lesquelles s'adaptent au contenu. Celles‑ci sont dimensionnées automatiquement par défaut. Si une carte contient un pied de page, celui‑ci est dimensionné automatiquement. Le pied de page, quand il est présent, reste collé au bas de la grille. Le pied de page est redimensionné pour tenir son contenu&nbsp;; la `<div>` de contenu s'étire ensuite pour occuper l'espace additionnel.

Le jeu de règles suivant crée la grille de cartes&nbsp;:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

La propriété {{CSSxRef("grid-template-columns")}} définit la largeur des colonnes de la grille. Dans ce cas, nous réglons la grille en mode auto-fill, avec des colonnes répétées qui font au minimum `230px` mais peuvent s'agrandir pour remplir l'espace disponible. La propriété {{CSSxRef("gap")}} définit un espacement de `20px` entre les lignes adjacentes et les colonnes adjacentes.

> [!NOTE]
> Les différents éléments dans des cartes séparées ne s'alignent pas entre eux, puisque chaque carte est une grille indépendante. Aligner les composants d'une carte avec ceux des cartes adjacentes peut se faire avec une [sous-grille](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid).

## Méthodes alternatives

La disposition [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) peut également être utilisée pour disposer chaque carte. Avec flexbox, les dimensions des rangées de chaque carte sont définies avec la propriété {{CSSxRef("flex")}} sur chaque rangée, plutôt que sur le conteneur de la carte.

Avec flexbox, les dimensions des éléments `flex` sont définies sur les enfants plutôt que sur le parent. Le choix entre grid et flexbox dépend de votre préférence&nbsp;: préférez‑vous contrôler les pistes depuis le conteneur ou ajouter des règles aux éléments&nbsp;?

Nous avons choisi `grid` pour les cartes car, en général, on souhaite que les cartes soient alignées à la fois verticalement et horizontalement. De plus, aligner les composants à l'intérieur de chaque carte avec ceux des cartes adjacentes peut se faire avec subgrid. Flexbox n'offre pas d'équivalent sans astuce à subgrid.

## Problèmes d'accessibilité

Selon le contenu de votre carte, il peut exister des actions à entreprendre pour améliorer l'accessibilité. Consultez [_Inclusive Components: Card_ <sup>(angl.)</sup>](https://inclusive-components.design/cards/) de Heydon Pickering pour une explication détaillée de ces enjeux.

## Voir aussi

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("gap")}}
- Le module de [mise en page de grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- [_Inclusive Components: Card_ <sup>(angl.)</sup>](https://inclusive-components.design/cards/)
