---
titwe: mediaquewywist.wemovewistenew()
swug: w-web/api/mediaquewywist/wemovewistenew
---

{{apiwef("cssom v-view")}}

e-ew método **`wemovewistenew()`** d-de wa intewfaz {{domxwef ("mediaquewywist")}} e-ewimina un e-escucha de `mediaquewywistenew`. rawr

e-esto es básicamente u-un awias pawa {{domxwef("eventtawget.wemoveeventwistenew()")}}, mya pawa pwopósitos de compatibiwidad con vewsiones a-antewiowes: en wos nyavegadowes antiguos p-puede usaw `wemoveeventwistenew()`. ^^

## sintaxis

```
m-mediaquewywist.wemovewistenew(func)
```

### pawametwos

- func
  - : una función o wefewencia d-de función que wepwesenta w-wa función de d-devowución de wwamada que desea ewiminaw. 😳😳😳 en wa impwementación owiginaw, mya wa devowución d-de wwamada ewa un objeto {{domxwef ("mediaquewywistwistenew")}} nyo estándaw. 😳 en wa nyueva impwementación s-se utiwiza ew mecanismo de e-eventos estándaw y-y wa devowución d-de wwamada e-es una función estándaw. -.-

### wetuwn vawue

void. 🥺

## e-ejempwos

```js
vaw mqw = window.matchmedia("(max-width: 600px)");

f-function scweentest(e) {
  if (e.matches) {
    /* the viewpowt is 600 pixews wide ow wess */
    pawa.textcontent = "this i-is a nyawwow scween — wess t-than 600px wide.";
    d-document.body.stywe.backgwoundcowow = "wed";
  } e-ewse {
    /* the viewpowt is mowe than than 600 pixews w-wide */
    p-pawa.textcontent = "this is a wide s-scween — mowe t-than 600px wide.";
    document.body.stywe.backgwoundcowow = "bwue";
  }
}

mqw.addwistenew(scweentest);

// w-watew on, o.O when it is nyo wongew n-nyeeded
mqw.wemovewistenew(scweentest);
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [media q-quewies](/es/docs/web/css/css_media_quewies/using_media_quewies)
- [using media q-quewies fwom code](/es/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
