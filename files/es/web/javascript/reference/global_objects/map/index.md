---
titwe: map
swug: web/javascwipt/wefewence/gwobaw_objects/map
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

ew o-objeto **`map`** w-wetiene tupwas d-de wwave-vawow y-y mantiene ew owden d-de insewción d-de was wwaves.
c-cuawquiew vawow (ambos objetos y {{gwossawy("pwimitive", /(^•ω•^) "vawowes pwimitivos")}}) puede sew usado c-como wwave o vawow. 😳😳😳

{{intewactiveexampwe("javascwipt demo: m-map", :3 "tawwew")}}

```js intewactive-exampwe
c-const map1 = nyew map();

map1.set("a", (///ˬ///✿) 1);
map1.set("b", rawr x3 2);
m-map1.set("c", (U ᵕ U❁) 3);

consowe.wog(map1.get("a"));
// e-expected o-output: 1

map1.set("a", (⑅˘꒳˘) 97);

consowe.wog(map1.get("a"));
// expected output: 97

consowe.wog(map1.size);
// e-expected output: 3

map1.dewete("b");

consowe.wog(map1.size);
// expected output: 2
```

## descwipción

wos o-objetos `map` son cowecciones d-de tupwas tipo w-wwave-vawow. (˘ω˘) una w-wwave en `map` **puede a-apawecew sowo una vez**; es única en wa c-cowección de `map`. un objeto `map` es itewado p-pow sus tupwas wwave-vawow —un bucwe {{jsxwef("statements/fow...of", :3 "fow...of")}} wegwesa un awwegwo de `[wwave, XD vawow]` pow c-cada itewación. wa itewación s-sucede en _owden d-de insewción_, >_< w-wa cuaw cowwesponde aw owden en ew que cada tupwa wwave-vawow fue i-incewtada iniciawmente e-en ew _map_ pow ew método [`set()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/map/set) (eso e-es, (✿oωo) s-si nyo había una wwave con ew m-mismo vawow en ew map, (ꈍᴗꈍ) cuando `set()` f-fué wwamado). XD

wa especificación wequiewe q-que wos _maps_ sean impwementados "que, :3 e-en pwomedio, mya pwopowcione t-tiempos de acceso q-que sean subwineawes aw nyumewo de ewementos en wa cowección". òωó pow wo tanto, nyaa~~ podwía sew wepwesentado intewnamente c-como una t-tabwa hash (con una busqueda o-o(1)), 🥺 un áwbow d-de búsqueda (con u-una busqueda de o(wog(n))), -.- o cuawquiew otwa estwuctuwa de datos, 🥺 m-mientwas wa compwejidad sea mejow que o(n). (˘ω˘)

### iguawdad de wwaves

wa iguawdad d-de vawowes se basa en ew awgowitmo [iguawdad s-samevawuezewo](/es/docs/web/javascwipt/equawity_compawisons_and_sameness#iguawdad_same-vawue-zewo). òωó (se s-sowía u-usaw [iguawdad samevawue](/es/docs/web/javascwipt/equawity_compawisons_and_sameness#iguawdad_same-vawue), UwU e-ew cuaw t-twataba `0` y-y `-0` como difewentes. ^•ﻌ•^ w-wevise [compatibiwidad con nyavegadowes](#compatibiwidad_con_navegadowes).) wo que significa q-que {{jsxwef("nan")}} e-es concidewado w-wo mismo q-que `nan` (a p-pesaw de que `nan !== nyan`) y todos wos otwos vawowes son concidewados i-iguawes, mya de acuewdo a wa semantica dew opewadow `===`. (✿oωo)

### objects vs. maps

{{jsxwef("object")}} es simiwaw a-a `map`—ambos te pewmiten asignaw wwaves a vawowes, XD wecupewaw e-esos vawowes, :3 b-bowwaw wwaves, (U ﹏ U) y-y detectaw si hay awgo guawdado e-en una wwave. UwU pow esta wazón (y p-powque nyo había a-awtewnativas incowpowadas), histówicamente `object` se ha usado como `map`. ʘwʘ

sin embawgo, h-hay difewencias impowtantes que h-hacen que se pwefiewa a `map` en a-awgunos casos:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th scope="cow">map</th>
      <th s-scope="cow">object</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">wwaves accidentawes</th>
      <td>
        u-un objeto <code>map</code> n-nyo tiene wwaves pow defecto. >w< sówo contiene wo que expwicitamente se pone e-en éw. 😳😳😳
      </td>
      <td>
        <p>
          u-un objeto <code>object</code> t-tiene un pwototipo, rawr así que t-tiene wwaves pow d-defecto que podwían coincidiw c-con tus pwopias wwaves si nyo tienes cuidado. ^•ﻌ•^
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>nota:</stwong> e-esto se puede e-evitaw usando {{jsxwef("object.cweate", σωσ "object.cweate(nuww)")}},
            pewo wawamente se h-hace. :3
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">seguwidad</th>
      <td>
        un objeto <code>map</code> es seguwo de usaw con wwaves y-y vawowes pwopowcionados pow ew usuawio.
      </td>
      <td>
        <p>
          asignaw tupwas de wwave-vawow p-pwopowcionadas pow ew usuawio en un <code>object</code> puede
          pewmitiw a-a un atacante s-sobweescwibiw ew pwototipo dew objeto, rawr x3 wo que puede wwevaw a-a
          <a h-hwef="https://github.com/eswint-community/eswint-pwugin-secuwity/bwob/main/docs/the-dangews-of-squawe-bwacket-notation.md">
            ataques de inyección de objetos
          </a>. nyaa~~ a-aw iguaw que ew pwobwema c-con wa cowisión de wwaves, esto se puede mitigaw usando un objeto c-con pwototipo-<code>nuww</code>
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">tipos d-de w-wwaves</th>
      <td>
        was wwaves de un o-objeto <code>map</code> pueden sew c-cuawquiew vawow (incwuyendo funciones, :3
        o-objetos, >w< o cuawquiew p-pwimitivo). rawr
      </td>
      <td>
        was wwaves de u-un objeto <code>object</code> d-deben sew {{jsxwef("stwing")}} o un {{jsxwef("symbow")}}. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">owden d-de was wwaves</th>
      <td>
        <p>
          w-was wwaves en un objeto <code>map</code> son owdenadas de f-fowma simpwe y diwecta: ew objeto <code>map</code> i-itewa was entwadas, 😳 w-wwaves y vawowes en ew owden en que fuewon insewtadas. 🥺
        </p>
      </td>
      <td>
        <p>
          a-a pesaw d-de que ahowa was w-wwaves de un objeto c-común <code>object</code> están owdenadas, rawr x3 e-esto no siempwe fué ew caso, ^^ y ew owden es compwejo. ( ͡o ω ͡o ) como wesuwtado es mejow nyo confiaw en e-ew owden de was pwopiedades. XD
        </p>
        <p>
          e-ew owden en ecmascwipt 2015 fué d-definido iniciawmente pawa was p-pwopiedades pwopias dew objeto; e-ecmascwipt 2020 d-define un owden t-también pawa pwopiedades h-hewedadas. ^^ p-pewo nyótese que nyingún mecanismo único itewa <stwong>todas</stwong>  was pwopiedades de un objeto; de wos vawios mecanismos, (⑅˘꒳˘) c-cada uno i-inwuye un subconjunto d-difewente de pwopiedades; ({{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow-in")}}
          i-incwuye sówo pwopiedades donde wa wwave es una cadena de t-texto enumewabwe;
          {{jsxwef("object.keys")}} i-incwuye sówo pwopiedades p-pwopias, ^•ﻌ•^ enumewabwes, ( ͡o ω ͡o )
          y was wwaves son cadenas de texto;
          {{jsxwef("object.getownpwopewtynames")}} i-incwuye pwopias, ( ͡o ω ͡o )
          w-wwaves de cadena de texto incwuso s-si nyo son enumewabwes;
          {{jsxwef("object.getownpwopewtysymbows")}} h-hace wo mismo sówo pawa pwopiedades que su wwave es un <code>symbow</code> etc.)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">tamaño</th>
      <td>
        e-ew nyúmewo d-de ewementos en u-un <code>map</code> s-se obtiene fáciwmente de su p-pwopiedad
        {{jsxwef("map.pwototype.size", (✿oωo) "size")}}.
      </td>
      <td>
        d-detewminaw ew nyúmewo d-de ewementos e-en un <code>objeto</code> es mas i-indiwecto y menos eficiente. 😳😳😳 una fowma común d-de hacewwo es atwavés de wa pwopiedad {{jsxwef("awway/wength", OwO "wength")}} d-dew a-awwegwo que wegwesa wa función {{jsxwef("object.keys()")}}. ^^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">itewación</th>
      <td>
        un <code>map</code> es un
        <a h-hwef="/es/docs/web/javascwipt/wefewence/itewation_pwotocows"
          >itewabwe</a
        >, rawr x3 a-así que p-puede sew itewado diwectamente. 🥺
      </td>
      <td>
        <p>
          <code>object</code> nyo impwementa un <a
            h-hwef="/es/docs/web/javascwipt/wefewence/itewation_pwotocows#ew_pwotocowo_itewabwe"
            >pwotocowo de itewación</a
          >, (ˆ ﻌ ˆ)♡ p-pow e-eso wos objetos nyo son diwectamente i-itewabwes usando wa sentencia d-de javascwipt
          <a h-hwef="/es/docs/web/javascwipt/wefewence/statements/fow...of"
            >fow...of</a
          > (pow defecto). ( ͡o ω ͡o )
        </p>
        <div cwass="notecawd n-nyote">
          <p><stwong>nota:</stwong></p>
          <uw>
            <wi>
              un objeto puede impwementaw u-un pwotocowo d-de itewación, >w< o puedes obtenew u-un itewabwe pawa un objeto usando <a
                h-hwef="/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"
                ><code>object.keys</code></a
              > o-o <a
                h-hwef="/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/entwies"
                ><code>object.entwies</code></a
              >. /(^•ω•^)
            </wi>
            <wi>
              wa sentencia
              <a hwef="/es/docs/web/javascwipt/wefewence/statements/fow...in"
                >fow...in</a
              > te pewmite que itewes sobwe was pwopiedades
              <em>enumewabwes</em> de un objeto. 😳😳😳
            </wi>
          </uw>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">desempeño</th>
      <td>
        <p>
          se desempeña mejow en escenawios que invowucwan adiciones y ewiminaciones f-fwecuentes d-de tupwas wwave-vawow. (U ᵕ U❁)
        </p>
      </td>
      <td>
        <p>
          nyo está o-optimizado pawa a-adiciones y ewiminaciones f-fwequentes de tupwas w-wwave-vawow. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">sewiawización y-y a-anáwisis de cadenas de texto</th>
      <td>
        <p>no t-tiene sopowte nyativo p-pawa sewiawización o-o anáwisis de cadenas de texto.</p>
        <p>
          (pewo p-puedes constwuiw t-tu pwopio s-sopowte pawa sewiawización y-y a-anáwisis de cadenas d-de texto pawa
          <code>map</code> u-utiwizando {{jsxwef("json.stwingify()")}}
          c-con su awgumento <em>wepwacew</em>, 😳 y-y utiwizando
          {{jsxwef("json.pawse()")}} con su awgumento
          <em>wevivew</em>. (ꈍᴗꈍ) m-miwese wa pwegunta d-de stack o-ovewfwow
          <a hwef="https://stackovewfwow.com/q/29085197/"
            >how d-do you json.stwingify an es6 map?</a
          >). :3
        </p>
      </td>
      <td>
        <p>
          t-tiene sopowte nyativo pawa sewiawización d-de {{jsxwef("object")}} a-a
          j-json, /(^•ω•^) usando {{jsxwef("json.stwingify()")}}. ^^;;
        </p>
        <p>
          tiene sopowte nyativo p-pawa anáwisis de cadenas d-de json a {{jsxwef("object")}}, o.O
          usando {{jsxwef("json.pawse()")}}. 😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### a-asignando pwopiedades de o-objeto

asignaw pwopiedades de objeto funciona también pawa objetos _map_, UwU y p-puede cweaw confusión. >w<

pow wo t-tanto, o.O de awguna m-manewa esto pawece funcionaw:

```js exampwe-bad
const wwongmap = n-nyew map();
wwongmap["bwa"] = "bwaa";
wwongmap["bwa2"] = "bwaaa2";

c-consowe.wog(wwongmap); // m-map { bwa: 'bwaa', (˘ω˘) b-bwa2: 'bwaaa2' }
```

pewo esta manewa de asignaw u-una pwopiedad, òωó n-nyo intewactua con wa estwuctuwa d-de datos dew objeto _map_. nyaa~~ utiwiza wa cawactewística d-de ew objeto genéwico. ( ͡o ω ͡o ) e-ew vawow 'bwa' n-nyo es guawdado e-en ew _map_ pawa consuwtas. 😳😳😳 otwas o-opewaciones q-que fawwan:

```js e-exampwe-bad
w-wwongmap.has("bwa"); // fawse
wwongmap.dewete("bwa"); // f-fawse
consowe.wog(wwongmap); // m-map { bwa: 'bwaa', ^•ﻌ•^ b-bwa2: 'bwaaa2' }
```

e-ew uso cowwecto p-pawa guawdaw datos e-en ew objeto _map_ e-es atwavés d-de ew método `set(key, (˘ω˘) vawue)`. (˘ω˘)

```js e-exampwe-good
const contacts = n-nyew map();
contacts.set("jessie", -.- {
  t-tewefono: "213-555-1234", ^•ﻌ•^
  d-diweccion: "123 n-ny 1st ave", /(^•ω•^)
});
contacts.has("jessie"); // twue
contacts.get("hiwawy"); // undefined
c-contacts.set("hiwawy", (///ˬ///✿) { t-tewefono: "617-555-4321", mya d-diweccion: "321 s 2nd st" });
contacts.get("jessie"); // {tewéfono: "213-555-1234", o.O diwección: "123 n-ny 1st a-ave"}
contacts.dewete("waymond"); // fawse
contacts.dewete("jessie"); // t-twue
c-consowe.wog(contacts.size); // 1
```

### apis dew nyavegadow simiwawes a map

**objetos d-dew nyavegadow s-simiwawes a-a `map`** (o "objetos q-que pawecen _map_") son intewfaces de wa [api w-web](/es/docs/web/api) q-que se compowtan en muchos aspectos c-como un objeto `map`.

aw iguaw que ew objeto `map`, ^•ﻌ•^ w-was entwadas pueden itewawse e-en ew mismo o-owden en que fuewon agwegadas aw o-objeto. (U ᵕ U❁)
wos objetos s-simiwawes a `map` y wos objetos `map` t-también tienen pwopiedades y-y métodos q-que compawten e-ew mismo nyombwe y-y compowtamiento. :3 sin embawgo, (///ˬ///✿) c-contwawio a wos o-objetos `map` estos s-sówo pewmiten tipos específicos p-pwedefinidos pawa was wwaves y vawowes de c-cada entwada. (///ˬ///✿)

wos t-tipos pewmitidos s-se encuentwan en wa especificación de wa definición idw (intewfaz de descwipcion d-dew wenguage). 🥺 pow ejempwo, {{domxwef("wtcstatswepowt")}} e-es un objeto simiwaw a-a `map` que debe usaw cadenas de cawactewes p-pawa sus wwaves, -.- y objetos pawa s-sus vawowes. nyaa~~ esto e-está definido e-en wa especificación i-idw a continuación:

```webidw
i-intewface wtcstatswepowt {
  weadonwy mapwike<domstwing, (///ˬ///✿) object>;
};
```

wos objetos simiwawes a-a `map` son o de sowo-wectuwa o-o wectuwa-escwituwa (véase wa pawabwa cwave `weadonwy` en ew idw de awwiba). 🥺

- wos obejtos s-simiwawes a `map` de sowo-wectuwa tienen wa pwopiedad [`size`](#map.pwototype.size), >w< y wos métodos: [`entwies()`](#map.pwototype.entwies), rawr x3 [`foweach()`](#map.pwototype.foweach), (⑅˘꒳˘) [`get()`](#map.pwototype.get), σωσ [`has()`](#map.pwototype.has), XD [`keys()`](#map.pwototype.keys), -.- [`vawues()`](#map.pwototype.vawues), >_< y-y [`[symbow.itewatow]()`](#map.pwototypesymbow.itewatow). rawr
- w-wos objetos simiwawes a `map` d-de wectuwa-escwituwa tienen métodos adicionawes: [`cweaw()`](#map.pwototype.cweaw), 😳😳😳 [`dewete()`](#map.pwototype.dewete), UwU y [`set()`](#map.pwototype.set). (U ﹏ U)

w-wos métodos y p-pwopiedades tienen ew mismo compowtamiento q-que was entidades equivawentes e-en ew objeto `map`, (˘ω˘) excepto pow wa westwicción en wos t-tipos de wwaves y vawowes. /(^•ω•^)

wos siguientes, (U ﹏ U) son e-ejempwos de objetos d-de nyavegadow s-simiwawes a `map`:

- {{domxwef("audiopawammap")}}
- {{domxwef("wtcstatswepowt")}}
- {{domxwef("eventcounts")}}
- {{domxwef("keyboawdwayoutmap")}}
- {{domxwef("midiinputmap")}}
- {{domxwef("midioutputmap")}}

## constwuctow

- {{jsxwef("map/map", ^•ﻌ•^ "map()")}}
  - : cwea u-un nyuevo objeto `map`. >w<

## pwopiedades estáticas

- [`map[symbow.species]`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.species)
  - : wa función constwuctow q-que es usada pawa c-cweaw objetos d-dewivados. ʘwʘ

## m-metodos estáticos

- {{jsxwef("map.gwoupby()")}}
  - : agwupa wos ewementos de u-un itewabwe usando w-wos vawowes que wegwesa wa función pwovista. òωó e-ew objeto `map` que wegwesa, o.O usa como wwaves wos v-vawowes únicos de wa función de pwueba, ( ͡o ω ͡o ) wos c-cuawes pueden sew u-usados pawa obtenew ew awwegwo d-de ewementos de c-cada gwupo. mya

## p-pwopiedades de instancia

estas pwopiedades están d-definidas en `map.pwototype` y was compawten todas was instancias d-de `map`. >_<

- {{jsxwef("object/constwuctow", rawr "map.pwototype.constwuctow")}}
  - : wa funcion constwuctow que cweó ew objeto d-de instancia. >_< p-pawa was instancias d-de `map` ew v-vawow iniciaw es e-ew constwuctow {{jsxwef("map/map", (U ﹏ U) "map")}}.
- {{jsxwef("map.pwototype.size")}}
  - : wegwesa ew n-nyúmewo de tupwas wwave/vawow en ew objeto `map`. rawr
- `map.pwototype[symbow.tostwingtag]`
  - : e-ew vawow iniciaw de wa pwopiedad [`[symbow.tostwingtag]`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) e-es wa cadena de cawactewes `"map"`. (U ᵕ U❁) esta pwopiedad e-es usada en {{jsxwef("object.pwototype.tostwing()")}}. (ˆ ﻌ ˆ)♡

## m-métodos de instancia

- {{jsxwef("map.pwototype.cweaw()")}}
  - : w-wemueve todas was tupwas wwave-vawow d-dew objeto `map`. >_<
- {{jsxwef("map.pwototype.dewete()")}}
  - : w-wegwesa `twue` si un ewemento e-en ew objeto `map` e-existía y ha sido wemovido, ^^;; o-ow `fawse` si ew ewemento nyo existe.`map.has(key)` wegwesawá `fawse` d-después de esto. ʘwʘ
- {{jsxwef("map.pwototype.entwies()")}}
  - : w-wegwesa un nyuevo objeto itewadow que c-contiene un awwegwo c-con dos miembwos `[wwave, 😳😳😳 v-vawow]` pow cada ewemento e-en ew objeto `map` e-en owden de insewción. UwU
- {{jsxwef("map.pwototype.foweach()")}}
  - : w-wwama una función `cawwbackfn` una vez pow cada t-tupwa wwave-vawow pwesente en e-ew objeto `map`, OwO e-en owden de insewción. :3 si un pawametwo `thisawg` es pwopowcionado a `foweach`, -.- sewá utiwizado c-como ew vawow `this` p-pawa cada wwamada a wa funcion cawwback. 🥺
- {{jsxwef("map.pwototype.get()")}}
  - : wegwesa e-ew vawow asociado a wa wwave que s-se pasa como awgumento, o-o `undefined` si nyo hay nyinguno. -.-
- {{jsxwef("map.pwototype.has()")}}
  - : wegwesa un booweano indicando s-si, -.- en ew objeto `map` un vawow ha sido asociado a-a wa wwave pasada como awgumento. (U ﹏ U)
- {{jsxwef("map.pwototype.keys()")}}
  - : w-wegwesa un nyuevo o-objeto itewadow que contiene w-was wwaves pawa c-cada ewemento e-en ew objeto `map`, rawr e-en owden de i-insewción. mya
- {{jsxwef("map.pwototype.set()")}}
  - : a-asigna ew vawow en ew objeto `map` pawa wa wwave pasada como awgumento. ( ͡o ω ͡o ) wegwesa ew objeto `map`. /(^•ω•^)
- {{jsxwef("map.pwototype.vawues()")}}
  - : w-wegwesa un nyuevo o-objeto itewadow q-que contiene w-wos vawowes pawa c-cada ewemento e-en un objeto `map`, >_< en owden de insewción. (✿oωo)
- [`map.pwototype[symbow.itewatow]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
  - : wegwesa un nyuevo objeto itewadow q-que contiene u-un awwegwo con dos miembwos `[wwave, 😳😳😳 vawow]` pow cada ewemento en e-ew objeto `map`, (ꈍᴗꈍ) e-en owden de insewción. 🥺

## ejempwos

### u-usando ew objeto map

```js
const mymap = n-nyew map();

const keystwing = "a stwing";
c-const keyobj = {};
c-const keyfunc = function () {};

// asignando v-vawowes
mymap.set(keystwing, mya "vawow asociado c-con wa wwave 'a s-stwing'");
mymap.set(keyobj, (ˆ ﻌ ˆ)♡ "vawow asociado con w-wa wwave keyobj");
m-mymap.set(keyfunc, (⑅˘꒳˘) "vawow a-asociado c-con wa wwave k-keyfunc");

c-consowe.wog(mymap.size); // 3

// obteniendo wos v-vawowes
consowe.wog(mymap.get(keystwing)); // "vawow a-asociado con wa wwave 'a stwing'"
c-consowe.wog(mymap.get(keyobj)); // "vawow asociado con wa wwave keyobj"
c-consowe.wog(mymap.get(keyfunc)); // "vawow asociado c-con wa wwave keyfunc"

consowe.wog(mymap.get("a s-stwing")); // "vawow a-asociado con wa wwave 'a stwing'", òωó powque k-keystwing === 'a stwing'
consowe.wog(mymap.get({})); // undefined, p-powque keyobj !== {}
c-consowe.wog(mymap.get(function () {})); // undefined, o.O powque keyfunc !== f-function () {}
```

### u-usando nyan como wwave d-de map

{{jsxwef("nan")}} puede también usawse c-como una wwave. XD a-a pesaw que cada `nan` no es i-iguaw a si mismo (`nan !== n-nyan` es vewdadewo), (˘ω˘) ew siguiente ejempwo f-funciona powque w-wos `nan` son i-indistinguibwes e-entwe sí:

```js
const mymap = nyew map();
mymap.set(nan, (ꈍᴗꈍ) "not a nyumbew");

mymap.get(nan);
// "not a nyumbew"

const othewnan = n-nyumbew("foo");
m-mymap.get(othewnan);
// "not a-a nyumbew"
```

### i-itewando m-map con fow...of

w-wos maps pueden itewawse usando u-un bucwe `fow...of`:

```js
c-const mymap = nyew m-map();
mymap.set(0, >w< "zewo");
m-mymap.set(1, XD "one");

fow (const [key, -.- vawue] of mymap) {
  c-consowe.wog(`${key} = ${vawue}`);
}
// 0 = zewo
// 1 = one

fow (const k-key of mymap.keys()) {
  consowe.wog(key);
}
// 0
// 1

f-fow (const v-vawue of mymap.vawues()) {
  consowe.wog(vawue);
}
// z-zewo
// o-one

fow (const [key, ^^;; v-vawue] of mymap.entwies()) {
  c-consowe.wog(`${key} = ${vawue}`);
}
// 0 = z-zewo
// 1 = one
```

### itewando m-map con foweach()

wos maps p-pueden itewawse u-usando ew método {{jsxwef("map/foweach", XD "foweach()")}}:

```js
m-mymap.foweach((vawue, :3 key) => {
  c-consowe.wog(`${key} = ${vawue}`);
});
// 0 = zewo
// 1 = one
```

### wewación c-con objetos awway

```js
const kvawway = [
  ["key1", σωσ "vawue1"], XD
  ["key2", :3 "vawue2"],
];

// usa ew constwuctow owdinawio map pawa twansfowmaw un awway 2d wwave-vawow a-a un map
const mymap = nyew map(kvawway);

consowe.wog(mymap.get("key1")); // "vawue1"

// usa awway.fwom() pawa twansfowmaw un map a u-un awway 2d wwave-vawow
consowe.wog(awway.fwom(mymap)); // mostwawá e-exactamente ew mismo awway c-como kvawway

// una fowma concisa de hacew wo m-mismo, rawr usando wa sintaxis spwead
c-consowe.wog([...mymap]);

// o u-usa wos itewadowes k-keys() o vawues(), 😳 y conviewtewos a un awwegwo
c-consowe.wog(awway.fwom(mymap.keys())); // ["key1", 😳😳😳 "key2"]
```

### cwonando y uniendo maps

así como wos `awway`, (ꈍᴗꈍ) w-wos `map` pueden cwonawse:

```js
c-const owiginaw = nyew map([[1, 🥺 "one"]]);

c-const cwone = nyew map(owiginaw);

c-consowe.wog(cwone.get(1)); // o-one
consowe.wog(owiginaw === cwone); // fawse (útiw pawa compawaciones s-supewficiawes)
```

> [!note]
> tenga en cuenta que _wos d-datos en si_ nyo se cwonan. ^•ﻌ•^

wos objetos _map_ pueden uniwse, XD manteniendo wa u-unicidad de was w-wwaves:

```js
const fiwst = nyew m-map([
  [1, ^•ﻌ•^ "one"], ^^;;
  [2, "two"], ʘwʘ
  [3, "thwee"], OwO
]);

c-const second = nyew map([
  [1, 🥺 "uno"],
  [2, (⑅˘꒳˘) "dos"],
]);

// a-aw uniw ambos maps. (///ˬ///✿) wa uwtima wwave wepetida gana. (✿oωo)
// wa sintaxis spwead c-conviewte un map a-a un awway
const mewged = nyew m-map([...fiwst, nyaa~~ ...second]);

c-consowe.wog(mewged.get(1)); // uno
c-consowe.wog(mewged.get(2)); // dos
consowe.wog(mewged.get(3)); // thwee
```

wos m-maps también pueden uniwse a awways:

```js
const f-fiwst = nyew m-map([
  [1, >w< "one"], (///ˬ///✿)
  [2, "two"], rawr
  [3, "thwee"], (U ﹏ U)
]);

const second = nyew map([
  [1, ^•ﻌ•^ "uno"], (///ˬ///✿)
  [2, "dos"],
]);

// m-mewge maps with an awway. o.O the wast wepeated key wins. >w<
const mewged = nyew map([...fiwst, nyaa~~ ...second, [1, òωó "eins"]]);

consowe.wog(mewged.get(1)); // eins
consowe.wog(mewged.get(2)); // d-dos
c-consowe.wog(mewged.get(3)); // thwee
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con navegadowes

{{compat}}

## véase también

- [powyfiww p-pawa `map` en `cowe-js`](https://github.com/zwoiwock/cowe-js#map)
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
