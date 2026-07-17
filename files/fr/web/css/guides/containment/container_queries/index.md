---
title: Requêtes de conteneur CSS
short-title: Requêtes de conteneur
slug: Web/CSS/Guides/Containment/Container_queries
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Les requêtes de conteneur permettent d'appliquer des styles à un élément en fonction de certains attributs de son conteneur&nbsp;:

- Le nom du conteneur ({{CSSxRef("container-name")}}).
- La taille du conteneur.
- Les styles appliqués au conteneur.
- L'état de défilement du conteneur ou de son ancêtre défilant.
- Si le conteneur est [ancré](/fr/docs/Web/CSS/Guides/Anchor_positioning) et dispose d'une [option de repli de position](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) appliquée.

Les requêtes de conteneur sont une alternative aux [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries), qui appliquent des styles aux éléments en fonction de la taille de la fenêtre ou d'autres caractéristiques de l'appareil.

Cet article fournit une introduction à l'utilisation des requêtes de conteneur, en se concentrant spécifiquement sur les requêtes de taille de conteneur. D'autres guides abordent en détail les requêtes de conteneur [de style](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_style_de_conteneur), [d'état de défilement](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) et [ancrées](/fr/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries).

![Deux types de requêtes différents. Premièrement, une requête média basée sur la largeur de la fenêtre, qui correspond à la largeur totale du navigateur. Deuxièmement, une requête de conteneur basée sur la largeur d'un élément conteneur.](container-query.svg)

## Utiliser les requêtes de taille de conteneur

Alors que les requêtes de conteneur appliquent des styles en fonction du nom ou du type du conteneur, les requêtes de taille de conteneur appliquent des styles spécifiquement en fonction des dimensions du conteneur. Pour utiliser les requêtes de taille de conteneur, vous devez déclarer un [contexte de compartimentation](#nommer_les_contextes_de_compartimentation) sur un élément afin que le navigateur sache que vous voulez interroger les dimensions de ce conteneur plus tard.
Pour ce faire, utilisez la propriété {{CSSxRef("container-type")}} avec une valeur de `size`, `inline-size` ou `normal`.

Ces valeurs ont les effets suivants&nbsp;:

- `size`
  - : La requête est basée sur les dimensions [en ligne et en bloc](/fr/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#axe_de_bloc_et_axe_en_ligne) du conteneur.
    Applique la mise en page, le style et la [compartimentation de taille](/fr/docs/Web/CSS/Guides/Containment/Using) au conteneur.
- `inline-size`
  - : La requête est basée sur les dimensions [en ligne](/fr/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#axe_de_bloc_et_axe_en_ligne) du conteneur.
    Applique la mise en page, le style et la compartimentation de la taille en ligne à l'élément.
- `normal`
  - : La valeur par défaut. L'élément n'est pas un conteneur de requête pour les requêtes de taille de conteneur, mais peut toujours être utilisé comme conteneur de requête pour les [requêtes de conteneur basées sur le nom](#requêtes_de_conteneur_avec_seulement_un_nom) ou les requêtes de style de conteneur.

Considérons l'exemple suivant d'un composant de carte pour un article de blog avec un titre et du texte&nbsp;:

```html
<div class="sujet">
  <div class="carte">
    <h2>Titre de la carte</h2>
    <p>Contenu de la carte</p>
  </div>
</div>
```

Vous pouvez créer un contexte de compartimentation en utilisant la propriété `container-type`&nbsp;:

```css
.sujet {
  container-type: inline-size;
}
```

Ensuite, utilisez la règle `@container` pour définir une requête de conteneur.
La requête dans l'exemple suivant applique des styles aux éléments en fonction de la taille de l'ancêtre le plus proche ayant un contexte de compartimentation.
Plus précisément, cette requête applique une taille de police plus grande pour le titre de la carte si le conteneur est plus large que `700px`&nbsp;:

```css
/* Styles par défaut pour le titre de la carte */
.carte h2 {
  font-size: 1em;
}

/* Si le conteneur est plus large que 700px */
@container (width > 700px) {
  .carte h2 {
    font-size: 2em;
  }
}
```

En utilisant les requêtes de conteneur, la carte peut être réutilisée dans plusieurs zones d'une page sans avoir besoin de savoir exactement où elle est placée à chaque fois.
Si le conteneur avec la carte est plus étroit que `700px`, la police du titre de la carte est petite, et si la carte se trouve dans un conteneur plus large que `700px`, la police du titre de la carte est plus grande.

Pour plus d'informations sur la syntaxe des requêtes de conteneur, consultez la page {{CSSxRef("@container")}}.

## Nommer les contextes de compartimentation

Dans la section précédente, une requête de conteneur appliquait des styles en fonction de l'ancêtre le plus proche ayant un contexte de compartimentation.
Il est possible de donner un nom à un contexte de compartimentation en utilisant la propriété {{CSSxRef("container-name")}}. Une fois nommé, le nom peut être utilisé dans une requête `@container` afin de cibler un conteneur spécifique.
L'exemple suivant crée un contexte de compartimentation avec le nom `barre-laterale`&nbsp;:

```css
.sujet {
  container-type: inline-size;
  container-name: barre-laterale;
}
```

Vous pouvez ensuite cibler ce contexte de compartimentation en utilisant la règle `@container`&nbsp;:

```css
@container barre-laterale (width > 700px) {
  .carte {
    font-size: 2em;
  }
}
```

Pour plus d'informations sur la nomination des contextes de compartimentation, consultez la page {{CSSxRef("container-name")}}.

## Requêtes de conteneur avec seulement un nom

En plus d'utiliser un nom de conteneur ({{CSSxRef("container-name")}}) avec une [`<container-query>`](/fr/docs/Web/CSS/Reference/At-rules/@container#container-query), vous pouvez interroger un conteneur en utilisant uniquement son nom. Ces requêtes dites **de conteneur avec seulement un nom** permettent d'appliquer sélectivement des styles aux éléments en fonction de la présence d'un ancêtre avec un `container-name` spécifique.

Par exemple, considérez le HTML suivant&nbsp;:

```html
<div id="conteneur">
  <p>Je suis dans le conteneur.</p>
  <p>Je suis aussi dans le conteneur.</p>
</div>
<p>Je ne suis pas dans le conteneur.</p>
```

Si nous attribuons un nom au conteneur&nbsp;:

```css
#conteneur {
  container-name: mon-conteneur;
}
```

Vous pouvez ensuite appliquer des styles de manière sélective uniquement aux éléments à l'intérieur de ce conteneur&nbsp;:

```css
@container mon-conteneur {
  p {
    background-color: lime;
    font-size: 1.3rem;
    width: 50vw;
    padding: 0.5rem;
    font-family: sans-serif;
  }
}
```

Dans cet exemple, les styles définis seraient appliqués uniquement aux premier et deuxième éléments {{HTMLElement("p")}}, mais pas au troisième.

## Syntaxe raccourcie des conteneurs

La manière raccourcie de déclarer un contexte de compartimentation est d'utiliser la propriété `container`&nbsp;:

```css
.sujet {
  container: barre-laterale / inline-size;
}
```

Pour plus d'informations sur cette propriété, consultez la référence {{CSSxRef("container")}}.

## Unités de longueur des requêtes de conteneur

Lors de l'application de styles aux descendants d'un conteneur en utilisant des requêtes de conteneur de taille (c'est-à-dire que son {{CSSxRef("container-type")}} est défini sur `size` ou `inline-size`), vous pouvez utiliser des unités de longueur de requête de conteneur.
Ces unités définissent une longueur relative aux dimensions d'un conteneur de requête.
Les composants qui utilisent des unités de longueur relatives à leur conteneur sont plus flexibles à utiliser dans différents conteneurs sans avoir à recalculer des valeurs de longueur concrètes.

Si aucun conteneur éligible n'est disponible pour la requête, l'unité de longueur de la requête de conteneur par défaut est [l'unité de petite zone d'affichage](/fr/docs/Web/CSS/Reference/Values/length#unités_pour_petite_zone_daffichage) pour cet axe (`sv*`).

Les unités de longueur des requêtes de conteneur sont&nbsp;:

- `cqw`&nbsp;: 1% de la largeur d'un conteneur de requête
- `cqh`&nbsp;: 1% de la hauteur d'un conteneur de requête
- `cqi`&nbsp;: 1% de la taille en ligne d'un conteneur de requête
- `cqb`&nbsp;: 1% de la taille en bloc d'un conteneur de requête
- `cqmin`&nbsp;: La plus petite valeur entre `cqi` et `cqb`
- `cqmax`&nbsp;: La plus grande valeur entre `cqi` et `cqb`

L'exemple suivant utilise l'unité `cqi` pour définir la taille de la police d'un titre en fonction de la taille en ligne du conteneur&nbsp;:

```css
@container (width > 700px) {
  .sujet h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Pour plus d'informations sur ces unités, consultez la référence [Unités de longueur des requêtes de conteneur](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_des_requêtes_de_conteneur).

## Solutions de repli pour les requêtes de conteneur

Pour les navigateurs qui ne prennent pas encore en charge les requêtes de conteneur, {{CSSxRef("grid")}} et {{CSSxRef("flex")}} peuvent être utilisés pour créer un effet similaire pour le composant de carte utilisé sur cette page.
L'exemple suivant utilise une déclaration {{CSSxRef("grid-template-columns")}} pour créer une mise en page à deux colonnes pour le composant de carte.

```css
.sujet {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Si vous souhaitez utiliser une mise en page à une seule colonne pour les appareils avec une zone d'affichage plus petite, vous pouvez utiliser une requête média pour modifier le modèle de grille&nbsp;:

```css
@media (width <= 700px) {
  .sujet {
    grid-template-columns: 1fr;
  }
}
```

## Voir aussi

- [Les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries)
- La règle {{CSSxRef("@container")}}
- La propriété {{CSSxRef("contain")}}
- La propriété raccourcie {{CSSxRef("container")}}
- La propriété {{CSSxRef("container-name")}}
- La propriété {{CSSxRef("content-visibility")}}
- [Utiliser les requêtes de taille et de style des conteneurs](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Utiliser les requêtes d'état de défilement des conteneurs](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Utiliser les requêtes de conteneur ancrées](/fr/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- [Dites Bonjour aux requêtes de conteneur CSS <sup>(angl.)</sup>](https://ishadeed.com/article/say-hello-to-css-container-queries/) par Ahmad Shadeed
- [Requêtes de conteneur&nbsp;: guide de démarrage rapide <sup>(angl.)</sup>](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Collection d'articles sur les requêtes de conteneur <sup>(angl.)</sup>](https://github.com/sturobson/Awesome-Container-Queries)
