---
title: Propriété CSS `position-try-order`
short-title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 7c56e442e76d472eff1c6a06eb5432bb11a47f3e
---

La propriété [CSS](/fr/docs/Web/CSS) **`position-try-order`** vous permet de prioriser l'option {{CSSxRef("position-try-fallbacks")}} appliquée à un élément positionné par une ancre lorsqu'il est affiché pour la première fois, en fonction de l'option qui crée le plus d'espace autour de l'élément dans la direction donnée.

> [!NOTE]
> Il existe également une propriété raccourcie — {{CSSxRef("position-try")}}, qui peut être utilisée pour définir les valeurs de `position-try-order` et {{CSSxRef("position-try-fallbacks")}} dans une seule déclaration.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
position-try-order: normal;
position-try-order: most-height;
position-try-order: most-width;
position-try-order: most-block-size;
position-try-order: most-inline-size;

/* Valeurs globales */
position-try-order: inherit;
position-try-order: initial;
position-try-order: revert;
position-try-order: revert-layer;
position-try-order: unset;
```

### Valeurs

La propriété `position-try-order` peut être définie soit avec la valeur clé `normal`, soit avec une `<try-size>`.

- `normal`
  - : La valeur par défaut. Aucune option de repli de position n'est essayée lorsque l'élément est rendu pour la première fois.
- `<try-size>`
  - : Définit les différents critères qui sont utilisés pour déterminer quelle option de repli de position doit être appliquée à l'élément positionné par une ancre lorsqu'il est rendu pour la première fois. Les valeurs disponibles sont&nbsp;:
    - `most-height`
      - : Applique l'option de repli de position qui donne à l'élément le plus d'espace vertical.
    - `most-width`
      - : Applique l'option de repli de position qui donne à l'élément le plus d'espace horizontal.
    - `most-block-size`
      - : Applique l'option de repli de position qui donne à l'élément le plus d'espace dans la direction de bloc.
    - `most-inline-size`
      - : Applique l'option de repli de position qui donne à l'élément le plus d'espace dans la direction en incise.

## Description

La propriété `position-try-order` a un objectif légèrement différent des autres fonctionnalités de repli de position, en ce qu'elle influence l'option de repli de position qui est appliquée lorsque l'élément positionné est affiché pour la première fois, plutôt que lorsqu'il est en cours de défilement. Par exemple, vous pouvez vouloir afficher initialement l'élément dans un espace qui a plus de hauteur ou de largeur disponible que la position initiale par défaut.

Le navigateur teste les options `position-try-fallbacks` disponibles pour déterminer laquelle offre le plus d'espace à l'élément positionné par une ancre dans la direction définie. Il applique ensuite cette option, remplaçant le style initial de l'élément lorsque la page est rendue une première fois.

Si aucune option de repli de position n'est disponible offrant plus de largeur/hauteur que la position initiale assignée à l'élément, aucune option de repli de position n'est appliquée, comme si `position-try-order` est définie sur `normal`.

Pour des informations détaillées sur les fonctionnalités d'ancrage et l'utilisation des options de repli de position, consultez le module [de positionnement des ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [des options de repli et masquage conditionnel pour le débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple montre l'effet de `position-try-order`.

#### HTML

Le HTML inclut deux éléments HTML {{HTMLElement("div")}} qui deviennent une ancre et un élément positionné par une ancre.

```html
<div class="ancre">⚓︎</div>

<div class="boite-information">
  <p>Ceci est une boîte d'information.</p>
</div>
```

#### CSS

Dans le CSS, nous commençons par définir une valeur `position-try-order` de `normal` sur l'élément positionné par une ancre, afin qu'il soit plus facile à trouver lorsque nous vous demandons de le modifier ensuite&nbsp;:

```css
.boite-information {
  position-try-order: normal;
}
```

L'ancre reçoit une ancre nommée ({{CSSxRef("anchor-name")}}) et a une grande marge ({{CSSxRef("margin")}}) pour la positionner vers le centre de la zone d'affichage&nbsp;:

```css hidden
.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.ancre {
  anchor-name: --mon-ancre;
  margin: 90px auto;
}
```

```css hidden
.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}
```

Nous incluons une option de position personnalisée nommée `--bas-personnalise`, qui positionne l'élément avec une position d'ancrage en dessous de l'ancre et lui donne une marge appropriée&nbsp;:

```css
@position-try --bas-personnalise {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Nous positionnons initialement l'élément avec une position d'ancrage au-dessus de son ancre, puis nous lui donnons notre option de position personnalisée en utilisant le raccourci `position-try-fallbacks`&nbsp;:

```css
.boite-information {
  position: fixed;
  position-anchor: --mon-ancre;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try-fallbacks: --bas-personnalise;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 310)}}

Initialement, l'élément avec une position d'ancrage est positionné au-dessus de son ancre, ce qui est la position par défaut que nous lui avons donnée.

Ouvrez maintenant l'exemple dans le MDN Playground en appuyant sur le bouton **Exécuter**, exécutez l'exemple, puis changez la valeur de `position-try-order` en `most-height` ou `most-block-size`. Lorsque l'exemple est re-rendu, l'élément avec une position d'ancrage est positionné en dessous de son ancre&nbsp;: l'option de repli `--bas-personnalise` est appliquée, car elle donne à l'élément positionné plus d'espace environnant que la position par défaut.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-try")}}
- La propriété {{CSSxRef("position-try-fallbacks")}}
- La règle {{CSSxRef("@position-try")}}
- Le module [de positionnement par une ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [d'utilisation du positionnement par une ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le guide [des options de repli et de masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
