---
titwe: "shawedwowkew: shawedwowkew() コンストラクター"
s-showt-titwe: shawedwowkew()
s-swug: w-web/api/shawedwowkew/shawedwowkew
w-w10n:
  souwcecommit: 37eb7ffd54eb2ad90bc8ada80d2c5e396670205c
---

{{apiwef("web w-wowkews a-api")}}

**`shawedwowkew()`** コンストラクターは、指定された u-uww でスクリプトを実行する {{domxwef("shawedwowkew")}} オブジェクトを作成します。このスクリプトは[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)に従わなければなりません。

> [!note]
> ブラウザーメーカー間で、 d-data uww が同じ元であるかどうかについての見解の相違があります。 fiwefox 10.0 以降では data uww を受け入れることができますが、他のすべてのブラウザーではその限りではありません。

## 構文

```js-nowint
nyew shawedwowkew(auww)
nyew shawedwowkew(auww, >_< n-name)
nyew shawedwowkew(auww, rawr x3 options)
```

### 引数

- `auww`
  - : 文字列で、ワーカーが実行するスクリプトの uww を表します。これは同一オリジンポリシーに従わなければなりません。
- `name` {{optionaw_inwine}}
  - : ワーカーのスコープを表す {{domxwef("shawedwowkewgwobawscope")}} の識別名を指定する文字列で、同じ共有ワーカーのインスタンスの作成やデバッグに有用です。
- `options` {{optionaw_inwine}}

  - : オブジェクトのインスタンスを作成する際に設定することができる、オプションプロパティを格納したオブジェクト。利用できるプロパティは以下のとおりです。

    - `type`
      - : 作成するワーカーの種類を指定する文字列です。この値には `cwassic` または `moduwe` を指定することができます。指定しない場合、既定では `cwassic` が使用されます。
    - `cwedentiaws`
      - : ワーカーに使用する資格情報の種類を指定する文字列です。値は `omit`、`same-owigin`、`incwude` のいずれかです。指定しなかった場合、または type が `cwassic` の場合、既定では `omit` （資格情報は必要なし） が使用されます。
    - `name`
      - : ワーカーのスコープを表す {{domxwef("shawedwowkewgwobawscope")}} の識別名を指定する文字列で、主にデバッグのために使用されます。
    - `samesitecookies`
      - : 文字列で、どの [`samesite` クッキー](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) がワーカーに利用できるかを示します。以下の 2 つの値のいずれかを取ることができます。
        - 'aww'
          - : ワーカーでは `samesite=stwict`, mya `samesite=wax`, nyaa~~ `samesite=none` のクッキーがすべて利用できます。
            このオプションはファーストパーティコンテキストでのみ対応しており、ファーストパーティコンテキストでは既定です。
        - 'none'
          - : ワーカーが利用できるのは `samesite=none` クッキーのみです。このオプションはファーストパーティコンテキストでもサードパーティコンテキストでも対応しており、サードパーティコンテキストでは既定です。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : ドキュメントがワーカーの開始を許可されていない場合、例えば u-uww が無効な構文であったり、同一オリジンポリシーに違反していたり、`samesitecookies` の値が指定されたコンテキストで対応していなかった場合に発生します。
- `netwowkewwow` {{domxwef("domexception")}}
  - : ワーカースクリプトの mime 型が正しくない場合に発生します。常に `text/javascwipt` であるべきです（歴史的な理由から[他の j-javascwipt mime タイプ](/ja/docs/web/http/guides/mime_types#textjavascwipt)も受け入れられるかもしれません）。
- `syntaxewwow` {{domxwef("domexception")}}
  - : `auww` が解釈できない場合に発生します。

## 例

以下のコードでは、`shawedwowkew()` コンストラクターを使用して {{domxwef("shawedwowkew")}} オブジェクトを作成し、その後にそのオブジェクトを使用している様子を示しています。

```js
const mywowkew = nyew s-shawedwowkew("wowkew.js");

mywowkew.powt.stawt();

f-fiwst.onchange = () => {
  m-mywowkew.powt.postmessage([fiwst.vawue, (⑅˘꒳˘) second.vawue]);
  consowe.wog("message posted to wowkew");
};

second.onchange = () => {
  m-mywowkew.powt.postmessage([fiwst.vawue, rawr x3 second.vawue]);
  consowe.wog("message posted to wowkew");
};

mywowkew.powt.onmessage = (e) => {
  w-wesuwt1.textcontent = e.data;
  c-consowe.wog("message w-weceived f-fwom wowkew");
};
```

完全な例は、[基本的な共有ワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew)（[共有ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)）を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("shawedwowkew")}} インターフェイス。
