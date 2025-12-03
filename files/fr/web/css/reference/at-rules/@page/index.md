---
title: "@page"
slug: Web/CSS/Reference/At-rules/@page
original_slug: Web/CSS/@page
l10n:
  sourceCommit: c699955e1e368bd42d6ea9318a6afc9256c3036f
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@page`** est utilisée pour modifier différents aspects des pages imprimées. Elle permet de cibler et de modifier les dimensions, l'orientation et les marges de la page. La règle `@page` peut s'appliquer à toutes les pages d'une impression ou à un sous-ensemble grâce à ses différentes pseudo-classes.

## Syntaxe

```css
/* Cible toutes les pages */
@page {
  size: 8.5in 9in;
  margin-top: 4in;
}

/* Cible toutes les pages paires */
@page :left {
  margin-top: 4in;
}

/* Cible toutes les pages impaires */
@page :right {
  size: 11in;
  margin-top: 4in;
}

/* Cible tous les sélecteurs avec `page: wide;` défini */
@page wide {
  size: a4 landscape;
}

@page {
  /* zone de marge en haut à droite affichant le numéro de page */
  @top-right {
    content: "Page " counter(pageNumber);
  }
}
```

### Propriétés de page

La règle `@page` ne peut contenir que des descripteurs de page et des [règles de marge](#règles_de_marge). Les descripteurs suivants ont été implémentés par au moins un navigateur&nbsp;:

- [`margin`](/fr/docs/Web/CSS/Reference/Properties/margin)
  - : Définit les marges de la page. Les propriétés individuelles [`margin-top`](/fr/docs/Web/CSS/Reference/Properties/margin-top), [`margin-right`](/fr/docs/Web/CSS/Reference/Properties/margin-right), [`margin-bottom`](/fr/docs/Web/CSS/Reference/Properties/margin-bottom) et [`margin-left`](/fr/docs/Web/CSS/Reference/Properties/margin-left) peuvent aussi être utilisées.
- [`page-orientation`](/fr/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : Définit l'orientation de la page. Cela n'affecte pas la mise en page&nbsp;: la rotation est appliquée après la mise en page sur le support de sortie.
- [`size`](/fr/docs/Web/CSS/Reference/At-rules/@page/size)
  - : Définit la taille cible et l'orientation du bloc englobant de la boîte de page. Dans le cas général, où une boîte de page est rendue sur une feuille de page, cela indique aussi la taille de la feuille de destination.

La spécification mentionne que les propriétés CSS suivantes pourraient s'appliquer aux boîtes de page via la règle @page. Cependant, elles ne sont _pas encore prises en charge_ par les navigateurs.

<details>
<summary>Propriétés de page restantes</summary>

| Fonctionnalités       | Propriétés CSS        |
| --------------------- | --------------------- |
| propriétés bidi       | direction             |
| propriétés background | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| propriétés border     | border-top-width      |
|                       | border-right-width    |
|                       | border-bottom-width   |
|                       | border-left-width     |
|                       | border-width          |
|                       | border-top-color      |
|                       | border-right-color    |
|                       | border-bottom-color   |
|                       | border-left-color     |
|                       | border-color          |
|                       | border-top-style      |
|                       | border-right-style    |
|                       | border-bottom-style   |
|                       | border-left-style     |
|                       | border-short-style    |
|                       | border-top            |
|                       | border-right          |
|                       | border-bottom         |
|                       | border-left           |
|                       | border                |
| propriétés counter    | counter-reset         |
|                       | counter-increment     |
| color                 | color                 |
| propriétés font       | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| propriétés height     | height                |
|                       | min-height            |
|                       | max-height            |
| line height           | line-height           |
| propriétés margin     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| propriétés outline    | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| propriétés padding    | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| quotes                | quotes                |
| propriétés text       | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| visibility            | visibility            |
| propriétés width      | width                 |
|                       | min-width             |
|                       | max-width             |

</details>

## Description

La règle @page définit les propriétés de la boîte de page. La règle `@page` est accessible via l'interface du modèle objet CSS {{domxref("CSSPageRule")}}.

> [!NOTE]
> Le W3C discute de la gestion des unités {{cssxref("&lt;length&gt;")}} liées à la zone d'affichage (<i lang="en">viewport</i>)&nbsp;: `vh`, `vw`, `vmin` et `vmax`. En attendant, il est déconseillé de les utiliser dans une règle `@page`.

### Propriétés associées

La règle `@page` permet d'attribuer un nom à la règle, qui pourra ensuite être utilisé dans une déclaration via la propriété `page`.

- {{Cssxref("page")}}
  - : Permet à un sélecteur d'utiliser une **page nommée** définie par l'utilisateur·ice.

## Syntaxe formelle

{{csssyntax}}

Où `<page-body>` inclut&nbsp;:

- page-properties
- page-margin properties

et `<pseudo-page>` représente ces pseudo-classes&nbsp;:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Règles de marge

Les règles de marge sont utilisées à l'intérieur de la règle `@page`. Chacune cible une section différente de la page imprimée, en stylisant la zone de la page imprimée selon les valeurs définies dans le bloc de style&nbsp;:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** cible le coin supérieur gauche du document et applique les modifications selon les propriétés de marge définies.

Les autres règles de marge incluent&nbsp;:

```css-nolint
@top-left-corner
@top-left
@top-center
@top-right
@top-right-corner
@bottom-left-corner
@bottom-left
@bottom-center
@bottom-right
@bottom-right-corner
@left-top
@left-middle
@left-bottom
@right-top
@right-middle
@right-bottom
```

### Propriétés de marge de page

Les propriétés de marge de page sont l'ensemble des propriétés CSS pouvant être définies dans une règle de marge individuelle. Elles incluent&nbsp;:

<details>
<summary>Propriétés de marge de page</summary>

| Fonctionnalités       | Propriétés CSS        |
| --------------------- | --------------------- |
| propriétés bidi       | direction             |
| propriétés background | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| propriétés border     | border-top-width      |
|                       | border-right-width    |
|                       | border-bottom-width   |
|                       | border-left-width     |
|                       | border-width          |
|                       | border-top-color      |
|                       | border-right-color    |
|                       | border-bottom-color   |
|                       | border-left-color     |
|                       | border-color          |
|                       | border-top-style      |
|                       | border-right-style    |
|                       | border-bottom-style   |
|                       | border-left-style     |
|                       | border-short-style    |
|                       | border-top            |
|                       | border-right          |
|                       | border-bottom         |
|                       | border-left           |
|                       | border                |
| propriétés counter    | counter-reset         |
|                       | counter-increment     |
| content               | content               |
| color                 | color                 |
| propriétés font       | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| propriétés height     | height                |
|                       | min-height            |
|                       | max-height            |
| line height           | line-height           |
| propriétés margin     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| propriétés outline    | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| propriétés padding    | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| quotes                | quotes                |
| propriétés text       | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| vertical alignment    | vertical-align        |
| visibility            | visibility            |
| propriétés width      | width                 |
|                       | min-width             |
|                       | max-width             |
| z-index               | z-index               |

</details>

## Pages nommées

Les pages nommées permettent de réaliser une mise en page par page et d'ajouter des [sauts de page](/fr/docs/Web/CSS/Guides/Fragmentation) de manière déclarative lors de l'impression.

Les pages nommées peuvent être appliquées à l'aide de la propriété {{Cssxref("page")}}. Cela permet de créer différentes configurations de page à utiliser dans les mises en page d'impression.

Un exemple de ceci se trouve dans les exemples de la page [`page`](/fr/docs/Web/CSS/page#exemples).

## Exemples

### Utiliser la propriété size pour changer l'orientation de la page

Cet exemple montre comment diviser les `<section>` en pages individuelles au format `landscape`, chaque page ayant une marge de 20&nbsp;% lors de l'impression.
Cliquer sur le bouton d'impression ouvrira la boîte de dialogue d'impression avec les sections HTML réparties sur des pages distinctes.

```html live-sample___page-size
<button>Print page</button>
<article>
  <section>
    <h2>Header one</h2>
    <p>Paragraph one.</p>
  </section>
  <section>
    <h2>Header two</h2>
    <p>Paragraph two.</p>
  </section>
  <section>
    <h2>Header three</h2>
    <p>Paragraph three.</p>
  </section>
