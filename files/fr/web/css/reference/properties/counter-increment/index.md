---
title: counter-increment
slug: Web/CSS/Reference/Properties/counter-increment
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`counter-increment`** permet d'incrémenter ou de décrémenter la valeur des compteurs nommés [compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) selon les valeurs définies, ou d'empêcher la modification de tous les compteurs ou de la valeur d'un compteur individuel.

Si un compteur nommé dans la liste des compteurs et valeurs séparés par des espaces n'existe pas, il sera créé. Si aucune valeur n'est fournie pour un compteur dans la liste, le compteur sera augmenté de `1`.

La valeur du compteur peut être réinitialisée à n'importe quel entier avec la propriété CSS {{CSSxRef("counter-reset")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: counter-increment")}}

```css interactive-example-choice
counter-increment: example-counter;
```

```css interactive-example-choice
counter-increment: example-counter 0;
```

```css interactive-example-choice
counter-increment: example-counter 5;
```

```css interactive-example-choice
counter-increment: example-counter -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Valeur du compteur&nbsp;:
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-reset: example-counter;
}

#example-element::after {
  content: counter(example-counter);
}
```

## Syntaxe

```css
/* On incrémente 'mon-compteur' de 1 */
counter-increment: mon-compteur;

/* On réduit 'mon-compteur' de 1 */
counter-increment: mon-compteur -1;

/* On incrémente 'compteur1' de 1 et on décrémente 'compteur2' de 4 */
counter-increment: compteur1 compteur2 -4;

/* On n'incrémente/décremente rien : cela permet d'effacer les règles moins spécifiques */
counter-increment: none;

/* Valeurs globales */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: revert-layer;
counter-increment: unset;
```

### Valeurs

La propriété `counter-increment` accepte comme valeur soit une liste de noms de compteurs séparés par des espaces, définis comme `<custom-ident>` (identifiant personnalisé) avec une valeur `<integer>` (entier) optionnelle, soit le mot-clé `none`. Vous pouvez définir autant de compteurs à incrémenter que vous le souhaitez, chaque nom ou paire nom-nombre étant séparé par un espace.

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Le nom du compteur qu'on souhaite incrémenter ou décrémenter.
- {{CSSxRef("&lt;integer&gt;")}}
  - : Définit la valeur à ajouter au compteur. Si l'entier est précédé d'un signe `-`, la valeur sera retirée du compteur. La valeur par défaut est `1` si aucune valeur n'est définie.
- `none`
  - : Indique qu'aucun compteur ne doit être incrémenté ou décrémenté. Cette valeur peut aussi servir à annuler l'incrémentation ou la décrémentation de tous les compteurs dans des règles plus spécifiques. Il s'agit de la valeur par défaut de la propriété.

> [!NOTE]
> L'utilisation de la valeur `none` empêche tous les compteurs d'être incrémentés ou décrémentés pour les éléments sélectionnés où cette règle s'applique. Pour empêcher uniquement certains compteurs d'être incrémentés ou décrémentés, définissez la valeur `integer` à `0` sur les compteurs concernés.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Diminuer la valeur du compteur

Dans cet exemple, vous affichez une séquence de nombres en comptant à rebours. Pour cela, vous utilisez un compteur pour afficher des nombres en partant de 100 et en diminuant de 7 à chaque fois.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

Nous définissons la valeur initiale du compteur nommé `sevens` à `100` avec {{CSSxRef("counter-reset")}}. Ensuite, pour chaque {{HTMLElement("i")}}, nous diminuons le compteur de `7`.

Pour que le premier compte soit à `100`, nous ciblons le premier élément `<i>` avec la pseudo-classe {{CSSxRef(":first-of-type")}} et nous définissons `counter-increment: none;`. De plus, la propriété {{CSSxRef("content")}} est utilisée dans le pseudo-élément {{CSSxRef("::before")}} pour afficher la valeur du compteur avec la fonction {{CSSxRef("counter()")}}.

```css
div {
  counter-reset: sevens 100;
}
i {
  counter-increment: sevens -7;
}
i:first-of-type {
  counter-increment: none;
}
i::before {
  content: counter(sevens);
}
```

```css hidden
div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  width: 200px;
}
i {
  flex: 0 0 2em;
}
```

#### Résultat

{{EmbedLiveSample("Diminuer la valeur du compteur", 140, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés de compteur {{CSSxRef("counter-set")}}, {{CSSxRef("counter-reset")}}
- La règle de compteur {{CSSxRef("@counter-style")}}
- Les fonctions de compteur {{CSSxRef("counter()")}}, {{CSSxRef("counters()")}}
- La guide [d'utilisation des compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
