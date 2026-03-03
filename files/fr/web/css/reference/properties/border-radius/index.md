---
title: border-radius
slug: Web/CSS/Reference/Properties/border-radius
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-radius`** permet d'arrondir les coins du bord extérieur d'un élément. Vous pouvez définir un seul rayon pour obtenir des coins circulaires, ou deux rayons pour obtenir des coins elliptiques.

{{InteractiveExample("Démonstration CSS&nbsp;: border-radius")}}

```css interactive-example-choice
border-radius: 30px;
```

```css interactive-example-choice
border-radius: 25% 10%;
```

```css interactive-example-choice
border-radius: 10% 30% 50% 70%;
```

```css interactive-example-choice
border-radius: 10% / 50%;
```

```css interactive-example-choice
border-radius: 10px 100px / 120px;
```

```css interactive-example-choice
border-radius: 50% 20% / 10% 40%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec des coins arrondis.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("border-bottom-left-radius")}}

## Syntaxe

```css
/* La syntaxe du premier rayon accepte de une à quatre valeurs */
/* Le rayon est appliqué aux 4 côtés */
border-radius: 10px;

/* haut gauche et bas droite | haut droite et bas gauche */
border-radius: 10px 5%;

/* haut gauche | haut droite et bas gauche | bas droite */
border-radius: 2px 4px 2px;

/* haut gauche | haut droite | bas droite | bas gauche */
border-radius: 1px 0 3px 4px;

/* La syntaxe du second rayon accepte de une à quatre valeurs */
/* rayons horizontaux (cf. ci-avant) / rayon vertical pour tous les angles */
border-radius: 10px / 20px;

/* rayons horizontaux puis / haut gauche et bas droite | haut droite et bas gauche */
border-radius: 10px 5% / 20px 30px;

/* rayons horizontaux puis / haut gauche | haut droite et bas gauche | bas droite */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* rayons horizontaux puis / haut gauche | haut droite | bas droite | bas gauche */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Valeurs globales */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: revert-layer;
border-radius: unset;
```

La propriété `border-radius` peut être définie avec&nbsp;:

- une, deux, trois voire quatre valeurs de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}). Ces valeurs sont utilisées pour désigner un rayon de courbure pour chaque angle.
- puis éventuellement d'une barre oblique «&nbsp;/&nbsp;» suivie d'une, deux, trois ou quatre valeurs `<length>` ou `<percentage>`. Cela permet de définir un rayon supplémentaire pour obtenir des coins elliptiques.

### Valeurs

<table>
  <tbody>
    <tr>
      <td><em>Tous les côtés</em></td>
      <td><img alt="Un rectangle bleu clair avec une bordure grise claire. Les 4 coins sont arrondis." src="all-corner.png" /></td>
      <td>
        Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui indique le rayon de courbure à utiliser pour chaque coin de la bordure. Cette forme est uniquement utilisée lorsque la déclaration contient une seule valeur.
      </td>
    </tr>
    <tr>
      <td><em>Haut gauche et Bas droite</em></td>
      <td><img alt="Un rectangle bleu clair avec une bordure grise claire. Les coins en haut à gauche et en bas à droite sont arrondis." src="top-left-bottom-right.png" /></td>
      <td>
        Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui indique le rayon de courbure à utiliser pour le coin en haut à gauche et le coin en bas à droite de la boîte de bordure. Cette forme est uniquement utilisée avec la syntaxe à deux valeurs.
      </td>
    </tr>
    <tr>
      <td><em>Haut droite et Bas gauche</em></td>
      <td><img alt="Un rectangle bleu clair avec une bordure grise claire. Les coins en haut à droite et en bas à gauche sont arrondis." src="top-right-bottom-left.png" /></td>
      <td>
        Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui indique le rayon de courbure à utiliser pour le coin en haut à droite et le coin en bas à gauche de la boîte de bordure. Cette forme est utilisée avec les syntaxes à deux ou trois valeurs.
      </td>
    </tr>
    <tr>
      <td><em>Haut gauche</em></td>
      <td><img alt="Un rectangle bleu clair avec une bordure grise claire. Le coin en haut à gauche est arrondi." src="top-left.png" /></td>
      <td>
        Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui indique le rayon de courbure à utiliser pour le coin en haut à gauche de l'élément. Cette forme est utilisée avec les syntaxes à trois ou quatre valeurs.
      </td>
    </tr>
    <tr>
      <td><em>Haut droite</em></td>
      <td><img alt="Un rectangle bleu clair avec une bordure grise claire. Le coin en haut à droite est arrondi." src="top-right.png" /></td>
      <td>
        Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui indique le rayon de courbure à utiliser pour le coin en haut à droite de l'élément. Cette forme est utilisée avec la syntaxe à quatre valeurs.
      </td>
    </tr>
    <tr>
      <td><em>Bas droite</em></td>
      <td><img alt="Un rectangle bleu clair avec une bordure grise claire. Le coin en bas à droite est arrondi." src="bottom-right.png" /></td>
      <td>
        Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui indique le rayon de courbure à utiliser pour le coin en bas à droite de l'élément. Cette forme est utilisée avec les syntaxes à trois ou quatre valeurs.
      </td>
    </tr>
    <tr>
      <td><em>Bas gauche</em></td>
      <td><img alt="Un rectangle bleu clair avec une bordure grise claire. Le coin en bas à gauche est arrondi." src="bottom-left.png" /></td>
      <td>
        Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui indique le rayon de courbure à utiliser pour le coin en bas à gauche de l'élément. Cette forme est utilisée avec la syntaxe à quatre valeurs.
      </td>
    </tr>
  </tbody>
