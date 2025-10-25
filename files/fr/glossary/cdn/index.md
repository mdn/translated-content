---
title: CDN
slug: Glossary/CDN
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **<abbr title="Content Delivery Network" lang="en">CDN</abbr>** (pour <i lang="en">Content Delivery Network</i> en anglais) est un groupe de serveurs répartis en de nombreux endroits. Ces serveurs répliquent des copies des données. De cette manière, les serveurs peuvent répondre aux requêtes de données en se basant sur les serveurs les plus proches de leurs utilisateur·ice·s finaux respectifs. Les CDN rendent les services rapides et moins affectés par les trafics élevés.

Les CDN sont largement utilisés pour fournir des feuilles de style et des fichiers JavaScript (actifs statiques) de bibliothèques comme Bootstrap, jQuery, etc. L'utilisation de CDN pour ces fichiers de bibliothèque est préférable pour un certain nombre de raisons&nbsp;:

- La gestion des ressources statiques des bibliothèques sur CDN réduit la charge de la requête sur nos propres serveurs.
- La plupart des CDN ont des serveurs partout dans le monde, de sorte que les serveurs de CDN peuvent être géographiquement plus proches de vos utilisateur·ice·s que vos propres serveurs. La distance géographique affecte proportionnellement la latence.
- Les CDN sont déjà configurés avec les paramètres de cache appropriés. L'utilisation d'un CDN sauvegarde la configuration pour les ressources statiques sur vos propres serveurs.

En réalité, des sites web entiers peuvent être servis depuis des CDN, en particulier les sites {{Glossary("SSG", "statiques")}} composés uniquement de fichiers HTML, CSS et JavaScript statiques.

Il existe aussi des inconvénients à utiliser des CDN, par rapport à l'auto-hébergement des ressources statiques&nbsp;:

- Cela introduit une dépendance supplémentaire à un service tiers. Si le CDN tombe en panne, est bloqué dans une région ou ferme définitivement, votre site web ne fonctionnera plus correctement.
- Cela introduit une nouvelle surface d'attaque. Des attaquant·e·s peuvent compromettre le CDN et servir du contenu malveillant à vos utilisateur·ice·s. Cela nécessite des contre-mesures comme [Subresource Integrity (SRI)](/fr/docs/Web/Security/Practical_implementation_guides/SRI).
- Contrairement à une idée reçue, un CDN peut en réalité _réduire_ les performances. En établissant une connexion avec un site tiers, le navigateur de l'utilisateur·ice doit effectuer plus de résolutions DNS, de négociations de contenu, etc. De plus, les navigateurs modernes ne partagent pas le cache entre différentes origines pour une même ressource pour des raisons de confidentialité, donc l'utilisateur·ice doit télécharger le même fichier (par exemple, jQuery) plusieurs fois sur différents sites.

## Voir aussi

- [Héberger soi-même ses ressources statiques <sup>(angl.)</sup>](https://csswizardry.com/2019/05/self-host-your-static-assets/) par Harry Roberts (2019)
