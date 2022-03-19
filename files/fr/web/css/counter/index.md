---
title: counter()
slug: Web/CSS/counter
tags:
  - CSS
  - Compteur CSS
  - Fonction
  - Reference
translation_of: Web/CSS/counter()
original_slug: Web/CSS/counter()
---
{{CSSRef}}

La fonction CSS **`counter()`** renvoie une chaîne de caractères qui représente la valeur courante du compteur nommé (dont le nom est passé en argument). Elle est généralement utilisée pour construire un [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) mais elle peut tout à fait être utilisée à n'importe quel endroit où une valeur {{cssxref("&lt;string&gt;")}} est attendue.

    /* Usage simple */
    counter(nomcompteur);

    /* Modifier le type d'affichage du compteur */
    counter(nomcompteur, upper-roman)

Un [compteur](/fr/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters) CSS n'a aucun effet visible en lui-même. C'est la fonction `counter()` (ainsi que `counters()`) qui permet d'utiliser la chaîne de caractère ou l'image résultante.

> **Note :** La fonction `counter()` peut être utilisée avec n'importe quelle propriété CSS mais la prise en charge des propriétés autres que {{CSSxRef("content")}} reste expérimentale et la prise en charge du paramètre « type ou unité » est hétérogène.
>
> Veillez à consulter [le tableau de compatibilité des navigateurs](#browser_compatibility) avant d'utiliser ces fonctionnalités en production.

## Syntaxe

### Valeurs

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Un nom identifiant le compteur (sensible à la casse). C'est le même nom qui pourra être utilisé avec {{cssxref("counter-reset")}} et  {{cssxref("counter-increment")}}. Le nom ne peut pas commencer avec deux tirets et ne peut pas être l'un des mots-clés `none`, `unset`, `initial` ou `inherit`.
- `<counter-style>`
  - : Un nom de style de compteur ou une fonction [`symbols()`](</fr/docs/Web/CSS/symbols()>). Le nom d'un style de compteur peut indiquer un compteur [alphabétique, numérique, symbolique ou encore utilisant un système de numération asiatique ou éthiopien](/fr/docs/Web/CSS/list-style-type#valeurs) ou un autre [style de compteur prédéfini](/fr/docs/Web/CSS/CSS_Counter_Styles). Si cette valeur n'est pas fournie, le style par défaut est décimal.
- `none`
  - : Représente la chaîne de caractère vide.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison entre compteur par défaut et chiffres romains majuscules

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
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
li::after {
  content: "[" counter(listCounter) "] == ["
               counter(listCounter, upper-roman) "]";
}
```

#### Résultat

{{EmbedLiveSample("Comparaison_entre_compteur_par_défaut_et_chiffres_romains_majuscules", "100%", 150)}}

### Comparaison entre compteur décimal avec zéro et compteur alphabétique minuscule

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
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

li::after {
  content: "[" counter(count, decimal-leading-zero) "] == ["
               counter(count, lower-alpha) "]";
}
```

#### Résultat

{{EmbedLiveSample("Comparaison_entre_compteur_décimal_avec_zéro_et_compteur_alphabétique_minuscule", "100%", 150)}}

## Spécifications

| Spécification                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("CSS3 Lists", "#counter-functions", "CSS Counters")}} | {{Spec2("CSS3 Lists")}} | Aucune modification. |
| {{SpecName("CSS2.1", "generate.html#counters", "CSS Counters")}} | {{Spec2("CSS2.1")}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.types.counter")}}

## Voir aussi

- [Utiliser les compteurs CSS](/fr/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- La fonction CSS [`counters()`](</fr/docs/Web/CSS/counters()>)
