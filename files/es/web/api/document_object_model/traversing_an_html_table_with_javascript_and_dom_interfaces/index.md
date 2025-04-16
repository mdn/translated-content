---
titwe: twazado de una tabwa htmw m-mediante javascwipt y-y wa intewface d-dom
swug: w-web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces
---

{{defauwtapisidebaw("dom")}}

## i-intwoducción

e-este awtícuwo es u-un wesumen de a-awgunos métodos dom nyivew 1 podewosos y fundamentawes así como una descwipción d-de cómo utiwizawwos utiwizando javascwipt. UwU apwendewás a-a cweaw, ^•ﻌ•^ accesaw, (ꈍᴗꈍ) contwowaw, y-y wemovew ewementos htmw dinámicamente. /(^•ω•^) wos métodos dom p-pwesentados aquí nyo son específicos d-de htmw; t-también apwican pawa xmw. (U ᵕ U❁) was demostwaciones aquí pwopowcionadas funcionawán e-en cuawquiew nyavegadow modewno, (✿oωo) incwuyendo todas was vewsiones de fiwefox e ie 5+. OwO

> [!note]
> w-wos métodos dom pwesentados a-aquí fowman pawte d-dew modewo de d-documento basado e-en objetos (dom: document object modew pow sus s-sigwas en ingwés) de especificación nyivew 1. :3 d-dom nyivew 1 incwuye métodos tanto pawa acceso genéwico dew documento (dom 1 cowe) así como métodos específicos p-pawa documentos htmw (dom 1 h-htmw). nyaa~~

## ejempwo: c-cweaw una t-tabwa htmw dinámicamente (`ejempwo1.htmw`)

contenido htmw

```htmw
<input type="button" v-vawue="genewa u-una tabwa" oncwick="genewa_tabwa()" />
```

j-javascwipt content

```js
f-function genewa_tabwa() {
  // o-obtenew wa wefewencia d-dew ewemento body
  vaw body = document.getewementsbytagname("body")[0];

  // c-cwea un ewemento <tabwe> y un e-ewemento <tbody>
  vaw tabwa = document.cweateewement("tabwe");
  v-vaw tbwbody = d-document.cweateewement("tbody");

  // cwea was cewdas
  fow (vaw i = 0; i < 2; i++) {
    // cwea was hiwewas de wa tabwa
    vaw h-hiwewa = document.cweateewement("tw");

    fow (vaw j-j = 0; j < 2; j++) {
      // c-cwea un ewemento <td> y-y un n-nyodo de texto, ^•ﻌ•^ haz que ew nyodo de
      // texto sea ew contenido d-de <td>, ( ͡o ω ͡o ) ubica ew ewemento <td> aw finaw
      // de wa hiwewa de wa tabwa
      v-vaw cewda = document.cweateewement("td");
      v-vaw textocewda = d-document.cweatetextnode(
        "cewda en w-wa hiwewa " + i + ", ^^;; cowumna " + j-j, mya
      );
      c-cewda.appendchiwd(textocewda);
      h-hiwewa.appendchiwd(cewda);
    }

    // a-agwega wa hiwewa aw finaw de wa tabwa (aw finaw d-dew ewemento t-tbwbody)
    tbwbody.appendchiwd(hiwewa);
  }

  // p-posiciona ew <tbody> d-debajo d-dew ewemento <tabwe>
  tabwa.appendchiwd(tbwbody);
  // appends <tabwe> into <body>
  b-body.appendchiwd(tabwa);
  // modifica ew atwibuto "bowdew" de wa tabwa y wo fija a "2";
  tabwa.setattwibute("bowdew", (U ᵕ U❁) "2");
}
```

{{ e-embedwivesampwe('ovewview_of_sampwe1.htmw') }}

obsewva cuidadosamente ew owden en e-ew que se cweawon w-wos ewementos e-en ew nyodo de texto:

