---
title: transition-property
slug: Web/CSS/transition-property
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/transition-property
---
{{CSSRef}}

La propriété **`transition-property`** désigne les noms des propriétés CSS sur lesquelles [un effet de transition](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) devrait être appliqué.

{{EmbedInteractiveExample("pages/css/transition-property.html")}}

> **Note :** [L'ensemble des propriétés CSS qui peuvent être animées](/fr/docs/Web/CSS/CSS_animated_properties) évolue. Vous devriez donc éviter de lister ici des propriétés qui, actuellement, ne sont pas animées car elles pourraient l'être demain et cela pourrait affecter votre document.

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
transition-property: all, -moz-specific, sliding;

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

### Syntaxe formelle

{{csssyntax}}

## Exemples

Il y a plusieurs exemples sur les transitions CSS qui se trouvent dans [l'article sur les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

## Spécifications

| Spécification                                                                                                        | État                                     | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Transitions', '#transition-property-property', 'transition-property')}} | {{Spec2('CSS3 Transitions')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.transition-property")}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
