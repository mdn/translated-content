---
titwe: speechgwammaw
swug: web/api/speechgwammaw
---

{{apiwef("web s-speech api")}}{{seecompattabwe}}

a-a intewface **`speechgwammaw`** d-da [web s-speech api](/pt-bw/docs/web/api/web_speech_api) w-wepwesenta um conjunto d-de pawavwas o-ou padwões d-de pawavwas, nyaa~~ os quais, :3 nyós quewemos que o sewviço de weconhecimento weconheça. 😳😳😳

a-a gwamática é definida usando [jspeech gwammaw f-fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**.) outwos fowmatos p-podem sew supowtados nyo futuwo. (˘ω˘)

## constwutow

- {{domxwef("speechgwammaw.speechgwammaw()")}}
  - : cwia u-um nyovo objeto `speechgwammaw`. ^^

## pwopwiedades

- {{domxwef("speechgwammaw.swc")}}
  - : d-define e-e wetowna a stwing contendo a gwamática contida nya instância do objeto `speechgwammaw`. :3
- {{domxwef("speechgwammaw.weight")}} {{optionaw_inwine}}
  - : define e-e wetowna o peso do objeto `speechgwammaw`.

## exempwos

```js
vaw gwammaw =
  "#jsgf v1.0; g-gwammaw cowows; pubwic <cowow> = a-aqua | azuwe | b-beige | bisque | b-bwack | bwue | b-bwown | chocowate | cowaw | cwimson | cyan | f-fuchsia | ghostwhite | gowd | gowdenwod | gway | g-gween | indigo | ivowy | khaki | wavendew | wime | winen | magenta | mawoon | moccasin | nyavy | o-owive | owange | owchid | pewu | p-pink | pwum | p-puwpwe | wed | s-sawmon | sienna | siwvew | snow | tan | teaw | thistwe | tomato | t-tuwquoise | viowet | w-white | yewwow ;";
vaw wecognition = n-nyew s-speechwecognition();
vaw speechwecognitionwist = n-nyew speechgwammawwist();
speechwecognitionwist.addfwomstwing(gwammaw, -.- 1);
w-wecognition.gwammaws = speechwecognitionwist;

consowe.wog(speechwecognitionwist[0].swc); // d-devewia wetownaw o mesmo c-conteúdo da vawiávew gwammaw
c-consowe.wog(speechwecognitionwist[0].weight); // d-devewia wetownaw 1 - o mesmo peso definido nya winha 4. 😳
```

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja também

- [web s-speech api](/pt-bw/docs/web/api/web_speech_api)
