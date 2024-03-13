---
title: distant example
slug: conflicting/MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web
---

{{MDNSidebar}}

## O exemplo

### HTML

```html
<div class="square">
  #<input class="color">
</div>
```

### CSS

```css
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
```

### JS

```js
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').value = color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

function getInputColor() {
  var value = document.querySelector('.color').value;
  var color = Number('0x' + color);
  if (color === +color) {
    return color.toString(16);
  }
  return value;
}

document.addEventListener('click', function () {
  setColor(getRandomColor());
});

document.addEventListener('keyup', function () {
  setColor(getInputColor());
});
```

## Resultado ao vivo

{{EmbedLiveSample('O exemplo', 120, 120)}}
