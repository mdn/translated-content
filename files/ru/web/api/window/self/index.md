---
title: Window.self
slug: Web/API/Window/self
translation_of: Web/API/Window/self
---
{{ APIRef() }}

Свойство **`Window.self`** доступно только для чтения и возвращает объект window в виде объекта {{domxref("WindowProxy")}}. Для доступа к данному свойству возможно использовать точечную нотацию и объект `window` (`window.self`) или переменную `self`. Преимущество доступа через переменную `self` заключается в том, что её можно использовать в окружениях, в которых нет window, например {{domxref("Worker", "Web Workers")}}. Использование `self` даёт возможность обращаться к глобальному объекту не только в окружениях где есть window (в таком случае `self` эквивалентна `window.self`), но также в воркерах (в случае воркера `self` эквивалентна {{domxref("WorkerGlobalScope.self")}}).

## Пример

В следующем примере `window.self` точно также может быть заменено на `window`.

```js
if (window.parent.frames[0] != window.self) {
    // этот window не является первым frame в списке
}
```

Кроме того, когда код выполняется в активном документе браузера, объект `window` является ссылкой на текущий глобальный объект и таким образом:

```js
var w1 = window;
var w2 = self;
var w3 = window.window;
var w4 = window.self;
// Значения переменных w1, w2, w3, w4 строго равны между собой
// Но только переменная w2 будет работать в workers
```

## Спецификации

| Specification                                                                            | Status                           | Comment                                                                 |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-self', 'Window.self')}}                 | {{Spec2('HTML WHATWG')}} | No difference from the latest snapshot {{SpecName("HTML5.1")}} |
| {{SpecName('HTML5.1', 'browsers.html#dom-self', 'Window.self')}}     | {{Spec2('HTML5.1')}}     | No difference from the {{SpecName("HTML5 W3C")}}                 |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-self', 'Window.self')}} | {{Spec2('HTML5 W3C')}}     | First snapshot containing the definition of `Window.self`.              |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Its `Worker` equivalent, {{domxref("WorkerGlobalScope.self")}}.
