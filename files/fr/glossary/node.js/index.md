---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Node.js est un environnement {{Glossary("JavaScript")}} multiplateforme qui permet aux développeurs de créer des applications réseaux et côté serveur en utilisant JavaScript.

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) est un gestionnaire de paquets fourni et distribué avec Node.js. Son client en ligne de commande (CLI) `npm` permet de télécharger, configurer et créer des paquets pour des projets Node.js. Les paquets téléchargés peuvent être importés par [importations EcmaScript](/fr/docs/Web/JavaScript/Reference/Statements/import) et par [CommonJS `require()`](https://fr.wikipedia.org/wiki/CommonJS) sans inclure le répertoire de dépendances `node_modules/` dans lequel ils sont téléchargés, car Node.js [résout](https://nodejs.org/api/modules.html#loading-from-node_modules-folders) les paquets sans qu'un chemin relatif ou absolu soit spécifié dans leur importation.

Les paquets hébergés sur npm sont téléchargés depuis le registre à l'adresse [https://registry.npmjs.org/ <sup>(angl.)</sup>](https://registry.npmjs.org/), mais le client CLI peut être configuré pour utiliser toute instance compatible.

## Voir aussi

- [Node.js](https://fr.wikipedia.org/wiki/Node.js) sur Wikipédia
- [Site officiel Node.js <sup>(angl.)</sup>](https://nodejs.org/)
- [Documentation de référence <sup>(angl.)</sup>](https://nodejs.org/api/)
- [Tutoriels <sup>(angl.)</sup>](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Documentation de npm <sup>(angl.)</sup>](https://docs.npmjs.com/)
