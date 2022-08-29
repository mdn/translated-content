---
title: Contenu mixte
slug: Web/Security/Mixed_content
translation_of: Web/Security/Mixed_content
---
Lorsqu'une personne visite une page servie en [HTTPS](/fr/docs/Glossary/https), la connexion entre le navigateur et le serveur web est chiffrée avec [`TLS`](/fr/docs/Glossary/TLS) et est donc protégée des risques d'interception des données et d'attaques de l'homme du milieu. Une page HTTPS qui inclut du contenu récupéré en clair avec HTTP est appelée une page **de contenu mixte** (<i lang="en">mixed content</i> en anglais). De telles pages ne sont que partiellement chiffrées et le contenu non-chiffré reste alors sujet aux risques d'interception. Ces pages ne sont pas complètement sécurisées.

## Types de contenu mixte

Il existe deux catégories pour le contenu mixte&nbsp;: **le contenu mixte passif ou affiché** et **le contenu mixte actif**. La différence porte sur le niveau de risque dans le pire des cas où le contenu est réécrit suite à une attaque de l'homme du milieu. Pour le contenu passif, la menace est plus faible (la page peut afficher du contenu trompeur, les cookies de la personne peuvent être volés). Pour le contenu actif, la menace peut entraîner du <i lang="en">phishing</i>, la divulgation d'informations sensibles ou la redirection vers des sites malveillants, etc.

### Contenu mixte passif d'affichage

Le contenu mixte passif est du contenu servi avec HTTP et inclus dans une page web HTTPS, mais qui ne peut pas modifier les autres portions de la page. Ainsi, une personne malveillante pourrait remplacer une image servie avec HTTP par une image ou un message inapproprié. Elle pourrait également déduire des informations quant à l'activité de l'utilisatrice ou de l'utilisateur en voyant les images qui sont demandées lors de la navigation. La plupart du temps, les images ne sont servies que pour une page donnée d'un site web. En connaissant les requêtes HTTP vers certaines images, on pourrait déterminer les pages web que la personne consulte.

#### Liste de contenu passif

Voici les éléments qui sont considérées comme du contenu passif lorsqu'ils sont servis par des requêtes HTTP&nbsp;:

