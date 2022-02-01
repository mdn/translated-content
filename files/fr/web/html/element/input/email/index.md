---
title: <input type="email">
slug: Web/HTML/Element/Input/email
tags:
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/email
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`"email"`** permettent à un utilisateur de saisir et d'éditer une adresse mail ou, si l'attribut {{htmlattrxref("multiple", "input")}} est indiqué, une liste d'adresses mail. La valeur saisie est automatiquement validée afin de vérifier que le champ est vide ou que l'adresse (ou la liste d'adresses) est correcte. Les pseudo-classes CSS {{cssxref(":valid")}} et {{cssxref(":invalid")}} sont appliquées automatiquement selon le cas.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

> **Note :** Les navigateurs qui ne prennent pas en charge le type `"email"` emploieront un élément `<input>` [`"text"`](/fr/docs/Web/HTML/Element/input/text) à la place.

## Valeur

La valeur d'un tel élément {{HTMLElement("input")}}, contenue dans l'attribut {{htmlattrxref("value", "input")}}, contient une chaîne de caractères qui est automatiquement validée afin de vérifier que c'est une adresse électronique valide. Pour être plus précis, trois formes sont considérées valides :

1.  Une chaîne de caractères vide ("") qui indique que l'utilisateur n'a saisi aucune valeur ou que la valeur a été retirée.
2.  Une adresse électronique bien-formée. Cela ne signifie pas que l'adresse en question existe mais qu'elle est correctement formatée. Autrement dit, elle respecte une structure `"nom@domaine.tld"`. Cette règle est un peu plus complexe (cf. {{anch("Validation")}} pour l'algorithme exact).
3.  Si et seulement si l'attribut {{htmlattrxref("multiple", "input")}} est indiqué, la valeur peut être une liste d'adresses électroniques correctes, séparées par des virgules. Chaque blanc situé avant et après chaque adresse sera retiré.

Pour plus de détails, se référer à la section {{anch("Validation")}} sur la façon dont les adresses mails sont validées.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `email` prennent en charge les attributs suivants :

| Attribut                           | Description                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `{{anch("maxlength")}}`     | Le nombre de caractères maximal qui peut être écrit dans ce champ.                                                                                     |
| `{{anch("minlength")}}`     | Le nombre de caractères minimal qui peut être écrit dans ce champ pour qu'il soit considéré comme valide.                                              |
| `{{anch("multiple")}}`     | Un attribut booléen qui indique si plusieurs adresses électroniques peuvent être saisies et séparées par des virgules.                                 |
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

### {{htmlattrdef("multiple")}}

A Boolean attribute which, if present, indicates that the user can enter a list of multiple e-mail addresses, separated by commas and, optionally, whitespace characters. See {{anch("Allowing multiple e-mail addresses")}} for details.

> **Note :** Normally, if you specify the {{htmlattrxref("required", "input")}} attribute, the user must enter a valid e-mail address for the field to be considered valid. However, if you add the `multiple` attribute, a list of zero e-mail addresses (an empty string, or one which is entirely whitespace) is a valid value. In other words, the user does not have to enter even one e-mail address when `multiple` is specified, regardless of the value of `required`.

### {{htmlattrdef("pattern")}}

{{page("/fr/docs/Web/HTML/Element/input/text", "pattern-include")}}

Voir la section sur la validation d'un motif ci-après pour plus de détails.

{{page("/fr/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "spellcheck", 0, 1, 2)}}

## Attributs non-standard

Les attributs non-standard suivant sont disponibles pour les champs d'email dans certains navigateurs mais devraient ne pas être utilisés.

| Attribute                          | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("autocorrect")}}` | Une chaîne de caractères qui indique si la correction automatique doit être appliquée à ce champ texte. **Uniquement pris en charge par Safari.**                                                                                                                                                                                                 |
| `{{anch("mozactionhint")}}` | Une chaîne de caractères qui indique le type d'action qui sera effectuée lorsque l'utilisateur appuiera sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ. La valeur de cet attribut est utilisée comme libellé pour la touche adéquate du clavier virtuel. **Uniquement pris en charge par Firefox pour Android.** |

### {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "autocorrect-include")}}

### {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "mozactionhint-include")}}

## Utiliser les champs de saisie d'adresses électroniques

Les adresses mails font partie des informations les plus fréquentes dans les formulaires web : elles sont utilisées pour se connecter, demander des informations, confirmer une commande, envoyer un email, etc. Le type `"email"` permet de simplifier le travail de construction de l'interface utilisateur et la logique associée pour les adresses électroniques. Lorsqu'on crée un champ dont l'attribut `type` vaut `"email"`, le navigateur valide ou non le texte saisi afin de vérifier qu'il s'agit d'une adresse correcte. Cela permet d'éviter les cas où l'utilisateur a fait une faute de saisie ou lorsqu'il a fourni une adresse invalide.

On notera toutefois que le navigateur ne vérifie pas si l'adresse saisie existe réellement ou correspond à un utilisateur existant du site ou si elle respecte quelque autre critère. Autrement dit, le navigateur vérifie uniquement que l'adresse fournie est bien formée.

> **Note :** Il est également important de rappeler qu'un utilisateur peut modifier le HTML de la page grâce aux outils de développement. Votre site _ne doit pas_ reposer sur les mécanismes de validation du navigateur. Il est crucial de vérifier l'adresse électronique _côté serveur_ dès que le texte fournit est impliqué, d'une façon ou d'une autre, dans une fonctionnalité sensible (par exemple la connexion à un site, un achat, etc.).

### Un champ email simple

À l'heure actuelle, l'ensemble des navigateurs qui implémentent cet élément le gèrent comme un champ texte standard auquel certaines fonctionnalités de validation sont ajoutées. La spécification laisse toutefois une marge de manœuvre pour cette validation (l'élément pourrait par exemple consulter le répertoire de l'appareil pour choisir une adresse parmi cette liste). Dans sa forme la plus simple, un champ email peut être écrit de cette façon :

```html
<input id="emailAddress" type="email">
```

{{EmbedLiveSample('Un_champ_email_simple', 600, 40)}}

Un tel champ est considéré comme valide lorsqu'il est vide ou lorsqu'une adresse électronique bien formée est saisie. Dans les autres cas,, la valeur est considérée comme invalide. Si on ajoute l'attribut {{htmlattrxref("required", "input")}}, seuls les adresses électroniques bien formées sont autorisées, il n'est plus possible de laisser la valeur vide.

### Gérer plusieurs adresses mail

Grâce à l'attribut {{htmlattrxref("multiple", "input")}}, on peut configurer le champ afin de saisir plusieurs adresses mail.

```html
<input id="emailAddress" type="email" multiple>
```

{{EmbedLiveSample('Gérer_plusieurs_adresses_mail', 600, 40)}}

Avec cet attribut, la valeur saisie est valide quand on saisit zéro, une ou plusieurs adresses électroniques bien formées, séparées par des virgules et éventuellement entourées de blancs.

Voici certains exemples de chaînes de caractères valides lorsque `"multiple"` est utilisé :

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

En revanche, les exemples suivants sont considérés invalides :

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Textes indicatifs (_placeholders_)

Il est parfois utile de fournir une indication contextuelle quant à la valeur qui doit être saisie. C'est notamment pertinent quand la disposition de la page ne permet pas d'utiliser des étiquettes suffisamment descriptives (ou longues) pour chaque élément {{HTMLElement("input")}}. Pour fournir une telle indication, on peut fournir un _placeholder_ qui sera affiché dans le champ lorsque la valeur est vide et qui disparaît dès que des données sont saisies.

Dans l'exemple qui suit, on utilise un élément `<input>` de type `"email"` avec le texte indicatif `"sophie@example.com"`. Vous pouvez manipuler l'exemple afin de voir comment ce texte disparaît/réapparaît lorsqu'on édite la valeur du champ.

```html
<input type="email" placeholder="sophie@example.com">
```

{{EmbedLiveSample('Textes_indicatifs_(placeholders)', 600, 40)}}

### Contrôler la taille du champ

Il est possible de contrôler la taille physique de la boîte de saisie et également la longueur minimale/maximale de la valeur qu'il est possible de saisir.

#### Contrôler la taille physique

La taille physique de la boîte de saisie peut être paramétrée grâce à l'attribut {{htmlattrxref("size", "input")}}. Grâce à cet attribut, on peut indiquer le nombre de caractères que le champ peut afficher. Dans l'exemple qui suit, la boîte d'édition pourra contenir jusqu'à 15 caractères :

```html
<input type="email" size="15">
```

{{ EmbedLiveSample('Contrôler_la_taille_physique', 600, 40)}}

#### Contrôler la taille de la valeur

L'attribut `size` ne contraint pas la longueur de l'adresse qu'on pourra saisir. On peut donc avoir de petits champs qui permettent de saisir de longues adresses. Pour borner la taille de l'adresse mail à saisir, on pourra utiliser l'attribut {{htmlattrxref("minlength", "input")}} pour indiquer le nombre minimal de caractères et l'attribut {{htmlattrxref("maxlength", "input")}} pour indiquer le nombre maximal de caractères contenus dans l'adresse électronique.

Dans l'exemple qui suit, on affiche une boîte de saisie qui mesure 32 caractères de large et dans laquelle on ne peut saisir des adresses qui ont au moins 3 caractères et au plus 64 caractères.

```html
<input type="email" size="32" minlength="3" maxlength="64">
```

{{EmbedLiveSample("Contrôler_la_taille_de_la_valeur", 600, 40)}}

### Fournir une option par défaut

On peut également fournir une valeur par défaut en remplissant l'attribut {{htmlattrxref("value", "input")}} de l'élément :

```html
<input type="email" value="default@example.com">
```

{{EmbedLiveSample("Fournir_une_option_par_défaut", 600, 40)}}

#### Proposer des suggestions

Pour améliorer encore l'ergonomie, on peut fournir une liste d'options par défaut parmi laquelle l'utilisateur peut choisir. Cela fonctionne en utilisant l'attribut {{htmlattrxref("list", "input")}} dont la valeur est un identifiant d'un élément {{HTMLElement("datalist")}} qui contient différents éléments {{HTMLElement("option")}} dont les valeurs des attributs `value` fournissent les adresses suggérées. L'utilisateur n'est pas contraint à saisir une valeur parmi celles-ci, elles sont uniquement fournies à titre indicatif.

```html
<input type="email" size="40" list="defaultEmails">

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk">
  <option value="jbourne@unknown.net">
  <option value="nfury@shield.org">
  <option value="tony@starkindustries.com">
  <option value="hulk@grrrrrrrr.arg">
</datalist>
```

{{EmbedLiveSample("Proposer_des_suggestions", 600, 40)}}

Lorsqu'on utilise l'élément {{HTMLElement("datalist")}} et l'élément {{HTMLElement("option")}}, le navigateur affichera les adresses suggérées lors de la saisie, généralement sous la forme d'une liste déroulante ou d'une popup. Bien que les détails d'interface puissent dépendre de chaque navigateur, cliquer sur le champ d'édition affichera généralement la liste sous forme d'un volet déroulant. Ensuite, la liste est restreinte au fur et à mesure des caractères saisis.

## Validation

Il existe deux niveaux de validation pour les champs de saisie de type `"email"`. Tout d'abord, on a le niveau standard qui permet de vérifier automatiquement si l'adresse électronique est bien formatée. Ensuite, il est possible d'ajouter un filtre spécifique si besoin de répondre à des contraintes plus spécifiques.

> **Attention :** La validation du formulaire HTML par l'agent utilisateur ne saurait remplacer la vérification des données saisies côté serveur. En effet, il est relativement simple de modifier le document HTML avec son navigateur pour outrepasser les contraintes exprimées ici (quitte à les transmettre directement au serveur). Si les données ne sont pas vérifiées côté serveur, cela pourra entraîner des erreurs (valeurs trop grande, au mauvais format) voire des failles de sécurité.

### Validation simple

Les navigateurs qui implémentent le type `"email"` fournissent une validation automatique afin de vérifier que la valeur saisie respecte le format d'une adresse électronique valide. Les navigateurs utilisent [un algorithme](https://dxr.mozilla.org/mozilla-central/source/dom/html/input/SingleLineTextInputTypes.cpp?q=%2Bfunction%3A%22EmailInputType%3A%3AIsValidEmailAddressList%28const+nsAString+%26%29%22&redirect_type=single#184) pour respecter [la spécification](https://w3c.github.io/html/sec-forms.html#email-state-typeemail).

Les pseudo-classes CSS {{cssxref(":valid")}} et {{cssxref(":invalid")}} peuvent être utilisées afin de mettre en forme la valeur selon qu'elle est valide ou non.

> **Note :** La spécification comporte certains problèmes relatifs aux noms de domaines internationaux et à la validation des adresses électroniques en HTML. Pour plus d'informations, lire [le bug n°15489 du W3C](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Validation grâce à une expression rationnelle

S'il est nécessaire que l'adresse saisie respecte plus de critères, il est possible d'utiliser l'attribut {{htmlattrxref("pattern", "input")}} afin d'indiquer [une expression rationnelle](/fr/docs/Web/JavaScript/Guide/Expressions_régulières) contre laquelle la valeur sera vérifiée. Si l'attribut {{htmlattrxref("multiple", "input")}} est actif, chaque élément de la liste devra respecter cette expression rationnelle.

Prenons comme exemple l'intranet d'une entreprise avec un site web qui permet de contacter le département du support technique en cas de besoin. Un formulaire simplifier permet de saisir une adresse électronique et un message. Dans ce cas, on souhaite vérifier que l'adresse électronique est saisie mais également que c'est une adresse respectant le format de celles utilisées dans l'entreprise.

Le navigateur vérifie d'une part que l'adresse électronique est une adresse correctement formatée _et_ que celle-ci respecte l'expression rationnelle indiquée avec {{htmlattrxref("pattern", "input")}}. Voici un exemple d'application :

```css hidden
body {
  font: 16px sans-serif;
}

.emailBox {
  padding-bottom: 20px;
}

.messageBox {
  padding-bottom: 20px;
}

label {
  line-height: 22px;
}

label::after {
  content: ":";
}
```

```html
<form>
 <div class="emailBox">
   <label for="emailAddress">Votre adresse email</label><br>
   <input id="emailAddress" type="email" size="64" maxLength="64" required
          placeholder="nomutilisateur@beststartupever.com" pattern=".+@beststartupever.com"
          title="Merci de fournir uniquement une adresse Best Startup Ever">
 </div>

 <div class="messageBox">
   <label for="message">Requête</label><br>
   <textarea id="message" cols="80" rows="8" required
             placeholder="Mes chaussures sont trop petites."></textarea>
 </div>
  <input type="submit" value="Envoyer la requête">
</form>
```

{{EmbedLiveSample("Validation_grâce_à_une_expression_rationnelle", 700, 275)}}

Le formulaire ({{HTMLElement("form")}}) contient un élément {{HTMLElement("input")}} de type `"email"` pour saisir l'adresse de l'utilisateur, un élément {{HTMLElement("textarea")}} permettant de saisir le message et un élément `<input>` de type [`"submit"`](/fr/docs/Web/HTML/Element/input/submit) qui formera un bouton permettant d'envoyer le formulaire. Chaque champ possède un élément {{HTMLElement("label")}} associé qui permet d'indiquer ce qui est attendu.

Si on regarde le champ de saisie pour l'adresse électronique, on voit que les deux attributs {{htmlattrxref("size", "input")}} et {{htmlattrxref("maxlength", "input")}} ont la valeur 64 (on affiche une boîte de saisie large de 64 caractères et on ne peut saisir une adresse électronique d'au plus 64 caractères). L'attribut {{htmlattrxref("required", "input")}} est présent et l'adresse électronique est donc obligatoire pour l'envoi du formulaire.

L'attribut {{htmlattrxref("placeholder", "input")}} indique qu'une valeur semblable à `"nomutilisateur@beststartupever.com"` est attendue. L'intérêt de cette valeur est double : on indique qu'il faut saisir une adresse mail et on suggère que cette adresse provient d'un compte beststartupever.com. Le type `"email"` permet de valider le texte saisi afin de vérifier qu'il s'agit d'une adresse électronique valide. Si la valeur saisie n'est pas une adresse valide, un message d'erreur sera affiché :

![](enter-valid-email-address.png)

Si on utilise uniquement les attributs qu'on vient de décrire, on restreint les valeurs saisissables aux adresses électroniques valides de 64 caractères. Or, on veut également valider le fait que l'adresse respecte le format "_nomutilisateur_@beststartupever.com". C'est pourquoi on utilise l'attribut {{htmlattrxref("pattern", "input")}} avec la valeur `".+@beststartupever.com"`. Cette valeur est une expression rationnelle qui permet de vérifier que la chaîne de caractère contient un ou plusieurs caractères quelconques, ensuite suivi d'une arobase (@) puis du nom de domaine "beststartupever.com".

On notera que cette expression rationnelle ne permet pas de vérifier que l'adresse électronique est valide (on pourra par exemple avoir " @beststartupever.com" (avec un espace en début de chaîne) ou encore "@@beststartupever.com" qui ne sont pas valides). En fait, le navigateur vérifie que l'adresse respecte l'expression rationnelle fournie **et** que l'adresse est valide. Autrement dit, avec le type `"email"` et cette valeur pour l'attribut `pattern`, on s'assure que l'adresse est une adresse électronique valide et que c'est une bien une adresse avec le nom de domaine "beststartupever.com".

Lorsqu'on utilise l'attribut `pattern` Il est conseillé d'utilisé l'attribut {{htmlattrxref("title")}} afin de décrire le motif de l'expression ratioennelle. Autrement dit, dans ce cas, l'attribut `title` doit décrire le format souhaité plutôt que contenir une autre information. En effet, cet attribut sera affiché ou prononcé en cas d'erreur. Par exemple, le navigateur pourrait afficher le message "Le texte saisi ne correspond pas au motif requis." suivi du texte indiqué dans la valeur de `title`. Par exemple si l'attribut `title` vaut "Adresse email", le message affiché serait "Le texte saisi ne correspond pas au motif requis. Adresse email" ce qui n'est pas correct.

C'est pour cela qu'on indique la chaîne de caractères "Merci de fournir uniquement une adresse Best Startup Ever". Le message complet obtenu sera donc : "Le texte saisi ne correspond pas au motif requis. Merci de fournir uniquement une adresse Best Startup Ever."

![](email-pattern-match-bad.png)

> **Note :** Si vous rencontrez des problèmes à propos de l'expression rationnelle, n'hésitez pas à ouvrir la console du navigateur. Cette dernière peut contenir des messages d'erreur aidant à diagnostiquer et résoudre le problème.

## Exemples

Dans l'exemple qui suit, on peut saisir une adresse électronique qui contient au plus 256 caractères. La boîte de saisie affichera au plus 64 caractères et contiendra le texte  `"user@example.gov"` comme indication lorsque le champ est vide. On trouve également l'attribut {{htmlattrxref("multiple", "input")}} qui permet de saisir zéro ou plusieurs adresses séparées par des virgules (cf. ci-avant). Enfin, l'attribut {{htmlattrxref("list", "input")}} utilisé indique un identifiant d'un élément {{HTMLElement("datalist")}} dont les éléments {{HTMLElement("option")}} déterminent les valeurs suggérées qui peuvent être sélectionnées par l'utilisateur.

L'élément {{HTMLElement("label")}} qui précède l'élément `<input>` permettra d'afficher un libellé avant la boîte de saisie. Le lien entre les deux est fait grâce à l'attribut `for` qui contient `"emailAddress"` qui est l'identifiant de l'élément {{HTMLElement("input")}}. Grâce à cette association, cliquer sur l'étiquette permettra de placer le focus sur le champ de saisie.

```html
<label for="emailAddress">Email</label><br/>
<input id="emailAddress" type="email" placeholder="user@example.gov"
       list="defaultEmails" size="64" maxlength="256" multiple>

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk">
  <option value="jbourne@unknown.net">
  <option value="nfury@shield.org">
  <option value="tony@starkindustries.com">
  <option value="hulk@grrrrrrrr.arg">
</datalist>
```

{{EmbedLiveSample('Exemples', 600, 50)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) représentant
        une adresse électronique ou une chaîne vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} et
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("maxlength", "input")}},
        {{htmlattrxref("minlength", "input")}},
        {{htmlattrxref("multiple", "input")}},
        {{htmlattrxref("pattern", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("required", "input")}}
        et {{htmlattrxref("size", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>list</code> et <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                    | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#e-mail-state-(type=email)', '&lt;input type="email"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#email-state-typeemail', '&lt;input type="email"&gt;')}}     | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-email")}}

## Voir aussi

- [Le guide relatif aux formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/fr/docs/Web/HTML/Element/input)
