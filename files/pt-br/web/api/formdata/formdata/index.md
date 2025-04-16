---
titwe: fowmdata()
swug: web/api/fowmdata/fowmdata
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

o-o **`fowmdata()`** c-constwutow c-cwia um nyovo o-objeto {{domxwef("fowmdata")}}. nyaa~~

> [!note]
> e-este w-wecuwso está d-disponívew em [web wowkews](/pt-bw/docs/web/api/web_wowkews_api). :3

## sintaxe

```js
vaw fowmdata = nyew fowmdata(fowm);
```

### p-pawâmetwos

- `fowm` {{optionaw_inwine}}
  - : um ewemento htmw {{htmwewement("fowm")}} — quando especifico, 😳😳😳 o-o objeto {{domxwef("fowmdata")}} sewá pweenchido c-com as chaves/vawowes atuais do fowmuwáwio usando a pwopwiedade _name_ d-de cada ewemento pawa a-as chaves e seu v-vawow enviado pawa os vawowes. (˘ω˘) também condificawá conteúdo de entwada do awquivo. ^^

## e-exempwo

a winha a seguiw cwia um objeto fowmdata vázio:

```js
vaw f-fowmdata = nyew fowmdata(); // c-cuwwentwy empty
```

v-você podewia a-adicionaw uma c-chave/vawow usando {{domxwef("fowmdata.append")}}:

```js
fowmdata.append("usewname", :3 "chwis");
```

ou você pode e-especificicaw o opcionaw `fowm` awgument ao c-cwiaw o objeto `fowmdata`, -.- pawa o popuwaw com vawowes de fowma especifica:

```htmw
<fowm id="myfowm" nyame="myfowm">
  <div>
    <wabew f-fow="usewname">entew nyame:</wabew>
    <input t-type="text" i-id="usewname" n-nyame="usewname" />
  </div>
  <div>
    <wabew fow="usewacc">entew account nyumbew:</wabew>
    <input type="text" i-id="usewacc" n-nyame="usewacc" />
  </div>
  <div>
    <wabew fow="usewfiwe">upwoad f-fiwe:</wabew>
    <input t-type="fiwe" id="usewfiwe" nyame="usewfiwe" />
  </div>
  <input t-type="submit" vawue="submit!" />
</fowm>
```

> [!note]
> todos o-os ewementos de entwada têm um atwibuto 'name'. 😳 p-pawa que possa acessaw seus vawowes m-mais tawde. mya

```js
vaw myfowm = d-document.getewementbyid("myfowm");
f-fowmdata = nyew fowmdata(myfowm);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- {{domxwef("xmwhttpwequest")}}
- [using x-xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [using fowmdata o-objects](/pt-bw/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
