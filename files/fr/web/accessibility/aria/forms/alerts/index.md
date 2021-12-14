---
title: Alertes
slug: Web/Accessibility/ARIA/forms/alerts
tags:
  - ARIA
  - Accessibilité
  - Développement Web
  - Formulaire
translation_of: Web/Accessibility/ARIA/forms/alerts
original_slug: Accessibilité/ARIA/formulaires/Alertes
---
## Le problème

Vous avez un formulaire – par exemple un formulaire de contact – pour lequel vous voulez ajouter des contrôles d’erreurs accessibles. Les problèmes les plus courants sont une adresse électronique non valide, ou un nom qui ne contient pas un nom de famille ou un prénom.

## Le formulaire

Tout d’abord, veuillez lire la [technique `aria-required`](/fr/Accessibilité/ARIA/formulaires/Indications_élémentaires_pour_les_formulaires) pour commencer, si vous ne l’avez pas déjà lu, puisque la technique abordée en est le prolongement.

Voici un formulaire simple :

```html
<form method="post" action="post.php">
<fieldset>
    <legend>Veuillez saisir les détails du contact</legend>
    <label for="nom">Votre nom (obligatoire):</label>
    <input name="nom" id="nom" aria-required="true"/>
    <br />
    <label for="courriel">Adresse électronique (obligatoire):</label>
    <input name="courriel" id="courriel" aria-required="true"/>
    <br />
    <label for="siteweb">Site Web (facultatif):</label>
    <input name="siteweb" id="siteweb"/>
</fieldset>
<label for="message">Veuillez saisir votre message (obligatoire):</label>
<br />
<textarea name="message" id="message" rows="5" cols="80"
        aria-required="true"></textarea>
<br />
<input type="submit" name="submit" value="Envoyer le message"/>
<input type="reset" name="reset" value="Réinitialiser le formulaire"/>
</form>
```

Simple et direct, mais nous ne sommes pas là pour gagner un prix de beauté. :-)

## Vérification de la validité et avertissement de l’utilisateur

Vérifier la validité et avertir l’utilisateur se déroule en plusieurs étapes :

1.  Vérifions que l’adresse électronique pour le nom saisi sont valides. Pour rester simple, nous vérifions si l’adresse contient un symbole « @ », et si le nom saisi contient au moins une espace « \[ ] ».
2.  Définissons l’attribut `aria-invalid` du champ et donnons lui la valeur `true`.
3.  Notifions à l’utilisateur via une alerte que la valeur saisie n’est pas correcte. Plutôt que d’utiliser la boîte de dialogue envahissante créée par la fonction JavaScript `alert`, nous utiliserons pour ceci un simple composant WAI-ARIA. Cela avertira l’utilisateur, mais le laissera continuer à interagir avec le formulaire sans l’interrompre.

Tout ceci se passe lorsque le champ de saisi perd le focus, c’est-à-dire dans le gestionnaire d’événements `onblur`.

La code JavaScript obtenu ressemble à ce qui suit, inséré au-dessus de la balise fermante {{ HTMLElement("head") }} :

```js
<script type="application/javascript">
function removeOldAlert()
{
    var oldAlert = document.getElementById("alert");
    if (oldAlert)
        document.body.removeChild(oldAlert);
}
<br/>
function addAlert(aMsg)
{
    removeOldAlert();
    var newAlert = document.createElement("div");
    newAlert.setAttribute("role", "alert");
    newAlert.setAttribute("id", "alert");
    var msg = document.createTextNode(aMsg);
    newAlert.appendChild(msg);
    document.body.appendChild(newAlert);
}
<br/>
function checkValidity(aID, aSearchTerm, aMsg)
{
    var elem = document.getElementById(aID);
    var invalid = (elem.value.indexOf(aSearchTerm) < 0);
    if (invalid) {
        elem.setAttribute("aria-invalid", "true");
        addAlert(aMsg);
    } else {
        elem.setAttribute("aria-invalid", "false");
        removeOldAlert();
    }
}
</script>
```

## La fonction `checkValidity`

Le cœur est la fonction `checkValidity`. Elle accepte trois paramètres : l’ID du champ de saisi qui doit être validé, le terme à recherche pour assurer la validité, et le message d’erreur à insérer dans l’alerte.

Pour déterminer la validité, la fonction vérifie si l’`indexOf` de la valeur d’entrée est plus grande que `-1`. Une valeur de `-1` ou moins est retournée si l’index du terme recherché n’a pas pu être trouvée dans la valeur.

Si non valide, la fonction fait deux choses :

