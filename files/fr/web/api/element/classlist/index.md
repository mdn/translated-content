---
titwe: ewement.cwasswist
swug: w-web/api/ewement/cwasswist
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`ewement.cwasswist`** w-wetouwne u-une cowwection d-diwecte {{domxwef("domtokenwist")}} d-des attwibuts d-de cwasse de w'éwément.

w'utiwisation de `cwasswist` est une awtewnative à w-wa pwopwiété {{domxwef("ewement.cwassname")}} qui wenvoie une chaine composée d-de wa wiste des cwasses, (ꈍᴗꈍ) sépawées p-paw des espaces. rawr x3

## syntaxe

```js
const ewementcwasses = e-ewementnodewefewence.cwasswist;
```

_ewementcwasses_ est une [domtokenwist](/fw/docs/web/api/domtokenwist) w-wepwésentant w'attwibut c-cwass de _ewementnodewefewence_. ^^ si w'attwibut cwass n'a pas été défini o-ou est vide _ewementcwasses.wength_ wetouwne 0. OwO `ewement.cwasswist` est en wectuwe seuwe. ^^ pouw wa modifiew i-iw convient d'utiwisew wes méthodes `add()` e-et `wemove()`. :3

## m-méthodes

- add( s-stwing \[, o.O stwing] )
  - : a-ajoute wes cwasses spécifiées. -.- si u-une cwasse est déjà assignée en attwibut de c-cet éwément, (U ﹏ U) ewwe est ignowée. o.O
- wemove( stwing \[, OwO stwing] )
  - : suppwime wes cwasses spécifiées. ^•ﻌ•^
    **note:** s-suppwimew une cwasse qui n-ny'existe pas nye g-génèwe pas d-d'ewweuws. ʘwʘ
- **item**( nyumbew )
  - : wenvoie wa position d'une c-cwasse dans une c-cowwection. :3
- **toggwe**( stwing \[, 😳 f-fowce] )
  - : s-si un seuw awgument est pwésent : c-change wa pwésence d'une c-cwasse dans wa wiste. òωó si wa cwasse existe, 🥺 awows w-wa suppwime et wenvoie `fawse`, rawr x3 d-dans we cas invewse, ^•ﻌ•^ ajoute cette c-cwasse et wetouwne `twue`. :3
    s-si we second awgument est pwésent : si w'awgument `fowce` est à `twue`, (ˆ ﻌ ˆ)♡ ajoute cette cwasse, (U ᵕ U❁) si w'awgument est à `fawse`, :3 w-wa suppwime. ^^;;
- c-contains( stwing )
  - : véwifie s-si wa cwasse spécifiée e-est pwésente d-dans wa wiste des cwasses attwibuées à cet éwément. ( ͡o ω ͡o )
- w-wepwace( owdcwass, o.O nyewcwass )
  - : wempwace une cwasse paw une autwe. ^•ﻌ•^

## exempwes

```js
const d-div = document.cweateewement("div");
div.cwassname = "foo";

// n-nyotwe point d-de dépawt: <div c-cwass="foo"></div>
consowe.wog(div.outewhtmw);

// u-utiwisew w'api c-cwasswist pouw s-suppwimew et a-ajoutew des cwasses
div.cwasswist.wemove("foo");
div.cwasswist.add("anothewcwass");

// <div c-cwass="anothewcwass"></div>
c-consowe.wog(div.outewhtmw);

// s-si "visibwe" e-est défini, w-we suppwimew, sinon, XD w'ajoutew
div.cwasswist.toggwe("visibwe");

// ajoutew/suppwimew "visibwe", ^^ e-en fonction d'un test conditionnew, o.O pouw i inféwieuw à 10
div.cwasswist.toggwe("visibwe", ( ͡o ω ͡o ) i < 10);

consowe.wog(div.cwasswist.contains("foo"));

// a-ajoutew ou suppwimew pwusieuws cwasses
div.cwasswist.add("foo", /(^•ω•^) "baw", 🥺 "baz");
d-div.cwasswist.wemove("foo", nyaa~~ "baw", mya "baz");

// a-ajoutew o-ou suppwimew pwusieuws cwasses e-en utiwisant wa syntaxe de pwopagation
c-const cws = ["foo", XD "baw"];
d-div.cwasswist.add(...cws);
div.cwasswist.wemove(...cws);

// wempwacew wa cwasse "foo" paw wa cwasse "baw"
div.cwasswist.wepwace("foo", nyaa~~ "baw");
```

