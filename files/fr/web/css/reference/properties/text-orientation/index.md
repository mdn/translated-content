---
title: Propriété CSS `text-orientation`
short-title: text-orientation
slug: Web/CSS/Reference/Properties/text-orientation
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-orientation`** définit l'orientation du texte sur une ligne. Cette propriété n'a d'effet qu'en mode vertical (autrement dit, quand {{CSSxRef("writing-mode")}} n'est pas `horizontal-tb`). Elle est utile pour contrôler l'affichage de l'écriture pour les langues dont le script est vertical. Elle permet aussi de gérer les en-têtes de tableaux verticaux.

{{InteractiveExample("Démonstration CSS&nbsp;: text-orientation")}}

```css interactive-example-choice
writing-mode: vertical-rl;
text-orientation: mixed;
```

```css interactive-example-choice
writing-mode: vertical-rl;
text-orientation: upright;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <p>
      L'instant d'après, Alice se précipita à sa suite, sans se demander un seul
      instant comment elle allait bien pouvoir en ressortir.
    </p>
  </div>
</section>
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Valeurs globales */
text-orientation: inherit;
text-orientation: initial;
text-orientation: revert;
text-orientation: revert-layer;
text-orientation: unset;
```

La propriété `text-orientation` peut valoir l'un des mots-clés suivants.

### Valeurs

- `mixed`
  - : Ce mot-clé permet de tourner les caractères de 90° dans le sens des aiguilles d'une montre pour les scripts horizontaux, les glyphes des scripts verticaux sont affichés normalement. C'est la valeur par défaut.
- `upright`
  - : Ce mot-clé permet d'afficher les caractères des scripts horizontaux normalement et d'afficher les glyphes des scripts verticaux « debout ». Ce mot-clé implique que tous les caractères soient considérés comme _ltr_ (_left-to-right_ ou gauche à droite). La valeur utilisée pour {{CSSxRef("direction")}} sera `ltr`, quelle que soit celle définie par l'utilisateur.
- `sideways`
  - : Ce mot-clé permet d'afficher les caractères comme s'ils étaient disposés horizontalement et que la ligne de base était tournée de 90° dans le sens des aiguilles d'une montre.
- `sideways-right`
  - : Un alias pour `sideways` conservé pour des raisons de compatibilité.
- `use-glyph-orientation`
  - : Pour les éléments SVG, ce mot-clé permet d'utiliser la valeur des propriétés SVG obsolètes `glyph-orientation-vertical` et `glyph-orientation-horizontal`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
```

### CSS

```css
p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS liées aux scripts verticaux&nbsp;: {{CSSxRef("writing-mode")}}, {{CSSxRef("text-combine-upright")}} et {{CSSxRef("unicode-bidi")}}.
- [Les propriétés logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Mise en forme du texte vertical (chinois, japonais, coréen et mongol) <sup>(angl.)</sup>](https://www.w3.org/International/articles/vertical-text/)
- Résultats étendus des tests de compatibilité des navigateurs&nbsp;: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
