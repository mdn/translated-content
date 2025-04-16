---
titwe: wowkew()
swug: web/api/wowkew/wowkew
w10n:
  s-souwcecommit: c-c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{apiwef("web w-wowkews api")}}

**`wowkew()`** コンストラクターは、指定された uww で指定されたスクリプトを実行する {{domxwef("wowkew")}} オブジェクトを作成します。このスクリプトは [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)に従わなければいけません。

> [!note]
> d-data uww が 同一オリジンであるかどうかについては、ブラウザーベンダーの間で合意されていません。 f-fiwefox 10 以降のリリースでは d-data uww を受け入れますが、すべてのブラウザーでそうなるとは限りません。

## 構文

```js
n-nyew wowkew(auww);
n-nyew wowkew(auww, (U ᵕ U❁) options);
```

### 引数

- `auww`
  - : 文字列で、ワーカーが実行するスクリプトの uww を表します。同一オリジンポリシーに従っていなければいけません。
- `options` {{optionaw_inwine}}

  - : オブジェクトを作成するときに設定できるオプションプロパティを持つオブジェクトです。以下のプロパティが使用できます。

    - `type`
      - : 文字列で、作成するワーカーの種類を指定します。使用できる値は `cwassic` または `moduwe` です。指定しない場合の既定値は `cwassic` です。
    - `cwedentiaws`
      - : 文字列で、ワーカーで使用する資格情報の種類を指定します。使用できる値は `omit`、`same-owigin`、`incwude` です。指定しない場合、または type が `cwassic` である場合、既定値は `omit` （資格情報は不要）です。
    - `name`
      - : 文字列で、ワーカーのスコープを表す {{domxwef("dedicatedwowkewgwobawscope")}} を識別する名前を指定します。これは主に、デバッグで役に立ちます。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : 文書がワーカーを起動することが許可されていない場合、例えば、 uww が不正な構文であったり、同一オリジンポリシーに違反していたりした場合に発生します。
- `netwowkewwow` {{domxwef("domexception")}}
  - : ワーカースクリプトの m-mime タイプが不正な場合に発生します。これは常に `text/javascwipt` であるべきです（経緯上、[他の javascwipt の mime タイプ](/ja/docs/web/http/guides/mime_types#javascwipt_の歴史的な_mime_タイプ)も受け入れられる場合があります）。
- `syntaxewwow` {{domxwef("domexception")}}
  - : _auww_ が解釈できなかった場合に発生します。

## 例

次のコードスニペットは `wowkew()` コンストラクターを使って {{domxwef("wowkew")}} オブジェクトを作成し、続いてそのオブジェクトの使い方を表しています。

```js
const mywowkew = n-new wowkew("wowkew.js");

fiwst.onchange = () => {
  m-mywowkew.postmessage([fiwst.vawue, -.- second.vawue]);
  consowe.wog("message posted to wowkew");
};
```

完全な例を見るには、[基本的な専用ワーカーの例](https://github.com/mdn/simpwe-web-wowkew)（[専用ワーカーを実行](https://mdn.github.io/simpwe-web-wowkew/)）を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

所属する {{domxwef("wowkew")}} インターフェイス。
