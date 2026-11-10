---
title: Contexte de formatage de blocs
slug: Web/CSS/Guides/Display/Block_formatting_context
l10n:
  sourceCommit: 19497692665c3551b4097af5cd9f52f84564cefd
---

Un **contexte de formatage de blocs** (BFC) est une partie du rendu visuel par le CSS d'une page web. C'est la région dans laquelle la mise en page des blocs se produit et dans laquelle les éléments flottants interagissent avec les autres éléments.

Un contexte de formatage de blocs est créé par au moins l'un des éléments suivants&nbsp;:

- L'élément racine du document (`<html>`).
- Les éléments flottants (éléments dont la propriété {{ CSSxRef("float") }} n'est pas `none`).
- Les éléments positionnés absolument (éléments dont la propriété {{ CSSxRef("position") }} est `absolute` ou `fixed`).
- Les éléments en incise en bloc (éléments avec {{CSSxRef("display", "display: inline-block")}}). C'est le type d'affichage par défaut pour les éléments HTML {{HTMLElement("button")}} et les éléments HTML {{HTMLElement("input")}} de type bouton.
- Les cellules de tableau (éléments avec {{CSSxRef("display", "display: table-cell")}}, ce qui est le comportement par défaut pour les cellules de tableau HTML).
- Les légendes de tableau (éléments avec {{CSSxRef("display", "display: table-caption")}}, ce qui est le comportement par défaut pour les légendes de tableau HTML).
- Les cellules de tableau anonymes créées implicitement par les éléments avec {{CSSxRef("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (ce qui est le comportement par défaut pour les tableaux HTML, les lignes de tableau, les corps de tableau, les en-têtes de tableau et les pieds de tableau, respectivement), ou `inline-table`.
- Les éléments avec {{CSSxRef("display", "display: flow-root")}}.
- Les éléments flexibles (éléments enfants directs de l'élément avec {{CSSxRef("display", "display: flex")}} ou `inline-flex`) s'ils ne sont ni des conteneurs [flexibles](/fr/docs/Glossary/Flex_Container), ni des conteneurs de [grilles](/fr/docs/Glossary/Grid_Container), ni des conteneurs [tableaux](/fr/docs/Web/CSS/Guides/Table) eux-mêmes.
- Les éléments de la grille (éléments enfants directs de l'élément avec {{CSSxRef("display", "display: grid")}} ou `inline-grid`) s'ils ne sont ni des conteneurs [flexibles](/fr/docs/Glossary/Flex_Container), ni des conteneurs de [grilles](/fr/docs/Glossary/Grid_Container), ni des conteneurs [tableaux](/fr/docs/Web/CSS/Guides/Table) eux-mêmes.
- Les éléments de bloc dont la propriété {{CSSxRef("overflow")}} a une valeur autre que `visible` et `clip`.
- Les éléments avec {{CSSxRef("contain", "contain: layout")}}, `content` ou `paint`.
- Les conteneurs de requêtes (éléments dont la propriété {{CSSxRef("container-type")}} n'est pas `normal`).
- Les conteneurs multi-colonnes (éléments dont {{ CSSxRef("column-count") }} ou {{ CSSxRef("column-width") }} n'est pas `auto`, y compris les éléments avec `column-count: 1`).
- {{CSSxRef("column-span", "column-span: all")}}, même lorsque l'élément `column-span: all` n'est pas contenu par un conteneur multi-colonnes.

Les contextes de formatage affectent la mise en page parce qu'un élément qui établit un nouveau contexte de formatage de blocs va&nbsp;:

- contient les éléments flottants internes.
- exclut les éléments flottants externes.
- empêche [l'effondrement des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

Les conteneurs flexibles et de grille, définis en réglant la propriété {{CSSxRef("display")}} d'un élément sur `flex`, `grid`, `inline-flex` ou `inline-grid`, établissent un nouveau contexte de formatage flexible ou de grille. Ceux-ci sont similaires au contexte de formatage de blocs, sauf qu'il n'y a pas d'enfants d'éléments flottants disponibles à l'intérieur d'un conteneur flexible ou de grille, mais ces contextes de formatage excluent les éléments flottants externes et empêchent l'effondrement des marges.

## Exemples

Voyons quelques exemples afin de voir l'effet de la création d'un nouveau contexte de formatage de blocs de contexte de formatage.

### Contenir les éléments flottants internes

Dans l'exemple suivant, nous avons le contenu d'un élément flottant dont la hauteur est identique à celle du contenu qui l'accompagne. Nous avons un élément flottant à l'intérieur d'un élément `<div>` auquel une `border` est appliquée. Le contenu de cet élément `<div>` s'est placé à côté de l'élément flottant. Comme le contenu de l'élément flottant est plus grand que le contenu qui l'accompagne, la bordure de l'élément `<div>` traverse maintenant l'élément flottant. Comme l'explique le [guide des éléments dans le flux et hors du flux](/fr/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow), l'élément flottant est retiré du flux. Ainsi, le `background` et la `border` de l'élément `<div>` contiennent uniquement le contenu et non l'élément flottant.

**utiliser `overflow: auto`**

Définir `overflow: auto` ou une autre valeur que la valeur initiale `overflow: visible` crée un nouveau contexte de formatage de blocs qui contient l'élément flottant. Notre élément `<div>` devient maintenant une mini-mise en page à l'intérieur de notre mise en page. Tout élément enfant y est contenu.

Le problème lié à l'utilisation de `overflow` pour créer un nouveau contexte de formatage de blocs est que la propriété `overflow` sert à indiquer au navigateur comment gérer le contenu qui déborde. Dans certains cas, cette propriété peut produire des barres de défilement indésirables ou tronquer les ombres lorsqu'elle sert uniquement à créer un contexte de formatage de blocs. De plus, ce choix peut manquer de clarté pour une personne qui développe le code plus tard, car la raison d'utiliser `overflow` à cette fin peut ne pas être évidente. Si vous utilisez `overflow`, commentez le code pour l'expliquer.

**utiliser `display: flow-root`**

La valeur `display: flow-root` permet de créer un nouveau contexte de formatage de blocs sans autre effet secondaire potentiellement problématique. Utiliser `display: flow-root` sur le bloc englobant crée un nouveau contexte de formatage de blocs.

Avec `display: flow-root;` sur l'élément `<div>`, tout ce qui se trouve dans ce conteneur participe au contexte de formatage de blocs de ce conteneur et les éléments flottants ne dépassent pas le bas de l'élément.

Le nom de la valeur `flow-root` prend son sens lorsque vous comprenez que vous créez quelque chose qui se comporte comme l'élément `root` (l'élément `<html>` dans le navigateur) pour créer un nouveau contexte destiné à la mise en page dans le flux qu'il contient.

#### HTML

```html
<section>
  <div class="boite1">
    <div class="float">Je suis une boîte flottante&nbsp;!</div>
    <p>Je suis du contenu dans le conteneur.</p>
  </div>
</section>
<section>
  <div class="boite2">
    <div class="float">Je suis une boîte flottante&nbsp;!</div>
    <p>Je suis du contenu dans le conteneur <code>overflow:auto</code>.</p>
  </div>
</section>
<section>
  <div class="boite3">
    <div class="float">Je suis une boîte flottante&nbsp;!</div>
    <p>Je suis du contenu dans le conteneur <code>display:flow-root</code>.</p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.boite1 {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.boite2,
.boite3 {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.boite2 {
  overflow: auto;
}
.boite3 {
  display: flow-root;
}
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 50%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Contenir les éléments flottants internes", 200, 480)}}

### Exclure les éléments flottants externes

Dans l'exemple suivant, nous utilisons `display: flow-root` et des éléments flottants pour créer deux boîtes côte à côte. Elles montrent qu'un élément dans le flux normal établit un nouveau contexte de formatage de blocs et ne chevauche pas la boîte de marge des éléments flottants qui se trouvent dans le même contexte de formatage de blocs que l'élément lui-même.

#### HTML

```html
<section>
  <div class="float">
    Essayez de redimensionner cet élément flottant externe
  </div>
  <div class="boite"><p>Normal</p></div>
</section>
<section>
  <div class="float">
    Essayez de redimensionner cet élément flottant externe
  </div>
  <div class="boite2">
    <p><code>display:flow-root</code></p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.boite {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.boite2 {
  background-color: aliceblue;
  border: 5px solid steelblue;
  display: flow-root;
}
.float {
  float: left;
  overflow: hidden; /* requis par resize:both */
  resize: both;
  margin-right: 25px;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 75%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Contenir les éléments flottants internes", 200, 330)}}

### Empêcher l'effondrement des marges

Vous pouvez créer un nouveau contexte de formatage de blocs pour éviter [l'effondrement des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing) entre deux éléments voisins.

#### Exemple d'effondrement des marges

Dans cet exemple, nous avons deux éléments HTML {{HTMLElement("div")}} adjacents, qui ont chacun une marge verticale de `10px`. À cause de l'effondrement des marges, l'écart vertical entre eux est de `10px`, et non de `20px` comme nous pourrions nous y attendre.

```html
<div class="bleu"></div>
<div class="rouge"></div>
```

```css
.bleu,
.rouge {
  height: 50px;
  margin: 10px 0;
}

.bleu {
  background: blue;
}

.rouge {
  background: red;
}
```

{{EmbedLiveSample("Exemple d'effondrement des marges", 120, 170)}}

#### Empêcher l'effondrement des marges

Dans cet exemple, nous plaçons le deuxième élément `<div>` dans un élément `<div>` externe et créons un nouveau contexte de formatage de blocs en utilisant `overflow: hidden` sur l'élément `<div>` externe. Ce nouveau contexte de formatage de blocs empêche les marges de l'élément `<div>` imbriqué de s'effondrer avec celles de l'élément `<div>` externe.

```html
<div class="bleu"></div>
<div class="exterieur">
  <div class="rouge"></div>
</div>
```

```css
.bleu,
.rouge {
  height: 50px;
  margin: 10px 0;
}

.bleu {
  background: blue;
}

.rouge {
  background: red;
}

.exterieur {
  overflow: hidden;
  background: transparent;
}
```

{{EmbedLiveSample("Empêcher l'effondrement des marges 2", 120, 170)}}

## Spécifications

{{Specifications}}

## Voir aussi

- [La syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- [Modes de mise en page](/fr/docs/Glossary/Layout_mode)
- [Modèles de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Effondrement des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initial](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale), [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée), [valeurs utilisées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) et [valeurs réelles](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- L'entrée de glossaire {{Glossary("Replaced elements", "Éléments remplacés")}}
