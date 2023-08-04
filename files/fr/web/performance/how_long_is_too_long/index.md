---
title: "Temps de chargement : à partir de quel moment un site est-il « lent » ?"
slug: Web/Performance/How_long_is_too_long
---

Il n'y a pas de règle stricte définissant ce qui constitue un site trop long à charger, mais il y a des bonnes pratiques spécifiques pour définir un bon temps de chargement du contenu (1 seconde), de fonctionnement au ralenti (50 millisecondes), d'animation (16,7 secondes) ou encore de réponse à la saisie d'un visiteur (50 à 200 millisecondes).

## Objectifs de chargement

La durée optimale de temps de chargement est souvent définie comme étant «&nbsp;inférieure à une seconde&nbsp;», mais qu'est-ce que cela signifie&nbsp;? Ce temps d'une seconde devrait être considéré comme le temps maximal pour indiquer à une personne visitant le site que la demande à été traitée et que le nouveau contenu a été chargé, ce qui signifie par exemple que le navigateur affiche le titre de la page et sa couleur de fond.

La première ressource récupérée après une demande est généralement un document HTML, qui appelle lui-même par la suite des ressources additionnelles. Comme noté dans la description du [chemin critique de rendu (en anglais <i lang="en">critical rendering path</i>)](/fr/docs/Web/Performance/Critical_rendering_path), lorsque la ressource est reçue alors les navigateurs commencent à traiter le HTML et affichent son rendu au fur et à mesure qu'il est reçu plutôt que d'attendre le chargement des ressources additionnelles.

Oui, un temps de chargement d'une seconde est un bon objectif, mais c'est un objectif qui ne sera rempli que par quelques sites seulement. Les attentes diffèrent en réalité en fonction du contexte. L'affichage du texte «&nbsp;Bonjour tout le monde&nbsp;» devrait pouvoir s'afficher en quelques millisecondes sur un réseau d'entreprise, mais le téléchargement de la vidéo d'un chat rigolo sur un appareil de plus de 5 ans avec un réseau <i lang="en">Edge</i> dans le Nord de la Sibérie pourrait prendre plus de 20 secondes sans choquer personne. D'une manière plus générale, si vous attendez trois ou quatre secondes avant de fournir le moindre contenu à la personne visitant votre site, vous perdrez des visiteurs potentiels qui ne reviendront peut-être jamais consulter votre site.

En optimisant les performances de votre site, visez un temps de premier chargement du contenu ambitieux, comme 5 secondes sur un réseau mobile 3G, et 1,5 seconde sur un réseau Wifi, avec peut-être des objectifs de chargement de page encore plus ambitieux pour les chargements de page ultérieurs, en tirant parti des <i lang="en">service workers</i> et de la mise en cache. Il y a plusieurs étapes où vous devrez travailler, suivant qu'il s'agisse d'initialiser le chargement de la page, du chargement des ressources additionnelles, de la réponse à l'interaction de l'utilisateur ou de l'utilisatrice ou encore pour proposer des animations fluides. C'est ce que nous détaillerons dans les sections suivantes.

### Objectifs concernant les étapes de chargement de la page (en anglais <i lang="en">idling</i>)

Les navigateurs s'occupent des tâches les unes après les autres (même si des tâches de fond peuvent être prises en charge par les <i lang="en">web workers</i>). Cela signifie que l'interaction avec le visiteur, la peinture de la page et l'exécution des scripts ont lieu lors d'un processus unique. Si le processus est occupé à exécuter du code JavaScript complexe, le processus principal ne sera pas disponible pour réagir à la saisie du visiteur (par exemple le fait d'appuyer sur un bouton). Pour cette raison, le périmètre de l'exécution des scripts devrait être limité et divisé en plusieurs bouts de code pouvant chacun être exécuté en 50 millisecondes ou moins. Cela rend le processus disponible pour l'interaction avec la personne visitant le site.

### Objectifs concernant les animations

Pour les animations de défilement et autres animations qui doivent être fluides et réactives, le contenu est repeint à 60 images par seconde (60 fps), ce qui fait une fois toutes les 16,7 millisecondes. Ces 16.7 millisecondes incluent la gestion des scripts, le <i lang="en">reflow</i> et le <i lang="en">repaint</i>. Un document met environ 6 millisecondes pour rendre une image, ce qui laisse environ 10 millisecondes au reste. Tout ce qui prend moins de 60 images par secondes risque d'apparaître cassé, surtout s'il s'agit de changements d'images.

### Objectifs concernant la réactivité

Lorsque la personne visitant le site interagit avec le contenu, il est important de fournir une réponse et de faire connaître cette réponse au visiteur sous 100 millisecondes au maximum, et de préférence en moins de 50 millisecondes. Une réponse de 50 millisecondes sera ressentie comme étant immédiate. La mise à disposition de l'interaction devrait le plus souvent possible être ressentie comme étant immédiate, par exemple lorsqu'il s'agit du survol ou de l'appui sur un bouton, mais cela ne veut pas dire que la réponse complète devrait être instantanée. Si une réponse plus lente que 100 millisecondes peut créer une déconnexion entre l'action du visiteur et la réponse, une transition de 100 ou 200 millisecondes peut aider le visiteur à remarquer la réponse à l'interaction initiée, telle que l'ouverture d'un menu. Si une réponse prend plus de 100 millisecondes à être terminée, il est important de fournir une forme de retour utilisateur pour informer que l'interaction a bien eu lieu.
