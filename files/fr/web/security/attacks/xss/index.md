---
title: Script inter-site (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Une attaque de script inter-site (<abbr lang="en">XSS</abbr> pour <i lang="en">cross-site scripting</i>) est une attaque dans laquelle un·e attaquant·e parvient à faire exécuter du code malveillant par un site cible comme s'il faisait partie du site web.

## Vue d'ensemble

Un navigateur web télécharge du code depuis de nombreux sites web différents et l'exécute sur l'ordinateur de l'utilisateur·ice. Certains de ces sites sont très fiables, et l'utilisateur·ice doit les utiliser pour des opérations sensibles, telles que des transactions financières ou des conseils médicaux. Avec d'autres, comme un site de jeux occasionnels, l'utilisateur·ice peut ne pas avoir une telle relation de confiance. Le fondement du modèle de sécurité du navigateur est que ces sites doivent être maintenus séparés les uns des autres, de sorte que le code d'un site ne puisse pas accéder aux objets ou aux {{Glossary("credential", "identifiants")}} d'un autre site. Cela s'appelle la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).

![Diagramme de 2 sites dans les navigateurs, dans des mondes séparés](same-origin.svg)

Dans une attaque XSS réussie, l'attaquant·e est capable de contourner la politique de même origine en trompant le site cible pour qu'il exécute du code malveillant dans son propre contexte, comme s'il était de la même origine. Le code peut alors faire tout ce que le code du site peut faire, y compris, par exemple&nbsp;:

- Accéder et/ou modifier tout le contenu des pages chargées par le site, ainsi que tout contenu dans le stockage local
- Effectuer des requêtes HTTP avec les identifiants de l'utilisateur·ice, lui permettant de se faire passer pour l'utilisateur·ice ou d'accéder à des données sensibles

![Diagramme du code de l'attaquant s'exécutant sur le site cible](xss.svg)

Toutes les attaques XSS dépendent du fait qu'un site web fasse deux choses&nbsp;:

1. Acceptant des entrées qui peuvent avoir été conçues par un·e attaquant·e
2. Incluant ces entrées dans une page sans les _assainir_&nbsp;: c'est-à-dire sans s'assurer qu'elles ne sont pas exécutables en tant que JavaScript.

## Deux exemples de XSS

Dans cette section, nous allons examiner deux pages exemples qui sont vulnérables à une attaque XSS.

### Injection de code dans le navigateur

Dans cet exemple, supposons que le site web de la banque de l'utilisateur·ice soit `ma-banque.example.com`. L'utilisateur·ice est généralement connecté·e, et le code du site peut accéder aux détails du compte de l'utilisateur·ice et effectuer des transactions. Le site souhaite afficher un message de bienvenue personnalisé pour l'utilisateur·ice actuel·le. Il affiche le message de bienvenue dans un élément {{HTMLElement("Heading_Elements", "d'en-tête")}}&nbsp;:

```html
<h1 id="bienvenue"></h1>
```

La page s'attend à trouver le nom de l'utilisateur·ice actuel·le dans un [paramètre d'URL](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#paramètres). Elle extrait la valeur du paramètre et utilise cette valeur pour créer un message de bienvenue personnalisé&nbsp;:

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const bienvenue = document.querySelector("#bienvenue");

bienvenue.innerHTML = `Bienvenue, ${user} !`;
```

Supposons que cette page soit servie depuis `https://ma-banque.example.com/bienvenue`. Pour exploiter la vulnérabilité, un·e attaquant·e envoie à l'utilisateur·ice un lien comme celui-ci&nbsp;:

```html
<a
  href="https://ma-banque.example.com/bienvenue?user=<img src=x onerror=alert('bonjour!')>">
  Obtenez un chaton gratuit !</a
>
```

Lorsque l'utilisateur·ice clique sur le lien&nbsp;:

1. Le navigateur charge la page.
2. La page extrait le paramètre d'URL nommé `user`, dont la valeur est `<img src=x onerror=alert('bonjour!')>`.
3. La page assigne ensuite cette valeur à la propriété `innerHTML` de l'élément `bienvenue`, ce qui crée un nouvel élément HTML {{HTMLElement("img")}}, dont l'attribut `src` a pour valeur `x`.
4. Comme la valeur de `src` génère une erreur, la [propriété gestionnaire d'évènements](/fr/docs/Learn_web_development/Core/Scripting/Events#gestionnaires_dévènements_en_incise_%e2%80%94_ne_les_utilisez_pas) `onerror` est exécutée, et l'attaquant·e peut exécuter son code dans la page.

Dans ce cas, le code affiche simplement une alerte, mais sur un véritable site bancaire, le code de l'attaquant·e peut faire tout ce que le code frontal du site bancaire peut faire.

### Injection de code côté serveur

Dans cet exemple, considérons un site web avec une fonction de recherche. Le HTML de la page de recherche peut ressembler à ceci&nbsp;:

```html
<h1>Recherche</h1>

<form action="/results">
  <label for="maRecherche">Rechercher un élément&nbsp;:</label>
  <input id="maRecherche" type="search" name="search" />
  <input type="submit" />
</form>
```

Lorsque l'utilisateur·ice saisit un terme de recherche et clique sur «&nbsp;Rechercher&nbsp;», le navigateur envoie une requête GET à «&nbsp;/results&nbsp;», incluant le terme de recherche en tant que paramètre d'URL, comme ceci&nbsp;:

```plain
https://example.org/results?search=bananes
```

Le serveur veut afficher une liste de résultats de recherche, avec un titre indiquant ce que l'utilisateur·ice a recherché. Il extrait le terme de recherche du paramètre d'URL. Voici à quoi cela peut ressembler dans [Express](/fr/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)&nbsp;:

```js
app.get("/results", (req, res) => {
  const termeRecherche = req.query.search;
  const resultats = obtenirResultats(termeRecherche); // Implémentation non montrée
  res.send(`
   <h1>Vous avez recherché ${termeRecherche}</h1>
   <p>Voici les résultats : ${resultats}</p>`);
});
```

Pour exploiter cette vulnérabilité, un·e attaquant·e envoie à l'utilisateur·ice un lien comme ceci&nbsp;:

```html
<a
  href="http://example.org/results?search=<img src=x onerror=alert('bonjour')>">
  Obtenez un chaton gratuit !</a
>
```

Lorsque l'utilisateur·ice clique sur le lien&nbsp;:

1. Le navigateur envoie une requête GET au serveur. Le paramètre d'URL de la requête contient le code malveillant.
2. Le serveur extrait la valeur du paramètre d'URL et l'intègre dans la page.
3. Le serveur retourne la page au navigateur, qui l'exécute.

## Anatomie d'une attaque XSS

Comme toutes les attaques XSS, ces deux exemples sont possibles parce que le site web&nbsp;:

1. Utilise des entrées qui peuvent avoir été conçues par un·e attaquant·e
2. Inclut les entrées dans la page sans les _assainir_.

Ces deux exemples utilisent le même vecteur pour l'entrée malveillante&nbsp;: le paramètre d'URL. Cependant, les attaquant·e·s peuvent utiliser d'autres vecteurs.

Par exemple, imaginez un blog avec des commentaires. Dans ce cas, le site web&nbsp;:

1. Permet à n'importe qui d'envoyer des commentaires au moyen d'un élément HTML {{HTMLElement("form")}}
2. Stocke les commentaires dans une base de données
3. Inclut les commentaires dans les pages que le site web sert à d'autres utilisateur·ice·s.

Si les commentaires ne sont pas assainis, ils constituent des vecteurs potentiels pour les attaques XSS. Ce type d'attaque est parfois appelé XSS _stockée_ ou _persistante_, et est particulièrement grave, car le contenu infecté est servi à toutes les personnes qui accèdent à la page, à chaque accès.

### XSS côté client et côté serveur

Une différence majeure entre les deux exemples est que le code malveillant est injecté dans différentes parties de la base de code du site web, ce qui reflète l'architecture de chaque site.

Un site web qui utilise un rendu côté client, comme une {{Glossary("SPA", "application à page unique")}}, modifie les pages dans le navigateur au moyen d'API web telles que {{DOMxRef("document.createElement()")}}, directement ou indirectement avec une infrastructure comme React. C'est au cours de ce processus que l'injection XSS se produit. C'est ce que montre le premier exemple&nbsp;: le code malveillant est injecté dans le navigateur par un script exécuté dans la page, qui affecte la valeur du paramètre d'URL à la propriété {{DOMxRef("Element.innerHTML")}}, laquelle interprète cette valeur comme du code HTML.

Un site web qui utilise un rendu côté serveur construit les pages sur le serveur au moyen d'une infrastructure comme Django ou Express, le plus souvent en insérant des valeurs dans des modèles de page. Lorsque l'injection XSS se produit, elle a lieu sur le serveur pendant le processus de création du modèle. C'est ce que montre le deuxième exemple&nbsp;: le code est injecté sur le serveur par le code Express, qui insère la valeur du paramètre d'URL dans le document qu'il retourne. Le code d'attaque XSS s'exécute ensuite lorsque le navigateur évalue la page.

Dans les deux cas, l'approche générale de défense est la même, et la section suivante l'examine en détail. Cependant, les outils et les API spécifiques que vous utilisez sont différents.

## Défenses contre les attaques XSS

Si vous devez inclure une entrée externe dans les pages de votre site, vous disposez de deux défenses principales contre les attaques XSS&nbsp;:

1. Utilisez _l'encodage de sortie_ et _l'assainissement_ pour empêcher l'entrée de devenir exécutable. Si vous effectuez le rendu du contenu dans le navigateur, vous pouvez utiliser [l'API des types fiables](/fr/docs/Web/API/Trusted_Types_API) pour vous assurer que l'entrée passe par une fonction d'assainissement avant d'être incluse dans la page.
2. Utilisez une [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) (CSP) pour indiquer au navigateur quelles ressources JavaScript ou CSS il est autorisé à exécuter. Il s'agit d'une défense de secours&nbsp;: si la première défense échoue et qu'une entrée exécutable est incluse dans une page, une CSP correctement configurée doit empêcher le navigateur de l'exécuter.

### Encodage de sortie

Le processus appelé _encodage de sortie_ consiste à échapper les caractères de la chaîne de caractères d'entrée susceptibles de la rendre dangereuse, afin qu'ils soient traités comme du texte plutôt que comme des éléments d'un langage comme HTML.

C'est le choix approprié lorsque vous voulez traiter l'entrée comme du texte, par exemple parce que votre site utilise des modèles qui interpolent l'entrée dans le contenu, comme dans cet extrait de [modèle Django <sup>(angl.)</sup>](https://docs.djangoproject.com/en/5.1/ref/templates/language/)&nbsp;:

```django
<p>Vous avez recherché \{{ search_term }}.</p>
```

La plupart des moteurs modernes de création de modèles effectuent automatiquement l'encodage de sortie. Par exemple, le moteur de création de modèles Django effectue les conversions suivantes&nbsp;:

- `<` est converti en `&lt;`

- `>` est converti en `&gt;`

- `'` est converti en `&#x27;`

- `"` est converti en `&quot;`

- `&` est converti en `&amp;`

Cela signifie que si vous transmettez `<img src=x onerror=alert('XSS!')>` au modèle Django ci-dessus, il est converti en `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;`, qui s'affiche comme le texte suivant&nbsp;:

> Vous avez recherché &lt;img src=x onerror=alert('XSS!')&gt;.

De même, si vous effectuez un rendu côté client avec React, les valeurs intégrées dans JSX sont automatiquement encodées. Par exemple, considérez un composant JSX comme celui-ci&nbsp;:

```jsx
import React from "react";

export function App(props) {
  return <div>Bonjour, {props.name} !</div>;
}
```

Si nous transmettons `<img src=x onerror=alert('XSS!')>` à `props.name`, il s'affiche ainsi&nbsp;:

> Bonjour, &lt;img src=x onerror=alert('XSS!')&gt; !

L'un des éléments les plus importants pour prévenir les attaques XSS consiste à utiliser un moteur de création de modèles reconnu qui effectue un encodage de sortie robuste, puis à lire sa documentation pour comprendre les limites éventuelles de la protection qu'il offre.

#### Contextes de document

Même si vous utilisez un moteur de création de modèles qui encode automatiquement le HTML, vous devez savoir à quel endroit du document vous incluez du contenu non fiable. Par exemple, imaginez un modèle Django comme celui-ci&nbsp;:

```django
<div>\{{ ma_saisie }}</div>
```

Dans ce contexte, l'entrée se trouve entre les balises `<div>`, et le navigateur l'évalue donc comme du HTML. Vous devez donc vous protéger contre le cas où `ma_saisie` est du HTML qui définit du code exécutable, tel que `<img src=x onerror="alert('XSS')">`. L'encodage de sortie intégré à Django empêche cette attaque en encodant les caractères comme `<` et `>` en entités HTML `&lt;` et `&gt;`.

Cependant, imaginez que le modèle soit comme ceci&nbsp;:

```django
<div \{{ ma_saisie }}></div>
```

Dans ce contexte, le navigateur traite la variable `ma_saisie` comme un attribut HTML. Comme Django encode les guillemets (`"` → `&quot;`, `'` → `&#x27;`), la charge utile `onmouseover="alert('XSS')"` ne s'exécute pas.
Cependant, une charge utile sans guillemets comme `onmouseover=alert(1)` (ou utilisant des accents graves, ``onmouseover=alert(`XSS`)``) s'exécute toujours, car les valeurs d'attributs n'ont pas besoin d'être entre guillemets et les accents graves ne sont pas échappés par défaut.

Le navigateur utilise des règles différentes pour traiter les différentes parties d'une page web — les éléments HTML et leur contenu, les attributs HTML, les styles embarqués et les scripts embarqués. Le type d'encodage à effectuer varie selon le contexte dans lequel l'entrée est interpolée.

Ce qui est sûr dans un contexte peut être dangereux dans un autre. Il est donc nécessaire de comprendre le contexte dans lequel vous incluez du contenu non fiable et de mettre en œuvre tout traitement particulier qu'il exige.

- **Contextes HTML**&nbsp;: une entrée insérée entre les balises de la plupart des éléments HTML (à l'exception de {{HTMLElement("style")}} et de {{HTMLElement("script")}}) est interprétée comme du HTML. L'encodage appliqué par les moteurs de création de modèles concerne principalement ce contexte.
- **Contextes d'attributs HTML**&nbsp;: l'insertion d'une entrée comme valeur d'attribut HTML est parfois sûre et parfois dangereuse, selon l'attribut. En particulier, les attributs de gestionnaires d'évènements comme `onblur` sont dangereux, tout comme l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/iframe#src) de l'élément HTML {{HTMLElement("iframe")}}.

  Il est également important de placer les paramètres fictifs des valeurs d'attributs insérées entre guillemets, sinon un·e attaquant·e peut insérer un attribut dangereux supplémentaire dans la valeur fournie. Par exemple, ce modèle ne place pas la valeur insérée entre guillemets&nbsp;:

  ```django example-bad
  <div class=\{{ ma_classe }}>…</div>
  ```

  Un·e attaquant·e peut exploiter cela pour injecter un attribut de gestionnaire d'évènements, en utilisant une entrée comme `un_id onmouseover=alert(1)`. Pour empêcher l'attaque, placez le paramètre fictif entre guillemets&nbsp;:

  ```django example-good
    <div class="\{{ ma_classe }}">…</div>
  ```

- **Contextes JavaScript et CSS**&nbsp;: l'insertion d'une entrée dans les balises {{HTMLElement("script")}} ou {{HTMLElement("style")}} est presque toujours dangereuse.

### Assainissement

Les moteurs de création de modèles permettent généralement aux développeur·euse·s de désactiver l'encodage de sortie. Cela est nécessaire lorsque les développeur·euse·s veulent insérer du contenu non fiable comme du HTML et non comme du texte. Par exemple, dans Django, le filtre [`safe` <sup>(angl.)</sup>](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off) désactive l'encodage de sortie, et dans React, [`dangerouslySetInnerHTML` <sup>(angl.)</sup>](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) produit le même effet.

Dans ce cas, il revient à un·e développeur·euse de s'assurer que le contenu est sûr en l'assainissant.

Le processus appelé _assainissement_ consiste à supprimer les fonctionnalités dangereuses d'une chaîne de caractères HTML&nbsp;: par exemple, les balises {{HTMLElement("script")}} ou les gestionnaires d'évènements embarqués. Comme l'assainissement, tout comme l'encodage de sortie, est difficile à réaliser correctement, il est conseillé d'utiliser une bibliothèque tierce reconnue. [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify) est recommandée par de nombreux spécialistes, notamment des expert·e·s de [l'OWASP <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization).

Par exemple, considérez une chaîne de caractères HTML comme celle-ci&nbsp;:

```html
<div>
  <img src="x" onerror="alert('bonjour !')" />
  <script>
    alert("bonjour !");
  </script>
</div>
```

Si nous la transmettons à `DOMPurify`, elle retourne&nbsp;:

```html
<div>
  <img src="x" />
</div>
```

### Types de confiance

Disposer d'une fonction qui peut assainir une chaîne de caractères d'entrée donnée est une chose, mais trouver tous les endroits d'une base de code où les chaînes de caractères d'entrée doivent être assainies peut en soi être un problème très difficile.

Si vous implémentez un rendu côté client dans le navigateur, plusieurs API web sont dangereuses lorsqu'elles sont appelées avec du contenu non fiable et non assaini.

Par exemple, les API suivantes interprètent leurs arguments sous forme de chaînes de caractères comme du HTML et l'utilisent pour mettre à jour le DOM de la page&nbsp;:

- {{DOMxRef("Element.innerHTML")}} (également utilisée en interne par `dangerouslySetInnerHTML` de React)
- {{DOMxRef("Element.outerHTML")}}
- {{DOMxRef("Element.insertAdjacentHTML()")}}
- {{DOMxRef("Document.write()")}}

D'autres API exécutent directement leurs arguments comme du JavaScript. Par exemple&nbsp;:

- [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)
- {{DOMxRef("Window.setTimeout()")}} et {{DOMxRef("Window.setInterval()")}}

[L'API des types de confiance](/fr/docs/Web/API/Trusted_Types_API) permet aux développeur·euse·s de s'assurer que l'entrée est toujours assainie avant d'être transmise à l'une de ces API.

La directive CSP {{CSP("require-trusted-types-for")}} est essentielle pour imposer l'utilisation de types de confiance. Si cette directive est définie, la transmission d'arguments sous forme de chaînes de caractères aux API dangereuses lève une exception&nbsp;:

```js example-bad
const saisieUtilisateur = "Je pourrais être du XSS";
const element = document.querySelector("#conteneur");

element.innerHTML = saisieUtilisateur; // Lève une TypeError
```

À la place, un·e développeur·euse doit transmettre un _type de confiance_ à l'une de ces API. Un type de confiance est un objet créé à partir d'une chaîne de caractères par un objet {{DOMxRef("TrustedTypePolicy")}}, dont l'implémentation est définie par un·e développeur·euse. Par exemple&nbsp;:

```js example-good
// Crée une politique qui peut créer des valeurs TrustedHTML
// en assainissant les chaînes de caractères d'entrée avec la bibliothèque DOMPurify.
const assainisseur = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});

const saisieUtilisateur = "Je pourrais être du XSS";
const element = document.querySelector("#conteneur");

const HTMLDeConfiance = assainisseur.createHTML(saisieUtilisateur);
element.innerHTML = HTMLDeConfiance;
```

> [!NOTE]
> L'API des types de confiance ne fournit pas de fonction d'assainissement&nbsp;: il s'agit d'un cadriciel dans lequel un·e développeur·euse peut s'assurer qu'une fonction d'assainissement fournie par ses soins a été appelée. Dans l'exemple ci-dessus, un·e développeur·euse utilise DOMPurify comme assainisseur pour les points d'injection HTML, dans le cadriciel des types de confiance.

L'API des types de confiance n'est pas encore correctement prise en charge par tous les navigateurs, mais sa prise en charge constitue une défense importante contre les attaques XSS fondées sur le DOM.

### Déployer une CSP

L'encodage de sortie et l'assainissement visent à empêcher les scripts malveillants d'entrer dans les pages d'un site. L'une des principales fonctions d'une politique de sécurité du contenu consiste à empêcher l'exécution des scripts malveillants même lorsqu'ils se trouvent dans les pages d'un site. Il s'agit donc d'une défense de secours si les autres défenses échouent.

Une approche recommandée pour atténuer les XSS avec une CSP est une [CSP stricte](/fr/docs/Web/HTTP/Guides/CSP#strict_csp), qui utilise un [nombre unique](/fr/docs/Web/HTTP/Guides/CSP#nombres_uniques) ou un [hachage](/fr/docs/Web/HTTP/Guides/CSP#hachages) pour indiquer au navigateur quels scripts il s'attend à voir dans le document. Si un·e attaquant·e parvient à insérer des éléments `<script>` malveillants, ils n'ont pas le bon {{Glossary("Nonce", "nombre unique")}} ou hachage, et le navigateur ne les exécute pas. De plus, divers vecteurs XSS courants sont complètement interdits&nbsp;: les gestionnaires d'évènements en incise, les URL `javascript:` et les API comme `eval()` qui exécutent leurs arguments en tant que JavaScript.

## Liste de contrôle récapitulative de la défense

- Lorsque vous interpolez une entrée dans une page, dans le navigateur ou sur le serveur, utilisez un moteur de création de modèles qui effectue un encodage de sortie.
- Soyez conscient·e du contexte dans lequel vous interpolez l'entrée et assurez-vous que l'encodage de sortie approprié est effectué dans ce contexte.
- Si vous devez inclure une entrée comme du HTML, assainissez-la au moyen d'une bibliothèque reconnue. Si vous effectuez cette opération dans le navigateur, utilisez l'infrastructure des types fiables pour vous assurer que l'entrée est traitée par votre fonction d'assainissement.
- Mettez en œuvre une CSP stricte.

## Voir aussi

- [Antisèche de prévention des scripts inter-sites <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) sur [owasp.org <sup>(angl.)</sup>](https://owasp.org/)
