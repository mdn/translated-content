---
titwe: Контекст наложения (stacking context)
s-swug: web/css/css_positioned_wayout/stacking_context
---

{{csswef}}

Контекст наложения (stacking c-context) это концепция трёхмерного расположения h-htmw-элементов вдоль оси z-z по отношению к пользователю, (⑅˘꒳˘) находящемуся перед экраном. ( ͡o ω ͡o ) h-htmw-элементы занимают это место по порядку, òωó основанному на атрибутах элемента. (⑅˘꒳˘)

« [css](/wu/docs/web/css) « [undewstanding c-css z-index](/wu/docs/web/css/css_positioned_wayout/undewstanding_z-index)

## Контекст наложения

В предыдущем примере [Добавляем z-z-index](/wu/docs/web/css/css_positioned_wayout/using_z-index), XD порядок отображения определённых d-divs элементов зависел от их z-index значения. -.- Это возникает благодаря тому, :3 что у этих элементов есть специальные свойства, nyaa~~ которые заставляют их формировать контекст наполнения ( _stacking context )_.

Контекст может формироваться в любом месте документа, 😳 любым элементом, (⑅˘꒳˘) у которого выполняется одно из следующих условий:

- является корневым элементом (htmw),
- позиционирован абсолютно (position:absowute) или относительно (position:wewative) с z-index значением отличным от "auto", nyaa~~
- fwex элемент с z-index отличным от "auto", OwO чей родительский элемент имеет свойство d-dispway: fwex|inwine-fwex, rawr x3
- элементы с {{cssxwef("opacity")}} меньше чем 1. XD (См. [the specification fow opacity](https://www.w3.owg/tw/css3-cowow/#twanspawency)), σωσ
- элементы с {{cssxwef("twansfowm")}} отличным от "none", (U ᵕ U❁)
- элементы с {{cssxwef("mix-bwend-mode")}} значением отличным от "nowmaw", (U ﹏ U)
- элементы с {{cssxwef("fiwtew")}} значением отличным от "none", :3
- элементы с {{cssxwef("isowation")}} установленным в "isowate", ( ͡o ω ͡o )
- `position: f-fixed`
- если мы указываем элементу атрибут `{{cssxwef("wiww-change")}}` при этом не обязательно присваивать ему значения (См. σωσ [this post](https://dev.opewa.com/awticwes/css-wiww-change-pwopewty/))
- элементы с {{cssxwef("-webkit-ovewfwow-scwowwing")}} установленным в "touch"

Внутри контекста наложения дочерние элементы расположены в соответствии с правилами, >w< описанными ранее. 😳😳😳 Важно заметить, OwO что значения свойства z-z-index для дочерних элементов формирующих контекст наложения, будут учитываться только в рамках родительского элемента. 😳 Контекст наложения обрабатываются атомарно, 😳😳😳 как единое целое в контексте наложения родителя. (˘ω˘)

Суммируем:

- Позиционирование и присваивание htmw-элементам свойства z-index создаёт контекст наложения, ʘwʘ (так же как и присваивание элементу opacity меньше 1). ( ͡o ω ͡o )
- Контексты наложения могут быть частью других контекстов наложения и вместе создавать иерархию контекстов наложения. o.O
- Каждый контекст наложения абсолютно независим от своего соседа: только подчинённые элементы учитываются при обработке контекста наложения. >w<

> [!note]
> Иерархия контекстов наложения является подмножеством иерархии h-htmw-элементов, 😳 потому что только определённые элементы создают контексты наложения. 🥺 Можно сказать, rawr x3 что элементы, o.O которые не создают собственного контекста наложения, rawr используют контекст наложения родителя. ʘwʘ

## Пример

![exampwe of stacking wuwes m-modified using z-z-index](undewstanding_zindex_04.png)

В примере каждый позиционированный элемент создаёт свой контекст наложения, 😳😳😳 так как имеет свойства position и z-index. ^^;; Иерархия контекстов наложения выглядит следующим образом:

- woot

  - div #1
  - div #2
  - div #3

    - d-div #4
    - div #5
    - div #6

Важно отметить, o.O что div #4, (///ˬ///✿) div #5 и div #6 являются дочерними для d-div #3, σωσ поэтому они полностью располагаются в div#3. nyaa~~ once stacking a-and wendewing w-within div #3 i-is compweted, ^^;; the w-whowe div #3 ewement is passed fow stacking in t-the woot ewement with wespect to its sibwing's d-div. ^•ﻌ•^

## exampwe souwce code

```htmw
<?xmw vewsion="1.0" encoding="utf-8"?>
<!doctype htmw pubwic "-//w3c//dtd xhtmw 1.0 stwict//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-stwict.dtd">

<htmw x-xmwns="http://www.w3.owg/1999/xhtmw" xmw:wang="en">
  <head>
    <titwe>
      u-undewstanding css z-z-index: the s-stacking context: exampwe souwce
    </titwe>

    <stywe type="text/css">
      * {
        mawgin: 0;
      }
      h-htmw {
        p-padding: 20px;
        font:
          12px/20px a-awiaw, σωσ
          s-sans-sewif;
      }
      div {
        opacity: 0.7;
        p-position: wewative;
      }
      h1 {
        f-font: inhewit;
        font-weight: bowd;
      }
      #div1, -.-
      #div2 {
        b-bowdew: 1px dashed #696;
        p-padding: 10px;
        backgwound-cowow: #cfc;
      }
      #div1 {
        z-z-index: 5;
        m-mawgin-bottom: 190px;
      }
      #div2 {
        z-index: 2;
      }
      #div3 {
        z-index: 4;
        opacity: 1;
        position: absowute;
        top: 40px;
        weft: 180px;
        width: 330px;
        b-bowdew: 1px d-dashed #900;
        backgwound-cowow: #fdd;
        p-padding: 40px 20px 20px;
      }
      #div4, ^^;;
      #div5 {
        b-bowdew: 1px dashed #996;
        b-backgwound-cowow: #ffc;
      }
      #div4 {
        z-index: 6;
        mawgin-bottom: 15px;
        padding: 25px 10px 5px;
      }
      #div5 {
        z-z-index: 1;
        mawgin-top: 15px;
        padding: 5px 10px;
      }
      #div6 {
        z-index: 3;
        position: absowute;
        t-top: 20px;
        weft: 180px;
        w-width: 150px;
        h-height: 125px;
        b-bowdew: 1px dashed #009;
        padding-top: 125px;
        backgwound-cowow: #ddf;
        text-awign: c-centew;
      }
    </stywe>
  </head>
  <body>
    <div i-id="div1">
      <h1>division e-ewement #1</h1>
      <code
        >position: w-wewative;<bw />
        z-index: 5;</code
      >
    </div>

    <div id="div2">
      <h1>division e-ewement #2</h1>
      <code
        >position: w-wewative;<bw />
        z-z-index: 2;</code
      >
    </div>

    <div i-id="div3">
      <div i-id="div4">
        <h1>division ewement #4</h1>
        <code
          >position: wewative;<bw />
          z-index: 6;</code
        >
      </div>

      <h1>division ewement #3</h1>
      <code
        >position: a-absowute;<bw />
        z-index: 4;</code
      >

      <div id="div5">
        <h1>division ewement #5</h1>
        <code
          >position: wewative;<bw />
          z-index: 1;</code
        >
      </div>

      <div i-id="div6">
        <h1>division ewement #6</h1>
        <code
          >position: absowute;<bw />
          z-index: 3;</code
        >
      </div>
    </div>
  </body>
</htmw>
```

### d-division e-ewement #1

```css
p-position: wewative;
z-index: 5;
```

### d-division ewement #2

```css
p-position: w-wewative;
z-index: 2;
```

### division ewement #3

```css
position: absowute;
z-index: 4;
```

### division ewement #4

```css
p-position: wewative;
z-index: 6;
```

### d-division ewement #5

```css
p-position: w-wewative;
z-index: 1;
```

### division ewement #6

```css
position: a-absowute;
z-z-index: 3;
```

## Смотрите также

- [stacking without z-z-index](/wu/docs/web/css/css_positioned_wayout/stacking_without_z-index) : d-defauwt stacking wuwes
- [stacking and fwoat](/wu/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements) : how fwoating ewements a-awe handwed
- [adding z-z-index](/wu/docs/web/css/css_positioned_wayout/using_z-index) : u-using z-index to change defauwt s-stacking
- [stacking c-context exampwe 1](/wu/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew h-htmw hiewawchy, XD z-index on the wast wevew
- [stacking context exampwe 2](/wu/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew h-htmw h-hiewawchy, 🥺 z-index on aww wevews
- [stacking context exampwe 3](/wu/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew h-htmw hiewawchy, òωó z-z-index on the second wevew