</article>
```

```js live-sample___page-size
const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.print();
});
```

```css live-sample___page-size
@page {
  size: landscape;
  margin: 2cm;
}

section {
  page-break-after: always;
  break-after: page;
}

@media print {
  button {
    display: none;
  }
}
```

```css hidden live-sample___page-size
body {
  font-family: "Helvetica", sans-serif;
  background-color: silver;
}

article {
  width: 100%;
}

section {
  display: grid;
  background-color: white;
  border-radius: 0.6rem;
  justify-items: center;
  padding: 1rem;
  width: 50%;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  margin: 0 auto;
  margin-block-end: 1rem;
  border: 1px dashed;
}
```

{{EmbedLiveSample('utiliser_la_propriété_size_pour_changer_lorientation_de_la_page', '100%', '540', , , , , "allow-modals")}}

### Exemples de pseudo-classes @page

Voir les différentes [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) de `@page` pour des exemples.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{cssxref("page")}}
- Le descripteur [`size`](/fr/docs/Web/CSS/Reference/At-rules/@page/size) de `@page`
- Le module [Médias paginés CSS](/fr/docs/Web/CSS/Guides/Paged_media)
- Le ticket [\[META\] CSS Paged Media Module Level 3 <sup>(angl.)</sup>](https://bugzil.la/286443) du Bugzilla pour suivre l'avancement du sujet (compteurs par page, etc.)
