---
title: Compression dans HTTP
slug: Web/HTTP/Guides/Compression
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La **compression** est une méthode importante pour accroître les performances d'un site web. Pour certains documents, une réduction de la taille peut atteindre 70% ce qui permet de diminuer les besoins en bande passante. Au fil des ans, les algorithmes ont gagné en efficacité, et de nouveaux sont désormais pris en charge par les clients et les serveurs.

En pratique, les développeur·euse·s web n'ont pas besoin de mettre en œuvre des mécanismes de compression, car ceux-ci sont déjà intégrés aux navigateurs et aux serveurs&nbsp;; ils doivent toutefois s'assurer que le serveur est correctement configuré. La compression s'effectue à trois niveaux différents&nbsp;:

- d'abord, certains formats de fichiers sont compressés avec des méthodes optimisées spécifiques,
- ensuite, une compression générale peut se produire au niveau HTTP (la ressource est transmise compressée de bout en bout),
- et enfin, la compression peut être définie au niveau de la connexion, entre deux nœuds d'une connexion HTTP.

## Fichiers au format compressé

Chaque type de données contient une certaine redondance, c'est-à-dire de _l'espace perdu_. Si le texte peut généralement avoir jusqu'à 60% de redondance, ce taux peut être beaucoup plus élevé pour certains autres médias comme l'audio et la vidéo. Contrairement au texte, ces autres types de médias utilisent beaucoup d'espace pour stocker leurs données et le besoin d'optimiser le stockage et de récupérer de l'espace était évident très tôt. Les ingénieurs ont conçu l'algorithme de compression optimisé utilisé par les formats de fichiers conçus à cet effet. Les algorithmes de compression utilisés pour les fichiers peuvent être regroupés en deux grandes catégories&nbsp;:

- _Compression sans perte_, le cycle compression/décompression ne modifie pas les données. Les données ainsi décompressées correspondent à l'octet près à l'original.
  Pour les images, `gif` ou `png` utilisent une compression sans perte.
- _Compression avec pertes_, le cycle de compression modifie la donnée originale de façon peu perceptible pour l'utilisateur·ice.
  Les formats vidéos sur le Web sont des exemples de formats intégrant une compression avec pertes, pour les images `jpeg` est un format avec pertes.

