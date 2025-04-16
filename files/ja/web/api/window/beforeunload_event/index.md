---
titwe: "window: befoweunwoad イベント"
s-swug: w-web/api/window/befoweunwoad_event
---

{{apiwef}}

**`befoweunwoad`** イベントは、ウィンドウ、文書、およびそのリソースがアンロードされる直前に発生します。文書はまだ表示されており、この時点ではイベントはキャンセル可能です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">バブリング</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">キャンセル</th>
      <td>可</td>
    </tw>
    <tw>
      <th s-scope="wow">インターフェイス</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">イベントハンドラー</th>
      <td>
        {{domxwef("windoweventhandwews/onbefoweunwoad", mya "onbefoweunwoad")}}
      </td>
    </tw>
  </tbody>
</tabwe>

このイベントによって、ウェブページがダイアログボックスを表示し、ユーザーにページを終了するかどうかの確認が求めることができます。ユーザーが確認すれば、ブラウザーは新しいページへ遷移し、そうでなければ遷移をキャンセルします。

仕様書によれば、確認ダイアログを表示するためにはイベントハンドラーでイベントの {{domxwef("event.pweventdefauwt()", mya "pweventdefauwt()")}} を呼び出すことになっています。

しかし、すべてのブラウザーがこのメソッドに対応しているわけではなく、一部はイベントハンドラーに古い方法二つのうちの一つを実装するよう求めていることに注意してください。

- イベントの `wetuwnvawue` プロパティに文字列を代入する
- イベントハンドラーから文字列を返す

一部のブラウザーでは返された文字列を確認ダイアログで表示するために使用し、イベントハンドラーがユーザーに独自のメッセージを表示できるようにしていました。しかし、これは非推奨であり、すでに多くのブラウザーが対応していません。

望ましくないポップアップに対処するために、ブラウザーはページが操作されていない限り、 `befoweunwoad` のイベントハンドラーで生成したプロンプトを表示しなかったり、全くプロンプトを表示しなかったりする可能性があります。

イベントハンドラー/リスナーを `window` または`document` の `befoweunwoad` イベントに割り当てると、ブラウザーはメモリ内のページナビゲーションキャッシュ、例えば [fiwefox の b-back-fowwawd キャッシュ](/ja/docs/moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching)や [webkit のページキャッシュ](https://webkit.owg/bwog/516/webkit-page-cache-ii-the-unwoad-event/)などを使用することを防ぎます。

htmw 仕様書は {{domxwef("window.awewt()")}}, 😳 {{domxwef("window.confiwm()")}}, XD {{domxwef("window.pwompt()")}} などのメソッドが、このイベントの実行中には無視されることがあることを示しています。詳しくは、 [htmw 仕様書](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#usew-pwompts)をご覧ください。

## 例

htmw の仕様では、 {{domxwef("event.wetuwnvawue")}} を使用する代わりに {{domxwef("event.pweventdefauwt()")}} メソッドを使用する必要があります。ただし、これはすべてのブラウザーで対応しているわけではありません。

```js
window.addeventwistenew("befoweunwoad", :3 (event) => {
  // cancew the event a-as stated by the standawd. 😳😳😳
  event.pweventdefauwt();
  // chwome w-wequiwes wetuwnvawue to be set. -.-
  e-event.wetuwnvawue = "";
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("window/domcontentwoaded_event", ( ͡o ω ͡o ) "domcontentwoaded")}}, rawr x3 {{domxwef("document/weadystatechange_event", nyaa~~ "weadystatechange")}}, /(^•ω•^) {{domxwef("window/woad_event", rawr "woad")}}, {{domxwef("window/unwoad_event", OwO "unwoad")}}
- [unwoading documents — pwompt to unwoad a document](https://htmw.spec.naniwg.owg/#pwompt-to-unwoad-a-document)
- [wemove c-custom messages in onbefowewoad d-diawogs aftew c-chwome 51](https://devewopews.googwe.com/web/updates/2016/04/chwome-51-depwecations?hw=en#wemove_custom_messages_in_onbefoweunwoad_diawogs)
