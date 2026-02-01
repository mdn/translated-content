---
title: break-before
slug: Web/CSS/Reference/Properties/break-before
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`break-before`** définit la façon dont les sauts de page, de colonne ou de région doivent se comporter avant une boîte générée. Si aucune boîte n'est générée, la propriété est ignorée.

{{InteractiveExample("Démonstration CSS&nbsp;: break-before")}}

```css interactive-example-choice
break-before: auto;
```

```css interactive-example-choice
break-before: page;
```

```html interactive-example
<div>
  <p>
    L'effet de cette propriété peut être observé lors de l'impression du
    document ou de l'affichage d'un aperçu avant impression.
  </p>
  <button id="print-btn">Afficher l'aperçu avant impression</button>
  <div class="box-container">
    <div class="box">Contenu avant la propriété</div>
    <div class="box" id="example-element">
      Contenu avec «&nbsp;break-before&nbsp;»
    </div>
    <div class="box">Contenu après la propriété</div>
  </div>
</div>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
});
```

## Syntaxe

```css
/* Valeurs de rupture génériques */
break-before: auto;
break-before: avoid;
break-before: always;
break-before: all;

/* Valeurs de rupture pour les pages */
break-before: avoid-page;
break-before: page;
break-before: left;
break-before: right;
break-before: recto;
break-before: verso;

/* Valeurs de rupture pour les colonnes */
break-before: avoid-column;
break-before: column;

/* Valeurs de rupture pour les régions */
break-before: avoid-region;
break-before: region;

/* Valeurs globales */
break-before: inherit;
break-before: initial;
break-before: revert;
break-before: revert-layer;
break-before: unset;
```

Chaque point de rupture éventuel (c'est-à-dire chaque frontière d'élément) est influencé par trois propriétés&nbsp;: la valeur de {{CSSxRef("break-after")}} de l'élément précédent, la valeur de `break-before` de l'élément suivant et la valeur de {{CSSxRef("break-inside")}} de l'élément englobant.

Pour déterminer si on a une rupture, on applique les règles suivantes&nbsp;:

1. Si l'une des trois valeurs correspond à une rupture forcée (`always`, `left`, `right`, `page`, `column` ou `region`), cette valeur l'emporte. Si plusieurs valeurs décrivent une rupture forcée, c'est celle de l'élément qui apparaît le plus tard dans le flux qui est prise en compte (autrement dit, `break-before` l'emporte sur `break-after`, qui l'emporte sur `break-inside`).
2. Si l'une des trois valeurs correspond à une valeur visant à éviter une rupture (`avoid`, `avoid-page`, `avoid-region` ou `avoid-column`), aucune rupture ne sera appliquée à cet endroit.

Une fois que des ruptures forcées ont été appliquées, des ruptures douces peuvent être ajoutées si nécessaire, mais pas sur les frontières des éléments qui se résolvent par une valeur `avoid` correspondante.

### Valeurs

#### Valeurs de rupture génériques

- `auto`
  - : Valeur initiale qui ne force ni n'interdit de rupture (de page, de colonne ou de région) avant la boîte.
- `avoid`
  - : Empêche toute rupture (de page, de colonne ou de région) avant la boîte.
- `always`
  - : Force la rupture juste avant la boîte principale. Le type de rupture dépend du contexte de fragmentation englobant l'élément. Si l'élément est situé dans un conteneur multi-colonne, une rupture de colonne sera ajoutée. Si l'élément est situé dans un média paginé (mais pas dans un conteneur multi-colonnes), la rupture introduite sera une rupture de page.
- `all`
  - : Force la rupture juste avant la boîte principale. La rupture a lieu pour l'ensemble des contextes de fragmentation. Ainsi si l'élément concerné est dans un conteneur multi-colonnes dans un média paginé, il y aura une rupture de colonne et une rupture de page.

#### Valeurs de rupture liées aux médias paginés

- `avoid-page`
  - : Empêche toute saut de page avant la boîte de l'élément.
- `page`
  - : Force un saut de page avant la boîte de l'élément
- `left`
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page gauche.
- `right`
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page droite.
- `recto`
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page recto (une page droite pour le sens de lecture gauche à droite et une page gauche pour le sens de lecture droite à gauche).
- `verso`
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page verso (une page gauche pour le sens de lecture gauche à droite et une page droite pour le sens de lecture droite à gauche).

#### Valeurs de ruptures relatives aux dispositions en colonnes

- `avoid-column`
  - : Empêche toute rupture de colonne avant la boîte de l'élément.
- `column`
  - : Force une rupture de colonne de page avant la boîte de l'élément.

#### Valeurs de ruptures relatives aux régions

- `avoid-region`
  - : Empêche toute rupture de région avant la boîte de l'élément.
- `region`
  - : Force une rupture de région avant la boîte de l'élément.

## Alias de saut de page

Pour des raisons de compatibilité, la propriété historique {{CSSxRef("page-break-before")}} doit être traitée par les navigateurs comme un alias de `break-before`. Cela garantit que les sites utilisant `page-break-before` continuent de fonctionner comme prévu. Un sous-ensemble de valeurs doit être associé comme suit&nbsp;:

| `page-break-before` | `break-before` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `left`              | `left`         |
| `right`             | `right`        |
| `avoid`             | `avoid`        |
| `always`            | `page`         |

> [!NOTE]
> La valeur `always` pour `page-break-*` a été implémentée par les navigateurs comme une rupture de page et non comme une rupture de colonne. C'est pourquoi l'alias ici utilisé est `page` et non `always`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Découper en colonnes propres

Dans l'exemple qui suit, on a un conteneur qui contient un élément `<h1>` qui s'étend sur l'ensemble des colonnes (grâce à `column-span: all`) et un ensemble d'éléments `<h2>` et de paragraphes disposés sur les différentes colonnes avec `column-width: 200px`.

Par défaut, les sous-titres et les paragraphes auraient été disposés de façon chaotique en raison de l'emplacement non-uniforme des titres. Cependant, en utilisant `break-before: column` sur les éléments `<h2>`, on force une rupture de colonne avant chaque sous-titre et on obtient ainsi leur positionnement en début de colonne (pour les navigateurs compatibles).

#### HTML

```html
<article>
  <h1>Titre principal</h1>

  <h2>Sous-titre</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec
    lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus.
    Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque
    dapibus, eu lacinia lectus dictum.
  </p>

  <h2>Sous-titre</h2>

  <p>
    Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras
    suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur
    a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non
    vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie
    nec nisi.
  </p>

  <h2>Sous-titre</h2>

  <p>
    Vivamus eleifend metus vitae neque placerat, eget interdum elit mattis.
    Donec eu vulputate nibh. Ut turpis leo, malesuada quis nisl nec, volutpat
    egestas tellus.
  </p>

  <h2>Sous-titre</h2>

  <p>
    In finibus viverra enim vel suscipit. Quisque consequat velit eu orci
    malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam
    risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl,
    sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.
  </p>
</article>
```

#### CSS

```css
html {
  font-family: Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h2 {
  font-size: 1.2rem;
  color: red;
  letter-spacing: 1px;
  break-before: column;
}

p {
  line-height: 1.5;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

#### Résultat

{{EmbedLiveSample("Découper en colonnes propres", "100%", 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Mise en page multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation <sup>(angl.)</sup>](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
