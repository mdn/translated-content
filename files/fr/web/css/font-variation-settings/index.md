---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
---

{{CSSRef}}

La propriété CSS **`font-variation-settings`** permet de contrôler les caractéristiques typographiques de bas niveau OpenType ou TrueType en utilisant les quatres lettres représentant les axes des caractéristiques qu'on souhaite faire varier, ainsi que les valeurs pour les variations associées.

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

Cette propriété fonctionne à un niveau plus bas que {{cssxref("font-feature-settings")}} qui permet de définir les valeurs et les étiquettes (_tags_) pour les caractéristiques des polices.

> **Note :** Si possible, les auteurs web devraient utiliser d'autres méthodes pour contrôler l'affichage des polices de caractères et notamment la propriété raccourcie {{cssxref("font-variant")}} ou une des propriétés détaillée associée. Cette propriété est une fonctionnalité de bas niveau destinée à gérer les cas spécifiques pour lesquels il est autrement impossible d'activer ou de paramétrer une caractéristique OpenType existante.

> **Note :** Les caractéristiques définies avec `font-variation-settings` l'emporteront sur celles définies par les autres propriétés relatives aux polices (ex. `font-weight`), où qu'elles soient dans la cascade. Pour certains navigateurs, cela se vérifie uniquement lorsque la déclaration `@font-face` inclut un intervalle `font-weight`.

## Syntaxe

```css
/* Valeur pour les réglages par défaut */
font-variation-settings: normal;

/* Utilisation des valeurs */
/* pour les axes OpenType  */
font-variation-settings: "XHGT" 0.7;

/* Valeurs globales */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: unset;
```

La valeur de cette propriété peut être définie selon deux formes :

- Avec le mot-clé `normal`
- Ou avec une chaîne de caractères (`<string>`) suivi d'un nombre (`<number>`). Ce motif peut être répété tant qu'une virgule sépare chacun des tuples.

### Valeurs

- `normal`
  - : Le texte est disposé avec les caractéristiques par défaut.
- `<string> <number>`
  - : Lors de l'affichage du texte, les axes OpenType sont passés au moteur graphique afin d'activer ou de désactiver certaines fonctionnalités de la police. Chaque valeur est une chaîne de caractères (type {{cssxref("&lt;string&gt;")}}) avec quatre caractères ASCII, suivie par un nombre (type {{cssxref("number")}}) qui indique la valeur pour l'axe correspondant. Si la chaîne de caractères `<string>` a plus ou moins de 4 caractères et contient des caractères en dehors de l'intervalle U+20 - U+7E, la propriété sera considérée comme invalide. La valeur numérique `<number>` n'est pas nécessairement entière et positive, ce peut être un nombre décimal ou un nombre négatif.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Axes enregistrés et axes spécifiques

Les axes des polices variables sont rangés selon deux catégories : les axes **enregistrés** et les axes **spécifiques**.

Les axes enregistrés représentent les variations les plus fréquemment utilisées. Si ces axes sont suffisamment fréquents pour avoir été standardisés, cela ne signifie pas qu'un créateur de police doive tous les gérer pour créer une police.

Voici la liste des axes enregistrés et les propriétés CSS correspondantes, qui permettent de jouer sur ces axes :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Étiquette pour l'axe</th>
      <th scope="col">Propriété</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{cssxref("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{cssxref("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (slant)</td>
      <td>{{cssxref("font-style")}}: <code>oblique + angle</code></td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{cssxref("font-style")}}: <code>italic</code></td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{cssxref("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

Les axes spécifiques peuvent correspondre à n'importe quel axe que le concepteur de la police souhaite faire varier (ce peut par exemple être la hauteur des hampes et des jambages, la taille des empattements ou tout autre chose). N'importe quel axe peut être utilisé tant qu'il a une étiquette unique sur quatre caractères. Il est possible que, si des axes spécifiques deviennent majoritairement présents, ils soient intégrés parmi les axes enregistrés.

> **Note :** Les étiquettes des axes enregistrés sont écrits en minuscules et les axes spécifiques doivent être écrits en majuscules. On notera que rien n'oblige à suivre cette règle et qu'il est tout à fait possible que des concepteurs de polices donnent des étiquettes en minuscules à des axes spécifiques. Quoiqu'il en soit, on retiendra que les étiquettes des axes sont sensibles à la casse.

## Exemples

> **Attention :** Afin de pouvoir utiliser les polices variables, votre système d'exploitation doit être à jour et votre navigateur doit prendre en charge ces fonctionnalités. Ainsi, les systèmes basés sur Linux requièrent la dernière version de Linux Freetype et les systèmes macOS antérieurs à 10.13 ne prennent pas en charge les polices variables.

### Graisse (`wght`)

L'exemple suivant peut être édité afin de voir l'effet de la modification des valeurs pour la graisse du texte.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Pente (`slnt`)

L'exemple suivant peut être édite afin de voir l'effet de la modification des valeurs pour la pente (à ne pas confondre avec l'italique) du texte.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

### Autres exemples

- [Guide sur les polices variables](/fr/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
- [v-fonts.com](https://v-fonts.com)
- [axis-praxis.org](https://axis-praxis.org)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur les polices variables](/fr/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
- [OpenType Font Variations Overview](https://www.microsoft.com/typography/otspec180/otvaroverview.htm)
- [OpenType specification](https://www.microsoft.com/typography/otspec180/default.htm)
- [OpenType Design-Variation Axis Tag Registry](https://www.microsoft.com/typography/otspec/dvaraxisreg.htm)
