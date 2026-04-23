---
title: "Document : méthode write()"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}{{Deprecated_Header}}

> [!WARNING]
> Utiliser la méthode `document.write()` est fortement déconseillé.
> Évitez de l'utiliser et, si possible, remplacez-la dans le code existant.
>
> Comme le [spécification HTML elle-même le prévient <sup>(angl.)</sup>](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>)&nbsp;:
>
> > Cette méthode a un comportement très particulier.
> > Dans certains cas, cette méthode peut affecter l'état de [l'analyseur HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) pendant que l'analyseur fonctionne, ce qui entraîne un DOM qui ne correspond pas à la source du document (par exemple, si la chaîne de caractères écrite est la chaîne de caractères «&nbsp;`<plaintext>`&nbsp;» ou «&nbsp;`<!--`&nbsp;»).
> > Dans d'autres cas, l'appel peut d'abord effacer la page actuelle, comme si {{DOMxRef("document.open()")}} avait été appelé.
> > Dans d'autres cas encore, la méthode est simplement ignorée ou génère une exception. Les agents utilisateurs sont [expressément autorisés à éviter l'exécution des éléments `script` insérés via cette méthode <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > Et pour aggraver les choses, le comportement exact de cette méthode peut dans certains cas dépendre de la latence du réseau, ce qui peut entraîner des échecs très difficiles à déboguer.
> > Pour toutes ces raisons, l'utilisation de cette méthode est fortement déconseillée.

> [!WARNING]
> Cette méthode analyse les entrées comme du HTML, écrivant le résultat dans le DOM.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation), et sont potentiellement un vecteur pour des attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), si l'entrée provient initialement d'un attaquant.
>
> Vous pouvez atténuer ce risque en passant toujours des objets `TrustedHTML` au lieu de chaînes de caractères et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La méthode **`write()`** de l'interface {{DOMxRef("Document")}} écrit du texte dans un ou plusieurs paramètres {{DOMxRef("TrustedHTML")}} ou chaînes de caractères dans un flux de document ouvert par {{DOMxRef("document.open()")}}.

## Syntaxe

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Paramètres

- `markup`, …, `markupN`
  - : Des objets {{DOMxRef("TrustedHTML")}} ou des chaînes de caractères contenant le balisage à écrire dans le document.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : La méthode a été appelée sur un document XML, ou appelée lorsque l'analyseur exécute actuellement un constructeur d'élément personnalisé.
- `TypeError`
  - : Une chaîne de caractères est passée comme l'un des paramètres lorsque les [types de confiances sont appliqués](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) et [qu'aucune politique par défaut n'a été définie](/fr/docs/Web/API/TrustedTypePolicyFactory/createPolicy#créer_une_politique_par_défaut) pour créer des objets {{DOMxRef("TrustedHTML")}}.

## Description

`document.write()` analyse le texte de balisage contenu dans les objets passés en paramètres et l'insère dans le modèle d'objet du document (DOM) ouvert, dans l'ordre des paramètres fournis.

Parce que `document.write()` écrit dans le flux du document, appeler `document.write()` sur un document fermé (chargé) (sans appeler préalablement {{DOMxRef("document.open()")}}) provoque automatiquement un appel à {{DOMxRef("document.open()")}}, ce qui effacera le document.

L'exception est que si l'appel `document.write()` est intégré dans une balise HTML `<script>` en ligne, alors il ne déclenchera pas automatiquement l'appel à `document.open()`&nbsp;:

```html
<script>
  document.write("<h1>Titre principal</h1>");
</script>
```

`document.write()` (et {{DOMxRef("document.writeln")}}) ne peut pas être utilisé avec XML ou XHTML, et toute tentative de le faire lèvera une exception `InvalidStateError`.
C'est le cas si l'on ouvre un fichier local avec l'extension «&nbsp;.xhtml&nbsp;» ou pour tout document servi avec le type MIME `application/xhtml+xml`.
Plus d'informations sont disponibles dans la [FAQ XHTML du W3C <sup>(angl.)</sup>](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

L'utilisation de `document.write()` dans les scripts [différés](/fr/docs/Web/HTML/Reference/Elements/script#defer) ou [asynchrones](/fr/docs/Web/HTML/Reference/Elements/script#async) sera ignorée et vous obtiendrez dans la console d'erreurs un message du type «&nbsp;Un appel à `document.write()` depuis un script externe chargé de manière asynchrone a été ignoré&nbsp;».

Dans Edge uniquement, appeler `document.write()` plus d'une fois dans un {{HTMLElement("iframe")}} provoque l'erreur «&nbsp;SCRIPT70: Permission denied&nbsp; ».

### Considérations de sécurité

