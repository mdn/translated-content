---
title: Partage de domaine
slug: Glossary/Domain_sharding
---

Les navigateurs limitent le nombre de connexions actives pour chaque domaine. Pour permettre des téléchargements simultanés de ressources dépassant cette limite, le **partage de domaine**(ou <i lang="en">domain_sharding</i> en anglais) divise le contenu sur plusieurs sous-domaines. Lorsque plusieurs domaines sont utilisés pour servir plusieurs actifs, les navigateurs peuvent télécharger plus de ressources simultanément, ce qui accélère le temps de chargement des pages et améliore l'expérience utilisateur.

Le problème avec le partage de domaine, en termes de performances, est le coût des recherches DNS supplémentaires pour chaque domaine et la surcharge liée à l'établissement de chaque connexion TCP.

La réponse initiale d'une requête HTTP est généralement un fichier HTML répertoriant d'autres ressources telles que des fichiers JavaScript, CSS, des images et d'autres fichiers multimédias qui doivent être téléchargés. Étant donné que les navigateurs limitent le nombre de connexions actives par domaine, l'envoi de toutes les ressources requises à partir d'un seul domaine peut être lente, car les actifs doivent être téléchargés de manière séquentielle. Avec le partage de domaine, les téléchargements requis sont servis à partir de plusieurs domaines, ce qui permet au navigateur de télécharger simultanément les ressources nécessaires. Cependant, plusieurs domaines constituent un anti-modèle, car les recherches DNS ralentissent les temps de chargement initiaux.

Le protocole HTTP2 prend en charge un nombre illimité de requêtes simultanées, faisant du partage de domaine une exigence obsolète lorsque le protocole HTTP/2 est activé.

## Voir aussi

- [TLS](/fr/docs/Glossary/TLS)
- [DNS](/fr/docs/Glossary/DNS)
- [HTTP/2](/fr/docs/Glossary/HTTP_2)
