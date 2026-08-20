---
title: Sécurité
slug: Web/Security
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

La sécurité web est la pratique consistant à protéger les sites web et leurs utilisateur·ice·s contre les dommages causés par des tiers malveillants, généralement appelés _attaquant·e·s_.

Les dommages peuvent être d'ordre réputationnel, financier, voire physique. Ils peuvent viser des données qui doivent rester privées pour les utilisateur·ice·s, ou des actions qui ne doivent être accessibles qu'à certain·e·s utilisateur·ice·s. Les motivations des attaquant·e·s peuvent être financières, politiques ou personnelles.

Dans cette partie de MDN, nous avons rédigé des guides pour aider les développeur·euse·s web à comprendre comment protéger leurs sites web et leurs utilisateur·ice·s contre ces attaques.

La documentation est organisée en quatre sections principales&nbsp;:

- [Attaques](/fr/docs/Web/Security/Attacks)
- [Défenses](/fr/docs/Web/Security/Defenses)
- [Modélisation des menaces](/fr/docs/Web/Security/Threat_modeling)
- [Authentification](/fr/docs/Web/Security/Authentication)

Dans cette page, nous allons présenter chacune de ces sections et lister les guides qu'elles contiennent. Mais d'abord, nous allons énumérer les principales pratiques de sécurité que les développeur·euse·s web doivent suivre.

## Principales pratiques de sécurité

La sécurité web peut être complexe&nbsp;: il existe de nombreuses menaces potentielles, les défenses sont souvent complexes et à plusieurs niveaux, et l'ensemble des menaces que vous devez prendre en compte dépend fortement de ce que fait exactement votre site web. Dans cette section, nous résumons ce que nous pensons être les choses les plus importantes que vous pouvez faire, qui offrent une protection contre la plupart des menaces que vous rencontrez.

- **Utiliser le [HTTPS](/fr/docs/Web/Security/Defenses/Transport_Layer_Security)** pour servir toutes les pages et sous-ressources de votre site.

