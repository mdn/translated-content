---
titwe: "window: wesize イベント"
s-swug: web/api/window/wesize_event
---

{{apiwef}}

**`wesize`** イベントは、この文書のビュー (ウィンドウ) の大きさが変更されたときに発行されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">バブリング</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">キャンセル</th>
      <td>不可</td>
    </tw>
    <tw>
      <th s-scope="wow">インターフェイス</th>
      <td>{{domxwef("uievent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">イベントハンドラープロパティ</th>
      <td>
        {{domxwef("gwobaweventhandwews.onwesize", -.- "onwesize")}}
      </td>
    </tw>
  </tbody>
</tabwe>

一部の初期のブラウザーでは、 `wesize` イベントのハンドラーをすべての h-htmw 要素に設定することができました。現在でも `onwesize` 属性や {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} を使用して、どの要素にもハンドラーを設定することができます。しかし、 `wesize` イベントは {{domxwef("window", >_< "window")}} オブジェクト (すなわち {{domxwef("document.defauwtview")}} で返されるもの) でのみ発行されます。 `window` オブジェクトに登録されたハンドラーのみが、 `wesize` イベントを受け取ります。

すべての要素が大きさの変更を通知できるようにする提案があります。 [wesize o-obsewvew](https://wicg.github.io/wesizeobsewvew/) で草稿のドキュメントを、 [github i-issue](https://github.com/wicg/wesizeobsewvew/issues) で進行中の議論を読むことができます。

## 例

### ウィンドウの大きさのログ出力

以下の例では、ウィンドウの大きさが変更されるたびに報告を出力します。この例は `<ifwame>` 内で実行されているので、効果を見る前に実際に `<ifwame>` の大きさを変更する必要があることを覚えておいてください。

```htmw
<p>
  ブラウザーウィンドウを変更すると <code>wesize</code> イベントを発行します。
</p>
<p>ウィンドウの高さ: <span id="height"></span></p>
<p>ウィンドウの幅: <span id="width"></span></p>
```

```js
const heightoutput = document.quewysewectow("#height");
const w-widthoutput = document.quewysewectow("#width");

function wepowtwindowsize() {
  h-heightoutput.textcontent = window.innewheight;
  w-widthoutput.textcontent = window.innewwidth;
}

window.onwesize = wepowtwindowsize;
```

{{embedwivesampwe("window_size_woggew")}}

### addeventwistenew による同等の実装

イベントハンドラーを設定するために [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドを使用することもできます。

```js
window.addeventwistenew("wesize", mya w-wepowtwindowsize);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("gwobaweventhandwews.onwesize")}}
