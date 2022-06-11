---
title: Anatomie d'un jeu vidéo
slug: Games/Anatomy
tags:
  - Boucle Principale
  - JavaScript
  - Jeux
  - requestAnimationFrame
translation_of: Games/Anatomy
original_slug: Jeux/Anatomie
---
{{GamesSidebar}}

Cet article se concentre sur l'anatomie et le flux de la plupart des jeux video à partir d'un point de vue technique, concernant la manière dont la boucle principale devrait tourner. Cela aide les débutants dans l'arène du développement à comprendre ce qui est requis quand il est question de bâtir un jeu et comment les standards du web comme JavaScript leur est offert comme outil. Les programmeurs de jeux expérimentés et nouveaux dans le développement web pourront aussi en tirer bénéfice.

## Présenter, accepter, interpréter, calculer, repéter

Le but de chaque jeu vidéo est de **présenter** à (aux) utilisateur(s) une situation, **accepter** leur entrée, **interpréter** ces signaux en actions, et **calculer** une nouvelle situation résultant de ces actes. Les jeux bouclent continuellement à travers ces niveaux, jusqu'à ce qu'une condition finale arrive (comme gagner, perdre, ou quitter le jeu). Sans surprise, ce modèle correspond à la manière dont un moteur de jeu est programmé.

Ces spécificités dépendent du jeu.

Certains jeu maintiennent ce cycle par les entrées du joueur. Imaginez que vous développez un jeu du type *"trouvez les différences entre ces deux images"*. Ces jeux **présentent** deux images à l'utilisateur; ils **accèptent** leur clics (ou touchés); ils **interprètent** l'entrée comme un succès, une erreur, une pause, une interaction de menu, etc.; finalement, ils **calculent** une scène mise à jour resultant de l'entrée de donnée. La boucle du jeu évolue par l'entrée de l'utilisateur et s'arrête jusqu'à ce qu'il en soumette une nouvelle. C'est plus une approche au coup par coup qui ne demande pas une mise à jour continuelle de chaque image, mais juste quand le joueur réagit.

D'autres jeux demandent un contrôle précis à chaque fraction de seconde. Les principes sont les mêmes avec une légère différence: chaque animation fait progresser le cycle et tout changement d'entrée d'un utilisateur est capturé dès que possible. Ce modèle au coup par image est implementé dans ce que l'on appelle la **boucle principale**. Si vos boucles de jeu sont basées sur le temps alors ce sera là-dessus que seront basées vos simulations.

Mais parfois ce n'est pas un contrôle dans le temps. Votre boucle de jeu peut être similaire à l'exemple *cherchez les différences* et se baser directement sur les entrées. Cela peut être nécessaire d'avoir à la fois les entrées et un temps simulé. Cela peut aussi être basé sur une boucle qui utilise d'autre chose.

Le JavaScript moderne — comme décrit dans les prochaines sections — heureusement, facilite le développement d'une boucle efficace éxécutée une fois par seconde. Bien sûr, votre jeu sera optimisé au long de sa conception. Si quelque chose doit s'apparenter à un évènement peu fréquent alors il sera préférable de briser la boucle principale (mais pas tout le temps).

## Construire une boucle principale en JavaScript

JavaScript travaille beaucoup mieux avec des évènements et des fonctions de rappel. Les navigateur modernes s'efforcent d'appeler des méthodes au moment où elles sont nécessaires et mises en pause (ou font leur travail) le reste du temps. Il est de bonne pratique d'attacher votre code au moment le plus approprié. Pensez à quel moment votre fonction à besoin d'être appelée sur un interval de temps strict, à chaque image, ou seulement après que quelque chose se soit passé. Être plus spécifique avec le navigateur quand votre fonction à besoin d'être appelée permet au navigateur d'être optimisé une fois votre boucle appelée. De plus, cela peut rendre votre tâche plus aisée.

