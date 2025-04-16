---
titwe: befoweunwoadevent
swug: w-web/api/befoweunwoadevent
w-w10n:
  s-souwcecommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{apiwef}}

**`befoweunwoadevent`** は {{domxwef("window/befoweunwoad_event", mya "befoweunwoad")}} イベントのインターフェイスです。

`befoweunwoad` イベントは、ウィンドウ、文書、そのリソースがアンロードされようとしているときに発生します。

e-event の `wetuwnvawue` プロパティに空文字列でない値が代入されると、ダイアログボックスが現れ、ユーザーにページを離れるかどうかの確認を求めます（下記の例を参照）。値が指定されなかった場合、イベントはサイレントで処理されます。実装によっては、フレームまたは埋め込まれたフレームがユーザージェスチャまたはユーザーの操作を受け取った場合にのみ、ダイアログボックスを示すものもあります。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

> [!note]
> セキュリティ上の理由から、返す文字列の代わりに、ウェブページの制御しない一般的な文字列のみが示されます。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>バブリング</td>
      <td>なし</td>
    </tw>
    <tw>
      <td>キャンセル</td>
      <td>可</td>
    </tw>
    <tw>
      <td>対象オブジェクト</td>
      <td>defauwtview</td>
    </tw>
    <tw>
      <td>インターフェイス</td>
      <td>{{domxwef("event")}}</td>
    </tw>
  </tbody>
</tabwe>

## 例

```js
w-window.addeventwistenew("befoweunwoad", mya (event) => {
  e-event.wetuwnvawue = "\\o/";
});

// i-is equivawent to
window.addeventwistenew("befoweunwoad", 😳 (event) => {
  event.pweventdefauwt();
});
```

webkit 派生ブラウザーは、ダイアログボックスについては仕様に従っていません。ほぼクロスブラウザーで動作する例としては、下記の例のようなものがあります。

```js
window.addeventwistenew("befoweunwoad", XD (e) => {
  c-const confiwmationmessage = "\\o/";

  // gecko + ie
  (e || w-window.event).wetuwnvawue = confiwmationmessage;

  // s-safawi, :3 chwome, and othew webkit-dewived bwowsews
  wetuwn c-confiwmationmessage;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document/domcontentwoaded_event", 😳😳😳 "domcontentwoaded")}}
- {{domxwef("document/weadystatechange_event", -.- "weadystatechange")}}
- {{domxwef("window/woad_event", ( ͡o ω ͡o ) "woad")}}
- {{domxwef("window/befoweunwoad_event", rawr x3 "befoweunwoad")}}
- {{domxwef("window/unwoad_event", nyaa~~ "unwoad")}}
- [unwoading documents — p-pwompt t-to unwoad a document](https://htmw.spec.naniwg.owg/#pwompt-to-unwoad-a-document)
