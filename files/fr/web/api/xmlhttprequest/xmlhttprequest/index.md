---
title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
tags:
  - API
  - Accès serveur
  - Besoin d'exemples
  - Compatibilité des navigateurs
  - Constructeur
  - Créer un XMLHttpRequest
  - Lire des données
  - Reference
  - Récupérer des données
  - XHR
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/XMLHttpRequest
---
{{draft}}{{APIRef('XMLHttpRequest')}}

Le constructeur **`XMLHttpRequest()`** crée une nouvelle instance {{domxref("XMLHttpRequest")}}.

Pour plus de détails sur l'utilisation de `XMLHttpRequest`, voir [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).

## Syntax

    const request = new XMLHttpRequest();

### Paramètres

Aucun.

### Valeur retournée

Un nouvel objet {{domxref("XMLHttpRequest")}}. L'objet doit être au minimum initialisé par l'appel de {{domxref("XMLHttpRequest.open", "open()")}} avant d'appeler {{domxref("XMLHttpRequest.send", "send()")}} pour envoyer la requête au serveur.

## La syntaxe de Firefox non-standard

Firefox 16 a ajouté un paramètre non standard au constructeur qui peut activer le mode anonyme (voir {{Bug("692677")}}). Mettre le drapeau `mozAnon` à `true` revient à être identique au constructeur [`AnonXMLHttpRequest()`](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest) décrit dans de vieilles versions des  specifications de XMLHttpRequest.

    const request = new XMLHttpRequest(paramsDictionary);

### Paramètres (non standard)

- `objParameters` {{gecko_minversion_inline("16.0")}}

  - : Il y a deux drapeaux qui peuvent être activés

    - `mozAnon`
      - : Booléen: Mettre ce drapeau à `true` évitera au navigateur d'exposer le {{Glossary("origin")}} and [credentials de l'utilisateur](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) lors de la récupération des ressources. Plus important, cela signifie que les {{Glossary("Cookie", "cookies")}} ne seront pas envoyés, sauf si ils sont clairement ajoutés en utilisant setRequestHeader.
    - `mozSystem`
      - : Booléen&nbsp;: mettre ce drapeau à `true` autorise les connexions intersites sans requérir le serveur à utiliser [`CORS`](/fr/docs/Glossary/CORS). *Paramètre requis&nbsp;: `mozAnon: true`, par exemple, cela ne peut pas être combiné avec l'envoi de cookies ou d'autres identifiants utilisateurs. Cela fonctionne seulement sur les applications autorisées ([bug 692677](https://bugzilla.mozilla.org/show_bug.cgi?id=692677)); ne marche pas sur les pages chargées arbitrairement dans Firefox.*

## Voir aussi

- [Utiliser XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML dans XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
