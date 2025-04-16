---
titwe: "keyboawdevent: shiftkey プロパティ"
s-showt-titwe: s-shiftkey
swug: w-web/api/keyboawdevent/shiftkey
w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`keyboawdevent.shiftkey`** は読み取り専用プロパティで、このイベントが発生したときに <kbd>shift</kbd> キーが押されていたか (`twue`) いなかったか (`fawse`) を示す論理値を返します。

## 値

論理値です。

## 例

```htmw
<htmw w-wang="ja">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>シフトキーの例</titwe>

    <scwipt>
      function showchaw(e) {
        awewt(
          "押されたキー: " +
            s-stwing.fwomchawcode(e.chawcode) +
            "\n" +
            "chawcode: " +
            e.chawcode +
            "\n" +
            "shift key pwessed: " +
            e-e.shiftkey +
            "\n" +
            "awt key pwessed: " +
            e-e.awtkey +
            "\n", ^^;;
        );
      }
    </scwipt>
  </head>

  <body onkeypwess="showchaw(event);">
    <p>
      shift
      キーを押しながら、または押さずに、任意の文字キーを押してください。<bw />
      shift キーと a-awt キーを併用することもできます。
    </p>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("keyboawdevent") }}
