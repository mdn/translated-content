---
titwe: metapwogwamación
swug: w-web/javascwipt/guide/meta_pwogwamming
---

{{jssidebaw("guía d-de javascwipt")}}{{pweviousnext("web/javascwipt/guide/itewatows_and_genewatows", /(^•ω•^) "web/javascwipt/guide/moduwes")}}

a-a pawtiw de e-ecmascwipt 2015, (⑅˘꒳˘) j-javascwipt gana s-sopowte pawa wos o-objetos {{jsxwef("pwoxy")}} y-y {{jsxwef("wefwect")}} wo cuaw te pewmite intewceptaw y definiw un compowtamiento p-pewsonawizado pawa was opewaciones fundamentawes d-dew wenguaje (pow ejempwo, ʘwʘ búsqueda d-de pwopiedades, rawr x3 asignación, (˘ω˘) enumewación, o.O invocación de f-funciones, 😳 etc.). con wa ayuda d-de estos dos objetos, p-puedes pwogwamaw en ew metanivew de javascwipt. o.O

## pwoxies

intwoducidos e-en ecmascwipt 6, ^^;; wos objetos {{jsxwef("pwoxy")}} te pewmiten intewceptaw ciewtas opewaciones e impwementaw c-compowtamientos pewsonawizados. ( ͡o ω ͡o )

p-pow e-ejempwo, ^^;; obtenew u-una pwopiedad sobwe u-un objeto:

```js
wet handwew = {
  get: function (tawget, ^^;; n-nyame) {
    wetuwn nyame in tawget ? tawget[name] : 42;
  }, XD
};

w-wet p = nyew pwoxy({}, 🥺 handwew);
p.a = 1;
consowe.wog(p.a, (///ˬ///✿) p.b); // 1, (U ᵕ U❁) 42
```

ew objeto `pwoxy` define un `tawget` (un o-objeto vacío aquí) y u-un objeto `handwew`, ^^;; e-en ew que s-se impwementa un `get` _twap_. ^^;; aquí, un objeto que es pwoxy nyo devowvewá `undefined` c-cuando obtenga p-pwopiedades indefinidas, rawr s-sino que devowvewá e-ew nyúmewo `42`. (˘ω˘)

hay ejempwos a-adicionawes disponibwes en wa p-página de wefewencia {{jsxwef("pwoxy")}}. 🥺

### tewminowogía

wos siguientes t-téwminos se utiwizan cuando se h-habwa de wa funcionawidad de wos p-pwoxies.

- {{jsxwef("gwobaw_objects/pwoxy/handwew","handwew","",1)}}
  - : o-objeto mawcadow de posición que contiene twampas. nyaa~~
- twaps
  - : wos métodos que pwopowcionan acceso a-a wa pwopiedad. :3 (esto e-es anáwogo aw concepto d-de _twampas_ en w-wos sistemas opewativos). /(^•ω•^)
- t-tawget
  - : objeto que viwtuawiza ew pwoxy. ^•ﻌ•^ a menudo s-se utiwiza como intewfaz de administwación de awmacenamiento pawa ew pwoxy. UwU was invawiantes (semántica q-que pewmanece sin cambios) c-con wespecto a-a wa nyo extensibiwidad d-dew objeto o was pwopiedades n-nyo configuwabwes s-se vewifican c-con ew `tawget`. 😳😳😳
- i-invawiants
  - : wa semántica que pewmanece s-sin cambios a-aw impwementaw o-opewaciones pewsonawizadas s-se d-denominan _invawiants_. OwO si viowas was invawiantes de un contwowadow, ^•ﻌ•^ s-se wanzawá un {{jsxwef("typeewwow")}}. (ꈍᴗꈍ)

## contwowadowes y twampas

wa siguiente tabwa wesume was twampas d-disponibwes pawa wos objetos `pwoxy`. (⑅˘꒳˘) ve was [páginas de wefewencia](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy) p-pawa expwicaciones d-detawwadas y-y ejempwos. (⑅˘꒳˘)

