---
title: interest-delay-start
slug: Web/CSS/Reference/Properties/interest-delay-start
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`interest-delay-start`** définit le délai entre le moment où l'utilisateur·ice montre de l'intérêt pour un élément [invocateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) et le déclenchement de l'évènement {{DOMxRef("HTMLElement.interest_event", "interest")}}.

Les propriétés `interest-delay-start` et {{CSSxRef("interest-delay-end")}} peuvent toutes deux être définies à l'aide de la propriété raccourcie {{CSSxRef("interest-delay")}}.

## Syntaxe

```css
/* Mot-clé ou délai personnalisé */
interest-delay-start: normal;
interest-delay-start: 2s;
interest-delay-start: 250ms;

/* Valeurs globales */
interest-delay-start: inherit;
interest-delay-start: initial;
interest-delay-start: revert;
interest-delay-start: revert-layer;
interest-delay-start: unset;
```

### Valeurs

- `normal`
  - : Définit le délai par défaut du navigateur. Il s'agit de la valeur initiale.
- {{CSSxRef("&lt;time&gt;")}}
  - : Définit le délai à une durée spécifique. La valeur doit être positive, sinon la propriété devient invalide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer un effet `interest-delay-start` simple

Dans cet exemple, nous montrons comment `interest-delay-start` affecte le comportement d'un invocateur d'intérêt.

#### HTML

Le balisage inclut un {{HTMLElement("button")}}, un {{HTMLElement("p")}} et un {{HTMLElement("input")}} de type `checkbox`. Nous définissons le `<button>` comme invocateur d'intérêt en lui donnant l'attribut `interestfor` dont la valeur correspond à l'`id` de l'élément `<p>`. Cela fait du paragraphe l'élément cible. Le paragraphe devient une fenêtre contextuelle grâce à l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), qui le masque initialement.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Bouton</button>
<p id="mypopover" popover>Info-bulle au survol</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Appliquer un <code>interest-delay-start</code> de <code>2s</code>
  </label>
</form>
```

#### CSS

Dans le CSS, nous définissons une règle avec le sélecteur `.delay` qui applique une valeur `interest-delay-start` de `2s` à tout invocateur d'intérêt auquel la classe `delay` est appliquée. Nous appliquerons cette classe au `<button>` lorsque la case à cocher sera cochée, avec JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-start: 2s;
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

Cochez maintenant la case et refaites les mêmes actions. Cette fois, la fenêtre contextuelle devrait apparaître après un délai de `2s` lorsque l'intérêt est montré. Le délai après la perte d'intérêt ne doit pas être modifié.

### Retirer `interest-delay-start` après que l'intérêt a été montré

Dans cet exemple, nous montrons comment retirer `interest-delay-start` de plusieurs éléments invocateurs d'intérêt après que l'intérêt a été montré sur l'un d'eux.

Il s'agit d'une technique utile. Faire apparaître une fenêtre contextuelle dès que l'intérêt est montré sur un invocateur créerait une expérience utilisateur gênante et distrayante, c'est pourquoi les navigateurs ajoutent un petit délai par défaut (voir la [description de `interest-delay`](/fr/docs/Web/CSS/Reference/Properties/interest-delay#description) pour plus de détails). Cependant, une fois que les utilisateur·ice·s ont montré de l'intérêt pour un invocateur, il est pratique de leur permettre de passer rapidement à d'autres invocateurs sans délai.

#### HTML

Le balisage inclut trois éléments `<button>` enveloppés dans un paragraphe avec la classe `container`, et un autre paragraphe qui a été transformé en fenêtre contextuelle grâce à l'attribut `popover`. Les trois boutons sont configurés comme invocateurs d'intérêt et référencent la fenêtre contextuelle comme cible à l'aide de l'attribut `interestfor`.

```html live-sample___interest-delay-remove-on-interest
<p class="container">
  <button interestfor="mypopover">Bouton 1</button>
  <button interestfor="mypopover">Bouton 2</button>
  <button interestfor="mypopover">Bouton 3</button>
</p>
<p id="mypopover" popover>Info-bulle au survol</p>
```

#### CSS

Dans le CSS, nous appliquons une valeur `interest-delay-start` de `1s` aux boutons, puis nous positionnons la fenêtre contextuelle sous le bouton sur lequel l'intérêt est montré en lui donnant une valeur {{CSSxRef("position-area")}} de `bottom` (voir [Positionnement d'ancrage des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#positionnement_dancrage_des_fenêtres_contextuelles) pour plus d'informations).

```css live-sample___interest-delay-remove-on-interest
button {
  interest-delay-start: 1s;
}

#mypopover {
  position-area: bottom;
}
```

Enfin, nous combinons la pseudo-classe {{CSSxRef(":interest-source")}} avec la pseudo-classe {{CSSxRef(":has()")}} pour appliquer `interest-delay-start: 0s` à tous les boutons à l'intérieur du paragraphe, mais uniquement lorsque le paragraphe contient un bouton sur lequel l'intérêt a été montré (c'est-à-dire, correspondant à `button:interest-source`).

```css live-sample___interest-delay-remove-on-interest
.container:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

#### Résultat

Ceci s'affiche ainsi&nbsp;:

{{EmbedLiveSample("interest-delay-remove-on-interest", "100%", 100)}}

Essayez de montrer de l'intérêt pour n'importe quel bouton et remarquez que, lorsque vous montrez immédiatement de l'intérêt pour un autre bouton, la fenêtre contextuelle apparaît sans délai. Si vous cessez de montrer de l'intérêt pour les boutons puis recommencez, le délai initial reviendra.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("interest-delay-end")}}, {{CSSxRef("interest-delay")}}
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [Utiliser les invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
- Le module [d'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
