---
title: Fonction CSS `attr()`
short-title: attr()
slug: Web/CSS/Reference/Values/attr
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

> [!NOTE]
> La fonction `attr()` peut être utilisée sur n'importe quelle propriété CSS, mais la prise en charge des propriétés autres que {{CSSxRef("content")}} est expérimentale.

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`attr()`** est utilisée pour récupérer la valeur d'un attribut de l'élément sélectionné et l'utiliser dans une valeur de propriété, de manière similaire à la fonction {{CSSxRef("var()")}} qui substitue une valeur de propriété personnalisée. Elle peut également être utilisée avec les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), auquel cas la valeur de l'attribut sur l'élément d'origine du pseudo-élément est retournée.

{{InteractiveExample("Démonstration CSS&nbsp;: attr()", "tabbed-shorter")}}

```css interactive-example
blockquote {
  margin: 1em 0;
}

blockquote::after {
  display: block;
  content: " (source : " attr(cite) ") ";
  color: hotpink;
}
```

```html interactive-example
<blockquote cite="https://mozilla.org/fr/about/">
  Mozilla œuvre pour permettre aux internautes de reprendre le contrôle
  d'Internet.
</blockquote>

<blockquote cite="https://web.dev/about/">
  Créer des sites Web attrayants, accessibles, rapides et sécurisés, compatibles
  avec tous les navigateurs.
</blockquote>
```

## Syntaxe

```css
/* Utilisation simple */
attr(data-count)
attr(href)

/* Avec un type */
attr(data-width px)
attr(data-size rem)
attr(data-name raw-string)
attr(id type(<custom-ident>))
attr(data-count type(<number>))
attr(data-size type(<length> | <percentage>))

/* Avec une solution de repli */
attr(data-count type(<number>), 0)
attr(data-width px, inherit)
attr(data-something, "default")

/* Avec un espace de noms */
attr(color|myAttr type(*), red)
```

### Paramètres

La syntaxe de la fonction `attr()` est la suivante&nbsp;:

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

Les paramètres sont les suivants&nbsp;:

- `<attr-name>`
  - : Le nom de l'attribut dont la valeur doit être récupérée à partir de l'élément HTML sélectionné.
    - Espaces de noms
      - : Le nom de l'attribut peut contenir un [`namespace`](/fr/docs/Web/CSS/Guides/Namespaces) qui permet de cibler les éléments des langages de balisage basés sur [XML](/fr/docs/Web/XML) tels que [SVG](/fr/docs/Web/SVG) ou [MathML](/fr/docs/Web/MathML).

        ```css
        @namespace svg url("http://www.w3.org/2000/svg");
        a {
          fill: attr(svg|myattr type(*), green);
        }
        ```

        > [!NOTE]
        > Si aucun espace de noms n'est défini (seul un identifiant est donné, comme `attr(toto)`), l'espace de noms nul est implicite. C'est généralement ce qui est souhaité, car les attributs avec espace de noms sont rares. Comme pour les sélecteurs d'attributs, la sensibilité à la casse de `<attr-name>` dépend du langage du document.

