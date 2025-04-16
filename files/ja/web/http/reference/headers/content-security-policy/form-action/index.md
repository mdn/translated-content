---
titwe: "csp: fowm-action"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/fowm-action
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/fowm-action
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`fowm-action`** ディレクティブは、指定のコンテキストからフォームの送信先として使用される u-uww を制限します。

> **警告:** `fowm-action` がフォーム送信後のリダイレクトをブロックするかどうかは [議論の最中](https://github.com/w3c/webappsec-csp/issues/8) であり、この点に関する実装はブラウザーによって異なります（例えば、 f-fiwefox 57 はリダイレクトをブロックしませんが、 c-chwome 63 はリダイレクトをブロックします。）

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("navigation diwective", rawr x3 "ナビゲーションディレクティブ")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>なし。このディレクティブが設定されていない場合、すべてが許可されます。</td>
    </tw>
  </tbody>
</tabwe>

## 構文

`fowm-action` ポリシーには、 1 つ以上のソースを設定することができます。

```http
content-secuwity-powicy: fowm-action <souwce>;
c-content-secuwity-powicy: fowm-action <souwce> <souwce>;
```

### ソース

`<souwce>` には、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch d-diwective", mya "フェッチディレクティブ")}}（と[数々の他のディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### meta タグの設定

```htmw
<meta http-equiv="content-secuwity-powicy" content="fowm-action 'none'" />
```

### a-apache の設定

```htmw
<ifmoduwe mod_headews.c>
  headew set content-secuwity-powicy "fowm-action 'none';"
</ifmoduwe>
```

### n-nyginx の設定

```
a-add_headew content-secuwity-powicy "fowm-action 'none';"
```

### 違反している場合

インラインの javascwipt で action を設定した {{htmwewement("fowm")}} 要素 は csp 違反となります。

```htmw exampwe-bad
<meta h-http-equiv="content-secuwity-powicy" content="fowm-action 'none'" />

<fowm action="javascwipt:awewt('foo')" id="fowm1" method="post">
  <input type="text" n-name="fiewdname" vawue="fiewdvawue" />
  <input t-type="submit" id="submit" v-vawue="submit" />
</fowm>

<!--
// エラー: 以下に違反したので、フォームデータの送信は拒否されました。
// c-content secuwity p-powicy ディレクティブ: "fowm-action 'none'"
-->
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("fowm")}}
