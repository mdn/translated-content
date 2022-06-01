---
title: AJAX
slug: Web/Guide/AJAX
translation_of: Web/Guide/AJAX
---
## Démarrer avec AJAX

**AJAX (<i lang="en">Asynchronous JavaScript + XML</i>)** n'est pas une technologie en soi, mais un terme désignant une «&nbsp;nouvelle&nbsp;» approche utilisant un ensemble de technologies existantes, dont&nbsp;: [HTML](/fr/docs/Web/HTML) ou [XHTML](/fr/docs/Glossary/XHTML), [CSS](/fr/docs/Web/CSS), [JavaScript](/fr/docs/Web/JavaScript), [DOM](/fr/docs/Web/API/Document_Object_Model), [XML](/fr/docs/Web/XML), [XSLT](/fr/docs/Web/XSLT), et surtout [l'objet `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest). Lorsque ces technologies sont combinées dans le modèle AJAX, les applications web sont capables de réaliser des mises à jour rapides et incrémentales de l'interface utilisateur sans devoir recharger la page entière dans le navigateur. Les applications fonctionnent plus rapidement et sont plus réactives aux actions de l'utilisatrice ou de l'utilisateur.

Bien que le X de AJAX signifie XML, c'est le format [`JSON`](/fr/docs/Glossary/JSON) qui est le plus souvent utilisé aujourd'hui à la place de XML, du fait de sa proximité avec JavaScript et de sa légèreté par rapport à XML. Autrement dit, tant JSON que XML peuvent être utilisés comme format afin d'empaqueter des données en AJAX.

## Documentation

- [Démarrer](/fr/docs/Web/Guide/AJAX/Getting_Started)
  - : Cet article vous guide parmi les notions de base d'AJAX et fournit deux exemples pour mettre le pied à l'étrier.
- [Utiliser l'API `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

  - : L'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) est au cœur d'AJAX. Dans cet article, plusieurs techniques sont abordées&nbsp;:

    - [Analyser et manipuler la réponse du serveur](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#gérer_les_réponses)
    - [Surveiller l'avancement d'une requête](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#surveiller_la_progression)
    - [Soumettre des formulaires et uploader des fichiers binaires](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#envoyer_des_formulaires_et_uploader_des_fichiers) en AJAX pur ou en utilisant des objets [`FormData`](/fr/docs/Web/API/FormData)
    - Utiliser AJAX avec les [<i lang="en">web workers</i>](/fr/docs/Web/API/Worker)

- [API Fetch](/fr/docs/Web/API/Fetch_API)
  - : L'API `Fetch` fournit une interface permettant de récupérer (<i lang="en">fetch</i> en anglais) des ressources. Elle ressemble à celle exposée par [`XMLHTTPRequest`](/fr/docs/Web/API/XMLHttpRequest), mais fournit des fonctionnalités plus flexibles et puissantes.
- [Évènements émis par le serveur](/fr/docs/Web/API/Server-sent_events)
  - : Généralement, c'est la page web qui initie une requête vers le serveur afin de recevoir de nouvelles données. Avec les évènements émis par le serveur, un serveur peut envoyer de nouvelles données à une page web à tout moment, via des messages. Ces derniers peuvent être traités par la page web comme des [évènements](/fr/docs/Web/API/Event) contenant des données. Voir aussi&nbsp;: [Utiliser les évènements émis par le serveur](/fr/docs/Web/API/Server-sent_events/Using_server-sent_events).
- [Exemple de navigation avec un site utilisant AJAX pur](/fr/docs/Web/API/History_API/Example)
  - : Cet article contient un exemple fonctionnel minimaliste d'un site web composé de trois pages et qui utilise AJAX.
- [Envoyer et recevoir des données binaires](/fr/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : La propriété `responseType` de l'objet `XMLHttpRequest` peut être modifiée afin de changer le type de réponse attendu du serveur. Les valeurs possibles sont la chaîne vide (la valeur par défaut), `arraybuffer`, `blob`, `document`, `json`, et `text`. La propriété `response` contiendra le corps de l'entité selon la valeur de `responseType`, ce pourra donc être un objet `ArrayBuffer`, `Blob`, `Document`, `JSON`, ou une chaîne de caractères. Cet article aborde quelques techniques d'entrée/sortie AJAX. 
- [XML](/fr/docs/Web/XML)
  - : Le langage **XML (<i lang="en">Extensible Markup Language</i>)** est un langage balisé qui permet de créer des formats pour des données particulières. Il s'agit d'un sous-ensemble simplifié de SGML, capable de décrire différentes sortes de données. Son principal objectif est de faciliter le partage de données entre différents systèmes, notamment ceux connectés par Internet.
- [Analyser et sérialiser du XML](/fr/docs/Web/Guide/Parsing_and_serializing_XML)
  - : Dans cet article, on voit comment analyser un document XML à partir d'une chaîne de caractères, d'un fichier ou via JavaScript. On voit également comment sérialiser des documents XML en chaînes de caractères, en arbres d'objets JavaScript ou en fichiers.
- [XPath](/fr/docs/Web/XPath)
  - : XPath signifie **<i lang="en">XML Path</i>**, c'est-à-dire un langage pour décrire des chemins dans un document XML. Il s'agit d'une syntaxe non-XML qui permet de cibler différentes parties d'un document [XML](/fr/docs/Web/XML). On peut aussi l'utiliser pour tester certains nœuds d'un document afin de déterminer s'ils suivent un motif donné ou non.
- L'API [`FileReader`](/fr/docs/Web/API/FileReader)
  - : L'API `FileReader` permet aux applications web de lire le contenu de fichiers (ou de tampons de données brutes) stockés sur l'ordinateur de la personne de façon asynchrone, en utilisant des objets [`File`](/fr/docs/Web/API/File) ou [`Blob`](/fr/docs/Web/API/Blob) pour représenter le fichier ou les données à lire. On peut obtenir des objets `File` depuis un objet [`FileList`](/fr/docs/Web/API/FileList) qui pourra être produit à partir d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) de sélection de fichiers, à partir d'un objet [`DataTransfer`](/fr/docs/Web/API/DataTransfer) d'une opération de glisser/déposer.
- [HTML et `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - : [La spécification pour l'API `XMLHttpRequest`](https://xhr.spec.whatwg.org/) ajoute la capacité d'analyser du HTML à [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) (initialement limité à l'analyse de XML). Cette fonctionnalité permet aux applications web d'obtenir une ressource HTML comme un DOM analysé en utilisant `XMLHttpRequest`.

## Outils

- [axios](https://github.com/axios/axios)
  - : Un client [HTTP](/fr/docs/Glossary/HTTP) utilisant les [promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) et qui utilise `XMLHttpRequest` en interne.

## Voir aussi

- [AJAX&nbsp;: une nouvelle approche pour les applications web (en anglais)](https://www.semanticscholar.org/paper/Ajax%3A-A-New-Approach-to-Web-Applications-Garrett/c440ae765ff19ddd3deda24a92ac39cef9570f1e?p2df)
  - Un article écrit par Jesse James Garrett en février 2005 qui introduit AJAX et les concepts associés.
- [La spécification de `XMLHttpRequest` au sein du standard évolutif WHATWG](https://xhr.spec.whatwg.org/)
