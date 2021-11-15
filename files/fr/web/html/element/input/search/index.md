---
title: <input type="search">
slug: Web/HTML/Element/Input/search
tags:
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/search
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`search`** permettent à un utilisateur de saisir des termes de recherche.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Valeur

La valeur de l'attribut {{htmlattrxref("value", "input")}} contient une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur du champ de recherche. En JavaScript, on peut récupérer cette information grâce à la propriété {{domxref("HTMLInputElement.value")}}.

```js
maRecherche.value;
```

Si aucune contrainte de validation n'est imposée (cf. {{anch("Validation")}} pour plus de détails), la valeur peut être un texte ou une chaîne de caractères vide.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs de recherche prennent en charge les attributs suivants :

| Attribut                           | Description                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `{{anch("maxlength")}}`     | Le nombre de caractères maximal qui peut être écrit dans ce champ.                                                                                     |
| `{{anch("minlength")}}`     | Le nombre de caractères minimal qui peut être écrit dans ce champ pour qu'il soit considéré comme valide.                                              |
| `{{anch("pattern")}}`         | Une expression rationnelle à laquelle doit correspondre le texte saisi pour être valide.                                                               |
| `{{anch("placeholder")}}` | Une valeur d'exemple qui sera affichée lorsqu'aucune valeur n'est saisie.                                                                              |
| `{{anch("readonly")}}`     | Un attribut booléen qui indique si le contenu du champ est en lecture seule.                                                                           |
| `{{anch("size")}}`             | Un nombre qui indique le nombre de caractères affichés par le champ.                                                                                   |
| `{{anch("spellcheck")}}`     | Cet attribut contrôle l'activation de la vérification orthographique sur le champ ou si la vérification orthographique par défaut doit être appliquée. |

### {{htmlattrdef("maxlength")}}

Le nombre maximum de caractères (exprimé en nombre de points de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("minlength")}}

