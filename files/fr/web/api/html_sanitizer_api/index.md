---
title: API HTML Sanitizer
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: 4266e1369e9b1f998cc4ffa8bf3ca2f4489c2f66
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

**L'API HTML Sanitizer** permet aux développeur·euse·s de prendre des chaînes de caractères HTML et de filtrer les éléments, attributs et autres entités HTML indésirables lorsqu'ils sont insérés dans le DOM ou un DOM d'ombre (<i lang="en">shadow DOM</i> en anglais).

## Concepts et utilisation

Les applications web ont souvent besoin de travailler avec du HTML non fiable côté client, par exemple, dans le cadre d'une solution de modèle côté client, lors du rendu de contenu généré par les utilisateur·ice·s, ou si elles incluent des données dans un cadre provenant d'un autre site.

L'injection de HTML qui n'est pas fiable peut rendre un site vulnérable à différent [types d'attaques](/fr/docs/Web/Security/Attacks).
En particulier, [les attaques par script intersite (XSS)](/fr/docs/Web/Security/Attacks/XSS) fonctionnent en injectant du HTML non fiable dans le DOM, ce qui exécute ensuite du JavaScript dans le contexte de l'origine actuelle — permettant au code malveillant de s'exécuter comme s'il provenait de l'origine du site.
Ces attaques peuvent être atténuées en supprimant les éléments et attributs HTML non sécurisés avant qu'ils ne soient injectés dans le DOM.

L'API HTML Sanitizer fournit un certain nombre de méthodes pour supprimer les entités HTML indésirables des entrées HTML avant qu'elles ne soient injectées dans le DOM.
Ces méthodes existent en versions sécurisées contre les XSS, qui garantissent la suppression de tous les éléments et attributs non sécurisés, et en versions potentiellement non sécurisées, qui donnent aux développeur·euse·s un contrôle total sur les entités HTML autorisées.

### Méthodes d'assainissement

L'API HTML Sanitizer fournit des méthodes sécurisées et non sécurisées pour injecter des chaînes de caractères HTML dans un élément ({{DOMxRef('Element')}}) ou une racine d'ombre ({{DOMxRef('ShadowRoot')}}) et pour analyser du HTML dans le document ({{DOMxRef('Document')}}).

- Méthodes sécurisées&nbsp;: {{DOMxRef('Element.setHTML()')}}, {{DOMxRef('ShadowRoot.setHTML()')}} et {{DOMxRef('Document/parseHTML_static','Document.parseHTML()')}}.
- Méthodes non sécurisées&nbsp;: {{DOMxRef('Element.setHTMLUnsafe()')}}, {{DOMxRef('ShadowRoot.setHTMLUnsafe()')}} et {{DOMxRef('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}.

Toutes les méthodes prennent le HTML à injecter et une [configuration de l'assainisseur](#configuration_dassainisseur) optionnelle comme arguments.
La configuration définit les entités HTML qui seront filtrées de l'entrée avant qu'elle ne soit injectée.
Les méthodes de l'objet {{DOMxRef('Element')}} sont conscientes du contexte et supprimeront également tout élément que la spécification HTML n'autorise pas dans l'élément cible.

Les méthodes sécurisées suppriment toujours les éléments et attributs non sécurisés contre le XSS.
Si aucun assainisseur n'est passé en paramètre, elles utilisent la configuration par défaut de l'assainisseur, qui autorise tous les éléments et attributs sauf ceux connus pour être non sécurisés, tels que les éléments HTML {{HTMLElement("script")}} et les gestionnaires d'évènements `onclick`.
Si un assainisseur personnalisé est utilisé, il est implicitement mis à jour pour supprimer tous les éléments et attributs qui ne sont pas sécurisés contre les attaques XSS (notez que l'assainisseur passé n'est pas modifié et peut toujours autoriser des entités non sécurisées s'il est utilisé avec une méthode non sécurisée).

Les méthodes sécurisées doivent être utilisées à la place de {{DOMxRef("Element.innerHTML")}}, {{DOMxRef("Element.outerHTML")}}, ou {{DOMxRef("ShadowRoot.innerHTML")}}, pour injecter du contenu HTML non fiable.
Par exemple, dans la plupart des cas, vous pouvez utiliser {{DOMxRef('Element.setHTML()')}} avec l'assainisseur par défaut comme remplacement direct de {{DOMxRef("Element.innerHTML")}}.
Les mêmes méthodes peuvent également être utilisées pour injecter des chaînes de caractères HTML fiables qui n'ont pas besoin de contenir des éléments non sécurisés contre le XSS.

Les méthodes non sécurisées utiliseront la configuration de l'assainisseur qui est passée en argument.
Si aucun assainisseur n'est passé, alors tous les éléments et attributs HTML autorisés par le contexte seront injectés.
Ceci est similaire à l'utilisation de {{DOMxRef("Element.innerHTML")}}, sauf que la méthode analysera les racines d'ombre, supprimera les éléments qui ne sont pas appropriés dans le contexte, et permettra certains autres éléments qui ne sont pas autorisés lors de l'utilisation de la propriété.

Les méthodes non sécurisées ne doivent être utilisées qu'avec du HTML non fiable qui doit contenir certains éléments ou attributs non sécurisés contre le XSS.
C'est toujours dangereux, mais cela permet de réduire le risque en limitant les entités non sécurisées au strict minimum.
Par exemple, si vous souhaitez injecter du HTML non sécurisé mais que pour une raison quelconque vous devez inclure le gestionnaire `onblur`, vous pouvez le faire de façon plus sûre en modifiant l'assainisseur par défaut et en utilisant une méthode non sécurisée comme suit&nbsp;:

```js
const assainisseur = new Sanitizer(); // Nettoyeur par défaut
assainisseur.allowAttribute("onblur"); // Autoriser onblur

unElementCible.setHTMLUnsafe(chaineNonSure, { assainisseur });
```

### Configuration de l'assainisseur

La configuration d'un assainisseur définit quelles entités HTML seront autorisées, remplacées ou supprimées lorsque l'assainisseur est utilisé, y compris les éléments, les attributs, les attributs `data-*` et les commentaires.

Il existe deux interfaces de configuration d'assainisseur très étroitement liées, dont l'une ou l'autre peut être passée à toutes les méthodes d'assainissement.

- {{DOMxRef('SanitizerConfig')}} est un objet dictionnaire qui définit des tableaux pour les éléments et attributs autorisés/interdits et des propriétés booléennes qui indiquent si les commentaires et les attributs de données seront autorisés ou omis, et ainsi de suite.

  Seul un sous-ensemble des options de configuration possibles peut être défini dans une configuration particulière afin de réduire la redondance et l'ambiguïté.
  Le sous-ensemble autorisé est résumé dans la section [Configurations d'autorisation et de suppression](#configurations_dautorisation_et_de_suppression) ci-dessous, et décrit en détail dans [Configuration valide](/fr/docs/Web/API/SanitizerConfig#configuration_valide).

- {{DOMxRef('Sanitizer')}} est essentiellement une enveloppe autour d'un objet {{DOMxRef('SanitizerConfig')}} qui fournit des méthodes pour modifier ergonomiquement la configuration et s'assurer qu'elle reste valide.

  Par exemple, vous pouvez utiliser une méthode pour ajouter un élément autorisé, et elle supprimera également l'élément du tableau `replaceWithChildrenElements` (si présent).
  L'interface fournit également des méthodes pour retourner une copie de l'objet {{DOMxRef('SanitizerConfig')}} sous-jacent et pour mettre à jour l'assainisseur afin qu'il soit sûr contre les XSS.
  Elle peut fournir des normalisations de la configuration de l'assainisseur utilisée pour le construire, ce qui facilite sa compréhension et sa réutilisation.

Bien que vous puissiez utiliser l'une ou l'autre interface dans toutes les méthodes d'assainissement, `Sanitizer` est probablement plus efficace à partager et à réutiliser que `SanitizerConfig`.

#### Configurations d'autorisation et de suppression

Vous pouvez créer une configuration de deux manières&nbsp;:

- En tant que _configuration d'autorisation_&nbsp;: en définissant l'ensemble des éléments et/ou attributs que vous autoriserez dans la sortie.
- En tant que _configuration de suppression_&nbsp;: en définissant l'ensemble des éléments et/ou attributs qui ne doivent pas être présents dans la sortie.

Ces ensembles sont définis sous forme de tableaux dans les champs de l'objet de configuration&nbsp;: `elements` et `attributes`, ainsi que `removeElements` et `removeAttributes`.
Vous ne pouvez pas définir à la fois des tableaux d'autorisation et de suppression pour les éléments ou les attributs dans la même configuration, mais d'autres combinaisons de champs sont autorisées.
Le tableau suivant montre les combinaisons autorisées.

| Tableaux d'éléments           | Tableaux d'attributs              | Valide ? |
| ----------------------------- | --------------------------------- | -------- |
| `elements`                    | -                                 | ✔️       |
| `elements`                    | `attributes`                      | ✔️       |
| `elements`                    | `removeAttributes`                | ✔️       |
| `removeElements`              | -                                 | ✔️       |
| `removeElements`              | `attributes`                      | ✔️       |
| `removeElements`              | `removeAttributes`                | ✔️       |
| -                             | `attributes`                      | ✔️       |
| -                             | `removeAttributes`                | ✔️       |
| `elements` + `removeElements` | (n'importe)                       | ❌       |
| (n'importe)                   | `attributes` + `removeAttributes` | ❌       |
| -                             | -                                 | ✔️       |

Une configuration d'autorisation peut éventuellement définir si les attributs par élément doivent être autorisés et/ou supprimés dans son tableau `elements`.
La configuration autorisée pour ces attributs locaux dépend de la définition ou non des attributs globaux `attributes` ou `removeAttributes`.
La section [Configuration valide](/fr/docs/Web/API/SanitizerConfig#configuration_valide) expose les restrictions.

De manière générale, une «&nbsp;configuration autorisée&nbsp;» est plus sûre pour les éléments et les attributs, car vous listez les éléments et/ou attributs que vous souhaitez et que vous savez sûrs, plutôt que tous les éléments qui sont dangereux ou pourraient potentiellement être considérés comme dangereux à l'avenir.
Si vous définissez un objet de configuration vide, une configuration d'autorisation vide est utilisée.

##### Configurations d'autorisation

Avec les «&nbsp;configurations autorisées&nbsp;», vous définissez les éléments et attributs que vous souhaitez _autoriser_ (ou remplacer par des éléments enfants) — tous les autres éléments/attributs dans l'entrée seront supprimés.
Cela permet de comprendre facilement quels éléments seront autorisés dans le DOM lorsque le HTML est analysé.
Elles sont utiles lorsque vous savez exactement quelles entités HTML vous souhaitez pouvoir injecter dans un contexte particulier.

Les configurations autorisées sont créées en définissant un `Sanitizer` qui enveloppe un {{DOMxRef("SanitizerConfig")}} incluant les tableaux [`elements`](/fr/docs/Web/API/SanitizerConfig#éléments) et/ou [`attributes`](/fr/docs/Web/API/SanitizerConfig#attributs) (et non les tableaux `removeElements` ou `removeAttributes`).

Par exemple, la configuration suivante est créée en passant un {{DOMxRef('SanitizerConfig')}} qui autorise les éléments HTML {{HTMLElement("p")}} et {{HTMLElement("div")}}, ainsi que les attributs `cite` et `onclick` sur tout élément autorisé.
Elle remplacera également les éléments HTML {{HTMLElement("b")}} par leurs nœuds enfants.

```js
const assainisseur = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

La même configuration peut également être créée en utilisant les méthodes de {{DOMxRef('Sanitizer')}}.
On notera que dans le code suivant, le constructeur `Sanitizer()` prend un objet vide, ce qui donne un `Sanitizer` dont la configuration sous-jacente inclut à la fois les tableaux `elements` et `attributes` — en d'autres termes, une «&nbsp;configuration autorisée&nbsp;».

```js
// Créer un assainisseur vide
const assainisseur = new Sanitizer({});

// Utiliser les méthodes de Sanitizer pour mettre à jour les propriétés.
assainisseur.allowElement("p");
assainisseur.allowElement("div");
assainisseur.replaceElementWithChildren("b");
assainisseur.allowAttribute("cite");
assainisseur.allowAttribute("onclick");
```

##### Configurations de suppression

Dans les «&nbsp;configurations de suppression&nbsp;» vous définissez les éléments et attributs HTML que vous souhaitez supprimer&nbsp;: tous les autres éléments et attributs sont autorisés par l'assainisseur (mais peuvent être bloqués si vous utilisez une méthode d'assainissement sécurisée, ou si l'élément n'est pas autorisé dans le contexte).

Les configurations de suppression sont créées en utilisant un {{DOMxRef("SanitizerConfig")}} qui inclut les tableaux [`removeElements`](/fr/docs/Web/API/SanitizerConfig#removeelements) et/ou [`removeAttributes`](/fr/docs/Web/API/SanitizerConfig#removeattributes) (et non les tableaux `elements` ou `attributes`).

Par exemple, la configuration suivante de `Sanitizer` supprimerait les mêmes éléments qui étaient autorisés dans le code précédent&nbsp;:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

La configuration peut aussi être créée en utilisant les méthodes de l'objet {{DOMxRef('Sanitizer')}}.
Pour créer une «&nbsp;configuration de suppression&nbsp;» nous devons déclarer les tableaux `removeElements` ou `removeAttributes` lorsque nous construisons l'objet (si un seul tableau est défini, l'autre sera défini dans le cadre de la normalisation).

```js
const sanitizer = new Sanitizer({
  removeElements: [],
});
sanitizer.removeElement("p");
sanitizer.removeElement("div");
sanitizer.replaceElementWithChildren("b");
sanitizer.removeAttribute("cite");
sanitizer.removeAttribute("onclick");
```

#### Ajout et suppression dans les configurations `Sanitizer`

{{DOMxRef("Sanitizer")}} est recommandé lorsque vous utilisez un objet de configuration que vous souhaitez réutiliser ou modifier.
Le fait que l'assainisseur dispose d'une configuration d'autorisation ou de suppression dépend de l'objet {{DOMxRef("SanitizerConfig")}} passé lors de la création de l'objet.
Par exemple, si vous transmettez un objet de configuration qui contient le tableau `elements` ou `attributes` (ou un objet vide), l'assainisseur disposera d'une configuration d'autorisation.

Dans les exemples ci-dessus, nous avons créé une configuration d'autorisation, puis appelé {{DOMxRef("Sanitizer/allowElement","allowElement()")}}, {{DOMxRef("Sanitizer/allowAttribute","allowAttribute()")}} et {{DOMxRef("Sanitizer/replaceElementWithChildren","replaceElementWithChildren()")}} pour autoriser des éléments et des attributs supplémentaires, et de même nous avons créé une configuration de suppression et appelé {{DOMxRef("Sanitizer/removeElement","removeElement()")}} et {{DOMxRef("Sanitizer/removeAttribute","removeAttribute()")}} pour définir des éléments supplémentaires à supprimer.

Vous pouvez également appeler les méthodes autorisées sur une configuration supprimée et les méthodes supprimées sur une configuration autorisée — mais elles se comportent différemment.
Lorsque vous appelez les méthodes autorisées sur un assainisseur autorisé, les éléments et attributs définis sont ajoutés aux tableaux sous-jacents `elements` et `attributes`.
Cependant, si vous appelez ces méthodes sur un assainisseur supprimé, il n'y a pas de tableaux `elements` et `attributes`&nbsp;; à la place, l'élément défini est _supprimé_ du tableau `removeElements` ou `removeAttributes` correspondant, s'il existe.
Cela fonctionne car autoriser un élément dans un assainisseur d'autorisation revient à «&nbsp;ne pas supprimer&nbsp;» un élément dans un assainisseur de suppression.

Vous pouvez appeler toutes les méthodes de `Sanitizer` sur un assainisseur d'autorisation ou de suppression, et la méthode effectuera les modifications possibles qui aboutissent à une configuration valide.
Par exemple, si vous ajoutez un élément, la méthode l'ajoutera soit à `elements`, soit le supprimera de `removeElements` s'il est présent, selon le type d'assainisseur, et supprimera également cet élément du tableau [`replaceWithChildrenElements`](/fr/docs/Web/API/SanitizerConfig#replacewithchildrenelements), s'il est présent.

Certaines opérations possibles pour une configuration d'autorisation ne le sont pas pour une configuration de suppression.
Par exemple, les attributs par élément sont définis dans le tableau `elements`, qui n'est pas présent dans un assainisseur de suppression.

Les méthodes retournent `true` ou `false` pour indiquer si elles ont modifié ou non la configuration sous-jacente.
Ainsi, si vous appelez `allowElement()` sur une configuration d'autorisation et que l'élément défini n'est pas présent, il sera ajouté au tableau `elements` et la méthode retournera `true`.
Mais si l'élément est déjà présent, la méthode retournera `false`.
Notez que si vous appelez la même méthode pour définir un attribut par élément, cela retournera `false` si appelé sur un assainisseur de suppression, car la modification ne peut pas être effectuée.

### Nettoyage et types fiables

[L'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) fournit des mécanismes pour s'assurer que les entrées sont passées par une fonction de transformation définie par l'utilisateur·ice avant d'être transmises à une API qui pourrait exécuter cette entrée.
Cette fonction de transformation est le plus souvent utilisée pour assainir l'entrée, mais ce n'est pas obligatoire&nbsp;: l'objectif principal de l'API est de faciliter l'audit du code d'assainissement par les développeur·euse·s, et non de définir comment ou si l'assainissement est effectué.

Les méthodes d'assainissement HTML sécurisées n'utilisent pas de types fiables.
Comme elles filtrent toujours toutes les entités XSS non sécurisées avant que le HTML d'entrée ne soit injecté, il n'est pas nécessaire d'assainisser la chaîne de caractères d'entrée ou d'auditer les méthodes.

Cependant, les méthodes d'assainissement HTML non sécurisées peuvent injecter du HTML non fiable, selon l'assainisseur, et fonctionneront donc avec des types fiables.
Les méthodes peuvent prendre soit une chaîne de caractères, soit un `TrustedType` en entrée.
Si un assainisseur est également fourni, la fonction de transformation sera exécutée en premier, puis l'assainisseur.

On notera que le comportement de la fonction de transformation dans ce cas dépendra de la politique du site Web (qui pourrait être de rejeter toute utilisation des méthodes non sécurisées).

### Bibliothèques d'assainissement tierces

Avant l'API Sanitizer, les développeur·euse·s filtraient généralement les chaînes de caractères d'entrée en utilisant des bibliothèques tierces telles que [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify), peut-être appelées à partir de fonctions de transformation dans les types fiables.

Ces bibliothèques ne devraient pas être nécessaires lors de l'utilisation des méthodes d'assainissement HTML sécurisées, car l'API est intégrée au navigateur et est plus consciente du contexte d'analyse et du code autorisé à s'exécuter que les bibliothèques d'analyse externes.

Elles peuvent être utiles avec les méthodes HTML non sécurisées et les types fiables, en fonction des politiques de types fiables du site Web.

## Interfaces

- {{DOMxRef('Sanitizer')}}
  - : Objet de configuration réutilisable qui définit les éléments et attributs autorisés/supprimés lors de l'assainissement des chaînes de caractères HTML non fiables.
    Il est utilisé dans les méthodes qui insèrent des chaînes de caractères HTML dans le DOM ou le Document.
- {{DOMxRef('SanitizerConfig')}}
  - : Un dictionnaire qui définit une configuration d'assainisseur.
    Cela peut être utilisé aux mêmes endroits que {{DOMxRef('Sanitizer')}}, mais il est probablement moins efficace à utiliser et à réutiliser.

## Extensions à d'autres interfaces

### Méthodes sûres contre le XSS

- {{DOMxRef('Element.setHTML()')}}
  - : Analyse une chaîne de caractères HTML en une sous-arborescence de nœuds, en supprimant tous les éléments invalides dans le contexte de l'élément.
    Supprime ensuite tous les éléments et attributs non autorisés par la configuration de l'assainisseur, ainsi que tous ceux considérés comme non sécurisés au regard des XSS (même s'ils sont autorisés par la configuration).
    La sous-arborescence est ensuite insérée dans le DOM en tant que sous-arborescence de l'élément.
- {{DOMxRef('ShadowRoot.setHTML()')}}
  - : Analyse une chaîne de caractères HTML en une sous-arborescence de nœuds.
    Supprime ensuite tous les éléments et attributs non autorisés par la configuration de l'assainisseur, ainsi que tous ceux considérés comme non sécurisés au regard des XSS (même s'ils sont autorisés par la configuration).
    La sous-arborescence est ensuite insérée en tant que sous-arborescence du `ShadowRoot`.
- {{DOMxRef('Document/parseHTML_static','Document.parseHTML()')}}
  - : Analyse une chaîne de caractères HTML en une sous-arborescence de nœuds.
    Supprime ensuite tous les éléments et attributs non autorisés par la configuration de l'assainisseur, ainsi que tous ceux considérés comme non sécurisés au regard des XSS (même s'ils sont autorisés par la configuration).
    La sous-arborescence est ensuite définie comme racine du {{DOMxRef("Document")}}.

### Méthodes non sécurisées contre le XSS

- {{DOMxRef('Element.setHTMLUnsafe()')}}
  - : Analyse une chaîne de caractères HTML en une sous-arborescence de nœuds, en supprimant tous les éléments invalides dans le contexte de l'élément.
    Supprime ensuite tous les éléments et attributs non autorisés par l'assainisseur&nbsp;: si aucun assainisseur n'est défini, tous les éléments sont autorisés.
    La sous-arborescence est ensuite insérée dans le DOM en tant que sous-arborescence de l'élément.
- {{DOMxRef('ShadowRoot.setHTMLUnsafe()')}}
  - : Analyse une chaîne de caractères HTML en une sous-arborescence de nœuds.
    Supprime ensuite tous les éléments et attributs non autorisés par l'assainisseur&nbsp;: si aucun assainisseur n'est défini, tous les éléments sont autorisés.
    La sous-arborescence est ensuite insérée en tant que sous-arborescence du `ShadowRoot`.
- {{DOMxRef('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}
  - : Analyse une chaîne de caractères HTML en une sous-arborescence de nœuds.
    Supprime ensuite tous les éléments et attributs non autorisés par l'assainisseur&nbsp;: si aucun assainisseur n'est défini, tous les éléments sont autorisés.
    La sous-arborescence est ensuite définie comme racine du {{DOMxRef("Document")}}.

## Exemples

Les exemples suivants montrent comment utiliser l'API d'assainissement en utilisant l'assainisseur _par défaut_ (au moment de la rédaction, les opérations de configuration ne sont pas encore prises en charge).

### Utiliser `Element.setHTML()` avec l'assainisseur par défaut

Dans la plupart des cas, appeler `Element.setHTML()` sans passer d'assainisseur peut être utilisé comme un remplacement direct de {{DOMxRef("Element.innerHTML")}}.
Le code ci-dessous montre comment la méthode est utilisée pour assainir l'entrée HTML avant qu'elle ne soit injectée dans un élément avec l'identifiant `target`.

```js
const chaineNonSure = "abc <script>alert(1)<" + "/script> def"; // HTML non sûr (peut provenir de l'entrée utilisateur·ice)
const unElementCible = document.getElementById("target");

// unElementCible.innerHTML = chaineNonSure;
unElementCible.setHTML(chaineNonSure);

console.log(unElementCible.innerHTML); // abc def
```

L'élément HTML {{HTMLElement("script")}} n'est pas autorisé par l'assainisseur par défaut, ni par la méthode `setHTML()`, donc l'alerte est supprimée.

Notez que l'utilisation de `Element.setHTMLUnsafe()` avec l'assainisseur par défaut va assainir les mêmes entités HTML.
La principale différence est que si vous utilisez cette méthode avec Trusted Types, elle peut toujours être auditée&nbsp;:

```js
unElementCible.setHTMLUnsafe(chaineNonSure);
```

### Utiliser une configuration d'assainisseur autorisant certains éléments

Ce code montre comment vous pourriez utiliser `Element.setHTMLUnsafe()` avec un assainisseur autorisant uniquement les éléments HTML {{HTMLElement("p")}}, {{HTMLElement("b")}} et {{HTMLElement("div")}}.
Tous les autres éléments de la chaîne de caractères d'entrée seraient supprimés.

```js
const assainisseur = new Sanitizer({ elements: ["p", "b", "div"] });
unElementCible.setHTMLUnsafe(chaineNonSure, { assainisseur });
```

Notez que dans ce cas, vous devriez normalement utiliser `setHTML()`.
Vous ne devriez utiliser `Element.setHTMLUnsafe()` que si vous devez autoriser des éléments ou des attributs non sécurisés contre les XSS.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
