---
title: Redirections en HTTP
slug: Web/HTTP/Redirections
tags:
  - Guide
  - HTTP
  - redirections
translation_of: Web/HTTP/Redirections
---
{{HTTPSidebar}}La redirection d'URL est une technique pour donner à une page, un formulaire ou une application Web entière, plus d'une adresse. HTTP fournit un type particulier de réponses, les **_redirections HTTP_**, pour effectuer cette opération utilisée pour de nombreux objectifs : redirection temporaire pendant la maintenance du site, redirection permanente pour que les liens externes continuent de fonctionner après un changement d'architecture du site, pages de progression lors du téléchargement d'un fichier, etc.

## Principe

En HTTP, une redirection est déclenchée par le serveur en envoyant des réponses spéciales à une requête : _les redirections_. Les redirections HTTP sont des réponses avec un code d'état de `3xx`. Un navigateur, lorsqu'il reçoit une réponse de redirection, utilise la nouvelle URL fournie et la charge immédiatement : la plupart du temps, la redirection est transparente pour l'utilisateur, si ce n'est un petit impact de performance.

![](httpredirect.png)

Il existe plusieurs types de redirections et elles se répartissent en trois catégories : les redirections permanentes, les temporaires et les spéciales.

### Redirections permanentes

Ces redirections sont faites pour durer éternellement. Elles impliquent que l'URL d'origine ne doit plus être utilisée et que la nouvelle URL est préférée. Les robots des moteurs de recherche déclenchent une mise à jour de l'URL associée à la ressource dans leurs index.

| Code  | Texte                | Traitement des méthodes                                                                                                   | Cas d'utilisation typique                                        |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `301` | `Moved Permanently`  | Requêtes {{HTTPMethod("GET")}} inchangées. Les autres peuvent être changés ou non en {{HTTPMethod("GET")}}. | Réorganisation d'un site Web.                                    |
| `308` | `Permanent Redirect` | Méthode et corps de la requête inchangés.                                                                                 | Réorganisation d'un site Web, avec des liens/opérations non-GET. |

La spécification n'avait pas l'intention de permettre des changements de méthode, mais il y a en pratique des agents utilisateurs qui le font. `308` a été créé pour supprimer l'ambiguïté du comportement lors de l'utilisation de méthodes autres que `GET`.

### Redirections temporaires

Parfois, la ressource demandée ne peut pas être accédée à partir de son emplacement standard, mais elle peut l'être à partir d'un autre endroit. Dans ce cas, une redirection temporaire peut être utilisée. Les robots des moteurs de recherche ne mémorisent pas le nouveau lien temporaire. Les redirections temporaires sont également utilisées lors de la création, de la mise à jour et de la suppression de ressources pour présenter des pages de progression temporaires.

| Code  | Texte                | Traitement des méthodes                                                                                                   | Cas d'utilisation typique                                                                                                                                                                                                                                    |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `302` | `Found`              | Requêtes {{HTTPMethod("GET")}} inchangées. Les autres peuvent être changés ou non en {{HTTPMethod("GET")}}. | La page Web n'est temporairement pas disponible pour des raisons qui n'ont pas été imprévues. De cette façon, les moteurs de recherche ne mettent pas à jour leurs liens.                                                                                    |
| `303` | `See Other`          | Requêtes {{HTTPMethod("GET")}} inchangées. Les autres sont changées en `GET` (le corps est perdu).                 | Utilisé pour rediriger après un {{HTTPMethod("PUT")}} ou un {{HTTPMethod("POST")}} pour empêcher un rafraîchissement de la page qui redéclencherait l'opération.                                                                                |
| `307` | `Temporary Redirect` | Méthodes et corps inchangés                                                                                               | La page Web n'est temporairement pas disponible pour des raisons qui n'ont pas été imprévues. De cette façon, les moteurs de recherche ne mettent pas à jour leurs liens. Mieux que `302` lorsque des liens/opérations non-GET sont disponibles sur le site. |

La spécification n'avait pas l'intention de permettre des changements de méthode, mais il y a en pratique des agents utilisateurs qui le font. `307` a été créé pour supprimer l'ambiguïté du comportement lors de l'utilisation de méthodes autres que `GET`

### Redirections spéciales

En plus de ces redirections habituelles, il existe deux redirections spécifiques. Le {{HTTPStatus("304")}} (Not Modified) redirige une page vers la copie mise en cache localement (qui était obsolète), et le {{HTTPStatus("300")}} (Multiple Choice) est une redirection manuelle : le corps, présenté par le navigateur comme une page Web, liste les redirections possibles et l'utilisateur clique sur une pour la sélectionner.

