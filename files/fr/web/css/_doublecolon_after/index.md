---
title: "::after (:after)"
slug: Web/CSS/::after
---

{{CSSRef}}

En CSS, **`::after`** crée un [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) qui sera le dernier enfant de l'élément sélectionné. Il est souvent utilisé pour ajouter du contenu cosmétique à un élément, en utilisant la propriété CSS {{cssxref("content")}}. Par défaut, ce contenu est de type « [en ligne](/fr/Apprendre/CSS/Introduction_à_CSS/Le_modèle_de_boîte#Les_types_de_boîte) ».

```css
/* Ajoute une flèche après les liens */
a:after {
  content: "→";
}
```

> **Note :** les pseudo-éléments générés par `::before` et `::after` sont [contenus dans la boîte de mise en forme de l'élément](https://www.w3.org/TR/CSS2/generate.html#before-after-content). Aussi, `::before` et `::after` ne s'appliquent pas aux _[éléments remplacés](/fr/docs/Web/CSS/Élément_remplacé)_ tels que les éléments {{HTMLElement("img")}} ou {{HTMLElement("br")}}.

## Syntaxe

{{csssyntax}}

> **Note :** CSS3 a introduit la notation `::after` (avec deux deux-points) pour distinguer les [pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) des [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-éléments). Les navigateurs acceptent aussi`:after`, introduite dans CSS2.

## Exemples

### Utilisation simple

Nous allons ici créer deux classes : une pour les paragraphes ennuyeux et une pour les intéressants. Nous marquerons ensuite chacun de ces paragraphes en ajoutant un pseudo-élément après chacun d'eux.

#### HTML

```html
<p class="texte-ennuyeux">Voici un peu de vieux texte ennuyeux ordinaire.</p>
<p>Voici un peu de texte normal qui n'est ni ennuyeux, ni intéressant.</p>
<p class="texte-interessant">
  Contribuer à MDN est facile et amusant. Cliquez simplement sur le bouton
  Modifier pour ajouter de nouveaux exemples vivants, ou améliorer ceux
  existants.
</p>
```

#### CSS

```css
.texte-interessant::after {
  content: "<- maintenant, cela *est* intéressant !";
  color: green;
}

.texte-ennuyeux::after {
  content: "<- ENNUYEUX !";
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('Utilisation_simple', '100%', 170)}}

### Exemple décoratif

On peut mettre en forme du texte ou des images avec la propriété {{cssxref("content")}} à peu près de quelque manière que nous le voulions :

#### HTML

```html
<span class="ruban">Observez où se trouve la boîte orange.</span>
```

#### CSS

```css
.ruban {
  background-color: #5bc8f7;
}

.ruban::after {
  content: "Voyez cette boîte orange.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_décoratif', '100%', 60)}}

### Bulles d'information

Dans l'exemple suivant, on illustre le [pseudo-élément](/fr-FR/docs/Web/CSS/Pseudo-elements) `::after` avec l'expression CSS {{cssxref("attr()")}} et un attribut de données personnalisé `data-descr` afin de créer une _bulle d'information_ de type glossaire en CSS pur.

On peut également aider les utilisateurs de clavier avec cette technique, en ajoutant un `tabindex` de `0` pour faire un `span` focusable, et en utilisant la sélection `:focus`. Cela montre à quel point les options `::before` and `::after` peuvent être flexibles, bien que, pour l'expérience la plus accessible, un widget de divulgation sémantique créé d'une autre manière serait probablement plus approprié..

#### HTML

```html
<p>
  Voici l’exemple en action du code ci-dessus.<br />
  Nous avons un peu de
  <span data-descr="collection de mots et de ponctuation">texte</span> ici avec
  quelques
  <span data-descr="petites fenêtres surgissantes qui se cachent aussi">
    bulles d’information</span
  >.<br />
  Ne soyez pas timide, survolez le texte pour jeter un
  <span data-descr="à ne pas prendre au sens littéral">œil</span>.
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Résultat

{{EmbedLiveSample("Bulles_d'information", '100%', 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("::before")}}
- {{cssxref("content")}}