Certains formats peuvent être utilisés à la fois pour une compression sans perte ou avec pertes tel que `webp`. L'algorithme de compression peut être configuré pour une compression plus ou moins élevée, ce qui influe sur le niveau de qualité en sortie. Afin d'optimiser les performances, il convient de compresser au maximum tout en conservant un niveau de qualité acceptable. Pour les images, selon le logiciel qui a permis sa création, il se peut que l'image ne soit pas compressée suffisamment pour le Web. Il est recommandé d'utiliser des logiciels permettant la compression au maximum. Il existe de [nombreux outils spécialisés <sup>(angl.)</sup>](https://www.creativebloq.com/design/image-compression-tools-1132865) pour cet usage.

Les algorithmes de compression avec pertes sont généralement plus performants que les algorithmes de compression sans perte.

> [!NOTE]
> Puisque certains types de fichiers gèrent nativement la compression, il est souvent inutile de les compresser une seconde fois. En réalité, cela s'avère souvent contre-productif de par la taille induite par les données additionnelles nécessaires (lors de la compression, un dictionnaire de données est généré) le fichier en sortie est alors plus gros que celui avant compression. Veillez à ne pas utiliser les techniques suivantes pour les fichiers au format compressé.

## Compression de bout en bout

La compression, de bout en bout constitue la compression permettant le plus de gain de performances pour le Web. La compression de bout en bout est définie par la compression du corps du message qui est effectuée par le serveur et ne est modifié qu'une fois arrivé à destination par le client. Les étapes lors du transport laissent la charge utile inchangée.

![Séquence du serveur au client mettant en œuvre la compression de bout en bout](httpenco1.svg)

L'ensemble des navigateurs récents supportent la compression de bout en bout et le seul élément à échanger entre le serveur et le client est l'algorithme de compression à utiliser. Ces algorithmes sont optimisés pour le transport du texte. Dans les années 1990, les technologies de compression ont évoluées rapidement, il existe donc de nombreuses possibilités en termes d'algorithmes. Les algorithmes qu'il convient de considérer à l'heure actuelle sont&nbsp;: `gzip`, le plus utilisé et `br` le nouveau venu.

Pour sélectionner l'algorithme à utiliser, le navigateur et le serveur s'appuient sur [la négociation du contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation). Le navigateur envoie un en-tête {{HTTPHeader("Accept-Encoding")}} contenant les algorithmes qu'il prend en charge par ordre de préférence, le serveur en sélectionne un pour compresser le corps de la réponse et inclut l'algorithme utilisé dans l'en-tête {{HTTPHeader("Content-Encoding")}} pour informer le navigateur de l'algorithme sélectionné. La négociation de contenu s'appuyant sur l'encodage des données le serveur doit envoyer un en-tête {{HTTPHeader("Vary")}} contenant au moins {{HTTPHeader("Accept-Encoding")}} en plus de l'en-tête de la réponse&nbsp;; de cette manière, les caches peuvent mettre en cache les différentes représentations de la ressource.

![Séquence de négociation de contenu échangeant les algorithmes de compression et les en-têtes associés](httpcompression1.svg)

La compression permettant un gain de performance significatif, il est conseillé de l'activer pour l'ensemble des fichiers à l'exception des fichiers audios et vidéos au format compressé.

Apache prend en charge la compression et utilise [mod_deflate <sup>(angl.)</sup>](https://httpd.apache.org/docs/current/mod/mod_deflate.html)&nbsp;; nginx dispose de [ngx_http_gzip_module <sup>(angl.)</sup>](https://nginx.org/en/docs/http/ngx_http_gzip_module.html)&nbsp;; pour IIS, il existe l'élément [`<httpCompression>` <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/).

## Transport du dictionnaire de compression

Les formats de compression modernes tels que {{Glossary("Brotli compression", "compression Brotli")}} et {{Glossary("Zstandard compression", "compression Zstandard")}} peuvent utiliser des dictionnaires de données fréquemment utilisées pour augmenter encore la compression par rapport à la simple référence à celles présentes dans le fichier compressé. Typiquement, pour les réponses HTTP, cela utilise le dictionnaire statique prédéfini inclus dans ce format (par exemple [le dictionnaire statique Brotli est disponible dans le code source <sup>(angl.)</sup>](https://github.com/google/brotli/blob/master/csharp/org/brotli/dec/Dictionary.cs)).

[Transport du dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) permet à un·e développeur·euse de définir une ressource qui peut être utilisée comme dictionnaire pour les futures requêtes. Il peut s'agir d'un fichier de dictionnaire spécifique ou d'une ressource existante (par exemple, utiliser `app.v1.js` comme dictionnaire lors du téléchargement de `app.v2.js`). Cela améliore généralement la compression et donc le temps de chargement. Dans l'exemple `app.vX.js`, la majeure partie du téléchargement ne consisterait qu'en le delta entre les deux versions, et les octets communs pourraient être référencés à partir du fichier `app.v1.js` déjà téléchargé.

## Compression saut par saut

La compression saut par saut, bien que similaire à la compression de bout en bout, diffère par un élément fondamental&nbsp;: la compression ne se produit pas sur la ressource sur le serveur, créant une représentation spécifique qui est ensuite transmise, mais sur le corps du message entre deux nœuds quelconques sur le chemin entre le client et le serveur. Les connexions entre les nœuds intermédiaires successifs peuvent appliquer une compression _différente_.

![Compression saut par saut entre le serveur et le client](httpte1.svg)

Pour ce faire, HTTP utilise un mécanisme similaire à la négociation de contenu pour la compression de bout en bout&nbsp;: le nœud transmettant la requête indique son intention en utilisant l'en-tête {{HTTPHeader("TE")}}, et l'autre nœud choisit la méthode appropriée, l'applique et indique son choix avec l'en-tête {{HTTPHeader("Transfer-Encoding")}}.

![Diagramme de séquence détaillant les échanges d'en-têtes en compression saut par saut](httpcomp2.svg)

En pratique, la compression saut par saut est transparente pour le serveur et le client, et elle est rarement utilisée. Les en-têtes {{HTTPHeader("TE")}} et {{HTTPHeader("Transfer-Encoding")}} sont principalement utilisés pour envoyer une réponse par morceaux, ce qui permet de commencer à transmettre une ressource sans connaître sa longueur.

Il est important de noter que l'utilisation de {{HTTPHeader("Transfer-Encoding")}} et de la compression au niveau des nœuds est si rare que la plupart des serveurs, comme Apache, Nginx ou IIS, n'ont pas de moyen simple de la configurer. Une telle configuration se fait généralement au niveau du proxy.

## Voir aussi

- [Guide sur le transport du dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Termes du glossaire&nbsp;:
  - {{Glossary("Brotli compression", "Compression Brotli")}}
  - {{Glossary("Gzip compression", "Compression Gzip")}}
  - {{Glossary("Lossless compression", "Compression sans perte")}}
  - {{Glossary("Lossy compression", "Compression avec perte")}}
  - {{Glossary("Zstandard compression", "Compression Zstandard")}}
  - {{Glossary("Compression Dictionary Transport", "Transport du dictionnaire de compression")}}
