---
title: Requêtes conditionnelles HTTP
slug: Web/HTTP/Guides/Conditional_requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP a un concept de _requêtes conditionnelles_, où le résultat, et même le succès d'une requête, peut être contrôlé en comparant les ressources affectées avec un _validateur_.
Ces requêtes sont utiles pour valider le contenu mis en cache, en s'assurant qu'il n'est récupéré que s'il diffère de la copie déjà disponible dans le navigateur.
Les requêtes conditionnelles sont également utiles pour garantir l'intégrité d'un document lors de la reprise d'un téléchargement, ou pour éviter les mises à jour perdues lors de l'upload ou de la modification d'un document sur le serveur.

## Principes

Les requêtes conditionnelles HTTP sont des requêtes qui s'exécutent différemment en fonction de la valeur de certains en-têtes. Ces en-têtes définissent une précondition, et le résultat de la requête est différent si la précondition est satisfaite ou non.

Les comportements différents sont définis par la méthode de la requête utilisée et par l'ensemble des en-têtes utilisés pour une précondition&nbsp;:

- pour les méthodes {{Glossary("Safe/HTTP", "safe")}}, comme {{HTTPMethod("GET")}}, qui essaient généralement de récupérer un document, la requête conditionnelle peut être utilisée pour renvoyer le document uniquement si c'est pertinent. Cela permet donc d'économiser de la bande passante.
- pour les méthodes {{Glossary("Safe/HTTP", "unsafe")}}, comme {{HTTPMethod("PUT")}}, qui permettent généralement de télécharger un document, la requête conditionnelle peut être utilisée pour télécharger le document uniquement si l'original sur lequel elle se base est le même que celui stocké sur le serveur.

## Validateurs

Tous les en-têtes conditionnels tentent de vérifier si la ressource stockée sur le serveur correspond à une version spécifique. Pour ce faire, les requêtes conditionnelles doivent indiquer la version de la ressource. Comme comparer l'ensemble de la ressource octet par octet est impraticable, et pas toujours souhaité, la requête transmet une valeur décrivant la version. Ces valeurs sont appelées _validateurs_, et il en existe deux types&nbsp;:

- la date de dernière modification du document, la date _last-modified_.
- une chaîne de caractères opaque, identifiant de manière unique chaque version, appelée _étiquette d'entité_ ou _ETag_.

Comparer les versions d'une même ressource est un peu délicat&nbsp;: en fonction du contexte, il existe deux sortes de _vérifications d'équivalence_&nbsp;:

- La _validation forte_ est utilisée lorsque l'identité octet par octet est attendue, par exemple lors de la reprise d'un téléchargement.
- La _validation faible_ est utilisée lorsque l'agent utilisateur a seulement besoin de déterminer si deux ressources ont le même contenu. Les ressources peuvent être considérées comme identiques même si des différences mineures existent, comme des publicités différentes ou un pied de page avec une date différente.

Le type de validation est indépendant du validateur utilisé. Les deux {{HTTPHeader("Last-Modified")}} et {{HTTPHeader("ETag")}} permettent les deux types de validation, bien que la complexité de leur mise en œuvre côté serveur puisse varier. HTTP utilise la validation forte par défaut et définit quand la validation faible peut être utilisée.

### Validation forte

La validation forte consiste à garantir que la ressource est, octet par octet, identique à celle à laquelle elle est comparée. C'est obligatoire pour certains en-têtes conditionnels, et par défaut pour les autres. La validation forte est très stricte et peut être difficile à garantir au niveau du serveur, mais elle garantit qu'aucune perte de données ne se produit à aucun moment, parfois au détriment des performances.

Il est assez difficile d'avoir un identifiant unique pour la validation forte avec {{HTTPHeader("Last-Modified")}}. Cela se fait souvent en utilisant un {{HTTPHeader("ETag")}} avec le hachage MD5 de la ressource (ou un dérivé).

> [!NOTE]
> Parce qu'un changement d'encodage du contenu nécessite un changement d'ETag, certains serveurs modifient les ETags lors de la compression des réponses d'un serveur d'origine (par exemple, les proxies inverses).
> Le serveur Apache ajoute par défaut le nom de la méthode de compression (`-gzip`) aux ETags, mais c'est [configurable en utilisant la directive `DeflateAlterETag` <sup>(angl.)</sup>](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

