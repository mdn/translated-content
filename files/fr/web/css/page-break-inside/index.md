---
title: page-break-inside
slug: Web/CSS/page-break-inside
---

{{CSSRef}}

> **Attention :** Cette propriété a été remplacée par la propriété {{cssxref("break-inside")}}.

La propriété **`page-break-inside`** ajuste la façon dont sont appliqués les sauts de page au sein de l'élément courant.

```css
/* Valeurs avec un mot-clé */
page-break-inside: auto;
page-break-inside: avoid;

/* Valeurs globales */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: unset;
```

## Syntaxe

### Valeurs

- `auto`
  - : Valeur initiale. Les sauts de page sont automatiques (ni forcés, ni interdits).
- `avoid`
  - : L'agent utilisateur évite d'insérer un saut de page au sein de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Alias avec `break-inside`

La propriété `page-break-inside` a désormais été remplacée par la propriété {{cssxref("break-inside")}}.

Pour des raisons de compatibilité, `page-break-inside` devrait être considérée par les navigateurs comme synonyme de `break-inside`. De cette façon, les sites utilisant `page-break-inside` pourront continuer de fonctionner. Voici un sous-ensemble des valeurs de cette propriété et des correspondances

| `page-break-inside` | `break-inside` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `avoid`             | `avoid`        |

## Exemples

### HTML

```html
<div class="page">
  <p>Un premier paragraphe.</p>
  <section class="list">
    <span>Une liste</span>
    <ol>
      <li>Un</li>
      <!-- <li>Deux</li> -->
    </ol>
  </section>
  <ul>
    <li>Un</li>
    <!-- <li>Deux</li> -->
  </ul>
  <p>Un deuxième paragraphe.</p>
  <p>Un troisième paragraphe, un peu plus long.</p>
  <p>
    Un quatrième paragraphe, un peu plus long voire plus long que le troisième.
  </p>
</div>
```

### CSS

```css
.page {
  background-color: #8cffa0;
  height: 90px;
  width: 200px;
  columns: 1;
  column-width: 100px;
}

.list,
ol,
ul,
p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol,
ul,
.list {
  margin: 0.5em 0;
  display: block;
  background-color: orange;
}

p:first-child {
  margin-top: 0;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 400, 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("break-before")}}
- {{cssxref("break-after")}}
- {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}
- {{cssxref("page-break-before")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}