| Code  | Texte             | Cas d'utilisation typique                                                                                                                             |
| ----- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choice` | Pas beaucoup : les choix sont listés dans une page HTML dans le corps du texte. Pourrait être servi avec un {{HTTPStatus("200")}} `OK` status. |
| `304` | `Not Modified`    | Rafraîchissement du cache : ceci indique que la valeur dans le cache est encore correcte et peut être utilisée.                                       |

## Autre façon de spécifier les redirections

Les redirections HTTP ne sont pas les seuls moyens de définir des redirections. Il existe deux autres méthodes: les redirections HTML en utilisant l'élément {{HTMLElement("meta")}}, et les redirections JavaScript en utilisant le [DOM](/en-US/docs/Web/API/Document_Object_Model).

### Redirections HTML

Les redirections HTTP sont le moyen privilégié de créer des redirections, mais parfois le développeur Web n'a pas le contrôle du serveur ou ne peut pas le configurer. Pour ces cas spécifiques, les développeurs Web peuvent créer une page HTML avec un élément {{HTMLElement("meta")}} et son attribut {{htmlattrxref("http-equiv", "meta")}} avec la valeur `refresh`, positionné dans le {{HTMLElement("head")}} de la page. Lors de l'affichage de la page, le navigateur trouvera cet élément et ira à la page indiquée.

```html
<head>
  <meta http-equiv="refresh" content="0; URL=http://www.example.com/" />
</head>
```

L'attribut {{htmlattrxref("content")}} commence avec un nombre indiquant combien de secondes le navigateur doit attendre avant de rediriger vers l'URL fournie. Toujours le mettre à 0, pour une meilleure accessibilité.

Bien entendu, cette méthode ne fonctionne qu'avec des pages HTML (ou similaires) et ne peut être utilisée pour des images ou tout autre type de contenu.

> **Note :** Ces redirections cassent le bouton de retour dans un navigateur : vous pouvez revenir à une page avec cet en-tête mais vous serez de nouveau instantanément redirigé.

### Redirections JavaScript

Les redirections en JavaScript se créent en définissant une valeur pour la propriété {{domxref("window.location")}} et la nouvelle page est alors chargée.

```js
window.location = "http://www.example.com/";
```

Comme les redirections HTML, cela ne fonctionne pas sur toutes les ressources, et évidemment, cela ne marchera que pour les clients qui exécutent du JavaScript. D'un autre côté, il y a plus de possibilités car vous ne pouvez déclencher la redirection que si certaines conditions sont remplies, par exemple.

### Ordre de priorité

Avec trois possibilités de redirections d'URL, plusieurs méthodes peuvent être spécifiées en même temps, mais laquelle est appliquée en premier ? L'ordre de priorité est le suivant:

1.  Les redirections HTTP sont toujours exécutées en premier, alors même que la page n'est pas transmise, et ni même lue.
2.  Les redirections HTML ({{HTMLElement("meta")}}) sont exécutées s'il n'y avait pas de redirections HTTP.
3.  Les redirections JavaScript sont utilisées en dernier recours, et uniquement si JavaScript est activé côté client.

Dans la mesure du possible, utilisez des redirections HTTP, et n'ajoutez pas d'élément {{HTMLElement("meta")}} de redirection. Si quelqu'un change les redirections HTTP et oublie de changer les redirections HTML, les redirections ne seront plus identiques, ce qui pourrait causer une boucle infinie ou d'autres cauchemars.

## Cas d'utilisation

Il existe de nombreux cas d'utilisation pour les redirections, mais comme les performances sont affectées par chaque redirection, leur utilisation doit être réduite au minimum.

### Alias de domaine

Idéalement, il n'y a qu'un seul emplacement, et donc qu'une seule URL pour une seule ressource. Mais il existe plein de raisons de vouloir des noms alternatifs pour une même ressource (plusieurs domaines, comme avec et sans le préfixe www ou des URLs plus courtes et faciles à retenir, ....). Dans ces cas, plutôt que de dupliquer la ressource, il est utile d'utiliser une redirection vers la vraie URL (canonique).

Un alias de domaine peut être fait pour plusieurs raisons:

- Élargir la portée de votre site. Un cas courant est celui où votre site se trouve sous le domaine `www.example.com` et où l'accès à vos pages à partir de `example.com` devrait également être possible. Dans ce cas, des redirections vers `www.example.com` sont mises en place, pour les pages de `example.com`. Vous pouvez également fournir des noms synonymes couramment utilisés ou des fautes de frappe fréquentes de vos noms de domaine.
- Passer à un autre domaine. Par exemple, votre société a été renommée et lorsqu'on recherche l'ancien nom, vous voulez que les gens habitués à l'ancien site Web de la société vous trouvent sous le nouveau nom.
- Forcer HTTPS. Les requêtes vers la version HTTP non sécurisée de votre site seront redirigées vers la version HTTPS de votre site.

### Maintenir les liens en vie

Lorsque vous restructurez des sites Web, les URL des ressources changent. Même si vous pouvez mettre à jour les liens internes de votre site Web pour qu'ils correspondent au nouveau schéma de nommage, vous n'avez aucun contrôle sur les URL utilisées par les ressources externes. Vous ne voulez pas briser ces liens, car ils vous apportent des utilisateurs précieux (et aident votre référencement), donc vous configurez des redirections depuis les anciennes URL vers les nouvelles.

> **Note :** Même si cette technique fonctionne également pour les liens internes, vous devriez éviter d'avoir des redirections internes. Une redirection a un coût significatif sur les performances (car une requête HTTP supplémentaire est faite) et si vous pouvez l'éviter en corrigeant les liens internes, vous devez corriger ces liens.

### Réponses temporaires aux requêtes non sécurisées

Les requêtes {{Glossary("safe", "Unsafe")}} modifient l'état du serveur et l'utilisateur ne devrait pas les rejouer par inadvertance. Typiquement, vous ne voulez pas que vos utilisateurs renvoient des requêtes {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} ou {{HTTPMethod("DELETE")}}. Si vous ne vous contentez que d'envoyer la réponse à la suite de cette requête, un simple clic sur le bouton de rechargement (éventuellement après un message de confirmation), renvoie la demande.

Dans ce cas, le serveur peut renvoyer une réponse {{HTTPStatus("303")}} (See Other) qui contiendra les bonnes informations, mais si le bouton de rechargement est pressé, seule cette page est réaffichée, sans rejouer les demandes non sécurisées.

### Réponses temporaires aux longues requêtes

Certaines requêtes peuvent nécessiter plus de temps sur le serveur comme parfois des requêtes {{HTTPHeader("DELETE")}} qui sont planifiés pour un traitement ultérieur. Dans ce cas, la réponse est un {{HTTPStatus("303")}} (See Other) qui renvoie à une page indiquant que l'action a été programmée, et informe éventuellement de l'avancement de l'action, ou permet de l'annuler.

## Configuration des redirections dans les serveurs les plus courants

### Apache

Les redirections peuvent être définies soit dans le fichier de configuration du serveur, soit dans le fichier `.htaccess` de chaque répertoire.

Le module [mod_alias](https://httpd.apache.org/docs/current/mod/mod_alias.html) a des directives `Redirect` et `RedirectMatch` qui définissent une réponse {{HTTPStatus("302")}} (par défaut):

    <VirtualHost *:80>
    	ServerName example.com
    	Redirect / http://www.example.com
    </VirtualHost>

L'URL `http://example.com/` sera redirigée vers `http://www.example.com/`, ainsi que les fichiers ou répertoires qui s'y trouvent (`http://example.com/index.html` sera redirigée vers `http://www.example.com/index.html`)

