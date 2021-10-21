---
title: ':visited'
slug: Web/CSS/:visited
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:visited
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:visited`** permet de modifier l'aspect d'un lien après que l'utilisateur l'a visité. Pour des raisons relatives à la vie privée, les propriétés qui peuvent être utilisées sont restreintes.

```css
a:visited {
  color: #4b2f89;
}
```

Cette mise en forme peut être écrasée par toute autre pseudo-classe liée aux liens ({{cssxref(":link")}}, {{cssxref(":hover")}}, et {{cssxref(":active")}}) qui apparaîtrait dans les règles CSS suivantes. Il est donc important de bien ordonner les pseudo-classes pour une bonne mise en forme : `:visited` doit être utilisée après une règle basée sur `:link`, mais avant les autres  (`:link` — `:visited` — `:hover` — `:active`).

## Restrictions

Pour des raisons de vie privée, les navigateurs limitent les propriétés qui peuvent être appliquées à cette pseudo-classe :

- Les propriétés CSS autorisées sont  {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, {{cssxref("outline-color")}}, {{cssxref("column-rule-color")}}
- Les attributs SVG autorisés sont {{SVGAttr("fill")}} and {{SVGAttr("stroke")}}.
- La composante alpha sera ignorée : la composante alpha d'un lien non-visité est utilisé à la place (sauf quand l'opacité est `0`, dans ce cas, toute la couleur est ignorée, ainsi que celle de la règle non-visité).
- Bien qu'on puisse modifier la couleur d'un lien, la méthode {{domxref("window.getComputedStyle")}} mentira et indiquera toujours la valeur de la couleur de la règle pour les liens non-visités.

Pour d'autres informations sur ces limitations et leurs raisons d'être, se référer à l 'article [Vie privée et le sélecteur `:visited`](/fr/docs/Web/CSS/:visited_et_la_vie_privée).

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
a:visited { color: #00ff00; }
```

### HTML

```html
<p><a href="https://developer.mozilla.org/fr/docs/Web/CSS/:visited">
  Cette page est visitée
</a></p>
<p><a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/">
  Essayez celle-ci peut-être ?
</a></p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'scripting.html#selector-visited', ':visited')}} | {{Spec2('HTML WHATWG')}}     |                                                                                                                                                                                                                  |
| {{SpecName('CSS4 Selectors', '#link', ':visited')}}                                 | {{Spec2('CSS4 Selectors')}} | Aucune modification.                                                                                                                                                                                             |
| {{SpecName('CSS3 Selectors', '#link', ':visited')}}                                 | {{Spec2('CSS3 Selectors')}} | Aucune modification.                                                                                                                                                                                             |
| {{SpecName('CSS2.1', 'selector.html#link-pseudo-classes', ':visited')}}     | {{Spec2('CSS2.1')}}             | Suppression de la restriction limitant son usage à l'élément {{HTMLElement("a")}}. Permission donnée aux navigateurs de limiter le comportement de cette pseudo-classe pour des questions de vie privée. |
| {{SpecName('CSS1', '#anchor-pseudo-classes', ':visited')}}                         | {{Spec2('CSS1')}}             | Définition initiale.                                                                                                                                                                                             |

## Compatibilité des navigateurs

{{Compat("css.selectors.visited")}}

## Voir aussi

- [Vie privée et le sélecteur `:visited`](/fr/docs/Web/CSS/Privacy_and_the_:visited_selector)
- Les pseudo-classes relatives aux liens :

  - {{cssxref(":link")}},
  - {{cssxref(":visited")}},
  - {{cssxref(":hover")}},
  - {{cssxref(":active")}}.
