---
title: transition-property
slug: Web/CSS/Reference/Properties/transition-property
original_slug: Web/CSS/transition-property
---

{{CSSRef}}

La propriété **`transition-property`** désigne les noms des propriétés CSS sur lesquelles [un effet de transition](/fr/docs/Web/CSS/Guides/Transitions/Using) devrait être appliqué.

{{InteractiveExample("CSS Demo: transition-property")}}

```css interactive-example-choice
transition-property: margin-right;
```

```css interactive-example-choice
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-property: all;
```

```css interactive-example-choice
transition-property: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

> [!NOTE]
> [L'ensemble des propriétés CSS qui peuvent être animées](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties) évolue. Vous devriez donc éviter de lister ici des propriétés qui, actuellement, ne sont pas animées car elles pourraient l'être demain et cela pourrait affecter votre document.

Si vous définissez une propriété raccourcie (par exemple {{cssxref("background")}}), toutes les propriétés détaillées correspondantes seront animées de la même façon.

## Syntaxe

```css
/* Avec un mot-clé */
transition-property: none;
transition-property: all;

/* Valeurs utilisant un identifiant */
/* <custom-ident> */
transition-property: test1;
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* Valeurs multiples */
transition-property: test1, animation4;
transition-property: all, height, all;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Avec des valeurs globales */
transition-property: inherit;
transition-property: initial;
transition-property: unset;
```

### Valeurs

- `none`
  - : Aucune propriété n'est concernée par les transitions.
- `all`
  - : Toutes les propriétés qui peuvent avoir une transition animée seront concernées.
- `<custom-ident>`
  - : Une chaîne de caractère qui identifie la propriété pour laquelle on doit appliquer un effet de transition lorsque sa valeur change. Pour plus de détails sur la forme de cet identifiant, voir la page sur le type {{cssxref("&lt;custom-ident&gt;")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Il y a plusieurs exemples sur les transitions CSS qui se trouvent dans [l'article sur les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- {{domxref("TransitionEvent")}}