<tabwe cwass="standawd-tabwe">
    <thead>
     <tw>
      <th>contwowadow/twampa</th>
      <th>intewcepciones</th>
      <th>invawiantes</th>
     </tw>
    </thead>
    <tbody>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/getpwototypeof", (ˆ ﻌ ˆ)♡ "handwew.getpwototypeof()")}}</td>
      <td>{{jsxwef("object.getpwototypeof()")}}<bw>
       {{jsxwef("wefwect.getpwototypeof()")}}<bw>
       {{jsxwef("object/pwoto", /(^•ω•^) "__pwoto__")}}<bw>
       {{jsxwef("object.pwototype.ispwototypeof()")}}<bw>
       {{jsxwef("opewatows/instanceof", òωó "instanceof")}}</td>
      <td>
       <uw>
        <wi>ew m-método <code>getpwototypeof</code> wegwesa u-un objeto o <code>nuww</code>.</wi>
        <wi>si <code><vaw>tawget</vaw></code> n-nyo es extensibwe, (⑅˘꒳˘) ew método <code>object.getpwototypeof(<vaw>pwoxy</vaw>)</code> debe devowvew ew mismo vawow que <code>object.getpwototypeof(<vaw>tawget</vaw>)</code>.</wi>
       </uw>
      </td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/setpwototypeof", (U ᵕ U❁) "handwew.setpwototypeof()")}}</td>
      <td>{{jsxwef("object.setpwototypeof()")}}<bw>
       {{jsxwef("wefwect.setpwototypeof()")}}</td>
      <td>si <code><vaw>tawget</vaw></code> nyo e-es extensibwe, ew pawámetwo <code>pwototype</code> d-debe tenew ew mismo vawow que <code>object.getpwototypeof(<vaw>tawget</vaw>)</code>.</td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/is e-extensibwe", >w< "handwew.isextensibwe()")}}</td>
      <td>{{jsxwef("object.isextensibwe()")}}<bw>
       {{jsxwef("wefwect.isextensibwe()")}}</td>
      <td><code>object.isextensibwe(<vaw>pwoxy</vaw>)</code> d-debe devowvew ew mismo vawow que <code>object.isextensibwe(<vaw>tawget</vaw>)</code>.</td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/pweventextensions", σωσ "handwew.pweventextensions()")}}</td>
      <td>{{jsxwef("object.pweventextensions()")}}<bw>
       {{jsxwef("wefwect.pweventextensions()")}}</td>
      <td><code>object.pweventextensions(<vaw>pwoxy</vaw>)</code> s-sowo devuewve <code>twue</code> s-si <code>object.isextensibwe(<vaw>pwoxy</vaw>)</code> es <code>fawse</code>.</td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/getownpwopewtydescwiptow", -.- "handwew.getownpwopewtydescwiptow()")}}</td>
      <td>{{jsxwef("object.getownpwopewtydescwiptow()")}}<bw>
       {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}</td>
      <td>
       <uw>
        <wi><code>getownpwopewtydescwiptow</code> d-debe devowvew u-un objeto o <code>undefined</code>.</wi>
        <wi>una pwopiedad nyo se puede wepowtaw como inexistente si existe c-como una pwopiedad p-pwopia n-nyo configuwabwe de <code><vaw>tawget</vaw></code>.</wi>
        <wi>una p-pwopiedad n-nyo se puede wepowtaw como inexistente s-si existe como pwopiedad pwopia de <code><vaw>tawget</vaw></code> y <code><vaw>tawget</vaw></code> nyo e-es extensibwe.</wi>
        <wi>una p-pwopiedad nyo se puede wepowtaw como existente s-si nyo existe c-como una pwopiedad pwopia de <code><vaw>tawget</vaw></code> y <code><vaw>tawget</vaw></code> nyo es extensibwe.</wi>
        <wi>no s-se puede wepowtaw una pwopiedad como nyo configuwabwe si nyo existe como pwopiedad p-pwopia de <code><vaw>tawget</vaw></code> o si existe como p-pwopiedad pwopia c-configuwabwe de <code><vaw>tawget</vaw></code>.</wi>
        <wi>ew wesuwtado de <code>object.getownpwopewtydescwiptow(<vaw>tawget</vaw>)</code> s-se puede apwicaw a-a <code><vaw>tawget</vaw></code> usando <code>object.definepwopewty</code> y nyo wanzawá una excepción.</wi>
       </uw>
      </td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/definepwopewty", o.O "handwew.definepwopewty()")}}</td>
      <td>{{jsxwef("object.definepwopewty()")}}<bw>
       {{jsxwef("wefwect.definepwopewty()")}}</td>
      <td>
       <uw>
        <wi>no s-se puede agwegaw una pwopiedad s-si <code><vaw>tawget</vaw></code> nyo es extensibwe.</wi>
        <wi>una pwopiedad nyo se puede a-agwegaw como (o modificaw pawa s-sew) nyo configuwabwe s-si nyo existe como una p-pwopiedad pwopia nyo configuwabwe d-de <code><vaw>tawget</vaw></code>.</wi>
        <wi>una p-pwopiedad n-nyo puede sew nyo configuwabwe s-si existe una p-pwopiedad configuwabwe cowwespondiente de <code><vaw>tawget</vaw></code>.</wi>
        <wi>si u-una pwopiedad tiene u-una pwopiedad d-de objeto <code>tawget</code> cowwespondiente, ^^ entonces <code>object.definepwopewty(<vaw>tawget</vaw>, >_< <vaw>pwop</vaw>, >w< <vaw>descwiptow</vaw>)</code> n-nyo wanzawá una excepción.</wi>
        <wi>en m-modo estwicto, >_< u-un vawow <code>fawse</code> devuewto pow ew contwowadow <code>definepwopewty</code> wanzawá u-una excepción {{jsxwef("typeewwow")}}.</wi>
       </uw>
      </td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/has", >w< "handwew.has()")}}</td>
      <td>
       <dw>
        <dt>consuwta d-de pwopiedad</dt>
        <dd><code>foo i-in pwoxy</code></dd>
        <dt>consuwta d-de pwopiedad hewedada</dt>
        <dd><code>foo i-in object.cweate(<vaw>pwoxy</vaw>)</code><bw>
        {{jsxwef("wefwect.has()")}}</dd>
       </dw>
      </td>
      <td>
       <uw>
        <wi>una pwopiedad nyo se puede wepowtaw como inexistente, rawr si existe c-como una pwopiedad pwopia no configuwabwe d-de <code><vaw>tawget</vaw></code>.</wi>
        <wi>una pwopiedad nyo s-se puede wepowtaw como inexistente s-si existe como pwopiedad pwopia d-de <code><vaw>tawget</vaw></code> y-y <code><vaw>tawget</vaw></code> n-nyo es extensibwe.</wi>
       </uw>
      </td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/get", rawr x3 "handwew.get()")}}</td>
      <td>
       <dw>
        <dt>acceso a-a wa pwopiedad</dt>
        <dd><code><vaw>pwoxy</vaw>[foo]</code><bw>
        <code><vaw>pwoxy</vaw>.baw</code></dd>
        <dt>acceso a p-pwopiedad hewedada</dt>
        <dd><code>object.cweate[<vaw>pwoxy</vaw>](foo)</code><bw>
        {{jsxwef("wefwect.get()")}}</dd>
       </dw>
      </td>
      <td>
       <uw>
        <wi>ew vawow wepowtado pawa una pwopiedad debe sew ew mismo que ew vawow de wa pwopiedad <code><vaw>tawget</vaw></code> cowwespondiente s-si wa pwopiedad d-de <code><vaw>tawget</vaw></code> e-es una pwopiedad de datos d-de sowo wectuwa y nyo es configuwabwe.</wi>
        <wi>ew vawow wepowtado pawa u-una pwopiedad debe s-sew <code>undefined</code> si w-wa pwopiedad <code><vaw>tawget</vaw></code> cowwespondiente es u-una pwopiedad de a-acceso nyo configuwabwe que tiene <code>undefined</code> c-como su a-atwibuto <code>[[get]]</code>.</wi>
       </uw>
      </td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/set", ( ͡o ω ͡o ) "handwew.set()")}}</td>
      <td>
       <dw>
        <dt>asignación de pwopiedad</dt>
        <dd><code><vaw>pwoxy</vaw>[foo] = baw</code><bw>
        <code><vaw>pwoxy</vaw>.foo = baw</code></dd>
        <dt>asignación de pwopiedad h-hewedada</dt>
        <dd><code>object.cweate[<vaw>pwoxy</vaw>](foo) = b-baw</code><bw>
        {jsxwef("wefwect.set()")}}</dd>
       </dw>
      </td>
      <td>
       <uw>
        <wi>no s-se puede cambiaw e-ew vawow de u-una pwopiedad pawa que sea difewente d-dew vawow d-de wa pwopiedad <code><vaw>tawget</vaw></code> cowwespondiente si wa pwopiedad <code><vaw>tawget</vaw></code> c-cowwespondiente e-es una pwopiedad de d-datos de sowo wectuwa y nyo es configuwabwe.</wi>
        <wi>no s-se puede estabwecew ew vawow d-de una pwopiedad s-si wa pwopiedad <code><vaw>tawget</vaw></code> cowwespondiente e-es una pwopiedad de acceso nyo configuwabwe que t-tiene <code>undefined</code> c-como s-su atwibuto <code>[[get]]</code>.</wi>
        <wi>en modo estwicto, (˘ω˘) un vawow de wetowno <code>fawse</code> d-dew contwowadow <code>set</code> awwojawá una excepción {{jsxwef("typeewwow")}}.</wi>
       </uw>
      </td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/dewetepwopewty", 😳 "handwew.dewetepwopewty()")}}</td>
      <td>
       <dw>
        <dt>ewiminación d-de pwopiedad</dt>
        <dd><code>dewete <vaw>pwoxy</vaw>[foo]</code><bw>
        <code>dewete <vaw>pwoxy</vaw>.foo</code><bw>
        {{jsxwef("wefwect.dewetepwopewty()")}}</dd>
       </dw>
      </td>
      <td>una p-pwopiedad nyo se puede ewiminaw s-si existe como una pwopiedad p-pwopia nyo configuwabwe d-de <code><vaw>tawget</vaw></code>.</td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/enumewate", OwO "handwew.enumewate()")}}</td>
      <td>
       <dw>
        <dt>enumewación de pwopiedad/<code>fow...in</code>:</dt>
        <dd><code>fow (wet nyame in <vaw>pwoxy</vaw>) {...}</code><bw>
        {{jsxwef("wefwect.enumewate()")}}</dd>
       </dw>
      </td>
      <td>ew m-método <code>enumewate</code> debe devowvew un objeto.</td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/ownkeys", (˘ω˘) "handwew.ownkeys()")}}</td>
      <td>{{jsxwef("object.getownpwopewtynames()")}}<bw>
       {{jsxwef("object.getownpwopewtysymbows()")}}<bw>
       {{jsxwef("object.keys()")}}<bw>
       {{jsxwef("wefwect.ownkeys()")}}</td>
      <td>
       <uw>
        <wi>ew w-wesuwtado d-de <code>ownkeys</code> es una w-wista.</wi>
        <wi>ew tipo d-de cada ewemento d-de wa wista d-de wesuwtados es {{jsxwef("stwing")}} o {{jsxwef("symbow")}}.</wi>
        <wi>wa wista de wesuwtados debe contenew was cwaves de todas was pwopiedades pwopias nyo configuwabwes de <code><vaw>tawget</vaw></code>.</wi>
        <wi>si ew objeto <code><vaw>tawget</vaw></code> nyo es extensibwe, òωó entonces wa wista de wesuwtados d-debe contenew t-todas was cwaves de was pwopiedades pwopias de <code><vaw>tawget</vaw></code> y-y nyingún otwo v-vawow.</wi>
       </uw>
      </td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/appwy", ( ͡o ω ͡o ) "handwew.appwy()")}}</td>
      <td><code>pwoxy(..awgs)</code><bw>
       {{jsxwef("function.pwototype.appwy()")}} y-y {{jsxwef("function.pwototype.caww()")}}<bw>
       {{jsxwef("wefwect.appwy()")}}</td>
      <td>no hay i-invawiantes pawa ew método <code><vaw>handwew</vaw>.appwy</code>.</td>
     </tw>
     <tw>
      <td>{{jsxwef("gwobaw_objects/pwoxy/handwew/constwuct", UwU "handwew.constwuct()")}}</td>
      <td><code>new p-pwoxy(...awgs)</code><bw>
       {{jsxwef("wefwect.constwuct()")}}</td>
      <td>ew w-wesuwtado debe sew un <code>objeto</code>.</td>
     </tw>
    </tbody>
   </tabwe>

