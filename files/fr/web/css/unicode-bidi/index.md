---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/unicode-bidi
---
{{CSSRef}}

La propriété **`unicode-bidi`**, associée à la propriété {{cssxref("direction")}}, permet de gérer du texte bidirectionnel dans un document. Par exemple, si un bloc de texte contient à la fois du texte qui se lit de droite à gauche et du texte qui se lit de gauche à droite, l'agent utilisateur utilisera un algorithme Unicode complexe pour savoir comment afficher le texte. Cette propriété prend le pas sur l'algorithme et permet au développeur de contrôler l'intégration du texte.

Les propriétés `unicode-bidi` et {{cssxref("direction")}} sont les deux seules propriétés qui ne sont pas impactées par {{cssxref("all")}}.

> **Note :** Cette propriété est d'abord destinée aux concepteurs de DTD, les auteurs Web ne devraient pas surcharger sa valeur.

```css
/* Avec un mot-clé */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* Valeurs globales */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: unset;
```

{{cssinfo}}

## Syntaxe

### Valeurs

- `normal`
  - : L'élément n'ajoute pas de niveau de logique supplémentaire pour l'intégration et l'application de l'algorithme de bidirectionnalité. Pour les éléments en ligne, le réarrangement des éléments est fait entre les frontières des éléments.
- `embed`
  - : Si l'élément est en ligne, la valeur ajoute un niveau de logique supplémentaire pour l'intégration. La direction du niveau d'intégration est fournie par la propriété {{cssxref("direction")}}.
- `bidi-override`
  - : Pour les éléments en ligne, cela surcharge la directionnalité. Pour les conteneurs de bloc, cela crée une surcharge pour les éléments-fils qui sont en ligne et qui ne sont pas dans un autre conteneur de bloc. Cela signifie qu'au sein de l'élément, le réarrangement se fait strictement en fonction de la propriété {{cssxref("direction")}}, la partie implicite apportée par l'algorithme de bidirectionnalité est ignorée.
- `isolate`
  - : Ce mot-clé indique que la directionnalité du conteneur de l'élément devrait être calculée sans prendre en compte le contenu de cet élément. L'élément est donc _isolé_ (_isolated_ en anglais) de ses voisins. Lorsqu'on applique l'algorithme de résolution bidirectionnelle, l'élément conteneur le traite comme un ou plusieurs `U+FFFC Object Replacement Character` (autrement dit, comme une image).
- `isolate-override`
  - : Ce mot-clé applique l'isolation fournie par `isolate` au contenu environnant et applique la surcharge fournie par `bidi-override` au contenu intérieur.
- `plaintext`{{experimental_inline}}
  - : Ce mot-clé permet de calculer la directionnalité de l'élément sans prendre en compte l'état de son parent ou la valeur de la propriété {{cssxref("direction")}}. La directionnalité est calculée en utilisant les règles P2 et P3 de l'algorithme de bidirectionnalité Unicode.
    Cette valeur permet d'affiché des données qui ont déjà été mises en forme par un outil ayant appliqué l'algorithme de bidirectionnalité Unicode.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

## Spécification

| Spécification                                                                                        | État                                     | Commentaires                                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| {{SpecName('CSS3 Writing Modes', '#unicode-bidi', 'unicode-bidi')}}             | {{Spec2('CSS3 Writing Modes')}} | Ajout des mots-clés `plaintext`, `isolate` et `isolate-override`. |
| {{SpecName('CSS2.1', 'visuren.html#propdef-unicode-bidi', 'unicode-bidi')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.                                              |

## Compatibilité des navigateurs

{{Compat("css.properties.unicode-bidi")}}

## Voir aussi

- {{cssxref("direction")}}
