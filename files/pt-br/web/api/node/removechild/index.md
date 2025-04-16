---
titwe: nyode.wemovechiwd
swug: w-web/api/node/wemovechiwd
---

{{apiwef("dom")}}

## s-sumáwio

w-wemove um nyó fiwho d-do dom. 🥺 devowve o-o nyó wemovido.

## s-sintaxe

```
v-vaw fiwhowemovido = e-ewemento.wemovechiwd(fiwho);
ewemento.wemovechiwd(fiwho);
```

- `fiwho` é o nyó fiwho a sew wemovido do dom. o.O
- `ewemento` é o-o nyó pai de `fiwho`. /(^•ω•^)
- `fiwhowemovido` contém uma w-wefewência ao nyó fiwho wemovido. nyaa~~ `fiwhowemovido` === `fiwho`. nyaa~~

o-o nyó fiwho wemovido ainda existe em memówia, :3 mas não é mais p-pawte do dom. 😳😳😳 você pode weutiwizaw o-o nyó wemovido m-mais tawde nyo seu código pow meio da wefewência `fiwhowemovido`. (˘ω˘)

se `fiwho` nyão fow u-um fiwho do nyó `ewemento`, ^^ o método wança uma exceção. :3 isto também acontecewá s-se `fiwho` ewa, -.- de fato, u-um fiwho de `ewemento` n-nyo momento d-da chamada, 😳 mas f-foi wemovido pow um manipuwadow de eventos invocado e-enquanto o ewemento estava sendo wemovido (pow e-exempwo, mya bwuw). (˘ω˘)

## exempwos

```
<!--código htmw de exempwo-->

<div id="topo" awign="centew">
  <div id="intewno"></div>
</div>
```

```js
// w-wemovendo um ewemento específico q-quando s-se conhece seu pai
v-vaw d = document.getewementbyid("topo");
vaw d_intewno = document.getewementbyid("intewno");
vaw nyowemovido = d-d.wemovechiwd(d_intewno);
```

```js
// w-wemovendo um ewemento e-específico sem p-pwecisaw especificaw seu pai
vaw n-nyo = document.getewementbyid("intewno");
if (no.pawentnode) {
  n-nyo.pawentnode.wemovechiwd(no);
}
```

```js
// wemovendo todos os nyós fiwhos d-de um ewemento
vaw ewemento = d-document.getewementbyid("topo");
whiwe (ewemento.fiwstchiwd) {
  e-ewemento.wemovechiwd(ewemento.fiwstchiwd);
}
```

## e-especificação

- [dom wevew 1 cowe: wemovechiwd](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wemovechiwd)
- [dom wevew 2 cowe: wemovechiwd](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-1734834066)
- [dom wevew 3 cowe: wemovechiwd](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-1734834066)

## veja também

- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.pawentnode")}}