La méthode peut être un vecteur pour des attaques de [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS), où des chaînes de caractères potentiellement non sûres fournies par un·e utilisateur·ice sont injectées dans le DOM sans avoir été préalablement assainies.
Même si la méthode peut empêcher l'exécution des éléments HTML {{HTMLElement("script")}} lorsqu'ils sont injectés dans certains navigateurs (voir [Intervenir contre document.write() <sup>(angl.)</sup>](https://developer.chrome.com/blog/removing-document-write/) pour Chrome), elle reste vulnérable à de nombreuses autres manières dont des attaquant·e·s peuvent composer du HTML pour exécuter du JavaScript malveillant.

Vous pouvez atténuer ces problèmes en passant toujours des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères, et en [appliquant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) en utilisant la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Cela garantit que l'entrée est passée par une fonction de transformation, qui a la possibilité de [nettoyer](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée pour supprimer les balises potentiellement dangereuses (comme les éléments {{HTMLElement("script")}} et les attributs de gestionnaire d'événements), avant qu'elle ne soit injectée.

## Exemples

### Écrire du `TrustedHTML`

Cet exemple utilise [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) pour assainir des chaînes de caractères HTML contenant des éléments HTML {{HTMLElement("script")}} avant de les écrire dans un document.

L'exemple affiche d'abord un texte par défaut et un bouton.
Lorsque le bouton est cliqué, le document courant est ouvert, trois chaînes de caractères HTML sont converties en instances de {{DOMxRef("TrustedHTML")}} puis écrites dans le document, et le document est ensuite fermé.
Cela remplace le document dans la zone d'exemple, y compris le HTML original du bouton et le JavaScript qui a effectué la mise à jour&nbsp;!

#### HTML

```html
<p>Ceci est le contenu original du document.</p>
<button id="remplacer" type="button">Remplacer le contenu du document</button>
```

#### JavaScript

Nous utilisons d'abord la propriété {{DOMxRef("Window.trustedTypes")}} pour accéder à la {{DOMxRef("TrustedTypePolicyFactory")}} globale, et appelons sa méthode {{DOMxRef("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} pour définir une politique nommée `"docPolicy"`.

La nouvelle politique définit une fonction de transformation `createHTML()` pour créer les objets {{DOMxRef("TrustedHTML")}} que nous passerons à la méthode `write()`.
Cette méthode peut traiter la chaîne de caractères d'entrée comme elle le souhaite&nbsp;: l'API Trusted Types exige seulement que l'entrée passe par une fonction de transformation de politique, sans imposer de traitement particulier.

On utilisera cette méthode pour [assainir](/fr/docs/Web/Security/Attacks/XSS#assainissement) l'entrée en supprimant des éléments potentiellement dangereux tels que les balises {{HTMLElement("script")}} ou les attributs gestionnaires d'évènements.
L'assainissement est difficile à faire correctement, aussi ce processus utilise généralement une bibliothèque tierce réputée telle que [DOMPurify <sup>(angl.)</sup>](https://github.com/cure53/DOMPurify).

Pour la démonstration, nous implémentons ici un «&nbsp;assainisseur&nbsp;» rudimentaire qui remplace les symboles `<` dans les balises d'ouverture et de fermeture script par le caractère `&lt;`.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

On peut ensuite utiliser la méthode {{DOMxRef("TrustedTypePolicy.createHTML()")}} sur la politique retournée pour créer des objets {{DOMxRef("TrustedHTML")}} à partir de nos chaînes de caractères d'entrée.
Ces objets sont ensuite passés à la fonction `write()` lorsque l'utilisateur·ice clique sur le bouton.

```js
const entreeUne = "<h1>Dehors avec l'ancien</h1>";
const entreeDeux = "<p>dedans avec le nouveau !</p>";
const entreeTrois = "<script>alert('evil afoot')<" + "/script>";
const remplacer = document.querySelector("#remplacer");

remplacer.addEventListener("click", () => {
  document.open();
  document.write(
    policy.createHTML(entreeUne),
    policy.createHTML(entreeDeux),
    policy.createHTML(entreeTrois),
  );
  document.close();
});
```

#### Résultats

Pressez le bouton et constatez que les éléments HTML en lesquels nous avons confiance (dans cet exemple) sont injectés, mais que l'élément non fiable {{HTMLElement("script")}} est désormais rendu comme du texte brut.

{{EmbedLiveSample("Écrire du `TrustedHTML`")}}

### Écrire des chaînes de caractères

Ceci est identique à l'exemple précédent, sauf que les types de confiance ne sont pas utilisés ni appliqués.
Nous écrivons des chaînes de caractères non assainies, ce qui peut ouvrir une voie à des [attaques XSS](/fr/docs/Web/Security/Attacks/XSS).

L'exemple affiche d'abord un texte par défaut et un bouton.
Lorsque le bouton est cliqué, le document courant est ouvert, trois chaînes de caractères HTML sont écrites dans le document, puis le document est fermé.
Cela remplace le document dans la zone d'exemple, y compris le HTML original du bouton et le JavaScript qui a effectué la mise à jour.

#### HTML

```html
<p>Du contenu de document original.</p>
<button id="remplacer" type="button">Remplacer le contenu du document</button>
```

#### JavaScript

```js
const remplacer = document.querySelector("#remplacer");

const entreeUne = "<h1>Dehors avec l'ancien</h1>";
const entreeDeux = "<p>dedans avec le nouveau !</p>";
const entreeTrois = "<script>alert('evil afoot')<" + "/script>";

remplacer.addEventListener("click", () => {
  document.open();
  document.write(entreeUne, entreeDeux, entreeTrois);
  document.close();
});
```

#### Résultats

Appuyez sur le bouton et constatez que tous les éléments HTML sont injectés.
Cela inclut l'élément HTML {{HTMLElement("script")}}, qui dans une application réelle aurait pu exécuter un code nuisible.

{{EmbedLiveSample("Écrire des chaînes de caractères")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.writeln()")}}
- La propriété {{DOMxRef("element.innerHTML")}}
- La méthode {{DOMxRef("document.createElement()")}}
- [L'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API)
- [Attaque par script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS)