- **Définir une [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP)** pour votre site.
  - Si possible, définissez une [CSP stricte](/fr/docs/Web/HTTP/Guides/CSP#csp_stricte), mais sinon, définissez au moins une politique qui [interdit le JavaScript en incise](/fr/docs/Web/HTTP/Guides/CSP#javascript_en_incise).
  - Définir la directive CSP [`frame-ancestors`](/fr/docs/Web/HTTP/Guides/CSP#protection_contre_lusurpation_de_clic) pour contrôler si les pages peuvent être intégrées dans des contextes de navigation imbriqués.

  - Définir la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Guides/CSP#exiger_les_types_de_confiance) pour aider à garantir que le contenu a été assaini avant d'être transmis à des API potentiellement dangereuses.

- **Contrôler les requêtes inter-origines**&nbsp;: réfléchissez à la question de savoir si vous souhaitez autoriser d'autres {{Glossary("origin", "origines")}} à effectuer des requêtes vers votre site, et dans quelles circonstances, et utilisez les [métadonnées de récupération](/fr/docs/Web/HTTP/Guides/Fetch_metadata) pour contrôler cela.

- **Limiter l'accès aux cookies que votre site définit**. En particulier&nbsp;:
  - Définir l'attribut [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) sur `Strict` si possible, ou `Lax` sinon.
  - Définir les attributs [`Secure`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) et [`HttpOnly`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly), si possible.
  - Minimiser la durée de vie des cookies utilisés pour représenter les utilisateur·ice·s connecté·e·s.

- **Traiter les entrées de manière sécurisée**&nbsp;: si votre site accepte des entrées de la part de l'utilisateur·ice ou d'un autre système, [validez-les](/fr/docs/Web/Security/Defenses/Input_validation). Avant d'intégrer une entrée dans les pages de votre site, effectuez un [encodage de sortie](/fr/docs/Web/Security/Attacks/XSS#encodage_de_sortie) ou une [assainissement](/fr/docs/Web/Security/Attacks/XSS#assainissement).

- **Utiliser [l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)** pour tous les scripts que vous chargez à partir de sources externes (comme les {{Glossary("CDN")}}).

- **Utiliser des méthodes d'authentification fortes**&nbsp;: si vous authentifiez des utilisateur·ice·s sur votre site, n'utilisez pas uniquement des [mots de passe](/fr/docs/Web/Security/Authentication/Passwords). Les [clés d'accès](/fr/docs/Web/Security/Authentication/Passkeys) sont la méthode d'authentification la plus sécurisée, mais si vous ne pouvez pas les utiliser, les [mots de passe à usage unique basés sur le temps (TOTP)](/fr/docs/Web/Security/Authentication/OTP#totp) sont plus sécurisés que les mots de passe traditionnels.

- **Suivre les bonnes [pratiques de sécurité opérationnelle](/fr/docs/Web/Security/Defenses/Operational_security)**&nbsp;: contrôlez l'accès au code source de votre projet, gérez les secrets de manière sécurisée et contrôlez vos dépendances.

Voir aussi les [Directives pour les applications Web sécurisées <sup>(angl.)</sup>](https://w3c-cg.github.io/swag/docs/swag.html).

## Attaques

La section [Attaques](/fr/docs/Web/Security/Attacks) comprend des guides sur les attaques courantes contre les sites Web. Une attaque est une technique spécifique qu'un·e attaquant·e peut utiliser pour nuire aux sites Web ou à leurs utilisateur·ice·s.

Chaque guide couvre une attaque spécifique (ou une classe d'attaques apparentées), expliquant son fonctionnement, les conditions dans lesquelles un site Web devient vulnérable et comment s'en défendre.

Les attaques décrites incluent&nbsp;:

- [Détournement de clic](/fr/docs/Web/Security/Attacks/Clickjacking)
- [Falsification de requête inter-sites (CSRF)](/fr/docs/Web/Security/Attacks/CSRF)
- [Fuites inter-sites (XS-Leaks)](/fr/docs/Web/Security/Attacks/XS-Leaks)
- [Scripts inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS)
- [Référence directe à un objet non sécurisée (IDOR)](/fr/docs/Web/Security/Attacks/IDOR)
- [Le monstre du milieu (MITM)](/fr/docs/Web/Security/Attacks/MITM)
- [Hameçonnage](/fr/docs/Web/Security/Attacks/Phishing)
- [Pollution de prototype](/fr/docs/Web/Security/Attacks/Prototype_pollution)
- [Falsification de requête côté serveur (SSRF)](/fr/docs/Web/Security/Attacks/SSRF)
- [Prise de contrôle de sous-domaine](/fr/docs/Web/Security/Attacks/Subdomain_takeover)
- [Attaques sur la chaîne d'approvisionnement](/fr/docs/Web/Security/Attacks/Supply_chain_attacks)

## Défenses

La section [Défenses](/fr/docs/Web/Security/Defenses) comprend des guides sur les fonctionnalités ou les pratiques que vous pouvez utiliser pour vous protéger contre diverses attaques. En général, il existe une relation de plusieurs à plusieurs entre les attaques et les défenses. Autrement dit, une seule défense peut protéger contre plusieurs attaques, et se défendre contre une seule attaque peut nécessiter plusieurs défenses, afin de fournir une défense en profondeur.

Dans cette section, nous documentons les défenses suivantes&nbsp;:

- [Transparence des certificats](/fr/docs/Web/Security/Defenses/Certificate_Transparency)
- [Validation de saisie](/fr/docs/Web/Security/Defenses/Input_validation)
- [Blocage de contenu mixte](/fr/docs/Web/Security/Defenses/Mixed_content)
- [Sécurité opérationnelle](/fr/docs/Web/Security/Defenses/Operational_security)
- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
- [Contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts)
- [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)
- [Sécurité de la couche de transport (TLS)](/fr/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Activation de l'utilisateur](/fr/docs/Web/Security/Defenses/User_activation)

Notez que toutes les défenses ne sont pas décrites dans cette section&nbsp;: certaines, comme [CSP](/fr/docs/Web/HTTP/Guides/CSP) ou [types de confiance](/fr/docs/Web/API/Trusted_Types_API), sont décrites dans la section technologique dont elles font partie.

## Modélisation des menaces

Tous les sites web ne sont pas vulnérables à toutes les attaques&nbsp;: les attaques dont un·e développeur·euse doit se préoccuper dépendent des fonctionnalités offertes par le site et de la manière dont elles sont mises en œuvre.

La [modélisation des menaces](/fr/docs/Web/Security/Threat_modeling) est un processus que les développeur·euse·s web peuvent suivre pour élaborer une représentation structurée des menaces potentielles auxquelles leur site est confronté, et des défenses correspondantes qu'ils doivent mettre en œuvre.

Autrement dit, la modélisation des menaces vous aide à comprendre contre quelles attaques vous devez vous défendre, et comment vous défendre contre elles.

## Authentification

L'authentification est le processus de vérification qu'une entité — comme un·e utilisateur·rice d'un site web — est bien celle qu'elle prétend être. Vous devez très probablement réfléchir à l'authentification si vous souhaitez que les utilisateur·ice·s se connectent à votre site web.

Si des utilisateur·ice·s peuvent se connecter à votre site web, il y a généralement des actions qu'ils peuvent effectuer ou des données auxquelles ils peuvent accéder, que vous ne souhaitez pas rendre accessibles à tout le monde. Cela fait de l'accès aux comptes utilisateur·ice·s l'une des cibles les plus précieuses pour les attaquant·e·s.

Dans cet ensemble de guides, nous examinons les principales techniques disponibles pour authentifier les utilisateur·ice·s sur le web, ainsi que les bonnes pratiques associées. Nous décrivons quatre méthodes&nbsp;:

- [Mots de passe](/fr/docs/Web/Security/Authentication/Passwords)
- [Mots de passe à usage unique (OTP)](/fr/docs/Web/Security/Authentication/OTP)
- [Identité fédérée](/fr/docs/Web/Security/Authentication/Federated_identity)
- [Clés d'accès](/fr/docs/Web/Security/Authentication/Passkeys)

Dans cette section, nous présentons également les bonnes pratiques pour la [gestion des sessions](/fr/docs/Web/Security/Authentication/Session_management), c'est-à-dire la manière dont un site web se souvient de l'état de connexion d'un·e utilisateur·rice.

## Observatoire HTTP

L'outil [Observatoire HTTP](/fr/observatory) vous permet d'analyser votre site web pour vérifier s'il suit certaines bonnes pratiques de sécurité. Nos [guides pratiques de mise en œuvre de la sécurité](/fr/docs/Web/Security/Practical_implementation_guides) expliquent comment mettre en œuvre ces pratiques et les menaces contre lesquelles elles protègent.

## Voir aussi

- [Confidentialité sur le web](/fr/docs/Web/Privacy)
- [Apprendre&nbsp;: Sécurité des sites web](/fr/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Séries d'antisèches OWASP <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/index.html)
