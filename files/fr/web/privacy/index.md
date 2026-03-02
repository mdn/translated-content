---
title: La vie privée sur le Web
slug: Web/Privacy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Les personnes utilisent les sites web pour plusieurs tâches importantes telles que les opérations bancaires, les achats, les loisirs et le paiement de leurs impôts. Ce faisant, ils sont tenus de partager des informations personnelles avec ces sites. Les utilisateur·ice·s accordent un certain niveau de confiance aux sites avec lesquels ils partagent leurs données. Si ces informations tombaient entre de mauvaises mains, elles pourraient être utilisées pour exploiter les utilisateur·ice·s, par exemple en établissant leur profil, en leur envoyant des publicités indésirables, voire en volant leur identité ou leur argent.

Les navigateurs modernes disposent déjà d'une multitude de fonctionnalités pour protéger la vie privée des utilisateur·ice·s sur le web, mais cela ne suffit pas. Pour créer une expérience fiable et respectueuse de la vie privée, les développeur·euse·s doivent sensibiliser les utilisateur·ice·s de leurs sites aux bonnes pratiques (et les faire respecter). Les développeur·euse·s doivent également créer des sites qui collectent le moins de données possible auprès des utilisateur·ice·s, utilisent ces données de manière responsable et les transportent et les stockent en toute sécurité.

Dans cet article, nous&nbsp;:

- Définissons la confidentialité et les termes importants qui y sont liés.
- Examinons les fonctionnalités des navigateurs qui protègent automatiquement la vie privée des utilisateur·ice·s.
- Examinons ce que les développeur·euse·s peuvent faire pour créer un contenu web respectueux de la vie privée qui minimise le risque que les informations/données personnelles des utilisateur·ice·s soient obtenues de manière inattendue par des tiers.

## Définition des termes et concepts liés à la vie privée

Avant d'examiner les différentes fonctionnalités de confidentialité et de sécurité disponibles sur le Web, définissons quelques termes importants.

### La confidentialité et sa relation avec la sécurité

Il est difficile de parler de confidentialité sans parler également de sécurité — ces deux notions sont étroitement liées, et il est impossible de créer des sites web respectueux de la vie privée sans une bonne sécurité. Nous allons donc définir ces deux notions.

