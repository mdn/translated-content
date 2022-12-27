---
title: Document.ononline
slug: Web/API/Window/online_event
original_slug: Web/API/Document/ononline
---

{{APIRef("DOM")}}

**`Document.online`** イベントは、ブラウザーがオンラインモードとオフラインモードの間で切り替わったときに、それぞれのページの {{HtmlElement("body")}} で発生します。加えて、イベントは `document.body` から `document` に向けて、 `window` までバブリングします。どちらのイベントもキャンセル不可能です (ユーザーがオンラインになったり、オフラインに移行したりするのを妨げることはできません)。

`window.navigator.onLine` は、ブラウザーがオンラインの場合に真偽値の `true` を返し、明らかにオフラインの場合 (ネットワークから切断された場合) は `false` を返します。 `online` および `offline` イベントはこの属性の値が変化したときに発生します。

> **メモ:** 重要なことですが、このイベントおよび属性は本質的に信頼できません。コンピューターはインターネットアクセスなしでネットワークに接続することがあります。

これらのイベントのリスナーは、おなじみの幾つかの方法で登録することができます。

- {{domxref("EventTarget.addEventListener", "addEventListener")}} を `window`, `document`, `document.body` に使用する
- `document` または `document.body` の `.ononline` または `.onoffline` プロパティに、 JavaScript の `Function` オブジェクトを設定する (**注:** `window.ononline` または `window.onoffline` の使用は互換性の理由から動作しません。)
- HTML マークアップの中で、 `ononline="..."` または `onoffline="..."` 属性を `<body>` タグに指定する。

## 例

実行するとイベントが動作することを確認することができる[単純なテストケース](https://bugzilla.mozilla.org/attachment.cgi?id=220609)があります。

## 関連情報

- [online および offline イベント](/ja/docs/Online_and_offline_events)
- [WHATWG Web App Specification](https://www.whatwg.org/specs/web-apps/current-work/#event-online)
