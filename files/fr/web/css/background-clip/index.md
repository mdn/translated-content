---
title: background-clip
slug: Web/CSS/background-clip
---

{{CSSRef}}

La propriété **`background-clip`** définit la façon dont l'arrière-plan d'un élément (que ce soit l'image ou la couleur) s'étend sous la boîte de bordure, la boîte de remplissage (_padding_) ou la boîte de contenu.

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

Si aucune image ({{cssxref("background-image")}}) ni couleur ({{cssxref("background-color")}}) d'arrière-plan n'est définie, cette propriété aura uniquement un effet visuel lorsque la bordure possède des régions transparentes (via {{cssxref("border-style")}} ou {{cssxref("border-image")}}). Dans les autres cas, la bordure recouvrira la zone où se situera la différence .

## Syntaxe

```css
/* Valeurs utilisant un mot-clé */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Valeurs globales */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```

### Valeurs

- `border-box`
  - : L'arrière-plan s'étend jusqu'à la limite externe de la bordure. L'arrière-plan sera situé sous la bordure en termes d'ordre z.
- `padding-box`
  - : Aucun arrière-plan n'est dessiné dans la boîte de bordure. L'arrière-plan s'étend jusqu'à la limite de la boîte de remplissage (_padding_).
- `content-box`
  - : L'arrière-plan est limité (rogné) à la boîte de contenu.
- `text` {{experimental_inline}}
  - : L'arrière-plan est limité (rogné) au texte en premier plan.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
p {
  border: 10px navy;
  border-style: dotted double;
  margin: 1em;
  padding: 2em;
  background: #f8d575;
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
  color: rgba(0, 0, 0, 0.2);
}
```

### HTML

```html
<p class="border-box">L'arrière-plan s'étend sous la bordure.</p>
<p class="padding-box">L'arrière-plan s'étend jusqu'avant la bordure.</p>
<p class="content-box">L'arrière-plan s'arrête à la boîte de contenu.</p>
<p class="text">L'arrière-plan se limite au texte au premier-plan.</p>
```

### Résultat

{{EmbedLiveSample('Exemples', 600, 580)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("clip-path")}}
- Les propriétés relatives à l'arrière-plan :

  - {{cssxref("background")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("background-origin")}}

- [Le modèle de boîtes CSS](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte)
