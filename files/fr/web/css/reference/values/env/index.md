---
title: Fonction CSS `env()`
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`env()`** peut être utilisée pour insérer la valeur d'une [variable d'environnement](/fr/docs/Web/CSS/Guides/Environment_variables/Using) définie par l'agent utilisateur dans votre CSS.

## Syntaxe

```css
/* Sans valeur de repli */
env(safe-area-inset-top);
env(titlebar-area-width);
env(viewport-segment-right 0 0);

/* Avec une valeur de repli */
env(safe-area-inset-right, 1em);
env(titlebar-area-y, 40px);
env(viewport-segment-width 0 0, 40%);
```

### Paramètres

La fonction `env( <environment-variable>, <fallback> )` accepte les paramètres suivants&nbsp;:

- [`<environment-variable>`](/fr/docs/Web/CSS/Guides/Environment_variables/Using#variables_denvironnement_définies_par_le_navigateur)
  - : Un identifiant personnalisé ({{CSSxRef("&lt;custom-ident&gt;")}}) définissant le nom de la variable d'environnement à insérer. Si le nom fourni représente une variable d'environnement de type tableau, le nom est suivi d'une valeur entière ({{CSSxRef("&lt;integer&gt;")}}) identifiant l'instance spécifique à laquelle le nom fait référence. Le nom de la variable d'environnement est sensible à la casse et peut être l'un des suivants&nbsp;:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : La distance de sécurité par rapport au bord supérieur, droit, inférieur ou gauche de la zone d'affichage, définissant où il est sûr de placer du contenu sans risquer qu'il soit coupé par la forme d'un écran non rectangulaire. Les quatre valeurs forment un rectangle, à l'intérieur duquel tout le contenu est visible. Les valeurs sont `0` si la zone d'affichage est un rectangle et qu'aucune fonctionnalité — telle que des barres d'outils ou des claviers dynamiques — n'occupe l'espace de la zone d'affichage&nbsp;; sinon, il s'agit d'une valeur en `px` supérieure à `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Les valeurs maximales statiques de leurs homologues dynamiques `safe-area-inset-*` lorsque toutes les fonctionnalités d'interface utilisateur dynamiques sont rétractées. Alors que les valeurs `safe-area-inset-*` changent en fonction de la zone de contenu actuellement visible, les valeurs `safe-area-max-inset-*` sont des constantes.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Les dimensions d'une zone `titlebar-area-*` visible. Ces variables sont disponibles lors de l'utilisation du champ de manifeste [`display_override`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) `window-controls-overlay`. Les valeurs des variables peuvent être utilisées pour s'assurer que le contenu ne chevauche pas les boutons de contrôle de la fenêtre (c'est-à-dire réduire, agrandir et fermer) avec les applications web progressives (PWA) installées sur les appareils de bureau.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Les marges par rapport au bord de la zone d'affichage et les dimensions du clavier virtuel à l'écran de l'appareil. Définies dans {{DOMxRef("VirtualKeyboard API", "l'API VirtualKeyboard", "", 1)}}.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Les dimensions et les positions de décalage de segments spécifiques de la zone d'affichage. Le mot-clé `viewport-segment-*` est suivi de deux valeurs entières ({{CSSxRef("&lt;integer&gt;")}}) séparées par un espace qui indiquent la position horizontale et verticale du segment, ou les indices. Les mots-clés `viewport-segment` ne sont définis que lorsque la zone d'affichage est composée de deux segments ou plus, comme avec les appareils pliables ou articulés.

- `<fallback>` {{Optional_Inline}}
  - : Une valeur de secours à insérer si la variable d'environnement référencée dans le premier argument n'existe pas. Tout ce qui suit la première virgule est considéré comme la valeur de secours. Cela peut être une seule valeur, une autre fonction `env()`, ou une liste de valeurs séparées par des virgules.

## Description

La fonction `env()` est utilisée pour insérer la valeur d'une [variable d'environnement définie par l'agent utilisateur](/fr/docs/Web/CSS/Guides/Environment_variables/Using#variables_denvironnement_définies_par_le_navigateur) à portée globale dans votre CSS. La fonction `env()` peut être utilisée comme valeur de propriété ou à la place de toute partie d'une valeur de propriété ou d'un descripteur (par exemple, dans les [règles de requête de média](/fr/docs/Web/CSS/Reference/At-rules/@media)).

La fonction accepte une variable d'environnement (`<environment-variable>`) comme premier argument. Il s'agit d'un {{CSSxRef("&lt;custom-ident&gt;")}} sensible à la casse, égal au [nom de la variable d'environnement](/fr/docs/Web/CSS/Guides/Environment_variables/Using#variables_denvironnement_définies_par_le_navigateur) à substituer, mais il peut également inclure des valeurs supplémentaires séparées par des espaces si nécessaire. Par exemple, `env(viewport-segment-width 0 0)` renverrait la largeur du segment supérieur ou gauche dans le cas d'un appareil avec plusieurs segments de zone d'affichage.

Le deuxième argument, s'il est fourni, est la valeur de secours, qui est utilisée si la variable d'environnement référencée dans le premier argument n'est pas prise en charge ou n'existe pas. La valeur de secours peut être une autre variable d'environnement, même avec sa propre valeur de secours.

La syntaxe de la valeur de secours est similaire à la syntaxe de la valeur de secours de la fonction {{CSSxRef("var()")}} utilisée pour insérer des [propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) en ce sens qu'elle permet plusieurs virgules. Tout ce qui se trouve entre la première virgule et la fin de la fonction est considéré comme la valeur de secours. Cependant, si la fonction `env()` est utilisée dans une valeur de propriété ou un descripteur qui n'inclut pas de virgules, une valeur de secours contenant des virgules n'est pas valide.

Une propriété ou un descripteur contenant une fonction `env()` syntaxiquement valide est supposé être valide au moment de l'analyse, lorsque le navigateur lit et interprète pour la première fois le texte CSS téléchargé. Elle n'est vérifiée syntaxiquement qu'au moment du calcul, après que chaque fonction `env()` a été remplacée par sa valeur fournie par le navigateur (ou la valeur de secours si la variable d'environnement passée en premier paramètre n'est pas un nom de variable d'environnement reconnu). Si la valeur est invalide et qu'aucune valeur de secours n'est fournie, la propriété ou le descripteur contenant la fonction `env()` est [invalide au moment du calcul de la valeur](/fr/docs/Web/CSS/Guides/Syntax/Error_handling#propriétés_personnalisées_invalides).

Lorsque la substitution `env()` est invalide, et qu'une valeur de secours invalide est incluse, ou que la valeur de secours est omise, la déclaration n'est pas ignorée. À la place, la valeur [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) ou [héritée](/fr/docs/Web/CSS/Guides/Cascade/Inheritance) de la propriété est utilisée. La propriété est définie sur une nouvelle valeur, mais il se peut que ce ne soit pas celle attendue.

### Cas d'utilisation

Initialement fournie par le navigateur iOS pour permettre aux développeur·euse·s de placer leur contenu dans une zone sûre de la zone d'affichage, et de ne pas être masqué par les encoches ou les coins arrondis des appareils, les valeurs `safe-area-inset-*` peuvent être utilisées pour garantir que le contenu est visible pour les utilisateur·ice·s. Cette fonctionnalité a ensuite été étendue au-delà de son objectif initial pour permettre des cas d'utilisation tels que [d'empêcher les notifications de l'appareil de couvrir une partie de l'interface utilisateur de l'application](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui).

Un autre cas d'utilisation des variables `env()` concerne les [applications web progressives](/fr/docs/Web/Progressive_web_apps) (PWAs) de bureau qui utilisent la fonctionnalité [Window Controls Overlay](/fr/docs/Web/API/Window_Controls_Overlay_API) pour tirer parti de toute la surface de la fenêtre de l'application. En utilisant les valeurs [`titlebar-area-*`](#titlebar-area-x), les développeur·euse·s peuvent positionner des éléments là où se trouvait la barre de titre et [s'assurer que le contenu n'est pas masqué par les boutons de contrôle de la fenêtre](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Les noms de variables `viewport-segment-*` peuvent être utilisés pour ajuster vos conteneurs afin qu'ils s'adaptent parfaitement aux segments disponibles d'un appareil à plusieurs segments de zone d'affichage, comme un appareil à charnière ou pliable. Les entiers suivant le nom `viewport-segment-*` indiquent quel segment des multiples segments la variable d'environnement référence.

### Noms suivis d'entiers

Lorsque la variable d'environnement est de type tableau, c'est-à-dire que le nom peut référencer plusieurs valeurs, comme c'est le cas pour les appareils avec plusieurs segments de zone d'affichage, le paramètre `<environment-variable>` inclut à la fois le nom de la variable et les indices de l'instance spécifique de la variable que la fonction référence. Par exemple, dans le cas des variables `viewport-segment-*`, les noms de variables sont passés à la fonction `env()` avec deux entiers indiquant les indices du segment pour lequel retourner la valeur. Ces valeurs sont toutes deux des entiers de `0` ou plus. Le premier entier représente l'indice horizontal du segment, `0` étant le segment le plus à gauche, et la deuxième valeur représente l'indice vertical du segment, `0` représentant le segment le plus bas&nbsp;:

![Deux dispositions de segments d'appareils ; dans une disposition horizontale, 0 0 est le premier segment et 1 0 est le deuxième segment. Dans une disposition verticale, les indices sont 0 0 et 0 1](env-var-indices.png)

- Dans une disposition horizontale côte à côte, le segment de gauche est représenté par `0 0`, et le segment de droite est représenté par `1 0`.
- Dans une disposition verticale de haut en bas, le segment supérieur est représenté par `0 0`, et le segment inférieur est représenté par `0 1`.
- Sur les appareils avec plus de deux segments, les nombres peuvent être plus grands. Par exemple, un appareil avec trois segments horizontaux peut avoir le segment central représenté par `1 0`, et le segment de droite représenté par `2 0`.

Par exemple, ce qui suit retourne la largeur du segment de droite sur un appareil pliable à deux segments où les segments sont orientés horizontalement&nbsp;:

```css
env(viewport-segment-width 1 0)
```

Voir la [démonstration de l'API des segments de la zone d'affichage <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/viewport-segments-api/) pour un exemple complet en fonctionnement ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Consultez également [Utiliser l'API des segments de la zone d'affichage](/fr/docs/Web/API/Viewport_segments_API/Using) pour une explication complète de la démonstration.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `env()` pour s'assurer que les boutons ne sont pas masqués par l'interface utilisateur de l'appareil

Dans l'exemple suivant, `env()` est utilisé pour s'assurer que les boutons de la barre d'outils de l'application fixe ne sont pas masqués par les notifications de l'appareil apparaissant en bas de l'écran. Sur le bureau, `safe-area-inset-bottom` est `0`. Cependant, sur les appareils qui affichent des notifications en bas de l'écran, comme iOS, il contient une valeur qui laisse de l'espace pour que la notification s'affiche. Cela peut ensuite être utilisé dans la valeur de {{CSSxRef("padding-bottom")}} pour créer un espace qui apparaît naturel sur cet appareil.

#### HTML

Nous avons une section {{HTMLElement("main")}} contenant une fausse application et un {{HTMLElement("footer")}} contenant deux éléments {{HTMLElement("button")}}&nbsp;:

```html
<main>Contenu principal de l'application ici</main>
<footer>
  <button>Aller ici</button>
  <button>Ou ici</button>
</footer>
```

#### CSS

En utilisant la [mise en page flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout), nous créons un pied de page qui n'est aussi haut que nécessaire, tandis que la section principale contenant l'application remplit le reste de la fenêtre d'affichage&nbsp;:

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eeeeee;
  padding: 1em;
}

footer {
  flex: none;
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  background: black;
}

button {
  padding: 1em;
  background: white;
  color: black;
  margin: 0;
  width: 100%;
  border: none;
  font: 1em system-ui;
}
```

Nous définissons [`position: sticky`](/fr/docs/Web/CSS/Reference/Properties/position#sticky) pour coller le pied de page en bas de la fenêtre d'affichage. Nous utilisons ensuite le raccourci {{CSSxRef("padding")}} pour ajouter du padding au pied de page. Nous incluons la valeur de l'environnement `safe-area-inset-bottom` à un padding inférieur initial de `1em`. Une zone noire plus grande s'affiche sur les appareils ayant une valeur positive pour cette variable, garantissant que les boutons du pied de page ne sont jamais masqués.

```css
footer {
  position: sticky;
  bottom: 0;

  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

#### Résultats

{{EmbedLiveSample("Utiliser `env()` pour s'assurer que les boutons ne sont pas masqués par l'interface utilisateur de l'appareil", 200, 500)}}

### Utiliser une valeur de repli

Dans cet exemple, nous utilisons le deuxième paramètre optionnel de `env()`, qui fournit une valeur de repli au cas où la variable d'environnement n'est pas disponible.

#### HTML

Nous incluons un paragraphe de texte&nbsp;:

```html
<p>
  Si la fonction <code>env()</code> est prise en charge dans votre navigateur,
  le texte de ce paragraphe est 50 pixels de padding avec la bordure gauche mais
  pas la droite / basse et haute. En effet, le code CSS associé est équivalent à
  <code>padding: 0 0 0 50px</code>, car les noms des propriétés CSS associées
  aux agents utilisateurs sont sensibles à la casse (contrairement aux autres
  propriétés).
</p>
```

#### CSS

Nous définissons une largeur ({{CSSxRef("width")}}) de `300px` et une bordure ({{CSSxRef("border")}}). Nous ajoutons ensuite un remplissage ({{CSSxRef("padding")}}), en utilisant la fonction `env()` avec une valeur de repli pour la taille du padding de chaque côté. Nous définissons intentionnellement une valeur invalide pour le padding gauche (rappelez-vous, les noms des variables d'environnement sont sensibles à la casse), pour démontrer l'utilisation de la valeur de repli.

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

#### Résultats

{{EmbedLiveSample("Utiliser une valeur de repli", 350, 250)}}

### Utiliser `env()` pour s'assurer que le contenu n'est pas masqué par les boutons de contrôle de la fenêtre dans les PWA de bureau

Dans l'exemple suivant, `env()` garantit que le contenu affiché dans une Progressive Web App de bureau utilisant [l'API Window Controls Overlay](/fr/docs/Web/API/Window_Controls_Overlay_API) n'est pas masqué par les boutons de contrôle de la fenêtre du système d'exploitation. Les valeurs `titlebar-area-*` définissent un rectangle où la barre de titre aurait normalement été affichée. Sur les appareils qui ne prennent pas en charge la fonctionnalité Window Controls Overlay, comme les appareils mobiles, les valeurs de repli sont utilisées.

Voici à quoi ressemble normalement une PWA installée sur un appareil de bureau&nbsp;:

![Illustration de l'apparence normale d'une PWA installée sur un appareil de bureau, avec les boutons de contrôle de la fenêtre, une barre de titre et le contenu web en dessous](desktop-pwa-window.png)

Avec la fonctionnalité Window Controls Overlay, le contenu web couvre toute la surface de la fenêtre de l'application, les boutons de contrôle de la fenêtre et les boutons de la PWA étant affichés en superposition&nbsp;:

![Illustration de l'apparence d'une PWA installée sur un appareil de bureau avec la fonctionnalité Window Controls Overlay, avec les boutons de contrôle de la fenêtre, pas de barre de titre et le contenu web couvrant toute la fenêtre](desktop-pwa-window-wco.png)

```html
<header>Titre de l'application ici</header>
<main>Contenu principal de l'application ici</main>
```

```css
header {
  position: fixed;
  left: env(titlebar-area-x);
  top: env(titlebar-area-y);
  width: env(titlebar-area-width);
  height: env(titlebar-area-height);
}

main {
  margin-top: env(titlebar-area-height);
}
```

> [!NOTE]
> L'utilisation de `position:fixed` garantit que l'en-tête ne défile pas avec le reste du contenu, et reste aligné avec les boutons de contrôle de la fenêtre, même sur les appareils/navigateurs qui prennent en charge le rebond élastique (également connu sous le nom de rubber banding).

### Segments de la fenêtre

La [démonstration de l'API des segments de la fenêtre <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/viewport-segments-api/) et le guide [Utiliser l'API des segments de la fenêtre](/fr/docs/Web/API/Viewport_segments_API/Using) fournissent une démonstration et une explication de l'utilisation de la fonction `env()` avec les variables d'environnement `viewport-segments-*`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les variables d'environnement](/fr/docs/Web/CSS/Guides/Environment_variables/Using)
- Le module [des variables d'environnement CSS](/fr/docs/Web/CSS/Guides/Environment_variables)
- La fonction {{CSSxRef("var()")}}
- Le module [des propriétés personnalisées pour les variables en cascade CSS](/fr/docs/Web/CSS/Guides/Cascading_variables)
- [Les propriétés personnalisées (--\*)](/fr/docs/Web/CSS/Reference/Properties/--*)
- [Utiliser les propriétés CSS personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [L'API des segments de la fenêtre](/fr/docs/Web/API/Viewport_segments_API)
- [Personnaliser la superposition des contrôles de fenêtre de la barre de titre de votre PWA <sup>(angl.)</sup>](https://web.dev/articles/window-controls-overlay)
- [Afficher le contenu dans la barre de titre <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Sortir de la boîte <sup>(angl.)</sup>](https://alistapart.com/article/breaking-out-of-the-box/)
