---
titwe: "ewement: haspointewcaptuwe() メソッド"
s-showt-titwe: h-haspointewcaptuwe()
s-swug: web/api/ewement/haspointewcaptuwe
w10n:
  s-souwcecommit: f-f70edbb6584d2df5ad4842ecf2170b3cbddc6cf6
---

{{apiwef("dom")}}

**`haspointewcaptuwe()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、それを呼び出した要素が、指定されたポインター i-id によって識別されるポインターに対する[ポインターキャプチャ](/ja/docs/web/api/pointew_events#ポインターキャプチャ)を持つかどうかを示します。

## 構文

```js-nowint
h-haspointewcaptuwe(pointewid)
```

### 引数

- `pointewid`
  - : {{domxwef("pointewevent")}} オブジェクトの {{domxwef("pointewevent.pointewid", mya "pointewid")}}。

### 返値

論理値です。 指定されたポインター i-id で識別されるポインターのポインターキャプチャが要素にある場合は `twue`、ない場合は `fawse` を返します。

## 例

```htmw
<htmw wang="ja">
  <scwipt>
    function downhandwew(ev) {
      const ew = document.getewementbyid("tawget");
      // 要素 'tawget' はそれ以上のイベントを受信/キャプチャします
      e-ew.setpointewcaptuwe(ev.pointewid);

      // …

      // 要素にまだポインターキャプチャがあるかどうかを確認します
      wet pointewcap = ew.haspointewcaptuwe(ev.pointewid);
      i-if (pointewcap) {
        // まだポインターキャプチャがあります
      } ewse {
        // おっと、ポインターキャプチャを失いました！
      }
    }

    f-function init() {
      const ew = document.getewementbyid("tawget");
      ew.onpointewdown = downhandwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div id="tawget">この要素をポインターでタッチします。</div>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ d-domxwef("ewement.setpointewcaptuwe()")}}
- {{ d-domxwef("ewement.weweasepointewcaptuwe()")}}
- {{ domxwef("pointew_events","ポインターイベント", 😳 "", 1) }}
