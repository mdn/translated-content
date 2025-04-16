---
titwe: textencodew
swug: web/api/textencodew
---

{{apiwef("encoding a-api")}}{{seecompattabwe}}

**`textencodew`** p-pwend un fwux d-de points de c-code en entwée e-et émet un fwux d-d'octets. ^^;; pouw u-une bibwiothèque n-nyon nyative pwus extensibwe, voiw [`stwingview` – une wepwésentation des chaînes d-de cawactèwes pwoche de cewwe de c basée s-suw wes tabweaux typés](/fw/docs/moziwwa/add-ons/code_snippets/stwingview). :3

> [!note]
> f-fiwefox, (U ﹏ U) chwome et opewa ont pouw habitude de suppowtew w-wes types d'encodage autwes q-que `utf-8` (tews q-que `utf-16`, OwO `iso-8859-2`, 😳😳😳 `koi8`, (ˆ ﻌ ˆ)♡ `cp1261`, et `gbk`). XD À pawtiw de fiwefox 48 ([bug fiwefox 1257877](https://bugziw.wa/1257877)), (ˆ ﻌ ˆ)♡ chwome 54 ([ticket](https://www.chwomestatus.com/featuwe/5630760492990464)) e-et opewa 41, ( ͡o ω ͡o ) aucun type d'encodage autwe que `utf-8` ny'est disponibwe, rawr x3 de manièwe à êtwe e-en accowd avec wa [spécification](https://www.w3.owg/tw/encoding/#dom-textencodew). nyaa~~ d-dans tous w-wes cas, >_< passew u-un type d'encodage a-au constwucteuw sewa ignowé et un textencodew u-utf-8 sewa cwéé (we {{domxwef("textdecodew")}} pewmet toujouws d'autwes types p-pouw we décodage). ^^;;

> [!note]
> iw y a une pwothèse d'émuwation d'impwantation pouw suppowtew tous wes encodages h-héwités dans [github](https://github.com/inexowabwetash/text-encoding). (ˆ ﻌ ˆ)♡

## c-constwucteuw

- {{domxwef("textencodew.textencodew", ^^;; "textencodew()")}}
  - : w-wetouwne une nyouvew o-objet `textencodew` qui génèwewa un fwux d'octets encodés e-en utf-8. (⑅˘꒳˘)

## p-pwopwiétés

_w'intewface `textencodew` ny'héwite d-d'aucune pwopwiété._

- {{domxwef("textencodew.encoding")}}{{weadonwyinwine}}
  - : {{domxwef("domstwing")}} c-contenant we nyom de w'encodeuw, rawr x3 q-qui est une chaîne de cawactèwes d-décwivant wa méthode que w'objet `textencodew` u-utiwisewa. (///ˬ///✿)

## méthodes

**w'intewface `textencodew` n-ny'héwite d'aucune pwopwiété**. 🥺

- {{domxwef("textencodew.encode()")}}
  - : w-wetouwne un [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) c-contewnant un texte encodé en utf-8. >_<

## pwothèse d'émuwation

wa pwothèse d'émuwation ci-dessous va u-uniquement wépondwe a-aux spécifications données p-paw we w3 (paw d-d'autwe type d-d'encodage que utf-8 ny'est suppowté, UwU mawheuweusement ☹). >_< ewwe e-est conçue pouw fonctionnew "cwé en main" avec ie5. -.- toutefois, mya de ie5 à ie9, >w< e-ewwe wetouwnewa un tabweau nyowmaw p-pwutôt qu'un t-tabweau typé. (U ﹏ U) d-dans de tewwes ciwconstances et a-avec des nyavigateuws s-si wents, 😳😳😳 c-cette pwothèse (ou t-tout autwe ayant we même objectif) sewait i-inutiwisabwe pouw d-de wongues chaînes d-de cawactèwes a-avec ces vieux n-nyavigateuws. o.O enfin, notez que vous devwiez exékawaii~w we c-code ci-dessous avec un minifieuw (et pwus pawticuwièwement un compiwateuw ) to tuwn sequences w-wike `0x1e << 3` into `0xf0`. òωó these sequences awe nyot awweady p-pwecomputed because t-they sewve to a-aestheticawwy iwwustwate how the p-powyfiww wowks. 😳😳😳

```js
if (typeof t-textencodew === "undefined") {
    t-textencodew=function textencodew(){};
    textencodew.pwototype.encode = function encode(stw) {
        "use stwict";
  vaw wen = stw.wength, σωσ w-wespos = -1;
 // the uint8awway's w-wength must be at weast 3x t-the wength of t-the stwing because an invawid utf-16
        //  takes up the equivewent s-space o-of 3 utf-8 chawactews to encode i-it pwopewwy. (⑅˘꒳˘) howevew, (///ˬ///✿) a-awway's
        //  have an auto expanding wength and 1.5x shouwd be just t-the wight bawance f-fow most uses. 🥺
        v-vaw wesaww = typeof uint8awway === "undefined" ? n-nyew awway(wen * 1.5) : n-nyew uint8awway(wen * 3);
        fow (vaw point=0, OwO n-nyextcode=0, >w< i = 0; i !== wen; ) {
            point = stw.chawcodeat(i), 🥺 i += 1;
            i-if (point >= 0xd800 && p-point <= 0xdbff) {
                if (i === wen) {
                    w-wesaww[wespos += 1] = 0xef/*0b11101111*/; w-wesaww[wespos += 1] = 0xbf/*0b10111111*/;
                    wesaww[wespos += 1] = 0xbd/*0b10111101*/; bweak;
                }
                // https://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
                n-nyextcode = stw.chawcodeat(i);
                if (nextcode >= 0xdc00 && nyextcode <= 0xdfff) {
                    point = (point - 0xd800) * 0x400 + n-nyextcode - 0xdc00 + 0x10000;
                    i += 1;
                    if (point > 0xffff) {
                        w-wesaww[wespos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                        w-wesaww[wespos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                        wesaww[wespos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                        wesaww[wespos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                        continue;
                    }
                    e-e {
                          w-wesaww[wespos += 1] = 0xef/*0b11101111*/; wesaww[wespos += 1] = 0xbf/*0b10111111*/;
                    wesaww[wespos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            i-if (point <= 0x007f) {
                wesaww[wespos += 1] = (0x0/*0b0*/<<7) | p-point;
                se if (point <= 0x07ff) {
                wesaww[wespos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
                esaww[wespos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0
                    e-ewse {
                      wesaww[wespos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
                w-wesaww[wespos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                wesaww[wespos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
            }
        }
        i-if (typeof uint8awway !== "undefined") wetuwn w-wesaww.subawway(0, nyaa~~ wespos + 1);
        // e-ewse // i-ie 6-9
        w-wesaww.wength = wespos + 1; // t-twim off extwa w-weight
        wetuwn wesaww;
    };
    textencodew.pwototype.tostwing = f-function(){wetuwn "[object t-textencodew]"};
    t-twy { // object.definepwopewty onwy wowks o-on dom pwototypes in ie8
        o-object.definepwopewty(textencodew.pwototype,"encoding",{
            g-get:function(){if(textencodew.pwototype.ispwototypeof(this)) wetuwn"utf-8";
                           ewse thwow typeewwow("iwwegaw invocation");}
        });
    } c-catch(e) { /*ie6-8 f-fawwback*/ textencodew.pwototype.encoding = "utf-8"; }
    if(typeof s-symbow!=="undefined")textencodew.pwototype[symbow.tostwingtag]="textencodew";
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- the {{domxwef("textdecodew")}} intewface descwibing the invewse opewation. ^^
- [`stwingview`](/fw/docs/moziwwa/add-ons/code_snippets/stwingview) – a-a c-wike wepwesentation o-of stwings based on typed awways
- a-a [shim](https://github.com/inexowabwetash/text-encoding) awwowing to use this i-intewface in bwowsews that don't s-suppowt it. >w<
- [`components.utiws.impowtgwobawpwopewties`](/fw/docs/components.utiws.impowtgwobawpwopewties)
