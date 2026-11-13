---
title: En-tête X-Frame-Options
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

> [!NOTE]
> Pour des options plus complètes que celles offertes par cet en-tête, voir la directive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} dans un en-tête {{HTTPHeader("Content-Security-Policy")}}.

{{Glossary("response Header", "L'en-tête de réponse")}} HTTP **`X-Frame-Options`** peut être utilisé afin d'indiquer si un navigateur doit être autorisé à afficher le document dans un {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} ou {{HTMLElement("object")}}. Les sites peuvent utiliser cet en-tête afin d'éviter les attaques _[d'usurpation de clic](https://en.wikipedia.org/wiki/Clickjacking)_ et certaines [fuites inter-sites](/fr/docs/Web/Security/Attacks/XS-Leaks), en s'assurant que leur contenu n'est pas intégré dans d'autres sites.

Si cet en-tête n'est pas envoyé, et que le site web n'a pas mis en place d'autres mécanismes pour restreindre l'intégration (comme la directive CSP {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}), alors le navigateur permet à d'autres sites d'intégrer ce document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Directives

- `DENY`
  - : Le document ne peut pas être chargé dans un cadre, quelle que soit son origine (l'intégration à la fois de la même origine et d'origines croisées est bloquée).
- `SAMEORIGIN`
  - : Le document ne peut être intégré que si tous les cadres ancêtres ont la même {{Glossary("origin", "origine")}} que la page elle-même.
- `ALLOW-FROM origin` {{Deprecated_Inline}}
  - : Il s'agit d'une directive obsolète. Les navigateurs modernes qui rencontrent des en-têtes de réponse avec cette directive ignorent complètement l'en-tête. L'en-tête HTTP {{HTTPHeader("Content-Security-Policy")}} possède une directive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} que vous devez utiliser à la place.

## Exemples

> [!WARNING]
> Définir `X-Frame-Options` dans l'élément HTML {{HTMLElement("meta")}} (par exemple, `<meta http-equiv="X-Frame-Options" content="deny">`) n'a aucun effet. `X-Frame-Options` n'est appliqué qu'avec les en-têtes HTTP, comme le montrent les exemples ci-dessous.

### Configurer Apache

Pour configurer Apache afin d'envoyer l'en-tête `X-Frame-Options` pour toutes les pages, ajoutez ceci à la configuration de votre site&nbsp;:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Pour configurer Apache afin de définir `X-Frame-Options` sur `DENY`, ajoutez ceci à la configuration de votre site&nbsp;:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Configurer Nginx

Pour configurer Nginx afin d'envoyer l'en-tête `X-Frame-Options`, ajoutez ceci soit à la configuration HTTP, serveur ou à la configuration de l'emplacement&nbsp;:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Pour définir l'en-tête `X-Frame-Options` sur `DENY`, utilisez&nbsp;:

```nginx
add_header X-Frame-Options DENY always;
```

### Configurer IIS

Pour configurer IIS afin d'envoyer l'en-tête `X-Frame-Options`, ajoutez ceci au fichier `Web.config` de votre site&nbsp;:

```xml
<system.webServer>
  …
  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>
  …
</system.webServer>
```

Pour plus d'information, voir [l'article du support technique Microsoft sur la mise en place de cette configuration à l'aide du Gestionnaire IIS <sup>(angl.)</sup>](https://support.microsoft.com/en-us/security/mitigating-framesniffing-with-the-x-frame-options-header) depuis son interface utilisateur.

### Configurer HAProxy

Pour configurer HAProxy afin qu'il envoie l'en-tête `X-Frame-Options`, ajoutez la ligne suivante à la configuration de votre partie avant du site (site), écouteur ou partie arrière du site (serveur)&nbsp;:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Dans les versions plus récentes, utilisez&nbsp;:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Configurer Express

Pour définir `X-Frame-Options` sur `SAMEORIGIN` en utilisant [Helmet <sup>(angl.)</sup>](https://helmet.js.org/), ajoutez ce qui suit à la configuration de votre serveur&nbsp;:

```js
import helmet from "helmet";

const app = express();
app.use(
  helmet({
    xFrameOptions: { action: "sameorigin" },
  }),
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La directive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} de {{HTTPHeader("Content-Security-Policy")}}
- [Défenses contre l'usurpation de clic - IEBlog <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Lutter contre le détournement de clic avec l'en-tête `X-Frame-Options` - IEInternals <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
