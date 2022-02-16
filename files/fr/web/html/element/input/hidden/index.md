---
title: <input type="hidden">
slug: Web/HTML/Element/Input/hidden
tags:
  - Element
  - Input
  - Reference
translation_of: Web/HTML/Element/input/hidden
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} de type **`"hidden"`** permettent aux développeurs web d'inclure des données qui ne peuvent pas être vues ou modifiées lorsque le formulaire est envoyé. Cela permet par exemple d'envoyer l'identifiant d'une commande ou un jeton de sécurité unique. Les champs de ce type sont invisibles sur la page.

> **Note :** La ligne de code suivante est suivie du rendu associé... si l'exemple fonctionne correctement, vous ne devriez rien voir :)

## Exemple simple

```html
<input id="prodId" name="prodId" type="hidden" value="xm234jq">
```

{{EmbedLiveSample('Exemple_simple', 600, 40)}}

> **Note :** Attention, les évènements DOM [`input`](/fr/docs/Web/API/HTMLElement/input_event) et [`change`](/fr/docs/Web/API/HTMLElement/change_event) ne s'appliquent pas à ce type de contrôle. Les champs masqués ne peuvent pas recevoir le focus, y compris en JavaScript avec `hiddenInput.focus()`).

## Valeur

L'attribut {{htmlattrxref("value", "input")}} de l'élément contient une chaîne de caractères masquée qui est envoyée au serveur avec le formulaire. Cette valeur ne peut pas directement être éditée par l'utilisateur sur la page (mais elle est toujours accessible et modifiable via les outils de développement intégrés au navigateur).

> **Attention :** Bien que la valeur ne soit pas affichée sur la page, elle est visible et modifiable par l'utilisateur si ce dernier utilise les outils de développements intégrés aux navigateurs (par exemple "Afficher la source"). Le type `hidden` ne doit donc pas être utilisé comme mécanisme de sécurité.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments `<input>`, les champs masqués peuvent utiliser les attributs suivants :

| Attribut               | Description                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("name")}}` | À l'instar de l'ensemble des champs de saisie, ce sera le nom auquel associer la donnée lors de l'envoi du formulaire. Si la valeur spéciale `"_charset_"` est utilisée pour cet attribut, la valeur du champ sera l'encodage utilisé pour l'envoi du formulaire. |

### {{htmlattrdef("name")}}

Cet attribut fait partie des attributs communs à l'ensemble des éléments `<input>` mais il possède un comportement particulier pour les champs masqués. En effet, si cet attribut utilise la valeur spéciale `"_charset_"`, la valeur du champ envoyée avec le formulaire sera l'encodage utilisé pour l'envoi du formulaire.

## Utiliser les valeurs masquées dans les formulaires

Comme évoqué ci-avant, les éléments `<input type="hidden"`> peuvent être utilisés lorsque le formulaire sert à transmettre des données avec lesquelles l'utilisateur n'est pas censé intéragir.

### Suivre les modifications apportées au contenu

Un usage fréquent de ces éléments est de garder un registre des données qui doivent être mises à jour dans une base de données lorsque le formulaire est envoyé. Le processus est généralement le suivant :

1.  L'utilisateur édite du contenu (un billet de blog, une fiche d'un produit) en commençant par cliquer sur le bouton Éditer.
2.  Le contenu à modifier est extrait de la base de données et est chargé dans le formulaire HTML afin que l'utilisateur puis appliquer les modifications voulues.
3.  Après avoir éditer, l'utilisateur envoie le formulaire et les données mises à jour sont envoyées au serveur qui se charge d'appliquer cette mise à jour en base de données.

Ici, lors de la deuxième étape, on peut récupérer l'identifiant de l'enregistrement et le placer dans un champ caché du formulaire. Lorsque le formulaire est envoyé à l'étape 3, l'identifiant est automatiquement envoyé au serveur avec le contenu. L'identifiant permet alors au serveur de connaître l'enregistrement de la base de données qui doit être mis à jour.

Pour un exemple complet, voir la section {{anch("Exemples")}} ci-après.

### Contribuer à la sécurité d'un site web

Les champs masqués sont également employés afin de stocker des jetons de sécurité (aussi appelés « secrets ») afin d'améliorer la sécurité d'un site. Pour un formulaire sensible (par exemple le transfert d'argent d'un compte à un autre sur un site bancaire), le secret est généré par le serveur et intégré sur la page afin de prouver l'identité de l'utilisateur et que c'est bien le bon formulaire qui est utilisé pour effectuer le transfert.

Cela permet d'éviter le cas où quelqu'un crée un faux site et un faux formulaire pour transférer de l'argent sur le mauvais compte (c'est ce qu'on appelle [Cross Site Request Forgery (CSRF)](https://fr.wikipedia.org/wiki/Cross-Site_Request_Forgery)).

> **Note :** Comme indiqué précédemment, placer le secret dans un champ masqué ne le rend pas plus sécurisé. La composition, l'encodage de la clé et la vérification par le serveur sont autant d'étapes cruciales pour garantir la qualité du secret utilisé. Le champ masqué n'est finalement qu'un outil qui simplifie l'envoi de cette information au serveur lorsque l'utilisateur envoie le formulaire.

## Validation

Aucune contrainte de validation n'est appliquée sur ces valeurs.

## Exemples

Voyons comment implémenter une version simple du formulaire d'édition décrit précédemment : on utilise un champ masqué pour mémoriser l'identifiant de la donnée qui est modifiée.

### HTML

Voici le fragment HTML pour le formulaire :

```html
<form>
  <div>
    <label for="title">Titre du billet :</label>
    <input type="text" id="title" name="title" value="Mon meilleur billet">
  </div>
  <div>
    <label for="content">Contenu :</label>
    <textarea id="content" name="content" cols="60" rows="5">
Voici le contenu de mon meilleur billet, j'espère que ça vous plaît !
    </textarea>
  </div>
  <div>
    <button type="submit">Mettre à jour le billet</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657">
</form>
```

### CSS

Ajoutons quelques éléments de mise en forme :

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

input, textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

### JavaScript

Le serveur génèrera la page HTML avec l'identifiant `"postID"` qui contient l'identifiant du billet de la base de données. Lorsque l'utilisateur termine l'édition, c'est le navigateur qui envoie cette donnée au serveur ainsi que les autres données du formulaire. Aucun code JavaScript n'est nécessaire pour gérer cela.

### Résultat

{{EmbedLiveSample('Exemples', '100%', 200)}}

> **Note :** Vous pouvez consulter l'exemple sur GitHub (cf. [le code source](https://github.com/mdn/learning-area/blob/master/html/forms/hidden-input-example/index.html) et [la démonstration _live_](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Lorsque le formulaire est envoyé, les données envoyées au serveur ressembleront à :

`title=Mon+meilleur+billet&content=Le+contenu+de+mon+meilleur+article.+J'espère+qu'il+vous+plaît!&postId=34657`

Bien que le champ masqué soit invisible sur la page, il fait toujours partie des données envoyées.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente la valeur de la donnée masquée qu'on souhaite envoyer au
        serveur.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>{{htmlattrxref("autocomplete", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune.</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#hidden-state-(type=hidden)', '&lt;input type="hidden"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.2', 'sec-forms.html#hidden-state-typehidden', '&lt;input type="hidden"&gt;')}}     | {{Spec2('HTML5.2')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-hidden")}}

## Voir aussi

- [Guide sur les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}}
- L'interface DOM {{domxref("HTMLInputElement")}}
