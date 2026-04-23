---
title: En-tête Content-Disposition
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

L'en-tête HTTP **`Content-Disposition`** indique si le contenu doit être affiché _en ligne_ (<i lang="en">inline</i> en anglais) dans le navigateur en tant que page Web ou partie de page Web, ou téléchargé en tant que _pièce jointe_ localement.

Dans un corps multipartie, l'en-tête doit être utilisé sur chaque sous-partie pour fournir des informations sur son champ correspondant. La sous-partie est délimitée par la _limite_ définie dans l'en-tête {{HTTPHeader("Content-Type")}}. Lorsqu'il est utilisé sur le corps lui-même, `Content-Disposition` n'a aucun effet.

L'en-tête `Content-Disposition` est défini dans le contexte plus large des messages MIME pour l'e-mail, mais seul un sous-ensemble des paramètres possibles s'applique aux formulaires HTTP et aux requêtes {{HTTPMethod("POST")}}. Seule la valeur `form-data`, ainsi que les directives optionnelles `name` et `filename`, peuvent être utilisées dans le contexte HTTP.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Response header", "En-tête de réponse")}} (pour le corps principal)<br />
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}} (pour une sous-partie d'un corps multipartie)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

### En tant qu'entête de réponse pour le corps principal

Le premier paramètre dans le contexte HTTP est soit `inline` (valeur par défaut, indiquant qu'il peut être affiché à l'intérieur de la page Web ou en tant que page Web), soit `attachment` (indiquant qu'il doit être téléchargé&nbsp;; la plupart des navigateurs affichent une boîte de dialogue «&nbsp;Enregistrer sous&nbsp;» préremplie avec la valeur du paramètre `filename` si présent).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="nom de fichier.jpg"
Content-Disposition: attachment; filename*=UTF-8''nom%20de%20fichier.jpg
```

Les guillemets autour du nom de fichier sont optionnels, mais nécessaires si vous utilisez des caractères spéciaux dans le nom, comme des espaces.

Les paramètres `filename` et `filename*` diffèrent uniquement en ce que `filename*` utilise l'encodage défini dans la {{RFC("5987", "", "3.2")}}.
Lorsque `filename` et `filename*` sont présents dans une même valeur de champ d'en-tête, `filename*` est préféré à `filename` lorsque les deux sont compris. Il est recommandé d'inclure les deux pour une compatibilité maximale, et vous pouvez convertir `filename*` en `filename` en remplaçant les caractères non-ASCII par des équivalents ASCII (par exemple, convertir `é` en `e`).
Il est conseillé d'éviter les séquences d'échappement en pourcentage dans `filename`, car elles sont gérées de manière incohérente selon les navigateurs (Firefox et Chrome les décodent, tandis que Safari ne le fait pas).

Les navigateurs peuvent appliquer des transformations pour respecter les exigences du système de fichiers, comme convertir les séparateurs de chemin (`/` et `\`) en tirets bas (`_`).

> [!NOTE]
> Chrome, et Firefox 82 et versions ultérieures, privilégient l'attribut `download` de [l'élément HTML `<a>`](/fr/docs/Web/HTML/Reference/Elements/a) par rapport au paramètre `Content-Disposition: inline` (pour les [URL de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)). Les versions antérieures de Firefox privilégient l'en-tête et affichent le contenu en ligne.

### En tant qu'en-tête pour un corps à plusieurs parties

Un corps `multipart/form-data` nécessite un en-tête `Content-Disposition` pour fournir des informations sur chaque sous-partie du formulaire (par exemple, pour chaque champ de formulaire et tout fichier faisant partie des données du champ).
La première directive est toujours `form-data`, et l'en-tête doit également inclure un paramètre `name` pour identifier le champ concerné. Les directives supplémentaires sont insensibles à la casse.
La valeur de tout argument (après le signe `=`) peut être soit un jeton, soit une chaîne de caractères entre guillemets.
Les chaînes entre guillemets sont recommandées, et de nombreuses implémentations serveur exigent que les valeurs soient entre guillemets.
Ceci s'explique par le fait qu'un jeton doit être en US-ASCII pour les en-têtes de type MIME comme `Content-Disposition`, et US-ASCII n'autorise pas certains caractères courants dans les noms de fichiers et autres valeurs.
Les paramètres multiples sont séparés par un point-virgule (`;`).

```http
Content-Disposition: form-data Content-Disposition: form-data;
name="nomFichier" Content-Disposition: form-data;
name="nomFichier"; filename="nomfichier.jpg"
```

## Directives

- `name`
  - : Est suivie d'une chaîne de caractères contenant le nom du champ HTML dans le formulaire auquel le contenu de cette sous-partie se réfère. Lorsqu'il s'agit de plusieurs fichiers dans le même champ (par exemple, l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/input#multiple) d'un élément {{HTMLElement("input","&lt;input type=\"file\"&gt;")}}), il peut y avoir plusieurs sous-parties portant le même nom.

    Un `name` avec une valeur de `'_charset_'` indique que la partie n'est pas un champ HTML, mais le jeu de caractères par défaut à utiliser pour les parties sans information de charset explicite.

- `filename`
  - : Est suivie d'une chaîne de caractères contenant le nom d'origine du fichier transmis. Ce paramètre fournit principalement une information indicative. Les recommandations de la [RFC2183 <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) s'appliquent&nbsp;:
    - Préférer les caractères ASCII si possible (le client peut encoder en pourcentage, tant que l'implémentation serveur le décode).
    - Toute information de chemin doit être supprimée, par exemple en remplaçant `/` par `_`.
    - Lors de l'écriture sur disque, il ne doit pas écraser un fichier existant.
    - Éviter de créer des fichiers spéciaux avec des implications de sécurité, comme créer un fichier sur le chemin de recherche de commandes.
    - Respecter les autres exigences du système de fichiers, telles que les caractères restreints et les limites de longueur.

À noter que l'en-tête de requête ne possède pas le paramètre `filename*` et n'autorise pas l'encodage RFC 5987.

## Exemples

### Déclencher l'invite de téléchargement pour une ressource

La réponse suivante déclenche la boîte de dialogue «&nbsp;Enregistrer sous&nbsp;» dans un navigateur&nbsp;:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 22

<HTML>Enregistrez-moi !</HTML>
```

Ce fichier HTML sera téléchargé plutôt qu'affiché dans le navigateur.
La plupart des navigateurs proposeront à l'utilisateur·ice de l'enregistrer sous le nom de fichier `cool.html` par défaut (comme indiqué dans la directive `filename`).

### Envoi HTML avec le type de contenu `multipart/form-data`

L'exemple suivant montre un formulaire HTML envoyé en utilisant `multipart/form-data` avec l'en-tête `Content-Disposition`.
En pratique, la valeur de la limite `delimiter123` serait une chaîne générée par le navigateur, comme `----8721656041911415653955004498`&nbsp;:

```http
POST /test.html HTTP/1.1
Host: exemple.org
Content-Type: multipart/form-data;boundary="delimiter123"

--delimiter123
Content-Disposition: form-data; name="champ1"

value1
--delimiter123
Content-Disposition: form-data; name="champ2"; filename="exemple.txt"

value2
--delimiter123--
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'en-tête {{HTTPHeader("Content-Type")}} définissant la limite du corps multipartie.
- L'interface {{DOMxRef("FormData")}} utilisée pour manipuler les données de formulaire à utiliser dans les API {{DOMxRef("Window/fetch", "fetch()")}} ou {{DOMxRef("XMLHttpRequest")}}.
