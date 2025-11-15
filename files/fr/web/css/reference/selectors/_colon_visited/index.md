---
title: :visited
slug: Web/CSS/Reference/Selectors/:visited
original_slug: Web/CSS/:visited
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:visited`** permet de modifier l'aspect d'un lien après que l'utilisateur·ice l'a visité. Pour des raisons relatives à la vie privée, les propriétés qui peuvent être utilisées sont restreintes.

{{InteractiveExample("CSS Demo: :visited", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:visited {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>Pages que vous avez peut-être consultées&nbsp;</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/fr/">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/YouTube">YouTube</a>
  </li>
</ul>
<p>Pages peu susceptibles d'être dans votre historique&nbsp;:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-1">Page MDN aléatoire</a>
  </li>
  <li>
    <a href="https://example.fr/missing-1">Page d'exemple aléatoire</a>
  </li>
</ul>
```

Cette mise en forme peut être écrasée par toute autre pseudo-classe liée aux liens ({{cssxref(":link")}}, {{cssxref(":hover")}}, et {{cssxref(":active")}}) qui apparaîtrait dans les règles CSS suivantes. Il est donc important de bien ordonner les pseudo-classes pour une bonne mise en forme&nbsp;: `:visited` doit être utilisée après une règle basée sur `:link`, mais avant les autres (`:link` — `:visited` — `:hover` — `:active`).

## Restrictions

Pour des raisons de vie privée, les navigateurs limitent les propriétés qui peuvent être appliquées à cette pseudo-classe&nbsp;:

- Les propriétés CSS autorisées sont {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, {{cssxref("outline-color")}}, {{cssxref("column-rule-color")}}
- Les attributs SVG autorisés sont {{SVGAttr("fill")}} and {{SVGAttr("stroke")}}.
- La composante alpha sera ignorée&nbsp;: la composante alpha d'un lien non-visité est utilisé à la place (sauf quand l'opacité est `0`, dans ce cas, toute la couleur est ignorée, ainsi que celle de la règle non-visité).
- Bien qu'on puisse modifier la couleur d'un lien, la méthode {{domxref("window.getComputedStyle")}} mentira et indiquera toujours la valeur de la couleur de la règle pour les liens non-visités.

> [!NOTE]
> Pour d'autres informations sur ces limitations et leurs raisons d'être, se référer à l 'article [Vie privée et le sélecteur `:visited`](/fr/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited).

## Syntaxe

```css
:visited {
  /* ... */
}
```

## Exemples

Les propriétés qui n'auraient autrement aucune couleur ou seraient transparentes ne peuvent pas être modifiées avec `:visited`. Parmi les propriétés qui peuvent être définies avec cette pseudo-classe, votre navigateur a probablement une valeur par défaut pour `color` et `column-rule-color` uniquement. Ainsi, si vous souhaitez modifier les autres propriétés, vous devrez leur donner une valeur de base en dehors du sélecteur `:visited`.

### HTML

```html
<a href="#lien-visité-de-teste"> Avez-vous déjà visité cette page&nbsp;? </a
><br />
<a href="">Vous avez déjà visité ce lien.</a>
```

### CSS

```css
a {
  /* Définir des valeurs par défaut non transparentes pour
     certaines propriétés, permettant de les styliser avec
     l'état :visited */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Vie privée et le sélecteur `:visited`](/fr/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
- Les pseudo-classes relatives aux liens&nbsp;:
  - {{cssxref(":link")}},
  - {{cssxref(":visited")}},
  - {{cssxref(":hover")}},
  - {{cssxref(":active")}}.
