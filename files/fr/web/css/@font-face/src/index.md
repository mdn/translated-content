---
title: src
slug: Web/CSS/@font-face/src
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@font-face/src
---
{{CSSRef}}

Le descripteur **`src`**, associé à la règle @ {{cssxref("@font-face")}}, permet de définir la ressource qui contient les données relatives à une police de caractères. Ce descripteur est obligatoire afin que la règle `@font-face` soit considérée comme valide.

Sa valeur est composée d'une liste de noms séparés par des virgules, ordonnés par priorité dont chacun fait référence à une police de caractères externe ou locale. Lorsqu'une police doit être utilisée, l'agent utilisateur parcourt la liste de ces références et utilise la première police qui peut être chargée correctement. Si la police de caractères contient des données invalides ou si le nom ne correspond à aucune police de caractères, l'agent utilisateur passe à la suivante.

Là aussi, les URL utilisées peuvent être relatives. Dans le cas où une URL relative est utilisée, elle est résolue grâce à l'emplacement de la feuille de styles qui contient la règle `@font-face`. Pour les polices SVG, l'URL pointe vers un élément du document qui contient les définitions SVG de la police. Si l'élément de référence est absent, une référence implicite sera construite avec la première police définie. De même, pour les formats contenant plusieurs polices, seule une police est chargée pour une règle `@font-face` donnée. Les identifiants de fragment de l'URL peuvent être utilisés pour indiquer la police à charger. Si le format conteneur ne possède pas de schéma d'identification des fragments, ce sera un schéma simple d'indexation (ex. "font-collection#1" pour la première police, "font-collection#2" pour la seconde, etc.) qui sera utilisé.

{{cssinfo}}

## Syntaxe

```css
/* <url> */
src: url(https://unsiteweb.com/chemin/vers/police.woff); /* URL absolue */
src: url(chemin/vers/police.woff);                       /* URL relative */
src: url(chemin/vers/police.woff) format("woff");        /* format explicite */
src: url('chemin/vers/police.woff');                     /* URL entre quotes */
src: url(chemin/vers/policesvg.svg#exemple);             /* fragment identifiant une police */

/* Valeurs de type <font-face-name> */
src: local(police);      /* nom sans double quote */
src: local(une police); /* nom avec espace */
src: local("police");    /* nom entre double quotes */

/* Liste avec plusieurs éléments */
src: local(police), url(chemin/vers/police.svg) format("svg"),
    url(chemin/vers/police.woff) format("woff"),
    url(chemin/vers/police.otf) format("opentype");
```

### Valeurs

- `<url> [ format( <string># ) ]?`
  - : Définit une référence externe, composée d'une URL et d'une indication optionnelle quant au format de la police chargée via cette URL. L'indication de format contient une liste de chaînes de caractères dont chacune doit correspondre à un format de police connu. Si un agent utilisateur ne prend pas en charge le format indiqué, il ne téléchargera pas la ressource liée à la police. Si aucune indication de format n'est fournie, la ressource associée est toujours téléchargée.
- `<font-face-name>`
  - : Définit le nom d'une police installée localement grâce à la fonction `local()` qui permet d'identifier une police de caractères au sein d'une famille de polices. Le nom de la police peut être entre double quotes.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@font-face {
  font-family: policeexemple;
  src: local(Police Exemple), url('policeexemple.woff') format("woff"),
      url('policeexemple.otf') format("opentype");
}
```

## Spécifications

| Spécification                                                | État                             | Commentaires         |
| ------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Fonts', '#src-desc', 'src')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.font-face.src")}}
