---
title: Chargement progressif
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Dans les articles précédents, nous avons abordé les API qui permettent que [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) soit une application web progressive&nbsp;:

- [Les <i lang="en">service workers</i>](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)
- [Les manifestes web](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs)
- [Les notifications push](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push).

Dans cet article, nous irons encore plus loin et améliorerons la performance de l'application en téléchargeant progressivement ses ressources.

## Première visualisation significative

Il est important de fournir quelque chose de pertinent le plus rapidement possible&nbsp;: plus on attend que la page se charge, plus il y a de chances qu'on quitte la page avant d'attendre que tout soit terminé. Il faudrait au moins pouvoir montrer la vue de base de la page, avec des espaces réservés aux endroits où le contenu sera chargé ensuite.

On peut obtenir ce fonctionnement à l'aide d'un chargement progressif ([<i lang="en">lazy loading</i> en anglais](https://en.wikipedia.org/wiki/Lazy_loading)). Cette technique consiste à différer le chargement d'autant de ressources que possible (HTML, CSS, JavaScript) et de ne charger que celles qui sont réellement nécessaires à la toute première expérience sur la page.

## Regroupement ou fractionnement

De nombreuses personnes ne parcourront pas toutes les pages d'un site web, bien que l'approche habituelle consiste à regrouper toutes les fonctionnalités dans un seul gros fichier. Un fichier `bundle.js` peut peser plusieurs mégaoctets et un unique paquet `style.css` peut tout contenir, les définitions de base des structures CSS mais aussi tous les styles possibles pour chaque version d'un site&nbsp;: mobile, tablette, ordinateur de bureau, pour l'impression, etc.

Il est plus rapide de télécharger toutes les informations sous la forme d'un unique fichier plutôt que beaucoup de petits, mais si l'utilisatrice ou l'utilisateur n'a pas besoin de tout au tout début, nous pourrions ne télécharger que ce qui est crucial puis gérer les autres ressources lorsqu'elles sont nécessaires.

## Ressources bloquant le rendu

Créer des paquets est un problème, car le navigateur doit charger le HTML, le CSS et le JavaScript avant de pouvoir afficher le rendu du résultat à l'écran. Pendant les quelques secondes séparant l'accès l'initial au site web et la fin du téléchargement, la personne verra une page blanche et subira une mauvaise expérience.

Pour corriger cela, nous pouvons, par exemple, ajouter `defer` aux fichiers JavaScript&nbsp;:

```html
<script src="app.js" defer></script>
```

Ils seront téléchargés et exécutés _après_ que le document lui-même a été analysé, si bien qu'il ne bloquera pas le rendu de la structure HTML.

Une autre technique consiste à charger les modules JavaScript à l'aide d'une [importation dynamique](/fr/docs/Web/JavaScript/Reference/Operators/import) uniquement lorsque cela est nécessaire.

Par exemple, si un site web dispose d'un bouton de recherche, nous pouvons charger le JavaScript pour la fonction de recherche après que la personne a cliqué sur le bouton de recherche&nbsp;:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Une fois que la personne a cliqué sur le bouton, le gestionnaire de clics asynchrone est appelé. La fonction attend que le module soit chargé, puis appelle la fonction `loadAutoComplete()` exportée par ce module. Le module `search.js` n'est donc téléchargé, analysé et exécuté qu'au moment de l'interaction.

Nous pouvons également éclater les fichiers CSS et leur ajouter des types de média&nbsp;:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Ceci indiquera le navigateur de ne les télécharger que si la condition est remplie.

Dans notre application de démonstration js13kPWA, le CSS est suffisamment simple pour tout laisser dans un seul fichier sans règle spécifique sur la façon de les charger. Nous pourrions même aller plus loin et déplacer tout ce qui se trouve dans `style.css` dans la balise `<style>` dans le `<head>` de `index.html`. Ceci améliorerait encore plus la performance mais pour la lisibilité de l'exemple, nous nous passerons aussi de cette approche.

## Images

En plus du JavaScript et du CSS, les sites web contiendront certainement un certain nombre d'images. Quand vous incluez des éléments [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img) dans votre HTML, chaque image référencée est alors recherchée et téléchargée lors de l'accès initial au site web. Il n'est pas inhabituel d'avoir des mégaoctets de données d'images à télécharger avant d'annoncer que le site est prêt, mais ceci crée, là encore, une perception de performance médiocre. Nous n'avons pas besoin de toutes les images dans la meilleure qualité possible au tout début de la consultation du site.

Ceci peut être optimisé. Tout d'abord, vous devriez utiliser des outils ou des services tels que [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/) qui réduiront la taille de fichier de vos images sans trop en altérer la qualité. Si vous avez déjà traité ce point, vous pouvez alors commencer à penser à optimiser le chargement des images en utilisant JavaScript. Nous expliquerons cela plus loin.

### Image de substitution

Plutôt que d'avoir toutes les captures d'écran des jeux référencés dans les attributs `src` des éléments `<img>`, ce qui forcerait le navigateur à les télécharger automatiquement, nous pouvons le faire de manière sélective via JavaScript. L'application js13kPWA utilise à la place une image de substitution qui est petite et légère tandis que les chemins d'accès définitifs vers les images cibles sont stockées dans les attributs `data-src`&nbsp;:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Ces images seront téléchargées via JavaScript _après_ que le site aura fini de construire la structure HTML. L'image conteneur est dimensionnée de la même façon que les images originales le sont, si bien qu'elle occupera le même espace et n'obligera pas le navigateur à redessiner l'agencement quand les images seront téléchargées.

### Chargement via JavaScript

Le fichier `app.js` traite les attributs `data-src` comme ceci&nbsp;:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

La variable `imagesToLoad` contient des références à toutes les images, tandis que la fonction `loadImages` déplace le chemin d'accès de `data-src` à `src`. Quand toutes les images sont effectivement téléchargées, nous supprimons leur attribut `data-src` qui n'est alors plus nécessaire. Ensuite, nous bouclons sur chacune des images et nous la chargeons&nbsp;:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Flou en CSS

Pour rendre le processus visuellement plus attractif, l'image de substitution est floutée grâce à CSS.

![Capture d'écran des images de remplacement dans l'application js13kPWA.](js13kpwa-placeholders.png)

Nous générons les images avec un flou au début, si bien qu'une transition vers la version précise peut être réalisée&nbsp;:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

L'effet de flou est ainsi supprimé en une demi-seconde, ce qui semble suffisant pour l'effet de «&nbsp;chargement&nbsp;».

## Chargement à la demande

Le mécanisme de chargement des images présenté dans la section précédente fonctionne correctement&nbsp;: il charge les images après que la structure HTML a été générée et applique un joli effet de transition au processus. Le problème est qu'il télécharge toujours _toutes_ les images en une fois, même si la personne ne verra que les deux ou trois premières au chargement de la page.

Ce problème peut être résolu en ne chargeant les images que lorsqu'elles sont nécessaires&nbsp;: c'est ce qu'on appelle le <i lang="en">lazy loading</i> ou chargement différé. Le [chargement différé](/fr/docs/Web/Performance/Guides/Lazy_loading) est une technique qui permet de charger les images uniquement lorsqu'elles apparaissent dans la fenêtre de visualisation. Il existe plusieurs façons d'indiquer au navigateur de charger les images de façon discontinue.

### L'attribut de chargement sur `<img>`

La manière la plus simple de demander au navigateur de charger en différé n'implique pas l'utilisation de JavaScript. Vous ajoutez l'attribut [`loading`](/fr/docs/Web/HTML/Reference/Elements/img#loading) à un élément [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img) avec la valeur `lazy`, et le navigateur saura qu'il ne doit charger cette image qu'en cas de besoin.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Observateur d'intersection

Ceci est une amélioration progressive apportée à l'exemple fonctionnel précédent. On utilise [l'API <i lang="en">Intersection Observer</i>](/fr/docs/Web/API/Intersection_Observer_API) pour télécharger uniquement les images cibles lorsqu'on a suffisamment fait défiler la page vers le bas, provoquant leur apparition dans la zone d'affichage.

Voici le code correspondant&nbsp;:

```js
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
```

Si l'objet [`IntersectionObserver`](/fr/docs/Web/API/Intersection_Observer_API) est pris en charge, l'application en crée une nouvelle instance. La fonction passée en paramètre gère le cas où un ou plusieurs objets ont une intersection avec l'observateur (dans notre cas, lorsqu'ils apparaissent dans la zone d'affichage). Nous pouvons itérer sur chaque cas et réagir en conséquence&nbsp;: quand l'image est visible, nous chargeons l'image correcte et nous arrêtons de l'observer vu que nous n'avons désormais plus besoin de le faire.

Revenons ici sur l'amélioration progressive&nbsp;: le code est écrit de manière à ce que l'application fonctionne, qu'`IntersectionObserver` soit pris en charge ou non. S'il ne l'est pas, nous chargeons simplement les images en utilisant l'approche plus basique décrite avant.

## Améliorations

Rappelez-vous qu'il existe de nombreuses façons d'optimiser les temps de chargement, et que cet exemple n'explore qu'une seule de ces approches. Vous pouvez essayer de rendre vos applications plus résistantes en les faisant fonctionner sans JavaScript, soit en utilisant [`<noscript>`](/fr/docs/Web/HTML/Reference/Elements/noscript) pour afficher l'image avec le `src` final déjà renseigné ou en enrobant les balises `<img>` avec des éléments [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a) pointant vers les images cibles de telle sorte que l'utilisatrice ou l'utilisateur puisse cliquer pour y accéder quand il le souhaite.

Nous ne le ferons pas, car l'application elle-même dépend de JavaScript. Sans lui, la liste des jeux ne sera même pas chargée et le code du <i lang="en">service worker</i> ne s'exécutera pas.

Nous pourrions réécrire le processus de chargement pour charger non seulement les images mais aussi les éléments complets composés des descriptions complètes et des liens. Cela fonctionnerait comme un défilement infini où l'on chargerait les éléments de la liste seulement après un défilement de la page vers le bas. De cette façon, la structure HTML initiale sera minimale, le temps de chargement encore plus court et nous aurions des bénéfices de performance encore meilleurs.

## Conclusion

Moins de fichiers à charger initialement, de plus petits fichiers répartis en modules, l'utilisation de contenu de substitution et le chargement de davantage de contenu à la demande&nbsp;: tout cela nous aide à obtenir des temps de chargement initiaux plus rapides, aidant celles et ceux qui implémentent l'application, mais surtout offrant ainsi une expérience plus fluide aux utilisatrices et utilisateurs.

Rappelez-vous de ce que nous avons dit concernant l'amélioration progressive&nbsp;: il s'agit de fournir un produit utilisable, quel que soit l'appareil ou la plateforme, tout en enrichissant l'expérience de celles et ceux qui utilisent des navigateurs modernes.

## Dernières réflexions

Voici la fin de cette série de tutoriels. Nous avons parcouru [le code source de l'application d'exemple js13kPWA](https://github.com/mdn/pwa-examples/tree/master/js13kpwa), découvert [la structure des PWA](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), [la disponibilité hors connexion avec les <i lang="en">service workers</i>](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [les PWA installables](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs), et enfin les [notifications](/fr/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push).

Dans cet article, nous avons examiné le concept de chargement progressif, y compris un exemple intéressant qui utilise l'[API <i lang="en">Intersection Observer</i>](/fr/docs/Web/API/Intersection_Observer_API).

N'hésitez pas à expérimenter avec le code, à améliorer votre application existante avec des fonctionnalités PWA ou à créer quelque chose d'entièrement nouveau. Les PWA offrent un avantage considérable par rapport aux applications web classiques.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
