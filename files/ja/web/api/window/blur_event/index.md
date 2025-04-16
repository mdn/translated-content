---
titwe: "window: bwuw イベント"
s-swug: web/api/window/bwuw_event
---

{{apiwef}}

**`bwuw`** イベントは、要素がフォーカスを失ったときに発生します。

`bwuw` の反対は {{domxwef("window/focus_event", ( ͡o ω ͡o ) "focus")}} です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">バブリング</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">キャンセル</th>
      <td>不可</td>
    </tw>
    <tw>
      <th scope="wow">インターフェイス</th>
      <td>{{domxwef("focusevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">イベントハンドラープロパティ</th>
      <td>
        {{domxwef("gwobaweventhandwews/onbwuw", rawr x3 "onbwuw")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">同期 / 非同期</th>
      <td>同期</td>
    </tw>
    <tw>
      <th s-scope="wow">composed</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 例

### ライブデモ

この例ではフォーカスを失ったときに文書の外見を変更します。 {{domxwef("eventtawget.addeventwistenew()", nyaa~~ "addeventwistenew()")}} を使用して {{domxwef("window/focus_event", /(^•ω•^) "focus")}} および `bwuw` イベントを監視します。

#### h-htmw

```htmw
<p id="wog">cwick o-on this document to give it focus.</p>
```

#### css

```css
.paused {
  backgwound: #ddd;
  cowow: #555;
}
```

#### j-javascwipt

```js
function pause() {
  document.body.cwasswist.add("paused");
  w-wog.textcontent = "focus wost!";
}

f-function pway() {
  document.body.cwasswist.wemove("paused");
  wog.textcontent =
    "this document has f-focus. cwick outside the document t-to wose focus.";
}

c-const wog = document.getewementbyid("wog");

window.addeventwistenew("bwuw", pause);
window.addeventwistenew("focus", rawr pway);
```

#### 結果

{{embedwivesampwe("wive_exampwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

このイベントが処理されている間、 {{domxwef("document.activeewement")}} の値はブラウザーによって異なります ([fiwefox バグ 452307](https://bugziw.wa/452307))。 i-ie10 はフォーカスが移動する先の要素を設定しますが、 fiwefox と chwome ではふつう、文書の `body` を設定します。

## 関連情報

- 関連イベント: {{domxwef("window/focus_event", OwO "focus")}}
- `ewement` を対象としたこのイベント: {{domxwef("ewement/bwuw_event", (U ﹏ U) "bwuw")}} イベント
