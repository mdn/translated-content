---
title: API de mise en évidence personnalisée CSS
short-title: API de mise en évidence personnalisée
slug: Web/CSS/Guides/Custom_highlight_API
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

Le module de **l'API de mise en évidence personnalisée avec CSS** fournit un moyen programmatique de cibler des plages de texte spécifiques définies par des objets de plage, sans affecter la structure DOM sous-jacente. Les objets de plage peuvent ensuite être sélectionnés avec des pseudo-éléments `::highlight()`, et des styles de mise en évidence peuvent être ajoutés et supprimés. Les fonctionnalités de ce module peuvent créer des effets de mise en évidence similaires à ceux des éditeurs de texte qui mettent en évidence les erreurs d'orthographe ou de grammaire, et des éditeurs de code qui mettent en évidence les erreurs de syntaxe.

L'API de mise en évidence personnalisée CSS étend le concept d'autres pseudo-éléments de mise en évidence tels que {{CSSxRef("::selection")}}, {{CSSxRef("::spelling-error")}}, {{CSSxRef("::grammar-error")}}, et {{CSSxRef("::target-text")}} en fournissant un moyen de créer des plages de texte arbitraires (définies comme des objets {{DOMxRef("Range")}} en JavaScript) et de les mettre en forme avec CSS, plutôt que d'être limité aux plages définies par le navigateur.

## L'API de mise en évidence personnalisée en action

Pour permettre le style des plages de texte sur une page Web en utilisant l'API de mise en évidence personnalisée CSS, vous créez un objet {{DOMxRef("Range")}}, puis un objet {{DOMxRef("Highlight")}} pour la plage. Après avoir enregistré la mise en évidence à l'aide de la méthode {{DOMxRef("HighlightRegistry.set()")}}, vous pouvez ensuite sélectionner la plage à l'aide du pseudo-élément {{CSSxRef("::highlight()")}}. Le nom défini dans la méthode `set()` est utilisé comme paramètre du sélecteur du pseudo-élément `::highlight()` pour sélectionner cette plage. La plage sélectionnée par le pseudo-élément `::highlight()` peut être mise en forme en utilisant un [nombre limité de propriétés](/fr/docs/Web/CSS/Reference/Selectors/::highlight#propriétés_autorisées).

```html-nolint hidden
<h1>Directions</h1>
<h2>Mémorial Lincoln à Mémorial Martin Luther King, Jr.</h2>
<ol><li
  >Dirigez-vous vers le sud sur Lincoln Memorial Circle</li
  ><li>Tournez à droite vers Independence Ave</li
  ><li>Tournez à gauche sur Independence Ave</li
  ><li>Tournez à droite sur West Basin Dr</li
  ><li>Levez les yeux lorsque vous atteignez 64 Independence Ave&nbsp;!</li>
</ol>
<hr />
<label
  >Nombre d'étapes terminées&nbsp;:
  <input type="number" min="0" max="5" value="0" id="etapeActuelle" />
</label>
```

Cet exemple utilise la propriété {{CSSxRef("text-decoration")}} pour barrer la plage de mise en évidence `etapes` définie par notre JavaScript&nbsp;:

```css
::highlight(etapes) {
  text-decoration: line-through;
  color: blue;
}
```

Nous créons un objet `Range` avec un nœud de début et un nœud de fin (qui est le même nœud dans ce cas). Nous définissons ensuite cette plage comme un `Highlight` en utilisant la méthode `set()` de l'interface CSS `HighlightRegistry`.

```js
const plageEnEvidence = new Range();
const liste = document.querySelector("ol");
plageEnEvidence.setStart(liste, 0);
plageEnEvidence.setEnd(liste, 0);

CSS.highlights.set("etapes", new Highlight(plageEnEvidence));
```

Un écouteur d'évènements met à jour la fin de la plage mise en évidence lorsque le nombre d'étapes terminées change&nbsp;:

```js
const positionActuelleCurseur = document.querySelector("input");
positionActuelleCurseur.addEventListener("change", (e) => {
  plageEnEvidence.setEnd(liste, e.target.value);
});
```

{{EmbedLiveSample("L'API de mise en évidence personnalisée en action", 700, 300)}}

## Référence

### Pseudo-éléments

- {{CSSxRef("::highlight()")}}

### Interfaces

- {{DOMxRef("Highlight")}}
- {{DOMxRef("HighlightRegistry")}}

### Extensions d'interface

Ce module ajoute des propriétés et des méthodes aux interfaces définies dans d'autres spécifications.

- {{DOMxRef("CSS")}}
  - {{DOMxRef("CSS.highlights")}}

## Guides

- [L'API de mise en évidence personnalisée CSS](/fr/docs/Web/API/CSS_Custom_Highlight_API#concepts_et_utilisation)
  - : Les concepts et l'utilisation de l'API de mise en évidence personnalisée CSS, y compris la création d'objets `Range` et `Highlight`, l'enregistrement des mises en évidence à l'aide de `HighlightRegistry` et le style des mises en évidence à l'aide du pseudo-élément `::highlight()`.

## Concepts associés

- {{CSSxRef("::grammar-error")}}
- {{CSSxRef("::selection")}}
- {{CSSxRef("::spelling-error")}}
- {{CSSxRef("::target-text")}}
- L'interface {{DOMxRef("AbstractRange")}}
- L'interface {{DOMxRef("Range")}} et le constructeur {{DOMxRef("Range.range", "Range()")}}
- [Fragments de texte](/fr/docs/Web/URI/Reference/Fragment/Text_fragments)
- L'interface {{DOMxRef("FragmentDirective")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [des pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
- Les APIs [CSS Object Model (CSSOM)](/fr/docs/Web/API/CSS_Object_Model)
