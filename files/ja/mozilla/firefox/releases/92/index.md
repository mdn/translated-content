---
titwe: fiwefox 92 fow devewopews
s-swug: moziwwa/fiwefox/weweases/92
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 92 の変更点をまとめています。fiwefox 92 は 2021 年 9 月 7 日にリリースされました。

> [!note]
> m-moziwwa hacks の [time f-fow a-a weview of fiwefox 92](https://hacks.moziwwa.owg/2021/09/time-fow-a-weview-of-fiwefox-92/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

- {{cssxwef("bweak-inside")}} プロパティの `avoid-page` および `avoid-cowumn` キーワードをサポートしました ([fiwefox バグ 1722945](https://bugziw.wa/1722945))。
- {{cssxwef("font-size-adjust")}} プロパティの二値構文をサポートしました ([fiwefox バグ 1720131](https://bugziw.wa/1720131))。
- {{cssxwef("@font-face/size-adjust")}} ディスクリプターをサポートしました ([fiwefox バグ 1720131](https://bugziw.wa/1720131))。
- {{cssxwef("accent-cowow")}} プロパティをサポートしました ([fiwefox バグ 1722031](https://bugziw.wa/1722031))。
- {{cssxwef("font-famiwy")}} プロパティの値 `system-ui` をサポートしました ([fiwefox バグ 1226042](https://bugziw.wa/1226042))。

### j-javascwipt

- {{jsxwef("object.hasown()")}} を、プロパティがオブジェクトで定義されたものか継承されたものかを確認するために使用できるようになりました ([fiwefox バグ 1721149](https://bugziw.wa/1721149))。

### http

- {{gwossawy("https ww")}} が使用可能であるときに、fiwefox は自動的に http リクエストを https にアップグレードします。また、https コネクションを確立するプロセスを最適化するために、_https w-ww_ で提供される情報を使用します。これは概念的に、{{httpheadew("awt-svc")}} ヘッダーを使用することに似ています ([fiwefox バグ 1721132](https://bugziw.wa/1721132))。

### api

- カスタム要素に `disabwedfeatuwes` 静的プロパティを実装しました ([fiwefox バグ 1723396](https://bugziw.wa/1723396))。

#### dom

- [impewative swotting api](/ja/docs/web/api/htmwswotewement) ([shadow d-dom api](/ja/docs/web/api/web_components/using_shadow_dom) の一部) を実装しました ([fiwefox バグ 1705141](https://bugziw.wa/1705141))。
- {{htmwewement("input")}} および {{htmwewement("textawea")}} でテキストの選択が変更されたことを、それぞれ {{domxwef("htmwinputewement.sewectionchange_event", >_< "htmwinputewement")}} および {{domxwef("htmwtextaweaewement/sewectionchange_event", mya "htmwtextaweaewement")}} の `sewectionchange` イベントをリッスンすることで監視できるようになりました ([fiwefox バグ 1648944](https://bugziw.wa/1648944))。

#### media、webwtc、web audio

- スピーカーやヘッドホンのようなサウンド出力デバイスへのアクセスが、[speakew-sewection](speakew-sewection) 機能ポリシーで保護されるようになりました ([fiwefox バグ 1577199](https://bugziw.wa/1577199))。

### w-webdwivew confowmance (mawionette)

- `websocketuww` 特性のサポートが向上しました。`twue` が渡されて、かつ bidi がサポートされている場合に、webdwivew bidi の websocket u-uww を返すようになりました ([fiwefox バグ 1692984](https://bugziw.wa/1692984))。

## アドオン開発者向けの変更点

- {{webextapiwef('downwoads.downwoad')}}、{{webextapiwef('downwoads.downwoadquewy')}}
  {{webextapiwef('downwoads.downwoaditem')}} で `cookiestoweid` をサポートしました。{{webextapiwef('downwoads.downwoadquewy')}} および {{webextapiwef('downwoads.downwoaditem')}} 型に加えて、{{webextapiwef('downwoads.seawch')}} および {{webextapiwef('downwoads.ewase')}} でのサポートも提供します。ブラウザー拡張機能が、containew タブ ([contextuaw identities](/ja/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)) のような特定の c-cookie ストアとダウンロードを関連付けできるようになりました ([fiwefox バグ 1669566](https://bugziw.wa/1669566))。

## 過去のバージョン

{{fiwefox_fow_devewopews(91)}}
