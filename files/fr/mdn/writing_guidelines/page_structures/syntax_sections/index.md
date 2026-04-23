---
title: Sections de syntaxe
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

La section de syntaxe d'une page de référence MDN contient un encadré de syntaxe définissant la syntaxe exacte d'une fonctionnalité (par exemple, quels paramètres peut-elle accepter, lesquels sont optionnels&nbsp;?). Cet article explique comment rédiger les encadrés de syntaxe pour les articles de référence.

## Syntaxe de référence d'API

Les sections de syntaxe pour les pages de référence d'API sont rédigées manuellement et peuvent varier légèrement selon la fonctionnalité documentée.
La section commence par un titre (généralement un titre de niveau deux `##`) nommé «&nbsp;Syntaxe&nbsp;», et doit être placée en haut de la page de référence (juste sous l'introduction).
Sous le titre se trouve un bloc de code affichant la syntaxe exacte de la fonctionnalité, délimité par des backticks de code fence ` ```[langage-markup] `.

L'exemple ci-dessous montre le code Markdown pour une section Syntaxe typique (pour une fonction JavaScript)&nbsp;:

````md
## Syntaxe

```js-nolint
slice()
slice(start)
slice(start, end)
```
````

> [!NOTE]
> Le langage de balisage utilisé ici est `js-nolint`, où `js` indique que la coloration JavaScript doit être utilisée.
> Pour les sections de syntaxe JavaScript, `-nolint` est aussi requis car la section syntaxe n'est volontairement pas du «&nbsp;vrai&nbsp;» JavaScript et on ne veut pas que le linter la «&nbsp;corrige&nbsp;» (les valeurs de retour et les points-virgules de fin de ligne sont omis).

### Règles générales de style

Quelques règles à suivre pour le balisage dans le bloc de syntaxe&nbsp;:

- **Ne pas** terminer une ligne par un point-virgule `;`. Les sections de syntaxe ne sont pas destinées à montrer du code exécutable. Il n'est donc pas pertinent d'afficher des points-virgules.
- **Ne pas** utiliser `<code>` dans le bloc de syntaxe (ni dans aucun bloc d'exemple de code sur MDN). Non seulement c'est inutile, mais notre balisage ne le veut pas et il ne s'affichera pas comme vous le souhaitez.
- Spécifiez uniquement la fonction et ses arguments. Exemples «&nbsp;corrigés&nbsp;» ci-dessous&nbsp;:

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### Constructeurs et méthodes

#### Bloc de syntaxe

Commencez par un bloc de syntaxe, comme ceci (depuis la page du constructeur {{DOMxRef("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}})&nbsp;:

```js-nolint
new IntersectionObserver(callback, options)
```

ou ceci (depuis {{DOMxRef("Document.hasStorageAccess()")}})&nbsp;:

```js-nolint
hasStorageAccess()
```

Quand la méthode est statique, par exemple {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}}, indiquez aussi son interface&nbsp;:

```js-nolint
URL.createObjectURL(object)
```

##### Plusieurs lignes/Paramètres optionnels

Les méthodes pouvant être utilisées de plusieurs façons doivent être détaillées sur plusieurs lignes, montrant toutes les variantes possibles.

Chaque option doit être sur sa propre ligne, sans commentaire ni affectation par option. Par exemple, {{JSxRef("Array.prototype.slice()")}} a deux paramètres optionnels, et serait documentée ainsi&nbsp;:

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

De même pour {{DOMxRef("CanvasRenderingContext2D.drawImage")}}&nbsp;:

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

De même pour le constructeur {{JSxRef("Date")}}&nbsp;:

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

##### Syntaxe formelle

La notation de syntaxe formelle (utilisant la [BNF](https://fr.wikipedia.org/wiki/Forme_de_Backus-Naur)) ne doit pas être utilisée dans la section Syntaxe — utilisez plutôt le format multi-lignes détaillé [ci-dessus](#plusieurs_lignesparamètres_optionnels).

Bien que la notation formelle soit concise pour décrire des syntaxes complexes, elle n'est pas familière à beaucoup de développeur·euse·s et peut entrer en conflit avec la syntaxe valide de certains langages. Par exemple, `[ ]` indique à la fois un «&nbsp;paramètre optionnel&nbsp;» et un {{JSxRef("Array")}} JavaScript. On le voit dans la syntaxe formelle de {{JSxRef("Array.prototype.slice()")}} ci-dessous&nbsp;:

```js-nolint
arr.slice([begin[, end]])
```

Dans certains cas particuliers, une section **Syntaxe formelle** séparée peut être ajoutée.

##### Blocs de syntaxe concis

L'objectif est de rendre le bloc de syntaxe aussi pur et non ambigu que possible — n'incluez aucune syntaxe inutile. Par exemple, on voit souvent ce type de syntaxe pour décrire les promesses&nbsp;:

```js-nolint
caches.match(request, options).then((response) => {
  // Do something with the response
})
```

Mais cette version est bien plus concise et n'inclut pas l'appel superflu à {{JSxRef("Promise.prototype.then()")}}&nbsp;:

```js-nolint
match(request, options)
```

##### Blocs de syntaxe pour callbacks

Pour les méthodes acceptant une fonction de rappel, indiquez le callback comme paramètre, pas comme fonction fléchée ni expression `function`.

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

Ensuite, dans la section «&nbsp;Paramètres&nbsp;», listez les paramètres du callback et ce qu'il doit retourner.

```md
- `callbackFn`
  - : Fonction exécutée pour chaque élément du tableau. Elle doit retourner une valeur [vraie](/fr/docs/Glossary/Truthy) pour conserver l'élément dans le tableau résultant, et une valeur [fausse](/fr/docs/Glossary/Falsy) sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : Élément courant traité dans le tableau.
    - `index`
      - : Index de l'élément courant traité dans le tableau.
    - `array`
      - : Tableau sur lequel `filter()` a été appelé.
```

##### Syntaxe pour un nombre arbitraire de paramètres

Pour les méthodes acceptant un nombre arbitraire de paramètres, le bloc de syntaxe s'écrit ainsi&nbsp;:

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

Privilégiez une numérotation à partir de 1, ce qui permet d'écrire des descriptions comme «&nbsp;`unshift` ajoute N éléments au début du tableau&nbsp;», ou «&nbsp;le premier élément&nbsp;» (plutôt que «&nbsp;l'élément zéro&nbsp;»).

Notez que le cas où aucun paramètre n'est passé est toujours inclus, même si cela n'a pas beaucoup de sens. Ensuite, dans la section «&nbsp;Paramètres&nbsp;», écrivez&nbsp;:

```md
- `element1`, …, `elementN`
  - : Les éléments à ajouter au début du tableau.
```

Ajoutez `\{{Optional_Inline}}` ici si le passage de zéro paramètre est pertinent.

Autre exemple avec des paramètres positionnels avant le reste&nbsp;:

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### Section paramètres

Ajoutez ensuite une sous-section «&nbsp;Paramètres&nbsp;», qui explique chaque paramètre dans une liste de description. Les paramètres objets peuvent inclure une liste de description imbriquée détaillant chaque membre. Les paramètres optionnels doivent être marqués avec la macro \\{{Optional_Inline}} à côté de leur nom.

Le nom de chaque paramètre doit être entouré de backticks markdown `` ` ` ``.

> [!NOTE]
> Même si la fonctionnalité ne prend aucun paramètre, il faut inclure une section «&nbsp;Paramètres&nbsp;» avec le contenu «&nbsp;Aucun&nbsp;».

#### Section valeur de retour

Ajoutez ensuite une sous-section «&nbsp;Valeur de retour&nbsp;», qui explique ce que retourne le constructeur ou la méthode. Voir les liens ci-dessus pour des exemples.

S'il n'y a pas de valeur de retour, utilisez&nbsp;:

Aucune (\{{JSxRef("undefined")}}).

#### Section exceptions

Enfin, ajoutez une sous-section «&nbsp;Exceptions&nbsp;», qui explique quelles exceptions peuvent être levées si un problème survient lors de l'appel du constructeur/méthode. Cela peut être dû à une faute de frappe dans un nom de paramètre, à une valeur de mauvais type, à un problème d'environnement (par exemple, tentative d'utilisation d'une fonctionnalité réservée au contexte sécurisé dans un contexte non sécurisé), ou autre.

Pour déterminer les exceptions levées par une méthode, il faut souvent consulter la spécification. L'analyse des étapes détaillées de la spec permet généralement d'obtenir la liste des exceptions et des situations qui les déclenchent.

Les noms et explications des exceptions doivent être inclus dans une liste de description.

> [!NOTE]
> Si aucune exception ne peut être levée, il n'est pas nécessaire d'inclure une section «&nbsp;Exceptions&nbsp;», mais vous pouvez l'ajouter avec le contenu «&nbsp;Aucune&nbsp;» si vous le souhaitez.

### Propriétés

#### Section valeur

Les propriétés n'ont pas de section de syntaxe. Ajoutez plutôt une section «&nbsp;Valeur&nbsp;» expliquant la valeur de la propriété, son type de donnée et son usage.

#### Section exceptions

Si l'accès à la propriété peut lever une exception, ajoutez une sous-section «&nbsp;Exceptions&nbsp;» détaillant chaque exception, comme pour les méthodes et constructeurs.

## Syntaxe de référence JavaScript

Les pages de référence des objets natifs JavaScript suivent les mêmes règles de base que les pages de référence d'API (pour les méthodes et propriétés). Quelques différences peuvent être observées&nbsp;:

- Pour les objets natifs avec un seul constructeur, la syntaxe du constructeur est souvent incluse sur la page d'accueil de l'objet. Voir {{JSxRef("Date")}} par exemple. Les méthodes statiques (celles qui existent sur l'objet `Date` lui-même) sont listées sous «&nbsp;Méthodes&nbsp;», tandis que les méthodes d'instance sont sous «&nbsp;Méthodes de Date.prototype&nbsp; ».
- Les méthodes sans paramètres ou exceptions ont plus souvent ces sous-sections omises sur les pages de référence JavaScript. Voir {{JSxRef("Date.getDate()")}} et {{JSxRef("Date.now()")}} par exemple.

## Syntaxe de référence CSS

### Propriétés

Les pages de référence des propriétés CSS incluent une section «&nbsp;Syntaxe&nbsp;», autrefois placée en haut de la page mais de plus en plus souvent sous une section montrant un exemple d'utilisation typique et un exemple interactif (voir {{CSSxRef("animation")}} par exemple).

> [!NOTE]
> Cela s'explique par la complexité de la syntaxe formelle CSS, peu utilisée par la majorité des lecteur·ice·s MDN, et qui peut rebuter les débutant·e·s. La vraie syntaxe et les exemples sont plus utiles à la plupart des gens.

Dans la section syntaxe, on trouve les éléments suivants.

#### Texte d'explication optionnel

Certaines propriétés CSS sont évidentes et n'ont pas besoin d'explication supplémentaire (par exemple {{CSSxRef("color")}}). D'autres sont plus complexes et nécessitent des explications sur l'ordre des valeurs, la multiplicité, etc. (voir {{CSSxRef("animation")}}). Dans ces cas, ajoutez une explication avant les sous-sections.

#### Section valeurs

Ajoutez ensuite une section «&nbsp;Valeurs&nbsp;» — elle contient une liste de description expliquant les types de valeurs CSS qui composent la valeur de la propriété. Chaque type doit être entouré de chevrons et lié à la page de référence MDN correspondante si elle existe. Par exemple, voir la propriété {{CSSxRef("border")}} — elle référence trois types de valeurs, dont un seul est lié ({{CSSxRef("&lt;color&gt;")}}).

#### Syntaxe formelle

La dernière section, «&nbsp;Syntaxe formelle&nbsp;», est générée automatiquement avec la macro `\{{CSSSyntax}}`. Cette macro récupère les données des spécifications CSS via le package [@webref/css npm <sup>(angl.)</sup>](https://www.npmjs.com/package/@webref/css). Pour inclure la syntaxe formelle&nbsp;:

1. Ajoutez un titre&nbsp;: `## Syntaxe formelle`.
2. Placez la macro `\{{CSSSyntax}}` juste en dessous.

### Sélecteurs

La section «&nbsp;Syntaxe&nbsp;» des pages de référence de sélecteurs est bien plus simple que celle des propriétés. Elle contient un bloc unique au style «&nbsp;Syntax Box&nbsp;», qui montre la syntaxe de base du sélecteur, qu'il s'agisse d'un simple mot-clé (par exemple {{CSSxRef(":hover")}}), ou d'une fonction complexe prenant un paramètre (par exemple {{CSSxRef(":not", ":not()")}}). Parfois, le paramètre est expliqué dans une entrée supplémentaire dans le bloc (voir {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}).

Ce bloc est généré automatiquement à partir des données du dossier CSS du [dépôt de données MDN <sup>(angl.)</sup>](https://github.com/mdn/data). Il suffit d'inclure la macro `CSSSyntax` sous le titre, elle s'occupe du reste.

La seule difficulté est de s'assurer que les données nécessaires sont présentes. Le fichier [selectors.json <sup>(angl.)</sup>](https://github.com/mdn/data/blob/main/css/selectors.json) doit contenir une entrée pour le sélecteur documenté.

Pour cela, forkez le [dépôt de données MDN <sup>(angl.)</sup>](https://github.com/mdn/data), clonez votre fork, faites les modifications dans une nouvelle branche, puis soumettez une pull request. [Plus de détails sur Git ici](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

## Syntaxe de référence HTML

Les pages de référence HTML n'ont pas de section «&nbsp;Syntaxe&nbsp;» — la syntaxe est toujours le nom de l'élément entouré de chevrons, donc ce n'est pas nécessaire. L'essentiel à savoir est quels attributs l'élément accepte et leurs valeurs, ce qui est couvert dans une section «&nbsp;Attributs&nbsp;». Voir {{HTMLElement("ol")}} et {{HTMLElement("video")}} par exemple.

## Syntaxe de référence HTTP

La syntaxe de référence HTTP est entièrement rédigée à la main et varie selon le type de fonctionnalité HTTP documentée.

### En-têtes HTTP/Content-Security-Policy

La syntaxe des en-têtes HTTP (et Content-Security-Policy) est documentée dans deux sections distinctes — «&nbsp;Syntaxe&nbsp;» et «&nbsp;Directives&nbsp;».

#### Section syntaxe

La section «&nbsp;Syntaxe&nbsp;» montre à quoi ressemble la syntaxe d'un en-tête, avec un bloc de syntaxe au style «&nbsp;Syntax Box&nbsp;», incluant la syntaxe formelle pour montrer exactement quelles directives peuvent être incluses, dans quel ordre, etc. Par exemple, le bloc de syntaxe de l'en-tête {{HTTPHeader("If-None-Match")}} ressemble à&nbsp;:

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Certains en-têtes ont des syntaxes séparées pour les directives de requête, de réponse et d'extension. Si c'est le cas, incluez-les dans des blocs distincts, chacun sous sa propre sous-section. Voir {{HTTPHeader("Cache-Control")}} par exemple.

#### Section directives

La section «&nbsp;Directives&nbsp;» contient une liste de description avec les noms et descriptions de toutes les directives possibles dans la syntaxe.

### Méthodes de requête HTTP

La syntaxe des méthodes de requête est très simple&nbsp;: un bloc de syntaxe au style «&nbsp;Syntax Box&nbsp;» montrant la structure de la méthode. La syntaxe de la [méthode GET](/fr/docs/Web/HTTP/Reference/Methods/GET) ressemble à&nbsp;:

```http
GET /index.html
```

### Codes de statut de réponse HTTP

Là encore, la syntaxe des codes de statut HTTP est très simple&nbsp;: un bloc de syntaxe avec le code et le nom. Exemple&nbsp;:

```http
404 Not Found
```

## Syntaxe de référence SVG

### Éléments SVG

Les sections de syntaxe des éléments SVG n'existent pas — comme pour les éléments HTML. Chaque page de référence d'élément SVG inclut simplement la liste des attributs applicables. Voir {{SVGElement("feTile")}} par exemple.

### Attributs SVG

Les pages de référence d'attributs SVG n'incluent pas non plus de section de syntaxe.

## Voir aussi

- [Markdown sur MDN](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#blocs_de_code_dexemple)