- `<attr-type>`
  - : Définit comment la valeur de l'attribut est analysée en une valeur CSS. Cela peut être le mot-clé `raw-string`, une fonction {{CSSxRef("type()")}}, ou une unité de dimension CSS (définie à l'aide d'un identifiant `<attr-unit>`). Lorsqu'il est omis, il est par défaut à `raw-string`.
    - `raw-string`
      - : Le mot-clé `raw-string` fait en sorte que la valeur littérale de l'attribut soit traitée comme la valeur d'une chaîne de caractères CSS, sans analyse CSS effectuée (y compris les échappements CSS, la suppression des espaces, les commentaires, etc.). La `<fallback-value>` n'est utilisée que si l'attribut est omis&nbsp;; définir une valeur vide ne déclenche pas la solution de repli.

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > Ce mot-clé était à l'origine nommé et pris en charge dans les navigateurs Chromium sous le nom de `string`. Les deux mots-clés seront pris en charge pendant une courte période, à des fins de rétrocompatibilité.

    - {{CSSxRef("type()")}}
      - : La fonction `type()` prend un `<syntax>` comme argument qui définit le type de données dans lequel analyser la valeur.
        > [!NOTE]
        > Pour des [raisons de sécurité](#limitations_et_sécurité), {{CSSxRef("url_value", "&lt;url&gt;")}} n'est pas autorisé en tant que type de données de `attr()`.

    - `<attr-unit>`
      - : L'identifiant `<attr-unit>` définit l'unité qu'une valeur numérique doit avoir (le cas échéant). Il peut s'agir du caractère `%` (pourcentage) ou d'une [unité de distance CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_distance) telle que `px`, `rem`, `deg`, `s`, etc.

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : La valeur à utiliser si l'attribut défini est manquant ou contient une valeur invalide.

### Valeur de retour

La valeur de retour de `attr()` est la valeur de l'attribut HTML dont le nom est `<attr-name>` analysée selon le `<attr-type>` donné ou analysée comme une chaîne de caractères CSS.

Lorsque un `<attr-type>` est défini, `attr()` tentera d'analyser l'attribut dans ce `<attr-type>` défini et de le retourner. Si l'attribut ne peut pas être analysé dans le `<attr-type>` donné, la `<fallback-value>` sera retournée à la place. Lorsqu'aucun `<attr-type>` n'est défini, l'attribut sera analysé en tant que chaîne de caractères CSS.

Si aucune valeur `<fallback-value>` n'est définie, la valeur de retour sera par défaut une chaîne de caractères vide lorsque aucun `<attr-type>` n'est défini ou la [valeur garantie invalide](/fr/docs/Glossary/guaranteed_invalid_value) lorsqu'un `<attr-type>` est défini.

## Description

### Limitations et sécurité

La fonction `attr()` peut référencer des attributs qui n'étaient jamais destinés à être utilisés pour le style et qui pourraient contenir des informations sensibles (par exemple, un jeton de sécurité utilisé par des scripts sur la page). En général, cela ne pose pas de problème, mais cela peut devenir une menace pour la sécurité lorsqu'il est utilisé dans des URL. Par conséquent, vous ne pouvez pas utiliser `attr()` pour construire dynamiquement des URL.

```html
<!-- Ceci ne fonctionnera pas ! -->
<span data-icon="https://example.org/icons/question-mark.svg">aide</span>
```

```css
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

Cependant, cette restriction ne s'applique qu'aux endroits qui nécessitent strictement un type `<url>`. Certaines fonctions — comme {{CSSxRef("image/image-set", "image-set()")}} — peuvent accepter une valeur `<string>` qui est ensuite interprétée comme une URL, permettant à `attr()` de fonctionner dans ces contextes, en fonction du support du navigateur&nbsp;:

```css
span[data-icon] {
  background: image-set(attr(data-icon));
}
```

Les valeurs qui utilisent `attr()` sont marquées comme _altérées par `attr()`_. L'utilisation d'une valeur altérée par `attr()` en tant que `<url>` rend la déclaration [«&nbsp;invalide au moment du calcul de la valeur&nbsp;» ou IACVT pour faire court <sup>(angl.)</sup>](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

### Rétrocompatibilité

En général, la syntaxe moderne de `attr()` est rétrocompatible, car l'ancienne manière de l'utiliser — sans définir un `<attr-type>` — se comporte de la même manière qu'auparavant. Avoir `attr(data-attr)` dans votre code est équivalent à écrire `attr(data-attr type(<string>))` ou le plus simple `attr(data-attr string))`.

Cependant, il existe deux cas limites où la syntaxe moderne de `attr()` se comporte différemment de l'ancienne syntaxe.

Dans l'extrait suivant, les navigateurs qui ne prennent pas en charge la syntaxe moderne de `attr()` ignoreront la deuxième déclaration car ils ne peuvent pas l'analyser. Le résultat dans ces navigateurs est `"Bonjour le monde"`.

```html
<div text="Bonjour"></div>
```

```css
div::before {
  content: attr(text) " le monde";
}
div::before {
  content: attr(text) 1px;
}
```

Dans les navigateurs qui prennent en charge la syntaxe moderne, le résultat sera… rien. Ces navigateurs analyseront correctement la deuxième déclaration, mais comme elle est un contenu invalide pour la propriété `content`, la déclaration devient [«&nbsp;invalide au moment du calcul de la valeur&nbsp;» ou IACVT pour faire court <sup>(angl.)</sup>](https://www.bram.us/2024/02/26/css-what-is-iacvt/).

Pour éviter ce genre de situation, il est recommandé d'utiliser la [détection de fonctionnalités](#détection_de_fonctionnalités).

Un deuxième cas limite est le suivant&nbsp;:

```html
<div id="parent"><div id="enfant" data-attr="toto"></div></div>
```

```css
#parent {
  --x: attr(data-attr);
}
#enfant::before {
  content: var(--x);
}
```

Les navigateurs sans prise en charge de la syntaxe moderne affichent le texte `"toto"`. Dans les navigateurs avec prise en charge moderne de `attr()`, il n'y a aucune sortie.

Cela s'explique par le fait que `attr()` — similaire aux propriétés personnalisées qui utilisent la fonction `var()` — est substitué au [moment du calcul de la valeur <sup>(angl.)</sup>](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties). Avec le comportement moderne, `--x` tente d'abord de lire l'attribut `data-attr` de l'élément `#parent`, ce qui donne une chaîne de caractères vide car il n'y a pas un tel attribut sur `#parent`. Cette chaîne de caractères vide est ensuite héritée par l'élément `#enfant`, ce qui entraîne une déclaration `content: ;`.

