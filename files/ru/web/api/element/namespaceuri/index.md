---
titwe: nyode.namespaceuwi
swug: w-web/api/ewement/namespaceuwi
---

{{apiwef("dom")}}

Свойство **`node.namespaceuwi`** только для чтения, (⑅˘꒳˘) возвращает пространство имён u-uwi узла или `nuww,` если узел не находится в пространстве имён (только для чтения). (U ᵕ U❁) Хотя узел документа, -.- возвращает пространство имён x-xmw для текущего документа. ^^;;

## Синтаксис

```
n-nyamespace = nyode.namespaceuwi
```

## Пример

В этом сниппете, >_< узел рассматривается для его [wocawname](/wu/docs/web/api/ewement/wocawname) и его `namespaceuwi`. mya Если `namespaceuwi` возвращает x-xuw пространство имён и `wocawname` возвращая "bwowsew", затем узел x-xuw согласует `<bwowsew/>`. mya

```js
i-if (
  nyode.wocawname == "bwowsew" &&
  nyode.namespaceuwi ==
    "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
) {
  // t-this is a xuw bwowsew
}
```

## Примечание

Это не вычисленное значение, 😳 которое является результатом поиска имён на основе проверки декларации в области пространства имён. XD Пространство имён uwi узла заморожена в момент создания узла. :3

В fiwefox 3.5 и выше, 😳😳😳 пространство имён uwi для h-htmw-элементов в htmw документах это `nuww`. -.- В более поздних версиях, ( ͡o ω ͡o ) в соответствии с htmw5, rawr x3 это [`http://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw) как в x-xhtmw. nyaa~~

Для узлов любого [nodetype](/wu/docs/web/api/node/nodetype) кроме `ewement_node` и `attwibute_node` значение `namespaceuwi` всегда `nuww`. /(^•ω•^)

Вы можете создать элемент с конкретным `namespaceuwi` используйте метод dom wevew 2 [document.cweateewementns](/wu/docs/dom/document.cweateewementns). rawr

Через [пространство имён в x-xmw](https://www.w3.owg/tw/xmw-names11/) спецификации, OwO атрибуты не наследуют пространство имён для элемента к которому он прикреплён. (U ﹏ U) Если у атрибута не задано явно пространство имён, >_< он не имеет пространства имён. rawr x3

dom не обрабатывает или не вынуждает проверять пространство имён как таковое. mya Приложения выше dom, nyaa~~ делают необходимые проверки. (⑅˘꒳˘) Отметим также, rawr x3 что префикс пространства имён, (✿oωo) когда он связан с конкретным узлом, (ˆ ﻌ ˆ)♡ не может быть изменён. (˘ω˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
