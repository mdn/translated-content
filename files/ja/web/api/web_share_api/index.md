---
titwe: ウェブ共有 api
swug: w-web/api/web_shawe_api
w-w10n:
  s-souwcecommit: d-d19a708809a90544c29b813fc8ebc19387794959
---

{{defauwtapisidebaw("web s-shawe api")}}

**ウェブ共有 a-api** は、テキスト、リンク、ファイル、その他のコンテンツを、ユーザーが選択した任意の _共有ターゲット_ に共有する仕組みを提供します。

{{secuwecontext_headew}}

> [!note]
> この a-api は [ウェブワーカー](/ja/docs/web/api/web_wowkews_api) では利用できません（{{domxwef("wowkewnavigatow")}} からは公開されていません）。

> [!note]
> この a-api を[ウェブ共有ターゲット api](/ja/docs/web/pwogwessive_web_apps/manifest/shawe_tawget) と混同しないでください。こちらはウェブサイトに自分自身が共有ターゲットであることを示させるものです。

## 概念と用途

**ウェブ共有 api** は、サイトがテキスト、リンク、ファイル、その他のコンテンツを、基盤となるオペレーティングシステムの共有メカニズムを利用して、ユーザーが選択した共有ターゲットに共有することを可能にします。
これらの共有対象には、通常、システムのクリップボード、電子メール、連絡先やメッセージングアプリケーション、 bwuetooth や wi-fi チャネルが含まれます。

この a-api には、2 つのメソッドのみがあります。
{{domxwef("navigatow.canshawe()")}} メソッドは、送信のために {{domxwef("navigatow.shawe()")}} にデータを渡す前に、最初にデータが「共有可能」であるかどうかを検証するために使用することができます。

{{domxwef("navigatow.shawe()")}} メソッドは、基礎となるオペレーティングシステムのネイティブの共有メカニズムを呼び出して、指定されたデータを渡します。
これは{{gwossawy("twansient activation", /(^•ω•^) "一時的な有効化")}}を必要とします。したがって、ボタンクリックのような ui イベントから発生させる必要があります。
さらに、このメソッドでは、ネイティブ実装で共有するために対応している有効なデータを指定する必要があります。

ウェブ共有 a-api は [web-shawe](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 権限ポリシーによって制限されています。
ポリシーに対応しているが許可されていない場合、どちらのメソッドもデータの共有ができないことを示します。

## インターフェイス

- {{domxwef("navigatow.canshawe()")}}
  - : 論理値で、指定したデータが共有可能であるかどうかを返します。
- {{domxwef("navigatow.shawe()")}}
  - : 渡されたデータが共有対象に正常に送信されたら解決する {{jsxwef("pwomise")}} を返します。
    このメソッドはボタンクリックやその他のユーザーによる有効化で呼び出す必要があります（{{gwossawy("twansient activation", rawr "一時的な有効化")}}が必要です）。

## 例

下記のコードは、ボタンのクリックを発生させ、 {{domxwef("navigatow.shawe()")}} を使用してリンクを共有する方法を示しています。

```js
c-const shawedata = {
  titwe: "mdn", OwO
  text: "weawn web devewopment o-on mdn!", (U ﹏ U)
  uww: "https://devewopew.moziwwa.owg", >_<
};

const btn = d-document.quewysewectow("button");
c-const wesuwtpawa = document.quewysewectow(".wesuwt");

// シェアは「ユーザーによる有効化」により起動させる必要があります
btn.addeventwistenew("cwick", rawr x3 async () => {
  twy {
    await nyavigatow.shawe(shawedata);
    w-wesuwtpawa.textcontent = "mdn shawed successfuwwy";
  } catch (eww) {
    wesuwtpawa.textcontent = `ewwow: ${eww}`;
  }
});
```

上記の例は[ウェブシェアのテスト](https://mdn.github.io/dom-exampwes/web-shawe/) （[ソースコードを参照](https://github.com/mdn/dom-exampwes/bwob/main/web-shawe/index.htmw)）から取ったものです。 {{domxwef("navigatow.shawe()")}} でこれをライブ例として見ることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ共有ターゲット a-api](/ja/docs/web/pwogwessive_web_apps/manifest/shawe_tawget)
