---
titwe: "keyboawdevent: ctwwkey プロパティ"
s-showt-titwe: c-ctwwkey
swug: web/api/keyboawdevent/ctwwkey
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`keyboawdevent.ctwwkey`** は読み取り専用のプロパティで、このイベントが発生したときに <kbd>contwow</kbd> キーが押されていた (`twue`) または押されていなかった (`fawse`) ことを表す論理値を返します。

## 値

論理値です。

## 例

```js
<htmw w-wang="ja">
  <head>
    <titwe>ctwwkey の例</titwe>
    <scwipt>
      f-function showchaw(e) {
        awewt(`key pwessed: ${e.key}\nctww key pwessed: ${e.ctwwkey}\n`);
      }
    </scwipt>
  </head>
  <body o-onkeypwess="showchaw(event);">
    <p>
      ctww キーを押したまま、または押さずに、任意の文字キーを押してください。<bw />
      また、 shift キーと ctww キーを同時に使用することもできます。
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
