---
title: Valeur d'attribut HTML `<input type="hidden">`
short-title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: 659af2b5da3a3bf4064e75c3e4b7624386bec54b
---

Les éléments {{HTMLElement("input")}} de type **`"hidden"`** permettent aux développeur·euse·s web d'inclure des données dans un formulaire qui ne sont pas accessibles visuellement aux utilisateur·ice·s lorsque le formulaire est envoyé. Par exemple, l'identifiant du contenu actuellement commandé ou modifié, ou un jeton de sécurité unique. Les champs masqués sont totalement invisibles dans la page rendue, mais sont tout de même envoyés comme n'importe quel autre champ de formulaire. Bien que les données ne soient pas présentées aux utilisateur·ice·s dans le contenu rendu, elles restent accessibles dans le code HTML et peuvent être modifiées par les utilisateur·ice·s à l'aide d'outils tels que les [outils de développement du navigateur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

> [!NOTE]
> Les {{DOMxRef("Element/input_event", "input")}} et {{DOMxRef("HTMLElement/change_event", "change")}} évènements ne s'appliquent pas à ce type d'élément. Les champs masqués ne peuvent pas recevoir la sélection, même avec JavaScript (par exemple, `hiddenInput.focus()`).

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de l'élément {{HTMLElement("input")}} contient une chaîne de caractères qui représente les données masquées que vous souhaitez inclure lorsque le formulaire est envoyé au serveur. Cette n'est pas présentée à l'utilisateur·ice sur l'interface utilisateur.

> [!WARNING]
> Bien que la valeur ne soit pas affichée aux utilisateur·ice·s dans le contenu de la page, elle est visible — et peut être modifiée — à l'aide des outils de développement de n'importe quel navigateur ou de la fonctionnalité «&nbsp;Afficher la source&nbsp;». Ne pas se fier aux champs `hidden` comme mécanisme de sécurité.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs `hidden` proposent les attributs suivants.

### `name`

Il s'agit en réalité d'un des attributs communs, mais il possède une signification particulière pour les champs masqués. Normalement, l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name) fonctionne sur les champs masqués comme sur tout autre champ. Cependant, lorsque le formulaire est envoyé, un champ masqué dont le `name` est défini sur `_charset_` est automatiquement transmis avec pour valeur l'encodage de caractères utilisé pour l'envoi du formulaire.

## Utiliser les valeurs masquées dans les formulaires

Comme indiqué ci-dessus, les champs masqués peuvent être utilisés partout où vous souhaitez inclure des données que l'utilisateur·ice ne peut pas voir dans le formulaire lorsqu'il est envoyé au serveur. Voyons quelques exemples illustrant leur utilisation.

### Suivre les modifications apportées au contenu

Un des usages les plus courants des champs masqués est de conserver l'information de l'enregistrement de la base de données à mettre à jour lorsqu'un formulaire d'édition est envoyé. Un flux de travail typique est le suivant&nbsp;:

1. L'utilisateur·ice décide d'éditer un contenu dont il·elle a la charge, par exemple un billet de blog ou une fiche produit. Il·elle commence en cliquant sur le bouton Éditer.
2. Le contenu à modifier est extrait de la base de données et chargé dans un formulaire HTML afin que l'utilisateur·ice puisse appliquer les modifications souhaitées.
3. Après l'édition, l'utilisateur·ice envoie le formulaire, et les données mises à jour sont retournées au serveur pour être actualisées en base de données.

L'idée est que lors de l'étape 2, l'identifiant de l'enregistrement à mettre à jour est conservé dans un champ masqué. Lorsque le formulaire est envoyé à l'étape 3, l'identifiant est automatiquement envoyé au serveur avec le contenu de l'enregistrement. Cet identifiant permet au composant serveur du site de savoir précisément quel enregistrement doit être mis à jour avec les données envoyées.

Vous pouvez consulter un exemple complet dans la section [Exemples](#exemples) ci‑dessous.

### Contribuer à la sécurité d'un site web

Les champs de saisie cachés sont souvent utilisés pour stocker des jetons contre les attaques de type croisement de requêtes (CSRF), qui contribuent à protéger les sites web contre les [attaques CSRF](/fr/docs/Web/Security/Attacks/CSRF).

> [!NOTE]
> Les données placées dans un champ caché ne sont pas sécurisées par nature. Leur valeur reste visible par l'utilisateur·ice final·e. Vous devez utiliser des secrets bien conçus pour sécuriser efficacement votre site web.

## Validation

Les champs masqués ne participent pas à la validation des contraintes&nbsp;; ils n'ont aucune valeur réelle à contraindre.

## Exemples

Voyons comment nous pourrions implémenter une version du formulaire d'édition décrit précédemment (voir [Suivre les modifications apportées au contenu](#suivre_les_modifications_apportées_au_contenu)), en utilisant un champ masqué pour mémoriser l'identifiant de l'enregistrement modifié.

Le HTML du formulaire d'édition peut ressembler un peu à ceci&nbsp;:

```html
<form>
  <div>
    <label for="title">Titre du billet&nbsp;:</label>
    <input type="text" id="title" name="title" value="Mon meilleur billet" />
  </div>
  <div>
    <label for="content">Contenu du billet&nbsp;:</label>
    <textarea id="content" name="content" cols="60" rows="5">
Voici le contenu de mon meilleur billet, j'espère que ça vous plaît !
    </textarea>
  </div>
  <div>
    <button type="submit">Mettre à jour le billet</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

Ajoutons quelques éléments de mise en forme&nbsp;:

```css
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

Le serveur affecte la valeur du champ masqué dont l'ID est `postID` à l'identifiant de l'article dans sa base de données avant d'envoyer le formulaire au navigateur de l'utilisateur·ice, et utilise cette information lorsque le formulaire est retourné pour savoir quel enregistrement de la base de données mettre à jour avec les informations modifiées. Aucun script n'est nécessaire dans le contenu pour gérer cela.

La sortie ressemble à ceci&nbsp;:

{{EmbedLiveSample("Exemples", "100%", 200)}}

> [!NOTE]
> Vous pouvez aussi trouver l'exemple sur GitHub (voir le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), et aussi [le voir en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Lors de l'envoi, les données du formulaire envoyées au serveur ressemblent à ceci&nbsp;:

`title=Mon+meilleur+billet&content=Le+contenu+de+mon+meilleur+article.+J'espère+qu'il+vous+plaît!&postId=34657`

Bien que le champ masqué soit totalement invisible, ses données sont tout de même envoyées.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui représente la valeur de la donnée masquée qu'on souhaite envoyer au serveur.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td><a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("input")}} et l'interface API {{DOMxRef("HTMLInputElement")}} sur laquelle il est basé
