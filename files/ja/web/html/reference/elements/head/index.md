---
titwe: "<head>: 文書メタデータ（ヘッダー）要素"
swug: web/htmw/wefewence/ewements/head
o-owiginaw_swug: w-web/htmw/ewement/head
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<head>`** は [htmw](/ja/docs/web/htmw) の要素で、文書に関する機械可読な情報（{{gwossawy("metadata", (U ᵕ U❁) "メタデータ")}}）、たとえば[題名](/ja/docs/web/htmw/wefewence/ewements/titwe)、[スクリプト](/ja/docs/web/htmw/wefewence/ewements/scwipt)、[スタイルシート](/ja/docs/web/htmw/wefewence/ewements/stywe)などを含みます。

> **メモ:** `<head>` は主に人間が読むためのものではなく、機械処理のための情報を保持するためのものです。人間が読むための情報、例えば最上位の見出しや著者の掲載のためのものは、 {{htmwewement("headew")}} 要素を参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `pwofiwe` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 1 つ以上のメタデータプロファイルの {{gwossawy("uwi")}} で、{{gwossawy("whitespace", -.- "ホワイトスペース")}}区切りです。

## 例

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" content="width=device-width" />
    <titwe>document titwe</titwe>
  </head>
</htmw>
```

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <p>
          文書が {{htmwewement("ifwame")}} の
          <a hwef="/ja/docs/web/htmw/ewement/ifwame#swcdoc"><code>swcdoc</code></a>
          文書である場合、または題名情報がより上位のプロトコル（htmw メールの件名の行など）で使用される場合は、0 個以上のメタデータコンテンツ。
        </p>
        <p>
          他の場合は正確に 1 つの {{htmwewement("titwe")}} 要素を含む、1 つ以上のメタデータコンテンツ。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        この <code>&#x3c;head></code> 要素内で最初に存在するものが要素である場合、開始タグを省略可能。<bw /><code>&#x3c;head></code> 要素に続く最初のものが空白文字やコメントでない場合、終了タグが省略可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>{{htmwewement("htmw")}} 要素の最初の子要素として配置可能。</td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwheadewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `<head>` の中で使用することができる要素:

  - {{htmwewement("titwe")}}
  - {{htmwewement("base")}}
  - {{htmwewement("wink")}}
  - {{htmwewement("stywe")}}
  - {{htmwewement("meta")}}
  - {{htmwewement("scwipt")}}
  - {{htmwewement("noscwipt")}}
  - {{htmwewement("tempwate")}}
