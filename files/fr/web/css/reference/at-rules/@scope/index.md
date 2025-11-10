---
title: "@scope"
slug: Web/CSS/Reference/At-rules/@scope
original_slug: Web/CSS/@scope
l10n:
  sourceCommit: 943a9ba8905fbdb3966f0dd6d49f7652e3de94b3
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@scope`** permet de sélectionner des éléments dans des sous-arbres spécifiques du DOM, en ciblant précisément les éléments sans écrire des sélecteurs trop spécifiques difficiles à surcharger, et sans lier vos sélecteurs de façon trop étroite à la structure du DOM.

En JavaScript, `@scope` est accessible via l'interface du modèle d'objet CSS {{DOMxRef("CSSScopeRule")}}.

## Syntaxe

La règle `@scope` contient un ou plusieurs ensembles de règles (appelées **règles de style portées**) et définit une portée dans laquelle les appliquer aux éléments sélectionnés. `@scope` peut être utilisée de deux façons&nbsp;:

1. Comme bloc autonome dans votre CSS, auquel cas elle inclut une section de prélude contenant les sélecteurs de **racine de portée** et éventuellement de **limite de portée** — ceux-ci définissent les bornes supérieure et inférieure de la portée.

   ```css
   @scope (scope root) to (scope limit) {
     /* … */
   }
   ```

2. Comme styles en ligne inclus dans un élément {{htmlelement("style")}} de votre HTML, auquel cas le prélude est omis et l'ensemble de règles inclus est automatiquement porté sur l'élément parent englobant du `<style>`.

   ```html
   <parent-element>
     <style>
       @scope {
         /* règles */
       }
     </style>
   </parent-element>
   ```

   Il est aussi possible de combiner un `@scope` en ligne avec un sélecteur de limite de portée, comme dans `@scope to (scope limit) { ... }`.

## Description

Un document web complexe peut inclure des composants tels que des en-têtes, pieds de page, articles d'actualité, cartes, lecteurs multimédias, publicités, etc. Lorsque la complexité augmente, la gestion efficace du style de ces composants devient un enjeu, et le bon usage de la portée des styles aide à gérer cette complexité. Considérons l'arbre DOM suivant&nbsp;:

```plain
body
└─ article.feature
   ├─ section.article-hero
   │  ├─ h2
   │  └─ img
   │
   ├─ section.article-body
   │  ├─ h3
   │  ├─ p
   │  ├─ img
   │  ├─ p
   │  └─ figure
   │     ├─ img
   │     └─ figcaption
   │
   └─ footer
      ├─ p
      └─ img
```

Si vous souhaitez sélectionner l'élément {{htmlelement("img")}} à l'intérieur d'une {{htmlelement("section")}} ayant la classe `article-body`, vous pouvez procéder ainsi&nbsp;:

- Écrire un sélecteur comme `.feature > .article-body > img`. Cependant, celui-ci a une spécificité élevée et est donc difficile à surcharger, et il est aussi fortement lié à la structure du DOM. Si votre structure HTML change à l'avenir, vous devrez peut-être réécrire votre CSS.
- Écrire quelque chose de moins spécifique comme `.article-body img`. Cependant, cela sélectionnera toutes les images à l'intérieur de la `section`.

C'est là que `@scope` est utile. Elle permet de définir une portée précise dans laquelle vos sélecteurs peuvent cibler des éléments. Par exemple, vous pouvez résoudre le problème ci-dessus avec un bloc autonome `@scope` comme suit&nbsp;:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Le sélecteur de racine de portée `.article-body` définit la borne supérieure de la portée de l'arbre DOM dans laquelle l'ensemble de règles sera appliqué, et le sélecteur de limite de portée `figure` définit la borne inférieure. Ainsi, seuls les éléments {{htmlelement("img")}} à l'intérieur d'une `<section>` avec la classe `article-body`, mais pas à l'intérieur d'un élément {{htmlelement("figure")}}, seront sélectionnés.

> [!NOTE]
> Ce type de portée — avec une borne supérieure et une borne inférieure — est couramment appelé **portée en anneau**.

La borne supérieure de la portée est inclusive et la borne inférieure est exclusive. Pour modifier ce comportement, vous pouvez combiner l'un des sélecteurs avec un sélecteur universel enfant. Par exemple, `@scope (scope root) to (scope limit > *)` rend les deux bornes inclusives, `@scope (scope root > *) to (scope limit)` rend les deux bornes exclusives, tandis que `@scope (scope root > *) to (scope limit > *)` donne une borne supérieure exclusive et une borne inférieure inclusive.

Si vous souhaitez sélectionner toutes les images à l'intérieur d'un `<section>` avec la classe `article-body`, vous pouvez omettre la limite de portée&nbsp;:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Ou vous pouvez inclure votre bloc `@scope` en ligne dans un élément `<style>`, qui se trouve lui-même dans la `<section>` avec la classe `article-body`&nbsp;:

```html
<section class="article-body">
  <style>
    @scope {
      img {
        border: 5px solid black;
        background-color: goldenrod;
      }
    }
  </style>

  <!-- ... -->
