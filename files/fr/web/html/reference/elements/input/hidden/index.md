---
title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Les éléments {{HTMLElement("input")}} de type **`"hidden"`** permettent aux développeur·euse·s web d'inclure des données qui ne peuvent pas être vues ni modifiées par les utilisateur·ice·s lors de l'envoi d'un formulaire. Par exemple, l'identifiant du contenu actuellement commandé ou modifié, ou un jeton de sécurité unique. Les champs masqués sont totalement invisibles dans la page rendue, et il n'existe aucun moyen de les rendre visibles dans le contenu de la page.

> [!NOTE]
> Les {{DOMxRef("Element/input_event", "input")}} et {{DOMxRef("HTMLElement/change_event", "change")}} évènements ne s'appliquent pas à ce type d'élément. Les champs masqués ne peuvent pas recevoir la sélection, même avec JavaScript (par exemple, `hiddenInput.focus()`).

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de l'élément {{HTMLElement("input")}} contient une chaîne de caractères qui représente les données masquées que vous souhaitez inclure lorsque le formulaire est envoyé au serveur. Cette valeur ne peut pas être modifiée ni consultée par les utilisateur·ice·s dans l'interface utilisateur, bien qu'il·elle soit modifiable avec les outils de développement du navigateur.

> [!WARNING]
> Bien que la valeur ne soit pas affichée aux utilisateur·ice·s dans le contenu de la page, elle est visible — et peut être modifiée — à l'aide des outils de développement de n'importe quel navigateur ou de la fonctionnalité «&nbsp;Afficher la source&nbsp;». Ne pas se fier aux champs `hidden` comme mécanisme de sécurité.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs `hidden` proposent les attributs suivants.

### `name`

Il s'agit en réalité d'un des attributs communs, mais il possède une signification particulière pour les champs masqués. Normalement, l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name) fonctionne sur les champs masqués comme sur tout autre champ. Cependant, lorsque le formulaire est soumis, un champ masqué dont le `name` est défini sur `_charset_` sera automatiquement transmis avec pour valeur l'encodage de caractères utilisé pour l'envoi du formulaire.

## Utiliser les valeurs masquées dans les formulaires

Comme indiqué ci‑dessus, les champs masqués peuvent être utilisés partout où vous souhaitez inclure, avec le formulaire envoyé au serveur, des données que l'utilisateur·ice ne peut pas voir ni modifier. Voyons quelques exemples qui illustrent leur utilisation.

### Suivre les modifications apportées au contenu

Un des usages les plus courants des champs masqués est de conserver l'information de l'enregistrement de la base de données à mettre à jour lorsqu'un formulaire d'édition est soumis. Un flux de travail typique est le suivant&nbsp;:

1. L'utilisateur·ice décide d'éditer un contenu dont il·elle a la charge, par exemple un billet de blog ou une fiche produit. Il·elle commence en cliquant sur le bouton Éditer.
2. Le contenu à modifier est extrait de la base de données et chargé dans un formulaire HTML afin que l'utilisateur·ice puisse appliquer les modifications souhaitées.
3. Après l'édition, l'utilisateur·ice soumet le formulaire, et les données mises à jour sont renvoyées au serveur pour être actualisées en base de données.

L'idée est que lors de l'étape 2, l'identifiant de l'enregistrement à mettre à jour est conservé dans un champ masqué. Lorsque le formulaire est soumis à l'étape 3, l'identifiant est automatiquement envoyé au serveur avec le contenu de l'enregistrement. Cet identifiant permet au composant serveur du site de savoir précisément quel enregistrement doit être mis à jour avec les données soumises.

Vous pouvez consulter un exemple complet dans la section [Exemples](#exemples) ci‑dessous.

### Contribuer à la sécurité d'un site web

Les champs masqués sont également utilisés pour stocker et envoyer des jetons de sécurité, ou _secrets_, afin d'améliorer la sécurité d'un site web. L'idée de base est que, si un·e utilisateur·ice remplit un formulaire sensible — par exemple un formulaire sur le site de sa banque pour transférer de l'argent vers un autre compte — le secret fourni permet de prouver son identité et de garantir qu'il·elle utilise le bon formulaire pour soumettre la demande de transfert.

Cela empêcherait un·e utilisateur·ice malveillant·e de créer un formulaire falsifié, de se faire passer pour une banque et d'envoyer le formulaire par courriel à des utilisateur·ice·s sans méfiance pour les tromper et les amener à transférer de l'argent au mauvais endroit. Ce type d'attaque s'appelle une [Falsification de requête inter-sites (CSRF)](/fr/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#falsification_de_requête_inter-sites_csrf)&nbsp;; pratiquement tous les frameworks côté serveur réputés utilisent des secrets masqués pour prévenir de telles attaques.

> [!NOTE]
> Le fait de placer le secret dans un champ masqué ne le rend pas intrinsèquement sécurisé. C'est la composition et l'encodage de la clé qui assurent la sécurité. L'intérêt du champ masqué est de garder le secret associé aux données et de l'inclure automatiquement lorsque le formulaire est envoyé au serveur. Il est nécessaire d'utiliser des secrets bien conçus pour réellement sécuriser votre site web.

## Validation

Les champs masqués ne participent pas à la validation des contraintes&nbsp;; ils n'ont aucune valeur réelle à contraindre.

## Exemples

Voyons comment nous pourrions implémenter une version du formulaire d'édition décrit précédemment (voir [Suivre les modifications apportées au contenu](#suivre_les_modifications_apportées_au_contenu)), en utilisant un champ masqué pour mémoriser l'identifiant de l'enregistrement modifié.

Le HTML du formulaire d'édition pourrait ressembler un peu à ceci&nbsp;:

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

Lors de la soumission, les données du formulaire envoyées au serveur ressembleront à ceci&nbsp;:

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
      <td><strong>Méthodes</strong></td>
      <td>Aucune.</td>
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
