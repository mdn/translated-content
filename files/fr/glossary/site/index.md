---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

De façon informelle, un _site_ est un site web, c'est-à-dire un ensemble de pages web, servies depuis un même domaine, et maintenues par une seule organisation, défini par son {{Glossary("registrable domain", "domaine enregistrable")}}.

Les navigateurs doivent parfois distinguer précisément les différents sites. Par exemple, un navigateur ne doit partager des cookies [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) que pour le même site que celui qui a écrit ces cookies.

Pour cette définition plus précise, un site est déterminé selon la portion du nom de domaine qui est _le domaine enregistrable_. Le domaine enregistrable se termine par un suffixe parmi ceux de [la liste des suffixes publics](https://publicsuffix.org/list/) et contient le nom de domaine juste avant ce suffixe. Cela signifie que `lemonde.fr`, `sussex.ac.uk`, et `wikipedia.org` sont tous des domaines enregistrables.

En prenant cette définition, `support.mozilla.org` et `developer.mozilla.org` font partie du même site, car `mozilla.org` est un domaine enregistrable.

Dans certains contextes, le schéma rentre également en considération pour distinguer les sites (dans ce cas, on a alors `http://vpl.ca` et `https://vpl.ca` qui sont deux sites différents). Ajouter le schéma à la définition permet d'éviter qu'un site non-sécurisé (en HTTP) soit traité de la même façon qu'un site sécurisé (en HTTPS). Cette définition plus stricte est appliquée par les règles de gestion des cookies [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value).

> [!NOTE]
> Les navigateurs prennent parfois des décisions de sécurité (par exemple, décider à quelles ressources un script peut accéder) en se basant sur {{Glossary("Origin", "l'origine")}} d'une ressource. Ce concept est plus restrictif que celui de site, car il englobe le schéma, l'ensemble du domaine et le port. Voir aussi [la règle de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).

## Exemples

Pour les deux URL qui suivent, on a le même site, car le domaine enregistrable, `mozilla.org`, est le même (les noms d'hôte et chemins de fichier différents n'ont pas d'importance)&nbsp;:

- `https://developer.mozilla.org/fr/docs/`
- `https://support.mozilla.org/fr/`

Là encore, ce sont les mêmes sites, car le schéma et le port ne sont pas pertinents&nbsp;:

- `https://example.com:8080`
- `https://example.com`

Ici, ce ne sont pas les mêmes sites, car les domaines enregistrables des deux URL sont différents&nbsp;:

- `https://developer.mozilla.org/fr/docs/`
- `https://example.com`

Si on ne prend pas le schéma en considération, ces deux URL porteront sur le même site&nbsp;:

- `http://example.com`
- `https://example.com`

## Voir aussi

- [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Origin", "Origine")}}
  - {{Glossary("Registrable domain", "Domaine enregistrable")}}
- [La règle de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
