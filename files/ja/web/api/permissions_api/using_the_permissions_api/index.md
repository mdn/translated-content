---
title: Permissions API の使用
slug: Web/API/Permissions_API/Using_the_Permissions_API
---

{{DefaultAPISidebar("Permissions API")}}{{SeeCompatTable}}

この記事では、W3C の Permissions API を使用するための基本的なガイドを提供します。 これは、現在のコンテキストに起因する API のパーミッションの状態を照会するためのプログラムによる方法を提供します。

## パーミッションを求めるのが面倒

ウェブ上のパーミッションは必要悪であり、そしてそれらは開発者として対処するのはそれほど面白くありませんが、それに立ち向かいましょう。

歴史的には、異なる API は独自のパーミッションを一貫性のない方法で扱います。 例えば、Notifications API はパーミッションの状態の明示的なチェックとパーミッションの要求を許可しますが、Geolocation API はそうではありません（以下に示すように、ユーザーが最初のパーミッションの要求を拒否すると問題を引き起こします）。

[Permissions API](/ja/docs/Web/API/Permissions_API) は、パーミッションに関する限り、開発者がより良いユーザーエクスペリエンスを実装できるようにするためのツールを提供します。 例えば、特定の API を使用するためのパーミッションが付与されているか拒否されているかを照会し、API を使用するためのパーミッションを具体的に要求することができます。

現時点では、API の実装は初期段階にあるため、ブラウザーでのサポートは次のようにかなりむらがあります。

- Chrome 44 以降と Firefox 43 以降でしか見つかりません。
- 現在サポートしている唯一のメソッドは {{domxref("Permissions.query()")}} で、これはパーミッションの状態を問い合わせます。
- Chrome の Permissions API が現在認識している API は、[Geolocation](/ja/docs/Web/API/Geolocation) と Notification の 2 つだけです。 Firefox は [Push](/ja/docs/Web/API/Push_API) と WebMIDI も認識します。

時間が経つにつれて、より多くの機能が追加されます。

## 簡単な例

この記事では、Location Finder という簡単なデモをまとめました。 Geolocation を使用してユーザーの現在地を照会し、それをグーグルマップに表示します。

![英国 Greenfield の地図を表示したスクリーンショット。](location-finder-with-permissions-api.png)

