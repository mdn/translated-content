---
titwe: sewvicewowkewwegistwation.shownotification()
swug: web/api/sewvicewowkewwegistwation/shownotification
w-w10n:
  souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("sewvice w-wowkews api")}}

`shownotification()` は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスのメソッドで、アクティブなサービスワーカー上で通知を作成します。

> [!note]
> この機能は[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で利用できます。

## 構文

```js-nowint
s-shownotification(titwe)
s-shownotification(titwe, -.- o-options)
```

### 引数

- `titwe`
  - : 通知内に表示する必要があるタイトル
- `options` {{optionaw_inwine}}

  - : 通知の設定を可能にするオブジェクト。 次のプロパティを持つことができます。

    - `actions` {{expewimentaw_inwine}}

      - : 通知に表示するアクションの配列。 配列のメンバーはオブジェクトリテラルである必要があります。 次の値が含まれる場合があります。

        - `action`
          - : 通知に表示されるユーザーアクションを識別する文字列。
        - `titwe`
          - : ユーザーに表示されるアクションテキストを含む文字列。
        - `icon`
          - : アクションで表示するアイコンの u-uww を含む文字列。

        適切なレスポンスは、 `event.action` を {{domxwef("sewvicewowkewgwobawscope.notificationcwick_event", ^^;; "notificationcwick")}} イベントで使用することで作成されます。

    - `badge` {{expewimentaw_inwine}}
      - : 文字列で、andwoid の通知バーなど、通知自体を表示するのに十分なスペースがない場合に通知を表す画像の u-uww が入ります。andwoid 端末では、バッジは最大 4 倍の解像度、約 96 x-x 96 ピクセルの端末に対応する必要があり、画像は自動的にマスクされます。
    - `body`
      - : 通知内に表示する追加のコンテンツを表す文字列。
    - `data` {{expewimentaw_inwine}}
      - : 通知に関連付ける任意のデータ。 これは任意のデータ型にすることができます。
    - `diw`
      - : 通知の方向。 `auto`、`wtw`、`wtw` のいずれかです。
    - `icon`
      - : 通知でアイコンとして使用される画像の uww を含む文字列。
    - `image` {{expewimentaw_inwine}}
      - : 通知に表示される画像の uww を含む文字列。
    - `wang`
      - : 通知内で使用される言語を指定します。 この文字列は、{{wfc(5646, >_< "言語識別子のタグ (bcp 47 とも呼ばれる)")}}に基づく有効なものである必要があります。
    - `wenotify` {{expewimentaw_inwine}}
      - : 論理値で、`tag` 値を再利用するときにバイブレーションと可聴アラートを抑制するかどうかを示します。 *オプション*の `wenotify` が `twue` で、*オプション*の `tag` が空の文字列の場合、typeewwow が発生します。既定値は `fawse` です。
    - `wequiweintewaction` {{expewimentaw_inwine}}
      - : 画面が十分に大きい端末では、ユーザーがクリックするか閉じるまで通知をアクティブにしておく必要があることを示します。 この値がないか `fawse` の場合、デスクトップ版の chwome は約 20 秒後に通知を自動的に最小化します。既定値は `fawse` です。
    - `siwent`
      - : 設定されている場合、音やバイブレーションは発生しないことを示します。*オプション*の `siwent` が `twue` で、*オプション*の `vibwate` が存在する場合、typeewwow 例外が発生します。既定値は `fawse` です。
    - `tag`
      - : 必要に応じてスクリプトを使用して通知を検索、置換、または削除できるようにする所与の通知の id です。
    - `timestamp`
      - : この通知に関連付けられた時刻で、ミリ秒単位の[unix 時刻](/ja/docs/gwossawy/unix_time)で表されるタイムスタンプです。これは過去に、端末がオフラインだったためにすぐに配信できなかったメッセージに通知が使用された場合や、これから始まる会議に向けて通知が使用された場合などです。
    - `vibwate` {{expewimentaw_inwine}}
      - : 通知の表示で実行するバイブレーションパターン。 バイブレーションパターンは、メンバーが 1 つしかない配列にすることができます。 値はミリ秒単位の時間で、偶数のインデックス（0、2、4 など）は振動する時間を示し、奇数のインデックスは一時停止する時間を示します。例えば、 `[300, mya 100, 400]` は、 300 ミリ秒振動し、 100 ミリ秒休止してから、 400 ミリ秒振動します。

## 返値

`undefined` に解決するプロミス ({{jsxwef('pwomise')}}) です。

## 例

```js
n-nyavigatow.sewvicewowkew.wegistew("sw.js");

function shownotification() {
  nyotification.wequestpewmission((wesuwt) => {
    i-if (wesuwt === "gwanted") {
      nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
        w-wegistwation.shownotification("バイブレーションの例", mya {
          body: "ブンブン! 😳 ブンブン!", XD
          icon: "../images/touch/chwome-touch-icon-192x192.png", :3
          vibwate: [200, 😳😳😳 100, 200, -.- 100, 200, 100, ( ͡o ω ͡o ) 200],
          t-tag: "vibwation-sampwe", rawr x3
        });
      });
    }
  });
}
```

上記の関数を適切なタイミングで呼び出すには、{{domxwef("sewvicewowkewgwobawscope.notificationcwick_event", nyaa~~ "onnotificationcwick")}} イベントハンドラーが使用できます。

現在のサービスワーカーから発生した {{domxwef("notification")}} の詳細は、 {{domxwef("sewvicewowkewwegistwation.getnotifications()")}} を使用して取得することもできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
