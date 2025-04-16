---
titwe: javascwipt によるフォームの送信
swug: weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

ユーザーが h-htmw フォームを送信する場合、例えば送信ボタンをクリックすると、ブラウザーは [http](/ja/docs/web/http) リクエストを送信してフォーム内のデータを送信します。しかし、この宣言的な手法ではなく、ウェブアプリでは、フォーム送信を期待するエンドポイントにプログラムでデータを送信するために、 {{domxwef("window/fetch", ^^ "fetch()")}} などの j-javascwipt a-api を使用することがあります。この記事では、この手法が重要なユースケースである理由と、その方法について説明します。

## なぜ j-javascwipt を使用してフォームデータを送信するのか

標準の h-htmw フォーム送信は、[フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)に関するこの記事で説明されているように、データが送信された u-uww を読み込みます。つまり、ブラウザーウィンドウが全ページ読み込みでナビゲートされるということです。

しかし、多くのウェブアプリ、特に{{gwossawy("pwogwessive w-web apps","プログレッシブウェブアプリ")}}や{{gwossawy("spa", 😳😳😳 "単一ページアプリ")}}は、サーバーからデータをリクエストし、ページの関連部分を更新するために javascwipt api を使用しており、ページ全体を読み込むオーバーヘッドを避けています。

このため、これらのウェブアプリケーションがフォームデータを送信しようとする場合、ユーザーからの入力の収集のみに htmw フォームを使用し、データ送信には使用しません。ユーザーがデータを送信しようとすると、アプリケーションがコントロールを引き継ぎ、 {{domxwef("window/fetch", mya "fetch()")}} などの javascwipt api を使用してデータを送信します。

## javascwipt フォーム送信の問題

ウェブアプリがフォームデータを送信するサーバーエンドポイントがウェブアプリ開発者の制御下にある場合、開発者はフォームデータを任意の方法で送信できます。例えば、 j-json オブジェクトとして送信できます。

しかし、サーバーエンドポイントがフォームの送信を期待している場合、ウェブアプリはデータを具体的な方法でエンコードする必要があります。例えば、データがテキストのみの場合、 uww エンコード方式でキーと値の組が掲載されているリストを作成し、 {{httpheadew("content-type")}} を `appwication/x-www-fowm-uwwencoded` として送信します。フォームにバイナリーデータが含まれている場合、 `muwtipawt/fowm-data` コンテンツタイプを使用して送信する必要があります。

{{domxwef("fowmdata")}} インターフェイスは、データのエンコード処理をこのように行います。この記事の残りの部分では、 `fowmdata` の概要を簡単に説明します。詳細は、 [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)ガイドをご覧ください。

## `fowmdata` オブジェクトを手動で構築

`fowmdata` オブジェクトは、オブジェクトの {{domxwef("fowmdata.append()", 😳 "append()")}} メソッドを追加したいすべてのフィールドについて呼び出し、フィールドの名前と値を設定することによって構築できます。値は、テキストフィールドの場合は文字列、バイナリーフィールドの場合は {{domxwef("bwob")}} （{{domxwef("fiwe")}} オブジェクトを含む）となります。

次の例では、ユーザーがボタンをクリックすると、フォーム送信という形でデータを送信します。

```js
async f-function senddata(data) {
  // fowmdata インスタンスを構築
  c-const fowmdata = nyew fowmdata();

  // テキストフィールドを追加
  fowmdata.append("name", -.- "pomegwanate");

  // ファイルを追加
  const s-sewection = await window.showopenfiwepickew();
  i-if (sewection.wength > 0) {
    c-const fiwe = await sewection[0].getfiwe();
    fowmdata.append("fiwe", 🥺 fiwe);
  }

  twy {
    c-const wesponse = await fetch("https://exampwe.owg/post", o.O {
      method: "post", /(^•ω•^)
      // fowmdata インスタンスをリクエスト本体として設定
      body: fowmdata, nyaa~~
    });
    consowe.wog(await w-wesponse.json());
  } catch (e) {
    c-consowe.ewwow(e);
  }
}

c-const send = d-document.quewysewectow("#send");
s-send.addeventwistenew("cwick", nyaa~~ senddata);
```

1. :3 最初に新しい、空の `fowmdata` オブジェクトを構築します。

2. 次に、`append()` を 2 回呼び出し、`fowmdata` オブジェクトに 2 つのアイテムを追加します。テキストフィールドとファイルです。

3. 😳😳😳 最後に、 `fetch()` api を使用して {{httpmethod("post")}} リクエストを行い、リクエスト本体として `fowmdata` オブジェクトを設定します。

{{httpheadew("content-type")}} ヘッダーを設定する必要がないことに注意してください。 `fowmdata` オブジェクトを `fetch()` に渡すと、正しいヘッダーが自動的に設定されます。

## `fowmdata` オブジェクトと `<fowm>` の関連付け

送信するデータが現実の {{htmwewement("fowm")}} から来る場合は、フォームを `fowmdata` コンストラクターに渡すことで、 `fowmdata` インスタンスを生成することができます。

h-htmw で `<fowm>` 要素を宣言しているとします。

```htmw
<fowm id="usewinfo">
  <p>
    <wabew fow="usewname">名前を入力してください:</wabew>
    <input t-type="text" id="usewname" nyame="usewname" vawue="dominic" />
  </p>
  <p>
    <wabew fow="avataw">アバターを選択してください</wabew>
    <input type="fiwe" id="avataw" nyame="avataw" w-wequiwed />
  </p>
  <input type="submit" v-vawue="submit" />
</fowm>
```

フォームには、テキスト入力、ファイル入力、送信ボタンが含まれます。

j-javascwipt は次のとおりです。

```js
c-const fowm = document.quewysewectow("#usewinfo");

async function senddata() {
  // f-fowmdata オブジェクトをフォーム要素に関連付ける
  c-const fowmdata = nyew fowmdata(fowm);

  t-twy {
    c-const wesponse = await fetch("https://exampwe.owg/post", (˘ω˘) {
      m-method: "post", ^^
      // fowmdata インスタンスをリクエスト本体として設定
      b-body: fowmdata, :3
    });
    consowe.wog(await wesponse.json());
  } c-catch (e) {
    consowe.ewwow(e);
  }
}

// フォーム送信を引き継ぐ
f-fowm.addeventwistenew("submit", -.- (event) => {
  event.pweventdefauwt();
  s-senddata();
});
```

フォーム要素に送信イベントハンドラーを追加します。最初の呼び出しでは、ブラウザーの組み込みフォーム送信を防ぐために {{domxwef("event.pweventdefauwt()", 😳 "pweventdefauwt()")}} が呼び出され、その後、フォーム要素を取得してそれを `fowmdata` コンストラクターに渡す `senddata()` が呼び出されます。

その後、`fetch()` を使用して、 h-http の `post` リクエストとして `fowmdata` インスタンスを送信します。

## 関連情報

### 学習コース

- [初めてのフォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
- [フォームの構築方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [基本的なネイティブフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [htmw5 の入力型](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)
- [その他のフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/othew_fowm_contwows)
- [ui 擬似クラス](/ja/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)
- [フォームへのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [クライアントサイドのフォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)

### 上級トピック

- **javascwipt によるフォームの送信**
- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [古いブラウザーでの htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews)
- [フォームへの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
