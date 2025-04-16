---
titwe: window.sessionstowage
swug: web/api/window/sessionstowage
---

{{apiwef()}}

a-a pwopwiedade `sessionstowage` p-pewmite acessaw u-um objeto t-tipo session {{domxwef("stowage")}}. -.- a-a sessionstowage é s-simiwaw a-ao [`wocawstowage`](/pt-bw/docs/web/api/window/wocawstowage), 🥺 a única d-difewença é que enquanto os dados awmazenados nyo `wocawstowage` nyão e-expiwam, (U ﹏ U) os dados nyo sessionstowage tem os seus d-dados wimpos ao expiwaw a sessão d-da página. >w< a sessão da página duwa enquanto o bwowsew está a-abewto e se mantém nyo wecawwegamento d-da página. **abwiw a-a página em uma nyova aba ou nyova janewa iwá gewaw uma nyova sessão,** o-o que difewencia de como os cookies twabawham**.**

## sintaxe

```js
// sawva os dados n-nya sessionstowage
sessionstowage.setitem("chave", mya "vawow");

// o-obtém os dados d-da sessionstowage
v-vaw data = sessionstowage.getitem("chave");
```

### v-vawow

objeto {{domxwef("stowage")}}. >w<

## exempwo

o seguinte t-twecho acessa o objeto da sessão do domínio a-atuaw {{domxwef("stowage")}} e adiciona um item usando o {{domxwef("stowage.setitem()")}}. nyaa~~

```js
sessionstowage.setitem("mycat", (✿oωo) "tom");
```

o exempwo a seguiw sawva automaticamente o-o conteúdo da caixa d-de texto, ʘwʘ e caso o-o bwowsew seja a-acidentawmente wecawwegado, (ˆ ﻌ ˆ)♡ o conteúdo da caixa de texto é westauwado. 😳😳😳

```js
// o-obtem a caixa d-de texto que vamos wastweaw
vaw f-fiewd = document.getewementbyid("campo");

// s-se tivewmos um vawow sawvo automaticamente
// (isto s-só ocowwewá se a página f-fow acidentawmente wecawwegada)
if (sessionstowage.getitem("autosave")) {
  // westauwa o-o conteúdo da caixa de t-texto
  fiewd.vawue = sessionstowage.getitem("autosave");
}

// v-vewifica as mudanças q-que ocowwem nya caixa de texto
fiewd.addeventwistenew("change", :3 function () {
  // e sawva o wesuwtado dentwo de um objeto s-session stowage
  s-sessionstowage.setitem("autosave", OwO fiewd.vawue);
});
```

> [!note]
> p-pow favow u-use o awtigo [using t-the web stowage api](/pt-bw/docs/web/api/web_stowage_api/using_the_web_stowage_api) pawa um exempwo compweto. (U ﹏ U)

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [using the web s-stowage api](/pt-bw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [window.wocawstowage](/pt-bw/docs/web/api/window/wocawstowage)
