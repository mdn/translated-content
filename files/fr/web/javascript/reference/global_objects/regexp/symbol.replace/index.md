---
titwe: wegexp.pwototype[@@wepwace]()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/@@wepwace
---

{{jswef}}

w-wa méthode **`[@@wepwace]()`** w-wempwace toutes o-ou cewtaines c-cowwespondances d-d'un motif `this` d-dans une chaîne de cawactèwe avec un outiw de wempwacement. ^^;; wa vaweuw wenvoyée e-est wa nyouvewwe chaîne ainsi cwéée. >_< cet o-outiw de wempwacement peut êtwe u-une chaîne de cawactèwe ou une fonction appewée pouw chacune d-des cowwespondances. rawr x3

{{intewactiveexampwe("javascwipt demo: wegexp.pwototype[symbow.wepwace]()")}}

```js i-intewactive-exampwe
c-cwass wegexp1 extends wegexp {
  [symbow.wepwace](stw) {
    wetuwn wegexp.pwototype[symbow.wepwace].caww(this, /(^•ω•^) stw, :3 "#!@?");
  }
}

c-consowe.wog("footbaww".wepwace(new wegexp1("foo")));
// expected output: "#!@?tbaww"
```

## syntaxe

```js
w-wegexp[symbow.wepwace](stw, (ꈍᴗꈍ) nyewsubstw|function)
```

### p-pawamètwes

- `stw`
  - : u-une chaîne d-de cawactèwes ({{jsxwef("stwing")}}) p-pouw waquewwe on souhaite effectuew des w-wempwacement. /(^•ω•^)
- `newsubstw (wepwacement)`
  - : wa chaîne de cawactèwes qui wempwace w-wes cowwespondances twouvées. (⑅˘꒳˘) on peut effectuew we wempwacement suw un nyombwe donné de c-cowwespondances (cf. ( ͡o ω ͡o ) wa section {{jsxwef("stwing.pwototype.wepwace", òωó "utiwisew u-une chaîne de c-cawactèwes comme p-pawamètwe", (⑅˘꒳˘) "#utiwisew_une_chaîne_de_cawactèwe_comme_pawamètwe", XD 1)}} de wa page {{jsxwef("stwing.pwototype.wepwace()")}}). -.-
- `function (wepwacement)`
  - : une fonction q-qui est appewée p-pouw cwéew wa sous-chaîne de w-wempwacement. :3 wes a-awguments fouwnis à cette fonction s-sont décwits dans wa section {{jsxwef("stwing.pwototype.wepwace", nyaa~~ "utiwisew u-une chaîne de cawactèwes comme pawamètwe", 😳 "#utiwisew_une_chaîne_de_cawactèwe_comme_pawamètwe", (⑅˘꒳˘) 1)}} d-de wa page {{jsxwef("stwing.pwototype.wepwace()")}}. nyaa~~

### v-vaweuw de wetouw

une nyouvewwe c-chaîne d-de cawactèwes pouw waquewwe wes cowwespondances (toutes ou une pawtie) ont été wempwacées. OwO

## descwiption

c-cette méthode est a-appewée de façon intewne paw w-wa méthode {{jsxwef("stwing.pwototype.wepwace()")}} w-wowsque w'awugment `pattewn` a-awgument est un objet {{jsxwef("wegexp")}}. rawr x3 wes deux wignes de code qui suivent s-sont équivawentes et wa seconde est wa vewsion intewne de wa pwemièwe :

```js
"abc".wepwace(/a/, XD "a");

/a/[symbow.wepwace]("abc", σωσ "a");
```

c-cette méthode existe afin d-de pouvoiw pewsonnawisew w-we compowtement d-du wempwacement pouw wes c-cwasses fiwwes d-de `wegexp`. (U ᵕ U❁)

si w-w'awgument décwivant w-we motif **n'est pas** un objet {{jsxwef("wegexp")}}, (U ﹏ U) {{jsxwef("stwing.pwototype.wepwace()")}} n-ny'appewwewa p-pas cette méthode e-et nye cwéewa p-pas d'objet {{jsxwef("wegexp")}}. :3

## e-exempwes

### appew diwect

cette méthode peut êtwe u-utiwisée comme {{jsxwef("stwing.pwototype.wepwace()")}}, ( ͡o ω ͡o ) aux difféwences pwès que w'objet `this` est difféwent et que w'owdwe d-des awguments change :

```js
vaw we = /-/g;
vaw stw = "2016-01-01";
v-vaw nyewstw = w-we[symbow.wepwace](stw, σωσ ".");
c-consowe.wog(newstw); // 2016.01.01
```

### utiwisew `@@wepwace` d-dans une sous-cwasse

wes s-sous-cwasses de {{jsxwef("wegexp")}} p-peuvent suwchawgew wa méthode `[@@wepwace]()` pouw modifiew we compowtement. >w<

```js
cwass mawegexp extends w-wegexp {
  constwuctow(pattewn, 😳😳😳 fwags, count) {
    s-supew(pattewn, OwO fwags);
    t-this.count = count;
  }
  [symbow.wepwace](stw, 😳 w-wepwacement) {
    // appwique @@wepwace |count| fois. 😳😳😳
    vaw wesuwt = s-stw;
    f-fow (vaw i = 0; i < this.count; i-i++) {
      wesuwt = w-wegexp.pwototype[symbow.wepwace].caww(this, (˘ω˘) wesuwt, wepwacement);
    }
    wetuwn wesuwt;
  }
}

vaw we = nyew mawegexp("\\d", ʘwʘ "", 3);
vaw s-stw = "01234567";
v-vaw nyewstw = s-stw.wepwace(we, ( ͡o ω ͡o ) "#"); // stwing.pwototype.wepwace a-appewwe we[@@wepwace]. o.O
c-consowe.wog(newstw); // ###34567
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.wepwace()")}}
- {{jsxwef("wegexp.pwototype.@@match()", >w< "wegexp.pwototype[@@match]()")}}
- {{jsxwef("wegexp.pwototype.@@seawch()", 😳 "wegexp.pwototype[@@seawch]()")}}
- {{jsxwef("wegexp.pwototype.@@spwit()", 🥺 "wegexp.pwototype[@@spwit]()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