Certain programmes ont besoin d'être lancés image-par-image alors pourquoi y attacher quelque chose d'autre que le taux de rafraîchissement du navigateur&nbsp;? Dans le web, `{{ domxref("window.requestAnimationFrame()") }}` sera la fondation de bien des boucles principales. Une fonction de rappel doit lui être passée quand elle est appelée. Cette fonction de rappel sera éxécutée à un moment précis avant le prochain rafraîchissement. Voici un exemple d'une simple boucle principale:

    window.main = function () {
      window.requestAnimationFrame( main );

      //Qu'importe ce que votre boucle principale doit faire.
    };

    main(); //Débuter le cycle.

**Note**: Dans chaque méthodes `main()` présentées ici, nous planifions un nouveau `requestAnimationFrame` avant de lancer le contenu de notre boucle. Ce n'est pas par accident et c'est considéré comme une meilleure pratique. Appeler le prochain `requestAnimationFrame` plus tôt assure que le navigateur la recevra à temps pour le planifier convenablement même si vous image courrante rate la fenêtre de synchronisation principale (VSync).

La portion de code ci-dessus comporte deux déclarations. La première créée une fonction comme variable globale appelée `main()`. Cette fonction effectue un travail et indique aussi au navigateur de s'appeler elle-même au prochain `window.requestAnimationFrame()`. La seconde déclaration appelle la fonction `main()`, definie dans la première déclaration. Parceque `main()` est appelé une fois dans la seconde déclaration et chaque appel de celle-ci la place dans la queue des choses à faire à chaque image, `main()` est synchronisée à votre taux de rafraîchissement.

Bien sûr, cette boucle n'est pas parfaite. Avant que nous discutions de manières de la modifier, parlons de ce qu'elle fait de bien.

Temporiser la boucle principale avec le rafraîchissement du navigateur permet à votre boucle d'être éxécutée aussi fréquemment que le navigateur à besoin de rafraîchir l'écran. Cela vous permet de contrôler chaque image de votre animation. C'est aussi beaucoup plus simple car `main()` est la seule fonction qui est bouclée. Dans un jeu de tir à la première personne (ou un jeu équivalent) on présente une nouvelle scène à chaque image. Vous ne pouvez donc pas obtenir quelque chose de plus fluide que cela.

Pourtant n'imaginez pas que les animations requièrent un contrôle image-par-image. De simples animations peuvent être éxécutées, même avec une accélération matérielle, avec des animations CSS et d'autres outils inclus dans le navigateur. Bon nombre vont vous faciliter la vie.

## Construire une *meilleure* boucle principale en Javascript

Il y a deux problèmes évidents avec notre boucle principale précédente: `main()` pollue l'objet `{{ domxref("window") }}` (où sont stockées toutes les variables globales) et l'exemple donné ne nous permet pas de *stopper* la boucle à moins que l'onglet du navigateur ne soit fermé ou rafraîchit. Pour le premier problème, si vous désirez que la boucle principale tourne simplement sans y accéder directement, vous pouvez en crééer une fonction à accès immédiat -(FAI ou "Immediately-Invoked Function Expression - IIFE").

    /*
    * Débuter avec le point virgue au cas où le code qui réside au-dessus de cet exemple
    * s'appuie sur l'insertion automatique de point virgule (ASI). Le navigateur peut alors accidentellement
    * penser que c'est un exemple complet provenant de la ligne précédente. Le point virgule de tête
    * marque le début de notre nouvelle ligne si la précédente n'était pas vide ou complétée.
    */

    ;(function () {
      function main() {
        window.requestAnimationFrame( main );

        // Contenu de votre boucle principale.
      }

      main(); // Débute le cycle
    })();

Quand le navigateur passe à travers la FAI, cela va définir votre boucle principale et immédiatement la mettre en file d'attente pour la prochaine image. Cela ne sera attaché à aucun objet et `main` (ou `main()` pour les méthodes) sera un nom valide inutilisé dans le reste de l'application, libre d'être défini comme quelque chose d'autre.

Note: En pratique, il est plus courant de prévenir le prochain requestAnimationFrame() avec une déclaration "if", plutôt que d'appeler cancelAnimationFrame().

