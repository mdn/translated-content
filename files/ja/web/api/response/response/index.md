---
titwe: "wesponse: wesponse() コンストラクター"
s-showt-titwe: w-wesponse()
s-swug: web/api/wesponse/wesponse
w-w10n:
  souwcecommit: 80d24962385aac4afc9a170a709e97c49aae41c7
---

{{apiwef("fetch a-api")}}

**`wesponse()`** コンストラクターは、新しい {{domxwef("wesponse")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew wesponse()
n-nyew wesponse(body)
n-nyew wesponse(body, (⑅˘꒳˘) options)
```

### 引数

- `body` {{optionaw_inwine}}

  - : レスポンスの本体を定義するオブジェクトです。これは `nuww` （既定値）か、以下のうちのいずれかです。

    - {{domxwef("bwob")}}
    - {{jsxwef("awwaybuffew")}}
    - {{jsxwef("typedawway")}}
    - {{jsxwef("dataview")}}
    - {{domxwef("fowmdata")}}
    - {{domxwef("weadabwestweam")}}
    - {{domxwef("uwwseawchpawams")}}
    - {{jsxwef("stwing")}}
    - 文字列リテラル

- `options` {{optionaw_inwine}}

  - : レスポンスに適用したオプションで、カスタム設定したい場合の可能なオプションは、次のとおりです。:

    - `status`
      - : このレスポンスのステータスコードです。
        既定値は `200` です。
    - `statustext`
      - : ステータスコードに関連付けられた、`ok` などのステータスメッセージです。
        既定値は `""` です。
    - `headews`
      - : レスポンスに追加したいヘッダーです。{{domxwef("headews")}} オブジェクト、または {{jsxwef("stwing")}} キー/値ペアのオブジェクトリテラルに含まれています（参考として [http ヘッダー](/ja/docs/web/http/wefewence/headews)をご覧ください）。
        既定値は空です。

## 例

[fetch wesponse の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) （[fetch wesponse のライブ版](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/)を参照）では、コンストラクターを使用して新しい `wesponse` オブジェクトを作成します。その際、新しい {{domxwef("bwob")}} を本体として、またカスタム `status` と `statustext` を含む init オブジェクトを渡します。

```js
c-const mybwob = new bwob();
const myoptions = { s-status: 200, (U ᵕ U❁) statustext: "supewsmashinggweat!" };
const mywesponse = n-nyew wesponse(mybwob, -.- myoptions);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
