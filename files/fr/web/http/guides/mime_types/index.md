---
title: Types de média (types MIME)
short-title: Types de média
slug: Web/HTTP/Guides/MIME_types
original_slug: Web/HTTP/MIME_types
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Un **type de média** (anciennement appelé **<i lang="en">Multipurpose Internet Mail Extensions</i>** ou type **MIME**) indique la nature et le format d'un document, d'un fichier ou d'un ensemble d'octets. Les types MIME sont définis et normalisés dans l'{{RFC(6838)}} de l'IETF.

L'[Internet Assigned Numbers Authority (IANA) <sup>(angl.)</sup>](https://www.iana.org/) est responsable de tous les types MIME officiels. La liste la plus à jour et la plus complète se trouve sur la page [Media Types <sup>(angl.)</sup>](https://www.iana.org/assignments/media-types/media-types.xhtml).

> [!WARNING]
> Les navigateurs utilisent le type MIME, _et non l'extension de fichier_, pour déterminer comment traiter une URL, il est donc important que les serveurs web envoient le bon type MIME dans l'en‑tête {{HTTPHeader("Content-Type")}} de la réponse. Si ce n'est pas correctement configuré, les navigateurs risquent d'interpréter de travers le contenu des fichiers, les sites peuvent mal fonctionner et les fichiers téléchargés peuvent être mal gérés.

## Structure d'un type MIME

Un type MIME se compose le plus souvent de deux parties&nbsp;: un _type_ et un _sous‑type_, séparés par une barre oblique (`/`) — sans espace&nbsp;:

```plain
type/sous-type
```

Le **_type_** représente la catégorie générale dans laquelle le type de données s'inscrit, comme `video` ou `text`.

Le **_sous‑type_** identifie le type exact de données du type spécifié que représente le type MIME. Par exemple, pour le type MIME `text`, le sous‑type peut être `plain` (texte brut), `html` (code source {{Glossary("HTML")}}) ou `calendar` (pour les fichiers iCalendar/`.ics`).

Chaque type possède son propre ensemble de sous‑types possibles. Un type MIME comporte toujours un type _et_ un sous‑type, jamais l'un sans l'autre.

On peut ajouter un **paramètre** optionnel pour fournir des détails supplémentaires&nbsp;:

```
type/sous-type;paramètre=valeur
```

Par exemple, pour tout type MIME dont le type principal est `text`, on peut ajouter le paramètre optionnel `charset` pour préciser le jeu de caractères utilisé pour les données. Si aucun `charset` n'est spécifié, la valeur par défaut est l'{{Glossary("ASCII")}} (`US-ASCII`), sauf si elle est remplacée par les réglages de l'{{Glossary("user agent", "agent utilisateur")}}. Pour indiquer un fichier texte en UTF‑8, on utilisera le type MIME `text/plain;charset=UTF-8`.

Les types MIME ne sont pas sensibles à la casse mais sont traditionnellement écrits en minuscules. Les valeurs de paramètres, elles, peuvent être sensibles à la casse.

### Types

Il existe deux grandes catégories de type&nbsp;: **discrète** et **multipart**. Les types discrets représentent un seul fichier ou support, comme un fichier texte ou audio unique, ou une seule vidéo. Un type multipart représente un document composé de plusieurs parties, chacune pouvant avoir son propre type MIME&nbsp;; un type multipart peut aussi encapsuler plusieurs fichiers envoyés ensemble dans une même transaction. Par exemple, les types multipart sont utilisés lors de l'envoi de plusieurs pièces jointes dans un courriel.

#### Types discrets

Les types discrets actuellement enregistrés auprès de l'IANA sont&nbsp;:

