---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
tags:
  - CSS
  - CSS Fonts
  - Propriété
  - Reference
translation_of: Web/CSS/font-variant-caps
---
{{CSSRef}}

La propriété **`font-variant-caps`** permet de contrôler les glyphes utilisés pour représenter les lettres en capitales. Les scripts peuvent avoir différents glyphes de différentes tailles pour les différentes représentations des capitales et cette propriété permet de choisir une de ces formes.

{{EmbedInteractiveExample("pages/css/font-variant-caps.html")}}

Quand une fonte inclut des glyphes de lettres capitales avec différents corps (taille), cette propriété sélectionne la plus appropriée. Si les très petites capitales ne sont pas toutes présentes pour cette fonte, ce seront les petites capitales qui seront utilisées. Si celles-ci ne sont pas présentes, le moteur les synthétisera à partir des glyphes des capitales.

Certains caractères sans casse (comme les caractères de ponctuation) peuvent être représentés avec différents glyphes afin de mieux les représenter avec les caractères environnants. Les caractères sans casse ne sont pas synthétisés par le navigateur s'il n'y a pas de petite capitales.

### Règles spécifiques aux langues

Les règles liées à chaque langue/locale sont prises en compte avec les valeurs. Par exemple :

- Pour les langues turques comme le turc (tr), l'azerbaidjanais (az), le tatare de Crimée (crh), le tatare de Volga et le Bashkir (ba), il y a deux types de i : avec ou sans le point et deux majuscules correspondantes `i`/`İ` et `ı`/`I`.
- En allemand (de), le caractère `ß` devient `ẞ` (U+1E9E) en majuscule.
- En grec (el), les voyelles perdent leur accent en majuscule lorsque tout le mot est en majuscule (`ά`/`Α`), sauf pour le êta disjonctif (`ή`/`Ή`). Les diphthongues avec un accent sur la première voyellle perdent l'accent et ajoutent une diacritique sur la deuxième voyelle (`άι`/`ΑΪ`).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
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
font-variant-caps: unset;
```

La valeur de cette propriété peut être l'un des mots-clés définis ci-après.

### Valeurs

- `normal`
  - : Ce mot-clé désactive l'utilisation des glyphes alternatifs.
- `small-caps`
  - : Ce mot-clé active l'utilisation de petites capitales pour les minuscules. Il correspond à la valeur OpenType `smcp` ; si la fonte ne supporte pas cette option, le moteur synthétisera les glyphes.
- `all-small-caps`
  - : Ce mot-clé active l'utilisation de petites capitales pour les minuscules. Il correspond aux valeurs OpenType `smcp` et `c2sc` ; si la fonte ne supporte pas cette option, le moteur synthétisera les glyphes.
- `petite-caps`
  - : Ce mot-clé active l'utilisation de toutes petites capitales pour les minuscules. Il correspond à la valeur OpenType `pcap` ; si la fonte ne supporte pas cette option, le moteur utilisera les petites capitales.
- `all-petite-caps`
  - : Ce mot-clé active l'utilisation de toutes petites capitales pour les minuscules. Il correspond aux valeurs OpenType `pcap` et `c2pc` ; si la fonte ne supporte pas cette option, le moteur utilisera les petites capitales.
- `unicase`
  - : Ce mot-clé active l'utilisation de petites capitales pour les majuscules. Il correspond à la valeur OpenType `unic`.
- `titling-caps`
  - : Ce mot-clé active l'utilisation de capitales spéciales pour les titres (à la fois pour les minuscules et majuscules). Généralement, les glyphes majuscules sont conçus pour utiliser les glyphes minuscules et ils apparaissent trop gras quand il y a un long fragment de texte utilisant de tels glyphes. L'objectif de ces glyphes spéciaux est d'éviter un tel effet. Ce mot-clé correspond à la valeur OpenType `titl` ; si la fonte ne supporte pas ce cas, le mot-clé n'aura pas d'action visible.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  font-variant-caps: small-caps;
}
```

### HTML

```html
<p>
  La Reine devint pourpre de colère et
  après l’avoir considérée un moment avec
  des yeux flamboyants comme ceux d’une
  bête fauve, elle se mit à crier :
  « <span class="exemple">Qu’on lui coupe la tête !</span> »
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Accessibilité

L'utilisation de grandes portions de textes avec `font-style: all-small-caps` ou `font-style: all-petite-caps` peut rendre la lecture difficile pour les personnes dyslexiques ou ayant des troubles cognitifs.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_W3C Understanding WCAG 2.1_ (en anglais)](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Spécifications

| Spécification                                                                                            | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-variant-caps', 'font-variant-caps')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-variant-caps")}}
