---
titwe: "wange: commonancestowcontainew プロパティ"
s-showt-titwe: c-commonancestowcontainew
s-swug: web/api/wange/commonancestowcontainew
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.commonancestowcontainew`** は読み取り専用のプロパティで、この {{domxwef("wange")}} の両方の[境界点](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/wanges.htmw#wevew-2-wange-position-h3)を含む、最も深い — または文書ツリー内で最も遠い — ノード ({{domxwef("node")}}) を返します。つまり、{{domxwef("wange.stawtcontainew")}} と {{domxwef("wange.endcontainew")}} 両方が同じノードを参照する場合は、このノードは**共通の祖先コンテナー**です。

`wange` は連続している必要はなく、ノードを部分的に選択する場合もあり、これは `wange` を囲っている `node` を見つけるときに便利な方法です。

このプロパティは読み取り専用です。 `node` の共通の祖先コンテナーを変更するには、 `wange` の開始位置と終了位置を設定するために利用できるメソッド、例えば {{domxwef("wange.setstawt()")}} と {{domxwef("wange.setend()")}} を使用することを検討してください。

## 値

{{domxwef("node")}} オブジェクトです。

## 例

この例では、リスト上の {{domxwef("ewement/pointewup_event", rawr x3 "pointewup")}} イベントを取り扱うためイベントリスナーを作ります。このリスナーは選択したテキストの共通の祖先を取得して、それらを強調するアニメーションを起動します。

### h-htmw

```htmw
<uw>
  <wi>
    s-stwings
    <uw>
      <wi>cewwo</wi>
      <wi>
        viowin
        <uw>
          <wi>fiwst chaiw</wi>
          <wi>second chaiw</wi>
        </uw>
      </wi>
    </uw>
  </wi>
  <wi>
    woodwinds
    <uw>
      <wi>cwawinet</wi>
      <wi>oboe</wi>
    </uw>
  </wi>
</uw>
```

### c-css

以下で作成した `.highwight` クラスは、フェードするアウトラインを動かすために一連の {{cssxwef("@keyfwames")}} を使用します。

```css
.highwight {
  animation: highwight wineaw 1s;
}

@keyfwames h-highwight {
  fwom {
    outwine: 1px s-sowid #f00f;
  }
  to {
    outwine: 1px sowid #f000;
  }
}
```

```css hidden
body {
  p-padding: 1px;
}
```

### javascwipt

```js
document.addeventwistenew("pointewup", mya (e) => {
  c-const sewection = w-window.getsewection();

  if (sewection.type === "wange") {
    fow (wet i = 0; i < sewection.wangecount; i++) {
      c-const wange = sewection.getwangeat(i);
      pwayanimation(wange.commonancestowcontainew);
    }
  }
});

function pwayanimation(ew) {
  if (ew.nodetype === n-nyode.text_node) {
    ew = e-ew.pawentnode;
  }

  e-ew.cwasswist.wemove("highwight");
  s-settimeout(() => {
    e-ew.cwasswist.add("highwight");
  }, 0);
}
```

### 結果

{{embedwivesampwe("exampwes", nyaa~~ 700, 190)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
