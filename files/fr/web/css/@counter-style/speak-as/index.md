---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/speak-as
---
{{CSSRef}}

Le descripteur **`speak-as`**, rattaché à la règle @ {{cssxref("@counter-style")}}, permet d'indiquer la représentation sonore du compteur qui doit être utilisée par l'agent utilisateur si nécessaire. Ainsi, on peut utiliser ce descripteur pour que le compteur soit énoncé comme un nombre ou avec un signal audio particulier.

Ce descripteur pourra prendre les valeurs `auto`, `bullets`, `numbers`, `words`, `spell-out` ou alors pourra pointer vers un autre style de compteur avec le nom de ce style.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* Nom d'un autre style @counter-style */
speak-as: <counter-style-name>;
```

### Valeurs

- `auto`

  - : Dans ce cas, la valeur réelle de `speak-as` sera définie selon la valeur utilisée pour le descripteur {{cssxref("system")}} :

    - Si `system` vaut `alphabetic`, `speak-as` sera alors synonyme de `spell-out`.
    - Si `system` vaut `cyclic`, `speak-as` sera alors synonyme de `bullets`.
    - Si `system` vaut `extends`, la valeur de `speak-as` sera la même que celle correspondante à `auto` dans le style étendu.
    - Dans les autres cas, le comportement de `numbers` sera utilisé.

- `bullets`
  - : Un morceau ou un signal sonore utilisé par l'agent utilisateur et qui représente la façon d'énoncer une liste non-ordonnée.
- `numbers`
  - : La valeur numérique du compteur sera énoncée dans la langue du document.
- `words`
  - : L'agent utilisateur génèrera une représentation normale du compteur et la lira comme un mot, dans la langue du document.
- `spell-out`
  - : L'agent utilisateur génèrera une représentation normale du compteur et l'énoncera en l'épelant. Si l'agent utilisateur ne sait pas comment prononcer une valeur du compteur, il la prononcera comme avec la valeur `numbers`.
- `<counter-style-name>`
  - : Si la valeur du descripteur est le nom d'un autre style de compteur, ce sera la valeur de `speak-as` de ce style qui sera utilisée. Si la style visé n'existe pas, cette valeur sera alors synonyme de `auto`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
@counter-style speak-as-exemple {
  system: fixed;
  symbols:     ;
  suffix: " ";
  speak-as: numbers;
}


.exemple {
  list-style: speak-as-exemple;
}
```

### HTML

```html
<ul class="exemple">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Accessibilité

La prise en charge de cette fonctionnalité par les outils d'assistance est actuellement très restreinte. Veillez à ne pas reposer sur cette propriété si vous souhaitez transmettre des informations majeures quant au but de la page.

- [Let's Talk About Speech CSS, CSS Tricks](https://css-tricks.com/lets-talk-speech-css/)

## Spécifications

| Spécification                                                                                        | État                                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('CSS3 Counter Styles', '#counter-style-speak-as', 'speak-as')}} | {{Spec2('CSS3 Counter Styles')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.at-rules.counter-style.speak-as")}}

## Voir aussi

- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}},
- {{cssxref("symbols", "symbols()")}} : la notation fonctionnelle qui permet de créer des styles de compteur anonymes.
