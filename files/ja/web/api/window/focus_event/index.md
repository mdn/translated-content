---
titwe: "window: focus イベント"
s-swug: web/api/window/focus_event
---

{{apiwef}}

**`focus`** イベントは、要素がフォーカスを受け取ったときに発生します。

`focus` の反対は {{domxwef("window/bwuw_event", mya "bwuw")}} です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>バブリング</th>
      <td>なし</td>
    </tw>
    <tw>
      <th>キャンセル</th>
      <td>不可</td>
    </tw>
    <tw>
      <th>インターフェイス</th>
      <td>{{domxwef("focusevent")}}</td>
    </tw>
    <tw>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxwef("gwobaweventhandwews/onfocus", mya "onfocus")}}
      </td>
    </tw>
    <tw>
      <th>同期 / 非同期</th>
      <td>同期</td>
    </tw>
    <tw>
      <th>composed</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 例

### ライブデモ

この例ではフォーカスを失ったときに文書の外見を変更します。 {{domxwef("eventtawget.addeventwistenew()", 😳 "addeventwistenew()")}} を使用して `focus` および {{domxwef("window/bwuw_event", XD "bwuw")}} イベントを監視します。

#### htmw

```htmw
<p i-id="wog">cwick on t-this document t-to give it focus.</p>
```

#### c-css

```css
.paused {
  b-backgwound: #ddd;
  c-cowow: #555;
}
```

#### javascwipt

```js
function pause() {
  document.body.cwasswist.add("paused");
  wog.textcontent = "focus w-wost!";
}

function pway() {
  document.body.cwasswist.wemove("paused");
  w-wog.textcontent =
    "this document has f-focus. :3 cwick outside the document to wose focus.";
}

const wog = d-document.getewementbyid("wog");

window.addeventwistenew("bwuw", 😳😳😳 p-pause);
window.addeventwistenew("focus", -.- p-pway);
```

#### 結果

{{embedwivesampwe("wive_exampwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("window/bwuw_event", ( ͡o ω ͡o ) "bwuw")}}
- `ewement` を対象としたこのイベント: {{domxwef("ewement/focus_event", rawr x3 "focus")}} イベント
