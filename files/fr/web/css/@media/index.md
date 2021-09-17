---
title: '@media'
slug: Web/CSS/@media
translation_of: Web/CSS/@media
browser-compat: css.at-rules.media
---
{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/At-rule) **`@media`** permet d'appliquer une partie d'une feuille de styles en fonction du résultat d'une ou plusieurs [requêtes média (<i lang="en">media queries</i>)](/fr/docs/Web/CSS/Media_Queries). Grâce à cette règle, on peut indiquer une requête média et un ensemble de règles CSS qui s'appliquent uniquement si la requête média est vérifiée pour l'appareil, le contexte avec lequel le contenu est consulté.

> **Note :** Il est possible de manipuler la règle @ `@media` via le CSSOM (et JavaScript) grâce à l'interface [`CSSMediaRule`](/fr/docs/Web/API/CSSMediaRule).

## Syntaxe

Une requête média (type `<media-query>`) est composée d'un type de média (optionnel) et/ou de différentes caractéristiques relatives au média. Une requête média peut être imbriquée dans une autre [règle conditionnelle](/fr/docs/Web/CSS/At-rule#les_r%c3%a8gles_de_groupe_conditionnelles).

```css
/* Au niveau le plus haut du code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Imbriquée dans une autre règle-@ conditionnelle */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

Pour plus d'informations sur la syntaxe des requêtes média, voir [Utiliser les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries).

## Description

### Types de média

{{page("/fr/docs/Web/CSS/Media_Queries/Using_media_queries","media_types")}}

### Caractéristiques de média

{{page("/fr/docs/Web/CSS/Media_Queries/Using_media_queries","media_features")}}

## Accessibilité

Pour une meilleure interaction, notamment avec les personnes qui zooment sur une page pour accroître la taille du texte ou qui définissent une taille de police par défaut pour l'ensemble du navigateur, on utilisera l'unité [`em`](/fr/docs/Web/CSS/length#em) comme valeur pour [les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries) lorsqu'il faut utiliser une longueur ([`<length>`](/fr/docs/Web/CSS/<length>)).

Les unités [`em`](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#longueur_et_taille) et [`px`](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#longueur_et_taille) sont toutes les deux valides mais [`em`](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#longueur_et_taille) s'adapte mieux quand la taille de la police du navigateur a été ajustée.

On privilégiera, autant que possible, les requêtes média de la spécification de niveau 4 afin d'améliorer l'ergonomie. On pourra, par exemple, se baser sur [`prefers-reduced-motion` afin de détecter si l'utilisateur souhaite minimiser les animations ou les déplacements](/fr/docs/Web/CSS/@media/prefers-reduced-motion).

## Sécurité

Les requêtes média fournissent des informations quant aux capacités de l'appareil avec lequel on navigue. L'ensemble de ces capacités peut être détourné afin de construire une empreinte qui identifie l'appareil ou le catégorise de façon non-désirée.

Pour ces raisons, un navigateur peut choisir de mentir sur les valeurs renvoyées afin de contourner ce pistage. Ainsi, si la détection d'empreinte numérique est désactivée dans Firefox, la plupart des caractéristiques média renverront leurs valeurs par défaut afin d'éviter leur utilisation pour du pistage.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@media print {
  body { font-size: 10pt }
}
@media screen {
  body { font-size: 13px }
}
@media screen, print {
  body { line-height: 1.2 }
}

@media only screen
  and (min-width: 320px)
  and (max-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    body { line-height: 1.4 }
}
```

Avec la mise à jour de la spécification pour les requêtes média, une nouvelle syntaxe, plus concise, peut être utilisée pour les tests d'intervalle :

```css
@media (height > 600px) {
  body { line-height: 1.4; }
}

@media (400px <= width <= 700px) {
  body { line-height: 1.4; }
}
```

Pour plus d'exemples, voir [Utiliser les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries)
- L'interface CSSOM [`CSSMediaRule`](/fr/docs/Web/API/CSSMediaRule) qui est associée avec cette règle @.