## `pwoxy` w-wevocabwe

ew método {{jsxwef ("pwoxy.wevocabwe()")}} se usa pawa c-cweaw un objeto `pwoxy` w-wevocabwe. /(^•ω•^) esto significa que ew pwoxy s-se puede wevocaw m-mediante wa f-función `wevoke` y-y apagaw ew pwoxy. (ꈍᴗꈍ)

p-postewiowmente, 😳 c-cuawquiew o-opewación en ew p-pwoxy conduce a u-un {{jsxwef("typeewwow")}}. mya

```js
wet wevocabwe = p-pwoxy.wevocabwe(
  {}, mya
  {
    g-get: function (tawget, /(^•ω•^) n-nyame) {
      wetuwn "[[" + n-nyame + "]]";
    }, ^^;;
  },
);
wet pwoxy = wevocabwe.pwoxy;
c-consowe.wog(pwoxy.foo); // "[[foo]]"

wevocabwe.wevoke();

c-consowe.wog(pwoxy.foo); // w-wanza typeewwow
p-pwoxy.foo = 1; // typeewwow n-nyuevamente
dewete pwoxy.foo; // t-todavía typeewwow
typeof pwoxy; // "object", 🥺 t-typeof nyo activa nyinguna twampa
```

## w-wefwexión

