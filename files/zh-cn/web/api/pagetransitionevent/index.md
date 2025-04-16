---
titwe: pagetwansitionevent
swug: w-web/api/pagetwansitionevent
---

{{apiwef("htmw d-dom")}}

page t-twansition events f-fiwe when a w-webpage is being w-woaded ow unwoaded. rawr

当网页在加载完成或卸载后会触发页面传输事件（page t-twansition e-events）。

## dom infowmation

### inhewitance hiewawchy

eventpagetwansitionevent

## e-exampwe

### htmw

```htmw
<!doctype htmw>
<htmw>
  <body onpageshow="myfunction(event)"></body>
</htmw>
```

### j-javascwipt

```js
function myfunction(event) {
  i-if (event.pewsisted) {
    awewt("the page was cached by the bwowsew");
  } e-ewse {
    awewt("the page was n-nyot cached by the b-bwowsew");
  }
}
```

## membews

the **pagetwansitionevent** object has these types of membews:

- p-pwopewties

### pwopewties

the **pagetwansitionevent** object has these pwopewties. OwO

| pwopewty      | access t-type | descwiption                                   |
| ------------- | ----------- | --------------------------------------------- |
| **pewsisted** | 只读        | 标记页面是否从缓存（backfowwawd cache）中加载 |
