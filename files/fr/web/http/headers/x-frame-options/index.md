---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
tags:
  - HTTP
  - Réponse
  - Sécurité
  - en-tête
translation_of: Web/HTTP/Headers/X-Frame-Options
---
{{HTTPSidebar}}

L'en-tête de réponse [HTTP](/fr/docs/Web/HTTP) **`X-Frame-Options`** peut être utilisé afin d'indiquer si un navigateur devrait être autorisé à afficher une page au sein d'un élément {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} ou {{HTMLElement("object")}}. Les sites peuvent utiliser cet en-tête afin d'éviter les attaques de _{{interwiki("wikipedia", "clickjacking")}}_ pour s'assurer que leur contenu ne soit pas embarqués dans d'autres sites.

Ce complément de sécurité est uniquement valable lorsque l'utilisateur final visite le document avec un navigateur prenant en charge `X-Frame-Options`.

> **Note :** L'en-tête {{HTTPHeader("Content-Security-Policy")}} possède une directive [`frame-ancestors`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) qui [supplante](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options) cet en-tête pour les navigateurs compatibles.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>En-tête de réponse</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossaire/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Il existe deux directives pour `X-Frame-Options` :

    X-Frame-Options: deny
    X-Frame-Options: sameorigin

### Directives

Si on utilise `deny`, le chargement de la page dans une _frame_ échouera sur un site tiers mais aussi sur un site de la même origine. En revanche, si on utilise `sameorigin`, on peut toujours utiliser le document dans une _frame_ si celle-ci partage la même origine.

- `deny`
  - : La page ne peut pas être affichée dans une _frame_, quand bien même un site tiers tenterait de la charger.
- `sameorigin`
  - : La page ne peut être affichée que dans une _frame_ avec une origine qui est la même que la page elle-même. La spécification laisse le choix au navigateur de décider si cela s'applique au niveau le plus haut, au conteneur parent ou à l'ensemble de la chaîne des _frames_ potentiellement imbriquées. Il est parfois avancé que cette option n'est pas très utile à moins que l'ensemble des ancêtres partage la même origine (cf. {{bug(725490)}}). Voir aussi le tableau de compatibilité ci-après pour plus de détails sur la prise en charge de cette directive.
- `allow-from uri` _(obsolète)_
  - : Une directive obsolète qui ne fonctionne plus dans les navigateurs récents et qui ne doit donc plus être utilisée. Pour les navigateurs historiques, cette directive permettait d'indiquer une origine via une URI afin d'autoriser l'affichage du document dans les _frames_ chargées depuis cette origine. Pour les anciennes versions de Firefox, on a le même problème qu'avec `sameorigin` : il n'y a pas de vérifications des différents ancêtres pour voir s'ils partagent la même origine. À la place, on utilisera la directive `frame-ancestors` de l'en-tête {{HTTPHeader("Content-Security-Policy")}}.

## Exemples

> **Note :** La balise `<meta>` est inutile ici ! `<meta http-equiv="X-Frame-Options" content="deny">` n'aura aucun effet et mieux vaut donc ne pas l'utiliser.

### Configurer Apache

On peut configurer Apache afin d'envoyer l'en-tête `X-Frame-Options` pour toutes les pages. Dans la configuration, on ajoutera :

    Header always set X-Frame-Options "sameorigin"

Si on veut utiliser la valeur `deny`, on pourra utiliser ceci dans la configuration :

    Header set X-Frame-Options "deny"

### Configurer NGINX

Avec NGINX, on pourra ajouter la ligne suivante à la configuration HTTP, serveur ou à la configuration de l'emplacement (_location_) :

    add_header X-Frame-Options sameorigin always;

### Configurer IIS

Pour IIS, on complètera le fichier `Web.config` :

```xml
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="sameorigin" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

### Configurer HAProxy

Pour HAProxy, on ajoutera la ligne suivante à la configuration du _front_, du _listen_ ou du _backend_ :

    rspadd X-Frame-Options:\ sameorigin

Dans les versions plus récentes, voici la forme équivalente :

    http-response set-header X-Frame-Options sameorigin

### Configurer Express / Utiliser frameguard en Node.js

Si on utilise Express, on pourra utiliser le module [helmet](https://helmetjs.github.io/) qui tire parti de [frameguard](https://helmetjs.github.io/docs/frameguard/) afin de régler cet en-tête :

```js
const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: "sameorigin" }));
```

On pourra également utiliser [frameguard](https://helmetjs.github.io/docs/frameguard/) directement :

```js
const frameguard = require('frameguard')
app.use(frameguard({ action: 'sameorigin' }))
```

## Spécifications

| Spécification        | Titre                               |
| -------------------- | ----------------------------------- |
| {{RFC("7034")}} | _HTTP Header Field X-Frame-Options_ |

## Compatibilité des navigateurs

{{Compat("http.headers.X-Frame-Options")}}

## Voir aussi

- [`frame-ancestors`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) lié à la configuration de la stratégie CSP via {{HTTPHeader("Content-Security-Policy")}}
