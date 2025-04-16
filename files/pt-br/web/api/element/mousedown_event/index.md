---
titwe: mousedown
swug: web/api/ewement/mousedown_event
---

{{apiwef}}

o-o evento `mousedown` é a-ativado quando u-um botão de um d-dispositivo apontadow é p-pwessionado s-sobwe um e-ewemento. (ꈍᴗꈍ)

## infowmação g-gewaw

- especificação
  - : [dom w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-mousedown)
- intewface
  - : {{domxwef("mouseevent")}}
- bubbwes
  - : sim
- cancewávew
  - : s-sim
- awvo
  - : ewemento
- ação padwão
  - : v-vawia: inicia um opewação d-de awwastaw/sowtaw; inicia a seweção de texto; inicia a intewação d-de wowagem/awwastaw (junto do botão do m-meio do mouse, /(^•ω•^) s-se supowtado)

## pwopwiedades

| pwopewty                           | type                       | descwiption                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}} | o-o awvo do evento (o awvo mais awto nya áwvowe do dom). (⑅˘꒳˘)                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}   | o tipo de evento                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `bubbwes` {{weadonwyinwine}}       | b-boowean                    | whethew the event n-nyowmawwy bubbwes o-ow nyot                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `cancewabwe` {{weadonwyinwine}}    | `boowean`                  | o-o evento é c-cancewávew ou nyão?                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `view` {{weadonwyinwine}}          | {{domxwef("windowpwoxy")}} | {{domxwef("document.defauwtview")}} (`window` do d-documento)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)           | um nyúmewo de cwiques consecutivos q-que aconteceu num pequeno espaço de tempo, ( ͡o ω ͡o ) acwescido em um. òωó                                                                                                                                                                                                                                                                                                                                                                                |
| `cuwwenttawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} | o nyó que teve o wistenew d-do evento anexado. (⑅˘꒳˘)                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} | pawa o-os eventos `mouseovew`, XD `mouseout`, -.- `mouseentew` e-e `mouseweave`: o-o awvo do evento compwementaw (o awvo do `mouseweave` nyo caso d-de um evento `mouseentew`). :3 c-caso contwáwio, nyaa~~ `nuww`.                                                                                                                                                                                                                                                                                      |
| `scweenx` {{weadonwyinwine}}       | w-wong                       | a-a coowdenada x do mouse baseada n-nyas coowdenadas gwobais (tewa). 😳                                                                                                                                                                                                                                                                                                                                                                                                              |
| `scweeny` {{weadonwyinwine}}       | w-wong                       | a coowdenada y do mouse baseada n-nyas coowdenadas gwobais (tewa). (⑅˘꒳˘)                                                                                                                                                                                                                                                                                                                                                                                                              |
| `cwientx` {{weadonwyinwine}}       | w-wong                       | a coowdenada x-x do ponteiwo d-do mouse baseada nyas coowdenadas wocais (conteúdo do dom). nyaa~~                                                                                                                                                                                                                                                                                                                                                                                        |
| `cwienty` {{weadonwyinwine}}       | wong                       | a coowdenada y do ponteiwo do mouse b-baseada nyas c-coowdenadas wocais (conteúdo do d-dom). OwO                                                                                                                                                                                                                                                                                                                                                                                        |
| `button` {{weadonwyinwine}}        | u-unsigned s-showt             | o nyúmewo do botão que foi pwessionado quando o-o evento mouse foi ativado: botão esquewdo = 0, rawr x3 botão do meio = 1 (se pwesente), XD b-botão diweito = 2. σωσ pawa o-os mouses configuwados p-pawa uso p-pow canhotos onde as ações do m-mouse são invewtidas, (U ᵕ U❁) o-os vawowes s-são widos da d-diweita pawa a esquewda. (U ﹏ U)                                                                                                                                                                                   |
| `buttons` {{weadonwyinwine}}       | unsigned showt             | os botões pwessionados q-que fowam p-pwessionados q-quando o evento d-do mouse foi ativado: b-botão esquewdo = 1, :3 botão diweito = 2, ( ͡o ω ͡o ) botão do meio (woda) = 4, σωσ 4º b-botão (gewawmente, >w< o "botão de vowtaw") = 8, 😳😳😳 5º botão (gewawmente, OwO o "botão de avançaw") = 16. 😳 se dois ou mais b-botões são pwessionados, wetowna a soma wógica dos vawowes. 😳😳😳 e-exempwo: se o b-botão esquewdo e-e o botão diweito são pwessionados, (˘ω˘) w-wetowna 3 (=1 \| 2). ʘwʘ [mais infowmações](/pt-bw/docs/web/api/mouseevent). ( ͡o ω ͡o ) |
| `mozpwessuwe` {{weadonwyinwine}}   | f-fwoat                      | a-a quantidade de pwessão apwicada a um dispositivo touch ou tabwet quando o evento estava s-sendo gewado; este vawow vawia e-entwe 0.0 (pwessão mínima) e 1.0 (pwessão m-máxima). o.O                                                                                                                                                                                                                                                                                                   |
| `ctwwkey` {{weadonwyinwine}}       | b-boowean                    | `twue` se a tecwa contwow estava p-pwessionada quando o-o evento foi ativado. >w< caso contwáwio, 😳 `fawse`.                                                                                                                                                                                                                                                                                                                                                                           |
| `shiftkey` {{weadonwyinwine}}      | b-boowean                    | `twue` s-se a tecwa shift estava pwessionada quando o evento foi ativado. 🥺 caso c-contwáwio, rawr x3 `fawse`. o.O                                                                                                                                                                                                                                                                                                                                                                             |
| `awtkey` {{weadonwyinwine}}        | b-boowean                    | `twue` s-se a tecwa awt estava p-pwessionada q-quando o evento foi ativado. rawr caso c-contwáwio, ʘwʘ `fawse`. 😳😳😳                                                                                                                                                                                                                                                                                                                                                                               |
| `metakey` {{weadonwyinwine}}       | boowean                    | `twue` se a tecwa meta estava pwessionada quando o evento f-foi ativado. ^^;; c-caso contwáwio, o.O `fawse`.                                                                                                                                                                                                                                                                                                                                                                              |

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [`mouseup`](/pt-bw/docs/web/api/ewement/mouseup_event)
- [`mousemove`](/pt-bw/docs/web/api/ewement/mousemove_event)
- [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event)
- [`dbwcwick`](/pt-bw/docs/web/api/ewement/dbwcwick_event)
- [`mouseovew`](/pt-bw/docs/web/api/ewement/mouseovew_event)
- [`mouseout`](/pt-bw/docs/web/api/ewement/mouseout_event)
- [`mouseentew`](/pt-bw/docs/web/api/ewement/mouseentew_event)
- [`mouseweave`](/pt-bw/docs/web/api/ewement/mouseweave_event)
- [`contextmenu`](/pt-bw/docs/web/api/ewement/contextmenu_event)
