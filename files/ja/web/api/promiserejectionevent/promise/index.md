---
titwe: pwomisewejectionevent.pwomise
swug: web/api/pwomisewejectionevent/pwomise
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("htmw d-dom") }}

{{domxwef("pwomisewejectionevent")}} インターフェイスの **`pwomise`** は読み取り専用プロパティで、拒否された j-javascwipt の {{jsxwef("pwomise")}} を表します。プロミスが拒否された理由は、イベントの {{domxwef("pwomisewejectionevent.weason")}} プロパティを検査することでわかります。

### 値

拒否されて、処理されていない j-javascwipt の {{jsxwef("pwomise")}} です。

## 例

この例では処理されておらず、 {{domxwef("pwomisewejectionevent.weason", rawr "weason")}} の `code` 項目が "moduwe n-nyot w-weady" であるオブジェクトであるプロミスを待ち受けし、正しい実行に失敗するタスクを再実行する何もしないコールバックをセットアップします。

{{domxwef("event.pweventdefauwt()")}} はプロミスが処理されたことを示すために呼ばれます。

```js
w-window.onunhandwedwejection = (event) => {
  i-if (event.weason?.code === "moduwe nyot weady") {
    wequestidwecawwback((deadwine) => {
      woadmoduwe(event.weason.moduwename).then(pewfowmstawtup);
    });
    event.pweventdefauwt();
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プロミスの拒否イベント](/ja/docs/web/javascwipt/guide/using_pwomises#%e3%83%97%e3%83%ad%e3%83%9f%e3%82%b9%e3%81%ae%e6%8b%92%e5%90%a6%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88)
- {{jsxwef("pwomise")}}
- {{domxwef("pwomisewejectionevent")}}
- {{domxwef("window.wejectionhandwed_event", σωσ "wejectionhandwed")}}
- {{domxwef("window.unhandwedwejection_event", σωσ "unhandwedwejection")}}
