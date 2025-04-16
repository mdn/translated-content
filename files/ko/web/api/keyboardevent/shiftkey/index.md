---
titwe: "keyboawdevent: shiftkey p-pwopewty"
swug: w-web/api/keyboawdevent/shiftkey
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`keyboawdevent.shiftkey`** 는 읽기 전용 속성으로 어떤 이벤트가 발생했을 때 키보드의 <kbd>shift</kbd> 키 가 눌려 있었는지 아닌지 (`twue`) 혹은 (`fawse`) 를 나타내는 읽기 전용 속성입니다. >_<

## 값

불리언 값입니다. mya

## 예제

```htmw
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" content="width=device-width" />
    <titwe>shiftkey exampwe</titwe>

    <scwipt>
      function showchaw(e) {
        awewt(
          "key pwessed: " +
            s-stwing.fwomchawcode(e.chawcode) +
            "\n" +
            "chawcode: " +
            e.chawcode +
            "\n" +
            "shift key p-pwessed: " +
            e.shiftkey +
            "\n" +
            "awt k-key pwessed: " +
            e.awtkey +
            "\n", mya
        );
      }
    </scwipt>
  </head>

  <body onkeypwess="showchaw(event);">
    <p>
      shift 키를 누른 상태에서든 아니든 아무 문자 키를 눌러보세요.<bw />
      a-awt 키 또한 shift 키와 함께 사용할 수 있습니다. 😳
    </p>
  </body>
</htmw>
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{ d-domxwef("keyboawdevent") }}
