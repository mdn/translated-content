---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
tags:
  - En-tête HTTP
  - En-tête de requête
  - HTTP
  - Négociation de contenu
  - Reference
translation_of: Web/HTTP/Headers/Content-Language
---
{{HTTPSidebar}}

L'en-tête **`Content-Language`**  est utilisé pour décrire quels langages sont destinés au public, de sorte que cela permette à l'utilisateur de se différencier en fonction de la langue préférée des utilisateurs.

Par exemple, si "`Content-Language: de-DE`" est mis en place, cela signifie que la page est destinée à un public parlant l'allemand (par contre, cela n'indique pas que la page est écrite en allemand. Par exemple, elle pourrait être écrite en anglais dans le cadre d'un cours de langue destiné aux allemands).

Si l'en-tête `Content-Language` n'est pas spécifié, par défaut, cela signifie que la page est destinée à tout public de langue. Plusieurs tags de langue sont également possibles, ainsi que la mise en place de l'en-tête `Content-Language` pour dfférents types de médias, et pas seulement pour les documents texte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>
        Oui, avec comme restriction supplémentaire que les valeurs ne peuvent
        contenir que les
        caractères <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>,
        l'espace ou <code>*,-.;=</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Content-Language: de-DE
    Content-Language: en-US
    Content-Language: de-DE, en-CA

## Directives

- `language-tag`
  - : Plusieurs tags de langue sont séparés par paragraphe. Chaque tag de langue est une séquence d'un ou plusieurs sous-tags insensibles à la casse, chacun séparé par un tiret ("`-`", `%x2D`). Dans la plupart des cas, un tag de langue se compose d'un sous-tag de langue principal qui identifie une large famille de langues connexes (par exemple, «en» = anglais), suivi éventuellement d'une série de sous-tags qui affinent ou réduisent la variété de langue. (par exemple, "en-CA" = la variété d'anglais telle que communiquée au Canada).

> **Note :** Les tags de langues sont formellement définis dans la RFC 5646, qui repose sur la norme ISO 639 (très souvent la liste de codes ISO 639-1) pour les codes de langue à utiliser.

## Exemples

### Indiquer la langue dans laquelle un document est écrit

L'attribut global [`lang`](/fr/docs/Web/HTML/Global_attributes/lang) est utilisé sur des éléments HTML pour indiquer la langue d'une page HTML entière ou une partie de celle-ci.

```html
<html lang="de">
```

**N'utilisez pas** le meta tag comme ceci pour déclarer la langue d'un document:

```html example-bad
<!-- /!\ C'est une mauvaise pratique -->
<meta http-equiv="content-language" content="de">
```

### Indiquer un public cible pour une ressource

L'en-tête `Content-Language` est utilisé pour spécifier le public destiné à la page, et peut indiquer si cela est plus qu'une seule langue.

    Content-Language: de, en

## Spécifications

| Spécification                                                | Titre                                                          |
| ------------------------------------------------------------ | -------------------------------------------------------------- |
| {{RFC("7231", "Content-Language", "3.1.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Sémantiques et Contenu |

## Compatibilité des navigateurs

{{Compat("http.headers.Content-Language")}}

## Voir également

- {{HTTPHeader("Accept-Language")}}
- [HTTP headers, meta elements and language information](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [HTML `lang` attribute](/fr/docs/Web/HTML/Global_attributes/lang)
