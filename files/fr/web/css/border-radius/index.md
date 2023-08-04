---
title: border-radius
slug: Web/CSS/border-radius
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`border-radius`** permet de définir des coins arrondis pour la bordure d'un élément. La courbure de chaque coin est définie avec un ou deux rayons de courbures qui permettent de définir un arc de cercle ou un arc d'ellipse.

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

La courbure de la bordure s'applique à l'arrière-plan (défini avec la propriété [`background`](/fr/docs/Web/CSS/background)) même si l'élément n'a aucune bordure. Le rognage de l'arrière-plan s'applique sur la boîte définie par [`background-clip`](/fr/docs/Web/CSS/background-clip).

La propriété `border-radius` ne s'applique pas aux éléments de tableaux lorsque [`border-collapse`](/fr/docs/Web/CSS/border-collapse) vaut `collapse`.

> **Note :** Comme pour les autres propriétés raccourcies, il n'est pas possible d'hériter de valeurs individuelles (par exemple `border-radius: 0 0 inherit inherit` pour surcharger les définitions existantes). Si on souhaite avoir un comportement de ce type, on devra utiliser les propriétés détaillées.

## Propriétés détaillées correspondantes

Cette propriété est une [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) qui permet de définir&nbsp;:

- [`border-top-left-radius`](/fr/docs/Web/CSS/border-top-left-radius),
- [`border-top-right-radius`](/fr/docs/Web/CSS/border-top-right-radius),
- [`border-bottom-right-radius`](/fr/docs/Web/CSS/border-bottom-right-radius),
- [`border-bottom-left-radius`](/fr/docs/Web/CSS/border-bottom-left-radius).

## Syntaxe

```css
/* Quand on utilise un seul rayon, on peut avoir jusqu'à quatre valeurs */
/* Avec une valeur, on utilise le même rayon pour les quatre angles */
border-radius: 10px;

/* 1. coin en haut à gauche et en bas à droite      */
/* 2. puis coin en haut à droite et en bas à gauche */
border-radius: 10px 5%;

/* 1. coin en haut à gauche                    */
/* 2. coin en haut à droite et en bas à gauche */
/* 3. coin en bas à droite                     */
border-radius: 2px 4px 2px;

/* 1. coin en haut à gauche */
/* 2. coin en haut à droite */
/* 3. coin en bas à droite  */
/* 4. coin en bas à gauche  */
border-radius: 1px 0 3px 4px;

/* En utilisant deux rayons, on peut avoir jusqu'à quatre valeurs          */
/* On sépare les rayons horizontaux des verticaux par une barre oblique    */
/* rayons horizontaux (cf. ci-avant) / rayon vertical pour tous les angles */
border-radius: 10px / 20px;

/* rayons horizontaux puis / puis rayons verticaux */
/* 1. coin en haut à gauche et en bas à droite      */
/* 2. puis coin en haut à droite et en bas à gauche */
border-radius: 10px 5% / 20px 30px;

/* rayons horizontaux puis / puis rayons verticaux */
/* 1. coin en haut à gauche                        */
/* 2. coin en haut à droite et en bas à gauche     */
/* 3. coin en bas à droite                         */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* rayons horizontaux puis / puis rayons verticaux */
/* 1. coin en haut à gauche                        */
/* 2. coin en haut à droite                        */
/* 3. coin en bas à droite                         */
/* 4. coin en bas à gauche                         */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Valeurs globales */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: unset;
```

La propriété `border-radius` peut être définie avec&nbsp;:

- Une, deux, trois voire quatre valeurs de longueur ([`<length>`](/fr/docs/Web/CSS/length)) ou de pourcentages ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Ces valeurs sont utilisées pour désigner un rayon de courbure pour chaque angle&nbsp;;
- Puis éventuellement une barre oblique (`/`) suivie d'une, deux, trois ou quatre valeurs de longueur ou de pourcentage qui permettent de définir un rayon de courbure supplémentaire pour créer des coins elliptiques.

### Valeurs

