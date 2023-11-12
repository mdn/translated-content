---
title: Node.firstChild
slug: Web/API/Node/firstChild
---

{{APIRef("DOM")}}

Свойство **`Node.firstChild`** только для чтения, возвращающее первый потомок узла в древе или `null`, если узел является бездетным. Если узел это `документ`, он возвращает первый узел в списке своих прямых детей.

## Синтаксис

```
var childNode = node.firstChild;
```

## Описание

`childNode` это ссылка на первый потомок `node,` если таковой имеется, в противном случае это `null`.

## Пример

Этот пример демонстрирует использование `firstChild` и как этому свойству могут мешать пробелы. Смотрите раздел [Notes](#notes) для получения дополнительной информации о обработке пробелов в Gecko DOM.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script type="text/javascript">
  var p01 = document.getElementById("para-01");
  alert(p01.firstChild.nodeName);
</script>
```

В данном примере alert выведет '#text', потому что текстовый узел вставлен для сохранения пробела между концом открытого \<p> и тега \<span>. **Любое** пустое пространство между элементами является причиной вставки узла #text, начиная от единичного пробела, разрыва строки, отступа и так далее.

Другой #text узел вставляется между закрывающими тегами \</span> и \</p>.

Если эти пробелы удаляются из источника, #text узлы не вставляются и элемент span становится первым потомком абзаца.

```html
<p id="para-01"><span>First span</span></p>

<script type="text/javascript">
  var p01 = document.getElementById("para-01");
  alert(p01.firstChild.nodeName);
</script>
```

Теперь alert будет показывать 'SPAN'.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