[サンプルをライブで実行する](https://chrisdavidmills.github.io/location-finder-permissions-api/)か、[Github でソースコードを見る](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)ことができます。 コードの大部分は単純で目立たないものです。 以下では Permissions API 関連のコードを見ていきますので、他の部分を調べたい場合はコードを自分で確認してください。

### Permissions API へのアクセス

グローバルな {{domxref("Permissions")}} オブジェクトへのアクセスを許可するために、{{domxref("Navigator.permissions")}} プロパティがブラウザーに追加されました。 現在、このオブジェクトには {{domxref("Permissions.query()")}} しか含まれていませんが、最終的にはパーミッションの照会、要求、および取り消しのためのメソッドが含まれます。 下記参照。

### パーミッションの状態の照会

この例では、Permissions 機能は `handlePermission()` という 1 つの関数によって処理されます。 これは、{{domxref("Permissions.query()")}} を使用してパーミッションの状態を照会することから始まります。 Promise が解決されたときに返される {{domxref("PermissionStatus")}} オブジェクトの {{domxref("PermissionStatus.state", "state")}} プロパティの値に応じて、次のように反応は異なります。

- `"granted"`（付与）
  - : \[Geolocation を有効にする（Enable Geolocation）] ボタンは非表示です。 これは、Geolocation がすでにアクティブになっている場合は必要ないためです。
- `"prompt"`（プロンプト）
  - : \[Geolocation を有効にする] ボタンは非表示です。 これは、ユーザーに Geolocation のパーミッションを付与するように求めるプロンプトが表示される場合は必要ないためです。 {{domxref("Geolocation.getCurrentPosition()")}} 関数を実行し、ユーザーにパーミッションを求めるプロンプトを表示します。 それは、パーミッションが付与されている場合、`revealPosition()` 関数を実行し（地図を表示します）、パーミッションが拒否されている場合、`positionDenied()` 関数を実行します（\[Geolocation を有効にする] ボタンを表示します）。
- `"denied"`（拒否）
  - : \[Geolocation を有効にする] ボタンを表示します（ページが最初に読み込まれたときに、パーミッションの状態がこのオリジンに対して既に拒否に設定されている場合も、このコードにくる必要があります）。

```js
function handlePermission() {
  navigator.permissions.query({name:'geolocation'}).then(function(result) {
    if (result.state == 'granted') {
      report(result.state);
      geoBtn.style.display = 'none';
    } else if (result.state == 'prompt') {
      report(result.state);
      geoBtn.style.display = 'none';
      navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
    } else if (result.state == 'denied') {
      report(result.state);
      geoBtn.style.display = 'inline';
    }
    result.onchange = function() {
      report(result.state);
    }
  });
}

function report(state) {
  console.log('Permission ' + state);
}

handlePermission();
```

### パーミッション記述子

{{domxref("Permissions.query()")}} メソッドはパラメータとして `PermissionDescriptor` ディクショナリを取ります — これはあなたが興味を持っている API の名前を含みます。 いくつかの API は、デフォルトの `PermissionDescriptor` から継承した、追加情報を含んだ、より複雑な `PermissionDescriptor` を持っています。 例えば、`PushPermissionDescriptor` には、[`userVisibleOnly`](/ja/docs/Web/API/PushManager/subscribe#Parameters) が `true` か `false` かを指定する Boolean も含める必要があります。

### パーミッションの取り消し

Firefox 47 以降、{{domxref("Permissions.revoke()")}} メソッドを使用して既存のパーミッションを取り消すことができるようになりました。 これは {{domxref("Permissions.query()")}} メソッドとまったく同じように機能しますが、Promise が正常に解決されると、既存のパーミッションがデフォルトの状態（通常は `prompt`）に戻される点が異なります。 デモで次のコードを見てください。

```js
var revokeBtn = document.querySelector('.revoke');

  ...

revokeBtn.onclick = function() {
  revokePermission();
}

  ...

function revokePermission() {
  navigator.permissions.revoke({name:'geolocation'}).then(function(result) {
    report(result.state);
  });
}
```

> **メモ:** Firefox 51 以降、[Web Applications Security Working Group](https://www.w3.org/2011/webappsec/) で設計が問題になっているため、`revoke()` 関数はデフォルトで無効になっています。 設定 `dom.permissions.revoke.enable` を `true` に設定することで再度有効にすることができます。

### パーミッションの状態の変更への対応

上記のコードには、{{domxref("PermissionStatus")}} オブジェクトにアタッチされた `onchange` イベントハンドラがあることに気付くでしょう。 これにより、関心のある API のパーミッションの状態の変更に対応できるようになります。 現時点では、状態の変化を報告しているだけです。

## まとめと今後の課題

現時点では、これは私たちがすでに持っていたもの以上のものを提供するものではありません。 パーミッションのプロンプトから位置を決して共有しないことを選択した場合（パーミッションを拒否した場合）、ブラウザーのメニューオプションを使用しないとパーミッションのプロンプトに戻ることはできません。

- **Firefox**: \[ツール] > \[ページの情報] > \[サイト別設定] の順にクリックします。 \[位置情報の送信] で \[標準設定を使用する] をチェックします。
- **Chrome**: \[ハンバーガーメニュー] > \[設定] > \[詳細設定] の順にクリックします。 \[プライバシーとセキュリティ] セクションで \[サイトの設定] をクリックします。 表示されたダイアログで、\[位置情報] セクションを探し、\[アクセスする前に確認する] を選択します。 最後に、\[すべてのサイトに保存されている権限とデータを表示する] をクリックして、関心のあるサイトに付与されているパーミッションを削除します。

しかしながら、ブラウザー機能への将来の追加は `request()` メソッドを提供するべきです、それは私たちが好きなときにいつでもプログラム的にパーミッションを要求することを可能にするでしょう。 うまくいけばこれらはすぐに利用可能になるはずです。
