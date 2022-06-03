---
title: Manifeste des applications web
slug: Web/Manifest
tags:
  - Applications
  - Manifeste
translation_of: Web/Manifest
---
Le manifeste d'une application web fournit des informations concernant celle-ci (comme son nom, son auteur, une icône et une description) dans un document texte JSON. Le but du manifeste est d'installer des applications sur l'écran d'accueil d'un appareil, offrant aux utilisateurs un accès plus rapide et une expérience plus riche.

Les manifestes font partie d'un ensemble de technologies appelées les [applications web progressives](/fr/docs/Web/Apps/Progressive) (_progressive web apps_). Il s'agit d'applications web qui peuvent être installées sur la page d'accueil d'un appareil sans que l'utilisateur ait à se rendre dans une boutique d'applications. De plus, une fois installées, elles peuvent être utilisées sans connexion internet et sont capables de recevoir des notifications _push._

## Déployer un manifeste

Les manifestes des applications Web sont déployés dans vos pages HTML en utilisant une balise lien (_link_) dans l'entête (_head_) de votre document :

```html
<link rel="manifest" href="/manifest.webmanifest">
```

## Exemple de manifeste

```json
{
  "name": "Google I/O 2015",
  "short_name": "I/O 2015",
  "start_url": "./?utm_source=web_app_manifest",
  "display": "standalone",
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{
    "platform": "web"
  }, {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.google.samples.apps.iosched"
  }]
}
```

## Membres

### `background_color`

Définit la couleur de fond attendue pour l'application web. Cette valeur répète ce qui est déjà disponible dans la feuille de style de l'application, mais peut être utilisée par le navigateur pour dessiner le fond de l'application web quand le manifeste est disponible avant que la feuille de style ne soit chargée. Cela permet une transition douce pendant le lancement de l'application web et le chargement du contenu de l'application.

```json
"background_color": "red"
```

> **Note :** Le membre Background_color est uniquement destiné à améliorer l'expérience de l'utilisateur alors qu'une application Web est en cours de chargement et ne doit pas être utilisé par l'agent utilisateur comme couleur d'arrière-plan lorsque la feuille de style de l'application Web est disponible

### `description`

Fournit une description générale de ce que fait l'application web.

```json
"description": "L'application qui vous aide à trouver la meilleure nourriture en ville !"
```

### `dir`

Spécifie la direction du texte pour le nom, le nom court et les membres de description. Ensemble avec le membre lang, il peut aider à afficher correctement les langues de droite à gauche.

```json
"dir": "rtl",
"lang": "ar",
"short_name": "أنا من التطبيق!"
```

Il peut contenir l'une des valeurs suivantes :

- `ltr` (de gauche à droite)
- `rtl` (de droite à gauche)
- `auto` (conseille au navigateur d'utiliser l'algorithme bidirectionnel Unicode pour mieux comprendre la direction du texte.)

> **Note :** si la valeur est omise, c'est auto par défaut.

### `display`

Définit le mode d'affichage préféré du développeur pour l'application web.

```json
"display": "standalone"
```

Les valeurs valides sont :

| Mode d'affichage | Description                                                                                                                                                                                                                                                                                                                                                                             | Affichage de rattrapage |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `fullscreen`     | Toute la zone d'affichage disponible est utilisée et aucun agent utilisateur {{Glossary("chrome")}} n'est montré.                                                                                                                                                                                                                                                                 | `standalone`            |
| `standalone`     | L'application va ressembler à une application autonome et se comporter comme telle. Cela peut inclure que l'application ait une fenêtre différente, sa propre icône dans le lanceur d'applications, etc. Dans ce mode, l'agent utilisateur va exclure les élements d'interface qui permettent de contrôler la navigation mais peut inclure d'autres éléments comme une barre de statut. | `minimal-ui`            |
| `minimal-ui`     | L'application va ressembler et se comporter comme une application autonome, mais elle aura quelques élements d'interface permettant de contrôler la navigation. Les éléments varient en fonction du navigateur web.                                                                                                                                                                     | `browser`               |
| `browser`        | L'application s'ouvre dans un nouvel onglet ou une nouvelle fenêtre du navigateur, en fonction du navigateur et de la plateforme. C'est la valeur par défaut.                                                                                                                                                                                                                           | (None)                  |

> **Note :** Vous pouvez appliquer les CSS de manière séléctive pour votre application en fonction du mode d'affichage en utilisant la fonction [display-mode](/docs/Web/CSS/@media/display-mode). Cela peut être utilisé pour fournir une expérience utilisateur cohérente entre le lancement à partir d'une URL et le lancement à partir d'une icône de bureau.

### `icons`

