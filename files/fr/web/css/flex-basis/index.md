---
title: flex-basis
slug: Web/CSS/flex-basis
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/flex-basis
---
{{CSSRef}}

La propriété **`flex-basis`** détermine la base de flexibilité utilisée comme taille initiale principale pour un élément flexible. Cette propriété détermine la taille de la boîte de contenu sauf si une autre boîte est visée par {{cssxref("box-sizing")}}.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

> **Note :** Dans le cas où `flex-basis` (avec une valeur différente de `auto`) et `width` (ou `height` si `flex-direction: column`) sont définis pour un élément, c'est `flex-basis` qui a la priorité.

## Syntaxe

```css
/* On définit une largeur */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* On utilise les dimensions       */
/* intrinsèques avec des mots-clés */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* La taille se calcule automatiquement */
/* en fonction du contenu de l'élément  */
flex-basis: content;

/* Valeurs globales */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

La propriété `flex-basis` est définie grâce au mot-clé [`content`](#content) ou grâce à une valeur de type [`<'width'>`](#width).

### Valeurs

- `<'width'>`
  - : Un longueur absolue (type {{cssxref("&lt;length&gt;")}} ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})relatif à la taille principale du conteneur flexible ou encore le mot-clé `auto`. Les valeurs négatives ne sont pas autorisées. La valeur par défaut est `auto`.
- `content`

  - : Le dimensionnement se fera de façon automatique selon le contenu de l'élément flexible.

    > **Note :** Cette valeur n'était pas définie par la première version de la spécification sur les boîtes flexibles. Aussi, certaines anciennes implémentations se basant sur cette version de la spécification ne prendront pas cette valeur en charge. Un effet équivalent peut être obtenu en réglant la taille principale ({{cssxref("width")}} ou {{cssxref("height")}}) avec `auto`.

    > **Note :** Voici un rapide historique pour cette propriété :
    >
    > - Au début, `flex-basis:auto` signifiait « se référer à ma propriété `width` ou `height` »
    > - Ensuite, `flex-basis:auto` a été modifiée pour indiquer un dimensionnement automatique et le mot-clé `main-size` fut introduit pour faire référence à la propriété `width` ou `height`. L'implémentation dans Gecko a été suivie avec le bug {{bug("1032922")}}.
    > - Cette modification a été annulée avec le bug {{bug("1093316")}} afin qu'`auto` fasse à nouveau référence à la propriété `height` ou `width`. Le mot-clé `content` a été introduit pour déclencher un dimensionnement automatique (c'est le bug {{bug("1105111")}} qui couvre cette implémentation).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6AB6D8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2E86BB;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 {
  flex-basis: auto;
}

.flex1:after {
  content: 'auto';
}

.flex2 {
  flex-basis: max-content;
}

.flex2:after {
  content: 'max-content';
}

.flex3 {
  flex-basis: min-content;
}

.flex3:after {
  content: 'min-content';
}

.flex4 {
  flex-basis: fit-content;
}

.flex4:after {
  content: 'fit-content';
}

.flex5 {
   flex-basis: content;
}

.flex5:after {
  content: 'content';
}

.flex6 {
  flex-basis: fill;
}

.flex6:after {
  content: 'fill';
}
```

### Résultat

{{EmbedLiveSample('Exemples', '860', '360')}}

## Spécifications

| Spécification                                                                            | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Flexbox', '#propdef-flex-basis', 'flex-basis')}} | {{Spec2('CSS3 Flexbox')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.flex-basis")}}

## Voir aussi

- {{cssxref("width")}}
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide sur les boîtes flexibles : _[Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
