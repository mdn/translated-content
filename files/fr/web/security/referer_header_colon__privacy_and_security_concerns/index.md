---
title: "Referer header: privacy and security concerns"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
---

L'[entête HTTP Referer](/fr/docs/Web/HTTP/Headers/Referer) présente des risques de confidentialité et de sécurité[.](/fr/docs/Web/HTTP/Headers/Referer) Cet article les décrit et donne des conseils pour les minimiser.

## Le problème

L'en-tête `{{httpheader("Referer")}}` (sic) contient l'adresse de la page web précédente lorsqu'un lien vers la page actuelle a été suivi, ce qui offre de nombreuses possibilités légitimes comme l'analyse, la journalisation ou la mise en cache optimisée. Cependant, il existe des utilisations plus problématiques telles que le suivi ou le vol d'informations, ou même des effets secondaires tels que la fuite accidentelle d'informations sensibles.

Par exemple, considérons une page de réinitialisation de mot de passe comportant un lien vers un réseau social dans le pied de page. Si le lien a été suivi, selon la façon dont l'information a été partagée, le réseau social peut recevoir l'URL de réinitialisation du mot de passe et peut toujours être en mesure d'utiliser l'information partagée, ce qui pourrait compromettre la sécurité de l'utilisateur.

Selon la même logique, une image hébergée chez un tiers, mais intégrée à votre page, pourrait entrainer la fuite d'informations sensibles pour le tiers. Même si la sécurité n'est pas compromise, l'information peut ne pas être quelque chose que l'utilisateur veut partager.

## Comment régler ce problème ?

Une grande partie de ce risque peut être atténuée en concevant de manière adéquate les applications. Une application correctement conçue éliminerait ces risques en ne donnant la possibilité d'utiliser qu'une seule fois les URLs de réinitialisation, ou en associant ces URLs à un jeton utilisateur unique, et en transmettant les données sensibles par différents moyens.

Vous devez utiliser `POST` plutôt que `GET` dans la mesure du possible, pour éviter de transmettre des données sensibles à d'autres emplacements via des URL.

Vous devriez toujours utiliser `{{glossary("HTTPS")}}` pour vos sites. Cela présente de nombreux avantages en matière de sécurité, y compris le fait que les sites HTTPS ne transmettent jamais le "referer" à des sites non-HTTPS. C'est aujourd'hui de moins en moins nécessaire maintenant que la plupart des sites Web utilisent HTTPS, mais cela reste malgré tout un élément à prendre en compte.

De plus, vous devriez envisager de supprimer tout contenu provenant d'un tiers (ex., les widgets de réseautage social inclus dans des `{{htmlelement("iframe")}})` des zones sécurisées de vos sites Web, comme les pages de réinitialisation de mots de passe, les formulaires de paiement, les interfaces de connexion, etc.

Vous pouvez également atténuer ces risques en utilisant :

- L'en-tête `{{httpheader("Referrer-Policy")}}` sur votre serveur pour contrôler quelle information est envoyée par l'en-tête `Referer`. Encore une fois, une directive `no-referrer` omettrait intégralement l'en-tête `Referer`.
- L'attribut `referrerpolicy` sur les éléments HTML qui présentent des risques de fuite d'informations (comme `<img>` et `<a>`). Cet attribut peut prendre par exemple la valeur `no-referrer` afin d'empêcher l'envoi de l'en-tête `Referer`.
- L'attribut `rel` défini à `noreferrer` sur les éléments HTML à risques (comme `<img>` et \<a>). Voir Types de liens et rechercher `noreferrer` pour plus d'informations.
- La technique de la [page de sortie](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect).

Les frameworks soucieux de la sécurité employés côté serveur ont tendance à inclure d'emblée des mesures d'atténuation pour résoudre ces problèmes, par exemple&nbsp;:

- La sécurité dans Django (voir notamment Cross Site Request Forgery (CSRF) protection).
- helmet referrer-policy — middleware pour configurer l'entête Referrer-Policy dans les applications Node.js/Express (voir aussi helmet pour plus d'aménagements liés à la sécurité).

## Politique et exigences

Il serait pertinent de rédiger pour votre (vos) équipe(s) de projet un ensemble d'exigences en matière de sécurité et de protection des renseignements personnels en en précisant l'utilisation dans le cadre de l'atténuation des risques. Vous devriez demander l'aide d'un expert en sécurité Web pour rédiger ces exigences en tenant compte à la fois des besoins et du bien-être des utilisateurs, ainsi que d'autres questions liées à la législation et la réglementation comme le [Réglement Général à la Protection des Données de l'Union Européenne](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_fr).

## Voir aussi

- [Lignes directrices de l'équipe de sécurité de Mozilla sur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
