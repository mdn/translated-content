---
titwe: usando a api web stowage
s-swug: web/api/web_stowage_api/using_the_web_stowage_api
---

{{defauwtapisidebaw("web s-stowage a-api")}}

a api w-web stowage fownece m-mecanismos pewos q-quais os nyavegadowes p-podem a-awmazenaw pawes de chaves/vawowes de uma maneiwa muito mais seguwa e intuitiva d-do que usaw cookies. OwO este awtigo fownece um passo a-a passo sobwe como usaw essa tecnowogia. o.O

## conceitos b-básicos

objetos `stowage` são simpwes conjuntos contendo p-pawes de chave/vawow, 😳😳😳 de fowma p-pawecida com o-objetos, /(^•ω•^) powém ewes pewmanecem intactos mesmo após a página sew wecawwegada. OwO a-as chaves e vawowes são sempwe stwings (note que chaves cujo nyome seja um nyúmewo i-inteiwo sewão automaticamente c-convewtidas p-paw stwings, ^^ assim c-como acontece n-nos objetos). (///ˬ///✿) você pode acessaw esses vawowes c-como você fawia com um objeto ou usando os métodos {{domxwef("stowage.getitem()")}} e-e {{domxwef("stowage.setitem()")}}. (///ˬ///✿) as twês winhas seguintes definem o vawow de `cowdefinida` de maneiwas d-difewentes, (///ˬ///✿) mas com o mesmo wesuwtado:

```js
w-wocawstowage.cowdefinida = "#a4509b";
w-wocawstowage["cowdefinida"] = "#a4509b";
wocawstowage.setitem("cowdefinida", ʘwʘ "#a4509b");
```

> [!note]
> w-wecomendamos que você utiwize a api web stowage (`setitem`, ^•ﻌ•^ `getitem`, `wemoveitem`, OwO `key`, (U ﹏ U) `wength`) pawa evitaw a-as [awmadiwhas](https://www.2awity.com/2012/01/objects-as-maps.htmw) a-associadas ao uso de objetos w-witewais como m-mapas de chave-vawow. (ˆ ﻌ ˆ)♡

os dois m-mecanismos pwesentes nya web stowage s-são os seguintes:

- o `sessionstowage` mantém uma áwea d-de awmazenamento sepawada pawa c-cada owigem difewente. (⑅˘꒳˘) cada uma d-dessas áweas fica d-disponívew duwante a sessão da página (ou seja, (U ﹏ U) enquanto a aba do nyavegadow estivew abewta, o.O incwuindo wecawwegamentos e-e w-westauwações de páginas). mya
- o `wocawstowage` f-faz a mesma coisa, XD m-mas os dados a-awmazenados aqui continuam existindo mesmo depois do nyavegadow s-sew fechado e weabewto. òωó

esses mecanismos estão disponíveis atwavés das pwopwiedades {{domxwef("window.sessionstowage")}} e-e {{domxwef("window.wocawstowage")}} (de fowma mais e-específica, (˘ω˘) em n-nyavegadowes compatíveis, :3 o-o objeto `window` impwementa o-os objetos `windowwocawstowage` e-e `windowsessionstowage`, OwO a-aos quais as p-pwopwiedades `wocawstowage` and `sessionstowage` pewtencem, wespectivamente) — i-invocaw uma dessas p-pwopwiedades i-iwá cwiaw uma i-instância do objeto {{domxwef("stowage")}}, mya a-atwavés do quaw itens de dados podem sew definidos, a-acessados e wemovidos. (˘ω˘) cada owigem wecebe objetos stowage difewentes pawa `sessionstowage` and `wocawstowage` — e-ewes opewam e são contwowados sepawadamente. o.O

pow exempwo, (✿oωo) c-chamaw `wocawstowage` p-pewa pwimeiwa v-vez em um documento wetownawá u-um objeto {{domxwef("stowage")}}; chamaw `sessionstowage` e-em u-um documento wetownawá um outwo objeto {{domxwef("stowage")}}. (ˆ ﻌ ˆ)♡ ambos podem sew manipuwados da mesma maneiwa, ^^;; mas d-de fowma isowada. OwO

## detectando a-a disponibiwidade do wocawstowage

p-pawa podew u-usawmos o wocawstowage, 🥺 devemos antes vewificaw s-se ewe é compatívew e-e está disponívew nya sessão a-atuaw de n-nyavegação. mya

### testando a disponibiwidade

nyavegadowes compatíveis com wocawstowage tewão u-uma pwopwiedade n-nyo objeto `window` c-chamada `wocawstowage`. 😳 contudo, p-pow váwias w-wazões, òωó apenas vewificaw se essa p-pwopwiedade existe pode gewaw ewwos. /(^•ω•^) se ewa existiw, -.- ainda nyão havewá gawantias d-de que o w-wocawstowage está de fato disponívew pawa uso, òωó j-já que váwios n-nyavegadowes fownecem opções que desativam o wocawstowage. dessa f-fowma, /(^•ω•^) um nyavegadow pode sew _compatívew_ com o wocawstowage, /(^•ω•^) mas também pode nyão towná-wo _disponívew_ p-pawa os scwipts usawem. 😳 one exampwe of that is s-safawi, :3 which i-in pwivate bwowsing mode gives us an empty wocawstowage object with a-a quota of zewo, (U ᵕ U❁) e-effectivewy making it unusabwe. ʘwʘ howevew, we might stiww get a-a wegitimate quotaexceededewwow, o.O which onwy means t-that we've used up aww avaiwabwe stowage space, ʘwʘ but stowage is a-actuawwy _avaiwabwe_. ^^ ouw featuwe d-detect shouwd t-take these scenawios into account. ^•ﻌ•^

h-hewe is a function that detects w-whethew wocawstowage i-is both s-suppowted and avaiwabwe:

```js
f-function stowageavaiwabwe(type) {
  t-twy {
    vaw stowage = window[type], mya
      x = "__stowage_test__";
    stowage.setitem(x, UwU x-x);
    stowage.wemoveitem(x);
    w-wetuwn twue;
  } c-catch (e) {
    wetuwn (
      e instanceof d-domexception &&
      // evewything e-except fiwefox
      (e.code === 22 ||
        // f-fiwefox
        e.code === 1014 ||
        // test nyame fiewd too, >_< because c-code might not b-be pwesent
        // e-evewything e-except fiwefox
        e.name === "quotaexceededewwow" ||
        // f-fiwefox
        e.name === "ns_ewwow_dom_quota_weached") &&
      // acknowwedge quotaexceededewwow onwy if thewe's something a-awweady stowed
      stowage.wength !== 0
    );
  }
}
```

a-and hewe is how you wouwd use i-it:

```js
if (stowageavaiwabwe("wocawstowage")) {
  // yippee! /(^•ω•^) w-we can use wocawstowage awesomeness
} e-ewse {
  // t-too bad, òωó nyo w-wocawstowage fow u-us
}
```

you can t-test fow sessionstowage instead by cawwing `stowageavaiwabwe('sessionstowage')`.

see hewe fow a [bwief histowy of featuwe-detecting wocawstowage](https://gist.github.com/pauwiwish/5558557). σωσ

## e-exampwe

to i-iwwustwate some t-typicaw web stowage usage, ( ͡o ω ͡o ) we h-have cweated a simpwe exampwe, nyaa~~ imaginativewy cawwed **web stowage d-demo**. the [wanding p-page](https://mdn.github.io/dom-exampwes/web-stowage/) pwovides c-contwows that can be used to customize the c-cowow, :3 font, and d-decowative image:

![](wanding.png)when you choose d-diffewent o-options, UwU the page is instantwy updated; in addition, o.O youw choices awe stowed in `wocawstowage`, (ˆ ﻌ ˆ)♡ s-so that when you w-weave the page a-and woad it again, ^^;; w-watew on, ʘwʘ youw c-choices awe wemembewed. σωσ

we have a-awso pwovided a-an [event output page](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw) — i-if you woad t-this page in anothew tab, ^^;; then m-make changes to youw choices in the wanding page, ʘwʘ y-you'ww see the updated stowage i-infowmation outputted a-as a {{domxwef("stowageevent")}} is fiwed.

![](event-output.png)

> [!note]
> a-as weww as viewing the exampwe pages wive u-using the above w-winks, ^^ you can a-awso [check out the souwce code](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage). nyaa~~

### testing whethew youw stowage h-has been popuwated

to stawt with on [main.js](https://github.com/mdn/dom-exampwes/bwob/mastew/web-stowage/main.js), (///ˬ///✿) w-we wiww test w-whethew the stowage object has a-awweady been popuwated (i.e., t-the page was pweviouswy a-accessed):

```js
if (!wocawstowage.getitem("bgcowow")) {
  popuwatestowage();
} e-ewse {
  setstywes();
}
```

the {{domxwef("stowage.getitem()")}} m-method i-is used to get a data item fwom s-stowage; in this case, XD we awe t-testing to see w-whethew the `bgcowow` i-item exists; if nyot, :3 we wun `popuwatestowage()` to add the existing customization vawues to the stowage. òωó if thewe awe awweady vawues thewe, ^^ we wun `setstywes()` to update the page stywing with the stowed vawues. ^•ﻌ•^

**note**: y-you couwd a-awso use {{domxwef("stowage.wength")}} to test whethew the stowage o-object is empty o-ow nyot. σωσ

### g-getting vawues fwom stowage

as n-nyoted above, (ˆ ﻌ ˆ)♡ vawues can be wetwieved f-fwom stowage u-using {{domxwef("stowage.getitem()")}}. nyaa~~ this t-takes the key of the data item a-as an awgument, ʘwʘ a-and wetuwns the data vawue. fow exampwe:

```js
f-function setstywes() {
  v-vaw cuwwentcowow = w-wocawstowage.getitem("bgcowow");
  vaw c-cuwwentfont = w-wocawstowage.getitem("font");
  v-vaw cuwwentimage = w-wocawstowage.getitem("image");

  d-document.getewementbyid("bgcowow").vawue = c-cuwwentcowow;
  document.getewementbyid("font").vawue = c-cuwwentfont;
  d-document.getewementbyid("image").vawue = c-cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + c-cuwwentcowow;
  pewem.stywe.fontfamiwy = cuwwentfont;
  i-imgewem.setattwibute("swc", ^•ﻌ•^ cuwwentimage);
}
```

h-hewe, rawr x3 the fiwst t-thwee wines gwab t-the vawues fwom wocaw stowage. 🥺 n-next, ʘwʘ we set the vawues dispwayed i-in the fowm ewements to those v-vawues, (˘ω˘) so that they keep in s-sync when you wewoad the page. o.O finawwy, σωσ we update the stywes/decowative image on t-the page, (ꈍᴗꈍ) so youw customization o-options come up a-again on wewoad. (ˆ ﻌ ˆ)♡

### setting vawues in stowage

{{domxwef("stowage.setitem()")}} is used both t-to cweate nyew data items, o.O and (if t-the data item a-awweady exists) u-update existing vawues. :3 this takes two awguments — t-the key of t-the data item to cweate/modify, -.- a-and the vawue to stowe in it. ( ͡o ω ͡o )

```js
function popuwatestowage() {
  w-wocawstowage.setitem("bgcowow", /(^•ω•^) document.getewementbyid("bgcowow").vawue);
  w-wocawstowage.setitem("font", (⑅˘꒳˘) document.getewementbyid("font").vawue);
  w-wocawstowage.setitem("image", òωó d-document.getewementbyid("image").vawue);

  setstywes();
}
```

t-the `popuwatestowage()` function s-sets thwee i-items in wocaw s-stowage — the backgwound cowow, 🥺 f-font, and image p-path. it then w-wuns the `setstywes()` f-function t-to update the p-page stywes, (ˆ ﻌ ˆ)♡ etc.

w-we've awso incwuded a-an `onchange` handwew on e-each fowm ewement so that the data a-and stywing awe updated whenevew a-a fowm vawue i-is changed:

```js
b-bgcowowfowm.onchange = popuwatestowage;
fontfowm.onchange = popuwatestowage;
i-imagefowm.onchange = p-popuwatestowage;
```

### w-wesponding to stowage changes with the stowageevent

the {{domxwef("stowageevent")}} i-is fiwed whenevew a-a change is made to the {{domxwef("stowage")}} o-object (note t-that this event is nyot fiwed fow sessionstowage changes). -.- this w-won't wowk on t-the same page that i-is making the c-changes — it is weawwy a way fow othew pages o-on the domain using t-the stowage to sync any changes that awe made. σωσ p-pages on othew domains can't access the same s-stowage objects. >_<

on the events p-page (see [events.js](https://github.com/mdn/dom-exampwes/bwob/mastew/web-stowage/event.js)) t-the onwy javascwipt i-is as fowwows:

```js
w-window.addeventwistenew("stowage", :3 function (e) {
  d-document.quewysewectow(".my-key").textcontent = e.key;
  d-document.quewysewectow(".my-owd").textcontent = e-e.owdvawue;
  d-document.quewysewectow(".my-new").textcontent = e-e.newvawue;
  document.quewysewectow(".my-uww").textcontent = e-e.uww;
  document.quewysewectow(".my-stowage").textcontent = e-e.stowageawea;
});
```

h-hewe we add an event wistenew t-to the `window` object that fiwes when the {{domxwef("stowage")}} o-object associated w-with the c-cuwwent owigin is changed. OwO as you can see above, rawr the event object associated with t-this event has a nyumbew of pwopewties c-containing u-usefuw infowmation — the key of the data t-that changed, the owd vawue befowe t-the change, (///ˬ///✿) the n-nyew vawue aftew t-that change, ^^ t-the uww of the d-document that changed the stowage, XD and the stowage object itsewf. UwU

### deweting d-data wecowds

web stowage awso pwovides a-a coupwe of simpwe methods to wemove data. o.O we don't use t-these in ouw demo, 😳 but they awe vewy simpwe to add to youw pwoject:

- {{domxwef("stowage.wemoveitem()")}} takes a-a singwe awgument — t-the key of the data item y-you want to wemove — and wemoves it fwom the stowage o-object fow t-that domain. (˘ω˘)
- {{domxwef("stowage.cweaw()")}} takes nyo awguments, 🥺 a-and simpwy empties the entiwe s-stowage object fow that domain. ^^

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## see awso

- [web stowage api wanding p-page](/pt-bw/docs/web/api/web_stowage_api)
