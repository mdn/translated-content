---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
---

{{AddonSidebar}}

Les extensions développées avec les API WebExtension ont une politique de sécurité du contenu (CSP) qui leur est appliquée par défaut. Cela limite les sources à partir desquelles les extensions peuvent charger les ressources provenant d'élément {{HTMLElement("script")}} et {{HTMLElement("object")}} et interdit les pratiques potentiellement dangereuses comme l'utilisation de {{jsxref("Objets_globaux/eval","eval()")}}.

Cet article explique brièvement ce qu'est une CSP, quelle est la politique par défaut, ce que cela signifie pour une extension et comment une extension peut changer la CSP par défaut.

La [Politique de sécurité de contenu](/fr/docs/Web/HTTP/CSP) (ou _Content Security Policy_ en anglais, abrégé en CSP) est un mécanisme permettant d'empêcher les sites Web d'exécuter involontairement du contenu malveillant. Un site web définit une CSP via un en-tête HTTP envoyé par le serveur. Le rôle de la CSP consiste principalement à indiquer les sources légitimes pour les différents types de contenu (tels que les scripts ou les plugins). Par exemple, un site web peut utiliser une CSP pour indiquer que le navigateur ne doit exécuter que du JavaScript provenant du site web lui-même et non d'autres sources. Une CSP peut également ordonner au navigateur d'interdire les pratiques potentiellement dangereuses telles que l'utilisation de {{jsxref("Objets_globaux/eval","eval()")}}.

Comme les sites web, les extensions peuvent charger du contenu provenant de différentes sources. Ainsi, une popup sera définie comme un document HTML et pourra inclure du code JavaScript et CSS provenant de différentes sources, comme une page web normale :

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <!--Du contenu HTML-->

    <!--
      On intègre ici un script provenant d'une source tierce
      Voir aussi https://developer.mozilla.org/fr/docs/Web/Security/Subresource_Integrity.
    -->
    <script>
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous">
    </script>

    <!-- On ajoute le script pour la pop-up-->
    <script src="popup.js"></script>
  </body>
</html>
```

À la différence d'un site web, les extensions accèdent à certains API privilégiées supplémentaires. Par conséquent, si elles sont compromises par du code malveillant, les risques sont plus grands. Pour cette raison :

- Une politique de sécurité du contenu par défaut assez stricte est appliquée aux extensions. Voir la [politique de sécurité du contenu par défaut](#Default).
- L'auteur de l'extension peut modifier la stratégie par défaut à l'aide de la clé `content_security_policy` du fichier de manifeste (`manifest.json`) mais il existe certaines restrictions sur les règles autorisées. Voir [`content_security_policy`](/fr/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Politique de sécurité du contenu par défaut

La politique de sécurité du contenu par défaut pour les extensions est la suivante :

```
"script-src 'self'; object-src 'self';"
```

Celle-ci sera appliquée à toute extension qui n'a pas explicitement défini sa propre politique via la clé [`content_security_policy`](/fr/Add-ons/WebExtensions/manifest.json/content_security_policy) du manifeste. Cela a les conséquences suivantes :

- [Seules les ressources `<script>` et `<object>` locales à l'extension peuvent être chargées](#script_ressources)
- [L'extension n'est pas autorisée à évaluer les chaines en JavaScript.](#eval)
- [Le code JavaScript « _inline_ » (écrit au sein du document HTML) n'est pas éxécuté.](/fr/Add-ons/WebExtensions/Content_Security_Policy#Inline_JavaScript)

### Emplacement des ressources pour `<script>` et `<objet>`

Avec la CSP par défaut, les éléments {{HTMLElement("script")}} et {{HTMLElement("object")}} peuvent uniquement charger des ressources qui sont locales à l'extension. Aussi, si on considère cette ligne dans un document HTML d'une extension :

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

La ressource jQuery demandée ne sera pas récupérée et la récupération échouera silencieusement. Deux méthodes permettent de résoudre ce problème :

- Téléchargez la ressource cible puis empaquetez-la dans votre extension et faites ensuite référence à cette version locale.
- Utilisez la clé [`content_security_policy`](/fr/Add-ons/WebExtensions/manifest.json/content_security_policy) afin d'autoriser l'origine distante dont vous avez besoin.

### `eval()` et autres équivalents

Avec la CSP par défaut, il n'est pas possible d'évaluer les chaînes de caractères représentant du code JavaScript. Cela signifie que les formes suivantes ne sont pas autorisés :

```js
eval("console.log('un résultat');");
```

```js
window.setTimeout("alert('Coucou monde!');", 500);
```

```js
var f = new Function("console.log('toto');");
```

### JavaScript écrit dans le HTML (_inline_)

Avec la CSP par défaut, le code JavaScript écrit au sein d'un document HTML n'est pas exécuté. Cela concerne le JavaScript écrit dans les balises `<script>` ainsi que les gestionnaires d'évènement intégrés dans les attributs. Autrement dit, les formes suivantes ne sont pas autorisées :

```html
<script>
  console.log("toto");
</script>
```

```html
<div onclick="console.log('clic')">Cliquez sur ce texte !</div>
```

Si votre document HTML utilise une forme comme `<body onload="main()">`, privilégiez plutôt l'ajout d'un gestionnaire d'évènement sur [`DOMContentLoaded`](/fr/docs/Web/Events/DOMContentLoaded) ou [`load`](/fr/docs/Web/Events/load).
