---
title: ウェブ共有 API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: d19a708809a90544c29b813fc8ebc19387794959
---

{{DefaultAPISidebar("Web Share API")}}

**ウェブ共有 API** は、テキスト、リンク、ファイル、その他のコンテンツを、ユーザーが選択した任意の _共有ターゲット_ に共有する仕組みを提供します。

{{securecontext_header}}

> [!NOTE]
> この API は [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API) では利用できません（{{domxref("WorkerNavigator")}} からは公開されていません）。

> [!NOTE]
> この API を[ウェブ共有ターゲット API](/ja/docs/Web/Progressive_web_apps/Manifest/share_target) と混同しないでください。こちらはウェブサイトに自分自身が共有ターゲットであることを示させるものです。

## 概念と用途

**ウェブ共有 API** は、サイトがテキスト、リンク、ファイル、その他のコンテンツを、基盤となるオペレーティングシステムの共有メカニズムを利用して、ユーザーが選択した共有ターゲットに共有することを可能にします。
これらの共有対象には、通常、システムのクリップボード、電子メール、連絡先やメッセージングアプリケーション、 Bluetooth や Wi-Fi チャネルが含まれます。

この API には、2 つのメソッドのみがあります。
{{domxref("navigator.canShare()")}} メソッドは、送信のために {{domxref("navigator.share()")}} にデータを渡す前に、最初にデータが「共有可能」であるかどうかを検証するために使用することができます。

{{domxref("navigator.share()")}} メソッドは、基礎となるオペレーティングシステムのネイティブの共有メカニズムを呼び出して、指定されたデータを渡します。
これは{{Glossary("transient activation", "一時的な有効化")}}を必要とします。したがって、ボタンクリックのような UI イベントから発生させる必要があります。
さらに、このメソッドでは、ネイティブ実装で共有するために対応している有効なデータを指定する必要があります。

ウェブ共有 API は [web-share](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) 権限ポリシーによって制限されています。
ポリシーに対応しているが許可されていない場合、どちらのメソッドもデータの共有ができないことを示します。

## インターフェイス

- {{domxref("navigator.canShare()")}}
  - : 論理値で、指定したデータが共有可能であるかどうかを返します。
- {{domxref("navigator.share()")}}
  - : 渡されたデータが共有対象に正常に送信されたら解決する {{jsxref("Promise")}} を返します。
    このメソッドはボタンクリックやその他のユーザーによる有効化で呼び出す必要があります（{{Glossary("transient activation", "一時的な有効化")}}が必要です）。

## 例

下記のコードは、ボタンのクリックを発生させ、 {{domxref("navigator.share()")}} を使用してリンクを共有する方法を示しています。

```js
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// シェアは「ユーザーによる有効化」により起動させる必要があります
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

上記の例は[ウェブシェアのテスト](https://mdn.github.io/dom-examples/web-share/) （[ソースコードを参照](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)）から取ったものです。 {{domxref("navigator.share()")}} でこれをライブ例として見ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ共有ターゲット API](/ja/docs/Web/Progressive_web_apps/Manifest/share_target)
