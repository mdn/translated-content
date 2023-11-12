---
title: Types MIME
slug: Web/HTTP/Basics_of_HTTP/MIME_types
---

{{HTTPSidebar}}

Le **type Multipurpose Internet Mail Extensions (type MIME)** est un standard permettant d'indiquer la nature et le format d'un document. Il est défini au sein de la [RFC 6838](https://tools.ietf.org/html/rfc6838). L'[Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) est l'organisme officiel responsable du suivi de l'ensemble des types MIME officiels existants. Une liste exhaustive et maintenue est consultable sur la [page Media Types de l'IANA](https://www.iana.org/assignments/media-types/media-types.xhtml).

Les navigateurs utilisent le plus souvent le type MIME et non l'extension d'un fichier pour déterminer la façon dont ils vont traiter ou afficher un document. Il est donc important que les serveurs puissent correctement attacher le type MIME dans l'en-tête de la réponse qu'ils renvoient.

## Syntaxe

### Structure générale

```
type/sous-type
```

La structure d'un type MIME est simple, elle est composée d'un type et d'un sous-type. Les deux chaînes de caractères sont séparées par un `'/'`. Les caractères d'espacement ne sont pas autorisés. Le _type_ représente la catégorie et peut être _particulier_ ou _composé_ lorsqu'il regroupe plusieurs formats. Le _sous-type_ est spécifique à chaque type.

Un type MIME est insensible à la casse mais il s'écrit usuellement en minuscule.

### Types particuliers

```
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/octet-stream
…
```

Les types _particuliers_ indiquent la catégorie d'un document. Les valeurs possibles sont :

| Type          | Description                                                                                                                                           | Exemple de sous-type communément associé                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | Représente n'importe quel document contenant du texte et qui est théoriquement lisible par un utilisateur.                                            | `text/plain`, `text/html`, `text/css, text/javascript`                                                                                          |
| `image`       | Représente n'importe quelle image. Les vidéos ne font pas partie de ce type bien que les images animées tels les GIFs animés) font partie de ce type. | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`                                                                               |
| `audio`       | Représente n'importe quel fichier audio.                                                                                                              | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav`                                                                                    |
| `video`       | Représente n'importe quel fichier vidéo.                                                                                                              | `video/webm`, `video/ogg`                                                                                                                       |
| `application` | Représente n'importe quelle donnée binaire.                                                                                                           | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

`text/plain` doit être utilisé pour tous les documents texte sans sous-type spécifique. De la même façon, les documents binaires sans sous-type ou dont le sous-type est inconnu doivent utiliser `application/octet-stream`.

### Types composés ou _multipart_

```
multipart/form-data
multipart/byteranges
```

Les types composés, aussi appelés types _multipart_ indiquent une catégorie de document qui sont constitués de différents éléments. A l'exception de `multipart/form-data`, utilisé en association avec des [formulaires HTML](/fr/docs/Web/Guide/HTML/Forms) et la méthode {{HTTPMethod("POST")}} et de `multipart/byteranges`, utilisé avec le statut HTTP {{HTTPStatus("206")}} `Partial Content` renvoyant uniquement une sous-partie du document ce qui entraînera vraisemblablement l'apparition d'une fenêtre "Enregistrer sous" étant donné que HTTP ne gère pas ces documents de manière différente et que le navigateur ne saura pas commment afficher ce document incomplet.

## Types MIME utiles pour les développeurs web

### `application/octet-stream`

Il s'agit de la valeur par défaut pour un fichier binaire. Etant donné qu'il signifie _fichier binaire inconnu_ il est probable que les navigateurs ne l'exécutent pas automatiquement et que l'utilisateur ne puisse pas l'exécuter directement dans le navigateur. Le comportement sera alors le même que si l'en-tête {{HTTPHeader("Content-Disposition")}} était présente avec la valeur `attachment` et proposera une invite "Enregistrer sous".

### `text/plain`

Il s'agit de la valeur par défaut pour les fichiers texte. Bien qu'il signifie fichier texte de format inconnu, les navigateurs prendront pour hypothèse qu'ils peuvent l'afficher.

> **Note :** Il est important de noter que `text/plain` ne signifie pas _tous les formats de fichiers textuels_. Si le client s'attend à recevoir un format particulier de données textuelles, il est vraisemblable que le type `text/plain` ne soit pas considéré comme valide à la réception. Par exemple, si le client télécharge un fichier `text/plain` à partir d'un {{HTMLElement("link")}} déclarant des fichiers CSS, ce dernier ne sera pas considéré comme un CSS, le type MIME à utiliser étant `text/css`.

### `text/css`

N'importe quel fichier CSS qui doit être interprété comme pour servir une page web **doit** être de type `text/css`. Bien souvent, les serveurs ne sont pas en mesure de reconnaître les fichiers ayant l'extension `.css` comme étant des fichiers CSS, ces derniers sont donc transmis avec le type MIME `text/plain` ou `application/octet-stream`. Dès lors, les navigateurs ne les considèreront pas comme des fichiers CSS et ils seront ignorés. Il est donc important de servir les fichiers CSS à l'aide du type approprié.

### `text/html`

L'ensemble du contenu HTML doit être renvoyé à l'aide de ce type. Les types MIME pour XHTML (comme `application/xml+html)` ne sont actuellement plus utilisés (HTML5 ayant unifié ces formats).

### Formats d'images

Seuls quelques types MIME associés à des images sont largement reconnus et considérés comme pouvant être utilisé sans risque sur le Web, on peut donc directement les intégrer dans une page web :

| Type MIME       | Format d'image                                        |
| --------------- | ----------------------------------------------------- |
| `image/gif`     | images GIF (compression sans perte, remplacé par PNG) |
| `image/jpeg`    | images JPEG                                           |
| `image/png`     | images PNG                                            |
| `image/svg+xml` | images SVG (images vectorielles)                      |

Il y a un débat quant à l'ajout de WebP (`image/webp`) à cette liste. En effet l'ajout d'un nouveau format mènerait à une augmentation du nombre de cas à gérer et pourrait introduire des problématiques de sécurité, pour ces raisons les constructeurs de navigateurs font preuve de précaution avant de l'intégrer.

D'autres formats d'images peuvent constituer un document web. Par exemple, la plupart des navigateurs web supportent les types des images favicon, le format ICO étant pris en charge à l'aide du type MIME `image/x-icon`.

### Formats audios et vidéos

Comme pour les images, HTML ne définit pas de liste de formats supportés pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}}. Dès lors, seul un ensemble restreint de formats est en mesure d'être utilisé sur le Web. La page [Formats pris en charge par les balises audio et video](/fr/docs/Web/HTML/Supported_media_formats) détaille les codecs et les formats qui peuvent être employés.

