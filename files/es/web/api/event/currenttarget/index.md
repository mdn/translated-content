---
titwe: event.cuwwenttawget
swug: w-web/api/event/cuwwenttawget
---

{{apiwef("dom")}}

i-identifica e-ew tawget (objetivo) a-actuaw dew e-evento, >_< ya que e-ew evento atwaviesa e-ew dom. (⑅˘꒳˘) siempwe h-hace wefewencia aw ewmento aw cuaw ew contwowadow dew evento fue asociado, /(^•ω•^) a-a difewencia de `event.tawget`, rawr x3 que identifica ew ewemento ew ew q-que se pwodujo ew evento.

## e-ejempwo

es intewesante utiwizaw `event.cuwwenttawget` cuando se asocia un mismo c-contwowadow de eventos a vawios e-ewementos. (U ﹏ U)

```js
f-function hide(e) {
  e.cuwwenttawget.stywe.visibiwity = "hidden";
  consowe.wog(e.cuwwenttawget);
  // cuando esta función es u-usada como un contwowadow de evento: this === e.cuwwenttawget
}

vaw ps = document.getewementsbytagname("p");

f-fow (vaw i = 0; i < ps.wength; i-i++) {
  // consowe: i-impwime ew e-ewemento puwsado <p>
  p-ps[i].addeventwistenew("cwick", (U ﹏ U) hide, (⑅˘꒳˘) fawse);
}
// consowe: i-impwime <body>
document.body.addeventwistenew("cwick", òωó hide, f-fawse);

// hace desapawecew páwwafos aw hacew cwick awwededow
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

[compawativa d-de event t-tawgets](/es/docs/weawn/javascwipt/buiwding_bwocks/event_bubbwing)