Le nombre minimal de caractères (exprimé en nombre de points de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieur à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte est inférieure à `minlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("pattern")}}

{{page("/fr/docs/Web/HTML/Element/input/text", "pattern-include")}}

Voir [la section sur l'utilisation de cet attribut ci-après](#format) pour plus d'exemples.

{{page("/fr/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

### {{htmlattrdef("spellcheck")}}

{{page("/fr/docs/Web/HTML/Element/input/text", "spellcheck-include")}}

## Attributs non-standard

Les attributs non-standard suivants sont disponibles pour les champs de recherche. Toutefois, vu leur caractère spécifique, mieux vaut ne pas les utiliser.

| Attribut                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("autocorrect")}}` | Une chaîne de caractères qui indique si la correction automatique doit être appliquée à ce champ texte. **Uniquement pris en charge par Safari.**                                                                                                                                                                                                 |
| `{{anch("incremental")}}` | Cet attribut indique si des évènements {{event("search")}} doivent être envoyés afin de mettre à jour les résultats de la recherche tandis que l'utilisateur continue d'éditer la valeur du champ. **Uniquement WebKit et Blink (Safari, Chrome, Opera, etc.).**                                                                             |
| `{{anch("mozactionhint")}}` | Une chaîne de caractères qui indique le type d'action qui sera effectuée lorsque l'utilisateur appuiera sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ. La valeur de cet attribut est utilisée comme libellé pour la touche adéquate du clavier virtuel. **Uniquement pris en charge par Firefox pour Android.** |
| `{{anch("results")}}`         | Le nombre maximum d'éléments qui devraient être affichés comme recherches précédentes dans la liste déroulante du champ. **Uniquement pris en charge par Safari.**                                                                                                                                                                                |

### {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "autocorrect-include")}}

### {{htmlattrdef("incremental")}} {{non-standard_inline}}

Un attribut booléen spécifique à WebKit et Blink qui indique à l'agent utilisateur de traiter la recherche en continu. Lorsque cet attribut est présent et lorsque l'utilisateur édite la valeur du champ, l'agent utilisateur envoie des évènements {{event("search")}} sur l'objet {{domxref("HTMLInputElement")}} qui représente le champ de recherche. Ainsi, on peut gérer, avec du code, la mise à jour continue des résultats de recherche.

Si l'attribut `incremental` n'est pas indiqué, l'évènement {{event("search")}} est uniquement envoyé lorsque l'tuilisateur déclenche la recherche (en appuyant sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> à l'édition du champ).

La fréquence maximale à laquelle l'évènement `search` est envoyé est définie par chaque implémentation.

### {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "mozactionhint-include")}}

### {{htmlattrdef("results")}} {{non-standard_inline}}

L'attribut `results`, spécifique à Safari, est une valeur numérique qui permet de surcharger la valeur maximale du nombre de recherches précédentes affichées dans la liste déroulante des suggestions.

Cette valeur doit être un nombre positif. Si cet attribut n'est pas fourni, ou que sa valeur est invalide, ce sera le maximum fourni par le navigateur qui sera utilisé.

## Utiliser un champ de recherche

Les éléments `<input>` de type `search` sont semblables aux éléments `<input>` de type `text` mais sont spécifiquement destinés à la gestion des termes d'une recherche.

### Exemple simple

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q">
    <button>Rechercher</button>
  </div>
</form>
```

Cet exemple produira le résultat suivant :

{{EmbedLiveSample("Exemple_simple", 600, 40)}}

`q` est la valeur standard utilisé pour l'attribut `name` des champs de recherche. Lorsque le formulaire est envoyée, les données envoyées au serveur auront la forme `q=termederecherche`. Il est nécessaire de fournir un nom (c'est-à-dire un attribut `name`) à un champ, sinon aucune information ne sera envoyée lors de l'envoi du formulaire.

> **Note :** Il est toujours nécessaire de fournir une valeur pour l'attribut {{htmlattrxref("name","input")}} car sinon aucune valeur ne sera envoyée.

### Différences entre les champs de recherche et les champs texte

La différence principale est la façon dont les navigateurs gèrent cet élément. Premièrement, certains navigateurs affiche une icône de croix dans la zone de saisie qui peut être utilisée pour retirer le terme de la recherche. Voici par exemple un aperçu de la fonctionnalité sous Chrome:

![](chrome-cross-icon.png)

De plus, les navigateurs modernes proposent souvent une auto-complétion basée sur les termes de recherche déjà utilisés sur le site. Ainsi, quand on réutilise le champ, différentes suggestions peuvent être affichées et utilisées. Voici l'aperçu de cette fonctionnalité sous Firefox :

![](firefox-auto-complete.png)

### Ajouter un texte indicatif

Il est possible de fournir un texte indicatif dans le champ de recherche afin de fournir une indication quant aux recherches qu'il est possible de faire. Pour cela, on ajoutera un texte avec l'attribut {{htmlattrxref("placeholder","")}}. Par exemple :

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q"
     placeholder="Rechercher sur le site…">
    <button>Rechercher</button>
  </div>
</form>
```

Voici le résultat obtenu avec ce fragment HTML :

{{EmbedLiveSample("Ajouter_un_texte_indicatif", 600, 40)}}

### Les champs de recherche et l’accessibilité

Un des problèmes posé par les formulaires de recherche est leur accessibilité. En effet, dans la plupart des situations, il n'est pas nécessaire de fournir une étiquette indiquant le rôle de la recherche car le placement du champ rend son rôle clair ([voici un exemple](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

En revanche, pour les personnes qui utilisent des technologies assistives, cela peut être source de confusion. Une façon de résoudre ce problème sans modifier l'organisation visuelle est d'utiliser les fonctionnalités [WAI-ARIA](/fr/docs/Learn/Accessibility/WAI-ARIA_basics) :

- Utiliser un attribut `role` avec la valeur `search` sur l'élément `<form>` permettra aux lecteurs d'écran d'indiquer le formulaire comme étant un formulaire de recherche.
- Si cela n'est pas suffisant, il est possible d'utiliser l'attribut `aria-label` sur l'élément `<input>`. Cet attribut peut contenir un texte descriptif qui sera lu à voix haute par un lecteur d'écran. Il s'agit d'un équivalent non-visuel de `<label>`.

Prenons un exemple :

```html
<form role="search">
  <div>
    <input type="search" id="maRecherche" name="q"
     placeholder="Rechercher sur le site…"
     aria-label="Rechercher parmi le contenu du site">
    <button>Rechercher</button>
  </div>
</form>
```

Voici le résultat obtenu grâce à ce fragment de HTML :

{{EmbedLiveSample("Les_champs_de_recherche_et_l’accessibilité", 600, 40)}}

Il n'y a aucune différence visuelle avec l'exemple précédent mais avec cette deuxième version, les personnes qui utilisent un lecteur d'écran disposeront de plus d'informations.

> **Note :** Voir [Signposts/Landmarks](/fr/docs/Learn/Accessibility/WAI-ARIA_basics#SignpostsLandmarks) pour plus d'informations à propos de ces fonctionnalités relatives à l'accessibilité.

### Paramétrer la taille physique

Il est possible de contrôler la taille physique du champ de saisie grâce à l'attribut {{htmlattrxref("size", "input")}}. Cet attribut permet d'indiquer le nombre de caractères qui peuvent être affichés simultanément à l'intérieur du champ. Ainsi, dans l'exemple qui suit, la zone de recherche peut contenir 20 caractères :

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q"
    placeholder="Rechercher sur le site…" size="30">
    <button>Rechercher</button>
  </div>
</form>
```

{{EmbedLiveSample('Paramétrer_la_taille_physique', 600, 40)}}

## Validation

Les éléments `<input>` de type `search` possèdent les mêmes fonctionnalités de validation que les éléments `<input type="text">`. Il existe peu de raison de contraindre les termes d'une recherche mais voici quelques cas.

> **Note :** Attention, la validation des données d'un formulaire de recherche HTML par le client ne doit pas remplacer la vérification de ces données lorsqu'elles sont reçues sur le serveur. En effet, il est tout à fait possible pour quelqu'un de modifier le code HTML de la page pour outrepasser les mécanismes de validation. Il est également possible d'envoyer des données directement au serveur. Si le serveur ne valide pas les données reçues, des données potentiellement mal formatées pourraient causer des dommages aux bases de données et autres composants sensibles.

### Une note sur la mise en forme

Les pseudo-classes CSS {{cssxref(":valid")}} et {{cssxref(":invalid")}} permettent de mettre en forme les éléments d'un formulaire en fonction de la validité de leur contenu. Dans cette section, nous utiliserons la feuille de style suivante afin de placer une coche à côté des champs valides et une croix à côté des champs invalides.

```css
input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute
}
```

Vous pouvez ici voir qu'on utilise un élément {{htmlelement("span")}} placé après l'élément du formulaire, c'est cet élément `<span>` qui contiendra les icônes. Cet élément est nécessaire car, sur certains navigateurs, les pseudo-classes dans les éléments de saisie sont mal gérées.

### Rendre le champ obligatoire

Il est possible d'utiliser l'attribut {{htmlattrxref("required","input")}} afin d'indiquer que la valeur doit obligatoirement être saisie avant d'envoyer le formulaire :

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q"
    placeholder="Recherche sur le site…" required>
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu :

{{EmbedLiveSample('Rendre_le_champ_obligatoire', 600, 40)}}

De plus, si on essaie d'envoyer le formulaire sans aucun terme de recherche, le navigateur affichera un message. Voici par exemple, le résultat dans Firefox :

![Champ de formulaire avec un message attaché indiquant 'veuillez remplir ce formulaire'](firefox-required-message.png)

Différents messages peuvent être affichés selon le type d'erreur liée à la saisie.

### Contraindre la taille de la valeur saisie

Il est possible d'indiquer une taille minimale pour la longueur des termes de la recherche via l'attribut {{htmlattrxref("minlength", "input")}}. De même, on peut fixer la longueur maximale du texte qui peut être saisi pour la recherche grâce à l'attribut {{htmlattrxref("maxlength", "input")}}. Ces deux attributs sont exprimés en nombres de caractères.

Dans l'exemple qui suit, la valeur saisie dans le champ de recherche doit mesurer entre 4 et 8 caractères.

```html
<form>
  <div>
    <label for="mySearch">Rechercher un utilisateur</label>
    <input type="search" id="mySearch" name="q"
    placeholder="ID de 4 à 8 char." required
    size="30" minlength="4" maxlength="8">
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu avec ce fragment de code HTML :

{{EmbedLiveSample('Contraindre_la_taille_de_la_valeur_saisie', 600, 40)}}

Si vous essayez de soumettre une valeur qui est plus petite que 4 caractères, vous aurez un message d'erreur (qui peut varier selon le navigateur utilisé). De plus, le navigateur ne permettra pas de saisir un texte plus long que 8 caractères.

### Indiquer un motif

L'attribut {{htmlattrxref("pattern","input")}} permet d'indiquer une expression rationnelle que doit respecter la valeur saisie pour être considérée valide (cf. [Valider une valeur avec une expression rationnelle](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire#Contraintes_de_validation_sur_les_éléments_<input>) pour une introduction).

Prenons un exemple. Imaginons qu'on veuille rechercher un produit grâce à son identifiant et que les identifiants commencent par deux lettres, suivies de 4 chiffres. Dans l'exemple qui suit, le formulaire n'accepte qu'une valeur dont la taille est comprise entre 4 et 8 caractères et qui commence par deux lettres puis termine par 4 chiffres.

```html
<form>
  <div>
    <label for="mySearch">Rechercher un produit par son code :</label>
    <input type="search" id="mySearch" name="q"
    placeholder="2 lettres puis 4 chiffres" required
    size="30" pattern="[A-z]{2}[0-9]{4}">
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu avec ce fragment HTML :

{{EmbedLiveSample('Indiquer_un_motif', 600, 40)}}

## Exemples

Vous pouvez consulter un exemple de formulaire de recherche dans notre exemple [website-aria-roles](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) ([voir la démonstration _live_](http://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente la valeur contenue dans le champ de recherche.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} et
        {{domxref("HTMLElement/input_event", "input")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("maxlength", "input")}},
        {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("required", "input")}}, {{htmlattrxref("size", "input")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                                                            | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'input.html#text-(type=text)-state-and-search-state-(type=search)', '&lt;input type="search"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#text-typetext-state-and-search-state-typesearch', '&lt;input type="search"&gt;')}}         | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-search")}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}} et l'interface {{domxref("HTMLInputElement")}} DOM qu'il implémente
- [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text)
