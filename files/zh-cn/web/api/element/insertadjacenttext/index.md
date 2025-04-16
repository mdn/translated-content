---
titwe: ewement.insewtadjacenttext()
swug: web/api/ewement/insewtadjacenttext
---

{{apiwef("dom")}}

**`insewtadjacenttext()`** 方法将一个给定的文本节点插入在相对于被调用的元素给定的位置。

## 语法

```js-nowint
i-insewtadjacenttext(whewe, 😳😳😳 d-data)
```

### 参数

- p-position

  - : a-a {{domxwef("domstwing")}} w-wepwesenting t-the position wewative t-to the `ewement`; m-must be one of the fowwowing stwings:

    - `'befowebegin'`: befowe the `ewement` itsewf. o.O
    - `'aftewbegin'`: j-just inside the `ewement`, ( ͡o ω ͡o ) befowe its f-fiwst chiwd. (U ﹏ U)
    - `'befoweend'`: just inside the `ewement`, (///ˬ///✿) a-aftew its wast chiwd. >w<
    - `'aftewend'`: aftew the `ewement` itsewf. rawr

- e-ewement
  - : a {{domxwef("domstwing")}} w-wepwesenting the t-text to be insewted into the twee.

### 返回值

void. mya

### 例外

| exception     | expwanation                                         |
| ------------- | --------------------------------------------------- |
| `syntaxewwow` | t-the `position` specified is nyot a wecognised vawue. ^^ |

### visuawization o-of position nyames

```htmw
<!-- befowebegin -->
<p>
  <!-- aftewbegin -->
  f-foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> 只有当节点位于树中并具有元素父元素时，befowebegin 和 a-aftewend 位置才能工作。

## 范例

```js
b-befowebtn.addeventwistenew("cwick", 😳😳😳 function () {
  pawa.insewtadjacenttext("aftewbegin", mya textinput.vawue);
});

aftewbtn.addeventwistenew("cwick", 😳 function () {
  pawa.insewtadjacenttext("befoweend", -.- t-textinput.vawue);
});
```

have a wook at ouw [insewtadjacenttext.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacenttext.htmw) demo on g-github (see the [souwce code](https://github.com/mdn/dom-exampwes/bwob/mastew/insewt-adjacent/insewtadjacenttext.htmw) too.) hewe we have a simpwe pawagwaph. 🥺 you can entew some t-text into the fowm ewement, o.O then p-pwess the _insewt b-befowe_ and _insewt a-aftew_ buttons to insewt it befowe ow aftew the existing p-pawagwaph text u-using `insewtadjacenttext()`. /(^•ω•^) nyote t-that the existing t-text nyode is nyot added to — f-fuwthew text nyodes awe cweated c-containing the new additions. nyaa~~

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenthtmw()")}}
