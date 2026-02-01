---
title: break-after
slug: Web/CSS/Reference/Properties/break-after
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`break-after`** définit la façon dont les sauts de page, de colonne ou de région doivent se comporter après une boîte générée. Si aucune boîte n'est générée, la propriété est ignorée.

{{InteractiveExample("Démonstration CSS&nbsp;: break-after")}}

```css interactive-example-choice
break-after: auto;
```

```css interactive-example-choice
break-after: page;
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
      Contenu avec «&nbsp;break-after&nbsp;»
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
break-after: auto;
break-after: avoid;
break-after: always;
break-after: all;

/* Valeurs de rupture liées aux pages */
break-after: avoid-page;
break-after: page;
break-after: always;
break-after: left;
break-after: right;
break-after: recto;
break-after: verso;

/* Valeurs de rupture liées aux colonnes */
break-after: avoid-column;
break-after: column;

/* Valeurs de rupture liées aux régions */
break-after: avoid-region;
break-after: region;

/* Valeurs globales */
break-after: inherit;
break-after: initial;
break-after: revert;
break-after: revert-layer;
break-after: unset;
```

Chaque point de rupture éventuel (c'est-à-dire chaque frontière d'élément) est influencé par trois propriétés&nbsp;: la valeur de {{CSSxRef("break-after")}} de l'élément précédent, la valeur de {{CSSxRef("break-before")}} de l'élément suivant et la valeur de `break-inside` de l'élément englobant.

Pour déterminer si on a une rupture, on applique les règles suivantes&nbsp;:

1. Si l'une des trois valeurs correspond à une rupture forcée (`always`, `left`, `right`, `page`, `column` ou `region`), cette valeur l'emporte. Si plusieurs valeurs décrivent une rupture forcée, c'est celle de l'élément qui apparaît le plus tard dans le flux qui est prise en compte (autrement dit, {{CSSxRef("break-before")}} l'emporte sur {{CSSxRef("break-after")}} qui l'emporte sur {{CSSxRef("break-inside")}}).
2. Si l'une des trois valeurs correspond à une valeur visant à éviter une rupture (`avoid`, `avoid-page`, `avoid-region`, `avoid-column`), aucune rupture ne sera appliquée à cet endroit.

Une fois que des ruptures forcées ont été appliquées, des ruptures douces peuvent être ajoutées si nécessaire, mais pas sur les frontières des éléments qui se résolvent par une valeur `avoid` correspondante.

### Valeurs

#### Valeurs de rupture génériques

- `auto`
  - : Valeur initiale qui ne force ni n'interdit de rupture (de page, de colonne ou de région) après la boîte.
- `avoid`
  - : Empêche toute rupture (de page, de colonne ou de région) après la boîte.
- `always`
  - : Force la rupture après la boîte principale. Le type de rupture dépend du contexte de fragmentation. Si on est dans un conteneur multi-colonne, il y aura une rupture de colonne et si on est à l'intérieur d'un média paginé, il y aura une rupture de page.
- `all`
  - : Force la rupture de page après la boîte principale. La rupture a lieu quel que soit le contexte de fragmentation. Ainsi, si on a un élément dans un conteneur multi-colonne lui-même situé dans un média paginé, il y aura une rupture de colonne et une rupture de page.

#### Valeurs de rupture liées aux pages

- `avoid-page`
  - : Empêche toute saut de page après la boîte de l'élément.
- `page`
  - : Force un saut de page après la boîte de l'élément.
- `left`
  - : Force un ou deux saut de page après la boîte de l'élément afin que la prochaine page soit une page gauche.
- `right`
  - : Force un ou deux saut de page après la boîte de l'élément afin que la prochaine page soit une page droite.
- `recto`
  - : Force un ou deux sauts de page après la boîte de l'élément afin que la prochaine page soit une page recto (une page droite pour le sens de lecture gauche à droite et une page gauche pour le sens de lecture droite à gauche).
- `verso`
  - : Force un ou deux sauts de page après la boîte de l'élément afin que la prochaine page soit une page verso (une page gauche pour le sens de lecture gauche à droite et une page droite pour le sens de lecture droite à gauche).

#### Valeurs de rupture liées aux colonnes

- `avoid-column`
  - : Empêche toute rupture de colonne après la boîte de l'élément.
- `column`
  - : Force une rupture de colonne de page après la boîte de l'élément.

#### Valeurs de rupture liées aux régions

- `avoid-region`
  - : Empêche toute rupture de région après boîte de l'élément.
- `region`
  - : Force une rupture de région après la boîte de l'élément.

## Alias de saut de page

Pour des raisons de compatibilité, la propriété historique {{CSSxRef("page-break-after")}} doit être traitée par les navigateurs comme un alias de `break-after`. Cela garantit que les sites utilisant `page-break-after` continuent de fonctionner comme prévu. Un sous-ensemble de valeurs doit être associé comme suit&nbsp;:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> La valeur `always` de `page-break-*` a été implémentée par les navigateurs comme une rupture de page, et non comme une rupture de colonne. C'est pourquoi l'alias correspondant est `page`, et non la valeur `always` de la spécification de niveau 4.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Découper en colonnes propres

Dans l'exemple suivant, nous avons un conteneur qui contient un `<h1>` s'étendant sur toutes les colonnes (réalisé avec `column-span: all`) et une série de `<h2>` et de paragraphes disposés en plusieurs colonnes grâce à `column-width: 200px`.

Par défaut, les sous-titres et les paragraphes étaient disposés de manière assez désordonnée car les titres n'étaient pas placés uniformément. Cependant, nous avons utilisé `break-after: column` sur les éléments `<p>` pour forcer un saut de colonne après chacun, ce qui fait que vous obtenez un `<h2>` bien placé en haut de chaque colonne.

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
  font-family: "Helvetica", "Arial", sans-serif;
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
}

p {
  line-height: 1.5;
  break-after: column;
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
- [Fragmenter des boîtes avec la fragmentation CSS <sup>(angl.)</sup>](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
