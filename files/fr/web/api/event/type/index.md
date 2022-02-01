---
title: Event.type
slug: Web/API/Event/type
tags:
  - API
  - DOM
  - Evènement
  - Propriétés
  - Type
translation_of: Web/API/Event/type
---
{{APIRef}}

La propriété en lecture seule **Event.type** retourne une chaîne de caractères (_string_) contenant le type de l'événement. Le type est défini lors de la construction de l'événement et est le nom d'usage pour se référer à celui-ci, tel que  `click`, `load` ou `error`.

L'argument `event` de {{ domxref("EventTarget.addEventListener()") }} et {{ domxref("EventTarget.removeEventListener()") }} n'est pas sensible à la casse.

Pour une liste des types d'événements disponibles, aller voir la page [Référence des évènements](/fr/docs/Web/Events).

## Syntaxe

    event.type

## Exemples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Event.type Example</title>

    <script>
        var currEvent;
        function getEvtType(evt) {
            console.group();

            currEvent = evt.type;
            console.log(currEvent);

            document.getElementById("Etype").innerHTML = currEvent;

            console.groupEnd();
        }

        //Évènements du clavier
        document.addEventListener("keypress", getEvtType, false); //[second]

        document.addEventListener("keydown", getEvtType, false); //premier
        document.addEventListener("keyup", getEvtType, false); //troisième

        //Évènements de la souris
        document.addEventListener("click", getEvtType, false); // troisième

        document.addEventListener("mousedown", getEvtType, false); //premier
        document.addEventListener("mouseup", getEvtType, false); //second

    </script>
</head>

<body>

<p>Press any key or click the mouse to get the event type.</p>
<p>Event type: <span id="Etype" style="color:red">-</span></p>

</body>
</html>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                        | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-event-type', 'Event.type')}}     | {{ Spec2('DOM WHATWG') }}     |                      |
| {{SpecName('DOM2 Events', '#Events-Event-type', 'Event.type')}} | {{ Spec2('DOM2 Events') }} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Event.type")}}
