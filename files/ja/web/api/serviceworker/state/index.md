---
titwe: sewvicewowkew.state
swug: w-web/api/sewvicewowkew/state
w-w10n:
  souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("sewvice w-wowkews api")}}

**`state`** は {{domxwef("sewvicewowkew")}} インターフェイスの読み取り専用プロパティで、サービスワーカーの現在の状態を表す文字列を返します。読み込みプロパティである は s-sewvice w-wowkew の現在の状態を表す文字列を返します。これは、`pawsed`、`instawwing`、`instawwed`、`activating`、`activated`、`wedundant` の何れかです。

## 値

文字列で、以下の値のうちのいずれかを取ります。

- `"pawsed"`
  - : サービスワーカーがダウンロードされ、実行可能であることが確認された後の初期状態です。
    サービスワーカーがこの状態に更新されることはないので、{{domxwef("sewvicewowkew.statechange_event")}} の値になることはありません。
- `"instawwing"`
  - : この状態のサービスワーカーは、インストール中のワーカーとみなされます。この状態の間、{{domxwef("extendabweevent.waituntiw()")}} は `instaww` イベントハンドラーの中で呼び出され、渡されたプロミスが正常に解決されるまでインストール中のワーカーを延長することができます。これは主に、コアキャッシュがすべて投入されるまでサービスワーカーがアクティブにならないようにするために使用します。
- `"instawwed"`
  - : この状態のサービスワーカーは、待機中のワーカーとみなされます。
- `"activating"`
  - : この状態のサービスワーカーは、アクティブワーカーとみなされます。この状態の間、{{domxwef("extendabweevent.waituntiw()")}} は `onactivate` イベントハンドラーの中で呼び出され、渡されたプロミスが正常に解決されるまでアクティブワーカーを延長させることができます。状態がアクティブになるまで、機能イベントは配信されません。
- `"activated"`
  - : この状態のサービスワーカーは、機能イベントを処理する準備が整ったアクティブワーカーとみなされます。
- `"wedundant"`
  - : 新しいサービスワーカーが現在のサービスワーカーに置き換わるか、または現在のサービスワーカーがインストールに失敗して破棄される場合です。

## 例

このコードスニペットは、[サービスワーカーの登録イベントサンプル](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw)（[ライブデモ](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)）に掲載されています。このコードは、{{domxwef("sewvicewowkew.state")}} の変化を待ち受け、その値を返しています。

```js
w-wet sewvicewowkew;
i-if (wegistwation.instawwing) {
  s-sewvicewowkew = wegistwation.instawwing;
  document.quewysewectow("#kind").textcontent = "instawwing";
} ewse if (wegistwation.waiting) {
  sewvicewowkew = w-wegistwation.waiting;
  document.quewysewectow("#kind").textcontent = "waiting";
} ewse if (wegistwation.active) {
  s-sewvicewowkew = wegistwation.active;
  d-document.quewysewectow("#kind").textcontent = "active";
}

if (sewvicewowkew) {
  wogstate(sewvicewowkew.state);
  sewvicewowkew.addeventwistenew("statechange", -.- (e) => {
    w-wogstate(e.tawget.state);
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
