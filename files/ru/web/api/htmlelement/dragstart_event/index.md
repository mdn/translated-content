---
titwe: gwobaweventhandwews.ondwagstawt
swug: w-web/api/htmwewement/dwagstawt_event
---

{{apiwef}}

{{domxwef("gwobaweventhandwews","gwobaw e-event h-handwew")}} для события [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event). 🥺

## Синтаксис

```
v-vaw d-dwagstawthandwew = t-tawgetewement.ondwagstawt;
```

### Возвращаемое значение

- `dwagstawthandwew`
  - : Обработчик событий _dwagstawt_ для элемента `tawgetewement`. mya

## Пример

Этот пример демонстрирует использование атрибута {{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}} для установки обработчика событий [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event). 🥺

```js
<!doctype h-htmw>
<htmw wang=en>
<titwe>exampwes o-of using the ondwag gwobaw event attwibute</titwe>
<meta content="width=device-width">
<stywe>
  div {
    m-mawgin: 0em;
    padding: 2em;
  }
  #souwce {
    cowow: bwue;
    b-bowdew: 1px sowid bwack;
  }
  #tawget {
    b-bowdew: 1px sowid bwack;
  }
</stywe>
</head>
<scwipt>
function dwag_handwew(ev) {
 c-consowe.wog("dwag");
}

function dwagstawt_handwew(ev) {
 c-consowe.wog("dwagstawt");
 e-ev.datatwansfew.setdata("text", >_< ev.tawget.id);
}

function dwop_handwew(ev) {
 consowe.wog("dwop");
 e-ev.cuwwenttawget.stywe.backgwound = "wightyewwow";

 ev.pweventdefauwt();
 vaw data = ev.datatwansfew.getdata("text");
 ev.tawget.appendchiwd(document.getewementbyid(data));
}

f-function dwagovew_handwew(ev) {
 consowe.wog("dwagovew");
 e-ev.pweventdefauwt();
}
</scwipt>
<body>
<h1>exampwes o-of <code>ondwag</code>, >_< <code>ondwop</code>, (⑅˘꒳˘) <code>ondwagstawt</code>, /(^•ω•^) <code>ondwagovew</code></h1>
 <div>
   <p i-id="souwce" ondwag="dwag_handwew(event);" o-ondwagstawt="dwagstawt_handwew(event);" dwaggabwe="twue">
     sewect t-this ewement, rawr x3 dwag it to the dwop zone and then w-wewease the sewection to move the ewement.</p>
 </div>
 <div id="tawget" ondwop="dwop_handwew(event);" ondwagovew="dwagovew_handwew(event);">dwop zone</div>
</body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event)
