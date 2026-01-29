---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: 0cc0da86bf55acce9f83eca7bbed9508fda98375
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<timeline-range-name>`** est un identifiant représentant l'une des plages de chronologie nommées prédéfinies à l'intérieur d'une [chronologie de progression de vue](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines).

Les valeurs de mot-clé `<timeline-range-name>` sont utilisées dans les [sélecteurs d'images-clés](/fr/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) ainsi que dans les propriétés longues et abrégées suivantes&nbsp;:

- {{CSSxRef("animation-range-end")}}
- {{CSSxRef("animation-range-start")}}
- {{CSSxRef("animation-range")}} (raccourci)

## Syntaxe

Valeurs valides pour `<timeline-range-name>`&nbsp;:

- `cover`
  - : Représente toute la plage d'une chronologie de progression de vue, du point où le bord de début de l'élément sujet entre pour la première fois dans la plage de visibilité de progression de vue du port de défilement (`0%` de progression) jusqu'au point où le bord de fin l'a complètement quittée (`100%` de progression).

- `contain`
  - : Représente la plage d'une chronologie de progression de vue où l'élément sujet est entièrement contenu dans, ou contient entièrement, la plage de visibilité de progression de vue à l'intérieur du [port de défilement](/fr/docs/Glossary/Scroll_container#port_de_défilement)
    - Si l'élément sujet est plus petit que le port de défilement, la plage va du point où l'élément est complètement contenu dans le port de défilement (`0%` de progression), jusqu'au point où il ne l'est plus (`100%` de progression).
    - Si l'élément sujet est plus grand que le port de défilement, la plage va du point où l'élément couvre complètement le port de défilement (`0%` de progression), jusqu'au point où il ne le couvre plus complètement (`100%` de progression).

- `entry`
  - : Représente la plage d'une chronologie de progression de vue allant du point où l'élément sujet commence à entrer dans le port de défilement, jusqu'au point où il y est complètement entré. `0%` équivaut à `0%` de la plage `cover`. `100%` équivaut à `0%` de la plage `contain`.

- `exit`
  - : Représente la plage d'une chronologie de progression de vue allant du point où l'élément sujet commence à sortir du port de défilement, jusqu'au point où il l'a complètement quitté. `0%` équivaut à `100%` de la plage `contain`. `100%` équivaut à `100%` de la plage `cover`.

- `entry-crossing`
  - : Représente la plage durant laquelle la boîte principale franchit le bord de fin. Le début de la plage (0% de progression) se produit lorsque le bord de début de la boîte principale de l'élément coïncide avec le bord de fin de sa plage de visibilité de progression de vue. La fin de la plage (100%) est le point où le bord de fin de la boîte principale de l'élément coïncide avec le bord de fin de sa plage de visibilité de progression de vue. La taille de la plage correspond à la taille de la boîte principale de l'élément dans la direction du défilement.

- `exit-crossing`
  - : Représente la plage où la boîte principale franchit le bord de début. Le début de la plage (0% de progression) se produit lorsque le bord de début de la boîte principale de l'élément coïncide avec le bord de début de sa plage de visibilité de progression de vue. La fin de la plage (100% de progression) est le point où le bord de fin de la boîte principale de l'élément coïncide avec le bord de début de sa plage de visibilité de progression de vue. La taille de la plage correspond à la taille de la boîte principale de l'élément dans la direction du défilement.

## Syntaxe formelle

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## Exemples

Voir le [visualiseur de plage de chronologie de vue <sup>(angl.)</sup>](https://scroll-driven-animations.style/tools/view-timeline/ranges/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("animation-range-start")}}, {{CSSxRef("animation-range-end")}}, {{CSSxRef("animation-range")}}
- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("scroll-timeline")}}
- La propriété {{CSSxRef("view-timeline-inset")}}
- [Chronologies d'animation pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Le module [des animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Visualiseur de plage de chronologie de vue <sup>(angl.)</sup>](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
