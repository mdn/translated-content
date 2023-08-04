---
title: Web App Manifest
slug: Web/Manifest
---

O manifesto do aplicativo web fornece informações sobre uma aplicação (como nome, autor, icone, e descrição) em um arquivo de texto. O propósito do manifesto é instalar aplicações web na tela inicial de um aparelho, propiciando aos usuários um acesso mais rápido e uma experiência enriquecida.

Os manifestos dos aplicativos web fazem parte de um acervo de tecnologias de rede chamadas [aplicativos web progressivos](/pt-BR/docs/Web/Progressive_web_apps), sendo estes aplicativos web que podem ser instalados na tela inicial de um aparelho sem obrigar um usuário a passar por uma loja de aplicativos, dispondo também de outros superpoderes como estar disponíveis offline e apresentando aos usuários notificações push quando houverem mudanças de conteúdo do aplicativo.

## Implementando um manifesto

Manifesto de aplicativos web são implementados em suas páginas HTML usando uma etiqueta de link no cabeçalho do documento:

```html
<link rel="manifest" href="/manifest.webmanifest" />
```

> **Nota:** A extensão `.webmanifest` está especificada na sessão de [Media type registration](https://w3c.github.io/manifest/#media-type-registration) da especificação, mas no geral os navegadores suportam manifestos em outras extensões apropriadas como `.json`

> **Nota:** Se o manifesto precisa de credenciais para ser buscado, você [deve](https://github.com/w3c/manifest/issues/186#issuecomment-43939505) adicionar o atributo [`crossorigin`](/pt-BR/docs/Web/HTML/CORS_settings_attributes) mesmo que o arquivo de manifesto esteja na mesma origem da página atual.

## Exemplo de manifesto

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A simply readable Hacker News app.",
  "icons": [
    {
      "src": "images/touch/homescreen48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```

## Métodos

Manifest can contain the following keys:

{{ListSubpages("/pt-BR/docs/Web/Manifest")}}

### background_color

Define a "cor de fundo" esperada para o website. Este valor repete o que já é disponível no CSS do site, mas pode ser usada por navegadores para desenhar cor de um atalho quando o manifesto estiver disponível antes que a folha de estilo (stylesheet) ter carregado. Isso cria uma transição suave entre a execução do aplicativo e o conteúdo do site.

```json
"background_color": "red"
```

> **Nota:** O membro `background_color` tem o único intuito de melhorar a experiência de usuário enquanto o site apontado está carregando, e não deve ser usado pelo agente de usuário como o {{cssxref("background-color", "background color")}} quando a folha de estilo do aplicativo web progressivo (PWA) estiver disponível.

### description

Fornece uma descrição geral do que a aplicação faz.

```json
"description": "O aplicativo que ajuda você a encontrar a melhor comida na cidade!"
```

### dir

Especifica a direção primário do texto para os membros `name`, `short_name`, e `description`. Junto com o membro `lang` , ajuda a mostrar corretamente idiomas escritos da direita para esquerda.

```json
"dir": "rtl",
"lang": "ar",
"short_name": "أنا من التطبيق!"
```

Pode ter um dos valores a seguir:

- `ltr` (left-to-right)
- `rtl` (right-to-left)
- `auto` (hints to the browser to use the Unicode bidirectional algorithm to make a best guess about the text's direction.)

> **Nota:** When the value is omitted, it defaults to `auto`.

### display

Define o modo de exibição preferido do desenvolvedor para a aplicação.

```json
"display": "standalone"
```

Valid values are:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Member</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>sizes</code></td>
      <td>A string containing space-separated image dimensions.</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        The path to the image file. If <code>src</code> is a relative URL, the
        base URL will be the URL of the manifest.
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        A hint as to the media type of the image. The purpose of this member is
        to allow a user agent to quickly ignore images of media types it does
        not support.
      </td>
    </tr>
    <tr>
      <td><code>purpose</code></td>
      <td>
        <p>
          Defines the purpose of the image, for example that the image is
          intended to serve some special purpose in the context of the host OS
          (i.e., for better integration).
        </p>
        <p>
          The
          <a href="https://w3c.github.io/manifest/#purpose-member"
            >purpose member</a
          >
          can have the following values:
        </p>
        <ul>
          <li>
            "<strong>badge</strong>": A user agent can present this icon where
            space constraints and/or color requirements differ from those of the
            application icon.
          </li>
          <li>
            "<strong>maskable</strong>": The image is designed with
            <a href="https://w3c.github.io/manifest/#icon-masks"
              >icon masks and safe zone</a
            >
            in mind, such that any part of the image that is outside the safe
            zone can safely be ignored and masked away by the user agent.
          </li>
          <li>
            "<strong>any</strong>": The user agent is free to display the icon
            in any context (this is the default value).
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> **Nota:** You can selectively apply CSS to your app based on the display mode, using the [display-mode](/docs/Web/CSS/@media/display-mode) media feature. This can be used to provide a consistent user experience between launching a site from an URL and launching it from a desktop icon.

### icons

Specifies an array of image objects that can serve as application icons in various contexts. For example, they can be used to represent the web application amongst a list of other applications, or to integrate the web application with an OS's task switcher and/or system preferences.

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon/hd_hi.svg",
    "sizes": "72x72"
  }
]
```

Objetos de imagens podem conter os seguintes valores:

| Member  | Description                                                                                                                                               |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sizes` | A string containing space-separated image dimensions.                                                                                                     |
| `src`   | The path to the image file.                                                                                                                               |
| `type`  | A hint as to the media type of the image.The purpose of this member is to allow a user agent to quickly ignore images of media types it does not support. |

### lang

Specifies the primary language for the values in the `name` and `short_name` members. This value is a string containing a single language tag.

```json
"lang": "en-US"
```

### name

Provides a human-readable name for the application as it is intended to be displayed to the user, for example among a list of other applications or as a label for an icon.

```json
"name": "Google I/O 2015"
```

### orientation

Defines the default orientation for all the web application's top level {{Glossary("Browsing context", "browsing contexts")}}.

```json
"orientation": "portrait-primary"
```

Orientation pode ser um dos seguintes valores:

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

### prefer_related_applications

Specifies a boolean value that hints for the user agent to indicate to the user that the specified related applications (see below) are available, and recommended over the web application. This should only be used if the related native apps really do offer something that the web application can't do.

```json
"prefer_related_applications": false
```

> **Nota:** If omitted, the value defaults to `false`.

### related_applications

Specifies an array of "application objects" representing native applications that are installable by, or accessible to, the underlying platform — for example a native Android application obtainable through the Google Play Store. Such applications are intended to be alternatives to the web application that provide similar or equivalent functionality — like the native app version of the web app.

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }]
```

Application objects may contain the following values:

| Member     | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `platform` | The platform on which the application can be found.                 |
| `url`      | The URL at which the application can be found.                      |
| `id`       | The ID used to represent the application on the specified platform. |

### scope

Defines the navigation scope of this web application's application context. This basically restricts what web pages can be viewed while the manifest is applied. If the user navigates the application outside the scope, it returns to being a normal web page.

```json
"scope": "/myapp/"
```

### short_name

Provides a short human-readable name for the application. This is intended for use where there is insufficient space to display the full name of the web application.

```json
"short_name": "I/O 2015"
```

### start_url

Specifies the URL that loads when a user launches the application from a device.

```json
"start_url": "./?utm_source=web_app_manifest"
```

### theme_color

Defines the default theme color for an application. This sometimes affects how the application is displayed by the OS (e.g., on Android's task switcher, the theme color surrounds the application).

```json
"theme_color": "aliceblue"
```

## Splash screens

In Chrome 47 and later, a splash screen is displayed for a web application launched from a home screen. This splashscreen is auto-generated using properties in the web app manifest, specifically: `name`, `background_color`, and the icon in the `icons` array that is closest to 128dpi for the device.

## Mime type

Manifests should be served using the `application/manifest+json` MIME type. However, it is optional to do so.

## Especificação

| Especificação            | Status                | Comentário         |
| ------------------------ | --------------------- | ------------------ |
| {{SpecName('Manifest')}} | {{Spec2('Manifest')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("html.manifest")}}
