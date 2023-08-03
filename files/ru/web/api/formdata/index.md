---
title: FormData
slug: Web/API/FormData
---

{{APIRef("XMLHttpRequest")}}

XMLHttpRequest 2 добавляет поддержку для нового интерфейса FormData. Объекты FormData позволяют вам легко конструировать наборы пар ключ-значение, представляющие поля формы и их значения, которые в дальнейшем можно отправить с помощью метода [`send()`](</ru/docs/DOM/XMLHttpRequest#send()> "XMLHttpRequest#send()").

FormData использует такой же формат на выходе, как если бы мы отправляли обыкновенную форму с encoding установленным в "multipart/form-data".

> **Примечание:** О деталях использования FormData можно прочитать в статье [Использование объекта FormData](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects).

## Конструктор

- {{domxref("FormData.FormData","FormData()")}}
  - : Создаёт объект `FormData`.

## Методы

- {{domxref("FormData.append()")}}
  - : Добавляет новое значение существующего поля объекта `FormData`, либо создаёт его и присваивает значение.
- {{domxref("FormData.delete()")}}
  - : Удаляет пару ключ-значение из объекта `FormData`.
- {{domxref("FormData.get()")}}
  - : Возвращает первое значение ассоциированное с переданным ключом из объекта `FormData`.
- {{domxref("FormData.getAll()")}}
  - : Возвращает массив всех значений ассоциированных с переданным ключом из объекта `FormData`.
- {{domxref("FormData.has()")}}
  - : Возвращает булево значение касательно наличия в объекте `FormData` конкретной пары ключ-значение.
- {{domxref("FormData.set()")}}
  - : Устанавливает новое значение для существующего ключа объекта `FormData`, или добавляет пару ключ-значение, если таковой не обнаружено в объекте.
- {{domxref("FormData.keys()")}}
  - : Возвращает {{jsxref("Iteration_protocols", "iterator")}} , который позволяет пройтись по всем ключам для каждой пары "ключ-значение" , содержащимся внутри объекта `FormData`
- {{domxref("FormData.entries()")}}
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}} который позволяет пройтись по всем парам "ключ-значение", содержащимся внутри объекта `FormData`
- {{domxref("FormData.values()")}}
  - : Возвращает {{jsxref("Iteration_protocols", "iterator")}} , который позволяет пройтись по всем значениям , содержащимся в объекте `FormData`

> **Примечание:** Разница между {{domxref("FormData.set()")}} и {{domxref("FormData.append()")}} заключается в том, что если указанный ключ найден в объекте, {{domxref("FormData.set()")}} перезапишет его новым значением, тогда как {{domxref("FormData.append()")}} добавит новое значение в конец существующего. Смотрите дополнительные материалы с примерами.

## Спецификация

{{Specifications}}

## Совместимость

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Использование объектов FormData](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
