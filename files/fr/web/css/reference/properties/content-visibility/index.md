---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`content-visibility`** détermine si un élément affiche son contenu ou non, tout en forçant un solide jeu de restrictions permettant aux agents utilisateurs de potentiellement omettre de larges pans de la mise en page et du travail de rendu jusqu'au moment où le contenu doit être affiché. Fondamentalement, cela permet à l'agent utilisateur d'éviter le travail de rendu d'un élément (comprenant sa mise en page et sa peinture) tant qu'il n'y en a pas besoin — ce qui accélère la vitesse de chargement de la page initiale.

> [!NOTE]
> L'évènement {{DOMxRef("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} se déclenche sur tout élément ayant la propriété `content-visibility: auto` lorsque le travail de rendu commence ou cesse d'être ignoré. Cela offre un moyen pratique pour le code d'une application de démarrer ou d'arrêter des processus de rendu (par exemple, dessiner sur un {{HTMLElement("canvas")}}) lorsqu'ils ne sont pas nécessaires, permettant ainsi d'économiser de la puissance de traitement.

{{InteractiveExample("Démonstration CSS&nbsp;: content-visibility")}}

```css interactive-example-choice
content-visibility: visible;
```

```css interactive-example-choice
content-visibility: hidden;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="container" id="example-element">
    <div class="child">
      <span>Ceci est une div interne</span>
    </div>
  </div>
</section>
```

```css interactive-example
.container {
  width: 140px;
  height: 140px;
  border: 3px solid rgb(64 28 163);
  background-color: rgb(135 136 184);
  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  border: 3px solid rgb(64 28 163);
  background-color: wheat;
  color: black;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Valeurs globales */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### Valeurs

- `visible`
  - : Aucun effet. Les contenus de l'élément sont disposés et rendus normalement. C'est la valeur par défaut.
- `hidden`
  - : L'élément [ignore son contenu](/fr/docs/Web/CSS/Guides/Containment/Using#ignore_son_contenu). Le contenu ignoré ne doit pas être accessible aux fonctionnalités de l'agent utilisateur telles que la recherche dans la page, la navigation par ordre de tabulation, etc., ni être sélectionnable ou pouvoir recevoir la sélection. Cela est similaire à l'utilisation de `display: none` sur ces contenus.
- `auto`
  - : L'élément active la compartimentation de la mise en page, du style et de la peinture. Si l'élément n'est pas [pertinent pour l'utilisateur·ice](/fr/docs/Web/CSS/Guides/Containment/Using#pertinent_pour_lutilisatrice_et_lutilisateur), il ignore aussi son contenu. Contrairement à la valeur hidden, le contenu ignoré doit rester accessible normalement aux fonctionnalités de l'agent utilisateur telles que la recherche dans la page, la navigation par ordre de tabulation, etc., et il doit pouvoir être sélectionné et recevoir la sélection normalement.

## Description

### Animer et effectuer des transitions avec `content-visibility`

[Les navigateurs compatibles](#compatibilité_des_navigateurs) animent ou effectuent des transitions sur `content-visibility` avec une variante du [type d'animation discrète](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète).

L'animation discrète signifie généralement que la propriété bascule entre deux valeurs à 50% de la durée de l'animation. Dans le cas de `content-visibility`, cependant, le navigateur bascule entre les deux valeurs pour afficher le contenu animé pendant toute la durée de l'animation. Par exemple&nbsp;:

- Lorsqu'on anime `content-visibility` de `hidden` vers `visible`, la valeur bascule sur `visible` à 0% de la durée de l'animation, elle reste donc visible tout du long.
- Lorsqu'on anime `content-visibility` de `visible` vers `hidden`, la valeur bascule sur `hidden` à 100% de la durée de l'animation, elle reste donc visible tout du long.

Ce comportement est utile pour créer des animations d'entrée ou de sortie où vous souhaitez, par exemple, retirer du contenu du DOM avec `content-visibility: hidden`, mais vous voulez une transition fluide (comme un fondu) plutôt qu'une disparition immédiate.

Lorsque vous animez `content-visibility` avec les [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions), il faut définir {{CSSxRef("transition-behavior", "transition-behavior: allow-discrete")}} sur `content-visibility`. Cela active effectivement les transitions de `content-visibility`.

> [!NOTE]
> Lorsque vous effectuez une transition sur la valeur `content-visibility` d'un élément, il n'est pas nécessaire de fournir un ensemble de valeurs de départ pour les propriétés en transition à l'aide d'un bloc {{CSSxRef("@starting-style")}}, comme c'est le cas lors de la [transition de `display`](/fr/docs/Web/CSS/Reference/Properties/display#animating_display). Cela s'explique par le fait que `content-visibility` ne masque pas un élément du DOM comme le fait `display`&nbsp;: il se contente d'ignorer le rendu du contenu de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Le contenu hors écran avec la propriété `content-visibility: auto` reste dans le modèle objet du document et dans l'arbre d'accessibilité. Cela permet d'améliorer les performances de la page avec `content-visibility: auto` sans nuire à l'accessibilité.

Comme les styles du contenu hors écran ne sont pas rendus, les éléments volontairement masqués avec `display: none` ou `visibility: hidden` _apparaîtront tout de même dans l'arbre d'accessibilité_.
Si vous ne souhaitez pas qu'un élément apparaisse dans l'arbre d'accessibilité, utilisez `aria-hidden="true"`.

## Exemples

### Utiliser la valeur `auto` pour réduire les coûts de rendu des pages longues

L'exemple suivant montre l'utilisation de la valeur `content-visibility: auto` pour éviter la peinture et le rendu des sections situées en dehors de l'écran.
Lorsque une balise `section` est en dehors de la zone d'affichage, la peinture du contenu est ignorée jusqu'à ce que la section se rapproche de la zone d'affichage, ce qui aide à la fois le chargement et les interactions sur la page.

#### HTML

```html
<section>
  <!-- Contenu pour chaque section… -->