</section>
```

> [!NOTE]
> Il est important de comprendre que, bien que `@scope` vous permette d'isoler l'application des sélecteurs à des sous-arbres DOM spécifiques, elle n'isole pas complètement les styles appliqués à l'intérieur de ces sous-arbres. Cela se remarque surtout avec l'héritage&nbsp;: les propriétés héritées par les enfants (par exemple {{cssxref("color")}} ou {{cssxref("font-family")}}) seront toujours héritées, au-delà de toute limite de portée définie.

### Pseudo-classe `:scope` dans les blocs `@scope`

Dans le contexte d'un bloc `@scope`, la pseudo-classe {{cssxref(":scope")}} offre un moyen pratique d'appliquer directement des styles à la racine de la portée, comme ceci&nbsp;:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

Voici quelques points à considérer pour `:scope` dans les blocs `@scope`&nbsp;:

- `:scope` ajoute une définition au niveau de la classe (voir [Spécificité dans @scope](#spécificité_dans_scope) pour plus de détails).

- Une limite de portée peut utiliser `:scope` pour définir une relation particulière entre la limite et la racine de la portée. Par exemple&nbsp;:

  ```css
  /* figure est une limite uniquement si c'est un enfant direct de :scope */
  @scope (.article-body) to (:scope > figure) {
    /* … */
  }
  ```

- Une limite de portée peut référencer des éléments en dehors de la racine de la portée en utilisant `:scope`. Par exemple&nbsp;:

  ```css
  /* figure est une limite uniquement si :scope est à l'intérieur de .feature */
  @scope (.article-body) to (.feature :scope figure) {
    /* … */
  }
  ```

- Les règles de style portées ne peuvent pas sortir du sous-arbre. Les sélections comme `:scope + p` sont invalides car cette sélection serait en dehors du sous-arbre.

- Il est tout à fait possible de définir la racine et la limite de portée comme une liste de sélecteurs, auquel cas plusieurs portées seront définies. Dans l'exemple suivant, les styles sont appliqués à tout `<img>` à l'intérieur d'un `<section>` avec la classe `article-hero` ou `article-body`, mais pas s'il est imbriqué dans un `<figure>`&nbsp;:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Spécificité dans `@scope`

À l'intérieur d'une règle `@scope`, les sélecteurs simples et le sélecteur d'imbrication [`&`](/fr/docs/Web/CSS/Nesting_selector) se comportent comme si `:where(:scope)` était préfixé au sélecteur.
Comme {{cssxref(":where", ":where()")}} a une [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) nulle, les sélecteurs simples et `&` n'ajoutent aucun poids. Le poids de spécificité est déterminé par le reste du sélecteur.
Par exemple, la spécificité du sélecteur `& img` est équivalente à celle de `:where(:scope) img` (0-0-1).

> [!WARNING]
> La spécificité de `&` à l'intérieur des blocs `@scope` est gérée différemment selon le moteur de navigateur et la version.
> Consultez la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

Dans les deux cas, du bloc de code suivant, la seule spécificité provient de `img`&nbsp;:

```css
@scope (.article-body) {
  /* img a une spécificité de 0-0-1, comme attendu */
  img {
    /* … */
  }

  /* & img a aussi une spécificité de 0-0-1 */
  & img {
    /* … */
  }
}
```

En revanche, utiliser `:scope` sélectionne explicitement la racine de la portée et ajoute une spécificité de niveau de classe (0-1-0), puisque `:scope` est une [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes).
Dans le bloc de code suivant, `:scope img` a une spécificité de 0-1-1&nbsp;:

```css
@scope (.article-body) {
  /* :scope img a une spécificité de 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
    /* … */
  }
}
```

### Résolution des conflits `@scope`

`@scope` ajoute un nouveau critère à la [cascade CSS](/fr/docs/Web/CSS/CSS_cascade)&nbsp;: la **proximité de portée**. Cela signifie que lorsque deux portées ont des styles en conflit, le style ayant le plus petit nombre de sauts dans la hiérarchie de l'arbre DOM jusqu'à la racine de la portée est appliqué. Voyons un exemple pour illustrer ce principe.

Prenons l'extrait HTML suivant, où des cartes de thèmes différents sont imbriquées les unes dans les autres&nbsp;:

```html
<div class="light-theme">
  <p>Light theme text</p>
  <div class="dark-theme">
    <p>Dark theme text</p>
    <div class="light-theme">
      <p>Light theme text</p>
    </div>
  </div>
