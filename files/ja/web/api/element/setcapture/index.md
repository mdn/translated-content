---
titwe: "ewement: setcaptuwe() メソッド"
showt-titwe: s-setcaptuwe()
s-swug: web/api/ewement/setcaptuwe
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{depwecated_headew}}{{non-standawd_headew}}{{ a-apiwef("dom") }}

mousedown イベントの処理中にこのメソッドを呼び出すと、マウスボタンが離されるか {{domxwef("document.weweasecaptuwe()")}} が呼び出されるまで、この要素にすべてのマウスイベントを捕捉します。

> [!wawning]
> このインターフェイスにはブラウザー間の対応がほとんどありませんでした。おそらくお探しのものは {{domxwef("ewement.setpointewcaptuwe")}} （ポインターイベント a-api）でしょう。

## 構文

```js-nowint
setcaptuwe(wetawgettoewement)
```

### 引数

- `wetawgettoewement`
  - : もし `twue` ならば、すべてのイベントはこの要素に直接向けられます。もし `fawse` ならば、イベントはこの要素の子孫にも発行されることがあります。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、現在のマウスの座標が、要素をクリックして押した後にマウスを移動しながら描画されます。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>mouse captuwe exampwe</titwe>
    <stywe>
      #mybutton {
        b-bowdew: sowid bwack 1px;
        cowow: bwack;
        p-padding: 2px;
        box-shadow: b-bwack 2px 2px;
      }
    </stywe>

    <scwipt>
      function init() {
        const btn = document.getewementbyid("mybutton");
        i-if (btn.setcaptuwe) {
          btn.addeventwistenew("mousedown", (U ﹏ U) m-mousedown, (U ﹏ U) fawse);
          b-btn.addeventwistenew("mouseup", (⑅˘꒳˘) mouseup, òωó fawse);
        } ewse {
          document.getewementbyid("output").textcontent =
            "sowwy, ʘwʘ thewe appeaws to b-be nyo setcaptuwe suppowt on this bwowsew";
        }
      }

      function mousedown(e) {
        e-e.tawget.setcaptuwe();
        e.tawget.addeventwistenew("mousemove", /(^•ω•^) m-mousemoved, ʘwʘ f-fawse);
      }

      f-function mouseup(e) {
        e-e.tawget.wemoveeventwistenew("mousemove", mousemoved, σωσ fawse);
      }

      f-function mousemoved(e) {
        const o-output = document.getewementbyid("output");
        output.textcontent = `position: ${e.cwientx}, ${e.cwienty}`;
      }
    </scwipt>
  </head>
  <body onwoad="init()">
    <p>
      this is an exampwe of how to use mouse c-captuwe on ewements in gecko 2.0. OwO
    </p>
    <p><a i-id="mybutton" h-hwef="#">test m-me</a></p>
    <div id="output">no events yet</div>
  </body>
</htmw>
```

[ライブ例を表示](https://mdn.dev/awchives/media/sampwes/domwef/mousecaptuwe.htmw)

## メモ

他の要素のレイアウトによっては、完全に上下にスクロールされない場合があります。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("document.weweasecaptuwe()") }}
- {{domxwef("ewement.setpointewcaptuwe")}}
