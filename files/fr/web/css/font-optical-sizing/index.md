---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-optical-sizing
---
{{CSSRef}}

La propriété CSS **`font-optical-sizing`** permet de contrôler la façon dont l'agent utilisateur rend le texte avec (ou non) différentes représentations visuelles en fonction de la taille.  Cette propriété ne fonctionne qu'avec les polices qui disposent d'un axe de variation pour la taille optique.

Par exemple, les textes de petites tailles sont généralement affichés avec des traits plus épais et des empattements (_serifs_) plus grands. En revanche, les textes plus grands sont souvent plus fins et utilisent plus de contrastes entre les traits fins et épais.

> **Note :** L'axe de variation pour la taille optique est représenté par `opsz` dans {{cssxref("font-variation-settings")}}.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-optical-sizing: none;
font-optical-sizing: auto; /* valeur initiale */

/* Valeurs globales */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: unset;
```

### Valeurs

- `none`
  - : L'agent utilisateur ne modifiera pas la forme des glyphes pour une vue optimale.
- `auto`
  - : L'agent utilisateur modifiera la forme des glyphes pour une vue optimale.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
@font-face {
    src: url('AmstelvarAlpha-VF.ttf');
    font-family:'Amstelvar';
    font-style: normal;
}

p {
  font-size: 36px;
  font-family: Amstelvar;
}

.no-optical-sizing {
  font-optical-sizing: none;
}
```

### HTML

```html
<p class="optical-sizing">Ce paragraphe est dimensionné pour une meilleure
 lecture. C'est le comportement par défaut.</p>

<p class="no-optical-sizing">Ce paragraphe n'est pas adapté pour une
 meilleure lecture. Vous devriez voir une différence avec les navigateurs
 qui prennent en charge cette fonctionnalité.</p>
```

> **Note :** La police utilisée dans cet exemple possède un dimensionnement optique et est disponible sous licence libre [en téléchargement sur GitHub](https://github.com/TypeNetwork/Amstelvar/releases).

## Spécifications

| Spécification                                                                                            | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('CSS4 Fonts', '#font-optical-sizing-def', 'font-optical-sizing')}} | {{Spec2('CSS4 Fonts')}} |              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-optical-sizing")}}
