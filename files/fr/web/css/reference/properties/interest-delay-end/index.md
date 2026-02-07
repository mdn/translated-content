---
title: interest-delay-end
slug: Web/CSS/Reference/Properties/interest-delay-end
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`interest-delay-end`** définit le délai entre le moment où l'utilisateur·ice cesse de montrer de l'intérêt pour un élément [invocateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) et le déclenchement de l'évènement {{DOMxRef("HTMLElement.loseinterest_event", "loseinterest")}}.

Les propriétés `interest-delay-end` et {{CSSxRef("interest-delay-start")}} peuvent toutes deux être définies à l'aide de la propriété raccourcie {{CSSxRef("interest-delay")}}.

## Syntaxe

```css
/* Mot-clé ou délai personnalisé */
interest-delay-end: normal;
interest-delay-end: 2s;
interest-delay-end: 250ms;

/* Valeurs globales */
interest-delay-end: inherit;
interest-delay-end: initial;
interest-delay-end: revert;
interest-delay-end: revert-layer;
interest-delay-end: unset;
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

### Créer un effet `interest-delay-end` simple

Dans cet exemple, nous montrons comment `interest-delay-end` affecte le comportement d'un invocateur d'intérêt.

#### HTML

Le balisage inclut un {{HTMLElement("button")}}, un {{HTMLElement("p")}} et un {{HTMLElement("input")}} de type `checkbox`. Nous définissons le `<button>` comme invocateur d'intérêt en lui donnant l'attribut `interestfor` dont la valeur correspond à l'`id` de l'élément `<p>`. Cela fait du paragraphe l'élément cible. Le paragraphe devient une fenêtre contextuelle grâce à l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), qui le masque initialement.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Bouton</button>
<p id="mypopover" popover>Info-bulle au survol</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Appliquer un <code>interest-delay-end</code> de <code>2s</code>
  </label>
</form>
```

#### CSS

Dans le CSS, nous définissons une règle avec le sélecteur `.delay` qui applique une valeur `interest-delay-end` de `2s` à tout invocateur d'intérêt auquel la classe `delay` est appliquée. Nous appliquerons cette classe au `<button>` lorsque la case à cocher sera cochée, avec JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-end: 2s;
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

Cochez maintenant la case et refaites les mêmes actions. Cette fois, le délai entre le fait de montrer de l'intérêt et l'apparition de la fenêtre contextuelle n'est pas modifié, mais le délai entre le fait de cesser de montrer de l'intérêt et la disparition de la fenêtre contextuelle doit être augmenté à `2s`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("interest-delay-start")}}, {{CSSxRef("interest-delay")}}
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [Utiliser les invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
- Le module [d'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
