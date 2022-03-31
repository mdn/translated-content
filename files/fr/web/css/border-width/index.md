---
title: border-width
slug: Web/CSS/border-width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-width
---
{{CSSRef}}

La propriété CSS **`border-width`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui définit la largeur de la bordure d'un élément.

Cette propriété raccourcie définit les propriétés détaillées

- {{cssxref("border-top-width")}},
- {{cssxref("border-right-width")}},
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-left-width")}}.

Si on utilise les propriétés logiques, elle définit {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-inline-start-width")}} et {{cssxref("border-inline-end-width")}}.

Afin de paramétrer une bordure de façon plus pratique, on pourra utiliser la propriété raccourcie {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/border-width.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-width: thin;
border-width: medium;
border-width: thick;

/* Une largeur pour chaque côté */
/* Valeur de type <length> */
border-width: 5px;

/* largeur verticale puis horizontale */
border-width: 2px 1.5em;

/* haut | largeur horizontale | bas */
border-width: 1px 2em 1.5cm;

/* haut | droite | bas | gauche */
border-width: 1px 2em 0 4rem;

/* Valeurs globales */
border-width: inherit;
border-width: initial;
border-width: unset;
```

La propriété `border-width` peut être définie avec une, deux, trois ou quatre valeurs.

- Lorsqu'une valeur est fournie, elle est appliquée comme largeur pour les quatre côtés
- Lorsque deux valeurs sont fournies, la première est appliquée comme largeur pour la bordure basse et haute et la seconde pour la bordure gauche et droite
- Lorsque trois valeurs sont fournies, la première est appliquée à la bordure haute, la deuxième à la bordure gauche et à la bordure droite et la troisième à la bordure basse
- Lorsque quatres valeurs sont fournies, elles s'appliquent respectivement aux cotés haut, droit, bas et gauche (sens des aiguilles d'une montre).

### Valeurs

- `<line-width>`

  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}} ou un mot-clé indiquant l'épaisseur de la bordure. Le mot-clé doit être l'une des valeurs suivantes :

    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

    La spécification ne définit pas précisément l'épaisseur correspondante à chacun de ces mots-clés, les rendant dépendants de l'implémentation. Toutefois, la spécification indique que l'épaisseur doit suivre la relation d'inégalité suivante : `thin ≤ medium ≤ thick` et que les valeurs pour chaque mot-clé doivent être constantes pour un même document.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p id="unevaleur">
  Une valeur : la bordure fait 6px sur les 4 côtés.
</p>

<p id="deuxvaleurs">
  Deux valeurs différentes : elle fait 2px en haut
  et en bas et elle mesure 10px pour les bords droit
  et gauche.
</p>

<p id="troisvaleurs">
  Trois valeurs différentes : 0.3em pour le haut,
  9px pour le bas et zéro pour la droite et la
  gauche.
</p>

<p id="quatrevaleurs">
  Quatre valeurs différentes : "thin" pour le haut,
  "medium" pour la droite, "thick" pour le bas
  et 1em pour la gauche.
</p>
```

### CSS

```css
#unevaleur {
  border: ridge #ccc;
  border-width: 6px;
}

#deuxvaleurs {
  border: solid red;
  border-width: 2px 10px;
}

#troisvaleurs {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}

#quatrevaleurs {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}

p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

### Résultat

{{EmbedLiveSample('Exemples', 300, 180) }}

## Spécifications

| Spécification                                                                                        | État                                     | Commentaires                                                                                                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-width', 'border-width')}}         | {{Spec2('CSS3 Backgrounds')}} | Pas de modification directe. La modification du type de données {{cssxref("&lt;length&gt;")}} impacte cette propriété. |
| {{SpecName('CSS2.1', 'box.html#border-width-properties', 'border-width')}} | {{Spec2('CSS2.1')}}                 | Ajout de la contrainte indiquant que la signification des valeurs doit être constante au sein d'un document.                      |
| {{SpecName('CSS1', '#border-width', 'border-width')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-width")}}

## Voir aussi

- Les propriétés raccourcies liées aux bordures

  - {{cssxref("border")}},
  - {{cssxref("border-style")}}
  - {{cssxref("border-color")}}

- Les propriétés liées à la largeur des bordures

  - {{cssxref("border-bottom-width")}},
  - {{cssxref("border-left-width")}},
  - {{cssxref("border-right-width")}},
  - {{cssxref("border-top-width")}}
