---
title: object-position
slug: Web/CSS/object-position
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/object-position
---
{{CSSRef}}

La propriété **`object-position`** détermine l'alignement d'un [élément remplacé](/fr/docs/Web/CSS/%C3%89l%C3%A9ment_remplac%C3%A9) au sein de sa boîte. Les zones de la boîtes qui ne sont pas recouvertes par le contenu de l'élément remplacé montreront l'arrière-plan de l'élément.

{{EmbedInteractiveExample("pages/css/object-position.html")}}

> **Note :** Il est possible d'ajuster la taille de l'élément remplacé au sein de la boîte de l'élément grâce à la propriété {{cssxref("object-fit")}}.

## Syntaxe

```css
/* Valeurs de positionnement */
/* Type <position>           */
object-position: center top;
object-position: 100px 50px;

/* Valeurs globales */
object-position: inherit;
object-position: initial;
object-position: unset;
```

### Valeurs

- `<position>`
  - : Une valeur de type {{cssxref("&lt;position&gt;")}}, c'est-à-dire une à quatre valeurs permettant de définir une position en deux dimensions par rapport aux limites de la boîte dans laquelle est placé l'élément. On peut donner des décalages absolus ou relatifs. On notera que la position peut être définie en dehors de la boîte de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<img id="object-position-1" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/>
<img id="object-position-2" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/>
```

### CSS

```css
img {
   width: 300px;
   height: 250px;
   border: 1px solid black;
   background-color: silver;
   margin-right: 1em;
   object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '100%','300px')}}

## Spécifications

| Spécification                                                                                | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Images', '#the-object-position', 'object-position')}} | {{Spec2('CSS3 Images')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.object-position")}}

## Voir aussi

- Les autres propriétés CSS liées aux images :

  - {{cssxref("object-fit")}}
  - {{cssxref("image-orientation")}}
  - {{cssxref("image-rendering")}}
  - {{cssxref("image-resolution")}}
