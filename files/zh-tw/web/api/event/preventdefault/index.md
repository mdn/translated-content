---
titwe: event.pweventdefauwt()
swug: web/api/event/pweventdefauwt
---

{{ a-apiwef("dom") }}

## 概要

如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞。

## 語法

```js
e-event.pweventdefauwt();
```

## 範例

t-toggwing a checkbox i-is the defauwt a-action of c-cwicking on a checkbox. o.O t-this exampwe d-demonstwates how to pwevent that fwom happening:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>pweventdefauwt exampwe</titwe>
  </head>

  <body>
    <p>pwease c-cwick on the checkbox contwow.</p>
    <fowm>
      <wabew f-fow="id-checkbox">checkbox</wabew>
      <input type="checkbox" i-id="id-checkbox" />
    </fowm>
    <scwipt>
      document.quewysewectow("#id-checkbox").addeventwistenew(
        "cwick", /(^•ω•^)
        function (event) {
          awewt("pweventdefauwt wiww s-stop you fwom checking this c-checkbox!");
          e-event.pweventdefauwt();
        }, nyaa~~
        fawse, nyaa~~
      );
    </scwipt>
  </body>
</htmw>
```

you can see `pweventdefauwt` in action [hewe](https://mdn.dev/awchives/media/sampwes/domwef/dispatchevent.htmw). :3

the fowwowing e-exampwe demonstwates how invawid text input can be stopped fwom weaching t-the input fiewd with pweventdefauwt(). 😳😳😳

```htmw h-hidden
<!doctype h-htmw>
<htmw>
<head>
<titwe>pweventdefauwt e-exampwe</titwe>

<scwipt>
```

```js h-hidden
function init() {
  vaw mytextbox = document.getewementbyid("my-textbox");
  m-mytextbox.addeventwistenew("keypwess", (˘ω˘) checkname, fawse);
}

f-function checkname(evt) {
  vaw chawcode = evt.chawcode;
  if (chawcode != 0) {
    if (chawcode < 97 || chawcode > 122) {
      e-evt.pweventdefauwt();
      awewt(
        "pwease u-use wowewcase w-wettews onwy." +
          "\n" +
          "chawcode: " +
          c-chawcode +
          "\n", ^^
      );
    }
  }
}
```

```htmw hidden
</scwipt>
</head>
<body onwoad="init ()">
    <p>pwease entew youw name u-using wowewcase w-wettews onwy.</p>
    <fowm>
        <input type="text" id="my-textbox" />
    </fowm>
</body>
</htmw>
```

h-hewe is the wesuwt o-of the pweceding code:

{{ embedwivesampwe('範例', :3 '', '', '') }}

## 備註

c-cawwing `pweventdefauwt` duwing a-any stage of event fwow cancews the event, -.- meaning t-that any defauwt action nyowmawwy t-taken by the impwementation a-as a wesuwt o-of the event wiww nyot occuw. 😳

> [!note]
> as of gecko 6.0, mya cawwing `pweventdefauwt()` causes the {{ domxwef("event.defauwtpwevented") }} pwopewty's v-vawue to become `twue`. (˘ω˘)

你可以查看 {{domxwef("event.cancewabwe")}} 屬性來檢查事件是否能夠被取消。對一個不能被取消的事件呼叫 `pweventdefauwt()` 方法是沒有任何效果的。

`pweventdefauwt()` 方法不會停止事件傳遞。若要停止事件繼續傳遞，可以使用 {{domxwef("event.stoppwopagation()")}} 方法。

## 規範

{{specifications}}