`RedirectMatch` fait la même chose mais prend une expression régulière pour définir une liste d'URLs concernées:

    RedirectMatch ^/images/(.*)$ http://images.example.com/$1

Tous les documents dans le répertoire `images/` seront redirigés vers un autre domaine.

Si vous ne souhaitez pas configurer une redirection temporaire, un paramètre supplémentaire (soit le code d'état HTTP à utiliser, soit le mot clé `permanent`) peut être utilisé pour configurer un autre type de redirection:

    Redirect permanent / http://www.example.com
    Redirect 301 / http://www.example.com

Le module [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) peut également être utilisé pour créer des redirections. Il est plus flexible, mais un peu plus complexe à utiliser.

### Nginx

Dans Nginx, vous créez un bloc `server` spécifique pour le contenu que vous voulez rediriger:

    server {
    	listen 80;
    	server_name example.com;
    	return 301 $scheme://www.example.com$request_uri;
    }

Pour appliquer une redirection pour un dossier ou un sous-ensemble de pages uniquement, utilisez la directive `rewrite`:

    rewrite ^/images/(.*)$ http://images.example.com/$1 redirect;
    rewrite ^/images/(.*)$ http://images.example.com/$1 permanent;

### IIS

Dans IIS, vous devez utiliser l'élément [`<httpRedirect>`](https://www.iis.net/configreference/system.webserver/httpredirect) pour configurer les redirections.

## Boucles de redirection

Les boucles de redirection se produisent lorsque les redirections se succèdent en suivant celle déjà effectuée. En d'autres termes, il y a une boucle qui ne terminera jamais et aucune page ne sera finalement trouvée.

La plupart du temps, il s'agit d'un problème de serveur, et si le serveur ne peut pas le détecter, il renvoie le message {{HTTPStatus("500")}} `Internal Server Error`. Si vous rencontrez une telle erreur peu après avoir modifié une configuration de serveur, il s'agit probablement d'une boucle de redirection.

Parfois, le serveur ne le détecte pas : une boucle de redirection peut s'étendre sur plusieurs serveurs qui n'ont pas une vue globale de ce qui se passe. Dans ce cas, les navigateurs le détecteront et afficheront un message d'erreur. Firefox affichera:

    Firefox a détecté que le serveur redirige la demande pour cette adresse d'une manière qui n'aboutira pas.

tandis que Chrome affichera:

    Cette page Web présente une boucle de redirection

Dans les deux cas, l'utilisateur ne peut pas faire grand-chose (à moins qu'une corruption ne se produise de son côté, comme une inadéquation du cache ou des cookies).

Il est important d'éviter les boucles de redirection car elles perturbent complètement l'expérience utilisateur.
