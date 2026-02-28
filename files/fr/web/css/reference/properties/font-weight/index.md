---
title: font-weight
slug: Web/CSS/Reference/Properties/font-weight
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-weight`** permet de définir la graisse utilisée pour le texte. Les niveaux de graisse disponibles dépendent de la police {{CSSxRef("font-family")}}. Certaines fontes n'existent qu'avec les niveaux de graisses `normal` et `bold`.

{{InteractiveExample("Démonstration CSS&nbsp;: font-weight")}}

```css interactive-example-choice
font-weight: normal;
```

```css interactive-example-choice
font-weight: bold;
```

```css interactive-example-choice
font-weight: lighter;
```

```css interactive-example-choice
font-weight: bolder;
```

```css interactive-example-choice
font-weight: 100;
```

```css interactive-example-choice
font-weight: 900;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Londres. Le trimestre de la Saint-Michel vient de se terminer, et le Lord
    Chancelier siège dans la salle de Lincoln's Inn. Un mois de novembre
    implacable. Autant de boue dans les rues que si les eaux venaient à peine de
    se retirer de la surface de la terre, et il ne serait pas étonnant de
    croiser un Mégalosaure, long d'une douzaine de mètres, se dandinant comme un
    lézard éléphantesque sur Holborn Hill.
  </p>
</section>
```

```css interactive-example
section {
  font-size: 1.2em;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-weight: normal;
font-weight: bold;

/* Valeurs numériques [1,1000] de type <font-weight-absolute> */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400; /* normal */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* gras */
font-weight: 800;
font-weight: 900;

/* Valeurs relatives à l'élément parent */
font-weight: lighter;
font-weight: bolder;

/* Valeurs globales */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: revert-layer;
font-weight: unset;
```

La propriété `font-weight` se définit soit avec une valeur `<font-weight-absolute>`, soit avec une valeur de graisse relative, comme listé ci-dessous.

### Valeurs

- `normal`
  - : Le niveau de graisse normal pour la fonte. Équivalent à la valeur `400`.

- `bold`
  - : Le texte est en gras. Équivalent à la valeur `700`.

- {{CSSxRef("&lt;number&gt;")}}
  - : Une valeur numérique comprise entre 1 et 1000 inclus. Plus la valeur est élevée, plus la graisse est importante. Cela permet un contrôle précis pour les [polices variables](#polices_variables). Pour les polices non variables, si la graisse exacte n'est pas disponible, un algorithme de [graisse de secours](#conversion_des_valeurs) est utilisé — les valeurs multiples de 100 correspondent aux noms de graisse courants, comme décrit dans la section [Correspondance entre les valeurs numériques et les noms communément utilisés](#correspondance_entre_les_valeurs_numériques_et_les_noms_communément_utilisés) ci-dessous.

- `lighter`
  - : Un niveau de graisse relatif plus léger que l'élément parent. Seuls quatre niveaux de graisse sont pris en compte pour le calcul relatif&nbsp;; voir la section [Signification des poids relatifs](#signification_des_poids_relatifs) ci-dessous.

- `bolder`
  - : Un niveau de graisse relatif plus fort que l'élément parent. Seuls quatre niveaux de graisse sont pris en compte pour le calcul relatif&nbsp;; voir la section [Signification des poids relatifs](#signification_des_poids_relatifs) ci-dessous.

### Conversion des valeurs

Si une fonte avec la graisse demandée n'est pas disponible, le moteur suit la méthode suivante pour déterminer la fonte qui sera affichée&nbsp;:

- Si la graisse indiquée est comprise entre `400` et `500` inclus&nbsp;:
  - Chercher les graisses disponibles entre la valeur indiquée et `500`, par ordre croissant.
  - Si aucune valeur n'est trouvée, chercher les graisses inférieures à la valeur indiquée, par ordre décroissant.
  - Si aucune valeur n'est trouvée, chercher les graisses supérieures à `500`, par ordre croissant.

- Si un niveau inférieur à `400` est utilisé, on cherche les niveaux les plus proches inférieurs à la cible, dans l'ordre décroissant. Si aucune correspondance n'est trouvée, on cherche les niveaux supérieurs à la cible, dans l'ordre croissant.

- Si un niveau supérieur à `500` est utilisé, on cherche les niveaux les plus proches supérieurs à la cible, dans l'ordre croissant. Si aucune correspondance n'est trouvée, on cherche les niveaux inférieurs à la cible, dans l'ordre décroissant.

> [!NOTE]
> L'algorithme de conversion des valeurs n'est utilisé que pour l'affichage. La valeur calculée de la propriété reste la valeur définie.

### Signification des poids relatifs

Lorsqu'on utilise les valeurs `lighter` ou `bolder`, on peut utiliser le tableau suivant pour calculer le poids absolu de l'élément.

On notera que lorsqu'on utilise des niveaux de graisse relatifs, seuls quatre niveaux sont considérés — fin (100), normal (400), gras (700) et épais (900). Si une police dispose de plus de niveaux de graisse, ceux-ci sont ignorés pour le calcul des niveaux relatifs.

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

### Correspondance des noms courants des poids

Les valeurs allant de 100 à 900 correspondent environ aux noms suivants, communément utilisés pour désigner les variantes de fonte, selon la graisse, d'une même police (_NdT&nbsp;: les noms sont laissés en anglais car généralement utilisés tels quels_) (voir [la spécification OpenType <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass))&nbsp;:

| Valeur | Nom communément utilisé                                                                                                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100    | Thin (Hairline)                                                                                                                                       |
| 200    | Extra Light (Ultra Light)                                                                                                                             |
| 300    | Light                                                                                                                                                 |
| 400    | Normal                                                                                                                                                |
| 500    | Medium                                                                                                                                                |
| 600    | Semi Bold (Demi Bold)                                                                                                                                 |
| 700    | Bold                                                                                                                                                  |
| 800    | Extra Bold (Ultra Bold)                                                                                                                               |
| 900    | Black (Heavy)                                                                                                                                         |
| 950    | [Extra Black (Ultra Black) <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Polices variables

Bien que de nombreuses polices aient une graisse particulière correspondant à l'un des nombres de la section [Correspondance des noms courants des poids](#correspondance_des_noms_courants_des_poids), la plupart des polices variables prennent en charge un intervalle de graisses offrant une granularité bien plus fine, donnant aux créateur·ice·s et développeur·euse·s plus de contrôle sur la graisse choisie.

Pour les polices variables TrueType ou OpenType, la variation «&nbsp;wght&nbsp;» est utilisée pour mettre en œuvre différentes largeurs.

Cette démonstration charge `font-weight: 500;`. Modifiez la valeur de la propriété `font-weight` dans le sélecteur `.sample` pour voir la graisse du texte changer (par exemple, 200, 700). Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour éditer l'exemple dans le MDN Playground&nbsp;:

```html live-sample___font-weight-example
<p class="sample">
  ...il ne serait pas étonnant de croiser un Mégalosaure, long d'une douzaine de
  mètres, se dandinant comme un lézard éléphantesque sur Holborn Hill.
</p>
```

```css live-sample___font-weight-example
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/MutatorSans.ttf");
  font-family: "MutatorSans";
  font-style: normal;
  font-weight: 1 1000;
}

