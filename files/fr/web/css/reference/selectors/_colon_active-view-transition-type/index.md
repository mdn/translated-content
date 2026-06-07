---
title: Pseudo-classe CSS `:active-view-transition-type()`
short-title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:active-view-transition-type()`** correspond aux éléments lorsqu'une transition de vue avec un ou plusieurs types spécifiques est en cours (est _active_) et cesse de correspondre une fois la transition de vue terminée.

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

## Syntaxe

```css-nolint
:active-view-transition-type(<custom-ident>#) {
  /* ... */
}
```

### Paramètres

- `<custom-ident>#`
  - : Une ou plusieurs valeurs {{CSSxRef("&lt;custom-ident&gt;")}} séparées par des virgules représentant le choix des types qui peuvent être appliqués à la transition de vue active pour que ce sélecteur corresponde.

## Description

[Les types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types) fournissent un mécanisme permettant de définir différents **types** pour les transitions de vue actives. Les types peuvent être définis sur les transitions de vue de plusieurs façons&nbsp;:

- Pour les transitions de vue sur le même document (SPA), définir les types dans l'option [`types`](/fr/docs/Web/API/Document/startViewTransition#types) de la méthode {{DOMxRef("Document.startViewTransition", "startViewTransition()")}}.
- Pour les transitions de vue inter-documents, définir les types dans le descripteur [`types`](/fr/docs/Web/CSS/Reference/At-rules/@view-transition#types) de la règle {{CSSxRef("@view-transition")}}.
- Il est aussi possible de modifier les types de la transition de vue active à la volée grâce à la propriété {{DOMxRef("ViewTransition.types", "types")}} de l'objet `ViewTransition` correspondant&nbsp;:
  - Pour les transitions de vue sur le même document, il s'agit de l'objet `ViewTransition` retourné par la méthode `startViewTransition()`.
  - Pour les transitions de vue inter-documents, l'objet `ViewTransition` est disponible dans la propriété {{DOMxRef("PageSwapEvent.viewTransition", "viewTransition")}} de l'objet d'évènement {{DOMxRef("Window.pageswap_event", "pageswap")}} pour la page sortante, et dans la propriété {{DOMxRef("PageRevealEvent.viewTransition", "viewTransition")}} de l'objet d'évènement {{DOMxRef("Window.pagereveal_event", "pagereveal")}} pour la page entrante.
  - Il est aussi possible d'accéder à la `ViewTransition` active grâce à la propriété {{DOMxRef("Document.activeViewTransition")}}. Cela permet d'accéder de façon cohérente à la transition de vue active dans n'importe quel contexte.

Une fois que la transition de vue active possède un ou plusieurs types définis, la pseudo-classe `:active-view-transition-type()` peut être appliquée à l'élément racine du document pour définir des styles personnalisés pour chaque type. La pseudo-classe prend une liste de types séparés par des virgules comme argument pour définir les types qui peuvent être appliqués à la transition de vue active afin que le sélecteur corresponde.

Par exemple, il est possible de vouloir appliquer différentes animations de transition à un élément HTML {{HTMLElement("img")}} dans une application de galerie d'images lorsque l'image affichée change, selon que vous avancez ou reculez dans la séquence, que vous supprimez une image ou que vous en ajoutez une dans la séquence.

### Comportement OR et AND

Il est important de noter que la liste des types séparés par des virgules définie à l'intérieur de la pseudo-classe `:active-view-transition-type()` fournit un comportement <i lang="en">OR</i> («&nbsp;ou&nbsp;») — si un ou plusieurs de ces types sont définis sur la transition de vue active, le sélecteur correspondra.

Par exemple, dans ce cas, le sélecteur correspondra si la transition de vue active possède le type `forwards`, `backwards` ou les deux&nbsp;:

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

Si vous souhaitez définir un comportement <i lang="en">AND</i> («&nbsp;et&nbsp;») — c'est-à-dire que tous les types doivent être définis pour que le sélecteur corresponde — vous pouvez le faire en enchaînant plusieurs pseudo-classes `:active-view-transition-type()` ensemble. Dans le cas suivant, le sélecteur ne correspondra que si la transition de vue active possède les types `slide` _et_ `forwards`&nbsp;:

```css
html:active-view-transition-type(slide):active-view-transition-type(forwards) {
  /* ... */
}
```

## Exemples

Voir aussi [Utiliser les types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types) pour plusieurs exemples complets.

### Utilisation simple de `:active-view-transition-type()`

Cet exemple inclut un document simple qui effectue une transition entre deux contenus différents grâce à deux boutons distincts, «&nbsp;Précédent&nbsp;» et «&nbsp;Suivant&nbsp;». Nous montrons comment les types de transition de vue peuvent être utilisés pour animer la transition différemment selon le bouton qui a été pressé.

#### HTML

La structure inclut un seul élément HTML {{HTMLElement("p")}} pour contenir le contenu et deux éléments HTML {{HTMLElement("button")}} pour déclencher les transitions de vue.

```html live-sample___basic_usage
<p>Ceci est mon premier contenu. J'espère qu'il vous plaira&nbsp;!</p>
<div>
  <button id="precedent">Précédent</button>
  <button id="suivant">Suivant</button>
</div>
```

#### JavaScript

Dans notre script, nous créons des références vers les deux boutons et le paragraphe de contenu, puis nous stockons nos deux contenus différents dans deux constantes.

```js live-sample___basic_usage
const backBtn = document.getElementById("precedent");
const fwdBtn = document.getElementById("suivant");
const content = document.querySelector("p");

const premier = "Ceci est mon premier contenu. J'espère qu'il vous plaira !";
const second = "Ceci est mon second contenu. Est-il meilleur que le premier ?";
```

Ensuite, nous ajoutons des écouteurs d'évènements `click` aux boutons précédent et suivant&nbsp;; lorsqu'ils sont cliqués, la fonction `changerContenu()` est exécutée.

```js live-sample___basic_usage
backBtn.addEventListener("click", changerContenu);
fwdBtn.addEventListener("click", changerContenu);
```

Enfin, nous définissons la fonction `changerContenu()`. Nous commençons par déclarer une valeur `type` qui contiendra la valeur du type de transition de vue. Si la cible de l'évènement est le bouton «&nbsp;Précédent&nbsp;», nous définissons `type` sur `precedent`. Sinon, nous définissons `type` sur `suivant`. Nous invoquons ensuite la méthode {{DOMxRef("Document.startViewTransition", "startViewTransition()")}} pour mettre à jour le contenu et démarrer la transition&nbsp;:

- Le rappel `update` vérifie si le `textContent` du paragraphe est égal à la chaîne de caractères `premier`. Si c'est le cas, nous la définissons sur la chaîne de caractères `second`. Sinon, nous la définissons sur la chaîne de caractères `premier`.
- Le tableau `types` reçoit un seul élément&nbsp;: la valeur `type` que nous avons déclarée précédemment.

```js live-sample___basic_usage
function changerContenu(e) {
  const type = e.target === backBtn ? "precedent" : "suivant";
  document.startViewTransition({
    update() {
      content.textContent === premier
        ? (content.textContent = second)
        : (content.textContent = premier);
    },
    types: [type],
  });
}
```

#### CSS

Dans nos styles, nous commençons par créer un ensemble de règles imbriquées utilisant la pseudo-classe `:active-view-transition`. Ces styles seront appliqués chaque fois qu'une transition de vue est active, quel que soit leur type. Nous appliquons une {{CSSxRef("view-transition-name")}} de `none` à la {{CSSxRef(":root")}}, car nous ne voulons pas que des éléments soient capturés et animés lors de la transition, à l'exception de l'élément `<p>`, auquel nous attribuons une `view-transition-name` de `slide`.

```css hidden live-sample___basic_usage
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  width: 60%;
  justify-content: space-between;
}

p {
  font-size: 1.7em;
  width: 60%;
  color: blue;
  margin-top: 0;
}
```

```css live-sample___basic_usage
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  p {
    view-transition-name: slide;
  }
}
```

Ensuite, nous utilisons la pseudo-classe `:active-view-transition-type()` pour créer deux blocs de styles imbriqués, le premier n'est appliqué que lorsque la transition de vue active possède un type `suivant`, et le second n'est appliqué que lorsque la transition de vue active possède un type `precedent`. Dans chaque bloc, nous utilisons les pseudo-éléments {{CSSxRef("::view-transition-old()")}} et {{CSSxRef("::view-transition-new()")}} pour appliquer des valeurs personnalisées {{CSSxRef("animation-name")}} aux vues sortantes et entrantes du groupe de capture `slide`.

Ainsi&nbsp;:

- Lorsque le type de transition est `suivant`, la vue du contenu ancien glisse vers la gauche, et la vue du nouveau contenu glisse depuis la droite.
- Lorsque le type de transition est `precedent`, la vue du contenu ancien glisse vers la droite, et la vue du nouveau contenu glisse depuis la gauche.

```css live-sample___basic_usage
html:active-view-transition-type(suivant) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(precedent) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-left;
  }
}
```

Enfin, nous utilisons des blocs d'animation {{CSSxRef("@keyframes")}} pour définir les animations référencées précédemment.

```css live-sample___basic_usage
@keyframes slide-in-from-left {
  from {
    translate: -100vw 0;
  }
}
@keyframes slide-in-from-right {
  from {
    translate: 100vw 0;
  }
}
@keyframes slide-out-to-left {
  to {
    translate: -100vw 0;
  }
}
@keyframes slide-out-to-right {
  to {
    translate: 100vw 0;
  }
}
```

#### Résultat

L'exemple est affiché ainsi&nbsp;:

{{EmbedLiveSample("basic-usage", "100%", 200)}}

Essayez de cliquer sur les boutons «&nbsp;Précédent&nbsp;» et «&nbsp;Suivant&nbsp;», et remarquez que, même si le même code est utilisé pour déclencher la mise à jour du contenu et la transition de vue dans chaque cas, une animation différente est utilisée pour la transition. Cela s'explique par le fait qu'un type de transition différent est défini selon le bouton qui a été pressé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété API {{DOMxRef("Document.activeViewTransition")}}
- La pseudo-classe {{CSSxRef(":active-view-transition")}}
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
- [Utiliser l'API View Transition](/fr/docs/Web/API/View_Transition_API/Using)
- [Utiliser les types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types)
