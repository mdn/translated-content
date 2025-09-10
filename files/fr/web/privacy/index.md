---
title: La vie privée sur le Web
slug: Web/Privacy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Les gens utilisent les sites web pour plusieurs tâches importantes telles que les opérations bancaires, les achats, les loisirs et le paiement de leurs impôts. Ce faisant, ils sont tenus de partager des informations personnelles avec ces sites. Les utilisateurs accordent un certain niveau de confiance aux sites avec lesquels ils partagent leurs données. Si ces informations tombaient entre de mauvaises mains, elles pourraient être utilisées pour exploiter les utilisateurs, par exemple en établissant leur profil, en leur envoyant des publicités indésirables, voire en volant leur identité ou leur argent.

Les navigateurs modernes disposent déjà d'une multitude de fonctionnalités pour protéger la vie privée des utilisateurs sur le web, mais cela ne suffit pas. Pour créer une expérience fiable et respectueuse de la vie privée, les développeurs doivent sensibiliser les utilisateurs de leurs sites aux bonnes pratiques (et les faire respecter). Les développeurs doivent également créer des sites qui collectent le moins de données possible auprès des utilisateurs, utilisent ces données de manière responsable et les transportent et les stockent en toute sécurité.

Dans cet article, nous&nbsp;:

- Définissons la confidentialité et les termes importants qui y sont liés.
- Examinons les fonctionnalités des navigateurs qui protègent automatiquement la vie privée des utilisateurs.
- Examinons ce que les développeurs peuvent faire pour créer un contenu web respectueux de la vie privée qui minimise le risque que les informations/données personnelles des utilisateurs soient obtenues de manière inattendue par des tiers.

## Définition des termes et concepts liés à la vie privée

Avant d'examiner les différentes fonctionnalités de confidentialité et de sécurité disponibles sur le Web, définissons quelques termes importants.

### La confidentialité et sa relation avec la sécurité

Il est difficile de parler de confidentialité sans parler également de sécurité — ces deux notions sont étroitement liées, et il est impossible de créer des sites web respectueux de la vie privée sans une bonne sécurité. Nous allons donc définir ces deux notions.

