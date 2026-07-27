---
title: "FormData : constructeur FormData()"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Le constructeur **`FormData()`** crée un nouvel objet {{DOMxRef("FormData")}}.

## Syntaxe

```js-nolint
new FormData()
new FormData(form)
new FormData(form, submitter)
```

### Paramètres

- `form` {{Optional_Inline}}
  - : Un élément HTML {{HTMLElement("form")}} — quand il est défini, l'objet {{DOMxRef("FormData")}} est rempli avec les clés/valeurs actuelles du `form` en utilisant la propriété `name` de chaque élément pour les clés et leur valeur envoyée pour les valeurs. Il encode également le contenu des fichiers. Un évènement {{DOMxRef("HTMLFormElement/formdata_event", "formdata")}} est déclenché sur le formulaire lorsque l'objet `FormData` est créé, permettant au formulaire de modifier les données du formulaire si nécessaire.
- `submitter` {{Optional_Inline}}
  - : Avec {{Glossary("submit button", "bouton d'envoi")}} qui est un membre du `form`. Si le `submitter` a un attribut `name` ou est un `{{HTMLElement('input/image', '&lt;input type="image"&gt;')}}`, ses données [sont incluses](/fr/docs/Glossary/Submit_button#données_envoyées_par_le_formulaire) dans l'objet {{DOMxRef("FormData")}} (par exemple, `btnName=btnValue`).

## Exemples

### Créer un `FormData` vide

La ligne suivante crée un objet {{DOMxRef("FormData")}} vide&nbsp;:

```js
const formData = new FormData();
```

Vous pouvez ajouter un couple clé/valeur en utilisant {{DOMxRef("FormData.append", "append()")}}&nbsp;:

```js
formData.append("username", "Chris");
```

### Pré-remplir à partir d'un élément HTML `form`

Vous pouvez définir les arguments optionnels `form` et `submitter` lors de la création de l'objet `FormData`, afin de le pré-remplir avec les valeurs provenant du formulaire défini.

> [!NOTE]
> Seuls les contrôles de formulaire réussis sont inclus dans un objet `FormData`, c'est-à-dire ceux qui ont un nom et qui ne sont pas dans un état désactivé.

#### HTML

```html
<form id="form">
  <input type="text" name="texte1" value="toto" />
  <input type="text" name="texte2" value="tata" />
  <input type="text" name="texte3" value="truc" />
  <input type="checkbox" name="verification" checked disabled />
  <button name="intention" value="sauvegarde">Sauvegarder</button>
  <button name="intention" value="sauvegardeCommeCopie">
    Sauvegarder comme copie
  </button>
</form>

<output id="sortie"></output>
```

```css hidden
form {
  display: none;
}

output {
  display: block;
  white-space: pre-wrap;
}
```

#### JavaScript

```js
const form = document.getElementById("form");
const btnEnvoi = document.querySelector("button[value=sauvegarde]");
const formData = new FormData(form, btnEnvoi);

const sortie = document.getElementById("sortie");

for (const [cle, valeur] of formData) {
  sortie.textContent += `${cle}: ${valeur}\n`;
}
```

#### Résultat

Pour plus de concision, l'élément `<form>` est masqué.

{{EmbedLiveSample("Pré-remplir à partir d'un élément HTML `form`", "", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
