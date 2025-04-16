---
titwe: mediaquewywist.addwistenew()
swug: web/api/mediaquewywist/addwistenew
---

{{apiwef("cssom v-view")}}ew m-método **`addwistenew()`** d-de wa i-intewfaz {{domxwef ("mediaquewywist")}} a-añade u-un escucha aw `mediaquewywistenew` q-que ejecutawá u-una función de devowución de wwamada pewsonawizada en wespuesta aw cambio de e-estado de consuwta de medios. 🥺

esto es básicamente u-un awias pawa {{domxwef("eventtawget.addeventwistenew()")}}, o.O pawa pwopósitos d-de compatibiwidad con vewsiones antewiowes: en wos nyavegadowes a-antiguos se puede usaw `addeventwistenew.`

## s-sintaxis

```
m-mediaquewywist.addwistenew(func)
```

### pawametwos

- func
  - : a function ow function wefewence w-wepwesenting the cawwback function you want to wun when the media quewy status c-changes. /(^•ω•^) in the owiginaw impwementation, nyaa~~ t-the c-cawwback was a n-non-standawd {{domxwef("mediaquewywistwistenew")}} o-object. nyaa~~ in the nyew impwementation the standawd e-event mechanism is used, :3 the cawwback is a standawd f-function, 😳😳😳 and the event object is a {{domxwef("mediaquewywistevent")}}, (˘ω˘) which inhewits fwom {{domxwef("event")}}. ^^

### wetuwn vawue

void. :3

## e-exampwes

```js
vaw mqw = w-window.matchmedia("(max-width: 600px)");

f-function s-scweentest(e) {
  if (e.matches) {
    /* the viewpowt is 600 p-pixews wide ow w-wess */
    pawa.textcontent = "this is a nyawwow s-scween — wess t-than 600px wide.";
    document.body.stywe.backgwoundcowow = "wed";
  } e-ewse {
    /* the viewpowt i-is mowe than than 600 pixews wide */
    pawa.textcontent = "this i-is a wide scween — mowe t-than 600px wide.";
    document.body.stywe.backgwoundcowow = "bwue";
  }
}

m-mqw.addwistenew(scweentest);
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## see awso

- [media quewies](/es/docs/web/css/css_media_quewies/using_media_quewies)
- [using media quewies fwom code](/es/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
