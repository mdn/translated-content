---
title: z-index
slug: Web/CSS/z-index
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/z-index
---
{{CSSRef}}

La propriété **`z-index`** définit le « _z-order_ » (NdT : « ordre z » n'est pas usité) d'un élément [positionné](/fr/docs/Web/CSS/position) et de ses éléments fils ou de ses éléments flexibles (les enfants d'un élément avec `display: flex`). Lorsque des éléments se chevauchent, le _z-order_ détermine l'ordre des différentes couches que formeront les éléments. Généralement, un élément couvrira un autre élément si sa valeur de  `z-index` est supérieure à celle du deuxième élément.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Pour les boîtes positionnées (celles pour lesquelles `position` est différent de `static`), la propriété `z-index` définit :

1.  Le niveau de la boîte dans la pile par rapport [au contexte d'empilement](/fr/docs/Web/CSS/Comprendre_z-index/L'empilement_de_couches) courant
2.  Si la boîte crée un contexte d'empilement local.

L'exemple ci-avant illustre l'impact de `z-index`. À gauche, on a dessiné trois boîtes qui se chevauchent avec [un positionnement absolu](/fr/docs/Learn/CSS/CSS_layout/Positioning#Absolute_positioning). Par défaut, les éléments sont empilés dans l'ordre dans lequel ils sont déclarés dans le document HTML. À droite, on présente le même document mais l'ordre des couches a été inversé grâce à `z-index`.

## Syntaxe

```css
/* Avec un mot-clé */
z-index: auto;

/* valeurs entières */
/* type <integer> */
z-index: 0;
z-index: 3;
z-index: 289;
  /* On peut avoir des
   valeurs négatives pour
   réduire la propriété */
z-index: -1;

/* Valeurs globales */
z-index: inherit;
z-index: initial;
z-index: unset;
```

La propriété `z-index` se définit grâce au mot-clé [`auto`](#auto) ou grâce à une valeur entière ([`<integer>`](#integer)).

### Valeurs

- `auto`
  - : La boîte ne crée pas de nouveau contexte d'empilement. Le niveau d'empilement de la boîte dans le contexte d'empilement courant est le même que celui de la boîte parente.
- `<integer>`
  - : L'entier fourni (type {{cssxref("&lt;integer&gt;")}}) sera le niveau de la boîte dans la pile d'empilement pour le contexte d'empilement courant. La boîte crée un nouveau contexte d'empilement pour lequel son niveau est `0`. Cela signifie que les index z des descendants ne sont pas comparés à ceux des éléments en dehors de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div class="boite-tirets">Boîte tirets
  <span class="boite-doree">Boîte dorée</span>
  <span class="boite-verte">Boîte verte</span>
</div>
```

### CSS

```css
.boite-tirets {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.boite-doree {
  position: absolute;
  z-index: 3; /* .boite-doree sera au-dessus de .boite-verte et .boite-tirets */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.boite-verte {
  position: absolute;
  z-index: 2; /* .boite-verte sera au-dessus de .boite-tirets */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

### Résultat

{{EmbedLiveSample('Exemple', '550', '200', '')}}

## Spécifications

| Spécification                                                                                                                    | État                                     | Commentaires                                |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', "Comportement de z-index pour l'animation")}} | {{Spec2('CSS3 Transitions')}} | Définit `z-index` comme pouvant être animé. |
| {{SpecName('CSS2.1', 'visuren.html#z-index', 'z-index')}}                                                     | {{Spec2('CSS2.1')}}                 | Définition initiale                         |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.z-index")}}

## Voir aussi

- La propriété CSS {{cssxref("position")}}
- [Comprendre le fonctionnement de `z-index`](/fr/docs/Web/CSS/Comprendre_z-index)