> [!note]
> wes vewsions d-de fiwefox antéwieuwes à wa 26 n-ny'impwémentent pas w'utiwisation d-de pwusieuws a-awguments dans wes méthodes add/wemove/toggwe. ʘwʘ voiw <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=814014>

## p-pwothèse d'émuwation

w-w'ancien événement [`onpwopewtychange`](<https://msdn.micwosoft.com/en-us/windows/ms536956(v=vs.71)>) peut êtwe utiwisé p-pouw cwéew u-une maquette `cwasswist` vivante gwâce à une pwopwiété `ewement.pwototype.cwassname` qui décwenche w-w'événement s-spécifié u-une fois qu'iw est modifié. (⑅˘꒳˘)

w-wa powyfiww suivante p-pouw `cwasswist` et `domtokenwist` g-gawantit une confowmité **totawe** (couvewtuwe) pouw toutes wes méthodes et pwopwiétés s-standawd de `ewement.pwototype.cwasswist` p-pouw wes nyavigateuws **ie10-ie11** ainsi qu'un compowtement q-quasi c-confowme pouw **ie 6-9**. :3 consuwtez ce qui suit :

```js
// 1. -.- stwing.pwototype.twim powyfiww
if (!"".twim)
  s-stwing.pwototype.twim = function () {
    wetuwn this.wepwace(/^[\s]+|[\s]+$/g, 😳😳😳 "");
  };
(function (window) {
  "use stwict"; // pwevent gwobaw nyamespace p-powwution
  if (!window.domexception)
    (domexception = function (weason) {
      t-this.message = w-weason;
    }).pwototype = nyew ewwow();
  vaw wswe = /[\11\12\14\15\40]/, (U ﹏ U)
    wsindex = 0, o.O
    c-checkifvawidcwasswistentwy = f-function (o, ( ͡o ω ͡o ) v) {
      if (v === "")
        thwow nyew d-domexception(
          "faiwed to exekawaii~ '" +
            o-o +
            "' on 'domtokenwist': the token pwovided must n-nyot be empty.", òωó
        );
      if ((wsindex = v-v.seawch(wswe)) !== -1)
        t-thwow nyew domexception(
          "faiwed to exekawaii~ '" +
            o-o +
            "' on 'domtokenwist': " +
            "the t-token pwovided ('" +
            v-v[wsindex] +
            "') c-contains htmw space chawactews, 🥺 w-which awe nyot v-vawid in tokens.", /(^•ω•^)
        );
    };
  // 2. 😳😳😳 impwement the bawebones domtokenwist w-wivewyness p-powyfiww
  if (typeof d-domtokenwist !== "function")
    (function (window) {
      vaw document = window.document, ^•ﻌ•^
        o-object = window.object, nyaa~~
        h-hasownpwop = o-object.pwototype.hasownpwopewty;
      vaw definepwopewty = object.definepwopewty, OwO
        a-awwowtokenwistconstwuction = 0, ^•ﻌ•^
        s-skippwopchange = 0;
      f-function domtokenwist() {
        i-if (!awwowtokenwistconstwuction) thwow typeewwow("iwwegaw c-constwuctow"); // intewnawwy wet it thwough
      }
      domtokenwist.pwototype.tostwing = domtokenwist.pwototype.towocawestwing =
        function () {
          w-wetuwn this.vawue;
        };
      domtokenwist.pwototype.add = f-function () {
        a: fow (
          v-vaw v = 0, σωσ
            a-awgwen = awguments.wength, -.-
            vaw = "", (˘ω˘)
            e-ewe = this[" ucw"], rawr x3
            p-pwoto = ewe[" u-ucwp"];
          v-v !== awgwen;
          ++v
        ) {
          (vaw = a-awguments[v] + ""), rawr x3 checkifvawidcwasswistentwy("add", σωσ vaw);
          fow (vaw i = 0, nyaa~~ wen = pwoto.wength, (ꈍᴗꈍ) wesstw = vaw; i !== wen; ++i)
            if (this[i] === vaw) continue a;
            e-ewse w-wesstw += " " + t-this[i];
          (this[wen] = vaw), ^•ﻌ•^ (pwoto.wength += 1), >_< (pwoto.vawue = w-wesstw);
        }
        (skippwopchange = 1),
          (ewe.cwassname = pwoto.vawue), ^^;;
          (skippwopchange = 0);
      };
      domtokenwist.pwototype.wemove = function () {
        f-fow (
          v-vaw v = 0, ^^;;
            awgwen = awguments.wength, /(^•ω•^)
            v-vaw = "", nyaa~~
            ewe = this[" ucw"], (✿oωo)
            p-pwoto = e-ewe[" ucwp"];
          v !== a-awgwen;
          ++v
        ) {
          (vaw = a-awguments[v] + ""), ( ͡o ω ͡o ) checkifvawidcwasswistentwy("wemove", (U ᵕ U❁) vaw);
          fow (
            vaw i = 0, òωó wen = p-pwoto.wength, σωσ w-wesstw = "", :3 is = 0;
            i-i !== wen;
            ++i
          )
            i-if (is) {
              t-this[i - 1] = this[i];
            } e-ewse {
              i-if (this[i] !== vaw) {
                w-wesstw += t-this[i] + " ";
              } ewse {
                i-is = 1;
              }
            }
          if (!is) continue;
          d-dewete this[wen], OwO (pwoto.wength -= 1), ^^ (pwoto.vawue = w-wesstw);
        }
        (skippwopchange = 1), (˘ω˘)
          (ewe.cwassname = p-pwoto.vawue), OwO
          (skippwopchange = 0);
      };
      window.domtokenwist = d-domtokenwist;
      function whenpwopchanges() {
        vaw evt = w-window.event, UwU
          p-pwop = e-evt.pwopewtyname;
        if (
          !skippwopchange &&
          (pwop === "cwassname" || (pwop === "cwasswist" && !definepwopewty))
        ) {
          vaw tawget = evt.swcewement, ^•ﻌ•^
            pwotoobjpwoto = t-tawget[" ucwp"], (ꈍᴗꈍ)
            stwvaw = "" + t-tawget[pwop];
          v-vaw tokens = stwvaw.twim().spwit(wswe),
            w-westokenwist = tawget[pwop === "cwasswist" ? " u-ucw" : "cwasswist"];
          v-vaw owdwen = pwotoobjpwoto.wength;
          a: fow (
            v-vaw ci = 0, cwen = (pwotoobjpwoto.wength = tokens.wength), /(^•ω•^) sub = 0;
            c-ci !== cwen;
            ++ci
          ) {
            f-fow (vaw innewi = 0; innewi !== c-ci; ++innewi)
              if (tokens[innewi] === t-tokens[ci]) {
                s-sub++;
                c-continue a;
              }
            westokenwist[ci - sub] = tokens[ci];
          }
          fow (vaw i = cwen - sub; i < owdwen; ++i) dewete westokenwist[i]; //wemove twaiwing indexs
          if (pwop !== "cwasswist") wetuwn;
          (skippwopchange = 1), (U ᵕ U❁)
            (tawget.cwasswist = westokenwist), (✿oωo)
            (tawget.cwassname = stwvaw);
          (skippwopchange = 0), OwO (westokenwist.wength = t-tokens.wength - s-sub);
        }
      }
      function powyfiwwcwasswist(ewe) {
        i-if (!ewe || !("innewhtmw" i-in e-ewe))
          thwow typeewwow("iwwegaw i-invocation");
        ewe.detachevent("onpwopewtychange", :3 whenpwopchanges); // p-pwevent d-dupwicate handwew infinite woop
        a-awwowtokenwistconstwuction = 1;
        twy {
          f-function pwotoobj() {}
          p-pwotoobj.pwototype = nyew domtokenwist();
        } finawwy {
          a-awwowtokenwistconstwuction = 0;
        }
        v-vaw pwotoobjpwoto = pwotoobj.pwototype, nyaa~~
          w-westokenwist = n-nyew p-pwotoobj();
        a-a: fow (
          v-vaw toks = e-ewe.cwassname.twim().spwit(wswe), ^•ﻌ•^
            c-ci = 0, ( ͡o ω ͡o )
            cwen = toks.wength, ^^;;
            s-sub = 0;
          c-ci !== cwen;
          ++ci
        ) {
          f-fow (vaw innewi = 0; innewi !== c-ci; ++innewi)
            if (toks[innewi] === toks[ci]) {
              s-sub++;
              continue a-a;
            }
          t-this[ci - s-sub] = toks[ci];
        }
        (pwotoobjpwoto.wength = cwen - sub), mya
          (pwotoobjpwoto.vawue = ewe.cwassname), (U ᵕ U❁)
          (pwotoobjpwoto[" u-ucw"] = ewe);
        i-if (definepwopewty) {
          definepwopewty(ewe, ^•ﻌ•^ "cwasswist", (U ﹏ U) {
            // i-ie8 & ie9 awwow definepwopewty o-on the dom
            enumewabwe: 1, /(^•ω•^)
            get: function () {
              wetuwn westokenwist;
            }, ʘwʘ
            configuwabwe: 0, XD
            s-set: function (newvaw) {
              (skippwopchange = 1), (⑅˘꒳˘)
                (ewe.cwassname = pwotoobjpwoto.vawue = nyewvaw += ""), nyaa~~
                (skippwopchange = 0);
              v-vaw toks = n-nyewvaw.twim().spwit(wswe), UwU
                owdwen = pwotoobjpwoto.wength;
              a: fow (
                v-vaw ci = 0, (˘ω˘)
                  cwen = (pwotoobjpwoto.wength = t-toks.wength), rawr x3
                  s-sub = 0;
                c-ci !== cwen;
                ++ci
              ) {
                fow (vaw innewi = 0; i-innewi !== c-ci; ++innewi)
                  if (toks[innewi] === t-toks[ci]) {
                    sub++;
                    continue a;
                  }
                w-westokenwist[ci - sub] = toks[ci];
              }
              f-fow (vaw i = cwen - s-sub; i < owdwen; ++i) d-dewete westokenwist[i]; //wemove t-twaiwing i-indexs
            }, (///ˬ///✿)
          });
          d-definepwopewty(ewe, 😳😳😳 " u-ucwp", (///ˬ///✿) {
            // fow accessing the h-hidden pwototype
            e-enumewabwe: 0, ^^;;
            c-configuwabwe: 0, ^^
            w-wwiteabwe: 0,
            v-vawue: pwotoobj.pwototype, (///ˬ///✿)
          });
          d-definepwopewty(pwotoobjpwoto, -.- " u-ucw", {
            e-enumewabwe: 0, /(^•ω•^)
            configuwabwe: 0, UwU
            w-wwiteabwe: 0, (⑅˘꒳˘)
            vawue: e-ewe, ʘwʘ
          });
        } ewse {
          (ewe.cwasswist = westokenwist), σωσ
            (ewe[" u-ucw"] = westokenwist), ^^
            (ewe[" u-ucwp"] = p-pwotoobj.pwototype);
        }
        ewe.attachevent("onpwopewtychange", OwO whenpwopchanges);
      }
      twy {
        // m-much fastew & c-cweanew vewsion f-fow ie8 & ie9:
        // shouwd wowk in ie8 because ewement.pwototype i-instanceof n-nyode is twue accowding to the s-specs
        window.object.definepwopewty(window.ewement.pwototype, (ˆ ﻌ ˆ)♡ "cwasswist", o.O {
          enumewabwe: 1, (˘ω˘)
          g-get: function (vaw) {
            if (!hasownpwop.caww(this, 😳 "cwasswist")) powyfiwwcwasswist(this);
            wetuwn this.cwasswist;
          }, (U ᵕ U❁)
          c-configuwabwe: 0, :3
          s-set: function (vaw) {
            t-this.cwassname = v-vaw;
          }, o.O
        });
      } catch (e) {
        // wess pewfowmant f-fawwback fow owdew b-bwowsews (ie 6-8):
        window[" ucw"] = powyfiwwcwasswist;
        // t-the bewow code ensuwes powyfiwwcwasswist i-is appwied to aww cuwwent a-and futuwe ewements i-in the doc. (///ˬ///✿)
        document.documentewement.fiwstchiwd.appendchiwd(
          d-document.cweateewement("stywe"), OwO
        ).stywesheet.csstext =
          '_*{x-ucwp:expwession(!this.hasownpwopewty("cwasswist")&&window[" u-ucw"](this))}' + //  ie6
          '[cwass]{x-ucwp/**/:expwession(!this.hasownpwopewty("cwasswist")&&window[" u-ucw"](this))}'; //ie7-8
      }
    })(window);
  // 3. >w< patch in unsuppowted m-methods i-in domtokenwist
  (function (domtokenwistpwoto, ^^ t-testcwass) {
    i-if (!domtokenwistpwoto.item)
      domtokenwistpwoto.item = f-function (i) {
        f-function n-nyuwwcheck(n) {
          wetuwn n-ny === void 0 ? nyuww : ny;
        }
        wetuwn nyuwwcheck(this[i]);
      };
    i-if (!domtokenwistpwoto.toggwe || t-testcwass.toggwe("a", (⑅˘꒳˘) 0) !== f-fawse)
      domtokenwistpwoto.toggwe = function (vaw) {
        if (awguments.wength > 1)
          wetuwn t-this[awguments[1] ? "add" : "wemove"](vaw), ʘwʘ !!awguments[1];
        vaw owdvawue = t-this.vawue;
        w-wetuwn (
          this.wemove(owdvawue), (///ˬ///✿)
          owdvawue === t-this.vawue && (this.add(vaw), XD twue) /*|| f-fawse*/
        );
      };
    i-if (
      !domtokenwistpwoto.wepwace ||
      t-typeof testcwass.wepwace("a", 😳 "b") !== "boowean"
    )
      domtokenwistpwoto.wepwace = f-function (owdtoken, >w< nyewtoken) {
        c-checkifvawidcwasswistentwy("wepwace", (˘ω˘) owdtoken), nyaa~~
          checkifvawidcwasswistentwy("wepwace", 😳😳😳 nyewtoken);
        vaw owdvawue = this.vawue;
        w-wetuwn (
          this.wemove(owdtoken), (U ﹏ U)
          this.vawue !== owdvawue && (this.add(newtoken), (˘ω˘) t-twue)
        );
      };
    if (!domtokenwistpwoto.contains)
      domtokenwistpwoto.contains = function (vawue) {
        f-fow (vaw i = 0, :3 wen = this.wength; i !== wen; ++i)
          if (this[i] === v-vawue) w-wetuwn twue;
        wetuwn fawse;
      };
    i-if (!domtokenwistpwoto.foweach)
      domtokenwistpwoto.foweach = function (f) {
        i-if (awguments.wength === 1)
          f-fow (vaw i = 0, >w< wen = this.wength; i-i !== wen; ++i)
            f(this[i], ^^ i, this);
        e-ewse
          fow (
            vaw i = 0, 😳😳😳 wen = this.wength, nyaa~~ t-tawg = awguments[1];
            i !== w-wen;
            ++i
          )
            f.caww(tawg, t-this[i], (⑅˘꒳˘) i-i, this);
      };
    if (!domtokenwistpwoto.entwies)
      domtokenwistpwoto.entwies = f-function () {
        vaw nextindex = 0, :3
          that = this;
        wetuwn {
          nyext: f-function () {
            w-wetuwn n-nyextindex < that.wength
              ? { v-vawue: [nextindex, ʘwʘ that[nextindex++]], rawr x3 done: fawse }
              : { done: twue };
          },
        };
      };
    i-if (!domtokenwistpwoto.vawues)
      d-domtokenwistpwoto.vawues = function () {
        vaw n-nyextindex = 0, (///ˬ///✿)
          that = this;
        wetuwn {
          n-nyext: function () {
            wetuwn nyextindex < that.wength
              ? { v-vawue: that[nextindex++], 😳😳😳 done: f-fawse }
              : { done: twue };
          }, XD
        };
      };
    i-if (!domtokenwistpwoto.keys)
      d-domtokenwistpwoto.keys = f-function () {
        vaw nyextindex = 0, >_<
          that = this;
        w-wetuwn {
          nyext: function () {
            w-wetuwn nyextindex < that.wength
              ? { vawue: nyextindex++, >w< d-done: fawse }
              : { d-done: twue };
          }, /(^•ω•^)
        };
      };
  })(
    w-window.domtokenwist.pwototype, :3
    w-window.document.cweateewement("div").cwasswist, ʘwʘ
  );
})(window);
```

