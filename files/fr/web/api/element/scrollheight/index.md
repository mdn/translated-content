---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
---

{{ ApiRef() }}

L'attribut en lecture seule **`element.scrollHeight`** est une mesure de la hauteur du contenu d'un élément qui inclut le contenu débordant et non visible à l'écran. La valeur `scrollHeight` est égale à la hauteur minimum dont l'élément aurait besoin pour que le contenu rentre dans le viewpoint sans utiliser de barre de défilement. Cela inclut les marges internes mais pas les marges externes.

> **Note :** Cette propriété arrondit la valeur à l'entier le plus proche. Si vous avez besoin d'une valeur précise, utilisez [element.getBoundingClientRect()](/fr/docs/DOM/element.getBoundingClientRect).

## Syntaxe

```js
var intElemScrollHeight =
  document.getElementById(id_attribute_value).scrollHeight;
```

`intElemScrollHeight` est une variable contenant un entier correspondant à la valeur en pixels de la hauteur défilable de l'élément. `scrollHeight` est une propriété en lecture seule.

## Exemple

Avec l'évènement {{domxref("GlobalEventHandlers/onscroll", "onscroll")}}, cette équivalence peut s'avérer utile afin de déterminer si un utilisateur a lu du texte ou non (voir aussi les propriétés {{domxref("element.scrollTop")}} et {{domxref("element.clientHeight")}}).

La case à cocher de la démo est désactivée et ne peut être cochée tant que l'ensemble du contenu n'a pas défilé.

### HTML

```html
<form name="registration">
  <p>
    <textarea id="rules">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim. Phasellus
ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor lorem,
mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at, porta
at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis. Maecenas
luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent sem
sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem congue
turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra fermentum.
Fusce in arcu arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum varius et
a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio diam
pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat, ipsum
ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
    </textarea>
  </p>
  <p>
    <input type="checkbox" id="agree" name="accept" />
    <label for="agree">I agree</label>
    <input type="submit" id="nextstep" value="Next" />
  </p>
</form>
```

### CSS

```css
#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7fdf55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2a9f00 solid 2px;
  border-radius: 5px;
}
```

### JavaScript

```js
function checkReading() {
  if (checkReading.read) {
    return;
  }
  checkReading.read =
    this.scrollHeight - Math.round(this.scrollTop) === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep",
  ).disabled = !checkReading.read;
  checkReading.noticeBox.textContent = checkReading.read
    ? "Thank you."
    : "Please, scroll and read the following text.";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
};
```

### Résultat

{{EmbedLiveSample('Exemple', '640', '400')}}

## Problèmes et solutions

### Déterminer si un élément a complètement été défilé

L'expression suivante renvoie `true` si l'élément est à la fin du défilement, `false` si ça ne l'est pas.

```js
element.scrollHeight - element.scrollTop === element.clientHeight;
```

Associée à l'événement [element.onscroll](/fr/docs/DOM/element.onscroll), l'expression peut être utile pour déterminer si un utilisateur a lu un texte ou non (voir aussi les propriétés [element.scrollTop](/fr/docs/DOM/element.scrollTop) et [element.clientHeight](/fr/docs/DOM/element.clientHeight). Par exemple :

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example</title>
<script type="text/javascript">
function checkReading () {
  if (checkReading.read) { return; }
  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read;
  checkReading.noticeBox.innerHTML = checkReading.read ?
    "Merci." :
    "Veuillez faire défiler la page et lire le texte qui suit.";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
}
```

[Voir l'exemple en action](/files/4589/readme-example.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [MSDN: Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer 9](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
- [element.clientHeight](/fr/docs/DOM/element.clientHeight)
- [element.offsetHeight](/fr/docs/DOM/element.offsetHeight)
