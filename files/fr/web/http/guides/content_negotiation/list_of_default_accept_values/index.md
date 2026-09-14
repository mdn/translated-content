---
title: Liste des valeurs par défaut de l'en-tête Accept
short-title: Valeurs par défaut de Accept
slug: Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Cet article documente les valeurs par défaut de l'en-tête HTTP [`Accept`](/fr/docs/Web/HTTP/Reference/Headers/Accept) pour des entrées et des versions de navigateurs spécifiques.

## Valeurs par défaut

Voici les valeurs envoyées lorsque le contexte ne fournit pas de meilleure information.
Notez que tous les navigateurs ajoutent le type MIME `*/*` pour couvrir tous les cas.
C'est généralement utilisé pour les requêtes initiées par la barre d'adresse d'un navigateur ou avec un élément HTML {{HTMLElement("a")}}.

| Agent utilisateur                       | Valeur                                                                                                                                    |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 132 et versions ultérieures [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 128 à 131                       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                           |
| Firefox 92 à 127                        | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                   |
| Firefox 72 à 91 [2]                     | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 66 à 71 [2]                     | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 65 [2]                          | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 64 et versions antérieures [2]  | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Safari 13.1 à 18.1+ [4]                 | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Chrome 131+ [4]                         | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7` |
| Safari, Chrome [4]                      | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                   |
| Safari 5 [3]                            | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Edge                                    | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                        |
| Opera                                   | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`       |

\[1] La valeur peut être définie sur une chaîne de caractères arbitraire à l'aide de la préférence `network.http.accept` (`about:config`).

\[2] La valeur peut être définie sur une chaîne de caractères arbitraire à l'aide de la préférence [`network.http.accept.default` <sup>(angl.)</sup>](https://kb.mozillazine.org/Network.http.accept.default) (`about:config`).

\[3] Il s'agit d'une amélioration par rapport aux en-têtes `Accept` antérieurs, car `image/png` n'est plus classé avant `text/html`.

\[4] Les valeurs ont été revérifiées et ajoutées pour Safari 13.1 à 18.1 et Chrome 131. Les valeurs peuvent avoir changé avant les versions définies.

## Valeurs pour une image

Lorsqu'une image est demandée, par exemple avec un élément HTML {{HTMLElement("img")}}, l'agent utilisateur définit souvent une liste spécifique de types de médias acceptés.

| Agent utilisateur                          | Valeur                                                                     |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| Firefox 128 et versions ultérieures [1]    | `image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`    |
| Firefox 92 à 127 [1]                       | `image/avif,image/webp,*/*`                                                |
| Firefox 65 à 91 [1]                        | `image/webp,*/*`                                                           |
| Firefox 47 à 63 [1]                        | `*/*`                                                                      |
| Firefox antérieur à 47 [1]                 | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari (depuis Mac OS Big Sur)             | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari (avant Mac OS Big Sur)              | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome et Edge 121 et versions ultérieures | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] La valeur peut être définie sur une chaîne de caractères arbitraire à l'aide du paramètre `image.http.accept` (_[source <sup>(angl.)</sup>](https://searchfox.org/firefox-main/search?q=image.http.accept)_).

## Valeurs pour une vidéo

Lorsqu'une vidéo est demandée, avec l'élément HTML {{HTMLElement("video")}}, la plupart des navigateurs utilisent des valeurs spécifiques.

| Agent utilisateur                   | Valeur                                                                             |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| Firefox 3.6 et versions ultérieures | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox antérieur à 3.6             | _pas de prise en charge de {{HTMLElement("video")}}_                               |
| Chrome                              | `*/*`                                                                              |

## Valeurs pour les ressources audio

Lorsqu'un fichier audio est demandé, comme avec l'élément HTML {{HTMLElement("audio")}}, la plupart des navigateurs utilisent des valeurs spécifiques.

| Agent utilisateur                       | Valeur                                                                                       |
| --------------------------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 et versions ultérieures [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome                          | `*/*`                                                                                        |

\[1] Voir [bogue 489071 <sup>(angl.)</sup>](https://bugzil.la/489071).

## Valeurs pour les scripts

Lorsqu'un script est demandé, comme avec l'élément HTML {{HTMLElement("script")}}, certains navigateurs utilisent des valeurs spécifiques.

| Agent utilisateur | Valeur |
| ----------------- | ------ |
| Firefox [1]       | `*/*`  |
| Safari, Chrome    | `*/*`  |

\[1] Voir [bogue 170789 <sup>(angl.)</sup>](https://bugzil.la/170789).

## Valeurs d'une feuille de style CSS

Lorsqu'une feuille de style CSS est demandée, à l'aide de l'élément HTML `<link rel="stylesheet">`, la plupart des navigateurs utilisent des valeurs spécifiques.

| Agent utilisateur | Valeur                                                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]     | `text/css,*/*;q=0.1`                                                                                                                |
| Safari, Chrome    | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10       | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6     | `text/css,*/*;q=0.1`                                                                                                                |

\[1] Voir [bogue 170789 <sup>(angl.)</sup>](https://bugzil.la/170789).

## Voir aussi

- [Négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation)
