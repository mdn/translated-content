---
title: Zones dynamiques ARIA
slug: Web/Accessibility/ARIA/Guides/Live_regions
original_slug: Web/Accessibility/ARIA/ARIA_Live_Regions
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

En JavaScript, il est possible de modifier dynamiquement des parties d'une page sans recharger l'ensemble de la page&nbsp;: par exemple, pour actualiser une liste de résultats de recherche à la volée, ou pour afficher une alerte ou notification discrète qui ne nécessite pas d'interaction de l'utilisateur·ice. Si ces changements sont généralement visibles pour les personnes voyantes, ils peuvent passer inaperçus pour les utilisateur·ice·s de technologies d'assistance. Les zones dynamiques (<i lang="en">live regions</i>) ARIA comblent cette lacune et permettent d'exposer de façon programmatique les changements dynamiques de contenu afin qu'ils puissent être annoncés par les technologies d'assistance.

> [!NOTE]
> Les technologies d'assistance annoncent généralement uniquement les changements _dynamiques_ dans le contenu d'une zone dynamique.
> Ajouter un attribut `aria-live` ou un rôle spécialisé de zone dynamique (comme [`role="status"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)) sur l'élément à annoncer fonctionne tant que l'attribut est ajouté avant que le changement n'ait lieu&nbsp;: soit dans le balisage initial, soit dynamiquement en JavaScript. Commencez par une zone dynamique vide, puis — dans une étape séparée — modifiez le contenu à l'intérieur de la zone.
> Bien que cela ne soit pas explicitement documenté dans la spécification, les navigateurs et technologies d'assistance gèrent de façon particulière [`role="alert"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)&nbsp;: dans la plupart des cas, le contenu à l'intérieur d'une région `role="alert"` est annoncé, même si la région (qui contient déjà la notification ou le message) est présente dans le balisage initial de la page ou injectée dynamiquement. Cependant, notez que les régions `role="alert"` sont — selon le navigateur ou la technologie d'assistance — automatiquement préfixées par «&nbsp;Alerte&nbsp;» lors de leur annonce.

## Zones dynamiques

Le contenu dynamique qui s'actualise sans rechargement de la page est généralement une zone ou un composant d'interface. Les changements de contenu simples, sans interaction possible, devraient être marqués comme des zones dynamiques. Une zone dynamique est explicitement définie à l'aide de l'attribut `aria-live`.

**`aria-live`**&nbsp;: L'attribut `aria-live=VALEUR_POLITESSE` est utilisé pour définir la priorité avec laquelle le lecteur d'écran doit traiter les mises à jour dans les zones dynamiques — les valeurs possibles sont&nbsp;: `off`, `polite` ou `assertive`. Cet attribut est de loin le plus important.

Normalement, seul `aria-live="polite"` est utilisé. Toute zone recevant des mises à jour importantes pour l'utilisateur·ice, mais pas trop fréquentes pour ne pas être gênantes, devrait recevoir cet attribut. Le lecteur d'écran lira les changements dès que l'utilisateur·ice sera inoccupé·e.

`aria-live="assertive"` ne doit être utilisé que pour les notifications critiques ou urgentes qui nécessitent absolument l'attention immédiate de l'utilisateur·ice. En général, une modification dans une zone dynamique assertive interrompt toute annonce en cours du lecteur d'écran. Cela peut donc être très intrusif et ne doit être utilisé qu'avec parcimonie.

De façon contre-intuitive, `aria-live="off"` n'indique pas que les changements ne seront pas annoncés. Lorsqu'un élément possède `aria-live="off"` (ou un `role` qui a cette valeur implicite, comme `role="marquee"` ou `role="timer"`), les changements de contenu ne sont annoncés que si le focus est sur ou à l'intérieur de l'élément.

### Exemple simple : une liste déroulante actualise une information utile à l'écran

Un site spécialisé dans l'information sur les planètes propose une liste déroulante. Lorsqu'une planète est sélectionnée, une zone de la page est actualisée avec les informations correspondantes.

```html
<fieldset>
  <legend>Informations sur la planète</legend>
  <label for="planetsSelect">Planète&nbsp;:</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Sélectionnez une planète…</option>
    <option value="mercury">Mercure</option>
    <option value="venus">Vénus</option>
    <option value="earth">Terre</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Afficher</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">Aucune planète sélectionnée</h2>
  <p id="planetDescription">
    Sélectionnez une planète pour afficher sa description
  </p>
</div>

<p>
  <small>
    Informations issues de
    <a href="https://fr.wikipedia.org/wiki/Système_solaire">Wikipédia</a>
  </small>
</p>
```

```js
const PLANETS_INFO = {
  mercury: {
    title: "Mercure",
    description:
      "Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire. Elle porte le nom du messager des dieux dans la mythologie romaine.",
  },

  venus: {
    title: "Vénus",
    description:
      "Vénus est la deuxième planète du Système solaire en partant du Soleil. Elle porte le nom de la déesse romaine de l'amour et de la beauté.",
  },

  earth: {
    title: "Terre",
    description:
      "La Terre est la troisième planète du Système solaire et le seul objet connu de l'Univers à abriter la vie.",
  },

  mars: {
    title: "Mars",
    description:
      'Mars est la quatrième planète du Système solaire et la deuxième plus petite après Mercure. Elle porte le nom du dieu romain de la guerre et est souvent appelée la "planète rouge".',
  },
};

function renderPlanetInfo(planet) {
  const planetTitle = document.querySelector("#planetTitle");
  const planetDescription = document.querySelector("#planetDescription");

  if (planet in PLANETS_INFO) {
    planetTitle.textContent = PLANETS_INFO[planet].title;
    planetDescription.textContent = PLANETS_INFO[planet].description;
  } else {
    planetTitle.textContent = "Aucune planète sélectionnée";
    planetDescription.textContent =
      "Sélectionnez une planète pour afficher sa description";
  }
}

const renderPlanetInfoButton = document.querySelector(
  "#renderPlanetInfoButton",
);

renderPlanetInfoButton.addEventListener("click", (event) => {
  const planetsSelect = document.querySelector("#planetsSelect");
  const selectedPlanet =
    planetsSelect.options[planetsSelect.selectedIndex].value;

  renderPlanetInfo(selectedPlanet);
});
```

{{EmbedLiveSample("Exemple simple : une liste déroulante actualise une information utile à l'écran", "", 350)}}

Lorsque l'utilisateur·ice sélectionne une nouvelle planète, l'information dans la zone dynamique sera annoncée. Comme la zone possède `aria-live="polite"`, le lecteur d'écran attendra une pause de l'utilisateur·ice avant d'annoncer la mise à jour. Ainsi, descendre dans la liste et sélectionner une autre planète n'annonce pas les changements dans la zone dynamique. Seule la planète finalement choisie déclenchera l'annonce.

Voici une capture d'écran de VoiceOver sur Mac annonçant la mise à jour (via les sous-titres) de la zone dynamique&nbsp;:

![Capture d'écran de VoiceOver sur Mac annonçant la mise à jour d'une zone « live ». Les sous-titres sont affichés.](web_accessibility_aria_aria_live_regions.png)

## Rôles avec attributs de zone « live » implicites

Les éléments ayant les valeurs [`role="…"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) suivantes agissent par défaut comme des zones dynamiques&nbsp;:

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">Rôle</th>
   <th scope="col">Description</th>
   <th scope="col">Notes de compatibilité</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>Chat, erreur, jeux ou autres types de journalisation</td>
   <td>Pour maximiser la compatibilité, ajouter un <code>aria-live="polite"</code> redondant lorsque vous utilisez ce rôle.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Une barre d'état ou une zone de l'écran qui fournit un état actualisé de quelque chose. Les utilisateur·ice·s de lecteur d'écran ont à leur disposition une commande spéciale pour lire l'état courant.</td>
   <td>Pour maximiser la compatibilité, ajouter un <code>aria-live="polite"</code> redondant lorsque vous utilisez ce rôle.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Message d'erreur ou avertissement souligné à l'écran. Les alertes sont particulièrement importantes pour la validation côté client notifiée à l'utilisateur·ice. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Exemple d'alerte <sup>(angl.)</sup></a></td>
   <td>Pour maximiser la compatibilité, certain·e·s recommandent d'ajouter un <code>aria-live="assertive"</code> redondant avec ce rôle. Cependant, ajouter à la fois <code>aria-live</code> et <code>role="alert"</code> provoque un doublon d'annonce dans VoiceOver sur iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Élément hybride entre un composant d'interface et une zone dynamique. Utilisez ce rôle avec les attributs <code>aria-valuemin</code>, <code>aria-valuenow</code> et <code>aria-valuemax</code>.</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Pour faire défiler un texte, comme pour un téléscripteur ou un afficheur alphanumérique.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Pour tout type de minuterie ou d'horloge, tel qu'un compte-à-rebours ou un chronomètre.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Attributs supplémentaires pour les zones « live »

Les zones dynamiques sont bien prises en charge. The Paciello Group a publié en 2014 des [informations sur l'état du support des zones «&nbsp;live&nbsp;» <sup>(angl.)</sup>](https://www.tpgi.com/screen-reader-support-aria-live-regions/). Paul J. Adam a étudié plus particulièrement le [support des attributs `aria-atomic` et `aria-relevant` <sup>(angl.)</sup>](https://pauljadam.com/demos/aria-atomic-relevant.html).

1. **`aria-atomic`**&nbsp;: L'attribut `aria-atomic=BOOLÉEN` est utilisé pour définir si le lecteur d'écran doit ou non présenter la zone dynamique comme un ensemble, même si une partie seulement de la zone est modifiée — Les valeurs possibles sont `false`/`true`. La valeur par défaut est `false`.
2. [**`aria-relevant`**](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : L'attribut `aria-relevant=[LISTE_DES_CHANGEMENTS]` est utilisé pour définir quel type de changements est adéquat à une zone dynamique — les valeurs possibles sont `additions` (ajout)/`removals` (suppression)/`text` (texte)/`all` (tous). La valeur par défaut est «&nbsp;`additions text`&nbsp;».

### Exemples simples : `aria-atomic`

Pour illustrer `aria-atomic`, prenons un site avec une simple horloge affichant les heures et les minutes. L'horloge est actualisée chaque minute, le temps restant écrasant le contenu courant.

```html
<div id="clock" role="timer" aria-live="polite">
  <span id="clock-hours"></span>
  <span id="clock-mins"></span>
</div>
```

```js
/* JavaScript simple pour actualiser l'horloge */
function updateClock() {
  const now = new Date();
  document.getElementById("clock-hours").textContent = now.getHours();
  document.getElementById("clock-mins").textContent =
    `0${now.getMinutes()}`.slice(-2);
}

/* première exécution */
updateClock();

/* mise à jour chaque minute */
setInterval(updateClock, 60000);
```

La première fois que la fonction s'exécute, l'intégralité de la chaîne de caractères ajoutée sera annoncée. Lors des appels suivants, seules les parties du contenu qui ont changé par rapport au contenu précédent seront annoncées. Par exemple, lorsque l'horloge passe de «&nbsp;17:33&nbsp;» à «&nbsp;17:34&nbsp;», les technologies d'assistance n'annonceront que «&nbsp;34&nbsp;», ce qui n'est pas très utile.

Une solution consiste à vider d'abord tout le contenu de la zone dynamique (ici, mettre à vide le `innerHTML` des deux `<span id="clock-hours">` et `<span id="clock-mins">`), puis à injecter le nouveau contenu. Cependant, cela peut parfois être peu fiable, car cela dépend du timing exact de ces deux mises à jour.

`aria-atomic="true"` garantit qu'à chaque mise à jour de la zone dynamique, l'intégralité du contenu sera annoncée (par exemple, «&nbsp;17:34&nbsp;»).

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Autre exemple d'utilisation de `aria-atomic`&nbsp;: une notification ou une mise à jour résultant d'une action de l'utilisateur·ice.

```html
<div id="date-input">
  <label for="year">Année&nbsp;:</label>
  <input type="text" id="year" value="1990" />
</div>

<div id="date-output" aria-atomic="true" aria-live="polite">
  L'année définie est&nbsp;:
  <span id="year-output">1990</span>
</div>
```

```js
function change(event) {
  const yearOut = document.getElementById("year-output");

  switch (event.target.id) {
    case "year":
      yearOut.textContent = event.target.value;
      break;
  }
}

document.getElementById("year").addEventListener("blur", change);
```

Sans `aria-atomic="true"`, le lecteur d'écran n'annonce que la valeur de l'année modifiée. Avec `aria-atomic="true"`, le lecteur d'écran annonce «&nbsp;L'année définie est&nbsp;: _t la valeur modifiée_&nbsp;».

### Exemple simple : `aria-relevant`

Avec `aria-relevant`, vous pouvez définir quels types de changements/mises à jour d'une zone dynamique doivent être annoncés.

Par exemple, un site de chat souhaite afficher la liste des utilisateur·ice·s actuellement connecté·e·s. Plutôt que d'annoncer uniquement les utilisateur·ice·s connecté·e·s, on souhaite aussi déclencher une annonce lorsqu'un·e utilisateur·ice est _retiré·e_ de la liste. On peut y parvenir en spécifiant `aria-relevant="additions removals"`.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- utilisez JavaScript ici pour ajouter/supprimer des utilisateur·ice·s -->
</ul>
```

Détail des propriétés dynamiques d'ARIA&nbsp;:

- `aria-live="polite"` indique au lecteur d'écran qu'il doit attendre que l'utilisateur·ice soit inactif·ve avant de présenter une mise à jour. C'est la valeur la plus couramment utilisée, car interrompre l'utilisateur·ice avec «&nbsp;assertive&nbsp;» pourrait briser son flux.
- `aria-atomic` n'est pas défini (`false` par défaut), ainsi seuls les utilisateur·ice·s ajouté·e·s ou supprimé·e·s devraient être annoncé·e·s et non l'intégralité de la liste à chaque mise à jour.
- `aria-relevant="additions removals"` assure que les utilisateur·ice·s ajouté·e·s ou supprimé·e·s de la liste seront annoncé·e·s.

## Voir aussi

- [Rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)
- Les méthodes {{domxref("Document.ariaNotify()")}} et {{domxref("Element.ariaNotify()")}}
