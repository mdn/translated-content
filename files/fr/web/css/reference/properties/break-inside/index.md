---
title: break-inside
slug: Web/CSS/Reference/Properties/break-inside
l10n:
  sourceCommit: 18161d1b77cdfdc739a4f05be695961924b4c173
---

La propriété [CSS](/fr/docs/Web/CSS) **`break-inside`** définit la façon dont les sauts de page, de colonne ou de région doivent se comporter à l'intérieur d'une boîte générée. Si aucune boîte n'est générée, la propriété est ignorée.

{{InteractiveExample("Démonstration CSS&nbsp;: break-inside")}}

```css interactive-example-choice
break-inside: auto;
```

```css interactive-example-choice
break-inside: avoid;
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
      Contenu avec «&nbsp;break-inside&nbsp;»
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

@media print {
  #example-element {
    height: 25cm;
  }
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
/* Valeurs avec un mot-clé */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* Valeurs globales */
break-inside: inherit;
break-inside: initial;
break-inside: revert;
break-inside: revert-layer;
break-inside: unset;
```

Chaque point de rupture éventuel (c'est-à-dire chaque frontière d'élément) est influencé par trois propriétés&nbsp;: la valeur de {{CSSxRef("break-after")}} de l'élément précédent, la valeur de {{CSSxRef("break-before")}} de l'élément suivant et la valeur de `break-inside` de l'élément englobant.

Pour déterminer si on a une rupture, on applique les règles suivantes&nbsp;:

1. Si l'une des trois valeurs correspond à une rupture forcée (`always`, `left`, `right`, `page`, `column` ou `region`), cette valeur l'emporte. Si plusieurs valeurs décrivent une rupture forcée, c'est celle de l'élément qui apparaît le plus tard dans le flux qui est prise en compte (autrement dit, {{CSSxRef("break-before")}} l'emporte sur {{CSSxRef("break-after")}} qui l'emporte sur `break-inside`).
2. Si l'une des trois valeurs correspond à une valeur visant à éviter une rupture (`avoid`, `avoid-page`, `avoid-region` ou `avoid-column`), aucune rupture ne sera appliquée à cet endroit.

Une fois que des ruptures forcées ont été appliquées, des ruptures douces peuvent être ajoutées si nécessaire, mais pas sur les frontières des éléments qui se résolvent par une valeur `avoid` correspondante.

### Valeurs

- `auto`
  - : Cette valeur n'interdit ni ne force une rupture (pour une page, une colonne ou une région).
- `avoid`
  - : Cette valeur interdit toute rupture (de page, de colonne ou de région) dans la boîte principale.
- `avoid-page`
  - : Cette valeur interdit toute rupture de page au sein de la boîte.
- `avoid-column`
  - : Cette valeur interdit toute rupture de colonne au sein de la boîte.
- `avoid-region`
  - : Cette valeur interdit toute rupture de région au sein de la boîte.

## Alias de saut de page

Pour des raisons de compatibilité, la propriété historique {{CSSxRef("page-break-inside")}} doit être traitée par les navigateurs comme un alias de `break-inside`. Cela garantit que les sites utilisant `page-break-inside` continuent de fonctionner comme prévu. Un sous-ensemble de valeurs doit être associé comme suit&nbsp;:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Éviter une rupture à l'intérieur d'une figure

Dans l'exemple suivant, nous avons un conteneur qui contient un `<h1>` s'étendant sur toutes les colonnes (réalisé avec `column-span: all`) et une série de paragraphes disposés en plusieurs colonnes grâce à `column-width: 200px`. Nous avons aussi un `<figure>` contenant une image et une légende.

Par défaut, il est possible d'obtenir une rupture entre l'image et sa légende, ce qui n'est pas souhaité. Pour éviter cela, nous avons appliqué `break-inside: avoid` sur le `<figure>`, ce qui les maintient toujours ensemble.

#### HTML

```html
<article>
  <h1>Titre principal</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec
    lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus.
    Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque
    dapibus, eu lacinia lectus dictum.
  </p>

  <figure>
    <img
      src="https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png" />
    <figcaption>Le logo Firefox — un renard entourant le monde</figcaption>
  </figure>

  <p>
    Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras
    suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur
    a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non
    vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie
    nec nisi.
  </p>

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

body {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h1 + p {
  margin-top: 0;
}

p {
  line-height: 1.5;
  break-after: column;
}

figure {
  break-inside: avoid;
}

img {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.8rem;
  width: 70%;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

### Résultat

{{EmbedLiveSample("Éviter une rupture à l'intérieur d'une figure", "100%", 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Mise en page multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation <sup>(angl.)</sup>](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