- La **Confidentialité** fait référence au fait de donner aux utilisateurs le droit de contrôler la manière dont leurs données sont collectées, stockées et utilisées, et de ne pas les utiliser de manière irresponsable. Par exemple, vous devez clairement communiquer à vos utilisateurs quelles données vous collectez, avec qui elles seront partagées et comment elles seront utilisées. Les utilisateurs doivent avoir la possibilité d'accepter vos conditions d'utilisation des données, d'avoir accès à toutes les données que vous stockez et de les supprimer s'ils ne souhaitent plus que vous les conserviez. Vous devez également respecter vos propres conditions&nbsp;: rien ne sape autant la confiance des utilisateurs que l'utilisation et le partage de leurs données à des fins auxquelles ils n'ont jamais consenti. En plus d'être contraire à l'éthique, cela pourrait être illégal. De nombreux pays ont désormais adopté des lois qui protègent les droits des consommateurs en matière de confidentialité (par exemple, la [RGPD](https://gdpr.eu/) en Europe).

- La **Sécurité** consiste à protéger les données et les systèmes privés contre tout accès non autorisé. Cela inclut à la fois les données de l'entreprise (internes) et les données des utilisateurs et des partenaires (externes). Il ne sert à rien d'avoir une politique de confidentialité solide qui inspire confiance à vos utilisateurs si votre sécurité est faible et que des personnes malveillantes peuvent voler leurs données de toute façon.

### Informations personnelles et privées

Les **informations personnelles** sont toutes les informations qui décrivent un utilisateur. Voici quelques exemples&nbsp;:

- Adresse postale, adresse e-mail, numéro de téléphone ou autres coordonnées
- Numéro de passeport, compte bancaire, carte de crédit, numéro de sécurité sociale ou autres identifiants officiels
- Attributs physiques tels que la taille, l'expression de genre, le poids, la couleur des cheveux ou l'âge
- Des informations sur la santé telles que les antécédents médicaux, les allergies ou les conditions en cours
- Noms d'utilisateur, lorsqu'ils peuvent être liés à un individu
- Passe-temps, intérêts ou autres préférences personnelles
- Des données biométriques telles que les empreintes digitales ou les données de reconnaissance faciale

Les **informations privées** sont toutes les informations que les utilisateurs ne souhaitent pas partager publiquement et qui doivent rester confidentielles (c'est-à-dire les informations accessibles uniquement à un certain groupe d'utilisateurs autorisés). Certaines données privées sont confidentielles en vertu de la loi (par exemple, les données médicales), tandis que d'autres le sont davantage par préférence personnelle.

### Informations personnellement identifiables

Dans le prolongement de la section ci-dessus, les **informations personnelles identifiables** (PII) sont des informations qui peuvent être utilisées, en tout ou en partie, pour retrouver et/ou identifier une personne spécifique. Par exemple, si un site divulgue en ligne une liste des noms et codes postaux de ses utilisateurs, un acteur malveillant pourrait très certainement utiliser ces informations pour trouver leurs adresses complètes. Même si aucune fuite à grande échelle ne se produit, il est toujours possible d'identifier les utilisateurs par des moyens moins évidents, tels que les navigateurs qu'ils utilisent, les appareils qu'ils utilisent, les polices spécifiques qu'ils ont installées, etc.

### Suivi (Tracking)

Le **suivi** désigne le processus consistant à enregistrer l'activité d'un utilisateur sur différents sites web. Cela peut se faire de différentes manières, par exemple&nbsp;:

- En examinant plusieurs [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) définis sur différents sites où du contenu tiers est intégré afin de trouver diverses informations sur l'utilisateur.
- En examinant l'en-tête {{httpheader("Referer")}} pour voir d'où vient l'utilisateur.
- En incluant des paramètres dans les URL des liens entrants (par exemple, dans les publicités intégrées renvoyant vers des pages de produits ou dans les e-mails marketing) qui peuvent révéler au site lié l'origine du lien, la campagne marketing dont il fait partie, l'adresse e-mail ou tout autre identifiant de l'utilisateur qui a cliqué dessus, etc. Ce processus est appelé « décoration de lien » et donne lieu à des URL de lien qui ressemblent à ceci&nbsp;: `https://exemple.fr/article/?id=62yhgt1a&campagne=902`.
- Le suivi par redirection, qui consiste pour les trackers à rediriger momentanément (et de manière imperceptible) un utilisateur vers leur site web afin d'utiliser le stockage de première partie pour suivre cet utilisateur sur différents sites web. Cela permet aux trackers de contourner le blocage des cookies tiers. Par exemple, si vous avez lu une critique d'un produit et que vous souhaitez cliquer pour l'acheter, vous pouvez être redirigé sans le savoir vers le tracker de redirection, puis vers le détaillant. Cela signifie que le tracker est chargé en tant que partie première et peut associer les données de suivi aux identifiants qu'il a stockés dans ses cookies de première partie avant de vous rediriger vers le détaillant.

Les données de suivi peuvent être utilisées pour établir le profil d'un utilisateur, ses centres d'intérêt et ses préférences, ce qui est généralement néfaste et peut être gênant à divers degrés. Par exemple&nbsp;:

- **Annonces ciblées**&nbsp;: tout le monde a déjà vécu l'expérience désagréable de rechercher des articles à acheter sur un appareil, puis d'être soudainement bombardé de publicités pour ces mêmes produits sur tous ses autres appareils.
- **Vendre ou partager des données**&nbsp;: certains tiers sont connus pour compiler des données de suivi, puis les vendre ou les partager avec d'autres à des fins diverses, comme les publicités ciblées. Cette pratique est manifestement contraire à l'éthique et peut également être illégale, selon le pays où elle est exercée.
- **Préjugés liés aux données**&nbsp;: dans le pire des cas, le partage de données peut entraîner un désavantage injustifié pour l'utilisateur. Imaginons, par exemple, qu'une compagnie d'assurance découvre des données sur un client potentiel que celui-ci n'a pas accepté de partager, et qu'elle les utilise pour justifier une augmentation des primes d'assurance.

### Empreinte digitale

Un processus très étroitement lié au suivi est l'**empreinte digitale**&nbsp;: il s'agit plus précisément d'identifier les utilisateurs en constituant une base de données les différenciant des autres utilisateurs. Il peut s'agir de tout élément, du contenu des cookies au navigateur utilisé, en passant par les polices installées localement.

Les navigateurs modernes prennent des mesures pour aider à prévenir les attaques basées sur les empreintes digitales, soit en empêchant l'accès aux informations, soit, lorsque celles-ci doivent être mises à disposition, en introduisant des variations ou du «&nbsp;bruit&nbsp;» qui empêchent leur utilisation à des fins d'identification.

Par exemple, si un site web interroge le navigateur d'un utilisateur sur le temps écoulé, une comparaison de ce temps avec celui signalé par le serveur peut être utile comme facteur d'empreinte digitale. C'est pourquoi les navigateurs introduisent généralement une légère variabilité dans les minuteries afin de les rendre moins utiles pour identifier le système de l'utilisateur.

> [!NOTE]
> Consultez la section [Empreintes digitales <sup>(angl.)</sup>](https://web.dev/learn/privacy/fingerprinting/) sur web.dev pour obtenir des informations supplémentaires utiles.

## Fonctionnalités de confidentialité fournies par les navigateurs

Les fournisseurs de navigateurs sont conscients de la nécessité de protéger la vie privée des utilisateurs et des effets négatifs du suivi, de l'empreinte digitale, etc. sur l'expérience utilisateur. À cette fin, ils ont mis en place diverses fonctionnalités qui renforcent la protection de la vie privée et/ou atténuent les menaces. Dans cette section, nous examinons différentes catégories de protection de la vie privée que les navigateurs appliquent automatiquement.

### HTTPS par défaut

Le [protocole TLS (Transport Layer Security)](/fr/docs/Web/Security/Transport_Layer_Security) assure la sécurité et la confidentialité en chiffrant les données pendant leur transport sur le réseau. Il s'agit de la technologie qui sous-tend le protocole [HTTPS](/fr/docs/Glossary/HTTPS). Le protocole TLS est efficace pour protéger la confidentialité, car il empêche des tiers d'intercepter les données transmises et de les utiliser à des fins malveillantes, par exemple pour effectuer un suivi.

Tous les navigateurs tendent à exiger le protocole HTTPS par défaut. C'est déjà pratiquement le cas, car il est difficile d'utiliser Internet sans ce protocole.

Les rubriques connexes sont les suivantes&nbsp;:

- [Transparence des certificats](/fr/docs/Web/Security/Certificate_Transparency)
  - : Un standard ouvert pour surveiller et auditer les certificats, créant une base de données de journaux publics qui peut être utilisée pour aider à identifier les certificats incorrects ou malveillants.
- [HTTP Strict Transport Security (HSTS)](/fr/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS est utilisé par les serveurs pour se protéger contre les attaques de rétrogradation de protocole et de détournement de cookies en permettant aux sites de dire aux clients qu'ils ne peuvent utiliser HTTPS que pour communiquer avec le serveur.
- [HTTP/2](/fr/docs/Glossary/HTTP_2)
  - : Bien que HTTP/2 n'_ait_ techniquement pas besoin d'utiliser le chiffrement, la plupart des développeurs de navigateurs ne le prennent en charge que lorsqu'il est utilisé avec HTTPS&nbsp;; à cet égard, il peut être considéré comme une fonctionnalité visant à améliorer la sécurité et la confidentialité.

### Activer les « fonctionnalités avancées »

Les soi-disant fonctionnalités "puissantes" des API Web qui fournissent un accès à des données et des opérations potentiellement sensibles ne sont disponibles que dans des [contextes sécurisés](/fr/docs/Web/Security/Secure_Contexts), ce qui signifie essentiellement uniquement HTTPS. Non seulement cela, mais ces fonctionnalités Web sont soumises à un système d'autorisations utilisateur. Les utilisateurs doivent explicitement opter pour des fonctionnalités telles que l'autorisation des notifications, l'accès aux données de géolocalisation, le passage du navigateur en mode plein écran, l'accès aux flux multimédias des webcams, l'utilisation des paiements Web, etc.

### Technologie anti-suivi

Les navigateurs ont mis en œuvre plusieurs fonctionnalités anti-suivi qui améliorent automatiquement la protection de la vie privée de leurs utilisateurs. Beaucoup d'entre elles bloquent ou limitent la capacité des sites tiers intégrés dans des {{htmlelement("iframe")}} à accéder aux cookies définis sur le domaine de premier niveau, à exécuter des scripts de suivi, etc.

- La valeur par défaut de l'attribut [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) de l'en-tête {{httpheader("Set-Cookie")}} a été mise à jour pour `Lax`, afin de fournir une meilleure protection contre le suivi et les attaques {{glossary("CSRF")}}. Voir [Contrôler les cookies tiers avec `SameSite`](/fr/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) pour plus d'informations.
- Tous les navigateurs ont commencé à bloquer les cookies tiers par défaut. Voir [Comment les navigateurs gèrent-ils les cookies tiers&nbsp;?](/fr/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies) pour plus de détails.
- Les navigateurs mettent en œuvre des technologies permettant d'autoriser les cookies tiers uniquement dans certaines circonstances qui ne portent pas atteinte à la vie privée, ou de mettre en œuvre des cas d'utilisation courants qui nécessitent actuellement des cookies tiers par d'autres moyens. Voir [Transition depuis les cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) et [Remplacer les cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- Plusieurs navigateurs suppriment les paramètres de suivi connus des URL — cela inclut Firefox, Safari et Brave. Les extensions de navigateur aident également à le faire, par exemple [ClearURLs <sup>(angl)</sup>](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Les navigateurs ont mis en œuvre [la protection contre le suivi des redirections](/fr/docs/Web/Privacy/Guides/Redirect_tracking_protection).
