---
title: ::highlight()
slug: Web/CSS/Reference/Selectors/::highlight
original_slug: Web/CSS/::highlight
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::highlight()`** applique des styles à une mise en évidence personnalisée.

Une mise en évidence personnalisée est une collection d'objets {{domxref("Range")}} et est enregistrée sur une page Web à l'aide de {{domxref("HighlightRegistry")}}.

Le pseudo-élément `::highlight()` suit un modèle d'héritage spécial commun à tous les pseudo-éléments de mise en évidence. Pour plus de détails sur le fonctionnement de cet héritage, consultez la section [Héritage des pseudo-éléments mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#héritage_des_pseudo-éléments_de_mise_en_évidence).

## Propriétés autorisées

Seules certaines propriétés CSS peuvent être utilisées avec `::highlight()`&nbsp;:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} et ses propriétés associées
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} et {{CSSxRef("-webkit-text-stroke-width")}}

En particulier, {{CSSxRef("background-image")}} est ignoré.

## Syntaxe

```css-nolint
::highlight(nom-de-mise-en-evidence-personnalisee)
```

## Exemples

### Mise en évidence des caractères

#### HTML

```html
<p id="rainbow-text">
  API CSS personnalisée pour la mise en évidence arc-en-ciel
</p>
```

#### CSS

```css
#rainbow-text {
  font-family: monospace;
  font-size: 1.5rem;
}

::highlight(rainbow-color-1) {
  color: violet;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: purple;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: blue;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: green;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: yellow;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: orange;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: red;
  text-decoration: underline;
}
```

#### JavaScript

```js
const textNode = document.getElementById("rainbow-text").firstChild;

if (!CSS.highlights) {
  textNode.textContent =
    "L'API CSS Custom Highlight n'est pas prise en charge dans ce" +
    "navigateur&nbsp;!";
}

// Créez et enregistrez des surlignages pour chaque couleur de l'arc-en-ciel.
const highlights = [];
for (let i = 0; i < 7; i++) {
  // Créez un nouveau surlignage pour cette couleur.
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // Enregistrez ce surlignage sous un nom personnalisé.
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// Itérer sur le texte, caractère par caractère.
for (let i = 0; i < textNode.textContent.length; i++) {
  // Créez un nouveau champ juste pour ce caractère.
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // Ajoutez le champ au surlignage disponible suivant,
  // en revenant au premier une fois que nous avons atteint le 7ème.
  highlights[i % 7].add(range);
}
```

#### Résultat

{{ EmbedLiveSample("mise_en_évidence_des_caractères") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module CSS de [Mise en évidence personnalisée](/fr/docs/Web/CSS/CSS_custom_highlight_API)
- L'[API CSS de mise en évidence personnalisée](/fr/docs/Web/API/CSS_Custom_Highlight_API)
- Le module de [pseudo-éléments CSS](/fr/docs/Web/CSS/CSS_pseudo-elements)
