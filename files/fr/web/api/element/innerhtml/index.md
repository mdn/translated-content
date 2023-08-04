---
title: element.innerHTML
slug: Web/API/Element/innerHTML
---

{{APIRef("DOM")}}

La propriété **`Element.innerHTML`** de {{domxref("Element")}} récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.

> **Note :** Si un nœud {{HTMLElement("div")}}, {{HTMLElement("span")}}, ou {{HTMLElement("noembed")}} a un sous-nœud de type texte contenant les caractères `(&), (<),` ou `(>)`, `innerHTML` renverra à la place les chaînes suivantes : `"&amp;"`, `"&lt;"` et `"&gt;"` respectivement. Utilisez {{domxref("Node.textContent")}} pour obtenir une copie exacte du contenu de ces nœuds.

Pour insérer le HTML dans le document, plutôt que de remplacer le contenu d'un élément, utilisez la méthode {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}}.

## Syntaxe

```js
const content = element.innerHTML;

element.innerHTML = htmlString;
```

### Valeur

Une {{domxref("DOMString")}} contenant la sérialisation HTML des descendants de l'élément. Définir la valeur de `innerHTML` supprime tous les descendants et les remplace par les noeuds construits en analysant le HTML donné dans la chaîne `htmlString`.

### Exceptions

- `SyntaxError`
  - : Une tentative a été faite de définir la valeur de `innerHTML` en utilisant une chaîne qui n'est pas correctement formée HTML.
- `NoModificationAllowedError`
  - : Une tentative a été faite d'insérer le code HTML dans un noeud dont le parent est un {{domxref("Document")}}.

## Notes d'utilisation

La propriété `innerHTML` peut être utilisée pour examiner la source HTML actuelle de la page, y compris tous les changements réalisés depuis son chargement initial.

### Lecture du contenu HTML d'un élément

La lecture de `innerHTML` amène l'agent utilisateur à sérialiser le fragment HTML ou XML composé des descendants de l'élément. La chaîne résultante est renvoyée.

```js
let contents = myElement.innerHTML;
```

Cela vous permet de regarder le balisage HTML des nœuds de contenu de l'élément.

> **Note :** Le fragment HTML ou XML renvoyé est généré en fonction du contenu actuel de l'élément. Il est donc probable que le balisage et la mise en forme du fragment renvoyé ne correspondent pas au balisage de la page d'origine.

### Remplacement du contenu d'un élément

Définir la valeur de `innerHTML` vous permet de remplacer aisément le contenu existant d'un élément par un nouveau contenu.

Par exemple, vous pouvez effacer le contenu entier du document en effaçant le contenu de l'attribut {{domxref("Document.body", "body")}} du document.

```js
document.body.innerHTML = "";
```

Cet exemple récupère le balisage HTML actuel du document et remplace les caractères `"<"` par l'entité HTML `"& lt;"`, convertissant ainsi essentiellement le code HTML en texte brut. Ceci est ensuite inclus dans un élément {{HTMLElement ("pre")}}. Puis, la valeur de `innerHTML` est modifiée dans cette nouvelle chaîne. Par conséquent, le contenu du document est remplacé par un affichage du code source entier de la page.

```js
document.documentElement.innerHTML =
  "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";
```

#### Détails opérationnels

Qu'arrive-t-il exactement quand vous définissez la valeur de `innerHTML` ? Cela entraîne l'agent utilisateur à suivre ces étapes :

1. La valeur spécifiée est analysée en HTML ou XML (en fonction du type de document), ce qui donne un objet {{domxref ("DocumentFragment")}} représentant le nouvel ensemble de nœuds DOM pour les nouveaux éléments.
2. Si l'élément dont le contenu est remplacé est un élément {{HTMLElement ("template")}}, l'attribut {{domxref ("HTMLTemplateElement.content", "content")}} de l'élément `<template>` est remplacé par le nouveau `DocumentFragment` créé à l'étape 1.
3. Pour tous les autres éléments, le contenu de l'élément est remplacé par les noeuds du nouveau `DocumentFragment`.