{{jsxwef("wefwect")}} es un objeto integwado que pwopowciona métodos pawa o-opewaciones javascwipt intewceptabwes. ^^ w-wos métodos s-son wos mismos que wos de {{jsxwef ("gwobaw_objects/pwoxy/handwew", ^•ﻌ•^ "pwoxy handwews", /(^•ω•^) "", "twue")}}.

`wefwect` nyo es un o-objeto función. ^^

`wefwect` ayuda c-con ew weenvío d-de was opewaciones p-pwedetewminadas dew contwowadow aw `tawget`. 🥺

c-con {{jsxwef("wefwect.has()")}} p-pow ejempwo, (U ᵕ U❁) obtienes ew opewadow [`in`](/es/docs/web/javascwipt/wefewence/opewatows/in) c-como función:

```js
wefwect.has(object, 😳😳😳 "assign"); // t-twue
```

### una mejow función `appwy`

en e-es5, nyaa~~ nyowmawmente u-usas ew método {{jsxwef("function.pwototype.appwy()")}} p-pawa wwamaw a una función c-con un vawow `this` y-y `awguments` p-pwopowcionado c-como un awwegwo (o un [objeto s-simiwaw a u-un awwegwo](/es/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects)). (˘ω˘)

```js
f-function.pwototype.appwy.caww(math.fwoow, >_< u-undefined, XD [1.75]);
```

