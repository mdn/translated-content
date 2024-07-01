---
title: counter-increment
slug: Web/CSS/counter-increment
---

{{CSSRef}}

La propriété **`counter-increment`** est utilisée afin d'augmenter la valeur d'un [compteur CSS](/fr/docs/Web/CSS/Compteurs_CSS) d'une valeur donnée.

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

> **Note :** La valeur du compteur peut être réinitialisée avec une valeur arbitraire grâce à la propriété {{cssxref("counter-reset")}}.

## Syntaxe

```css
/* On incrémente 'mon-compteur' de 1 */
counter-increment: mon-compteur;

/* On réduit 'mon-compteur' de 1 */
counter-increment: mon-compteur -1;

/* On incrémente 'compteur1' de 1 et on décrémente 'compteur2' de 4 */
counter-increment: compteur1 compteur2 -4;

/* On n'incrémente/décremente rien */
/* cela permet d'effacer les règles moins spécifiques */
counter-increment: none;

/* Valeurs globales */
counter-increment: inherit;
counter-increment: initial;
counter-increment: unset;
```

La propriété `counter-increment` peut être définie de deux façons :

- Avec le mot-clé `none`
- Avec un identifiant ({{cssxref("&lt;custom-ident&gt;")}}) qui identifie le compteur et qui est éventuellement suivi par un entier ({{cssxref("&lt;integer&gt;")}}). On peut définir autant de compteurs qu'on veut, chacun étant séparé par un espace.

### Valeurs

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Le nom du compteur qu'on souhaite incrémenter.L'identifiant peut se composer d'une combinaison de lettres entre `a` et `z` (sensible à la casse), de nombres compris entre `0` et `9`, de tirets bas (`_` ou _underscores_) et/ou de tirets. Le premier caractère qui n'est pas un tiret doit être une lettre. Il est également interdit d'utiliser deux tirets au début d'un identifiant. Enfin, un identifiant ne doit pas être `none`, `unset`, `initial` ou `inherit` quelque soit la combinaison de la casse.
- {{cssxref("&lt;integer&gt;")}}
  - : La valeur qu'on souhaite ajouter au compteur. La valeur par défaut est 1 (le compteur est alors incrémenté de 1).
- `none`
  - : Aucun compteur n'est incrémenté. Cette valeur est utilisée comme valeur par défaut et permet également d'annuler des incréments décrits par des règles moins spécifiques.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
ol {
  list-style-type: none;
  counter-reset: compteListe;
}

li::before {
  counter-increment: compteListe 2;
  content: counter(compteListe) " ";
}
```

### HTML

```html
<ol>
  <li>Et de deux</li>
  <li>Et de quatre</li>
  <li>Et de six</li>
</ol>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les compteurs CSS](/fr/docs/Web/CSS/Compteurs_CSS)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- Les fonctions CSS {{cssxref("counter")}} et {{cssxref("counters")}}