Un ensemble d'images qui peuvent servir d'icônes pour l'application dans différents contextes. Par exemple, elles peuvent être utilisées pour réprésenter l'application web dans une liste d'autres applications, ou pour intégrer l'application web dans les tâches d'un OS et/ou dans les préférences du système.

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },{
    "src": "icon/lowres",
    "sizes": "48x48"
  },{
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },{
    "src": "icon/hd_hi.svg",
    "sizes": "72x72",
    "density": 2
  }]
```

Les objets image peuvent contenir les valeurs suivantes :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><p>Membre</p></th>
      <th scope="col"><p>Description</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>sizes</code></td>
      <td>
        Une chaîne de caractères contenant les dimensions des images, séparées
        par des espaces.
      </td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        Le chemin du fichier image. Si <code>src</code> est une URL relative,
        l'URL de base sera celle du manifeste.
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        Indication concernant le type de média de l'image. L'objectif de ce
        membre est de permettre à l'agent utilisateur d'ignorer les images des
        types de média qu'il ne supporte pas.
      </td>
    </tr>
  </tbody>
</table>

### `lang`

Définit la langue principale pour les valeurs des membres `name` et `short_name`. Cette valeur est une chaîne de caractères contenant une balise de langue unique

```json
"lang": "fr"
```

### `name`

Fournit un nom pour l'application, lisible pour un humain, car il est destiné à être affiché à l'utilisateur, par exemple parmi une liste d'autres applications ou comme étiquette d'une icône.

```json
"name": "Google I/O 2017"
```

### `orientation`

Définit l'orientation par défaut pour tout le premier niveau d'applications web {{Glossary("Browsing context", "browsing contexts")}}.

```json
"orientation": "portrait-primary"
```

L'orientation peut être l'une des valeurs suivantes:

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

### `prefer_related_applications`

Une valeur boléenne qui indique à l'agent utilisateur si une application liée doit être préférée à l'application web. Cela ne devrait être utilisé que si les applications natives concernées offrent vraiment quelque chose que l'application Web ne peut pas faire.

```json
"prefer_related_applications": "false"
```

> **Note :** Si elle est omise, la valeur par défaut est "false".

### `related_applications`

Spécifie un ensemble d'objets d'application représentant des applications natives installables par la plate-forme sous-jacente ou accessibles à cette plate-forme, par exemple une application Android native pouvant être obtenue via Google Play Store. De telles applications sont destinées à être des alternatives à l'application Web qui fournissent une fonctionnalité similaire ou équivalente, comme la version native de l'application Web.

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789",
  }]
```

Les objets d'application peuvent contenir les valeurs suivantes:

| Membre     | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `platform` | La plateforme sur laquelle l'application peut être trouvée.              |
| `url`      | L'URL à laquelle l'application peut être trouvée.                        |
| `id`       | L'ID utilisé pour représenter l'application sur la plateforme spécifiée. |

### `scope`

Definit le "scope" de navigation du contexte applicatif de cette application web. Ceci limite essentiellement les pages Web pouvant être visualisées pendant que le manifeste est appliqué. Si l'utilisateur navigue en dehors du "scope" de l'application, il revient à une page Web normale.

Si le "scope" est une URL relative, l'URL de base est celle du manifeste.

```json
"scope": "/myapp/"
```

### `short_name`

Un nom court pour l'application web, compréhensible pour un humain. Il est destiné à être utilisé quand il n'y a pas suffisamment de place disponible pour afficher le nom complet de l'application.

```json
"short_name": "I/O 2017"
```

### `start_url`

Spécifie l'URL qui se charge lorsque l'utilisateur lance une application à partir d'un périphérique. Si elle est donnée comme une URL relative, l'URL de base sera celle du manifeste

```json
"start_url": "./?utm_source=web_app_manifest"
```

### `theme_color`

Définit la couleur du thème par défaut pour une application. Cela affecte parfois la façon dont l'application est affichée par le système d'exploitation (par exemple, sur le commutateur de tâches d'Android, la couleur du thème entoure l'application).

```json
"theme_color": "aliceblue"
```

## Splash screens

Dans Chrome 47 et supérieur, un écran de lancement (_splashscreen_) est affiché pour une appplication lancée depuis l'écran d'accueil. Cet écran est généré automatiquement en utilisant les propriétés du manifeste de l'application web, particulièrement: `name`, `background_color`, et l'icône du tableau \`icons\`qui est la plus proche de 128dp pour l'appareil.

## Mime type

Les manifestes doivent être servies en utilisant l'`application/manifest+json` MIME type. Cependant, c'est facultatif.

## Spécifications

| Spécification                    | Statut                       | Commentaire         |
| -------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('Manifest')}} | {{Spec2('Manifest')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("html.manifest")}}

## Voir aussi

- [Progressive Web Apps (PWAs)](/fr/docs/Web/Progressive_web_apps)
