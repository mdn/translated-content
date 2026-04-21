---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
---

Un fichier **robots.txt** est un fichier généralement placé à la racine d'un site web (par exemple, `https://www.example.com/robots.txt`).
Il définit si les {{Glossary("crawler", "robots d'indexation")}} sont autorisés à accéder à l'ensemble d'un site web ou à certaines ressources spécifiques.
Un fichier `robots.txt` restrictif peut éviter la consommation de bande passante par les robots d'indexation.

Le·la propriétaire d'un site peut interdire aux robots d'indexation de détecter un certain chemin (et tous les fichiers de ce chemin) ou un fichier spécifique.
Ceci est souvent fait pour empêcher ces ressources d'être indexées ou servies par les moteurs de recherche.

Si un robot d'indexation est autorisé à accéder à des ressources, vous pouvez définir des [règles d'indexation](/fr/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#directives) pour ces ressources via des éléments [`<meta name="robots">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/robots) (souvent appelés «&nbsp;balise robots&nbsp;») et des en-têtes HTTP {{HTTPHeader("X-Robots-Tag")}}.
Les robots d'indexation liés à la recherche utilisent ces règles pour déterminer comment indexer et servir les ressources dans les résultats de recherche, ou pour ajuster la fréquence d'exploration de certaines ressources au fil du temps.

## Voir aussi

- [Guide de configuration robots.txt](/fr/docs/Web/Security/Practical_implementation_guides/Robots_txt)
- {{Glossary("Search engine", "Moteur de recherche")}}
- {{RFC("9309", "Protocole d'exclusion des robots")}}
- [Comment Google interprète la spécification robots.txt](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec?hl=fr) sur developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://fr.wikipedia.org/wiki/Protocole_d%27exclusion_des_robots) sur Wikipédia
