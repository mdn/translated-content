---
title: Propriété CSS `transition`
short-title: transition
slug: Web/CSS/Reference/Properties/transition
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`transition`** permet de définir les propriétés {{CSSxRef("transition-property")}}, {{CSSxRef("transition-duration")}}, {{CSSxRef("transition-timing-function")}}, {{CSSxRef("transition-delay")}} et {{CSSxRef("transition-behavior")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: transition")}}

```css interactive-example-choice
transition: margin-right 2s;
```

```css interactive-example-choice
transition: margin-right 2s 0.5s;
```

```css interactive-example-choice
transition: margin-right 2s ease-in-out;
```

```css interactive-example-choice
transition: margin-right 2s ease-in-out 0.5s;
```

```css interactive-example-choice
transition:
  margin-right 2s,
  color 1s;
```

```css interactive-example-choice
transition: all 1s ease-out;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Survolez pour voir<br />la transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Elle permet de définir la transition entre deux états d'un élément. Les différents états peuvent être définis à l'aide [de pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) telles que {{CSSxRef(":hover")}} ou {{CSSxRef(":active")}} ou être définis dynamiquement avec JavaScript.

## Syntaxe

```css
/* S'applique à une propriété */
/* nom de la propriété | durée */
transition: margin-right 4s;

/* nom de la propriété | durée | retard */
transition: margin-right 4s 1s;

/* nom de la propriété | durée | fonction */
transition: margin-right 4s ease-in-out;

/* nom de la propriété | durée | fonction | retard */
transition: margin-right 4s ease-in-out 1s;

/* nom de la propriété | durée | comportement */
transition: display 4s allow-discrete;

/* S'applique à deux propriétés */
transition:
  margin-right 4s,
  color 1s;

/* S'applique à toutes les propriétés modifiées */
transition: all 0.5s ease-out allow-discrete;
transition: 200ms linear 50ms;

/* Valeurs globales */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

La valeur de la propriété `transition` s'exprime comme l'une des options suivantes&nbsp;:

- La valeur spéciale `none`, qui indique qu'aucune transition n'aura lieu sur cet élément. C'est la valeur par défaut.
- Une ou plusieurs transitions avec une seule propriété, séparées par des virgules.

Chaque transition avec une seule propriété décrit la transition à appliquer à une seule propriété ou à toutes les propriétés. Elle comprend&nbsp;:

- zéro ou une valeur représentant la ou les propriétés auxquelles la transition doit s'appliquer. Cela peut être&nbsp;:
  - Un identifiant personnalisé ({{CSSxRef("&lt;custom-ident&gt;")}}) représentant une seule propriété.
  - La valeur spéciale `all`, qui indique que la transition s'appliquera à toutes les propriétés qui changent lorsque l'élément change d'état.
  - Aucune valeur, auquel cas la valeur `all` sera déduite et la transition définie s'appliquera toujours à toutes les propriétés changeantes.
- zéro ou une valeur {{CSSxRef("easing-function")}} représentant la fonction d'accélération à utiliser
- zéro, une ou deux valeurs {{CSSxRef("&lt;time&gt;")}}. La première valeur pouvant être analysée comme une durée est affectée à {{CSSxRef("transition-duration")}}, et la deuxième valeur pouvant être analysée comme une durée est affectée à {{CSSxRef("transition-delay")}}.
- zéro ou une valeur déclarant s'il faut lancer des transitions pour les propriétés dont le comportement d'animation est [discret](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète). La valeur, si elle est présente, est soit le mot-clé `allow-discrete`, soit le mot-clé `normal`.

Si vous définissez `all` comme propriété de transition pour une transition avec une seule propriété, puis définissez des transitions avec une seule propriété ultérieures avec des valeurs {{CSSxRef("&lt;custom-ident&gt;")}}, ces transitions ultérieures remplaceront la première. Par exemple&nbsp;:

```css
transition:
  all 200ms,
  opacity 400ms;
```

Dans ce cas, toutes les propriétés qui changent lorsque l'élément change d'état seront animées avec une durée de 200ms, sauf {{CSSxRef("opacity")}}, qui mettra 400ms pour effectuer sa transition.

Voir [comment c'est géré](/fr/docs/Web/CSS/Guides/Transitions/Using#quand_les_listes_de_valeurs_des_propriétés_ont_des_longueurs_différentes) lorsque les listes de valeurs de propriété n'ont pas la même longueur. En bref, les descriptions de transition supplémentaires au-delà du nombre de propriétés réellement animées sont ignorées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, lorsque l'utilisateur·ice survole l'élément, il y a un délai d'une demi-seconde (`500ms`) avant qu'une transition de `background-color` de deux secondes ne se produise.

#### HTML

```html
<a class="target">Survolez-moi</a>
```

#### CSS

Nous incluons deux valeurs de temps ({{CSSxRef("&lt;time&gt;")}}). Dans le raccourci `transition`, la première valeur `<time>` est la `transition-duration`. La deuxième valeur `<time>` est la `transition-delay`. Les deux valeurs par défaut sont `0s` si elles sont omises.

```css
.target {
  font-size: 2rem;
  background-color: palegoldenrod;
  transition: background-color 2s 500ms;
}

.target:hover {
  background-color: darkorange;
}
```

{{EmbedLiveSample("Exemple simple", 600, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [des transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
- [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- L'interface API {{DOMxRef("TransitionEvent")}}
