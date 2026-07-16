---
title: Propriété CSS `position-try`
short-title: position-try
slug: Web/CSS/Reference/Properties/position-try
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`position-try`** correspond aux propriétés {{CSSxRef("position-try-order")}} et {{CSSxRef("position-try-fallbacks")}}.

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("position-try-order")}}
- {{CSSxRef("position-try-fallbacks")}}

## Syntaxe

```css
/* position-try-fallbacks seulement */
position-try: normal flip-block;
position-try: top;
position-try: --position-essai-personnalise;
position-try: flip-block flip-inline;
position-try: top, right, bottom;
position-try: --position-essai-personnalise1, --position-essai-personnalise2;
position-try:
  normal flip-block,
  right,
  --position-essai-personnalise;

/* position-try-order et position-try-fallbacks */
position-try: normal none;
position-try:
  most-width --position-essai-personnalise1,
  --position-essai-personnalise2;
position-try:
  most-height flip-block,
  right,
  --position-essai-personnalise;

/* Valeurs globales */
position-try: inherit;
position-try: initial;
position-try: revert;
position-try: revert-layer;
position-try: unset;
```

### Valeurs

Voir {{CSSxRef("position-try-order")}} et {{CSSxRef("position-try-fallbacks")}} pour la description des valeurs.

Le raccourci `position-try` peut définir des valeurs pour `position-try-fallbacks`, ou `position-try-order` et `position-try-fallbacks`, dans cet ordre. Si `position-try-order` est omis, il est défini sur la valeur initiale de la propriété, qui est `normal`, ce qui signifie que les options de repli de `position-try` sont essayées dans l'ordre dans lequel elles apparaissent dans la propriété.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `position-try`

Cette démonstration montre l'effet de `position-try`.

#### HTML

Le HTML inclut deux éléments HTML {{HTMLElement("div")}} qui deviendront une ancre et un élément positionné par rapport à l'ancre.

```html
<div class="ancre">⚓︎</div>

<div class="boite-information">
  <p>Ceci est une boîte d'information.</p>
</div>
```

#### CSS

Dans le CSS, l'ancre se voit attribuer un {{CSSxRef("anchor-name")}} et une valeur {{CSSxRef("position")}} de `absolute`. Nous la positionnons dans la moitié supérieure de la fenêtre en utilisant les valeurs {{CSSxRef("top")}} et {{CSSxRef("left")}}&nbsp;:

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
  position: absolute;
  top: 100px;
  left: 45%;
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

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

Nous incluons ensuite une option de position personnalisée — `--bas-personnalise` — qui positionne l'élément sous l'ancre et lui donne une marge appropriée&nbsp;:

```css
@position-try --bas-personnalise {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Nous positionnons initialement l'élément au-dessus de son ancre, puis nous définissons une valeur `position-try` qui lui donne un `position-try-order` de `most-height` et une liste de `position-try-fallbacks` qui inclut uniquement notre option de repli personnalisée&nbsp;:

```css
.boite-information {
  position: fixed;
  position-anchor: --mon-ancre;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: most-height --bas-personnalise;
}
```

#### Résultat

L'élément apparaît sous son ancre, même s'il est initialement positionné au-dessus. Cela se produit parce qu'il y a plus d'espace vertical sous l'ancre que dessus. L'ordre d'essai `most-height` fait en sorte que l'option de repli `--bas-personnalise` soit appliquée, plaçant l'élément positionné dans la position qui donne à son bloc contenant la plus grande hauteur.

{{EmbedLiveSample("Utilisation simple de `position-try`", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-area")}}
- La propriété {{CSSxRef("position-try-fallbacks")}}
- La propriété {{CSSxRef("position-try-order")}}
- La règle {{CSSxRef("@position-try")}}
- Le type de donnée {{CSSxRef("position-area_value", "&lt;position-area&gt;")}}
- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [d'utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le guide [des options de repli et de masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
