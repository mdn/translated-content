---
title: interest-delay
slug: Web/CSS/Reference/Properties/interest-delay
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`interest-delay`** définit le délai entre le moment où l'utilisateur·ice montre de l'intérêt pour un élément [invocateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) et le déclenchement de l'évènement {{DOMxRef("HTMLElement.interest_event", "interest")}}, et le délai entre le moment où l'utilisateur·ice cesse de montrer de l'intérêt et le déclenchement de l'évènement {{DOMxRef("HTMLElement.loseinterest_event", "loseinterest")}}.

## Propriétés constitutives

La propriété `interest-delay` est un raccourci pour les propriétés suivantes&nbsp;:

- {{CSSxRef("interest-delay-start")}}
- {{CSSxRef("interest-delay-end")}}

## Syntaxe

```css
/* Valeurs uniques */
interest-delay: normal;
interest-delay: 2s;
interest-delay: 250ms;

/* Valeurs doubles */
interest-delay: 1s normal;
interest-delay: 0s 500ms;

/* Valeurs globales */
interest-delay: inherit;
interest-delay: initial;
interest-delay: revert;
interest-delay: revert-layer;
interest-delay: unset;
```

### Valeurs

La propriété `interest-delay` accepte une ou deux valeurs. La première valeur définit le délai avant que l'intérêt ne soit montré (`interest-delay-start`)&nbsp;; la seconde valeur, si elle est fournie, définit le délai avant que l'intérêt ne soit perdu (`interest-delay-end`). Chaque valeur peut être soit le mot-clé `normal`, soit une valeur {{CSSxRef("&lt;time&gt;")}}&nbsp;:

- `normal`
  - : Définit le délai par défaut du navigateur. Il s'agit de la valeur initiale.
- {{CSSxRef("&lt;time&gt;")}}
  - : Définit le délai à une durée spécifique. La valeur doit être positive, sinon la propriété devient invalide.

## Description

Un élément de contrôle tel que {{HTMLElement("a")}} ou {{HTMLElement("button")}} peut être défini comme un [invicateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) en lui attribuant l'attribut [`interestfor`](/fr/docs/Web/HTML/Reference/Elements/a#interestfor). Lorsque cette relation est établie, l'élément cible est affecté lorsque l'utilisateur·ice «&nbsp;montre de l'intérêt&nbsp;» pour l'invocateur (par exemple, en le survolant ou en le sélectionnant). Un cas d'utilisation courant est d'afficher une fenêtre contextuelle au survol ou à la sélection. Quand l'utilisateur·ice «&nbsp;cesse de montrer de l'intérêt&nbsp;», l'effet s'arrête.

Quand l'utilisateur·ice montre ou perd de l'intérêt, l'effet associé ne commence ou ne s'arrête pas immédiatement — le navigateur ajoute un court délai (qui peut varier selon le navigateur). Cela empêche, par exemple, les [fenêtres contextuelles de prévisualisation](/fr/docs/Web/API/Popover_API/Using_interest_invokers#utiliser_les_invocateurs_dintérêt_pour_créer_des_fenêtres_contextuelles_daperçu) d'apparaître immédiatement quand l'utilisateur·ice survole un lien, ce qui pourrait être gênant et distrayant sur une page contenant de nombreux liens.

La propriété `interest-delay` permet de personnaliser ces délais. Vous pouvez utiliser `interest-delay` pour définir le délai avant que l'effet d'intérêt ne commence (défini par la propriété {{CSSxRef("interest-delay-start")}}) et le délai avant que l'effet d'intérêt ne se termine (défini par la propriété {{CSSxRef("interest-delay-end")}}) dans une seule déclaration.

La propriété `interest-delay` peut prendre une ou deux valeurs. Ces valeurs peuvent être le mot-clé `normal`, qui définit le délai par défaut du navigateur, ou une valeur {{CSSxRef("&lt;time&gt;")}}, qui définit un délai personnalisé.
Si une seule valeur est spécifiée, elle s'applique à la fois à {{CSSxRef("interest-delay-start")}} et à {{CSSxRef("interest-delay-end")}}. Si deux valeurs sont spécifiées, la première valeur définit {{CSSxRef("interest-delay-start")}}, et la seconde valeur définit {{CSSxRef("interest-delay-end")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer un effet `interest-delay` simple

Dans cet exemple, nous montrons comment `interest-delay` affecte le comportement d'un invocateur d'intérêt.

#### HTML

Le balisage inclut un {{HTMLElement("button")}}, un {{HTMLElement("p")}} et un {{HTMLElement("input")}} de type `checkbox`. Nous définissons le `<button>` comme invocateur d'intérêt en lui donnant l'attribut `interestfor` dont la valeur correspond à l'`id` de l'élément `<p>`. Cela fait du paragraphe l'élément cible. Le paragraphe devient un popover grâce à l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), qui le masque initialement.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Bouton</button>
<p id="mypopover" popover>Info-bulle au survol</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Appliquer un <code>interest-delay</code> de <code>1s 2s</code>
  </label>
</form>
```

#### CSS

Dans le CSS, nous définissons une règle `.delay` qui applique une valeur `interest-delay` de `1s 2s` à tout invocateur d'intérêt auquel la classe `delay` est appliquée. Nous appliquerons cette classe au `<button>` lorsque la case à cocher sera cochée, avec JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay: 1s 2s;
}
```

#### JavaScript

Dans notre script, nous récupérons les références du `<button>` et de la case à cocher, puis nous créons un écouteur d'évènement qui bascule la classe `delay` sur le `<button>` à chaque changement de valeur de la case (cochée ou décochée).

```js live-sample___interest-invoker-delay
const btn = document.querySelector("button");
const checkbox = document.querySelector("input");
checkbox.addEventListener("change", () => {
  btn.classList.toggle("delay");
});
```

#### Résultat

Ceci s'affiche ainsi&nbsp;:

{{EmbedLiveSample("interest-invoker-delay", "100%", 100)}}

Essayez de montrer de l'intérêt pour le bouton (par exemple, en le survolant ou en le sélectionnant), puis de cesser de montrer de l'intérêt pour observer l'affichage et la disparition de la fenêtre contextuelle. Par défaut, la fenêtre contextuelle s'affiche et disparaît après un très court délai.

Cochez maintenant la case et refaites les mêmes actions. Cette fois, la fenêtre contextuelle devrait apparaître après un délai de `1s` lorsque l'intérêt est montré, et disparaître après un délai de `2s` lorsque l'intérêt est perdu.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("interest-delay-start")}}, {{CSSxRef("interest-delay-end")}}
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [Utiliser les invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
- Le module [d'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
