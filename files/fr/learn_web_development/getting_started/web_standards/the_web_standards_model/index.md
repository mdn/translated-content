---
title: Le modèle des normes web
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 03482f82cba9c871042bbf4972b754f65eb3cb90
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Cet article fournit des informations utiles sur le Web et les normes du Web&nbsp;: comment elles sont apparues, ce que sont les technologies des normes du Web et comment elles fonctionnent ensemble.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des navigateurs web et des technologies web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Les normes du Web et les principes clés sur lesquels elles reposent.</li>
          <li>Comment fonctionnent les organismes de normalisation — par exemple le <a href="https://www.w3.org/">W3C <sup>(angl.)</sup></a>, le <a href="https://whatwg.org/">WHATWG <sup>(angl.)</sup></a>, le <a href="https://tc39.es/">TC39 <sup>(angl.)</sup></a> et le <a href="https://www.khronos.org/">Khronos Group <sup>(angl.)</sup></a>&nbsp;; le processus de création des normes.</li>
          <li>Les principales technologies des normes du Web et leur fonctionnement ensemble.</li>
          <li>Fichiers côté serveur (dynamiques) versus fichiers côté client (statiques).</li>
          <li>Bonnes pratiques du Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Brève histoire du Web

À la fin des années 1960, l'armée américaine a développé un réseau de communication appelé {{Glossary("ARPANET")}}. Celui-ci peut être considéré comme un précurseur de l'**internet**, car il fonctionnait sur le principe de la [commutation de paquets](https://fr.wikipedia.org/wiki/Commutation_de_paquets) et a vu la première mise en œuvre de la suite de protocoles [TCP/IP](https://fr.wikipedia.org/wiki/Suite_des_protocoles_Internet). Ces deux technologies constituent la base de l'infrastructure sur laquelle repose l'internet.

En 1980, [Tim Berners-Lee](https://fr.wikipedia.org/wiki/Tim_Berners-Lee) (souvent appelé TimBL) a écrit un programme de prise de notes appelé ENQUIRE, qui introduisait le concept de liens entre différents nœuds. Cela vous rappelle quelque chose&nbsp;?

En 1989, TimBL a rédigé [Information Management&nbsp;: A Proposal <sup>(angl.)</sup>](https://www.w3.org/History/1989/proposal.html) et HyperText au CERN&nbsp;: ces deux publications ont posé les bases du fonctionnement du Web. Elles ont suscité un certain intérêt, suffisant pour convaincre les supérieurs de TimBL de le laisser créer un système hypertexte mondial.

En 1990-91, TimBL avait créé tout ce qu'il fallait pour faire fonctionner la première version du **World Wide Web** (généralement appelé le **Web**) — [HTTP](/fr/docs/Web/HTTP), [HTML](/fr/docs/Web/HTML), le premier navigateur web, appelé [WorldWideWeb](<https://fr.wikipedia.org/wiki/WorldWideWeb_(navigateur)>), un serveur web et quelques pages web à consulter.

> [!NOTE]
> On utilise parfois «&nbsp;le Web&nbsp;» et «&nbsp;internet&nbsp;» de façon interchangeable, mais ce sont deux choses différentes. Internet est l'infrastructure qui permet de transporter l'information dans le monde entier entre différents serveurs et clients, tandis que le Web est un système construit au-dessus d'internet. Le Web définit les types d'information (contenu et code) qui sont transportés via internet et les protocoles de communication qui gèrent ce transport.

En 1994, TimBL a fondé le [World Wide Web Consortium](https://fr.wikipedia.org/wiki/World_Wide_Web_Consortium) (<abbr>W3C</abbr>), une organisation qui réunit des représentant·e·s de nombreuses entreprises pour travailler ensemble à la création des technologies du Web. Le W3C a travaillé à la standardisation et à l'amélioration des technologies web existantes comme HTML et HTTP, et à la création de nouvelles technologies comme [CSS](/fr/docs/Web/CSS) et [JavaScript](/fr/docs/Web/JavaScript). CSS et JavaScript ont été particulièrement essentiels pour donner au Web son aspect et son interactivité, le rendant plus proche de ce que nous connaissons aujourd'hui.

Dans les années qui ont suivi, le Web a explosé&nbsp;: de nombreux navigateurs ont été lancés, des milliers de serveurs web ont été mis en place et des millions de pages web ont été créées. D'autres organismes de normalisation sont également apparus pour aider à standardiser différents aspects des technologies web.

> [!NOTE]
> Si vous souhaitez lire un récit plus détaillé de l'histoire du Web, essayez de chercher «&nbsp;histoire du web&nbsp;» dans votre [moteur de recherche préféré](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) et voyez ce que vous trouvez.

## Normes du Web

Les **normes du Web** sont les technologies que l'on utilise pour créer des sites web. Ces normes existent sous la forme de longs documents techniques appelés spécifications, qui détaillent exactement comment la technologie doit fonctionner. Ces documents ne sont pas très utiles pour apprendre à utiliser les technologies qu'ils décrivent (c'est pourquoi il existe des sites comme MDN Web Docs). Ils sont plutôt destinés à être utilisés par des ingénieur·e·s logiciel pour implémenter ces technologies (généralement dans les navigateurs web).

### Organismes de standardisation et processus

Les normes du Web sont créées par des organismes de standardisation — des institutions qui invitent des groupes de personnes issues de différentes entreprises technologiques à se réunir pour se mettre d'accord sur la meilleure façon de faire fonctionner les technologies afin de répondre à tous leurs cas d'usage.

Le W3C est l'organisme de standardisation du Web le plus connu, mais il en existe d'autres. Par exemple&nbsp;:

- [WHATWG <sup>(angl.)</sup>](https://whatwg.org/) maintient la [HTML Living Standard <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/), qui décrit exactement comment HTML (tous les éléments HTML, leurs API associées et les autres technologies connexes) doit être implémenté.
- [TC39 <sup>(angl.)</sup>](https://tc39.es/) et [ECMA <sup>(angl.)</sup>](https://ecma-international.org/) spécifient et publient la norme ECMAScript, sur laquelle repose le JavaScript moderne.
- [Khronos <sup>(angl.)</sup>](https://www.khronos.org/) publie des technologies pour les graphismes 3D, comme WebGL.

Les processus complets de création des normes peuvent être complexes et approfondis. Cependant, à moins de vouloir créer vos propres fonctionnalités pour le Web, il n'est pas nécessaire d'en comprendre tous les détails. Si vous souhaitez contribuer à la discussion autour de nouvelles technologies et donner votre avis, il s'agit généralement de rejoindre la liste de diffusion ou un autre mécanisme de discussion approprié. Les discussions sur les normes se déroulent en public, d'où le terme [normes «&nbsp;ouvertes&nbsp;»](#normes_«_ouvertes_»).

Voici une vue d'ensemble, à un niveau général, du fonctionnement des processus de normalisation&nbsp;:

1. Quelqu'un remarque le besoin d'une nouvelle fonctionnalité standard du Web qui faciliterait la vie des développeur·euse·s. Par exemple, il existe peut-être un motif courant utilisé dans les interfaces utilisateur web, mais difficile à implémenter. Une fonctionnalité CSS dédiée rendrait cela beaucoup plus simple. Ce «&nbsp;quelqu'un&nbsp;» peut être n'importe qui — un·e développeur·euse individuel·le ou un·e ingénieur·e travaillant pour une grande entreprise technologique.
2. La personne discute de cette fonctionnalité avec d'autres développeur·euse·s, des ingénieur·e·s navigateur, etc., et commence à susciter de l'intérêt pour l'implémentation de la fonctionnalité. Généralement, elle rédige un document explicatif qui présente le besoin et le fonctionnement de la fonctionnalité, ainsi qu'une démonstration de code montrant à quoi cela ressemblerait en pratique.
3. Si la fonctionnalité suscite suffisamment d'intérêt, elle est officiellement discutée au sein du groupe de travail de l'organisme de normalisation concerné. Par exemple, les fonctionnalités CSS sont généralement discutées par le [CSS Working Group <sup>(angl.)</sup>](https://www.w3.org/groups/wg/css/) (WG) (voir aussi la [page Wikipédia du CSS Working Group <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/CSS_Working_Group) pour plus de description et d'historique). Avant qu'une nouvelle technologie web ne soit acceptée, elle doit être rigoureusement évaluée pour s'assurer qu'elle est bénéfique pour le Web — par exemple, qu'elle n'introduit pas de problèmes de sécurité, qu'elle est [accessible et compatible](#accessible_et_interopérable) avec les autres technologies web, et qu'elle ne repose pas sur des brevets.
4. Pour valider la fonctionnalité, plusieurs choses se produisent. Ces points peuvent tous se produire en même temps que le point 3, voire avant (les éditeurs de navigateurs implémentent parfois des fonctionnalités propriétaires/non standard puis tentent de les standardiser par la suite)&nbsp;:
5. Un ou plusieurs éditeurs de navigateurs implémentent une version expérimentale de la nouvelle fonctionnalité, souvent désactivée par défaut, mais qui peut être activée par les personnes souhaitant la tester et donner leur avis.
6. Un·e membre du groupe de travail l'ajoute également à une spécification technique afin que les éditeurs de navigateurs puissent l'implémenter de manière cohérente.
7. Ils·Elles sollicitent également les retours d'autres éditeurs de navigateurs pour connaître les problèmes qu'ils·elles rencontrent avec la proposition et leur probabilité de l'implémenter. Ce sont les «&nbsp;positions sur les normes&nbsp;». Voir par exemple [Mozilla Standards Positions <sup>(angl.)</sup>](https://mozilla.github.io/standards-positions/).
8. Les personnes impliquées rédigent également une suite de tests approfondie pour démontrer que la fonctionnalité fonctionne comme décrit.

9. Finalement, si tout se passe bien, la fonctionnalité sera implémentée dans tous les navigateurs et pourra commencer à être utilisée lors de la création de sites web.

> [!NOTE]
> Il est tout à fait possible que les personnes proposant la fonctionnalité, l'implémentant dans un navigateur, rédigeant la spécification, écrivant les tests et recueillant les retours soient les mêmes.

Vous pouvez trouver plus d'informations sur les processus spécifiques des organismes de normalisation. Voir par exemple&nbsp;:

- [W3C Process Document <sup>(angl.)</sup>](https://www.w3.org/policies/process/)
- [WHATWG — Working Mode <sup>(angl.)</sup>](https://whatwg.org/working-mode)
- [The TC39 Process <sup>(angl.)</sup>](https://tc39.es/process-document/)

## Principes clés des normes du Web

Les principes clés du Web, qui font du Web un secteur unique et passionnant, sont les suivants&nbsp;:

- Ouvert à la contribution et à l'utilisation, donc non soumis à des brevets ni contrôlé par une seule entité privée.
- Accessible et interopérable.
- Ne pas casser le Web.

Voyons chacun de ces points plus en détail.

### Normes « ouvertes »

L'un des aspects clés des normes du Web, sur lequel TimBL et le W3C se sont mis d'accord dès le début, est que le Web (et les technologies du Web) doit être **ouvert**. Cela signifie qu'elles sont libres de contribuer et d'utiliser, et ne sont pas entravées par des brevets ou des licences. C'est important — si une technologie du Web dépend de technologies brevetées ou sous licence pour fonctionner, le·la propriétaire du brevet peut alors facturer aux éditeur·ice·s de navigateurs qui l'implémentent des montants potentiellement importants, et ces coûts seraient alors répercutés sur les utilisateur·ice·s des navigateurs.

De plus, parce que les technologies du Web sont créées ouvertement, en collaboration entre de nombreuses entreprises différentes, aucune entreprise ne peut les contrôler, ce qui est une très bonne chose. Vous ne voudriez pas qu'une seule entreprise décide soudainement de mettre tout le Web derrière un paywall, ou de sortir une nouvelle version de HTML que tout le monde devrait acheter pour continuer à créer des sites, ou pire encore, décide de ne plus s'y intéresser et de tout arrêter.

Les normes ouvertes permettent au Web de rester une ressource publique librement accessible, où chacun·e peut écrire le code pour créer un site gratuitement, et où chacun·e peut contribuer au processus de création des normes.

### Accessible et interopérable

Le Web et les navigateurs web sont fondamentalement conçus pour que le contenu web soit **accessible** aux personnes en situation de handicap. Il a été pensé à l'origine comme un grand égalisateur, permettant à chacun·e d'accéder à l'information quelles que soient ses circonstances. Cela signifie par exemple&nbsp;:

- Les personnes qui ne peuvent pas utiliser une souris ou un dispositif de pointage peuvent naviguer sur le Web au clavier.
- Les personnes malvoyantes peuvent agrandir le contenu, ou utiliser un programme appelé **lecteur d'écran** pour lire le contenu à voix haute et décrire les contrôles de façon compréhensible.

> [!NOTE]
> Vous en apprendrez plus sur l'[Accessibilité](/fr/docs/Learn_web_development/Core/Accessibility) plus loin dans le parcours d'apprentissage.

De plus, les technologies du Web sont conçues pour être **interopérables**. Parce qu'elles sont implémentées selon des normes publiées, les navigateurs doivent fournir le même rendu pour une même entrée (par exemple, du code HTML, CSS ou JS)&nbsp;: autrement dit, un site web doit fonctionner de façon cohérente sur plusieurs navigateurs.

### Ne pas casser le web

Une autre expression que vous entendrez à propos des normes ouvertes du Web est «&nbsp;ne pas casser le web&nbsp;». L'idée est que toute nouvelle technologie web doit être rétrocompatible avec ce qui existait auparavant, afin que les sites existants continuent de fonctionner comme avant.

Les éditeurs de navigateurs doivent pouvoir implémenter de nouvelles technologies web sans provoquer de différences de rendu ou de fonctionnement qui pousseraient les utilisateur·ice·s à penser qu'un site est cassé et à essayer un autre navigateur.

## Panorama des technologies web modernes

Il existe un certain nombre de technologies à apprendre si vous souhaitez devenir développeur·euse web côté client (<i lang="en">front-end</i> en anglais). Dans cette section, nous allons les décrire brièvement.

### HTML, CSS et JavaScript

[HTML](/fr/docs/Web/HTML), [CSS](/fr/docs/Web/CSS) et [JavaScript](/fr/docs/Web/JavaScript) sont les trois principales technologies que vous utiliserez pour créer un site web. Vous les avez rencontrées dans le [module précédent](/fr/docs/Learn_web_development/Getting_started/Your_first_website), mais pour récapituler&nbsp;:

- Le **HyperText Markup Language** (ou **HTML**) est un langage de balisage composé de différents éléments dans lesquels vous pouvez envelopper (baliser) du contenu pour lui donner du sens (sémantique) et de la structure. Si l'on adopte une analogie avec la construction d'une maison, HTML serait comme les fondations et les murs de la maison, qui lui donnent sa structure et la maintiennent ensemble.
- Les **Cascading Style Sheets** (**CSS**) sont un langage basé sur des règles utilisé pour appliquer des styles à votre HTML — par exemple, définir les couleurs du texte et de l'arrière-plan, ajouter des bordures, animer des éléments ou organiser une page d'une certaine manière. Dans l'analogie de la maison, CSS correspond à la peinture, au papier peint, aux tapis et aux tableaux que vous utiliseriez pour rendre la maison agréable à regarder.
- **JavaScript** est le langage de programmation que nous utilisons pour ajouter de l'interactivité aux sites web, du changement de style dynamique à la récupération de mises à jour depuis le serveur, jusqu'à des graphismes 3D complexes.
  - Vous entendrez aussi le terme **API** avec JavaScript, qui signifie **Interface de Programmation d'Application** (<i lang="en">Application Programming Interface</i> en anglais). Une API JavaScript est une fonctionnalité construite au-dessus de JavaScript qui vous permet de contrôler d'autres parties de code plus complexes ou d'autres fonctionnalités de votre ordinateur (comme des périphériques matériels tels que la webcam ou le microphone) de manière gérable.
  - Dans l'analogie de la maison, JavaScript correspond à la cuisinière, la télévision, le micro-ondes ou le sèche-cheveux — les choses qui donnent à votre maison des fonctionnalités utiles.

### Autres technologies web

Il existe d'autres technologies utilisées sur le web, par exemple&nbsp;:

- [HTTP](/fr/docs/Web/HTTP) pour la communication entre clients et serveurs, comme mentionné précédemment.
- [SVG](/fr/docs/Web/SVG) pour créer et manipuler des graphiques vectoriels.
- [MathML](/fr/docs/Web/MathML) pour décrire des formules mathématiques.

Cependant, HTML, CSS et JavaScript sont de loin les technologies les plus importantes à apprendre, nous nous concentrerons donc principalement sur celles-ci dans notre parcours d'apprentissage.

## Outils

Une fois que vous aurez appris les technologies standard et fondamentales utilisées pour créer des pages web (comme HTML, CSS et JavaScript), vous rencontrerez rapidement divers outils qui peuvent rendre votre travail plus facile ou plus efficace. Exemples&nbsp;:

- [Outils de développement](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) intégrés dans les navigateurs modernes, qui peuvent être utilisés pour déboguer votre code.
- [Outils de test](/fr/docs/Learn_web_development/Extensions/Testing) qui peuvent être utilisés pour exécuter des tests afin de vérifier si votre code se comporte comme prévu.
- [Frameworks et bibliothèques](/fr/docs/Learn_web_development/Core/Frameworks_libraries) construits au-dessus de JavaScript, qui permettent de créer certains types de sites web beaucoup plus rapidement et efficacement.
- Les **linters** et **formateurs** (ou **formatters**), qui appliquent un ensemble de règles de style de code, analysent votre code et le mettent à jour pour suivre ces règles. Prettier, que vous avez rencontré plus tôt dans le cours ([voir ici](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#améliorer_votre_éditeur_avec_des_extensions)), est un exemple de formateur.

## Langages et frameworks côté serveur

HTML, CSS et JavaScript sont des langages front-end (ou côté client), ce qui signifie qu'ils sont exécutés par le navigateur pour produire une interface de site web que vos utilisateur·ice·s peuvent utiliser.

Il existe une autre catégorie de langages appelés langages back-end (ou côté serveur), ce qui signifie qu'ils sont exécutés sur le serveur avant que le résultat ne soit ensuite envoyé au navigateur pour être affiché. Une utilisation typique d'un langage côté serveur consiste à extraire des données d'une base de données, à générer du HTML pour contenir ces données, puis à envoyer ce HTML au navigateur pour l'afficher à l'utilisateur·ice.

Des exemples de frameworks et de langages côté serveur incluent ASP.NET (C#), Django (Python), Laravel (PHP) et Next.js (JavaScript).

Ces technologies ne sont pas considérées comme des «&nbsp;normes du web&nbsp;» — elles sont développées par des organisations en dehors des processus de normalisation du web d'organisations telles que le W3C et le WHATWG — bien que certaines d'entre elles aient des processus tout aussi ouverts.

### Statique versus dynamique

Une autre façon de décrire les langages côté client et côté serveur est **statique** et **dynamique**&nbsp;:

- Un fichier HTML simple est stocké sur le serveur. Lorsqu'il est demandé, il est livré au client, inchangé, et rendu par le navigateur. Parce qu'il ne change pas, on parle de «&nbsp;statique&nbsp;».
- Lorsque du code côté serveur (par exemple, un script Python ou une page ASP.NET) génère du HTML contenant des données et renvoie ce HTML au client, le contenu du HTML change en fonction de ce que fait le code côté serveur. On parle donc de «&nbsp;dynamique&nbsp;».

Il y a souvent un certain chevauchement entre les concepts de code statique et dynamique. Les langages côté serveur définissent généralement des structures HTML à l'intérieur d'un fichier de modèle, qui ont tendance à être principalement du HTML statique avec quelques sections dynamiques spéciales incluses qui changent en fonction des données à insérer.

## Bonnes pratiques du Web

Nous avons brièvement parlé des technologies que vous utiliserez pour créer des sites web. Parlons maintenant des bonnes pratiques que les développeur·euse·s web emploient généralement pour s'assurer que leurs sites soient utilisables par le plus grand nombre de personnes possible.

Lorsque vous développez pour le web, la principale source d'incertitude vient du fait que vous ne savez pas quelle combinaison de technologies chaque utilisateur·ice utilisera pour consulter votre site&nbsp;:

- Utilisateur·ice 1&nbsp;: peut consulter le site sur un iPhone, avec un petit écran étroit.
- Utilisateur·ice 2&nbsp;: peut consulter le site sur un ordinateur portable Windows avec un écran large branché dessus.
- Utilisateur·ice 3&nbsp;: peut être malvoyant·e et utiliser un lecteur d'écran pour lire et interagir avec la page web.
- Utilisateur·ice 4&nbsp;: peut utiliser un très vieil ordinateur de bureau qui ne peut pas faire tourner les navigateurs modernes.

Parce que vous ne savez pas exactement ce que vos utilisateur·ice·s utiliseront, vous devez concevoir de manière défensive — rendez votre site aussi flexible que possible, afin que tou·te·s les utilisateur·ice·s ci-dessus puissent l'utiliser, même s'ils·elles n'ont pas tou·te·s la même expérience.

Vous rencontrerez les concepts ci-dessous à un moment donné dans votre apprentissage, qui représentent les bonnes pratiques auxquelles vos sites devraient idéalement adhérer. Ne vous inquiétez pas trop de cela pour l'instant. Tout au long du cours, nous essayons de vous enseigner ces pratiques implicitement, c'est-à-dire que lorsque nous vous enseignons HTML, CSS et JavaScript, nos exemples suivent les bonnes pratiques autant que possible. Plus tard dans votre parcours, vous explorerez probablement ces domaines de façon plus explicite.

- **Amélioration progressive**
  - : Créer une expérience minimale qui fournit les fonctionnalités essentielles à tou·te·s les utilisateur·ice·s, puis ajouter une meilleure expérience et d'autres améliorations dans les navigateurs qui peuvent les prendre en charge. L'amélioration progressive est souvent considérée comme peu importante, car les navigateurs ont tendance à prendre en charge les nouvelles fonctionnalités de façon plus cohérente de nos jours, et les gens ont généralement des connexions internet plus rapides avec des limites de données plus élevées. Cependant, pensez à des exemples comme réduire la décoration pour rendre l'expérience mobile plus fluide et économiser des données, ou fournir une expérience plus légère et à faible bande passante pour les utilisateur·ice·s qui paient à l'octet ou ont des connexions limitées.
- **Compatibilité multi-navigateurs**
  - : S'assurer que votre page fonctionne sur le plus d'appareils possible. Cela inclut l'utilisation de technologies prises en charge par tous les navigateurs, offrir de meilleures expériences aux navigateurs qui peuvent les gérer (amélioration progressive), et/ou écrire du code qui retombe sur une expérience plus simple mais toujours utilisable dans les anciens navigateurs (appelé **dégradation élégante**). Cela nécessite aussi de tester pour voir si quelque chose échoue dans certains navigateurs, puis de travailler davantage pour corriger ces échecs.
- **Séparation des couches**
  - : Mettre votre contenu (HTML), la mise en forme (CSS) et le comportement (JavaScript) dans des fichiers de code différents, plutôt que de tout regrouper au même endroit. C'est une bonne idée pour de nombreuses raisons, notamment la gestion et la compréhension du code, et le travail en équipe/séparation des rôles. En réalité, la séparation n'est pas toujours claire. C'est un idéal à viser autant que possible, plutôt qu'un absolu.
- **Conception web adaptative**
  - : Rendre vos fonctionnalités et vos mises en page flexibles pour qu'elles puissent s'adapter automatiquement à différents navigateurs. Un exemple évident est un site web qui s'affiche d'une certaine manière dans un navigateur large sur un bureau, mais qui s'affiche en une seule colonne compacte sur un navigateur de téléphone mobile. Essayez d'ajuster la largeur de votre fenêtre de navigateur maintenant et voyez ce qui arrive à la mise en page du site.
- **Performance**
  - : Faire en sorte que les sites se chargent aussi vite que possible, mais aussi qu'ils soient intuitifs et faciles à utiliser pour que les utilisateur·ice·s ne se frustrent pas et n'aillent pas ailleurs.
- **Internationalisation**
  - : Rendre les sites utilisables par des personnes de différentes cultures, qui parlent d'autres langues que la vôtre. Il y a des considérations techniques ici (comme adapter votre mise en page pour qu'elle fonctionne aussi pour les langues de droite à gauche ou de haut en bas), et des considérations humaines (comme utiliser un langage simple, sans argot, pour que des cultures diverses aient plus de chances de comprendre votre texte).
- **Vie privée** & **sécurité**
  - : Ces deux concepts sont liés mais différents. La vie privée consiste à permettre aux gens de vaquer à leurs occupations en toute confidentialité, sans les espionner ni collecter plus de données que strictement nécessaire. La sécurité consiste à construire votre site de manière sécurisée pour que des utilisateur·ice·s malveillant·e·s ne puissent pas voler les informations qu'il contient, ni à vous ni à vos utilisateur·ice·s.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
