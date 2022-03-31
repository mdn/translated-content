---
title: display-inside
slug: Web/CSS/display-inside
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/display-inside
---
{{CSSRef}}

Ces mots-clés définissent le type d'affichage ({{CSSxRef("display")}}) pour l'intérieur de l'élément. Ce type servira à la disposition du contenu de l'élément (si ce contenu n'est pas un élément remplacé). Ces mots-clés sont des valeurs de la propriété `display` et peuvent, historiquement être utilisé seul, ou plus récemment (cf. la spécification de niveau 3), être utilisé en combinaison avec un mot-clé {{CSSxRef("&lt;display-outside&gt;")}}.

## Syntaxe

Une valeur `<display-inside>` est définie avec l'un des mots-clés suivants :

- `flow` {{Experimental_Inline}}

  - : L'élément organise son contenu en utilisant la disposition en flux (disposition bloc/en ligne ou « _block and inline layout_ » en anglais).

    Si le type d'affichage extérieur est `inline` ou `run-in` et que l'élément participe à un contexte de formatage bloc ou en ligne, il génèrera une boîte en ligne. Sinon, il génèrera un conteneur de bloc.

    Selon la valeur d'autres propriétés (telles que {{CSSxRef("position")}}, {{CSSxRef("float")}}, ou {{CSSxRef("overflow")}}) et selon que l'élément partcipe à un contexte de mise en forme de bloc ou en ligne, l'élément crée un nouveau [contexte de formatage de bloc](/fr/docs/Web/Guide/CSS/Block_formatting_context) (BFC) pour son contenu ou intègre son contenu dans le contexte parent.

- `flow-root` {{Experimental_Inline}}
  - : L'élément génère un bloc qui établit un nouveau [contexte de formatage de bloc](/fr/docs/Web/Guide/CSS/Block_formatting_context), définissant ainsi une nouvelle racine pour le formatage.
- `table`
  - : L'élément se comporte comme un élément HTML {{HTMLElement("table")}}. Il définit une boîte de bloc.
- `flex`
  - : L'élément se comporte comme un élément de bloc et dispose son contenu selon [le modèle des boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout).
- `grid`
  - : L'élément se comporte comme un élément de bloc et dispose son contenu selon [le modèle des grilles](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).
- `ruby` {{Experimental_Inline}}
  - : L'élément se comporte comme un élément en ligne et dispose son contenu selon le modèle de formatage ruby. Il se comporte comme un élément HTML {{HTMLElement("ruby")}}.

> **Note :** Les navigateurs qui prennent en charge la syntaxe avec deux valeurs peuvent n'utiliser que `<display-inside>` lorsque c'est cohérent. Ainsi, avec `display: flex` ou `display: grid`, la valeur utilisée de `<display-outside>` sera nécessairement `block`. On a ainsi le résultat attendu car on doit avoir `display: grid` avec un conteneur qui soit un bloc.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans l'exemple qui suit, la boîte parente est ciblée avec `display: flow-root` et crée donc un nouveau contexte de formatage de bloc qui contient l'élément flottant.

### CSS

```css
.box {
  background-color: rgb(224, 206, 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border:1px solid black;
  padding: 10px;
}
```

### HTML

```html
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 180)}}

## Compatibilité des navigateurs

### Prise en charge des valeurs multiples

{{Compat("css.properties.display.multi-keyword_values", 10)}}

### Prise en charge de `flow-root`

{{Compat("css.properties.display.flow-root", 10)}}

### Prise en charge des tableaux

{{Compat("css.properties.display.table_values", 10)}}

### Prise en charge des grilles

{{Compat("css.properties.display.grid", 10)}}

### Prise en charge des boîtes flexibles

{{Compat("css.properties.display.flex", 10)}}

### Prise en charge des annotations ruby

{{Compat("css.properties.display.ruby_values", 10)}}

## Voir aussi

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Concepts de base des boîtes flexibles (_flexbox_)](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