- La **Confidentialité** fait référence au fait de donner aux utilisateur·ice·s le droit de contrôler la manière dont leurs données sont collectées, stockées et utilisées, et de ne pas les utiliser de manière irresponsable. Par exemple, vous devez clairement communiquer à vos utilisateur·ice·s quelles données vous collectez, avec qui elles seront partagées et comment elles seront utilisées. Les utilisateur·ice·s doivent avoir la possibilité d'accepter vos conditions d'utilisation des données, d'avoir accès à toutes les données que vous stockez et de les supprimer s'ils ne souhaitent plus que vous les conserviez. Vous devez également respecter vos propres conditions&nbsp;: rien ne sape autant la confiance des utilisateur·ice·s que l'utilisation et le partage de leurs données à des fins auxquelles ils n'ont jamais consenti. En plus d'être contraire à l'éthique, cela pourrait être illégal. De nombreux pays ont désormais adopté des lois qui protègent les droits des consommateurs en matière de confidentialité (par exemple, le [RGPD](https://gdpr.eu/) en Europe).

- La **Sécurité** consiste à protéger les données et les systèmes privés contre tout accès non autorisé. Cela inclut à la fois les données de l'entreprise (internes) et les données des utilisateur·ice·s et des partenaires (externes). Il ne sert à rien d'avoir une politique de confidentialité solide qui inspire confiance à vos utilisateur·ice·s si votre sécurité est faible et que des personnes malveillantes peuvent voler leurs données de toute façon.

### Informations personnelles et privées

Les **informations personnelles** sont toutes les informations qui décrivent un·e utilisateur·ice. Voici quelques exemples&nbsp;:

- Adresse postale, adresse e-mail, numéro de téléphone ou autres coordonnées
- Numéro de passeport, compte bancaire, carte de crédit, numéro de sécurité sociale ou autres identifiants officiels
- Attributs physiques tels que la taille, l'expression de genre, le poids, la couleur des cheveux ou l'âge
- Des informations sur la santé telles que les antécédents médicaux, les allergies ou les conditions en cours
- Noms d'utilisateur, lorsqu'ils peuvent être liés à un individu
- Passe-temps, intérêts ou autres préférences personnelles
- Des données biométriques telles que les empreintes digitales ou les données de reconnaissance faciale

Les **informations privées** sont toutes les informations que les utilisateur·ice·s ne souhaitent pas partager publiquement et qui doivent rester confidentielles (c'est-à-dire les informations accessibles uniquement à un certain groupe d'utilisateur·ice·s autorisés). Certaines données privées sont confidentielles en vertu de la loi (par exemple, les données médicales), tandis que d'autres le sont davantage par préférence personnelle.

### Informations personnellement identifiables

Dans le prolongement de la section ci-dessus, les **informations personnelles identifiables** (PII) sont des informations qui peuvent être utilisées, en tout ou en partie, pour retrouver et/ou identifier une personne spécifique. Par exemple, si un site divulgue en ligne une liste des noms et codes postaux de ses utilisateur·ice·s, un acteur malveillant pourrait très certainement utiliser ces informations pour trouver leurs adresses complètes. Même si aucune fuite à grande échelle ne se produit, il est toujours possible d'identifier les utilisateur·ice·s par des moyens moins évidents, tels que les navigateurs qu'ils utilisent, les appareils qu'ils utilisent, les polices spécifiques qu'ils ont installées, etc.

### Suivi (Tracking)

Le **suivi** désigne le processus consistant à enregistrer l'activité d'un·e utilisateur·ice sur différents sites web. Cela peut se faire de différentes manières, par exemple&nbsp;:

- En examinant plusieurs [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) définis sur différents sites où du contenu tiers est intégré afin de trouver diverses informations sur l'utilisateur·ice.
- En examinant l'en-tête {{httpheader("Referer")}} pour voir d'où vient l'utilisateur·ice.
- En incluant des paramètres dans les URL des liens entrants (par exemple, dans les publicités intégrées renvoyant vers des pages de produits ou dans les e-mails marketing) qui peuvent révéler au site lié l'origine du lien, la campagne marketing dont il fait partie, l'adresse e-mail ou tout autre identifiant de l'utilisateur·ice qui a cliqué dessus, etc. Ce processus est appelé «&nbsp;décoration de lien&nbsp;» et donne lieu à des URL de lien qui ressemblent à ceci&nbsp;: `https://exemple.fr/article/?id=62yhgt1a&campagne=902`.
- Le suivi par redirection, qui consiste pour les trackers à rediriger momentanément (et de manière imperceptible) un·e utilisateur·ice vers leur site web afin d'utiliser le stockage de première partie pour suivre cet utilisateur sur différents sites web. Cela permet aux trackers de contourner le blocage des cookies tiers. Par exemple, si vous avez lu une critique d'un produit et que vous souhaitez cliquer pour l'acheter, vous pouvez être redirigé sans le savoir vers le tracker de redirection, puis vers le détaillant. Cela signifie que le tracker est chargé en tant que partie première et peut associer les données de suivi aux identifiants qu'il a stockés dans ses cookies de première partie avant de vous rediriger vers le détaillant.

Les données de suivi peuvent être utilisées pour établir le profil d'un·e utilisateur·ice, ses centres d'intérêt et ses préférences, ce qui est généralement néfaste et peut être gênant à divers degrés. Par exemple&nbsp;:

- **Annonces ciblées**&nbsp;: tout le monde a déjà vécu l'expérience désagréable de rechercher des articles à acheter sur un appareil, puis d'être soudainement bombardé de publicités pour ces mêmes produits sur tous ses autres appareils.
- **Vendre ou partager des données**&nbsp;: certains tiers sont connus pour compiler des données de suivi, puis les vendre ou les partager avec d'autres à des fins diverses, comme les publicités ciblées. Cette pratique est manifestement contraire à l'éthique et peut également être illégale, selon le pays où elle est exercée.
- **Préjugés liés aux données**&nbsp;: dans le pire des cas, le partage de données peut entraîner un désavantage injustifié pour l'utilisateur·ice. Imaginons, par exemple, qu'une compagnie d'assurance découvre des données sur un client potentiel que celui-ci n'a pas accepté de partager, et qu'elle les utilise pour justifier une augmentation des primes d'assurance.

### Empreinte digitale

Un processus très étroitement lié au suivi est l'**empreinte digitale**&nbsp;: il s'agit plus précisément d'identifier les utilisateur·ice·s en constituant une base de données les différenciant des autres utilisateur·ice·s. Il peut s'agir de tout élément, du contenu des cookies au navigateur utilisé, en passant par les polices installées localement.

Les navigateurs modernes prennent des mesures pour aider à prévenir les attaques basées sur les empreintes digitales, soit en empêchant l'accès aux informations, soit, lorsque celles-ci doivent être mises à disposition, en introduisant des variations ou du «&nbsp;bruit&nbsp;» qui empêchent leur utilisation à des fins d'identification.

Par exemple, si un site web interroge le navigateur d'un·e utilisateur·ice sur le temps écoulé, une comparaison de ce temps avec celui signalé par le serveur peut être utile comme facteur d'empreinte digitale. C'est pourquoi les navigateurs introduisent généralement une légère variabilité dans les minuteries afin de les rendre moins utiles pour identifier le système de l'utilisateur·ice.

> [!NOTE]
> Consultez la section [Empreintes digitales <sup>(angl.)</sup>](https://web.dev/learn/privacy/fingerprinting/) sur web.dev pour obtenir des informations supplémentaires utiles.

## Fonctionnalités de confidentialité fournies par les navigateurs

Les fournisseurs de navigateurs sont conscients de la nécessité de protéger la vie privée des utilisateur·ice·s et des effets négatifs du suivi, de l'empreinte digitale, etc. sur l'expérience utilisateur. À cette fin, ils ont mis en place diverses fonctionnalités qui renforcent la protection de la vie privée et/ou atténuent les menaces. Dans cette section, nous examinons différentes catégories de protection de la vie privée que les navigateurs appliquent automatiquement.

### HTTPS par défaut

Le [protocole TLS (Transport Layer Security)](/fr/docs/Web/Security/Transport_Layer_Security) assure la sécurité et la confidentialité en chiffrant les données pendant leur transport sur le réseau. Il s'agit de la technologie qui sous-tend le protocole [HTTPS](/fr/docs/Glossary/HTTPS). Le protocole TLS est efficace pour protéger la confidentialité, car il empêche des tiers d'intercepter les données transmises et de les utiliser à des fins malveillantes, par exemple pour effectuer un suivi.

Tous les navigateurs tendent à exiger le protocole HTTPS par défaut. C'est déjà pratiquement le cas, car il est difficile d'utiliser Internet sans ce protocole.

Les rubriques connexes sont les suivantes&nbsp;:

- [Transparence des certificats](/fr/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Un standard ouvert pour surveiller et auditer les certificats, créant une base de données de journaux publics qui peut être utilisée pour aider à identifier les certificats incorrects ou malveillants.
- [HTTP Strict Transport Security (HSTS)](/fr/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS est utilisé par les serveurs pour se protéger contre les attaques de rétrogradation de protocole et de détournement de cookies en permettant aux sites de dire aux clients qu'ils ne peuvent utiliser HTTPS que pour communiquer avec le serveur.
- [HTTP/2](/fr/docs/Glossary/HTTP_2)
  - : Bien que HTTP/2 n'_ait_ techniquement pas besoin d'utiliser le chiffrement, la plupart des développeur·euse·s de navigateurs ne le prennent en charge que lorsqu'il est utilisé avec HTTPS&nbsp;; à cet égard, il peut être considéré comme une fonctionnalité visant à améliorer la sécurité et la confidentialité.

### Activer les « fonctionnalités avancées »

Les soi-disant «&nbsp;fonctionnalités puissantes&nbsp;» des API Web qui fournissent un accès à des données et des opérations potentiellement sensibles ne sont disponibles que dans des [contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts), ce qui signifie essentiellement uniquement HTTPS. Non seulement cela, mais ces fonctionnalités Web sont soumises à un système d'autorisations utilisateur. Les utilisateur·ice·s doivent explicitement opter pour des fonctionnalités telles que l'autorisation des notifications, l'accès aux données de géolocalisation, le passage du navigateur en mode plein écran, l'accès aux flux multimédias des webcams, l'utilisation des paiements Web, etc.

### Technologie anti-suivi

Les navigateurs ont mis en œuvre plusieurs fonctionnalités anti-suivi qui améliorent automatiquement la protection de la vie privée de leurs utilisateur·ice·s. Beaucoup d'entre elles bloquent ou limitent la capacité des sites tiers intégrés dans des {{htmlelement("iframe")}} à accéder aux cookies définis sur le domaine de premier niveau, à exécuter des scripts de suivi, etc.

- La valeur par défaut de l'attribut [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) de l'en-tête {{httpheader("Set-Cookie")}} a été mise à jour pour `Lax`, afin de fournir une meilleure protection contre le suivi et les attaques {{glossary("CSRF")}}. Voir [Contrôler les cookies tiers avec `SameSite`](/fr/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) pour plus d'informations.
- Tous les navigateurs ont commencé à bloquer les cookies tiers par défaut. Voir [Comment les navigateurs gèrent-ils les cookies tiers&nbsp;?](/fr/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies) pour plus de détails.
- Les navigateurs mettent en œuvre des technologies permettant d'autoriser les cookies tiers uniquement dans certaines circonstances qui ne portent pas atteinte à la vie privée, ou de mettre en œuvre des cas d'utilisation courants qui nécessitent actuellement des cookies tiers par d'autres moyens. Voir [Transition depuis les cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) et [Remplacer les cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- Plusieurs navigateurs suppriment les paramètres de suivi connus des URL — cela inclut Firefox, Safari et Brave. Les extensions de navigateur aident également à le faire, par exemple [ClearURLs <sup>(angl)</sup>](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Les navigateurs ont mis en œuvre [la protection contre le suivi des redirections](/fr/docs/Web/Privacy/Guides/Redirect_tracking_protection).

## Considérations relatives à la confidentialité pour les développeur·euse·s côté client

Il existe plusieurs actions que les développeur·euse·s Web peuvent et doivent entreprendre pour améliorer la confidentialité de leurs utilisateur·ice·s. Les sections ci-dessous discutent des plus importantes. Certaines des catégories ne sont pas purement des tâches techniques en tant que telles et impliqueront la collaboration avec d'autres membres de l'équipe.

## Collecter des données de manière éthique

Les entreprises collectent de nombreuses données différentes auprès de leurs utilisateur·ice·s pour diverses raisons&nbsp;:

- Noms d'utilisateur, mots de passe, e-mails, etc. à des fins d'authentification.
- E-mails, adresses postales et numéros de téléphone pour la communication.
- Âge, sexe, localisation géographique, passe-temps préférés et une multitude d'autres informations personnelles identifiables (PII) pour tout, de la personnalisation du site aux enquêtes de satisfaction client.
- Habitudes de navigation sur leurs sites et d'autres sites, pour mesurer le succès des pages et des fonctionnalités.
- Et bien plus encore.

Lorsque vous collectez des données auprès de vos clients, vous avez l'occasion d'agir avec intégrité, de leur montrer que vous êtes digne de confiance et de construire une excellente relation avec eux, améliorant ainsi votre marque et vos chances de succès.

L'éthique de la collecte de données peut être décomposée en trois principes simples&nbsp;:

- Ne collectez pas plus de données que nécessaire
- Communiquez clairement comment vous allez utiliser les données que vous collectez
- Supprimez les données une fois que vous avez terminé avec elles

> [!NOTE]
> Les conseils fournis ci-dessous contribuent à offrir une meilleure expérience utilisateur, plus respectueuse de la vie privée, mais beaucoup d'entre eux sont exigés par la loi pour se conformer aux réglementations, par exemple le [RGPD <sup>(angl.)</sup>](https://gdpr.eu/) dans l'UE. Vous devez vous assurer de découvrir quelles réglementations s'appliquent à vous dans votre région, et ce que vous devez faire pour vous y conformer.

### Ne collectez pas plus de données que nécessaire

Il est tentant de demander beaucoup de données à vos utilisateur·ice·s parce que vous pensez qu'elles pourraient être utiles à l'avenir. Cependant, chaque bit de données supplémentaires que vous collectez ajoute un risque pour la vie privée de vos utilisateur·ice·s et augmente la chance qu'ils abandonnent l'étape qu'ils effectuent (que ce soit remplir une enquête ou s'inscrire à un service).

Il est bon d'anonymiser les données. Vous devriez également envisager si vous pouvez obtenir ce dont vous avez besoin en rendant votre demande de données moins granulaire. Par exemple, au lieu de demander à un·e utilisateur·ice ses produits préférés, vous pourriez lui demander de sélectionner entre des catégories plus générales.

La meilleure façon de protéger la vie privée des utilisateur·ice·s est toutefois de minimiser les données que vous collectez. En vous référant à l'exemple précédent, vous pourriez déduire les mêmes données en examinant l'historique des achats de l'utilisateur·ice. Un autre exemple, les utilisateur·ice·s apprécient de pouvoir acheter des produits de manière anonyme. Vous ne devriez pas les obliger à créer un compte&nbsp;; si ce n'est pas nécessaire au fonctionnement du service, cela devrait être leur choix.

### Communiquez clairement comment vous allez utiliser les données que vous collectez

Une fois que vous avez décidé quelles données vous allez collecter, vous devez publier une politique de confidentialité sur votre site qui indique clairement&nbsp;:

- Les données que vous collectez
- Les façons dont vous utilisez les données
- Les parties avec lesquelles vous avez tendance à partager les données, le cas échéant, et une déclaration selon laquelle vous demanderez le consentement de l'utilisateur·ice avant de partager
- La durée pendant laquelle vous conservez les données avant qu'elles ne soient supprimées
- Les moyens par lesquels les utilisateur·ice·s peuvent consulter les données que vous avez collectées à leur sujet et les supprimer s'ils le souhaitent

Lorsqu'ils vous fournissent des données, vos utilisateur·ice·s doivent avoir la possibilité de lire votre politique de confidentialité et d'y consentir. Ils doivent pouvoir contrôler s'ils sont satisfaits de cela et accepter vos conditions. Et comme indiqué ci-dessus, ils devraient également pouvoir voir quelles données vous avez collectées à leur sujet et les supprimer s'ils le souhaitent.

Une fois que vous avez publié votre politique de confidentialité, vous devez vous assurer que vous vous y conformez — faire ce que vous dites que vous allez faire est très important pour établir la confiance des utilisateur·ice·s. Vous ne devez collecter que les données que vous dites que vous allez collecter, et les utiliser uniquement aux fins que vous dites que vous allez les utiliser. Si quelqu'un de votre entreprise propose une nouvelle façon astucieuse d'utiliser des données existantes, cela n'est toujours pas acceptable en vertu des termes de votre politique si cela ne précise pas que vous les utiliserez à cette fin. Si les utilisateur·ice·s ont consenti à l'utilisation de leurs données à des fins spécifiques et que cette finalité s'élargit, vous devrez peut-être envisager d'obtenir un nouveau consentement.

### Supprimez les données une fois que vous avez terminé avec elles

Plus tôt, nous avons mentionné donner aux utilisateur·ice·s un moyen de voir quelles données vous avez collectées à leur sujet et de les supprimer s'ils le souhaitent. Vous pourriez éventuellement le faire dans le cadre de la même expérience qu'ils peuvent utiliser pour supprimer leur compte (leurs données partent avec lui), ou en faire deux options distinctes. Quoi qu'il en soit, les options doivent être faciles à trouver.

Permettre à l'utilisateur·ice de choisir quand des portions significatives de données sont supprimées est très responsabilisant et renforce la confiance, mais il peut y avoir certaines données que vous souhaiterez gérer vous-même. Par exemple, certaines données pourraient n'être utilisées que pendant quelques heures ou minutes, puis supprimées, comme les données utilisées lors de l'administration de la session d'un·e utilisateur·ice pendant qu'il est connecté.

> [!NOTE]
> L'en-tête de réponse HTTP {{httpheader("Clear-Site-Data")}} est très utile pour effacer les données utilisateur à court terme — il indique au navigateur de vider son cache et/ou ses cookies et/ou son stockage (par exemple, [Web Storage](/fr/docs/Web/API/Web_Storage_API) ou [IndexedDB](/fr/docs/Web/API/IndexedDB_API)). Par exemple, vous pourriez demander à votre serveur de l'envoyer avec une page de «&nbsp;confirmation de déconnexion&nbsp;» afin qu'une fois l'utilisateur·ice déconnecté, ses données soient en toute sécurité supprimées.

## Réduire le suivi

Plus tôt, nous avons discuté du suivi et de certains des objectifs non éthiques pour lesquels il est utilisé. Nous ne devrions pas avoir à expliquer comment de telles utilisations peuvent éroder la confiance des utilisateur·ice·s&nbsp;; dans la mesure du possible, vous ne devriez utiliser des mécanismes de suivi potentiels comme [les cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) que pour des utilisations éthiques, telles que le transfert de l'état de connexion ou d'autres personnalisations entre les sites.

Rappelez-vous également qu'auparavant, tous les navigateurs commencent à bloquer les cookies tiers par défaut, tout en mettant en œuvre des technologies alternatives pour atteindre des cas d'utilisation courants. Il est donc judicieux de se préparer à cela, en limitant le nombre d'activités de suivi sur lesquelles vous comptez et/ou en mettant en œuvre la persistance des informations souhaitées d'autres manières. Voir [Transition depuis les cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) pour plus d'informations.

## Gérer soigneusement les ressources tierces

Bien sûr, il serait facile de gérer la confidentialité si vous ne vous préoccupiez que des ressources que vous avez créées (code, cookies, sites, etc.). Le véritable défi vient du fait que votre site utilisera probablement des ressources tierces. Cela peut inclure du contenu tiers intégré dans des `<iframe>`, des bibliothèques, des frameworks, des API, des ressources hébergées à l'extérieur telles que des images et des vidéos, etc.

Les ressources tierces sont une partie essentielle du développement web moderne, elles offrent beaucoup de puissance. Cependant, toute ressource tierce que vous autorisez sur votre site a potentiellement les mêmes autorisations que vos propres ressources&nbsp;; tout dépend de la manière dont elle est incluse sur votre site&nbsp;:

- JavaScript exécuté à l'intérieur du contenu tiers intégré dans votre site via un `<iframe>` est séparé par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy), ce qui signifie qu'il n'aurait pas accès à d'autres scripts et données inclus dans le contexte de navigation de niveau supérieur.
- Cependant, un script tiers inclus directement dans votre page via un élément {{htmlelement("script")}} _aurait_ accès à vos autres scripts et données, qu'il soit hébergé sur votre site ou sur un autre site. Ce serait effectivement du code de première partie. Un script malveillant inclus de cette manière pourrait secrètement voler les données de vos utilisateur·ice·s, par exemple en les envoyant à un serveur tiers.

Il est important d'auditer toutes les ressources tierces que vous utilisez sur votre site. Assurez-vous de savoir quelles données elles collectent, quelles requêtes elles effectuent et à qui, et quelles sont leurs politiques de confidentialité. Votre politique de confidentialité soigneusement conçue est inutile si vous utilisez un script tiers qui la viole.

> [!NOTE]
> Il existe divers outils qui peuvent vous aider à dresser un tableau des requêtes effectuées par un site, par exemple le [Request Map Generator <sup>(angl.)</sup>](https://requestmap.webperf.tools/).

Une fois que vous avez audité vos ressources tierces et compris ce qu'elles font, vous devez alors considérer leurs inconvénients comme un compromis pour la valeur qu'elles apportent. Si un script tiers est gratuit et vraiment utile mais collecte beaucoup de données utilisateur, vous pourriez&nbsp;:

1. Accepter ce compromis, mettre à jour votre politique de confidentialité pour inclure les détails à ce sujet, et espérer que cela n'impacte pas trop la confiance de vos utilisateur·ice·s.
2. Rechercher une alternative, un outil tiers moins gourmand en données.
3. Créer votre propre outil.

La liste suivante fournit quelques conseils sur la façon d'atténuer les risques pour la vie privée inhérents à l'utilisation de ressources tierces&nbsp;:

- Lors de l'intégration de ressources tierces, envisagez s'il existe un moyen d'atteindre le même effet ou un effet similaire avec moins d'impact sur la vie privée. Par exemple, il pourrait être amusant d'avoir un visualiseur de publications sur les réseaux sociaux intégré à votre site, mais est-ce vraiment nécessaire&nbsp;? Un lien vers votre page de réseau social ne suffirait-il pas&nbsp;? De plus, certains services tiers ont des options améliorant la confidentialité. Voir, par exemple, [Intégrer des vidéos et des playlists > Activer le mode amélioré pour la confidentialité <sup>(angl.)</sup>](https://support.google.com/youtube/answer/171780) de YouTube.
- Dans la mesure du possible, vous devez bloquer les tiers de recevoir un en-tête {{httpheader("Referer")}} lorsque vous leur faites des requêtes. Cela peut être fait de manière assez granulaire, par exemple en incluant [rel="noreferrer"](/fr/docs/Web/HTML/Reference/Attributes/rel/noreferrer) sur les liens externes. Ou, vous pourriez définir cela de manière plus globale pour la page ou le site, par exemple en utilisant l'en-tête {{httpheader("Referrer-Policy")}}.

  > [!NOTE]
  > Voir aussi [En-tête Referer&nbsp;: problèmes de confidentialité et de sécurité](/fr/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

- Utilisez l'en-tête HTTP {{httpheader("Permissions-Policy")}} pour contrôler l'accès aux «&nbsp;fonctionnalités puissantes&nbsp;» de l'API (telles que les notifications, les données de géolocalisation, l'accès aux flux multimédias des webcams, etc.). Cela peut être utile pour la confidentialité car cela empêche les sites tiers de faire des choses inattendues avec ces fonctionnalités, et les utilisateur·ice·s ne veulent pas être inutilement bombardés par des invites de permission qu'ils ne comprennent peut-être pas. Vous pouvez également contrôler l'utilisation des «&nbsp;fonctionnalités puissantes&nbsp;» à l'intérieur des sites tiers intégrés dans des éléments {{htmlelement("iframe")}} en spécifiant des politiques de permissions à l'intérieur d'un attribut `allow` sur l'`<iframe>` lui-même.

  > [!NOTE]
  > Regardez également notre [Guide des politiques d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) pour plus d'informations et d'exemples, et [permissionspolicy.com <sup>(angl.)</sup>](https://www.permissionspolicy.com/) pour des outils utiles, y compris un générateur de politiques.

- Utilisez l'attribut `sandbox` de l'élément {{htmlelement("iframe")}} pour autoriser ou interdire l'utilisation de certaines fonctionnalités à l'intérieur du contenu intégré dans l'`<iframe>` — cela inclut des éléments tels que les téléchargements, les soumissions de formulaires, les modales et le scripting.

> [!NOTE]
> Consultez [les tiers <sup>(angl.)</sup>](https://web.dev/learn/privacy/third-parties/) sur web.dev pour des informations supplémentaires utiles sur l'audit et plus encore.

## Protéger les données des utilisateurs

Vous devez vous assurer que les données des utilisateur·ice·s sont transmises et stockées en toute sécurité une fois que vous les avez collectées. Il s'agit davantage d'un sujet de [sécurité](/fr/docs/Web/Security), mais cela vaut la peine d'être mentionné ici&nbsp;: une bonne politique de confidentialité est inutile si votre sécurité est laxiste et que des attaquants peuvent voler les données.

Les conseils ci-dessous offrent quelques orientations sur la protection des données de vos utilisateur·ice·s&nbsp;:

- La sécurité est difficile à mettre en œuvre correctement. Lors de la mise en œuvre d'une solution sécurisée impliquant la collecte de données — en particulier s'il s'agit de données sensibles telles que des identifiants de connexion — il est judicieux d'utiliser une solution réputée d'un fournisseur bien respecté. Par exemple, tout cadre côté serveur respectable disposera de fonctionnalités intégrées pour se protéger contre les vulnérabilités courantes. Vous pourriez également envisager d'utiliser un produit spécialisé à cette fin — par exemple, une solution de fournisseur d'identité ou un fournisseur d'enquête en ligne sécurisé.
- Si vous souhaitez déployer votre propre solution pour collecter des données utilisateur, assurez-vous de comprendre ce que vous faites. Engagez un·e développeur·euse côté serveur expérimenté et/ou un ingénieur en sécurité pour mettre en œuvre le système, et assurez-vous qu'il est testé en profondeur. Utilisez l'authentification multifactorielle (MFA) pour offrir une meilleure protection. Envisagez d'utiliser une API dédiée telle que l'[API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) ou l'[API de gestion des identifiants fédérés](/fr/docs/Web/API/FedCM_API) pour rationaliser le côté client de l'application.
- Lors de la collecte d'informations d'inscription des utilisateur·ice·s, appliquez des mots de passe forts afin que les détails du compte de vos utilisateur·ice·s ne puissent pas être facilement devinés. Les mots de passe faibles sont l'une des principales causes des violations de sécurité. Encouragez vos utilisateur·ice·s à utiliser un gestionnaire de mots de passe pour générer et stocker des mots de passe complexes&nbsp;; ainsi, ils ne s'inquiéteront pas de les mémoriser ou de créer un risque de sécurité en les écrivant.
- N'incluez pas de données sensibles dans les URL — si un tiers intercepte l'URL (par exemple via l'en-tête {{httpheader("Referer")}}), il pourrait voler ces informations. Utilisez des requêtes `POST` plutôt que des requêtes `GET` pour éviter cela.
- Envisagez d'utiliser des outils tels que [Content Security Policy](/fr/docs/Web/HTTP/Guides/CSP) et [Permissions Policy](/fr/docs/Web/HTTP/Guides/Permissions_Policy) pour appliquer un ensemble d'utilisations de fonctionnalités sur votre site qui rend plus difficile l'introduction de vulnérabilités. Soyez prudent lorsque vous faites cela — si vous bloquez l'utilisation d'une fonctionnalité dont un script tiers a besoin pour fonctionner, vous risquez de casser la fonctionnalité de votre site. C'est quelque chose que vous pouvez examiner lors de l'audit de vos ressources tierces (voir [Gérer soigneusement les ressources tierces](#gérer_soigneusement_les_ressources_tierces)).

## Voir aussi

- [Sécurité Web](/fr/docs/Web/Security)
- L'article [En savoir plus sur la confidentialité <sup>(angl.)</sup>](https://web.dev/learn/privacy/) sur web.dev
- L'article [Le bac à sable de confidentialité <sup>(angl.)</sup>](https://privacysandbox.google.com/) sur privacysandbox.google.com
- L'article [Pratiques de données allégées <sup>(angl.)</sup>](https://www.mozilla.org/fr/about/policy/lean-data/) sur mozilla.org
