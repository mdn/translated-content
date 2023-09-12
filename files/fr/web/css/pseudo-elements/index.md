---
title: Pseudo-éléments
slug: Web/CSS/Pseudo-elements
---

{{CSSRef}}

Un **pseudo-élément** est un mot-clé ajouté à un sélecteur qui permet de mettre en forme certaines parties de l'élément ciblé par la règle. Ainsi, le pseudo-élément {{cssxref("::first-line")}} permettra de ne cibler que la première ligne d'un élément visé par le sélecteur.

```css
/* La première ligne de chaque élément <p>. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

> **Note :** À la différence des pseudo-éléments, [les pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) peuvent être utilisées afin de mettre en forme un élément en fonction de son état.

## Syntaxe

```
sélecteur::pseudo-élément {
  propriété: valeur;
}
```

On ne peut utiliser qu'un seul pseudo-élément dans un sélecteur. Le pseudo-élément doit apparaître après les sélecteurs simple de la déclaration

Depuis CSS3, on utilise deux fois le caractère deux-points (:) pour préfixer les pseudo-éléments (afin de pouvoir les différencier des pseudo-classes). Toutefois, la plupart des navigateurs prennent en charge les pseudo-éléments pour lesquels le préfixe n'est formé que d'un seul « : ».

## Liste des pseudo-éléments

- {{CSSxRef("::after", "::after (:after)")}}
- {{CSSxRef("::backdrop")}} {{Experimental_Inline}}
- {{CSSxRef("::before", "::before (:before)")}}
- {{CSSxRef("::cue", "::cue (:cue)")}}
- {{CSSxRef("::first-letter", "::first-letter (:first-letter)")}}
- {{CSSxRef("::first-line", "::first-line (:first-line)")}}
- {{CSSxRef("::grammar-error")}} {{Experimental_Inline}}
- {{CSSxRef("::marker")}} {{Experimental_Inline}}
- {{CSSxRef("::part")}} {{Experimental_inline}}
- {{CSSxRef("::placeholder")}} {{Experimental_Inline}}
- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}} {{Experimental_Inline}}

## Exemples

### CSS

```css
p::first-line {
  color: blue;
}
```

### HTML

```html
<p>
  C’était le Lapin Blanc qui revenait en trottinant, et qui cherchait de tous
  côtés, d’un air inquiet, comme s’il avait perdu quelque chose ; Alice
  l’entendit qui marmottait : « La Duchesse ! La Duchesse ! Oh ! mes pauvres
  pattes ; oh ! ma robe et mes moustaches ! Elle me fera guillotiner aussi vrai
  que des furets sont des furets ! Où pourrais-je bien les avoir perdus ? »
  Alice devina tout de suite qu’il cherchait l’éventail et la paire de gants
  paille, et, comme elle avait bon cœur, elle se mit à les chercher aussi ; mais
  pas moyen de les trouver.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', 250, 200)}}

<table class="standard-table">
  <tbody>
    <tr>
      <th>Navigateur</th>
      <th>Version minimale</th>
      <th>Prise en charge de :</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>

## Voir aussi

- [Les pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes)
