---
title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-caps`** contrôle l'utilisation de glyphes alternatifs pour les petites capitales (<i lang="en">small caps</i>), les très petites capitales (<i lang="en">petite caps</i>) ou les capitales de titrage.

{{InteractiveExample("Démonstration CSS&nbsp;: font-variant-caps")}}

```css interactive-example-choice
font-variant-caps: normal;
```

```css interactive-example-choice
font-variant-caps: small-caps;
```

```css interactive-example-choice
font-variant-caps: all-small-caps;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>La difficulté des gauffres</p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}
```

## Syntaxe

```css
/* Valeurs par mot-clé */
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps;
font-variant-caps: petite-caps;
font-variant-caps: all-petite-caps;
font-variant-caps: unicase;
font-variant-caps: titling-caps;

/* Valeurs globales */
font-variant-caps: inherit;
font-variant-caps: initial;
font-variant-caps: revert;
font-variant-caps: revert-layer;
font-variant-caps: unset;
```

La propriété `font-variant-caps` se définit avec un seul mot‑clé de la liste ci‑dessous. Dans chaque cas, si la police ne prend pas en charge la fonctionnalité OpenType, les glyphes sont synthétisés.

### Valeurs

- `normal`
  - : Désactive l'utilisation de glyphes alternatifs.
- `small-caps`
  - : Active l'affichage des petites capitales (fonction OpenType&nbsp;: `smcp`). Les petites capitales reprennent généralement la forme des lettres capitales mais avec la hauteur des minuscules.
- `all-small-caps`
  - : Active l'affichage des petites capitales pour les lettres capitales et minuscules (fonctions OpenType&nbsp;: `c2sc`, `smcp`).
- `petite-caps`
  - : Active l'affichage des très petites capitales (fonction OpenType&nbsp;: `pcap`).
- `all-petite-caps`
  - : Active l'affichage des très petites capitales pour les lettres capitales et minuscules (fonctions OpenType&nbsp;: `c2pc`, `pcap`).
- `unicase`
  - : Active un affichage «&nbsp;unicase&nbsp;» combinant petites capitales pour les majuscules et minuscules normales (fonction OpenType&nbsp;: `unic`).
- `titling-caps`
  - : Active l'affichage des capitales de titrage (fonction OpenType&nbsp;: `titl`). Les glyphes majuscules sont souvent conçus pour l'usage avec des minuscules. Utilisés en titres tout en capitales, ils peuvent paraître trop appuyés. Les capitales de titrage sont conçues pour ce cas.

## Description

Lorsqu'une police comprend des glyphes de capitales à plusieurs tailles, cette propriété sélectionne les plus appropriés. Si les glyphes de très petites capitales ne sont pas disponibles, ils sont rendus avec des petites capitales. S'ils ne sont pas présents non plus, le navigateur les synthétise à partir des capitales.

Les polices incluent parfois des glyphes spécifiques pour divers caractères sans casse (comme la ponctuation) afin de mieux s'accorder aux caractères en capitales alentours. Cependant, des glyphes de petites capitales ne sont jamais synthétisés pour les caractères sans casse.

### Règles spécifiques à la langue

Cette propriété tient compte des règles de mise en casse propres à certaines langues. Par exemple&nbsp;:

- En langues turques, comme le turc (`tr`), l'azerbaïdjanais (`az`), le tatar de Crimée (`crh`), le tatar de la Volga (`tt`) et le bachkir (`ba`), il existe deux types de `i` (avec point et sans point) et deux associations de casse&nbsp;: `i`/`İ` et `ı`/`I`.
- En allemand (`de`), le `ß` peut devenir `ẞ` (U+1E9E) en majuscules.
- En grec (`el`), les voyelles perdent leur accent lorsque tout le mot est en majuscules (`ά`/`Α`), sauf pour l'éta disjonctif (`ή`/`Ή`). De même, les diphtongues avec un accent sur la première voyelle perdent l'accent et gagnent un diacritique sur la seconde (`άι`/`ΑΪ`).

## Accessibilité

De larges sections de texte avec une valeur `font-variant` de `all-small-caps` ou `all-petite-caps` peuvent être difficiles à lire pour des personnes avec certains troubles cognitifs comme la dyslexie.

- [Comprendre les WCAG, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [W3C Understanding WCAG 2.2 <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la variante petites capitales

#### HTML

```html
<p class="small-caps">Firefox en petites capitales&nbsp;!</p>
<p class="normal">Firefox en capitales normales&nbsp;!</p>
```

#### CSS

```css
.small-caps {
  font-variant-caps: small-caps;
  font-style: italic;
}
.normal {
  font-variant-caps: normal;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample('Définir la variante petites capitales')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-variant")}}
- La propriété {{CSSxRef("font-variant-alternates")}}
- La propriété {{CSSxRef("font-variant-east-asian")}}
- La propriété {{CSSxRef("font-variant-emoji")}}
- La propriété {{CSSxRef("font-variant-ligatures")}}
- La propriété {{CSSxRef("font-variant-numeric")}}
- La propriété {{CSSxRef("font-variant-position")}}
