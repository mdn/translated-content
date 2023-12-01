---
title: z-index
slug: Web/CSS/z-index
---

{{CSSRef}}

La propriété **`z-index`** définit le «&nbsp;_z-order_&nbsp;» (NdT&nbsp;: «&nbsp;ordre z&nbsp;» n'est pas usité) d'un élément [positionné](/fr/docs/Web/CSS/position) et de ses éléments enfants ou de ses éléments flexibles. Lorsque des éléments se chevauchent, le _z-order_ détermine l'ordre des différentes couches que formeront les éléments. Généralement, un élément couvrira un autre élément si sa valeur de `z-index` est supérieure à celle du deuxième élément.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Pour les boîtes positionnées (celles pour lesquelles `position` est différent de `static`), la propriété `z-index` définit&nbsp;:

1. Le niveau de la boîte dans la pile par rapport [au contexte d'empilement](/fr/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context) courant
2. Si la boîte crée un contexte d'empilement local.

## Syntaxe

```css
/* Avec un mot-clé */
z-index: auto;

/* valeurs entières */
/* type <integer> */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Valeurs négatives possibles pour indiquer une priorité inférieure */

/* Valeurs globales */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: unset;
```

La propriété `z-index` se définit grâce au mot-clé [`auto`](#auto) ou grâce à une valeur entière ([`<integer>`](#integer)).

### Valeurs

- `auto`
  - : La boîte ne crée pas de nouveau contexte d'empilement. Le niveau d'empilement de la boîte dans le contexte d'empilement courant est le même que celui de la boîte parente.
- `<integer>`
  - : L'entier fourni (type [`&lt;integer&gt;`](/fr/docs/Web/CSS/integer)) sera le niveau de la boîte dans la pile d'empilement pour le contexte d'empilement courant. La boîte crée un nouveau contexte d'empilement pour lequel son niveau est `0`. Cela signifie que les index z des descendants ne sont pas comparés à ceux des éléments en dehors de l'élément.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Empiler des éléments visuellement

#### HTML

```html
<div class="wrapper">
  <div class="boite-tirets">Boîte avec tirets</div>
  <div class="boite-doree">Boîte dorée</div>
  <div class="boite-verte">Boîte verte</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

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
  z-index: 3; /* place .boite-doree au-dessus de .boite-verte et .boite-tirets */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.boite-verte {
  position: absolute;
  z-index: 2; /* place .boite-verte au-dessus de .boite-tirets */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Résultat

{{EmbedLiveSample('Empiler_des_éléments_visuellement', '550', '200', '')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS [`position`](/fr/docs/Web/CSS/position)
- [Comprendre le fonctionnement de `z-index`](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
