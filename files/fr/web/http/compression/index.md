---
title: Compression dans HTTP
slug: Web/HTTP/Compression
---

{{HTTPSidebar}}

La compression est une méthode importante pour accroitre les performances d'un site web. Pour certaines pages, la réduction de la taille des éléments économise jusqu'à 70 % de la bande passante. Les algorithmes de compression s'améliorent d'années en années, les nouveaux algorithmes étant supportés à la fois par les serveurs et les clients.

En réalité, les développeurs web n'ont pas besoin d'implémenter des mécanismes de compression puisqu'ils sont déjà intégrés à la fois aux navigateurs et dans les serveurs. Il convient néanmoins de s'assurer de la configuration correcte du serveur web. La compression s'effectue à trois niveaux différents :

- Tout d'abord certains formats de fichiers sont compressés à l'aide de méthodes optimisées,
- ensuite, la compression s'effectue au niveau du protocole HTTP (la ressource est transmise de manière compressée de bout en bout),
- enfin la compression peut s'appliquer au niveau des connexions entre deux nœuds d'une connexion HTTP.

## Fichiers au format compressé

Chaque type de donnée possède des redondances intrinsèques, ce qui signifie que l'utilisation de l'espace n'est pas optimisée. Ainsi dans les fichiers texte, l'espace ainsi perdu peut représenter environ 60 %, pour les fichiers multimédias, la redondance peut s'avérer beaucoup plus élevée. Étant donné que la contrainte de taille élevée est apparue dès le début pour ces types de fichiers, les ingénieurs ont conçu des algorithmes spécifiques à chaque format. Les algorithmes de compression utilisés pour les fichiers peuvent être groupés en deux catégories :

- _Compression sans perte_, le cycle compression/décompression ne modifie pas les données. Les données ainsi décompressées correspondent à l'octet près à l'original.
  Pour les images, `gif` ou `png` utilisent une compression sans perte.
- _Compression avec pertes_, le cycle de compression modifie la donnée originale de façon peu perceptible pour l'utilisateur.
  Les formats vidéos sur le Web sont des exemples de formats intégrant une compression avec pertes, pour les images `jpeg` est un format avec pertes.

Certains formats peuvent être utilisés à la fois pour une compression sans perte ou avec pertes tel que `webp`. L'algorithme de compression peut être configuré pour une compression plus ou moins élevée, ce qui influe sur le niveau de qualité en sortie. Afin d'optimiser les performances, il convient de compresser au maximum tout en conservant un niveau de qualité acceptable. Pour les images, selon le logiciel qui a permis sa création, il se peut que l'image ne soit pas compressée suffisamment pour le Web. Il est recommandé d'utiliser des logiciels permettant la compression au maximum. Il existe de [nombreux outils spécialisés](https://www.creativebloq.com/design/image-compression-tools-1132865) pour cet usage.

Les algorithmes de compression avec pertes sont généralement plus performants que les algorithmes de compression sans perte.

> **Note :** Puisque certains types de fichiers gèrent nativement la compression, il est souvent inutile de les compresser une seconde fois. En réalité, cela s'avère souvent contre-productif de par la taille induite par les données additionnelles nécessaires (lors de la compression, un dictionnaire de données est généré) le fichier en sortie est alors plus gros que celui avant compression. Veillez à ne pas utiliser les techniques suivantes pour les fichiers au format compressé.

## Compression de bout en bout

La compression de bout en bout constitue la compression permettant le plus de gain de performances pour le Web. La compression de bout en bout est définie par la compression du corps du message qui est effectuée par le serveur et ne sera modifié qu'une fois arrivé à destination par le client. Les étapes lors du transport laissent la charge utile inchangée.

![Séquence du serveur au client mettant en œuvre la compression de bout en bout](httpenco1.png)

L'ensemble des navigateurs récents supportent la compression de bout en bout et le seul élément à échanger entre le serveur et le client est l'algorithme de compression à utiliser. Ces algorithmes sont optimisés pour le transport du texte. Dans les années 90, les technologies de compression ont évoluées rapidement, il existe donc de nombreuses possibilités en termes d'algorithmes. Les algorithmes qu'il convient de considérer à l'heure actuelle sont : `gzip`, le plus utilisé et `br` le nouveau venu.

Pour sélectionner l'algorithme à utiliser, le navigateur et le serveur s'appuient sur [la négociation du contenu](/fr/docs/Web/HTTP/Content_negotiation). Le navigateur envoie un en-tête {{HTTPHeader("Accept-Encoding")}} contenant les algorithmes qu'il prend en charge par ordre de préférence, le serveur en sélectionne un pour compresser le corps de la réponse et inclut l'algorithme utilisé dans l'en-tête {{HTTPHeader("Content-Encoding")}} pour informer le navigateur de l'algorithme sélectionné. La négociation de contenu s'appuyant sur l'encodage des données le serveur doit envoyer un en-tête {{HTTPHeader("Vary")}} contenant au moins {{HTTPHeader("Accept-Encoding")}} en plus de l'en-tête de la réponse. Les caches seront ainsi en mesure de gérer les différentes représentations de la ressource.

![Séquence de négociation de contenu échangeant les algorithmes de compression et les en-têtes associés](httpcompression1.png)

La compression permettant un gain de performance significatif, il est conseillé de l'activer pour l'ensemble des fichiers à l'exception des fichiers audios et vidéos au format compressé.

Apache prend en charge la compression et utilise [mod_deflate](http://httpd.apache.org/docs/current/mod/mod_deflate.html); nginx dispose de [ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html); pour IIS, il existe l'élément [`<httpCompression>`](https://www.iis.net/configreference/system.webserver/httpcompression).

## Compression saut par saut

La compression saut par saut, bien que similaire à la compression de bout en bout se distingue fondamentalement par son fonctionnement : la compression n'a pas lieu au niveau du serveur mais entre des éléments du réseau situés entre le serveur et le navigateur, chaque bond pouvant utiliser un mécanisme de compression _différent_.

![Compression saut par saut entre le serveur et le client](httpte1.png)

HTTP permet de mettre en œuvre cette technique à l'aide d'un élément de négociation de contenu. Le nœud transmettant la donnée diffuse son utilisation de l'en-tête {{HTTPHeader("TE")}}, le noeud suivant choisit la méthode de compression appropriée et transmet son choix via {{HTTPHeader("Transfer-Encoding")}}.

![Diagramme de séquence détaillant les échanges d'en-têtes en compression saut par saut](httpcomp2.png)

En pratique la compression saut par saut est transparente pour le serveur et le client et elle demeure rarement utilisée. Les en-têtes {HTTPHeader("TE")}} and {{HTTPHeader("Transfer-Encoding")}} sont le plus souvent utilisé pour transmettre des réponses par morceaux ce qui permet la transmission de ressource avant d'en avoir déterminé la taille.

Il est important de signaler que {{HTTPHeader("Transfer-Encoding")}} et la compression au niveau d'un nœud est si rare que la plupart des serveurs Apache, nginx, ou IIS ne possèdent pas de façon simple de la configurer, dans la mesure où elle existe, cette configuration a lieu au niveau du proxy.
