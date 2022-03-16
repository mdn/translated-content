---
title: overflow-x
slug: Web/CSS/overflow-x
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/overflow-x
---
{{CSSRef}}

La propriété **`overflow-x`** permet de définir les mécanismes à utiliser (rognage, ascenseurs, dépassement, etc.) lorsque le contenu dépasse des bords droit et gauche de la boîte de contenu.

> **Note :** Si {{cssxref("overflow-y")}} vaut `hidden`, `scroll` ou `auto` et que cette propriété vaut `visible` (la valeur par défaut), sa valeur calculée sera implicitement `auto`.

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-x: visible;
overflow-x: hidden;
overflow-x: scroll;
overflow-x: auto;

/* Valeurs globales */
overflow-x: inherit;
overflow-x: initial;
overflow-x: unset;
```

La propriété `overflow-x` est définie avec l'un des mots-clés définis ci-après.

### Valeurs

- `visible`
  - : Le contenu n'est pas rogné. Il peut être affiché en dehors de la boîte de remplissage (_padding_) à droite et à gauche malgré le manque d'espace.
- `hidden`
  - : Le contenu est rogné afin de tenir horizontalement dans la boîte de remplissage (_padding_) et aucun ascenseur horizontal n'est affiché.
- `scroll`
  - : Le contenu est rogné afin de tenir horizontalement dans la boîte de remplissage et le navigateur affiche des barres de défilement (ascenseurs) dans tous les cas. Cela permet d'éviter d'avoir des barres qui apparaissent / disparaissent dans un environnement dynamique. Les imprimantes peuvent imprimer le contenu qui dépasse.
- `auto`
  - : Le comportement dépend de l'agent utilisateur. Les navigateurs de bureau comme Firefox peuvent afficher des barres de défilement si le contenu dépasse.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<ul>
  <li><code>overflow-x:hidden</code> — cache le texte en dehors de la boîte
    <div id="div1">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-x:scroll</code> — ajoute toujours un ascenseur
    <div id="div2">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-x:visible</code> — affiche le texte en dehors de la boîte si besoin
    <div id="div3">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-x:auto</code> — sur la plupart des navigateurs, cela sera équivalent à <code>scroll</code>
    <div id="div4">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>
</ul>
```

### CSS

```css
#div1, #div2, #div3, #div4 {
  border: 1px solid black;
  width:  250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-x: hidden;
}

#div2 {
  overflow-x: scroll;
}

#div3 {
  overflow-x: visible;
}

#div4 {
  overflow-x: auto;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "270")}}

## Spécifications

| Spécification                                                                            | État                                 | Commentaires |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('CSS3 Overflow', '#propdef-overflow-x', 'overflow-x')}} | {{Spec2('CSS3 Overflow')}} |              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.overflow-x")}}

## Voir aussi

- {{cssxref("text-overflow")}},
- {{cssxref("white-space")}},
- {{cssxref("overflow")}},
- {{cssxref("overflow-y")}},
- {{cssxref("clip")}},
- {{cssxref("display")}}
