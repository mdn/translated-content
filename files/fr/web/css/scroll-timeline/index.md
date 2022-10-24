---
title: '@scroll-timeline'
slug: Web/CSS/scroll-timeline
translation_of: Web/CSS/@scroll-timeline
original_slug: Web/CSS/@scroll-timeline
browser-compat: css.at-rules.scroll-timeline
---
{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/At-rule) CSS **`@scroll-timeline`** définit une chronologie [`AnimationTimeline`](/fr/docs/Web/API/AnimationTimeline) dont les valeurs temporelles sont déterminées par le défilement dans un conteneur de défilement plutôt que par des minutes ou des secondes. Une fois définie, une chronologie de défilement (<i lang="en">scroll timeline</i> en anglais) est associée à une [animation CSS](/fr/docs/Web/CSS/CSS_Animations) grâce à la propriété `animation-timeline`.

## Syntaxe

```css
@scroll-timeline moveTimeline {
  source: auto;
  orientation: vertical;
  scroll-offsets: 0px, 500px;
}
```

### Valeurs

- [`custom-ident`](/fr/docs/Web/CSS/custom-ident)
  - : Un nom identifiant la chronologie de défilement. Ce nom est utilisé lorsqu'on référence la chronologie avec la propriété [`animation-timeline`](/fr/docs/Web/CSS/animation-timeline).

- `source`
  - : L'élément défilable dont la position du défilement agit sur la chronologie. Ce peut être&nbsp;:
    - `auto`
      - : Il s'agit alors du document associé à l'objet global [`Window`](/fr/docs/Web/API/Window) actuel.
    - `selector("id-selector")`
      - : Le conteneur de défilement est identifié à l'aide d'un identifiant d'élément.
    - `none`
      - : Aucun conteneur de défilement n'est indiqué.

- `orientation`
  - : L'orientation de la chronologie de défilement&nbsp;:
    - `auto`
      - : Vaut `vertical` par défaut.
    - `block`
      - : Utilise la position du défilement le long de l'axe de bloc, conformément au mode d'écriture et à la directionnalité.
    - `inline`
      - : Utilise la position du défilement le long de l'axe en ligne, conformément au mode d'écriture et à la directionnalité.
    - `horizontal`
      - : Utilise la position horizontale du défilement, quels que soient le mode d'écriture et la directionnalité.
    - `vertical`
      - : Utilise la position verticale du défilement, quels que soient le mode d'écriture et la directionnalité.

- `scroll-offsets`
  - : Les décalages apportés à la chronologie de défilement&nbsp;:
    - `none`
      - : Aucun décalage n'est indiqué.
    - `<length-percentage>`
      - : Une liste de valeurs [`<length-percentage>`](/fr/docs/Web/CSS/length-percentage), séparées par des virgules.
    - `<element-offset>`
      - : C'est la position d'un élément qui détermine le décalage appliqué.

## Description

Pour utiliser une chronologie de défilement, on crée une règle `@scroll-timeline` qu'on utilise ensuite avec la propriété [`animation-timeline`](/fr/docs/Web/CSS/animation-timeline) dans laquelle on fait correspondre la chronologie de l'animation avec celle indiquée par le défilement.

Chaque règle `@scroll-timeline` contient des propriétés pour déterminer la source, l'orientation et les décalages de la chronologie de défilement.

### Décalages de défilement

La propriété `scroll-offset` détermine l'emplacement, par rapport au défilement, auquel l'animation devrait se produit. Elle peut être définie de trois façons&nbsp;:

1. En utilisant le mot-clé CSS `none`, qui indique qu'aucun décalage n'est appliqué.

2. En utilisant une liste de valeurs [`<length-percentage>`](/fr/docs/Web/CSS/length-percentage) séparées par des virgules. Chaque valeur trouve une correspondance par rapport à [`animation-duration`](/fr/docs/Web/CSS/animation-duration). Ainsi, si `animation-duration` vaut `2s` et que le décalage est défini avec `0px, 30px, 100px`, on aurait alors le décalage équivalent à 1s appliqué au moment du défilement à 30px. Généralement, pour avoir une animation progressive, on utilise seulement deux valeurs, comme `0px, 100px`.

3. En utilisant un décalage fourni par un élément. Cela signifie qu'il est possible d'indiquer des éléments de la page, dont les emplacements déterminent la chronologie de défilement et lequel des bords de ces éléments à utiliser. Pour indiquer des éléments, on utilise la fonction `selector()`, à laquelle on passe un identifiant d'élément. Le bord considéré est déterminé par le mot-clé `start` ou `end`. Une valeur de seuil optionnelle entre 0 et 1 peut être utilisée afin de représenter le pourcentage de l'élément qu'on s'attend à être visible dans `source`.

```css
@scroll-timeline element-move {
  source: auto;
  orientation: vertical;
  scroll-offsets: selector(#myElement) start 0, selector(#myElement) end 0;
}
```

## Syntaxe formelle

```
@scroll-timeline <timeline-name> { <declaration-list> }
```

## Exemples

### Exemple simple

Cet exemple montre un carré, qui tourne lorsqu'on fait défiler son conteneur verticalement. On crée un élément (`#container`) avec une hauteur fixe, permettant de le faire défiler. Il s'agit ici de l'élément utilisé pour `source`.

Dans ce conteneur, on crée un autre élément (`#square`), qui est mis en forme afin de ressembler à un carré. On applique sur cet élément une animation de rotation avec la règle [`@keyframes`](/fr/docs/Web/CSS/@keyframes) et la propriété `animation-name`.

On crée une règle `@scroll-timeline` intitulée `squareTimeline`, en définissant `source` comme le conteneur, `orientation` avec la valeur `vertical` et `scroll-offset` qui démarre à `0px` et termine à `300px` (soit la hauteur du conteneur). On applique cette chronologie au carré en utilisant la propriété `scroll-timeline`.

#### HTML

```html
<div id="container">
  <div id="square"></div>
</div>
```

#### CSS

```css
#container {
  height: 300px;
}

#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;
}

@scroll-timeline squareTimeline {
  source: selector("#container");
  orientation: "vertical";
  scroll-offsets: 0px, 300px;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

#### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les animations CSS](/fr/docs/Web/CSS/CSS_Animations)
- [Cas pratiques pour les animations relatives au défilement en CSS avec `@scroll-timeline` (en anglais)](https://css-tricks.com/practical-use-cases-for-scroll-linked-animations-in-css-with-scroll-timelines/)