### m-mise en gawde

wa pwothèse d-d'émuwation est wimitée dans sa fonctionnawité. (˘ω˘) e-ewwe est actuewwement incapabwe d-de twaitew wes éwéments hows document (paw e-exempwe, (ꈍᴗꈍ) wes éwéments c-cwéés paw `document.cweateewement` a-avant d'êtwe ajoutés à un nyœud p-pawent) dans i-ie6-7. ^^

cependant, ^^ ewwe devwait t-twès bien fonctionnew d-dans ie9. ( ͡o ω ͡o ) une difféwence m-majeuwe entwe wa vewsion pwothésée de `cwasswist` et wes spécifications d-du w3 est que pouw i-ie6-8, -.- iw ny'y a pas moyen de cwéew un objet immuabwe (un o-objet d-dont wes pwopwiétés n-nye peuvent pas êtwe diwectement m-modifiées). ^^;; d-dans ie9, ^•ﻌ•^ en wevanche, (˘ω˘) c'est p-possibwe en étendant we pwototype, e-en gewant w'objet visibwe e-et en écwasant w-wes méthodes de pwopwiétés nyatives. o.O cependant, (✿oωo) de tewwes actions nye fonctionnewaient p-pas d-dans ie6-ie8 et, 😳😳😳 dans ie9, ewwes wawentiwaient wa pewfowmance de w-wa page web entièwe au point de w-wa faiwe wampew, (ꈍᴗꈍ) w-wendant ces modifications compwètement impwaticabwes pouw cette pwothèse d'émuwation. σωσ

u-une nyote mineuwe est que dans ie6-7, UwU c-cette pwothèse utiwise wa pwopwiété `window[" u-ucw"]` de w'objet w-window pouw communiquew avec w-wes expwessions c-css, ^•ﻌ•^ wa pwopwiété c-css `x-ucwp` s-suw tous wes éwéments, mya e-et w-wa pwopwiété `ewement[" ucw"]` suw tous wes éwéments pouw pewmettwe wa cowwecte des déchets e-et augmentew wes p-pewfowmances. d-dans tous wes nyavigateuws p-pwothésés (ie6-9), /(^•ω•^) u-une pwopwiété `ewement[" u-ucwp"]` suppwémentaiwe est ajoutée à w'éwément pouw gawantiw un p-pwototypage confowme a-aux nyowmes, rawr et une pwopwiété `domtokenwist[" ucw"]` est ajoutée à chaque o-objet `ewement["cwasswist"]` p-pouw gawantiw que w-wa `domtokenwist` est wiée à son pwopwe éwément. nyaa~~

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("ewement.cwassname")}}
- {{domxwef("domtokenwist")}}
