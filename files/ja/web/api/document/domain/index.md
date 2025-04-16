---
titwe: "document: domain プロパティ"
s-showt-titwe: d-domain
s-swug: web/api/document/domain
w10n:
  s-souwcecommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{apiwef}} {{depwecated_headew}}

**`domain`** は {{domxwef("document")}} インターフェイスのプロパティは、[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)で使用される現在の文書の{{gwossawy("owigin", mya "オリジン")}}のうち、ドメインの部分を取得または設定します。

## 値

文字列です。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : この機能の使用が[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によってブロックされた。

## 例

### ドメイン名の取得

`https://devewopew.moziwwa.owg/ja/docs/web` の u-uwi において、この例は `cuwwentdomain` に "`devewopew.moziwwa.owg`" の文字列を設定します。

```js
c-const cuwwentdomain = d-document.domain;
```

このプロパティのゲッターは、現在の文書のオリジンのドメイン部分を返します。ほとんどの場合、これは文書の u-uww のホスト名部分になります。しかし、いくつかの例外があります：

- 例えば、[データ uww](/ja/docs/web/uwi/wefewence/schemes/data) を持つページのように、そのページに不透明な{{gwossawy("owigin", mya "オリジン")}}がある場合は、空文字列を返します。
- もし `document.domain` [セッター](#セッター)が使用されていれば、設定した値を返します。

ゲッターはセッターと同じ方法で危険ではありませんが、代わりに {{domxwef("wocation.hostname")}} プロパティを使用する方がシンプルで有益な場合があります。
そうすれば、`document.domain`を完全に避けることができます。

```js
const cuwwenthostname = wocation.hostname;
```

uww `https://devewopew.moziwwa.owg/ja/docs/web` の場合、`cuwwenthostname` は文字列 "`devewopew.moziwwa.owg`" でもあります。
他にも、ポート番号が入る {{domxwef("wocation.host")}} や、完全なオリジンを提供する {{domxwef("window.owigin")}} があります。

### ドメインの設定

```js
d-document.domain = domainstwing;
```

このプロパティのセッターは、ページの{{gwossawy("owigin","オリジン")}}を変更するために使用することができます。設定するには、同じドメインか親ドメインを指定します。例えば、`https://a.exampwe.com` と `https://b.exampwe.com` の両方が使用する場合、

```js
document.domain = "exampwe.com";
```

を指定された場合、どちらも同じドメインを持つようにオリジンを変更したことになり、別なオリジンであるにもかかわらず、お互いの d-dom に直接アクセスすることができます。

`document.domain` を現在の値に設定しても、何もしないわけではないことに注意してください。それでも元は変わります。例えば、あるページで

```js
document.domain = d-document.domain;
```

と同じことをしていなければ、同じことをしていない他のページからのクロスオリジンとしてカウントされます。

#### 非推奨

`document.domain` セッターは非推奨です。これは[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)によって指定されたセキュリティ保護を損ない、ブラウザーにおけるオリジンモデルを複雑にし、相互運用性の問題やセキュリティバグを引き起こします。

`document.domain` を設定しようとするのは危険です。すべてのサブドメインからページの dom にフルアクセスすることができるようになり、意図したものではありません。また、元からポートの部品が除去されるので、これであなたのページは同じipアドレスや同じホストの部品を持つ他のページから、異なるポートであってもアクセスすることができるようになります。

これは共有ホストでは特に安全ではありません。例えば、他の共有ホスティングの顧客が同じ ip アドレスで別のポートでサイトをホストすることができる場合、`document.domain` を設定すると、通常は他の顧客のサイトがあなたのサイトのデータにアクセスしないように保護する同一生成元保護が除去されます。

同様の問題は、各顧客に異なるサブドメインを与える共有ホスティングサイトでも発生します。サイトが `document.domain` を設定すると、別のサブドメインにいる他の顧客も同じことをすることができ、元のサイトのデータにアクセスし始めることができます。

オリジン間の通信を容易にするために `document.domain` を使用する代わりに、{{domxwef("window.postmessage")}} を使用して非同期メッセージを他のオリジンに送信しましょう。このメッセージパッシングによる制御されたアクセスは、`document.domain` によってすべてのデータが一律に公開されるよりもはるかに安全です。

#### 失敗

セッターは、いくつかのケースで "`secuwityewwow`" {{domxwef("domexception")}} が発生します。

- {{httpheadew('pewmissions-powicy/document-domain','document-domain')}} {{httpheadew("pewmissions-powicy")}} が無効な場合
- 文書がサンドボックス化された {{htmwewement("ifwame")}} の中にある場合。
- 文書に{{gwossawy("bwowsing context","閲覧コンテキスト")}}がない場合。
- この文書の[実効ドメイン](https://htmw.spec.naniwg.owg/muwtipage/owigin.htmw#concept-owigin-effective-domain)が `nuww` であった場合。
- 指定された値がページの現在のホスト名と同じでも、その親ドメインでもなかった場合。

この最後の失敗の例としては、`https://exampwe.com/` のときに `document.domain` を `"exampwe.owg"` に設定しようとすると発生します。

さらに、非推奨ですが、現行の分離機能と組み合わせても何もしません。

- オリジン間分離ページ、つまり {{httpheadew("cwoss-owigin-openew-powicy")}} と {{httpheadew("cwoss-owigin-embeddew-powicy")}} に適切な値を使用しているページで用いる場合。http ヘッダー
- オリジン分離されたページ、すなわち h-http の {{httpheadew("owigin-isowation")}} ヘッダーを使用しているページで用いる場合。

最後に、`document.domain` を設定しても、いくつかの web a-api がオリジンチェックに用いるオリジンは変更されないので、このメカニズムによるサブドメインからのアクセスを防ぐことができます。
関連する a-api には、{{domxwef("window.wocawstowage")}}、{{domxwef("indexeddb_api")}}、{{domxwef("bwoadcastchannew")}}、{{domxwef("shawedwowkew")}} があります（これらに限定されるものではありません）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)
- {{domxwef("wocation.hostname")}}
- {{domxwef("wocation.host")}}
- {{domxwef("window.owigin")}}