### Considérations de sécurité

Il n'est pas rare de voir `innerHTML` utilisé pour insérer du texte dans une page Web. Il est possible que ceci devienne un vecteur d'attaque sur un site, ce qui crée potentiellement un risque de sécurité.

```js
const name = "John";
// en supposant que 'el' est un élément de document HTML
el.innerHTML = name; // inoffensif dans ce cas

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // inoffensif dans ce cas
```

Bien que cela puisse ressembler à une attaque [<i lang="en">cross-site scripting</i>](https://fr.wikipedia.org/wiki/Cross-site_scripting), le résultat est inoffensif. HTML5 spécifie qu'une balise {{HTMLElement ("script")}} insérée avec `innerHTML` [ne doit pas s'exécuter](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

Cependant, il existe des moyens d'exécuter JavaScript sans utiliser les éléments {{HTMLElement ("script")}}, donc il existe toujours un risque de sécurité chaque fois que vous utilisez `innerHTML` pour définir des chaînes sur lesquelles vous n'avez aucun contrôle. Par exemple :

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // affiche l'alerte
```

Pour cette raison, il est recommandé de ne pas utiliser `innerHTML` pour insérer du texte brut ; à la place, utilisez {{domxref("Node.textContent")}}. Cela n'analyse pas le contenu passé en HTML, mais l'insère à la place en tant que texte brut.

> **Attention :** Si votre projet est soumis à une vérification de sécurité, l'utilisation de `innerHTML` entraînera probablement le rejet de votre code. Par exemple, si vous utilisez `innerHTML` dans une extension de navigateur et soumettez l'extension à addons.mozilla.org, elle ne passera pas le processus de révision automatique.

## Exemple

Cet exemple utilise `innerHTML` pour créer un mécanisme pour consigner des messages dans une boîte sur une page Web.

### JavaScript

```js
function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}

log("Logging mouse events inside this container...");
```

La fonction `log()` crée la sortie du journal en récupérant l'heure actuelle à partir d'un objet {{jsxref ("Date")}} en utilisant {{jsxref ("Date.toLocaleTimeString", "toLocaleTimeString ()")}} et en créant une chaîne avec l'horodatage et le texte du message. Ensuite, le message est ajouté à la boîte avec la classe `"log"`.

Nous ajoutons une seconde méthode qui enregistre des informations sur les événements basés sur {{domxref ("MouseEvent")}} (tels que [`mousedown`](/fr/docs/Web/API/Element/mousedown_event), [`click`](/fr/docs/Web/API/Element/click_event) et [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)) :

```js
function logEvent(event) {
  var msg =
    "Event <strong>" +
    event.type +
    "</strong> at <em>" +
    event.clientX +
    ", " +
    event.clientY +
    "</em>";
  log(msg);
}
```

Alors, nous utilisons ceci comme un gestionnaire d'évènements pour un certain nombre d'évènements de souris sur la boîte qui contient notre journal.

```js
var boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

Le HTML est assez simple pour notre exemple.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Le {{HTMLElement ("div")}} avec la classe `"box"` est juste un conteneur pour la mise en page, présentant le contenu avec une boîte autour de lui. Le `<div>` dont la classe est `"log"` est le conteneur pour le texte du journal lui-même.

### CSS

Les styles CSS suivants pour notre exemple de contenu.

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

### Résultat

Le contenu résultant ressemble à ceci. Vous pouvez voir la sortie dans le journal en déplaçant la souris dans et hors de la boîte, en cliquant dedans, et ainsi de suite.

{{EmbedLiveSample("Exemple", 640, 350)}}

## Spécifications

{{Specifications}}

## Voir aussi

- {{domxref("Node.textContent")}} and {{domxref("Node.innerText")}}
- {{domxref("Element.insertAdjacentHTML")}}
- Analyse HTML dans une arborescence DOM : {{domxref("DOMParser")}}
- Sérialisation XML ou HTML dans une arborescence DOM : {{domxref("XMLSerializer")}}
