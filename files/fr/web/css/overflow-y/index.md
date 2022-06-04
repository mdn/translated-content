---
title: overflow-y
slug: Web/CSS/overflow-y
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/overflow-y
---
{{CSSRef}}

La propriété **`overflow-y`** permet de définir les mécanismes à utiliser (rognage, ascenseurs, dépassement, etc.) lorsque le contenu dépasse des bords haut et bas de la boîte.

> **Note :** Si {{cssxref("overflow-x")}} vaut `hidden`, `scroll` ou `auto` et que cette propriété vaut `visible` (la valeur par défaut), la valeur calculée sera implicitement `auto`.

{{EmbedInteractiveExample("pages/css/overflow-y.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-y: visible;
overflow-y: hidden;
overflow-y: scroll;
overflow-y: auto;

/* Valeurs globales */
overflow-y: inherit;
overflow-y: initial;
overflow-y: unset;
```

La propriété `overflow-y` est définie avec un des mots-clés définis ci-après.

### Valeurs

- `visible`
  - : Le contenu n'est pas rogné. Il peut être affiché en dehors de la boîte de remplissage (_padding_) en haut et en bas malgré le manque d'espace.
- `hidden`
  - : Le contenu est rogné afin de tenir verticalement dans la boîte de remplissage (_padding_) et aucun ascenseur vertical n'est affiché.
- `scroll`
  - : Le contenu est rogné afin de tenir verticalement au sein de la boîte de remplissage (_padding_) et le navigateur affiche des barres de défilement (ascenseurs) dans tous les cas. Cela permet d'éviter d'avoir des barres qui apparaissent / disparaissent dans un environnement dynamique. Les imprimantes peuvent imprimer le contenu qui dépasse.
- `auto`
  - : Le comportement dépend de l'agent utilisateur. Les navigateurs de bureau comme Firefox peuvent afficher des barres de défilement si le contenu dépasse.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<ul>
  <li><code>overflow-y:hidden</code> — cache le texte en dehors de la boîte
  <div id="div1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-y:scroll</code> — ajoute toujours un ascenseur
  <div id="div2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-y:visible</code> — affiche le texte en dehors de la boîte si besoin
  <div id="div3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-y:auto</code> — sur la plupart des navigateurs, cela sera équivalent à <code>scroll</code>
  <div id="div4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
#div1, #div2, #div3,#div4 {
  border: 1px solid black;
  width:  250px;
  height: 100px;
}

#div1 {
  overflow-y: hidden;
  margin-bottom: 12px;
}

#div2 {
  overflow-y: scroll;
  margin-bottom: 12px;
}

#div3 {
  overflow-y: visible;
  margin-bottom: 120px;
}

#div4 {
  overflow-y: auto;
  margin-bottom: 120px;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "780")}}

## Spécifications

| Spécification                                                                            | État                                 | Commentaires |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('CSS3 Overflow', '#propdef-overflow-y', 'overflow-y')}} | {{Spec2('CSS3 Overflow')}} |              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.overflow-y")}}

## Voir aussi

- {{cssxref("text-overflow")}}
- {{cssxref("white-space")}}
- {{cssxref("overflow")}}
- {{cssxref("overflow-x")}}
- {{cssxref("clip")}}
- {{cssxref("display")}}