</div>
```

Si vous écrivez le CSS des thèmes ainsi, vous rencontrerez un problème&nbsp;:

```css
.light-theme {
  background: #cccccc;
}

.dark-theme {
  background: #333333;
}

.light-theme p {
  color: black;
}

.dark-theme p {
  color: white;
}
```

Le paragraphe le plus à l'intérieur devrait être coloré en noir car il se trouve dans une carte de thème clair. Cependant, il est ciblé à la fois par `.light-theme p` et `.dark-theme p`. Comme la règle `.dark-theme p` apparaît plus tard dans l'ordre du code source, elle est appliquée et le paragraphe se retrouve coloré en blanc à tort.

Pour corriger cela, vous pouvez utiliser `@scope` comme suit&nbsp;:

```css
@scope (.light-theme) {
  :scope {
    background: #cccccc;
  }
  p {
    color: black;
  }
}

@scope (.dark-theme) {
  :scope {
    background: #333333;
  }
  p {
    color: white;
  }
}
```

Désormais, le paragraphe le plus à l'intérieur est correctement coloré en noir. Cela s'explique par le fait qu'il n'est qu'à un niveau de hiérarchie du DOM de la racine de portée `.light-theme`, mais à deux niveaux de la racine de portée `.dark-theme`. Ainsi, le style clair l'emporte.

> [!NOTE]
> La proximité de portée prévaut sur l'ordre du code source mais est elle-même supplantée par d'autres critères de priorité supérieure tels que [l'importance](/fr/docs/Web/CSS/important), [les couches](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) et [la spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity).

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Style de base dans les racines de portée

Dans cet exemple, nous utilisons deux blocs `@scope` distincts pour cibler les liens à l'intérieur des éléments ayant respectivement la classe `.light-scheme` et `.dark-scheme`. Notez comment `:scope` est utilisé pour sélectionner et mettre en forme les racines de portée elles-mêmes. Ici, les racines de portée sont les éléments {{htmlelement("div")}} auxquels les classes sont appliquées.

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN contient beaucoup d'informations sur
    <a href="/fr/docs/Web/HTML">HTML</a>, <a href="/fr/docs/Web/CSS">CSS</a>, et
    <a href="/fr/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN contient beaucoup d'informations sur
    <a href="/fr/docs/Web/HTML">HTML</a>, <a href="/fr/docs/Web/CSS">CSS</a>, et
    <a href="/fr/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### Résultat

Le code ci-dessus s'affiche ainsi&nbsp;:

{{EmbedLiveSample("style_de_base_dans_les_racines_de_portée", "100%", "150")}}

### Racines de portée et limites de portée

Dans cet exemple, nous avons un extrait HTML qui correspond à la structure DOM évoquée plus haut dans la [description](#description). Cette structure représente un résumé d'article typique. Les éléments clés à noter sont les {{htmlelement("img")}}, qui sont imbriqués à différents niveaux dans la structure.

L'objectif de cet exemple est de montrer comment utiliser une racine et une limite de portée pour mettre en forme les éléments `<img>` depuis le haut de la hiérarchie, mais seulement jusqu'à (et sans inclure) l'élément `<img>` à l'intérieur du {{htmlelement("figure")}} — créant ainsi une portée en anneau.

#### HTML

```html
<article class="feature">
  <section class="article-hero">
    <h2>Titre de l'article</h2>
    <img alt="image" />
  </section>

  <section class="article-body">
    <h3>Sous-titre de l'article</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
      consectetur leo, nec eleifend quam volutpat vitae. Duis quis felis at
      augue imperdiet aliquam. Morbi at felis et massa mattis lacinia. Cras
      pharetra velit nisi, ac efficitur magna luctus nec.
    </p>

    <img alt="image" />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <figure>
      <img alt="image" />
      <figcaption>Mon infographie</figcaption>
    </figure>
  </section>

  <footer>
    <p>Rédigé par Chris Mills.</p>
    <img alt="image" />
  </footer>
