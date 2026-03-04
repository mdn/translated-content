---
title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`container-type`** permet de définir le type de contexte de conteneur utilisé dans une requête de conteneur. Les contextes de conteneur disponibles sont&nbsp;:

- [Taille](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)&nbsp;: Permet d'appliquer sélectivement des règles CSS aux enfants d'un conteneur en fonction d'une condition de taille générale ou de taille en ligne, comme une dimension maximale ou minimale, un rapport d'aspect ou une orientation.
- [État de défilement](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)&nbsp;: Permet d'appliquer sélectivement des règles CSS aux enfants d'un conteneur en fonction d'une condition d'état de défilement, comme le fait que le conteneur soit un conteneur de défilement partiellement défilé ou qu'il soit une [cible d'accrochage](/fr/docs/Glossary/Scroll_snap#cible_daccrochage) qui va être accrochée à son conteneur d'accrochage de défilement.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;

/* Deux valeurs */
container-type: size scroll-state;

/* Valeurs globales */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### Valeurs

La propriété `container-type` peut prendre une seule valeur parmi la liste ci-dessous, ou deux valeurs — l'une doit être `scroll-state` et l'autre peut être `inline-size` ou `size`. En d'autres termes, un élément peut être établi comme conteneur de requête de taille, conteneur de requête d'état de défilement, les deux, ou aucun des deux.

- `inline-size`
  - : Établit un conteneur de requête pour les requêtes dimensionnelles sur [l'axe en ligne](/fr/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#dimensions_de_bloc_et_en_ligne) du conteneur.
    Applique la compartimentation du [`style`](/fr/docs/Web/CSS/Reference/Properties/contain#style) et de [`inline-size`](/fr/docs/Web/CSS/Reference/Properties/contain#inline-size) à l'élément. La taille en ligne de l'élément peut être [calculée isolément](/fr/docs/Web/CSS/Guides/Containment/Using#size_containment), en ignorant les éléments enfants (voir [Utiliser la compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment/Using)).

- `normal`
  - : Valeur par défaut. L'élément n'est pas un conteneur de requête pour les requêtes de taille de conteneur, mais reste un conteneur de requête pour les [requêtes de style de conteneur](/fr/docs/Web/CSS/Reference/At-rules/@container#requêtes_de_style_de_conteneur).

- `scroll-state` {{Experimental_Inline}}
  - : Établit un conteneur de requête pour les requêtes d'état de défilement sur le conteneur. Dans ce cas, la taille de l'élément n'est pas calculée isolément&nbsp;; aucune compartimentation n'est appliquée.

- `size`
  - : Établit un conteneur de requête pour les requêtes de taille de conteneur dans les dimensions [en ligne et de bloc](/fr/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#dimensions_de_bloc_et_en_ligne).
    Applique la compartimentation [du style](/fr/docs/Web/CSS/Reference/Properties/contain#style) et [de la taille](/fr/docs/Web/CSS/Reference/Properties/contain#size) à l'élément. La compartimentation de taille est appliquée à l'élément dans les directions en ligne et de bloc. La taille de l'élément peut être calculée isolément, en ignorant les éléments enfants.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Description

Les requêtes de conteneur permettent d'appliquer sélectivement des styles à l'intérieur d'un conteneur en fonction de requêtes conditionnelles effectuées sur ce conteneur. La règle {{CSSxRef("@container")}} sert à définir les tests réalisés sur un conteneur et les règles qui s'appliquent à son contenu si la requête retourne `true`.

Les tests de requête de conteneur ne sont effectués que sur les éléments ayant la propriété `container-type`, qui définit les éléments comme conteneur de taille, conteneur d'état de défilement, ou les deux.

### Utiliser les requêtes de taille de conteneur

[Les requêtes de taille de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_taille_de_conteneur) permettent d'appliquer sélectivement des règles CSS aux descendants d'un conteneur en fonction d'une condition de taille, comme une dimension maximale ou minimale, un rapport d'aspect ou une orientation.

Les conteneurs de taille ont également la compartimentation de taille appliquée — cela empêche un élément d'obtenir des informations de taille à partir de son contenu, ce qui est important pour éviter les boucles infinies avec les requêtes de conteneur. Sans cela, une règle CSS à l'intérieur d'une requête de conteneur pourrait modifier la taille du contenu, ce qui pourrait rendre la requête fausse et modifier la taille de l'élément parent, ce qui pourrait à son tour modifier la taille du contenu et rendre la requête vraie, et ainsi de suite. Cette séquence se répéterait alors indéfiniment.

La taille du conteneur doit être définie par le contexte, comme les éléments de niveau bloc qui s'étendent sur toute la largeur de leur parent, ou explicitement. Si une taille contextuelle ou explicite n'est pas disponible, les éléments avec la compartimentation de taille s'effondrent.

### Utiliser les requêtes d'état de défilement du conteneur

[Les requêtes d'état de défilement du conteneur](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) permettent d'appliquer sélectivement des règles CSS aux enfants d'un conteneur en fonction d'une condition d'état de défilement, comme&nbsp;:

- Si le contenu du conteneur est partiellement défilé.
- Si le conteneur est une cible d'accrochage qui va être accrochée à un conteneur d'accrochage de défilement.
- Si le conteneur est positionné avec [`position: sticky`](/fr/docs/Web/CSS/Reference/Properties/display) et est collé à une limite d'un {{Glossary("scroll container", "conteneur de défilement")}}.

Dans le premier cas, le conteneur interrogé est le conteneur de défilement lui-même. Dans les deux autres cas, le conteneur interrogé est un élément affecté par la position de défilement d'un conteneur de défilement ancêtre.

## Exemples

### Mettre en place la compartimentation de taille en ligne

Prenez l'exemple HTML suivant qui est un composant carte avec une image, un titre et du texte&nbsp;:

```html
<div class="container">
  <div class="card">
    <h3>Carte normale</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>Carte plus large</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

Pour créer un contexte de conteneur, ajoutez la propriété `container-type` à un élément.
L'exemple suivant utilise la valeur `inline-size` pour créer un contexte de compartimentation pour [l'axe en ligne](/fr/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#dimensions_de_bloc_et_en_ligne) du conteneur&nbsp;:

```css
.container {
  container-type: inline-size;
  width: 300px;
  height: 120px;
}

.wide {
  width: 500px;
}
```

```css hidden
h3 {
  height: 2rem;
  margin: 0.5rem;
}

.card {
  height: 100%;
}

.content {
  background-color: wheat;
  height: 100%;
}

.container {
  margin: 1rem;
  border: 2px dashed red;
  overflow: hidden;
}
```

Écrire une requête de conteneur avec la règle {{CSSxRef("@container")}} appliquera des styles aux éléments du conteneur lorsque celui-ci sera plus large que 400px&nbsp;:

```css
@container (width > 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

{{EmbedLiveSample('Mettre en place la compartimentation de taille en ligne', '100%', 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- [Utiliser les requêtes de taille et de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Utiliser les requêtes d'état de défilement du conteneur](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- La règle {{CSSxRef("@container")}}
- La propriété raccourcie {{CSSxRef("container")}}
- La propriété {{CSSxRef("container-name")}}
- La propriété {{CSSxRef("content-visibility")}}