### Validation faible

La validation faible diffère de la validation forte, car elle considère que deux versions du document sont identiques si le contenu est équivalent. Par exemple, une page qui différerait d'une autre seulement par sa date dans le pied de page ou une publicité différente, est considérée comme _identique_ à l'autre avec la validation faible. Ces mêmes deux versions sont considérées comme _différentes_ avec la validation forte. Construire un système d'ETags utilisant la validation faible est très utile pour optimiser les performances du cache, mais peut être complexe, car cela implique de connaître l'importance des différents éléments d'une page.

## En-têtes conditionnels

Plusieurs en-têtes HTTP, appelées en-têtes conditionels, permettent de conditionner les requêtes&nbsp;:

- {{HTTPHeader("If-Match")}}
  - : Réussit si le {{HTTPHeader("ETag")}} de la ressource distante est égal à un de ceux listés dans cet en-tête. Cela effectue une validation forte.
- {{HTTPHeader("If-None-Match")}}
  - : Réussit si le {{HTTPHeader("ETag")}} de la ressource distante est différent de tous ceux listés dans cet en-tête. Cela effectue une validation faible.
- {{HTTPHeader("If-Modified-Since")}}
  - : Réussit si la date {{HTTPHeader("Last-Modified")}} de la ressource distante est plus récente que celle donnée dans cet en-tête.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Réussit si la date {{HTTPHeader("Last-Modified")}} de la ressource distante est plus ancienne ou égale à celle donnée dans cet en-tête.
- {{HTTPHeader("If-Range")}}
  - : Similaire à {{HTTPHeader("If-Match")}}, ou {{HTTPHeader("If-Unmodified-Since")}}, mais peut n'avoir qu'un seul ETag ou une seule date. Si cela échoue, la requête de plage échoue, et au lieu d'une réponse {{HTTPStatus("206", "206 Partial Content")}}, un {{HTTPStatus("200", "200 OK")}} est envoyé avec la ressource complète.

## Cas d'utilisation

### Mise à jour du cache

Le cas d'utilisation le plus commun pour les requêtes conditionnelles est la mise à jour du'uncache. Avec un cache vide ou absent, la ressource demandée est renvoyée avec un statut {{HTTPStatus("200")}} `OK`.

![La requête émise lorsque le cache est vide déclenche le téléchargement de la ressource et les deux valeurs de validation son prevent itt envoyés en en-tête. Le cache est alors rempli.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-1.svg)

Avec la ressource, les validateurs sont envoyés dans les en-têtes. Dans cet exemple, à la fois {{HTTPHeader("Last-Modified")}} et {{HTTPHeader("ETag")}} sont envoyés, mais il pourrait tout aussi bien n'y en avoir qu'un seul. Ces validateurs sont mis en cache avec la ressource (comme tous les en-têtes) et sont utilisés pour créer des requêtes conditionnelles, une fois que le cache devient obsolète.

Tant que le cache n'est pas obsolète, aucune requête n'est émise. Mais une fois qu'il devient obsolète, ce processus est principalement contrôlé par l'en-tête {{HTTPHeader("Cache-Control")}}. Le client n'utilise pas directement la valeur mise en cache, mais émet une _requête conditionnelle_. La valeur du validateur est utilisée comme paramètre des en-têtes {{HTTPHeader("If-Modified-Since")}} et {{HTTPHeader("If-None-Match")}}.

Si la ressource n'a pas changé, le serveur renvoie une réponse {{HTTPStatus("304")}} `Not Modified`. Cela rend le cache à nouveau frais, et le client utilise la ressource mise en cache. Bien qu'il y ait un aller-retour de requête/réponse qui consomme certaines ressources, c'est plus efficace que de transmettre à nouveau l'intégralité de la ressource.

