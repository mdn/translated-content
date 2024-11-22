---
title: Animation des propriétés en CSS
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Les [animations](/fr/docs/Web/CSS/CSS_animations) et [transitions CSS](/fr/docs/Web/CSS/CSS_transitions) reposent sur le concept de propriétés pouvant être animées. Sauf indication contraire, toutes les propriétés CSS peuvent être animées. Le type d'_animation_ de chaque propriété détermine la manière dont les valeurs se [combinent <sup>angl.</sup>](https://drafts.csswg.org/css-values/#combining-values) en s'interpolant, s'additionnant, ou en s'accumulant. Les transitions n'impliquent que l'interpolation, tandis que les animations peuvent utiliser les trois méthodes de combinaison.

> [!NOTE]
> Le type d'animation de chaque propriété CSS est indiqué dans son tableau de «&nbsp;définition formelle&nbsp;» (par exemple&nbsp;: [`color`](/fr/docs/Web/CSS/color#définition_formelle)).

> [!NOTE]
> La méthode d'interpolation pour chaque type de données CSS est décrite dans sa section «&nbsp;Interpolation&nbsp;» (par exemple&nbsp;: [`<length>`](/fr/docs/Web/CSS/length#interpolation)).

## Types d'animations

Il existe principalement quatre types d'animation tels que définis dans la spécification [Web Animations <sup>angl.</sup>](https://drafts.csswg.org/web-animations-1/#animating-properties)&nbsp;:

- Ne pouvant être animée

  - : La propriété n'est pas animée. Elle n'est pas traitée lorsqu'elle est listée dans une image-clé d'animation et n'est pas affectée par les transitions.

    > [!NOTE]
    > Un effet d'animation ciblant uniquement des propriétés qui ne sont pas animées présentera toujours le comportement habituel d'un effet d'animation (par exemple, déclenchement de l'évènement [`animationstart`](/fr/docs/Web/API/Element/animationstart_event)).

- Discrète

  - : Les valeurs de la propriété ne sont pas cumulées et l'interpolation passe de la valeur initiale à la valeur finale à `50%`. Plus précisément, on désigne par `p` la valeur de progression&nbsp;:

    - Si `p < 0.5`, alors `V_resultat = V_debut`&nbsp;;
    - Si `p ≥ 0.5`, alors `V_resultat = V_fin`.

- Par valeur calculée

  - : Les composantes individuelles correspondantes des valeurs calculées sont combinées à l'aide de la procédure indiquée pour ce type de valeur. Si le nombre de composants ou les types de composants correspondants ne concordent pas, ou si une valeur de composant utilise une animation discrète et que les deux valeurs correspondantes ne concordent pas, les valeurs de propriété sont combinées comme des valeurs discrètes.

- Liste répétable

  - : Identique à la valeur calculée, sauf que si les deux listes ont des nombres différents d'éléments, elles sont d'abord répétées jusqu'au plus petit nombre commun d'éléments. Chaque élément est ensuite combiné par valeur calculée. Si une paire de valeurs ne peut pas être combinée ou si l'une des valeurs composantes utilise une animation discrète, les valeurs de la propriété sont combinées comme des valeurs discrètes.

Certaines propriétés ont un comportement d'interpolation spécifique qui n'est pas couvert par ces quatre types. Dans ce cas, reportez-vous à la section «&nbsp;Interpolation&nbsp;» de la propriété (par exemple&nbsp;: [`visibility`](/fr/docs/Web/CSS/visibility#interpolation)).

## Animer les propriétés personnalisées

Pour les propriétés personnalisées enregistrées à l'aide de la méthode [`registerProperty()`](/fr/docs/Web/API/CSS/registerProperty_static), le type d'animation est par valeur calculée, le type de valeur calculée étant [déterminé <sup>angl.</sup>](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) par la définition syntaxique de la propriété.

Pour les propriétés personnalisées non enregistrées, le type d'animation est discret.

## Voir aussi

- [Utilisation des animations CSS](/fr/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Utilisation des transitions CSS](/fr/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
