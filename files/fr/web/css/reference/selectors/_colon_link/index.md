---
title: :link
slug: Web/CSS/Reference/Selectors/:link
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:link`** représente un élément qui n'a pas encore été visité. Il correspond à chaque élément {{HTMLElement('a')}} ou {{HTMLElement('area')}} non visité qui possède un attribut `href`.

{{InteractiveExample("Démonstration CSS&nbsp;: :link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:link {
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
    <a href="https://developer.mozilla.org/missing-2">Page MDN aléatoire</a>
  </li>
  <li>
    <a href="https://example.fr/missing-2">Page d'exemple aléatoire</a>
  </li>
</ul>
```

Les styles définis par les pseudo-classes `:link` et [`:visited`](/fr/docs/Web/CSS/Reference/Selectors/:visited) peuvent être remplacés par toute pseudo-classe d'action utilisateur ultérieure ({{CSSxRef(':hover')}} ou {{CSSxRef(':active')}}) ayant au moins la même spécificité. Pour mettre en forme correctement les liens, placez la règle `:link` avant toutes les autres règles liées aux liens, comme défini par l'ordre _LVHA_ : `:link` — `:visited` — `:hover` — `:active`. Les pseudo-classes `:visited` et `:link` s'excluent mutuellement.

> [!NOTE]
> On utilisera {{CSSxRef(":any-link")}} pour sélectionner un élément qu'il ait été visité ou non.

## Syntaxe

```css
:link {
  /* ... */
}
```

## Exemples

Par défaut, la plupart des navigateurs appliquent une valeur spéciale {{CSSxRef("color")}} aux liens visités. Ainsi, les liens de cet exemple auront probablement des couleurs de police spéciales uniquement avant que vous ne les visitiez. (Après cela, vous devrez effacer votre historique de navigation pour les voir à nouveau.) Cependant, les valeurs {{CSSxRef("background-color")}} sont susceptibles de rester, car la plupart des navigateurs ne définissent pas cette propriété sur les liens visités par défaut.

### HTML

```html
<a href="#ordinary-target">Ceci est un lien ordinaire.</a><br />
<a href="">Vous avez déjà visité ce lien.</a><br />
<a>Le lien d'espace réservé (ne sera pas stylisé)</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### Résultat

{{EmbedLiveSample("exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classes de lien&nbsp;:
  - {{CSSxRef(":visited")}}
  - {{CSSxRef(":hover")}}
  - {{CSSxRef(":active")}}
