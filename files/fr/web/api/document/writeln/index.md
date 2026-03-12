---
title: "Document : méthode writeln()"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("DOM")}}{{Deprecated_Header}}

> [!WARNING]
> Cette méthode analyse son entrée comme du HTML, écrivant le résultat dans le DOM.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concept_et_utilisation) et peuvent être un vecteur potentiel pour des [attaques inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), si l'entrée provient initialement d'un attaquant.
>
> Vous pouvez atténuer ce risque en passant toujours des objets `TrustedHTML` au lieu de chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
> Consultez la section [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La méthode **`writeln()`** de l'interface {{DOMxRef("Document")}} écrit du texte dans un ou plusieurs paramètres {{DOMxRef("TrustedHTML")}} ou chaînes de caractères dans un flux de document ouvert par {{DOMxRef("document.open()")}}, suivi d'un caractère de nouvelle ligne.

## Syntaxe

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Paramètres

- `markup`, …, `markupN`
  - : Des objets {{DOMxRef("TrustedHTML")}} ou des chaînes de caractères contenant le texte à écrire dans le document.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : La méthode a été appelée sur un document XML, ou appelée lorsque le parseur exécute actuellement un constructeur d'élément personnalisé.
- `TypeError`
  - : Une chaîne de caractères est passée comme l'un des paramètres lorsque [les types de confiance sont appliqués](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) et [qu'aucune politique par défaut n'a été définie](/fr/docs/Web/API/TrustedTypePolicyFactory/createPolicy#créer_une_politique_par_défaut) pour créer des objets {{DOMxRef("TrustedHTML")}}.

## Description

La méthode est essentiellement identique à {{DOMxRef("document.write()")}} mais ajoute une nouvelle ligne (les informations du sujet lié s'appliquent également à cette méthode).
Cette nouvelle ligne ne sera visible que si elle est injectée dans un élément où les sauts de ligne sont affichés.
Les informations supplémentaires de {{DOMxRef("document.write()")}} s'appliquent également à cette méthode.

### Considérations de sécurité

La méthode peut être un vecteur [d'attaques inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), où des chaînes potentiellement dangereuses fournies par un·e utilisateur·ice sont injectées dans le DOM sans avoir été préalablement assainies.
Alors que la méthode peut empêcher l'exécution des éléments HTML {{HTMLElement("script")}} lorsqu'ils sont injectés dans certains navigateurs (voir [Intervenir contre document.write() <sup>(angl.)</sup>](https://developer.chrome.com/blog/removing-document-write/) pour Chrome), elle reste vulnérable à de nombreuses autres manières dont des attaquant·e·s peuvent composer du HTML pour exécuter du JavaScript malveillant.

Vous pouvez atténuer ces problèmes en passant toujours des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères, et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) à l'aide de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Cela garantit que l'entrée est passée par une fonction de transformation, qui a la possibilité [d'assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée pour supprimer les balises potentiellement dangereuses (telles que les éléments HTML {{HTMLElement("script")}} et les attributs gestionnaires d'évènements), avant son injection.

## Exemples

### Écrire du `TrustedHTML`

Cet exemple utilise [l'API des types de confiance](/fr/docs/Web/API/Trusted_Types_API) pour assainir les chaînes de caractères HTML avant qu'elles ne soient écrites dans un document.
Vous devez toujours utiliser les types de confiance pour passer des chaînes de caractères non fiables aux API non sécurisées.

L'exemple affiche initialement un texte par défaut et un bouton.
Quand le bouton est cliqué, le document courant est ouvert, certaines chaînes de caractères HTML sont converties en instances de {{DOMxRef("TrustedHTML")}} et écrites dans le document, puis le document est fermé.
Cela remplace le document dans le cadre d'exemple, y compris le HTML original du bouton et le JavaScript qui a effectué la mise à jour&nbsp;!

#### HTML

```html
<p>Contenu original du document.</p>
<button id="remplacer" type="button">Remplacer le contenu du document</button>
```

#### JavaScript

D'abord nous utilisons la propriété {{DOMxRef("Window.trustedTypes")}} pour accéder à l'objet global {{DOMxRef("TrustedTypePolicyFactory")}}, et utilisons sa méthode {{DOMxRef("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} pour définir une politique appelée `"docPolicy"`.

La nouvelle politique définit une fonction de transformation `createHTML()` pour créer les objets {{DOMxRef("TrustedHTML")}} que nous passerons à la méthode `writeln()`.
Cette méthode peut faire ce qu'elle veut avec la chaîne de caractères d'entrée&nbsp;: l'API des types de confiance exige simplement que vous passiez l'entrée par une fonction de transformation de politique, et non que la fonction de transformation fasse quelque chose de particulier.

Vous utiliseriez la méthode pour [assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée en supprimant les fonctionnalités potentiellement dangereuses telles que les balises {{HTMLElement("script")}} ou les attributs gestionnaires d'événements.
L'assainissement est difficile à réaliser correctement, donc ce processus utilise généralement une bibliothèque tierce réputée telle que [DOMPurify](https://github.com/cure53/DOMPurify).

Nous implémentons ici un «&nbsp;assainisseur&nbsp;» rudimentaire qui remplace les symboles `<` dans les balises script d'ouverture et de fermeture par le caractère `&lt;`.
Les chaînes de caractères injectées dans cet exemple ne contiennent en réalité aucun élément dangereux, il s'agit donc uniquement d'une démonstration.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

Nous pouvons ensuite utiliser la méthode {{DOMxRef("TrustedTypePolicy.createHTML()")}} sur la politique retournée pour créer des objets {{DOMxRef("TrustedHTML")}} à partir de nos chaînes d'entrée originales.
Ceux-ci sont ensuite passés à la fonction `writeln()` lorsque l'utilisateur·ice clique sur le bouton.

```js
const remplacer = document.querySelector("#remplacer");
const entreeUne = "<h1>Dehors avec";
const entreeDeux = "l'ancien</h1>";
const entreeTrois = "<pre>dedans avec";
const entreeQuatre = "le nouveau !</pre>";

remplacer.addEventListener("click", () => {
  document.open();
  document.writeln(policy.createHTML(entreeUne));
  document.writeln(
    policy.createHTML(entreeDeux),
    policy.createHTML(entreeTrois),
  );
  document.writeln(policy.createHTML(entreeQuatre));
  document.close();
});
```

#### Résultats

Cliquez sur le bouton.
Notez qu'une nouvelle ligne est ajoutée après chaque appel à `writeln()`, mais ceci ne sera visible que dans l'élément HTML {{HTMLElement("pre")}} car sa mise en page préserve les espaces blancs par défaut.

{{EmbedLiveSample("Écrire du `TrustedHTML`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
