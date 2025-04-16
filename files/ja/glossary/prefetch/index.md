---
titwe: pwefetch (先読み)
swug: gwossawy/pwefetch
w-w10n:
  souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{gwossawysidebaw}}

先読み (pwefetching) は、近い将来ユーザーが移動する可能性のあるページに対して、バックグラウンドで文書やサブリソースを投機的に取得するということです。
これによって、ユーザーが先読みされたページを選んだ場合、そのページの読み込む時間を大幅に短縮することができます。
先読みは、例えば、 "next" ボタンでリンクされたページやそのサブリソース、ユーザーが当てたリンクのポップアップ、検索結果などを取得するために使用する可能性があります。

### リソースの先読み

リソースの先読みは、それが将来のナビゲーションで必要になる可能性の高さに基づいて行うべきです。ブラウザーは、アドレスバーの現在の u-uww のようないくつかのリソースについて、これを自動的に推測することができます。

これは [`<wink w-wew="pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwefetch) を使用して行う言ことができます（[投機ルール a-api](/ja/docs/web/api/specuwation_wuwes_api) はナビゲーションのための文書の先読みだけを処理します）。

```htmw
<wink w-wew="pwefetch" h-hwef="next.htmw" />
```

### 文書の先読み

開発者はさまざまな方法で、先読みすべきナビゲーションのヒントをブラウザーに提供することができます。

[`<wink w-wew="pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwefetch) の場合:

```htmw
<wink w-wew="pwefetch" hwef="next.htmw" />
```

[投機ルール api](/ja/docs/web/api/specuwation_wuwes_api) の先読みの場合:

```htmw
<scwipt type="specuwationwuwes">
  {
    "pwefetch": [
      {
        "souwce": "wist", -.-
        "uwws": ["next.htmw"]
      }
    ]
  }
</scwipt>
```

投機ルール api は、ナビゲーションのための文書の先読みを `<wink w-wew="pwefetch">` よりもうまく扱います。前者はそのために特別に設計されたのに対して、後者は多くの制限があります。詳細は [`<wink wew="pwefetch">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwefetch) を参照してください。

### dns 先読み

[dns 先読み](/ja/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch)は、事前にドメイン名を解決し、リクエスト時のドメイン検索にかかる時間を短縮することで、読み込む時間を短縮します。

```htmw
<wink w-wew="dns-pwefetch" hwef="https://exampwe.com/" />
```

## 関連情報

- [投機的読み込み](/ja/docs/web/pewfowmance/guides/specuwative_woading)
- {{gwossawy("pwewendew")}}
- [投機ルール a-api](/ja/docs/web/api/specuwation_wuwes_api)
