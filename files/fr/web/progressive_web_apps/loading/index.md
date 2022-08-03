---
title: Chargement progressif
slug: Web/Progressive_web_apps/Loading
tags:
  - Chargement
translation_of: Web/Progressive_web_apps/Loading
original_slug: Web/Progressive_web_apps/Chargement
---
{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

Dans les articles précédents, nous avons abordé les APIs qui nous aident à faire de notre exemple [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) une Progressive Web App: [Service Workers](en-US/docs/Web/Progressive_web_apps/Offline_Service_workers), [Manifestes Web](/fr/docs/Web/Progressive_web_apps/Installable_PWAs), [Notifications et Push](/fr/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push). Dans cet article, nous irons encore plus loin et améliorerons la performance de l'application en téléchargeant progessivement ses ressources.

## Première visualisation signifiante

Il est important de fournir quelque chose qui ait du sens pour l'utilisateur dès que possible  — plus il attend que la page se charge, plus il y a de chances qu'il s'en aille plutôt que d'attendre que tout soit fini. Nous devrions être capable de lui montrer au moins une vue basique de la page qu'il veut voir avec des emplacements où du contenu supplémentaire sera chargé à un moment donné.

Ceci peut être réalisé grâce au chargement progressif — également appelé [Lazy loading](https://en.wikipedia.org/wiki/Lazy_loading). Tout ceci consiste en retardant autant que possible le plus de ressources que possible (HTML, CSS, JavaScript), et ne charger immédiatement que celles qui sont réellement nécessaire pour la toute première expérience.

## Mise en paquet versus éclatement

De nombreux visiteurs ne naviguerons pas sur la totalité des pages d'un site web bien que l'approche habituelle consiste à mettre dans un paquet toutes les fonctionnalités que nous avons dans un seul gros fichier. Un fichier `bundle.js` peut peser plusieurs megaoctets et un unique paquet `style.css` peut tout contenir, depuis les définitions de base des structures CSS à tous les styles possibles de toutes les versions d'un site: mobile, tablette, ordinateur de bureau, pour l'impression, etc.

Il est plus rapide de télécharger toutes les informations sous la forme d'un unique fichier plutôt que beaucoup de petits, mais si l'utilisateur n'a pas besoin de tout au tout début, nous pourrions ne télécharger que ce qui est crucial puis gérer les autres ressources quand elles sont nécessaires.

## Render-blocking resources

Créer des paquets est un problème car le navigateur doit charger le HTML, le CSS et le JavaScript avant qu'il ne puisse afficher le rendu du résultat à l'écran. Pendant les quelques secondes séparant l'accès l'initial au site web et la fin du téléchargement, l'utilisateur voit une page blanche ce qui est une mauvaise expérience.

Pour corriger ça, nous pouvons, par exemple, ajouter `defer` aux fichiers JavaScript:

```html
<script src="app.js" defer></script>
```

Ils seront téléchargés et exécutés _après_ que le document lui-même a été analysé, si bien qu'il ne bloquera pas le rendu de la structure HTML. Nous pouvons également éclater les fichiers CSS et leur ajouter des types de média&nbsp;:

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="print.css" media="print">
```

Ceci indiquera le navigateur de ne les télécharger que si la condition est remplie.

Dans notre application de démonstration js13kPWA, le CSS est suffisamment simple pour tout laisser dans un seul fichier sans règle spécifique sur la façon de les charger. Nous pourrions même aller plus loin et déplacer tout ce qui se trouve dans `style.css` dans la balise `<style>` dans le `<head>` de `index.html` — ceci améliorerait encore plus la performance mais pour la lisibilité de l'exemple, nous nous passerons aussi de cette approche.

## Images

En plus du JavaScript et du CSS, les sites web contiendront certainement un certain nombre d'images. Quand vous incluez des éléments {{htmlelement("img")}} dans votre HTML, chaque image référencée est alors recherchée et téléchargée lors de l'accès initial au site web. Il n'est pas inhabituel d'avoir des mégaoctets de données d'images à télécharger avant d'annoncer que le site est prêt, mais ceci, une nouvelle fois, crée une mauvaise perception de performance. Nous n'avons pas besoin de toutes les images dans la meilleure qualité possible au tout début de la consultation du site.

Ceci peut être optimisé. Tout d'abord, vous devriez utiliser des outils ou des services tels que [TinyPNG](https://tinypng.com/) qui réduit la taille de fichier de vos images sans trop en altérer la qualité. Si vous avez dépassé ce stade, vous pouvez alors commencer à penser à optimiser le chargement des images en utilisant JavaScript. Nous expliquerons cela plus loin.

### Image conteneur

Plutôt que d'avoir toutes les captures d'écran des jeux référencés dans les attributs `src` des éléments `<img>`, ce qui forcera le navigateur à les télécharger automatiquement, nous pouvons le faire de manière sélective via JavaScript. L'application js13kPWA utilise à la place une image conteneur qui est petite et légère tandis que les chemins d'accès définitifs vers les images cibles sont stockées dans les attributs `data-src`:

```html
<img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
```

Ces images seront téléchargées via JavaScript _après_ que le site aura fini de construire la structure HTML. L'image conteneur est dimensionnée de la même façon que les images originales le sont, si bien qu'elle occupera le même espace et n'obligera pas le navigateur à redessiner l'agencement quand les images sont téléchargées.

### Chargement via JavaScript

Le fichier `app.js` traite les attributs `data-src` comme ceci:

```js
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
```

La variable `imagesToLoad` contient des références à toutes les images, tandis que la fonction `loadImages` déplace le chemin d'accès de `data-src` à `src`. Quand toutes les images sont effectivement téléchargées, nous supprimons leur attribut `data-src` attendu qu'ls ne sont désormais plus nécessaires. Ensuite, nous bouclons sur chacune des images et nous la chargeons:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Flou en CSS

Pour rendre le processus visuellement plus attractif, le conteneur est flouté via CSS.

![Screenshot of placeholder images in the js13kPWA app.](js13kpwa-placeholders.png)

Nous générons les images avec un flou au début si bien qu'une transition vers la version précise peut être réalkisée:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Ceci supprimera l'effet de flou en une demie seconde, ce qui paraît assez bien pour l'effet de "chargement".

## Chargement à la demande

Le mécanisme de chargement des images présenté dans la section précédente fonctionne correctement — il charge les imges après que la structure HTML a été générée et applique un joli effet de transition au processus. Le problème est qu'il télécharge toujours _toutes_ les images en une fois, même si l'utilisateur ne verra que les deux ou trois premières au chargement de la page.

Ce problème peut être résolu avec la nouvelle [API Intersection Observer](/fr/docs/Web/API/Intersection_Observer_API) — en l'utilisant, nous pouvons nous assurer que les images ne seront téléchargées que lorsqu'elles apparaissent dans le viewport.

### Intersection Observer

Ceci est une amélioration progressive à l'exemple fonctionnel précédent — [Intersection Observer](/fr/docs/Web/API/Intersection_Observer_API) téléchargera les images cibles seulement quand l'utilisateur fait défiler la page vers le bas, provoquant leur affichage dans le viewport.

Voici à quoi le code correspondant ressemble:

```js
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
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

Si l'objet {{domxref("IntersectionObserver")}} est pris en charge, l'application en crée une nouvelle instance. La fonction passée en paramètre gère le cas où un ou plusieurs objets ont une intersection avec l'observer (i.e. apparaît à l'intérieur du viewport). Nous pouvons itérer sur chaque cas et réagir en conséquence — quand l'image est visible, nous chargeons l'image correcte et nous arrêtons de l'observer vu que nous n'avons désormais plus le faire.

Répétons notre avertissement précédent concernant l'amélioration progressive — le code est écrit de telle sorte que l'application fonctionnera que l'Intersection Observer soit pris en charge ou pas. S'il ne l'est pas, nous chargeons simplement les images en utilisant une approche plus basique présentée précédemment.

## Améliorations

Rappelez-vous qu'il y a de nombreuses façons d'optimiser les temps de chargement et cet exemple explore seulement l'une d'elles. Vous pourriez essayer de blinder davantage votre application en lui permettant de fonctionner sans JavaScript — soit en utilisant {{htmlelement("noscript")}} pour afficher l'image avec le `src` final déjà renseigné ou en enrobant les balises `<img>` avec des éléments {{htmlelement("a")}} pointant vers les images cibles de telle sorte que l'utilisateur puisse cliquer pour y accéder quand il le souhaite.

Nous ne le ferons pas car l'application elle-même dépend de JavaScript — sans lui, la liste des jeux ne sera même pas chargée et le code du Service Worker ne s'exécutera pas.

Nous pourrions réécrire le processus de chargement pour charger non seulement les images mais aussi les éléments complets composés des descriptions complètes et des liens. Cela fonctionnerait comme un défilement infini — charger les éléments de la liste seulement quand l'utilisateur fait défiler la page vers le bas. De cette façon, la structure HTML initiale sera minimale, le temps de chargement encore plus court et nous aurions des bénéfices de performance encore meilleurs.

## Conclusion

Moins de fichiers à charger initialement, de plus petits fichiers répartis en modules, l'utilisation de conteneurs de placement et le chargement de davantage de contenu à la demande — ceci aidera à obtenir des temps de chargement initiaux plus rapides, ce qui profite au créateur de l'application et offre une expérience plus fluide à l'utilisateur.

Rappelez-vous de ce que nous avons dit concernant l'approche d'amélioration progressive — offrir un produit utilisable quel que soit l'appareil ou la plateforme, mais s'assurer d'enrichir l'expérience pour ceux qui utilisent des navigateurs modernes.

## Dernières réflexions

C'est fini pour ces séries de tutoriels — nous avons examiné le [code source code de l'exemple d'application js13kPWA](https://github.com/mdn/pwa-examples/tree/master/js13kpwa) et nous avons appris à utiliser les fonctionnalités progressives des applications web en commençant par une [Introduction](/fr/docs/Web/Progressive_web_apps/Introduction), [la structure des PWA](/fr/docs/Web/Progressive_web_apps/App_structure), [la disponibilité en mode déconnectégrâce aux Service Workers](/fr/docs/Web/Progressive_web_apps/Offline_Service_workers), [les PWAs installable](/fr/docs/Web/Progressive_web_apps/Installable_PWAs) et finalement les notifications. Nous avons également expliqué le mode push avec l'aide du [Service Worker Cookbook](https://serviceworke.rs/). Et dans cet article, nous avons abordé le concept de chargement progressif incluant un exemple intéressant utilisant l'[API ntersection Observer](/fr/docs/Web/API/Intersection_Observer_API).

N'hésitez pas à faire des essais avec le code, à améliorer votre application existante avec des des fonctionnalités PWA ou à bâtir quelque chose d'entièrement nouveau de vous même. Les PWAs amènent un énorme avantage sur les applications web classiques.

{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}
