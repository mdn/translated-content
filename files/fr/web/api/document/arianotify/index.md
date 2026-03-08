---
title: "Document : méthode ariaNotify()"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La méthode **`ariaNotify()`** de l'interface {{DOMxRef("Document")}} définit qu'une chaîne de caractères de texte doit être annoncée par un {{Glossary("screen reader", "lecteur d'écran")}} si disponible et activé.

## Syntaxe

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Paramètres

- `announcement`
  - : Une chaîne de caractères définissant le texte à annoncer.
- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les propriétés suivantes&nbsp;:
    - `priority`
      - : Une valeur énumérée définissant la priorité de l'annonce. Les valeurs possibles sont&nbsp;:
        - `normal`
          - : L'annonce a une priorité normale. Elle sera lue après toute annonce qu'un lecteur d'écran est en train de faire.
        - `high`
          - : L'annonce a une priorité élevée. Elle sera lue immédiatement, interrompant toute annonce qu'un lecteur d'écran est en train de faire.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Description

La méthode **`ariaNotify()`** peut être utilisée pour déclencher de manière programmatique une annonce pour un lecteur d'écran. Cette méthode offre une fonctionnalité similaire à celle des [régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions), avec certains avantages&nbsp;:

- Les régions dynamiques ne peuvent faire des annonces qu'après des modifications du DOM, tandis qu'une annonce `ariaNotify()` peut être faite à tout moment.
- Les annonces des régions dynamiques impliquent la lecture du contenu mis à jour du nœud DOM modifié, tandis que le contenu de l'annonce `ariaNotify()` peut être défini indépendamment du contenu du DOM.

Les développeur·euse·s contournent souvent les limitations des régions dynamiques en utilisant des nœuds DOM cachés avec des régions dynamiques définies dessus, dont le contenu est mis à jour avec le contenu à annoncer. Cela est inefficace et sujet aux erreurs, et `ariaNotify()` offre un moyen d'éviter ces problèmes.

Certains lecteurs d'écran liront plusieurs annonces `ariaNotify()` dans l'ordre, mais cela ne peut pas être garanti sur tous les lecteurs d'écran et toutes les plateformes. Normalement, seule l'annonce la plus récente est lue. Il est plus fiable de combiner plusieurs annonces en une seule.

Par exemple, les appels suivants&nbsp;:

```js
document.ariaNotify("Bonjour ici.");
document.ariaNotify("Il est maintenant 8 heures.");
```

peuvent être mieux combinées&nbsp;:

```js
document.ariaNotify("Bonjour ici. Il est maintenant 8 heures.");
```

Les annonces `ariaNotify()` ne nécéssient pas {{Glossary("transient activation", "d'activation transitoire")}}&nbsp;; vous devez veiller à ne pas inonder les utilisateur·ice·s de lecteurs d'écran avec trop de notifications, car cela pourrait créer une mauvaise expérience utilisateur.

### Priorités d'annonce

Une annonce `ariaNotify()` avec `priority: high` définie est annoncée avant une annonce `ariaNotify()` avec `priority: normal` définie.

Les annonces `ariaNotify()` sont approximativement équivalentes aux annonces de régions ARIA dynamiques comme suit&nbsp;:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Cependant, les annonces `aria-live` auront la priorité sur les annonces `ariaNotify()`.

### Sélection de la langue

Les lecteurs d'écran choisissent une voix appropriée pour lire les annonces `ariaNotify()` (en termes d'accent, de prononciation, etc.) en fonction de la langue définie dans l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) de l'élément {{HTMLElement("html")}}, ou de la langue par défaut de l'agent utilisateur si aucun attribut `lang` n'est défini.

### Intégration de la politique de permissions

L'utilisation de `ariaNotify()` dans un document ou un {{HTMLElement("iframe")}} peut être contrôlée par une [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/aria-notify", "aria-notify")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation, toutes les annonces créées à l'aide de `ariaNotify()` échouent silencieusement (elles ne seront pas envoyées).

## Exemples

### Exemple simple d'utilisation de `ariaNotify()`

Cet exemple inclut un {{HTMLElement("button")}} qui déclenche une annonce pour un lecteur d'écran lorsqu'il est cliqué.

```html live-sample___basic-arianotify
<button>Appuyez</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document.ariaNotify("Bonjour, je suis Ed Winchester.");
});
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Essayez d'activer un lecteur d'écran, puis appuyez sur le bouton. Vous devriez entendre «&nbsp;Bonjour, je suis Ed Winchester.&nbsp;» prononcé par le lecteur d'écran.

### Exemple de liste de courses accessible

Cet exemple est une liste de courses qui vous permet d'ajouter et de supprimer des articles, et de suivre le coût total de tous les articles. Lorsqu'un article est ajouté ou supprimé, les lecteurs d'écran liront une annonce pour indiquer quel article a été ajouté/supprimé et quel est le total mis à jour.

#### HTML

Notre HTML comprend un formulaire ({{HTMLElement("form")}}) contenant deux entrées ({{HTMLElement("input")}}) — un champ `text` pour saisir les noms des articles et un champ `number` pour saisir les prix. Les deux champs sont [`required`](/fr/docs/Web/HTML/Reference/Attributes/required), et le champ `number` a un attribut [`step`](/fr/docs/Web/HTML/Reference/Attributes/step) de `0.01` pour empêcher la saisie de valeurs non monétaires (comme de grands décimales).

Sous le formulaire, nous avons une [liste non ordonnée](/fr/docs/Web/HTML/Reference/Elements/ul) pour afficher les articles ajoutés, et un élément HTML {{HTMLElement("p")}} pour afficher le coût total.

```html live-sample___shopping-list
<h1>Démonstration de <code>ariaNotify</code>&nbsp;: liste de courses</h1>

