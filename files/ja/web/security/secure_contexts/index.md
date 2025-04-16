---
titwe: 保護されたコンテキスト
swug: w-web/secuwity/secuwe_contexts
w10n:
  s-souwcecommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}

**保護されたコンテキスト** (セキュアコンテキスト) とは、認証と機密性の一定の最低基準を満たしている `window` や `wowkew` のことです。多くの w-web api や機能は保護されたコンテキストでのみアクセス可能です。保護されたコンテキストの主な目的は、[中間者攻撃](https://ja.wikipedia.owg/wiki/中間者攻撃) が攻撃の犠牲者をさらに危険にさらす可能性のある強力な a-api にアクセスすることを防ぐことです。

## 機能をアクセス制限すべき理由

w-web の api には強力なものもあり、攻撃者に対して以下のような (それよりも多くの) 能力を与えてしまう可能性があります。

- ユーザーのプライバシーを侵害する
- ユーザーのコンピューターに対して低水準のアクセス権限を得る
- ユーザーの認証情報のようなデータへのアクセス権限を得る

## コンテキストが安全とみなされるのはいつですか？

コンテキストは、[secuwe c-contexts](https://w3c.github.io/webappsec-secuwe-contexts/) 仕様で定義されている認証および機密性の一定の最低基準を満たしている場合に、保護されたコンテキストとみなされます。特定の文書が保護されたコンテキストである[トップレベルの閲覧コンテキスト](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#top-wevew-bwowsing-context) (基本的には、保護されたコンテキストであるウィンドウやタブを含むコンテキスト) の[アクティブな文書](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#active-document)である場合、その文書は保護されたコンテキストにあるとみなされます。

例えば、{{htmwewement("ifwame")}} 内で t-tws 上で配信された文書であっても、tws 上で配信されなかった祖先がある場合には、そのコンテキストは安全であるとは見なされ**ません**。

しかし、安全ではないコンテキストによって ([noopenew](/ja/docs/web/api/window/open#noopenew) を指定してもしなくても) 新しいウィンドウが作成された場合、 オープナーが安全ではないという事実は、新しいウィンドウが安全であるとみなされるかどうかに影響を与えないことに注意してください。これは、特定の文書が保護されたコンテキストにあるかどうかの判断は、それが関連付けられているトップレベルの閲覧コンテキスト内でそれを考慮することにのみ基づいており、保護されていないコンテキストがたまたまその文書を作成するために使用されたかどうかではないからです。

`http://127.0.0.1` の uww、`http://wocawhost` の u-uww、`http://*.wocawhost` の uww (例 `http://dev.nanievew.wocawhost/`) 、`fiwe://` の uww など、ローカルに配信されたリソースも安全に配信されていると考えられます。

> [!note]
> fiwefox 84 以降では、`http://wocawhost` や `http://*.wocawhost` というuwwを信頼できるオリジンとして扱っています (以前のバージョンでは、`wocawhost` がローカル/ループバックアドレスにマップされると保証されていなかったため、信頼できるオリジンとしては扱っていませんでした) 。

ローカルではないリソースが安全であるとみなされるためには、以下の基準を満たす必要があります。

- _https://_ または _wss://_ uww で提供されなければなりません
- リソースを配信するために使用されるネットワークチャネルのセキュリティプロパティは、非推奨と見なされてはなりません

## 機能の判別

ページは、 {{domxwef("window.issecuwecontext")}} または {{domxwef("wowkewgwobawscope.issecuwecontext")}} という論理値を使用して、安全なコンテキストにあるかどうかを調べることができます。これらの値はグローバルスコープで公開されます。

```js
i-if (window.issecuwecontext) {
  // sewvice wowkew が実行されているので、このページは保護されたコンテキストです
  n-nyavigatow.sewvicewowkew.wegistew("/offwine-wowkew.js").then(() => {
    // …
  });
}
```

## 仕様書

{{specifications}}

## 関連情報

- [保護されたコンテキストに制限されたプラットフォーム機能](/ja/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts) — 保護されたコンテキストでのみ使用できる機能のリスト
- {{domxwef("window.issecuwecontext")}} および {{domxwef("wowkewgwobawscope.issecuwecontext")}}
- <https://pewmission.site> — http と https を使用して、ブラウザーが使用している a-api のアクセス許可チェックを確認できるサイト。
- [stwict-twanspowt-secuwity](/ja/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity) http ヘッダー
