---
title: overflow
slug: Web/CSS/overflow
translation_of: Web/CSS/overflow
---
{{CSSRef}}

La propriété CSS **`overflow`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui définit comment gérer le dépassement du contenu d'un élément dans son bloc. Elle définit les valeurs des propriétés {{cssxref("overflow-x")}} et {{cssxref("overflow-y")}}.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

Lorsqu'on utilise la propriété `overflow` avec une autre valeur que `visible` (la valeur par défaut), cela entraîne la création [d'un nouveau contexte de formatage de bloc](/fr/docs/Web/Guide/CSS/Block_formatting_context). Cette création est nécessaire d'un point de vue technique. Ceci est nécessaire techniquement puisque si un élément flottant traverse l'élément avec barres de défilement, cela forcera l'encapsulation du contenu de ce dernier autour de l'élément flottant. L'encapsulation devrait alors se produire après chaque défilement de la barre et mènerait à une expérience utilisateur dégradée

Afin que la propriété `overflow` puisse avoir un effet, le conteneur de niveau de bloc doit avoir une hauteur limite (définie grâce à {{cssxref("height")}} ou {{cssxref("max-height")}}) ou avoir `white-space` avec la valeur `nowrap.`

> **Note :** Si on définit un axe avec `visible` (la valeur par défaut) et qu'on définit l'autre axe avec une valeur différente, alors la valeur du premier axe (`visible`) sera considérée comme `auto`.

> **Note :** Lorsqu'on définit, via un script, la propriété `scrollTop` sur les éléments HTML pertinents, même lorsque `overflow` vaut `hidden`, il faut parfois faire défiler l'élément.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* Valeurs globales */
overflow: inherit;
overflow: initial;
overflow: unset;
```

La propriété `overflow` peut être définie grâce à un ou deux des mots-clés suivants. Si deux mots-clés sont utilisé, le premier sera appliqué à `overflow-x` et le second à `overflow-y`. Si une seule valeur est utilisée, elle sera appliquée à `overflow-x` et à `overflow-y`.

### Valeurs

- `visible`
  - : La valeur par défaut. Le contenu n'est pas rogné. Le contenu peut éventuellement être affiché en dehors de la boîte de remplissage (_padding_).
- `hidden`
  - : Le contenu est rogné si besoin pour s'inscrire dans la boîte de remplissage (_padding_) et aucune barre de défilement n'est affichée.
- `clip`
  - : Se comporte comme `hidden` au sens où le contenu est rogné pour s'inscrire dans la boîte de remplissage. Comme `hidden`, `clip` ne présente pas de barre de défilement mais contrairement à `hidden`, `clip` empêche tout défilement, y compris à l'aide de scripts. La boîte n'est pas un conteneur de défilement et ne définit pas de nouveau contexte de formatage. Si on souhaite obtenir un nouveau contexte de formatage, il faudra utiliser {{cssxref("display", "display: flow-root", "#flow-root")}}.
    Certains navigateurs ne prennent pas encore cette fonctionnalité en charge.
- `scroll`
  - : Le contenu est rogné pour s'inscrire dans la boîte de remplissage (_padding_) et les navigateurs de bureau affichent des barres de défilement dans tous les cas. Cela évite d'avoir des barres qui apparaissent et disparaissent sans cesse avec du contenu dynamique. Les imprimantes peuvent éventuellement imprimer le contenu qui dépasse.
- `auto`
  - : Le comportement est laissé à la discrétion de l'agent utilisateur. Les navigateurs comme Firefox affichent des ascenseurs si le contenu dépasse dans la boîte de remplissage (_padding_)
- `overlay` {{Deprecated_inline}}
  - : Cette valeur se comporte comme `auto` sauf que les barres de défilement sont au-dessus du contenu plutôt que de prendre de la place. Cette valeur est uniquement prise en charge par les navigateurs basés sur WebKit (Safari) ou Blink (Chrome, Opera).

#### Extensions propres au moteur Mozilla

- `-moz-scrollbars-none` {{deprecated_inline}}
  - : `overflow:hidden` doit être utilisé à la place. À partir de Firefox 63, cette fonctionnalité est placée derrière une préférence qui doit être activée. Dans `about:config`, il faut passer `layout.css.overflow.moz-scrollbars.enabled` à `true`.
- `-moz-scrollbars-horizontal` {{Deprecated_inline}}
  - : Utilisez {{cssxref("overflow-x")}} et {{cssxref("overflow-y")}} à la place. À partir de Firefox 63, cette fonctionnalité est placée derrière une préférence qui doit être activée. Dans `about:config`, il faut passer `layout.css.overflow.moz-scrollbars.enabled` à `true`.
- `-moz-scrollbars-vertical` {{Deprecated_inline}}
  - : Utilisez {{cssxref("overflow-x")}} et {{cssxref("overflow-y")}} à la place. À partir de Firefox 63, cette fonctionnalité est placée derrière une préférence qui doit être activée. Dans `about:config`, il faut passer `layout.css.overflow.moz-scrollbars.enabled` à `true`.
- `-moz-hidden-unscrollable` {{non-standard_inline}}
  - : Principalement utilisé en interne et par les thèmes. Cela désactive le défilement pour les éléments XML racines `<html>`, `<body>` (avec les flèches du clavier et la roue de la souris).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir différentes valeurs d'overflow pour le texte

#### HTML

```html
  <div>
    <code>visible</code>
    <p class="visible">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>hidden</code>
    <p class="hidden">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>scroll</code>
    <p class="scroll">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>auto</code>
    <p class="auto">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>
```

#### CSS

```css
body {
  display: flex;
  justify-content: space-around;
}

div {
  margin: 1em;
  font-size: 1.2em;
}

p {
  width: 8em;
  height: 5em;
  border: dotted;
}

p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}
```

#### Résultat

{{EmbedLiveSample("Exemples", "600", "250")}}

## Spécifications

| Spécification                                                                        | État                                 | Commentaires                                                |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------- |
| {{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}} | {{Spec2('CSS3 Overflow')}} | La syntaxe permet désormais d'utiliser une ou deux valeurs. |
| {{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}         | {{Spec2('CSS2.1')}}             | Définition initiale.                                        |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.overflow")}}

## Voir aussi

- {{cssxref("text-overflow")}},
- {{cssxref("white-space")}},
- {{cssxref("overflow-x")}},
- {{cssxref("overflow-y")}},
- {{cssxref("overflow-inline")}},
- {{cssxref("overflow-block")}},
- {{cssxref("clip")}},
- {{cssxref("display")}}
