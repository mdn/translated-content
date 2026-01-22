---
title: "Accessibilité Web : crises et réactions physiques"
short-title: Prévenir crises et réactions physiques
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

Cet article présente les concepts permettant de rendre le contenu Web accessible aux personnes souffrant de troubles vestibulaires, ainsi que les méthodes pour mesurer et prévenir les contenus susceptibles d'entraîner des crises ou d'autres réactions physiques.

## Vue d'ensemble

### Crises

Les crises provoquées par la lumière sont appelées épilepsie photosensible. Un contenu qui scintille, clignote ou vacille peut déclencher une épilepsie photosensible. Les technologies Web utilisant la vidéo, les GIF animés, les PNG animés, les SVG animés, {{Glossary("Canvas", "élément Canvas")}}, ainsi que les animations CSS ou JavaScript, peuvent produire un contenu susceptible d'entraîner des crises ou d'autres réactions physiques incapacitant·e·s. Certains motifs visuels, en particulier les rayures, peuvent également provoquer des réactions physiques même s'ils ne sont pas animés. L'épilepsie photosensible est en réalité une forme d'«&nbsp;épilepsie réflexe&nbsp;»&nbsp;: des crises qui surviennent en réponse à un déclencheur. Dans le cas de l'épilepsie photosensible, les crises sont déclenchées spécifiquement par des lumières clignotantes, mais d'autres types d'épilepsies réflexes peuvent être provoqués par l'acte de lecture ou par des sons. Des motifs et des images peuvent aussi déclencher des crises.

Le fait que des images statiques puissent provoquer des crises et d'autres troubles est documenté dans des articles tels que [Oscillations gamma et épilepsie photosensible <sup>(angl.)</sup>](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062), où il est noté «&nbsp;_Certaines images visuelles, même en l'absence de mouvement ou de scintillement, peuvent déclencher des crises chez les patient·e·s souffrant d'épilepsie photosensible_&nbsp;». La Fondation de l'Épilepsie, dans son article [Comprendre la photosensibilité, l'une des formes les plus complexes de l'épilepsie <sup>(angl.)</sup>](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), évoque les images et motifs statiques&nbsp;: «&nbsp;_Les motifs statiques ou en mouvement composés de bandes claires et foncées bien visibles ont le même effet que les lumières clignotantes en raison de l'alternance des zones sombres et lumineuses._&nbsp;» Le groupe de travail de l'Epilepsy Foundation of America parvient à «&nbsp;quantifier&nbsp;» un peu le problème&nbsp;: «&nbsp;_Un motif susceptible de provoquer des crises contient des bandes clairement discernables, en nombre supérieur à cinq paires de bandes claires et foncées, quelle que soit leur orientation._&nbsp;» En plus des bandes, les motifs en damier sont également connus pour provoquer des crises photosensibles, selon [Cedars-Sinai <sup>(angl.)</sup>](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html).

Bien que des images statiques puissent servir de déclencheurs, elles sont moins constantes. Le déclencheur bien établi et fort reste la lumière clignotante ou stroboscopique. Le Dr Selim Benbadis du Comprehensive Epilepsy Program de l'USF précise&nbsp;: «&nbsp;La seule chose vraiment documentée, ce sont les lumières clignotantes, qui peuvent déclencher des crises chez les patient·e·s souffrant d'épilepsie photosensible. Seuls quelques types d'épilepsie sont photosensibles, la grande majorité ne l'est pas.&nbsp;» En plus des crises provoquées par la photosensibilité, l'écoute de certains morceaux de musique peut aussi déclencher ce qu'on appelle des crises musicogènes, bien que ces crises semblent beaucoup plus rares. Pour une bonne introduction au sujet des crises musicogènes, consultez la page d'Epilepsy Ontario sur [les crises musicogènes <sup>(angl.)</sup>](https://epilepsyontario.org/musicogenic-seizures/).

