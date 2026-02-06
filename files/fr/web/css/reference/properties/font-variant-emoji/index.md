---
title: font-variant-emoji
slug: Web/CSS/Reference/Properties/font-variant-emoji
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-emoji`** permet de définir le style de présentation par défaut pour l'affichage des emojis.

Traditionnellement, cela se faisait en ajoutant un _sélecteur de variante_, `U+FE0E` pour le texte et `U+FE0F` pour l'emoji, au point de code de l'emoji. Seuls les emojis listés comme contribuant à une [séquence de présentation emoji Unicode <sup>(angl.)</sup>](https://www.unicode.org/emoji/charts/emoji-variants.html) sont affectés par cette propriété.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-variant-emoji: normal;
font-variant-emoji: text;
font-variant-emoji: emoji;
font-variant-emoji: unicode;

/* Valeurs globales */
font-variant-emoji: inherit;
font-variant-emoji: initial;
font-variant-emoji: revert;
font-variant-emoji: revert-layer;
font-variant-emoji: unset;
```

La propriété `font-variant-emoji` se définit avec un seul mot-clé de la liste ci-dessous.

### Valeurs

- `normal`
  - : Permet au navigateur de choisir comment afficher l'emoji. Cela suit souvent le réglage du système d'exploitation.
- `text`
  - : Affiche l'emoji comme s'il utilisait le sélecteur de variante texte unicode (`U+FE0E`).
- `emoji`
  - : Affiche l'emoji comme s'il utilisait le sélecteur de variante emoji unicode (`U+FE0F`).
- `unicode`
  - : Affiche l'emoji conformément aux [propriétés de présentation Emoji <sup>(angl.)</sup>](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). Si le sélecteur de variante `U+FE0E` ou `U+FE0F` est présent, il remplacera cette valeur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Bien que l'utilisation d'emojis puisse sembler amusante, il faut prendre en compte leur impact sur l'accessibilité, notamment pour les utilisateur·ice·s ayant des déficiences visuelles ou cognitives. Tenez compte des points suivants lors de l'utilisation d'emojis&nbsp;:

- Affichage sur les lecteurs d'écran&nbsp;: Les lecteurs d'écran liront le texte alternatif d'un emoji. Gardez cela à l'esprit pour la position de l'emoji dans le contenu. Une utilisation répétée et excessive des emojis aura un effet négatif pour les utilisateur·ice·s de lecteurs d'écran. Il est préférable d'utiliser des emojis plutôt que des émoticônes&nbsp;; les émoticônes seront lues comme des caractères de ponctuation.

- Contraste avec l'arrière-plan&nbsp;: Lorsque vous utilisez des emojis, tenez compte de leurs couleurs et de leur contraste avec l'arrière-plan, surtout si vous avez des couleurs d'arrière-plan qui peuvent changer, comme les modes clair/sombre.

- Intention d'utilisation&nbsp;: N'utilisez pas d'emojis pour remplacer des mots, car votre compréhension de la signification de l'emoji peut différer de celle des utilisateur·ice·s. De plus, les emojis peuvent avoir des significations différentes selon les cultures et les régions. Il est recommandé de limiter l'utilisation aux emojis couramment connus.

## Exemples

### Changer la façon dont un emoji est affiché

Cet exemple montre comment afficher un emoji dans sa présentation `text` ou `emoji`.

#### HTML

```html hidden
<p class="no-support">
  Votre navigateur ne prend pas en charge <code>font-variant-emoji</code>. Cette
  image montre comment il est affiché avec la prise en charge.
</p>
<img
  class="no-support"
  src="./font-variant-emoji-example.jpg"
  alt="un emoji téléphone affiché en texte, noir et blanc à côté d'un emoji téléphone affiché en couleur et en représentation graphique" />
```

```html
<section class="emojis">
  <div class="emoji">
    <h2>présentation texte</h2>
    <div class="text-presentation">☎</div>
  </div>
  <div class="emoji">
    <h2>présentation emoji</h2>
    <div class="emoji-presentation">☎</div>
  </div>
</section>
```

#### CSS

```css hidden
@supports (font-variant-emoji: emoji) {
  .no-support {
    display: none;
  }
  .emojis {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .emoji > div {
    font-size: 2rem;
  }
}

@supports not (font-variant-emoji: emoji) {
  .emojis {
    display: none;
  }
}
```

```css
.text-presentation {
  font-variant-emoji: text;
}

.emoji-presentation {
  font-variant-emoji: emoji;
}
```

#### Résultat

{{EmbedLiveSample("Changer la façon dont un emoji est affiché")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-variant")}}
- La propriété {{CSSxRef("font-variant-alternates")}}
- La propriété {{CSSxRef("font-variant-caps")}}
- La propriété {{CSSxRef("font-variant-east-asian")}}
- La propriété {{CSSxRef("font-variant-ligatures")}}
- La propriété {{CSSxRef("font-variant-numeric")}}
- [Emojis et accessibilité&nbsp;: bien les utiliser <sup>(angl.)</sup>](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
