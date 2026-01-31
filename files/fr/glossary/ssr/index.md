---
title: Rendu côté serveur (SSR)
slug: Glossary/SSR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **rendu côté serveur** (<abbr>SSR</abbr> pour <i lang="en">Server-side rendering</i> en anglais) désigne la pratique qui consiste à générer le contenu HTML sur le serveur et à l'envoyer au client. Le SSR s'oppose au {{Glossary("CSR", "rendu côté client")}}, où le client génère le contenu HTML à l'aide de JavaScript. Les deux techniques ne sont pas exclusives et peuvent être utilisées ensemble dans une même application.

Un {{Glossary("SSG", "site statique")}} peut être considéré comme du <abbr title="rendu côté serveur">SSR</abbr> (et peut être généré à l'aide d'une infrastructure SSR), mais il existe des différences subtiles. Le contenu d'un site statique est généré à la construction, et non à la demande. Les sites statiques n'ont souvent pas besoin d'être déployés sur un serveur et peuvent être servis depuis un {{Glossary("CDN")}}.

La distinction <abbr title="rendu côté serveur">SSR</abbr>/<abbr title="rendu côté client">CSR</abbr> est plus pertinente pour les sites à contenu dynamique, par exemple du contenu mis à jour en direct ou spécifique à l'utilisateur·ice. Dans ces cas, pour chaque requête, le serveur génère le contenu HTML à la volée, car il serait irréaliste de pré-générer toutes les pages possibles. Le fichier HTML contient un contenu de page presque complet, et tout fichier JavaScript n'est là que pour permettre l'interactivité.

Les avantages du SSR incluent&nbsp;:

- Accessibilité&nbsp;: la page est (en partie) utilisable sans JavaScript, par exemple si la connexion Internet est lente, si l'utilisateur·ice a désactivé JavaScript ou si le navigateur est ancien et ne parvient pas à exécuter JavaScript. Cependant, toute interactivité ou logique côté client ne fonctionnera pas.
- Lisibilité par les robots&nbsp;: les moteurs de recherche, les robots des réseaux sociaux et autres bots peuvent facilement lire le contenu sans avoir à exécuter JavaScript. Notez que les principaux moteurs de recherche sont capables d'exécuter JavaScript, donc les sites purement CSR peuvent tout de même être indexés, mais les robots des réseaux sociaux ne le peuvent généralement pas.
- Performance&nbsp;: le serveur peut savoir à l'avance quel contenu est nécessaire et récupérer toutes les données d'un coup, alors qu'en CSR, le client ne découvre souvent les dépendances supplémentaires qu'au moment de l'affichage initial, ce qui provoque une cascade de requêtes.

Le SSR et le CSR ont chacun leurs compromis en termes de performance, et un mélange des deux peut permettre de combiner les avantages des deux techniques. Par exemple, le serveur peut générer un squelette de page avec des espaces vides, et le client peut récupérer des données supplémentaires et mettre à jour la page selon les besoins.

## Voir aussi

- [Introduction aux frameworks côté client > rendu côté serveur](/fr/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Server-side scripting <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Server-side_scripting) sur Wikipédia
- {{Glossary("CSR", "Rendu côté client")}}
- {{Glossary("SSG", "Générateur de site statique")}}
- {{Glossary("SPA", "Application monopage")}}
