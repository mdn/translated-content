---
title: overflow-block
slug: Web/CSS/overflow-block
tags:
  - CSS
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/overflow-block
---
{{CSSRef}}

La propriété CSS **`overflow-block`** est une propriété logique qui définit ce qu'il faut afficher quand le contenu dépasse d'un élément de bloc sur les bords de bloc (ceux orthogonaux au sens d'écriture). On peut choisir d'afficher rien, une barre de défilement ou de laisser le contenu dépasser.

> **Note :** La propriété `overflow-block` correspond à {{cssxref("overflow-y")}} ou {{cssxref("overflow-x")}} selon le mode d'écriture du document.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-block: visible;
overflow-block: hidden;
overflow-block: scroll;
overflow-block: auto;

/* Valeurs globales */
overflow-block: inherit;
overflow-block: initial;
overflow-block: unset;
```

La propriété `overflow-block` se définit avec un mot-clé parmi ceux de la liste suivante.

### Valeurs

- `visible`
  - : Le contenu n'est pas rogné et peut être affiché en dehors des limites de bloc de la boîte.
- `hidden`
  - : Le contenu qui dépasse est masqué afin de ne pas dépasser dans l'axe de bloc. Aucune barre de défilement n'est affichée.
- `scroll`
  - : Le contenu est rogné si nécessaire selon l'axe de bloc pour tenir dans la boîte (de remplissage). Les navigateurs affichent des barres de défilement que le contenu soit rogné ou non (on évite ainsi d'avoir des barres qui apparaissent/disparaissent lorsque le contenu change). Les imprimantes peuvent imprimer le contenu qui dépasse.
- `auto`
  - : Le comportement de cette valeur dépend de l'agent utilisateur. Si le contenu tient dans la boîte de remplissage, elle se comportera comme `visible` mais établira un nouveau contexte de formatage. Les navigateurs de bureau affichent des barres de défilement si le contenu dépasse.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<ul>
  <li><code>overflow-block:hidden</code> — masque le texte en dehors
  <div id="div1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:scroll</code> — ajoute une barre de défilement
  <div id="div2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:visible</code> — affiche le texte en dehors si besoin
  <div id="div3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:auto</code> — pour la plupart des navigateurs, équivalent à <code>scroll</code>
  <div id="div4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width:  250px;
  height: 100px;
}

#div1 { overflow-block: hidden; margin-bottom: 12px;}
#div2 { overflow-block: scroll; margin-bottom: 12px;}
#div3 { overflow-block: visible; margin-bottom: 120px;}
#div4 { overflow-block: auto; margin-bottom: 120px;}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "780")}}

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('CSS3 Overflow', '#propdef-overflow-block', 'overflow-block')}} | {{Spec2('CSS3 Overflow')}} |              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.overflow-block")}}

## Voir aussi

- Propriétés CSS associées : {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{cssxref("overflow")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{cssxref("clip")}}, {{cssxref("display")}}
- [Les propriétés logiques en CSS](/fr/docs/Web/CSS/CSS_Logical_Properties)
- [Les modes d'écriture](/fr/docs/Web/CSS/CSS_Writing_Modes)
