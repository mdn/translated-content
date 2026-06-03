---
title: En-tête Content-Language
short-title: Content-Language
slug: Web/HTTP/Reference/Headers/Content-Language
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

L'{{Glossary("representation header", "en-tête de représentation")}} HTTP **`Content-Language`** est utilisé pour décrire la ou les langues destinées au public, afin que les utilisateur·ice·s puissent la différencier selon leur propre langue préférée.

Par exemple, `Content-Language: de-DE` indique que le document est destiné aux personnes germanophones. Le document peut être rédigé en anglais, et non en allemand, dans le cadre d'un cours de langue pour germanophones. Pour indiquer la langue dans laquelle le document est **rédigé**, utilisez plutôt l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang).

Si aucun `Content-Language` n'est défini, la valeur par défaut est que le contenu est destiné à tous les publics linguistiques. Plusieurs tags de langue sont également possibles, ainsi qu'une application de l'en-tête `Content-Language` à divers types de médias et pas seulement aux documents textuels.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Representation header", "En-tête de représentation")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé CORS")}}
      </th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête autorisé CORS")}}
      </th>
      <td>
        Oui*
      </td>
    </tr>
  </tbody>
</table>

\* Les valeurs ne peuvent contenir que les caractères `0-9`, `A-Z`, `a-z`, un espace ou les caractères `*,-.;=`.

## Syntaxe

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Directives

- `language-tag`
  - : Plusieurs tags de langue sont séparés par une virgule. Chaque tag de langue est une séquence d'un ou plusieurs sous-tags insensibles à la casse, chacun séparé par un tiret (`-`). Dans la plupart des cas, un tag de langue se compose d'un sous-tag principal qui identifie une large famille de langues connexes (par exemple, `en` = anglais), suivi éventuellement d'une série de sous-tags qui affinent ou réduisent la variété de langue (par exemple, `en-CA` = la variété d'anglais telle que communiquée au Canada).

> [!NOTE]
> Les tags de langue sont formellement définis selon {{Glossary("BCP 47 language tag", "les balises de langue BCP 47")}}, qui reposent sur la norme [ISO 639](https://fr.wikipedia.org/wiki/ISO_639) (très souvent la [liste des codes ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)) pour les [codes de langue](https://fr.wikipedia.org/wiki/Code_de_langue) à utiliser.

## Exemples

### Indiquer la langue dans laquelle un document est écrit

L'attribut global [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) est utilisé sur des éléments HTML pour indiquer la langue d'une page [HTML](/fr/docs/Web/HTML) entière ou une partie de celle-ci.

```html
<html lang="de">
  …
</html>
```

**N'utilisez pas** le l'élément HTML meta comme ceci pour déclarer la langue d'un document&nbsp;:

```html example-bad
<meta http-equiv="content-language" content="de" />
```

### Indiquer un public cible pour une ressource

L'en-tête `Content-Language` est utilisé pour définir le **public cible de la page** et peut indiquer qu'il s'agit de plusieurs langues.

```http
Content-Language: de, en
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Accept-Language")}}
- [En-têtes HTTP, éléments meta et informations de langue <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [L'attribut HTML `lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang)