Pour éviter ce genre de situation, il est recommandé de ne pas transmettre les valeurs héritées de `attr()` aux enfants sauf si vous le souhaitez explicitement.

### Détection de fonctionnalités

Vous pouvez détecter la prise en charge de la syntaxe moderne de `attr()` en utilisant la règle {{CSSxRef("@supports")}}. Dans le test, essayez d'assigner un `attr()` avancé à une propriété CSS (non personnalisée).

Par exemple&nbsp;:

```css
@supports (x: attr(x type(*))) {
  /* Le navigateur prend en charge la syntaxe moderne de attr() */
}

@supports not (x: attr(x type(*))) {
  /* Le navigateur ne prend pas en charge la syntaxe moderne de attr() */
}
```

Nous pouvons effectuer le même test en JavaScript avec [`CSS.supports()`](/fr/docs/Web/API/CSS/supports_static)&nbsp;:

```js
if (CSS.supports("x: attr(x type(*))")) {
  /* Le navigateur prend en charge la syntaxe moderne de attr() */
}

if (!CSS.supports("x: attr(x type(*))")) {
  /* Le navigateur ne prend pas en charge la syntaxe moderne de attr() */
}
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser la propriété `content`

Dans cet exemple, nous préfixons la valeur de [l'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) `data-toto` au contenu de l'élément HTML {{HTMLElement("p")}}.

#### HTML

```html
<p data-toto="coucou">le monde</p>
```

#### CSS

```css
[data-toto]::before {
  content: attr(data-toto) " ";
}
```

#### Résultat

{{EmbedLiveSample("Utiliser la propriété `content`", "100%", 50)}}

### Utiliser une valeur de repli

{{SeeCompatTable}}

Dans cet exemple, nous ajoutons la valeur de [l'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) `data-browser` au contenu de l'élément HTML {{HTMLElement("p")}}. Si l'attribut `data-browser` est absent de l'élément HTML {{HTMLElement("p")}}, nous ajoutons la valeur de repli «&nbsp;**Inconnu**&nbsp;».

#### HTML

```html
<p data-browser="Firefox">Mon navigateur préféré est&nbsp;:</p>
<p>Votre navigateur préféré est&nbsp;:</p>
```

#### CSS

```css
p::after {
  content: " " attr(data-browser, "Inconnu");
  color: tomato;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser une valeur de repli", "100%", 90)}}

### Valeur de type `<color>`

{{SeeCompatTable}}

Dans cet exemple, nous définissons la valeur CSS de {{CSSxRef("background-color")}} à la valeur de [l'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) `data-background` assigné à l'élément HTML {{HTMLElement("div")}}.

#### HTML

```html
<div class="background" data-background="lime">
  Le fond devrait être rouge si votre navigateur ne prend pas en charge
  l'utilisation avancée de attr()
</div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background type(<color>), red);
}
```

#### Résultat

{{EmbedLiveSample("Valeur de type `<color>`", "100%", 50)}}

### Utiliser des unités de dimension

{{SeeCompatTable}}

Dans cet exemple, l'attribut `data-rotation` est analysé en une unité `deg`, qui définit la rotation de l'élément.

#### HTML

```html
<div data-rotation="-3">Je suis tourné de -3 degrés</div>
<div data-rotation="2">Et moi de 2 degrés</div>
<div>Et moi aussi, en utilisant la valeur de repli de 1,5deg</div>
```

#### CSS

```css hidden
body {
  min-height: 100svh;
  display: grid;
  place-content: center;
  gap: 1em;
}
div {
  margin: 0 auto;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.5em;
}
```

```css
div {
  width: fit-content;
  transform-origin: 50% 50%;
  rotate: attr(data-rotation deg, 1.5deg);
}
```

#### Résultat

{{EmbedLiveSample("Utiliser des unités de dimension", "100%", 300)}}

### Analyser les valeurs de `attr()` en tant que `<custom-ident>`

{{SeeCompatTable}}

Dans cet exemple, les valeurs de la propriété {{CSSxRef("view-transition-name")}} sont dérivées de l'attribut `id` de l'élément. L'attribut est analysé en un identifiant personnalisé ({{CSSxRef("&lt;custom-ident&gt;")}}), ce qui est accepté comme valeur par {{CSSxRef("view-transition-name")}}.

Les valeurs résultantes pour {{CSSxRef("view-transition-name")}} sont `carte-1`, `carte-2`, `carte-3`, etc.

#### HTML

Le HTML contient quatre cartes avec différents attributs `id` et un `<button>` «&nbsp;Mélanger les cartes&nbsp;», qui mélange les cartes.

```html
<div class="cartes">
  <div class="carte" id="carte-1">1</div>
  <div class="carte" id="carte-2">2</div>
  <div class="carte" id="carte-3">3</div>
  <div class="carte" id="carte-4">4</div>
</div>
<button>Mélanger les cartes</button>
```

```html hidden
<div class="warning">
  <p>
    Votre navigateur ne prend pas en charge les fonctionnalités avancées de
    <code>attr()</code>. Par conséquent, cette démonstration ne fera rien.
  </p>
</div>
```

#### CSS

Les cartes sont disposées dans un conteneur flexible&nbsp;:

```css
.cartes {
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 1em;
}
```

```css hidden
:root {
  view-transition-name: none;
}
::view-transition {
  pointer-events: none;
}

@supports (x: attr(x type(*))) {
  .warning {
    display: none;
  }
}

@layer layout {
  .carte {
    border-radius: 0.25em;
    width: 20vw;
    max-width: 5em;
    aspect-ratio: 1 / 1.6;
    background: lightgrey;

    display: grid;
    place-content: center;
    font-size: 2em;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100svh;
    display: grid;
    place-content: center;
  }

  button {
    justify-self: center;
  }
}

@layer warning {
  .warning {
    padding: 1em;
    border: 1px solid #cccccc;
    background: rgb(255 255 205 / 0.8);
    text-align: center;
    order: -1;
    margin: 1em;
  }

  .warning > :first-child {
    margin-top: 0;
  }
  .warning > :last-child {
    margin-bottom: 0;
  }
}
```

Sur chaque carte, la fonction `attr()` récupère l'attribut `id` et l'analyse en un {{CSSxRef("&lt;custom-ident&gt;")}}, qui est utilisé comme valeur pour la propriété {{CSSxRef("view-transition-name")}}. Lorsqu'aucun `id` n'est défini sur une carte, la valeur de repli `none` est utilisée à la place.

```css
.carte {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: carte;
}
```

#### JavaScript

Lorsque le `<button>` est pressé, les cartes sont mélangées. Cela se fait en rendant aléatoire l'ordre d'un tableau contenant des références à toutes les cartes, puis en mettant à jour la propriété {{CSSxRef("order")}} de chaque carte avec sa nouvelle position dans le tableau.

Pour animer chaque carte vers sa nouvelle position, les [transitions de vue](/fr/docs/Web/API/View_Transition_API/Using) sont utilisées. Cela se fait en enveloppant la mise à jour de `order` dans un appel à [`document.startViewTransition`](/fr/docs/Web/API/Document/startViewTransition).

```js
const melanger = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

document.querySelector("button").addEventListener("click", (e) => {
  const $cartes = Array.from(document.querySelectorAll(".carte"));
  melanger($cartes);
  document.startViewTransition(() => {
    $cartes.forEach(($carte, i) => {
      $carte.style.setProperty("order", i);
    });
  });
});
```

#### Résultat

{{EmbedLiveSample("Analyser les valeurs de `attr()` en tant que `<custom-ident>`", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Attributs HTML `data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*)
- [Attributs SVG `data-*`](/fr/docs/Web/SVG/Attribute/data-*)
