---
title: "KeyframeEffect : propriété pseudoElement"
short-title: pseudoElement
slug: Web/API/KeyframeEffect/pseudoElement
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ APIRef("Web Animations") }}

La propriété **`pseudoElement`** de l'interface {{domxref("KeyframeEffect")}} est une chaîne de caractères représentant le pseudo-élément animé. Elle peut valoir `null` pour les animations qui ne ciblent pas de pseudo-élément. Elle agit comme accesseur et mutateur, sauf pour les animations et transitions générées par CSS.

> [!NOTE]
> Si elle est définie avec la syntaxe héritée à un seul deux-points (`:`) de {{cssxref("::before", ":before")}}, {{cssxref("::after", ":after")}}, {{cssxref("::first-letter", ":first-letter")}}, ou {{cssxref("::first-line", ":first-line")}}, la chaîne de caractères est transformée en sa version moderne à double deux-points ({{cssxref("::before")}}, {{cssxref("::after")}}, {{cssxref("::first-letter")}} et {{cssxref("::first-line")}} respectivement).

## Valeur

Une chaîne de caractères ou `null`.

## Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Erreur levée lors d'une tentative de définir cette propriété sur un élément, ou sur un pseudo-élément invalide (inexistant ou mal orthographié). La propriété reste alors inchangée.

## Exemples

```html
<div id="monTexte">Du texte</div>
<pre id="journal"></pre>
```

```css
#monTexte::after {
  content: "👹";
  display: inline-block; /* Nécessaire car la propriété `transform` ne
                            s'applique pas aux éléments inline */
  font-size: 2rem;
}
#monTexte::before {
  content: "🤠";
  display: inline-block;
  font-size: 2rem;
}
```

```js
const journal = document.getElementById("journal");
const monTexte = document.getElementById("monTexte");

// Crée l'animation
const animation = monTexte.animate([{ transform: "rotate(360deg)" }], {
  duration: 3000,
  iterations: Infinity,
  pseudoElement: "::after",
});

// Lit la valeur de KeyframeEffect.pseudoElement
function logPseudoElement() {
  const keyframeEffect = animation.effect;
  journal.textContent = `Valeur du pseudoElement animé : ${keyframeEffect.pseudoElement}`;
  requestAnimationFrame(logPseudoElement);
}

// Toutes les 6 secondes, bascule le pseudo-élément animé actif
function switchPseudoElement() {
  const keyframeEffect = animation.effect;
  keyframeEffect.pseudoElement =
    keyframeEffect.pseudoElement === "::after" ? "::before" : "::after";
  setTimeout(switchPseudoElement, 6000);
}

switchPseudoElement();
logPseudoElement();
```

{{EmbedLiveSample("exemples", "100", "90")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- L'interface {{domxref("KeyframeEffect")}}
- Le constructeur {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
- La propriété {{domxref("KeyframeEffect.target", "target")}}
