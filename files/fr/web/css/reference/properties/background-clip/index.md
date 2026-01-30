---
title: background-clip
slug: Web/CSS/Reference/Properties/background-clip
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-clip`** définit si l'arrière-plan d'un élément s'étend sous son cadre de bordure, son cadre de remplissage ou son cadre de contenu.

{{InteractiveExample("Démonstration CSS&nbsp;: background-clip")}}

```css interactive-example-choice
background-clip: border-box;
```

```css interactive-example-choice
background-clip: padding-box;
```

```css interactive-example-choice
background-clip: content-box;
```

```css interactive-example-choice
background-clip: text;
color: transparent;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Ceci est le contenu de l'élément.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: white;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333333;
  font-size: 2em;
  font-weight: bold;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
background-clip: border-area;

/* Valeurs globales */
background-clip: inherit;
background-clip: initial;
background-clip: revert;
background-clip: revert-layer;
background-clip: unset;
```

### Valeurs

- `border-box`
  - : L'arrière-plan s'étend jusqu'à la limite externe de la bordure. L'arrière-plan sera situé sous la bordure en termes d'ordre z.
- `padding-box`
  - : Aucun arrière-plan n'est dessiné dans la boîte de bordure. L'arrière-plan s'étend jusqu'à la limite de la boîte de remplissage (_padding_).
- `content-box`
  - : L'arrière-plan est limité (rogné) à la boîte de contenu.
- `text`
  - : L'arrière-plan est limité (rogné) au texte en premier plan.
- `border-area` {{Non-standard_Inline}}
  - : L'arrière-plan est peint à l'intérieur (rogné à) de la zone peinte par la bordure, en tenant compte de {{CSSxRef("border-width")}} et {{CSSxRef("border-style")}}, mais en ignorant toute transparence introduite par {{CSSxRef("border-color")}}.

## Description

L'arrière-plan est toujours dessiné derrière la bordure, donc `background-clip: border-box` n'a un effet visuel que si la bordure est partiellement opaque ou comporte des zones transparentes ou partiellement opaques. De plus, la propriété `background-clip: text` a peu ou pas d'effet visuel si le texte est totalement ou partiellement opaque.

> [!NOTE]
> Comme l'[élément racine](/fr/docs/Web/HTML/Reference/Elements/html) possède une zone de peinture d'arrière-plan différente, la propriété `background-clip` n'a aucun effet lorsqu'elle est appliquée sur celui-ci. Voir «&nbsp;[Les arrière-plans des éléments spéciaux <sup>(angl.)</sup>](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)&nbsp;»

> [!NOTE]
> Pour les documents dont [l'élément racine](/fr/docs/Web/HTML/Reference/Elements/html) est un élément HTML&nbsp;: si la valeur calculée de {{CSSxRef("background-image")}} sur l'élément racine est `none` et que sa {{CSSxRef("background-color")}} est `transparent`, les agents utilisateur doivent alors propager les valeurs calculées des propriétés `background` depuis le premier enfant HTML {{HTMLElement("body")}} de cet élément. Les valeurs utilisées pour les propriétés `background` de cet élément `<body>` sont leurs valeurs initiales, et les valeurs propagées sont traitées comme si elles étaient définies sur l'élément racine. Il est recommandé que les auteur·ice·s de documents HTML définissent l'arrière-plan du canevas pour l'élément `<body>` plutôt que pour l'élément HTML.

## Accessibilité

Lorsque vous utilisez `background-clip: text`, vérifiez que le contraste entre la couleur d'arrière-plan et la couleur du texte placé dessus est suffisamment élevé pour que les personnes en situation de basse vision puissent lire le contenu de la page.

Si l'image d'arrière-plan ne se charge pas, cela peut aussi rendre le texte illisible. Ajoutez une couleur d'arrière-plan de secours avec {{CSSxRef("background-color")}} pour éviter ce problème, et testez sans l'image.

Pensez à utiliser des requêtes de fonctionnalités avec {{CSSxRef("@supports")}} pour tester la prise en charge de `background-clip: text` et fournir une alternative accessible si ce n'est pas pris en charge.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p class="border-box">L'arrière-plan s'étend sous la bordure.</p>
<p class="padding-box">L'arrière-plan s'étend jusqu'avant la bordure.</p>
<p class="content-box">L'arrière-plan s'arrête à la boîte de contenu.</p>
<p class="text">L'arrière-plan se limite au texte au premier-plan.</p>
<p class="border-area">
  L'arrière-plan est rogné à la zone peinte par la bordure.
</p>
```

### CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  color: rgb(0 0 0 / 20%);
}

.border-area {
  background-clip: border-area;
  border-color: transparent;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 600, 630)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("clip-path")}} crée une région de rognage qui définit quelle partie de l'_élément entier_ doit être affichée.
- Les propriétés d'arrière-plan&nbsp;: {{CSSxRef("background")}}, {{CSSxRef("background-color")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-origin")}}
- [Introduction au modèle de boîtes CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
