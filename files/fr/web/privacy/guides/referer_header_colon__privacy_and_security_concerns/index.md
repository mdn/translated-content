---
title: "En-tête Referer : problèmes de confidentialité et de sécurité"
slug: Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: bb435e7556282e5dbe5ae9476b0a185c3d3ede32
---

L'[en-tête HTTP Referer](/fr/docs/Web/HTTP/Reference/Headers/Referer) présente des risques de confidentialité et de sécurité. Cet article les décrit et donne des conseils pour les minimiser.

## Le problème du référent

L'en-tête `{{HTTPHeader("Referer")}}` (sic) contient l'adresse de la page web précédente lorsqu'un lien vers la page actuelle a été suivi, ce qui offre de nombreuses possibilités légitimes comme l'analyse, la journalisation ou la mise en cache optimisée. Cependant, il existe des utilisations plus problématiques telles que le suivi ou le vol d'informations, ou même des effets secondaires tels que la fuite accidentelle d'informations sensibles.

Par exemple, considérons une page de «&nbsp;réinitialisation de mot de passe&nbsp;» comportant un lien vers un réseau social dans le pied de page. Si le lien a été suivi, selon la façon dont l'information a été partagée, le réseau social peut recevoir l'URL de réinitialisation du mot de passe et peut toujours être en mesure d'utiliser l'information partagée, ce qui pourrait compromettre la sécurité de l'utilisateur·ice.

Selon la même logique, une image hébergée chez un tiers, mais intégrée à votre page, pourrait entrainer la fuite d'informations sensibles pour le tiers. Même si la sécurité n'est pas compromise, l'information peut ne pas être quelque chose que l'utilisateur·ice veut partager.

## Comment régler ce problème ?

Une grande partie de ce risque peut être atténuée en concevant de manière adéquate les applications. Une application correctement conçue éliminerait ces risques en ne donnant la possibilité d'utiliser qu'une seule fois les URLs de réinitialisation, ou en associant ces URLs à un jeton d'utilisateur·ice unique, et en transmettant les données sensibles par différents moyens.

Vous devez utiliser {{HTTPMethod("POST")}} plutôt que {{HTTPMethod("GET")}} dans la mesure du possible, pour éviter de transmettre des données sensibles à d'autres emplacements via des URL.

Vous devriez toujours utiliser {{Glossary("HTTPS")}} pour vos sites. Cela présente de nombreux avantages en matière de sécurité, y compris le fait que les sites HTTPS ne transmettent jamais le `referer` à des sites non-HTTPS. C'est aujourd'hui de moins en moins nécessaire maintenant que la plupart des sites Web utilisent HTTPS, mais cela reste malgré tout un élément à prendre en compte.

De plus, vous devriez envisager de supprimer tout contenu provenant d'un tiers (ex., les composants de réseautage social inclus dans des {{HTMLElement("iframe")}}) des zones sécurisées de vos sites Web, comme les pages de réinitialisation de mots de passe, les formulaires de paiement, les interfaces de connexion, etc.

Vous pouvez également atténuer ces risques en utilisant&nbsp;:

- L'en-tête {{HTTPHeader("Referrer-Policy")}} côté serveur pour contrôler quelles informations sont envoyées via l'en-tête {{HTTPHeader("Referer")}}. Par exemple, une directive `no-referrer` omettrait entièrement l'en-tête Referer.
- L'attribut `referrerpolicy` sur les éléments HTML susceptibles de fuiter ces informations (comme {{HTMLElement("img")}} et {{HTMLElement("a")}}). Il peut, par exemple, être réglé sur `no-referrer` pour empêcher complètement l'envoi de l'en-tête `Referer`.
- L'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) défini sur la valeur [`noreferrer`](/fr/docs/Web/HTML/Reference/Attributes/rel/noreferrer) pour les éléments HTML susceptibles de fuiter ces informations (par exemple {{HTMLElement("form")}} et {{HTMLElement("a")}}).
- Un élément {{HTMLElement("meta")}} avec un [name](/fr/docs/Web/HTML/Reference/Elements/meta/name) `referrer` et le contenu réglé sur `no-referrer` pour désactiver l'en-tête Referer pour l'ensemble du document. Voir [Intégration de Referrer-Policy avec HTML](/fr/docs/Web/HTTP/Reference/Headers/Referrer-Policy#intégration_avec_html).
- La technique de la [page de sortie <sup>(angl.)</sup>](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect).

Les frameworks soucieux de la sécurité employés côté serveur ont tendance à inclure d'emblée des mesures d'atténuation pour résoudre ces problèmes, par exemple&nbsp;:

- [Sécurité dans Django](https://docs.djangoproject.com/fr/stable/topics/security/) (voir notamment [Cross site request forgery (CSRF) protection](https://docs.djangoproject.com/fr/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [helmet referrer-policy <sup>(angl.)</sup>](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — middleware pour configurer l'en-tête Referrer-Policy dans les applications Node.js/Express (voir aussi [Helmet <sup>(angl.)</sup>](https://github.com/helmetjs) pour d'autres mesures de sécurité).

## Politique et exigences

Il serait pertinent de rédiger pour votre (vos) équipe(s) de projet un ensemble d'exigences en matière de sécurité et de protection des renseignements personnels en en précisant l'utilisation dans le cadre de l'atténuation des risques. Vous devriez demander l'aide d'un expert en sécurité Web pour rédiger ces exigences en tenant compte à la fois des besoins et du bien-être des utilisateur·ice·s, ainsi que d'autres questions liées à la législation et la réglementation comme le [Réglement Général à la Protection des Données de l'Union Européenne](https://gdpr.eu/) (RGPD).

## Voir aussi

- [Lignes directrices de l'équipe de sécurité de Mozilla sur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
