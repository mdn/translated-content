---
title: "HTMLFormElement : méthode requestSubmit()"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La méthode **`requestSubmit()`** de l'interface {{DOMxRef("HTMLFormElement")}} demande que le formulaire soit soumis en utilisant un bouton de soumission spécifique.

## Syntaxe

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Paramètres

- `submitter` {{Optional_Inline}}
  - : Un {{Glossary("submit button", "bouton de soumission")}} qui est membre du formulaire.

    Si le `submitter` précise des attributs `form*`, ils [remplaceront](/fr/docs/Glossary/Submit_button#surcharge_du_comportement_des_formulaires) le comportement de soumission du formulaire (par exemple, `formmethod="POST"`).

    Si le `submitter` a un attribut `name` ou s'il s'agit d'un `{{HTMLElement('input/image', '&lt;input type="image"&gt;')}}`, ses données [seront incluses](/fr/docs/Glossary/Submit_button#entrees_de_donnees_du_formulaire) dans la soumission du formulaire (par exemple, `btnName=btnValue`).

    Si vous omettez le paramètre `submitter`, l'élément formulaire lui‑même est utilisé comme soumetteur.

### Valeur de retour

Aucun ({{JSxRef("undefined")}}).

### Exceptions

-- {{JSxRef("TypeError")}}

- : Levée si le `submitter` défini n'est pas un {{Glossary("submit button", "bouton de soumission")}}.
- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Levée si le `submitter` défini n'est pas membre du formulaire sur lequel `requestSubmit()` a été appelé. Le submitter doit être soit un descendant de l'élément `form`, soit disposer d'un attribut [`form`](/fr/docs/Web/HTML/Reference/Elements/input#form) faisant référence au formulaire.

## Notes d'utilisation

La question évidente est&nbsp;: pourquoi cette méthode existe‑t‑elle, alors que nous disposons de la méthode {{DOMxRef("HTMLFormElement.submit", "submit()")}} depuis toujours&nbsp;?

La réponse est simple. `submit()` soumet le formulaire, mais c'est tout ce qu'elle fait. `requestSubmit()`, en revanche, agit comme si un bouton de soumission avait été cliqué. Le contenu du formulaire est validé, et le formulaire est soumis seulement si la validation réussit. Une fois le formulaire soumis, l'événement {{DOMxRef("HTMLFormElement.submit_event", "submit")}} est renvoyé à l'objet `form`.

## Exemples

Dans l'exemple ci‑dessous, le formulaire est soumis en tentant d'utiliser `requestSubmit()` si cette méthode est disponible. Si un bouton de soumission ayant pour ID `main-submit` est trouvé, il est utilisé pour soumettre le formulaire. Sinon, le formulaire est soumis sans paramètre `submitter`, donc il est soumis directement par l'élément `form` lui‑même.

Si, en revanche, `requestSubmit()` n'est pas disponible, ce code revient à appeler la méthode {{DOMxRef("HTMLFormElement.submit", "submit()")}} du formulaire.

```js
let myForm = document.querySelector("form");
let submitButton = myForm.querySelector("#main-submit");

if (myForm.requestSubmit) {
  if (submitButton) {
    myForm.requestSubmit(submitButton);
  } else {
    myForm.requestSubmit();
  }
} else {
  myForm.submit();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
