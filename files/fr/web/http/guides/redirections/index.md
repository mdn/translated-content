---
title: Redirections en HTTP
slug: Web/HTTP/Guides/Redirections
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Une **redirection d'URL**, également connue sous le nom de _transfert d'URL_, est une technique pour donner plus d'une adresse URL à une page, un formulaire, un site Web entier ou une application Web. HTTP fournit un type particulier de réponse, appelé **_redirection HTTP_**, pour cette opération.

Les redirections accomplissent de nombreux objectifs&nbsp;:

- Redirections temporaires pendant la maintenance du site ou les périodes d'indisponibilité
- Redirections permanentes pour préserver les liens/marque-pages existants après avoir modifié les URL du site, pages de progression lors du téléchargement d'un fichier, etc.

## Principe

En HTTP, une redirection est déclenchée par le serveur en envoyant une réponse spéciale _de redirection_ à une requête. Les réponses de redirection ont des [codes d'état](/fr/docs/Web/HTTP/Reference/Status) qui commencent par `3`, et un en-tête {{HTTPHeader("Location")}} contenant l'URL vers laquelle rediriger.

Lorsque les navigateurs reçoivent une redirection, ils chargent immédiatement la nouvelle URL fournie dans l'en-tête `Location`. Mis à part le léger impact sur les performances dû à un aller-retour supplémentaire, les utilisateur·ice·s remarquent rarement la redirection.

![Une requête effectuée par le client vers le serveur. Le serveur répond avec « 301:moved permanently » et la nouvelle URL de la ressource. Le client effectue une requête GET pour la nouvelle URL qui est retournée par le serveur avec une réponse 200 OK.](httpredirect.svg)

Il existe plusieurs types de redirections et elles se répartissent en trois catégories&nbsp;:

1. [Les redirections permanentes](#redirections_permanentes)
2. [Les redirections temporaires](#redirections_temporaires)
3. [Les redirections spéciales](#redirections_spéciales)

### Redirections permanentes

Ces redirections sont faites pour durer éternellement. Elles impliquent que l'URL d'origine ne doit plus être utilisée et que la nouvelle URL est préférée. Les robots des moteurs de recherche déclenchent une mise à jour de l'URL associée à la ressource dans leurs index.

| Code  | Texte                | Traitement des méthodes                                                                                         | Cas d'utilisation typique                                        |
| ----- | -------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `301` | `Moved Permanently`  | Requêtes {{HTTPMethod("GET")}} inchangées. Les autres peuvent être changés ou non en {{HTTPMethod("GET")}}. [1] | Réorganisation d'un site Web.                                    |
| `308` | `Permanent Redirect` | Méthode et corps de la requête inchangés.                                                                       | Réorganisation d'un site Web, avec des liens/opérations non-GET. |

\[1] La spécification n'avait pas l'intention de permettre des changements de méthode, mais il y a en pratique des agents utilisateurs qui le font. {{HTTPStatus("308")}} a été créé pour supprimer l'ambiguïté du comportement lors de l'utilisation de méthodes autres que `GET`.

### Redirections temporaires

Parfois, la ressource demandée ne peut pas être accédée à partir de son emplacement standard, mais elle peut l'être à partir d'un autre endroit. Dans ce cas, une redirection temporaire peut être utilisée.

Les robots des moteurs de recherche ne mémorisent pas le nouveau lien temporaire. Les redirections temporaires sont également utilisées lors de la création, de la mise à jour et de la suppression de ressources pour présenter des pages de progression temporaires.

| Code  | Texte                | Traitement des méthodes                                                                                         | Cas d'utilisation typique                                                                                                                                                                                                                    |
| ----- | -------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | Requêtes {{HTTPMethod("GET")}} inchangées. Les autres peuvent être changés ou non en {{HTTPMethod("GET")}}. [2] | La page Web n'est temporairement pas disponible pour des raisons inattendues. De cette façon, les moteurs de recherche ne mettent pas à jour leurs liens.                                                                                    |
| `303` | `See Other`          | Requêtes {{HTTPMethod("GET")}} inchangées. Les autres sont changées en `GET` (le corps est perdu).              | Utilisé pour rediriger après un {{HTTPMethod("PUT")}} ou un {{HTTPMethod("POST")}} pour empêcher un rafraîchissement de la page qui re-déclenche l'opération.                                                                                |
| `307` | `Temporary Redirect` | Méthodes et corps inchangés                                                                                     | La page Web n'est temporairement pas disponible pour des raisons inattendues. De cette façon, les moteurs de recherche ne mettent pas à jour leurs liens. Mieux que `302` lorsque des liens/opérations non-GET sont disponibles sur le site. |

\[2] La spécification n'avait pas l'intention de permettre des changements de méthode, mais il y a en pratique des agents utilisateurs qui le font. {{HTTPStatus("307")}} a été créé pour supprimer l'ambiguïté du comportement lors de l'utilisation de méthodes autres que `GET`

### Redirections spéciales

En plus de ces redirections habituelles, il existe deux redirections spécifiques. Le {{HTTPStatus("304")}} (Not Modified) redirige une page vers la copie mise en cache localement (qui était obsolète), et le {{HTTPStatus("300")}} (Multiple Choice) est une redirection manuelle&nbsp;: le corps, présenté par le navigateur comme une page Web, liste les redirections possibles et l'utilisateur·ice clique sur une pour la sélectionner.

| Code  | Texte             | Cas d'utilisation typique                                                                                                                          |
| ----- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choice` | Pas beaucoup&nbsp; les choix sont listés dans une page HTML dans le corps du texte. Pourrait être servi avec un {{HTTPStatus("200")}} `OK` status. |
| `304` | `Not Modified`    | Rafraîchissement du cache&nbsp;: ceci indique que la valeur dans le cache est encore correcte et peut être utilisée.                               |

## Manières alternatives de définir les redirections

Les redirections HTTP ne sont pas le seul moyen de définir des redirections. Il en existe deux autres&nbsp;:

1. Les redirections HTML avec l'élément HTML {{HTMLElement("meta")}}
2. Les redirections JavaScript par le [DOM](/fr/docs/Web/API/Document_Object_Model)

### Redirections HTML

Les redirections HTTP sont le meilleur moyen de créer des redirections, mais parfois vous n'avez pas le contrôle du serveur. Dans ce cas, essayez un élément HTML {{HTMLElement("meta")}} avec son attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta#http-equiv) défini sur `Refresh` dans l'en-tête ({{HTMLElement("head")}}) de la page. Lors de l'affichage de la page, le navigateur va à l'URL indiquée.

```html
<head>
  <meta http-equiv="refresh" content="0; URL=http://www.example.com/" />
</head>
```

L'attribut [`content`](/fr/docs/Web/HTML/Reference/Global_attributes#content) commence avec un nombre indiquant combien de secondes le navigateur doit attendre avant de rediriger vers l'URL fournie. Toujours le mettre à `0`, pour une meilleure accessibilité.

Bien entendu, cette méthode ne fonctionne qu'avec HTML, et ne peut pas être utilisée pour des images ou tout autre type de contenu.

### Redirections JavaScript

Les redirections en JavaScript se créent en définissant une valeur pour la propriété {{DOMxRef("window.location")}} et la nouvelle page est alors chargée.

```js
window.location = "http://www.example.com/";
```

Comme les redirections HTML, cela ne fonctionne pas sur toutes les ressources, et évidemment, cela ne fonctionne que pour les clients qui exécutent du JavaScript. D'un autre côté, il y a plus de possibilités&nbsp;: par exemple, vous pouvez déclencher la redirection uniquement si certaines conditions sont remplies.

### Ordre de priorité

Avec trois possibilités de redirections d'URL, plusieurs méthodes peuvent être définies en même temps. Mais laquelle est appliquée en premier&nbsp;?

1. Les redirections HTTP sont toujours exécutées en premier — elles existent alors qu'il n'y a même pas de page transmise.
2. De manière quelque peu surprenante, les redirections JavaScript s'exécutent ensuite, avant les redirections HTML. En effet, la redirection `<meta>` se produit après que la page est _complètement chargée_, c'est-à-dire après l'exécution de tous les scripts.
3. Les redirections HTML ({{HTMLElement("meta")}}) s'exécutent s'il n'y a pas de redirections HTTP ou de redirections JavaScript qui ont été exécutées avant le chargement de la page.
4. S'il y a une redirection JavaScript qui se produit après le chargement de la page (par exemple, lors d'un clic sur un bouton), elle s'exécute en dernier si la page n'a pas déjà été redirigée par les méthodes précédentes.

Dans la mesure du possible, utilisez des redirections HTTP, et n'ajoutez pas d'élément {{HTMLElement("meta")}} de redirection. Si quelqu'un change les redirections HTTP et oublie de changer les redirections HTML, les redirections ne sont plus identiques, ce qui peut causer une boucle infinie ou d'autres cauchemars.

## Cas d'utilisation

Il existe de nombreux cas d'utilisation pour les redirections, mais comme les performances sont affectées par chaque redirection, leur utilisation doit être réduite au minimum.

### Alias de domaine

Idéalement, il n'y a qu'un seul emplacement, et donc qu'une seule URL pour chaque ressource. Mais il existe des raisons pour avoir des noms alternatifs pour une ressource&nbsp;:

- Élargir la portée de votre site
  - : Un cas courant est celui où votre site se trouve sous le domaine `www.example.com` et où l'accès à vos pages à partir de `example.com` doit également être possible. Dans ce cas, des redirections vers `www.example.com` sont mises en place, pour les pages de `example.com`. Vous pouvez également fournir des noms synonymes couramment utilisés ou des fautes de frappe fréquentes de vos noms de domaine.
- Déplacer vers un nouveau domaine
  - : Par exemple, votre société a été renommée, mais vous voulez que les liens ou favoris existants continuent de vous trouver sous le nouveau nom.
- Forcer le [HTTPS](/fr/docs/Glossary/HTTPS)
  - : Les requêtes vers la version `http://` de votre site sont redirigées vers la version `https://` de votre site.

### Maintenir les liens en vie

Lorsque vous restructurez des sites Web, les URL changent. Même si vous mettez à jour les liens de votre site pour qu'ils correspondent aux nouvelles URL, vous n'avez aucun contrôle sur les URL utilisées par les ressources externes.

Vous ne voulez pas casser ces liens, car ils apportent des utilisateur·ice·s précieux·ses et aident votre référencement, donc vous configurez des redirections depuis les anciennes URL vers les nouvelles.

> [!NOTE]
> Cette technique fonctionne pour les liens internes, mais essayez d'éviter d'avoir des redirections internes. Une redirection a un coût significatif sur les performances (car une requête HTTP supplémentaire est effectuée). Si vous pouvez l'éviter en corrigeant les liens internes, vous devez corriger ces liens à la place.

### Réponses temporaires aux requêtes non sécurisées

Les requêtes {{Glossary("Safe/HTTP", "insécurisées")}} modifient l'état du serveur et l'utilisateur·ice ne doit pas les retourner par inadvertance.

De manière générale, vous ne voulez pas que vos utilisateur·ice·s retournent des requêtes {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} ou {{HTTPMethod("DELETE")}}. Si vous servez la réponse comme résultat de cette requête, un appui sur le bouton de rechargement retourne la requête (éventuellement après un message de confirmation).

Dans ce cas, le serveur peut retourner une réponse {{HTTPStatus("303")}} (See Other) pour une URL qui contient les bonnes informations. Si le bouton de rechargement est pressé, seule cette page est ré-affichée, sans rejouer les requêtes insécurisées.

### Réponses temporaires aux longues requêtes

Certaines requêtes peuvent nécessiter plus de temps sur le serveur, comme les requêtes {{HTTPMethod("DELETE")}} qui sont planifiées pour un traitement ultérieur. Dans ce cas, la réponse est une redirection {{HTTPStatus("303")}} (See Other) qui retourne à une page indiquant que l'action a été programmée, et informe éventuellement de son avancement, ou permet de l'annuler.

## Configuration des redirections dans les serveurs les plus courants

### Apache

Les redirections peuvent être définies soit dans le fichier de configuration du serveur, soit dans le fichier `.htaccess` de chaque répertoire.

Le module [`mod_alias` <sup>(angl.)</sup>](https://httpd.apache.org/docs/current/mod/mod_alias.html) a des directives `Redirect` et `RedirectMatch` qui définissent une réponse {{HTTPStatus("302")}} par défaut&nbsp;:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

L'URL `http://example.com/` est redirigée vers `http://www.example.com/`, ainsi que les fichiers ou répertoires qui s'y trouvent (`http://example.com/index.html` est redirigée vers `http://www.example.com/index.html`)

`RedirectMatch` fait la même chose mais prend une expression régulière pour définir une liste d'URLs concernées:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Tous les documents dans le répertoire `images/` sont redirigés vers un autre domaine.

Si vous ne souhaitez pas configurer une redirection temporaire, un paramètre supplémentaire (soit le code d'état HTTP à utiliser, soit le mot clé `permanent`) peut être utilisé pour configurer un autre type de redirection&nbsp;:

```apacheconf
Redirect permanent / https://www.example.com
# …agit exactement de la même manière que :
Redirect 301 / https://www.example.com
```

Le module [`mod_rewrite` <sup>(angl.)</sup>](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) peut également être utilisé pour créer des redirections. Il est plus flexible, mais un peu plus complexe à utiliser.

### Nginx

Dans Nginx, vous créez un bloc `server` spécifique pour le contenu que vous voulez rediriger&nbsp;:

```nginx
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

Pour appliquer une redirection pour un dossier ou un sous-ensemble de pages uniquement, utilisez la directive `rewrite`&nbsp;:

```nginx
rewrite ^/images/(.*)$ https://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ https://images.example.com/$1 permanent;
```

### IIS

Dans IIS, vous devez utiliser l'élément [`<httpRedirect>` <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpRedirect/) pour configurer les redirections.

## Boucles de redirection

Les boucles de redirection se produisent lorsque les redirections se succèdent en suivant celle déjà effectuée. En d'autres termes, il y a une boucle qui ne termine jamais et aucune page n'est finalement trouvée.

La plupart du temps, il s'agit d'un problème de serveur, et si le serveur peut le détecter, il retourne le message {{HTTPStatus("500")}} `Internal Server Error`. Si vous rencontrez une telle erreur peu après avoir modifié une configuration de serveur, il s'agit probablement d'une boucle de redirection.

Parfois, le serveur ne le détecte pas&nbsp;: une boucle de redirection peut s'étendre sur plusieurs serveurs qui n'ont pas une vue globale de ce qui se passe. Dans ce cas, les navigateurs le détectent et affichent un message d'erreur. Firefox affiche&nbsp;:

> Firefox a détecté que le serveur redirige la demande pour cette adresse d'une manière qui n'aboutit pas.

…tandis que Chrome affiche&nbsp;:

> Cette page Web présente une boucle de redirection

Dans les deux cas, l'utilisateur·ice ne peut pas faire grand-chose (sauf si une corruption se produit de son côté, comme un décalage entre le cache et les cookies).

Il est important d'éviter les boucles de redirection, car elles perturbent complètement l'expérience utilisateur.

## Voir aussi

- Statut de réponse de [Redirections 3XX](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection)
- L'en-tête {{HTTPHeader("Location")}}
- La propriété {{DOMxRef("window.location")}} pour la redirection en utilisant JavaScript