Pour le second problème, arrêter la boucle principale, vous aurez besoin d'annuler l'appel à `main()` avec `{{ domxref("window.cancelAnimationFrame()") }}`. Vous aurez besoin de passer la valeur donneé par `cancelAnimationFrame()` en référence à `requestAnimationFrame()` quand elle a été appelée en dernier. Assumons que vos fonctions de jeu et les variables sont bâties dans un espace de nom appelé `MyGame`. Avec notre dernier exemple étendu, la boucle principale aura maintenant l'air de ceci:

    /*
    * Débuter avec le point virgue au cas où le code qui réside au-dessus de cet exemple
    * s'appuie sur l'insertion automatique de point virgule (ASI). Le navigateur peut alors accidentellement
    * penser que c'est un exemple complet provenant de la ligne précédente. Le point virgule de tête
    * marque le début de notre nouvelle ligne si la précédente n'était pas vide ou complétée.
    *
    * Assumons aussi que MyGame est défini précédemment.
    */

    ;(function () {
      function main() {
        MyGame.stopMain = window.requestAnimationFrame( main );

        // Contenu de votre boucle principale.
      }

      main(); // Début du cycle
    })();

Nous avons maintenant une variable déclarée dans l'espace de nom `MyGame`, que nous appelons `stopMain`, qui contient la valeur de l'appel de notre boucle principale `requestAnimationFrame()` la plus récente. À tout moment, nous pouvons stopper la boucle principale en disant au navigateur d'annuler la requête qui correspond à notre valeur.

    window.cancelAnimationFrame( MyGame.stopMain );

La clé pour programmer une boucle principale, en JavaScript, est d'attacher n'importe quel évènement qui doit diriger votre action et porter attention aux systèmes interconnectés. Vous pourriez avoir différents composants dirigés par différents évènements. Cela paraît comme d'une complexité inutile mais cela peut être une bonne optimisation (pas nécessairement, bien sûr). Le problème c'est que vous ne programmez pas une boucle principale typique. En Javascript, vous utilisez la boucle principale du navigateur et vous essayez de le faire avec efficacité.

## Construire une boucle principale *encore plus optimisée* en JavaScript

