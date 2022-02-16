---
title: list-style-image
slug: Web/CSS/list-style-image
translation_of: Web/CSS/list-style-image
---
{{CSSRef}}

La propriété **`list-style-image`** définit l'image utilisée comme puce devant les [éléments de listes](fr/HTML/%c3%89l%c3%a9ment/li). On peut également utiliser la propriété raccourcie {{cssxref("list-style")}}.

{{EmbedInteractiveExample("pages/css/list-style-image.html")}}

> **Note :** Cette propriété s'applique aux éléments d'une liste (c'est-à-dire aux éléments pour lesquels {{cssxref("display")}}` : list-item``; `}}). Par défaut, cela inclut les éléments {{HTMLElement("li")}}. Cette propriété peut être héritée par les éléments et si on veut donc gérer une liste de façon uniforme, on pourra appliquer la propriété à l'élément parent (qui correspond en général à {{HTMLElement("ol")}} ou à {{HTMLElement("ul")}}).

## Syntaxe

```css
/* Valeurs avec un mot-clé*/
list-style-image: none;

/*  Valeurs pointant vers une image */
list-style-image: url('starsolid.gif');

/* Valeurs globales */
list-style-image: inherit;
list-style-image: initial;
list-style-image: unset;
```

### Valeurs

- `url`
  - : Emplacement de l'image à utiliser comme puce (cf. {{cssxref("&lt;url&gt;")}} pour plus de détails sur les valeurs possibles pour ce type).
- `none`
  - : Aucune image ne sera utilisée comme puce. Si cette valeur est définie, le marqueur défini avec {{cssxref("list-style-type")}} sera utilisé à la place.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
ul {
  list-style-image: url("https://mdn.mozillademos.org/files/11981/starsolid.gif");
}
```

### HTML

```html
<ul>
    <li>Élément 1</li>
    <li>Élément 2</li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Lists', '#propdef-list-style-image', 'list-style-image')}}             | {{Spec2('CSS3 Lists')}} | Propriété étendue pour supporter n'importe quel type {{cssxref("&lt;image&gt;")}}. |
| {{SpecName('CSS2.1', 'generate.html#propdef-list-style-image', 'list-style-image')}} | {{Spec2('CSS2.1')}}         | Définition initiale.                                                                       |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.list-style-image")}}

## Voir aussi

- {{cssxref("list-style")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- La fonction {{cssxref("url()", "url()")}}