- `application`
  - : Toute donnée binaire ne relevant pas explicitement d'un autre type&nbsp;; soit des données qui seront exécutées ou interprétées d'une certaine manière, soit des données binaires nécessitant une application spécifique (ou une catégorie d'applications) pour être utilisées. Les données binaires génériques (ou dont le vrai type est inconnu) utilisent `application/octet-stream`. Autres exemples courants&nbsp;: `application/pdf`, `application/pkcs8`, `application/zip`. [(Voir le registre des types «&nbsp;application&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Données audio ou musicales. Exemples&nbsp;: `audio/mpeg`, `audio/vorbis`. [(Voir le registre des types «&nbsp;audio&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Réservé à un rôle d'espace réservé dans les exemples montrant l'utilisation des types MIME. À ne jamais utiliser en dehors des extraits de code et de la documentation. `example` peut aussi être utilisé comme sous‑type&nbsp;; par exemple, dans un exemple relatif à l'audio sur le Web, le type MIME `audio/example` peut indiquer que le type est un espace réservé à remplacer par un type approprié dans un usage réel.
- `font`
  - : Données de police/graphisme de caractères. Exemples courants&nbsp;: `font/woff`, `font/ttf`, `font/otf`. [(Voir le registre des types «&nbsp;font&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Données d'image ou graphiques, y compris images matricielles et vectorielles statiques, ainsi que des variantes animées comme les {{Glossary("GIF")}} animés ou l'APNG. Exemples courants&nbsp;: `image/jpeg`, `image/png`, `image/svg+xml`. [(Voir le registre des types «&nbsp;image&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Données de modèle pour un objet ou une scène 3D. Exemples&nbsp;: `model/3mf`, `model/vrml`. [(Voir le registre des types «&nbsp;model&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Données purement textuelles, y compris tout contenu lisible par un·e humain·e, du code source, ou des données textuelles comme des valeurs séparées par des virgules (CSV). Exemples&nbsp;: `text/plain`, `text/csv`, `text/html`. [(Voir le registre des types «&nbsp;text&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Données ou fichiers vidéo, comme des films MP4 (`video/mp4`). [(Voir le registre des types «&nbsp;video&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Pour des documents texte sans sous‑type spécifique, utilisez `text/plain`. De même, pour des documents binaires sans sous‑type spécifique ou connu, utilisez `application/octet-stream`.

#### Types multipart

Les types **multipart** indiquent une catégorie de document découpé en éléments, souvent de types MIME différents&nbsp;; ils peuvent aussi servir — notamment en contexte de messagerie — à représenter plusieurs fichiers distincts faisant tous partie d'une même transaction. Ils représentent un **document composite**.

À l'exception de `multipart/form-data`, utilisé avec la méthode {{HTTPMethod("POST")}} des [formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms), et de `multipart/byteranges`, utilisé avec le code {{HTTPStatus("206")}} «&nbsp;Partial Content&nbsp;» pour envoyer une partie d'un document, HTTP ne gère pas les documents multipart de façon spéciale&nbsp;: le message est transmis au navigateur (qui affichera probablement une fenêtre «&nbsp;Enregistrer sous&nbsp;» s'il ne sait pas l'afficher).

Il existe deux types multipart&nbsp;:

- `message`
  - : Un message qui encapsule d'autres messages. Cela peut servir, par exemple, à représenter un courriel incluant un message transféré dans ses données, ou à permettre l'envoi de très grands messages en plusieurs morceaux comme s'il s'agissait de multiples messages. Exemples&nbsp;: `message/rfc822` (pour le transfert ou la citation d'un message lors d'une réponse) et `message/partial` pour découper automatiquement un grand message en plus petits, à réassembler côté destinataire. [(Voir le registre des types «&nbsp;message&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Données composées de plusieurs éléments, pouvant chacun avoir des types MIME différents. Exemples&nbsp;: `multipart/form-data` (pour des données produites avec l'API {{domxref("FormData")}}) et `multipart/byteranges` (défini dans l'{{RFC(7233, "", "5.4.1")}} et utilisé avec le {{Glossary("HTTP")}} {{HTTPStatus(206)}} «&nbsp;Partial Content&nbsp;» lorsque la ressource renvoyée ne contient qu'une partie du contenu, par exemple via l'en‑tête {{HTTPHeader("Range")}}). [(Voir le registre des types «&nbsp;multipart&nbsp;» auprès de l'IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Types MIME importants pour les développeur·euse·s Web

### application/octet-stream

C'est la valeur par défaut pour les fichiers binaires. Comme cela signifie «&nbsp;binaire inconnu&nbsp;», les navigateurs ne l'exécutent généralement pas et n'essaient même pas de l'exécuter. Ils le traitent comme si l'en‑tête {{HTTPHeader("Content-Disposition")}} était positionné sur `attachment` et proposent une boîte de dialogue «&nbsp;Enregistrer sous&nbsp;».

### text/plain

C'est la valeur par défaut pour les fichiers textuels. Même si cela signifie «&nbsp;texte inconnu&nbsp;», les navigateurs supposent qu'ils peuvent l'afficher.

> [!NOTE]
> `text/plain` ne signifie pas «&nbsp;n'importe quelle donnée textuelle&nbsp;». Si un navigateur attend un type de texte précis, il ne le considérera pas comme correspondant. En particulier, s'il télécharge un fichier `text/plain` depuis un élément {{HTMLElement("link")}} déclarant un fichier CSS, il ne le reconnaîtra pas comme une feuille de style valide si le type est `text/plain`. Le type CSS `text/css` doit être utilisé.

### text/css

Les fichiers CSS utilisés pour styliser une page Web **doivent** être servis avec `text/css`. Si un serveur ne reconnaît pas l'extension `.css`, il peut les envoyer avec des types MIME `text/plain` ou `application/octet-stream`. Dans ce cas, la plupart des navigateurs ne les reconnaîtront pas comme du CSS et les ignoreront.

### text/html

Tout contenu HTML doit être servi avec ce type. Les types MIME alternatifs pour XHTML (comme `application/xhtml+xml`) sont aujourd'hui largement inutiles.

> [!NOTE]
> Utilisez `application/xml` ou `application/xhtml+xml` si vous voulez les règles d'analyse strictes d'XML, les sections [`<![CDATA[…]]>`](/fr/docs/Web/API/CDATASection) ou des éléments hors des espaces de noms HTML/SVG/MathML.

### text/javascript

Le contenu JavaScript doit toujours être servi avec le type MIME `text/javascript`. Pour des raisons historiques, les navigateurs peuvent prendre en charge certains [anciens types JavaScript](#anciens_types_mime_pour_javascript) listés ci‑dessous, mais vous ne devez pas supposer que des scripts servis avec un type autre que `text/javascript` se chargeront ou s'exécuteront toujours.

Notez qu'en HTML, l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/script/type) des éléments {{htmlelement("script")}} ne peut contenir que l'**essence du type MIME JavaScript**&nbsp;: `text/javascript`. Inclure un paramètre quelconque, comme `charset=utf-8`, revient à définir un type MIME différent&nbsp;: le contenu du script est alors traité comme un bloc de données et n'est pas exécuté comme du JavaScript. (Définir `type` sur un type MIME JavaScript est en soi une fonctionnalité dépréciée&nbsp;: vous devriez omettre `type` dans ce cas.) À l'inverse, avec l'en‑tête HTTP {{httpheader("Content-Type")}}, vous pouvez optionnellement préciser le paramètre `charset` comme d'habitude.

Pour plus d'informations, voir&nbsp;: [registre IANA des types «&nbsp;text&nbsp;»](https://www.iana.org/assignments/media-types/media-types.xhtml#text) <sup>(angl.)</sup>, [RFC&nbsp;9239](https://www.rfc-editor.org/rfc/rfc9239.html) <sup>(angl.)</sup>, et la [spécification HTML](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) <sup>(angl.)</sup>.

#### Anciens types MIME pour JavaScript

En plus de `text/javascript`, pour des raisons historiques, le [standard <i lang="en">MIME Sniffing</i>](https://mimesniff.spec.whatwg.org/) (qui définit comment les navigateurs interprètent les types MIME et gèrent le contenu sans type valide) permet aussi de servir JavaScript avec l'un des types suivants&nbsp;:

- `application/javascript` {{deprecated_inline}}
- `application/ecmascript` {{deprecated_inline}}
- `application/x-ecmascript` {{Non-standard_Inline}}
- `application/x-javascript` {{Non-standard_Inline}}
- `text/ecmascript` {{deprecated_inline}}
- `text/javascript1.0` {{Non-standard_Inline}}
- `text/javascript1.1` {{Non-standard_Inline}}
- `text/javascript1.2` {{Non-standard_Inline}}
- `text/javascript1.3` {{Non-standard_Inline}}
- `text/javascript1.4` {{Non-standard_Inline}}
- `text/javascript1.5` {{Non-standard_Inline}}
- `text/jscript` {{Non-standard_Inline}}
- `text/livescript` {{Non-standard_Inline}}
- `text/x-ecmascript` {{Non-standard_Inline}}
- `text/x-javascript` {{Non-standard_Inline}}

> [!NOTE]
> Même si un {{Glossary("user agent", "agent utilisateur")}} donné peut en accepter un ou plusieurs, vous ne devez utiliser que `text/javascript`. C'est le seul type MIME garanti de fonctionner maintenant et à l'avenir.

### application/json

La {{glossary("JSON","<i lang=\"en\">JavaScript Object Notation</i> (JSON)")}} est un format textuel standard pour représenter des données structurées, fondé sur la syntaxe des objets JavaScript. Il est couramment utilisé pour transmettre des données dans les applications web.

### Types d'images

Les fichiers dont le type MIME est `image` contiennent des données d'image. Le sous‑type indique précisément quel format d'image est représenté.

Les types d'image suivants sont d'usage courant et considérés comme _sûrs_ pour une utilisation sur les pages web&nbsp;:

- [`image/apng`](/fr/docs/Web/Media/Guides/Formats/Image_types#apng_portable_network_graphics_animé)&nbsp;: APNG (<i lang="en">Animated Portable Network Graphics</i>)
- [`image/avif`](/fr/docs/Web/Media/Guides/Formats/Image_types#avif_image)&nbsp;: AVIF (<i lang="en">AV1 Image File Format</i>)
- [`image/gif`](/fr/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format)&nbsp;: GIF (<i lang="en">Graphics Interchange Format</i>)
- [`image/jpeg`](/fr/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image)&nbsp;: JPEG (<i lang="en">Joint Photographic Experts Group</i>)
- [`image/png`](/fr/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics)&nbsp;: PNG (<i lang="en">Portable Network Graphics</i>)
- [`image/svg+xml`](/fr/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)&nbsp;: SVG (<i lang="en">Scalable Vector Graphics</i>)
- [`image/webp`](/fr/docs/Web/Media/Guides/Formats/Image_types#webp_image)&nbsp;: WebP

Le [guide sur les types et formats d'images](/fr/docs/Web/Media/Guides/Formats/Image_types#types_de_fichiers_image_courants) fournit des informations et des recommandations sur le choix du format selon les cas.

### Types audio et vidéo

Comme pour les images, HTML n'impose pas aux navigateurs de prendre en charge des types de fichiers ou codecs spécifiques pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}}. Il est donc important, lors du choix des types et codecs, de considérer votre public cible et l'éventail de navigateurs (et leurs versions) qu'il peut utiliser.

Notre [guide des formats de conteneur multimédia](/fr/docs/Web/Media/Guides/Formats/Containers) liste les types de fichiers couramment pris en charge par les navigateurs web, avec leurs cas d'usage, leurs limites, et des informations de compatibilité, entre autres détails.

Les guides sur les [codecs audio](/fr/docs/Web/Media/Guides/Formats/Audio_codecs) et [codecs vidéo](/fr/docs/Web/Media/Guides/Formats/Video_codecs) récapitulent les codecs fréquemment pris en charge par les navigateurs, avec des détails de compatibilité et des informations techniques comme le nombre de canaux audio, le type de compression et les débits adaptés. Le guide sur les [codecs utilisés par WebRTC](/fr/docs/Web/Media/Guides/Formats/WebRTC_codecs) va plus loin en couvrant spécifiquement les codecs pris en charge par les principaux navigateurs, afin d'aider au choix selon la couverture souhaitée.

Pour les types MIME des fichiers audio ou vidéo, on indique généralement le format de conteneur (type de fichier). Le [paramètre `codecs`](/fr/docs/Web/Media/Guides/Formats/codecs_parameter) optionnel peut être ajouté au type MIME pour préciser les codecs et les options d'encodage utilisées (profil, niveau, etc.).

Pour plus d'informations sur des types courants, voir la page [Types MIME courants](/fr/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Le type `multipart/form-data` peut être utilisé lorsqu'on envoie au serveur les valeurs d'un [formulaire HTML](/fr/docs/Learn_web_development/Extensions/Forms) rempli depuis le navigateur.

En tant que format de document multipart, il se compose de différentes parties, délimitées par une frontière (<i lang="en">boundary</i>, une chaîne commençant par deux tirets `--`). Chaque partie est une entité avec ses propres en‑têtes HTTP, {{HTTPHeader("Content-Disposition")}} et {{HTTPHeader("Content-Type")}} pour les champs de téléversement de fichier.

```http
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

Le `<form>` suivant&nbsp;:

```html
<form
  action="http://localhost:8000/"
  method="post"
  enctype="multipart/form-data">
  <label>Nom&nbsp;: <input name="monChampTexte" value="Test" /></label>
  <label><input type="checkbox" name="maCheckBox" /> Check</label>
  <label>
    Charger un fichier&nbsp;:
    <input type="file" name="monFichier" value="test.txt" />
  </label>
  <button>Envoyer le fichier</button>
</form>
```

enverra le message&nbsp;:

```http
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

### multipart/byteranges

Le type MIME `multipart/byteranges` est utilisé pour envoyer des réponses partielles au navigateur.

Lorsque le code d'état {{HTTPStatus("206", "206 Partial Content")}} est renvoyé, ce type MIME indique que le document est composé de plusieurs parties, une par plage demandée. Comme pour les autres types multipart, l'en‑tête {{HTTPHeader("Content-Type")}} utilise une `boundary` pour séparer les morceaux. Chaque morceau possède un en‑tête {{HTTPHeader("Content-Type")}} avec son type réel et un {{HTTPHeader("Content-Range")}} indiquant la plage représentée.

```http
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

## Importance de définir le bon type MIME

Certaines configurations serveur peuvent utiliser le type MIME associé pour effectuer des optimisations, comme la concaténation de fichiers, la compression ou la mise en cache. Voir [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) <sup>(angl.)</sup> pour un exemple de configuration Apache qui compresse certains types MIME.

La plupart des serveurs web envoient les ressources non reconnues avec le type `application/octet-stream`. Pour des raisons de sécurité, la plupart des navigateurs n'autorisent pas de définir une action par défaut personnalisée (comme «&nbsp;Ouvrir dans Word&nbsp;») pour ces ressources, forçant l'utilisateur·ice à enregistrer le fichier pour l'ouvrir.

Quelques erreurs de configuration fréquentes côté serveur&nbsp;:

- Fichiers compressés RAR. L'idéal serait d'indiquer le type réel des fichiers d'origine&nbsp;; souvent impossible car un fichier .RAR peut contenir plusieurs ressources de types différents. Dans ce cas, configurez le serveur pour envoyer `application/x-rar-compressed`.
- Audio et vidéo. Seules les ressources avec le bon type MIME seront lues dans les éléments {{HTMLElement("video")}} ou {{HTMLElement("audio")}}. Veillez à spécifier le [type de média correct pour l'audio et la vidéo](/fr/docs/Web/Media/Guides/Formats).
- Formats propriétaires. Un type spécifique comme `application/vnd.mspowerpoint` permet aux utilisateur·ice·s d'ouvrir automatiquement ces fichiers dans le logiciel de présentation de leur choix.

## Détection du type MIME (<i lang="en">MIME sniffing</i>)

En l'absence de type MIME, ou dans certains cas où les navigateurs estiment qu'il est incorrect, ils peuvent réaliser une _détection de type_ (<i lang="en">MIME sniffing</i>) — c'est‑à‑dire deviner le bon type en inspectant les octets de la ressource.

Chaque navigateur effectue cette détection différemment et dans des circonstances diverses. (Par exemple, Safari regarde l'extension de fichier dans l'URL si le type envoyé est inadapté.) Cela pose des problèmes de sécurité car certains types MIME représentent du contenu exécutable. Les serveurs peuvent empêcher la détection en envoyant l'en‑tête {{HTTPHeader("X-Content-Type-Options")}}.

## Autres moyens d'indiquer le type de document

Les types MIME ne sont pas l'unique moyen de transmettre des informations de type de document&nbsp;:

- Les suffixes de nom de fichier sont parfois utilisés, notamment sous Microsoft Windows. Tous les systèmes d'exploitation ne les considèrent pas comme significatifs (par exemple Linux et macOS), et rien ne garantit qu'ils soient corrects.
- Les _nombres magiques_. La syntaxe de certains formats permet d'inférer le type de fichier en observant sa structure binaire. Par exemple, les fichiers GIF commencent par la valeur hexadécimale `47 49 46 38 39` (`GIF89`), et les fichiers PNG par `89 50 4E 47` (`.PNG`). Tous les types de fichiers n'ont pas de nombre magique&nbsp;; cette méthode n'est donc pas fiable à 100&nbsp;% non plus.

## Voir aussi

- [Technologies multimédias du Web](/fr/docs/Web/Media)
- [Guide des types de média utilisés sur le Web](/fr/docs/Web/Media/Guides/Formats)
- [Configurer correctement les types MIME côté serveur](/fr/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
