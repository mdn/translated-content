---
title: Insérer en toute sécurité du contenu externe dans une page
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
tags:
  - Add-ons
  - Comment
  - Débutant
  - Extensions
  - How-to
  - Sécurité
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
original_slug: >-
  Mozilla/Add-ons/WebExtensions/inserer_en_toute_securite_du_contenu_externe_dans_une_page
---
{{AddonSidebar}}

Il y a des moments où vous pourriez vouloir ou devez inclure du contenu d'une source externe dans votre extension. Cependant, il existe un risque que des scripts malveillants soient intégrés à la source, soit par le développeur de la source, soit par une tierce partie malveillante.

Prenez un lecteur RSS à titre d'exemple. Vous ne savez pas quels flux RSS votre extension va ouvrir et n'ont aucun contrôle sur le contenu de ces flux RSS. Ainsi, il est possible que l'utilisateur puisse s'abonner à un flux où, par exemple, le titre d'un élément de fil inclut un script. Cela pourrait être quelque chose d'aussi simple que d'inclure du code JavaScript dans les balises `<script></script>`. Si vous deviez extraire le titre, supposer qu'il s'agissait d'un texte brut et l'ajouter au DOM d'une page créée par votre extension, votre script a maintenant un script inconnu dans son navigateur. Par conséquent, il faut prendre soin d'éviter d'évaluer du texte arbitraire au format HTML.

Vous devez également vous souvenir que les extensions ont des contextes privilégiés, par exemple dans les scripts d'arrière-plan et les scripts de contenu. Dans le pire des cas, un script incorporé peut s'exécuter dans l'un de ces contextes, une situation connue sous le nom d'escalade de privilèges. Cette situation peut laisser le navigateur d'un utilisateur ouvert à une attaque à distance en permettant au site Web qui a injecté le code d'accéder à des données utilisateur critiques, telles que des mots de passe, l'historique du navigateur ou le comportement de navigation.

Cet article examine comment travailler en toute sécurité avec des données distantes et l'ajouter à un DOM.

## Travailler avec des chaînes arbitraires

Lorsque vous travaillez avec des chaînes, il existe quelques options recommandées pour les ajouter en toute sécurité à une page : les méthodes de création de nœuds DOM standard ou jQuery.

### Méthodes de création de noeud DOM

Une approche légère pour insérer des chaînes dans une page consiste à utiliser les méthodes de manipulation DOM natives : [`document.createElement`](/fr/docs/Web/API/Document/createElement), [`Element.setAttribute`](/fr/docs/Web/API/Element/setAttribute), et [`Node.textContent`](/fr/docs/Web/API/Node/textContent). L'approche sécurisée consiste à créer les nœuds séparément et à affecter leur contenu à l'aide de textContent :

```js example-good
var data = JSON.parse(responseText);
var div = document.createElement("div");
div.className = data.className;
div.textContent = "Your favorite color is now " + data.color;
addonElement.appendChild(div);
```

Cette approche est sûre car l'utilisation de `.textContent` échappe automatiquement à tout code HTML distant dans `data.color`.

Cependant, attention, vous pouvez utiliser des méthodes natives qui ne sont pas sécurisées. Prenez le code suivant :

```js example-bad
var data = JSON.parse(responseText);
addonElement.innerHTML = "<div class='" + data.className + "'>" +
                         "Your favorite color is now " + data.color +
                         "</div>";
```

Ici, le contenu de `data.className` ou de `data.color` peut contenir du HTML qui peut fermer le tag plus tôt, insérer du contenu HTML arbitraire, puis ouvrir une autre balise.

### jQuery

Lors de l'utilisation de jQuery, des fonctions telles que `attr()` et `text()` échappent au contenu lorsqu'il est ajouté à un DOM. Ainsi, l'exemple de "couleur préférée" ci-dessus, implémenté dans jQuery, ressemblerait à ceci:

```js example-good
var node = $("</div>");
node.addClass(data.className);
node.text("Your favorite color is now " + data.color);
```

## Travailler avec du contenu HTML

Lorsque vous travaillez avec du contenu de source externe dont vous savez qu'il s'agit du code HTML, il est essentiel de nettoyer le code HTML avant de l'ajouter à une page. La meilleure pratique pour désinfecter le code HTML consiste à utiliser une bibliothèque de nettoyage HTML ou un moteur de modèle avec des fonctionnalités de nettoyage HTML. Dans cette section, nous examinons certains outils appropriés et comment les utiliser.

### Désinfection HTML

Une bibliothèque de nettoyage HTML désactive tout ce qui pourrait conduire à l'exécution de scripts à partir du HTML, de sorte que vous pouvez injecter en toute sécurité des ensembles complets de nœuds HTML à partir d'une source distante dans votre DOM. [DOMPurify](https://github.com/cure53/DOMPurify), qui a été examiné par divers experts en sécurité, est une bibliothèque appropriée pour cette tâche dans les extensions.

Pour l'utilisation en production, [DOMPurify](https://github.com/cure53/DOMPurify) cest disponible en version minifiée : purify.min.js. Vous pouvez utiliser ce script de la manière qui convient le mieux à votre extension. Par exemple, vous pouvez l'ajouter en tant que script de contenu :

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "myinjectionscript.js"]
  }
]
```

Ensuite, dans myinjectionscript.js, vous pouvez lire le code HTML externe, le désinfecter et l'ajouter au DOM d'une page :

```js
var elem = document.createElement("div");
var cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Vous pouvez utiliser n'importe quelle méthode pour ajouter le HTML aseptisé à votre DOM, par exemple la fonction `.html()` de jQuery’s. Souvenez-vous cependant que le drapeau `SAFE_FOR_JQUERY` doit être utilisé dans ce cas :

```js
var elem = $("<div/>");
var cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Moteur de modèle

Un autre modèle courant consiste à créer un modèle HTML local pour une page et à utiliser des valeurs distantes pour remplir les blancs. Bien que cette approche soit généralement acceptable, il faut éviter d'utiliser des constructions qui permettraient l'insertion de code exécutable. Cela peut se produire lorsque le moteur de création de modèles utilise des constructions qui insèrent du code HTML brut dans le document. Si la variable utilisée pour insérer le code HTML brut est une source distante, elle est soumise au même risque de sécurité mentionné dans l'introduction.

Par exemple, lorsque vous utilisez des [modèles moustache](https://mustache.github.io/), vous devez utiliser la double moustache, `\{{variable}}`, qui échappe à tout code HTML. L'utilisation de la triple moustache, `\{\{{variable}}}`, doit être évitée car cela injecte une chaîne HTML brute et pourrait ajouter du code exécutable à votre modèle. [Handlebars](http://handlebarsjs.com/) fonctionne d'une manière similaire, avec des variables dans le double guidon, `\{{variable}}`, étant échappé. Considérant que, les variables dans le guidon triple sont laissées crues et doivent être évitées. De même, si vous créez une aide Handlebars à l'aide de  `Handlebars.SafeString` utilisez `Handlebars.escapeExpression()` pour échapper tous les paramètres dynamiques transmis à l'assistant. C'est une exigence car la variable résultante de `Handlebars.SafeString` est considérée comme sûre et elle n'est pas échappée lorsqu'elle est insérée avec des guidons doubles.

Il existe des concepts similaires dans d'autres systèmes de modélisation qui doivent être abordés avec le même niveau de soin.

## Lecture supplémentaire

Pour plus d'informations sur ce sujet, consultez les articles suivants :

- [XSS (Cross Site Scripting) Prévention Cheat Sheet](<https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet>)
