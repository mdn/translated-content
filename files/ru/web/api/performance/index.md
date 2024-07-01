---
title: Performance
slug: Web/API/Performance
---

{{APIRef("Navigation Timing")}}

Интерфейс **`Performance`** представляет информацию о производительности страницы с временными метками.

Объект этого типа может быть получен в результате вызова атрибута {{domxref("Window.performance")}}, доступного только для чтения.

> **Примечание:** Этот интерфейс и его составляющие доступны в [фоновых потоках выполнения](/ru/docs/Web/API/Web_Workers_API), за исключением случаев, перечисленных ниже. Заметим, что некоторые доступные части интерфейса ещё не документированы (подробнее см. разделы документации [Performance Timeline](http://www.w3.org/TR/performance-timeline/#sec-window.performance-attribute) и [User Timing](http://www.w3.org/TR/user-timing/#extensions-performance-interface)). Также заметим, что временные метки производительности относятся к текущему контексту. Если вы создадите метку в основном потоке (или в другом фоновом потоке), то её нельзя будет увидеть в другом фоновом потоке и наоборот.

## Свойства

_Интерфейс `Performance` не наследует никаких других свойств._

- {{domxref("Performance.navigation")}} {{readonlyInline}}
  - : Объект {{domxref("PerformanceNavigation")}}, представляющий тип навигации в текущем контексте браузера, как, например, количество перенаправлений, которые нужно пройти, чтобы получить ресурс. Not available in workers.

<!---->

- {{domxref("Performance.onresourcetimingbufferfull")}}
  - : Колбэк-функция, реализующая интерфейс {{domxref("EventTarget")}}, вызываемая при наступлении события {{event("resourcetimingbufferfull")}}.

<!---->

- {{domxref("Performance.timing")}} {{readonlyInline}}
  - : Объект {{domxref("PerformanceTiming")}}, содержащий информацию о производительности, связанной со временем задержек. Not available in workers.

## Методы

**Интерфейс `Performance` не наследует других методов**.

- {{domxref("Performance.clearMarks()")}}
  - : Удаляет из буфера записей производительности браузера указанную _временну́ю метку_.
- {{domxref("Performance.clearMeasures()")}}
  - : Удаляет из буфера записей производительности браузера указанное _измерение_.
- {{domxref("Performance.clearResourceTimings()")}}
  - : Удаляет все {{domxref("PerformanceEntry","записи о производительности")}} со свойством {{domxref("PerformanceEntry.entryType","entryType")}} равным "`resource`" из буфера данных производительности браузера.
- {{domxref("Performance.getEntries()")}}
  - : Возвращает список объектов {{domxref("PerformanceEntry")}}, руководствуясь переданным аргументом _filter._
- {{domxref("Performance.getEntriesByName()")}}
  - : Возвращает список объектов {{domxref("PerformanceEntry")}}, руководствуясь аргументами _name_ (название) and _entry type_ (тип записи).
- {{domxref("Performance.getEntriesByType()")}}
  - : Возвращает список объектов {{domxref("PerformanceEntry")}} переданного, как аргумент, _типа записи_.
- {{domxref("Performance.mark()")}}
  - : Создаёт {{domxref("DOMHighResTimeStamp","временну́ю метку")}} с заданным именем в _буфере записей производительности._
- {{domxref("Performance.measure()")}}
  - : Создаёт именованную {{domxref("DOMHighResTimeStamp","временну́ю метку")}} в буфере записей производительности браузера между двумя определёнными метками (известных как _start mark_ (начальная метка) и _end mark_ (конечная метка), соответственно).
- {{domxref("Performance.now()")}}
  - : Возвращает объект {{domxref("DOMHighResTimeStamp")}}, представляющий количество миллисекунд, прошедших с начала момента отсчёта.
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : Устанавливает размер буфера измерения ресурсов браузера равным указанному числу объектов {{domxref("PerformanceEntry","записей производительности")}} {{domxref("PerformanceEntry.entryType","типа")}} "`resource`".
- {{domxref("Performance.toJSON()")}}
  - : Возвращает json объект, представляющий объект `Performance.`

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Похожие интерфейсы: {{domxref("PerformanceTiming")}}, {{domxref("PerformanceNavigation")}}.