.sample {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  font-family: "MutatorSans", sans-serif;
}
```

{{EmbedLiveSample("font-weight-example", "", 200)}}

## Accessibilité

Pour les personnes ayant une vision faible, il peut être extrêmement difficile de lire un texte avec `font-weight` qui vaut `100` ou `200`, notamment [si le contraste entre le texte et l'arrière-plan est faible](/fr/docs/Web/CSS/Reference/Properties/color#accessibilité).

- [Comprendre les WCAG, la règle 1.4 sur MDN](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre les critères de succès 1.4.8 | Comprendre WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Définir les graisses de police

#### HTML

```html
<p>
  Alice commençait à être très fatiguée d'être assise près de sa sœur sur la
  berge, et de n'avoir rien à faire&nbsp;: une ou deux fois, elle avait jeté un
  coup d'œil dans le livre que sa sœur lisait, mais il n'y avait ni images ni
  dialogues dedans, «&nbsp;et à quoi sert un livre&nbsp;», pensait Alice,
  «&nbsp;s'il n'y a ni images ni dialogues&nbsp;?&nbsp;»
</p>

<div>
  Je suis épais<br />
  <span>Je suis plus fin</span>
</div>
```

#### CSS

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

#### Résultat

{{EmbedLiveSample("Définir les graisses de police", 400, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-family")}}
- La propriété {{CSSxRef("font-style")}}
- L'attribut SVG {{SVGAttr("font-weight")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- Le module [de polices CSS](/fr/docs/Web/CSS/Guides/Fonts)