Les crises et l'épilepsie ne sont pas la même chose. Dans son article [«&nbsp;Une nouvelle définition de l'epilepsie&nbsp;» <sup>(angl.)</sup>](https://www.epilepsy.com/stories/revised-definition-epilepsy), la Fondation de l'Épilepsie précise&nbsp;: «&nbsp;Une crise est un événement, l'épilepsie est la maladie impliquant des crises récurrentes et non provoquées.&nbsp;» Selon la page de la Fondation de l'Épilepsie [«&nbsp;À quel point les crises sont-elles graves&nbsp;?&nbsp;» <sup>(angl.)</sup>](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures), «&nbsp;La mort subite inattendue en épilepsie (SUDEP) est probablement la cause la plus fréquente de décès lié à la maladie chez les personnes épileptiques. Ce n'est pas fréquent mais c'est un problème réel et il faut en connaître le risque.&nbsp;»

En résumé, les crises peuvent bel et bien être fatales, et le rôle des développeur·euse·s et des concepteur·ice·s est crucial pour rendre le Web plus sûr pour les personnes sensibles aux déclencheurs photosensibles ou musicogènes.

Les crises peuvent être fatales, mais même celles qui sont «&nbsp;seulement&nbsp;» invalidantes peuvent être d'une gravité telle qu'elles rendent l'utilisateur·ice incapable d'agir. D'autres troubles, comme la désorientation, la nausée, les vomissements, etc., peuvent aussi être si graves que l'utilisateur·ice ne peut plus fonctionner. L'article de la Fondation de l'Épilepsie [«&nbsp;Photosensibilité et crises&nbsp;» <sup>(angl.)</sup>](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity) propose une liste de déclencheurs pouvant provoquer des crises chez les personnes photosensibles&nbsp;: voici un extrait de cette liste&nbsp;:

- Les écrans de télévision ou les moniteurs d'ordinateur à cause du scintillement ou du défilement des images.
- Certains jeux vidéo ou émissions télévisées contenant des flashs rapides ou des motifs alternés de différentes couleurs.
- Des lumières stroboscopiques intenses comme les alarmes visuelles incendie.
- La lumière naturelle, comme la lumière du soleil, en particulier lorsqu'elle scintille sur l'eau, à travers les arbres ou les lamelles de stores vénitiens.
- Certains motifs visuels, en particulier les rayures de couleurs contrastées.

Le même article précise que de nombreux facteurs doivent se combiner pour déclencher la réaction photosensible. Il est à noter que la longueur d'onde de la lumière est un facteur possible&nbsp;: les longueurs d'onde dans la partie rouge du spectre semblent particulièrement problématiques. L'article [«&nbsp;Comprendre WCAG 2.0&nbsp;: Trois flashs ou moins (seuil)&nbsp;» <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) indique de façon générale&nbsp;: «&nbsp;Les personnes souffrant de troubles épileptiques photosensibles peuvent avoir une crise déclenchée par un contenu qui clignote à certaines fréquences pendant plus de quelques flashs&nbsp;» et précise très explicitement&nbsp;: «&nbsp;Les personnes sont encore plus sensibles aux clignotements rouges qu'aux autres couleurs, c'est pourquoi un test spécial est prévu pour les clignotements rouges saturés.&nbsp;»

Il n'est même pas nécessaire d'avoir une image ou une vidéo pour provoquer des dommages. Un élément {{HTMLElement('div')}} configuré pour changer de couleur et de luminosité à haute fréquence, facilement réalisable avec JavaScript, peut causer de réels dommages. De plus, le scintillement peut survenir partout. Par exemple, les «&nbsp;spinners&nbsp;» couramment utilisés pour indiquer le chargement des pages peuvent facilement «&nbsp;scintiller&nbsp;» en tournant.

Des préoccupations supplémentaires existent pour les personnes ayant des troubles de la motricité. Par exemple, la page du Trace Research & Development Center sur l'[outil d'analyse de l'épilepsie photosensible <sup>(angl.)</sup>](https://trace.umd.edu/peat/) indique que «&nbsp;Des crises photosensibles peuvent être provoquées par certains types de clignotements dans le contenu web ou informatique, y compris les survols de souris qui font rapidement clignoter de grandes zones de l'écran.&nbsp;»

### Autres réactions physiques

La nausée, le vertige (ou étourdissement) et la désorientation sont des symptômes très peu spécifiques, associés à toutes sortes de maladies et pas particulièrement évocateurs de crises (sauf peut-être la désorientation, qui est observée lors de crises). Cependant, les crises ne sont pas la seule réponse physique indésirable possible face au clignotement, au scintillement, au clignement et à d'autres stimuli similaires. En 1997, un dessin animé japonais a présenté une «&nbsp;bombe virale&nbsp;» animée. Certain·e·s enfants regardant le dessin animé ont eu des crises, d'autres ont souffert de nausées, de tremblements et de vomissements de sang. Les réactions des enfants ont été si graves qu'ils·elles ont dû être transporté·e·s d'urgence à l'hôpital. Les troubles physiques listés ci-dessous sont toutes des conséquences possibles&nbsp;: chacune de ces réactions physiques peut être si grave qu'elle en devient incapacitante.

- Crises
- Troubles vestibulaires
- Migraines
- Nausées
- Vomissements

## Clignotement, clignement et scintillement

Bien que «&nbsp;clignotement&nbsp;» et «&nbsp;clignement&nbsp;» soient parfois utilisés de façon interchangeable, ils ne désignent pas la même chose. Selon le W3C, le clignement est un problème de distraction, tandis que le clignotement fait référence à un contenu qui apparaît plus de 3 fois par seconde et qui est suffisamment grand et lumineux. [Section 508 <sup>(angl.)</sup>](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) interdit les effets de scintillement avec une fréquence supérieure à 3 Hz (scintillements par seconde) et inférieure à 55 Hz. L'article de la Fondation de l'Épilepsie [«&nbsp;Comprendre la photosensibilité, l'une des formes les plus complexes de l'épilepsie&nbsp;» <sup>(angl.)</sup>](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) indique&nbsp;: _«&nbsp;En général, les lumières clignotantes entre les fréquences de cinq à 30 flashs par seconde (Hertz) sont les plus susceptibles de déclencher des crises. Pour être en sécurité, le consensus recommande que les personnes photosensibles ne soient pas exposées à des flashs supérieurs à trois par seconde.&nbsp;»_ Cependant, pour certain·e·s, le clignotement ou le clignement peut provoquer des symptômes à moins de 3 Hz.

Il est important de noter que le clignotement et le clignement ne sont pas toujours néfastes. La NASA, dans son document intitulé [«&nbsp;Clignotement, clignement et réponse temporelle&nbsp;» <sup>(angl.)</sup>](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php), indique que le clignotement et le clignement peuvent être des outils puissants pour attirer l'attention, comme c'est nécessaire pour les boutons d'alerte (ceci suppose que les utilisateur·ice·s peuvent toujours voir l'écran pendant que les éléments clignotent, ce qui n'est pas toujours le cas). Pour certain·e·s, les boutons clignotants avertissent aussi qu'ils doivent être utilisés avec parcimonie et précaution. En ce qui concerne la conception Web, les systèmes qui alertent les employé·e·s d'une entreprise d'un danger en «&nbsp;prenant le contrôle&nbsp;» de l'écran pour fournir un avertissement clignotant d'urgence doivent prendre en compte la fréquence, la taille et les variations de luminosité à l'écran lors de ces avertissements.

### Clignotement et scintillement : comment le danger est-il quantifié ?

Selon l'article [«&nbsp;Crises provoquées par la lumière et les motifs&nbsp;: consensus d'expert·e·s du groupe de travail de l'Epilepsy Foundation of America&nbsp;» <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x), «&nbsp;Un flash est potentiellement dangereux s'il a une luminance ≥20 cd/m<sup>2</sup>, se produit à une fréquence ≥3 Hz et occupe un angle visuel solide ≥0,006 stéradian (environ 10% du champ visuel central ou 25% de la surface de l'écran à une distance de vision typique).&nbsp;»

Quelle est une distance de vision typique&nbsp;? La recommandation retenue à l'époque était&nbsp;: «&nbsp;La zone peut être considérée comme s'appliquant à une surface >25% de celle d'un écran de télévision, en supposant une distance de vision standard ≥2&nbsp;m (environ 9&nbsp;pieds).&nbsp;» Depuis, nos écrans sont beaucoup plus proches de nous.

Certaines couleurs ou combinaisons de couleurs sont aussi importantes. L'article [«&nbsp;Certaines couleurs sont plus susceptibles de provoquer des crises d'épilepsie, selon les chercheur·euse·s&nbsp;» <sup>(angl.)</sup>](https://www.sciencedaily.com/releases/2009/09/090925092858.htm) indique que «&nbsp;…les dynamiques cérébrales peuvent être modulées par certaines combinaisons de couleurs plus que d'autres&nbsp;; par exemple, un stimulus clignotant rouge-bleu provoque une excitation corticale plus forte qu'un stimulus rouge-vert ou bleu-vert.&nbsp;»

### Clignotement général et clignotement rouge

Les seuils [WCAG 2.3.1 pour le clignotement général et le clignotement rouge <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) sont définis comme suit&nbsp;:

- Un **clignotement général** est défini comme une paire de changements opposés de [luminance relative <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) d'au moins 10% de la luminance relative maximale, où la luminance relative de l'image la plus sombre est inférieure à 0,80, et où «&nbsp;une paire de changements opposés&nbsp;» correspond à une augmentation suivie d'une diminution, ou à une diminution suivie d'une augmentation&nbsp;;
- Un **clignotement rouge** est défini comme toute paire de transitions opposées impliquant un rouge saturé.

Ces normes sont basées sur des recherches antérieures. En 2004, l'Epilepsy Foundation of America a organisé un atelier et élaboré un [consensus <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/16146438/) sur les crises photosensibles, indiquant&nbsp;: «&nbsp;Un flash est potentiellement dangereux s'il a une luminance d'au moins 20 cd/m<sup>2</sup>, se produit à une fréquence d'au moins 3 Hz et occupe un angle visuel solide d'au moins 0,006 stéradian (environ 10% du champ visuel central ou 25% de la surface de l'écran à une distance de vision typique).&nbsp;» La transition vers ou depuis un rouge saturé est importante et constitue un risque à elle seule&nbsp;: «&nbsp;Indépendamment de la luminance, une transition vers ou depuis un rouge saturé est également considérée comme un risque.&nbsp;»

### Taille et distance

#### Quelle taille ? Ça dépend

La taille «&nbsp;relative&nbsp;» et la distance comptent toutes les deux. Selon [PEAT <sup>(angl.)</sup>](https://trace.umd.edu/peat/), «&nbsp;La zone combinée des flashs qui se produisent simultanément ne doit pas dépasser le quart d'un rectangle de 341 × 256 pixels n'importe où sur la zone affichée de l'écran lorsque le contenu est visualisé à une résolution de 1024 × 768 pixels.&nbsp;»

L'importance du champ de vision est soulignée dans l'article sur la norme WCAG 2.3.1&nbsp;: «&nbsp;L'écran 1024 × 768 est utilisé comme référence pour l'évaluation. Le bloc de 341 × 256 pixels représente un champ de vision de 10 degrés à une distance de vision typique. (Le champ de 10 degrés provient des spécifications originales et représente la portion centrale de la vision, où les personnes sont les plus sensibles aux stimuli lumineux.)&nbsp;»

Ce ratio de surface en pixels permet de calculer la taille relative, mais la distance compte aussi.

La distance est importante car elle affecte le champ de vision total. Lorsque les utilisateur·ice·s portent des masques oculaires pour jouer, le champ de vision est probablement entièrement enveloppé par l'écran. [WebXR](/fr/docs/Web/API/WebXR_Device_API) est une spécification ouverte qui permet de vivre la réalité virtuelle dans le navigateur, sur téléphone, ordinateur ou casque. Le problème des images clignotantes dans un masque oculaire est croissant, car le masque est très proche des yeux.

Les recherches indiquent généralement que l'utilisation de la VR serait en fait plus sûre que la consommation d'écran classique, grâce à des taux de rafraîchissement plus élevés. Comme le résume [Fisher et al. 2022 <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175)&nbsp;: «&nbsp;Les données limitées disponibles à ce jour ne soulèvent pas de préoccupations particulières concernant les crises liées à la technologie VR, bien que ce point de vue puisse évoluer avec l'expérience. Certains types de contenus VR, notamment les flashs lumineux, les motifs provocateurs ou les changements de couleur, devraient provoquer des crises, tout comme dans le monde réel.&nbsp;»

(À noter que certain·e·s utilisateur·ice·s ne peuvent pas voir avec des curseurs clignotants et peuvent avoir des migraines, des nausées ou de la désorientation, même si le curseur clignotant occupe une très petite zone de l'écran.)

### Motifs et parallaxe

Les motifs géométriques contrastés, sombres et clairs, sont connus pour être problématiques&nbsp;: les rayures et les damiers sont les exemples les plus connus. Le groupe de travail de l'Epilepsy Foundation of America liste combien de paires de rayures claires et foncées sont susceptibles de provoquer des crises, et dans quelles conditions. Si le motif est fixe et droit, huit lignes est le maximum autorisé, mais s'il ondule, pas plus de cinq lignes.

Les effets de parallaxe peuvent provoquer de la désorientation. Utilisez-les avec précaution&nbsp;: si vous devez en utiliser, assurez-vous que l'utilisateur·ice puisse les désactiver.

«&nbsp;Un motif susceptible de provoquer des crises contient des rayures clairement discernables, en nombre supérieur à cinq paires de rayures claires et foncées, quelle que soit leur orientation. Lorsque les rayures claires et foncées d'un motif couvrent à l'œil, depuis la distance de vision minimale attendue, un angle solide de plus de 0,006 stéradian, que la luminance de la rayure la plus claire est supérieure à 50 cd/m<sup>2</sup>, et que le motif est affiché pendant au moins 0,5 s, alors le motif ne doit pas afficher plus de cinq paires de rayures claires et foncées si les rayures changent de direction, oscillent, clignotent ou inversent le contraste&nbsp;; si le motif est fixe ou dérive doucement dans une seule direction, pas plus de huit rayures.&nbsp;»

Tout n'est pas connu, et même avec les métriques ci-dessus, d'autres facteurs entrent en jeu. Par exemple, passer d'une petite zone à une grande augmente la probabilité de réaction du cerveau, tout comme l'augmentation du contraste ou de la fréquence spatiale. On sait aussi, sans en comprendre la raison, que passer d'une orientation simple (par exemple, des rayures) à une orientation multiple (par exemple, le motif en damier qui apparaît lorsqu'on superpose deux séries de rayures perpendiculaires) affecte le cerveau.

### Couleurs

Comprendre la couleur est important pour l'accessibilité. Voir [Comprendre les couleurs et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance) pour le rapport avec l'accessibilité Web et l'accessibilité en général.

La façon dont la couleur se rapporte à son arrière-plan — généralement en termes de contraste — et la rapidité avec laquelle la couleur change d'une image à l'autre dans une animation sont importantes. Pour en savoir plus, voir [Trois flashs ou moins&nbsp;: comprendre le SC 2.3.1 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

#### Le cas particulier du rouge

Il a été démontré que [certaines couleurs sont plus susceptibles de provoquer des crises d'épilepsie que d'autres <sup>(angl.)</sup>](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). La physiologie et la psychologie humaines sont particulièrement affectées par la couleur rouge. Son pouvoir d'influence sur le comportement a même été observé chez les animaux.

- **Test de désaturation du rouge&nbsp;:** L'œil humain est si sensible au rouge que les ophtalmologistes utilisent ce test pour évaluer l'intégrité du nerf optique. Pour plus d'informations sur l'utilisation de ce test, voir [Red Desaturation](https://www.smartoptometry.app/red-desaturation/).
- **Environnement rouge&nbsp;:** Des études ont montré que chez les personnes souffrant de traumatisme crânien, [la fonction cognitive est réduite dans un environnement rouge <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/20649469/).

[Rouge saturé](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance) est un cas particulier et dangereux, et il existe des tests spécifiques pour cela. En plus de l'effet d'un environnement rouge sur la fonction cognitive des personnes ayant subi un traumatisme crânien, la couleur dans la longueur d'onde du rouge semble nécessiter une attention et des tests particuliers. Le Dr Gregg Vanderheiden, lors des tests avec l'outil Photosensitive Epilepsy Analysis Tool, a constaté que les taux de crises étaient bien plus élevés que prévu. Il a été observé que nous sommes beaucoup plus sensibles au clignotement du rouge saturé. (Voir la vidéo, [The Photosensitive Epilepsy Analysis Tool <sup>(angl.)</sup>](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

#### Websafe ne veut pas dire sans risque de crise

Notez que la couleur **#990000** est considérée comme «&nbsp;websafe&nbsp;». Cela ne signifie _pas_ qu'elle est «&nbsp;sans risque de crise&nbsp;», mais simplement qu'elle peut être reproduite fidèlement par la technologie utilisée pour générer la couleur à l'écran.

## Mesurer pour prévenir les risques

Mesurer le potentiel de risque est un bon point de départ. Les facteurs pris en compte dans les tests incluent la couleur, la luminosité, la taille, le contraste, et dans le cas des animations, la fréquence. WCAG 2.1 fournit des recommandations pour évaluer le contenu.

En août 2004, l'Epilepsy Foundation of America a organisé un atelier pour établir un consensus d'expert·e·s sur les crises photosensibles. Les informations suivantes, expertes et faisant autorité, proviennent de&nbsp;: [Crises provoquées par la lumière et les motifs&nbsp;: consensus d'expert·e·s du groupe de travail de l'Epilepsy Foundation of America. <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/16146438/)

> Un flash est potentiellement dangereux s'il a une luminance ≥20 cd/m<sup>2</sup>, se produit à une fréquence ≥3 Hz et occupe un angle visuel solide ≥0,006 stéradian (environ 10% du champ visuel central ou 25% de la surface de l'écran à une distance de vision typique). Une transition vers ou depuis un rouge saturé est également considérée comme un risque. Un motif susceptible de provoquer des crises contient des rayures clairement discernables, en nombre supérieur à cinq paires de rayures claires et foncées, quelle que soit leur orientation. Lorsque les rayures claires et foncées d'un motif couvrent à l'œil, depuis la distance de vision minimale attendue, un angle solide de plus de 0,006 stéradian, que la luminance de la rayure la plus claire est supérieure à 50 cd/m<sup>2</sup>, et que le motif est affiché pendant au moins 0,5 s, alors le motif ne doit pas afficher plus de cinq paires de rayures claires et foncées si les rayures changent de direction, oscillent, clignotent ou inversent le contraste&nbsp;; si le motif est fixe ou dérive doucement dans une seule direction, pas plus de huit rayures. Ces principes sont plus faciles à appliquer dans le cas de médias fixes, par exemple une émission télévisée préenregistrée, qui peut être analysée image par image, comparé aux médias interactifs.

Le «&nbsp;cd/m<sup>2</sup>&nbsp;» fait référence à la candela par mètre carré. Pour le·la développeur·euse web, comment cela se rapporte-t-il aux mesures de couleur, de luminance et de saturation&nbsp;?

La candela est une unité SI (Système international d'unités) d'intensité lumineuse. C'est un terme photométrique, et la photométrie concerne la mesure de la lumière visible perçue par l'œil humain. L'article Wikipédia sur [«&nbsp;Candela par mètre carré&nbsp;»](https://fr.wikipedia.org/wiki/Candela_par_m%C3%A8tre_carr%C3%A9) l'explique en termes familiers pour les développeur·euse·s&nbsp;: sur un écran, et dans l'espace RGB. C'est utile, car il existe une norme spécifique supposée utilisée sur les moniteurs, les imprimantes et Internet, qui est le **sRGB** (standard Red Green Blue).

> En tant que mesure de la lumière émise par unité de surface, cette unité est fréquemment utilisée pour spécifier la luminosité d'un écran. La spécification [sRGB](https://fr.wikipedia.org/wiki/SRGB) pour les moniteurs vise 80 cd/m<sup>2</sup>. Les moniteurs calibrés devraient généralement avoir une luminosité de 120 cd/m<sup>2</sup>. La plupart des écrans LCD grand public ont une luminance de 200 à 300 cd/m<sup>2</sup>. Les téléviseurs haute définition vont de 450 à environ 1500 cd/m<sup>2</sup>.

À retenir&nbsp;: l'espace colorimétrique **sRGB** est un point commun entre la recherche, les outils d'évaluation et les développeur·euse·s, car il est facilement convertible depuis le code hexadécimal couramment utilisé.

### Physiologie et psychologie humaines comme facteur

De nombreux·ses expert·e·s travaillent à quantifier et mesurer au mieux les types de contenus web pouvant servir de déclencheurs de crises. Cela dit, il ne faut pas oublier que la couleur relève autant de la perception humaine dans le cerveau que de la mesure de la lumière émise par un écran.

En plus des variations psychologiques, il existe aussi des différences physiologiques entre nous. Il y aura des variations et des nuances dans la façon dont un·e humain·e perçoit et réagit à la couleur et à la lumière. Par exemple, Tom Jewett, maître de conférences émérite en informatique à la Cal State University Long Beach, note à propos de [la clarté dans l'échelle de couleur HSL <sup>(angl.)</sup>](https://colortutorial.design/hsb.html)&nbsp;: «&nbsp;…La distinction entre les niveaux de clarté n'est pas réellement linéaire comme l'échelle HSL le suggère&nbsp;; nous sommes beaucoup plus sensibles aux changements dans les valeurs claires qu'aux valeurs foncées.&nbsp;»

Il est important de comprendre que la lumière et ses mesures sont linéaires, mais la vision humaine et la perception humaine ne le sont pas. Les recherches et discussions se poursuivent sur la façon de relier la mesure machine de la lumière qui passe d'un écran d'ordinateur, à travers la distance jusqu'à l'œil humain, filtrée par la vision humaine, puis traitée par le cerveau humain.

Même l'âge et le sexe peuvent jouer un rôle. Selon l'article de la Fondation de l'Épilepsie, [«&nbsp;Mieux comprendre la photosensibilité, l'une des conditions les plus complexes de l'épilepsie&nbsp;» <sup>(angl.)</sup>](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions), «&nbsp;Les enfants et les adolescent·e·s sont plus susceptibles que les adultes d'avoir une réponse anormale à la stimulation lumineuse, et la première crise induite par la lumière survient presque toujours avant 20 ans.&nbsp;» L'article poursuit avec cette statistique&nbsp;: «&nbsp;Les filles (60&nbsp;%) sont plus souvent touchées que les garçons (40&nbsp;%), bien que les crises soient plus fréquentes chez les garçons car ils sont plus susceptibles de jouer aux jeux vidéo. Les jeux vidéo contiennent souvent des stimulations lumineuses potentiellement provocatrices.&nbsp;»

**Les tests utilisateur·ice·s sont très problématiques**. Naturellement, personne ne souhaite soumettre une personne sujette aux crises à des tests utilisateur·ice·s. C'est dangereux. À ce titre, l'une des choses les plus éthiques que les développeur·euse·s et concepteur·ice·s puissent faire est d'utiliser des outils développés par des expert·e·s du domaine ayant travaillé en collaboration avec des médecins. À ce jour, deux outils sont couramment disponibles et ont été développés de façon éthique et professionnelle par des chercheur·euse·s et des médecins pour les films/vidéos&nbsp;: **PEAT** et le **Harding Test**.

### Outil d'analyse de l'épilepsie photosensible (PEAT)

Le [Trace Research and Development Center <sup>(angl.)</sup>](https://trace.umd.edu/) a établi une référence avec son [outil d'analyse de l'épilepsie photosensible <sup>(angl.)</sup>](https://trace.umd.edu/peat/), et a tenu à le rendre **_gratuit_** au téléchargement. PEAT peut aider les auteur·ice·s à déterminer si les animations ou vidéos de leur contenu sont susceptibles de provoquer des crises. Veuillez noter la restriction d'utilisation&nbsp;: **_L'utilisation de PEAT pour évaluer du contenu produit commercialement pour la télévision, le cinéma, le divertissement à domicile ou l'industrie du jeu est interdite. Utilisez le Harding Test ou d'autres outils pour un usage commercial._**

Pour obtenir gratuitement l'outil d'analyse de l'épilepsie photosensible de l'Université du Maryland, rendez-vous sur le [Trace Research & Development Center <sup>(angl.)</sup>](https://trace.umd.edu/).

![Outil d'analyse de l'épilepsie photosensible du College of Information Studies de l'Université du Maryland.](peatversion1pt6.png)

### Le teste de Harding

Comme l'utilisation de PEAT est interdite à des fins commerciales, les programmateur·ice·s de télévision peuvent utiliser le teste de Harding sur [HardingTest.com <sup>(angl.)</sup>](https://hardingtest.com/). Le Harding Test est une autre référence. Les programmateur·ice·s de télévision dans différents pays doivent réussir ce test avant de pouvoir diffuser, donc le groupe sur [HardingTest.com <sup>(angl.)</sup>](https://hardingtest.com/) propose à la fois l'analyse et la certification du contenu vidéo.

![Analyseur de flashs et de motifs Harding.](screen_shot_2019-06-20_at_11.16.17_am.png)

## Solutions d'accessibilité pour les développeur·euse·s

Toutes les animations sont potentiellement dangereuses. En tant que concepteur·ice·s et développeur·euse·s, notre responsabilité est de veiller à ne pas nuire, intentionnellement ou non. Si vous devez inclure un élément susceptible de causer du tort, il est essentiel d'empêcher les utilisateur·ice·s de rencontrer accidentellement ce contenu dangereux, et de leur fournir des moyens de prévenir et de contrôler les animations afin de limiter les risques.

### Ce que le·la développeur·euse web peut faire

#### Ne pas nuire

[Directive WCAG 2.3 Crises et réactions physiques <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) propose un aperçu&nbsp;: _«&nbsp;Ne concevez pas de contenu susceptible de provoquer des crises ou des réactions physiques&nbsp;»_. N'incluez pas d'animation qu'un·e utilisateur·ice ne peut pas contrôler. N'utilisez pas de motifs connus pour poser problème. Si vous devez inclure un gif ou png clignotant, enregistrez-le sous forme de vidéo afin que des contrôles soient disponibles pour l'utilisateur·ice. Donnez à l'utilisateur·ice la possibilité d'éviter, d'arrêter ou de rendre le contenu moins nocif.

#### Comprendre la malveillance

En tant que développeur·euse ou concepteur·ice, demandez-vous si un contenu clignotant est vraiment nécessaire sur votre page web. Même bien géré, il existe des personnes qui peuvent télécharger un contenu problématique depuis votre site et l'utiliser à des fins malveillantes. On pense que la première tentative documentée d'utiliser des ordinateurs pour provoquer des dommages physiques via l'animation a eu lieu le samedi 22 mars 2008&nbsp;: le site de l'Epilepsy Foundation a été piraté via des publications contenant des images clignotantes et des liens prétendument utiles. Des utilisateur·ice·s souffrant de troubles vestibulaires venus chercher de l'aide sur le site ont été affecté·e·s.

Des procédures juridiques sont en cours après que le journaliste Kurt Eichenwald, épileptique connu, a subi une crise après avoir reçu un gif animé en décembre 2016&nbsp;: le gif clignotant portait le message&nbsp;: _«&nbsp;Tu mérites une crise pour tes publications&nbsp;»_.

#### Contrôler l'exposition, contrôler l'accès

Contrôler l'exposition à la page est essentiel pour éviter qu'une personne sujette aux crises ne soit exposée accidentellement. Les WCAG indiquent qu'un seul objet peut rendre toute la page inutilisable.

Si vous pensez qu'une image ou une animation peut provoquer des crises, contrôlez l'accès en affichant d'abord un avertissement sur le contenu, puis en le plaçant à un endroit où l'utilisateur·ice doit y accéder volontairement, par exemple en cliquant sur un bouton, ou en veillant à ce que le lien vers la page comporte un avertissement distinct et évident.

Envisagez de définir des directives d'exploration pour les moteurs de recherche afin d'indiquer qu'ils ne doivent pas inclure de ressources potentiellement dangereuses dans leurs index. Vous pouvez le faire en utilisant des métadonnées dans un élément [`<meta name="robots">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/robots) avec des règles restrictives comme `noindex, nofollow`.
En n'indexant pas la page (`noindex`) et en ne suivant pas les liens de la page (`nofollow`), vous réduisez la probabilité que des utilisateur·ice·s la trouvent via une recherche&nbsp;:

```html
<html lang="fr">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
</html>
```

Pour les ressources non HTML, vous pouvez définir des directives d'exploration dans l'en-tête HTTP {{HTTPHeader("X-Robots-Tag")}}&nbsp;:

```http
X-Robots-Tag: noindex
```

### GIFs animés

Tous les types d'images sont potentiellement dangereux, mais les GIFs animés méritent une mention spéciale en raison de leur omniprésence et du fait que la vitesse d'animation est contrôlée dans le fichier GIF lui-même.

#### Détecter si un GIF est animé

- Le paquet npm [animated-gif-detector <sup>(angl.)</sup>](https://www.npmjs.com/package/animated-gif-detector) permet de détecter l'animation _le plus tôt possible_ dans une requête HTTP donnée.
- Zakirt propose un gist pour [animated-gif-detect.js <sup>(angl.)</sup>](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285)

Avec les GIFs animés, assurez-vous que l'animation est inactive jusqu'à ce que l'utilisateur·ice choisisse de l'activer. Par exemple, l'utilisateur·ice doit appuyer sur un bouton ou cocher une case pour démarrer l'animation.

### Vidéos

Comme pour les GIFs animés, l'utilisateur·ice doit appuyer sur un bouton ou cocher une case pour démarrer l'animation. Il existe de nombreuses façons de procéder, comme NE PAS ajouter l'attribut [`autoplay`](/fr/docs/Web/API/HTMLMediaElement/autoplay) à `<video controls>`, ou définir {{CSSxRef('animation-play-state')}} sur `paused` comme état initial. Pour voir un exemple puissant de la façon dont cela fonctionne, consultez l'article de Kirupa&nbsp;: [«&nbsp;Activer ou désactiver les animations&nbsp;» <sup>(angl.)</sup>](https://www.kirupa.com/html5/toggling_animations_on_off.htm). Kirupa utilise `animation-play-state` en combinaison avec {{CSSxRef('transition')}}, {{CSSxRef('transform')}} et [`prefers-reduced-motion`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) pour créer une expérience très accessible sous le contrôle de l'utilisateur·ice.

[`animation-play-state`](/fr/docs/Web/CSS/Reference/Properties/animation-play-state) est une propriété CSS qui définit si une animation est en cours ou en pause.

```css
div {
  animation-play-state: paused;
}
```

[Les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions) peuvent être utilisées pour définir la durée à zéro pour l'étape initiale de l'animation.

```css
div {
  transition-duration: 0s;
}
```

### Permettre à l'utilisateur·ice d'arrêter les animations

Un élément {{HTMLElement('video')}} sans attributs ne se lance pas automatiquement et n'a pas de contrôles. Veillez à ajouter l'attribut `controls` à l'élément vidéo pour que l'utilisateur·ice puisse arrêter la vidéo ainsi que la démarrer.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>
```

#### S'assurer que les contrôles sont disponibles par programmation

La propriété `HTMLMediaElement.controls` reflète l'attribut HTML `controls`, qui contrôle l'affichage des contrôles de l'interface utilisateur pour la lecture du média.

##### Vidéo

Pour garantir qu'une vidéo dispose de contrôles accessibles à l'utilisateur·ice, ajoutez le mot `controls` aux éléments vidéo et audio HTML.

`<video controls>`

```html
<video controls>
  <source src="myVideo.mp4" type="video/mp4" />
  <source src="myVideo.webm" type="video/webm" />
  <p>
    Votre navigateur ne prend pas en charge la vidéo HTML. Voici un
    <a href="myVideo.mp4">lien vers la vidéo</a> à la place.
  </p>
</video>
```

##### Audio

En appliquant le même exemple à l'audio&nbsp;:

`<audio controls>`

```html
<audio controls>
  <source src="myAudio.ogg" type="audio/ogg" />
  <source src="myAudio.mp3" type="audio/mpeg" />
  <p>
    Votre navigateur ne prend pas en charge l'élément audio. Voici un
    <a href="myAudio.mp3">lien vers l'audio</a> à la place.
  </p>
</audio>
```

##### Audio dans la vidéo

Notez que l'audio dans les vidéos peut être contrôlé par l'attribut `muted`, même si le contenu se trouve dans l'élément {{HTMLElement('video')}} plutôt que dans {{HTMLElement('audio')}}. Cet exemple provient de la section sur l'attribut [muted <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted) de la norme HTML Living Standard. Il explique que la vidéo se lance automatiquement en sourdine jusqu'à ce que l'utilisateur·ice décide d'activer le son.

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### Contrôler la vitesse

Cela semble évident, mais comme il existe de nombreux types MIME, les mécanismes de gestion varient considérablement, et il n'existe donc pas de solution universelle. Cela est d'autant plus compliqué que la classification des fichiers influence leur gestion. Par exemple, le format .gif est généralement considéré comme une image, mais il est aussi vu comme un format vidéo dans certains milieux en raison de sa capacité à être animé. Pour une liste complète des types de médias, consultez la [page des types de médias sur IANA.org <sup>(angl.)</sup>](https://www.iana.org/assignments/media-types/media-types.xhtml).

Les méthodes pour les détecter ne sont pas triviales. Vous pouvez consulter la norme [MIME Sniffing <sup>(angl.)</sup>](https://mimesniff.spec.whatwg.org/) sur whatwg.org. Presque tous les types d'images peuvent être animés&nbsp;; la façon dont elles le sont varie, et donc le contrôle de l'animation aussi.

#### Types de fichiers couramment animés

- **Bitmap**&nbsp;: Animation
- **Canvas**&nbsp;: Le tutoriel MDN sur Canvas propose une excellente section sur [les animations de base](/fr/docs/Web/API/Canvas_API/Tutorial/Basic_animations). `setInterval()` est couramment utilisé pour l'animation Canvas, mais il est aussi intéressant de voir comment il interagit avec le rafraîchissement de l'écran. Voir l'article [«&nbsp;Contrôler les fps avec `requestAnimationFrame`&nbsp;?&nbsp;» <sup>(angl.)</sup>](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) qui discute des détails de l'implémentation de `requestAnimationFrame` en lien avec le rafraîchissement de l'écran.
- **GIFs (Raster)**&nbsp;: Difficiles à contrôler car la gestion de l'animation se fait dans le fichier gif lui-même. Pour contrôler la vitesse des GIFs, voir [«&nbsp;G152&nbsp;: Arrêter le clignotement des images gif animées après n cycles (dans les 5 secondes)&nbsp;» <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G152.html) du W3C. Un excellent article Stack Overflow sur le sujet&nbsp;: [«&nbsp;Peut-on contrôler l'animation GIF avec JavaScript&nbsp;?&nbsp;» <sup>(angl.)</sup>](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)
- **GIFV (Raster)**&nbsp;: Considéré comme une variante vidéo du GIF. Le format n'est pas standardisé et doit référencer un vrai fichier vidéo (par exemple, un fichier .webm) qui doit exister ailleurs.
- **JPG (Raster)**
- **MNG (Raster)**&nbsp;: Multiple-image Network Graphics est un format de fichier graphique pour les images animées. Aussi considéré par certains comme un format vidéo.
- **PNG, APNG (Raster)**&nbsp;: Portable Network Graphics et Animated Portable Network Graphics peuvent être animés.
- **SVGs (Vectoriel)**&nbsp;: Le document MDN [«&nbsp;SVG&nbsp;: Scalable Vector Graphics&nbsp;»](/fr/docs/Web/SVG) précise que _«&nbsp;SVG est une norme Web ouverte basée sur du texte. Elle est explicitement conçue pour fonctionner avec d'autres normes web telles que [CSS](/fr/docs/Web/CSS), [DOM](/fr/docs/Web/API/Document_Object_Model) et [SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL).&nbsp;»_ Les SVGs peuvent être utilisés comme image, par exemple&nbsp;: `<img src="example.svg" alt="Ceci est une image utilisant un svg comme source">`. Cela signifie que l'apparence et l'animation SVG peuvent être contrôlées via les keyframes et animations CSS. Pour l'interaction avec JavaScript, voir les documents MDN sur [Interfaces SVG](/fr/docs/Web/API/Document_Object_Model#svg_dom) et [Appliquer des effets SVG au contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).
- **Voxel (Raster)**&nbsp;: Les graphismes raster tridimensionnels [voxel](https://fr.wikipedia.org/wiki/Voxel) sont utilisés dans les jeux vidéo et l'imagerie médicale.

#### Le texte peut aussi être animé

Les traductions et transformations peuvent animer le texte dans une div, et causer du tort. Un texte en mouvement peut provoquer des crises pour les mêmes raisons que les images animées, donc évitez d'animer votre texte. Il est conseillé d'éviter d'utiliser du texte en mouvement, car de nombreux lecteurs d'écran ne peuvent pas le lire et c'est une mauvaise expérience utilisateur même pour celles et ceux sans problème de vision ou vestibulaire.

### CSS pour l'animation

Dans la feuille de style ou dans l'élément HTML {{HTMLElement('style')}}, de nombreuses options peuvent se combiner pour créer une expérience puissante pour l'utilisateur·ice. La propriété `animation` mentionnée plus haut est en fait un raccourci pour toutes les propriétés d'animation, dont&nbsp;:

- `animation-play-state`
- `animation-duration` a une valeur de `<time>`&nbsp;; c'est la durée d'un cycle d'animation. Elle peut être spécifiée en secondes `(s)` ou millisecondes `(ms)`. Une valeur par défaut de `0s` indique qu'aucune animation ne doit se produire.
- `animation-timing-function`

La propriété animation est déjà puissante seule, mais combinée à d'autres propriétés et requêtes comme `prefers-reduced-motion`, elle permet de mettre en place un ensemble d'options très utiles pour l'utilisateur·ice. Définir les propriétés `animation-duration` et `transition-duration` sur une durée courte plutôt que sur `animation: none` et `transition: none` permet d'éviter les problèmes si une dépendance nécessite que l'animation s'exécute.

### Animation JavaScript

JavaScript est souvent utilisé pour contrôler les éléments HTML {{HTMLElement('canvas')}} et SVG. La plupart du code JavaScript qui s'applique à la vidéo HTML s'applique aussi à l'audio. `HTMLMediaElement.playbackRate` permet de contrôler la vitesse de lecture pour la vidéo et l'audio. Une valeur de 1.0 est la vitesse normale&nbsp;; 0.5 est la moitié de la vitesse, 2.0 est deux fois plus rapide. Un nombre négatif lit la vidéo ou l'audio à l'envers. Définissez la propriété playback rate&nbsp;: `HTMLMediaElement.playbackRate = playbackSpeed`.

{{DOMxRef("document.getAnimations()")}} est une technologie expérimentale, et inclut [Animations CSS](/fr/docs/Web/CSS/Guides/Animations), [Transitions CSS](/fr/docs/Web/CSS/Guides/Transitions) et [Web Animations](/fr/docs/Web/API/Web_Animations_API). La page MDN sur {{DOMxRef("Document.getAnimations()")}} propose l'exemple de code suivant pour ralentir toutes les animations d'une page à la moitié de la vitesse&nbsp;:

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### Sources d'images pour l'animation

L'une des méthodes les plus simples consiste à partir d'une image existante, à l'utiliser comme source, puis à l'animer. Vous pouvez utiliser des GIFs, JPGs, PNGs, SVGs et autres types de fichiers comme source d'image, tant qu'ils sont autorisés dans votre environnement. Les SVGs sont souvent interdits pour des raisons de sécurité. Le document MDN [Animations de base](/fr/docs/Web/API/Canvas_API/Tutorial/Basic_animations) propose d'excellents exemples, utilisant plusieurs sources d'images pour le soleil, la terre et la lune, et plusieurs méthodes canvas pour contrôler la vitesse et l'animation de la terre autour du soleil, et de la lune autour de la terre. Utilisez le codepen associé à ce tutoriel pour ajuster `ctx.rotate` et voir l'effet sur l'animation.

#### Si vous devez absolument utiliser une animation clignotante…

Assurez-vous qu'elle dispose d'un contrôle. Assurez-vous qu'elle est désactivée lors de la première visite, et que l'utilisateur·ice doit choisir de voir l'animation.

Un exemple de format sans contrôle utilisateur est le fichier gif. La vitesse d'animation est contrôlée dans l'image gif elle-même. Convertir un gif animé en vidéo permet d'ajouter des contrôles et donne du pouvoir à l'utilisateur·ice. Il existe de nombreux convertisseurs gratuits en ligne, comme [EZGif <sup>(angl.)</sup>](https://ezgif.com/) et [GIF to MP4 <sup>(angl.)</sup>](https://gif-2-mp4.com/).

#### Prévenir les surprises

Prévenez les utilisateur·ice·s de ce qui va se passer avant qu'ils·elles ne cliquent sur un lien. Décrivez l'animation à venir. Voir [WCAG 2.2 Critère de succès 3.2.5 Changement sur demande <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#change-on-request).

#### Garder petit

Si vous devez absolument avoir du clignotement, gardez-le petit. En général, limitez la taille du flash à une zone d'environ 341 par 256 pixels ou moins. Cette taille suppose une distance d'affichage typique. Comme mentionné plus haut, cette taille peut être trop grande si l'image est vue de près, comme dans un casque VR. WebVR est une spécification ouverte qui permet de vivre la VR dans le navigateur. WebVR peut être utilisé sur téléphone, ordinateur ou casque.

Si vous concevez pour un jeu ou une VR utilisant un masque oculaire, **ou PEUT être utilisé par un masque oculaire**, comme dans Firefox Reality (navigateur pour la réalité virtuelle), veillez à ce que le rectangle soit bien plus petit que 341 par 256 pixels, car l'image est beaucoup plus proche des yeux de l'utilisateur·ice.

#### Réduire le contraste

Normalement, un contraste élevé est une bonne chose en accessibilité. Plus le contraste entre la couleur du texte et le fond (appelé _rapport de contraste de luminosité_, selon la page [Couleurs à bon contraste <sup>(angl.)</sup>](https://www.w3.org/WAI/perspective-videos/contrast/) de W3.org), plus le contenu est lisible. Les utilisateur·ice·s malvoyant·e·s apprécient particulièrement les efforts pour garantir un contraste élevé. Mais pour le contenu animé, **_réduire_** le contraste permet de diminuer le risque de crises. Diminuez le rapport de contraste si trois flashs en une seconde sont détectés.

Le rapport de contraste est défini dans [WCAG 2.2 <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/) comme suit&nbsp;:

- _rapport de contraste_
  - : (L1 + 0.05) / (L2 + 0.05), où
    - L1 est la [luminance relative <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) de la couleur la plus claire, et
    - L2 est la [luminance relative <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) de la couleur la plus sombre.

Il est préférable d'ajuster le contraste avant de publier sur le web. Pour les vidéos et GIFs animés, la suite Adobe est une excellente ressource pour les images traditionnelles. Pour les images, un outil en ligne est disponible&nbsp;: [Brightness and contrast online <sup>(angl.)</sup>](https://pinetools.com/brightness-contrast-image). Si vous créez des GIFs animés, commencez par un GIF à faible contraste.

JavaScript permet aussi de réduire le contraste dynamiquement. Voici un exemple de code issu de la section [«&nbsp;Exemple&nbsp;: définir la couleur de fond d'un paragraphe&nbsp;»](/fr/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#définir_la_couleur_de_fond_dun_paragraphe) du document MDN [Construire et mettre à jour l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree). Notez que la couleur est décrite dans l'espace colorimétrique **RGB**.

**Contenu HTML [(lien vers la page source)](/fr/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2)**

```html
<body>
  <input type="button" value="Définir la couleur de fond du paragraphe" />
  <p>salut</p>
  <p>bonjour</p>
</body>
```

**Contenu JavaScript [(lien vers la page source)](/fr/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#javascript_2)**

```js
function setBackground() {
  // maintenant, récupérez tous les éléments p du document
  const paragraphs = document.getElementsByTagName("p");

  // récupérez le deuxième paragraphe de la liste
  const secondParagraph = paragraphs[1];

  // définissez le style en ligne
  secondParagraph.style.background = "red";
}

document.querySelector("input").addEventListener("click", setBackground);
```

#### Éviter les rouges saturés pour le contenu clignotant

Comme mentionné plus haut, l'Epilepsy Foundation of America a organisé un atelier en août 2004 pour établir un consensus d'expert·e·s sur les crises photosensibles. Parmi les résultats&nbsp;: _«&nbsp;Un flash est dangereux s'il a une luminance d'au moins 20 cd/m2, se produit à une fréquence d'au moins 3 Hz, et occupe un angle visuel solide d'au moins 0,006 stéradian (environ 10&nbsp;% du champ visuel central ou 25&nbsp;% de la surface de l'écran à une distance d'affichage typique). Une transition vers ou depuis un rouge saturé est aussi considérée comme un risque.&nbsp;»_ Il·Elle·s notent aussi dans ce consensus&nbsp;: _«&nbsp;Indépendamment de la luminance, une transition vers ou depuis un rouge saturé est aussi considérée comme un risque.&nbsp;»_

### Proposer des styles CSS alternatifs

Sachant que beaucoup d'animations et de clignotements peuvent être contrôlés via CSS, il est important d'explorer des moyens de proposer des options alternatives aux utilisateur·ice·s, et de rendre le contrôle de ces options pratique et visible.

#### Feuilles de style alternatives

Les navigateurs modernes affichent les CSS alternatifs disponibles dans les feuilles de style alternatives si les utilisateur·ice·s savent où les chercher. Parfois, les styles alternatifs sont révélés via le menu Affichage, parfois dans les paramètres, parfois les deux. Tous·tes les utilisateur·ice·s ne savent pas chercher ces options via le navigateur ou les paramètres, il est donc utile de proposer des boutons ou liens évidents pour changer le style. Cela ne gêne pas la capacité du navigateur à lire les feuilles de style alternatives, ni la possibilité pour l'utilisateur·ice de définir ses préférences dans les paramètres.

Il est important de savoir que certain·e·s utilisateur·ice·s, comme celles et ceux qui dépendent de systèmes de reconnaissance vocale, comptent souvent sur les boutons et liens classiques car leur handicap les empêche d'utiliser une souris ou de profiter des événements tactiles sur tablette.

Les moyens courants d'inclure des feuilles de style alternatives dans vos documents HTML sont d'utiliser l'élément {{HTMLElement('link')}} et {{CSSxRef('@import')}}.

#### L'élément {{HTMLElement('link')}}

Utilisez l'élément {{HTMLElement('link')}} avec les attributs `rel="alternate stylesheet"` et pour le titre, `title="…"` dans la section {{HTMLElement('head')}} de la page web.

```html
<head>
  <title>Page d'accueil</title>
  <link href="main.css" rel="stylesheet" title="Style par défaut" />
  <link
    href="alternate1.css"
    rel="alternate stylesheet"
    title="Style alternatif 1" />
  <link
    href="alternate2.css"
    rel="alternate stylesheet"
    title="Style alternatif 2" />
</head>
```

**{{CSSxRef('@import')}}** est aussi une façon d'intégrer des feuilles de style, mais elle est moins bien prise en charge que l'élément {{HTMLElement('link')}}.

```css
@import "alternate1.css";
@import "alternate2.css";
```

En utilisant des feuilles de style alternatives (n'oubliez pas d'ajouter les titres), vous permettez aux utilisateur·ice·s de choisir leur style via le navigateur.

### Changement de style dynamique

Un problème avec le fait de compter sur le navigateur pour révéler les styles alternatifs est que tous·tes les utilisateur·ice·s ne sont pas assez technophiles pour les découvrir. Ou, à cause de leur handicap, ne peuvent pas le faire. Les boutons ou liens rendent les options visibles pour de nombreux utilisateur·ice·s reconnaissant·e·s. Il existe de nombreuses façons d'ajouter des boutons de bascule pour permettre à l'utilisateur·ice de changer de feuille de style. Cela dit, l'utilisation de feuilles de style alternatives n'est pas la seule option. Une autre consiste à manipuler le style de la page elle-même. Selon le document MDN [Utiliser des informations de style dynamiques](/fr/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), _«&nbsp;dans la mesure du possible, il est préférable de manipuler dynamiquement les classes via la propriété [`className`](/fr/docs/Web/API/Element/className), car l'apparence finale de tous les points d'accroche de style peut être contrôlée dans une seule feuille de style&nbsp;»_. Un des meilleurs exemples est la page du W3C [«&nbsp;C29&nbsp;: Utiliser un sélecteur de style pour proposer une version alternative conforme&nbsp;» <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/C29.html).

### Cas extrêmes : alternatives texte seul

Une feuille de style alternative qui empêche l'affichage des images est facile à créer. C'est une solution radicale, mais parfois nécessaire pour les enseignant·e·s et autres agent·e·s publics qui doivent servir des personnes très sensibles. Ces agent·e·s peuvent demander à leurs développeur·euse·s de créer une feuille de style spéciale utilisant `display: none`. Voici comment faire en CSS&nbsp;:

```css
img {
  display: none;
}
```

#### Profiter des requêtes média avec {{HTMLElement('style')}}

En configurant des requêtes média, vous permettez à l'utilisateur·ice de contrôler l'affichage via le navigateur ou le système d'exploitation. Voir le document MDN [Accessibilité&nbsp;: ce que les utilisateur·ice·s peuvent faire pour naviguer plus en sécurité](/fr/docs/Web/Accessibility/Guides/Browsing_safely) pour plus de détails sur l'accès aux contrôles.

#### `prefers-reduced-motion`

La prise en charge de `prefers-reduced-motion` dans les navigateurs modernes progresse.

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

Pour voir un bon exemple d'utilisation de `prefers-reduced-motion`, consultez le document MDN [`prefers-reduced-motion`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), ou l'exemple ci-dessous tiré de la section [«&nbsp;Nouveautés de Chrome 74&nbsp;» <sup>(angl.)</sup>](https://developer.chrome.com/blog/new-in-chrome-74/).

```css
button {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  button {
    animation: none;
  }
}
```

#### `prefers-color-scheme`

Cela peut être utile si l'API de lumière ambiante n'est pas disponible. La prise en charge progresse.

```css
@media (prefers-color-scheme: dark) {
  /* ajuster les styles pour le mode sombre */
}
```

#### `Window.matchMedia()`

Un outil puissant est disponible pour les développeur·euse·s via Window.matchMedia(). Une excellente ressource est le document MDN sur {{DOMxRef("Window.matchMedia()")}}.

#### Fonction de mise à jour média

Plus l'écran est rafraîchi souvent, plus il paraît stable à l'œil humain, et moins il «&nbsp;scintille&nbsp;». La grande majorité des technologies modernes rafraîchissent à un taux qui ne pose pas de problème de photosensibilité. Cependant, tout le monde n'a pas les moyens d'acheter la technologie la plus récente&nbsp;: les ordinateurs anciens ou peu puissants peuvent avoir des taux de rafraîchissement faibles. [Fiche technique AbilityNet (novembre 2015) Ordinateurs et épilepsie <sup>(angl.)</sup>](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) détaille les taux de rafraîchissement.

Un très vieil article, Tech Republic [«&nbsp;Épilepsie et scintillement d'écran CRT/LCD&nbsp;» <sup>(angl.)</sup>](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/), avait une réponse intéressante sur les taux de rafraîchissement en Hz&nbsp;:

- _«&nbsp;Cet effet est perceptible, et documenté, jusqu'à 70 Hz.&nbsp;»_
- _«&nbsp;Ces études semblent indiquer qu'il faut éviter les taux de rafraîchissement inférieurs à 70 Hz, et utiliser un taux non divisible par 10.&nbsp;»_

Eric Bailey, de CSS-Tricks, a trouvé une utilisation innovante de la fonction de mise à jour, qui, combinée à animation-duration ou transition-duration, permet de conclure à un taux imperceptible à l'œil humain. Autrement dit, les techniques d'Eric résolvent le problème du taux de rafraîchissement. Le CSS ci-dessous est tiré de l'article CSS-Tricks [«&nbsp;Revoir prefers-reduced-motion, la requête média de mouvement réduit&nbsp;» <sup>(angl.)</sup>](https://css-tricks.com/revisiting-prefers-reduced-motion/).

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Merci à Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

La fonction média {{CSSxRef("@media/update", "update")}} permet d'interroger la capacité du périphérique de sortie à modifier l'apparence du contenu une fois rendu. Elle a les valeurs none, slow et fast.

## Fonctionnalités expérimentales et en développement

### Media Queries Niveau 5

EnvironmentMQ (prévu dans Media Queries Niveau 5)

- `light-level`
  - : [`light-level` <sup>(angl.)</sup>](https://drafts.csswg.org/mediaqueries-5/#light-level) a trois valeurs valides&nbsp;: dim, normal et washed. La spécification évite de définir ces niveaux en lux, car les appareils avec capteur de lumière ajustent généralement la luminosité automatiquement. Les spécifications notent aussi la différence de technologie, comme l'e-ink, lisible en plein jour, versus les cristaux liquides, qui ne le sont pas.
- `environment-blending`
  - : D'après le document de travail du W3C Media Queries Niveau 5&nbsp;: _«&nbsp;La fonction média [`environment-blending` <sup>(angl.)</sup>](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) permet d'interroger les caractéristiques de l'affichage de l'utilisateur·ice pour que l'auteur·ice puisse ajuster le style du document. L'auteur·ice peut choisir d'adapter les visuels et/ou la mise en page selon la technologie d'affichage pour améliorer l'attrait ou la lisibilité.&nbsp;»_

#### Fonctions média de préférence utilisateur (prévu dans Media Queries Niveau 5)

[User Preference Media Features <sup>(angl.)</sup>](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences) dans le [brouillon Media Queries Niveau 5 du W3C <sup>(angl.)</sup>](https://drafts.csswg.org/mediaqueries-5/) sont prometteuses pour donner le contrôle aux utilisateur·ice·s. Voici quelques points clés&nbsp;:

- `inverted-colors`
  - : Selon la section [User Preference Media Features <sup>(angl.)</sup>](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences), «&nbsp;La fonction média [`inverted-colors` <sup>(angl.)</sup>](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) indique si le contenu est affiché normalement ou si les couleurs sont inversées&nbsp;».
- [`forced-colors`](/fr/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : Dans [`forced-colors-mode` <sup>(angl.)</sup>](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), l'agent utilisateur impose la palette de couleurs préférée de l'utilisateur·ice sur la page, remplaçant les couleurs choisies par l'auteur·ice. D'après le document de travail du W3C Media Queries Niveau 5 sur forced-colors&nbsp;: _«&nbsp;La fonction média forced-colors permet de détecter si l'agent utilisateur a activé un [mode couleurs forcées <sup>(angl.)</sup>](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) où il impose une palette de couleurs limitée choisie par l'utilisateur·ice sur la page&nbsp;»_. L'utilisateur·ice doit être informé·e de cette capacité, et elle doit fonctionner avec la valeur appropriée pour la requête média prefers-color-scheme.
- `light-level`
  - : D'après le document de travail du W3C Media Queries Niveau 5 sur light-level&nbsp;: _«&nbsp;La fonction média [`light-level` <sup>(angl.)</sup>](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) permet d'interroger le niveau de lumière ambiante dans lequel l'appareil est utilisé, pour permettre à l'auteur·ice d'adapter le style du document en conséquence.&nbsp;»_ Cela sera très utile pour celles et ceux qui ont des problèmes de motricité ou des difficultés cognitives, qui ne trouvent pas le bon «&nbsp;bouton&nbsp;» pour changer les réglages de l'écran.
- prefers-contrast
  - : D'après le document de travail du W3C Media Queries Niveau 5 sur [`prefers-contrast`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)&nbsp;: _«&nbsp;La fonction média prefers-contrast permet de détecter si l'utilisateur·ice a demandé au système d'augmenter ou de diminuer le contraste entre les couleurs adjacentes. Par exemple, beaucoup ont du mal à lire un texte dont le contraste avec le fond est faible et préfèrent un contraste plus élevé.&nbsp;»_ Parfois, trop de contraste peut créer un effet de halo autour du texte et réduire la lisibilité. Mettre le contraste sous le contrôle de l'utilisateur·ice est un vrai plus pour l'accessibilité.

#### Interface `MediaQueryList`

La section 4.2 des brouillons CSSWG.org s'intègre à la [boucle d'événements <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) définie dans HTML. [HTML <sup>(angl.)</sup>](https://drafts.csswg.org/cssom-view/#biblio-html) pour l'objet [`MediaQueryList` <sup>(angl.)</sup>](https://drafts.csswg.org/cssom-view/#mediaquerylist). Voir le document MDN {{DOMxRef("MediaQueryList")}} pour plus d'informations.

#### Aide et support à la personnalisation

La propriété `literal` est issue de [WAI-Adapt&nbsp;: Aide et support <sup>(angl.)</sup>](https://w3c.github.io/adapt/help/#literal-explanation).

**Exigence&nbsp;:** Certain·e·s utilisateur·ice·s ne comprennent pas le texte ou les icônes non littéraux comme les métaphores, idiomes, etc. La propriété `literal` permet d'identifier le texte ou les images comme non littéraux et autorise l'auteur·ice à expliquer le texte ou les images non littéraux aux utilisateur·ice·s.

## Voir aussi

### MDN

- [Accessibilité&nbsp;: ce que les utilisateur·ice·s peuvent faire pour naviguer plus en sécurité](/fr/docs/Web/Accessibility/Guides/Browsing_safely)
- [Accessibilité&nbsp;: comprendre la couleur et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [Appliquer des effets SVG au contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [Animations de base](/fr/docs/Web/API/Canvas_API/Tutorial/Basic_animations) (Tutoriel Canvas)
- L'API {{DOMxRef("Canvas_API", "Canvas", , 1)}}
- La méthode {{DOMxRef("CanvasRenderingContext2D.drawImage()")}}
- Le type de donnée CSS {{CSSxRef("&lt;color&gt;")}}
- L'interface {{DOMxRef("MediaQueryList")}}
- L'interface {{DOMxRef("Document_Object_Model", "Document Object Model", , 1)}}
- [Utiliser des informations de style dynamiques](/fr/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL&nbsp;: graphismes 2D et 3D pour le web](/fr/docs/Web/API/WebGL_API)
- L'API {{DOMxRef("WebVR_API", "WebVR", , 1)}}

### Couleur

- [Tutoriel couleur&nbsp;: décrire la couleur <sup>(angl.)</sup>](https://colortutorial.design/) Tom Jewett
- [Formule pour déterminer la luminosité d'une couleur RGB <sup>(angl.)</sup>](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Discussion Stack Exchange
- [Comment la couleur rouge influence notre comportement <sup>(angl.)</sup>](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American par Susana Martinez-Conde, Stephen L. Macknik, 1er novembre 2014

### Discussions

- [Problèmes avec la définition du flash dans WCAG 2.0 #553 <sup>(angl.)</sup>](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Comprendre 2.3.1 - définitions de dimensions manquantes/floues #585 <sup>(angl.)</sup>](https://github.com/w3c/wcag/issues/585)

### Épilepsie et crises

- [Mieux comprendre la photosensibilité, l'une des conditions les plus complexes de l'épilepsie <sup>(angl.)</sup>](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation&nbsp;: _«&nbsp;Certaines personnes naissent avec une sensibilité particulière aux lumières clignotantes ou aux motifs visuels contrastés, comme les rayures, les grilles et les damiers. À cause de cette condition, leur cerveau produira des décharges de type crise lorsqu'il·elle·s sont exposé·e·s à ce type de stimulation visuelle.&nbsp;»_
- [Oscillations gamma et épilepsie photosensible <sup>(angl.)</sup>](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Numéro 9 <sup>(angl.)</sup>](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8 mai 2017, Pages R336-R338&nbsp;: _«&nbsp;Certaines [images visuelles <sup>(angl.)</sup>](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), même sans mouvement ou clignotement, peuvent déclencher des crises chez les patient·e·s souffrant d'épilepsie photosensible.&nbsp;»_
- [Crises photosensibles. Cedars-Sinai <sup>(angl.)</sup>](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) _«&nbsp;Les crises photosensibles sont déclenchées par des lumières clignotantes ou scintillantes. Elles peuvent aussi être déclenchées par certains motifs comme les rayures.&nbsp;»_
- [Crises provoquées par la lumière et les motifs&nbsp;: consensus d'expert·e·s du groupe de travail de l'Epilepsy Foundation of America <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia septembre 2005, 46(9)&nbsp;:1423-5 PubMed.gov NCBI [Harding G <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438)&nbsp;; [Groupe de travail Epilepsy Foundation of America <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Liste principale d'accessibilité <sup>(angl.)</sup>](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Éditeur

### ISO

- [IEC 61966-2-2:2003(en) <sup>(angl.)</sup>](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Systèmes et équipements multimédias — Mesure et gestion des couleurs — Partie 2-2&nbsp;: Gestion des couleurs — Espace couleur RGB étendu — scRGB

### Outil d'analyse de l'épilepsie photosensible

Avec l'outil Harding, il est généralement reconnu comme l'un des deux «&nbsp;standards d'or&nbsp;» pour l'analyse des flashs.

- [Trace Research and Development Center <sup>(angl.)</sup>](https://trace.umd.edu/peat/)
- [Utiliser PEAT pour créer des animations web sans crise <sup>(angl.)</sup>](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Explainer <sup>(angl.)</sup>](https://w3c.github.io/adapt/)
- [WAI-Adapt&nbsp;: module outils <sup>(angl.)</sup>](https://www.w3.org/TR/adapt-tools/) Brouillon de travail
- [Trois flashs ou seuil inférieur&nbsp;: comprendre le critère SC 2.3.1 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Comprendre WCAG 2.0 (plus ancien, mais contient des explications sur les références dans les critères WCAG 2.1)
- [Trois flashs ou seuil inférieur&nbsp;: comprendre le critère de succès 2.3.1 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Comprendre WCAG 2.1
- [Comprendre le critère de succès 1.4.3&nbsp;: contraste (minimum) <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Initiative pour l'accessibilité du Web (WAI) <sup>(angl.)</sup>](https://www.w3.org/WAI/)
- [Règles pour l'accessibilité du contenu Web (WCAG) 2.2 <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) définition de la luminance relative
