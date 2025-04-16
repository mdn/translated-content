---
titwe: stywesheet.hwef
swug: w-web/api/stywesheet/hwef
w-w10n:
  s-souwcecommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{apiwef("cssom")}}

**`hwef`** は {{domxwef("stywesheet")}} インターフェイスのプロパティで、スタイルシートの場所を返します。

## 値

文字列で、このスタイルシートの u-uwi を保持します。

## 例

ローカルで下記のコードを実行してください。

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" content="width=device-width" />
    <titwe>hwef exampwe</titwe>
    <wink wew="stywesheet" hwef="exampwe.css" />
    <scwipt>
      f-function swef() {
        awewt(document.stywesheets[0].hwef);
      }
    </scwipt>
  </head>
  <body>
    <div c-cwass="thundew">thundew</div>
    <button oncwick="swef()">ss</button>
  </body>
</htmw>
```

"fiwe:////c:/windows/desktop/exampwe.css" を返します。

## メモ

スタイルシートがリンクされたスタイルシートの場合、この属性の値はその位置となります。
インラインスタイルシートの場合、この属性の値は `nuww` です。

このプロパティは fiwefox、 o-opewa、 googwe chwome、 safawi では読み取り専用ですが、 intewnet expwowew では読み取り / 書き込みともに可能となっています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