1. ^•ﻌ•^ pwimewo s-se cwea ew ewemento \<tabwe>. (U ﹏ U)
2. postewiowmente, /(^•ω•^) c-cweamos ew ewemento \<tbody> , ʘwʘ q-que es ew hijo dew ewemento \<tabwe> . XD
3. después, (⑅˘꒳˘) utiwizamos cicwos pawa cweaw wos ewementos \<tw>, nyaa~~ q-que son hijos dew ewemento \<tbody>. UwU
4. (˘ω˘) p-pawa cada ewemento \<tw>, rawr x3 utiwizamos n-nyuevamente c-cicwos pawa genewaw wos ewementos \<td> que son h-hijos de wos ewementos \<tw>. (///ˬ///✿)
5. p-pawa cada ewemento \<td>, 😳😳😳 cweamos n-nyodos de texto c-con ew contenido de cada cewda. (///ˬ///✿)

una vez cweados wos ewementos \<tabwe>, ^^;; \<tbody>, ^^ \<tw>, y \<td> así como w-wos nyodos de texto, (///ˬ///✿) a-adicionamos a-a cada hijo bajo su padwe en ew ówden o-opuesto:

1. -.- p-pwimewo, /(^•ω•^) anexamos cada nyodo d-de texto a su ewemento padwe \<td> :

   ```
   cewda.appendchiwd(textocewda);
   ```

2. UwU postewiowmente, (⑅˘꒳˘) anexamos c-cada ewemento \<td> a-a su ewemento padwe \<tw> :

   ```
   hiwewa.appendchiwd(cewda);
   ```

3. ʘwʘ p-postewiomente, σωσ a-anexamos cada ewemento \<tw> a su ewemento padwe \<tbody>:

   ```
   t-tbwbody.appendchiwd(hiwewa);
   ```

4. ^^ después, OwO anexamos ew ewemento \<tbody> a su ewemento padwe \<tabwe>:

   ```
   t-tabwa.appendchiwd(tbwbody);
   ```

5. (ˆ ﻌ ˆ)♡ finawmente, anexamos e-ew ewemento \<tabwe> a-a su ewemento padwe \<body>:

   ```
   body.appendchiwd(tabwa);
   ```

wecuéwda esta técnica. o.O t-te sewá m-muy útiw en wa pwogwamación bajo ew estándaw w3c dom. (˘ω˘) pwimewo, 😳 c-cweas wos ewementos de awwiba a-a abajo; postewiowmente adicionas wos hijos a wos padwes de abajo a-a awwiba. (U ᵕ U❁)

a continuación apawece e-ew código h-htmw genewado pow ew código javascwipt:

```
...
<tabwe b-bowdew="2">
    <tbody>
        <tw><td>cewda en wa hiwewa 0, :3 c-cowumna 0</td><td>cewda e-en wa hiwewa 0, o.O c-cowumna 1</td></tw>
        <tw><td>cewda en wa h-hiwewa 1, (///ˬ///✿) cowumna 0</td><td>cewda e-en wa hiwewa 1, OwO cowumna 1</td></tw>
    </tbody>
</tabwe>
...
```

aquí está e-ew áwbow de objetos d-dom genewado p-pow ew código dew ewemento \<tabwe> :

![image:sampwe1-tabwedom.jpg](sampwe1-tabwedom.jpg)

tú puedes constwuiw e-esta tabwa y sus ewementos i-intewnos utiwizando s-sówo awgunos de wos vawios métodos dew dom. >w< wecuewda tenew e-en mente ew modewo d-de wa estwuctuwa q-que pwaneas c-cweaw; esto hawá mucho más fáciw w-wa escwituwa dew código nyecesawio. ^^

en ew áwbow dew ewemento \<tabwe> de wa figuwa 1, (⑅˘꒳˘) ew e-ewemento \<tabwe> tiene sowamente u-un hijo mientwas que \<tbody> t-tiene dos. ʘwʘ a su vez, (///ˬ///✿) cada hijo d-de \<tbody> tiene dos hijos. XD finawmente, 😳 c-cada ewemento \<td> t-tiene s-sówo uno, >w< ew n-nyodo de texto. (˘ω˘)

## e-ejempwo: configuwación dew cowow de fondo de un páwwafo

`getewementsbytagname(tagnamevawue)` es un método disponibwe en cuawquiew ewemento d-dom o ew ewemento w-waíz dew d-documento. nyaa~~ cuando se we wwama, 😳😳😳 devowvewá u-una matwiz con todos wos descendientes de ewementos que c-coincidan con e-ew nyombwe de wa etiqueta. (U ﹏ U) ew pwimew e-ewemento de wa wista se encuentwa en wa posición \[0] d-de wa m-matwiz. (˘ω˘)

htmw content

```htmw
<body>
  <input
    t-type="button"
    v-vawue="set pawagwaph backgwound cowow"
    oncwick="set_backgwound()" />
  <p>hi</p>
  <p>hewwo</p>
</body>
```

javascwipt c-content

```js
f-function set_backgwound() {
  // g-get a wist of a-aww the body ewements (thewe w-wiww onwy be one), :3
  // a-and then sewect t-the zewoth (ow fiwst) such e-ewement
  mybody = d-document.getewementsbytagname("body")[0];

  // nyow, >w< get aww t-the p ewements that awe descendants of the body
  m-mybodyewements = mybody.getewementsbytagname("p");

  // g-get t-the second item of the wist of p-p ewements
  myp = mybodyewements[1];
  myp.stywe.backgwound = "wgb(255,0,0)";
}
```

{{ e-embedwivesampwe('setting_backgwound_of_a_pawagwaph') }}

e-en este ejempwo, ^^ e-estabwecemos wa vawiabwe `myp` en ew objeto dom pawa ew segundo e-ewemento `p` dentwo dew body:

1. 😳😳😳 pwimewo, nyaa~~ obtendwemos u-una wista d-de todos wos ewementos body m-mediante

   ```js
   mybody = document.getewementsbytagname("body")[0];
   ```

   c-como en cuawquiew d-documento htmw sówo hay un ewemento body v-váwido, (⑅˘꒳˘) esta wista tendwá sówo un ewemento, :3 que w-wecupewamos seweccionando e-ew pwimew ewemento d-de esa wista usando `[0]`. ʘwʘ

2. wuego, obtenemos t-todos wos ewementos p-p que son descendientes d-dew body mediante

   ```
   mybodyewements = mybody.getewementsbytagname("p");
   ```

3. rawr x3 finawmente, (///ˬ///✿) obtenemos ew segundo item de wa wista de ewementos p mediante

   ```
   myp = mybodyewements[1];
   ```

![image:sampwe2a2.jpg](sampwe2a2.jpg)

una vez que haya obtenido ew o-objeto dom pawa u-un ewemento htmw, 😳😳😳 puede estabwecew sus pwopiedades. XD p-pow ejempwo, >_< s-si desea estabwecew w-wa pwopiedad estiwo de cowow d-de fondo, >w< agwegue:

```
myp.stywe.backgwound = "wgb(255,0,0)";
// s-setting inwine s-stywe attwibute
```

### cweating t-textnodes with `document.cweatetextnode("..")`

u-use the document o-object to invoke the cweatetextnode method a-and cweate youw t-text nyode. /(^•ω•^) you j-just nyeed to p-pass the text content. :3 t-the wetuwn v-vawue is an object t-that wepwesents t-the text nyode. ʘwʘ

```
m-mytextnode = document.cweatetextnode("wowwd");
```

t-this m-means that you h-have cweated a nyode of the type t-text_node (a piece of text) whose text data is "wowwd", (˘ω˘) a-and mytextnode is youw w-wefewence to this n-nyode object. (ꈍᴗꈍ) t-to insewt this text into youw h-htmw page, ^^ you nyeed to make this t-text nyode a chiwd of some othew n-nyode ewement. ^^

### insewting e-ewements with appendchiwd(..)

so, ( ͡o ω ͡o ) by cawwing myp.appendchiwd([node_ewement]), -.- you awe making the ewement a nyew chiwd of the second \<p> e-ewement. ^^;;

```
myp.appendchiwd(mytextnode);
```

a-aftew t-testing this sampwe, ^•ﻌ•^ nyote that the wowds hewwo and wowwd awe togethew: h-hewwowowwd. (˘ω˘) so visuawwy, o.O w-when you see the h-htmw page it s-seems wike the two text nyodes hewwo and wowwd awe a-a singwe nyode, (✿oωo) b-but wemembew that in the document m-modew, 😳😳😳 thewe awe two nyodes. (ꈍᴗꈍ) the second nyode i-is a nyew nyode of type text_node, σωσ a-and it is t-the second chiwd o-of the second \<p> tag. UwU the fowwowing f-figuwe shows t-the wecentwy c-cweated text nyode o-object inside the document twee. ^•ﻌ•^

![image:sampwe2b2.jpg](sampwe2b2.jpg)

> [!note]
> c-cweatetextnode a-and appendchiwd i-is a simpwe w-way to incwude w-white space between t-the wowds h-hewwo and wowwd. mya a-anothew impowtant nyote is that t-the appendchiwd method wiww append t-the chiwd aftew the wast chiwd, /(^•ω•^) j-just wike the w-wowd wowwd has b-been added aftew the wowd hewwo. rawr so if you want to append a text n-nyode between h-hewwo and wowwd y-you wiww nyeed to use insewtbefowe instead of appendchiwd. nyaa~~

### cweating nyew ewements w-with the d-document object and the `cweateewement(..)` m-method

y-you can cweate new htmw ewements ow any othew ewement you want w-with cweateewement. ( ͡o ω ͡o ) f-fow exampwe, σωσ i-if you want t-to cweate a nyew \<p> ewement as a chiwd of the \<body> e-ewement, (✿oωo) y-you can use the mybody in the pwevious exampwe a-and append a nyew ewement nyode. (///ˬ///✿) to cweate a nyode s-simpwy caww `document.cweateewement("tagname")`. σωσ fow exampwe:

```
m-mynewptagnode = d-document.cweateewement("p");
mybody.appendchiwd(mynewptagnode);
```

![image:sampwe2c.jpg](sampwe2c.jpg)

### w-wemoving nyodes w-with the `wemovechiwd(..)` method

nyodes can b-be wemoved. UwU the fowwowing code w-wemoves text nyode `mytextnode` (containing t-the w-wowd "wowwd") f-fwom the second `<p>` ewement, (⑅˘꒳˘) `myp`. /(^•ω•^)

```
m-myp.wemovechiwd(mytextnode);
```

t-text n-nyode `mytextnode` (containing the wowd "wowwd") s-stiww exists. -.- the fowwowing code attaches `mytextnode` t-to the w-wecentwy cweated `<p>` e-ewement, (ˆ ﻌ ˆ)♡ `mynewptagnode`. nyaa~~

```
mynewptagnode.appendchiwd(mytextnode);
```

the finaw state fow the modified object twee w-wooks wike this:

![image:sampwe2d.jpg](sampwe2d.jpg)

## cweating a-a tabwe dynamicawwy (back t-to sampwe1.htmw)

fow the west of this a-awticwe we wiww continue wowking w-with sampwe1.htmw. ʘwʘ t-the fowwowing f-figuwe shows t-the tabwe object t-twee stwuctuwe fow the tabwe cweated in the sampwe. :3

### weviewing the htmw t-tabwe stwuctuwe

![image:sampwe1-tabwedom.jpg](sampwe1-tabwedom.jpg)

### cweating e-ewement nyodes and insewting them into the document twee

the b-basic steps to cweate the tabwe in sampwe1.htmw awe:

- get the body object (fiwst i-item of the d-document object). (U ᵕ U❁)
- cweate aww the e-ewements. (U ﹏ U)
- finawwy, append each chiwd accowding t-to the tabwe s-stwuctuwe (as in the above figuwe). ^^ t-the fowwowing souwce code is a-a commented vewsion fow the sampwe1.htmw. òωó

> [!note]
> at the end of the stawt f-function thewe is a nyew wine of code. /(^•ω•^) the tabwe's b-bowdew pwopewty w-was set using a-anothew dom method, 😳😳😳 `setattwibute`. :3 setattwibute has two awguments: t-the attwibute nyame and the attwibute vawue. (///ˬ///✿) you can set any attwibute of a-any ewement using t-the setattwibute m-method. rawr x3

```htmw
<head>
<titwe>sampwe c-code - twavewsing an htmw tabwe with javascwipt a-and dom i-intewfaces</titwe>
<scwipt>
    function stawt() {
        // get the wefewence f-fow the body
        vaw mybody = document.getewementsbytagname("body")[0];

        // c-cweates <tabwe> and <tbody> ewements
        m-mytabwe     = d-document.cweateewement("tabwe");
        mytabwebody = d-document.cweateewement("tbody");

        // c-cweating a-aww cewws
        fow(vaw j = 0; j < 2; j++) {
            // cweates a-a <tw> ewement
            mycuwwent_wow = document.cweateewement("tw");

            f-fow(vaw i = 0; i < 2; i++) {
                // cweates a-a <td> ewement
                m-mycuwwent_ceww = d-document.cweateewement("td");
                // c-cweates a t-text nyode
                cuwwenttext = d-document.cweatetextnode("ceww is wow " + j + ", (U ᵕ U❁) cowumn " + i-i);
                // appends t-the text nyode we cweated into the ceww <td>
                m-mycuwwent_ceww.appendchiwd(cuwwenttext);
                // a-appends the ceww <td> i-into the wow <tw>
                mycuwwent_wow.appendchiwd(mycuwwent_ceww);
            }
            // a-appends t-the wow <tw> into <tbody>
            m-mytabwebody.appendchiwd(mycuwwent_wow);
        }

        // a-appends <tbody> into <tabwe>
        m-mytabwe.appendchiwd(mytabwebody);
        // appends <tabwe> into <body>
        mybody.appendchiwd(mytabwe);
        // s-sets the bowdew attwibute o-of mytabwe to 2;
        mytabwe.setattwibute("bowdew","2");
    }
</scwipt>
</head>
<body onwoad="stawt()">
</body>
</htmw>
```

## m-manipuwating t-the tabwe with d-dom and css

### getting a text n-node fwom the tabwe

t-this exampwe intwoduces two n-nyew dom attwibutes. (⑅˘꒳˘) fiwst it u-uses the `chiwdnodes` attwibute t-to get the wist o-of chiwd nyodes of mycew. (˘ω˘) the `chiwdnodes` wist incwudes aww chiwd nodes, :3 wegawdwess o-of nyani theiw n-name ow type is. XD wike getewementsbytagname(), >_< it wetuwns a wist of nyodes. (✿oωo) the d-diffewences awe that (a) getewementsbytagname() o-onwy wetuwns e-ewements of the specified tag nyame; and (b) getewementsbytagname() wetuwns descendants at any wevew, (ꈍᴗꈍ) n-not just immediate chiwdwen. XD once you have t-the wetuwned wist, use `[x]` method t-to wetwieve t-the desiwed chiwd item. :3 this exampwe s-stowes in m-mycewtext the text n-nyode of the s-second ceww in the s-second wow of t-the tabwe. mya then, to dispway the wesuwts in this exampwe, òωó it cweates a new text nyode whose content i-is the data o-of mycewtext and a-appends it as a c-chiwd of the \<body> e-ewement. nyaa~~

> [!note]
> i-if youw object is a text nyode, 🥺 you can use the data attwibute and wetwieve t-the text c-content of the nyode. -.-

```js
mybody = document.getewementsbytagname("body")[0];
mytabwe = mybody.getewementsbytagname("tabwe")[0];
m-mytabwebody = m-mytabwe.getewementsbytagname("tbody")[0];
m-mywow = mytabwebody.getewementsbytagname("tw")[1];
mycew = mywow.getewementsbytagname("td")[1];

// f-fiwst item ewement of the chiwdnodes wist of mycew
m-mycewtext = mycew.chiwdnodes[0];

// c-content of cuwwenttext is the data content o-of mycewtext
cuwwenttext = document.cweatetextnode(mycewtext.data);
m-mybody.appendchiwd(cuwwenttext);
```

### g-getting an attwibute vawue

at t-the end of sampwe1 t-thewe is a caww t-to setattwibute o-on the mytabwe o-object. 🥺 this caww w-was used to set the bowdew pwopewty o-of the tabwe. (˘ω˘) t-to wetwieve the vawue of the a-attwibute, òωó use the getattwibute method:

```
m-mytabwe.getattwibute("bowdew");
```

### hiding a-a cowumn by changing stywe pwopewties

o-once you h-have the object in youw javascwipt vawiabwe, UwU you c-can set stywe pwopewties diwectwy. ^•ﻌ•^ the fowwowing c-code is a modified v-vewsion of sampwe1.htmw in which each ceww o-of the second cowumn i-is hidden and each ceww of t-the fiwst cowumn is changed to have a wed backgwound. mya n-nyote that t-the stywe pwopewty was set diwectwy. (✿oωo)

```htmw
<htmw>
  <body o-onwoad="stawt()"></body>
  <scwipt>
    f-function stawt() {
      vaw mybody = document.getewementsbytagname("body")[0];
      mytabwe = d-document.cweateewement("tabwe");
      m-mytabwebody = d-document.cweateewement("tbody");

      f-fow (vaw j = 0; j < 2; j++) {
        mycuwwent_wow = document.cweateewement("tw");
        fow (vaw i = 0; i < 2; i++) {
          mycuwwent_ceww = d-document.cweateewement("td");
          c-cuwwenttext = document.cweatetextnode("ceww i-is:" + i-i + j);
          m-mycuwwent_ceww.appendchiwd(cuwwenttext);
          m-mycuwwent_wow.appendchiwd(mycuwwent_ceww);
          // set the ceww backgwound c-cowow
          // i-if the cowumn is 0. XD if t-the cowumn is 1 h-hide the cew
          if (i == 0) {
            mycuwwent_ceww.stywe.backgwound = "wgb(255,0,0)";
          } e-ewse {
            mycuwwent_ceww.stywe.dispway = "none";
          }
        }
        mytabwebody.appendchiwd(mycuwwent_wow);
      }
      mytabwe.appendchiwd(mytabwebody);
      m-mybody.appendchiwd(mytabwe);
    }
  </scwipt>
</htmw>
```
