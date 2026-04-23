---
title: Identifiants Uniformes de Ressources (URIs)
short-title: URIs
slug: Web/URI
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

Les **Identifiants Uniformes de Ressources (URI)** sont utilisés pour identifier les «&nbsp;ressources&nbsp;» sur le Web. Les URI sont couramment utilisés comme cibles de requêtes [HTTP](/fr/docs/Web/HTTP), auquel cas l'URI représente l'emplacement d'une ressource, telle qu'un document, une photo ou des données binaires. Le type d'URI le plus courant est l'identifiant uniforme de ressource ({{Glossary("URL")}}), également appelé _adresse Web_.

Les URI peuvent être utilisées pour déclencher des actions autres que la récupération d'une ressource, notamment l'ouverture d'un client de messagerie électronique, l'envoi de messages texte ou l'exécution de JavaScript, lorsqu'elles sont utilisées à d'autres endroits, tels que l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) d'un lien HTML `<a>`.

## Référence

La [Référence URI](/fr/docs/Web/URI/Reference) fournit des détails sur les composants qui constituent une URI.

- [Schémas](/fr/docs/Web/URI/Reference/Schemes)
  - : La première partie de l'URI, avant le caractère `:`, qui indique le protocole que le navigateur doit utiliser pour récupérer la ressource.
- [Autorité](/fr/docs/Web/URI/Reference/Authority)
  - : Section qui suit le schéma et précède le chemin. Elle peut comporter jusqu'à trois parties&nbsp;: informations `user`, `host`, et `port`.
- [Chemin](/fr/docs/Web/URI/Reference/Path)
  - : La section après l'autorité. Contient des données, généralement organisées sous forme hiérarchique, permettant d'identifier une ressource dans le cadre du schéma et de l'autorité de l'URI
- [Fragment](/fr/docs/Web/URI/Reference/Fragment)
  - : Une partie facultative à la fin d'une URI commençant par le caractère `#`. Elle sert à identifier une partie spécifique de la ressource, telle qu'une section d'un document ou une position dans une vidéo.

## Guides

Le [Guides URI](/fr/docs/Web/URI/Guides) vous aident à utiliser les URI sur le Web.

- [Choisir entre les URL avec www et sans www](/fr/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : Conseils sur les cas où les sites doivent utiliser le préfixe `www.` dans les URL (`www.example.fr` contre `example.fr`).

## Spécifications

{{Specifications}}

## Voir aussi

- [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
