---
title: Utiliser le shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
---

{{DefaultAPISidebar("Web Components")}}

Un aspect important des composants web est l'encapsulation — être capable de garder la structure de balisage, le style et le comportement cachés et séparés du reste de code de la page tel que différentes parties n'entrent pas en conflit et que le code puisse rester agréable et propre. L'API Shadow DOM est un moyen d'y parvenir, fournissant une manière d'associer à un élément un DOM séparé et caché. Cet article couvre les bases de l'utilisation du DOM fantôme.

> **Note :** L'API Shadow DOM est supportée par défaut dans Firefox (63 et suivants), Chrome, Opera, et Safari. Le nouveau Edge basé sur Chromium (75 et suivants) le supportent aussi; le vieux Edge ne le supporte pas.

## Vue de haut niveau

Cet article suppose que vous êtes déjà familier avec le concept de [DOM (Document Object Model)](/fr/docs/Web/API/Document_Object_Model/Introduction) — une structure arborescente de nœuds connectés représentant les différents éléments et chaines de textes apparaissant dans un document balisé (généralement un document HTML dans le cas de documents web). Par exemple, considérez le fragment HTML suivant :

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple exemple de DOM</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="Un tyrannosaurus Rex rouge : un dinosaure bipède se tenant debout comme un humain, avec de petits bras et une large gueule à nombreuses dents tranchantes." />
      <p>
        Nous ajouterons ici un lien vers la
        <a href="https://www.mozilla.org/">page d'accueil de Mozilla</a>
      </p>
    </section>
  </body>
</html>
```

Ce fragment produit la structure DOM suivante :

![](dom-screenshot.png)

Le DOM fantôme permet à des arbres DOM cachés d'être associés à des éléments de l'arbre DOM principal — cet arbre DOM fantôme s'ouvre avec une racine fantôme placée sous n'importe quel élément voulu, de la même manière que dans le DOM normal.

![Version SVG du diagramme montrant l'interaction entre le document, la racine fantôme et l'hôte fantôme.](shadowdom.svg)

Il y a quelques termes de la terminologie du DOM fantôme que vous devez connaître :

- **Hôte fantôme** : le nœud du DOM principal auquel le DOM fantôme est associé.
- **Arbre fantôme** : l'arbre DOM au sein du DOM fantôme.
- **Frontière fantôme** : la limite où le DOM fantôme se termine et où le DOM principal commence.
- **Racine fantôme** : le nœud racine de l'arbre fantôme.

Vous pouvez affecter les nœuds du DOM fantôme exactement de la même manière que pour les nœuds du DOM principal — par exemple en leur ajoutant des éléments enfants ou en leur définissant des attributs, en stylisant des nœuds individuels au moyen de `element.style.propriete`, ou en ajoutant du style à l'arbre DOM fantôme entier via une balise [`<style>`](/fr/docs/Web/HTML/Element/style). La différence est que le code au sein du DOM fantôme ne peut affecter aucun élément en dehors de son arbre, permettant de mettre en œuvre une encapsulation très commode.

Notez que le DOM fantôme n'est pas une nouvelle chose du tout — les navigateurs l'ont utilisé depuis longtemps pour encapsuler la structure interne d'un élément. Pensez par exemple à un élément [`<video>`](/fr/docs/Web/HTML/Element/video), avec les contrôles par défaut du navigateur apparents. Tout ce que vous voyez dans le DOM est l'élément `<video>`, mais il contient plusieurs boutons et autres contrôles au sein de son DOM fantôme. La spécification du DOM fantôme a été conçue de telle manière que vous êtes autorisés à manipuler le DOM fantôme de vos propres éléments personnalisés.

## Usage basique

Vous pouvez associer une racine fantôme à tout élément en utilisant la méthode [`Element.attachShadow()`](/fr/docs/Web/API/Element/attachShadow). Elle prend en paramètres un objet d'options contenant une option — `mode` — ayant pour valeur `open` (ouvert) ou `closed` (fermé) :

```js
let fantome = element.attachShadow({ mode: "open" });
let fantome = element.attachShadow({ mode: "closed" });
```

`open` signifie que vous pouvez accéder au DOM fantôme en utilisant du JavaScript écrit dans le contexte de la page principale, par exemple en utilisant la propriété [`Element.shadowRoot`](/fr/docs/Web/API/ShadowRoot) :

```js
let monDomFantome = monElementPerso.shadowRoot;
```

Si vous associez une racine fantôme à un élément personnalisé avec la propriété `mode` définie à `closed`, vous ne serez pas autorisé à accéder au DOM fantôme depuis l'extérieur — `monElementPerso.shadowRoot` retournera `null`. C'est le cas avec les éléments natifs contenant des DOM fantômes tels que `<video>`.

> **Note :** Comme montre [cet article de blog](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af) (en anglais), il est actuellement assez simple de pénétrer les DOM fantômes fermés, et les cacher complètement n'en vaut souvent pas la peine.

Si vous voulez associer un DOM fantôme à un élément personnalisé en tant que partie de son constructeur (de loin la plus utile application du DOM fantôme), vous devriez utiliser une instruction comme :

```js
let shadow = this.attachShadow({ mode: "open" });
```

Lorsque vous avez associé un DOM fantôme à un élément, le manipuler consiste seulement à utiliser les API du DOM telles que vous les utilisez pour manipuler le DOM principal :

```js
let paragraph = document.createElement("p");
shadow.appendChild(paragraph);
// etc.
```

## Démonstration au travers d'un exemple simple

Maintenant, visitons un exemple simple pour faire une démonstration du DOM fantôme en action au sein d'un élément personnalisé — [`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) (en voir aussi un [exemple dynamique](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)). Il prend une icône et une chaîne de caractères et intègre l'image dans la page. Quand l'icône obtient l'attention (`:focus`), le texte s'affiche dans une fenêtre indépendante pour fournir plus d'informations contextuelles. Pour commencer, nous définissons dans notre fichier JavaScript une classe appelée `PopUpInfo`, qui étend `HTMLElement` :

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // Toujours appeler super en premier dans le constructeur
    super();

    // Écrire les fonctionnalités de l'élément ici

    ...
  }
}
```

Au sein de la définition de la classe, nous créons le constructeur de l'élément, qui définit toutes les fonctionnalités que l'élément aura lorsqu'une instance est créée.

### Créer la racine fantôme

Nous associons d'abord une racine fantôme à l'élément personnalisé :

```js
// Créer une racine fantôme
let fantome = this.attachShadow({ mode: "open" });
```

### Créer la structure du DOM fantôme

Ensuite, nous utilisons des outils de manipulation du DOM pour créer la structure interne du DOM fantôme de notre élément :

```js
// Créer les <span>
let wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
let icon = document.createElement("span");
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", 0);
let info = document.createElement("span");
info.setAttribute("class", "info");

