---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

Une **Content Security Policy** (<abbr>CSP</abbr>) (ou Stratégie de Sécurité du Contenu en français) est une fonctionnalité qui aide à prévenir ou à minimiser le risque de certains types de menaces de sécurité. Elle consiste en une série d'instructions d'un site web à un navigateur, qui indique au navigateur de placer des restrictions sur ce que le code composant le site est autorisé à faire.

Le cas d'utilisation principal de CSP est de contrôler quelles ressources, en particulier les ressources JavaScript, un document est autorisé à charger. C'est principalement utilisé comme défense contre les attaques {{Glossary("cross-site scripting", "injection de scripts intersites")}} (XSS), dans lesquelles un·e attaquant·e est capable d'injecter du code malveillant dans le site de la victime.

Une CSP peut également avoir d'autres objectifs, notamment se défendre contre le [détournement de clic](/fr/docs/Web/Security/Attacks/Clickjacking) et contribuer à garantir que les pages d'un site sont chargées en HTTPS.

Dans ce guide, nous commençons par décrire comment une CSP est transmise à un navigateur et à quoi elle ressemble à un niveau élevé.

Ensuite, nous décrivons comment elle peut être utilisée pour&nbsp;:

1. [Contrôler le chargement des ressources](#contrôler_le_chargement_des_ressources), pour se protéger contre les XSS.
2. [Restreindre l'intégration](#protection_contre_le_détournement_de_clics), pour se protéger contre le détournement de clic.
3. [Mettre à niveau les requêtes non sécurisées](#mettre_à_niveau_les_requêtes_non_sécurisées), afin d'aider à garantir que toutes les ressources sont servies en HTTPS.
4. [Exiger l'utilisation des types de confiance](#exiger_des_types_de_confiance), pour aider à se défendre contre les XSS côté client.

Notez qu'il n'existe aucune dépendance entre les différents cas d'utilisation&nbsp;: si vous souhaitez ajouter une protection contre le détournement de clic sans atténuation XSS, vous pouvez simplement ajouter les directives correspondant à ce cas d'utilisation.

Enfin nous décrivons [des stratégies de déploiement d'une CSP](#tester_votre_politique) et des outils pouvant faciliter ce processus.

## Aperçu des CSP

Une CSP doit être transmise au navigateur par l'en‑tête de réponse {{HTTPHeader("Content-Security-Policy")}}. Elle doit être définie pour toutes les réponses à toutes les requêtes, pas seulement pour le document principal.

On peut aussi la définir en utilisant l'attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv) de l'élément HTML {{HTMLElement("meta")}} du document, cette option est utile dans certains cas, par exemple pour une {{Glossary("SPA", "application monopage")}} rendue côté client et ne contenant que des ressources statiques, car elle évite de dépendre d'une infrastructure serveur. Toutefois, cette option ne prend pas en charge toutes les fonctionnalités de la CSP.

La stratégie est définie comme une série de _directives_, séparées par des points‑virgules. Chaque directive contrôle un aspect différent de la politique de sécurité. Une directive comporte un nom, suivi d'un espace, puis d'une valeur. Différentes directives peuvent avoir des syntaxes différentes.

Par exemple, considérez la CSP suivante&nbsp;:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Elle définit deux directives&nbsp;:

- la directive `default-src` est réglée sur `'self'`
- la directive `img-src` est réglée sur `'self' example.com`.

![Une CSP décomposée en ses directives.](csp-overview.svg)

La première directive, `default-src`, indique au navigateur de ne charger que les ressources provenant de la même origine que le document, sauf si d'autres directives plus spécifiques définissent une politique différente pour d'autres types de ressources. La seconde, `img-src`, indique au navigateur de charger les images provenant de la même origine ou depuis `example.com`.

Dans la section suivante, nous examinons les outils disponibles pour contrôler le chargement des ressources, qui constituent la fonction principale d'une CSP.

## Contrôler le chargement des ressources

Une CSP peut être utilisée pour contrôler les ressources qu'un document est autorisé à charger. C'est principalement utilisé pour se protéger contre les attaques de type de script inter-site (XSS).

Dans cette section, nous voyons d'abord comment le contrôle du chargement des ressources peut aider à se protéger contre les XSS, puis les outils que la CSP fournit pour contrôler quelles ressources sont chargées. Enfin, nous décrivons une stratégie particulière recommandée, appelée «&nbsp;CSP stricte&nbsp;».

### Le XSS et le chargement des ressources

Une attaque de script inter-site (XSS) est une attaque dans laquelle un·e attaquant·e est capable d'exécuter son code dans le contexte du site cible. Ce code peut alors faire tout ce que le code du site peut faire, y compris, par exemple&nbsp;:

- accéder ou modifier le contenu des pages chargées du site
- accéder ou modifier le contenu du stockage local
- effectuer des requêtes HTTP avec les identifiants de l'utilisateur·ice, lui permettant de se faire passer pour l'utilisateur·ice ou d'accéder à des données sensibles

Une attaque XSS est possible lorsqu'un site web accepte des entrées qui pourraient avoir été conçues par un·e attaquant·e (par exemple, des paramètres d'URL ou un commentaire sur un blog) et les inclut ensuite dans la page sans les _assainisseurs_&nbsp;: c'est-à-dire sans s'assurer qu'elles ne peuvent pas être exécutées en tant que JavaScript.

Les sites web doivent se protéger contre les XSS en assainissant ces entrées avant de les inclure dans la page.

> [!NOTE]
> Une CSP peut en fait aider à se protéger contre les XSS de deux manières différentes&nbsp;:
>
> - Elle peut aider à s'assurer que les entrées sont assainies avant d'être utilisées côté client&nbsp;: nous en discutons plus loin dans [Exiger des types de confiance](#exiger_des_types_de_confiance).
> - En contrôlant le chargement des ressources, une CSP peut fournir une défense en profondeur contre les XSS, protégeant le site même si l'assainissement échoue. C'est cette défense contre les XSS que nous allons aborder dans cette section.

Si l'assainissement échoue, le code malveillant injecté peut prendre diverses formes dans le document, notamment&nbsp;:

- Une balise {{HTMLElement("script")}} qui se lie à une source malveillante&nbsp;:

  ```html
  <script src="https://vilain.example.com/hacker.js"></script>
  ```

- Une balise `<script>` qui inclut du JavaScript en ligne&nbsp;:

  ```html
  <script>
    console.log("Vous avez été piraté !");
  </script>
  ```

- Un gestionnaire d'évènement embarqué&nbsp;:

  ```html
  <img
    onmouseover="console.log(`Vous avez été piraté !`)"
    src="thumbnail.jpg"
    alt="" />
  ```

- Une URL `javascript:`&nbsp;:

  ```html
  <iframe src="javascript:console.log(`Vous avez été piraté !`)"></iframe>
  ```

- Un argument d'une chaîne de caractères à une API dangereuse comme [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`Vous avez été piraté !`)");
  ```

En contrôlant le chargement des ressources, une CSP peut fournir une protection contre toutes ces attaques. Avec une CSP, vous pouvez&nbsp;:

- définir les sources autorisées pour les fichiers JavaScript et autres ressources, bloquant efficacement les chargements depuis `https://vilain.example.com`
- désactiver les balises de script embarquées
- autoriser uniquement les balises de script qui ont le {{Glossary("Nonce", "nombre unique")}} ou le hachage correct
- désactiver les gestionnaires d'évènements embarqués
- désactiver les URL `javascript:`
- désactiver les API dangereuses comme `eval()`

Dans la section suivante, nous examinons les outils que la CSP fournit pour accomplir ces tâches.

> [!NOTE]
> Définir une CSP n'est pas une alternative à l'assainissement des entrées. Les sites Web doivent assainir les entrées _et_ définir une CSP, fournissant une défense en profondeur contre les XSS.

### Directives de récupération

Les directives de récupération sont utilisées pour définir une catégorie particulière de ressources qu'un document est autorisé à charger — comme JavaScript, feuilles de style CSS, images, polices, etc.

Il existe différentes directives de récupération pour différents types de ressources. Par exemple&nbsp;:

- {{CSP("script-src")}} définit les sources autorisées pour JavaScript.
- {{CSP("style-src")}} définit les sources autorisées pour les feuilles de style CSS.
- {{CSP("img-src")}} définit les sources autorisées pour les images.

Une directive de récupération spéciale est `default-src`, qui définit une politique de repli pour toutes les ressources dont les directives ne sont pas explicitement listées.

Pour l'ensemble complet des directives de récupération, voir la [documentation de référence](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives_de_récupération_fetch).

Chaque directive de récupération est définie soit par le mot‑clé unique `'none'`, soit par une ou plusieurs _expressions de source_, séparées par des espaces. Lorsqu'on indique plusieurs expressions de source&nbsp;: si l'une d'entre elles autorise la ressource, alors la ressource est autorisée.

Par exemple, la CSP ci‑dessous définit deux directives de récupération&nbsp;:

- `default-src` reçoit la seule expression de source `'self'`
- `img-src` reçoit deux expressions de source&nbsp;: `'self'` et `example.com`

![Diagramme CSP montrant les expressions de source](csp-source-expressions.svg)

L'effet est le suivant&nbsp;:

- les images doivent être soit de la même origine que le document, soit chargées depuis `example.com`
- toutes les autres ressources doivent être de la même origine que le document.

Dans les sections suivantes, nous décrivons quelques manières d'utiliser les expressions de source pour contrôler les chargements de ressources. Notez que, bien que nous les décrivions séparément, ces expressions peuvent en général être combinées&nbsp;: par exemple, une seule directive de récupération peut inclure des nombres uniques ainsi que des noms d'hôte.

#### Bloquer des ressources

Pour bloquer complètement un type de ressource, utilisez le mot‑clé `'none'`. Par exemple, la directive suivante bloque toutes les ressources {{HTMLElement("object")}} et {{HTMLElement("embed")}}&nbsp;:

```http
Content-Security-Policy: object-src 'none'
```

Notez que `'none'` ne peut pas être combiné avec une autre méthode dans une directive donnée&nbsp;: en pratique, si d'autres expressions de source sont fournies avec `'none'`, elles sont ignorées.

#### Nombres uniques

Un `nonce` est la méthode recommandée pour restreindre le chargement des ressources {{HTMLElement("script")}} et {{HTMLElement("style")}}.

Avec un nombre unique, le serveur génère une valeur aléatoire pour chaque réponse HTTP et l'inclut dans une directive `script-src` et/ou `style-src`&nbsp;:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Le serveur inclut ensuite cette valeur comme valeur de l'attribut `nonce` de toutes les balises `<script>` et/ou `<style>` qu'il souhaite inclure dans le document.

Le navigateur compare les deux valeurs et ne charge la ressource que si elles correspondent. L'idée est que même si un·e attaquant·e peut insérer du JavaScript dans la page, il/elle ne sait pas quel nombre unique le serveur va utiliser, donc le navigateur refuse d'exécuter le script.

Pour que cette approche fonctionne, il ne doit pas être possible pour un·e attaquant·e de deviner le nombre unique.

**En pratique, cela signifie que le nombre unique doit être différent pour chaque réponse HTTP et ne doit pas être prévisible.**

Cela signifie également que le serveur ne peut pas servir du HTML statique, car il doit insérer un nouveau nombre unique à chaque fois. En général, le serveur utilise un moteur de modèles pour insérer le nombre unique.

Voici un extrait de code [Express](/fr/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) pour illustrer&nbsp;:

```js
function content(nombre_unique) {
  return `
    <script nonce="${nombre_unique}" src="/main.js"></script>
    <script nonce="${nombre_unique}">console.log("bonjour !");</script>
    <h1>Bonjour le monde</h1> 
    `;
}

app.get("/", (req, res) => {
  const nombre_unique = crypto.randomUUID();
  res.setHeader(
    "Content-Security-Policy",
    `script-src 'nonce-${nombre_unique}'`,
  );
  res.send(content(nombre_unique));
});
```

À chaque requête, le serveur génère un nouveau nombre unique, l'insère dans la CSP et dans les balises {{HTMLElement("script")}} du document retourné. Remarquez que le serveur&nbsp;:

- génère un nouveau nombre unique pour chaque requête
- peut utiliser les nombres uniques avec des scripts externes et des scripts embarqués
- utilise le même nombre unique pour toutes les balises `<script>` du document

Il est important que le serveur utilise un moteur de templates pour insérer les nombres uniques, et qu'il ne les ajoute pas simplement à toutes les balises `<script>`&nbsp;: sinon, le serveur peut insérer involontairement des nombres uniques dans des scripts qui auraient été injectés par un·e attaquant·e.

Notez que les nombres uniques ne peuvent être utilisés que pour les éléments qui ont un attribut `nonce`&nbsp;: c'est-à-dire uniquement les éléments `<script>` et `<style>`.

#### Hachages

Les directives Fetch peuvent également utiliser un hachage du script pour garantir son intégrité. Avec cette méthode, le serveur&nbsp;:

1. calcule un hachage du contenu du script en utilisant une {{Glossary("hash function")}} (SHA-256, SHA-384 ou SHA-512)
2. crée un encodage {{Glossary("Base64")}} du résultat
3. ajoute un préfixe identifiant l'algorithme de hachage utilisé (l'un de `sha256-`, `sha384-` ou `sha512-`).

Le serveur ajoute ensuite le résultat à la directive&nbsp;:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Lorsque le navigateur reçoit le document, il calcule le hachage du script, compare le résultat avec la valeur de l'en-tête et ne charge le script que si les deux correspondent.

Les scripts externes doivent également inclure l'attribut [`integrity`](/fr/docs/Web/HTML/Reference/Elements/script#integrity) pour que cette méthode fonctionne.

Voici un extrait de code Express, à titre d'exemple&nbsp;:

```js
const hash1 = "sha256-ex2O7MWOzfczthhKm6azheryNVoERSFrPrdvxRtP8DI=";
const hash2 = "sha256-H/eahVJiG1zBXPQyXX0V6oaxkfiBdmanvfG9eZWSuEc=";

const csp = `script-src '${hash1}' '${hash2}'`;
const content = `
  <script src="./main.js" integrity="${hash2}"></script>
  <script>console.log("bonjour !");</script>
    <h1>Bonjour le monde</h1> 
    `;

app.get("/", (req, res) => {
  res.setHeader("Content-Security-Policy", csp);
  res.send(content);
});
```

Notez que&nbsp;:

- Nous avons un hachage distinct pour chaque script dans le document.
- Pour le script externe «&nbsp;main.js&nbsp;», nous incluons également l'attribut `integrity` et lui donnons la même valeur.
- Contrairement à l'exemple utilisant des nombres uniques, à la fois la CSP et le contenu peuvent être statiques, car les hachages restent les mêmes. Cela rend les politiques basées sur les hachages plus adaptées aux pages statiques ou aux sites Web qui s'appuient sur le rendu côté client.

#### Politiques basées sur les schémas

Les directives Fetch peuvent lister un schéma, comme `https:`, pour autoriser les ressources servies en utilisant ce schéma. Cela permet, par exemple, à une politique d'exiger HTTPS pour tous les chargements de ressources&nbsp;:

```http
Content-Security-Policy: default-src https:
```

#### Politiques basées sur l'emplacement

Les directives Fetch peuvent contrôler le chargement des ressources en fonction de l'endroit où elles se trouvent.

Le mot-clé `'self'` permet les ressources qui sont de la même origine que le document lui-même&nbsp;:

```http
Content-Security-Policy: img-src 'self'
```

Vous pouvez également définir un ou plusieurs noms d'hôtes, éventuellement en incluant des caractères génériques, et seules les ressources servies à partir de ces hôtes sont autorisées. Cela peut être utilisé, par exemple, pour autoriser le contenu à être servi à partir d'un CDN de confiance.

```http
Content-Security-Policy: img-src *.exemple.org
```

Vous pouvez définir plusieurs emplacements. La directive suivante autorise uniquement les images qui sont de la même origine que le document actuel, ou qui sont servies à partir d'un sous-domaine de «&nbsp;exemple.org&nbsp;», ou qui sont servies à partir de «&nbsp;example.com&nbsp;»&nbsp;:

```http
Content-Security-Policy: img-src 'self' *.exemple.org  example.com
```

#### JavaScript embarqué

Si une CSP contient soit une directive `default-src`, soit une directive `script-src`, alors le JavaScript embarqué n'est pas autorisé à s'exécuter sauf si des mesures supplémentaires sont prises pour l'activer. Cela inclut&nbsp;:

- JavaScript inclus à l'intérieur d'un élément `<script>` dans la page&nbsp;:

  ```html
  <script>
    console.log("Bonjour depuis un script embarqué");
  </script>
  ```

- JavaScript dans un attribut de gestionnaire d'évènements embarqué&nbsp;:

  ```html
  <img
    src="x"
    onerror="console.log('Bonjour depuis un gestionnaire d\'évènements embarqué')" />
  ```

- JavaScript dans une URL `javascript:`&nbsp;:

  ```html
  <a href="javascript:console.log('Bonjour depuis une URL javascript:')"
    >Cliquez-moi</a
  >
  ```

Le mot-clé `unsafe-inline` peut être utilisé pour contourner cette restriction. Par exemple, la directive suivante exige que toutes les ressources soient de la même origine, mais autorise le JavaScript embarqué&nbsp;:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Les développeur·euse·s doivent éviter `'unsafe-inline'`, car cela annule une grande partie de l'objectif d'avoir une CSP. Le JavaScript embarqué est l'un des vecteurs XSS les plus courants, et l'un des objectifs les plus fondamentaux d'une CSP est d'empêcher son utilisation incontrôlée.

Les éléments `<script>` embarqués sont autorisés s'ils sont protégés par un nonce ou un hash, comme décrit ci-dessus.

Si une directive contient des expressions de nonce ou de hash, alors le mot-clé `unsafe-inline` est ignoré par les navigateurs.

#### `eval()` et API similaires

Comme pour le JavaScript embarqué, si une CSP contient soit une directive `default-src`, soit une directive `script-src`, alors `eval()` et les API similaires ne sont pas autorisés à s'exécuter. Cela inclut, parmi d'autres API&nbsp;:

- [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval) lui-même&nbsp;:

  ```js
  eval('console.log("bonjour depuis eval()")');
  ```

- Le constructeur {{JSxRef("Function/Function()", "Function()")}}&nbsp;:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- L'argument de type chaîne de caractères pour {{DOMxRef("Window.setTimeout()", "setTimeout()")}} et {{DOMxRef("Window.setInterval()", "setInterval()")}}&nbsp;:

  ```js
  setTimeout("console.log('bonjour depuis setTimeout')", 1);
  ```

Le mot-clé `unsafe-eval` peut être utilisé pour contourner ce comportement, et comme pour `unsafe-inline`, et pour les mêmes raisons&nbsp;: **les développeur·euse·s doivent éviter `unsafe-eval`**.

Il peut parfois être difficile de supprimer les utilisations de `eval()` et des autres méthodes&nbsp;: dans ces situations, [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) peut rendre cela plus sûr, en s'assurant que l'entrée respecte une politique définie.
Le mot-clé `trusted-types-eval` doit être utilisé pour contourner le comportement dans ce cas.
Contrairement à `unsafe-inline`, il ne contourne le comportement que dans les navigateurs où les types de confiance sont pris en charge et activés&nbsp;; ce qui garantit que les méthodes restent bloquées dans les navigateurs qui ne prennent pas en charge les types de confiance.

Contrairement à `unsafe-inline`, le mot-clé `unsafe-eval` fonctionne toujours dans une directive qui contient des expressions de nombre unique ou de hachage.

### CSP stricte

Pour contrôler le chargement des scripts comme mesure de protection contre les attaques XSS, il est recommandé d'utiliser des directives de récupération basées sur des [nombres uniques](#nombres_uniques) ou des [hachages](#hachages). Cela s'appelle une _CSP stricte_. Ce type de CSP présente deux avantages principaux par rapport à une CSP basée sur l'emplacement (généralement appelée _CSP par liste blanche_)&nbsp;:

- Les CSP par liste blanche sont difficiles à configurer correctement et les politiques peuvent involontairement autoriser des domaines non sécurisés, ce qui ne fournit donc pas une protection efficace contre les attaques XSS (voir [CSP est morte, vive CSP&nbsp;! Sur l'insécurité des listes blanches et l'avenir de la politique de sécurité du contenu <sup>(angl.)</sup>](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Les CSP par liste blanche peuvent être très volumineuses et difficiles à maintenir, en particulier lorsqu'on utilise des scripts qui ne sont pas sous votre contrôle. Selon [Comment j'ai appris à ne plus m'inquiéter et à aimer la politique de sécurité du contenu <sup>(angl.)</sup>](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), pour intégrer Google Analytics, un·e développeur·euse doit ajouter 187 domaines Google à la liste blanche.

Une CSP stricte basée sur des nombres uniques ressemble à ceci&nbsp;:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

Dans cette CSP, nous&nbsp;:

- utilisons des nombres uniques pour contrôler les ressources JavaScript autorisées à se charger
- bloquons tous les objets intégrés
- bloquons toutes les utilisations de l'élément `<base>` pour définir une URI de base.

Une CSP stricte basée sur des hachages est similaire, sauf qu'elle utilise des hachages au lieu de nombres uniques&nbsp;:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Les directives basées sur des nombres uniques sont plus faciles à maintenir si vous pouvez générer des réponses, y compris le contenu lui-même, de manière dynamique. Sinon, vous devez utiliser des directives basées sur des hachages. Le problème avec les directives basées sur des hachages est que vous devez recalculer et réappliquer le hachage si des modifications sont apportées au contenu du script.

#### Le mot-clé `strict-dynamic`

Comme présenté ci-dessus, la CSP stricte est difficile à mettre en œuvre lorsque vous utilisez des scripts qui ne sont pas sous votre contrôle. Si un script tiers charge des scripts supplémentaires ou utilise des scripts inline, ça échoue, car le script tiers ne transmet pas le nombre unique ou le hachage.

Le mot-clé `strict-dynamic` est fourni pour aider à résoudre ce problème. C'est un mot-clé qui peut être inclus dans une directive de récupération, et il a pour effet que si un script a un nombre unique ou un hachage attaché, alors ce script est autorisé à charger d'autres scripts qui n'ont pas eux-mêmes de nombres uniques ou de hachages. Autrement dit, la confiance accordée à un script par un nombre unique ou un hachage est transmise aux scripts que le script original charge (et aux scripts qu'ils chargent, et ainsi de suite).

Par exemple, considérez un document comme ceci&nbsp;:

```html
<html lang="fr">
  <head>
    <script
      src="./main.js"
      integrity="sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk="></script>
  </head>
  <body>
    <h1>Page d'exemple&nbsp;!</h1>
  </body>
</html>
```

Il inclut un script «&nbsp;main.js&nbsp;», qui crée et ajoute un autre script, «&nbsp;main2.js&nbsp;»&nbsp;:

```js
console.log("bonjour");

const scriptElement = document.createElement("script");
scriptElement.src = `main2.js`;

document.head.appendChild(scriptElement);
```

Nous servons notre document avec une CSP comme ceci&nbsp;:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Le script «&nbsp;main.js&nbsp;» est autorisé à se charger, car son hachage correspond à la valeur dans la CSP. Mais sa tentative de charger «&nbsp;main2.js&nbsp;» échoue.

Si nous ajoutons `'strict-dynamic'` à la CSP, alors «&nbsp;main.js&nbsp;» est autorisé à charger «&nbsp;main2.js&nbsp;»&nbsp;:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Le mot-clé `'strict-dynamic'` facilite grandement la création et la maintenance de CSP basées sur des nombres uniques ou des hachages, surtout lorsqu'un site utilise des scripts tiers. Cependant, il rend votre CSP moins sécurisée, car si les scripts que vous incluez créent des éléments `<script>` à partir de sources potentielles de XSS, alors la CSP ne les protège pas.

#### Refactoriser le JavaScript embarqué et `eval()`

Nous avons vu ci-dessus que le JavaScript embarqué est interdit par défaut dans une CSP. Avec des nonces ou des hachages, un·e développeur·euse peut utiliser des balises `<script>` embarquées, mais il doit quand même refactoriser le code pour supprimer d'autres modèles interdits, y compris les gestionnaires d'évènements embarqués, les URL `javascript:` et les utilisations de `eval()`. Par exemple, les gestionnaires d'évènements embarqués devraient généralement être remplacés par des appels à {{DOMxRef("EventTarget.addEventListener()", "addEventListener()")}}&nbsp;:

```html example-bad
<p
  onclick="console.log('Bonjour depuis un gestionnaire d\'évènements embarqués')">
  cliquez sur moi
</p>
```

```html
<!-- accompagné du CSP suivant :
 `script-src 'sha256-AjYfua7yQhrSlg807yyeaggxQ7rP9Lu0Odz7MZv8cL0='`
 -->
<p id="bonjour">cliquez sur moi</p>
<script>
  const bonjour = document.querySelector("#bonjour");
  bonjour.addEventListener("click", () => {
    console.log("Bonjour depuis un script embarqué");
  });
</script>
```

## Protection contre le détournement de clics

La directive [`frame-ancestors`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) peut être utilisée pour contrôler quels documents, le cas échéant, sont autorisés à intégrer ce document dans un contexte de navigation imbriqué tel qu'un {{HTMLElement("iframe")}}. Il s'agit d'une protection efficace contre les attaques de type usurpation de clics, car ces attaques dépendent de l'intégration du site cible dans un site contrôlé par l'attaquant·e.

La syntaxe de `frame-ancestors` est un sous-ensemble de la syntaxe des directives de récupération&nbsp;: vous pouvez fournir la valeur de mot-clé unique `'none'` ou une ou plusieurs expressions de source. Cependant, les seules expressions de source que vous pouvez utiliser sont les schémas, les noms d'hôtes ou la valeur de mot-clé `'self'`.

Sauf si vous avez besoin que votre site soit intégrable, vous devriez définir `frame-ancestors` sur `'none'`&nbsp;:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Cette directive est un remplacement plus flexible de l'en-tête {{HTTPHeader("X-Frame-Options")}}.

## Mettre à niveau les requêtes non sécurisées

Les développeur·euse·s web sont fortement encouragé·e·s à servir tout leur contenu par HTTPS. Dans le processus de mise à niveau d'un site vers HTTPS, un site peut parfois servir le document principal par HTTPS mais servir ses ressources par HTTP, par exemple, en utilisant un balisage comme celui-ci&nbsp;:

```html
<script src="http://exemple.org/mon-chat.js"></script>
```

Ceci est appelé _contenu mixte_, et la présence de ressources non sécurisées affaiblit considérablement la protection offerte par HTTPS. Selon [l'algorithme de contenu mixte](/fr/docs/Web/Security/Defenses/Mixed_content) que les navigateurs mettent en œuvre, si un document est servi par HTTPS, les ressources non sécurisées sont classées en «&nbsp;contenu pouvant être mis à niveau&nbsp;» et «&nbsp;contenu pouvant être bloqué&nbsp;». Le contenu pouvant être mis à niveau est mis à niveau vers HTTPS, et le contenu pouvant être bloqué est bloqué, ce qui peut potentiellement casser la page.

La solution ultime au contenu mixte est que les développeur·euse·s chargent toutes les ressources par HTTPS. Cependant, même si un site est effectivement capable de servir tout le contenu par HTTPS, il peut encore être très difficile (ou même pratiquement impossible, en ce qui concerne le contenu archivé) pour un·e développeur·euse de réécrire toutes les URL que le site utilise pour charger des ressources.

La directive [`upgrade-insecure-requests`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) est destinée à résoudre ce problème. Cette directive n'a pas de valeur&nbsp;: pour la définir, il suffit d'inclure le nom de la directive&nbsp;:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Si cette directive est définie sur un document, alors le navigateur met automatiquement à niveau toutes les URL HTTP vers HTTPS dans les cas suivants&nbsp;:

- requêtes pour charger des ressources (comme des images, des scripts ou des polices)
- requêtes de navigation (comme les cibles de liens) qui sont de la même origine que le document
- requêtes de navigation dans des contextes de navigation imbriqués, tels que les iframes
- soumissions de formulaires

Cependant, les requêtes de navigation de niveau supérieur dont la cible est une origine différente ne sont pas mises à niveau.

Par exemple, supposons que le document disponible à l'adresse `https://exemple.org` soit fourni avec un CSP contenant la directive `upgrade-insecure-requests`, et que ce document contienne un balisage tel que celui-ci&nbsp;:

```html
<script src="http://exemple.org/mon-chat.js"></script>
<script src="http://mauvais-exemple.org/un-autre-chat.js"></script>
```

Le navigateur met automatiquement à niveau ces deux requêtes vers HTTPS.

Supposons que le document contienne également ceci&nbsp;:

```html
<a href="http://exemple.org/plus-de-chats">Voir encore plus de chats&nbsp;!</a>
<a href="http://mauvais-exemple.org/encore-plus-de-chats"
  >Encore plus de chats, sur un autre site&nbsp;!</a
>
```

Le navigateur met à niveau le premier lien vers HTTPS, mais pas le second, car il navigue vers une origine différente.

Cette directive ne remplace pas l'en-tête {{HTTPHeader("Strict-Transport-Security")}} (également connu sous le nom de HSTS), car elle ne met pas à niveau les liens externes vers un site. Les sites doivent inclure cette directive et l'en-tête `Strict-Transport-Security`.

## Exiger des types de confiance

Les directives [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) et [`trusted-types`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) permettent de se défendre contre les attaques côté client de type [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS), en s'assurant que toute entrée a été passée par une transformation pour la rendre sûre avant d'être transmise à une API de la plateforme web qui peut autrement l'exécuter en tant que code.
Les directives [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) et [`trusted-types`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) peuvent être utilisées pour appliquer [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API).
Cela permet de se défendre contre les attaques côté client de type [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS) en exigeant que toute entrée soit passée par une fonction de transformation, offrant ainsi la possibilité de la rendre sûre avant de l'envoyer à une API de la plateforme web qui peut autrement l'exécuter en tant que code.

### Puits d'injection et assainissement

Certaines API de la plateforme web sont connues sous le nom de _puits d'injection_. Ce sont des API auxquelles on peut passer des entrées, généralement sous forme de chaîne de caractères, et qui peuvent interpréter ces entrées comme du code. Dans ce guide, nous avons déjà vu `eval()`, mais il existe de nombreux autres puits d'injection, tels que {{DOMxRef("Element.innerHTML")}} ou {{DOMxRef("Document.write()")}}.

Si un·e attaquant·e peut fournir une entrée spécialement conçue à votre site web, et que votre site web la transmet à l'un de ces puits d'injection, alors l'attaquant·e peut exécuter du code malveillant.

Certains puits d'injection, comme `eval()`, sont très difficiles à utiliser en toute sécurité, et nous avons vu qu'une CSP les bloque généralement [entièrement](#eval_and_similar_apis). D'autres peuvent être rendus plus sûrs si l'entrée qui leur est transmise est traitée de manière à supprimer les éléments dangereux. Cette pratique est appelée [_assainissement_](/fr/docs/Web/Security/Attacks/XSS#assainissement).

### L'API Trusted Types

Avec [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API), vous pouvez passer des _types de confiance_ aux puits d'injection, au lieu de chaînes de caractères. Les types de confiance sont des objets qui résultent du passage d'une entrée potentiellement dangereuse à travers une fonction de transformation. Cette transformation assainit généralement l'entrée, en supprimant tout élément pouvant la rendre exécutable (comme les balises {{HTMLElement("script")}}).

Par défaut, votre code peut choisir de passer des types de confiance ou des chaînes de caractères qui n'ont pas été assainies aux puits d'injection. Cependant, si vous incluez la directive [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) dans votre CSP, et que vous lui donnez la valeur `'script'`, alors le navigateur n'autorise pas votre site à passer des types de confiance aux puits d'injection. Par exemple, le code suivant génère une exception&nbsp;:

```js example-bad
const possibleXSS = "<p>Je pourrais être une XSS</p>";
const cible = document.querySelector("#cible");

cible.innerHTML = possibleXSS;
// Lève une exception si `require-trusted-types-for` est défini
```

Les objets de types de confiance sont créés à l'aide d'un objet de _politique_ défini par l'utilisateur·ice. Votre code peut créer n'importe quel type d'objet de politique, y compris ceux dont la fonction de transformation n'assainit pas réellement l'entrée et, par conséquent, ne vous protège pas. Pour minimiser ce risque, vous pouvez inclure la directive [`trusted-types`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types). Cela répertorie les noms des politiques acceptables, et le navigateur n'autorise que l'utilisation de ces politiques nommées.

## Tester votre politique

Pour faciliter le déploiement, la CSP peut être déployée en mode de rapport uniquement. La politique n'est pas appliquée, mais toute violation est envoyée vers le point de terminaison (<i lang="en">endpoint</i> en anglais) de rapports défini dans la politique. De plus, un en‑tête de rapport uniquement permet de tester une future révision d'une politique sans la déployer réellement.

Vous pouvez utiliser l'en‑tête HTTP {{HTTPHeader("Content-Security-Policy-Report-Only")}} pour définir votre politique, comme ceci&nbsp;:

```http
Content-Security-Policy-Report-Only: policy
```

Si un en‑tête {{HTTPHeader("Content-Security-Policy-Report-Only")}} et un en‑tête {{HTTPHeader("Content-Security-Policy")}} sont présents dans la même réponse, les deux politiques sont prises en compte. La politique définie dans l'en‑tête `Content-Security-Policy` est appliquée tandis que la politique `Content-Security-Policy-Report-Only` génère des rapports mais n'est pas appliquée.

Notez que contrairement à une politique de sécurité de contenu normale, une politique de signalement uniquement ne peut pas être fournie dans un élément `<meta>`.

### Signaler des violations

La méthode recommandée pour signaler les violations de la CSP consiste à utiliser [l'API Reporting](/fr/docs/Web/API/Reporting_API), en déclarant les points de terminaison dans {{HTTPHeader("Reporting-Endpoints")}} et en définissant l'un d'entre eux comme cible de signalement CSP à l'aide de la directive {{CSP("report-to")}} de l'en-tête `Content-Security-Policy`.

> [!WARNING]
> Vous pouvez aussi utiliser la directive CSP {{CSP("report-uri")}} pour définir une URL cible pour les rapports de violation CSP.
> Cette directive envoie un format JSON légèrement différent par une opération `POST` avec un en‑tête {{HTTPHeader("Content-Type")}} de `application/csp-report`.
> Cette approche est obsolète, mais vous devriez déclarer les deux mécanismes tant que {{CSP("report-to")}} n'est pas pris en charge par tous les navigateurs.
> Pour plus d'informations sur cette approche, consultez le sujet {{CSP("report-uri")}}.

Un serveur peut informer les clients d'où envoyer les rapports en utilisant l'en‑tête de réponse HTTP {{HTTPHeader("Reporting-Endpoints")}}. Cet en‑tête définit une ou plusieurs URL de point de terminaison sous la forme d'une liste séparée par des virgules.
Par exemple, pour définir un point de terminaison de rapport nommé `csp-endpoint` qui accepte les rapports à `https://example.com/csp-reports`, l'en‑tête de réponse du serveur peut ressembler à ceci&nbsp;:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Si vous souhaitez disposer de plusieurs points de terminaison gérant différents types de rapports, vous devez les définir comme suit&nbsp;:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Vous pouvez ensuite utiliser la directive {{CSP("report-to")}} de l'en‑tête `Content-Security-Policy` pour indiquer qu'un point de terminaison particulier précédemment défini doit être utilisé pour le signalement.
Par exemple, pour envoyer les rapports de violation CSP vers `https://example.com/csp-reports` pour la directive `default-src`, vous pourriez envoyer les en‑têtes de réponse suivants&nbsp;:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Lorsqu'une violation de CSP se produit, le navigateur envoie le rapport au format JSON au point de terminaison défini, par une opération HTTP {{HTTPMethod("POST")}}, avec un en‑tête {{HTTPHeader("Content-Type")}} égal à `application/reports+json`.
Le rapport est la forme sérialisée de l'objet {{DOMxRef("CSPViolationReport")}} contenant une propriété `type` de valeur `"csp-violation"`.

Un objet typique peut ressembler à ceci&nbsp;:

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

Vous devez mettre en place un serveur capable de recevoir les rapports au format JSON et avec le type de contenu indiqué. Le serveur traitant ces requêtes peut ensuite stocker ou traiter les rapports entrants de la manière qui convient le mieux à vos besoins.

## Voir aussi

- [Les erreurs et avertissements CSP](/fr/docs/Web/HTTP/Guides/CSP/Errors)
- [Atténuer les scripts intersites avec une politique de sécurité de contenu stricte <sup>(angl.)</sup>](https://web.dev/articles/strict-csp) sur web.dev (2024)
- [Politique de sécurité de contenu&nbsp;: un succès entre durcissement et atténuation <sup>(angl.)</sup>](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Fiche de triche sur la politique de sécurité de contenu <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) sur owasp.org
- [Évaluateur CSP <sup>(angl.)</sup>](https://csp-evaluator.withgoogle.com/)
