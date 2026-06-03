---
title: URLs de ressource
short-title: "resource:"
slug: Web/URI/Reference/Schemes/resource
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{Non-standard_Header}}

Les URLs de type ressource sont les URLs préfixées à l'aide du schéma `resource:`. Elles sont utilisées par Firefox ainsi que les modules complémentaires pour charger des ressources de manière interne, néanmoins, certaines informations associées sont disponibles pour les sites auxquels le navigateur accède.

## Syntaxe

```url
resource://<path>
```

- `resource:`
  - : Le schéma de l'URL.
- `<path>`
  - : Un chemin pointant vers la ressource à charger.

Exemple&nbsp;:

```url
resource://gre/res/svg.css
```

Lorsque des flèches sont présentes dans l'URL de ressource («&nbsp;->&nbsp;»), cela signifie que le premier fichier charge le suivant&nbsp;:

```url
resource://<File-loader> -> <File-loaded>
```

Pour plus de détails, vous pouvez consulter [Identifier des ressources sur le Web](/fr/docs/Web/URI).

Dans cet article, nous abordons les URIs ressources qui sont utilisées par Firefox pour pointer vers des ressources internes.

## Menaces

Étant donné que les informations partagées par les URLs `resource:` sont accessibles par les sites web, une page web pourrait être en mesure d'exécuter un script pour inspecter les ressources internes à Firefox telles que les préférences par défaut, ce qui pourrait constituer un problème important de confidentialité et de sécurité.

Par exemple, [ce script sur Browserleaks <sup>(angl.)</sup>](https://www.browserleaks.com/firefox) détaille les éléments accessibles de Firefox lorsque l'on appelle l'URL ressource. Le code de ce script est accessible à l'adresse <https://browserleaks.com/firefox#more>.

Le fichier firefox.js transmet les noms et valeurs de préférences à la fonction `pref()`. Par exemple&nbsp;:

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

Les sites web peuvent aisément récupérer les préférences par défaut de Firefox en contournant la fonction `pref()` et en utilisant le script `resource:///defaults/preferences/firefox.js`.

De plus, certaines valeurs par défaut diffèrent selon les versions ou les installations, parmi lesquelles le système d'exploitation ou la langue d'utilisation, il est donc possible d'identifier les utilisateur·ice·s de manière distincte.

## Solution

Afin de résoudre ce problème, Mozilla a modifié le comportement du chargement des URLs ressource via [bug Firefox 863246 <sup>(angl.)</sup>](https://bugzil.la/863246), rendu disponible à partir de [Firefox 57 (Quantum)](/fr/docs/Mozilla/Firefox/Releases/57).

Auparavant, les sites web étaient capables d'accéder à n'importe quelle URI `resource:`, celles de Firefox mais aussi celles des modules complémentaires. Ce comportement est désormais interdit par défaut.

Firefox nécessite néanmoins le chargement des ressources au sein d'un contenu web dans certains cas. Ainsi lorsque l'on souhaite accéder au code source d'une page à l'aide de "Code source de la page", un appel à `viewsource.css` via une URI `resource:` est nécessaire. Les ressources auxquelles le contenu web a besoin d'accéder ont été déplacées sous `resource://content-accessible/`, une partie isolée et ne contenant que des ressources n'étant pas confidentielles. De cette manière, il est possible d'exposer des ressources tout en réduisant la plupart des menaces.

> [!NOTE]
> Il est recommandé de ne plus utiliser les URLs de type ressource lors du développement web ou de celui d'un module. Leur utilisation était peu fiable et la plupart ne fonctionnent plus.

## Spécifications

`resource:` n'est défini dans aucune spécification.

## Compatibilité des navigateurs

`resource:` est disponible uniquement dans Firefox.

## Voir aussi

- [URIs](/fr/docs/Web/URI)
- [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [Liste des schémas URI maintenue par l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:` est [défini ici <sup>(angl.)</sup>](https://www.iana.org/assignments/uri-schemes/prov/resource))
