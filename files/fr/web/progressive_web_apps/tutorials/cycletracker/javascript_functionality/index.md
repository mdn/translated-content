---
title: "CycleTracker : fonctionnalités JavaScript"
short-title: Fonctionnalités JavaScript
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 3c0315d7898d2a5bc21784002c9cdc9dddcf559d
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Dans la section précédente, nous avons écrit le code HTML et CSS de CycleTracker, et ainsi obtenu une version statique de notre application web. Dans cette section, nous écrirons le code JavaScript qui permettra de convertir le HTML statique en une application web fonctionnelle.

Si ce n'est pas déjà fait, téléchargez [le fichier HTML](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality/index.html) et [le fichier CSS](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality/style.css), et enregistrez-les sur votre ordinateur avec les noms `index.html` et `styles.css`, respectivement.

La dernière ligne du fichier HTML appelle le fichier JavaScript `app.js`. C'est le script que nous allons créer dans ce chapitre. Dans cette leçon, nous allons écrire le code JavaScript exécuté par le navigateur, qui est responsable de la capture des données saisies dans le formulaire, de l'enregistrement local des données et de la complétion de la zone indiquant les cycles précédents.

À la fin de ce chapitre, vous aurez une application pleinement fonctionnelle. Dans les chapitres suivants, nous améliorerons progressivement l'application afin que celle-ci devienne une PWA qui puisse être installée et qui fonctionne hors-ligne.

## Plan d'action JavaScript

Lorsqu'une personne visite la page, nous vérifions s'il existe déjà des données dans le stockage local. À la première visite, il n'y aura pas de données. Lorsqu'une personne sélectionne deux dates et soumet le formulaire pour la première fois, il faut&nbsp;:

1. Créer un titre "`<h2>Cycles antérieurs</h2>`"
2. Créer une liste non-ordonnée avec un élément [`<ul>`](/fr/docs/Web/HTML/Element/ul)
3. Remplir l'élément `<ul>` avec un seul élément [`<li>`](/fr/docs/Web/HTML/Element/li) qui contient les informations du cycle en question
4. Sauvegarder les données dans le stockage local

Pour les saisies ultérieures, il faut&nbsp;:

1. Ajouter le nouveau cycle menstruel à la liste actuelle
2. Trier la liste par ordre chronologique
3. Remplir à nouveau la liste `<ul>` avec cette nouvelle liste, en utilisant un élément `<li>` par cycle
4. Ajouter les données dans le stockage local

Les personnes ayant déjà utilisé l'application auront des données existantes dans le stockage local. Lorsqu'elles reviennent sur la page web en utilisant le même navigateur depuis le même appareil, il faut&nbsp;:

1. Récupérer les données enregistrées dans le stockage local
2. Créer un titre "`<h2>Cycles antérieurs</h2>`"
3. Créer une liste non-ordonnée avec un élément [`<ul>`](/fr/docs/Web/HTML/Element/ul)
4. Remplir l'élément `<ul>` avec un élément [`<li>`](/fr/docs/Web/HTML/Element/li) pour chaque cycle menstruel enregistré dans le stockage local.

Cette application a uniquement pour objectif d'enseigner les fondamentaux pour convertir une application web en PWA. Aussi, elle ne contient pas les fonctionnalités nécessaires à une application réelle comme la validation du formulaire, la vérification des erreurs ou encore les fonctionnalités pour éditer ou supprimer un enregistrement. N'hésitez pas à ajouter ces fonctionnalités et à adapter les exemples donnés pour créer l'application qui correspond à vos objectifs d'apprentissage et à vos besoins.

## Envoi du formulaire

La page contient un formulaire, l'élément HTML [`<form>`](/fr/docs/Web/HTML/Element/form), doté de sélecteurs de date pour saisir les dates de début et de fin de chaque cycle menstruel. Les sélecteurs de date sont des éléments HTML [`<input>`](/fr/docs/Web/HTML/Element/input) de type [`date`](/fr/docs/Web/HTML/Element/input/date), dotés respectivement des [identifiants (`id`)](/fr/docs/Web/HTML/Global_attributes/id) `start-date` et `end-date`.

Le formulaire n'a pas de méthode ou d'action déclarée dans le HTML. À la place, nous ajoutons un gestionnaire d'évènement au formulaire à l'aide de la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener). Lorsqu'on tente d'envoyer le formulaire, on empêche l'envoi par défaut du formulaire, on enregistre les données du nouveau cycle menstruel et on affiche ce cycle ainsi que les précédents, puis on réinitialise le formulaire.

