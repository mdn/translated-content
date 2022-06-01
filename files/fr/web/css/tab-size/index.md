---
title: tab-size
slug: Web/CSS/tab-size
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/tab-size
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`tab-size`** permet d'adapter la largeur utilisée pour représenter le caractère de tabulation (`U+0009`).

```css
/* Valeurs entières */
/* Type <integer>   */
tab-size: 4;
tab-size: 0;

/* Valeurs de longueurs */
/* Type <length>        */
tab-size: 10px;
tab-size: 2em;

/* Valeurs globales */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
```

{{cssinfo}}

## Syntaxe

### Valeurs

- {{cssxref("&lt;integer&gt;")}}
  - : Le nombre d'espaces qu'occupe une tabulation. La valeur doit être positive.
- {{cssxref("&lt;length&gt;")}}
  - : La largeur de la tabulation. La valeur doit être positive.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<pre class="exemple">
	print "tabulation avant"
    print "4 espaces avant"
  print "2 espaces avant"
</pre>
```

### CSS

```css
.exemple {
  tab-size: 5;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('CSS3 Text', '#tab-size-property', 'tab-size')}} | {{Spec2('CSS3 Text')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.properties.tab-size")}}

## Voir aussi

- [Contrôler la taille du caractère de tabulation (U+0009)](http://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html), un e-mail d'Anne van Kesteren pour le CSSWG afin de proposer la standardisation de cette propriété (en anglais).
