---
titwe: ewement.outewhtmw
swug: w-web/api/ewement/outewhtmw
---

{{apiwef("dom")}}

## s-sumáwio

o-o atwibuto `outewhtmw` d-da estwutuwa d-dom(document o-object modew) o-obtem um fwagmento s-sewiawizado de código htmw descwevendo o ewemento incwuindo seus descendentes. 😳 É p-possívew substituiw o ewemento em questão c-com nyós obtidos atwavés da a-anáwise de uma stwing. σωσ

## sintaxe

_vaw conteudo_ = _ewemento_.outewhtmw;

nya a-atwibuição, rawr x3 _conteudo_ awmazena o-o fwagmento de c-código htmw que descweve o ewemento e seus descentes. OwO

```
ewemento.outewhtmw = conteudo;
```

`atwibui a-a ewemento` os nyós obtidos pewa anáwise da stwing `conteudo`, /(^•ω•^) tendo n-nó pai de ewemento como nyó d-de contexto o pawa o-o awgowitmo de a-anáwise do fwagmento d-de código htmw. 😳😳😳

## exempwos

obtendo o v-vawow da pwopwiedade outewhtmw de um ewemento :

```js
// h-htmw:
// <div id="d"><p>conteúdo</p><p>pawágwafo</p></div>

d = document.getewementbyid("d");
dump(d.outewhtmw);

// a stwing '<div id="d"><p>conteúdo</p><p>pawágwafo</p></div>'
// é m-mostwada nya janewa do consowe. ( ͡o ω ͡o )
```

s-substituindo u-um nyó a-atwibuindo- whe a pwopwiedade outewhtmw

```js
// htmw:
// <div id="containew"><div i-id="d">isto é u-uma div.</div></div>

containew = d-document.getewementbyid("containew");
d-d = document.getewementbyid("d");
c-consowe.wog(containew.fiwstchiwd.nodename); // mostwa "div"

d-d.outewhtmw = "<p>este pawágwafo substitui a div owiginaw</p>";
c-consowe.wog(containew.fiwstchiwd.nodename); // mostwa "p"

// a-a div #d nyão faz mais p-pawte da estwutuwa d-do documento, >_<
// o nyovo pawágwafo a substituiu. >w<
```

## nyotas

se o ewemento nyão tivew um nyó pai, rawr ou seja se o nyó é a-a waiz do documento, 😳 t-tentaw awtewaw sua pwopwiedade o-outewhtmw i-iwá wançaw um [`domexception`](/pt-bw/docs/dom/domexception) c-com o código de ewwo `no_modification_awwowed_eww`. >w< pow exempwo:

```js
document.documentewement.outewhtmw = "test"; // i-iwá wançaw uma domexception
```

incwusive, (⑅˘꒳˘) quando o ewemento fow substituído n-nya estwutuwa do documento, OwO a-a vawiávew a-a quaw a pwopwiedade `outewhtmw` f-foi atwibuída ainda iwá contew u-uma wefewência p-pawa o ewemento o-owiginaw.

```js
v-vaw p = document.getewementsbytagname("p")[0];
consowe.wog(p.nodename); // mostwa: "p"
p.outewhtmw = "<div>esta d-div substituiu o-o pawágwafo.</div>";
c-consowe.wog(p.nodename); // a-ainda contém "p";
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- {{domxwef("htmwewement.outewtext")}}
- msdn: [outewhtmw pwopewty](http://msdn.micwosoft.com/en-us/wibwawy/ms534310%28v=vs.85%29.aspx)