Le format MIME de ces fichiers représente généralement le format du conteneur contenant le fichier. Dans le cas du Web, les formats les plus courants sont :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Type MIME</th>
      <th scope="col">Format audio et vidéo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>audio/wave</code><br /><code>audio/wav</code><br /><code
          >audio/x-wav</code
        ><br /><code>audio/x-pn-wav</code>
      </td>
      <td>
        Un fichier audio WAVE. Le codec audio PCM (WAVE codec "1") est souvent
        pris en charge tandis que les autres codecs offrent une prise en charge
        moindre (lorsqu'elle existe).
      </td>
    </tr>
    <tr>
      <td><code>audio/webm</code></td>
      <td>
        Un fichier audio WebM. Les codecs les plus fréquemment associés sont
        Vorbis et Opus.
      </td>
    </tr>
    <tr>
      <td><code>video/webm</code></td>
      <td>
        Un fichier vidéo, pouvant contenir de l'audio, au format WebM. Les
        codecs vidéos VP8 et VP9 sont les plus communs tandis que Vorbis and
        Opus constituent les codecs audios les plus fréquents.
      </td>
    </tr>
    <tr>
      <td><code>audio/ogg</code></td>
      <td>
        Un fichier audio au format OGG. Vorbis est le codec audio le plus
        utilisé pour traiter ce genre de format conteneur.
      </td>
    </tr>
    <tr>
      <td><code>video/ogg</code></td>
      <td>
        Un fichier vidéo, pouvant contenir de l'audio, au format OGG. Theora est
        le codec vidéo habituel pour ce genre de conteneur tandis que Vorbis est
        utilisé pour l'audio.
      </td>
    </tr>
    <tr>
      <td>
        <p><code>application/ogg</code></p>
      </td>
      <td>
        <p>
          Un fichier audio ou vidéo au format OGG. Theora et Vorbis constituent
          respectivement les codecs vidéo et audio souvent utilisés.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### `multipart/form-data`

Le type `multipart/form-data` peut être utilisé lors de l'envoi du contenu d'un [formulaire HTML](/fr/docs/Web/Guide/HTML/Forms) du navigateur vers le serveur. En tant que document composé ou _multipart_ il est constitué de différentes parties délimitées par une frontière (une chaîne de caractères débutant par un tiret double `'--'`). Chaque partie est une entité propre qui possède ses propres en-têtes {{HTTPHeader("Content-Disposition")}} et {{HTTPHeader("Content-Type")}} lorsqu'il s'agit d'un champ permettant de téléverser un fichier. L'en-tête ({{HTTPHeader("Content-Length")}} est ignorée puisque la limite est assurée par la frontière.

```
Content-Type: multipart/form-data; boundary=aChaineDeDélimitation
(en-têtes divers associés à l'ensemble du document)

--aChaineDeDélimitation
Content-Disposition: form-data; name="monFichier"; filename="img.jpg"
Content-Type: image/jpeg

(données)
--aChaineDeDélimitation
Content-Disposition: form-data; name="monChamp"

(données)
--aChaineDeDélimitation
(éléments additionnels)
--aChaineDeDélimitation--
```

Le formulaire suivant :

```html
<form action="http://localhost:8000/" method="post" enctype="multipart/form-data">
  <input type="text" name="monChampTexte">
  <input type="checkbox" name="maCheckBox">Check</input>
  <input type="file" name="monFichier">
  <button>Envoyer le fichier</button>
</form>
```

enverra le message suivant :

```
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="monChampTexte"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="maCheckBox"

sur
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="monFichier"; filename="test.txt"
Content-Type: text/plain

un fichier simple.
-----------------------------8721656041911415653955004498--
```

### `multipart/byteranges`

Le type MIME `multipart/byteranges` est utilisé lors qu'il s'agit d'envoyer une réponse partielle au navigateur. Lorsque le statut {{HTTPStatus("206")}} `Partial Content` est envoyé, ce type MIME sert pour indiquer que le document est constitué de plusieurs parties. Comme les types composés, l'en-tête {{HTTPHeader("Content-Type")}} utilise la directive `boundary` pour définir une chaîne de délimitation. Chaque partie possède son en-tête {{HTTPHeader("Content-Type")}} ainsi que {{HTTPHeader("Content-Range")}} qui spécifie le morceau que cette partie représente.

```
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## De l'importance de définir correctement un type MIME

La plupart des serveurs envoient des ressources de format inconnu et donc utilisent le type par défaut `application/octet-stream`. Pour des considérations de sécurité, les navigateurs n'effectuent pas d'action par défaut pour les ressources de ce type, ce qui oblige l'utilisateur à stocker le fichier sur son dique pour l'utiliser. Voici les erreurs communes de configuration côté serveur pour les formats suivants :

- Les fichiers RAR. Idéalement il faudrait définir le type MIME associé aux fichiers contenus. Ce n'est généralement pas possible étant donné que le type de ces fichiers est vraisemblablement inconnu du serveur, d'autre part, il est possible que plusieurs formats soient présents dans le fichier RAR. On pourra alors configurer le serveur pour envoyer le type MIME `application/x-rar-compressed` bien qu'il soit probable qu'aucune action par défaut pour ce type MIME n'ait été définie côté utilisateur.
- Fichiers audios et vidéos. Seules les ressources associées à un type MIME approprié seront reconnues et lues dans les éléments {{ HTMLElement("video")}} ou {{HTMLElement("audio")}}. Vérifiez que vous utilisez [un format correct pour les fichiers audios et vidéos](/fr/docs/Web/HTML/Supported_media_formats).
- Les fichiers au format propriétaire. Il est nécessaire d'être vigilent lorsque l'on sert des fichiers propriétaires. Evitez autant que possible l'utilisation de `application/octet-stream` puisque ce type générique ne permet pas une gestion appropriée de la ressource.

## Détection de type MIME

Lorsque le type MIME est absent ou lorsque le client détecte que le type MIME a été mal associé, les navigateurs peuvent pratiquer la détection de type MIME via l'analyse de la ressource. Chaque navigateur implémente cette technique différemment et l'utilise dans des contextes différents. Il existe des problématiques de sécurité, étant donné que certaines ressources sont des fichiers exécutables et d'autres non. Les serveurs peuvent empêcher la détection de type MIME par le navigateur en envoyant l'en-tête {{HTTPHeader("X-Content-Type-Options")}} associé à {{HTTPHeader("Content-Type")}}.

## Autres méthodes pour transporter le format d'un document

Les types MIME ne sont pas la seule façon existante pour gérer le format d'un document :

- Les extensions de fichiers sont parfois utilisées, comme sur les systèmes d'exploitation Microsoft Windows. Tous les systèmes d'exploitation ne considèrent pas l'extension comme signifiante (en particulier Linux et Mac OS). De la même manière que pour les types MIME externes, il n'est pas garanti que le contenu soit effectivement du type correspondant à l'extension du document.
- Nombres magiques : La syntaxe de différents fichiers permet de déterminer le fichier en analysant son contenu, ainsi les fichiers GIF commencent par les valeurs hexadécimales 47 49 46 38 soit \[GIF89], les fichiers PNG quant à eux commencent par 89 50 4E 47 soit \[.PNG]. Néanmoins, tous les types de fichiers ne permettent pas d'utiliser des nombres magiques, il ne s'agit donc pas d'une technique infaillible.

## Voir aussi

- [Configurer proprement les types MIME côté serveur](/fr/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types)
- [Formats multimédias supportés pour les éléments HTML audio et vidéo](/fr/docs/Web/HTML/Supported_media_formats)
- <https://www.iana.org/assignments/media-types/application/json>
