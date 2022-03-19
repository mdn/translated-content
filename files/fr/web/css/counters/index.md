---
title: counters()
slug: Web/CSS/counters
tags:
  - CSS
  - Fonction
  - Reference
translation_of: Web/CSS/counters()
original_slug: Web/CSS/counters()
---
{{CSSRef}}

La fonction CSS **`counters()`** permet d'obtenir des compteurs imbriqués en renvoyant la concaténation des chaînes de caractères des valeurs des compteurs passés en arguments. La fonction `counters()` peut s'utiliser sous deux formes :

- `counters(name, string)`
- `counters(name, string, style)`

Cette fonction est généralement utilisée sur des [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements) mais peut théoriquement être utilisée à tout endroit où une valeur [`<string>`](/fr/docs/Web/CSS/string) est attendue. Le texte généré est la concaténation des compteurs en commençant par les compteurs « parents » puis en ajoutant la valeurs des compteurs « fils ». Les compteurs sont affichés avec le style indiqué (par défaut, ce sera `decimal`).

    /* Utilisation simple - style decimal par défaut */
    counters(countername, '-');

    /* Changement du style d'affichage */
    counters(countername, '.', upper-roman)

Un compteur n'est pas visible en tant que tel. Les fonctions `counters()` et [`counter()`](/fr/docs/Web/CSS/counter_function) doivent être utilisées pour créer du contenu.

> **Note :** Bien que la fonction `counters()` puisse être utilisée avec n'importe quelle propriété CSS, la prise en charge des propriétés autres que {{CSSxRef("content")}} reste experimentale.
>
> Avant d'utiliser cette fonctionnalité en production, référez vous au tableau de compatibilité ci-après.

## Syntaxe

### Valeurs

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Un nom identifiant les compteurs à utiliser. C'est le même nom qui pourra être utilisé avec les propriétés {{cssxref("counter-reset")}} et {{cssxref("counter-increment")}}. Le nom ne peut pas commencer par deux tirets et ne peut pas être `none`, `unset`, `initial` ou `inherit`.
- `<counter-style>`
  - : Un style de compteur (cf. [les valeurs décrites pour `list-style-type`](/fr/docs/Web/CSS/list-style-type#valeurs)) ou une fonction [`symbols()`](</fr/docs/Web/CSS/symbols()>). En absence de valeur, le style utilisé sera `decimal`.
- {{cssxref("&lt;string&gt;")}}
  - : Une suite de caractères. Les caractères qui ne sont pas latins doivent être encodés avec leur séquence d'échappement Unicode. `\000A9` représentera par exemple le symbole copyright (©).
- `none`
  - : Représente la chaîne vide.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Style par défaut et chiffres romains

#### HTML

```html
<ol>
  <li>
     <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
  </li>
  <li></li>
  <li></li>
  <li>
     <ol>
        <li></li>
        <li>
           <ol>
              <li></li>
              <li></li>
              <li></li>
           </ol>
        </li>
      </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
   content:  counters(listCounter, '.', upper-roman) ') ';
}
li::before {
  content:  counters(listCounter, ".") " == " counters(listCounter, ".", lower-roman) ;
}
```

#### Résultat

{{EmbedLiveSample("Style_par_défaut_et_chiffres_romains", "100%", 150)}}

### _Numérotation décimale (avec zéro) et indices alphabétiques_

#### HTML

```html
<ol>
  <li>
     <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
  </li>
  <li></li>
  <li></li>
  <li>
     <ol>
        <li></li>
        <li>
           <ol>
              <li></li>
              <li></li>
              <li></li>
           </ol>
        </li>
      </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
   content: counters(count, '.', upper-alpha) ') ';
}
li::before {
  content: counters(count, ".", decimal-leading-zero) " == " counters(count, ".", lower-alpha);
}
```

#### Résultat

{{EmbedLiveSample("Numérotation_décimale_(avec_zéro)_et_indices_alphabétiques", "100%", 150)}}

## Spécifications

| Spécification                                                                                | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("CSS3 Lists", "#counter-functions", "CSS Counters")}}         | {{Spec2("CSS3 Lists")}} | Aucune modification. |
| {{SpecName("CSS2.1", "generate.html#counter-styles", "CSS Counters")}} | {{Spec2("CSS2.1")}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.types.counters")}}

## Voir aussi

- [Utiliser les compteurs CSS](/fr/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- La fonction CSS [`counter()`](/fr/docs/Web/CSS/counter_function)
- {{cssxref("::marker")}}
