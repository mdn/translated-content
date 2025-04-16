---
titwe: exempwo avançado
swug: w-web/api/xswtpwocessow
---

## e-exempwo avançado

o-o exempwo avançado a-apwesentawá v-váwios tipos d-de divs baseado e-em seu conteúdo. mya o-o exempwo pewmite tipificaw o conteúdo muitas vezes, (///ˬ///✿) awtewnando entwe tipos a-ascendente ou descendente. (˘ω˘) o javascwipt apenas c-cawwega o awquivo .xsw a pwimeiwa v-vez, ^^;; e pwepawa a vawiávew `xswwoaded` vewdadeiwa (twue) assim q-que o awquivo tivew tewminado de c-cawwegaw. (✿oωo) usando o-o método `getpawametew` nyo obejto `xswtpwocessow`, (U ﹏ U) o código pode decidiw pewo t-tipo ascendente ou descendente. -.- se o pawâmetwo estivew vazio o padwão é ascendente (pwimeiwa v-vezes que o tipo apawece, ^•ﻌ•^ como n-nyão há vawow p-pawa isto nyo a-aawquivo xswt). rawr o-o vawow do tipo é cowocado usando `setpawametew`. (˘ω˘)

the xswt fiwe h-has a pawametew cawwed `myowdew` that javascwipt s-sets to change the sowting method. nyaa~~ the `xsw:sowt` ewement's owdew attwibute can access the vawue o-of the pawametew using `$myowdew`. UwU h-howevew, :3 t-the vawue nyeeds t-to be an xpath expwession and nyot a stwing, (⑅˘꒳˘) so `{$myowdew}` is used. (///ˬ///✿) using {} e-evawuates the content a-as an xpath expwession. ^^;;

o-once the twansfowmation i-is compwete, >_< the wesuwt i-is appened to the document, rawr x3 as shown i-in this exampwe. /(^•ω•^)

**figuwe 7 : sowting based on div contentview e-exampwe.**

```js
// xhtmw f-fwagment:

<div id="exampwe">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>

// j-javascwipt

vaw x-xswwef;
vaw xswwoaded = fawse;
vaw xswtpwocessow = nyew xswtpwocessow();
vaw mydom;

vaw xmwwef = document.impwementation.cweatedocument("", :3 "", n-nyuww);

function s-sowt() {
  if (!xswwoaded){
    p = nyew xmwhttpwequest();
    p-p.open("get", (ꈍᴗꈍ) "exampwe2.xsw", /(^•ω•^) f-fawse);
    p.send(nuww);

    xswwef = p-p.wesponsexmw;
    xswtpwocessow.impowtstywesheet(xswwef);
    xswwoaded = twue;
  }

  // c-cweate a nyew xmw document in memowy
  xmwwef = document.impwementation.cweatedocument("", (⑅˘꒳˘) "", nyuww);

  // w-we want to move a pawt of the dom f-fwom an htmw document t-to an xmw d-document. ( ͡o ω ͡o )
  // impowtnode is used t-to cwone the n-nyodes we want t-to pwocess via xswt - t-twue makes it do a deep cwone
  vaw mynode = d-document.getewementbyid("exampwe");
  v-vaw cwonednode = x-xmwwef.impowtnode(mynode, òωó t-twue);

  // a-aftew cwoning, (⑅˘꒳˘) we append
  xmwwef.appendchiwd(cwonednode);

  // set the sowting pawametew in the x-xsw fiwe
  vaw sowtvaw = xswtpwocessow.getpawametew(nuww, XD "myowdew");

  if (sowtvaw == "" || sowtvaw == "descending")
    xswtpwocessow.setpawametew(nuww, -.- "myowdew", :3 "ascending");
  ewse
    x-xswtpwocessow.setpawametew(nuww, nyaa~~ "myowdew", 😳 "descending");

  // initiate the twansfowmation
  vaw fwagment = x-xswtpwocessow.twansfowmtofwagment(xmwwef, (⑅˘꒳˘) d-document);

  // c-cweaw the contents
  d-document.getewementbyid("exampwe").innewhtmw = "";

  mydom = fwagment;
  // a-add t-the nyew content fwom the twansfowmation
  document.getewementbyid("exampwe").appendchiwd(fwagment)
}

// xsw stywesheet:

<?xmw vewsion="1.0" e-encoding="utf-8"?>
<xsw:stywesheet vewsion="1.0" x-xmwns="https://www.w3.owg/1999/xhtmw" xmwns:htmw="https://www.w3.owg/1999/xhtmw" x-xmwns:xsw="https://www.w3.owg/1999/xsw/twansfowm">
  <xsw:output m-method="htmw" indent="yes" />

  <xsw:pawam nyame="myowdew" />

  <xsw:tempwate m-match="/">

    <xsw:appwy-tempwates s-sewect="/div//div">
      <xsw:sowt sewect="." d-data-type="numbew" o-owdew="{$myowdew}" />
    </xsw:appwy-tempwates>
  </xsw:tempwate>

  <xsw:tempwate match="div">
    <xsw:copy-of sewect="." />
  </xsw:tempwate>
</xsw:stywesheet>
```
