---
title: Le fourre-tout du contenu MDN
slug: MDN/Kitchensink
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

> [!WARNING]
> Ne supprimez pas cette page. Elle est utilisée par [mdn/rari](https://github.com/mdn/rari) pour son automatisation.

## À propos de cette page

Le **fourre-tout** est une page qui _tente_ d'incorporer tous les éléments de contenu possibles et les macros Rari.

Cette page tente d'être l'intersection complète de toutes les autres pages. Pas en termes de texte mais en termes de styles et de macros.
Commençons par quelques notes…

Texte utilisant la balise `<kbd>`&nbsp;: <kbd>Maj</kbd>

> [!NOTE]
> Voici une note d'indicateur de bloc.

> [!WARNING]
> Voici un avertissement d'indicateur de bloc.

## Boutons Précédent/Suivant

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

### Un autre…

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

## Extraits de code

### Texte brut

```plain
  ___________________________
< Je suis un expert en champ. >
  ---------------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
```

### HTML

```html
<pre></pre>
```

### JavaScript

```js
const f = () => {
  return Math.random();
};
```

### CSS

```css
:root {
  --premiere-couleur: #488cff;
  --deuxieme-couleur: #ffff8c;
}

#premierParagraphe {
  background-color: var(--premiere-couleur);
  color: var(--deuxieme-couleur);
}
```

### WebAssembly

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

### Rust

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

### Python

```python
class BookListView(generic.ListView):
    model = Book
    # votre propre nom pour la liste en tant que variable de modèle
    context_object_name = 'my_book_list'
    queryset = Book.objects.filter(title__icontains='war')[:5]
    template_name = 'books/my_arbitrary_template_name_list.html'
```

## Exemples interactifs

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;data&gt;", "tabbed-shorter")}}

```html interactive-example
<p>New Products:</p>
<ul>
  <li><data value="398">Mini Ketchup</data></li>
  <li><data value="399">Jumbo Ketchup</data></li>
  <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

```css interactive-example
data:hover::after {
  content: " (ID " attr(value) ")";
  font-size: 0.7em;
}
```

{{InteractiveExample("Démonstration JavaScript&nbsp;: Set.prototype[Symbol.iterator]()")}}

```js interactive-example
const set = new Set();

set.add(42);
set.add("forty two");

const iterator = set[Symbol.iterator]();

console.log(iterator.next().value);
// Résultat attendu : 42

console.log(iterator.next().value);
// Résultat attendu : "forty two"
```

{{InteractiveExample("Démonstration CSS&nbsp;: filter")}}

```css interactive-example-choice
filter: url("/shared-assets/images/examples/shadow.svg#element-id");
```

```css interactive-example-choice
filter: blur(5px);
```

```css interactive-example-choice
filter: contrast(200%);
```

```css interactive-example-choice
filter: grayscale(80%);
```

```css interactive-example-choice
filter: hue-rotate(90deg);
```

```css interactive-example-choice
filter: drop-shadow(16px 16px 20px red) invert(75%);
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <img
      id="example-element"
      src="/shared-assets/images/examples/firefox-logo.svg"
      width="200" />
  </div>
</section>
```

```css interactive-example
.example-container {
  background-color: white;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-element {
  flex: 1;
  padding: 30px;
}
```

## Tableaux

### Tableau Markdown

| Nom de la constante          | Valeur | Description                                                                              |
| ---------------------------- | ------ | ---------------------------------------------------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | Le nombre de bits utilisés pour contenir le résultat de la requête pour la cible donnée. |
| `CURRENT_QUERY_EXT`          | 0x8865 | La requête actuellement active.                                                          |
| `QUERY_RESULT_EXT`           | 0x8866 | Le résultat de la requête.                                                               |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | Un booléen indiquant si un résultat de requête est disponible.                           |
| `TIME_ELAPSED_EXT`           | 0x88BF | Temps écoulé (en nanosecondes).                                                          |
| `TIMESTAMP_EXT`              | 0x8E28 | L'heure actuelle.                                                                        |
| `GPU_DISJOINT_EXT`           | 0x8FBB | Un booléen indiquant si le GPU a effectué une opération disjointe.                       |

### Tableau HTML

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">Contenu phrasé</a>, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">Contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, les balises de début et de fin sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tout</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

<table class="fullwidth-table">
  <caption>
    Valeurs pour le contenu de <code>&#x3C;meta name="viewport"></code>
  </caption>
  <thead>
    <tr>
      <th scope="col">Valeur</th>
      <th scope="col">Sous-valeurs possibles</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>width</code></td>
      <td>Un nombre entier positif, ou le texte <code>device-width</code></td>
      <td>
        Définit la largeur en pixels de la fenêtre d'affichage à laquelle vous souhaitez que le site Web soit rendu.
      </td>
    </tr>
    <tr>
      <td><code>user-scalable</code> {{ReadOnlyInline}}</td>
      <td><code>yes</code> ou <code>no</code></td>
      <td>
        Si défini sur <code>no</code>, l'utilisateur·ice ne peut pas zoomer sur la page Web.
        La valeur par défaut est <code>yes</code>. Les paramètres du navigateur peuvent ignorer cette règle,
        et iOS10+ l'ignore par défaut.
      </td>
    </tr>
    <tr>
      <td><code>viewport-fit</code></td>
      <td><code>auto</code>, <code>contain</code> ou <code>cover</code></td>
      <td>
        <p>
          La valeur <code>auto</code> n'affecte pas la fenêtre d'affichage initiale, et la page Web entière est visible.
        </p>
        <p>
          La valeur <code>contain</code> signifie que la fenêtre d'affichage est mise à l'échelle pour
          s'adapter au plus grand rectangle inscrit dans l'affichage.
        </p>
        <p>
          La valeur <code>cover</code> signifie que la fenêtre d'affichage est mise à l'échelle pour remplir l'affichage de l'appareil.
          Il est fortement recommandé d'utiliser les variables <a href="/fr/docs/Web/CSS/Reference/Values/env">safe area inset</a> pour
          s'assurer que le contenu important ne se retrouve pas en dehors de l'affichage.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Toutes les macros sous le soleil

**Eh bien, presque toutes les macros. Espérons seulement celles qui sont en cours d'utilisation.**

Un code d'erreur {{Glossary("HTTP")}} signifiant «&nbsp;Bad Gateway&nbsp;».

Un {{Glossary("Server", "serveur")}} peut agir comme une passerelle ou un proxy (intermédiaire) entre un client (comme votre navigateur Web) et un autre serveur en amont.
Lorsque vous demandez l'accès à une {{Glossary("URL")}}, le serveur passerelle peut relayer votre demande au serveur en amont.
«&nbsp;502&nbsp;» signifie que le serveur en amont a renvoyé une réponse invalide.

- {{JSxRef("Array")}} JavaScript sur MDN

Écouter les mouvements de la souris est encore plus facile que d'écouter les pressions de touches&nbsp;: tout ce dont nous avons besoin est le listener pour l'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}.

## Compatibilité des navigateurs

{{Compat}}

## Boîte englobante alignée sur les axes

L'une des formes les plus simples de détection de collision se fait entre deux rectangles alignés sur les axes — c'est-à-dire sans rotation.
L'algorithme fonctionne en s'assurant qu'il n'y a aucun espace entre les 4 côtés des rectangles.
Tout espace signifie qu'aucune collision n'existe.

```js
var rect1 = { x: 5, y: 5, width: 50, height: 50 };
var rect2 = { x: 20, y: 10, width: 10, height: 10 };

if (
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y
) {
  // collision détectée !
}

// remplissage des valeurs =>

if (5 < 30 && 55 > 20 && 5 < 20 && 55 > 10) {
  // collision détectée !
}
```

### Code Rect

```html
<div id="cr-stage"></div>
<p>
  Déplacez le rectangle avec les touches fléchées. Le vert signifie collision,
  le bleu signifie pas de collision.
</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js
Crafty.init(200, 200);

var dim1 = { x: 5, y: 5, w: 50, h: 50 };
var dim2 = { x: 20, y: 10, w: 60, h: 40 };

var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(2)
  .attr(dim2)
  .color("blue");

rect2.bind("EnterFrame", function () {
  if (
    rect1.x > rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y > rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    // collision détectée !
    this.color("green");
  } else {
    // pas de collision
    this.color("blue");
  }
});
```

{{EmbedLiveSample("Rect_code", 700, 300)}}

{{SeeCompatTable}}

{{WebExtAPIRef("tabs.mutedInfo")}}

### Interfaces CSSOM obsolètes {{Deprecated_Inline}}

{{InheritanceDiagram("WheelEvent")}}

{{EmbedGHLiveSample("web-tech-games/index.html", "100%", 820)}}

- [Ressources d'accessibilité sur MDN](/fr/docs/Web/Accessibility)
- [Accessibilité Web <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Web_accessibility) sur Wikipedia

La macro [`AvailableInWorkers` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) insère une boîte de note localisée indiquant qu'une fonctionnalité est disponible dans un contexte de [Web worker](/fr/docs/Web/API/Web_Workers_API).

{{AvailableInWorkers}}

- [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

<!---->

- Créez un élément {{HTMLElement("canvas")}} et définissez ses attributs `width` et `height` à la résolution originale, plus petite.
- Définissez ses propriétés CSS {{CSSxRef("width")}} et {{CSSxRef("height")}} pour qu'elles soient 2x ou 4x la valeur des attributs HTML `width` et `height`.
  Si le canvas a été créé avec une largeur de 128 pixels, par exemple, nous définirions la largeur CSS à `512px` si nous voulions un facteur de 4x.
- Définissez la propriété CSS `image-rendering` de l'élément {{HTMLElement("canvas")}} sur une valeur qui ne rend pas l'image floue.
  Soit `crisp-edges`, soit `pixelated` fonctionne. Consultez l'article {{CSSxRef("image-rendering")}} pour plus d'informations sur les différences entre ces valeurs et les préfixes à utiliser selon le navigateur.

<!---->

- [Glossaire MDN Web Docs](/fr/docs/Glossary)&nbsp;:
  - {{Glossary("XMLHttpRequest", "XHR")}}

- [AJAX <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/AJAX) sur Wikipedia
- [Apprendre&nbsp;: Faire des requêtes réseau avec JavaScript](/fr/docs/Learn_web_development/Core/Scripting/Network_requests)
- {{DOMxRef("XMLHttpRequest")}}
- {{DOMxRef("Fetch API")}}
- [Utilisation de l'API Fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch)
- [Communications synchrones vs asynchrones <sup>(angl.)</sup>](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)

<!---->

- {{SVGElement("feGaussianBlur")}}
- {{SVGAttr("keySplines")}} SVG attribute
- [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes#dir)
- [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes#lang)
- {{CSSxRef(":dir")}}
- {{CSSxRef("direction")}}

## Types

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informations sur une alarme particulière.

{{Non-standard_Header}}
{{Deprecated_Header}}
[![Iceberg pic](iceberg.jpg)](iceberg.jpg)