1.  Elle définit l’attribut `aria-invalid` de l’élément à `true`, ce qui indiquera au lecteur d’écran que le contenu n’est pas correct.
2.  Elle appellera la fonction `addAlert` pour ajouter une alerte avec le message d’erreur donné.

Si le terme recherché est trouvé, l’attribut `aria-invalid` est réinitialisé à `true`. De plus, toute alerte qui subsisterait serait supprimée.

## La fonction `addAlert`

Cette fonction commence par enlever toutes les alertes restantes. Son fonctionnement est simple : elle cherche un élément avec un identifiant `alert`, et si elle en trouve un, l’enlève du modèle objet de document (DOM).

Ensuite, la fonction crée un élément {{ HTMLElement("div") }} qui contient le texte de l’alerte. On lui attribue l’ID `alert`. Et son rôle est défini comme celui d’une « alert ». C’est inspiré par ARIA, même si le nom de l’attribut ne comporte par « aria ». Cela découle du fait que ce rôle est basé sur le module [XHTML Role Attribut](http://www.w3.org/TR/xhtml-role/) qui a été tout simplement porté sur HTML pour plus de simplicité.

Le texte est ajouté à l’élément {{ HTMLElement("div") }}, qui est lui-même ajouté au document.

Au moment où cela se produira, Firefox déclenchera un événement « alert » pour la technologie d’assistance lorsque la {{ HTMLElement("div") }} apparaîtra. La plupart des lecteurs d’écran prendront celui-ci automatiquement et le liront. C’est similaire à la barre de notification de Firefox qui apparaît lorsque vous désirez mémoriser un mot de passe. Cette alerte que nous venons de créer n’a pas de bouton sur lequel cliquer, elle se contente de nous dire ce qui est erroné.

## Ajouter de la magie à l’événement `onblur`

Tout ce qu’il reste à faire, c’est ajouter un gestionnaire d’événement. Nous avons besoin de modifier les deux {{ HTMLElement("input") }} de l’adresse électronique et du nom par ce qui suit :

```html
<input name="nom" id="nom" aria-required="true"
    onblur="checkValidity('nom', ' ', 'Le nom saisi est invalide&nbsp;!');"/>
<br />
<input name="courriel" id="courriel" aria-required="true"
    onblur="checkValidity('courriel', '@', 'L’adresse électronique saisie est invalide&nbsp;!');"/>
```

**Test de l’exemple**

Si vous utilisez Firefox 3 (ou supérieur) et un lecteur d’écran actuellement pris en charge, essayez ce qui suit :

1.  Saisissez uniquement votre prénom dans le champ « Nom ». Lorsque vous changerez de champ avec la touche tabulation, vous entendrez une alerte vous avertissant que vous avez saisi un nom invalide. Vous pourrez alors revenir en arrière et corriger l’erreur.
2.  Saisissez une adresse électronique sans le symbole « @ ». Lorsque vous changerez de champ avec la touche tabulation, vous devriez entendre un avertissement vous indiquant que vous avez saisi une adresse électronique invalide.

Dans les deux cas, lorsque le focus revient sur le champ concerné, votre lecteur d’écran devrait vous dire que le champ est invalide. JAWS 9 prend en charge cette fonction, mais pas JAWS 8, aussi il se peut que ça ne fonctionne pas pour toutes les versions des lecteurs d’écran pris en charge.

## Quelques questions qu’on peut se poser

- Q. Pourquoi mettre à la fois un `(required)` dans le texte du label et l’attribut `aria-required` sur certains éléments {{ HTMLElement("input") }} ?
  - : R. Si nous avions un véritable formulaire dynamique et que le site était visité par un navigateur ne prenant pas en charge ARIA, nous voudrions tout de même donner une indication sur l’obligation de remplir le champ.
- Q. Pourquoi ne remettez-vous pas automatiquement le focus sur le champ invalide ?
  - : R. Cela n’est pas autorisé par, au moins, la spécification de l’API Windows, et probablement par d’autres. De plus, laisser le focus se déplacer sans réelle intervention de l’utilisateur n’est généralement pas considéré comme une chose à faire.

## Conclusion

L’accessibilité des sites web est grandement améliorée lorsqu’on fournit des alertes accessibles pour la validation côté client. Il n’y a rien de plus frustrant pour un utilisateur que de remplir un formulaire d’une vingtaine de champs, voire plus, de le soumettre, de constater que seuls quelques champs ne sont pas correctement renseignés et de devoir tout recommencer depuis le début pour s’assurer que les valeurs sont correctement mémorisées, ou de fournir des informations redondantes.
