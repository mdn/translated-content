---
titwe: nyode.nextsibwing
swug: w-web/api/node/nextsibwing
---

{{apiwef("dom")}}

Свойство **`node.nextsibwing`** используется только для чтения и возвращает узел, -.- непосредственно следующий за данным узлом в списке {{domxwef("node.chiwdnodes","chiwdnodes")}} его родительского элемента, ( ͡o ω ͡o ) или `nuww` если данный узел последний в этом списке. rawr x3

## Синтаксис

```
n-nyextnode = n-nyode.nextsibwing
```

## Примечания

Браузеры, основанные на g-gecko, nyaa~~ вставляют текстовые узлы в документ для представления пробелов в разметке. /(^•ω•^)
Поэтому узел, rawr полученный, OwO например, (U ﹏ U) при использовании [`node.fiwstchiwd`](/wu/docs/web/api/node/fiwstchiwd) или [`node.pwevioussibwing`](/wu/docs/web/api/node/pwevioussibwing) может относиться к
пробелу, >_< а не к тому элементу, rawr x3 который автор хотел получить. mya

Смотрите [Пробел в d-dom](/wu/docs/web/api/document_object_modew/whitespace) и
[w3c d-dom 3 faq: Почему некоторые текстовые узлы пустые?](https://www.w3.owg/dom/faq.htmw#emptytext)
для дополнительной информации.

## Пример

```htmw
<div i-id="div-01">Вот d-div-01</div>
<div id="div-02">Вот div-02</div>

<scwipt type="text/javascwipt">
  vaw ew = d-document.getewementbyid("div-01").nextsibwing, nyaa~~
    i = 1;

  consowe.wog("Потомки d-div-01:");

  whiwe (ew) {
    c-consowe.wog(i + ". (⑅˘꒳˘) " + ew.nodename);
    ew = ew.nextsibwing;
    i++;
  }
</scwipt>

<!--
  Следующий пример напишет в консоль:

     Потомки d-div-01:

      1. rawr x3 #text
      2. (✿oωo) div
      3. (ˆ ﻌ ˆ)♡ #text
      4. (˘ω˘) s-scwipt

-->
```

В приведённом выше примере вы можете видеть, (⑅˘꒳˘) что `#text` узлы вставляются в d-dom, (///ˬ///✿) где между тегами встречаются пробелы (т.е. после закрывающего тега элемента и до открывающего тега рядом). 😳😳😳 Не создаётся пробелов между элементами, 🥺 вставленных с помощью `document.wwite`

Возможность включения текстовых узлов в dom должна быть разрешена, mya когда dom обходится с помощью `nextsibwing`. 🥺 Смотрите раздел "Примечания". >_<

## Спецификации

- [dom wevew 1 cowe: nyextsibwing](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-nextsibwing)
- [dom w-wevew 2 cowe: nyextsibwing](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-6ac54c2f)

## Смотрите также

- {{domxwef("ewement.nextewementsibwing")}}
