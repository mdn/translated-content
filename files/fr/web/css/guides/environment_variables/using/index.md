---
title: Utiliser les variables d'environnement
slug: Web/CSS/Guides/Environment_variables/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le module [des variables d'environnement CSS](/fr/docs/Web/CSS/Guides/Environment_variables) introduit le concept de variables d'environnement en CSS et définit la fonction {{CSSxRef("env()")}} pour permettre l'utilisation des variables d'environnement. Dans ce guide, nous examinons [ce que sont les variables d'environnement](#quest-ce_que_les_variables_denvironnement), les [variables d'environnement définies par le navigateur](#variables_denvironnement_définies_par_le_navigateur) et [comment utiliser les variables d'environnement](#utiliser_les_variables_denvironnement_avec_env) avec [la fonction `env()`](#la_fonction_env).

## Qu'est-ce que les variables d'environnement ?

Les variables d'environnement CSS sont des variables globales&nbsp;; elles sont accessibles dans tout le document. Elles sont définies par l'agent utilisateur. Les variables d'environnement sont des valeurs spéciales fournies par le navigateur ou le système d'exploitation qui permettent à vos styles de s'adapter à l'appareil ou au contexte de l'utilisateur·ice. Elles sont accessibles à l'aide de la fonction `env()`.

Les variables d'environnement fonctionnent de manière similaire aux [propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*) et à la fonction {{CSSxRef("var()")}}, mais elles sont définies et accessibles globalement. Cela signifie qu'elles sont toujours accessibles dans tout le document, contrairement aux propriétés personnalisées, qui sont accessibles au niveau des éléments. De plus, les variables d'environnement sont en lecture seule, tandis que les propriétés personnalisées sont modifiables.

Comme les propriétés personnalisées, les variables d'environnement sont sensibles à la casse. Contrairement aux propriétés personnalisées, qui ne peuvent pas être utilisées en dehors des déclarations, la fonction `env()` peut être utilisée à la place de n'importe quelle partie d'une valeur de propriété ou de n'importe quelle partie d'un descripteur (par exemple, dans les [règles de requêtes média](/fr/docs/Web/CSS/Reference/At-rules/@media)).

### Historique

Apple a été le premier à introduire les variables d'environnement dans le navigateur iOS Safari afin de permettre aux développeur·euse·s d'optimiser les mises en page pour les écrans d'appareils irréguliers. Les exemples incluent ceux avec des encoches et des bords incurvés. Les variables d'environnement originales `safe-area-inset-*` permettent aux développeur·euse·s de placer le contenu dans une zone sûre de la zone d'affichage, quel que soit l'appareil ou le navigateur utilisé par l'utilisateur·ice.

### Cas d'utilisation

Les problèmes courants qui peuvent être résolus en utilisant des variables d'environnement incluent&nbsp;:

- Les notifications de l'appareil couvrant des sections de l'interface utilisateur de l'application.
- La gestion des changements de taille de la zone d'affichage lorsque les claviers dynamiques sont affichés et masqués.
- Le positionnement des éléments là où se trouve la barre de titre sur les [applications web progressives](/fr/docs/Web/Progressive_web_apps) (PWA) une fois qu'elles sont installées et la garantie que le contenu reste dégagé par rapport aux boutons de contrôle de la fenêtre. Cela pose particulièrement problème sur les navigateurs de bureau.

## Variables d'environnement définies par le navigateur

La spécification des variables d'environnement CSS définit quelques variables sensibles à la casse, notamment&nbsp;:

- `preferred-text-scale`
  - : La variable d'environnement `preferred-text-scale` représente le facteur d'échelle de texte préféré de l'utilisateur·ice. Il s'agit de l'ajustement apporté à la taille de police «&nbsp;par défaut&nbsp;» du système d'exploitation ou de l'agent utilisateur. Sur les appareils et navigateurs où {{CSSxRef("text-size-adjust")}} a un effet, c'est le facteur d'échelle appliqué par `text-size-adjust: auto`. Par exemple, si `text-size-adjust: auto` doit doubler la taille du texte, alors `env(preferred-text-scale)` est évalué à `2`.

- `safe-area-inset-*`
  - : Les quatre zones sûres d'encart — `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom` et `safe-area-inset-left` — définissent une zone sûre rectangulaire par ses encarts supérieures, droites, inférieures et gauches par rapport au bord de la zone d'affichage. Il est sûr de placer du contenu à l'intérieur de cette zone sans qu'il soit coupé par la forme d'un affichage non rectangulaire. Pour les zones d'affichage rectangulaires et non obstruées, comme les moniteurs de bureau et d'ordinateur portable classiques, ces quatre valeurs sont toutes égales à `0`. Pour les affichages non rectangulaires — incluant les montres intelligentes à coins arrondis avec des écrans pleine taille et arrondis ou [affichage arrondi](/fr/docs/Web/CSS/Guides/Round_display) — ces quatre valeurs, définies par l'agent utilisateur, forment un rectangle de sorte que tout le contenu à l'intérieur du rectangle soit visible et non obstrué.

- `safe-area-max-inset-*`
  - : Les quatre variables d'environnement des encarts maximum de la zone sûre - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom` et `safe-area-max-inset-left` - représentent chacune la valeur maximale statique de leurs homologues dynamiques `safe-area-inset-*`. Elles représentent la valeur maximale de leur homologue `safe-area-inset-*` lorsque toutes les fonctionnalités dynamiques de l'interface utilisateur sont rétractées. Par exemple, sur certaines plateformes, une barre de boutons peut s'afficher lors du défilement vers le haut ou vers le bas, modifiant les valeurs `safe-area-inset-*`. Alors que les valeurs `safe-area-inset-*` changent en fonction de la zone de contenu actuellement visible, les valeurs `safe-area-max-inset-*` restent toujours les mêmes.

- `viewport-segment-*`
  - : Ces variables ne sont pertinentes que pour les appareils comportant plusieurs segments, tels que les téléphones pliables. Les variables `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right` et `viewport-segment-top`, ainsi que `viewport-segment-height` et `viewport-segment-width`, définissent la position et les dimensions des régions logiquement séparées de la zone d'affichage. Ces variables ne sont définies que si la zone d'affichage est divisée en au moins deux segments. Elles sont utilisées pour placer confortablement différentes parties d'une interface utilisateur dans différents segments d'un appareil multi-segment et éviter que votre contenu ne soit coupé par le pli.

D'autres spécifications définissent des variables d'environnement supplémentaires.

[L'API Window Controls Overlay](/fr/docs/Web/API/Window_Controls_Overlay_API) définit l'interface {{DOMxRef("WindowControlsOverlay")}}, qui expose des informations sur la géométrie de la zone de la barre de titre dans les [applications web progressives (PWA)](/fr/docs/Glossary/Progressive_web_apps) installées sur des appareils de bureau. Lors de l'utilisation de la valeur `window-controls-overlay` pour [`display_override`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/display_override), les variables d'environnement suivantes sont définies&nbsp;:

- `titlebar-area-*`
  - : Les variables `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` et `titlebar-area-height` définissent la zone qui est généralement occupée par la barre de titre dans une application web installée fonctionnant dans un environnement de bureau. Utilisez les variables `titlebar-area-*` pour vous assurer que le contenu ne chevauche pas les boutons de contrôle de la fenêtre (c'est-à-dire réduire, agrandir et fermer).

- `keyboard-inset-*`
  - : Les variables `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` et `keyboard-inset-height` fournissent des informations sur la position et la taille du clavier virtuel à l'écran, en particulier ses encarts supérieurs, droits, inférieurs et gauches par rapport au bord de la zone d'affichage (les encarts de largeur et de hauteur sont calculés à partir des autres encarts). Pour en savoir plus, consultez {{DOMxRef("VirtualKeyboard API", "l'API VirtualKeyboard", "", "nocode")}}.

Vous avez peut-être remarqué que tous les noms de variables précédents incluent les termes physiques gauche, droite, haut, bas, hauteur et largeur. Les équivalents logiques ne sont pas nécessaires, car les noms de variables se réfèrent aux propriétés physiques du matériel de l'appareil plutôt qu'au site web affiché.

## La fonction `env()`

La fonction {{CSSxRef("env()")}} est utilisée pour insérer la valeur d'une variable d'environnement dans un contexte CSS. La fonction `env()` peut être utilisée à la place de n'importe quelle partie d'une valeur dans n'importe quelle propriété sur n'importe quel élément, ou n'importe quelle partie d'une valeur dans n'importe quel descripteur sur n'importe quelle règle, y compris dans les valeurs de propriétés personnalisées. Elle peut être utilisée partout où une valeur CSS est autorisée.

La syntaxe de base est la suivante&nbsp;:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

La fonction accepte un [nom de variable d'environnement](#variables_denvironnement_définies_par_le_navigateur) sensible à la casse et une valeur de repli optionnelle, mais généralement recommandée.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

Le premier argument est le [nom de la variable d'environnement](#variables_denvironnement_définies_par_le_navigateur) à substituer. L'argument après la virgule, s'il est fourni, est la valeur de repli, qui est utilisée si la variable d'environnement référencée dans le premier argument n'existe pas. Dans ces exemples, si la variable d'environnement `preferred-text-scale` n'existe pas dans un navigateur, la {{CSSxRef("line-height")}} est définie sur `2`. Et, si le navigateur n'a pas de valeurs `safe-area-inset-*`, la {{CSSxRef("margin")}} est définie sur `margin: 0 auto 3em auto`.

La syntaxe de la valeur de repli est similaire à celle des propriétés personnalisées, car elle autorise plusieurs virgules. Tout ce qui se trouve entre la première virgule et la fin de la fonction est considéré comme la valeur de repli. Cependant, si la valeur de la propriété ou le descripteur n'autorise pas les virgules, la valeur n'est pas valide.

Si une propriété ou un descripteur contient des fonctions `env()` syntaxiquement valides, il est considéré comme valide au moment de l'analyse. La syntaxe est vérifiée uniquement au moment du calcul, après le remplacement des fonctions `env()` par les valeurs fournies par le navigateur. Si la variable d'environnement passée en premier paramètre n'est pas un nom de variable d'environnement reconnu, la valeur de repli est utilisée. La valeur de repli peut être une autre variable d'environnement, avec sa propre valeur de repli. Si aucune valeur de repli n'est fournie, la propriété ou le descripteur contenant la fonction `env()` est invalide au moment du calcul de la valeur.

## Utiliser les variables d'environnement avec `env()`

Nous pouvons utiliser les variables d'environnement pour garantir qu'une barre d'outils d'application fixe n'est pas masquée par les notifications qui apparaissent en bas de l'appareil. Sur les appareils qui affichent les notifications en bas de l'écran, l'agent utilisateur définit la valeur de la variable d'environnement `safe-area-inset-bottom` comme la distance entre le haut de ce qui obstrue la zone d'affichage et le bas de la zone d'affichage&nbsp;; dans notre exemple, il s'agit probablement de la hauteur des notifications visibles. Sur un moniteur de bureau rectangulaire, `safe-area-inset-bottom` vaut généralement `0`. Nous utilisons cette valeur pour créer un espace en bas de la zone d'affichage afin que la notification s'affiche sans masquer le contenu.

Notre corps ({{HTMLElement("body")}}) possède deux enfants&nbsp;; l'élément HTML {{HTMLElement("main")}} contient toute notre application, à l'exception de la barre d'outils {{HTMLElement("footer")}}.

```html
<body>
  <main>Application</main>
  <footer>Barre d'outils</footer>
</body>
```

L'élément `<body>` est défini comme un conteneur flexible qui remplit la hauteur de la zone d'affichage. L'application `<main>` peut s'agrandir pour remplir tout espace qui n'est pas occupé par son élément voisin `<footer>`.

```css
body {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

main {
  flex: 1;
  padding: 1em;
  overflow-y: auto;
}
```

L'élément `<footer>` est positionné pour rester collé en bas de la zone d'affichage. La déclaration [`position: sticky`](/fr/docs/Web/CSS/Reference/Properties/position#sticky) décale l'élément par rapport à `<body>` (son ancêtre de défilement et son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block)), en fonction de la valeur `0` de {{CSSxRef("bottom")}}. Nous définissons une valeur de {{CSSxRef("padding")}} de `1em` sur les quatre côtés de `<footer>`. Nous ajoutons ensuite la valeur de `safe-area-inset-bottom` au `1em` de marge intérieure inférieure, avec une valeur de repli de `1em`.

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

Le code CSS supplémentaire est masqué par souci de concision.

```css hidden
main {
  background-color: palegoldenrod;
}
footer {
  background-color: black;
  color: white;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-between;
}

footer::before,
footer::after {
  content: "Bouton" / "Faux bouton";
  padding: 3px 0.5em;
  background: white;
  color: black;
  border-radius: 3px;
}
```

La marge intérieure inférieure du pied de page dépasse `1em` sur les appareils qui ont une variable d'environnement `safe-area-inset-bottom` d'une valeur supérieure à `0`. Ce code CSS fournit une marge intérieure supplémentaire pour agrandir le pied de page selon les besoins, que ce soit à cause de notifications, d'une encoche sur l'écran ou parce que l'appareil n'a pas de coins carrés.

{{EmbedLiveSample("Utiliser les variables d'environnement avec `env()`", 200, 500)}}

À l'avenir, les variables d'environnement définies par les développeur·euse·s peuvent être prises en charge, mais cette fonctionnalité n'est pas encore définie ni implémentée.

## Voir aussi

- La fonction {{CSSxRef("var()")}}
- [Le descripteur `@media` `shape`](/fr/docs/Web/CSS/Reference/At-rules/@media/shape)
- Le module des [variables d'environnement CSS](/fr/docs/Web/CSS/Guides/Environment_variables)
- Le module des [d'affichage rond CSS](/fr/docs/Web/CSS/Guides/Round_display)
- Le module des [propriétés personnalisées pour les variables en cascade CSS](/fr/docs/Web/CSS/Guides/Cascading_variables)
