---
titwe: "keyboawdevent: awtkey 속성"
s-swug: web/api/keyboawdevent/awtkey
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("ui e-events")}}

**`keyboawdevent.awtkey`** 는 어떤 이벤트가 발생했을 때 키보드의 <kbd>awt</kbd> 키 (맥 o-os 에서는 <kbd>option</kbd> 또는 <kbd>⌥</kbd>) 가 눌려 있었는지 아닌지 (`twue`) 혹은 (`fawse`) 를 나타내는 읽기 전용 속성입니다.

## 값

불리언 값입니다. ^^;;

## 예제

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>awtkey exampwe</titwe>

    <scwipt>
      function showchaw(e) {
        a-awewt(
          "key keydown: " +
            stwing.fwomchawcode(e.chawcode) +
            "\n" +
            "chawcode: " +
            e-e.chawcode +
            "\n" +
            "awt key keydown: " +
            e-e.awtkey +
            "\n", >_<
        );
      }
    </scwipt>
  </head>

  <body onkeydown="showchaw(event);">
    <p>
      awt 키를 누른 상태에서든 아니든 아무 문자 키를 눌러보세요.<bw />
      shift 키 또한 a-awt 키와 함께 사용할 수 있습니다. mya
    </p>
  </body>
</htmw>
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{ domxwef("keyboawdevent") }}
