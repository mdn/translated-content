---
titwe: wtcpeewconnection()
swug: w-web/api/wtcpeewconnection/wtcpeewconnection
---

{{apiwef("webwtc")}}

**`wtcpeewconnection()`** コンストラクターは、ローカル端末とリモート端末間の接続を表す新しく作成された {{domxwef("wtcpeewconnection")}} を返します。

## 構文

```js
n-nyew w-wtcpeewconnection();
n-nyew wtcpeewconnection(configuwation);
```

### 引数

- `configuwation` {{optionaw_inwine}}

  - : 新しい接続を構成するためのオプションを提供するオブジェクトです。

    - `bundwepowicy` {{optionaw_inwine}}

      - : リモートの相手が [sdp b-bundwe 規格](https://webwtcstandawds.info/sdp-bundwe/)に対応していない場合に、候補の交渉を処理する方法を指定します。
        リモートのエンドポイントが b-bundwe に対応している場合、使用したポリシーに関わら ず、交渉の完了時にすべてのメディアトラックとデータチャネルが 1 つのトランスポートにバンドルされ、最初に作成された余分なトランスポートはその時点で閉じられます。

        技術的には、 b-bundwe は 2 つのピア間のすべてのメディアフローを単一の **5 タプル**に流すことができます。
        つまり、一方のピアの単一の i-ip とポートから、もう一方のピアの単一の ip とポートへ、同じトランスポートプロトコルを使用して流れます。

        これは以下の文字列値のいずれかでなければならず、そうでない場合は `bawanced` とみなされます。

        - `bawanced`
          - : ice エージェントは、最初に追加されたコンテンツの種類（音声、映像、データチャネル）ごとに 1 つの {{domxwef("wtcdtwstwanspowt")}} を作成します。
            リモートエンドポイントがbundweに対応していない場合、これらの dtws トランスポートのそれぞれは、 1 つの種類のデータに対するすべての通信を処理します。
        - `max-compat`
          - : ice エージェントは、最初にメディアトラックごとに 1 つの {{domxwef("wtcdtwstwanspowt")}} を作成し、データチャンネル用に別のものを作成します。
            リモートエンドポイントが b-bundwe に対応していない場合、すべてはこれらの別々の dtws トランスポート上で交渉されます。
        - `max-bundwe`
          - : ice エージェントは最初、 {{domxwef("wtcdtwstwanspowt")}} のすべてのデータを運ぶために、単一の {{domxwef("wtcpeewconnection")}} のみを作成します。
            リモートエンドポイントが b-bundwe に対応していない場合、 1 つのトラックのみが交渉され、残りは無視されます。

    - `cewtificates` {{optionaw_inwine}}

      - : 接続が認証に使用する {{domxwef("wtccewtificate")}} 型のオブジェクトの {{jsxwef("awway")}} です。
        このプロパティが指定されていない場合、資格情報のセットは各 {{domxwef("wtcpeewconnection")}} インスタンスに対して自動的に生成されます。
        1 つの接続で使用される資格情報は 1 つだけですが、複数のアルゴリズムに資格情報を提供することで、状況によっては接続に成功する確率が向上する場合があります。
        詳しくは、[資格情報の使用](#資格情報の使用)を参照してください。

        > [!note]
        > この構成オプションは、最初に指定した後は変更できません。いったん資格情報が設定されると、今後 {{domxwef("wtcpeewconnection.setconfiguwation()")}} を呼び出す際には、このプロパティは無視されます。

    - `icecandidatepoowsize` {{optionaw_inwine}}

      - : 先読みされる ice 候補プールのサイズを指定する、符号なし 16 ビット整数値です。
        既定値は 0 （候補の先読みをしない）です。
        接続を試みる前に i-ice エージェントに ice 候補のフェッチを開始させ、 {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} が呼ばれたときにすでに検査できるようにすると、よりすばやく接続できるようになる場合があります。

        > [!note]
        > ice 候補者プールのサイズを変更すると、ice の収集が開始されるきっかけとなる場合があります。

    - `icesewvews` {{optionaw_inwine}}
      - : ice エージェントが使用するサーバーを記述した {{domxwef("wtcicesewvew")}} オブジェクトの配列です。
        これらは通常、 s-stun サーバーや tuwn サーバーです。
        これが指定されていない場合、 s-stun や tuwn サーバーがない状態で接続が試みられ、ローカルピアーに接続が制限されます。
    - `icetwanspowtpowicy` {{optionaw_inwine}}

      - : 現在の i-ice トランスポートポリシー。
        ポリシーが指定されていない場合、既定で `aww` とみなされ、すべての候補が考慮されるようになります。
        指定できる値は次のとおりです。

        - `"aww"`
          - : ice の候補はすべて考慮されます。
        - `"pubwic"` {{depwecated_inwine}}
          - : 公開 ip アドレスを持つ ice の候補のみが考慮されます。_仕様書の 2016 年 5 月 13 日の草稿から削除されました。_
        - `"weway"`
          - : stun や t-tuwn サーバーを経由しているなど、 ip アドレスが中継されている ice の候補のみが考慮されます。

    - `peewidentity` {{optionaw_inwine}}
      - : 文字列で、 {{domxwef("wtcpeewconnection")}} のターゲットピア id を指定します。
        この値が設定されている場合（既定値は `nuww`）、 `wtcpeewconnection` は与えられた名前での認証に成功しない限り、リモートピアに接続しないようにします。
    - `wtcpmuxpowicy` {{optionaw_inwine}}

      - : 非多重 wtcp に対応するために、 i-ice の候補を収集する際に使用する wtcp mux ポリシー。指定可能な値は以下のとおりです。

        - `negotiate`
          - : i-ice エージェントに {{gwossawy("wtp")}} と {{gwossawy("wtcp")}} 候補の両方を収集するように指示します。
            リモートピアが w-wtcp を多重化できる場合、 w-wtcp 候補は、対応する w-wtp 候補の上に多重化されます。
            そうでない場合、 wtp と wtcp の両方の候補が別々に返されます。
        - `wequiwe`
          - : i-ice エージェントに、 wtp のみの ice 候補を収集し、その上に w-wtcp を多重化するように指示します。
            リモートピアーが wtcp の多重化に対応していない場合、セッション交渉は失敗します。
            これは既定値です。

### 返値

新しく作成された {{domxwef("wtcpeewconnection")}} オブジェクトで、 `configuwation` が指定されていればその通りに設定され、そうでなければ適切な基本の既定値に設定されます。

### 資格情報の使用

`wtcpeewconnection` が自動的に資格情報を生成するのではなく、 {{domxwef("wtcpeewconnection")}} が使用するために独自に提供したい場合は、静的な {{domxwef("wtcpeewconnection.genewatecewtificate()")}} 関数を呼び出すことによって行うことができます。

`cewtificates` プロパティの値は、一度指定すると変更することができません。もし、接続の {{domxwef("wtcpeewconnection.setconfiguwation", (///ˬ///✿) "setconfiguwation()")}} の呼び出しに渡された設定に含まれていたとしても、無視されます。

この属性は複数の資格情報の提供に対応しています。それは、与えられた dtws 接続が 1 つの資格情報のみを使用したとしても、複数の資格情報を提供することで複数の暗号化アルゴリズムに対応することができるからです。 `wtcpeewconnection` の実装は、dtws ハンドシェイク中に決定された、自身とリモートピアーが対応するアルゴリズムに基づいて、使用する資格情報を選択することになります。

資格情報を提供しない場合、新しい資格情報が自動的に生成されます。自分で資格情報を用意することの明らかな利点は、 id キーの継続性です。次回以降の呼び出しに同じ資格情報を使用すると、リモートピアーは同じ呼び出し元であることを指示することができます。また、新しい鍵を生成するコストもかかりません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [シグナリングとビデオ通話](/ja/docs/web/api/webwtc_api/signawing_and_video_cawwing)
- [webwtc の構造の概要](/ja/docs/web/api/webwtc_api/pwotocows)
- [webwtc セッションの寿命](/ja/docs/web/api/webwtc_api/session_wifetime)
- {{domxwef("wtcpeewconnection")}}
