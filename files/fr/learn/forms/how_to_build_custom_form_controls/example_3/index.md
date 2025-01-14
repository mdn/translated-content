---
title: Exemple 3
slug: Learn/Forms/How_to_build_custom_form_controls/Example_3
---

Ceci est le troisième exemple expliquant comment [construire des widgets de formulaire personnalisés](/fr/docs/Learn/Forms/How_to_build_custom_form_controls).

## Changement d'état

### Contenu HTML

```html
<form class="no-widget">
  <select name="myFruit" tabindex="-1">
    <option>Cerise</option>
    <option>Citron</option>
    <option>Banane</option>
    <option>Fraise</option>
    <option>Pomme</option>
  </select>

  <div class="select" tabindex="0">
    <span class="value">Cerise</span>
    <ul class="optList hidden">
      <li class="option">Cerise</li>
      <li class="option">Citron</li>
      <li class="option">Banane</li>
      <li class="option">Fraise</li>
      <li class="option">Pomme</li>
    </ul>
  </div>
</form>
```

### Contenu du CSS

```css
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

/* --------------- */
/* Styles Requis   */
/* --------------- */

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

/* ------------ */
/* Style chic  */
/* ------------ */

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: -webkit-linear-gradient(90deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

### Contenu JavaScript

```js
// ----------- //
// UTILITAIRES //
// ----------- //

NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
};

// ------------------------- //
// Définitions des fonctions //
// ------------------------- //

function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  var optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  var optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  var optionList = select.querySelectorAll(".option");

  optionList.forEach(function (other) {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

// ------------------- //
// Lien aux événements //
// ------------------- //

window.addEventListener("load", function () {
  var form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", function () {
  var selectList = document.querySelectorAll(".select");

  selectList.forEach(function (select) {
    var optionList = select.querySelectorAll(".option");

    optionList.forEach(function (option) {
      option.addEventListener("mouseover", function () {
        highlightOption(select, option);
      });
    });

    select.addEventListener(
      "click",
      function (event) {
        toggleOptList(select);
      },
      false,
    );

    select.addEventListener("focus", function (event) {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", function (event) {
      deactivateSelect(select);
    });
  });
});
```

### Résultat

{{ EmbedLiveSample('Changement_détat') }}
