---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
tags:
  - HTTP
  - Reference
  - header
translation_of: Web/HTTP/Headers/Content-Disposition
---
{{HTTPSidebar}}

Dans une réponse HTTP régulière, l'en-tête de réponse `Content-Disposition` est un en-tête indiquant si le contenu devrait être affiché en ligne dans le navigateur, c'est-à-dire en tant que page Web, dans une page Web ou en pièce jointe qui sera téléchargé et enregistré localement.

Dans un corps `multipart / form-data`, l'en-tête général HTTP Content-Disposition est un en-tête qui peut être utilisé sur la sous-partie d'un corps multipart pour donner des informations sur le champ auquel il s'applique. La sous-partie est délimitée par la limite `boundary` définie dans l'en-tête {{HTTPHeader ("Content-Type")}}. Utilisé sur le corps même, `Content-Disposition` n'a aucun effet.

L'en-tête `Content-Disposition` est défini dans le contexte plus large des messages MIME pour le courrier électronique, mais seul un sous-ensemble des paramètres possibles s'applique aux formulaires HTTP et {{HTTPMethod ("POST")}}. Seules les données de forme de valeur, ainsi que le nom de la directive optionnelle et le nom de fichier, peuvent être utilisés dans le contexte HTTP.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <table>
          <tbody>
            <tr>
              <th scope="row">Type d'en-tête</th>
              <td>
                {{Glossary("Response header")}} (pour le corps
                principal)<br />{{Glossary("General header")}} (pour
                une sous-partie d'un corps à plusieurs parties)
              </td>
            </tr>
            <tr>
              <th scope="row">
                {{Glossary("Forbidden header name")}}
              </th>
              <th scope="row">Non</th>
            </tr>
          </tbody>
        </table>
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

### En tant qu'entête de réponse pour le corps principal

Le premier paramètre dans le contexte HTTP est en ligne (valeur par défaut, indiquant qu'il peut être affiché à l'intérieur de la page Web ou en tant que page Web) ou pièce jointe (en indiquant qu'il devrait être téléchargé), la plupart des navigateurs présentant une boîte de dialogue "Enregistrer sous" Avec la valeur des paramètres du nom de
fichier si présent.

    Content-Disposition: inline
    Content-Disposition: attachment
    Content-Disposition: attachment; filename="filename.jpg"

### En tant qu'en-tête pour un corps à plusieurs parties

Le premier paramètre dans le contexte HTTP est toujours une donnée de forme. Les paramètres supplémentaires sont insensibles à la casse et ont des arguments, qui utilisent la syntaxe de chaîne cité après le signe '='. Les paramètres multiples sont
séparés par un point-virgule (';').

    Content-Disposition: form-data Content-Disposition: form-data;
    name="fieldName" Content-Disposition: form-data;
    name="fieldName"; filename="filename.jpg"

## Directives

`<name>`
Est suivie d'une chaîne contenant le nom du champ HTML dans la forme dont le contenu de cette sous-partie se réfère. Lorsqu'il s'agit de plusieurs fichiers dans le même champ (par exemple, l'attribut {{htmlattrxref("multiple", "input")}} d'un {{HTMLElement("input","&lt;input type=file&gt;")}} element), il peut y avoir plusieurs sous-parties portant le même nom.

Un `name` avec une valeur de `'_charset_'` indique que la partie n'est pas un champ HTML, mais le jeu de caractères par défaut à utiliser pour les pièces sans informations de charset explicites.

`<filename>`
Est suivi d'une chaîne contenant le nom d'origine du fichier transmis. Le nom de fichier est toujours facultatif et ne doit pas être utilisé aveuglément par l'application: l'information du chemin doit être rayée et la conversion aux règles du système de fichiers du serveur doit être effectuée. Ce paramètre fournit principalement des informations indicatives. Lorsqu'il est utilisé en combinaison avec `Content-Disposition: attachement`, il est utilisé comme nom de fichier par défaut pour une éventuelle boîte de dialogue "Enregistrer sous" présentée à l'utilisateur.

`<filename*>`
Les paramètres `filename` et `filename*` diffèrent uniquement en ce que `filename*` utilise l'encodage défini dans la RFC 5987. Lorsque `filename` et `filename*` sont présents dans une seule valeur de champ d'en-tête, `filename*` est préféré à `filename` lorsque les deux sont présents et compris.

## Exemples

Une réponse déclanchant le dialogue "Enregistrer sous":

```html
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 22

<HTML>Enregistrez-moi !</HTML>
```

Ce fichier HTML simple sera sauvegardé en tant que téléchargement régulier plutôt que dans le navigateur. La plupart des navigateurs proposeront de l'enregistrer sous le nom de fichier `cool.html` (par défaut).

Un exemple de formulaire HTML, publié à l'aide du format `multipart / form-data` qui utilise l'en-tête `Content-Disposition`:

    POST /test.html HTTP/1.1
    Host: example.org
    Content-Type: multipart/form-data;boundary="boundary"

    --boundary
    Content-Disposition: form-data; name="field1"

    value1
    --boundary
    Content-Disposition: form-data; name="field2"; filename="example.txt"

    value2
    --boundary--

## Spécifications

| Spécification        | Titre                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| {{RFC("7578")}} | Retour des valeurs à partir des formulaires: multipart / form-data                                                       |
| {{RFC("6266")}} | Utilisation du champ Header Content-Disposition dans le protocole de transfert hypertexte (HTTP)                         |
| {{RFC("2183")}} | Communiquer des informations de présentation dans les messages Internet: le champ de l'en-tête de disposition de contenu |

## Compatibilité des navigateurs

{{Compat("http/headers/content-disposition")}}

## Notes de compatibilité

- Firefox 5 gère l'en-tête de réponse HTTP `Content-Disposition` plus efficacement si les deux paramètres du nom de fichier et du nom de fichier sont fournis. Il examine tous les noms fournis, en utilisant le paramètre \* du nom de fichier, s'il est disponible, même si un paramètre de nom de fichier est inclus en premier. Auparavant, le premier paramètre correspondant serait utilisé, empêchant ainsi un nom plus approprié d'être utilisé. Voir {{bug (588781)}}.

## Voir également

- [HTML Forms](/en-US/docs/Web/Guide/HTML/Forms)
- {{HTTPHeader("Content-Type")}} définissant la limite du corps multipartie.
- L'interface {{domxref("FormData")}} utilisée pour manipuler les données de formulaire à utiliser dans l'API {{domxref("XMLHttpRequest")}}.
