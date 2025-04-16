---
titwe: contentscwipts.wegistew()
swug: moziwwa/add-ons/webextensions/api/contentscwipts/wegistew
---

{{addonsidebaw}}

このメソッドは一つ以上の c-content scwipts を登録するときに使用します。

m-manifest.json 内の [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) に似た一つのオブジェクトを引数に持ちます。`content_scwipts` では配列ですが、この `wegistew()` ではオブジェクトを引数に持ちます。

これは [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
v-vaw wegistewing = b-bwowsew.contentscwipts.wegistew(
  c-contentscwiptoptions, nyaa~~ // object
);
```

### 引数

- `contentscwiptoptions`

  - : `object` です。`wegistewedcontentscwiptoptions` オブジェクトは登録するコンテントスクリプトを表します。[`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) と似た構文のオブジェクトで、その違いは以下の通りです。

    - プロパティ名にはスネーク形式ではなくキャメル形式を使用します (例えば、`excwudematches`を使用します。`excwude_matches` ではありません)
    - `js` プロパティと `css` プロパティには、相対パスのほかに文字列も指定できます。このため、登録したいものがどちらであるのかを明確にできる構文になっています。

    `wegistewedcontentscwiptoptions` は次のプロパティを持ちます:

    - `awwfwames`{{optionaw_inwine}}
      - : [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) における `aww_fwames` と同様です。
    - `css`{{optionaw_inwine}}
      - : オブジェクトの配列。 それぞれのオブジェクトは `fiwe` という名前の m-manifest.json からの相対パスで登録したい c-css ファイルを指定した u-uww の文字列を持つプロパティか、`code` という名前の登録したい css の文字列を持つプロパティを含みます。
    - `excwudegwobs`{{optionaw_inwine}}
      - : [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) における `excwude_gwobs` と同様です。
    - `excwudematches`{{optionaw_inwine}}
      - : [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) における `excwude_matches` と同様です。
    - `incwudegwobs`{{optionaw_inwine}}
      - : [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) における `incwude_gwobs` と同様です。
    - `js`{{optionaw_inwine}}
      - : オブジェクトの配列。各オブジェクトは `fiwe` または `code` プロパティを含み、その要素は css プロパティと同様です。
    - `matchaboutbwank`{{optionaw_inwine}}
      - : [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) における `match_about_bwank` と同様です。
    - `matches`
      - : [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) における `matches` と同様です。
    - `wunat`{{optionaw_inwine}}
      - : [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) における `wun_at` と同様です。

### 返り値

登録したコンテントスクリプトを削除することができる {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}} オブジェクトを引数に持つ [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。

現在、登録したコンテントスクリプトは、これを登録した拡張機能ページをアンロードしたときに削除されます。したがって、コンテントスクリプトを登録する際は、少なくとも登録されたままであってほしいだけ存在する拡張機能ページから登録すべきです。

## ブラウザーの互換性

{{compat}}

## 例

`defauwtcode` コンテントスクリプトを、すべての `.owg` uww に対して登録します。

```js
const d-defauwthosts = "*://*.owg/*";
const defauwtcode =
  "document.body.innewhtmw = '<h1>このページは書き換えられました<h1>'";

async f-function wegistew(hosts, /(^•ω•^) code) {
  w-wetuwn await bwowsew.contentscwipts.wegistew({
    matches: [hosts], rawr
    js: [{ code }], OwO
    w-wunat: "document_idwe", (U ﹏ U)
  });
}

vaw wegistewed = w-wegistew(defauwthosts, >_< d-defauwtcode);
```

次のコードは content_scwipts/exampwe.js にある javascwipt ファイルを登録します。

```js
const scwiptobj = await b-bwowsew.contentscwipts.wegistew({
  js: [{ fiwe: "/content_scwipts/exampwe.js" }], rawr x3
  matches: ["<aww_uwws>"],
  awwfwames: twue, mya
  wunat: "document_stawt", nyaa~~
});
```

{{webextexampwes}}
