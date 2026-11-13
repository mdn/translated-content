---
title: En-tête X-Permitted-Cross-Domain-Policies
short-title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

{{Glossary("response Header", "L'en-tête de réponse")}} HTTP **`X-Permitted-Cross-Domain-Policies`** définit une méta-politique qui contrôle si les ressources du site peuvent être accessibles inter-origines par un document s'exécutant dans un client web comme Adobe Acrobat ou Microsoft Silverlight.

Il peut être utilisé dans les cas où le site web doit déclarer une politique inter-origine, mais ne peut pas écrire dans le répertoire racine du domaine.

L'utilisation de cet en-tête est moins courante depuis que Adobe Flash Player et Microsoft Silverlight ont été dépréciés.
Certains outils de test de sécurité vérifient néanmoins la présence d'un en-tête `X-Permitted-Cross-Domain-Policies: none`, car il peut réduire le risque qu'un fichier de politique trop permissif soit ajouté à votre site par accident ou par des actions malveillantes.

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
X-Permitted-Cross-Domain-Policies: <permitted-cross-domain-policy>
```

## Directives

- `none`
  - : Aucun fichier de politique n'est autorisé nulle part sur le serveur cible, y compris dans un fichier de politique principal.
- `master-only`
  - : Autorise l'accès inter-origine au fichier de politique principal défini sur le même domaine.
- `by-content-type` (HTTP/HTTPS uniquement)
  - : Seuls les fichiers de politique servis avec `Content-Type: text/x-cross-domain-policy` sont autorisés.
- `by-ftp-filename` (FTP uniquement)
  - : Seuls les fichiers de politique dont le nom de fichier est `crossdomain.xml` (URL se terminant par `/crossdomain.xml`) sont autorisés.
- `all`
  - : Tous les fichiers de politique sur ce domaine cible sont autorisés.
- `none-this-response`
  - : Indique que le document actuel ne doit pas être utilisé comme fichier de politique malgré d'autres en-têtes ou son contenu.
    Cette valeur est unique à l'en-tête HTTP uniquement.

## Description

Les clients Web tels qu'Adobe Acrobat ou Apache Flex peuvent charger des documents Web, qui peuvent à leur tour charger des ressources du même site ou d'autres sites.
Par défaut, l'accès est limité aux ressources du même site, en raison de la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy), mais les sites inter-origine peuvent choisir de rendre certaines ou toutes leurs ressources disponibles aux clients inter-origine en utilisant des fichiers spéciaux, appelés fichiers de politique inter-origine.

Une politique inter-origine «&nbsp;principale&nbsp;» peut être définie sous forme de fichier `crossdomain.xml` à la racine du domaine, par exemple&nbsp;: `http://example.com/crossdomain.xml`.
Le fichier principal définit la _méta-politique_ pour l'ensemble du site en utilisant l'attribut `permitted-cross-domain-policies` de la balise `<site-control>`.
La méta-politique contrôle si des politiques sont autorisées, et les conditions d'utilisation des autres fichiers de politique inter-origine «&nbsp;secondaires&nbsp;».
Ces autres fichiers de politique peuvent être créés dans des répertoires particuliers pour définir l'accès aux fichiers de leur arbre de répertoires respectif.

Par exemple, voici la définition de la politique principale la moins permissive, qui n'autorise aucun accès, ni l'utilisation d'autres fichiers de politique «&nbsp;secondaires&nbsp;».

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

L'en-tête `X-Permitted-Cross-Domain-Policies` peut définir une méta-politique pour la réponse HTTP qui le contient, ou remplacer une méta-politique définie dans le fichier de politique inter-origine principal, le cas échéant.
Il accepte les mêmes valeurs que l'attribut `permitted-cross-domain-policies` du fichier, ainsi que `none-this-response`.

Il sert le plus souvent à empêcher tout accès aux ressources du site lorsque le·la développeur·euse ne peut pas créer de fichier de politique inter-origine principal à la racine du site.

## Exemples

### Interdire les fichiers de politique inter-origine

Si vous n'avez pas besoin de charger des données d'application dans des clients tels qu'Adobe Flash Player ou Adobe Acrobat (ou des clients obsolètes), configurez l'en-tête avec la valeur `X-Permitted-Cross-Domain-Policies: none`&nbsp;:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spécifications

Documenté dans la [spécification Adobe des fichiers de politique inter-origine <sup>(angl.)</sup>](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Voir aussi

- [Partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [Guides pratiques de mise en œuvre de la sécurité](/fr/docs/Web/Security/Practical_implementation_guides)
- [L'observatoire HTTP](/fr/observatory/) outil de test d'en-têtes
- [Configuration inter-origine <sup>(angl.)</sup>](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) sur adobe.com
- [`X-Permitted-Cross-Domain-Policies` <sup>(angl.)</sup>](https://owasp.github.io/www-project-secure-headers/response-headers/#x-permitted-cross-domain-policies) dans le projet OWASP Secure Headers