```js
// On crée des constantes pour le formulaire et les contrôles associés
const elemFormNouveauCycle = document.getElementsByTagName("form")[0];
const elemChampDateDebut = document.getElementById("start-date");
const elemChampDateFin = document.getElementById("end-date");

// On écoute l'évènement pour l'envoi du formulaire.
elemFormNouveauCycle.addEventListener("submit", (event) => {
  // On empêche le formulaire d'être envoyé au serveur
  // car tout se fait côté client.
  event.preventDefault();

  // On récupère les dates de début et de fin
  // à partir du formulaire.
  const dateDebut = elemChampDateDebut.value;
  const dateFin = elemChampDateFin.value;

  // On vérifie si les dates sont invalides
  if (verifierDatesInvalides(dateDebut, dateFin)) {
    // Si c'est le cas, on s'arrête là.
    return;
  }

  // On enregistre le nouveau cycle dans l'espace de stockage
  // côté client
  enregistrerNouveauCycle(dateDebut, dateFin);

  // On rafraîchit l'interface.
  afficherCyclesAnterieurs();

  // On réinitialise le formulaire.
  elemFormNouveauCycle.reset();
});
```

Après avoir empêché l'envoi du formulaire au serveur grâce à [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault), on&nbsp;:

1. [Valide les données saisies](#validation_des_données_saisies) et on quitte la fonction si elles sont invalides,
2. Enregistre le nouveau cycle en [récupérant, analysant, ajoutant, triant, transformant en texte, puis en triant à nouveau](#récupérer_ajouter_trier_et_réengistrer_les_données) les données dans le stockage local,
3. [Affiche les données du formulaire](#afficher_les_données_à_lécran) ainsi que celles des cycles menstruels passés avec un titre de section,
4. Réinitialise le formulaire grâce à la méthode [`HTMLFormElement.reset()`](/fr/docs/Web/API/HTMLFormElement/reset).

### Validation des données saisies

On vérifie si les dates sont invalides de façon minimale. On s'assure qu'aucune date ne vaut `null` (ce qui ne devrait pas avoir lieu grâce à l'attribut HTML `required`). On vérifie aussi si la date de début n'est pas postérieure à la date de fin. S'il y a une erreur, on réinitialise le formulaire.

```js
function verifierDatesInvalides(dateDebut, dateFin) {
  // On vérifie que la date de fin arrive après la date de début
  // et qu'aucune n'est nulle.
  if (!dateDebut || !dateFin || dateDebut > dateFin) {
    // Pour améliorer la validation, on pourrait :
    // 1. Ajouter un message d'erreur pour chaque type d'erreur
    // 2. Transmettre ces erreurs aux outils d'assistance
    // 3. Déplacer le focus à l'emplacement de l'erreur
    // Pour notre exemple actuel, on réinitialise simplement
    // le formulaire si au moins une des dates est invalide
    elemFormNouveauCycle.reset();
    // Si les dates sont invalides, on renvoie true
    return true;
  }
  // Sinon
  return false;
}
```

Dans une version plus robuste de cette application, il faudrait aussi inclure des messages d'erreur explicatifs pour indiquer où l'erreur se situe. Une application correcte indiquerait l'erreur, puis placerait le focus sur le contrôle de formulaire concerné, tout en utilisant [les régions dynamiques ARIA](/fr/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) pour communiquer ces informations aux outils d'assistance.

## Stockage local

On utilise [l'API <i lang="en">Web Storage</i>](/fr/docs/Web/API/Web_Storage_API), et plus précisément [`window.localStorage`](/fr/docs/Web/API/Window/localStorage) pour enregistrer les paires de dates de début et de fin dans un objet JSON en chaîne de caractères dans l'espace de stockage local.

[Le stockage local (<i lang="en">local storage</i>)](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#stocker_des_données_simples_—_web_storage) a quelques limitations, mais il suffira aux besoins de notre application. Nous utilisons ici le stockage local pour avoir une application et qui fonctionne uniquement côté client. Cela signifie que les données seront uniquement stockées dans un navigateur d'un appareil donné. Toute suppression des données du navigateur entraînera la perte des cycles enregistrés localement. On peut voir ce point comme une limitation ou comme un avantage pour ce cas précis&nbsp;: les données des cycles menstruels sont personnelles et on pourra se soucier de la vie privée et de la diffusion de ces données sur d'autres appareils ou navigateurs.

Pour une application plus robuste, on pourra employer d'autres outils [de stockage côté client](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) comme [IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) et les <i lang="en">service workers</i> (que nous verrons plus tard) qui ont de meilleures performances.

Parmi les limites de `localStorage`, il y a&nbsp;:

- Un stockage limité des données
  - : `localStorage` est limité à 5Mo de données par origine. Dans notre cas, c'est largement suffisant.
- Seules des chaînes de caractères peuvent y être stockées
  - : `localStorage` enregistre des données avec une clé qui est une chaîne de caractères et une valeur correspondante qui est aussi une chaîne de caractères. Nos dates de début et de fin seront enregistrées sous la forme d'un objet JSON passé en chaîne de caractères. Pour des données plus complexes, un mécanisme de stockage plus robuste comme IndexedDB sera plus utile.
- Un impact sur les performances
  - : Récupérer ou écrire des données dans le stockage local se fait de façon synchrone et sur le fil d'exécution principal. Lorsque le fil d'exécution principal est occupé, les applications ne répondent pas et apparaissent comme figées. Étant donné la nature élémentaire de cette application, on néglige cet impact.
- La disponibilité restreinte au fil d'exécution principal
  - : En complément des problèmes de performance liés à l'exécution sur le <i lang="en">thread</i> principal, les <i lang="en">service workers</i> n'ont pas accès à ce contexte. Autrement dit, un <i lang="en">service worker</i> ne peut pas récupérer ou écrire directement des données dans le stockage local.

### Récupérer, ajouter, trier, et réengistrer les données

En utilisant le stockage local avec une seule chaîne de caractères, on&nbsp;:

1. Récupère les données stockées en JSON
2. Analyse ces éventuelles données
3. Ajoute la nouvelle paire de dates au tableau existant
4. Trie les dates
5. Convertit de nouveau l'objet en chaîne de caractères
6. Enregistre cette chaîne de caractères dans `localStorage`.

Pour cela, on crée quelques fonctions&nbsp;:

```js
// On ajoute une clé de stockage comme une constante
// globale de l'application
const CLE_STOCKAGE = "period-tracker";

function enregistrerNouveauCycle(dateDebut, dateFin) {
  // On récupère les données du stockage
  const cycles = recupererCyclesEnregistres();

  // On ajoute à la fin du tableau un objet correspondant
  // au nouveau cycle.
  cycles.push({ dateDebut, dateFin });

  // On trie le tableau afin que les cycles soient triés
  // par date de début, du plus récent jusqu'au plus
  // ancien.
  cycles.sort((a, b) => {
    return new Date(b.dateDebut) - new Date(a.dateDebut);
  });

  // On enregistre le tableau mis à jour dans le stockage.
  window.localStorage.setItem(CLE_STOCKAGE, JSON.stringify(cycles));
}

function recupererCyclesEnregistres() {
  // On récupère la chaîne de caractères qui représente
  // les données des cycles depuis localStorage
  const donnees = window.localStorage.getItem(CLE_STOCKAGE);

  // Si aucun cycle n'était enregistré, on prend un
  // tableau vide par défaut. Sinon, on renvoie les données
  // enregistrées après une extraction du format JSON
  const cycles = donnees ? JSON.parse(donnees) : [];

  return cycles;
}
```

## Afficher les données à l'écran

La dernière étape de notre application consiste à afficher la liste des cycles antérieurs à l'écran avec un titre.

Dans notre document HTML, on a ajouté un emplacement `<section id="past-periods">` qui servira à contenir ce titre et la liste des cycles antérieurs.

Ajoutons cet élément conteneur en haut du script.

```js
const conteneurCyclesAnterieurs = document.getElementById("past-periods");
```

On récupère la chaîne de caractères convertie des cycles passés ou un tableau vide. Si le tableau est vide, on sort de la fonction. S'il y a des cycles antérieurs, on réinitialise le contenu du conteneur. On crée ensuite un titre et une liste non-ordonnée, puis on boucle sur les cycles passés et on ajoute un élément de liste pour chacun, avec les dates de début et de fin mises en forme.

```js
function afficherCyclesAnterieurs() {
  // On récupère les données sur les cycles passés
  // à partir de la chaîne de caractères convertie
  // ou un tableau vide.
  const cycles = recupererCyclesEnregistres();

  // On sort de la fonction s'il n'y a pas de cycle
  if (cycles.length === 0) {
    return;
  }

  // On nettoie la liste des cycles antérieurs,
  // car on va l'afficher complètement à nouveau.
  conteneurCyclesAnterieurs.innerHTML = "";

  const titreCyclesAnterieurs = document.createElement("h2");
  titreCyclesAnterieurs.textContent = "Cycles antérieurs";

  const listeCyclesPasses = document.createElement("ul");

  // On parcourt la liste des tous les cycles et on
  // les affiche.
  cycles.forEach((cycle) => {
    const elementCycle = document.createElement("li");
    elementCycle.textContent = `Du ${formaterDate(
      cycle.dateDebut,
    )} au ${formaterDate(cycle.dateFin)}`;
    listeCyclesPasses.appendChild(elementCycle);
  });

  conteneurCyclesAnterieurs.appendChild(titreCyclesAnterieurs);
  conteneurCyclesAnterieurs.appendChild(listeCyclesPasses);
}

function formaterDate(chaineDate) {
  // On convertit la chaîne de caractères
  // représentant la date en un objet Date.
  const date = new Date(chaineDate);

  // On formate la date en tenant compte de
  // la locale pour une meilleure expérience.
  return date.toLocaleDateString("fr", { timeZone: "UTC" });
}
```

### Afficher les cycles antérieurs au chargement

Lorsque le fichier JavaScript est exécuté après le chargement de la page, on affiche les éventuels cycles antérieurs.

```js
// On démarre l'application en affichant les données
// des cycles antérieurs.
afficherCyclesAnterieurs();
```

## Fichier JavaScript complet

Au final, votre fichier `app.js` devrait ressembler à ce JavaScript&nbsp;:

```js
const elemFormNouveauCycle = document.getElementsByTagName("form")[0];
const elemChampDateDebut = document.getElementById("start-date");
const elemChampDateFin = document.getElementById("end-date");
const conteneurCyclesAnterieurs = document.getElementById("past-periods");

// On ajoute une clé de stockage comme une constante
// globale de l'application
const CLE_STOCKAGE = "period-tracker";

// On écoute l'évènement pour l'envoi du formulaire.
elemFormNouveauCycle.addEventListener("submit", (event) => {
  event.preventDefault();
  const dateDebut = elemChampDateDebut.value;
  const dateFin = elemChampDateFin.value;
  if (verifierDatesInvalides(dateDebut, dateFin)) {
    return;
  }
  enregistrerNouveauCycle(dateDebut, dateFin);
  afficherCyclesAnterieurs();
  elemFormNouveauCycle.reset();
});

function verifierDatesInvalides(dateDebut, dateFin) {
  if (!dateDebut || !dateFin || dateDebut > dateFin) {
    elemFormNouveauCycle.reset();
    return true;
  }
  return false;
}

function enregistrerNouveauCycle(dateDebut, dateFin) {
  const cycles = recupererCyclesEnregistres();
  cycles.push({ dateDebut, dateFin });
  cycles.sort((a, b) => {
    return new Date(b.dateDebut) - new Date(a.dateDebut);
  });
  window.localStorage.setItem(CLE_STOCKAGE, JSON.stringify(cycles));
}

function recupererCyclesEnregistres() {
  const data = window.localStorage.getItem(CLE_STOCKAGE);
  const cycles = data ? JSON.parse(data) : [];
  console.dir(cycles);
  console.log(cycles);
  return cycles;
}

function afficherCyclesAnterieurs() {
  const titreCyclesAnterieurs = document.createElement("h2");
  const listeCyclesPasses = document.createElement("ul");
  const cycles = recupererCyclesEnregistres();
  if (cycles.length === 0) {
    return;
  }
  conteneurCyclesAnterieurs.innerHTML = "";
  titreCyclesAnterieurs.textContent = "Past cycles";
  cycles.forEach((cycle) => {
    const elementCycle = document.createElement("li");
    elementCycle.textContent = `From ${formaterDate(
      cycle.dateDebut,
    )} to ${formaterDate(cycle.dateFin)}`;
    listeCyclesPasses.appendChild(elementCycle);
  });

  conteneurCyclesAnterieurs.appendChild(titreCyclesAnterieurs);
  conteneurCyclesAnterieurs.appendChild(listeCyclesPasses);
}

function formaterDate(chaineDate) {
  const date = new Date(chaineDate);
  return date.toLocaleDateString("fr", { timeZone: "UTC" });
}

afficherCyclesAnterieurs();
```

Vous pouvez essayer [l'application de suivi menstruel CycleTracker (en anglais)](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality) et voir [le code source correspondant (en anglais)](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality) sur GitHub. Pour l'instant, l'application est fonctionnelle, mais ce n'est pas encore une PWA.

## Pour la suite

Une PWA est essentiellement une application web qui peut être installée et améliorée progressivement pour fonctionner hors-ligne. Maintenant que nous avons une application web fonctionnelle, nous allons ajouter les fonctionnalités nécessaires pour la convertir en PWA&nbsp;: [un manifeste](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [une connexion sécurisée](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), et [un <i lang="en">service worker</i>](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Pour commencer, nous allons créer [le fichier du manifeste de CycleTracker](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), qui contiendra l'identité, l'apparence et l'iconographie de notre PWA CycleTracker.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
