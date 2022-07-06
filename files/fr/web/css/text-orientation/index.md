---
title: text-orientation
slug: Web/CSS/text-orientation
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/text-orientation
---
{{CSSRef}}

La propriété **`text-orientation`** définit l'orientation du texte sur une ligne. Cette propriété n'a d'effet qu'en mode vertical (autrement dit, quand {{cssxref("writing-mode")}} n'est pas `horizontal-tb`). Elle est utile pour contrôler l'affichage de l'écriture pour les langues dont le script est vertical. Elle permet aussi de gérer les en-têtes de tableaux verticaux.

{{EmbedInteractiveExample("pages/css/text-orientation.html")}}Syntaxe

```css
/* Valeurs avec un mot-clé */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways-left;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Valeurs globales */
text-orientation: inherit;
text-orientation: initial;
text-orientation: unset;
```

La propriété `text-orientation` peut valoir l'un des mots-clés suivants.

### Valeurs

- `mixed`
  - : Ce mot-clé permet de tourner les caractères de 90° dans le sens des aiguilles d'une montre pour les scripts horizontaux, les glyphes des scripts verticaux sont affichés normalement. C'est la valeur par défaut.
- `upright`
  - : Ce mot-clé permet d'afficher les caractères des scripts horizontaux normalement et d'afficher les glyphes des scripts verticaux « debout ». Ce mot-clé implique que tous les caractères soient considérés comme _ltr_ (_left-to-right_ ou gauche à droite). La valeur utilisée pour {{cssxref("direction")}} sera `ltr`, quelle que soit celle définie par l'utilisateur.
- `sideways`
  - : Ce mot-clé permet d'afficher les caractères comme s'ils étaient disposés horizontalement et que la ligne de base était tournée de 90° dans le sens des aiguilles d'une montre.
- `sideways-right`
  - : Un alias pour `sideways` conservé pour des raisons de compatibilité.
- `use-glyph-orientation`
  - : Pour les éléments SVG, ce mot-clé permet d'utiliser la valeur des propriétés SVG dépréciées `glyph-orientation-vertical` et `glyph-orientation-horizontal`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="monTexte">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
```

### CSS

```css
.monTexte {
  writing-mode: vertical-rl;
  text-orientation: sideways;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%",200)}}

## Spécification

| Spécification                                                                                        | Statut                                   | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Writing Modes', '#text-orientation', 'text-orientation')}} | {{Spec2('CSS3 Writing Modes')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-orientation")}}

## Voir aussi

- {{cssxref("writing-mode")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("unicode-bidi")}}
