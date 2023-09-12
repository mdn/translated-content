---
title: break-before
slug: Web/CSS/break-before
---

{{CSSRef}}

La propriété **`break-before`** décrit la façon dont la page, la colonne ou la région se fragmente avant la boîte générée. S'il n'y a aucune boîte générée, la propriété est ignorée.

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
break-before: unset;
```

Chaque point de rupture éventuel (c'est-à-dire chaque frontière d'élément) est influencé par trois propriétés&nbsp;: la valeur de [`break-after`](/fr/docs/Web/CSS/break-after) de l'élément précédent, la valeur de `break-before` de l'élément suivant et la valeur de [`break-inside`](/fr/docs/Web/CSS/break-inside) de l'élément englobant.

Pour déterminer si on a une rupture, on applique les règles suivantes&nbsp;:

1. Si l'une des trois valeurs correspond à une rupture forcée (`always`, `left`, `right`, `page`, `column` ou `region`), cette valeur l'emporte. Si plusieurs valeurs décrivent une rupture forcée, c'est celle de l'élément qui apparaît le plus tard dans le flux qui est prise en compte (autrement dit, `break-before` l'emporte sur `break-after`, qui l'emporte sur `break-inside`).
2. Si l'une des trois valeurs correspond à une valeur visant à éviter une rupture (`avoid`, `avoid-page`, `avoid-region` ou `avoid-column`), aucune rupture ne sera appliquée à cet endroit.

Une fois que les ruptures forcées ont été appliquées, le moteur peut ajouter des ruptures «&nbsp;douces&nbsp;» sauf aux endroits où les propriétés empêchent les ruptures.

## Syntaxe

La propriété `break-before` se paramètre avec un des mots-clés définis ci-après.

### Valeurs

#### Valeurs de rupture génériques

- `auto`
  - : Valeur initiale qui ne force ni n'interdit de rupture (de page, de colonne ou de région) avant la boîte.
- `avoid`
  - : Empêche toute rupture (de page, de colonne ou de région) avant la boîte.
- `always` {{experimental_inline}}
  - : Force la rupture juste avant la boîte principale. Le type de rupture dépend du contexte de fragmentation englobant l'élément. Si l'élément est situé dans un conteneur multi-colonne, une rupture de colonne sera ajoutée. Si l'élément est situé dans un média paginé (mais pas dans un conteneur multi-colonnes), la rupture introduite sera une rupture de page.
- `all` {{experimental_inline}}
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
- `recto` {{experimental_inline}}
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page recto (une page droite pour le sens de lecture gauche à droite et une page gauche pour le sens de lecture droite à gauche).
- `verso` {{experimental_inline}}
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page verso (une page gauche pour le sens de lecture gauche à droite et une page droite pour le sens de lecture droite à gauche).

#### Valeurs de ruptures relatives aux dispositions en colonnes

- `avoid-column`
  - : Empêche toute rupture de colonne avant la boîte de l'élément.
- `column`
  - : Force une rupture de colonne de page avant la boîte de l'élément.

#### Valeurs de ruptures relatives aux régions

- `avoid-region` {{experimental_inline}}
  - : Empêche toute rupture de région avant la boîte de l'élément.
- `region` {{experimental_inline}}
  - : Force une rupture de région avant la boîte de l'élément.

## Alias/synonymes pour les ruptures de page

Pour des raisons de compatibilité, la propriété historique [`page-break-before`](/fr/docs/Web/CSS/page-break-before) devrait être considérée par les navigateurs comme un synonyme de `break-before`. Cela permet aux sites utilisant `page-break-before` de continuer à fonctionner comme précédemment. Voici un sous-ensemble des valeurs avec leurs alias&nbsp;:

| `page-break-before` | `break-before` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `left`              | `left`         |
| `right`             | `right`        |
| `avoid`             | `avoid`        |
| `always`            | `page`         |

> **Note :** La valeur `always` pour `page-break-*` a été implémentée par les navigateurs comme une rupture de page et non comme une rupture de colonne. C'est pourquoi l'alias ici utilisé est `page` et non `always`.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

Dans l'exemple qui suit, on a un conteneur qui contient un élément `<h1>` qui s'étend sur l'ensemble des colonnes (grâce à `column-span: all`) et un ensemble d'éléments `<h2>` et de paragraphes disposés sur les différentes colonnes avec `column-width: 200px`.

Par défaut, les sous-titres et les paragraphes auraient été disposés de façon chaotique en raison de l'emplacement non-uniforme des titres. Cependant, en utilisant `break-before: column` sur les éléments `<h2>`, on force une rupture de colonne avant chaque sous-titre et on obtient ainsi leur positionnement en début de colonne (pour les navigateurs compatibles).

### HTML

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

### CSS

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

### Résultat

{{EmbedLiveSample('', '100%', '600')}}

## Spécifications

{{Specifications("css.properties.break-before.multicol_context")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Disposition sur plusieurs colonnes](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
