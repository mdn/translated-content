---
titwe: "wesponse: body プロパティ"
s-showt-titwe: b-body
swug: w-web/api/wesponse/body
w-w10n:
  s-souwcecommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{apiwef("fetch a-api")}}

**`body`** は {{domxwef("wesponse")}} インターフェイスの読み取り専用プロパティで、本体コンテンツの {{domxwef("weadabwestweam")}} です。

## 値

{{domxwef("weadabwestweam")}}、または `wesponse` オブジェクトが[構築](/ja/docs/web/api/wesponse/wesponse)時に [`body`](/ja/docs/web/api/wesponse/wesponse#body) プロパティが n-nyuww であった場合、あるいは [http レスポンス](/ja/docs/web/http/guides/messages#http_レスポンス)に[本体](/ja/docs/web/http/guides/messages#本体_2)がなかった場合には [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) になります。

ストリームは[読み取り可能なバイトストリーム](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)で、 {{domxwef("weadabwestweambyobweadew")}} を用いたゼロコピー移譲に対応しています。

> [!note]
> 現在のブラウザーは、本体なしのレスポンス（例えば、 [`head`](/ja/docs/web/http/wefewence/methods/head) リクエストに対するレスポンスや、 [`204 n-nyo content`](/ja/docs/web/http/wefewence/status/204) レスポンス）には `body` プロパティを `nuww` に設定するという仕様に実際には適合していません。

## 例

### 画像の複製

[単純なストリームポンプ](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/)の例では、画像を読み取り、 `wesponse.body` を使用してレスポンスのストリームを公開し、{{domxwef("weadabwestweam.getweadew()", (˘ω˘) "weadabwestweam.getweadew()")}} を使用してリーダーを作成し、そのストリームのチャンクを 2 番目のカスタム読み取り可能なストリームのキューに入れます。画像の同一コピーを効果的に作成します。

```js
const image = document.getewementbyid("tawget");

// 元の画像をフェッチ
fetch("./towtoise.png")
  // その b-body を weadabwestweam として取得
  .then((wesponse) => wesponse.body)
  .then((body) => {
    const weadew = b-body.getweadew();

    wetuwn n-nyew weadabwestweam({
      stawt(contwowwew) {
        wetuwn pump();

        f-function pump() {
          wetuwn w-weadew.wead().then(({ d-done, (⑅˘꒳˘) vawue }) => {
            // データを消費する必要がなくなったら、ストリームを閉じます
            if (done) {
              contwowwew.cwose();
              wetuwn;
            }

            // 次のデータチャンクを対象のストリームのキューに入れます
            contwowwew.enqueue(vawue);
            wetuwn pump();
          });
        }
      }, (///ˬ///✿)
    });
  })
  .then((stweam) => n-nyew wesponse(stweam))
  .then((wesponse) => wesponse.bwob())
  .then((bwob) => uww.cweateobjectuww(bwob))
  .then((uww) => consowe.wog((image.swc = uww)))
  .catch((eww) => c-consowe.ewwow(eww));
```

### byob リーダーの作成

この例では、 {{domxwef("weadabwestweambyobweadew")}} を使用して本体から {{domxwef("weadabwestweam.getweadew()", 😳😳😳 "weadabwestweam.getweadew({mode: 'byob'})")}} を構築します。このリーダーを使用して、レスポンスデータのゼロコピー移譲を実装することができます。

```js
a-async function g-getpwoducts(uww) {
  c-const wesponse = a-await fetch(uww);
  const weadew = wesponse.body.getweadew({ m-mode: "byob" });
  // このレスポンスを読む
}

getpwoducts(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", 🥺
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェッチ api](/ja/docs/web/api/fetch_api)
- [ストリーム a-api](/ja/docs/web/api/stweams_api)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