// Prendre le contenu de l'attribut et le placer à l'intérieur du span info
let text = this.getAttribute("text");
info.textContent = text;

// Insérer l'icône
let imgUrl;
if (this.hasAttribute("img")) {
  imgUrl = this.getAttribute("img");
} else {
  imgUrl = "img/default.png";
}
let img = document.createElement("img");
img.src = imgUrl;
icon.appendChild(img);
```

### Styliser le DOM fantôme

Après cela, nous créons un élément [`<style>`](/fr/docs/Web/HTML/Element/style) et nous ajoutons du CSS pour personnaliser notre arbre DOM :

```js
// Créer quelque CSS à appliquer au dom fantôme
let style = document.createElement("style");

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;
```

### Associer le DOM fantôme à la racine fantôme

L'étape finale est d'associer tous les éléments créés à la racine fantôme :

```js
// Associer les éléments créés au dom fantôme
fantome.appendChild(style);
fantome.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

### Utiliser notre élément personnalisé

Une fois que la classe est définie, utiliser l'élément est aussi simple que de le définir, et l'ajouter sur la page, comme expliqué dans [Utiliser les éléments personnalisés](/fr/docs/Web/Web_Components/Using_custom_elements) :

```js
// Définit le nouvel élément
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  text="Le code de validation de votre carte (CVC) est un élément de sécurité
  supplémentaire. Il s'agit des 3 ou 4 derniers chiffres figurant au dos de votre carte."></popup-info>
```

### Styles internes ou styles externes

Dans l'exemple précédent, nous appliquons du style au DOM fantôme en utilisant l'élément [`<style>`](/fr/docs/Web/HTML/Element/style), mais il est parfaitement possible de le faire en référençant une feuille de style externe avec un élément [`<link>`](/fr/docs/Web/HTML/Element/link) si vous le préférez.

Par exemple, regardez ce code tiré de l'exemple [popup-info-box-external-stylesheet](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/) (voir le [code source](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js)) :

```js
// Appliquer les styles externes au dom fantôme
const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "style.css");

// Associer l'élément créé au dom fantôme
fantome.appendChild(linkElem);
```

Notez que les éléments [`<link>`](/fr/docs/Web/HTML/Element/link) ne bloquent pas la peinture de la racine fantôme, donc il pourrait y avoir une latence où le contenu serait sans style (FOUC) pendant que la feuille de style se charge.

De nombreux navigateurs modernes implantent une optimisation pour les balises [`<style>`](/fr/docs/Web/HTML/Element/style) clonées depuis un nœud commun ou qui ont des contenus identiques à fin de leur permettre de partager une unique liste de retour. Avec cette optimisation, la performance des styles externes et internes doivent être similaires.

## Voir aussi

- [Utiliser les éléments personnalisés](/fr/docs/Web/Web_Components/Using_custom_elements)
- [Utiliser les modèles (templates) et les emplacements (slots)](/fr/docs/Web/Web_Components/Using_templates_and_slots)
