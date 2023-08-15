---
title: margin-trim
slug: Web/CSS/margin-trim
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`margin-trim`** permet à un conteneur de rogner les marges de ses éléments enfants qui sont adjacentes aux bords du conteneur.

## Syntaxe

- `none`
  - : Les marges ne sont pas rognées par le conteneur.
- `in-flow`

  - : Pour les boîtes du conteneur et qui sont dans le flux, les marges sur l'axe de bloc et qui sont adjacentes aux bords du conteneur sont tronquées.

    Les marges fusionnées avec de telles marges sont également tronquées.

- `all`
  - : Les marges des boîtes qui sont dans le flux et des boîtes flottantes coincidant avec le bord du conteneur sont tronquées.

### Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("margin")}}