![Avec un cache obsolète, la requête conditionnelle est envoyée. Le serveur peut déterminer si la ressource a changé et, comme dans ce cas, décider de ne pas l'envoyer à nouveau, car elle est identique.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-2.svg)

Si la ressource a changé, le serveur renvoie simplement une réponse {{HTTPStatus("200", "200 OK")}} avec la nouvelle version de la ressource (comme si la requête n'était pas conditionnelle). Le client utilise cette nouvelle ressource (et la met en cache).

![Dans le cas où la ressource a été modifiée, elle est renvoyée comme si la requête n'était pas conditionnelle.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/cache-sequence-3.svg)

En dehors de la définition des validateurs côté serveur, ce mécanisme est transparent&nbsp;: tous les navigateurs gèrent un cache et envoient de telles requêtes conditionnelles sans qu'aucun travail spécial ne soit nécessaire de la part des développeur·euse·s Web.

### Intégrité d'un téléchargement partiel

Le téléchargement partiel de fichiers est une fonctionnalité de HTTP qui permet de reprendre des opérations précédentes, d'économiser de la bande passante et du temps, en conservant les informations déjà obtenues&nbsp;:

![Un téléchargement a été interrompu et seul le contenu partiel a été récupéré.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-1.svg)

Un serveur prenant en charge les téléchargements partiels le signale en envoyant l'en-tête {{HTTPHeader("Accept-Ranges")}}. Une fois cela fait, le client peut reprendre un téléchargement en envoyant un en-tête {{HTTPHeader("Range")}} avec les plages manquantes&nbsp;:

![Le client reprend les requêtes en indiquant la plage dont il a besoin et en vérifiant les validateurs de la requête partiellement obtenue.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-2.svg)

Le principe est simple, mais il y a un problème potentiel&nbsp;: si la ressource téléchargée a été modifiée entre les deux téléchargements, les plages obtenues correspondent à deux versions différentes de la ressource, et le document final est corrompu.

Pour éviter cela, des requêtes conditionnelles sont utilisées. Pour les plages, il existe deux façons de le faire. La plus flexible utilise {{HTTPHeader("If-Unmodified-Since")}} et {{HTTPHeader("If-Match")}} et le serveur renvoie une erreur si la précondition échoue&nbsp;; le client recommence alors le téléchargement depuis le début&nbsp;:

![Lorsque la ressource partiellement téléchargée a été modifiée, les préconditions échouent et la ressource doit être téléchargée à nouveau complètement.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-3.svg)

Même si cette méthode fonctionne, elle ajoute un échange supplémentaire de réponse/requête lorsque le document a été modifié. Cela nuit aux performances, et HTTP dispose d'un en-tête spécifique pour éviter ce scénario&nbsp;: {{HTTPHeader("If-Range")}}&nbsp;:

![L'en-tête If-Range permet au serveur de renvoyer directement la ressource complète si elle a été modifiée, sans avoir besoin d'envoyer une erreur 412 et d'attendre que le client relance le téléchargement.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/resume-download-4.svg)

Cette solution est plus efficace, mais légèrement moins flexible, car une seule ETag peut être utilisée dans la condition. Rarement, une flexibilité supplémentaire est nécessaire.

### Éviter les problèmes de perte de mise à jour avec le verrouillage optimiste

Une opération courante dans les applications Web est de _mettre à jour_ un document distant. C'est très courant dans les systèmes de fichiers ou les applications de contrôle de version, mais toute application permettant de stocker des ressources distantes a besoin d'un tel mécanisme. Les sites Web courants, comme les wikis et autres CMS, ont un tel besoin.

Avec la méthode {{HTTPMethod("PUT")}}, vous pouvez implémenter cela. Le client lit d'abord les fichiers originaux, les modifie, puis les envoie finalement au serveur&nbsp;:

![Mise à jour d'un fichier avec un PUT lorsque la concurrence n'est pas impliquée.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-1.svg)

Malheureusement, les choses deviennent un peu imprécises dès que l'on prend en compte la concurrence. Pendant qu'un client modifie localement sa nouvelle copie de la ressource, un deuxième client peut récupérer la même ressource et faire de même sur sa copie. Ce qui se passe ensuite est très malheureux&nbsp;: lorsqu'ils valident leurs modifications sur le serveur, les modifications du premier client sont écrasées par le push du deuxième client, car ce dernier n'est pas au courant des changements apportés par le premier client à la ressource. La décision sur qui gagne n'est pas communiquée à l'autre partie. Les modifications du client à conserver dépendent de la vitesse à laquelle ils valident&nbsp;; cela dépend des performances des clients, du serveur, et même de l'humain modifiant le document chez le client. Le gagnant change d'une fois à l'autre. C'est une _condition de course_ et cela conduit à des comportements problématiques, difficiles à détecter et à déboguer&nbsp;:

![Lorsque plusieurs clients mettent à jour la même ressource en parallèle, nous faisons face à une condition de course : le plus rapide gagne, et les autres ne savent même pas qu'ils ont perdu. Problématique !](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-2.svg)

Il n'y a aucun moyen de gérer ce problème sans ennuyer l'un des deux clients. Cependant, les mises à jour perdues et les conditions de course doivent être évitées. Nous voulons des résultats prévisibles et nous attendons à ce que les clients soient informés lorsque leurs modifications sont rejetées.

Les requêtes conditionnelles permettent de mettre en œuvre _l'algorithme de verrouillage optimiste_ (utilisé par la plupart des wikis ou des systèmes de contrôle de version). Le concept est de permettre à tous les clients d'obtenir des copies de la ressource, puis de les laisser les modifier localement, en contrôlant la concurrence en autorisant avec succès le premier client à soumettre une mise à jour. Toutes les mises à jour ultérieures, basées sur la version désormais obsolète de la ressource, sont rejetées&nbsp;:

![Les requêtes conditionnelles permettent de mettre en œuvre le verrouillage optimiste : maintenant, le plus rapide gagne, et les autres reçoivent une erreur.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/optimistic-locking-3.svg)

C'est mis en œuvre en utilisant les en-têtes {{HTTPHeader("If-Match")}} ou {{HTTPHeader("If-Unmodified-Since")}}. Si l'ETag ne correspond pas au fichier original, ou si le fichier a été modifié depuis qu'il a été obtenu, la modification est rejetée avec une erreur {{HTTPStatus("412", "412 Precondition Failed")}}. Il appartient alors au client de gérer l'erreur&nbsp;: soit en informant l'utilisateur·ice de recommencer (cette fois sur la version la plus récente), soit en affichant à l'utilisateur·ice une _diff_ des deux versions, l'aidant à décider quelles modifications il souhaite conserver.

### Gérer le premier téléchargement d'une ressource

Le premier téléchargement d'une ressource est un cas particulier du précédent. Comme toute mise à jour d'une ressource, il est sujet à une condition de course si deux clients essaient de l'effectuer à des moments similaires. Pour éviter cela, des requêtes conditionnelles peuvent être utilisées&nbsp;: en ajoutant {{HTTPHeader("If-None-Match")}} avec la valeur spéciale `*`, représentant n'importe quel ETag. La requête réussit uniquement si la ressource n'existait pas auparavant&nbsp;:

![Comme pour un téléchargement régulier, le premier téléchargement d'une ressource est sujet à une condition de course : If-None-Match peut l'éviter.](https://mdn.github.io/shared-assets/images/diagrams/http/conditional-requests/first-upload.svg)

`If-None-Match` ne fonctionne qu'avec des serveurs compatibles HTTP/1.1 (et ultérieurs). Si vous n'êtes pas sûr que le serveur est compatible, vous devez d'abord émettre une requête {{HTTPMethod("HEAD")}} à la ressource pour vérifier cela.

## Conclusion

Les requêtes conditionnelles sont une fonctionnalité clé de HTTP et permettent de construire des applications efficaces et complexes. Pour la mise en cache ou la reprise de téléchargements, le seul travail requis pour les webmasters est de configurer correctement le serveur&nbsp;; définir des ETags corrects dans certains environnements peut être délicat. Une fois cela réalisé, le navigateur effectue les requêtes conditionnelles attendues.

Pour les mécanismes de verrouillage, c'est l'inverse&nbsp;: les développeur·euse·s web doivent émettre une requête avec les en-têtes appropriés, tandis que les webmasters peuvent principalement se fier à l'application pour effectuer les vérifications à leur place.

Dans les deux cas, il est clair que les requêtes conditionnelles sont une fonctionnalité fondamentale du Web.

## Voir aussi

- Le code de statut {{HTTPStatus("304", "304 Not Modified")}}
- L'en-tête {{HTTPHeader("If-None-Match")}}
- [Serveur Apache `mod_deflate.c` <sup>(angl.)</sup>](https://github.com/apache/httpd/blob/4348e8cb7d8c41b1c8019ceb0a1612bb4a3384f7/modules/filters/mod_deflate.c#L495-L500) transforme les ETags lors de la compression
