---
title: font-weight
slug: Web/CSS/font-weight
translation_of: Web/CSS/font-weight
browser-compat: css.properties.font-weight
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`font-weight`** permet de définir la graisse utilisée pour le texte. Les niveaux de graisse disponibles dépendent de la police (cf. [`font-family`](/fr/docs/Web/CSS/font-family)). Certaines fontes n'existent qu'avec les niveaux de graisses `normal` et `bold`.

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-weight: normal;
font-weight: bold;

/* Valeurs relatives à l'élément parent */
font-weight: lighter;
font-weight: bolder;

/* Valeurs numériques */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400; /* normal */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* gras */
font-weight: 800;
font-weight: 900;

/* Valeurs globales */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: unset;
```

La propriété `font-weight` peut être définie grâce à l'une des valeurs suivantes.

### Valeurs

- `normal`
  - : Le niveau de graisse normal pour la fonte. Équivalent à la valeur `400`.
- `bold`
  - : Le texte est en gras. Équivalent à la valeur `700`.
- `lighter`
  - : On diminue la graisse d'un niveau par rapport à l'élément parent (selon les fontes / graisses disponibles pour la police utilisée). Le texte paraît plus fin.
- `bolder`
  - : On augmente la graisse d'un niveau par rapport à l'élément parent (selon les fontes / graisses disponibles pour la police utilisée). Le texte est plus gras.
- `<number>`
  - : Une valeur numérique (type [`<number>`](/fr/docs/Web/CSS/number)) comprise entre 1 et 1000. Plus la valeur est grande, plus le niveau de graisse est élevé. Ces valeurs permettent de couvrir un éventail de valeurs plus larges qu'avec `normal` et `bold`.

Pour d'anciennes versions de la spécification, `font-weight` n'acceptait que les mots-clés et les valeurs numériques 100, 200, 300, 400, 500, 600, 700, 800 et 900. Les polices non-variables ne peuvent utiliser que ces valeurs (les valeurs plus fines seront converties cf. ci-après).

Le module de spécification _CSS Fonts_ de niveau 4 a étendu la syntaxe afin de pouvoir utiliser n'importe quel nombre entre 1 et 1000. Cela permet aux polices variables d'avoir une meilleure précision quant aux tailles utilisables.

### Conversion des valeurs

Si une fonte avec la graisse demandée n'est pas disponible, le moteur suit la méthode suivante pour déterminer la fonte qui sera affichée&nbsp;:

- Si un niveau supérieur à `500` est utilisé, c'est la graisse la plus sombre et la plus proche qui sera utilisée (la plus proche s'il n'y a pas de graisse plus forte)
- Si un niveau inférieur à `400` est utilisé, c'est la graisse la plus claire la plus proche qui est utilisée (la plus proche s'il n'y a pas de graisse plus claire)
- Si c'est un niveau entre `400` et `500` (inclus) qui est utilisé&nbsp;:

  - On cherche les niveaux les plus proches entre la cible et `500`, dans l'ordre croissant.
  - Si aucune correspondance n'est trouvée, on cherche les niveaux inférieurs, dans l'ordre décroissant.
  - Si aucune correspondance n'est trouvée, on cherche les niveaux supérieurs à `500`, dans l'ordre croissant.

### Signification des poids relatifs

Lorsqu'on utilise les valeurs `lighter` ou `bolder`, on peut utiliser le tableau suivant pour calculer le poids absolu de l'élément.

On notera que lorsqu'on utilise des niveaux de graisse relatifs, seuls quatre niveaux sont considérés&nbsp;: fin (100), normal (400), gras (700) et épais (900). Si une police dispose de plus de niveaux de graisse, ceux-ci sont ignorés pour le calcul des niveaux relatifs.

<table class="standard-table">
  <thead>
    <tr>
      <th>Valeur héritée</th>
      <th><code>bolder</code></th>
      <th><code>lighter</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tr>
    <tr>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tr>
  </tbody>
</table>

### Correspondance entre les valeurs numériques et les noms communément utilisés

Les valeurs allant de 100 à 900 correspondent environ aux noms suivants, communément utilisés pour désigner les variantes de fonte, selon la graisse, d'une même police (_NdT&nbsp;: les noms sont laissés en anglais car généralement utilisés tels quels_) (voir [la spécification OpenType](https://docs.microsoft.com/typography/opentype/spec/os2#usweightclass))&nbsp;:

| Valeur | Nom communément utilisé     |
| ------ | --------------------------- |
| 100    | _Thin (Hairline)_           |
| 200    | _Extra Light (Ultra Light)_ |
| 300    | _Light_                     |
| 400    | _Normal_                    |
| 500    | _Medium_                    |
| 600    | _Semi Bold (Demi Bold)_     |
| 700    | _Bold_                      |
| 800    | _Extra Bold (Ultra Bold)_   |
| 900    | _Black (Heavy)_             |
| 950    | _Extra Black (Ultra Black)_ |

### Polices variables

La plupart des polices possèdent des niveaux de graisses qui correspondent aux niveaux communément utilisés (voir tableau précédent). Toutefois, certaines polices, appelées «&nbsp;polices variables&nbsp;» prennent en charge un intervalle de niveaux avec plus ou moins de détail, ce qui permet à l'éditeur du document de mieux contrôler la graisse utilisée.

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `wght` qui est utilisé afin d'implémenter les variations de largeur.

Pour que l'exemple suivant fonctionne, il est nécessaire d'utiliser un navigateur qui prend en charge la spécification _CSS Fonts_ de niveau 4 pour laquelle `font-weight` peut prendre une valeur numérique entre 1 et 1000. La démonstration commence avec `font-weight: 500;` et vous pouvez changer la valeur pour voir l'effet sur le texte.

{{EmbedGHLiveSample("css-examples/variable-fonts/font-weight.html", '100%', 860)}}

## Accessibilité

Pour les personnes ayant une vision faible, il peut être extrêmement difficile de lire un texte avec `font-weight` qui vaut `100` ou `200`, notamment [si le contraste entre le texte et l'arrière-plan est faible](/fr/docs/Web/CSS/color#accessibilité).

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre les critères de succès 1.4.8 — Comprendre WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemple

### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the
  bank, and of having nothing to do: once or twice she had peeped into the
  book her sister was reading, but it had no pictures or conversations in
  it, "and what is the use of a book," thought Alice "without pictures or
  conversations?"
</p>

<div>I'm heavy<br/>
  <span>I'm lighter</span>
</div>
```

### CSS

```css
/* Le texte du paragraphe est en gras. */
p {
  font-weight: bold;
}

/* Le texte du div utilise plus fort que
   normal mais moins fort que standard. */
div {
 font-weight: 600;
}

/* Le texte du span utilise un niveau de graisse
   plus léger que son parent. */
span {
  font-weight: lighter;
}
```

### Résultat

{{EmbedLiveSample("","400","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`font-style`](/fr/docs/Web/CSS/font-style)
- [`font-family`](/fr/docs/Web/CSS/font-family)
- [Apprendre — Notions fondamentales sur le texte et la mise en forme avec les polices](/fr/docs/Learn/CSS/Styling_text/Fundamentals)
