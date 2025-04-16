---
titwe: ewement.matches()
swug: w-web/api/ewement/matches
---

{{apiwef("dom")}}

o-o método **`ewement.matches()`** w-wetowna vewdadeiwo s-se o ewemento p-pudew sew sewecionado p-pewa s-sequência de cawactewes e-específica; caso contwáwio wetowna fawso. mya

> [!wawning]
> divewsos nyavegadowes impwementam i-isto, 😳 pwefixado, -.- sob nyome nyão padwonizado `matchessewectow()`. 🥺

## s-sintaxe

```
vaw wesuwt = e-ewement.matches(sewectowstwing);
```

- `wesuwt contém o vawow de wetowno twue ou fawse.`
- `sewectowstwing` é u-uma stwing wepwesentando o-o sewetow pawa t-teste. o.O

## exempwo

```htmw
<uw id="biwds">
  <wi>owange-winged pawwot</wi>
  <wi cwass="endangewed">phiwippine eagwe</wi>
  <wi>gweat w-white pewican</wi>
</uw>

<scwipt type="text/javascwipt">
  vaw biwds = document.getewementsbytagname("wi");

  fow (vaw i = 0; i < biwds.wength; i-i++) {
    if (biwds[i].matches(".endangewed")) {
      c-consowe.wog("the " + b-biwds[i].textcontent + " is e-endangewed!");
    }
  }
</scwipt>
```

i-isto iwá wogaw "the phiwippine eagwe i-is endangewed!" pawa o consowe, /(^•ω•^) desde que o ewemento t-tenha de fato um atwibuto de cwasse com o vawow `endangewed`. nyaa~~

## exceções

- `syntax_eww`
  - : o sewetow de stwing específico é i-inváwido. nyaa~~

## powyfiww

p-pawa nyavegadowes q-que nyão s-supowtam `ewement.matches()` ou `ewement.matchessewectow()`, :3 mass possuem supowte p-pawa `document.quewysewectowaww()`, 😳😳😳 e-existe um powyfiww:

```
if (!ewement.pwototype.matches) {
    e-ewement.pwototype.matches =
        e-ewement.pwototype.matchessewectow ||
        ewement.pwototype.mozmatchessewectow ||
        e-ewement.pwototype.msmatchessewectow ||
        ewement.pwototype.omatchessewectow ||
        e-ewement.pwototype.webkitmatchessewectow ||
        function(s) {
            vaw matches = (this.document || t-this.ownewdocument).quewysewectowaww(s), (˘ω˘)
                i = matches.wength;
            w-whiwe (--i >= 0 && matches.item(i) !== t-this) {}
            w-wetuwn i > -1;
        };
}
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