<table>
  <tbody>
    <tr>
      <td>Une seule valeur</td>
      <td><img src="all-corner.png"/></td>
      <td>
        Une valeur de longueur (type <a href="/fr/docs/Web/CSS/length"><code>length</code></a>) ou un pourcentage (type <a href="/fr/docs/Web/CSS/percentage"><code>percentage</code></a>) qui indique le rayon de courbure à utiliser pour chaque coin. Cette forme est uniquement utilisée lorsque la déclaration contient une seule valeur.
      </td>
    </tr>
    <tr>
      <td>
        Deux valeurs (coin en haut à gauche et en bas à droite)
      </td>
      <td><img src="top-left-bottom-right.png"/></td>
      <td>
        Une valeur de longueur (type <a href="/fr/docs/Web/CSS/length"><code>length</code></a>) ou un pourcentage (type <a href="/fr/docs/Web/CSS/percentage"><code>percentage</code></a>) qui indique le rayon de courbure à utiliser pour le coin en haut à gauche et le coin en bas à droite de la boîte de bordure lorsqu'on utilise deux valeurs dans la déclaration.
      </td>
    </tr>
    <tr>
      <td>
        Coin en haut à droite et en bas à gauche (syntaxe à deux et trois valeurs)
      </td>
      <td><img src="top-right-bottom-left.png"/></td>
      <td>
        Une valeur de longueur (type <a href="/fr/docs/Web/CSS/length"><code>length</code></a>) ou un pourcentage (type <a href="/fr/docs/Web/CSS/percentage"><code>percentage</code></a>) qui indique le rayon de courbure à utiliser pour le coin en haut à droite et le coin en bas à gauche de la boîte de bordure lorsqu'on utilise deux ou trois valeurs dans la déclaration.
      </td>
    </tr>
    <tr>
      <td>Coin en haut à gauche</td>
      <td><img src="top-left.png"/></td>
      <td>
        Une valeur de longueur (type <a href="/fr/docs/Web/CSS/length"><code>length</code></a>) ou un pourcentage (type <a href="/fr/docs/Web/CSS/percentage"><code>percentage</code></a>) qui indique le rayon de courbure à utiliser pour le coin en haut à gauche de l'élément. Cette valeur est utilisée pour la syntaxe avec trois ou quatre valeurs.
      </td>
    </tr>
    <tr>
      <td>Coin en haut à droite</td>
      <td><img src="top-right.png" /></td>
      <td>
        Une valeur de longueur (type <a href="/fr/docs/Web/CSS/length"><code>length</code></a>) ou un pourcentage (type <a href="/fr/docs/Web/CSS/percentage"><code>percentage</code></a>) qui indique le rayon de courbure à utiliser pour le coin en haut à droite de l'élément. Cette valeur est utilisée pour la syntaxe avec quatre valeurs.
      </td>
    </tr>
    <tr>
      <td>Coin en bas à droite</td>
      <td><img src="bottom-right.png"/></td>
      <td>
        Une valeur de longueur (type <a href="/fr/docs/Web/CSS/length"><code>length</code></a>) ou un pourcentage (type <a href="/fr/docs/Web/CSS/percentage"><code>percentage</code></a>) qui indique le rayon de courbure à utiliser pour le coin en bas à droite de l'élément. Cette valeur est utilisée pour la syntaxe avec trois ou quatre valeurs.
      </td>
    </tr>
    <tr>
      <td>Coin en bas à gauche</td>
      <td><img src="bottom-left.png"/></td>
      <td>
        Une valeur de longueur (type <a href="/fr/docs/Web/CSS/length"><code>length</code></a>) ou un pourcentage (type <a href="/fr/docs/Web/CSS/percentage"><code>percentage</code></a>) qui indique le rayon de courbure à utiliser pour le coin en bas à gauche de l'élément. Cette valeur est utilisée pour la syntaxe avec quatre valeurs.
      </td>
    </tr>
  </tbody>
</table>

- [`<length>`](/fr/docs/Web/CSS/length)
  - : Cette valeur indique la mesure du rayon de courbure du cercle ou la mesure du demi grand axe ou du demi petit axe de l'ellipse traduisant la courbure. Les valeurs négatives sont considérées comme invalides.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
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

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

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

{{EmbedLiveSample("", "200", "1150")}}

### Détail des fragments

- [Fragment n°1 sur JSFiddle](https://jsfiddle.net/Tripad/qnGKj/2/)
- [Fragment n°2 sur JSFiddle](https://jsfiddle.net/Tripad/qnGKj/3/)
- [Fragment n°3 sur JSFiddle](https://jsfiddle.net/Tripad/qnGKj/4/)
- [Fragment n°4 sur JSFiddle](https://jsfiddle.net/Tripad/qnGKj/5/)
- [Fragment n°5 sur JSFiddle](https://jsfiddle.net/Tripad/qnGKj/6/)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS relatives à `border-radius`&nbsp;:
  - Les propriétés physiques&nbsp;:
    - [`border-top-left-radius`](/fr/docs/Web/CSS/border-top-left-radius),
    - [`border-top-right-radius`](/fr/docs/Web/CSS/border-top-right-radius),
    - [`border-bottom-right-radius`](/fr/docs/Web/CSS/border-bottom-right-radius),
    - [`border-bottom-left-radius`](/fr/docs/Web/CSS/border-bottom-left-radius)
  - Les propriétés logiques&nbsp;:
    - [`border-start-start-radius`](/fr/docs/Web/CSS/border-start-start-radius),
    - [`border-start-end-radius`](/fr/docs/Web/CSS/border-start-end-radius),
    - [`border-end-start-radius`](/fr/docs/Web/CSS/border-end-start-radius),
    - [`border-end-end-radius`](/fr/docs/Web/CSS/border-end-end-radius)