- [`<img>`](/fr/docs/Web/HTML/Element/Img) (l'attribut `src`)
- [`<audio>`](/fr/docs/Web/HTML/Element/audio) (l'attribut `src`)
- [`<video>`](/fr/docs/Web/HTML/Element/video) (l'attribut `src`)
- Les sous-ressources d'un élément [`<object>`](/fr/docs/Web/HTML/Element/object) (lorsqu'un tel élément effectue des requêtes HTTP)

### Contenu mixte actif

**Le contenu mixte actif** correspond au contenu qui a accès à tout ou partie du DOM de la page HTTPS. Ce type de contenu mixte peut modifier le comportement de la page HTTPS et éventuellement voler des informations sensibles. En plus des risques déjà évoqués pour le contenu mixte passif, le contenu mixte actif est donc vulnérable à d'autres vecteurs d'attaque.

Pour le cas du contenu mixte actif, l'attaquant pourrait réécrire la réponse pour inclure du code JavaScript malveillant. Le contenu actif malveillant pourrait alors voler les informations d'authentification, récupérer des données sensibles ou tenter d'installer des logiciels malveillants sur le système (en tirant parti des vulnérabilités ou du système de plugin du navigateur par exemple).

Le risque induit par le contenu mixte dépend du type de site web que la personne visite et de la sensibilité des données exposées par le site en question. La page web pourrait contenir des données publiques par ailleurs ou des données privées, accessibles uniquement après authentification. Si la page web est publique et ne contient pas de données sensibles à propos de l'utilisatrice ou l'utilisateur, utiliser le contenu mixte actif permettra toujours à un attaquant de rediriger la personne vers d'autres pages HTTP et de voler les cookies HTTP de ces sites.

#### Exemples de contenu actif

Cette section liste certains des objets ou méthodes qui sont considérés comme du contenu actif&nbsp;:

- [`<script>`](/fr/docs/Web/HTML/Element/script) (l'attribut `src`)
- [`<link>`](/fr/docs/Web/HTML/Element/link) (l'attribut `href`) (cela inclut les feuilles de style CSS)
- [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) (l'attribut `src`)
- Les requêtes [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)
- Les requêtes [`fetch()`](/fr/docs/Web/API/fetch)
- En CSS, les endroits où une valeur [`url()`](/fr/docs/Web/CSS/url) peut être utilisée ([`@font-face`](/fr/docs/Web/CSS/@font-face), [`cursor`](/fr/docs/Web/CSS/cursor), [`background-image`](/fr/docs/Web/CSS/background-image), etc.).
- [`<object>`](/fr/docs/Web/HTML/Element/object) (l'attribut `data`)
- [`Navigator.sendBeacon`](/fr/docs/Web/API/Navigator/sendBeacon) (l'attribut `url`)

D'autres types de ressources comme les polices de caractères ou les <i lang="en">web workers</i> peuvent être considérés comme du contenu mixte actif (comme dans Chrome).

## Chargement des ressources avec du contenu mixte

La plupart des navigateurs empêchent le chargement *du contenu mixte actif*. D'autres bloquent également le chargement *du contenu mixte passif*.

### Charger des ressources mixtes locales

Les navigateurs _peuvent_ autoriser le chargement de ressources mixtes locales. Cela inclut les URL avec le schéma `file:` et le contenu servi depuis les adresses locales (par exemple `http://127.0.0.1/`).

- Firefox 55 et les versions ultérieures permettent le chargement de contenu mixte sur l'adresse `http://127.0.0.1/` (voir [le bug 903966](https://bugzilla.mozilla.org/show_bug.cgi?id=903966)),
- Firefox 84 et les versions ultérieures permettent le chargement de contenu mixte sur les URL `http://localhost/` et `http://*.localhost/` (voir [le bug 1220810](https://bugzilla.mozilla.org/show_bug.cgi?id=1220810)).
- Chrome permet le chargement de contenu mixte sur `http://127.0.0.1/` et `http://localhost/`.
- Safari bloque tout chargement de contenu mixte.

### Mise à niveau des ressources mixtes passives

Les navigateurs peuvent prendre en charge le surclassement des requêtes HTTP en HTTPS pour le contenu mixte passif (lorsque c'est possible).

Firefox prend en charge cette fonctionnalité de façon expérimentale, elle peut être activée avec la préférence `security.mixed_content.upgrade_display_content`.

- Si le surclassement échoue (car l'hôte cible ne prend pas en charge HTTPS), le média n'est pas chargé.
- Des avertissements dans la console indiquent lorsque le contenu a été servi en HTTPS plutôt qu'en HTTP.
- Pour plus d'informations, voir [Fonctionnalités expérimentales dans Firefox > Mise à niveau pour les médias chargés avec une sécurité mixte](/fr/docs/Mozilla/Firefox/Experimental_features#mise_à_niveau_pour_les_médias_chargés_avec_une_sécurité_mixte).

## Avertissement dans les outils de développement de Firefox

Les outils de développement de Firefox affichent un message d'avertissement dans l'onglet Réseau lorsqu'une page a ce problème. La ressource chargée en HTTP sera affichée en rouge avec le texte «&nbsp;contenu mixte&nbsp;», et un lien vers cette page.

![Une capture d'écran de la console avec un message d'avertissement sur le contenu mixte.](mixed_content_-_net_pane.png)

En complément de ces alertes dans la console web, vous pouvez également utiliser [<i lang="en">Content Security Policy (CSP)</i>](/fr/docs/Web/HTTP/CSP) pour rapporter de tels problèmes. Vous pouvez aussi utiliser un outil en ligne comme [SSL-check](https://www.jitbit.com/sslcheck/) ou [Missing Padlock](https://www.missingpadlock.com/) qui vérifiera votre site de façon récursive pour trouver des liens vers du contenu non-sécurisé.

À partir de Firefox 23, le contenu mixte actif est bloqué par défaut (et le contenu mixte passif peut être bloqué via une préférence). Pour que la détection de telles requêtes soit plus simple, elles sont affichées dans l'onglet Sécurité de la console&nbsp;:

![Une capture d'écran avec les erreurs pour le contenu mixte bloqué dans l'onglet Sécurité de la console](mixed_content_webconsole.png)

Pour corriger ce type d'erreur, toutes les requêtes HTTP devraient être remplacées par des requêtes HTTPS. La plupart du temps, les problèmes de contenu mixte portent sur les fichiers JavaScript, les feuilles de styles, les images, les vidéos ou d'autres médias.

> **Note :** La console affichera un message si [la mise à niveau du contenu mixte passif](#mise_à_niveau_des_ressources_mixtes_passives) a réussi (plutôt qu'un avertissement de «&nbsp;Chargement du contenu mixte d'affichage (non sécurisé)&nbsp;»).

## Voir aussi

- [La spécification du W3C sur le contenu mixte (en anglais)](https://w3c.github.io/webappsec/specs/mixedcontent/)
- [Comment corriger un site avec du contenu mixte bloqué](/fr/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)

{{QuickLinksWithSubpages("/fr/docs/Web/Security")}}
