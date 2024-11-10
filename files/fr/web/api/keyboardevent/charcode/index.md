---
title: KeyboardEvent.charCode
slug: Web/API/KeyboardEvent/charCode
---

{{Deprecated_Header}}

{{APIRef("UI Events")}}

La propriété en lecture seule {{domxref("KeyboardEvent.charCode")}} retourne la valeur Unicode d'une touche caractère pressée pendant un évènement {{ domxref("element.onkeypress", "keypress") }}.

Pour des constantes équivalant ces codes numériques, voir {{ domxref("KeyboardEvent", "KeyEvent") }}.

> [!NOTE]
> N'utilisez plus cette propriété, elle est dépréciée. Utilisez plutôt {{domxref("KeyboardEvent.key")}}.

## Syntaxe

```js
var value = event.charCode;
```

- _`value`_ est la valeur Unicode du caractère associé à la touche pressée.

## Exemple

```html
<html>
  <head>
    <title>Exemple charCode</title>

    <script type="text/javascript">
      function AfficherCaractere(e) {
        alert(
          "Touche tapée : " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode,
        );
      }
    </script>
  </head>

  <body onkeypress="AfficherCaractere(event);">
    <p>Tapez une touche caractère de votre clavier (a,b,c...)</p>
  </body>
</html>
```

## Notes

Après un évènement {{ domxref("element.onkeypress", "keypress") }}, la valeur Unicode de la touche pressée est stockée dans l'une ou l'autre des propriétés `{{ domxref("event.keyCode", "keyCode") }}` et `charCode`, jamais les deux à la fois. Si la touche pressée génère un caractère (ex. 'a'), `charCode` prend la valeur du code de ce caractère, en respectant la casse. (i.e. `charCode` tient compte d'une touche Maj. enfoncée). Sinon, le code est stocké dans `keyCode`.

Quand une ou plusieurs touche modificatrices sont pressées, il y a quelques règles complexes pour `charCode`, jetez un oeil à [Gecko Keypress Event](/fr/docs/Gecko_Keypress_Event) (en anglais) pour le détail.

`charCode` n'est jamais défini lors d'évènements {{ domxref("element.onkeydown", "keydown") }} et {{ domxref("element.onkeyup", "keyup") }}. Dans ces cas, `keyCode` is set instead.

Pour obtenir le code de la touche qu'il soit stocké dans `keyCode` ou `charCode`, requêtez la propriété {{ domxref("event.which", "which") }}.

Les caractères entrés via IME ne s'enregistrent pas sous `keyCode` ou `charCode`. Actually with the Chinese IME I'm using, entering the IME results in a keypress event with keyCode = 229 and no other key events fire until the IME exits (which may happen after multiple characters are inputted). I'm not sure if other IME's work this way.

Pour une liste de valeurs de `charCode` associées à leurs touches, lancez l'exemple dans [Gecko DOM Reference:Examples #Example 7: Displaying Event Object Constants](/fr/docs/Web/API/Document_Object_Model/Examples#example_7:_displaying_event_object_properties) (en anglais) et regardez le tableau HTML résultant.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
