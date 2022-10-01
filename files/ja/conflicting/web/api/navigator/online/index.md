---
title: オンライン・オフラインイベント
slug: conflicting/Web/API/Navigator/onLine
original_slug: Web/API/Navigator/Online_and_offline_events
---

一部のブラウザーは、 [Online/Offline イベント](https://www.whatwg.org/specs/web-apps/current-work/#offline)を [WHATWG Web Applications 1.0 仕様書](https://www.whatwg.org/specs/web-apps/current-work/)に従って実装しています。

### 概要

オフラインに対応した良いウェブアプリケーションを構築するためには、アプリケーションが実際にオフラインになったタイミングを知る必要があります。また、アプリケーションが「オンライン」の状態に復帰したタイミングも知る必要があります。要件を分解すると次のようになります。

1. サーバーとの再同期ができるように、ユーザーがオンラインに戻ったタイミングを知る必要があります。
2. サーバーへのリクエストを後回しにすることができるように、ユーザーがオフラインなったタイミングを知る必要があります。

オンライン／オフラインイベントがこのプロセスを一般化するのに役立ちます。

残念ながら、これらのイベントは完全には信頼できません。より高い信頼性が必要な場合や、 API がブラウザーに実装されていない場合は、サービスワーカーを使用したり [XMLHttpRequest からのレスポンス](https://www.html5rocks.com/en/mobile/workingoffthegrid.html#toc-xml-http-request)を使用するなど、他の兆候を利用してオフラインであるかどうかを検出することができます。

## API

### `navigator.onLine`

[`navigator.onLine`](/ja/docs/Web/API/Navigator/onLine) は、 `true`/`false` の値を保持しているプロパティです (オンラインの場合は `true`、オフラインの場合は `false`)。

このプロパティは、ユーザーが「オフラインモード」に切り替えたとき (Firefox の場合は、ファイル → オフライン作業) に更新されます。さらに、このプロパティは、ブラウザーがネットワークに接続できなくなったときに更新されます。仕様書によれば、次のようになっています。

> `navigator.onLine` 属性はユーザーがリンクを辿ったり、スクリプトが外部のページをリクエストしたりしたときにユーザーエージェントがネットワークで通信できない場合 (またはそのような試みが失敗した場合) は、必ず false を返す必要があります。

Firefox 2 はこのプロパティをブラウザーのオフラインモードが切り替わる度に更新します。 [Firefox 41](/ja/docs/Mozilla/Firefox/Releases/41#miscellaneous) は、 Windows、 Linux、 OS X においてネットワークの接続状態が変化したときにも更新します。

このプロパティは Firefox と Internet Explorer の古いバージョンにも存在しました。 (この仕様はこれらの先行的な実装に基づいています)。従って、今すぐこのプロパティを使い始めることができます。ネットワーク状態の自動判断は Firefox 2 にて実装されました。

### "`online`" および "`offline`" イベント

[Firefox 3](/ja/docs/Mozilla/Firefox/Releases/3) は 2 つの新しいイベントを導入しました。"[`online`](/ja/docs/Web/API/document.ononline)" and "[`offline`](/ja/docs/Web/API/document.onoffline)" です。これらの 2 つのイベントは、ブラウザーのオンラインおよびオフラインモードが切り替わるたびに、各ページの `<body>` に発行されます。加えて、このイベントは `document.body` から `document` へとバブリングし、 `window` までたどり着きます。これらのイベントはキャンセルできません (ユーザーのオンラインモードやオフラインモードへの移行を防ぐことはできません)。

[Firefox 41](/ja/docs/Mozilla/Firefox/Releases/41#miscellaneous) では、 Windows, Linux, OS X においてネットワークの接続状態が変化したことを OS が通知したときに、これらのイベントが発行されます。

これらのイベントに対するリスナーは、いくつかのお馴染みの方法で登録することができます。

- [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を、 `window`, `document`, `document.body` に対して使用します。
- `document` または `document.body` の `.ononline` または `.onoffline` プロパティを JavaScript の `Function` オブジェクトに設定します。(**注意:** `window.ononline` または `window.onoffline` は互換性の理由で動作しません)
- HTML マークアップで `<body>` タグの `ononline="..."` または `onoffline="..."` 属性を指定します。

## 例

イベントが機能しているかどうかを確認するために、[簡単なテストケース](https://bugzilla.mozilla.org/attachment.cgi?id=220609)を用意しました (イベントリスナーを document.body に代入しているため、 Chrome では動作しません)。

こちらが JavaScript 部分です。

```js
window.addEventListener('load', function() {
  var status = document.getElementById("status");
  var log = document.getElementById("log");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();

    log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
```

CSS 部分です。

```css
#status {
  position: fixed;
  width: 100%;
  font: bold 1em sans-serif;
  color: #FFF;
  padding: 0.5em;
}

#log {
  padding: 2.5em 0.5em 0.5em;
  font: 1em sans-serif;
}

.online {
  background: green;
}

.offline {
  background: red;
}
```

対応する HTML です。 XXX When mochitests for this are created, point to those instead and update this example -nickolay

```html
<div id="status"></div>
<div id="log"></div>
<p>This is a test</p>
```

実行例はこちらです。

{{ EmbedLiveSample('Example', '100%', '150') }}

## 注

この API がブラウザに実装されていない場合は、サービスワーカーや [XMLHttpRequest からのレスポンス](http://www.html5rocks.com/en/mobile/workingoffthegrid.html#toc-xml-http-request)を使用するなど、他の兆候を使用してオフラインであるかどうかを検出することができます。

## 参考文献

- [WHATWG Web Applications 1.0 仕様の「Online/Offline イベント」の節](https://www.whatwg.org/specs/web-apps/current-work/#offline)
- [Firefox に実装された online/offline イベントのバグ追跡](https://bugzilla.mozilla.org/show_bug.cgi?id=336359)および[関連バグ](https://bugzilla.mozilla.org/show_bug.cgi?id=336682)
- [簡単なテストケース](https://bugzilla.mozilla.org/attachment.cgi?id=220609)
- [Online/Offline イベントの解説](http://ejohn.org/blog/offline-events/)
