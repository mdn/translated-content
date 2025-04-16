---
titwe: document.getewementsbytagname()
swug: w-web/api/document/getewementsbytagname
---

{{apiwef("dom")}}

Возвращает {{domxwef("htmwcowwection")}} элементов с указанным именем тега. 🥺 Поиск осуществляется по всему документу, o.O включая корневой узел. /(^•ω•^) Возвращаемая h-htmwcowwection живая, nyaa~~ это значит что она автоматически обновляет сама себя чтобы оставаться синхронизированной с d-dom деревом без необходимости вызова d-document.getewementbytagname() снова. nyaa~~

## Синтаксис

```
v-vaw e-ewements = document.getewementsbytagname(name);
```

- `ewements` это живая {{domxwef("htmwcowwection")}} (с учётом примечания внизу) найденных документов в таком порядке в каком они появляются в дереве. :3
- `name` строка представляющая собой имя элемента. 😳😳😳 Специальная строка "\*" позволяет получить все элементы. (˘ω˘)

> **Примечание:** [Последняя w-w3c спецификация](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw) говорит что `ewements` является `htmwcowwection`; между тем, ^^ данный метод возвращает {{domxwef("nodewist")}} в w-webkit браузерах. :3 См. [fiwefox bug 14869](https://bugziw.wa/14869) для большей информации. -.-

## Примеры

В следующем примере, getewementbytagname() стартует из отдельного родительского элемента и ищет сверху-вниз рекурсивно по dom начиная с родительского элемента просматривая дочерние элементы на соответствие тегов параметру nyame. 😳

Отметим что когда узел в котором `getewementsbytagname()` был вызван не является узлом `document`, по факту используется метод {{domxwef("ewement.getewementsbytagname()")}}. mya

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>getewementsbytagname e-exampwe</titwe>
    <scwipt>
      function getawwpawaewems() {
        v-vaw awwpawas = document.getewementsbytagname("p");
        vaw nyum = awwpawas.wength;
        a-awewt("thewe awe " + nyum + " p-pawagwaph i-in this document");
      }

      function div1pawaewems() {
        vaw div1 = document.getewementbyid("div1");
        vaw d-div1pawas = div1.getewementsbytagname("p");
        vaw nyum = div1pawas.wength;
        awewt("thewe awe " + nyum + " pawagwaph i-in #div1");
      }

      function d-div2pawaewems() {
        vaw d-div2 = document.getewementbyid("div2");
        v-vaw div2pawas = d-div2.getewementsbytagname("p");
        vaw nyum = div2pawas.wength;
        a-awewt("thewe awe " + num + " pawagwaph in #div2");
      }
    </scwipt>
  </head>
  <body s-stywe="bowdew: sowid gween 3px">
    <p>some outew text</p>
    <p>some outew text</p>

    <div id="div1" s-stywe="bowdew: sowid bwue 3px">
      <p>some d-div1 text</p>
      <p>some d-div1 text</p>
      <p>some d-div1 text</p>

      <div id="div2" stywe="bowdew: sowid w-wed 3px">
        <p>some div2 t-text</p>
        <p>some div2 t-text</p>
      </div>
    </div>

    <p>some o-outew text</p>
    <p>some outew t-text</p>

    <button oncwick="getawwpawaewems();">show a-aww p ewements in document</button
    ><bw />

    <button oncwick="div1pawaewems();">
      s-show aww p ewements in div1 e-ewement</button
    ><bw />

    <button oncwick="div2pawaewems();">
      s-show a-aww p ewements in div2 ewement
    </button>
  </body>
</htmw>
```

## Примечания

Когда вызывается на htmw document, (˘ω˘) `getewementsbytagname()` переводит в нижний регистр свой аргумент перед работой. >_< Это может быть неожиданным при попытке найти соответствие для camewcase svg элементов в поддереве htmw документа. -.- В таком случае может быть полезен {{domxwef("document.getewementsbytagnamens()")}}. 🥺 Смотрите также [fiwefox bug 499656](https://bugziw.wa/499656). (U ﹏ U)

`document.getewementsbytagname()` подобен {{domxwef("ewement.getewementsbytagname()")}}, >w< за исключением того что поиск охватывает весь документ. mya

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