<form>
  <div>
    <label for="item">Entrez le nom de l'article</label>
    <input type="text" name="item" id="item" required />
  </div>
  <div>
    <label for="price">Entrez le prix de l'article</label>
    <input type="number" name="price" id="price" step="0.01" required />
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>

<hr />

<ul></ul>

<p>Total&nbsp;: 0.00 €</p>
```

```css hidden live-sample___shopping-list
html {
  box-sizing: border-box;
  font: 1.2em / 1.5 system-ui;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  padding: 0 50px;
}

div {
  display: flex;
  margin-bottom: 20px;
}

label {
  flex: 2;
}

input {
  flex: 4;
  padding: 5px;
}

form button {
  padding: 5px 10px;
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid gray;
}

li {
  margin-bottom: 10px;
}

li button {
  font-size: 0.6rem;
  margin-left: 10px;
}
```

#### JavaScript

Notre script commence par plusieurs définitions de constantes pour stocker des références au `<form>`, à nos deux éléments `<input>`, et à nos éléments `<ul>` et `<p>`. Nous incluons également une variable `total` pour stocker le prix total de tous les articles.

```js live-sample___shopping-list
const formulaire = document.querySelector("form");
const objet = document.querySelector("input[type='text']");
const prix = document.querySelector("input[type='number']");
const listePrix = document.querySelector("ul");
const sortieTotal = document.querySelector("p");

let total = 0;
```

Dans notre bloc de code suivant, nous définissons une fonction appelée `actualiserTotal()` qui a un seul objectif — elle met à jour le prix affiché dans l'élément `<p>` pour qu'il corresponde à la valeur actuelle de la variable `total`&nbsp;:

```js live-sample___shopping-list
function actualiserTotal() {
  sortieTotal.textContent = `Total : ${Number(total).toFixed(2)} €`;
}
```

Ensuite, nous définissons une fonction appelée `ajouterObjetDansListe()`. À l'intérieur du corps de la fonction, nous créons d'abord un élément {{HTMLElement("li")}} pour stocker un article nouvellement ajouté. Nous stockons le nom de l'article et le prix dans des attributs [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) sur l'élément, et faisons en sorte que son contenu textuel soit égal à une chaîne de caractères contenant l'article et le prix. Nous créons également un élément HTML {{HTMLElement("button")}} avec le texte «&nbsp;Supprimer &lt;nom-article&gt;&nbsp;», puis ajoutons l'élément de liste à la liste non ordonnée et le bouton à l'élément de liste.

La deuxième partie majeure du corps de la fonction est une définition d'écouteur d'évènement `click` sur le bouton. Lorsque le bouton est cliqué, nous récupérons d'abord une référence au nœud parent du bouton — l'élément de liste dans lequel il se trouve. Nous soustrayons ensuite le nombre contenu dans l'attribut `data-price` de l'élément de liste à la variable `total`, nous appelons la fonction `actualiserTotal()` pour mettre à jour le prix total affiché, puis nous appelons `ariaNotify()` pour annoncer l'article qui a été supprimé et le nouveau total. Enfin, nous supprimons l'élément de liste du DOM.

```js live-sample___shopping-list
function ajouterObjetDansListe(objet, prix) {
  const listeObjets = document.createElement("li");
  listeObjets.setAttribute("data-item", objet);
  listeObjets.setAttribute("data-price", prix);
  listeObjets.textContent = `${objet}: ${Number(prix).toFixed(2)} €`;
  const btn = document.createElement("button");
  btn.textContent = `Supprimer ${objet}`;

  listePrix.appendChild(listeObjets);
  listeObjets.appendChild(btn);

  btn.addEventListener("click", (e) => {
    const listeObjets = e.target.parentNode;
    total -= Number(listeObjets.getAttribute("data-price"));
    actualiserTotal();
    document.ariaNotify(
      `${listeObjets.getAttribute(
        "data-item",
      )} supprimé. Le total est maintenant de ${total.toFixed(2)} €.`,
      {
        priority: "high",
      },
    );
    listeObjets.remove();
  });
}
```

Notre dernier bloc de code ajoute un écouteur d'évènement `submit` au `<form>`. À l'intérieur de la fonction gestionnaire, nous appelons d'abord {{DOMxRef("Event.preventDefault", "preventDefault()")}} sur l'objet évènement pour empêcher l'envoi du formulaire. Nous appelons ensuite `ajouterObjetDansListe()` pour afficher le nouvel article et son prix dans la liste, ajoutons le prix à la variable `total`, appelons `actualiserTotal()` pour mettre à jour le total affiché, puis appelons `ariaNotify()` pour annoncer l'article ajouté et le nouveau total. Enfin, nous effaçons les valeurs actuelles des champs de saisie pour préparer l'ajout du prochain article.

```js live-sample___shopping-list
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  ajouterObjetDansListe(objet.value, prix.value);
  total += Number(prix.value);
  actualiserTotal();

  document.ariaNotify(
    `Article ${objet.value}, prix ${
      prix.value
    } €, ajouté à la liste. Le total est maintenant de ${total.toFixed(2)} €.`,
    {
      priority: "high",
    },
  );

  objet.value = "";
  prix.value = "";
});
```

#### Résultat

La sortie est la suivante&nbsp;:

{{EmbedLiveSample("shopping-list", "100%", 500, , , , "aria-notify")}}

Essayez d'activer un lecteur d'écran, puis d'ajouter et de supprimer des articles. Vous devriez les entendre annoncés par le lecteur d'écran.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.ariaNotify()")}}
- [Régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