</table>

- {{CSSxRef("&lt;length&gt;")}}
  - : Cette valeur indique la mesure du rayon de courbure du cercle ou la mesure du demi grand axe ou du demi petit axe de l'ellipse traduisant la courbure. Les valeurs négatives sont considérées comme invalides.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Cette valeur traduit la mesure du rayon de courbure (elliptique ou circulaire) exprimée en pourcentages par rapport à la taille de la boîte. Les rayons verticaux sont donc proportionnels à la hauteur de la boîte et les rayons horizontaux proportionnels à la largeur de la boîte. Les valeurs négatives sont considérées comme invalides.

Ainsi&nbsp;:

```css
border-radius: 1em / 5em;

/* est équivalent à : */

border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* est équivalent à : */

border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

## Description

La courbure de la bordure s'applique à l'arrière-plan (défini avec la propriété {{CSSxRef("background")}}) même si l'élément n'a aucune bordure. Le rognage de l'arrière-plan s'applique sur la boîte définie par {{CSSxRef("background-clip")}}.

La propriété `border-radius` ne s'applique pas aux éléments de tableaux lorsque {{CSSxRef("border-collapse")}} vaut `collapse`.

> [!NOTE]
> Comme pour les autres propriétés raccourcies, il n'est pas possible d'hériter de valeurs individuelles (par exemple `border-radius: 0 0 inherit inherit` pour surcharger les définitions existantes). Si on souhaite avoir un comportement de ce type, on devra utiliser les propriétés détaillées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer les styles de bordure

L'exemple suivant contient sept éléments HTML {{HTMLElement("pre")}}, chacun illustrant des combinaisons de styles `border` et `border-radius`.
Les styles appliqués à chaque élément `<pre>` sont inclus dans le contenu de l'élément, afin que vous puissiez voir les déclarations CSS nécessaires pour créer le style de bordure associé&nbsp;:

```html hidden
<pre id="example-1">
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
</pre>
<pre id="example-2">
  border: groove 1em red;
  border-radius: 2em;
</pre>
<pre id="example-3">
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
</pre>
<pre id="example-4">
  border: none;
  border-radius: 40px 10px;
  background: gold;
</pre>
<pre id="example-5">
  border: none;
  border-radius: 50%;
  background: burlywood;
</pre>
<pre id="example-6">
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
</pre>
<pre id="example-7">
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
</pre>
```

```css hidden
pre {
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 80px;
}

pre#example-1 {
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
}

pre#example-2 {
  border: groove 1em red;
  border-radius: 2em;
}

pre#example-3 {
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
}

pre#example-4 {
  border: none;
  border-radius: 40px 10px;
  background: gold;
}

pre#example-5 {
  border: none;
  border-radius: 50%;
  background: burlywood;
}

pre#example-6 {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

pre#example-7 {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
}
```

{{EmbedLiveSample("Comparer les styles de bordure", "", 900)}}

### Utiliser `corner-shape` avec `border-radius`

Lorsqu'une valeur de `border-radius` différente de `0` est appliquée à un coin d'une boîte, vous pouvez utiliser la propriété {{CSSxRef("corner-shape")}} (ou l'une de ses [formes longues et raccourcies](/fr/docs/Web/CSS/Reference/Properties/corner-shape#propriétés_raccourcies_et_longues_de_corner--shape)) pour appliquer des formes personnalisées à ce coin, comme un biseau, une encoche ou une superellipse. Cet exemple montre l'utilisation de `corner-shape`.

#### HTML

The markup for this example contains a single {{HTMLElement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Nous appliquons à la boîte quelques styles de base, qui sont masqués ici pour plus de clarté. Nous appliquons aussi un {{CSSxRef("box-shadow")}}, un `border-radius` de `0 20% 50px 30%` et un `corner-shape` de `superellipse(0.5) bevel notch squircle`.

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 0 20% 50px 30%;
  corner-shape: superellipse(0.5) bevel notch squircle;
}
```

#### Résultat

Le résultat affiché ressemble à ceci&nbsp;:

{{EmbedLiveSample("basic-usage", "100%", 240)}}

Remarquez qu'aucune forme de coin n'est appliquée au coin supérieur gauche, car il a une valeur de `border-radius` à `0`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS relatives à `border-radius`&nbsp;: {{CSSxRef("border-top-left-radius")}}, {{CSSxRef("border-top-right-radius")}}, {{CSSxRef("border-bottom-right-radius")}}, {{CSSxRef("border-bottom-left-radius")}}, {{CSSxRef("border-start-start-radius")}}, {{CSSxRef("border-start-end-radius")}}, {{CSSxRef("border-end-start-radius")}}, {{CSSxRef("border-end-end-radius")}}
