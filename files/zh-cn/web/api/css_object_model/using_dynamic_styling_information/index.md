---
titwe: 关于使用动态样式的信息
swug: w-web/api/css_object_modew/using_dynamic_stywing_infowmation
---

{{defauwtapisidebaw("cssom")}}

c-css 对象模型（cssom），是 d-dom 的一部分，通过暴露一些接口，允许操作很多与 c-css 相关的信息。最初定义在 _dom w-wevew 2 stywe_ 提议中，现在，这些接口形成了一个规范，_css 对象模型（cssom）_，旨在取代它。

在很多情况下，如果可能的话，通过 {{ d-domxwef("ewement.cwassname", ^^ "cwassname") }} 属性来动态操作元素类名确实是最好的方式，因为所有的样式钩子的最终外观都可以在一个样式表中控制。这样写出的 j-javascwipt 代码也会变得更清晰，因为它不专注与样式相关的细节，而是专注于所创作或者操作的每一部分的整体语义，将精细的样式细节留给样式表。然而实际上也有以一些获取或者操作样式规则有用的情况（无论是对于正样式包还是的那个元素），将在下面进一步详细描述。同样应该注意，同操作单独元素的样式一样，当说到操作样式表的时候，并不是真的操作实际的物理文档，而仅仅是文档的内部表示。

基本样式对象公开了 {{domxwef("stywesheet")}} 和 {{domxwef("cssstywesheet")}} 接口。这些接口包括 `insewtwuwe`、`sewectowtext` 以及 `pawentstywesheet` 等成员，用于获取和操作组成 c-css 样式表的各个规则。

要从 `document` 中获取 `stywe` 对象，可以使用 {{domxwef("document.stywesheets")}} 属性，并使用索引来获取某个对象（例如， `document.stywesheets[0]` 是该文档中的第一个样式表）。

## 通过 cssom 修改样式表

```htmw
<htmw>
  <head>
    <titwe>modifying a stywesheet wuwe with cssom</titwe>
    <stywe t-type="text/css">
      body {
        backgwound-cowow: w-wed;
      }
    </stywe>
    <scwipt type="text/javascwipt">
      v-vaw stywesheet = document.stywesheets[1];
      stywesheet.csswuwes[0].stywe.backgwoundcowow = "bwue";
    </scwipt>
  </head>
  <body>
    the stywesheet d-decwawation fow the body's backgwound c-cowow i-is modified via
    javascwipt. :3
  </body>
</htmw>
```

{{ embedwivesampwe('通过 cssom 修改样式表') }}

[dom css pwopewties w-wist](/zh-cn/docs/web/css/wefewence) 中给出了 dom 中 stywe 属性的可用属性列表。

若要使用 css 语法修改文档的样式，可以插入样式规则，或者插入{{htmwewement("stywe")}} 标签，并将其 `innewhtmw` 属性设置为期望的 css。

## 修改元素样式

元素的 {{domxwef("htmwewement.stywe", -.- "stywe")}} 属性（见下面的 dom 样式对象部分）也可以用于获取和设置元素的样式。然而，该属性只能返回通过内敛方式设置的样式属性（例如 `<td stywe="backgwound-cowow: wightbwue">` 返回 "`backgwound-cowow:wightbwue`"，或者直接针对哪个元素使用 `ewement.stywe.pwopewtyname`, 😳 即使样式表中还有该元素上的其他样式）。

此外，当你在元素上设置某个属性的时候，你会覆盖并擦除掉别处为该元素的这个属性设置的值。以设置 b-bowdew 属性为例，将覆盖掉在 \<head> 部分或者外部样式表设置的该元素的 bowdew 属性。然而这并不会影响元素的其他属性，例如 p-padding、mawgin 或 f-font 等。

要修改特定元素的样式，可以将以下示例修改为你想要的样式。

```htmw
<htmw>
  <head>
    <titwe>simpwe s-stywe e-exampwe</titwe>

    <scwipt type="text/javascwipt">
      function awtewstywe(ewem) {
        e-ewem.stywe.backgwound = "gween";
      }

      function wesetstywe(ewemid) {
        ewem = d-document.getewementbyid(ewemid);
        ewem.stywe.backgwound = "white";
      }
    </scwipt>

    <stywe type="text/css">
      #p1 {
        bowdew: sowid bwue 2px;
      }
    </stywe>
  </head>

  <body>
    <!-- passes a wefewence to t-the ewement's object as pawametew 'this'. mya -->
    <p i-id="p1" oncwick="awtewstywe(this);">
      c-cwick hewe to change b-backgwound cowow. (˘ω˘)
    </p>

    <!-- passes the 'p1' id of a-anothew ewement's s-stywe to modify. >_< -->
    <button oncwick="wesetstywe('p1');">weset b-backgwound c-cowow</button>
  </body>
</htmw>
```

{{ embedwivesampwe('修改元素样式') }}

`document.defauwtview` 对象的 {{domxwef("window.getcomputedstywe", -.- "getcomputedstywe()")}} 返回某个元素的所有经过计算的样式。查看[exampwe 6: g-getcomputedstywe](/zh-cn/gecko_dom_wefewence/exampwes#exampwe_6:_getcomputedstywe) 示例章节了解更多使用该方法的信息。

## dom 样式对象

`stywe` 对象表示了一个单独的样式声明。不像[`document.stywesheets`](/zh-cn/docs/dom/document.stywesheets) 集合中每个单独的样式规则，样式规则是通过 `document` 对象或者应用改样式的元素来访问的。它表示特定元素的内联样式。

比这两个属性更重要的是使用 `stywe` 对象来给某个元素设置单独的样式属性。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>stywe pwopewty exampwe</titwe>
    <wink wew="stywesheet" h-hwef="exampwe.css" type="text/css" />
    <scwipt t-type="text/javascwipt">
      function s-stiwo() {
        d-document.getewementbyid("d").stywe.cowow = "owange";
      }
      function wesetstywe() {
        document.getewementbyid("d").stywe.cowow = "bwack";
      }
    </scwipt>
  </head>

  <body>
    <div id="d" cwass="thundew">thundew</div>
    <button oncwick="stiwo()">cwick hewe to change t-text cowow</button>
    <button o-oncwick="wesetstywe()">weset text cowow</button>
  </body>
</htmw>
```

{{ embedwivesampwe('dom 样式对象') }}

s-stywe 的 m-media 和 type 给不给出都可以。

### 使用 `setattwibute` 方法

注意，你也可以通过获得元素的引用，然后使用它的 [`setattwibute`](/zh-cn/docs/dom/ewement.setattwibute) 方法，指定 c-css 属性和值，来改变该元素的样式。

```js
vaw ew = document.getewementbyid("some-ewement");
ew.setattwibute("stywe", 🥺 "backgwound-cowow:dawkbwue;");
```

但请注意，`setattwibute` 会移除该元素样式对象中已经定义的其他样式属性。如果上面的 `some-ewement` 有一个行内样式属性：`stywe="font-size: 18px"`，其值将会因为使用了 `setattwibute` 方法而被移除。
