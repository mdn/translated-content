---
title: CDN
slug: Glossary/CDN
tags:
  - Glossaire
  - Infrastructure
translation_of: Glossary/CDN
original_slug: Glossaire/CDN
---
Un **CDN** (Content Delivery Network) est un groupe de serveurs répartis en de nombreux endroits. Ces serveurs répliquent des copies des données. De cette manière, les serveurs peuvent  répondre aux requêtes de données en se basant sur les serveurs les plus proches de leurs utilisateurs finaux respectifs. Les CDN rendent les services rapides et moins affectés par les trafics élevés.

Les CDN sont largement utilisés pour fournir des feuilles de style et des fichiers JavaScript (actifs statiques) de bibliothèques comme Bootstrap, jQuery, etc. L'utilisation de CDN pour ces fichiers de bibliothèque est préférable pour un certain nombre de raisons :

- la gestion des ressources statiques des bibliothèques sur CDN réduit la charge de la requête sur nos propres serveurs.
- la plupart des CDN ont des serveurs partout dans le monde, de sorte que les serveurs de CDN peuvent être géographiquement plus proches de vos utilisateurs que vos propres serveurs. La distance géographique affecte proportionnellement la latence.
- les CDN sont déjà configurés avec les paramètres de cache appropriés. L'utilisation d'un CDN sauvegarde la configuration pour les ressources statiques sur vos propres serveurs.