</article>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

article {
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid gray;
}

.article-hero,
.article-body,
article footer {
  padding: 20px;
  margin: 10px;
  border: 2px solid lightgray;
}

img {
  height: 100px;
  width: 100%;
  display: block;
  background-color: lightgray;
  color: black;
  padding: 10px;
}
```

Dans notre CSS, nous avons deux blocs `@scope`&nbsp;:

- Le premier bloc `@scope` définit sa racine de portée comme les éléments ayant la classe `.feature` (dans ce cas, uniquement l'élément `<article>` externe), illustrant comment `@scope` peut être utilisé pour mettre en forme un sous-ensemble HTML spécifique.
- Le second bloc `@scope` définit aussi sa racine de portée comme les éléments ayant la classe `.feature`, mais définit également une limite de portée `figure`. Cela garantit que les ensembles de règles contenus ne seront appliqués qu'aux éléments correspondants à l'intérieur de la racine de portée (`<article class="feature"> ... </article>` dans ce cas) qui **ne sont pas** imbriqués dans des éléments `<figure>` descendants. Ce bloc `@scope` contient un seul ensemble de règles qui met en forme les éléments `<img>` avec une bordure noire épaisse et un fond doré.

```css
/* CSS porté */

@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }

  figure {
    background-color: white;
    border: 2px solid black;
    color: black;
    padding: 10px;
  }
}

/* Portée en anneau */

@scope (.feature) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

#### Résultat

Dans le code affiché, notez que tous les éléments `<img>` sont stylisés avec la bordure épaisse et le fond doré, sauf celui à l'intérieur de l'élément `<figure>` (intitulé «&nbsp;Mon infographie&nbsp;»).

{{EmbedLiveSample("racines_de_portée_et_limites_de_portée", "100%", "400")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":scope")}}
- {{DOMxRef("CSSScopeRule")}}
- La [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Définir le sélecteur `&` dans une règle `@scope` <sup>(angl.)</sup>](https://css.oddbird.net/scope/parent-selector/) sur css.oddbird.net (2025)
- [Limiter la portée de vos sélecteurs avec la règle @ CSS `@scope` <sup>(angl.)</sup>](https://developer.chrome.com/docs/css-ui/at-scope) sur developer.chrome.com (2023)
