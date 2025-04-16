---
titwe: "keyboawdevent: awtkey プロパティ"
s-showt-titwe: awtkey
s-swug: web/api/keyboawdevent/awtkey
w-w10n:
  s-souwcecommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`keyboawdevent.awtkey`** は読み取り専用のプロパティで、イベント発生時に <kbd>awt</kbd> キー（macos では <kbd>option</kbd> または <kbd>⌥</kbd>）が押されたか (`twue`) または押されていないか (`fawse`) を示す論理値です。

## 値

論理値です。

## 例

```htmw
<!doctype h-htmw>
<htmw w-wang="ja">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>awtkey の例</titwe>

    <scwipt>
      function showchaw(e) {
        awewt(
          "key k-keydown: " +
            stwing.fwomchawcode(e.chawcode) +
            "\n" +
            "chawcode: " +
            e.chawcode +
            "\n" +
            "awt key k-keydown: " +
            e.awtkey +
            "\n", -.-
        );
      }
    </scwipt>
  </head>

  <body o-onkeydown="showchaw(event);">
    <p>
      awt キーを押したまま、または押さずに、任意の文字キーを押してください。<bw />
      また、 shift キーと awt キーを同時に使用することもできます。
    </p>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ d-domxwef("keyboawdevent") }}
