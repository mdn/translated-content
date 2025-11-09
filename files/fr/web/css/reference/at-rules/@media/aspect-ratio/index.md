---
title: aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/aspect-ratio
original_slug: Web/CSS/@media/aspect-ratio
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`aspect-ratio`** peut être utilisée pour tester le {{glossary("aspect ratio", "rapport d'aspect")}} de la {{glossary("viewport", "zone d'affichage")}}.

## Syntaxe

La caractéristique `aspect-ratio` est définie avec un ratio (type CSS {{cssxref("&lt;ratio&gt;")}}) qui représente le ratio entre la largeur et la hauteur de la zone d'affichage . C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-aspect-ratio`** et **`max-aspect-ratio`** afin de cibler des règles CSS en fonction d'une valeur minimale ou maximale.

## Exemples

Dans l'exemple ci-dessous, un élément {{HTMLElement("div")}} est contenu dans un {{HTMLElement("iframe")}}. L'iframe crée sa propre zone d'affichage. Redimensionnez l'`<iframe>` pour voir `aspect-ratio` en action.

Notez que, lorsque aucune des conditions de requête média n'est vraie, l'arrière-plan devient blanc car aucune des règles ci-dessous ne s'applique au `<div>` à l'intérieur de l'`<iframe>`. Essayez de trouver quelles valeurs de largeur et de hauteur déclenchent ce comportement !

### HTML

```html
<iframe id="outer">
  <div id="inner">
    Watch this element as you resize iframe viewport's width and height.
  </div>
</iframe>
```

### CSS

```css
/* Rapport d'aspect minimal autorisé */
/* Sélectionne les rapports d'aspect 8/5 = 1,6 et plus */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9999ff; /* bleu */
  }
}

/* Rapport d'aspect maximal autorisé */
/* Sélectionne les rapports d'aspect 3/2 = 1,5 et moins */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #99ff99; /* vert */
  }
}

/* Rapport d'aspect exact, placer en bas pour éviter l'écrasement */
@media (aspect-ratio: 1/1) {
  div {
    background: #ff9999; /* rouge */
  }
}
```

### Résultat

```html hidden
<label id="wf" for="w">largeur&nbsp;: 165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165" />
<label id="hf" for="w">hauteur&nbsp;: 165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165" />
<label id="ratio">aspect-ratio&nbsp;: 165/165 = 1</label>

<iframe
  id="outer"
  srcdoc="<style> @media (min-aspect-ratio: 8/5) { div { background: #9999ff; } } @media (max-aspect-ratio: 3/2) { div { background: #99ff99; } } @media (aspect-ratio: 1/1) { div { background: #ff9999; } }</style><div id='inner'> Observez cet élément lorsque vous redimensionnez la largeur et la hauteur de la zone d'affichage de l'iframe.</div>">
</iframe>
```

```css hidden
iframe {
  display: block;
  border: 1px dashed black;
}
```

```js hidden
outer.style.width = outer.style.height = "165px";

const updateRatio = () => {
  ratio.textContent = `aspect-ratio : ${w.value}/${h.value} = ${(w.value / h.value).toFixed(2)}`;
};

w.onchange = w.oninput = () => {
  outer.style.width = `${w.value}px`;
  wf.textContent = `largeur : ${w.value}`;
  updateRatio();
};

h.onchange = h.oninput = () => {
  outer.style.height = `${h.value}px`;
  hf.textContent = `hauteur : ${h.value}`;
  updateRatio();
};
```

{{ EmbedLiveSample('résultat', '300px', '350px') }}

Remarquez que `min-aspect-ratio: 8/5` définit la borne _inférieure_ à 1,6, donc cette requête média sélectionne les éléments dont le rapport d'aspect est de 1,6 ou plus. `max-aspect-ratio: 3/2` définit la borne _supérieure_, donc cette requête média sélectionne les éléments dont le rapport d'aspect est de 1,5 ou moins. `aspect-ratio: 1/1` écrase la règle de rapport d'aspect maximal car elle est déclarée après et sélectionne les éléments dont le rapport d'aspect est exactement `1`.

Depuis l'état initial, lorsque vous réduisez la hauteur, le rapport d'aspect commence à augmenter à partir de un. Ainsi, la couleur de fond du div passe de rouge (1) < vert (1,5) < blanc < bleu (1,6).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Comprendre `aspect-ratio`](/fr/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