</section>
<section>
  <!-- Contenu pour chaque section… -->
</section>
<section>
  <!-- Contenu pour chaque section… -->
</section>
<!-- … -->
```

#### CSS

La propriété `contain-intrinsic-size` ajoute une taille par défaut de 500px à la hauteur et à la largeur de chaque élément `section`. Après le rendu d'une section, elle conserve sa taille intrinsèque rendue, même lorsqu'elle est défilée hors de la zone d'affichage.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Utiliser la valeur `hidden` pour gérer la visibilité manuellement

L'exemple suivant montre qu'il est possible de gérer la visibilité à l'aide de JavaScript.
La valeur ajoutée de l'utilisation de `content-visibility: hidden` par exemple à la place de `display: none` est que le contenu rendu masqué avec `content-visibility` préservera l'état de son rendu. Cela signifie que si le contenu est à nouveau affiché, il sera rendu plus rapidement qu'en modifiant la propriété `display`.

#### HTML

```html
<div class="hidden">
  <button class="toggle">Afficher</button>
  <p>
    Ce contenu est initialement masqué et peut être affiché en cliquant sur le
    bouton.
  </p>
</div>
<div class="visible">
  <button class="toggle">Masquer</button>
  <p>
    Ce contenu est initialement visible et peut être masqué en cliquant sur le
    bouton.
  </p>
</div>
```

#### CSS

La propriété `content-visibility` est appliquée aux paragraphes qui sont des enfants directs des éléments ayant les classes `visible` et `hidden`. Dans notre exemple, vous pouvez afficher ou masquer le contenu des paragraphes selon la classe CSS des éléments `div` parents.

La propriété `contain-intrinsic-size` est incluse pour représenter la taille du contenu. Cela aide à réduire le décalage de mise en page lorsque le contenu est masqué.

```css
p {
  contain-intrinsic-size: 0 1.1em;
  border: dotted 2px;
}

.hidden > p {
  content-visibility: hidden;
}

.visible > p {
  content-visibility: visible;
}
```

#### JavaScript

```js
const handleClick = (event) => {
  const button = event.target;
  const div = button.parentElement;
  button.textContent = div.classList.contains("visible")
    ? "Afficher"
    : "Masquer";
  div.classList.toggle("hidden");
  div.classList.toggle("visible");
};

document.querySelectorAll("button.toggle").forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

#### Résultat

{{EmbedLiveSample("Utiliser la valeur `hidden` pour gérer la visibilité manuellement")}}

### Animer `content-visibility`

Dans cet exemple, vous avez un élément HTML {{HTMLElement("div")}}, dont le contenu peut être affiché ou masqué en cliquant ou en appuyant sur n'importe quelle touche.

#### HTML

```html
<p>
  Cliquez n'importe où sur l'écran ou appuyez sur une touche pour basculer le
  contenu du <code>&lt;div&gt;</code> entre masqué et affiché.
</p>

<div>
  Ceci est un élément <code>&lt;div&gt;</code> qui s'anime entre
  <code>content-visibility: hidden;</code> et
  <code>content-visibility: visible;</code>. La couleur du texte est aussi
  animée pour créer un effet de transition fluide.
</div>
```

#### CSS

Dans le CSS, nous définissons d'abord `content-visibility: hidden;` sur le `<div>` pour masquer son contenu. Nous créons ensuite des animations `@keyframes` et les attachons à des classes pour afficher et masquer le `<div>`, en animant `content-visibility` et {{CSSxRef("color")}} afin d'obtenir un effet de transition fluide lorsque le contenu est affiché ou masqué.

```css
div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  content-visibility: hidden;
}

/* Classes d'animations */

.show {
  animation: show 0.7s ease-in forwards;
}

.hide {
  animation: hide 0.7s ease-out forwards;
}

/* Images-clés de l'animation */

@keyframes show {
  0% {
    content-visibility: hidden;
    color: transparent;
  }

  100% {
    content-visibility: visible;
    color: black;
  }
}

@keyframes hide {
  0% {
    content-visibility: visible;
    color: black;
  }

  100% {
    content-visibility: hidden;
    color: transparent;
  }
}
```

#### JavaScript

Enfin, nous utilisons JavaScript pour appliquer les classes `.show` et `.hide` à l'élément `<div>` afin d'appliquer les animations lors du basculement entre les états affiché et masqué.

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList.contains("show")) {
    divElem.classList.remove("show");
    divElem.classList.add("hide");
  } else {
    divElem.classList.remove("hide");
    divElem.classList.add("show");
  }
}
```

#### Résultat

The rendered result looks like this:

{{EmbedLiveSample("Animer `content-visibility`", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment)
- La propriété {{CSSxRef("contain-intrinsic-size")}}
- L'évènement API {{DOMxRef("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
- [content-visibility : la nouvelle propriété CSS qui améliore vos performances de rendu](https://web.dev/content-visibility/?hl=fr) (web.dev)
