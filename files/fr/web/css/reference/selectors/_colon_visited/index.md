---
title: Pseudo-classe CSS `:visited`
short-title: :visited
slug: Web/CSS/Reference/Selectors/:visited
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:visited`** s'applique une fois que le lien a été visité par l'utilisateur·ice. Pour des raisons de vie privée, les styles pouvant être modifiés avec ce sélecteur sont très limités. La pseudo-classe `:visited` s'applique uniquement aux éléments HTML {{HTMLElement("a")}} et {{HTMLElement("area")}} qui possèdent un attribut `href`.

{{InteractiveExample("Démonstration CSS&nbsp;: :visited", "tabbed-shorter")}}

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

Les styles définis par les pseudo-classes `:visited` et non-visitées {{CSSxRef(":link")}} peuvent être écrasés par toute pseudo-classe d'action utilisateur suivante ({{CSSxRef(":hover")}} ou {{CSSxRef(":active")}}) ayant une spécificité au moins égale. Pour mettre en forme les liens correctement, placez la règle `:visited` après la règle `:link` mais avant les règles `:hover` et `:active`, comme défini par _l'ordre LVHA_&nbsp;: `:link` — `:visited` — `:hover` — `:active`. La pseudo-classe `:visited` et la pseudo-classe `:link` sont mutuellement exclusives.

## Restrictions de vie privée

Pour des raisons de vie privée, les navigateurs limitent les propriétés qui peuvent être appliquées à cette pseudo-classe&nbsp;:

- Les propriétés CSS autorisées sont {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("column-rule-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, et {{CSSxRef("text-emphasis-color")}}.
- Les attributs SVG autorisés sont {{SVGAttr("fill")}} et {{SVGAttr("stroke")}}.
- La composante alpha des styles autorisés sera ignorée. La composante alpha de l'état inverse de `:visited` de l'élément sera utilisée à la place. Dans Firefox, lorsque la composante alpha est `0`, le style défini dans `:visited` sera totalement ignoré.
- Bien que ces styles puissent changer l'apparence des couleurs pour l'utilisateur·ice final·e, la méthode {{DOMxRef("window.getComputedStyle")}} mentira et retournera toujours la valeur de la couleur de l'état inverse de `:visited`.
- L'élément HTML {{HTMLElement("link")}} n'est jamais ciblé par `:visited`.
- Les méthodes DOM qui ciblent des éléments via des sélecteurs CSS — comme {{DOMxRef("Document.querySelector", "querySelector()")}} et {{DOMxRef("Document.querySelectorAll", "querySelectorAll()")}} — retourneront toujours un résultat «&nbsp;vide&nbsp;» même s'il existe des liens visités dans un document. Pour les méthodes mentionnées, ce sera `null` ou une liste de nœuds ({{DOMxRef("NodeList")}}) vide, respectivement.

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
  - {{CSSxRef(":link")}},
  - {{CSSxRef(":visited")}},
  - {{CSSxRef(":hover")}},
  - {{CSSxRef(":active")}}.
