---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
translation_of: Web/HTTP/Headers/X-Frame-Options
browser-compat: http.headers.X-Frame-Options
---
{{HTTPSidebar}}

L'en-tête de réponse [HTTP](/fr/docs/Web/HTTP) **`X-Frame-Options`** peut être utilisé afin d'indiquer si un navigateur devrait être autorisé à afficher une page au sein d'un élément [`<frame>`](/fr/docs/Web/HTML/Element/frame), [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), [`<embed>`](/fr/docs/Web/HTML/Element/embed) ou [`<object>`](/fr/docs/Web/HTML/Element/object). Les sites peuvent utiliser cet en-tête afin d'éviter les attaques de _[clickjacking](https://fr.wikipedia.org/wiki/Clickjacking)_ (ou «&nbsp;détournement de clic&nbsp;») pour s'assurer que leur contenu ne soit pas embarqué dans d'autres sites.

Ce complément de sécurité est uniquement valable lorsque l'utilisateur final visite le document avec un navigateur prenant en charge `X-Frame-Options`.

> **Note :** L'en-tête [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) possède une directive [`frame-ancestors`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) qui [supplante](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options) cet en-tête pour les navigateurs compatibles.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossary/Response_header">En-tête de réponse</a></td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossary/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Il existe deux directives pour `X-Frame-Options`&nbsp;:

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Directives

Si on utilise `DENY`, le chargement de la page dans une _frame_ échouera sur un site tiers mais aussi sur un site de la même origine. En revanche, si on utilise `SAMEORIGIN`, on peut toujours utiliser le document dans une _frame_ si celle-ci partage la même origine.

- `DENY`
  - : La page ne peut pas être affichée dans une _frame_, quand bien même un site tiers tenterait de la charger.
- `SAMEORIGIN`
  - : La page ne peut être affichée que dans une _frame_ avec une origine qui est la même que la page elle-même. La spécification laisse le choix au navigateur de décider si cela s'applique au niveau le plus haut, au conteneur parent ou à l'ensemble de la chaîne des _frames_ potentiellement imbriquées. Il est parfois avancé que cette option n'est pas très utile à moins que l'ensemble des ancêtres partage la même origine (cf. [bug 725490](https://bugzilla.mozilla.org/show_bug.cgi?id=725490)). Voir aussi [le tableau de compatibilité](#compatibilité_des_navigateurs) ci-après pour plus de détails sur la prise en charge de cette directive.
- `ALLOW-FROM uri` {{deprecated_inline}}
  - : Une directive obsolète qui ne fonctionne plus dans les navigateurs récents et qui ne doit donc plus être utilisée. Pour les navigateurs historiques, cette directive permettait d'indiquer une origine via une URI afin d'autoriser l'affichage du document dans les _frames_ chargées depuis cette origine. Pour les anciennes versions de Firefox, on a le même problème qu'avec `SAMEORIGIN`&nbsp;: il n'y a pas de vérifications des différents ancêtres pour voir s'ils partagent la même origine. À la place, on utilisera la directive [`frame-ancestors`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) de l'en-tête [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy).

## Exemples

> **Note :** La balise `<meta>` est inutile ici&nbsp;! `<meta http-equiv="X-Frame-Options" content="deny">` n'aura aucun effet et mieux vaut donc ne pas l'utiliser. L'en-tête `X-FRAME-OPTIONS` ne fonctionne que si vous l'utilisez dans la configuration HTTP comme dans les exemples ci-dessous.

### Configurer Apache

On peut configurer Apache afin d'envoyer l'en-tête `X-Frame-Options` pour toutes les pages. Dans la configuration, on ajoutera&nbsp;:

```
Header always set X-Frame-Options "SAMEORIGIN"
```

Si on veut utiliser la valeur `DENY`, on pourra utiliser ceci dans la configuration&nbsp;:

```
Header set X-Frame-Options "DENY"
```

### Configurer nginx

Avec nginx, on pourra ajouter la ligne suivante à la configuration HTTP, serveur ou à la configuration de l'emplacement (<i lang="en">location</i>)&nbsp;:

```
add_header X-Frame-Options SAMEORIGIN always;
```

### Configurer IIS

Pour IIS, ajoutez ce qui suit au fichier `Web.config` de votre site&nbsp;:

```xml
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

Consultez [cet article Microsoft](https://support.microsoft.com/fr-fr/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79) pour configurer IIS via l'interface du gestionnaire IIS (<i lang="en">IIS manager</i>).

### Configurer HAProxy

Pour HAProxy, on ajoutera la ligne suivante à la configuration du _frontend_, du _listen_ ou du _backend_&nbsp;:

```
rspadd X-Frame-Options:\ SAMEORIGIN
```

Dans les versions plus récentes, voici la forme équivalente&nbsp;:

```
http-response set-header X-Frame-Options SAMEORIGIN
```

### Configurer Express

Si on utilise Express, on pourra utiliser le module [helmet](https://helmetjs.github.io/) qui tire parti de [frameguard](https://helmetjs.github.io/docs/frameguard/) afin de régler l'en-tête `X-Frame-Options`. Ajoutez ceci à la configuration serveur&nbsp;:

```js
const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));
```

On pourra également utiliser [frameguard](https://helmetjs.github.io/docs/frameguard/) directement&nbsp;:

```js
const frameguard = require('frameguard')
app.use(frameguard({ action: 'SAMEORIGIN' }))
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`frame-ancestors`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) lié à la configuration de la stratégie CSP via [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [L'en-tête HTTP `X-Frame-Options` - RFC 7034 (en anglais)](https://datatracker.ietf.org/doc/html/rfc7034)
- [Protéger contre le détournement de clic - IEBlog (en anglais)](https://docs.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Lutter contre le détournement de clic avec l'en-tête `X-Frame-Options` - IEInternals (en anglais)](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
