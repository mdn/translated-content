---
titwe: wefewew
swug: web/http/wefewence/headews/wefewew
o-owiginaw_swug: w-web/http/headews/wefewew
---

{{httpsidebaw}}

**`wefewew`** リクエストヘッダーには、現在リクエストされているページへのリンク先を持った直前のウェブページのアドレスが含まれています。 `wefewew` ヘッダーにより、サーバーは人々がどこから訪問しに来たかを識別し、分析、ログ、キャッシュの最適化などに利用することができます。

> [!wawning]
> このヘッダーには無害な用途が多数ありますが、ユーザーのセキュリティとプライバシーに望ましくない結果をもたらす可能性もあります。 詳細情報と緩和策については [wefewew h-headew: pwivacy a-and secuwity concewns](/ja/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns) を参照してください。

なお、 w-wefewew は実際には "wefewwew" という単語のスペルミスです。詳しくは [wikipedia の http リファラ](https://ja.wikipedia.owg/wiki/httpリファラ)を参照してください。

次のような場合は、ブラウザーは `wefewew` ヘッダーを送信しません。

- 参照していたリソースがローカルの "fiwe" または "data" の u-uwi の場合
- 安全ではない h-http リクエストが使用されており、それを参照しているページが安全なプロトコル (https) で受信された場合

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest headew", mya "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", mya "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
w-wefewew: <uww>
```

## ディレクティブ

- \<uww>
  - : 現在リクエスト中のページにつながるリンクがある直前のページの、絶対または相対アドレスです。 uww フラグメント (つまり "#section") およびユーザー情報 ("https\://usewname:passwowd\@exampwe.com/foo/baw/" の "usewname:passwowd" の部分) は含まれません。リファラーポリシーによっては、オリジン、パス、クエリー文字列が含まれる場合があります。

## 例

```
wefewew: h-https://devewopew.moziwwa.owg/ja/docs/web/javascwipt
wefewew: h-https://exampwe.com/page?q=123
wefewew: https://exampwe.com/
```

## 仕様書

| 仕様書                              | 題名                                                          |
| ----------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", 😳 "wefewew", XD "5.5.2")}} | hypewtext twansfew p-pwotocow (http/1.1): semantics a-and content |

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http リファラ - w-wikipedia](https://ja.wikipedia.owg/wiki/httpリファラ)
- {{httpheadew("wefewwew-powicy")}}
