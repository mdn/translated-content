---
title: <display-inside>
slug: Web/CSS/Reference/Values/display-inside
original_slug: Web/CSS/display-inside
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<display-inside>`** définit le type d'affichage ({{CSSxRef("display")}}) pour l'intérieur de l'élément. Ce type servira à la disposition du contenu de l'élément (si ce contenu n'est pas un élément remplacé). Ces mots-clés sont des valeurs de la propriété `display` et peuvent, historiquement être utilisé seul, ou plus récemment (cf. la spécification de niveau 3), être utilisé en combinaison avec un mot-clé {{CSSxRef("&lt;display-outside&gt;")}}.

## Syntaxe

Valeurs valides pour `<display-inside>`&nbsp;:

- `flow`
  - : L'élément dispose son contenu en utilisant la mise en forme de flux (mise en forme bloc et en ligne).

    Si son type d'affichage externe est `inline` et qu'il participe à un contexte de formatage bloc ou en ligne, il génère une boîte en ligne. Sinon, il génère une boîte conteneur de bloc.

    Selon la valeur d'autres propriétés (comme {{CSSxRef("position")}}, {{CSSxRef("float")}} ou {{CSSxRef("overflow")}}) et selon qu'il participe lui-même à un contexte de formatage bloc ou en ligne, il établit soit un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) pour son contenu, soit il intègre son contenu dans le contexte de formatage parent.

- `flow-root`
  - : L'élément génère une boîte de type bloc qui établit un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context), définissant la racine du formatage.
- `table`
  - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("table")}}. Ils définissent une boîte de niveau bloc.
- `flex`
  - : L'élément se comporte comme un élément de type bloc et dispose son contenu selon le [modèle flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout).
- `grid`
  - : L'élément se comporte comme un élément de type bloc et dispose son contenu selon le [modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts).
- `ruby`
  - : L'élément se comporte comme un élément en ligne et dispose son contenu selon le modèle de formatage ruby. Il se comporte comme les éléments HTML {{HTMLElement("ruby")}} correspondants.

> [!NOTE]
> Les navigateurs qui prennent en charge la syntaxe à deux valeurs, lorsqu'ils ne trouvent que la valeur interne (par exemple avec `display: flex` ou `display: grid`), définissent automatiquement la valeur externe à `block`. Cela donne le comportement attendu&nbsp;: par exemple, si vous indiquez `display: grid`, la boîte créée sur le conteneur de grille sera une boîte de niveau bloc.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans l'exemple qui suit, la boîte parente est ciblée avec `display: flow-root` et crée donc un nouveau contexte de formatage de bloc qui contient l'élément flottant.

### HTML

```html
<div class="box">
  <div class="float">Je suis une boîte flottante&nbsp;!</div>
  <p>Je suis un contenu à l'intérieur du conteneur.</p>
</div>
```

### CSS

```css
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les types de données de la propriété {{CSSxRef("display")}}&nbsp;:
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Concepts de base des boîtes flexibles (_flexbox_)](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Concepts de base des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
