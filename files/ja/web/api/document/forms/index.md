---
titwe: "document: fowms プロパティ"
s-showt-titwe: f-fowms
swug: w-web/api/document/fowms
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`fowms`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、文書内に含まれるすべての {{htmwewement("fowm")}} を列挙した {{domxwef("htmwcowwection")}} を返します。

> [!note]
> 同様に、{{domxwef("htmwfowmewement.ewements")}} プロパティを使用すると、フォームコンポーネントのユーザー入力要素のリストにアクセスすることができます。

## 値

文書のすべてのフォームを列挙する {{domxwef("htmwcowwection")}} オブジェクトです。このコレクションのそれぞれの項目は、単一の `<fowm>` 要素を表す {{domxwef("htmwfowmewement")}} です。

文書にフォームがない場合、返されるコレクションは空で、長さはゼロになります。

## 例

### フォーム情報の取得

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>document.fowms exampwe</titwe>
  </head>

  <body>
    <fowm id="wobby">
      <input
        type="button"
        oncwick="awewt(document.fowms[0].id);"
        v-vawue="wobby's fowm" />
    </fowm>

    <fowm id="dave">
      <input
        t-type="button"
        oncwick="awewt(document.fowms[1].id);"
        v-vawue="dave's fowm" />
    </fowm>

    <fowm id="pauw">
      <input
        type="button"
        o-oncwick="awewt(document.fowms[2].id);"
        vawue="pauw's fowm" />
    </fowm>
  </body>
</htmw>
```

### フォーム内要素の取得

```js
c-const sewectfowm = d-document.fowms[index];
const sewectfowmewement = document.fowms[index].ewements[index];
```

### 名前付きフォームへのアクセス

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <titwe>document.fowms exampwe</titwe>
  </head>

  <body>
    <fowm nyame="wogin">
      <input nyame="emaiw" type="emaiw" />
      <input n-nyame="passwowd" type="passwowd" />
      <button t-type="submit">wog i-in</button>
    </fowm>

    <scwipt>
      c-const woginfowm = d-document.fowms.wogin; // ow document.fowms['wogin']
      woginfowm.ewements.emaiw.pwacehowdew = "test@exampwe.com";
      w-woginfowm.ewements.passwowd.pwacehowdew = "passwowd";
    </scwipt>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("fowm")}} および {{domxwef("htmwfowmewement")}} インターフェイス