En fin de compte, en JavaScript, le navigateur roule sa propre boucle principale et votre code existe dans certaines de ses étapes. La section ci-dessus décrit des boucles principales qui essaient de ne pas lâcher le contrôle du navigateur. Ces méthodes principales s'attachent à `window.requestAnimationFrame()`, qui demandent au navigateur le contrôle sur la prochaine image qui arrive. C'est au navigateur de décider de la gestion de sa boucle principale. Les spécifications du [W3C en matière de requestAnimationFrame](http://www.w3.org/TR/animation-timing/) ne définissent pas exactement quand les navigateur doivent éxécuter les rappels de requestAnimationFrame. Cela pourrait être bénéfique car cela laisse aux concepteurs de navigateurs la liberté d'expérimenter les solutions qu'ils pensent être les meilleures au travers du temps.

Les versions modernes de Firefox et Google Chrome (et probablement d'autres)*tentent* de connecter les rappels de `requestAnimationFrame` à leur fil principal au tout début de chaque image. De ce fait, le déroulement principal *essaye* d'être le plus possible comme ci-dessous:

1.  Débuter une nouvelle image (pendant que la précédente est prise en charge par l'affichage).
2.  Passer à travers la liste de retours `requestAnimationFrame` et les appeler.
3.  Passer le ramasse-miettes et autres tâches par-images quand les retours ci-dessous cessent de controler le fil principal.
4.  Se mettre en veille (à moins qu'un évènement interrompe la sieste du navigateur) jusqu'à ce que le moniteur ne soit prêt pour votre image ([VSync](http://www.techopedia.com/definition/92/vertical-sync-vsync)) et répète.

Vous pouvez considérer que développer une application en temps réél est comme avoir un temps donné pour faire le travail. Toutes les étapes ci-dessus doivent prendre effet toutes les 16.5 millisecondes pour fonctionner avec un affichage de 60Hz. Les navigateurs invoquent leur code aussitôt que possible pour donner un maximum de temps aux calculs. Votre fil principal va souvent débuter par les tâches qui ne sont même pas dans le fil principal (tel que la rasterisation ou les ombrages en WebGL). Les longs calculs peuvent être fait par un Web Worker ou une accélération matérielle en même temps que le navigateur utilise son propre fil principal pour passer le ramasse-miette, ces autres tâches, ou gérer les évènements asynchrones.

Bien que nous ne discutons pas du gain de temps, plusieurs navigateur ont un outil appelé *Temps Haute Résolution*. L'objet {{ domxref("Date") }} n'est plus la méthode reconnue pour temporiser les évènements car elle est très imprécise et peut être modifiée par l'horloge système. Le Temps Haute Résolution, d'un autre côté, compte le nombre de millisecondes depuis `navigationStart` (quand le document précédent est déchargé). Cette valeur est retournée en un nombre décimal précis au millième de seconde. Il est connu comme étant `{{ domxref("DOMHighResTimeStamp") }}` mais, à toutes fins utiles, considérez le comme un nombre décimal à virgule flottante.

**Note**: Les systèmes (matériels ou logiciels) qui ne sont pas capables d'avoir une précision à la microseconde sont autorisés à fournir une précision à la milliseconde au minimum. Sinon, ils devraient fournir une précision de 0.001ms s'ils en sont capables.

Seule, cette valeur n'est pas très utile, considérant qu'il est relatif à un évènement peu intéressant, mais ils peut quand même être soustrait d'une autre prise de temps pour déterminer plus précisément combien de temps s'est déroulé entre ces deux poins. Pour obtenir une de ces prises de temps, vous pouvez appeler la fonction `window.performance.now()` et stocker le résultat dans une variable.

    var tNow = window.performance.now();

Retournons sur le sujet de la boucle principale. Il vous arrivera souvent de vouloir savoir quand votre boucle principale a été invoquée. Parce que cela est commun, la fonction `window.requestAnimationFrame()` fourni toujours un `DOMHighResTimeStamp` avec un argument de retour quand elles sont éxécutées. Cela mène à une amélioration de notre boucle précédente.

    /*
    * Débuter avec le point virgue au cas où le code qui réside au-dessus de cet exemple
    * s'appuie sur l'insertion automatique de point virgule (ASI). Le navigateur peut alors accidentellement
    * penser que c'est un exemple complet provenant de la ligne précédente. Le point virgule de tête
    * marque le début de notre nouvelle ligne si la précédente n'était pas vide ou complétée.
    *
    * Assumons aussi que MyGame est défini précédemment.
    */

    ;(function () {
      function main( tFrame ) {
        MyGame.stopMain = window.requestAnimationFrame( main );

        // Contenu de votre boucle principale.
        // tFrame, provenant de "function main ( tFrame )", est maintenant un DOMHighResTimeStamp (Temps Haute Résolution du DOM) fourni par rAF.
      }

      main(); // Débute le cycle
    })();

Plusieurs autres optimisations sont possibles et cela dépend vraiment de ce que votre jeu tente d'accomplir. Le genre de votre jeu va visiblement faire la différence mais il peut être aussi subtil que cela. Vous pourriez dessiner un pixel à la fois sur un canvas ou vous pourriez étager des éléments du DOM (incluant de multiples canvas de WebGL avec des arrières-plans transparents si vous le désirez) en une hierarchie complexe. Chacunes de ces solutions mènera à des contraintes et opportunités différentes.

## Il est temps de la... décision

Vous aurez besoin de faire un choix difficile concernant votre boucle principale: comment simuler l'évolution du temps. Si vous désirez un contrôle par image alors vous aurez besoin de déterminer combien sera-t-il nécessaire à votre jeu d'être remis à jour et dessiné. Vous pourriez même vouloir une mise à jour et dessiner à différents taux (de rafraîchissement). Vous aurez aussi besoin de considérer combien comment votre jeu échouera gracieusement si le système de l'utilisateur ne peut soutenir la charge de travail. Commençons par considérer que vous serez capables de gérer les entrées de l'utilisateur et de mettre à jour l'état du jeu à chaque fois que vous dessinez. Nous ramifierons après.

**Note :** Changer la manière dont votre boucle principale gère le temps est un cauchemar de débuggage, partout. Pensez à vos besoins, précautionneusement, avant de travailler sur votre boucle principale.

### De quoi les jeux dans le navigateur devraient avoir l'air

Si votre jeu peut atteindre le maximum du taux de rafraîchissement sur n'importe quel matériel que vous supportez, alors votre travail est plutôt facile. Vous pouvez simplement mettre à jour, effectuer le rendu, et ne rien faire avant la synchronisation verticale (VSync).

    /*
    * Débuter avec le point virgue au cas où le code qui réside au-dessus de cet exemple
    * s'appuie sur l'insertion automatique de point virgule (ASI). Le navigateur peut alors accidentellement
    * penser que c'est un exemple complet provenant de la ligne précédente. Le point virgule de tête
    * marque le début de notre nouvelle ligne si la précédente n'était pas vide ou complétée.
    *
    * Assumons aussi que MyGame est défini précédemment.
    */

    ;(function () {
      function main( tFrame ) {
        MyGame.stopMain = window.requestAnimationFrame( main );

        update( tFrame ); //Appelez votre méthode de mise à jour. Dans notre cas, nous lui donnons la capture de temps rAF.
        render();
      }

      main(); // Start the cycle
    })();

Si le maximum du taux de rafraîchissement ne peut être atteind, les paramètres de qualités pourraient être mis à jour pour rester sous notre gain en temps. L'exemple le plus célèbre de ce concept est le jeu de id Software, RAGE. Ce jeu a retiré à l'utilisateur le contrôle afin de conserver son temps de calcul à environ 16ms (ou environ 60ips). Si le calcul prenait trop de temps alors la résolution serait diminuée, les textures et autres éléments échoueraient au chargement et à l'affichage, et ainsi de suite. Ce cas (non-web) a créé plusieurs hypothèses et faits:

- Chaque image d'animation compte pour une entrée utilisateur.
- Aucune image n'a besoin d'être extrapolée (devinée) car chaque élément à sa propre mise à jour.
- Les systèmes simulés peuvent en gros considérer que chaque mise à jour complète est d'environ 16ms.
- Permettant à l'utilisateur le contrôle à travers des paramètres serait un cauchemar.
- Des moniteur différents apportent des taux de rafraîchissement différents: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, etc.
- Des systèmes qui ne sont pas capables de fonctionner avec 60 FPS vont perdre en qualité pour permettre au jeu de rouler à une vitesse optimale (éventuellement, il échouera complètement si cela devient trop bas).

### Autres manières de gérer les besoins du taux de rafraîchissement variable

D'autres méthodes d'approcher le problème existent.

Une technique commune est de mettre à jour la simulation à une fréquence constante et dessiner autant (ou au moins) que le taux actuel le permet. Cette méthode de mise à jour peut continuer à boucler sans se soucier de ce que l'utilisateur voit. Cette méthode peut voir la dernière mise à jour, et quand elle est arrivée. Quand le dessin sait quand il est représenté, et le temps simulé pour la dernière mise à jour, il peut prédire une image plausible à dessiner. Cela n'a pas d'importance si c'est plus fréquent que la mise à jour officielle (ou même moins fréquente). La méthode de mise à jour établis des points de contrôle, autant que le système le permet, la méthode de rendu va dessiner autour de ces intants de temps. Il y a plusieurs manières de séparer la méthode de mise à jour dans les standards du web:

- Dessiner à chaque `requestAnimationFrame` et mettre à jour {{ domxref("window.setInterval") }} ou {{ domxref("window.setTimeout") }}.

  - Cela utilise le temps du processeur même quand il n'a pas l'attention ou qu'il est minimisé, qu'il ne monopolise pas le fil principal, et est probablement un artefact de la traditionnelle boucle principale (mais plus simple).

- Dessiner à chaque `requestAnimationFrame` et mettre à jour sur un `setInterval` ou `setTimeout` dans un [Web Worker](/fr/docs/Web/Guide/Performance/Using_web_workers).

  - C'est la même chose que ci-dessus, excepté que la mise à jour ne monopolise pas le fil principal (ni le fil principal ne le monopolise). C'est une solution plus complexe, et ce pourrait être trop de travail pour de simples mises à jours.

- Dessiner à chaque `requestAnimationFrame` et l'utiliser pour solliciter un Web Worker qui contient la méthode de mise à jour avec la quantité de temps à calculer, s'il y a lieu.

  - Cela se met en veille jusqu'à ce que `requestAnimationFrame` est appelée et ne pollue pas le fil principal, et de plus vous ne vous reposez pas sur d'anciennes méthodes. À nouveau, c'est un peu plus complexe que les deux premières options, et *débuter* chaque mise à jour sera bloqué tant que le navigateur ne décide de lancer les retours rAF.

Chacune de ces méthodes ont un compromis similaire:

- Les utilisateurs peuvent éviter le rendu d'images ou interpoler celles en sus dépendant de leurs performances.
- Vous pouvez compter sur tous les utilisateurs mettant à jours les variables non-cosmetiques à la même fréquence constante, moins quelques hoquets.
- Beaucoup plus compliquée à programmer que la boucle de base que nous avons vu précédemment.
- Les entrées utilisateurs sont complètement ignorées jusqu'à la prochaine mise à jour (même si l'utilisateur à un système rapide).
- L'interpolation obligatoire à un défaut de performance obligatoire.

Une méthode séparée de mise à jour et de dessin pourrait avoir l'air de l'exemple suivant. Pour les besoins de la démonstration, l'exemple est basé sur le troisième point, sans l'utilisation des Web Workers par soucis de lecture (et, soyons honnête, pour faciliter l'écriture).

_Note: Cet exemple spécifiquement, aurait besoin d'une relecture._

    /*
    * Débuter avec le point virgue au cas où le code qui réside au-dessus de cet exemple
    * s'appuie sur l'insertion automatique de point virgule (ASI). Le navigateur peut alors accidentellement
    * penser que c'est un exemple complet provenant de la ligne précédente. Le point virgule de tête
    * marque le début de notre nouvelle ligne si la précédente n'était pas vide ou complétée.
    *
    * Assumons aussi que MyGame est défini précédemment.
    *
    *
    * MyGame.lastRender fait le suivi du dernier poinçon de temps fourni par requestAnimationFrame.
    * MyGame.lastTick fait le suivi de la dernière mise à jour. Toujours incrémenté par tickLength.
    * MyGame.tickLength est à quelle fréquence le jeu est mis à jour. C'est 20 Hz (50ms) ici.
    *
    * timeSinceTick est le temps entre un retour de requestAnimationFrame et la dernière mise à jour.
    * numTicks est combien de mises à jour auraient dû avoir lieu entre 2 rendus d'images.
    *
    * render() se voit passé tFrame car il est considéré que la méthode de rendu va calculer
               combien de temps se sera écoulé depuis la mise à jour la plus récente pour
               extrapolation (purement cosmétique pour des systèmes rapides). La scène est dessinée.
    *
    * update() calcule l'état du jeu comme point donné dans le temps. Ça devrait toujours être
               incrémenté par tickLength. C'est l'autorité de l'état du jeu. On lui passe le
               DOMHighResTimeStamp pour le temps que cela représente (qui, à nouveau, est toujours
               la dernière mise à jour + MyGame.tickLength qu'une pause ne soit ajoutée, etc.)
    *
    * setInitialState() réalise n'importe quel tâche mise de côté avant que la boucle principale ne doive tourner.
    *                   Ceci est juste un exemple générique d'une fonction que vous devriez ajouter.
    */

    ;(function () {
      function main( tFrame ) {
        MyGame.stopMain = window.requestAnimationFrame( main );
        var nextTick = MyGame.lastTick + MyGame.tickLength;
        var numTicks = 0;

        //Si tFrame < nextTick alors 0 ticks doit être mis à jour (0 est par défaut pour numTicks).
        //Si tFrame = nextTick alors 1 tick doit être mis à jour (et ainsi de suite).
        //Note: Comme nous le mentionons dans le sommaire, vous devriez faire un suivi de la taille de numTicks.
        //S'il est important, alors soit votre jeu est en veille, soit votre machine ne répond plus.
        if (tFrame > nextTick) {
          var timeSinceTick = tFrame - MyGame.lastTick;
          numTicks = Math.floor( timeSinceTick / MyGame.tickLength );
        }

        queueUpdates( numTicks );
        render( tFrame );
        MyGame.lastRender = tFrame;
      }

      function queueUpdates( numTicks ) {
        for(var i=0; i < numTicks; i++) {
          MyGame.lastTick = MyGame.lastTick + MyGame.tickLength; //Maitenant lastTick est ce tick.
          update( MyGame.lastTick );
        }
      }

      MyGame.lastTick = performance.now();
      MyGame.lastRender = MyGame.lastTick; //Prétendre que le premier dessin était sur la première mise à jour.
      MyGame.tickLength = 50; //Cela positionne votre simulation pour tourner à 20Hz (50ms)

      setInitialState();
      main(performance.now()); // Débute le cycle
    })();

Une autre alternative est de simplement faire certaines choses moins souvent. Si une portion de votre boucle de mise à jour est difficile à calculer et intense (en temps), vous devrier considérer réduire sa fréquence et, idéalement, la diviser en portions à travers une période plus allongée. Un exemple implicite de cela est rencontré dans "The Artillery Blog for Artillery Games", où ils [ajustent leur taux de création de miettes](http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html) pour optimiser leur ramasse-miettes. Apparemment, le nettoyage des ressources n'est pas sensible au temps (spécialement si le nettoyage est plus dérangeant que le la miette elle-même).

Cela peut aussi s'appliquer à vos propres tâches. Elles sont de bonnes candidates pour en générer quand les ressources disponibles deviennent un problème.

## Sommaire

J'aimerai être clair que rien de ce qu'il y a ci-dessus, ou rien de cela, ne puisse être ce qu'il y a de mieux pour votre jeu. La décision correcte dépend entièrement des compromis que vous êtes prêts (ou pas) à faire. La préocupation est principalement de permuter vers une autre option. Heureusement, je n'en ai pas l'expérience mais j'ai entendu dire que c'est un jeu de cache-cache exténuant.

Une chose importante à retenir pour les plateformes gérées, telles que le web, est que votre boucle pourrait arrêter son éxécution pour une période de temps significative. Cela pourrait arriver quand l'utilisateur déselectionne votre onglet et que le navigateur tombe en veille (ou ralenti) son interval de retour `requestAnimationFrame`. Vous avez plusieurs façons de gérer cela et cela peut dépendre de votre jeu, s'il est pour un seul joueur ou multijoueurs. Certains des choix sont:

- Considérer le écart comme "une pause" et ne pas prendre en compte le temps.

  - Vous pouvez probablement voir comment cela peut être problématique pour la plupart des jeux multijoueurs.

- Vous pouvez stimuler l'écart pour faire du rattrapage.

  - Cela peut être un problème pour de longues pauses et/ou des mises à jour complexes.

- Vous pouvez récupérer l'état du jeu à partir d'un pair sur le serveur.

  - Ceci n'est pas efficace si votre pair ou le serveur sont périmés eux-aussi, ou s'ils n'existent pas car le jeu en mode un seul joueur n'existe pas et n'a pas de serveur.

Une fois que votre boucle principale a été développée et que vous avez pris vos décisions sur un lot d'hypothèses et de compromis qui conviendront à votre jeu, cela devient juste une question d'utilisation de vos décisions pour calculer n'importe quelle physique applicable, intelligence artificielle, sons, synchronisation réseau, et quoique votre jeu ai besoin.