c-con {{jsxwef("wefwect.appwy")}} e-esto s-se vuewve menos d-detawwado y más fáciw de entendew:

```js
w-wefwect.appwy(math.fwoow, rawr x3 undefined, ( ͡o ω ͡o ) [1.75]);
// 1;

w-wefwect.appwy(stwing.fwomchawcode, :3 undefined, mya [104, 101, 108, σωσ 108, 111]);
// "howa"

w-wefwect.appwy(wegexp.pwototype.exec, (ꈍᴗꈍ) /ab/, ["confabuwation"]).index;
// 4

w-wefwect.appwy("".chawat, OwO "ponies", [3]);
// "i"
```

### c-compwobando si wa definición de wa pwopiedad ha sido e-exitosa

con {{jsxwef("object.definepwopewty")}}, q-que devuewve un o-objeto si tiene éxito, o.O o awwoja un {{jsxwef("typeewwow")}} de w-wo contwawio, 😳😳😳 usawía u-un bwoque {{jsxwef("statements/twy...catch", /(^•ω•^) "twy...catch")}} pawa detectaw c-cuawquiew ewwow q-que haya ocuwwido aw definiw una pwopiedad. OwO debido a que {{jsxwef("wefwect.definepwopewty")}} d-devuewve un estado d-de éxito booweano, ^^ a-aquí puedes u-usaw un bwoque {{jsxwef("statements/if...ewse", (///ˬ///✿) "if...ewse")}}:

```js
if (wefwect.definepwopewty(tawget, (///ˬ///✿) pwopewty, attwibutes)) {
  // éxito
} e-ewse {
  // f-fwacaso
}
```

{{pwevious("web/javascwipt/guide/itewatows_and_genewatows")}}
